
keep/add ... were useful:

008_add_100_more_figures.sql:
get-wiki-images.ts
100-new-links.json
update_migration_urls.ts
clean_migration_duplicates.ts
ensure_first_tag_category.ts


didn't use:
fix_figure_tags.ts

Leave:





Key prompts:
here is all the info of the game we are making: @comprehensive-development-progress-report.md . We are currently in the process of adding more historical figures to our game. Here is the relevant info on the image management system: @image-management-system.md   With that in mind,  I want you to help me make implement phase 2  of our @figures-game-mode-dev-battle-plan.md , the  historical figure data pipeline colelction process. However I really just want to add 1000 more histroical figures into our database, and I find the tasklist to be alittle overcomplicated and arduous, so instead of going at this so tediously, why don't we instead just do this: I want you to focus specifically on finding me 100 famous historical figures not in our db already, spread across the following domains:   - **Politics**: Leaders, presidents, revolutionaries, activists
  - **Military**: Generals, warriors, commanders, strategists
  - **Science**: Physicists, chemists, biologists, mathematicians, inventors
  - **Religion**: Prophets, religious leaders, reformers, saints
  - **Culture**: Artists, writers, musicians, philosophers, architects
  - **Exploration**: Explorers, adventurers, discoverers, cartographers
  - **Social**: Reformers, abolitionists, suffragists, humanitarians
  - **Business**: Entrepreneurs, industrialists, innovators, philanthropists .. .that are also well spread (*Geographic Balance**: Target 40% Europe, 30% Americas, 20% Asia, 10% other regions) and then, once you've identified them, I need you to go ahead and find me :this data for each figure: @figures-game-mode-dev-battle-plan.md (69-81)  and  create a migration to insert them into supabase  (Basically if you see how our seed figures were made and introduced to supabase with an SQL migration @004_seed_figures.sql) Before you start please show me you understand what the objective is

---
**download the figure table and tell cursor not to duplicate & make sure they have 1 of the following 8 tags in thier list of tags**

hmm it seems like the new images have a couple repeats from my original @004_seed_figures.sql ; please go ahead and remove all the dublicates, (some i see include: 'Malala Yousafzai', 'Marie Curie, 'Nikola Tesla') but check through, and then also make sure all of them, for thier tags, have one of these 8 tags in their array: Politics;
 Military: Science; Religion; Culture; Exploration; Social 


---

I only care about what i said; not the geotag, which i'm not sure what that is going to do. TO BE CLEAR, i'm fine with there being a bunch of other tags, but i want all of our new figures to have thier FIRST tag be one of those 8 i mentioned, thats the only edit i want. (Politics;
 Military: Science; Religion; Culture; Exploration; Social) ... I think your fix figure tags file was close but It really doesn't need the other corrections, which i wasn't sure exactly what they were trying to achieve. please just focus on this

 ------

 **From the following prompt came all the recent corrections to FigureCarousel.vue**

 hmm can't you just make it that it doesn;t require that wierd crap (status: active and priority) ... like it should just take the image link and show it, why these unneccesary checks in the view files?

 Give a concise explantion response to my questions (DO NOT CODE): So in looking back through the work we've done, I see the Figure Carousel was initally edited in this session in a manner that would allow us, in case the primary image failed, it would then use a fallback image instead, I didn't understand this, as I was working with the idea that we could just run the image validator say every few days to check, but perhaps it would be better to have some "fallback" image links in case the primary source was failing to load (i.e. incase wikipedia deleted the original link or something); regardless, to me it seems like the way you did it originally was overlly complex and un optimal. So i'm thinking, we could just revert our FigureCarousel to the way it was before, working peferctly before we added all these fallbacks, and instead, the right move would be to have a couple links ADDED to each figure in our databased, like basically a new column for data that has fallback links, and then have when the game is running it like checks or whatever, but lets do that later, does this sound like a good plan AGAIN JUST GIVE ME A CONCISE EXPLAINTION OF WHAT YOU DID ORIGINALLY WITH THE FALLBACK SYTEM AND THEN think about the plan i just offered up

 Original Fallback System Explanation:
What I implemented initially: A complex priority-based image fallback system where each figure could have multiple images ranked by priority (1=primary, 2=secondary, etc.) with status tracking (active/fallback/broken). The FigureCarousel component would:
Preload images to test if they work
Cache loading results to avoid repeated failures
Automatically cycle through available images if primary failed
Show loading states and fallback indicators during retries
Require specific metadata fields (priority, status) for each image
Your Proposed Plan Assessment:
Your approach is much better: Revert to simple FigureCarousel + add fallback URLs as additional data field per figure. This is:
Simpler: No complex priority logic or preloading
More maintainable: Just extra URL fields, not complex metadata
Better for our use case: We can periodically validate primary images and update fallbacks as needed
Easier to manage: Database stores fallbacks alongside primaries, component just tries URLs in order
The original system was over-engineered for our needs - we don't need real-time fallback switching during gameplay, just reliable image sources that we can maintain proactively. Your plan of simple component + fallback URLs in database is optimal. 👍
We can implement this later as a separate enhancement after getting the core 97 figures working.