 useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:497 📤 useLobby returning actions only - state accessed via store directly
MultiplayerView.vue:37 🔍 lobbyStore reactive refs: {lobby: ObjectRefImpl, player: ObjectRefImpl, isLoading: ObjectRefImpl}
MultiplayerView.vue:38 🎯 MultiplayerView mounted, initial state: {lobby: null, player: null, isLoading: false}
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: undefined → undefined
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:497 📤 useLobby returning actions only - state accessed via store directly
LobbyCreateJoin.vue:20 🎨 LobbyCreateJoin component mounted!
LobbyCreateJoin.vue:21 🔍 LobbyCreateJoin reactive values: {isLoading: false, hasCreateNewLobby: true, hasJoinExistingLobby: true}
MultiplayerView.vue:31 🎯 MultiplayerView mounted - cleaning up any existing lobby state
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
authStore.ts:47 👂 Setting up auth state listener...
authStore.ts:73 ✅ Auth store initialized
authStore.ts:49 🔄 Auth state change: INITIAL_SESSION Session exists
LobbyCreateJoin.vue:44 🏗️ LobbyCreateJoin.handleJoinLobby called with roomCode: A38RKC
LobbyCreateJoin.vue:52 🚀 Calling joinExistingLobby...
useLobby.ts:103 🚪 joinExistingLobby called with roomCode: A38RKC
useLobby.ts:110 👤 Authenticated user: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
useLobby.ts:113 🧹 Cleaning up any existing lobby state before joining
useLobby.ts:481 🧹 Cleaning up lobby state and realtime subscriptions
useLobby.ts:491 🔄 Resetting lobby store
useLobby.ts:494 ✅ Cleanup completed
useLobby.ts:120 ⏳ Setting loading state to true
useLobby.ts:124 🔄 Calling joinLobby API...
queries.ts:422 🔍 joinLobby: Looking for lobby with code: A38RKC
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:439 ✅ joinLobby: Found lobby: 460fd546-3029-4e7b-80ec-c87e1c970f5b status: waiting
queries.ts:445 🔍 joinLobby: Checking player capacity for lobby: 460fd546-3029-4e7b-80ec-c87e1c970f5b
queries.ts:458 ✅ joinLobby: Current player count: 1
queries.ts:464 🔍 joinLobby: Checking if user already in lobby: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
queries.ts:497 📝 joinLobby: Adding player to lobby
queries.ts:515 ✅ joinLobby: Player added successfully: 7a0c2305-dfe6-44af-9a09-8c853bd25c17
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
queries.ts:527 🎉 joinLobby: Successfully joined lobby: 460fd546-3029-4e7b-80ec-c87e1c970f5b
useLobby.ts:131 ✅ joinLobby API returned: {lobbyId: '460fd546-3029-4e7b-80ec-c87e1c970f5b', roomCode: 'A38RKC', playerId: '7a0c2305-dfe6-44af-9a09-8c853bd25c17'}
useLobby.ts:133 📊 Fetching updated players list...
useLobby.ts:135 ✅ Got players list: 2 players
useLobby.ts:137 💾 Setting lobby and players in store...
lobbyStore.ts:26 🏪 STORE: setLobby called with: {lobby: {…}, player: {…}}
lobbyStore.ts:31 🏪 STORE: setLobby completed, currentLobby: Proxy(Object) {id: '460fd546-3029-4e7b-80ec-c87e1c970f5b', room_code: 'A38RKC', host_id: '360c97e2-504f-420e-a903-3dd272eed80d', status: 'waiting', current_round: 0, …}
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: []
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:140 ✅ Store updated successfully
useLobby.ts:143 🎯 About to setup realtime subscription for join...
useLobby.ts:306 🔌 Setting up realtime subscription for lobby: 460fd546-3029-4e7b-80ec-c87e1c970f5b
realtime.ts:21 📡 Subscribing to channel: lobby:460fd546-3029-4e7b-80ec-c87e1c970f5b
useLobby.ts:146 ✅ Realtime subscription setup completed for join
useLobby.ts:151 🎉 joinExistingLobby completed successfully
useLobby.ts:159 🔄 Setting loading state to false
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: undefined → waiting
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:497 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: {playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: (2) [{…}, {…}]
LobbyCreateJoin.vue:54 ✅ joinExistingLobby completed successfully
realtime.ts:154 📡 Channel subscription status for lobby:460fd546-3029-4e7b-80ec-c87e1c970f5b: SUBSCRIBED 
realtime.ts:157 ✅ Successfully subscribed to lobby:460fd546-3029-4e7b-80ec-c87e1c970f5b
realtime.ts:177 🔗 Channel joined for lobby:460fd546-3029-4e7b-80ec-c87e1c970f5b
realtime.ts:181 👋 Channel left for lobby:460fd546-3029-4e7b-80ec-c87e1c970f5b
realtime.ts:185 💥 Channel system error for lobby:460fd546-3029-4e7b-80ec-c87e1c970f5b: {message: 'Unable to subscribe to changes with given paramete…, "eq", "460fd546-3029-4e7b-80ec-c87e1c970f5b"}]]', status: 'error', extension: 'postgres_changes', channel: 'lobby:460fd546-3029-4e7b-80ec-c87e1c970f5b'}
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
lobbyStore.ts:71 🏪 STORE: updatePlayerReady called for player 7a0c2305-dfe6-44af-9a09-8c853bd25c17 ready: true
lobbyStore.ts:78 🏪 STORE: updatePlayerReady completed - fresh array assigned
useLobby.ts:180 🔄 toggleReady: Updating database...
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: (2) [{…}, {…}]
queries.ts:720 📢 Broadcasted player ready event for 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 ready: true
useLobby.ts:187 ✅ toggleReady: Database update completed - optimistic update confirmed
realtime.ts:67 📢 REALTIME: Player ready status updated via broadcast {ready: true, userId: '360c97e2-504f-420e-a903-3dd272eed80d'}
realtime.ts:68 📢 REALTIME: About to call onPlayerReady callback with userId: 360c97e2-504f-420e-a903-3dd272eed80d
useLobby.ts:341 👥 REALTIME CALLBACK: Player ready status changed for player: 360c97e2-504f-420e-a903-3dd272eed80d
useLobby.ts:343 👥 REALTIME CALLBACK: About to refresh players list for lobby: 460fd546-3029-4e7b-80ec-c87e1c970f5b
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
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: true players: (2) [{…}, {…}]
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false {isHost: false, allPlayersReady: true, playerCount: 2}
realtime.ts:79 📢 REALTIME: Game started via broadcast {current_round: 1, lobbyId: '460fd546-3029-4e7b-80ec-c87e1c970f5b', status: 'in_progress', timestamp: '2025-11-09T07:06:41.178Z'}
realtime.ts:80 🎮 REALTIME: Game started broadcast received - calling onGameStarted
useLobby.ts:384 🎮 REALTIME CALLBACK: onGameStarted triggered for lobby: 460fd546-3029-4e7b-80ec-c87e1c970f5b
useLobby.ts:387 📊 Fetching updated lobby with players...
realtime.ts:83 🎮 REALTIME: onGameStarted callback completed successfully
useLobby.ts:389 ✅ Got updated lobby - status: in_progress current_round: 1
useLobby.ts:391 💾 Updating lobby status in store...
useLobby.ts:393 ✅ Lobby status updated to: in_progress
useLobby.ts:395 🎯 Loading figures for game...
useLobby.ts:398 📖 Loading figure: 4f612e2c-45c7-4d75-ba4b-512ea3d385ba
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: waiting → in_progress
MultiplayerView.vue:58 🎮 MultiplayerView: Lobby status is now in_progress - should show game screen
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:497 📤 useLobby returning actions only - state accessed via store directly
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
useLobby.ts:35 🧹 Cleaning up realtime subscription
useLobby.ts:398 📖 Loading figure: 2bdee868-9128-4389-8cd4-ff272d0f3038
useLobby.ts:398 📖 Loading figure: 53190f65-066e-4ea7-911b-7cc31946dd66
useLobby.ts:398 📖 Loading figure: f2933cfe-2576-4749-8d14-e6dfd46a8788
useLobby.ts:398 📖 Loading figure: 572fb89d-07be-4b9b-8b5c-33f3c9de79c0
useLobby.ts:398 📖 Loading figure: 71855ba9-176a-4d37-8e66-ad7d76a030bc
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
useLobby.ts:398 📖 Loading figure: c03fa567-40cb-43ce-af57-83344d0fe25d
useLobby.ts:398 📖 Loading figure: d3556929-f466-468f-808f-de23560f0e21
useLobby.ts:398 📖 Loading figure: 7bc0d0db-702f-4305-80e2-2786a9efa7a0
useLobby.ts:398 📖 Loading figure: 1b639e55-33fa-4cfd-97d9-e3a6a4450546
useLobby.ts:402 ✅ Loaded 10 figures
useLobby.ts:404 💾 Setting figures in store...
useLobby.ts:407 🎲 Starting first round...
useLobby.ts:410 ✅ Started round 1 with figure: Nelson Mandela
useLobby.ts:415 🔄 Setting loading to false after game start
useLobby.ts:418 🎮 Game started successfully!
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1671, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1671, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1671, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1671, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1671, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1671, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1671, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1741, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1741, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1851, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1911, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1911, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1886, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1881, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1876, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1871, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1861, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1851, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1846, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1841, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1841, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1846, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1851, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1856, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1861, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:99 🎯 handleSubmitGuess called
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 1866, …}
LobbyGameplay.vue:100 canSubmit: false currentFigure: true
LobbyGameplay.vue:103 ❌ Validation failed - cannot submit