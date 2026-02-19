#!/usr/bin/env tsx

/**
 * Ensure First Tag is Category Script
 *
 * This script ensures that the first tag for each figure is one of the 8 required categories:
 * Politics, Military, Science, Religion, Culture, Exploration, Social, Business
 */

import { readFileSync, writeFileSync } from 'fs';

// Tag mapping for identifying categories from existing tags
const tagToCategory: { [key: string]: string } = {
  // Politics
  'politics': 'politics',
  'president': 'politics',
  'prime_minister': 'politics',
  'chancellor': 'politics',
  'king': 'politics',
  'queen': 'politics',
  'emperor': 'politics',
  'royalty': 'politics',
  'revolution': 'politics',
  'independence': 'politics',

  // Military
  'military': 'military',
  'general': 'military',
  'commander': 'military',
  'strategist': 'military',
  'warrior': 'military',
  'conquistador': 'military',
  'civil_war': 'military',
  'admiral': 'military',
  'desert_fox': 'military',

  // Science
  'scientist': 'science',
  'mathematician': 'science',
  'physicist': 'science',
  'chemist': 'science',
  'astronomer': 'science',
  'biologist': 'science',
  'microbiologist': 'science',
  'botanist': 'science',
  'inventor': 'science',
  'engineer': 'science',
  'astrophysicist': 'science',
  'oceanographer': 'science',

  // Religion
  'religion': 'religion',
  'christianity': 'religion',
  'buddhism': 'religion',
  'islam': 'religion',
  'theology': 'religion',
  'saint': 'religion',
  'prophet': 'religion',
  'monk': 'religion',
  'priest': 'religion',
  'bishop': 'religion',
  'pope': 'religion',
  'dalai_lama': 'religion',

  // Culture
  'artist': 'culture',
  'painter': 'culture',
  'sculptor': 'culture',
  'composer': 'culture',
  'musician': 'culture',
  'writer': 'culture',
  'author': 'culture',
  'poet': 'culture',
  'philosopher': 'culture',
  'actor': 'culture',
  'filmmaker': 'culture',
  'architect': 'culture',
  'humorist': 'culture',
  'jazz': 'culture',
  'singer': 'culture',
  'comedy': 'culture',
  'piano': 'culture',
  'baroque': 'culture',

  // Exploration
  'explorer': 'exploration',
  'navigator': 'exploration',
  'merchant': 'exploration',
  'adventurer': 'exploration',
  'archaeologist': 'exploration',
  'polar': 'exploration',
  'antarctic': 'exploration',
  'aviator': 'exploration',

  // Social
  'activist': 'social',
  'abolitionist': 'social',
  'suffragist': 'social',
  'reformer': 'social',
  'humanitarian': 'social',
  'nurse': 'social',
  'physician': 'social',
  'social_worker': 'social',
  'environmentalist': 'social',
  'diplomat': 'social',
  'statistician': 'social',

  // Business
  'industrialist': 'business',
  'businessman': 'business',
  'banker': 'business',
  'financier': 'business',
  'investor': 'business',
  'entrepreneur': 'business',
  'philanthropist': 'business'
};

const requiredCategories = ['politics', 'military', 'science', 'religion', 'culture', 'exploration', 'social', 'business'];

console.log('🔧 Ensuring first tag is a required category...');

// Read the migration file
let migrationContent = readFileSync('supabase/migrations/008_add_100_more_figures.sql', 'utf-8');
const lines = migrationContent.split('\n');

let updatedLines: string[] = [];
let updatedCount = 0;

// Process each line
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Find tag arrays (the final ARRAY before closing )
  if (line.includes("ARRAY[") && line.includes("]),")) {
    const tagMatch = line.match(/ARRAY\[([^\]]+)\]/);
    if (tagMatch) {
      const tagsString = tagMatch[1];
      const tags = tagsString.split(',').map(tag =>
        tag.replace(/'/g, '').trim().toLowerCase()
      );

      // Check if first tag is already a required category
      const firstTag = tags[0];
      let needsUpdate = false;

      if (!firstTag || !requiredCategories.includes(firstTag)) {
        // Find what category this figure should belong to based on existing tags
        let categoryTag = '';

        for (const tag of tags) {
          if (tagToCategory[tag]) {
            categoryTag = tagToCategory[tag];
            break;
          }
        }

        if (categoryTag) {
          // Add the category tag at the beginning
          tags.unshift(categoryTag);
          needsUpdate = true;
        } else {
          console.log(`⚠️  Could not determine category for figure with tags: [${tags.join(', ')}]`);
        }
      }

      if (needsUpdate) {
        // Create the new tag array string
        const newTagsString = tags.map(tag => `'${tag}'`).join(', ');
        const newLine = line.replace(/ARRAY\[([^\]]+)\]/, `ARRAY[${newTagsString}]`);

        updatedLines.push(newLine);
        updatedCount++;
      } else {
        updatedLines.push(line);
      }
    } else {
      updatedLines.push(line);
    }
  } else {
    updatedLines.push(line);
  }
}

// Write back the updated migration file
migrationContent = updatedLines.join('\n');
writeFileSync('supabase/migrations/008_add_100_more_figures.sql', migrationContent);

console.log(`✅ Updated ${updatedCount} figures to have required category as first tag`);
console.log('🎉 First tag verification complete!');

// Quick verification
console.log('\n🔍 Quick verification...');

const tagIssues: string[] = [];
const lines2 = migrationContent.split('\n');

for (let i = 0; i < lines2.length; i++) {
  const line = lines2[i];

  // Find the final ARRAY (tags) - it comes before the closing );
  if (line.includes("ARRAY[") && line.includes("]),")) {
    // Go back to find the figure name
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

      // Check if first tag is a required category
      const firstTag = tags[0];
      if (!requiredCategories.includes(firstTag)) {
        tagIssues.push(`${figureName}: First tag "${firstTag}" is not a required category`);
      }
    }
  }
}

if (tagIssues.length === 0) {
  console.log('✅ All figures now have a required category as their first tag!');
} else {
  console.log('❌ Found issues:');
  tagIssues.forEach(issue => console.log(`   - ${issue}`));
}
