{previous removed for brevity}
LobbyCreateJoin.vue:54 ✅ joinExistingLobby completed successfully
realtime.ts:185 📡 Channel subscription status for lobby:a5a28b20-f756-485d-8492-8d4fcaea7022: SUBSCRIBED 
realtime.ts:188 ✅ Successfully subscribed to lobby:a5a28b20-f756-485d-8492-8d4fcaea7022
realtime.ts:208 🔗 Channel joined for lobby:a5a28b20-f756-485d-8492-8d4fcaea7022
realtime.ts:212 👋 Channel left for lobby:a5a28b20-f756-485d-8492-8d4fcaea7022
realtime.ts:216 💥 Channel system error for lobby:a5a28b20-f756-485d-8492-8d4fcaea7022: {message: 'Unable to subscribe to changes with given paramete…, "eq", "a5a28b20-f756-485d-8492-8d4fcaea7022"}]]', status: 'error', extension: 'postgres_changes', channel: 'lobby:a5a28b20-f756-485d-8492-8d4fcaea7022'}
(anonymous) @ realtime.ts:216
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3002
_trigger @ @supabase_supabase-js.js?v=a926d579:2987
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
decode @ @supabase_supabase-js.js?v=a926d579:2038
_onConnMessage @ @supabase_supabase-js.js?v=a926d579:3494
conn.onmessage @ @supabase_supabase-js.js?v=a926d579:3547
LobbyWaitingRoom.vue:69 🎯 handleToggleReady called in component
useLobby.ts:164 🎯 toggleReady called
useLobby.ts:172 🎯 toggleReady: Current ready state: false → New state: true
useLobby.ts:175 ⚡ toggleReady: Applying optimistic local update
lobbyStore.ts:74 🏪 STORE: updatePlayerReady called for player 428a818f-0713-4c88-b6c3-940d65d75755 ready: true
lobbyStore.ts:81 🏪 STORE: updatePlayerReady completed - fresh array assigned
useLobby.ts:179 🔄 toggleReady: Updating database...
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: (2) [{…}, {…}]
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: player_ready
queries.ts:731 📢 Broadcasted player ready event for 26aa8060-5887-4a29-8b5a-2356ebc0cafb ready: true
useLobby.ts:186 ✅ toggleReady: Database update completed - optimistic update confirmed
realtime.ts:68 📢 REALTIME: Player ready status updated via broadcast {ready: true, userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
realtime.ts:69 📢 REALTIME: About to call onPlayerReady callback with userId: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
useLobby.ts:396 👥 REALTIME CALLBACK: Player ready status changed for player: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
useLobby.ts:398 👥 REALTIME CALLBACK: About to refresh players list for lobby: a5a28b20-f756-485d-8492-8d4fcaea7022
realtime.ts:72 📢 REALTIME: onPlayerReady callback called successfully
useLobby.ts:401 👥 REALTIME CALLBACK: Server players: (2) [{…}, {…}]
useLobby.ts:416 👥 REALTIME CALLBACK: Current user optimistic state - server: true local: true
useLobby.ts:428 👥 REALTIME CALLBACK: Final reconciled players: (2) [{…}, {…}]
useLobby.ts:430 👥 REALTIME CALLBACK: About to update store with reconciled players
lobbyStore.ts:36 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:37 🏪 STORE: Current players: (2) [{…}, {…}]
lobbyStore.ts:38 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:42 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:432 👥 REALTIME CALLBACK: Updated store after ready change - reactivity is automatic!
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: true players: (2) [{…}, {…}]
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false {isHost: false, allPlayersReady: true, playerCount: 2}
realtime.ts:80 📢 REALTIME: Game started via broadcast {current_round: 1, lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', status: 'in_progress', timestamp: '2025-11-11T22:13:43.129Z'}
realtime.ts:81 🎮 REALTIME: Game started broadcast received - calling onGameStarted
useLobby.ts:449 🎮 REALTIME CALLBACK: onGameStarted triggered for lobby: a5a28b20-f756-485d-8492-8d4fcaea7022
useLobby.ts:452 📊 Fetching updated lobby with players...
realtime.ts:84 🎮 REALTIME: onGameStarted callback completed successfully
useLobby.ts:454 ✅ Got updated lobby - status: in_progress current_round: 1
useLobby.ts:456 💾 Updating lobby status in store...
useLobby.ts:458 ✅ Lobby status updated to: in_progress
useLobby.ts:460 🎯 Loading figures for game...
useLobby.ts:463 📖 Loading figure: 57706cbc-ffa0-4dcb-b98a-2ad5764135f8
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:57 🎯 MultiplayerView: Lobby status changed: waiting → in_progress
MultiplayerView.vue:59 🎮 MultiplayerView: Lobby status is now in_progress - should show game screen
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:584 📤 useLobby returning actions only - state accessed via store directly
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
useLobby.ts:35 🧹 Cleaning up realtime subscription
useLobby.ts:463 📖 Loading figure: 353538af-e5e9-4a2c-a0af-380d37a4e53c
useLobby.ts:463 📖 Loading figure: 0b2c1e3e-d069-406b-9986-f18aaac83c5b
useLobby.ts:463 📖 Loading figure: 98a500a9-a896-42bc-9611-6bedcb325e6b
useLobby.ts:463 📖 Loading figure: 2ba3ca99-5e72-4edc-bb07-4e799e5cb92b
useLobby.ts:463 📖 Loading figure: ceb08a13-e742-4e2c-af09-ec6fe0f71d40
useLobby.ts:463 📖 Loading figure: f42b31f2-0c7b-4ea7-88d0-0896679aa765
useLobby.ts:463 📖 Loading figure: 572fb89d-07be-4b9b-8b5c-33f3c9de79c0
useLobby.ts:463 📖 Loading figure: 487ea03d-2cd4-4f68-91eb-1bddeade34b8
useLobby.ts:463 📖 Loading figure: 1b639e55-33fa-4cfd-97d9-e3a6a4450546
useLobby.ts:467 ✅ Loaded 10 figures
useLobby.ts:469 💾 Setting figures in store...
useLobby.ts:472 🎲 Starting first round...
useLobby.ts:475 ✅ Started round 1 with figure: Leonardo da Vinci
useLobby.ts:480 🔄 Setting loading to false after game start
useLobby.ts:483 🎮 Game started successfully!
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
FigureCarousel.vue:95 ❌ Image preload failed: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Francesco_Melzi_-_Portrait_of_Leonardo.png/800px-Francesco_Melzi_-_Portrait_of_Leonardo.png
img.onerror @ FigureCarousel.vue:95
FigureCarousel.vue:145 ❌ Image failed to load, setting error state
handleImageError @ FigureCarousel.vue:145
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335
realtime.ts:163 📢 REALTIME: Submission received via broadcast: {figure_id: '57706cbc-ffa0-4dcb-b98a-2ad5764135f8', guessed_lat: 13.1543760554185, guessed_lon: 23.203125, guessed_name: '', guessed_year: 1661, …}
realtime.ts:164 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:504 📨 Submission received: {figure_id: '57706cbc-ffa0-4dcb-b98a-2ad5764135f8', guessed_lat: 13.1543760554185, guessed_lon: 23.203125, guessed_name: '', guessed_year: 1661, …}
useLobby.ts:517 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:167 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:283 🗺️ Map clicked: Proxy(Object) {lat: 5.643319165077772, lon: 27.421875000000004} hasSubmitted: false
LobbyGameplay.vue:287 📍 Set guessedLat: 5.643319165077772 guessedLon: 27.421875000000004
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:176 🎯 handleSubmitGuess called
LobbyGameplay.vue:177 canSubmit: true currentFigure: true
LobbyGameplay.vue:213 ✅ Client-side validation passed: {lat: 5.643319165077772, lon: 27.421875000000004, year: 1091}
LobbyGameplay.vue:216 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:242 📊 Calculated scores: {spatial: 346, temporal: 620, name: 0, speed: 60, total: 1026}
useLobby.ts:269 🎯 submitGuess called with: {guessedName: '', guessedLat: 5.643319165077772, guessedLon: 27.421875000000004, guessedYear: 1091, score: 1026}
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 51e73ae8-798f-4443-b35a-1b2da0455f9e
useLobby.ts:300 ✅ submitMultiplayerGuess returned: {id: '51e73ae8-798f-4443-b35a-1b2da0455f9e', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 1, figure_id: '57706cbc-ffa0-4dcb-b98a-2ad5764135f8', …}
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 51e73ae8-798f-4443-b35a-1b2da0455f9e
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:294 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:295 🎯 Current figure for reveal: Leonardo da Vinci
LobbyGameplay.vue:299 ⏸️ Timer paused during reveal phase
RevealPhase.vue:132 RevealPhase figure data: {name: 'Leonardo da Vinci', hometown: 'Vinci, Italy', hasHometown: true, hometownLength: 12}
LobbyGameplay.vue:259 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:262 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:266 🎯 Adding own submission to local state: {id: '51e73ae8-798f-4443-b35a-1b2da0455f9e', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 1, figure_id: '57706cbc-ffa0-4dcb-b98a-2ad5764135f8', …}
realtime.ts:175 📢 REALTIME: Player ready for next round via broadcast: {ready: true, user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
useLobby.ts:439 👥 REALTIME CALLBACK: Player ready for next round: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 true
lobbyStore.ts:98 🏪 STORE: setPlayerReadyForNextRound called for user 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 ready: true
lobbyStore.ts:111 🏪 STORE: setPlayerReadyForNextRound completed - ready players: Proxy(Array) {0: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
useLobby.ts:442 👥 REALTIME CALLBACK: Updated player ready for next round status
realtime.ts:178 📢 REALTIME: onPlayerReadyForNextRound callback completed successfully
LobbyGameplay.vue:316 🎯 handleReadyForNextRound called: true
LobbyGameplay.vue:321 🎯 Setting player ready for next round: 26aa8060-5887-4a29-8b5a-2356ebc0cafb true
lobbyStore.ts:98 🏪 STORE: setPlayerReadyForNextRound called for user 26aa8060-5887-4a29-8b5a-2356ebc0cafb ready: true
lobbyStore.ts:111 🏪 STORE: setPlayerReadyForNextRound completed - ready players: Proxy(Array) {0: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', 1: '26aa8060-5887-4a29-8b5a-2356ebc0cafb'}
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:34 [Vue warn]: onUnmounted is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.
warn$1 @ chunk-LG6AQRJS.js?v=a926d579:2149
injectHook @ chunk-LG6AQRJS.js?v=a926d579:4991
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:4998
useLobby @ useLobby.ts:34
handleReadyForNextRound @ LobbyGameplay.vue:325
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
emit @ chunk-LG6AQRJS.js?v=a926d579:8589
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:10300
handleNext @ RevealPhase.vue:167
(anonymous) @ RevealPhase.vue:180
setInterval
(anonymous) @ RevealPhase.vue:177
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:4998
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
hook.__weh.hook.__weh @ chunk-LG6AQRJS.js?v=a926d579:4978
flushPostFlushCbs @ chunk-LG6AQRJS.js?v=a926d579:2481
flushJobs @ chunk-LG6AQRJS.js?v=a926d579:2523
Promise.then
queueFlush @ chunk-LG6AQRJS.js?v=a926d579:2418
queueJob @ chunk-LG6AQRJS.js?v=a926d579:2413
effect2.scheduler @ chunk-LG6AQRJS.js?v=a926d579:7639
trigger @ chunk-LG6AQRJS.js?v=a926d579:533
endBatch @ chunk-LG6AQRJS.js?v=a926d579:591
notify @ chunk-LG6AQRJS.js?v=a926d579:853
trigger @ chunk-LG6AQRJS.js?v=a926d579:827
set value @ chunk-LG6AQRJS.js?v=a926d579:1706
set @ chunk-LG6AQRJS.js?v=a926d579:1252
submitGuess @ useLobby.ts:305
await in submitGuess
handleSubmitGuess @ LobbyGameplay.vue:251
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335
useLobby.ts:584 📤 useLobby returning actions only - state accessed via store directly
LobbyGameplay.vue:309 🎯 All players ready for next round - auto-advancing
LobbyGameplay.vue:335 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:75 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:90 🏁 Ending current round and updating scores
MultiplayerView.vue:99 📊 Score updates for this round: {4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 1226, 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 1026}
MultiplayerView.vue:100 📊 Current player scores before update: (2) [{…}, {…}]
LobbyGameplay.vue:339 🔄 Resetting UI state for next round
LobbyGameplay.vue:352 🔄 Resetting timer for next round
LobbyGameplay.vue:354 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: player_ready_for_next_round
useLobby.ts:578 📢 Broadcasted event: player_ready_for_next_round
MultiplayerView.vue:109 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 0 + 1226 = 1226
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 1226}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 1226}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', newScore: 1226}
MultiplayerView.vue:109 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 0 + 1026 = 1026
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 1026}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
FigureCarousel.vue:145 ❌ Image failed to load, setting error state
handleImageError @ FigureCarousel.vue:145
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335
FigureCarousel.vue:95 ❌ Image preload failed: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Francesco_Melzi_-_Portrait_of_Leonardo.png/800px-Francesco_Melzi_-_Portrait_of_Leonardo.png
img.onerror @ FigureCarousel.vue:95
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 1026}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', newScore: 1026}
MultiplayerView.vue:124 📊 Player scores after update: (2) [{…}, {…}]
MultiplayerView.vue:127 🎲 Current round: 1 Next round would be: 2

{removed for brevity rounds 2-9}

MultiplayerView.vue:135 🎯 Starting next round: 10
MultiplayerView.vue:139 🎯 Starting round with figure: Vincent van Gogh
MultiplayerView.vue:148 ✅ Round advancement completed
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
FigureCarousel.vue:139 🖼️ Image loaded successfully, setting loading to false
FigureCarousel.vue:92 🖼️ Image preloaded successfully: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg
LobbyGameplay.vue:283 🗺️ Map clicked: Proxy(Object) {lat: 51.70660846336452, lon: 4.570312500000001} hasSubmitted: false
LobbyGameplay.vue:287 📍 Set guessedLat: 51.70660846336452 guessedLon: 4.570312500000001
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:176 🎯 handleSubmitGuess called
LobbyGameplay.vue:177 canSubmit: true currentFigure: true
LobbyGameplay.vue:213 ✅ Client-side validation passed: {lat: 51.70660846336452, lon: 4.570312500000001, year: 1836}
LobbyGameplay.vue:216 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:242 📊 Calculated scores: {spatial: 797, temporal: 792, name: 800, speed: 0, total: 2389}
useLobby.ts:269 🎯 submitGuess called with: {guessedName: 'Vincent Van Gogh', guessedLat: 51.70660846336452, guessedLon: 4.570312500000001, guessedYear: 1836, score: 2389}
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 8adf1ebe-38ea-4083-820c-5fc05a1c174a
useLobby.ts:300 ✅ submitMultiplayerGuess returned: {id: '8adf1ebe-38ea-4083-820c-5fc05a1c174a', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 10, figure_id: '1b639e55-33fa-4cfd-97d9-e3a6a4450546', …}
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 8adf1ebe-38ea-4083-820c-5fc05a1c174a
useLobby.ts:306 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:259 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:262 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:266 🎯 Adding own submission to local state: {id: '8adf1ebe-38ea-4083-820c-5fc05a1c174a', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 10, figure_id: '1b639e55-33fa-4cfd-97d9-e3a6a4450546', …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: true, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:163 📢 REALTIME: Submission received via broadcast: {figure_id: '1b639e55-33fa-4cfd-97d9-e3a6a4450546', guessed_lat: 14.2217886283976, guessed_lon: 10.283203125, guessed_name: '', guessed_year: -500, …}
realtime.ts:164 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:504 📨 Submission received: {figure_id: '1b639e55-33fa-4cfd-97d9-e3a6a4450546', guessed_lat: 14.2217886283976, guessed_lon: 10.283203125, guessed_name: '', guessed_year: -500, …}
useLobby.ts:517 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:532 🎯 All players submitted - reveal phase should start in UI
realtime.ts:167 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:294 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:295 🎯 Current figure for reveal: Vincent van Gogh
LobbyGameplay.vue:299 ⏸️ Timer paused during reveal phase
RevealPhase.vue:132 RevealPhase figure data: {name: 'Vincent van Gogh', hometown: 'Zundert, Netherlands', hasHometown: true, hometownLength: 20}
realtime.ts:175 📢 REALTIME: Player ready for next round via broadcast: {ready: true, user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
useLobby.ts:439 👥 REALTIME CALLBACK: Player ready for next round: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 true
lobbyStore.ts:98 🏪 STORE: setPlayerReadyForNextRound called for user 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 ready: true
lobbyStore.ts:111 🏪 STORE: setPlayerReadyForNextRound completed - ready players: Proxy(Array) {0: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
useLobby.ts:442 👥 REALTIME CALLBACK: Updated player ready for next round status
realtime.ts:178 📢 REALTIME: onPlayerReadyForNextRound callback completed successfully
LobbyGameplay.vue:316 🎯 handleReadyForNextRound called: true
LobbyGameplay.vue:321 🎯 Setting player ready for next round: 26aa8060-5887-4a29-8b5a-2356ebc0cafb true
lobbyStore.ts:98 🏪 STORE: setPlayerReadyForNextRound called for user 26aa8060-5887-4a29-8b5a-2356ebc0cafb ready: true
lobbyStore.ts:111 🏪 STORE: setPlayerReadyForNextRound completed - ready players: Proxy(Array) {0: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', 1: '26aa8060-5887-4a29-8b5a-2356ebc0cafb'}
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:34 [Vue warn]: onUnmounted is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.
warn$1 @ chunk-LG6AQRJS.js?v=a926d579:2149
injectHook @ chunk-LG6AQRJS.js?v=a926d579:4991
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:4998
useLobby @ useLobby.ts:34
handleReadyForNextRound @ LobbyGameplay.vue:325
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
emit @ chunk-LG6AQRJS.js?v=a926d579:8589
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:10300
handleNext @ RevealPhase.vue:167
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
emit @ chunk-LG6AQRJS.js?v=a926d579:8589
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:10300
handleClick @ Button.vue:98
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335
useLobby.ts:584 📤 useLobby returning actions only - state accessed via store directly
LobbyGameplay.vue:309 🎯 All players ready for next round - auto-advancing
LobbyGameplay.vue:335 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:75 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:90 🏁 Ending current round and updating scores
MultiplayerView.vue:99 📊 Score updates for this round: {26aa8060-5887-4a29-8b5a-2356ebc0cafb: 2389, 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 383}
MultiplayerView.vue:100 📊 Current player scores before update: (2) [{…}, {…}]
LobbyGameplay.vue:339 🔄 Resetting UI state for next round
LobbyGameplay.vue:352 🔄 Resetting timer for next round
LobbyGameplay.vue:354 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: player_ready_for_next_round
useLobby.ts:578 📢 Broadcasted event: player_ready_for_next_round
FigureCarousel.vue:92 🖼️ Image preloaded successfully: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg
FigureCarousel.vue:139 🖼️ Image loaded successfully, setting loading to false
MultiplayerView.vue:109 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 10683 + 2389 = 13072
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 13072}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 13072}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', newScore: 13072}
MultiplayerView.vue:109 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 9214 + 383 = 9597
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 9597}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 9597}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', newScore: 9597}
MultiplayerView.vue:124 📊 Player scores after update: (2) [{…}, {…}]
MultiplayerView.vue:127 🎲 Current round: 10 Next round would be: 11
MultiplayerView.vue:131 🏆 Game completed! All 10 rounds finished
MultiplayerView.vue:148 ✅ Round advancement completed
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:57 🎯 MultiplayerView: Lobby status changed: in_progress → finished
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:584 📤 useLobby returning actions only - state accessed via store directly
useLobby.ts:35 🧹 Cleaning up realtime subscription
LobbyGameplay.vue:108 🧹 LobbyGameplay unmounting - ensuring timer cleanup
LobbyResults.vue:25 📊 Fetching fresh player data for results...
LobbyResults.vue:26 📊 Props players: (2) [{…}, {…}]
LobbyResults.vue:29 ✅ Loaded fresh player data from DB: (2) [{…}, {…}]
LobbyResults.vue:30 ✅ Final playersData for display: (2) [{…}, {…}]0: {username: 'test11', score: 9597}1: {username: 'test16', score: 13072}length: 2[[Prototype]]: Array(0)
