#!/usr/bin/env tsx

/**
 * Validate & Enrich Figure Candidates via Wikipedia API
 *
 * Takes AI-generated candidate JSON, validates each figure against Wikipedia,
 * extracts coordinates from birthplace pages, detects duplicates, and discovers images.
 *
 * Usage:
 *   npx tsx scripts/validate-figure-candidates.ts candidates.json
 *   npx tsx scripts/validate-figure-candidates.ts candidates.json --output validated.json
 *   npx tsx scripts/validate-figure-candidates.ts candidates.json --skip-images
 */

import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync } from 'fs';
import { fuzzyMatch } from '../src/lib/matching/fuzzyMatch';

// Load environment variables
config({ path: '.env' });
config({ path: '.env.local' });

// =====================================================
// CONFIGURATION
// =====================================================

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
const WIKI_API_BASE = 'https://en.wikipedia.org/api/rest_v1';
const WIKI_ACTION_API = 'https://en.wikipedia.org/w/api.php';
const RATE_LIMIT_MS = 300;
const DUPLICATE_THRESHOLD = 0.85;
const BIRTH_YEAR_TOLERANCE = 5;
const USER_AGENT = 'HistoGuesser/1.0 (Educational Game)';

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('❌ Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false }
});

// =====================================================
// TYPES
// =====================================================

interface Candidate {
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
}

interface CandidateFile {
  metadata: {
    generated_at: string;
    batch_id: string;
    target_category: string;
    notes?: string;
  };
  candidates: Candidate[];
}

interface ValidatedFigure {
  // Original candidate data
  candidate: Candidate;

  // Validation results
  validation_status: 'valid' | 'needs_review' | 'failed';
  validation_reasons: string[];

  // Enriched data from Wikipedia
  wiki_title?: string;
  wiki_description?: string;
  wiki_birth_year?: number;
  birth_year_confirmed: boolean;

  // Coordinates (resolved from birthplace)
  lat?: number;
  lon?: number;
  coordinates_source?: string;
  coordinates_method?: string;

  // Image
  image_url?: string;

  // Duplicate detection
  duplicate_of?: string;
  duplicate_similarity?: number;
}

interface ValidationSummary {
  total: number;
  valid: number;
  needs_review: number;
  failed: number;
  by_reason: Record<string, number>;
}

// =====================================================
// EXISTING FIGURES CACHE (preloaded at startup)
// =====================================================

interface ExistingFigure {
  name: string;
  aliases: string[];
}

let existingFiguresCache: ExistingFigure[] = [];
let existingNamesNormalized: string[] = [];

async function preloadExistingFigures(): Promise<void> {
  console.log('📥 Preloading existing figures from database...');

  const { data, error } = await supabase
    .from('figures')
    .select('name, aliases');

  if (error) {
    console.error('❌ Failed to load existing figures:', error.message);
    process.exit(1);
  }

  existingFiguresCache = (data || []).map(f => ({
    name: f.name,
    aliases: f.aliases || [],
  }));

  // Build normalized name list for fuzzy matching
  existingNamesNormalized = [];
  for (const fig of existingFiguresCache) {
    existingNamesNormalized.push(fig.name.toLowerCase());
    for (const alias of fig.aliases) {
      existingNamesNormalized.push(alias.toLowerCase());
    }
  }

  console.log(`✅ Loaded ${existingFiguresCache.length} existing figures (${existingNamesNormalized.length} names+aliases)\n`);
}

// =====================================================
// WIKIPEDIA API HELPERS
// =====================================================

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function wikiGet(path: string): Promise<any> {
  const response = await fetch(`${WIKI_API_BASE}${path}`, {
    headers: { 'User-Agent': USER_AGENT }
  });
  if (!response.ok) return null;
  return response.json();
}

async function wikiActionApi(params: Record<string, string>): Promise<any> {
  const searchParams = new URLSearchParams({
    ...params,
    format: 'json',
    origin: '*',
  });
  const response = await fetch(`${WIKI_ACTION_API}?${searchParams}`, {
    headers: { 'User-Agent': USER_AGENT }
  });
  if (!response.ok) return null;
  return response.json();
}

// =====================================================
// VALIDATION FUNCTIONS
// =====================================================

/**
 * Step 1: Verify Wikipedia page exists and get summary
 */
async function verifyWikiPage(pageTitle: string): Promise<{
  exists: boolean;
  title?: string;
  description?: string;
  extract?: string;
  thumbnail?: string;
}> {
  const data = await wikiGet(`/page/summary/${encodeURIComponent(pageTitle)}`);
  if (!data || data.type === 'https://mediawiki.org/wiki/HyperSwitch/errors/not_found') {
    return { exists: false };
  }

  let thumbnailUrl = data.thumbnail?.source || null;
  if (thumbnailUrl && thumbnailUrl.includes('/thumb/')) {
    thumbnailUrl = thumbnailUrl.replace('/thumb/', '/').split('/').slice(0, -1).join('/');
  }

  return {
    exists: true,
    title: data.title,
    description: data.description,
    extract: data.extract,
    thumbnail: thumbnailUrl,
  };
}

/**
 * Step 2: Extract birth year from Wikipedia content
 */
function extractBirthYear(extract: string | undefined, description: string | undefined): number | null {
  if (!extract && !description) return null;

  const text = `${description || ''} ${extract || ''}`;

  // Match patterns like "born 1755", "born c. 356 BC", "(1879–1955)", "b. 1755"
  const patterns = [
    /\((\d{3,4})\s*[-–—]\s*\d{3,4}\)/,                  // (1879–1955)
    /\(c?\.\s*(\d{3,4})\s*[-–—]/,                        // (c. 356–
    /born\s+(?:c?\.\s*)?(\d{3,4})/i,                     // born 1755
    /\((\d{3,4})\s*BC\s*[-–—]/i,                         // (356 BC–
    /born\s+(?:c?\.\s*)?(\d{3,4})\s*BC/i,                // born 356 BC
    /\(c?\.\s*(\d{3,4})\s*BCE?\s*[-–—]/i,                // (356 BCE–
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      let year = parseInt(match[1], 10);
      // Check if it's BC/BCE
      if (text.substring(match.index || 0, (match.index || 0) + match[0].length + 10).match(/BC|BCE/i)) {
        year = -year;
      }
      return year;
    }
  }

  return null;
}

/**
 * Step 3: Resolve birthplace to coordinates (hierarchical)
 */
async function resolveCoordinates(hometown: string): Promise<{
  lat: number;
  lon: number;
  source: string;
  method: string;
} | null> {
  // Strategy: try the hometown directly, then parent regions
  const attempts = generateLocationAttempts(hometown);

  for (const locationName of attempts) {
    await sleep(RATE_LIMIT_MS);

    // Try to find a Wikipedia page for this location
    const coords = await getLocationCoordinates(locationName);
    if (coords) {
      return {
        ...coords,
        source: locationName,
        method: locationName === hometown ? 'direct' : 'parent_region',
      };
    }
  }

  return null;
}

/**
 * Generate location search attempts from a hometown string
 * E.g., "Ulm, Kingdom of Württemberg" → ["Ulm", "Württemberg", "Germany"]
 */
function generateLocationAttempts(hometown: string): string[] {
  const attempts: string[] = [];

  // Split by comma and try each part
  const parts = hometown.split(',').map(p => p.trim());

  // Try full hometown first (just the city part)
  if (parts[0]) attempts.push(parts[0]);

  // Try with country
  if (parts.length >= 2) {
    const lastPart = parts[parts.length - 1].trim();
    attempts.push(lastPart);

    // Try "City, Country" format
    attempts.push(`${parts[0]}, ${lastPart}`);
  }

  // Try full string
  if (parts.length > 1) {
    attempts.push(hometown);
  }

  return [...new Set(attempts)]; // deduplicate
}

/**
 * Get coordinates for a location from its Wikipedia page
 */
async function getLocationCoordinates(locationName: string): Promise<{ lat: number; lon: number } | null> {
  try {
    // Use Wikipedia action API to get coordinates
    const data = await wikiActionApi({
      action: 'query',
      titles: locationName,
      prop: 'coordinates',
      colimit: '1',
    });

    if (!data?.query?.pages) return null;

    const pages = Object.values(data.query.pages) as any[];
    for (const page of pages) {
      if (page.coordinates && page.coordinates.length > 0) {
        return {
          lat: page.coordinates[0].lat,
          lon: page.coordinates[0].lon,
        };
      }
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Step 4: Get Wikipedia infobox image
 */
async function getWikiImage(pageTitle: string): Promise<string | null> {
  const data = await wikiGet(`/page/summary/${encodeURIComponent(pageTitle)}`);
  if (!data?.thumbnail?.source) return null;

  let url = data.thumbnail.source;
  if (url.includes('/thumb/')) {
    url = url.replace('/thumb/', '/').split('/').slice(0, -1).join('/');
  }
  return url;
}

/**
 * Step 5: Duplicate detection
 */
function checkDuplicate(
  candidateName: string,
  candidateAliases: string[]
): { isDuplicate: boolean; matchedName?: string; similarity?: number } {
  const allCandidateNames = [
    candidateName.toLowerCase(),
    ...(candidateAliases || []).map(a => a.toLowerCase()),
  ];

  let bestMatch = '';
  let bestSimilarity = 0;

  for (const candidateNameLower of allCandidateNames) {
    for (const existingName of existingNamesNormalized) {
      const similarity = fuzzyMatch(candidateNameLower, existingName);
      if (similarity > bestSimilarity) {
        bestSimilarity = similarity;
        bestMatch = existingName;
      }
    }
  }

  if (bestSimilarity >= DUPLICATE_THRESHOLD) {
    return { isDuplicate: true, matchedName: bestMatch, similarity: bestSimilarity };
  }

  return { isDuplicate: false };
}

// =====================================================
// MAIN VALIDATION LOOP
// =====================================================

async function validateCandidate(candidate: Candidate, index: number, total: number, skipImages: boolean): Promise<ValidatedFigure> {
  console.log(`\n[${index + 1}/${total}] Validating: ${candidate.name}`);
  const reasons: string[] = [];
  let status: ValidatedFigure['validation_status'] = 'valid';

  // ---------- Duplicate check ----------
  const dupCheck = checkDuplicate(candidate.name, candidate.aliases || []);
  if (dupCheck.isDuplicate) {
    reasons.push(`Potential duplicate of "${dupCheck.matchedName}" (${(dupCheck.similarity! * 100).toFixed(0)}% similarity)`);
    status = 'needs_review';
    console.log(`   ⚠️ Potential duplicate: ${dupCheck.matchedName} (${(dupCheck.similarity! * 100).toFixed(0)}%)`);
  }

  await sleep(RATE_LIMIT_MS);

  // ---------- Wikipedia page verification ----------
  const wikiResult = await verifyWikiPage(candidate.wikipedia_page);

  if (!wikiResult.exists) {
    console.log(`   ❌ Wikipedia page not found: ${candidate.wikipedia_page}`);
    return {
      candidate,
      validation_status: 'failed',
      validation_reasons: ['Wikipedia page not found'],
      birth_year_confirmed: false,
    };
  }

  console.log(`   ✅ Wikipedia page found: ${wikiResult.title}`);

  // ---------- Birth year cross-check ----------
  const wikiBirthYear = extractBirthYear(wikiResult.extract, wikiResult.description);
  let birthYearConfirmed = false;

  if (wikiBirthYear !== null) {
    const diff = Math.abs(wikiBirthYear - candidate.birth_year);
    if (diff > BIRTH_YEAR_TOLERANCE) {
      reasons.push(`Birth year discrepancy: AI=${candidate.birth_year}, Wiki=${wikiBirthYear} (diff=${diff})`);
      status = 'needs_review';
      console.log(`   ⚠️ Birth year mismatch: AI says ${candidate.birth_year}, Wiki says ${wikiBirthYear}`);
    } else {
      birthYearConfirmed = true;
      if (diff > 0) {
        console.log(`   📅 Birth year close enough: AI=${candidate.birth_year}, Wiki=${wikiBirthYear}`);
      } else {
        console.log(`   ✅ Birth year confirmed: ${candidate.birth_year}`);
      }
    }
  } else {
    reasons.push('Could not extract birth year from Wikipedia');
    console.log(`   ⚠️ Could not extract birth year from Wikipedia`);
  }

  await sleep(RATE_LIMIT_MS);

  // ---------- Coordinates resolution ----------
  console.log(`   🌍 Resolving coordinates for: ${candidate.hometown}`);
  const coords = await resolveCoordinates(candidate.hometown);

  if (coords) {
    console.log(`   ✅ Coordinates found: ${coords.lat.toFixed(4)}, ${coords.lon.toFixed(4)} (via ${coords.source})`);
  } else {
    reasons.push(`Could not resolve coordinates for "${candidate.hometown}"`);
    status = status === 'valid' ? 'needs_review' : status;
    console.log(`   ⚠️ No coordinates found for: ${candidate.hometown}`);
  }

  // ---------- Image discovery ----------
  let imageUrl: string | null = null;
  if (!skipImages) {
    await sleep(RATE_LIMIT_MS);

    if (wikiResult.thumbnail) {
      imageUrl = wikiResult.thumbnail;
      console.log(`   🖼️ Image found from summary`);
    } else {
      imageUrl = await getWikiImage(candidate.wikipedia_page);
      if (imageUrl) {
        console.log(`   🖼️ Image found via secondary lookup`);
      } else {
        reasons.push('No Wikipedia image found');
        console.log(`   ⚠️ No image found`);
      }
    }
  }

  // ---------- Build result ----------
  return {
    candidate,
    validation_status: status,
    validation_reasons: reasons,
    wiki_title: wikiResult.title,
    wiki_description: wikiResult.description,
    wiki_birth_year: wikiBirthYear ?? undefined,
    birth_year_confirmed: birthYearConfirmed,
    lat: coords?.lat,
    lon: coords?.lon,
    coordinates_source: coords?.source,
    coordinates_method: coords?.method,
    image_url: imageUrl ?? undefined,
    duplicate_of: dupCheck.matchedName,
    duplicate_similarity: dupCheck.similarity,
  };
}

// =====================================================
// CLI INTERFACE
// =====================================================

async function main() {
  const args = process.argv.slice(2);
  const inputFile = args.find(a => !a.startsWith('--'));
  const outputFlag = args.indexOf('--output');
  const outputFile = outputFlag !== -1 ? args[outputFlag + 1] : null;
  const skipImages = args.includes('--skip-images');

  if (!inputFile) {
    console.log('🔍 HistoGuesser Figure Candidate Validator');
    console.log('==========================================');
    console.log('');
    console.log('Usage:');
    console.log('  npx tsx scripts/validate-figure-candidates.ts <candidates.json>');
    console.log('  npx tsx scripts/validate-figure-candidates.ts <candidates.json> --output validated.json');
    console.log('  npx tsx scripts/validate-figure-candidates.ts <candidates.json> --skip-images');
    console.log('');
    console.log('Input format: see scripts/figure-candidates-schema.json');
    process.exit(0);
  }

  console.log('🔍 HistoGuesser Figure Candidate Validator');
  console.log('==========================================\n');

  // Load input file
  let candidateData: CandidateFile;
  try {
    const raw = readFileSync(inputFile, 'utf-8');
    candidateData = JSON.parse(raw);
  } catch (error: any) {
    console.error(`❌ Failed to read input file: ${error.message}`);
    process.exit(1);
  }

  const { metadata, candidates } = candidateData;
  console.log(`📋 Batch: ${metadata.batch_id}`);
  console.log(`📁 Category: ${metadata.target_category}`);
  console.log(`📦 Candidates: ${candidates.length}`);
  if (skipImages) console.log('⏭️  Skipping image discovery');
  console.log('');

  // Preload existing figures for duplicate detection
  await preloadExistingFigures();

  // Validate each candidate
  const results: ValidatedFigure[] = [];
  const total = candidates.length;

  for (let i = 0; i < total; i++) {
    const result = await validateCandidate(candidates[i], i, total, skipImages);
    results.push(result);

    // Also add to existing names cache so we detect duplicates within the batch
    existingNamesNormalized.push(candidates[i].name.toLowerCase());
    for (const alias of candidates[i].aliases || []) {
      existingNamesNormalized.push(alias.toLowerCase());
    }

    // Progress every 10
    if ((i + 1) % 10 === 0) {
      const valid = results.filter(r => r.validation_status === 'valid').length;
      const review = results.filter(r => r.validation_status === 'needs_review').length;
      const failed = results.filter(r => r.validation_status === 'failed').length;
      console.log(`\n📊 Progress: ${i + 1}/${total} | ✅ ${valid} | ⚠️ ${review} | ❌ ${failed}\n`);
    }
  }

  // =====================================================
  // SUMMARY
  // =====================================================
  const summary: ValidationSummary = {
    total: results.length,
    valid: results.filter(r => r.validation_status === 'valid').length,
    needs_review: results.filter(r => r.validation_status === 'needs_review').length,
    failed: results.filter(r => r.validation_status === 'failed').length,
    by_reason: {},
  };

  for (const result of results) {
    for (const reason of result.validation_reasons) {
      const key = reason.split(':')[0].trim();
      summary.by_reason[key] = (summary.by_reason[key] || 0) + 1;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('📊 VALIDATION SUMMARY');
  console.log('='.repeat(50));
  console.log(`✅ Valid:        ${summary.valid}`);
  console.log(`⚠️ Needs review: ${summary.needs_review}`);
  console.log(`❌ Failed:       ${summary.failed}`);
  console.log(`📦 Total:        ${summary.total}`);

  if (Object.keys(summary.by_reason).length > 0) {
    console.log('\nReview reasons:');
    for (const [reason, count] of Object.entries(summary.by_reason)) {
      console.log(`   - ${reason}: ${count}`);
    }
  }

  // List figures needing review
  const reviewFigures = results.filter(r => r.validation_status === 'needs_review');
  if (reviewFigures.length > 0) {
    console.log('\n⚠️ Figures needing review:');
    for (const fig of reviewFigures) {
      console.log(`   ${fig.candidate.name}:`);
      for (const reason of fig.validation_reasons) {
        console.log(`     - ${reason}`);
      }
    }
  }

  // List failed figures
  const failedFigures = results.filter(r => r.validation_status === 'failed');
  if (failedFigures.length > 0) {
    console.log('\n❌ Failed figures:');
    for (const fig of failedFigures) {
      console.log(`   ${fig.candidate.name}: ${fig.validation_reasons.join(', ')}`);
    }
  }

  // =====================================================
  // OUTPUT
  // =====================================================
  const output = {
    metadata: {
      ...metadata,
      validated_at: new Date().toISOString(),
      summary,
    },
    results,
  };

  const outPath = outputFile || inputFile.replace('.json', '-validated.json');
  writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log(`\n💾 Results saved to: ${outPath}`);
}

main().catch(err => {
  console.error('❌ Script failed:', err);
  process.exit(1);
});
