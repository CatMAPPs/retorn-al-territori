#!/usr/bin/env tsx

/**
 * Add Image Metadata Script
 *
 * This script adds the required 'priority' and 'status' fields to all images
 * in the migration file to make them compatible with the FigureCarousel component.
 */

import { readFileSync, writeFileSync } from 'fs';

console.log('🔧 Adding required image metadata (priority, status) to all figures...');

// Read the migration file
let migrationContent = readFileSync('supabase/migrations/008_add_100_more_figures.sql', 'utf-8');
const lines = migrationContent.split('\n');

let updatedLines: string[] = [];
let updatedCount = 0;

// Process each line
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Find image JSON arrays (contain 'url' and end with }]'::jsonb,)
  if (line.includes('"url": "https://upload.wikimedia.org/') && line.includes('}]\'::jsonb,')) {
    // Extract the JSON part
    const jsonMatch = line.match(/(\[.*\])/);
    if (jsonMatch) {
      try {
        let imageArray = JSON.parse(jsonMatch[1]);

        // Add priority and status to each image if missing
        imageArray = imageArray.map((img: any) => {
          if (!img.priority) img.priority = 1;
          if (!img.status) img.status = 'active';
          return img;
        });

        // Replace the JSON in the line
        const newJson = JSON.stringify(imageArray);
        const newLine = line.replace(jsonMatch[0], newJson);

        updatedLines.push(newLine);
        updatedCount++;
      } catch (error) {
        console.error(`❌ Failed to parse JSON in line: ${line.substring(0, 100)}...`);
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

console.log(`✅ Added priority and status fields to ${updatedCount} figure images`);
console.log('🎉 Migration file now compatible with FigureCarousel component!');


