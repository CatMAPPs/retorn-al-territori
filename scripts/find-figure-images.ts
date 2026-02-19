#!/usr/bin/env tsx

/**
 * Image Discovery Script for HistoGuesser Figures
 *
 * This script automatically discovers suitable images for historical figures
 * using the Wikimedia Commons API. It finds public domain portraits meeting
 * quality standards and returns ranked candidates.
 *
 * Usage:
 *   npm run find-images "Albert Einstein" "Marie Curie"
 *   npm run find-images --batch figures.json
 *   npm run find-images --interactive
 */

import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Load environment variables
config({ path: '.env' });
config({ path: '.env.local' });

// =====================================================
// CONFIGURATION & TYPES
// =====================================================

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('❌ Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false }
});

// Wikimedia API configuration
const WIKIMEDIA_BASE = 'https://commons.wikimedia.org/w/api.php';
const SEARCH_PARAMS = {
  action: 'query',
  format: 'json',
  origin: '*' // CORS handling
};

// Quality thresholds
const QUALITY_THRESHOLDS = {
  minResolution: 400,    // pixels on longest side
  maxResolution: 1200,   // prevent extremely large images
  maxFileSize: 5000000,  // 5MB max
  requiredLicense: 'public domain'
};

// Search strategies
const SEARCH_STRATEGIES = [
  (name: string) => `${name} portrait`,
  (name: string) => `${name} photograph`,
  (name: string) => `${name} photo`,
  (name: string, aliases: string[]) => aliases.length > 0 ? `${aliases[0]} portrait` : null
].filter(Boolean);

// Types
interface WikimediaSearchResult {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
}

interface WikimediaImageInfo {
  title: string;
  imageinfo: Array<{
    url: string;
    descriptionurl: string;
    extmetadata: {
      LicenseShortName?: { value: string };
      Artist?: { value: string };
      ImageDescription?: { value: string };
      DateTimeOriginal?: { value: string };
    };
    size: number;
    width: number;
    height: number;
  }>;
}

interface ImageCandidate {
  filename: string;
  url: string;
  thumbnailUrl?: string;
  width: number;
  height: number;
  fileSize: number;
  license: string;
  artist: string;
  description: string;
  source: string;
  qualityScore: number;
  relevanceScore: number;
  totalScore: number;
}

interface DiscoveryResult {
  figureName: string;
  aliases: string[];
  candidates: ImageCandidate[];
  topCandidates: ImageCandidate[];
  searchTime: number;
  totalFound: number;
  validCandidates: number;
}

// =====================================================
// WIKIPEDIA API FUNCTIONS
// =====================================================

/**
 * Get infobox image from Wikipedia page
 */
async function getWikipediaInfoboxImage(figureName: string): Promise<ImageCandidate | null> {
  try {
    // Clean up figure name for URL
    const cleanName = figureName.trim().replace(/\s+/g, '_');

    console.log(`   📖 Checking Wikipedia: ${cleanName}`);

    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanName)}`, {
      headers: {
        'User-Agent': 'HistoGuesser/1.0 (Educational Game - https://github.com/your-repo)'
      }
    });

    if (!response.ok) {
      console.log(`   Wikipedia page not found for "${cleanName}"`);
      return null;
    }

    const data = await response.json();

    // Check if page has a thumbnail (infobox image)
    if (!data.thumbnail?.source) {
      console.log(`   No infobox image found for "${cleanName}"`);
      return null;
    }

    // Convert thumbnail URL to full resolution
    // Wikipedia thumbnails are usually 500px, we want larger
    let fullImageUrl = data.thumbnail.source;

    // Try to get higher resolution by manipulating the URL
    // Pattern: //upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Example.jpg/500px-Example.jpg
    // We want: //upload.wikimedia.org/wikipedia/commons/8/8a/Example.jpg (full resolution)
    if (fullImageUrl.includes('/thumb/')) {
      fullImageUrl = fullImageUrl.replace('/thumb/', '/').split('/').slice(0, -1).join('/');
    }

    console.log(`   ✅ Found Wikipedia infobox image`);

    // Create candidate with basic info
    const candidate: ImageCandidate = {
      filename: `Wikipedia_${cleanName}.jpg`,
      url: fullImageUrl,
      width: data.thumbnail.width || 500,
      height: data.thumbnail.height || 600,
      fileSize: 0, // We'll check this when validating
      license: 'Public Domain (Wikipedia)', // Assume PD for infobox images
      artist: data.artist || 'Unknown',
      description: data.description || `${figureName} - Wikipedia infobox image`,
      source: 'Wikipedia Infobox',
      qualityScore: 0,
      relevanceScore: 0,
      totalScore: 0
    };

    return candidate;

  } catch (error) {
    console.warn(`   Wikipedia lookup failed:`, error);
    return null;
  }
}

/**
 * Validate and enhance Wikipedia image with actual file info
 */
async function validateWikipediaImage(candidate: ImageCandidate): Promise<ImageCandidate | null> {
  try {
    console.log(`   🔍 Validating Wikipedia image: ${candidate.url}`);

    // Extract filename from URL - handle both thumbnail and full URLs
    let filename = candidate.url.split('/').pop();
    if (!filename) {
      console.log(`   ❌ Could not extract filename from URL`);
      return null;
    }

    // Remove size suffix from thumbnails (e.g., "800px-File.jpg" -> "File.jpg")
    filename = filename.replace(/^\d+px-/, '');

    console.log(`   📁 Looking up file: ${filename}`);

    const imageInfos = await getImageInfo([filename]);
    if (imageInfos.length === 0) {
      console.log(`   ❌ No image info found for ${filename}`);
      return null;
    }

    const info = imageInfos[0];
    if (!info.imageinfo?.[0]) {
      console.log(`   ❌ No image data found`);
      return null;
    }

    const img = info.imageinfo[0];

    // Update candidate with real data
    candidate.fileSize = img.size;
    candidate.width = img.width;
    candidate.height = img.height;
    candidate.license = img.extmetadata?.LicenseShortName?.value || candidate.license;
    candidate.artist = img.extmetadata?.Artist?.value || candidate.artist;
    candidate.description = img.extmetadata?.ImageDescription?.value || candidate.description;

    // Update URL to full resolution if we got thumbnail
    candidate.url = img.url;

    console.log(`   📏 Real dimensions: ${candidate.width}x${candidate.height}, Size: ${candidate.fileSize} bytes`);

    // Validate the candidate
    if (!validateCandidate(candidate)) {
      const longestSide = Math.max(candidate.width, candidate.height);
      const maxRes = candidate.source === 'Wikipedia Infobox' ? 6000 : QUALITY_THRESHOLDS.maxResolution;
      const maxSize = candidate.source === 'Wikipedia Infobox' ? '15MB' : '5MB';
      console.log(`   ❌ Wikipedia image failed validation:`);
      console.log(`      - Resolution: ${longestSide}px (max: ${maxRes}px)`);
      console.log(`      - File size: ${Math.round(candidate.fileSize / 1000000)}MB (max: ${maxSize})`);
      console.log(`      - License: ${candidate.license}`);
      return null;
    }

    console.log(`   ✅ Wikipedia image validated: ${candidate.width}x${candidate.height}`);
    return candidate;

  } catch (error) {
    console.warn(`   Wikipedia image validation failed:`, error);
    return null;
  }
}

// =====================================================
// WIKIMEDIA API FUNCTIONS
// =====================================================

/**
 * Search Wikimedia Commons for images (fallback method)
 */
async function searchWikimedia(query: string, limit: number = 20): Promise<WikimediaSearchResult[]> {
  const params = new URLSearchParams({
    ...SEARCH_PARAMS,
    list: 'search',
    srsearch: query,
    srlimit: limit.toString(),
    srnamespace: '6', // File namespace only
    srprop: 'title|snippet|size|wordcount|timestamp'
  });

  const response = await fetch(`${WIKIMEDIA_BASE}?${params}`);
  if (!response.ok) {
    throw new Error(`Wikimedia search failed: ${response.status}`);
  }

  const data = await response.json();
  return data.query?.search || [];
}

/**
 * Get detailed information about specific images
 */
async function getImageInfo(filenames: string[]): Promise<WikimediaImageInfo[]> {
  if (filenames.length === 0) return [];

  // Process in batches of 10 to avoid URL length limits
  const batches: WikimediaImageInfo[] = [];

  for (let i = 0; i < filenames.length; i += 10) {
    const batch = filenames.slice(i, i + 10);
    const titles = batch.map(f => `File:${f}`).join('|');

    const params = new URLSearchParams({
      ...SEARCH_PARAMS,
      prop: 'imageinfo',
      titles,
      iiprop: 'url|extmetadata|size'
    });

    const response = await fetch(`${WIKIMEDIA_BASE}?${params}`);
    if (!response.ok) {
      console.warn(`Image info batch failed: ${response.status}`);
      continue;
    }

    const data = await response.json();
    const pages = data.query?.pages || {};

    for (const page of Object.values(pages) as any[]) {
      if (page.imageinfo?.[0]) {
        batches.push(page);
      }
    }

    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  return batches;
}

/**
 * Extract filename from Wikimedia title
 */
function extractFilename(title: string): string {
  return title.replace(/^File:/, '');
}

// =====================================================
// QUALITY ASSESSMENT
// =====================================================

/**
 * Calculate quality score for an image candidate
 */
function calculateQualityScore(candidate: ImageCandidate, figureName: string, aliases: string[]): number {
  let score = 0;
  const isWikipedia = candidate.source === 'Wikipedia Infobox';

  // Source credibility bonus (Wikipedia images get a boost)
  if (isWikipedia) score += 10; // Wikipedia images are pre-validated

  // Resolution quality (25 points)
  const longestSide = Math.max(candidate.width, candidate.height);
  if (longestSide >= 600) score += 25;
  else if (longestSide >= 400) score += 15;
  else if (longestSide >= 200) score += 5;

  // File size appropriateness (10 points) - more lenient for Wikipedia
  if (candidate.fileSize < 1000000) score += 10; // < 1MB
  else if (candidate.fileSize < 3000000) score += 7;  // < 3MB
  else if (candidate.fileSize < 5000000) score += 3;  // < 5MB
  else if (isWikipedia && candidate.fileSize < 10000000) score += 1; // Partial credit for large Wikipedia images

  // License compliance (guaranteed by filtering, but 10 points)
  if (candidate.license.toLowerCase().includes('public domain')) score += 10;

  // Technical quality indicators (10 points)
  if (!candidate.filename.includes('bust') &&
      !candidate.filename.includes('coin') &&
      !candidate.filename.includes('statue') &&
      !candidate.description.toLowerCase().includes('statue')) {
    score += 10;
  }

  return Math.min(65, score); // Max 65 points for quality (Wikipedia gets bonus)
}

/**
 * Calculate relevance score for an image candidate
 */
function calculateRelevanceScore(candidate: ImageCandidate, figureName: string, aliases: string[]): number {
  let score = 0;
  const searchTerms = [figureName.toLowerCase(), ...aliases.map(a => a.toLowerCase())];
  const filename = candidate.filename.toLowerCase();
  const description = candidate.description.toLowerCase();

  // Exact name matches (30 points)
  for (const term of searchTerms) {
    if (filename.includes(term)) {
      score += term === figureName.toLowerCase() ? 30 : 20;
      break;
    }
  }

  // Description matches (10 points)
  for (const term of searchTerms) {
    if (description.includes(term)) {
      score += 10;
      break;
    }
  }

  // Artist credibility (15 points)
  const credibleArtists = ['museum', 'nobel', 'academy', 'university', 'library'];
  const artist = candidate.artist.toLowerCase();
  if (credibleArtists.some(cred => artist.includes(cred))) {
    score += 15;
  }

  return Math.min(55, score); // Max 55 points for relevance
}

/**
 * Validate if candidate meets minimum requirements
 */
function validateCandidate(candidate: ImageCandidate): boolean {
  const longestSide = Math.max(candidate.width, candidate.height);
  const isWikipedia = candidate.source === 'Wikipedia Infobox';

  // More lenient validation for Wikipedia images (they're curated)
  const maxFileSize = isWikipedia ? 15000000 : QUALITY_THRESHOLDS.maxFileSize; // 15MB for Wikipedia
  const maxResolution = isWikipedia ? 6000 : QUALITY_THRESHOLDS.maxResolution; // 6000px for Wikipedia (they can be large)

  // License check - Wikipedia images are usually PD, but accept various PD licenses
  const hasValidLicense = candidate.license.toLowerCase().includes('public domain') ||
                         candidate.license.toLowerCase().includes('cc0') ||
                         (isWikipedia && candidate.license.toLowerCase().includes('pd'));

  return (
    longestSide >= QUALITY_THRESHOLDS.minResolution &&
    longestSide <= maxResolution &&
    candidate.fileSize <= maxFileSize &&
    hasValidLicense &&
    candidate.url && candidate.url.length > 0
  );
}

// =====================================================
// MAIN DISCOVERY LOGIC
// =====================================================

/**
 * Discover images for a single figure using Wikipedia-first approach
 */
async function discoverImagesForFigure(
  figureName: string,
  aliases: string[] = [],
  maxCandidates: number = 3
): Promise<DiscoveryResult> {
  const startTime = Date.now();
  console.log(`🔍 Discovering images for: ${figureName}`);

  const allCandidates: ImageCandidate[] = [];

  // ========================================
  // STEP 1: Try Wikipedia Infobox Image First
  // ========================================
  console.log(`📖 Step 1: Checking Wikipedia infobox...`);

  // Try main name first
  let wikiCandidate = await getWikipediaInfoboxImage(figureName);

  // If main name fails, try aliases
  if (!wikiCandidate && aliases.length > 0) {
    for (const alias of aliases.slice(0, 2)) { // Try first 2 aliases
      console.log(`   Trying alias: ${alias}`);
      wikiCandidate = await getWikipediaInfoboxImage(alias);
      if (wikiCandidate) break;
    }
  }

  // Validate and enhance the Wikipedia candidate
  if (wikiCandidate) {
    const validatedWiki = await validateWikipediaImage(wikiCandidate);
    if (validatedWiki) {
      // Calculate scores for the Wikipedia image
      validatedWiki.qualityScore = calculateQualityScore(validatedWiki, figureName, aliases);
      validatedWiki.relevanceScore = calculateRelevanceScore(validatedWiki, figureName, aliases);
      validatedWiki.totalScore = validatedWiki.qualityScore + validatedWiki.relevanceScore;

      allCandidates.push(validatedWiki);
      console.log(`🎉 SUCCESS: Found perfect Wikipedia infobox image!`);

      // If Wikipedia gives us a great result, return it immediately
      if (validatedWiki.totalScore >= 80) { // Excellent match
        const result: DiscoveryResult = {
          figureName,
          aliases,
          candidates: allCandidates,
          topCandidates: [validatedWiki],
          searchTime: Date.now() - startTime,
          totalFound: allCandidates.length,
          validCandidates: allCandidates.length
        };
        return result;
      }
    }
  }

  // ========================================
  // STEP 2: Fallback to Wikimedia Search (if Wikipedia fails)
  // ========================================
  console.log(`🔍 Step 2: Falling back to Wikimedia Commons search...`);

  // Try different search strategies
  for (const strategy of SEARCH_STRATEGIES) {
    const query = strategy(figureName, aliases);
    if (!query) continue;

    try {
      console.log(`   Searching: "${query}"`);
      const searchResults = await searchWikimedia(query, 10);

      if (searchResults.length === 0) {
        console.log(`   No results for "${query}"`);
        continue;
      }

      // Extract filenames and get detailed info
      const filenames = searchResults.map(r => extractFilename(r.title));
      const imageInfos = await getImageInfo(filenames);

      // Convert to candidates
      for (const info of imageInfos) {
        if (!info.imageinfo?.[0]) continue;

        const img = info.imageinfo[0];
        const filename = extractFilename(info.title);

        const candidate: ImageCandidate = {
          filename,
          url: img.url,
          width: img.width,
          height: img.height,
          fileSize: img.size,
          license: img.extmetadata?.LicenseShortName?.value || 'Unknown',
          artist: img.extmetadata?.Artist?.value || 'Unknown',
          description: img.extmetadata?.ImageDescription?.value || '',
          source: 'Wikimedia Commons',
          qualityScore: 0,
          relevanceScore: 0,
          totalScore: 0
        };

        // Calculate scores
        candidate.qualityScore = calculateQualityScore(candidate, figureName, aliases);
        candidate.relevanceScore = calculateRelevanceScore(candidate, figureName, aliases);
        candidate.totalScore = candidate.qualityScore + candidate.relevanceScore;

        allCandidates.push(candidate);
      }

      console.log(`   Found ${imageInfos.length} images for "${query}"`);

    } catch (error) {
      console.warn(`   Search failed for "${query}":`, error);
    }

    // Rate limiting between searches
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Filter and rank candidates
  const validCandidates = allCandidates.filter(validateCandidate);
  const rankedCandidates = validCandidates
    .sort((a, b) => b.totalScore - a.totalScore)
    .slice(0, maxCandidates);

  const result: DiscoveryResult = {
    figureName,
    aliases,
    candidates: allCandidates,
    topCandidates: rankedCandidates,
    searchTime: Date.now() - startTime,
    totalFound: allCandidates.length,
    validCandidates: validCandidates.length
  };

  console.log(`✅ Found ${rankedCandidates.length} valid candidates in ${result.searchTime}ms`);
  return result;
}

/**
 * Display discovery results in a readable format
 */
function displayResults(result: DiscoveryResult): void {
  console.log(`\n📊 RESULTS FOR: ${result.figureName}`);
  console.log('='.repeat(50));
  console.log(`Search time: ${result.searchTime}ms`);
  console.log(`Total found: ${result.totalFound}`);
  console.log(`Valid candidates: ${result.validCandidates}`);
  console.log(`Top candidates: ${result.topCandidates.length}`);

  if (result.topCandidates.length > 0) {
    console.log(`\n🏆 TOP CANDIDATES:`);
    result.topCandidates.forEach((candidate, index) => {
      const sourceIcon = candidate.source === 'Wikipedia Infobox' ? '📖' : '🔍';
      console.log(`\n${index + 1}. ${sourceIcon} ${candidate.filename}`);
      console.log(`   URL: ${candidate.url}`);
      console.log(`   Resolution: ${candidate.width}x${candidate.height}`);
      console.log(`   Size: ${Math.round(candidate.fileSize / 1024)}KB`);
      console.log(`   License: ${candidate.license}`);
      console.log(`   Artist: ${candidate.artist}`);
      console.log(`   Source: ${candidate.source}`);
      const qualityMax = candidate.source === 'Wikipedia Infobox' ? 65 : 55;
      const totalMax = qualityMax + 55;
      console.log(`   Quality Score: ${candidate.qualityScore}/${qualityMax}`);
      console.log(`   Relevance Score: ${candidate.relevanceScore}/55`);
      console.log(`   Total Score: ${candidate.totalScore}/${totalMax}`);
    });
  } else {
    console.log(`\n❌ No suitable candidates found`);
    console.log(`💡 Try: Different search terms, check spelling, or manual research`);
  }
}

// =====================================================
// CLI INTERFACE
// =====================================================

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('🤖 HistoGuesser Image Discovery Script');
    console.log('=====================================');
    console.log('');
    console.log('Usage:');
    console.log('  npm run find-images "Figure Name" ["Another Figure"]');
    console.log('  npm run find-images --batch figures.json');
    console.log('  npm run find-images --interactive');
    console.log('');
    console.log('Examples:');
    console.log('  npm run find-images "Albert Einstein"');
    console.log('  npm run find-images "Marie Curie" "Leonardo da Vinci"');
    process.exit(0);
  }

  const results: DiscoveryResult[] = [];

  if (args.includes('--batch')) {
    // Batch processing from file
    const fileIndex = args.indexOf('--batch') + 1;
    const filename = args[fileIndex];

    if (!filename) {
      console.error('❌ Please specify a batch file: --batch figures.json');
      process.exit(1);
    }

    console.log(`📂 Processing batch file: ${filename}`);
    // TODO: Implement batch file processing

  } else if (args.includes('--interactive')) {
    // Interactive mode
    console.log('🎮 Interactive mode - enter figure names (Ctrl+C to exit):');
    const readline = await import('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const askFigure = () => {
      rl.question('Enter figure name (or "quit"): ', async (name) => {
        if (name.toLowerCase() === 'quit') {
          rl.close();
          return;
        }

        try {
          const result = await discoverImagesForFigure(name);
          displayResults(result);
          results.push(result);
        } catch (error) {
          console.error(`❌ Error processing ${name}:`, error);
        }

        askFigure(); // Continue asking
      });
    };

    askFigure();

  } else if (args.includes('--batch-migration')) {
    // Batch process for migration - get Wikipedia infobox images only
    const migrationFigures = [
      "Catherine the Great", "Otto von Bismarck", "Margaret Thatcher", "Charles de Gaulle", "Vladimir Lenin",
      "Franklin D. Roosevelt", "Fidel Castro", "Che Guevara", "Theodore Roosevelt", "Simón Bolívar",
      "Mao Zedong", "Jawaharlal Nehru", "Haile Selassie", "Alexander the Great", "Hannibal Barca",
      "Saladin", "Richard the Lionheart", "Hernán Cortés", "Stonewall Jackson", "Ulysses S. Grant",
      "Dwight D. Eisenhower", "Erwin Rommel", "Douglas MacArthur", "T.E. Lawrence", "Isoroku Yamamoto",
      "Vo Nguyen Giap", "Archimedes", "Copernicus", "Antonie van Leeuwenhoek", "Carl Linnaeus",
      "Alfred Nobel", "Thomas Edison", "Nikola Tesla", "Linus Pauling", "Richard Feynman",
      "Carl Sagan", "J. Robert Oppenheimer", "Subrahmanyan Chandrasekhar", "Hideki Yukawa",
      "Augustine of Hippo", "Francis of Assisi", "Martin Luther", "Ignatius Loyola", "John Calvin",
      "Mother Teresa", "Billy Graham", "Pope John Paul II", "Desmond Tutu", "Dalai Lama XIV",
      "Muhammad", "Gautama Buddha", "Michelangelo Buonarroti", "Ludwig van Beethoven", "Frédéric Chopin",
      "Vincent van Gogh", "Johann Sebastian Bach", "Mark Twain", "Ernest Hemingway", "Louis Armstrong",
      "Charlie Chaplin", "Toni Morrison", "Rabindranath Tagore", "Yasunari Kawabata", "Amelia Earhart",
      "Marco Polo", "Christopher Columbus", "Ferdinand Magellan", "James Cook", "Lewis and Clark",
      "Roald Amundsen", "Ernest Shackleton", "Howard Carter", "Jacque Cousteau", "Ranulph Fiennes",
      "Zheng He", "Ibn Battuta", "Susan B. Anthony", "Elizabeth Blackwell", "Florence Nightingale",
      "Marie Curie", "Rosa Luxemburg", "Harriet Tubman", "Frederick Douglass", "Jane Addams",
      "Wangari Maathai", "Eleanor Roosevelt", "Mahatma Gandhi", "Malala Yousafzai", "Andrew Carnegie",
      "John D. Rockefeller", "Henry Ford", "J.P. Morgan", "Cornelius Vanderbilt", "John Jacob Astor",
      "Andrew Mellon", "Warren Buffett", "Bill Gates", "Jeff Bezos", "Mukesh Ambani", "Li Ka-shing"
    ];

    console.log(`🔍 Processing ${migrationFigures.length} figures for migration...`);

    const wikiImages: { [key: string]: string } = {};

    for (const figureName of migrationFigures) {
      try {
        console.log(`📖 Getting Wikipedia image for: ${figureName}`);
        const wikiCandidate = await getWikipediaInfoboxImage(figureName);

        if (wikiCandidate) {
          const validated = await validateWikipediaImage(wikiCandidate);
          if (validated) {
            wikiImages[figureName] = validated.url;
            console.log(`✅ Found: ${validated.url}`);
          } else {
            console.log(`❌ Failed validation for ${figureName}`);
          }
        } else {
          console.log(`❌ No Wikipedia image found for ${figureName}`);
        }

        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (error) {
        console.error(`❌ Error processing "${figureName}":`, error);
      }
    }

    // Output results as JSON for easy processing
    console.log('\n📋 WIKIPEDIA IMAGES RESULTS:');
    console.log(JSON.stringify(wikiImages, null, 2));

  } else {
    // Direct figure names
    for (const figureName of args) {
      if (figureName.startsWith('--')) continue; // Skip flags

      try {
        const result = await discoverImagesForFigure(figureName);
        displayResults(result);
        results.push(result);

        // Brief pause between figures
        if (args.length > 1) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      } catch (error) {
        console.error(`❌ Error processing "${figureName}":`, error);
      }
    }
  }

  // Summary
  if (results.length > 0) {
    console.log(`\n📈 SUMMARY:`);
    console.log('='.repeat(30));
    console.log(`Figures processed: ${results.length}`);
    console.log(`Total candidates found: ${results.reduce((sum, r) => sum + r.totalFound, 0)}`);
    console.log(`Valid candidates: ${results.reduce((sum, r) => sum + r.validCandidates, 0)}`);
    console.log(`Figures with good images: ${results.filter(r => r.topCandidates.length > 0).length}`);
    console.log(`Success rate: ${Math.round((results.filter(r => r.topCandidates.length > 0).length / results.length) * 100)}%`);
  }
}

// =====================================================
// SCRIPT EXECUTION
// =====================================================

// Run main function directly (simplified for npm script execution)
main().catch(console.error);

export { discoverImagesForFigure, validateCandidate };
