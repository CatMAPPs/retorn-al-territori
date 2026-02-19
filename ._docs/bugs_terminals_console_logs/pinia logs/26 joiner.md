





Joiner:
🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:560 📤 useLobby returning actions only - state accessed via store directly
MultiplayerView.vue:37 🔍 lobbyStore reactive refs: {lobby: ObjectRefImpl, player: ObjectRefImpl, isLoading: ObjectRefImpl}
MultiplayerView.vue:38 🎯 MultiplayerView mounted, initial state: {lobby: null, player: null, isLoading: false}
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: undefined → undefined
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:560 📤 useLobby returning actions only - state accessed via store directly
LobbyCreateJoin.vue:20 🎨 LobbyCreateJoin component mounted!
LobbyCreateJoin.vue:21 🔍 LobbyCreateJoin reactive values: {isLoading: false, hasCreateNewLobby: true, hasJoinExistingLobby: true}
MultiplayerView.vue:31 🎯 MultiplayerView mounted - cleaning up any existing lobby state
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
authStore.ts:47 👂 Setting up auth state listener...
authStore.ts:73 ✅ Auth store initialized
authStore.ts:49 🔄 Auth state change: INITIAL_SESSION Session exists
LobbyCreateJoin.vue:44 🏗️ LobbyCreateJoin.handleJoinLobby called with roomCode: SZUVH5
LobbyCreateJoin.vue:52 🚀 Calling joinExistingLobby...
useLobby.ts:103 🚪 joinExistingLobby called with roomCode: SZUVH5
useLobby.ts:110 👤 Authenticated user: 26aa8060-5887-4a29-8b5a-2356ebc0cafb
useLobby.ts:113 🧹 Cleaning up any existing lobby state before joining
useLobby.ts:544 🧹 Cleaning up lobby state and realtime subscriptions
useLobby.ts:554 🔄 Resetting lobby store
useLobby.ts:557 ✅ Cleanup completed
useLobby.ts:120 ⏳ Setting loading state to true
useLobby.ts:124 🔄 Calling joinLobby API...
queries.ts:423 🔍 joinLobby: Looking for lobby with code: SZUVH5
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:440 ✅ joinLobby: Found lobby: a4b649c8-bd56-4ca9-8a19-05c016bd7043 status: waiting
queries.ts:446 🔍 joinLobby: Checking player capacity for lobby: a4b649c8-bd56-4ca9-8a19-05c016bd7043
queries.ts:459 ✅ joinLobby: Current player count: 1
queries.ts:465 🔍 joinLobby: Checking if user already in lobby: 26aa8060-5887-4a29-8b5a-2356ebc0cafb
queries.ts:498 📝 joinLobby: Adding player to lobby
queries.ts:516 ✅ joinLobby: Player added successfully: 1a99b054-f9e0-4415-b351-4300fca68f70
realtime.ts:229 Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.
send @ @supabase_supabase-js.js?v=a926d579:2805
broadcastLobbyEvent @ realtime.ts:229
joinLobby @ queries.ts:521
await in joinLobby
joinExistingLobby @ useLobby.ts:125
handleJoinLobby @ LobbyCreateJoin.vue:53
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:12326
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335Understand this warning
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: player_joined
queries.ts:522 📢 Broadcasted player joined event for Anonymous
queries.ts:528 🎉 joinLobby: Successfully joined lobby: a4b649c8-bd56-4ca9-8a19-05c016bd7043
useLobby.ts:131 ✅ joinLobby API returned: {lobbyId: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', roomCode: 'SZUVH5', playerId: '1a99b054-f9e0-4415-b351-4300fca68f70'}
useLobby.ts:133 📊 Fetching updated players list...
useLobby.ts:135 ✅ Got players list: 2 players
useLobby.ts:137 💾 Setting lobby and players in store...
lobbyStore.ts:26 🏪 STORE: setLobby called with: {lobby: {…}, player: {…}}
lobbyStore.ts:31 🏪 STORE: setLobby completed, currentLobby: Proxy(Object) {id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', room_code: 'SZUVH5', host_id: '23fb740b-4843-4549-8f1b-93bb20822714', status: 'waiting', current_round: 0, …}
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: []
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:140 ✅ Store updated successfully
useLobby.ts:143 🎯 About to setup realtime subscription for join...
useLobby.ts:362 🔌 Setting up realtime subscription for lobby: a4b649c8-bd56-4ca9-8a19-05c016bd7043
realtime.ts:21 📡 Subscribing to channel: lobby:a4b649c8-bd56-4ca9-8a19-05c016bd7043
useLobby.ts:146 ✅ Realtime subscription setup completed for join
useLobby.ts:151 🎉 joinExistingLobby completed successfully
useLobby.ts:159 🔄 Setting loading state to false
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: undefined → waiting
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:560 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: {playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: (2) [{…}, {…}]
LobbyCreateJoin.vue:54 ✅ joinExistingLobby completed successfully
realtime.ts:173 📡 Channel subscription status for lobby:a4b649c8-bd56-4ca9-8a19-05c016bd7043: SUBSCRIBED 
realtime.ts:176 ✅ Successfully subscribed to lobby:a4b649c8-bd56-4ca9-8a19-05c016bd7043
realtime.ts:196 🔗 Channel joined for lobby:a4b649c8-bd56-4ca9-8a19-05c016bd7043
realtime.ts:200 👋 Channel left for lobby:a4b649c8-bd56-4ca9-8a19-05c016bd7043
realtime.ts:204 💥 Channel system error for lobby:a4b649c8-bd56-4ca9-8a19-05c016bd7043: {message: 'Unable to subscribe to changes with given paramete…, "eq", "a4b649c8-bd56-4ca9-8a19-05c016bd7043"}]]', status: 'error', extension: 'postgres_changes', channel: 'lobby:a4b649c8-bd56-4ca9-8a19-05c016bd7043'}
(anonymous) @ realtime.ts:204
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3002
_trigger @ @supabase_supabase-js.js?v=a926d579:2987
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
decode @ @supabase_supabase-js.js?v=a926d579:2038
_onConnMessage @ @supabase_supabase-js.js?v=a926d579:3494
conn.onmessage @ @supabase_supabase-js.js?v=a926d579:3547Understand this error
LobbyWaitingRoom.vue:69 🎯 handleToggleReady called in component
useLobby.ts:165 🎯 toggleReady called
useLobby.ts:173 🎯 toggleReady: Current ready state: false → New state: true
useLobby.ts:176 ⚡ toggleReady: Applying optimistic local update
lobbyStore.ts:71 🏪 STORE: updatePlayerReady called for player 1a99b054-f9e0-4415-b351-4300fca68f70 ready: true
lobbyStore.ts:78 🏪 STORE: updatePlayerReady completed - fresh array assigned
useLobby.ts:180 🔄 toggleReady: Updating database...
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: (2) [{…}, {…}]
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: player_ready
queries.ts:731 📢 Broadcasted player ready event for 26aa8060-5887-4a29-8b5a-2356ebc0cafb ready: true
useLobby.ts:187 ✅ toggleReady: Database update completed - optimistic update confirmed
realtime.ts:67 📢 REALTIME: Player ready status updated via broadcast {ready: true, userId: '23fb740b-4843-4549-8f1b-93bb20822714'}
realtime.ts:68 📢 REALTIME: About to call onPlayerReady callback with userId: 23fb740b-4843-4549-8f1b-93bb20822714
useLobby.ts:397 👥 REALTIME CALLBACK: Player ready status changed for player: 23fb740b-4843-4549-8f1b-93bb20822714
useLobby.ts:399 👥 REALTIME CALLBACK: About to refresh players list for lobby: a4b649c8-bd56-4ca9-8a19-05c016bd7043
realtime.ts:71 📢 REALTIME: onPlayerReady callback called successfully
useLobby.ts:402 👥 REALTIME CALLBACK: Server players: (2) [{…}, {…}]
useLobby.ts:417 👥 REALTIME CALLBACK: Current user optimistic state - server: true local: true
useLobby.ts:429 👥 REALTIME CALLBACK: Final reconciled players: (2) [{…}, {…}]
useLobby.ts:431 👥 REALTIME CALLBACK: About to update store with reconciled players
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: (2) [{…}, {…}]
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:433 👥 REALTIME CALLBACK: Updated store after ready change - reactivity is automatic!
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: true players: (2) [{…}, {…}]
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false {isHost: false, allPlayersReady: true, playerCount: 2}
realtime.ts:79 📢 REALTIME: Game started via broadcast {current_round: 1, lobbyId: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', status: 'in_progress', timestamp: '2025-11-10T17:17:50.133Z'}
realtime.ts:80 🎮 REALTIME: Game started broadcast received - calling onGameStarted
useLobby.ts:440 🎮 REALTIME CALLBACK: onGameStarted triggered for lobby: a4b649c8-bd56-4ca9-8a19-05c016bd7043
useLobby.ts:443 📊 Fetching updated lobby with players...
realtime.ts:83 🎮 REALTIME: onGameStarted callback completed successfully
useLobby.ts:445 ✅ Got updated lobby - status: in_progress current_round: 1
useLobby.ts:447 💾 Updating lobby status in store...
useLobby.ts:449 ✅ Lobby status updated to: in_progress
useLobby.ts:451 🎯 Loading figures for game...
useLobby.ts:454 📖 Loading figure: 6c221933-363d-45c0-bde9-97ae38323368
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: waiting → in_progress
MultiplayerView.vue:58 🎮 MultiplayerView: Lobby status is now in_progress - should show game screen
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:560 📤 useLobby returning actions only - state accessed via store directly
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
useLobby.ts:35 🧹 Cleaning up realtime subscription
useLobby.ts:454 📖 Loading figure: 3388229c-139f-4f4c-8fd4-986176b0af38
useLobby.ts:454 📖 Loading figure: ac51139b-e93a-4447-a9d6-c5398434455e
useLobby.ts:454 📖 Loading figure: e26ac096-49f6-42fa-bfba-e503551f8c66
useLobby.ts:454 📖 Loading figure: 96c5921a-6920-43cd-bcdb-990386420862
useLobby.ts:454 📖 Loading figure: c03fa567-40cb-43ce-af57-83344d0fe25d
useLobby.ts:454 📖 Loading figure: 06c026ce-9183-45e9-95ca-54108e50290c
useLobby.ts:454 📖 Loading figure: 1b639e55-33fa-4cfd-97d9-e3a6a4450546
useLobby.ts:454 📖 Loading figure: 8060d265-cd30-46a3-af00-aebe877c5f8c
useLobby.ts:454 📖 Loading figure: 0b2c1e3e-d069-406b-9986-f18aaac83c5b
useLobby.ts:458 ✅ Loaded 10 figures
useLobby.ts:460 💾 Setting figures in store...
useLobby.ts:463 🎲 Starting first round...
useLobby.ts:466 ✅ Started round 1 with figure: Sigmund Freud
useLobby.ts:471 🔄 Setting loading to false after game start
useLobby.ts:474 🎮 Game started successfully!
LobbyGameplay.vue:209 🗺️ Map clicked: Proxy(Object) {lat: 45.521743896993634, lon: 7.031250000000001} hasSubmitted: false
LobbyGameplay.vue:213 📍 Set guessedLat: 45.521743896993634 guessedLon: 7.031250000000001
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:108 🎯 handleSubmitGuess called
LobbyGameplay.vue:109 canSubmit: true currentFigure: true
LobbyGameplay.vue:139 ✅ Client-side validation passed: {lat: 45.521743896993634, lon: 7.031250000000001, year: 1466}
LobbyGameplay.vue:142 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:168 📊 Calculated scores: {spatial: 704, temporal: 605, name: 200, speed: 10, total: 1519}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: 'frued', guessedLat: 45.521743896993634, guessedLon: 7.031250000000001, guessedYear: 1466, score: 1519}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: b04975ed-ce2f-4df0-b5ea-e421443b5f29
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: 'b04975ed-ce2f-4df0-b5ea-e421443b5f29', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 1, figure_id: '6c221933-363d-45c0-bde9-97ae38323368', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: b04975ed-ce2f-4df0-b5ea-e421443b5f29
useLobby.ts:307 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:185 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:188 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:192 🎯 Adding own submission to local state: {id: 'b04975ed-ce2f-4df0-b5ea-e421443b5f29', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 1, figure_id: '6c221933-363d-45c0-bde9-97ae38323368', …}
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: true, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '6c221933-363d-45c0-bde9-97ae38323368', guessed_lat: 15.4219103999471, guessed_lon: 33.3984375, guessed_name: 'Galileo Gary ', guessed_year: 1901, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: '6c221933-363d-45c0-bde9-97ae38323368', guessed_lat: 15.4219103999471, guessed_lon: 33.3984375, guessed_name: 'Galileo Gary ', guessed_year: 1901, …}
useLobby.ts:508 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:523 🎯 All players submitted - reveal phase should start in UI
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:220 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:221 🎯 Current figure for reveal: Sigmund Freud
LobbyGameplay.vue:225 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: {name: 'Sigmund Freud', hometown: 'Freiberg, Austria', hasHometown: true, hometownLength: 17}
LobbyGameplay.vue:234 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 1 Next round would be: 2
MultiplayerView.vue:106 🎯 Starting next round: 2
MultiplayerView.vue:110 🎯 Starting round with figure: Julius Caesar
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:238 🔄 Resetting UI state for next round
LobbyGameplay.vue:249 ▶️ Resuming timer for next round
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
LobbyGameplay.vue:209 🗺️ Map clicked: Proxy(Object) {lat: 7.27529233637217, lon: 3.5156250000000004} hasSubmitted: false
LobbyGameplay.vue:213 📍 Set guessedLat: 7.27529233637217 guessedLon: 3.5156250000000004
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:108 🎯 handleSubmitGuess called
LobbyGameplay.vue:109 canSubmit: true currentFigure: true
LobbyGameplay.vue:139 ✅ Client-side validation passed: {lat: 7.27529233637217, lon: 3.5156250000000004, year: 0}
LobbyGameplay.vue:142 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:168 📊 Calculated scores: {spatial: 405, temporal: 750, name: 0, speed: 10, total: 1165}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: '', guessedLat: 7.27529233637217, guessedLon: 3.5156250000000004, guessedYear: 0, score: 1165}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 4248ffa3-de62-4c8c-a53c-e95cccd8a336
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: '4248ffa3-de62-4c8c-a53c-e95cccd8a336', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 2, figure_id: '3388229c-139f-4f4c-8fd4-986176b0af38', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: 4248ffa3-de62-4c8c-a53c-e95cccd8a336
useLobby.ts:307 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:185 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:188 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:192 🎯 Adding own submission to local state: {id: '4248ffa3-de62-4c8c-a53c-e95cccd8a336', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 2, figure_id: '3388229c-139f-4f4c-8fd4-986176b0af38', …}
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: true, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '3388229c-139f-4f4c-8fd4-986176b0af38', guessed_lat: 12.0070845841793, guessed_lon: 39.0234375, guessed_name: '', guessed_year: 1571, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: '3388229c-139f-4f4c-8fd4-986176b0af38', guessed_lat: 12.0070845841793, guessed_lon: 39.0234375, guessed_name: '', guessed_year: 1571, …}
useLobby.ts:508 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:523 🎯 All players submitted - reveal phase should start in UI
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:220 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:221 🎯 Current figure for reveal: Julius Caesar
LobbyGameplay.vue:225 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: {name: 'Julius Caesar', hometown: 'Rome, Italy', hasHometown: true, hometownLength: 11}
LobbyGameplay.vue:234 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 2 Next round would be: 3
MultiplayerView.vue:106 🎯 Starting next round: 3
MultiplayerView.vue:110 🎯 Starting round with figure: Malala Yousafzai
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:238 🔄 Resetting UI state for next round
LobbyGameplay.vue:249 ▶️ Resuming timer for next round
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
LobbyGameplay.vue:209 🗺️ Map clicked: Proxy(Object) {lat: 47.45780853075031, lon: 11.601562500000002} hasSubmitted: false
LobbyGameplay.vue:213 📍 Set guessedLat: 47.45780853075031 guessedLon: 11.601562500000002
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: 'ac51139b-e93a-4447-a9d6-c5398434455e', guessed_lat: -11.7275455903404, guessed_lon: 39.375, guessed_name: '', guessed_year: 1351, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: 'ac51139b-e93a-4447-a9d6-c5398434455e', guessed_lat: -11.7275455903404, guessed_lon: 39.375, guessed_name: '', guessed_year: 1351, …}
useLobby.ts:508 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:108 🎯 handleSubmitGuess called
LobbyGameplay.vue:109 canSubmit: true currentFigure: true
LobbyGameplay.vue:139 ✅ Client-side validation passed: {lat: 47.45780853075031, lon: 11.601562500000002, year: 2021}
LobbyGameplay.vue:142 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:168 📊 Calculated scores: {spatial: 286, temporal: 788, name: 0, speed: 10, total: 1084}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: '', guessedLat: 47.45780853075031, guessedLon: 11.601562500000002, guessedYear: 2021, score: 1084}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: b1e2bd79-bd7f-4691-94f7-2029fc9ddac2
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: 'b1e2bd79-bd7f-4691-94f7-2029fc9ddac2', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 3, figure_id: 'ac51139b-e93a-4447-a9d6-c5398434455e', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: b1e2bd79-bd7f-4691-94f7-2029fc9ddac2
useLobby.ts:307 📊 roundSubmissions now has 2 items
useLobby.ts:311 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:220 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:221 🎯 Current figure for reveal: Malala Yousafzai
LobbyGameplay.vue:225 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: {name: 'Malala Yousafzai', hometown: 'Mingora, Pakistan', hasHometown: true, hometownLength: 17}
LobbyGameplay.vue:185 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:188 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:192 🎯 Adding own submission to local state: {id: 'b1e2bd79-bd7f-4691-94f7-2029fc9ddac2', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 3, figure_id: 'ac51139b-e93a-4447-a9d6-c5398434455e', …}
LobbyGameplay.vue:234 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 3 Next round would be: 4
MultiplayerView.vue:106 🎯 Starting next round: 4
MultiplayerView.vue:110 🎯 Starting round with figure: Winston Churchill
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:238 🔄 Resetting UI state for next round
LobbyGameplay.vue:249 ▶️ Resuming timer for next round
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
LobbyGameplay.vue:209 🗺️ Map clicked: Proxy(Object) {lat: 45.521743896993634, lon: 17.929687500000004} hasSubmitted: false
LobbyGameplay.vue:213 📍 Set guessedLat: 45.521743896993634 guessedLon: 17.929687500000004
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:108 🎯 handleSubmitGuess called
LobbyGameplay.vue:109 canSubmit: true currentFigure: true
LobbyGameplay.vue:139 ✅ Client-side validation passed: {lat: 45.521743896993634, lon: 17.929687500000004, year: 0}
LobbyGameplay.vue:142 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:168 📊 Calculated scores: {spatial: 643, temporal: 0, name: 0, speed: 10, total: 653}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: '', guessedLat: 45.521743896993634, guessedLon: 17.929687500000004, guessedYear: 0, score: 653}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 362fa3ef-2735-45f6-a49a-51d9b2dfba26
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: '362fa3ef-2735-45f6-a49a-51d9b2dfba26', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 4, figure_id: 'e26ac096-49f6-42fa-bfba-e503551f8c66', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: 362fa3ef-2735-45f6-a49a-51d9b2dfba26
useLobby.ts:307 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:185 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:188 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:192 🎯 Adding own submission to local state: {id: '362fa3ef-2735-45f6-a49a-51d9b2dfba26', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 4, figure_id: 'e26ac096-49f6-42fa-bfba-e503551f8c66', …}
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: true, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: 'e26ac096-49f6-42fa-bfba-e503551f8c66', guessed_lat: 12.0070845841793, guessed_lon: 25.6640625, guessed_name: '', guessed_year: 2006, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: 'e26ac096-49f6-42fa-bfba-e503551f8c66', guessed_lat: 12.0070845841793, guessed_lon: 25.6640625, guessed_name: '', guessed_year: 2006, …}
useLobby.ts:508 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:523 🎯 All players submitted - reveal phase should start in UI
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:220 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:221 🎯 Current figure for reveal: Winston Churchill
LobbyGameplay.vue:225 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: {name: 'Winston Churchill', hometown: 'Blenheim Palace, England', hasHometown: true, hometownLength: 24}
LobbyGameplay.vue:234 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 4 Next round would be: 5
MultiplayerView.vue:106 🎯 Starting next round: 5
MultiplayerView.vue:110 🎯 Starting round with figure: Stephen Hawking
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:238 🔄 Resetting UI state for next round
LobbyGameplay.vue:249 ▶️ Resuming timer for next round
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
LobbyGameplay.vue:209 🗺️ Map clicked: Proxy(Object) {lat: 47.69497434186282, lon: 43.94531250000001} hasSubmitted: false
LobbyGameplay.vue:213 📍 Set guessedLat: 47.69497434186282 guessedLon: 43.94531250000001
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '96c5921a-6920-43cd-bcdb-990386420862', guessed_lat: 31.7748776185074, guessed_lon: -81.9140625, guessed_name: '', guessed_year: 1706, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: '96c5921a-6920-43cd-bcdb-990386420862', guessed_lat: 31.7748776185074, guessed_lon: -81.9140625, guessed_name: '', guessed_year: 1706, …}
useLobby.ts:508 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:108 🎯 handleSubmitGuess called
LobbyGameplay.vue:109 canSubmit: true currentFigure: true
LobbyGameplay.vue:139 ✅ Client-side validation passed: {lat: 47.69497434186282, lon: 43.94531250000001, year: 1876}
LobbyGameplay.vue:142 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:168 📊 Calculated scores: {spatial: 477, temporal: 767, name: 0, speed: 10, total: 1254}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: '', guessedLat: 47.69497434186282, guessedLon: 43.94531250000001, guessedYear: 1876, score: 1254}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 6c82fbdc-c28b-4706-9f83-2920e7d63c02
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: '6c82fbdc-c28b-4706-9f83-2920e7d63c02', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 5, figure_id: '96c5921a-6920-43cd-bcdb-990386420862', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: 6c82fbdc-c28b-4706-9f83-2920e7d63c02
useLobby.ts:307 📊 roundSubmissions now has 2 items
useLobby.ts:311 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:220 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:221 🎯 Current figure for reveal: Stephen Hawking
LobbyGameplay.vue:225 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: {name: 'Stephen Hawking', hometown: 'Oxford, England', hasHometown: true, hometownLength: 15}
LobbyGameplay.vue:185 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:188 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:192 🎯 Adding own submission to local state: {id: '6c82fbdc-c28b-4706-9f83-2920e7d63c02', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 5, figure_id: '96c5921a-6920-43cd-bcdb-990386420862', …}
LobbyGameplay.vue:234 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 5 Next round would be: 6
MultiplayerView.vue:106 🎯 Starting next round: 6
MultiplayerView.vue:110 🎯 Starting round with figure: Confucius
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:238 🔄 Resetting UI state for next round
LobbyGameplay.vue:249 ▶️ Resuming timer for next round
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
LobbyGameplay.vue:209 🗺️ Map clicked: Proxy(Object) {lat: 51.998410382390325, lon: 40.42968750000001} hasSubmitted: false
LobbyGameplay.vue:213 📍 Set guessedLat: 51.998410382390325 guessedLon: 40.42968750000001
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: 'c03fa567-40cb-43ce-af57-83344d0fe25d', guessed_lat: -3.01984110616897, guessed_lon: -77.6953125, guessed_name: '', guessed_year: 1486, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: 'c03fa567-40cb-43ce-af57-83344d0fe25d', guessed_lat: -3.01984110616897, guessed_lon: -77.6953125, guessed_name: '', guessed_year: 1486, …}
useLobby.ts:508 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:108 🎯 handleSubmitGuess called
LobbyGameplay.vue:109 canSubmit: true currentFigure: true
LobbyGameplay.vue:139 ✅ Client-side validation passed: {lat: 51.998410382390325, lon: 40.42968750000001, year: 1771}
LobbyGameplay.vue:142 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:168 📊 Calculated scores: {spatial: 190, temporal: 0, name: 0, speed: 10, total: 200}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: '', guessedLat: 51.998410382390325, guessedLon: 40.42968750000001, guessedYear: 1771, score: 200}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 649f0bcf-17eb-4f60-ade7-2cb12636250d
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: '649f0bcf-17eb-4f60-ade7-2cb12636250d', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 6, figure_id: 'c03fa567-40cb-43ce-af57-83344d0fe25d', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: 649f0bcf-17eb-4f60-ade7-2cb12636250d
useLobby.ts:307 📊 roundSubmissions now has 2 items
useLobby.ts:311 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:220 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:221 🎯 Current figure for reveal: Confucius
LobbyGameplay.vue:225 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: {name: 'Confucius', hometown: 'Qufu, China', hasHometown: true, hometownLength: 11}
LobbyGameplay.vue:185 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:188 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:192 🎯 Adding own submission to local state: {id: '649f0bcf-17eb-4f60-ade7-2cb12636250d', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 6, figure_id: 'c03fa567-40cb-43ce-af57-83344d0fe25d', …}
LobbyGameplay.vue:234 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 6 Next round would be: 7
MultiplayerView.vue:106 🎯 Starting next round: 7
MultiplayerView.vue:110 🎯 Starting round with figure: Queen Elizabeth I
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:238 🔄 Resetting UI state for next round
LobbyGameplay.vue:249 ▶️ Resuming timer for next round
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
LobbyGameplay.vue:209 🗺️ Map clicked: Proxy(Object) {lat: 8.559293903302025, lon: -13.535156250000002} hasSubmitted: false
LobbyGameplay.vue:213 📍 Set guessedLat: 8.559293903302025 guessedLon: -13.535156250000002
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '06c026ce-9183-45e9-95ca-54108e50290c', guessed_lat: 53.2060325515784, guessed_lon: -1.0546875, guessed_name: 'queen elizabeth I', guessed_year: 1581, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: '06c026ce-9183-45e9-95ca-54108e50290c', guessed_lat: 53.2060325515784, guessed_lon: -1.0546875, guessed_name: 'queen elizabeth I', guessed_year: 1581, …}
useLobby.ts:508 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:108 🎯 handleSubmitGuess called
LobbyGameplay.vue:109 canSubmit: true currentFigure: true
LobbyGameplay.vue:139 ✅ Client-side validation passed: {lat: 8.559293903302025, lon: -13.535156250000002, year: 2021}
LobbyGameplay.vue:142 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:168 📊 Calculated scores: {spatial: 307, temporal: 556, name: 0, speed: 10, total: 873}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: '', guessedLat: 8.559293903302025, guessedLon: -13.535156250000002, guessedYear: 2021, score: 873}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 46f0dedd-755a-43df-9752-af05e78b5824
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: '46f0dedd-755a-43df-9752-af05e78b5824', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 7, figure_id: '06c026ce-9183-45e9-95ca-54108e50290c', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: 46f0dedd-755a-43df-9752-af05e78b5824
useLobby.ts:307 📊 roundSubmissions now has 2 items
useLobby.ts:311 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:220 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:221 🎯 Current figure for reveal: Queen Elizabeth I
LobbyGameplay.vue:225 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: {name: 'Queen Elizabeth I', hometown: 'Greenwich, England', hasHometown: true, hometownLength: 18}
LobbyGameplay.vue:185 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:188 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:192 🎯 Adding own submission to local state: {id: '46f0dedd-755a-43df-9752-af05e78b5824', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 7, figure_id: '06c026ce-9183-45e9-95ca-54108e50290c', …}
LobbyGameplay.vue:234 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 7 Next round would be: 8
MultiplayerView.vue:106 🎯 Starting next round: 8
MultiplayerView.vue:110 🎯 Starting round with figure: Vincent van Gogh
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:238 🔄 Resetting UI state for next round
LobbyGameplay.vue:249 ▶️ Resuming timer for next round
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '1b639e55-33fa-4cfd-97d9-e3a6a4450546', guessed_lat: -18.8439132011341, guessed_lon: 11.25, guessed_name: '', guessed_year: 1616, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: '1b639e55-33fa-4cfd-97d9-e3a6a4450546', guessed_lat: -18.8439132011341, guessed_lon: 11.25, guessed_name: '', guessed_year: 1616, …}
useLobby.ts:508 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:209 🗺️ Map clicked: Proxy(Object) {lat: -18.396230138028812, lon: -49.21875000000001} hasSubmitted: false
LobbyGameplay.vue:213 📍 Set guessedLat: -18.396230138028812 guessedLon: -49.21875000000001
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:108 🎯 handleSubmitGuess called
LobbyGameplay.vue:109 canSubmit: true currentFigure: true
LobbyGameplay.vue:139 ✅ Client-side validation passed: {lat: -18.396230138028812, lon: -49.21875000000001, year: 1581}
LobbyGameplay.vue:142 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:168 📊 Calculated scores: {spatial: 0, temporal: 664, name: 0, speed: 10, total: 674}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: '', guessedLat: -18.396230138028812, guessedLon: -49.21875000000001, guessedYear: 1581, score: 674}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 947e7720-bca3-4ed5-914a-1f008a519bd5
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: '947e7720-bca3-4ed5-914a-1f008a519bd5', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 8, figure_id: '1b639e55-33fa-4cfd-97d9-e3a6a4450546', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: 947e7720-bca3-4ed5-914a-1f008a519bd5
useLobby.ts:307 📊 roundSubmissions now has 2 items
useLobby.ts:311 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:220 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:221 🎯 Current figure for reveal: Vincent van Gogh
LobbyGameplay.vue:225 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: {name: 'Vincent van Gogh', hometown: 'Zundert, Netherlands', hasHometown: true, hometownLength: 20}
LobbyGameplay.vue:185 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:188 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:192 🎯 Adding own submission to local state: {id: '947e7720-bca3-4ed5-914a-1f008a519bd5', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 8, figure_id: '1b639e55-33fa-4cfd-97d9-e3a6a4450546', …}
LobbyGameplay.vue:234 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 8 Next round would be: 9
MultiplayerView.vue:106 🎯 Starting next round: 9
MultiplayerView.vue:110 🎯 Starting round with figure: Martin Luther King Jr.
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:238 🔄 Resetting UI state for next round
LobbyGameplay.vue:249 ▶️ Resuming timer for next round
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
LobbyGameplay.vue:209 🗺️ Map clicked: Proxy(Object) {lat: 30.37287518811804, lon: -82.26562500000001} hasSubmitted: false
LobbyGameplay.vue:213 📍 Set guessedLat: 30.37287518811804 guessedLon: -82.26562500000001
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '8060d265-cd30-46a3-af00-aebe877c5f8c', guessed_lat: 38.3847276688509, guessed_lon: -87.890625, guessed_name: '', guessed_year: 1966, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: '8060d265-cd30-46a3-af00-aebe877c5f8c', guessed_lat: 38.3847276688509, guessed_lon: -87.890625, guessed_name: '', guessed_year: 1966, …}
useLobby.ts:508 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:108 🎯 handleSubmitGuess called
LobbyGameplay.vue:109 canSubmit: true currentFigure: true
LobbyGameplay.vue:139 ✅ Client-side validation passed: {lat: 30.37287518811804, lon: -82.26562500000001, year: 1836}
LobbyGameplay.vue:142 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:168 📊 Calculated scores: {spatial: 757, temporal: 754, name: 0, speed: 10, total: 1521}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: '', guessedLat: 30.37287518811804, guessedLon: -82.26562500000001, guessedYear: 1836, score: 1521}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 1a5eb23b-32d5-497e-b597-921d0deebdc4
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: '1a5eb23b-32d5-497e-b597-921d0deebdc4', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 9, figure_id: '8060d265-cd30-46a3-af00-aebe877c5f8c', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: 1a5eb23b-32d5-497e-b597-921d0deebdc4
useLobby.ts:307 📊 roundSubmissions now has 2 items
useLobby.ts:311 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:220 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:221 🎯 Current figure for reveal: Martin Luther King Jr.
LobbyGameplay.vue:225 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: {name: 'Martin Luther King Jr.', hometown: 'Atlanta, Georgia', hasHometown: true, hometownLength: 16}
LobbyGameplay.vue:185 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:188 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:192 🎯 Adding own submission to local state: {id: '1a5eb23b-32d5-497e-b597-921d0deebdc4', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 9, figure_id: '8060d265-cd30-46a3-af00-aebe877c5f8c', …}
LobbyGameplay.vue:234 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 9 Next round would be: 10
MultiplayerView.vue:106 🎯 Starting next round: 10
MultiplayerView.vue:110 🎯 Starting round with figure: Marie Curie
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:238 🔄 Resetting UI state for next round
LobbyGameplay.vue:249 ▶️ Resuming timer for next round
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
LobbyGameplay.vue:209 🗺️ Map clicked: Proxy(Object) {lat: 51.12421275782688, lon: 28.4765625} hasSubmitted: false
LobbyGameplay.vue:213 📍 Set guessedLat: 51.12421275782688 guessedLon: 28.4765625
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:81 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:108 🎯 handleSubmitGuess called
LobbyGameplay.vue:109 canSubmit: true currentFigure: true
LobbyGameplay.vue:139 ✅ Client-side validation passed: {lat: 51.12421275782688, lon: 28.4765625, year: 1561}
LobbyGameplay.vue:142 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:168 📊 Calculated scores: {spatial: 747, temporal: 647, name: 0, speed: 10, total: 1404}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: '', guessedLat: 51.12421275782688, guessedLon: 28.4765625, guessedYear: 1561, score: 1404}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: db9ad345-9797-4fab-9729-e27058ca3080
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: 'db9ad345-9797-4fab-9729-e27058ca3080', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 10, figure_id: '0b2c1e3e-d069-406b-9986-f18aaac83c5b', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: db9ad345-9797-4fab-9729-e27058ca3080
useLobby.ts:307 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:185 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:188 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:192 🎯 Adding own submission to local state: {id: 'db9ad345-9797-4fab-9729-e27058ca3080', lobby_id: 'a4b649c8-bd56-4ca9-8a19-05c016bd7043', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 10, figure_id: '0b2c1e3e-d069-406b-9986-f18aaac83c5b', …}
LobbyGameplay.vue:81 🔘 canSubmit check: {result: false, hasSubmitted: true, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '0b2c1e3e-d069-406b-9986-f18aaac83c5b', guessed_lat: -9.65490785419901, guessed_lon: -60.1171875, guessed_name: '', guessed_year: -500, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: '0b2c1e3e-d069-406b-9986-f18aaac83c5b', guessed_lat: -9.65490785419901, guessed_lon: -60.1171875, guessed_name: '', guessed_year: -500, …}
useLobby.ts:508 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:523 🎯 All players submitted - reveal phase should start in UI
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:220 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:221 🎯 Current figure for reveal: Marie Curie
LobbyGameplay.vue:225 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: {name: 'Marie Curie', hometown: 'Warsaw, Poland', hasHometown: true, hometownLength: 14}
LobbyGameplay.vue:234 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 10 Next round would be: 11
MultiplayerView.vue:102 🏆 Game completed! All 10 rounds finished
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:238 🔄 Resetting UI state for next round
LobbyGameplay.vue:249 ▶️ Resuming timer for next round
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: in_progress → finished
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:560 📤 useLobby returning actions only - state accessed via store directly
useLobby.ts:35 🧹 Cleaning up realtime subscription
LobbyGameplay.vue:100 🧹 LobbyGameplay unmounting - ensuring timer cleanup