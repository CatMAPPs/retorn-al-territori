Whodatbedoe

##Multiplayer To-dos

#Problem 1: UI is cramped, and quite different then the other game modes.
**Possible Prompt: for the review screen, we really want the same visual components for the score visually that the free play and daily challenge show, so please go through and compare the the visual components of the score review of free play to make the multiplayer look the same**

For instance, currently the game Ui is quite cramped up, inside a blue box that has different margins





#Problem 3: For some reason the images of the previous round appear in the subseuent for a very brief moment before shifting to the correct image for the round (less than a second). It would obviously be better if that didn't happen, and instead the correct image appear from the get go of the round
----

## Next Notes:
The image from the previous round is still appearing for a brief instance when the next round gameplay begins. It quickly switches, but it would be preferrable if we could get that fixed. How do you think we could correct this? 



##What if someone rage quits. If a player is playing 2 player, then the game should maybe pause with a pop up, and await player to return (or allow the user to leave)

## if 3 player+, and one disconnects, same thing, but the pop up should allow for players to choose to conitnue without the lost player, think a button on the modal that says "continue without other" 



## Future Additions

Game Mode option. Somewhere in the main menu, perhaps at the top, allow the user to specify for the type of figures they want to focus on. 
-Examples: political & milirtaristic figures, pop cultre icons, social movement leaders, religous figures, business men, scientist and engineers, etc. 
-The user will select the mode, and the only historical figures they will get to guess from are those with those tags/ genres for the game. 
-For Free Play & Multiplayer; Daily Challange will always remain randomly chose from across all genre of historical figures. 

------------------
###################
-------------------
###################
-------------------
## **Completed Tasks**

now for some reason the game froze in round 5 despite my playing the game normally. despite my having entered a submitted guess. THe game showed only 1/2 players submitted despite both having done so, with one player then getting a pop up saying "TImes up" but the round enever progressed to the review, like it stayed stuck on the  level; without the ability to proceed

I Think this iusse may have todo with players letting the timer run out on multple rounds in a role or something. 

see logs 29 near the end

oh it found it on its own: ⚠️ Minor Issue Found:
There's a coordinate validation bug - longitude -249 is invalid (should be -180 to +180). The auto-submit failed due to this constraint violation, but it doesn't affect the score accumulation fix.

--

The timer at the top bar is not reseting for every round of the game. As of now, the timer starts correctly at 45 seconds for round 1. But unfortunately, when the first submission is entered and the timer is stopped, it will remain at that time for the rest of the game. So let's say you submit round 1 with 20s (seconds) remaining, it will stay stuck saying 20 seconds for the proceeding rounds, and the timer won't start again. Very Tedious Indeed

The final score does not show the point total in the leaderboard. 

--
#Problem 2: the game has a wierd bug (edge case) in which, if one player (player A) clicks next round when on the round review, and then submits thier guess in a quick enough time during the subsquent round, before the other player (player B) either clicks next round OR before it auto progresses from that round review page, then the players will become unsynced in rounds, and then basically player A will be pushed to the next round once player B starts the round player A submited already in. THis is a major problem. I think to fix this we can add a rule that the game won't progress from the round review until ALL players have entered "next round"; so if player A clicks Next round, and player B hasn't, then player A should get a pop up modal saying "awaiting all players to be ready" (like with the gameplay where all players have to submit / run out of time before the round review begins, and those who have submitted get a pop up modal) OR we can have all players have to just wait 7 seconds for the auto progression, removing the "next round" button all together. If the former solution isn't too difficult, that would be IDEAL, however if we try to implement it and it casues too many issues, than we cna do the latter solution  

## Failed Tasks to worry about:

Image Flicker issue. 

The image from the previous round is still appearing for a brief instance when the next round gameplay begins. It quickly switches to the correct image, but it would be preferrable if we could get that fixed so that doesn't happen, and rather the right image is shown from the get go for the round. How do you think we could correct this? (Don't edit code just analyze the issue) here are the logs relevant from my testing: @33 joiner logs.md 

Root Cause Analysis:
Option A: Transition Component Issue
The Transition with mode="out-in" should remove the old element before adding the new one
But there might be a timing issue where the old img element's cached image is still visible during the transition
Option B: Browser/Image Caching
The img element might be showing a cached version of the old image briefly
Even though Vue removes the element, the browser might show the cached content during the transition
Option C: Vue's Virtual DOM Updates
Vue batches DOM updates, so there might be a frame where the old img element is still rendered
The old image appears during this brief window

Potential Solutions:
1. Force Complete Element Re-mounting
// Add imageKey that increments when images changeconst imageKey = ref(0)// In watcher: imageKey.value++// In template: :key="currentImage.url + '-' + imageKey"
Forces Vue to destroy and recreate the img element completely
2. Clear Image Source Immediately
// When images change, temporarily set src to empty/transparent pixel// Then set to actual URL after DOM update (nextTick)
3. Use a Placeholder During Transitions
// Show a blank div/placeholder during loading instead of trying to hide the image// This ensures no old content can appear
4. Delay Image Display
// Add a small delay after loading completes before showing the image// Ensures old image is fully cleared
5. Pre-emptive Image Clearing
// On images change, immediately set all img elements in the carousel to src=""// Then proceed with normal loading
Recommended Approach:
I believe Option 1 (Force Complete Element Re-mounting) is the most reliable because it eliminates any possibility of cached/stale DOM elements. The changing key ensures Vue completely replaces the img element, preventing any old image from appearing.
Why this works:
Vue destroys the old img element entirely
Creates a brand new img element for the new image
No possibility of cached content or transition overlap
Clean separation between old and new image display
This approach is commonly used in Vue for cases where you need to ensure complete DOM replacement rather than updating existing elements.

-
-
Current Problem Analysis:
The issue occurs because:
props.images changes → currentImage computed immediately returns new image URL
Vue renders <img src="new-url"> instantly
Browser shows cached old image briefly while loading new one
Even with mode="out-in", there's a race condition
"Image Vanishes" Solution Options:
Option A: Conditional Rendering with Load State
// Add imageLoaded refconst imageLoaded = ref(false)// When images change: imageLoaded.value = false// When image loads: imageLoaded.value = true// Template: v-if="currentImage && imageLoaded"
✅ Image vanishes immediately on round change
✅ Only reappears after new image loads
❌ No visual feedback during loading (just empty space)
Option B: Empty Source During Transition
// When images change: set img src to "" temporarily// After short delay or preload success: set to actual URL
Option C: CSS-Based Hiding
// Add CSS: .image-transitioning { opacity: 0; }// When images change: add 'transitioning' class for brief period
Option D: Double-Buffer Approach
// Maintain two img elements - one visible, one loading// When loading completes, swap them instantly
Alternative Approaches (More Complex):
Option E: Preload-Triggered Display
Only show image after successful preload (not DOM load event)
Requires restructuring preload logic
Option F: Frame-Delayed Updates
Use nextTick() or setTimeout to delay image display
Ensures DOM has updated before showing new image
Option G: Component-Level Solution
Use a different component architecture (slots, dynamic components)
More complex but gives full control over rendering

-----------