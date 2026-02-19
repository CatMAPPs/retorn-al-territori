  we recently implemented the following plan: 'c:/Users/Daniel                                              
  Lopez/Desktop/Neet-a-thon/Histo-Guesser/._docs/recent-plan-we-built.md' as part of completing **Phase     
   2: Data Collection Pipeline** of our 'c:/Users/Daniel                                                    
  Lopez/Desktop/Neet-a-thon/Histo-Guesser/._docs/tasklists/figures-game-mode-dev-battle-plan.md'...         
  Every commit since this commit (iD: 45d3d660eae4cebc0e2c60d2d45f33ec99e080c5) is related to the edits     
   made in looking to compelet the phase 2 build out. Now I need instruction on how to test the             
  implementation and basically next steps; do i need to run a migration, or what do I need to do? 
 
  # *SECOND PLAN (IMPLEMENTING)*:
 
 Ready to code?

 Here is Claude's plan:
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌ Phase 2 Completion Plan: Data Collection Pipeline (300 Milestone → 1000+)

 Context

 HistoGuesser currently has ~130 historical figures (30 seed + ~97 from migration 008). The
 figures-game-mode-dev-battle-plan Phase 2 goal is a scalable data collection pipeline. We're        
 targeting 300 figures as the first milestone (~170 new), with the pipeline designed to scale to     
 1000+ in future runs. Using a hybrid approach (AI generates candidates, scripts validate/enrich via 
  Wikipedia API, user reviews edge cases). We're also self-hosting images via Supabase Storage       
 instead of hotlinking Wikipedia.

 Phase 1 (image fallback system) is already complete. Existing scripts (get-wiki-images.ts,
 find-figure-images.ts, validate-figures-images.ts) provide foundation to build on.

 ---
 Step 1: Set Up Supabase Storage for Images

 Goal: Create infrastructure to self-host figure images instead of relying on fragile Wikipedia      
 hotlinks.

 1a. Create Supabase Storage bucket + schema additions

 - New migration file: supabase/migrations/012_figure_image_storage.sql
   - Create a public figure-images storage bucket
   - Add RLS policy: public read access for all, service-role-only write
   - Add research_stage column to figures table: TEXT DEFAULT 'seed' — values: 'seed',
 'ai_generated', 'validated', 'reviewed'
   - Backfill existing figures: UPDATE figures SET research_stage = 'seed'
   - No new image column — self-hosted URLs go inside the existing images JSONB array (see 1c)       

 1b. Create image download + upload script

 - New file: scripts/upload-figure-images.ts
   - For each figure in DB: download primary image from images[0].url → upload to Supabase Storage   
 as figure-images/{figure_id}.webp (or preserve original format)
   - Update the figure's images JSONB array: insert self-hosted image as priority 1 with "source":   
 "self_hosted", demote existing Wikipedia URL to priority 2 with "source": "wikimedia" and "status": 
  "fallback"
   - Example resulting images array:
   [
   {"url": "https://project.supabase.co/storage/v1/object/public/figure-images/uuid.webp", "source": 
  "self_hosted", "license": "Public Domain", "credit": "...", "priority": 1, "status": "active"},    
   {"url": "https://upload.wikimedia.org/...", "source": "wikimedia", "license": "Public Domain",    
 "credit": "...", "priority": 2, "status": "fallback"}
 ]
   - Handle: rate limiting (300ms between downloads), retries (3 attempts), progress logging
   - Support --dry-run, --figure-id <id> (single figure), --skip-existing (idempotent reruns)        
   - Uses native fetch + @supabase/supabase-js storage API — no new dependencies

 1c. Update FigureCarousel to use priority-based image selection

 - Modify: src/components/game/FigureCarousel.vue
   - Select image by priority: use images array sorted by priority, pick first with status ===       
 'active'
   - On <img @error>: mark current image failed, try next priority level (the Wikipedia fallback)    
   - This is simpler than the previous complex fallback system — just iterate the sorted array       
 - Modify: src/types/figure.ts — ensure FigureImage type includes optional source field
 ('self_hosted' | 'wikimedia')

 1d. Backfill existing ~130 figures

 - Run upload-figure-images.ts against all current figures
 - Validate all self-hosted images load correctly via validate-figures-images.ts
 - This de-risks Wikipedia hotlink breakage for all existing content

 ---
 Step 2: Build the Hybrid Figure Pipeline

 Goal: Create the tooling to generate, validate, and prepare figures at scale. Designed for 1000+    
 even though first run targets ~170.

 2a. AI Candidate Generator output format

 - New file: scripts/figure-candidates-schema.json
   - Define the JSON schema that AI-generated candidate lists must follow:
   {
   "name": "string (canonical name)",
   "aliases": ["string (common variations, nicknames)"],
   "birth_year": "number (negative for BCE)",
   "death_year": "number|null",
   "hometown": "string (City, Country — modern names)",
   "description": "string (50-100 words, humorous/factual blend)",
   "category": "politics|military|science|religion|culture|exploration|social|business",
   "difficulty": "easy|medium|hard",
   "tags": ["string (additional descriptive tags)"],
   "wikipedia_page": "string (exact Wikipedia article title)"
 }
   - No lat/lon in candidate schema. Coordinates are extracted exclusively from Wikipedia by the     
 validation script — AI-suggested coordinates are unreliable for a scoring game.
   - We'll generate candidates in batches of ~25 per category to maintain balance

 2b. Wikipedia Validation & Enrichment Script

 - New file: scripts/validate-figure-candidates.ts
   - Input: JSON file of AI-generated candidates
   - Startup: Preload all existing figure names + aliases from DB into memory (normalized
 lowercase). Cache this for the entire run — avoids repeated DB queries at scale.
   - For each candidate, via Wikipedia REST API (en.wikipedia.org/api/rest_v1/):
       i. Page verification: Fetch page summary → confirm article exists
     ii. Birth year extraction: Parse from page content, cross-check against AI suggestion. Flag if  
 >5 year discrepancy.
     iii. Birthplace → Coordinates resolution (hierarchical):
           - Extract birthplace string from page
       - Search for Wikipedia article on that birthplace → extract coordinates
       - If no coordinates found: try parent region/country page
       - If still none: flag as needs_review with reason
       - This handles messy formats like "Ulm, Kingdom of Württemberg" or "Near present-day Tehran"  
     iv. Image discovery: Fetch infobox image URL (reuse logic from get-wiki-images.ts)
     v. Duplicate detection: Fuzzy match name + aliases against preloaded cache using Levenshtein    
 (reuse src/lib/matching/fuzzyMatch.ts). Flag if similarity > 0.85.
   - Output: Enriched JSON with validation status per figure:
       - valid — all data confirmed, coordinates resolved, no duplicates
     - needs_review — data conflicts, missing coordinates, or potential duplicate (includes reason   
 string)
     - failed — page not found or critical data missing
   - Rate limiting: 300ms between Wikipedia API calls
   - Progress: Logs progress every 10 figures, outputs summary at end

 2c. Figure Insertion Script

 - New file: scripts/insert-validated-figures.ts
   - Input: Validated JSON from step 2b (only valid + user-approved needs_review entries)
   - Idempotent by design:
       - Before each insert: check if figure name already exists in DB
     - --skip-existing flag (default on) to safely rerun after crashes
     - Before each image upload: check if storage object already exists
   - For each figure:
       i. Insert into figures table with research_stage = 'validated'
     ii. Download Wikipedia image → upload to Supabase Storage
     iii. Update figure's images JSONB with self-hosted (priority 1) + Wikipedia fallback (priority  
 2)
   - Generates summary report: inserted count, skipped count, failed count, category breakdown       
   - Support --dry-run for preview
   - Also generates a SQL migration file as backup/audit trail

 2d. Duplicate Detection (integrated into 2b)

 - Preloads all names + aliases at startup, normalized to lowercase
 - Levenshtein fuzzy match (reuse src/lib/matching/fuzzyMatch.ts)
 - At 300 figures: ~300 comparisons per candidate (trivial). At 1000+: still fast with in-memory     
 cache.
 - Flags potential duplicates for user review with match details

 ---
 Step 3: Generate & Process ~170 New Figures

 Goal: Actually produce the figures using the pipeline from Step 2.

 3a. Category distribution target

 Current ~130 figures. To reach 300, we need ~170 new figures:

 ┌─────────────┬────────────┬───────────────────────────────────────────────────┐
 │  Category   │ Target New │                       Notes                       │
 ├─────────────┼────────────┼───────────────────────────────────────────────────┤
 │ Politics    │ ~22        │ Leaders, revolutionaries, activists               │
 ├─────────────┼────────────┼───────────────────────────────────────────────────┤
 │ Military    │ ~21        │ Generals, warriors, strategists                   │
 ├─────────────┼────────────┼───────────────────────────────────────────────────┤
 │ Science     │ ~22        │ Physicists, biologists, mathematicians, inventors │
 ├─────────────┼────────────┼───────────────────────────────────────────────────┤
 │ Religion    │ ~21        │ Religious leaders, reformers, theologians         │
 ├─────────────┼────────────┼───────────────────────────────────────────────────┤
 │ Culture     │ ~22        │ Artists, writers, musicians, philosophers         │
 ├─────────────┼────────────┼───────────────────────────────────────────────────┤
 │ Exploration │ ~21        │ Explorers, navigators, astronauts                 │
 ├─────────────┼────────────┼───────────────────────────────────────────────────┤
 │ Social      │ ~21        │ Reformers, abolitionists, humanitarians           │
 ├─────────────┼────────────┼───────────────────────────────────────────────────┤
 │ Business    │ ~20        │ Entrepreneurs, industrialists, innovators         │
 └─────────────┴────────────┴───────────────────────────────────────────────────┘

 Geographic targets: ~40% Europe, ~30% Americas, ~20% Asia, ~10% Africa/Other

 3b. Candidate generation process (iterative)

 1. Generate candidate JSON batches (~25 figures per category) using schema from 2a
 2. Run validate-figure-candidates.ts against each batch
 3. User reviews needs_review entries — approves, rejects, or manually fixes
 4. Run insert-validated-figures.ts for approved figures (idempotent, safe to rerun)
 5. Repeat until 300 target reached (~3-4 rounds of ~50)

 3c. Quality gates

 - After each batch of ~50 figures: validate all images load, check category balance, check
 geographic distribution
 - Run validate-figures-images.ts after each batch to confirm image health
 - Spot-check 10% of coordinates in Google Maps

 ---
 Step 4: Validation & Cleanup

 4a. Full validation pass

 - Run image validator across all 300 figures (both self-hosted and fallback URLs)
 - Confirm category distribution matches targets
 - Check for any remaining duplicates across the full dataset
 - Verify research_stage is set correctly for all figures

 4b. Update existing scripts for new pipeline format

 - Update validate-figures-images.ts to validate both self_hosted and wikimedia source images in the 
  array
 - Ensure image validator reports on self-hosted vs. Wikipedia URL health separately

 ---
 Files to Create/Modify

 File: supabase/migrations/012_figure_image_storage.sql
 Action: CREATE
 Purpose: Storage bucket + research_stage column
 ────────────────────────────────────────
 File: scripts/upload-figure-images.ts
 Action: CREATE
 Purpose: Download + upload images to Supabase Storage
 ────────────────────────────────────────
 File: scripts/validate-figure-candidates.ts
 Action: CREATE
 Purpose: Wikipedia API validation of AI candidates
 ────────────────────────────────────────
 File: scripts/insert-validated-figures.ts
 Action: CREATE
 Purpose: Insert validated figures + upload images
 ────────────────────────────────────────
 File: scripts/figure-candidates-schema.json
 Action: CREATE
 Purpose: JSON schema for candidate format
 ────────────────────────────────────────
 File: src/components/game/FigureCarousel.vue
 Action: MODIFY
 Purpose: Priority-based image selection with fallback
 ────────────────────────────────────────
 File: src/types/figure.ts
 Action: MODIFY
 Purpose: Add source field to FigureImage type
 ────────────────────────────────────────
 File: scripts/validate-figures-images.ts
 Action: MODIFY
 Purpose: Support self-hosted + wikimedia validation
 ────────────────────────────────────────
 File: package.json
 Action: MODIFY
 Purpose: Add validate-candidates and insert-figures npm scripts

 Existing Code to Reuse

 What: Wikipedia image fetching
 Where: scripts/get-wiki-images.ts
 Used In: validate-figure-candidates.ts
 ────────────────────────────────────────
 What: Fuzzy matching / Levenshtein
 Where: src/lib/matching/fuzzyMatch.ts
 Used In: Duplicate detection
 ────────────────────────────────────────
 What: Image URL validation
 Where: src/lib/utils/imageValidator.ts
 Used In: Post-insertion validation
 ────────────────────────────────────────
 What: Supabase client setup
 Where: src/lib/supabase/client.ts
 Used In: All new scripts
 ────────────────────────────────────────
 What: Tag-to-category mapping
 Where: scripts/ensure_first_tag_category.ts
 Used In: Tag validation
 ────────────────────────────────────────
 What: Image metadata enrichment
 Where: scripts/add_image_metadata.ts
 Used In: priority/status field patterns

 Verification

 1. Storage works: Upload a test image to Supabase Storage, load it in browser
 2. Pipeline works end-to-end: Generate 5 test candidates → validate → insert → verify in game       
 3. Images load in-game: Play a Free Play round, confirm self-hosted images display
 4. Fallback works: Temporarily break a self-hosted URL, confirm Wikipedia fallback triggers via     
 priority array
 5. Idempotency works: Run insert script twice — second run should skip all existing figures
 6. Final count: SELECT count(*) FROM figures → ~300
 7. Category balance: SELECT tags[1], count(*) FROM figures GROUP BY tags[1] → roughly even
 8. Research stage: SELECT research_stage, count(*) FROM figures GROUP BY research_stage → seed      
 ~130, validated ~170
 9. Run npm run validate-images → all figures should pass

 Execution Order

 Step 1a (migration: storage bucket + research_stage column)
   ↓
 Step 1b-1c (upload script + FigureCarousel update)  ←  can be built in parallel
   ↓
 Step 1d (backfill existing 130 figures to self-hosted)
   ↓
 Step 2a-2d (build all pipeline scripts)
   ↓
 Step 3 (generate batches iteratively — 3-4 rounds of ~50)
   ↓
 Step 4 (final validation pass)     