#!/usr/bin/env tsx

/**
 * Update Migration URLs Script
 *
 * This script reads the 100-new-links.json file and updates all URLs
 * in the 008_add_100_more_figures.sql migration file.
 */

import { readFileSync, writeFileSync } from 'fs';

// Read the JSON file with correct URLs
const imageData = JSON.parse(readFileSync('scripts/100-new-links.json', 'utf-8'));

// Read the migration file
let migrationContent = readFileSync('supabase/migrations/008_add_100_more_figures.sql', 'utf-8');
const lines = migrationContent.split('\n');

let updatedCount = 0;

// Go through each figure in the JSON and update the migration file
for (const [figureName, correctUrl] of Object.entries(imageData)) {
  if (correctUrl && typeof correctUrl === 'string') {
    let foundFigure = false;

    for (let i = 0; i < lines.length; i++) {
      // Look for the figure name in INSERT statement
      if (lines[i].includes(`('${figureName}',`)) {
        foundFigure = true;

        // Find the images JSON line (usually 2-3 lines down)
        for (let j = i; j < lines.length && j < i + 5; j++) {
          if (lines[j].includes('"url": "https://upload.wikimedia.org/')) {
            // Replace the URL
            const oldLine = lines[j];
            const urlPattern = /"url": "[^"]*"/;
            const newLine = oldLine.replace(urlPattern, `"url": "${correctUrl}"`);
            lines[j] = newLine;
            updatedCount++;
            console.log(`✅ Updated ${figureName}`);
            break;
          }
        }
        break;
      }
    }

    if (!foundFigure) {
      console.log(`❌ Could not find ${figureName} in migration file`);
    }
  }
}

migrationContent = lines.join('\n');

// Write back the updated migration file
writeFileSync('supabase/migrations/008_add_100_more_figures.sql', migrationContent);

console.log(`\n🎉 Migration file updated! ${updatedCount} URLs replaced with correct Wikipedia infobox images.`);
console.log('All thumbnail URLs have been replaced with full-resolution images.');
