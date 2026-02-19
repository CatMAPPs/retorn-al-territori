#!/usr/bin/env tsx

/**
 * Insert Validated Figures into Database
 *
 * Takes validated candidate JSON (output of validate-figure-candidates.ts),
 * inserts approved figures into the database, uploads images to Supabase Storage,
 * and generates a SQL migration file as audit trail.
 *
 * Usage:
 *   npx tsx scripts/insert-validated-figures.ts validated.json
 *   npx tsx scripts/insert-validated-figures.ts validated.json --dry-run
 *   npx tsx scripts/insert-validated-figures.ts validated.json --include-review
 *   npx tsx scripts/insert-validated-figures.ts validated.json --skip-existing
 */

import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync } from 'fs';

// Load environment variables
config({ path: '.env' });
config({ path: '.env.local' });

// =====================================================
// CONFIGURATION
// =====================================================

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET_NAME = 'figure-images';
const RATE_LIMIT_MS = 300;
const MAX_RETRIES = 3;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('❌ Missing environment variables');
  console.error('Required: VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false }
});

// =====================================================
// TYPES
// =====================================================

interface ValidatedFigure {
  candidate: {
    name: string;
    aliases?: string[];
    birth_year: number;
    death_year?: number | null;
    hometown: string;
    description: string;
    category: string;
    difficulty: string;
    tags?: string[];
    wikipedia_page: string;
  };
  validation_status: 'valid' | 'needs_review' | 'failed';
  validation_reasons: string[];
  wiki_title?: string;
  wiki_description?: string;
  wiki_birth_year?: number;
  birth_year_confirmed: boolean;
  lat?: number;
  lon?: number;
  coordinates_source?: string;
  coordinates_method?: string;
  image_url?: string;
  duplicate_of?: string;
  duplicate_similarity?: number;
}

interface ValidatedFile {
  metadata: {
    batch_id: string;
    target_category: string;
    validated_at: string;
    summary: {
      total: number;
      valid: number;
      needs_review: number;
      failed: number;
    };
  };
  results: ValidatedFigure[];
}

interface InsertResult {
  name: string;
  status: 'inserted' | 'skipped' | 'failed';
  reason?: string;
  figureId?: string;
}

// =====================================================
// CLI ARGS
// =====================================================

const args = process.argv.slice(2);
const inputFile = args.find(a => !a.startsWith('--'));
const dryRun = args.includes('--dry-run');
const includeReview = args.includes('--include-review');
const skipExisting = !args.includes('--no-skip-existing'); // default ON

// =====================================================
// HELPERS
// =====================================================

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Download image with retries
 */
async function downloadImage(url: string): Promise<ArrayBuffer | null> {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': 'HistoGuesser/1.0 (Educational Game)' }
      });
      if (!response.ok) {
        if (attempt < MAX_RETRIES) await sleep(1000 * attempt);
        continue;
      }
      return await response.arrayBuffer();
    } catch {
      if (attempt < MAX_RETRIES) await sleep(1000 * attempt);
    }
  }
  return null;
}

/**
 * Get file extension from URL
 */
function getExtFromUrl(url: string): string {
  try {
    const pathname = new URL(url).pathname;
    const ext = pathname.split('.').pop()?.toLowerCase();
    if (ext && ['webp', 'jpg', 'jpeg', 'png', 'gif', 'svg'].includes(ext)) {
      return ext === 'jpeg' ? 'jpg' : ext;
    }
  } catch { /* ignore */ }
  return 'jpg';
}

function getMimeType(ext: string): string {
  const map: Record<string, string> = {
    'webp': 'image/webp', 'jpg': 'image/jpeg', 'jpeg': 'image/jpeg',
    'png': 'image/png', 'gif': 'image/gif', 'svg': 'image/svg+xml',
  };
  return map[ext] || 'image/jpeg';
}

/**
 * Check if figure already exists in DB by name
 */
async function figureExists(name: string): Promise<boolean> {
  const { data } = await supabase
    .from('figures')
    .select('id')
    .ilike('name', name)
    .limit(1);
  return (data?.length || 0) > 0;
}

/**
 * Escape SQL string
 */
function sqlEscape(str: string): string {
  return str.replace(/'/g, "''");
}

// =====================================================
// MAIN
// =====================================================

async function main() {
  if (!inputFile) {
    console.log('📥 HistoGuesser Validated Figure Inserter');
    console.log('=========================================');
    console.log('');
    console.log('Usage:');
    console.log('  npx tsx scripts/insert-validated-figures.ts <validated.json>');
    console.log('  npx tsx scripts/insert-validated-figures.ts <validated.json> --dry-run');
    console.log('  npx tsx scripts/insert-validated-figures.ts <validated.json> --include-review');
    console.log('  npx tsx scripts/insert-validated-figures.ts <validated.json> --no-skip-existing');
    console.log('');
    console.log('Options:');
    console.log('  --dry-run           Preview without making changes');
    console.log('  --include-review    Also insert needs_review figures (default: valid only)');
    console.log('  --no-skip-existing  Error on existing figures instead of skipping');
    process.exit(0);
  }

  console.log('📥 HistoGuesser Validated Figure Inserter');
  console.log('=========================================');
  if (dryRun) console.log('🔍 DRY RUN MODE\n');

  // Load validated file
  let validatedData: ValidatedFile;
  try {
    const raw = readFileSync(inputFile, 'utf-8');
    validatedData = JSON.parse(raw);
  } catch (error: any) {
    console.error(`❌ Failed to read input file: ${error.message}`);
    process.exit(1);
  }

  const { metadata, results } = validatedData;
  console.log(`📋 Batch: ${metadata.batch_id}`);
  console.log(`📁 Category: ${metadata.target_category}`);
  console.log(`📦 Total results: ${results.length}`);
  console.log(`✅ Valid: ${metadata.summary.valid}`);
  console.log(`⚠️ Needs review: ${metadata.summary.needs_review}`);
  console.log(`❌ Failed: ${metadata.summary.failed}\n`);

  // Filter to insertable figures
  const eligibleStatuses = ['valid'];
  if (includeReview) eligibleStatuses.push('needs_review');

  const toInsert = results.filter(r => eligibleStatuses.includes(r.validation_status));
  console.log(`🎯 Figures to insert: ${toInsert.length} (statuses: ${eligibleStatuses.join(', ')})\n`);

  if (toInsert.length === 0) {
    console.log('❌ No eligible figures to insert');
    process.exit(0);
  }

  // Filter out those without coordinates
  const withCoords = toInsert.filter(r => r.lat != null && r.lon != null);
  const withoutCoords = toInsert.filter(r => r.lat == null || r.lon == null);
  if (withoutCoords.length > 0) {
    console.log(`⚠️ ${withoutCoords.length} figures without coordinates will be skipped:`);
    for (const fig of withoutCoords) {
      console.log(`   - ${fig.candidate.name}`);
    }
    console.log('');
  }

  // Process each figure
  const insertResults: InsertResult[] = [];
  const sqlStatements: string[] = [];
  let processed = 0;

  for (const validated of withCoords) {
    processed++;
    const { candidate } = validated;
    console.log(`[${processed}/${withCoords.length}] ${candidate.name}`);

    // Check if already exists
    if (skipExisting) {
      const exists = await figureExists(candidate.name);
      if (exists) {
        console.log('   ⏭️ Already exists — skipping');
        insertResults.push({ name: candidate.name, status: 'skipped', reason: 'already_exists' });
        continue;
      }
    }

    // Ensure tags start with category
    const tags = candidate.tags || [candidate.category];
    if (tags[0] !== candidate.category) {
      tags.unshift(candidate.category);
    }

    if (dryRun) {
      console.log(`   🔍 Would insert: ${candidate.name} (${candidate.category})`);
      console.log(`   🌍 Coordinates: ${validated.lat}, ${validated.lon}`);
      console.log(`   🖼️ Image: ${validated.image_url ? 'yes' : 'no'}`);
      insertResults.push({ name: candidate.name, status: 'skipped', reason: 'dry_run' });
      continue;
    }

    // Build images array
    const images: any[] = [];

    // Try to upload image to storage
    let selfHostedUrl: string | null = null;
    if (validated.image_url) {
      console.log('   📥 Downloading image...');
      const imageBuffer = await downloadImage(validated.image_url);
      if (imageBuffer) {
        // We'll insert first to get the UUID, then upload
        console.log('   📤 Image downloaded, will upload after insert...');
      }
    }

    // Insert figure
    const figureData = {
      name: candidate.name,
      aliases: candidate.aliases || [],
      birth_year: candidate.birth_year,
      death_year: candidate.death_year ?? null,
      active_year: null,
      hometown: candidate.hometown,
      lat: validated.lat!,
      lon: validated.lon!,
      description: candidate.description,
      tags,
      images: [], // will update after image upload
      research_stage: 'validated',
    };

    const { data: inserted, error: insertError } = await supabase
      .from('figures')
      .insert(figureData)
      .select('id')
      .single();

    if (insertError) {
      console.error(`   ❌ Insert failed: ${insertError.message}`);
      insertResults.push({ name: candidate.name, status: 'failed', reason: insertError.message });
      await sleep(RATE_LIMIT_MS);
      continue;
    }

    const figureId = inserted.id;
    console.log(`   ✅ Inserted with ID: ${figureId}`);

    // Upload image to storage and update figure
    if (validated.image_url) {
      const imageBuffer = await downloadImage(validated.image_url);
      if (imageBuffer) {
        const ext = getExtFromUrl(validated.image_url);
        const storagePath = `${figureId}.${ext}`;

        const { error: uploadError } = await supabase.storage
          .from(BUCKET_NAME)
          .upload(storagePath, imageBuffer, {
            contentType: getMimeType(ext),
            upsert: true,
          });

        if (!uploadError) {
          const { data: urlData } = supabase.storage.from(BUCKET_NAME).getPublicUrl(storagePath);
          selfHostedUrl = urlData.publicUrl;
          console.log(`   📤 Image uploaded to storage`);
        } else {
          console.log(`   ⚠️ Image upload failed: ${uploadError.message}`);
        }
      }
    }

    // Build final images array
    if (selfHostedUrl) {
      images.push({
        url: selfHostedUrl,
        source: 'self_hosted',
        license: 'Public Domain',
        credit: `Wikipedia - ${candidate.wikipedia_page}`,
        source_url: `https://en.wikipedia.org/wiki/${candidate.wikipedia_page}`,
        priority: 1,
        status: 'active',
      });
    }

    if (validated.image_url) {
      images.push({
        url: validated.image_url,
        source: 'wikimedia',
        license: 'Public Domain',
        credit: `Wikipedia - ${candidate.wikipedia_page}`,
        source_url: `https://en.wikipedia.org/wiki/${candidate.wikipedia_page}`,
        priority: selfHostedUrl ? 2 : 1,
        status: selfHostedUrl ? 'fallback' : 'active',
      });
    }

    // Update images if we have any
    if (images.length > 0) {
      const { error: updateError } = await supabase
        .from('figures')
        .update({ images })
        .eq('id', figureId);

      if (updateError) {
        console.log(`   ⚠️ Image update failed: ${updateError.message}`);
      }
    }

    // Generate SQL for audit trail
    sqlStatements.push(generateInsertSQL(figureId, figureData, images));

    insertResults.push({
      name: candidate.name,
      status: 'inserted',
      figureId,
    });

    await sleep(RATE_LIMIT_MS);

    // Progress every 10
    if (processed % 10 === 0) {
      const ins = insertResults.filter(r => r.status === 'inserted').length;
      const skip = insertResults.filter(r => r.status === 'skipped').length;
      const fail = insertResults.filter(r => r.status === 'failed').length;
      console.log(`\n📊 Progress: ${processed}/${withCoords.length} | ✅ ${ins} | ⏭️ ${skip} | ❌ ${fail}\n`);
    }
  }

  // =====================================================
  // GENERATE SQL MIGRATION
  // =====================================================
  if (sqlStatements.length > 0 && !dryRun) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 16);
    const migrationFilename = `supabase/migrations/013_insert_figures_${metadata.batch_id}_${timestamp}.sql`;

    const sqlContent = [
      `-- Auto-generated migration: ${metadata.batch_id}`,
      `-- Generated at: ${new Date().toISOString()}`,
      `-- Figures inserted: ${sqlStatements.length}`,
      `-- Category: ${metadata.target_category}`,
      '',
      ...sqlStatements,
    ].join('\n');

    writeFileSync(migrationFilename, sqlContent);
    console.log(`\n💾 SQL migration saved: ${migrationFilename}`);
  }

  // =====================================================
  // SUMMARY
  // =====================================================
  console.log('\n' + '='.repeat(50));
  console.log('📊 INSERTION SUMMARY');
  console.log('='.repeat(50));

  const inserted = insertResults.filter(r => r.status === 'inserted');
  const skipped = insertResults.filter(r => r.status === 'skipped');
  const failed = insertResults.filter(r => r.status === 'failed');

  console.log(`✅ Inserted: ${inserted.length}`);
  console.log(`⏭️ Skipped:  ${skipped.length}`);
  console.log(`❌ Failed:   ${failed.length}`);
  console.log(`📦 Total:    ${insertResults.length}`);

  // Category breakdown
  if (inserted.length > 0) {
    console.log('\nCategory breakdown of inserted figures:');
    const byCat: Record<string, number> = {};
    for (const r of inserted) {
      const fig = withCoords.find(v => v.candidate.name === r.name);
      const cat = fig?.candidate.category || 'unknown';
      byCat[cat] = (byCat[cat] || 0) + 1;
    }
    for (const [cat, count] of Object.entries(byCat).sort()) {
      console.log(`   ${cat}: ${count}`);
    }
  }

  if (failed.length > 0) {
    console.log('\n❌ Failed figures:');
    for (const f of failed) {
      console.log(`   - ${f.name}: ${f.reason}`);
    }
  }
}

/**
 * Generate INSERT SQL for audit/migration trail
 */
function generateInsertSQL(
  figureId: string,
  data: any,
  images: any[]
): string {
  const imagesJson = JSON.stringify(images).replace(/'/g, "''");

  return `
INSERT INTO figures (id, name, aliases, images, birth_year, death_year, active_year, hometown, lat, lon, description, tags, research_stage)
VALUES (
  '${figureId}',
  '${sqlEscape(data.name)}',
  ARRAY[${(data.aliases || []).map((a: string) => `'${sqlEscape(a)}'`).join(', ')}],
  '${imagesJson}'::jsonb,
  ${data.birth_year},
  ${data.death_year !== null ? data.death_year : 'NULL'},
  NULL,
  '${sqlEscape(data.hometown)}',
  ${data.lat},
  ${data.lon},
  '${sqlEscape(data.description)}',
  ARRAY[${(data.tags || []).map((t: string) => `'${sqlEscape(t)}'`).join(', ')}],
  'validated'
)
ON CONFLICT (id) DO NOTHING;
`;
}

main().catch(err => {
  console.error('❌ Script failed:', err);
  process.exit(1);
});
