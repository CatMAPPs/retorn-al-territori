#!/usr/bin/env tsx

/**
 * Clean Migration Duplicates Script
 *
 * This script removes duplicate figures from the migration and verifies tags
 */

import { readFileSync, writeFileSync } from 'fs';

// Figures that are duplicates (already in original seed)
const duplicatesToRemove = [
  'Malala Yousafzai',
  'Marie Curie',
  'Nikola Tesla'
];

// Required tag categories (at least one of these must be present)
const requiredCategories = ['politics', 'military', 'science', 'religion', 'culture', 'exploration', 'social', 'business'];

console.log('🧹 Cleaning migration file...');

// Read the migration file
let migrationContent = readFileSync('supabase/migrations/008_add_100_more_figures.sql', 'utf-8');
const lines = migrationContent.split('\n');

let cleanedLines: string[] = [];
let removedCount = 0;
let figureCount = 0;

// Process each line
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Check if this is a figure entry (starts with INSERT statement)
  if (line.includes("INSERT INTO figures")) {
    cleanedLines.push(line);
    continue;
  }

  // Check if this is a figure entry (starts with figure name in quotes followed by ARRAY)
  const figureMatch = line.match(/^\('([^']+)', ARRAY\[/);
  if (figureMatch) {
    const figureName = figureMatch[1];

    // Check if this figure should be removed (duplicate)
    if (duplicatesToRemove.includes(figureName)) {
      console.log(`🗑️  Removing duplicate: ${figureName}`);

      // Skip this figure's entry (find the closing ), line)
      let bracketCount = 0;
      let inFigure = true;

      while (i < lines.length && inFigure) {
        const currentLine = lines[i];
        bracketCount += (currentLine.match(/\(/g) || []).length;
        bracketCount -= (currentLine.match(/\)/g) || []).length;

        if (bracketCount === 0 && currentLine.includes('),')) {
          i++; // Skip this closing line too
          inFigure = false;
        } else {
          i++; // Skip this line
        }
      }
      removedCount++;
      continue;
    } else {
      figureCount++;
    }
  }

  cleanedLines.push(line);
}

// Write back the cleaned file
migrationContent = cleanedLines.join('\n');
writeFileSync('supabase/migrations/008_add_100_more_figures.sql', migrationContent);

console.log(`\n✅ Removed ${removedCount} duplicate figures`);
console.log(`📊 Migration now contains ${figureCount} new figures`);

// Now verify tags
console.log('\n🔍 Verifying tags...');

const tagIssues: string[] = [];
const lines2 = migrationContent.split('\n');

for (let i = 0; i < lines2.length; i++) {
  const line = lines2[i];

  // Find the final ARRAY (tags) - it comes before the closing );
  if (line.includes("ARRAY[") && line.includes("]),")) {
    // Go back to find the figure name (usually 5-7 lines back)
    let figureName = 'Unknown';

    for (let j = i - 1; j >= 0 && j > i - 10; j--) {
      const nameMatch = lines2[j].match(/^\('([^']+)', ARRAY\[/);
      if (nameMatch) {
        figureName = nameMatch[1];
        break;
      }
    }

    // Extract tags from the array
    const tagMatch = line.match(/ARRAY\[([^\]]+)\]/);
    if (tagMatch) {
      const tags = tagMatch[1].split(',').map(tag =>
        tag.replace(/'/g, '').trim().toLowerCase()
      );

      // Check if at least one required category is present
      const hasRequiredCategory = tags.some(tag =>
        requiredCategories.includes(tag)
      );

      if (!hasRequiredCategory) {
        tagIssues.push(`${figureName}: Missing required category. Has: [${tags.join(', ')}]`);
      }
    }
  }
}

if (tagIssues.length === 0) {
  console.log('✅ All figures have at least one required category tag!');
} else {
  console.log('❌ Found tag issues:');
  tagIssues.forEach(issue => console.log(`   - ${issue}`));
}

console.log('\n🎉 Migration cleaning complete!');
