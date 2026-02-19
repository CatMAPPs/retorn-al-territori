## **Phase 3: Multiplayer Mode**

### **Multiplayer Database Tables**

* \[ \] Create `lobbies` table

  * \[ \] Define schema with id, room\_code, host\_id, status  
  * \[ \] Add current\_round, figure\_ids array, created\_at, expires\_at  
  * \[ \] Create unique index on room\_code  
  * \[ \] Set up auto-deletion after 24 hours  
  * \[ \] Add RLS policies for lobby access  
* \[ \] Create `lobby_players` table

  * \[ \] Define schema with lobby\_id, user\_id, username, score  
  * \[ \] Add ready, connected boolean flags  
  * \[ \] Include joined\_at timestamp  
  * \[ \] Create composite index on (lobby\_id, user\_id)  
  * \[ \] Add RLS policies for player visibility  
* \[ \] Create `lobby_submissions` table

  * \[ \] Define schema with lobby\_id, user\_id, round\_number, figure\_id  
  * \[ \] Add guess data (name, lat, lon, year)  
  * \[ \] Include submission\_time, score, submitted\_at  
  * \[ \] Create indexes for quick round result queries  
  * \[ \] Add RLS policies for submission access

### **Lobby Management System**

* \[ \] Implement lobby creation

  * \[ \] Generate unique 6-character room codes  
  * \[ \] Create lobby record in database  
  * \[ \] Select 10 random figures for game  
  * \[ \] Set host as lobby creator  
  * \[ \] Return lobby details to client  
* \[ \] Build lobby join functionality

  * \[ \] Validate room code exists and is open  
  * \[ \] Check player capacity (max 8\)  
  * \[ \] Add player to lobby\_players table  
  * \[ \] Subscribe to lobby updates via Realtime  
  * \[ \] Handle join errors gracefully  
* \[ \] Create lobby state management

  * \[ \] Create `useLobbyStore.ts` in Zustand  
  * \[ \] Track current lobby, players, status  
  * \[ \] Handle lobby updates from Realtime  
  * \[ \] Manage player ready states  
  * \[ \] Store game progress and scores

### **Supabase Realtime Integration**

* \[ \] Set up Realtime subscriptions

  * \[ \] Subscribe to lobby\_players changes  
  * \[ \] Subscribe to lobby status updates  
  * \[ \] Subscribe to round submissions  
  * \[ \] Handle connection state changes  
  * \[ \] Implement reconnection logic  
* \[ \] Build Realtime event handlers

  * \[ \] Handle player join/leave events  
  * \[ \] Update player list in real-time  
  * \[ \] Sync ready states across clients  
  * \[ \] Broadcast round start/end  
  * \[ \] Sync score updates after each round  
* \[ \] Implement server-authoritative timing

  * \[ \] Store round start time on server  
  * \[ \] Validate submission times server-side  
  * \[ \] Reject late submissions  
  * \[ \] Auto-advance rounds on server timer  
  * \[ \] Prevent client-side timer manipulation

### **Multiplayer UI Components**

* \[ \] Create lobby creation screen

  * \[ \] Add "Create Game" button  
  * \[ \] Show generated room code prominently  
  * \[ \] Add "Copy Code" functionality  
  * \[ \] Display shareable invite link  
  * \[ \] Style with noir theme  
* \[ \] Build waiting room UI

  * \[ \] Display room code at top  
  * \[ \] Show list of connected players  
  * \[ \] Indicate host with badge  
  * \[ \] Show ready status indicators  
  * \[ \] Add "Start Game" button (host only)  
* \[ \] Implement join lobby screen

  * \[ \] Add room code input field  
  * \[ \] Validate code format  
  * \[ \] Show "Join" button  
  * \[ \] Handle join errors with messages  
  * \[ \] Add "Back to Menu" option  
* \[ \] Create live score display

  * \[ \] Show round-by-round scores for all players  
  * \[ \] Update in real-time after reveals  
  * \[ \] Highlight current user  
  * \[ \] Show cumulative totals  
  * \[ \] Style with noir leaderboard aesthetic

### **Multiplayer Game Flow**

* \[ \] Implement synchronized round start

  * \[ \] Host triggers game start  
  * \[ \] Broadcast to all players via Realtime  
  * \[ \] Load first figure simultaneously  
  * \[ \] Start 45-second timer for all players  
  * \[ \] Lock out new players once started  
* \[ \] Build submission synchronization

  * \[ \] Submit guesses to server on player action  
  * \[ \] Store in lobby\_submissions table  
  * \[ \] Wait for all players or timer expiration  
  * \[ \] Trigger reveal phase when ready  
  * \[ \] Calculate and broadcast scores  
* \[ \] Implement auto-advance logic

  * \[ \] 8-second reveal phase with auto-countdown  
  * \[ \] Advance to next round automatically  
  * \[ \] Sync all clients to same round  
  * \[ \] Handle disconnections gracefully  
  * \[ \] End game after round 10  
* \[ \] Create multiplayer results screen

  * \[ \] Show final standings with medals (🥇🥈🥉)  
  * \[ \] Display winner announcement  
  * \[ \] Show each player's component breakdowns  
  * \[ \] Add "Play Again" option (reuse lobby)  
  * \[ \] Add "Back to Menu" button

### **Connection Handling & Edge Cases**

* \[ \] Implement disconnect detection

  * \[ \] Mark players as disconnected in real-time  
  * \[ \] Show connection status in UI  
  * \[ \] Allow reconnection to active game  
  * \[ \] Auto-remove after timeout  
  * \[ \] Notify other players of disconnects  
* \[ \] Handle host migration

  * \[ \] Transfer host role if host leaves  
  * \[ \] Pick next earliest joined player  
  * \[ \] Update UI to show new host  
  * \[ \] Preserve game state through migration  
  * \[ \] Notify all players of host change  
* \[ \] Build lobby cleanup

  * \[ \] Auto-expire lobbies after 24 hours  
  * \[ \] Clean up abandoned lobbies (no players)  
  * \[ \] Remove finished games after results shown  
  * \[ \] Implement database cleanup cron job  
  * \[ \] Log cleanup operations