client.ts:23 Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.
_GoTrueClient @ @supabase_supabase-js.js?v=a926d579:8302
SupabaseAuthClient @ @supabase_supabase-js.js?v=a926d579:10622
_initSupabaseAuthClient @ @supabase_supabase-js.js?v=a926d579:10788
SupabaseClient @ @supabase_supabase-js.js?v=a926d579:10664
createClient @ @supabase_supabase-js.js?v=a926d579:10830
(anonymous) @ client.ts:23
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:584 📤 useLobby returning actions only - state accessed via store directly
MultiplayerView.vue:38 🔍 lobbyStore reactive refs: {lobby: ObjectRefImpl, player: ObjectRefImpl, isLoading: ObjectRefImpl}
MultiplayerView.vue:39 🎯 MultiplayerView mounted, initial state: {lobby: null, player: null, isLoading: false}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
MultiplayerView.vue:57 🎯 MultiplayerView: Lobby status changed: undefined → undefined
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:584 📤 useLobby returning actions only - state accessed via store directly
LobbyCreateJoin.vue:20 🎨 LobbyCreateJoin component mounted!
LobbyCreateJoin.vue:21 🔍 LobbyCreateJoin reactive values: {isLoading: false, hasCreateNewLobby: true, hasJoinExistingLobby: true}
MultiplayerView.vue:32 🎯 MultiplayerView mounted - cleaning up any existing lobby state
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
authStore.ts:47 👂 Setting up auth state listener...
authStore.ts:73 ✅ Auth store initialized
authStore.ts:49 🔄 Auth state change: INITIAL_SESSION Session exists
LobbyCreateJoin.vue:44 🏗️ LobbyCreateJoin.handleJoinLobby called with roomCode: JAC5RF
LobbyCreateJoin.vue:52 🚀 Calling joinExistingLobby...
useLobby.ts:103 🚪 joinExistingLobby called with roomCode: JAC5RF
useLobby.ts:110 👤 Authenticated user: 26aa8060-5887-4a29-8b5a-2356ebc0cafb
useLobby.ts:113 🧹 Cleaning up any existing lobby state before joining
useLobby.ts:553 🧹 Cleaning up lobby state and realtime subscriptions
useLobby.ts:563 🔄 Resetting lobby store
useLobby.ts:566 ✅ Cleanup completed
useLobby.ts:120 ⏳ Setting loading state to true
useLobby.ts:124 🔄 Calling joinLobby API...
queries.ts:423 🔍 joinLobby: Looking for lobby with code: JAC5RF
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:440 ✅ joinLobby: Found lobby: a5a28b20-f756-485d-8492-8d4fcaea7022 status: waiting
queries.ts:446 🔍 joinLobby: Checking player capacity for lobby: a5a28b20-f756-485d-8492-8d4fcaea7022
queries.ts:459 ✅ joinLobby: Current player count: 1
queries.ts:465 🔍 joinLobby: Checking if user already in lobby: 26aa8060-5887-4a29-8b5a-2356ebc0cafb
queries.ts:498 📝 joinLobby: Adding player to lobby
queries.ts:516 ✅ joinLobby: Player added successfully: 428a818f-0713-4c88-b6c3-940d65d75755
realtime.ts:241 Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.
send @ @supabase_supabase-js.js?v=a926d579:2805
broadcastLobbyEvent @ realtime.ts:241
joinLobby @ queries.ts:521
await in joinLobby
joinExistingLobby @ useLobby.ts:125
handleJoinLobby @ LobbyCreateJoin.vue:53
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:12326
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: player_joined
queries.ts:522 📢 Broadcasted player joined event for test16
queries.ts:528 🎉 joinLobby: Successfully joined lobby: a5a28b20-f756-485d-8492-8d4fcaea7022
useLobby.ts:130 ✅ joinLobby API returned: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', roomCode: 'JAC5RF', playerId: '428a818f-0713-4c88-b6c3-940d65d75755'}
useLobby.ts:132 📊 Fetching updated players list...
useLobby.ts:134 ✅ Got players list: 2 players
useLobby.ts:136 💾 Setting lobby and players in store...
lobbyStore.ts:27 🏪 STORE: setLobby called with: {lobby: {…}, player: {…}}
lobbyStore.ts:32 🏪 STORE: setLobby completed, currentLobby: Proxy(Object) {id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', room_code: 'JAC5RF', host_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', status: 'waiting', current_round: 0, …}
lobbyStore.ts:36 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:37 🏪 STORE: Current players: []
lobbyStore.ts:38 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:42 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:139 ✅ Store updated successfully
useLobby.ts:142 🎯 About to setup realtime subscription for join...
useLobby.ts:361 🔌 Setting up realtime subscription for lobby: a5a28b20-f756-485d-8492-8d4fcaea7022
realtime.ts:22 📡 Subscribing to channel: lobby:a5a28b20-f756-485d-8492-8d4fcaea7022
useLobby.ts:145 ✅ Realtime subscription setup completed for join
useLobby.ts:150 🎉 joinExistingLobby completed successfully
useLobby.ts:158 🔄 Setting loading state to false
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:57 🎯 MultiplayerView: Lobby status changed: undefined → waiting
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:584 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: {playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: (2) [{…}, {…}]
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
MultiplayerView.vue:135 🎯 Starting next round: 2
MultiplayerView.vue:139 🎯 Starting round with figure: Isaac Newton
MultiplayerView.vue:148 ✅ Round advancement completed
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
FigureCarousel.vue:92 🖼️ Image preloaded successfully: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg/800px-Portrait_of_Sir_Isaac_Newton%2C_1689.jpg
FigureCarousel.vue:139 🖼️ Image loaded successfully, setting loading to false
LobbyGameplay.vue:283 🗺️ Map clicked: Proxy(Object) {lat: 50.8267584823633, lon: -2.8125} hasSubmitted: false
LobbyGameplay.vue:287 📍 Set guessedLat: 50.8267584823633 guessedLon: -2.8125
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:176 🎯 handleSubmitGuess called
LobbyGameplay.vue:177 canSubmit: true currentFigure: true
LobbyGameplay.vue:213 ✅ Client-side validation passed: {lat: 50.8267584823633, lon: -2.8125, year: 1691}
LobbyGameplay.vue:216 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:242 📊 Calculated scores: {spatial: 773, temporal: 776, name: 800, speed: 0, total: 2349}
useLobby.ts:269 🎯 submitGuess called with: {guessedName: 'Isaac Newton', guessedLat: 50.8267584823633, guessedLon: -2.8125, guessedYear: 1691, score: 2349}
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: d38ec4a6-a063-4d92-9b3d-863873fd783b
useLobby.ts:300 ✅ submitMultiplayerGuess returned: {id: 'd38ec4a6-a063-4d92-9b3d-863873fd783b', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 2, figure_id: '353538af-e5e9-4a2c-a0af-380d37a4e53c', …}
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: d38ec4a6-a063-4d92-9b3d-863873fd783b
useLobby.ts:306 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:259 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:262 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:266 🎯 Adding own submission to local state: {id: 'd38ec4a6-a063-4d92-9b3d-863873fd783b', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 2, figure_id: '353538af-e5e9-4a2c-a0af-380d37a4e53c', …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: true, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:163 📢 REALTIME: Submission received via broadcast: {figure_id: '353538af-e5e9-4a2c-a0af-380d37a4e53c', guessed_lat: 53.4880455360562, guessed_lon: -1.7578125, guessed_name: 'Galileo Gary ', guessed_year: 1596, …}
realtime.ts:164 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:504 📨 Submission received: {figure_id: '353538af-e5e9-4a2c-a0af-380d37a4e53c', guessed_lat: 53.4880455360562, guessed_lon: -1.7578125, guessed_name: 'Galileo Gary ', guessed_year: 1596, …}
useLobby.ts:517 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:532 🎯 All players submitted - reveal phase should start in UI
realtime.ts:167 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:294 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:295 🎯 Current figure for reveal: Isaac Newton
LobbyGameplay.vue:299 ⏸️ Timer paused during reveal phase
RevealPhase.vue:132 RevealPhase figure data: {name: 'Isaac Newton', hometown: 'Woolsthorpe, England', hasHometown: true, hometownLength: 20}
LobbyGameplay.vue:316 🎯 handleReadyForNextRound called: true
LobbyGameplay.vue:321 🎯 Setting player ready for next round: 26aa8060-5887-4a29-8b5a-2356ebc0cafb true
lobbyStore.ts:98 🏪 STORE: setPlayerReadyForNextRound called for user 26aa8060-5887-4a29-8b5a-2356ebc0cafb ready: true
lobbyStore.ts:111 🏪 STORE: setPlayerReadyForNextRound completed - ready players: Proxy(Array) {0: '26aa8060-5887-4a29-8b5a-2356ebc0cafb'}
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
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: player_ready_for_next_round
useLobby.ts:578 📢 Broadcasted event: player_ready_for_next_round
realtime.ts:175 📢 REALTIME: Player ready for next round via broadcast: {ready: true, user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
useLobby.ts:439 👥 REALTIME CALLBACK: Player ready for next round: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 true
lobbyStore.ts:98 🏪 STORE: setPlayerReadyForNextRound called for user 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 ready: true
lobbyStore.ts:111 🏪 STORE: setPlayerReadyForNextRound completed - ready players: Proxy(Array) {0: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', 1: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
useLobby.ts:442 👥 REALTIME CALLBACK: Updated player ready for next round status
realtime.ts:178 📢 REALTIME: onPlayerReadyForNextRound callback completed successfully
LobbyGameplay.vue:309 🎯 All players ready for next round - auto-advancing
LobbyGameplay.vue:335 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:75 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:90 🏁 Ending current round and updating scores
MultiplayerView.vue:99 📊 Score updates for this round: {26aa8060-5887-4a29-8b5a-2356ebc0cafb: 2349, 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 1566}
MultiplayerView.vue:100 📊 Current player scores before update: (2) [{…}, {…}]
LobbyGameplay.vue:339 🔄 Resetting UI state for next round
LobbyGameplay.vue:352 🔄 Resetting timer for next round
LobbyGameplay.vue:354 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
FigureCarousel.vue:92 🖼️ Image preloaded successfully: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg/800px-Portrait_of_Sir_Isaac_Newton%2C_1689.jpg
FigureCarousel.vue:139 🖼️ Image loaded successfully, setting loading to false
MultiplayerView.vue:109 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 1026 + 2349 = 3375
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 3375}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 3375}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', newScore: 3375}
MultiplayerView.vue:109 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 1226 + 1566 = 2792
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 2792}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 2792}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', newScore: 2792}
MultiplayerView.vue:124 📊 Player scores after update: (2) [{…}, {…}]
MultiplayerView.vue:127 🎲 Current round: 2 Next round would be: 3
MultiplayerView.vue:135 🎯 Starting next round: 3
MultiplayerView.vue:139 🎯 Starting round with figure: Marie Curie
MultiplayerView.vue:148 ✅ Round advancement completed
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
FigureCarousel.vue:92 🖼️ Image preloaded successfully: https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/800px-Marie_Curie_c1920.jpg
FigureCarousel.vue:139 🖼️ Image loaded successfully, setting loading to false
realtime.ts:163 📢 REALTIME: Submission received via broadcast: {figure_id: '0b2c1e3e-d069-406b-9986-f18aaac83c5b', guessed_lat: 49.9370797569753, guessed_lon: 7.822265625, guessed_name: 'Marie Curie', guessed_year: 1591, …}
realtime.ts:164 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:504 📨 Submission received: {figure_id: '0b2c1e3e-d069-406b-9986-f18aaac83c5b', guessed_lat: 49.9370797569753, guessed_lon: 7.822265625, guessed_name: 'Marie Curie', guessed_year: 1591, …}
useLobby.ts:517 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:167 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:283 🗺️ Map clicked: Proxy(Object) {lat: 50.8267584823633, lon: 8.085937500000002} hasSubmitted: false
LobbyGameplay.vue:287 📍 Set guessedLat: 50.8267584823633 guessedLon: 8.085937500000002
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:283 🗺️ Map clicked: Proxy(Object) {lat: 49.703167720179884, lon: 18.281250000000004} hasSubmitted: false
LobbyGameplay.vue:287 📍 Set guessedLat: 49.703167720179884 guessedLon: 18.281250000000004
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:176 🎯 handleSubmitGuess called
LobbyGameplay.vue:177 canSubmit: true currentFigure: true
LobbyGameplay.vue:213 ✅ Client-side validation passed: {lat: 49.703167720179884, lon: 18.281250000000004, year: 1791}
LobbyGameplay.vue:216 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:242 📊 Calculated scores: {spatial: 766, temporal: 762, name: 400, speed: 0, total: 1928}
useLobby.ts:269 🎯 submitGuess called with: {guessedName: 'Curie Mary', guessedLat: 49.703167720179884, guessedLon: 18.281250000000004, guessedYear: 1791, score: 1928}
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 32d7f0eb-9795-4058-a684-07bd15aaa554
useLobby.ts:300 ✅ submitMultiplayerGuess returned: {id: '32d7f0eb-9795-4058-a684-07bd15aaa554', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 3, figure_id: '0b2c1e3e-d069-406b-9986-f18aaac83c5b', …}
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 32d7f0eb-9795-4058-a684-07bd15aaa554
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:294 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:295 🎯 Current figure for reveal: Marie Curie
LobbyGameplay.vue:299 ⏸️ Timer paused during reveal phase
RevealPhase.vue:132 RevealPhase figure data: {name: 'Marie Curie', hometown: 'Warsaw, Poland', hasHometown: true, hometownLength: 14}
LobbyGameplay.vue:259 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:262 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:266 🎯 Adding own submission to local state: {id: '32d7f0eb-9795-4058-a684-07bd15aaa554', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 3, figure_id: '0b2c1e3e-d069-406b-9986-f18aaac83c5b', …}
LobbyGameplay.vue:316 🎯 handleReadyForNextRound called: true
LobbyGameplay.vue:321 🎯 Setting player ready for next round: 26aa8060-5887-4a29-8b5a-2356ebc0cafb true
lobbyStore.ts:98 🏪 STORE: setPlayerReadyForNextRound called for user 26aa8060-5887-4a29-8b5a-2356ebc0cafb ready: true
lobbyStore.ts:111 🏪 STORE: setPlayerReadyForNextRound completed - ready players: Proxy(Array) {0: '26aa8060-5887-4a29-8b5a-2356ebc0cafb'}
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
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: player_ready_for_next_round
useLobby.ts:578 📢 Broadcasted event: player_ready_for_next_round
realtime.ts:175 📢 REALTIME: Player ready for next round via broadcast: {ready: true, user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
useLobby.ts:439 👥 REALTIME CALLBACK: Player ready for next round: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 true
lobbyStore.ts:98 🏪 STORE: setPlayerReadyForNextRound called for user 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 ready: true
lobbyStore.ts:111 🏪 STORE: setPlayerReadyForNextRound completed - ready players: Proxy(Array) {0: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', 1: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
useLobby.ts:442 👥 REALTIME CALLBACK: Updated player ready for next round status
realtime.ts:178 📢 REALTIME: onPlayerReadyForNextRound callback completed successfully
LobbyGameplay.vue:309 🎯 All players ready for next round - auto-advancing
LobbyGameplay.vue:335 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:75 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:90 🏁 Ending current round and updating scores
MultiplayerView.vue:99 📊 Score updates for this round: {4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 2167, 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 1928}
MultiplayerView.vue:100 📊 Current player scores before update: (2) [{…}, {…}]
LobbyGameplay.vue:339 🔄 Resetting UI state for next round
LobbyGameplay.vue:352 🔄 Resetting timer for next round
LobbyGameplay.vue:354 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
FigureCarousel.vue:92 🖼️ Image preloaded successfully: https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/800px-Marie_Curie_c1920.jpg
FigureCarousel.vue:139 🖼️ Image loaded successfully, setting loading to false
MultiplayerView.vue:109 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 2792 + 2167 = 4959
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 4959}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 4959}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', newScore: 4959}
MultiplayerView.vue:109 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 3375 + 1928 = 5303
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 5303}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 5303}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', newScore: 5303}
MultiplayerView.vue:124 📊 Player scores after update: (2) [{…}, {…}]
MultiplayerView.vue:127 🎲 Current round: 3 Next round would be: 4
MultiplayerView.vue:135 🎯 Starting next round: 4
MultiplayerView.vue:139 🎯 Starting round with figure: Albert Einstein
MultiplayerView.vue:148 ✅ Round advancement completed
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
FigureCarousel.vue:92 🖼️ Image preloaded successfully: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/800px-Albert_Einstein_Head.jpg
FigureCarousel.vue:139 🖼️ Image loaded successfully, setting loading to false
realtime.ts:163 📢 REALTIME: Submission received via broadcast: {figure_id: '98a500a9-a896-42bc-9611-6bedcb325e6b', guessed_lat: -16.3833911236084, guessed_lon: 28.828125, guessed_name: '', guessed_year: 0, …}
realtime.ts:164 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:504 📨 Submission received: {figure_id: '98a500a9-a896-42bc-9611-6bedcb325e6b', guessed_lat: -16.3833911236084, guessed_lon: 28.828125, guessed_name: '', guessed_year: 0, …}
useLobby.ts:517 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:167 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:283 🗺️ Map clicked: Proxy(Object) {lat: 39.47860556892209, lon: 43.24218750000001} hasSubmitted: false
LobbyGameplay.vue:287 📍 Set guessedLat: 39.47860556892209 guessedLon: 43.24218750000001
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:176 🎯 handleSubmitGuess called
LobbyGameplay.vue:177 canSubmit: true currentFigure: true
LobbyGameplay.vue:213 ✅ Client-side validation passed: {lat: 39.47860556892209, lon: 43.24218750000001, year: 0}
LobbyGameplay.vue:216 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:242 📊 Calculated scores: {spatial: 519, temporal: 0, name: 0, speed: 80, total: 599}
useLobby.ts:269 🎯 submitGuess called with: {guessedName: '', guessedLat: 39.47860556892209, guessedLon: 43.24218750000001, guessedYear: 0, score: 599}
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 71441a8d-fedc-446e-b573-3a483d83b301
useLobby.ts:300 ✅ submitMultiplayerGuess returned: {id: '71441a8d-fedc-446e-b573-3a483d83b301', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 4, figure_id: '98a500a9-a896-42bc-9611-6bedcb325e6b', …}
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 71441a8d-fedc-446e-b573-3a483d83b301
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:294 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:295 🎯 Current figure for reveal: Albert Einstein
LobbyGameplay.vue:299 ⏸️ Timer paused during reveal phase
RevealPhase.vue:132 RevealPhase figure data: {name: 'Albert Einstein', hometown: 'Ulm, Germany', hasHometown: true, hometownLength: 12}
LobbyGameplay.vue:259 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:262 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:266 🎯 Adding own submission to local state: {id: '71441a8d-fedc-446e-b573-3a483d83b301', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 4, figure_id: '98a500a9-a896-42bc-9611-6bedcb325e6b', …}
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
MultiplayerView.vue:99 📊 Score updates for this round: {4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 146, 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 599}
MultiplayerView.vue:100 📊 Current player scores before update: (2) [{…}, {…}]
LobbyGameplay.vue:339 🔄 Resetting UI state for next round
LobbyGameplay.vue:352 🔄 Resetting timer for next round
LobbyGameplay.vue:354 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: player_ready_for_next_round
useLobby.ts:578 📢 Broadcasted event: player_ready_for_next_round
FigureCarousel.vue:92 🖼️ Image preloaded successfully: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/800px-Albert_Einstein_Head.jpg
FigureCarousel.vue:139 🖼️ Image loaded successfully, setting loading to false
MultiplayerView.vue:109 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 4959 + 146 = 5105
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 5105}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 5105}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', newScore: 5105}
MultiplayerView.vue:109 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 5303 + 599 = 5902
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 5902}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 5902}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', newScore: 5902}
MultiplayerView.vue:124 📊 Player scores after update: (2) [{…}, {…}]
MultiplayerView.vue:127 🎲 Current round: 4 Next round would be: 5
MultiplayerView.vue:135 🎯 Starting next round: 5
MultiplayerView.vue:139 🎯 Starting round with figure: Joan of Arc
MultiplayerView.vue:148 ✅ Round advancement completed
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
FigureCarousel.vue:92 🖼️ Image preloaded successfully: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Joan_of_Arc_miniature_graded.jpg/800px-Joan_of_Arc_miniature_graded.jpg
FigureCarousel.vue:139 🖼️ Image loaded successfully, setting loading to false
LobbyGameplay.vue:283 🗺️ Map clicked: Proxy(Object) {lat: 45.43700828867391, lon: 6.328125000000001} hasSubmitted: false
LobbyGameplay.vue:287 📍 Set guessedLat: 45.43700828867391 guessedLon: 6.328125000000001
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:176 🎯 handleSubmitGuess called
LobbyGameplay.vue:177 canSubmit: true currentFigure: true
LobbyGameplay.vue:213 ✅ Client-side validation passed: {lat: 45.43700828867391, lon: 6.328125000000001, year: 1816}
LobbyGameplay.vue:216 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:242 📊 Calculated scores: {spatial: 766, temporal: 598, name: 0, speed: 80, total: 1444}
useLobby.ts:269 🎯 submitGuess called with: {guessedName: '', guessedLat: 45.43700828867391, guessedLon: 6.328125000000001, guessedYear: 1816, score: 1444}
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: f412ddb9-c276-4144-bf35-c397fb3ffd35
useLobby.ts:300 ✅ submitMultiplayerGuess returned: {id: 'f412ddb9-c276-4144-bf35-c397fb3ffd35', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 5, figure_id: '2ba3ca99-5e72-4edc-bb07-4e799e5cb92b', …}
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: f412ddb9-c276-4144-bf35-c397fb3ffd35
useLobby.ts:306 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:259 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:262 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:266 🎯 Adding own submission to local state: {id: 'f412ddb9-c276-4144-bf35-c397fb3ffd35', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 5, figure_id: '2ba3ca99-5e72-4edc-bb07-4e799e5cb92b', …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: true, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:163 📢 REALTIME: Submission received via broadcast: {figure_id: '2ba3ca99-5e72-4edc-bb07-4e799e5cb92b', guessed_lat: 8.66791800236313, guessed_lon: 7.734375, guessed_name: '', guessed_year: 0, …}
realtime.ts:164 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:504 📨 Submission received: {figure_id: '2ba3ca99-5e72-4edc-bb07-4e799e5cb92b', guessed_lat: 8.66791800236313, guessed_lon: 7.734375, guessed_name: '', guessed_year: 0, …}
useLobby.ts:517 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:532 🎯 All players submitted - reveal phase should start in UI
realtime.ts:167 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:294 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:295 🎯 Current figure for reveal: Joan of Arc
LobbyGameplay.vue:299 ⏸️ Timer paused during reveal phase
RevealPhase.vue:132 RevealPhase figure data: {name: 'Joan of Arc', hometown: 'Domrémy, France', hasHometown: true, hometownLength: 15}
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
onSubmissionReceived @ useLobby.ts:528
(anonymous) @ realtime.ts:166
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3002
_trigger @ @supabase_supabase-js.js?v=a926d579:2987
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
decode @ @supabase_supabase-js.js?v=a926d579:2038
_onConnMessage @ @supabase_supabase-js.js?v=a926d579:3494
conn.onmessage @ @supabase_supabase-js.js?v=a926d579:3547
useLobby.ts:584 📤 useLobby returning actions only - state accessed via store directly
LobbyGameplay.vue:309 🎯 All players ready for next round - auto-advancing
LobbyGameplay.vue:335 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:75 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:90 🏁 Ending current round and updating scores
MultiplayerView.vue:99 📊 Score updates for this round: {26aa8060-5887-4a29-8b5a-2356ebc0cafb: 1444, 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 531}
MultiplayerView.vue:100 📊 Current player scores before update: (2) [{…}, {…}]
LobbyGameplay.vue:339 🔄 Resetting UI state for next round
LobbyGameplay.vue:352 🔄 Resetting timer for next round
LobbyGameplay.vue:354 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: player_ready_for_next_round
useLobby.ts:578 📢 Broadcasted event: player_ready_for_next_round
FigureCarousel.vue:92 🖼️ Image preloaded successfully: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Joan_of_Arc_miniature_graded.jpg/800px-Joan_of_Arc_miniature_graded.jpg
FigureCarousel.vue:139 🖼️ Image loaded successfully, setting loading to false
MultiplayerView.vue:109 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 5902 + 1444 = 7346
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 7346}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 7346}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', newScore: 7346}
MultiplayerView.vue:109 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 5105 + 531 = 5636
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 5636}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 5636}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', newScore: 5636}
MultiplayerView.vue:124 📊 Player scores after update: (2) [{…}, {…}]
MultiplayerView.vue:127 🎲 Current round: 5 Next round would be: 6
MultiplayerView.vue:135 🎯 Starting next round: 6
MultiplayerView.vue:139 🎯 Starting round with figure: Galileo Galilei
MultiplayerView.vue:148 ✅ Round advancement completed
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
FigureCarousel.vue:92 🖼️ Image preloaded successfully: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg/800px-Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg
FigureCarousel.vue:139 🖼️ Image loaded successfully, setting loading to false
LobbyGameplay.vue:283 🗺️ Map clicked: Proxy(Object) {lat: -14.806749372133755, lon: 10.898437500000002} hasSubmitted: false
LobbyGameplay.vue:287 📍 Set guessedLat: -14.806749372133755 guessedLon: 10.898437500000002
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:163 📢 REALTIME: Submission received via broadcast: {figure_id: 'ceb08a13-e742-4e2c-af09-ec6fe0f71d40', guessed_lat: 52.855864177854, guessed_lon: -105.1171875, guessed_name: '', guessed_year: 1666, …}
realtime.ts:164 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:504 📨 Submission received: {figure_id: 'ceb08a13-e742-4e2c-af09-ec6fe0f71d40', guessed_lat: 52.855864177854, guessed_lon: -105.1171875, guessed_name: '', guessed_year: 1666, …}
useLobby.ts:517 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:167 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:176 🎯 handleSubmitGuess called
LobbyGameplay.vue:177 canSubmit: true currentFigure: true
LobbyGameplay.vue:213 ✅ Client-side validation passed: {lat: -14.806749372133755, lon: 10.898437500000002, year: -996}
LobbyGameplay.vue:216 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:242 📊 Calculated scores: {spatial: 149, temporal: 0, name: 0, speed: 50, total: 199}
useLobby.ts:269 🎯 submitGuess called with: {guessedName: '', guessedLat: -14.806749372133755, guessedLon: 10.898437500000002, guessedYear: -996, score: 199}
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: a03bd70e-a569-43a5-ba0a-8bb5da97311a
useLobby.ts:300 ✅ submitMultiplayerGuess returned: {id: 'a03bd70e-a569-43a5-ba0a-8bb5da97311a', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 6, figure_id: 'ceb08a13-e742-4e2c-af09-ec6fe0f71d40', …}
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: a03bd70e-a569-43a5-ba0a-8bb5da97311a
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:294 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:295 🎯 Current figure for reveal: Galileo Galilei
LobbyGameplay.vue:299 ⏸️ Timer paused during reveal phase
RevealPhase.vue:132 RevealPhase figure data: {name: 'Galileo Galilei', hometown: 'Pisa, Italy', hasHometown: true, hometownLength: 11}
LobbyGameplay.vue:259 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:262 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:266 🎯 Adding own submission to local state: {id: 'a03bd70e-a569-43a5-ba0a-8bb5da97311a', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 6, figure_id: 'ceb08a13-e742-4e2c-af09-ec6fe0f71d40', …}
LobbyGameplay.vue:316 🎯 handleReadyForNextRound called: true
LobbyGameplay.vue:321 🎯 Setting player ready for next round: 26aa8060-5887-4a29-8b5a-2356ebc0cafb true
lobbyStore.ts:98 🏪 STORE: setPlayerReadyForNextRound called for user 26aa8060-5887-4a29-8b5a-2356ebc0cafb ready: true
lobbyStore.ts:111 🏪 STORE: setPlayerReadyForNextRound completed - ready players: Proxy(Array) {0: '26aa8060-5887-4a29-8b5a-2356ebc0cafb'}
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
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: player_ready_for_next_round
useLobby.ts:578 📢 Broadcasted event: player_ready_for_next_round
realtime.ts:175 📢 REALTIME: Player ready for next round via broadcast: {ready: true, user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
useLobby.ts:439 👥 REALTIME CALLBACK: Player ready for next round: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 true
lobbyStore.ts:98 🏪 STORE: setPlayerReadyForNextRound called for user 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 ready: true
lobbyStore.ts:111 🏪 STORE: setPlayerReadyForNextRound completed - ready players: Proxy(Array) {0: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', 1: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
useLobby.ts:442 👥 REALTIME CALLBACK: Updated player ready for next round status
realtime.ts:178 📢 REALTIME: onPlayerReadyForNextRound callback completed successfully
LobbyGameplay.vue:309 🎯 All players ready for next round - auto-advancing
LobbyGameplay.vue:335 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:75 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:90 🏁 Ending current round and updating scores
MultiplayerView.vue:99 📊 Score updates for this round: {4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 845, 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 199}
MultiplayerView.vue:100 📊 Current player scores before update: (2) [{…}, {…}]
LobbyGameplay.vue:339 🔄 Resetting UI state for next round
LobbyGameplay.vue:352 🔄 Resetting timer for next round
LobbyGameplay.vue:354 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
FigureCarousel.vue:92 🖼️ Image preloaded successfully: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg/800px-Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg
FigureCarousel.vue:139 🖼️ Image loaded successfully, setting loading to false
MultiplayerView.vue:109 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 5636 + 845 = 6481
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 6481}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 6481}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', newScore: 6481}
MultiplayerView.vue:109 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 7346 + 199 = 7545
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 7545}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 7545}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', newScore: 7545}
MultiplayerView.vue:124 📊 Player scores after update: (2) [{…}, {…}]
MultiplayerView.vue:127 🎲 Current round: 6 Next round would be: 7
MultiplayerView.vue:135 🎯 Starting next round: 7
MultiplayerView.vue:139 🎯 Starting round with figure: George Washington
MultiplayerView.vue:148 ✅ Round advancement completed
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
FigureCarousel.vue:139 🖼️ Image loaded successfully, setting loading to false
FigureCarousel.vue:92 🖼️ Image preloaded successfully: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/800px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg
LobbyGameplay.vue:283 🗺️ Map clicked: Proxy(Object) {lat: 35.290468565908775, lon: -100.19531250000001} hasSubmitted: false
LobbyGameplay.vue:287 📍 Set guessedLat: 35.290468565908775 guessedLon: -100.19531250000001
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:283 🗺️ Map clicked: Proxy(Object) {lat: 37.55328764595765, lon: -76.28906250000001} hasSubmitted: false
LobbyGameplay.vue:287 📍 Set guessedLat: 37.55328764595765 guessedLon: -76.28906250000001
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:163 📢 REALTIME: Submission received via broadcast: {figure_id: 'f42b31f2-0c7b-4ea7-88d0-0896679aa765', guessed_lat: -32.3242755888766, guessed_lon: 22.32421875, guessed_name: '', guessed_year: 1836, …}
realtime.ts:164 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:504 📨 Submission received: {figure_id: 'f42b31f2-0c7b-4ea7-88d0-0896679aa765', guessed_lat: -32.3242755888766, guessed_lon: 22.32421875, guessed_name: '', guessed_year: 1836, …}
useLobby.ts:517 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:167 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:176 🎯 handleSubmitGuess called
LobbyGameplay.vue:177 canSubmit: true currentFigure: true
LobbyGameplay.vue:213 ✅ Client-side validation passed: {lat: 37.55328764595765, lon: -76.28906250000001, year: 1736}
LobbyGameplay.vue:216 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:242 📊 Calculated scores: {spatial: 792, temporal: 798, name: 800, speed: 0, total: 2390}
useLobby.ts:269 🎯 submitGuess called with: {guessedName: 'George Washington', guessedLat: 37.55328764595765, guessedLon: -76.28906250000001, guessedYear: 1736, score: 2390}
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 77d40443-7dab-4b66-a265-abc361560a30
useLobby.ts:300 ✅ submitMultiplayerGuess returned: {id: '77d40443-7dab-4b66-a265-abc361560a30', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 7, figure_id: 'f42b31f2-0c7b-4ea7-88d0-0896679aa765', …}
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 77d40443-7dab-4b66-a265-abc361560a30
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:294 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:295 🎯 Current figure for reveal: George Washington
LobbyGameplay.vue:299 ⏸️ Timer paused during reveal phase
RevealPhase.vue:132 RevealPhase figure data: {name: 'George Washington', hometown: 'Westmoreland County, Virginia', hasHometown: true, hometownLength: 29}
LobbyGameplay.vue:259 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:262 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:266 🎯 Adding own submission to local state: {id: '77d40443-7dab-4b66-a265-abc361560a30', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 7, figure_id: 'f42b31f2-0c7b-4ea7-88d0-0896679aa765', …}
LobbyGameplay.vue:316 🎯 handleReadyForNextRound called: true
LobbyGameplay.vue:321 🎯 Setting player ready for next round: 26aa8060-5887-4a29-8b5a-2356ebc0cafb true
lobbyStore.ts:98 🏪 STORE: setPlayerReadyForNextRound called for user 26aa8060-5887-4a29-8b5a-2356ebc0cafb ready: true
lobbyStore.ts:111 🏪 STORE: setPlayerReadyForNextRound completed - ready players: Proxy(Array) {0: '26aa8060-5887-4a29-8b5a-2356ebc0cafb'}
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
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: player_ready_for_next_round
useLobby.ts:578 📢 Broadcasted event: player_ready_for_next_round
realtime.ts:175 📢 REALTIME: Player ready for next round via broadcast: {ready: true, user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
useLobby.ts:439 👥 REALTIME CALLBACK: Player ready for next round: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 true
lobbyStore.ts:98 🏪 STORE: setPlayerReadyForNextRound called for user 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 ready: true
lobbyStore.ts:111 🏪 STORE: setPlayerReadyForNextRound completed - ready players: Proxy(Array) {0: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', 1: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
useLobby.ts:442 👥 REALTIME CALLBACK: Updated player ready for next round status
realtime.ts:178 📢 REALTIME: onPlayerReadyForNextRound callback completed successfully
LobbyGameplay.vue:309 🎯 All players ready for next round - auto-advancing
LobbyGameplay.vue:335 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:75 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:90 🏁 Ending current round and updating scores
MultiplayerView.vue:99 📊 Score updates for this round: {4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 758, 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 2390}
MultiplayerView.vue:100 📊 Current player scores before update: (2) [{…}, {…}]
LobbyGameplay.vue:339 🔄 Resetting UI state for next round
LobbyGameplay.vue:352 🔄 Resetting timer for next round
LobbyGameplay.vue:354 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
FigureCarousel.vue:92 🖼️ Image preloaded successfully: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/800px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg
FigureCarousel.vue:139 🖼️ Image loaded successfully, setting loading to false
MultiplayerView.vue:109 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 6481 + 758 = 7239
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 7239}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 7239}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', newScore: 7239}
MultiplayerView.vue:109 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 7545 + 2390 = 9935
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 9935}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 9935}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', newScore: 9935}
MultiplayerView.vue:124 📊 Player scores after update: (2) [{…}, {…}]
MultiplayerView.vue:127 🎲 Current round: 7 Next round would be: 8
MultiplayerView.vue:135 🎯 Starting next round: 8
MultiplayerView.vue:139 🎯 Starting round with figure: Rosa Parks
MultiplayerView.vue:148 ✅ Round advancement completed
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
FigureCarousel.vue:95 ❌ Image preload failed: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Rosaparks.jpg/800px-Rosaparks.jpg
img.onerror @ FigureCarousel.vue:95
FigureCarousel.vue:145 ❌ Image failed to load, setting error state
handleImageError @ FigureCarousel.vue:145
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335
realtime.ts:163 📢 REALTIME: Submission received via broadcast: {figure_id: '572fb89d-07be-4b9b-8b5c-33f3c9de79c0', guessed_lat: 44.5278427984555, guessed_lon: 11.42578125, guessed_name: '', guessed_year: 1616, …}
realtime.ts:164 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:504 📨 Submission received: {figure_id: '572fb89d-07be-4b9b-8b5c-33f3c9de79c0', guessed_lat: 44.5278427984555, guessed_lon: 11.42578125, guessed_name: '', guessed_year: 1616, …}
useLobby.ts:517 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:167 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:283 🗺️ Map clicked: Proxy(Object) {lat: 48.622016428468406, lon: 37.61718750000001} hasSubmitted: false
LobbyGameplay.vue:287 📍 Set guessedLat: 48.622016428468406 guessedLon: 37.61718750000001
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:176 🎯 handleSubmitGuess called
LobbyGameplay.vue:177 canSubmit: true currentFigure: true
LobbyGameplay.vue:213 ✅ Client-side validation passed: {lat: 48.622016428468406, lon: 37.61718750000001, year: 0}
LobbyGameplay.vue:216 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:242 📊 Calculated scores: {spatial: 0, temporal: 0, name: 0, speed: 70, total: 70}
useLobby.ts:269 🎯 submitGuess called with: {guessedName: '', guessedLat: 48.622016428468406, guessedLon: 37.61718750000001, guessedYear: 0, score: 70}
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 6c4468ce-c18c-4f44-8a7c-d8b90fece286
useLobby.ts:300 ✅ submitMultiplayerGuess returned: {id: '6c4468ce-c18c-4f44-8a7c-d8b90fece286', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 8, figure_id: '572fb89d-07be-4b9b-8b5c-33f3c9de79c0', …}
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 6c4468ce-c18c-4f44-8a7c-d8b90fece286
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:294 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:295 🎯 Current figure for reveal: Rosa Parks
LobbyGameplay.vue:299 ⏸️ Timer paused during reveal phase
RevealPhase.vue:132 RevealPhase figure data: {name: 'Rosa Parks', hometown: 'Tuskegee, Alabama', hasHometown: true, hometownLength: 17}
LobbyGameplay.vue:259 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:262 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:266 🎯 Adding own submission to local state: {id: '6c4468ce-c18c-4f44-8a7c-d8b90fece286', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 8, figure_id: '572fb89d-07be-4b9b-8b5c-33f3c9de79c0', …}
LobbyGameplay.vue:316 🎯 handleReadyForNextRound called: true
LobbyGameplay.vue:321 🎯 Setting player ready for next round: 26aa8060-5887-4a29-8b5a-2356ebc0cafb true
lobbyStore.ts:98 🏪 STORE: setPlayerReadyForNextRound called for user 26aa8060-5887-4a29-8b5a-2356ebc0cafb ready: true
lobbyStore.ts:111 🏪 STORE: setPlayerReadyForNextRound completed - ready players: Proxy(Array) {0: '26aa8060-5887-4a29-8b5a-2356ebc0cafb'}
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
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: player_ready_for_next_round
useLobby.ts:578 📢 Broadcasted event: player_ready_for_next_round
realtime.ts:175 📢 REALTIME: Player ready for next round via broadcast: {ready: true, user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
useLobby.ts:439 👥 REALTIME CALLBACK: Player ready for next round: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 true
lobbyStore.ts:98 🏪 STORE: setPlayerReadyForNextRound called for user 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 ready: true
lobbyStore.ts:111 🏪 STORE: setPlayerReadyForNextRound completed - ready players: Proxy(Array) {0: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', 1: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
useLobby.ts:442 👥 REALTIME CALLBACK: Updated player ready for next round status
realtime.ts:178 📢 REALTIME: onPlayerReadyForNextRound callback completed successfully
LobbyGameplay.vue:309 🎯 All players ready for next round - auto-advancing
LobbyGameplay.vue:335 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:75 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:90 🏁 Ending current round and updating scores
MultiplayerView.vue:99 📊 Score updates for this round: {4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 742, 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 70}
MultiplayerView.vue:100 📊 Current player scores before update: (2) [{…}, {…}]
LobbyGameplay.vue:339 🔄 Resetting UI state for next round
LobbyGameplay.vue:352 🔄 Resetting timer for next round
LobbyGameplay.vue:354 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
MultiplayerView.vue:109 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 7239 + 742 = 7981
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 7981}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 7981}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', newScore: 7981}
MultiplayerView.vue:109 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 9935 + 70 = 10005
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 10005}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
FigureCarousel.vue:95 ❌ Image preload failed: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Rosaparks.jpg/800px-Rosaparks.jpg
img.onerror @ FigureCarousel.vue:95
FigureCarousel.vue:145 ❌ Image failed to load, setting error state
handleImageError @ FigureCarousel.vue:145
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 10005}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', newScore: 10005}
MultiplayerView.vue:124 📊 Player scores after update: (2) [{…}, {…}]
MultiplayerView.vue:127 🎲 Current round: 8 Next round would be: 9
MultiplayerView.vue:135 🎯 Starting next round: 9
MultiplayerView.vue:139 🎯 Starting round with figure: Genghis Khan
MultiplayerView.vue:148 ✅ Round advancement completed
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
FigureCarousel.vue:92 🖼️ Image preloaded successfully: https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/YuanEmperorAlbumGenghisPortrait.jpg/800px-YuanEmperorAlbumGenghisPortrait.jpg
FigureCarousel.vue:139 🖼️ Image loaded successfully, setting loading to false
realtime.ts:163 📢 REALTIME: Submission received via broadcast: {figure_id: '487ea03d-2cd4-4f68-91eb-1bddeade34b8', guessed_lat: 37.9268676014813, guessed_lon: 110.91796875, guessed_name: '', guessed_year: 1771, …}
realtime.ts:164 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:504 📨 Submission received: {figure_id: '487ea03d-2cd4-4f68-91eb-1bddeade34b8', guessed_lat: 37.9268676014813, guessed_lon: 110.91796875, guessed_name: '', guessed_year: 1771, …}
useLobby.ts:517 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:167 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:283 🗺️ Map clicked: Proxy(Object) {lat: 52.994950270267985, lon: 57.30468750000001} hasSubmitted: false
LobbyGameplay.vue:287 📍 Set guessedLat: 52.994950270267985 guessedLon: 57.30468750000001
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:176 🎯 handleSubmitGuess called
LobbyGameplay.vue:177 canSubmit: true currentFigure: true
LobbyGameplay.vue:213 ✅ Client-side validation passed: {lat: 52.994950270267985, lon: 57.30468750000001, year: 0}
LobbyGameplay.vue:216 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:242 📊 Calculated scores: {spatial: 439, temporal: 219, name: 0, speed: 20, total: 678}
useLobby.ts:269 🎯 submitGuess called with: {guessedName: '', guessedLat: 52.994950270267985, guessedLon: 57.30468750000001, guessedYear: 0, score: 678}
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: ffaafe7c-4e99-46a9-a8c7-545ed67bc76a
useLobby.ts:300 ✅ submitMultiplayerGuess returned: {id: 'ffaafe7c-4e99-46a9-a8c7-545ed67bc76a', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 9, figure_id: '487ea03d-2cd4-4f68-91eb-1bddeade34b8', …}
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: ffaafe7c-4e99-46a9-a8c7-545ed67bc76a
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:294 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:295 🎯 Current figure for reveal: Genghis Khan
LobbyGameplay.vue:299 ⏸️ Timer paused during reveal phase
RevealPhase.vue:132 RevealPhase figure data: {name: 'Genghis Khan', hometown: 'Khentii Mountains, Mongolia', hasHometown: true, hometownLength: 27}
LobbyGameplay.vue:259 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:262 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:266 🎯 Adding own submission to local state: {id: 'ffaafe7c-4e99-46a9-a8c7-545ed67bc76a', lobby_id: 'a5a28b20-f756-485d-8492-8d4fcaea7022', user_id: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', round_number: 9, figure_id: '487ea03d-2cd4-4f68-91eb-1bddeade34b8', …}
LobbyGameplay.vue:316 🎯 handleReadyForNextRound called: true
LobbyGameplay.vue:321 🎯 Setting player ready for next round: 26aa8060-5887-4a29-8b5a-2356ebc0cafb true
lobbyStore.ts:98 🏪 STORE: setPlayerReadyForNextRound called for user 26aa8060-5887-4a29-8b5a-2356ebc0cafb ready: true
lobbyStore.ts:111 🏪 STORE: setPlayerReadyForNextRound completed - ready players: Proxy(Array) {0: '26aa8060-5887-4a29-8b5a-2356ebc0cafb'}
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
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: player_ready_for_next_round
useLobby.ts:578 📢 Broadcasted event: player_ready_for_next_round
realtime.ts:175 📢 REALTIME: Player ready for next round via broadcast: {ready: true, user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
useLobby.ts:439 👥 REALTIME CALLBACK: Player ready for next round: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 true
lobbyStore.ts:98 🏪 STORE: setPlayerReadyForNextRound called for user 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 ready: true
lobbyStore.ts:111 🏪 STORE: setPlayerReadyForNextRound completed - ready players: Proxy(Array) {0: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', 1: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
useLobby.ts:442 👥 REALTIME CALLBACK: Updated player ready for next round status
realtime.ts:178 📢 REALTIME: onPlayerReadyForNextRound callback completed successfully
LobbyGameplay.vue:309 🎯 All players ready for next round - auto-advancing
LobbyGameplay.vue:335 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:75 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:90 🏁 Ending current round and updating scores
MultiplayerView.vue:99 📊 Score updates for this round: {4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 1233, 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 678}
MultiplayerView.vue:100 📊 Current player scores before update: (2) [{…}, {…}]
LobbyGameplay.vue:339 🔄 Resetting UI state for next round
LobbyGameplay.vue:352 🔄 Resetting timer for next round
LobbyGameplay.vue:354 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
FigureCarousel.vue:104 🖼️ Preloading images for carousel: 1
FigureCarousel.vue:92 🖼️ Image preloaded successfully: https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/YuanEmperorAlbumGenghisPortrait.jpg/800px-YuanEmperorAlbumGenghisPortrait.jpg
FigureCarousel.vue:139 🖼️ Image loaded successfully, setting loading to false
MultiplayerView.vue:109 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 7981 + 1233 = 9214
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 9214}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', score: 9214}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', newScore: 9214}
MultiplayerView.vue:109 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 10005 + 678 = 10683
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 10683}
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: 'a5a28b20-f756-485d-8492-8d4fcaea7022', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 10683}
MultiplayerView.vue:117 💾 Persisted score to database: {userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', newScore: 10683}
MultiplayerView.vue:124 📊 Player scores after update: (2) [{…}, {…}]
MultiplayerView.vue:127 🎲 Current round: 9 Next round would be: 10
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
