#!/usr/bin/env tsx

/**
 * Upload Figure Images to Supabase Storage
 *
 * Downloads primary images from Wikipedia/external URLs and uploads them
 * to Supabase Storage (figure-images bucket). Updates each figure's images
 * JSONB array with self-hosted URL as priority 1 and original as fallback.
 *
 * Usage:
 *   npx tsx scripts/upload-figure-images.ts
 *   npx tsx scripts/upload-figure-images.ts --dry-run
 *   npx tsx scripts/upload-figure-images.ts --figure-id <uuid>
 *   npx tsx scripts/upload-figure-images.ts --skip-existing
 */

import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Load environment variables
config({ path: '.env' });
config({ path: '.env.local' });

// =====================================================
// CONFIGURATION
// =====================================================

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET_NAME = 'figure-images';
const RATE_LIMIT_MS = 1000;
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 2000;

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

interface FigureImage {
  url: string;
  license: string;
  credit: string;
  source_url: string;
  priority: number;
  status: 'active' | 'fallback' | 'broken';
  source?: 'self_hosted' | 'wikimedia';
}

interface FigureRow {
  id: string;
  name: string;
  images: FigureImage[];
}

interface UploadResult {
  figureId: string;
  figureName: string;
  status: 'uploaded' | 'skipped' | 'failed';
  reason?: string;
  selfHostedUrl?: string;
}

// =====================================================
// CLI ARGS
// =====================================================

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const skipExisting = args.includes('--skip-existing');
const figureIdFlag = args.indexOf('--figure-id');
const singleFigureId = figureIdFlag !== -1 ? args[figureIdFlag + 1] : null;

// =====================================================
// HELPERS
// =====================================================

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getFileExtension(url: string, contentType?: string): string {
  // Try content-type first
  if (contentType) {
    const map: Record<string, string> = {
      'image/webp': 'webp',
      'image/jpeg': 'jpg',
      'image/png': 'png',
      'image/gif': 'gif',
      'image/svg+xml': 'svg',
    };
    for (const [mime, ext] of Object.entries(map)) {
      if (contentType.includes(mime)) return ext;
    }
  }

  // Fall back to URL extension
  try {
    const pathname = new URL(url).pathname;
    const ext = pathname.split('.').pop()?.toLowerCase();
    if (ext && ['webp', 'jpg', 'jpeg', 'png', 'gif', 'svg'].includes(ext)) {
      return ext === 'jpeg' ? 'jpg' : ext;
    }
  } catch { /* ignore */ }

  return 'jpg'; // default
}

function getMimeType(ext: string): string {
  const map: Record<string, string> = {
    'webp': 'image/webp',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
  };
  return map[ext] || 'image/jpeg';
}

/**
 * Download image with retries
 */
async function downloadImage(url: string): Promise<{ buffer: ArrayBuffer; contentType: string } | null> {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'HistoGuesser/1.0 (https://github.com/HistoGuesser; educational geography game)',
          'Accept': 'image/*'
        }
      });

      if (response.status === 429) {
        const retryAfter = parseInt(response.headers.get('retry-after') || '5', 10);
        const waitMs = Math.max(retryAfter * 1000, RETRY_DELAY_MS * attempt * 2);
        console.log(`   ⚠️ Attempt ${attempt}: HTTP 429 — waiting ${waitMs / 1000}s`);
        if (attempt < MAX_RETRIES) await sleep(waitMs);
        continue;
      }

      if (!response.ok) {
        console.log(`   ⚠️ Attempt ${attempt}: HTTP ${response.status}`);
        if (attempt < MAX_RETRIES) await sleep(RETRY_DELAY_MS * attempt);
        continue;
      }

      const contentType = response.headers.get('content-type') || '';
      const buffer = await response.arrayBuffer();
      return { buffer, contentType };
    } catch (error: any) {
      console.log(`   ⚠️ Attempt ${attempt}: ${error.message}`);
      if (attempt < MAX_RETRIES) await sleep(RETRY_DELAY_MS * attempt);
    }
  }
  return null;
}

/**
 * Check if a figure already has a self-hosted image
 */
function hasSelfHostedImage(images: FigureImage[]): boolean {
  return images.some(img => img.source === 'self_hosted' && img.status === 'active');
}

/**
 * Upload image to Supabase Storage
 */
async function uploadToStorage(
  figureId: string,
  imageBuffer: ArrayBuffer,
  ext: string
): Promise<string | null> {
  const storagePath = `${figureId}.${ext}`;
  const mimeType = getMimeType(ext);

  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(storagePath, imageBuffer, {
      contentType: mimeType,
      upsert: true // overwrite if exists
    });

  if (error) {
    console.error(`   ❌ Storage upload failed: ${error.message}`);
    return null;
  }

  // Construct public URL
  const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(storagePath);
  return data.publicUrl;
}

/**
 * Build updated images array with self-hosted as priority 1
 */
function buildUpdatedImages(
  existingImages: FigureImage[],
  selfHostedUrl: string,
  originalImage: FigureImage
): FigureImage[] {
  const newImages: FigureImage[] = [];

  // Self-hosted image as priority 1
  newImages.push({
    url: selfHostedUrl,
    source: 'self_hosted',
    license: originalImage.license || 'Public Domain',
    credit: originalImage.credit || '',
    source_url: originalImage.source_url || originalImage.url,
    priority: 1,
    status: 'active',
  });

  // Demote existing images as fallbacks
  for (const img of existingImages) {
    // Skip if this is an old self-hosted entry
    if (img.source === 'self_hosted') continue;

    newImages.push({
      ...img,
      source: img.source || 'wikimedia',
      priority: newImages.length + 1,
      status: 'fallback',
    });
  }

  return newImages;
}

// =====================================================
// MAIN
// =====================================================

async function main() {
  console.log('🖼️  Upload Figure Images to Supabase Storage');
  console.log('=============================================');
  if (dryRun) console.log('🔍 DRY RUN MODE — no changes will be made\n');
  if (skipExisting) console.log('⏭️  Skipping figures with existing self-hosted images\n');
  if (singleFigureId) console.log(`🎯 Processing single figure: ${singleFigureId}\n`);

  // Fetch figures
  let query = supabase.from('figures').select('id, name, images').order('name');
  if (singleFigureId) {
    query = query.eq('id', singleFigureId);
  }

  const { data: figures, error } = await query;
  if (error) {
    console.error('❌ Failed to fetch figures:', error.message);
    process.exit(1);
  }

  if (!figures || figures.length === 0) {
    console.log('❌ No figures found');
    process.exit(0);
  }

  console.log(`📦 Found ${figures.length} figures to process\n`);

  const results: UploadResult[] = [];
  let processed = 0;

  for (const figure of figures as FigureRow[]) {
    processed++;
    console.log(`[${processed}/${figures.length}] ${figure.name}`);

    const images = figure.images || [];

    // Skip if no images
    if (images.length === 0) {
      console.log('   ⚠️ No images — skipping');
      results.push({ figureId: figure.id, figureName: figure.name, status: 'skipped', reason: 'no_images' });
      continue;
    }

    // Skip if already has self-hosted
    if (skipExisting && hasSelfHostedImage(images)) {
      console.log('   ⏭️ Already has self-hosted image — skipping');
      results.push({ figureId: figure.id, figureName: figure.name, status: 'skipped', reason: 'already_self_hosted' });
      continue;
    }

    // Get primary image URL
    const primaryImage = images.sort((a, b) => (a.priority || 1) - (b.priority || 1))[0];
    if (!primaryImage?.url) {
      console.log('   ⚠️ No valid image URL — skipping');
      results.push({ figureId: figure.id, figureName: figure.name, status: 'skipped', reason: 'no_url' });
      continue;
    }

    console.log(`   📥 Downloading: ${primaryImage.url.substring(0, 80)}...`);

    if (dryRun) {
      console.log('   🔍 Would download + upload + update DB');
      results.push({ figureId: figure.id, figureName: figure.name, status: 'skipped', reason: 'dry_run' });
      await sleep(50);
      continue;
    }

    // Download
    const downloaded = await downloadImage(primaryImage.url);
    if (!downloaded) {
      console.log('   ❌ Download failed after retries');
      results.push({ figureId: figure.id, figureName: figure.name, status: 'failed', reason: 'download_failed' });
      await sleep(RATE_LIMIT_MS);
      continue;
    }

    // Determine extension
    const ext = getFileExtension(primaryImage.url, downloaded.contentType);
    console.log(`   📤 Uploading as ${figure.id}.${ext}`);

    // Upload to storage
    const selfHostedUrl = await uploadToStorage(figure.id, downloaded.buffer, ext);
    if (!selfHostedUrl) {
      results.push({ figureId: figure.id, figureName: figure.name, status: 'failed', reason: 'upload_failed' });
      await sleep(RATE_LIMIT_MS);
      continue;
    }

    // Build updated images array
    const updatedImages = buildUpdatedImages(images, selfHostedUrl, primaryImage);

    // Update figure in DB
    const { error: updateError } = await supabase
      .from('figures')
      .update({ images: updatedImages })
      .eq('id', figure.id);

    if (updateError) {
      console.error(`   ❌ DB update failed: ${updateError.message}`);
      results.push({ figureId: figure.id, figureName: figure.name, status: 'failed', reason: 'db_update_failed' });
    } else {
      console.log(`   ✅ Self-hosted image active at priority 1`);
      results.push({ figureId: figure.id, figureName: figure.name, status: 'uploaded', selfHostedUrl });
    }

    // Rate limit
    await sleep(RATE_LIMIT_MS);

    // Progress logging every 10 figures
    if (processed % 10 === 0) {
      const uploaded = results.filter(r => r.status === 'uploaded').length;
      const failed = results.filter(r => r.status === 'failed').length;
      console.log(`\n📊 Progress: ${processed}/${figures.length} | ✅ ${uploaded} uploaded | ❌ ${failed} failed\n`);
    }
  }

  // =====================================================
  // SUMMARY
  // =====================================================
  console.log('\n' + '='.repeat(50));
  console.log('📊 UPLOAD SUMMARY');
  console.log('='.repeat(50));

  const uploaded = results.filter(r => r.status === 'uploaded');
  const skipped = results.filter(r => r.status === 'skipped');
  const failed = results.filter(r => r.status === 'failed');

  console.log(`✅ Uploaded: ${uploaded.length}`);
  console.log(`⏭️ Skipped:  ${skipped.length}`);
  console.log(`❌ Failed:   ${failed.length}`);
  console.log(`📦 Total:    ${results.length}`);

  if (failed.length > 0) {
    console.log('\n❌ Failed figures:');
    for (const f of failed) {
      console.log(`   - ${f.figureName} (${f.figureId}): ${f.reason}`);
    }
  }

  if (skipped.length > 0 && !dryRun) {
    const reasons = skipped.reduce((acc, s) => {
      acc[s.reason || 'unknown'] = (acc[s.reason || 'unknown'] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    console.log('\n⏭️ Skip reasons:');
    for (const [reason, count] of Object.entries(reasons)) {
      console.log(`   - ${reason}: ${count}`);
    }
  }
}

main().catch(err => {
  console.error('❌ Script failed:', err);
  process.exit(1);
});
