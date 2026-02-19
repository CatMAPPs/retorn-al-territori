🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:490 📤 useLobby returning actions only - state accessed via store directly
MultiplayerView.vue:36 🔍 lobbyStore reactive refs: {lobby: ObjectRefImpl, player: ObjectRefImpl, isLoading: ObjectRefImpl}
MultiplayerView.vue:37 🎯 MultiplayerView mounted, initial state: {lobby: null, player: null, isLoading: false}
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
MultiplayerView.vue:55 🎯 MultiplayerView: Lobby status changed: undefined → undefined
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:490 📤 useLobby returning actions only - state accessed via store directly
LobbyCreateJoin.vue:20 🎨 LobbyCreateJoin component mounted!
LobbyCreateJoin.vue:21 🔍 LobbyCreateJoin reactive values: {isLoading: false, hasCreateNewLobby: true, hasJoinExistingLobby: true}
MultiplayerView.vue:30 🎯 MultiplayerView mounted - cleaning up any existing lobby state
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
LobbyCreateJoin.vue:44 🏗️ LobbyCreateJoin.handleJoinLobby called with roomCode: DTDJZE
LobbyCreateJoin.vue:52 🚀 Calling joinExistingLobby...
useLobby.ts:103 🚪 joinExistingLobby called with roomCode: DTDJZE
useLobby.ts:110 👤 Authenticated user: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
useLobby.ts:113 🧹 Cleaning up any existing lobby state before joining
useLobby.ts:474 🧹 Cleaning up lobby state and realtime subscriptions
useLobby.ts:484 🔄 Resetting lobby store
useLobby.ts:487 ✅ Cleanup completed
useLobby.ts:120 ⏳ Setting loading state to true
useLobby.ts:124 🔄 Calling joinLobby API...
queries.ts:422 🔍 joinLobby: Looking for lobby with code: DTDJZE
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:439 ✅ joinLobby: Found lobby: 26e7024a-172a-4dc8-94a2-7b9cb0df14c2 status: waiting
queries.ts:445 🔍 joinLobby: Checking player capacity for lobby: 26e7024a-172a-4dc8-94a2-7b9cb0df14c2
queries.ts:458 ✅ joinLobby: Current player count: 1
queries.ts:464 🔍 joinLobby: Checking if user already in lobby: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
queries.ts:497 📝 joinLobby: Adding player to lobby
queries.ts:515 ✅ joinLobby: Player added successfully: bab51823-6cc9-424b-8cc1-ceede6d17d4f
realtime.ts:203 Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.
send @ @supabase_supabase-js.js?v=a926d579:2805
broadcastLobbyEvent @ realtime.ts:203
joinLobby @ queries.ts:520
await in joinLobby
joinExistingLobby @ useLobby.ts:125
handleJoinLobby @ LobbyCreateJoin.vue:53
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:12326
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335Understand this warning
queries.ts:521 📢 Broadcasted player joined event for Anonymous
queries.ts:527 🎉 joinLobby: Successfully joined lobby: 26e7024a-172a-4dc8-94a2-7b9cb0df14c2
useLobby.ts:131 ✅ joinLobby API returned: {lobbyId: '26e7024a-172a-4dc8-94a2-7b9cb0df14c2', roomCode: 'DTDJZE', playerId: 'bab51823-6cc9-424b-8cc1-ceede6d17d4f'}
useLobby.ts:133 📊 Fetching updated players list...
useLobby.ts:135 ✅ Got players list: 2 players
useLobby.ts:137 💾 Setting lobby and players in store...
lobbyStore.ts:26 🏪 STORE: setLobby called with: {lobby: {…}, player: {…}}
lobbyStore.ts:31 🏪 STORE: setLobby completed, currentLobby: Proxy(Object) {id: '26e7024a-172a-4dc8-94a2-7b9cb0df14c2', room_code: 'DTDJZE', host_id: '360c97e2-504f-420e-a903-3dd272eed80d', status: 'waiting', current_round: 0, …}
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: []
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:140 ✅ Store updated successfully
useLobby.ts:143 🎯 About to setup realtime subscription for join...
useLobby.ts:306 🔌 Setting up realtime subscription for lobby: 26e7024a-172a-4dc8-94a2-7b9cb0df14c2
realtime.ts:21 📡 Subscribing to channel: lobby:26e7024a-172a-4dc8-94a2-7b9cb0df14c2
useLobby.ts:146 ✅ Realtime subscription setup completed for join
useLobby.ts:151 🎉 joinExistingLobby completed successfully
useLobby.ts:159 🔄 Setting loading state to false
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:55 🎯 MultiplayerView: Lobby status changed: undefined → waiting
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:490 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: {playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: (2) [{…}, {…}]
LobbyCreateJoin.vue:54 ✅ joinExistingLobby completed successfully
realtime.ts:154 📡 Channel subscription status for lobby:26e7024a-172a-4dc8-94a2-7b9cb0df14c2: SUBSCRIBED 
realtime.ts:157 ✅ Successfully subscribed to lobby:26e7024a-172a-4dc8-94a2-7b9cb0df14c2
realtime.ts:177 🔗 Channel joined for lobby:26e7024a-172a-4dc8-94a2-7b9cb0df14c2
realtime.ts:181 👋 Channel left for lobby:26e7024a-172a-4dc8-94a2-7b9cb0df14c2
realtime.ts:185 💥 Channel system error for lobby:26e7024a-172a-4dc8-94a2-7b9cb0df14c2: {message: 'Unable to subscribe to changes with given paramete…, "eq", "26e7024a-172a-4dc8-94a2-7b9cb0df14c2"}]]', status: 'error', extension: 'postgres_changes', channel: 'lobby:26e7024a-172a-4dc8-94a2-7b9cb0df14c2'}
(anonymous) @ realtime.ts:185
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
lobbyStore.ts:71 🏪 STORE: updatePlayerReady called for player bab51823-6cc9-424b-8cc1-ceede6d17d4f ready: true
lobbyStore.ts:78 🏪 STORE: updatePlayerReady completed - fresh array assigned
useLobby.ts:180 🔄 toggleReady: Updating database...
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: (2) [{…}, {…}]
queries.ts:720 📢 Broadcasted player ready event for 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 ready: true
useLobby.ts:187 ✅ toggleReady: Database update completed - optimistic update confirmed
realtime.ts:67 📢 REALTIME: Player ready status updated via broadcast {ready: true, userId: '360c97e2-504f-420e-a903-3dd272eed80d'}
realtime.ts:68 📢 REALTIME: About to call onPlayerReady callback with userId: 360c97e2-504f-420e-a903-3dd272eed80d
useLobby.ts:341 👥 REALTIME CALLBACK: Player ready status changed for player: 360c97e2-504f-420e-a903-3dd272eed80d
useLobby.ts:343 👥 REALTIME CALLBACK: About to refresh players list for lobby: 26e7024a-172a-4dc8-94a2-7b9cb0df14c2
realtime.ts:71 📢 REALTIME: onPlayerReady callback called successfully
useLobby.ts:346 👥 REALTIME CALLBACK: Server players: (2) [{…}, {…}]
useLobby.ts:361 👥 REALTIME CALLBACK: Current user optimistic state - server: true local: true
useLobby.ts:373 👥 REALTIME CALLBACK: Final reconciled players: (2) [{…}, {…}]
useLobby.ts:375 👥 REALTIME CALLBACK: About to update store with reconciled players
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: (2) [{…}, {…}]
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:377 👥 REALTIME CALLBACK: Updated store after ready change - reactivity is automatic!
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: true players: (2) [{…}, {…}]
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false {isHost: false, allPlayersReady: true, playerCount: 2}
realtime.ts:79 📢 REALTIME: Game started via broadcast {current_round: 1, lobbyId: '26e7024a-172a-4dc8-94a2-7b9cb0df14c2', status: 'in_progress', timestamp: '2025-11-09T02:28:16.773Z'}
realtime.ts:80 🎮 REALTIME: Game started broadcast received - calling onGameStarted
useLobby.ts:384 🎮 REALTIME CALLBACK: onGameStarted triggered for lobby: 26e7024a-172a-4dc8-94a2-7b9cb0df14c2
useLobby.ts:387 📊 Fetching updated lobby with players...
realtime.ts:83 🎮 REALTIME: onGameStarted callback completed successfully
useLobby.ts:389 ✅ Got updated lobby - status: in_progress current_round: 1
useLobby.ts:391 💾 Updating lobby status in store...
useLobby.ts:393 ✅ Lobby status updated to: in_progress
useLobby.ts:395 🎯 Loading figures for game...
useLobby.ts:398 📖 Loading figure: f2933cfe-2576-4749-8d14-e6dfd46a8788
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:55 🎯 MultiplayerView: Lobby status changed: waiting → in_progress
MultiplayerView.vue:57 🎮 MultiplayerView: Lobby status is now in_progress - should show game screen
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:490 📤 useLobby returning actions only - state accessed via store directly
useLobby.ts:35 🧹 Cleaning up realtime subscription
useLobby.ts:398 📖 Loading figure: 486b5a5c-b5d5-4fff-84b5-5cf232897d51
useLobby.ts:398 📖 Loading figure: 57706cbc-ffa0-4dcb-b98a-2ad5764135f8
useLobby.ts:398 📖 Loading figure: ceb08a13-e742-4e2c-af09-ec6fe0f71d40
useLobby.ts:398 📖 Loading figure: 571821e2-712f-4253-b9e2-acd347bb8910
useLobby.ts:398 📖 Loading figure: 0b2c1e3e-d069-406b-9986-f18aaac83c5b
useLobby.ts:398 📖 Loading figure: 3388229c-139f-4f4c-8fd4-986176b0af38
useLobby.ts:398 📖 Loading figure: 487ea03d-2cd4-4f68-91eb-1bddeade34b8
useLobby.ts:398 📖 Loading figure: 06c026ce-9183-45e9-95ca-54108e50290c
useLobby.ts:398 📖 Loading figure: 71855ba9-176a-4d37-8e66-ad7d76a030bc
useLobby.ts:402 ✅ Loaded 10 figures
useLobby.ts:404 💾 Setting figures in store...
useLobby.ts:407 🎲 Starting first round...
useLobby.ts:410 ✅ Started round 1 with figure: Wolfgang Amadeus Mozart
useLobby.ts:415 🔄 Setting loading to false after game start
useLobby.ts:418 🎮 Game started successfully!