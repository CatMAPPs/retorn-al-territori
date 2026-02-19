#!/usr/bin/env tsx

/**
 * Fix Migration Images Script
 *
 * This script reads the wiki_image_updates.sql file and applies all the URL fixes
 * to the main migration file.
 */

import { readFileSync, writeFileSync } from 'fs';

// Read the update statements
const updateContent = readFileSync('wiki_image_updates.sql', 'utf-8');
const updateLines = updateContent.split('\n')
  .filter(line => line.trim().startsWith('UPDATE figures SET'))
  .map(line => line.trim());

// Parse the updates into a map
const imageUpdates: { [key: string]: string } = {};

updateLines.forEach(line => {
  // Extract name and URL from UPDATE statement
  const nameMatch = line.match(/WHERE name = '([^']+)'/);
  const urlMatch = line.match(/"(https:\/\/[^"]+)"/);

  if (nameMatch && urlMatch) {
    const name = nameMatch[1];
    const url = urlMatch[1];
    imageUpdates[name] = url;
  }
});

console.log(`Found ${Object.keys(imageUpdates).length} image updates to apply`);

// Read the migration file
let migrationContent = readFileSync('supabase/migrations/008_add_100_more_figures.sql', 'utf-8');

// Apply all the updates
for (const [name, newUrl] of Object.entries(imageUpdates)) {
  // Find the line with the figure name and replace the URL
  const lines = migrationContent.split('\n');
  const figureIndex = lines.findIndex(line => line.includes(`('${name}',`));

  if (figureIndex !== -1) {
    // Find the URL line (usually 2 lines down)
    for (let i = figureIndex; i < lines.length && i < figureIndex + 5; i++) {
      if (lines[i].includes('"url": "https://upload.wikimedia.org/')) {
        // Replace the URL
        const oldLine = lines[i];
        const newLine = oldLine.replace(/"url": "[^"]*"/, `"url": "${newUrl}"`);
        lines[i] = newLine;
        console.log(`✅ Updated ${name}`);
        break;
      }
    }
  } else {
    console.log(`❌ Could not find ${name} in migration file`);
  }

  migrationContent = lines.join('\n');
}

// Write back the updated migration file
writeFileSync('supabase/migrations/008_add_100_more_figures.sql', migrationContent);

console.log('\n🎉 Migration file updated with correct Wikipedia infobox images!');
console.log('All thumbnail URLs have been replaced with full-resolution images.');
