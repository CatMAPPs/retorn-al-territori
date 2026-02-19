#!/usr/bin/env tsx

/**
 * Simple Wikipedia Infobox Image Fetcher for HistoGuesser
 *
 * This script fetches Wikipedia infobox images for historical figures.
 * No fallbacks - only gets proper Wikipedia infobox images.
 *
 * Usage:
 *   npx tsx scripts/get-wiki-images.ts "Figure Name" "Another Figure"
 *   npx tsx scripts/get-wiki-images.ts --batch-migration > wiki_images.json
 *   npx tsx scripts/get-wiki-images.ts --sql-update > update_images.sql
 */

import { config } from 'dotenv';

// Load environment variables
config({ path: '.env' });
config({ path: '.env.local' });

// =====================================================
// WIKIPEDIA IMAGE FUNCTIONS (simplified)
// =====================================================

interface WikiImageResult {
  figureName: string;
  imageUrl: string | null;
  status: 'success' | 'no_image' | 'error';
  error?: string;
}

/**
 * Get infobox image from Wikipedia page
 */
async function getWikipediaInfoboxImage(figureName: string): Promise<string | null> {
  try {
    // Clean up figure name for URL
    const cleanName = figureName.trim().replace(/\s+/g, '_');

    console.log(`📖 Checking Wikipedia: ${cleanName}`);

    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanName)}`, {
      headers: {
        'User-Agent': 'HistoGuesser/1.0 (Educational Game - https://github.com/your-repo)'
      }
    });

    if (!response.ok) {
      console.log(`   No Wikipedia page found for "${cleanName}"`);
      return null;
    }

    const data = await response.json();

    // Check if page has a thumbnail (infobox image)
    if (!data.thumbnail?.source) {
      console.log(`   No infobox image found for "${cleanName}"`);
      return null;
    }

    // Convert thumbnail URL to full resolution
    let fullImageUrl = data.thumbnail.source;

    // Remove thumbnail path to get full resolution
    if (fullImageUrl.includes('/thumb/')) {
      fullImageUrl = fullImageUrl.replace('/thumb/', '/').split('/').slice(0, -1).join('/');
    }

    console.log(`   ✅ Found Wikipedia infobox image`);
    return fullImageUrl;

  } catch (error) {
    console.warn(`   Wikipedia lookup failed for "${figureName}":`, error);
    return null;
  }
}

/**
 * Process a single figure and return result
 */
async function processFigure(figureName: string): Promise<WikiImageResult> {
  try {
    const imageUrl = await getWikipediaInfoboxImage(figureName);

    if (imageUrl) {
      return {
        figureName,
        imageUrl,
        status: 'success'
      };
    } else {
      return {
        figureName,
        imageUrl: null,
        status: 'no_image'
      };
    }
  } catch (error) {
    return {
      figureName,
      imageUrl: null,
      status: 'error',
      error: String(error)
    };
  }
}

// =====================================================
// BATCH PROCESSING
// =====================================================

async function processBatchFigures(): Promise<WikiImageResult[]> {
  const batchFigures = [
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

  console.log(`🔍 Processing ${batchFigures.length} figures for Wikipedia infobox images...\n`);

  const results: WikiImageResult[] = [];

  for (let i = 0; i < batchFigures.length; i++) {
    const figureName = batchFigures[i];
    console.log(`[${i + 1}/${batchFigures.length}] Processing: ${figureName}`);

    const result = await processFigure(figureName);
    results.push(result);

    // Rate limiting - don't overwhelm Wikipedia
    if (i < batchFigures.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 300));
    }
  }

  return results;
}

// =====================================================
// OUTPUT FORMATS
// =====================================================

function outputJSON(results: WikiImageResult[]): void {
  const imageMap: { [key: string]: string | null } = {};

  results.forEach(result => {
    if (result.status === 'success' && result.imageUrl) {
      imageMap[result.figureName] = result.imageUrl;
    } else {
      imageMap[result.figureName] = null;
    }
  });

  console.log(JSON.stringify(imageMap, null, 2));
}

function outputSQL(results: WikiImageResult[]): void {
  console.log(`-- Wikipedia Infobox Images Update`);
  console.log(`-- Generated for HistoGuesser migration`);
  console.log(`-- Run these UPDATE statements to fix the image URLs\n`);

  results.forEach(result => {
    if (result.status === 'success' && result.imageUrl) {
      // Create SQL UPDATE statement
      const escapedUrl = result.imageUrl.replace(/'/g, "''");
      console.log(`UPDATE figures SET images = jsonb_set(images, '{0,url}', '"${escapedUrl}"') WHERE name = '${result.figureName.replace(/'/g, "''")}';`);
    } else {
      console.log(`-- No image found for: ${result.figureName}`);
    }
  });
}

function outputCSV(results: WikiImageResult[]): void {
  console.log('Figure Name,Image URL,Status');

  results.forEach(result => {
    const url = result.imageUrl ? result.imageUrl : '';
    console.log(`"${result.figureName}","${url}","${result.status}"`);
  });
}

// =====================================================
// CLI INTERFACE
// =====================================================

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('🖼️  Wikipedia Infobox Image Fetcher');
    console.log('====================================');
    console.log('');
    console.log('Usage:');
    console.log('  npx tsx scripts/get-wiki-images.ts "Figure Name" "Another Figure"');
    console.log('  npx tsx scripts/get-wiki-images.ts --batch-migration --json');
    console.log('  npx tsx scripts/get-wiki-images.ts --batch-migration --sql');
    console.log('  npx tsx scripts/get-wiki-images.ts --batch-migration --csv');
    console.log('');
    console.log('Output formats:');
    console.log('  --json: JSON object mapping names to URLs');
    console.log('  --sql: SQL UPDATE statements for migration');
    console.log('  --csv: CSV format for spreadsheet import');
    process.exit(0);
  }

  if (args.includes('--batch-migration')) {
    const results = await processBatchFigures();

    console.log('\n📋 RESULTS SUMMARY:');
    console.log('==================');
    const successCount = results.filter(r => r.status === 'success').length;
    const noImageCount = results.filter(r => r.status === 'no_image').length;
    const errorCount = results.filter(r => r.status === 'error').length;

    console.log(`✅ Successful: ${successCount}`);
    console.log(`❌ No image: ${noImageCount}`);
    console.log(`💥 Errors: ${errorCount}`);
    console.log('');

    // Output in requested format
    if (args.includes('--json')) {
      outputJSON(results);
    } else if (args.includes('--sql')) {
      outputSQL(results);
    } else if (args.includes('--csv')) {
      outputCSV(results);
    } else {
      // Default to JSON
      outputJSON(results);
    }

  } else {
    // Process individual figure names from command line
    const results: WikiImageResult[] = [];

    for (const figureName of args) {
      if (figureName.startsWith('--')) continue;

      console.log(`Processing: ${figureName}`);
      const result = await processFigure(figureName);
      results.push(result);

      if (result.status === 'success') {
        console.log(`✅ ${figureName}: ${result.imageUrl}`);
      } else {
        console.log(`❌ ${figureName}: ${result.status}`);
      }

      // Brief pause between requests
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    // Output as JSON by default for individual queries
    const imageMap: { [key: string]: string | null } = {};
    results.forEach(result => {
      imageMap[result.figureName] = result.imageUrl;
    });

    console.log('\n📋 RESULTS:');
    console.log(JSON.stringify(imageMap, null, 2));
  }
}

// =====================================================
// SCRIPT EXECUTION
// =====================================================

main().catch(console.error);
