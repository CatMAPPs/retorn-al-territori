#!/usr/bin/env tsx

/**
 * Image Validation Script for HistoGuesser Figures
 *
 * This script validates all images for historical figures in the database,
 * identifies broken images, and generates reports for fixing them.
 *
 * Usage:
 *   npm run validate-images
 *   or
 *   npx tsx scripts/validate-figures-images.ts
 */

import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import {
  validateFigureImages,
  generateValidationReport,
  updateFigureImageStatuses,
  type FigureValidationResult
} from '../src/lib/utils/imageValidator';
import type { FigureImage } from '../src/types/figure';

// Load environment variables
config({ path: '.env' });
config({ path: '.env.local' });

// =====================================================
// CONFIGURATION
// =====================================================

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

console.log('🔧 Environment variables loaded:');
console.log('   - VITE_SUPABASE_URL:', SUPABASE_URL ? '✓ Set' : '❌ Missing');
console.log('   - SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? '✓ Set' : '❌ Not set');
console.log('   - VITE_SUPABASE_ANON_KEY:', process.env.VITE_SUPABASE_ANON_KEY ? '✓ Set' : '❌ Not set');

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('❌ Missing Supabase environment variables');
  console.error('Required: VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or VITE_SUPABASE_ANON_KEY)');
  console.error('');
  console.error('💡 Make sure your .env file contains:');
  console.error('   VITE_SUPABASE_URL=https://your-project.supabase.co');
  console.error('   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key');
  console.error('   (or VITE_SUPABASE_ANON_KEY=your-anon-key)');
  process.exit(1);
}

// =====================================================
// SUPABASE CLIENT
// =====================================================

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// =====================================================
// MAIN FUNCTIONS
// =====================================================

/**
 * Fetches all figures from the database
 */
async function fetchAllFigures() {
  console.log('📥 Fetching all figures from database...');

  const { data: figures, error } = await supabase
    .from('figures')
    .select('id, name, images')
    .order('name');

  if (error) {
    console.error('❌ Error fetching figures:', error);
    throw error;
  }

  console.log(`✅ Fetched ${figures?.length || 0} figures`);
  return figures || [];
}

/**
 * Validates images for all figures
 */
async function validateAllFigureImages(figures: any[]): Promise<FigureValidationResult[]> {
  console.log('🖼️ Starting image validation for all figures...');
  console.log(`   Timeout per image: 10 seconds`);
  console.log(`   Concurrency: 3 images per figure`);
  console.log('');

  const results: FigureValidationResult[] = [];
  const totalFigures = figures.length;
  let processed = 0;

  for (const figure of figures) {
    processed++;
    console.log(`🔍 [${processed}/${totalFigures}] Validating ${figure.name}...`);

    try {
      const images: FigureImage[] = figure.images || [];
      if (images.length === 0) {
        console.log(`   ⚠️ No images found for ${figure.name}`);
        continue;
      }

      const result = await validateFigureImages(
        figure.id,
        figure.name,
        images,
        10000 // 10 second timeout
      );

      results.push(result);

      // Log summary for this figure
      const status = result.invalidImages === 0 ? '✅' : result.validImages === 0 ? '❌' : '⚠️';
      console.log(`   ${status} ${result.validImages}/${result.totalImages} images valid`);

    } catch (error) {
      console.error(`   ❌ Error validating ${figure.name}:`, error);
    }

    // Small delay between figures to be respectful to servers
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  return results;
}

/**
 * Updates the database with validation results (optional)
 */
async function updateDatabaseWithResults(results: FigureValidationResult[], dryRun: boolean = true) {
  if (dryRun) {
    console.log('🔍 DRY RUN: Would update database with the following changes:');
    console.log('');

    for (const result of results) {
      if (result.invalidImages > 0) {
        await updateFigureImageStatuses(result.figureId, result);
      }
    }

    console.log('');
    console.log('💡 To apply these changes, run with --apply-updates flag');
    return;
  }

  console.log('🔄 Applying database updates...');

  for (const result of results) {
    if (result.invalidImages > 0) {
      try {
        await updateFigureImageStatuses(result.figureId, result);
        console.log(`✅ Updated ${result.figureName}`);
      } catch (error) {
        console.error(`❌ Failed to update ${result.figureName}:`, error);
      }
    }
  }

  console.log('✅ Database updates complete');
}

/**
 * Generates and saves validation report
 */
function saveValidationReport(results: FigureValidationResult[], filename?: string) {
  const report = generateValidationReport(results);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const reportFilename = filename || `image-validation-report-${timestamp}.txt`;

  // In Node.js environment, we would write to file
  // For now, just log the report
  console.log('📊 VALIDATION REPORT:');
  console.log('=' .repeat(60));
  console.log(report);

  // Save report to file (would need fs in Node.js environment)
  console.log(`💾 Report would be saved to: ${reportFilename}`);
  console.log('💡 Copy the report above and save it manually for reference');
}

// =====================================================
// CLI INTERFACE
// =====================================================

async function main() {
  console.log('🚀 Starting main() function...');

  const args = process.argv.slice(2);
  const applyUpdates = args.includes('--apply-updates');
  const reportOnly = args.includes('--report-only');

  console.log('🚀 HistoGuesser Image Validation Script');
  console.log('=====================================');
  console.log('');

  if (applyUpdates) {
    console.log('⚠️  WARNING: --apply-updates flag detected. This will modify the database!');
    console.log('   Make sure you have a backup before proceeding.');
    console.log('');
  }

  try {
    // Step 1: Fetch all figures
    const figures = await fetchAllFigures();
    if (figures.length === 0) {
      console.log('❌ No figures found in database');
      return;
    }

    // Step 2: Validate all images
    const results = await validateAllFigureImages(figures);

    // Step 3: Generate report
    saveValidationReport(results);

    // Step 4: Update database (if requested)
    if (!reportOnly) {
      await updateDatabaseWithResults(results, !applyUpdates);
    }

    // Step 5: Summary
    console.log('');
    console.log('🎯 VALIDATION COMPLETE');
    console.log('=====================');
    console.log(`Total figures processed: ${results.length}`);
    console.log(`Figures with issues: ${results.filter(r => r.invalidImages > 0).length}`);
    console.log(`Figures with all images broken: ${results.filter(r => r.validImages === 0).length}`);

    const totalImages = results.reduce((sum, r) => sum + r.totalImages, 0);
    const totalValid = results.reduce((sum, r) => sum + r.validImages, 0);
    console.log(`Overall success rate: ${totalValid}/${totalImages} (${((totalValid / totalImages) * 100).toFixed(1)}%)`);

    // Step 6: Source-aware breakdown (self-hosted vs wikimedia)
    console.log('');
    console.log('📦 IMAGE SOURCE BREAKDOWN');
    console.log('='.repeat(40));

    let selfHostedTotal = 0, selfHostedValid = 0;
    let wikimediaTotal = 0, wikimediaValid = 0;
    let unknownTotal = 0, unknownValid = 0;

    for (const figure of figures) {
      const images: FigureImage[] = figure.images || [];
      for (const img of images) {
        const source = (img as any).source;
        const result = results
          .find(r => r.figureId === figure.id)
          ?.results.find(r => r.url === img.url);
        const isValid = result?.isValid ?? false;

        if (source === 'self_hosted') {
          selfHostedTotal++;
          if (isValid) selfHostedValid++;
        } else if (source === 'wikimedia') {
          wikimediaTotal++;
          if (isValid) wikimediaValid++;
        } else {
          unknownTotal++;
          if (isValid) unknownValid++;
        }
      }
    }

    if (selfHostedTotal > 0) {
      console.log(`Self-hosted:  ${selfHostedValid}/${selfHostedTotal} valid (${((selfHostedValid / selfHostedTotal) * 100).toFixed(1)}%)`);
    }
    if (wikimediaTotal > 0) {
      console.log(`Wikimedia:    ${wikimediaValid}/${wikimediaTotal} valid (${((wikimediaValid / wikimediaTotal) * 100).toFixed(1)}%)`);
    }
    if (unknownTotal > 0) {
      console.log(`Other/legacy: ${unknownValid}/${unknownTotal} valid (${((unknownValid / unknownTotal) * 100).toFixed(1)}%)`);
    }

  } catch (error) {
    console.error('❌ Script failed:', error);
    process.exit(1);
  }
}

// =====================================================
// RUN SCRIPT
// =====================================================

// Run main function directly (simplified for npm script execution)
main().catch(console.error);

export { main as validateFiguresImages };
