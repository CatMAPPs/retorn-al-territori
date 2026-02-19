## **Phase 2: MVP \- User Authentication & Daily Challenge**

### **Daily Challenge Tables & Logic**

* \[ \] Create `daily_scores` table

  * \[ \] Define schema with user\_id, challenge\_date, score  
  * \[ \] Add completed\_at timestamp  
  * \[ \] Set up unique constraint (user\_id, challenge\_date)  
  * \[ \] Create indexes for leaderboard queries  
  * \[ \] Add RLS policies for user access  
* \[ \] Implement daily challenge generation

  * \[ \] Create server function to select 10 figures for date  
  * \[ \] Use deterministic seed based on date  
  * \[ \] Cache figure selection in database table  
  * \[ \] Ensure same figures shown to all players globally  
  * \[ \] Store figure order for consistency  
* \[ \] Build daily challenge flow

  * \[ \] Check if user completed today's challenge  
  * \[ \] Display challenge info screen with date/streak  
  * \[ \] Load predetermined figure set  
  * \[ \] Enable 45-second timer per round  
  * \[ \] Submit final score to daily\_scores table  
* \[ \] Implement streak tracking

  * \[ \] Update player\_stats on challenge completion  
  * \[ \] Calculate consecutive days played  
  * \[ \] Reset streak on missed day  
  * \[ \] Display streak counter in UI  
  * \[ \] Add streak fire emoji indicator

*Note, we want the daily challange to reset at 12am Eastern Time (New York)*

### **Leaderboard System**

* \[ \] Create leaderboard query service

  * \[ \] Build query for top 100 players by date  
  * \[ \] Order by score DESC, completed\_at ASC  
  * \[ \] Fetch user's rank relative to all players  
  * \[ \] Add pagination support for large datasets  
  * \[ \] Cache results for performance  
* \[ \] Build leaderboard UI

  * \[ \] Create leaderboard modal/overlay  
  * \[ \] Display top 100 with rank, username, score  
  * \[ \] Highlight current user's position  
  * \[ \] Add date selector for historical leaderboards  
  * \[ \] Style with noir theme (gold for top 3\)  
* \[ \] Implement score submission validation

  * \[ \] Create server-side scoring validation function  
  * \[ \] Compare client-submitted score with server calculation  
  * \[ \] Reject scores outside valid range  
  * \[ \] Log suspicious submissions  
  * \[ \] Update player\_stats after validation

### **Timer & Speed Bonus**

* \[ \] Implement round timer

  * \[ \] Create `useRoundTimer.ts` composable  
  * \[ \] Display countdown in monospaced font  
  * \[ \] Update every second  
  * \[ \] Auto-submit on timer expiration (multiplayer)  
  * \[ \] Calculate elapsed time for speed bonus  
* \[ \] Build speed bonus calculator

  * \[ \] Implement formula (110 \- floor(time/2) \* 10\)  
  * \[ \] Cap at 100 points max  
  * \[ \] Only apply in Daily/Multiplayer modes  
  * \[ \] Show bonus in score breakdown  
  * \[ \] Add visual indicator for fast submissions

### **Guest-to-User Conversion Flow**

* \[ \] Implement post-game signup prompt

  * \[ \] Detect guest completion of Free Play  
  * \[ \] Show signup modal with benefits  
  * \[ \] Allow dismissal without blocking  
  * \[ \] Track modal shown/dismissed state  
  * \[ \] Style with persuasive copy and noir aesthetic  
* \[ \] Build seamless signup flow

  * \[ \] Pre-fill any available data  
  * \[ \] Complete signup without leaving results screen  
  * \[ \] Automatically authenticate after signup  
  * \[ \] Return to authenticated main menu  
  * \[ \] Show welcome message
