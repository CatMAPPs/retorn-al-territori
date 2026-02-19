#!/usr/bin/env tsx

/**
 * Fix Figure Tags Script
 *
 * This script maps the existing descriptive tags to the required 8 categories
 */

import { readFileSync, writeFileSync } from 'fs';

// Tag mapping: existing tags -> required categories
const tagMapping: { [key: string]: string } = {
  // Science category
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

  // Culture category
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

  // Exploration category
  'explorer': 'exploration',
  'navigator': 'exploration',
  'merchant': 'exploration',
  'adventurer': 'exploration',
  'archaeologist': 'exploration',
  'polar': 'exploration',
  'antarctic': 'exploration',

  // Social category
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

  // Business category
  'industrialist': 'business',
  'businessman': 'business',
  'banker': 'business',
  'financier': 'business',
  'investor': 'business',
  'entrepreneur': 'business',
  'philanthropist': 'business',
  'oil': 'business',
  'automotive': 'business',
  'shipping': 'business',
  'railroads': 'business',
  'fur_trade': 'business',
  'real_estate': 'business',
  'software': 'business',
  'ecommerce': 'business',
  'space': 'business',
  'petrochemicals': 'business',

  // Military category
  'military': 'military',
  'general': 'military',
  'commander': 'military',
  'strategist': 'military',
  'warrior': 'military',
  'conquistador': 'military',
  'civil_war': 'military',
  'admiral': 'military',
  'desert_fox': 'military',

  // Religion category
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
  'guru': 'religion',

  // Politics category
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
  'republic': 'politics',
  'democracy': 'politics',
  'dictator': 'politics',
  'communist': 'politics',
  'fascist': 'politics',
  'liberal': 'politics',
  'conservative': 'politics',
  'socialist': 'politics'
};

// Required categories that must be present
const requiredCategories = ['politics', 'military', 'science', 'religion', 'culture', 'exploration', 'social', 'business'];

console.log('🔧 Fixing figure tags to use required categories...');

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

      // Map tags to required categories
      const mappedTags = new Set<string>();
      let hasRequiredCategory = false;

      for (const tag of tags) {
        if (tagMapping[tag]) {
          const mappedCategory = tagMapping[tag];
          mappedTags.add(mappedCategory);
          if (requiredCategories.includes(mappedCategory)) {
            hasRequiredCategory = true;
          }
        }
      }

      // If no required category was found, try to infer one from remaining tags
      if (!hasRequiredCategory) {
        // Look for other patterns that might indicate category
        for (const tag of tags) {
          if (tag.includes('warrior') || tag.includes('general') || tag.includes('soldier')) {
            mappedTags.add('military');
            hasRequiredCategory = true;
          } else if (tag.includes('aviator') || tag.includes('pilot')) {
            mappedTags.add('exploration');
            hasRequiredCategory = true;
          } else if (tag.includes('scholar') || tag.includes('academic')) {
            mappedTags.add('science');
            hasRequiredCategory = true;
          } else if (tag.includes('novelist') || tag.includes('playwright') || tag.includes('dramatist')) {
            mappedTags.add('culture');
            hasRequiredCategory = true;
          }
        }
      }

      // Always include geographic and other descriptive tags
      const geoTags = tags.filter(tag =>
        tag.includes('europe') || tag.includes('america') || tag.includes('asia') ||
        tag.includes('africa') || tag.includes('usa') || tag.includes('china') ||
        tag.includes('india') || tag.includes('japan') || tag.includes('germany') ||
        tag.includes('france') || tag.includes('england') || tag.includes('italy') ||
        tag.includes('spain') || tag.includes('poland') || tag.includes('russia') ||
        tag.includes('greece') || tag.includes('egypt') || tag.includes('ethiopia') ||
        tag.includes('kenya') || tag.includes('pakistan') || tag.includes('scotland') ||
        tag.includes('norway') || tag.includes('sweden') || tag.includes('netherlands') ||
        tag.includes('portugal') || tag.includes('ireland') || tag.includes('cuba') ||
        tag.includes('argentina') || tag.includes('venezuela') || tag.includes('albania') ||
        tag.includes('macedonia') || tag.includes('tibet') || tag.includes('saudi_arabia') ||
        tag.includes('nepal') || tag.includes('croatia') || tag.includes('moldova') ||
        tag.includes('mongolia') || tag.includes('peru') || tag.includes('canada') ||
        tag.includes('australia') || tag.includes('mexico') || tag.includes('brazil') ||
        tag.includes('south_africa') || tag.includes('nigeria') || tag.includes('japan') ||
        tag.includes('korea') || tag.includes('thailand') || tag.includes('vietnam') ||
        tag.includes('indonesia') || tag.includes('philippines') || tag.includes('malaysia') ||
        tag.includes('singapore') || tag.includes('hong_kong') || tag.includes('taiwan') ||
        tag.includes('iran') || tag.includes('iraq') || tag.includes('turkey') ||
        tag.includes('israel') || tag.includes('arabia') || tag.includes('morocco') ||
        tag.includes('egypt') || tag.includes('tunisia') || tag.includes('algeria')
      );

      const otherTags = tags.filter(tag =>
        tag.includes('female') || tag.includes('male') ||
        tag.includes('nobel') || tag.includes('prize') ||
        tag.includes('ancient') || tag.includes('medieval') || tag.includes('renaissance') ||
        tag.includes('early_modern') || tag.includes('modern') ||
        tag.includes('communist') || tag.includes('fascist') || tag.includes('liberal') ||
        tag.includes('conservative') || tag.includes('socialist') || tag.includes('revolutionary')
      );

      // Combine all tags
      const finalTags = Array.from(mappedTags).concat(geoTags).concat(otherTags);

      // Create the new tag array string
      const newTagsString = finalTags.map(tag => `'${tag}'`).join(', ');
      const newLine = line.replace(/ARRAY\[([^\]]+)\]/, `ARRAY[${newTagsString}]`);

      updatedLines.push(newLine);
      updatedCount++;
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

console.log(`✅ Updated ${updatedCount} tag arrays to use required categories`);
console.log('🎉 Tag fixing complete!');

// Now verify the tags are correct
console.log('\n🔍 Final tag verification...');

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

      // Check if at least one required category is present
      const hasRequiredCategory = tags.some(tag =>
        requiredCategories.includes(tag)
      );

      if (!hasRequiredCategory) {
        tagIssues.push(`${figureName}: Still missing required category. Has: [${tags.join(', ')}]`);
      }
    }
  }
}

if (tagIssues.length === 0) {
  console.log('✅ All figures now have at least one required category tag!');
} else {
  console.log('❌ Still found tag issues:');
  tagIssues.forEach(issue => console.log(`   - ${issue}`));
}
