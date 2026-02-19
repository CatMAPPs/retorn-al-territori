
_GoTrueClient @ @supabase_supabase-js.js?v=a926d579:8302
SupabaseAuthClient @ @supabase_supabase-js.js?v=a926d579:10622
_initSupabaseAuthClient @ @supabase_supabase-js.js?v=a926d579:10788
SupabaseClient @ @supabase_supabase-js.js?v=a926d579:10664
createClient @ @supabase_supabase-js.js?v=a926d579:10830
(anonymous) @ client.ts:23Understand this warning
authStore.ts:47 👂 Setting up auth state listener...
authStore.ts:73 ✅ Auth store initialized
authStore.ts:49 🔄 Auth state change: INITIAL_SESSION Session exists
authStore.ts:49 🔄 Auth state change: SIGNED_OUT No session
authStore.ts:65 🚪 User signed out
authStore.ts:83 🔑 Attempting sign in for: test3@yahoo.com
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency...
authStore.ts:55 ✅ Sign in consistency ensured: test3
authStore.ts:86 📋 Sign in result - session: Exists
authStore.ts:89 👤 Ensuring user consistency after sign in...
authStore.ts:91 ✅ Sign in user consistency ensured: test3
useLobby.ts:19 🏗️ useLobby composable called
useLobby.ts:22 🏪 Initializing lobbyStore...
useLobby.ts:24 🏪 lobbyStore initialized: {isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:357 📤 useLobby returning actions only - state accessed via store directly
MultiplayerView.vue:36 🔍 lobbyStore reactive refs: {lobby: ObjectRefImpl, player: ObjectRefImpl, isLoading: ObjectRefImpl}
MultiplayerView.vue:37 🎯 MultiplayerView mounted, initial state: {lobby: null, player: null, isLoading: false}
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
useLobby.ts:19 🏗️ useLobby composable called
useLobby.ts:22 🏪 Initializing lobbyStore...
useLobby.ts:24 🏪 lobbyStore initialized: {isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:357 📤 useLobby returning actions only - state accessed via store directly
LobbyCreateJoin.vue:20 🎨 LobbyCreateJoin component mounted!
LobbyCreateJoin.vue:21 🔍 LobbyCreateJoin reactive values: {isLoading: false, hasCreateNewLobby: true, hasJoinExistingLobby: true}
MultiplayerView.vue:30 🎯 MultiplayerView mounted - cleaning up any existing lobby state
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
LobbyCreateJoin.vue:44 🏗️ LobbyCreateJoin.handleJoinLobby called with roomCode: W3F3MA
LobbyCreateJoin.vue:52 🚀 Calling joinExistingLobby...
useLobby.ts:93 🚪 joinExistingLobby called with roomCode: W3F3MA
useLobby.ts:100 👤 Authenticated user: 360c97e2-504f-420e-a903-3dd272eed80d
useLobby.ts:103 ⏳ Setting loading state to true
useLobby.ts:107 🔄 Calling joinLobby API...
useLobby.ts:34 🧹 Cleaning up realtime subscription
realtime.ts:144 Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.
send @ @supabase_supabase-js.js?v=a926d579:2805
broadcastLobbyEvent @ realtime.ts:144
joinLobby @ queries.ts:479
await in joinLobby
joinExistingLobby @ useLobby.ts:108
handleJoinLobby @ LobbyCreateJoin.vue:53
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:12326
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335Understand this warning
queries.ts:480 📢 Broadcasted player joined event for Anonymous
useLobby.ts:114 ✅ joinLobby API returned: {lobbyId: '269cf17f-3055-4659-95d1-efd44ddeac1d', roomCode: 'W3F3MA', playerId: '8c62d409-9b5e-4388-9e40-6709e4139f33'}
useLobby.ts:116 📊 Fetching updated players list...
useLobby.ts:118 ✅ Got players list: 2 players
useLobby.ts:120 💾 Setting lobby and players in store...
lobbyStore.ts:26 🏪 STORE: setLobby called with: {lobby: {…}, player: {…}}
lobbyStore.ts:31 🏪 STORE: setLobby completed, currentLobby: Proxy(Object) {id: '269cf17f-3055-4659-95d1-efd44ddeac1d', room_code: 'W3F3MA', host_id: '2ac7adfc-3034-4e31-b812-72644d614b21', status: 'waiting', current_round: 0, …}
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: []
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:123 ✅ Store updated successfully
useLobby.ts:126 🎯 About to setup realtime subscription for join...
useLobby.ts:233 🔌 Setting up realtime subscription for lobby: 269cf17f-3055-4659-95d1-efd44ddeac1d
realtime.ts:21 📡 Subscribing to channel: lobby:269cf17f-3055-4659-95d1-efd44ddeac1d
useLobby.ts:129 ✅ Realtime subscription setup completed for join
useLobby.ts:134 🎉 joinExistingLobby completed successfully
useLobby.ts:142 🔄 Setting loading state to false
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: Proxy(Object), player: Proxy(Object), playersCount: 2, players: Array(2)}
useLobby.ts:19 🏗️ useLobby composable called
useLobby.ts:22 🏪 Initializing lobbyStore...
useLobby.ts:24 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:357 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: {playersCount: 2, players: Array(2)}
LobbyCreateJoin.vue:54 ✅ joinExistingLobby completed successfully
realtime.ts:117 📡 Channel subscription status for lobby:269cf17f-3055-4659-95d1-efd44ddeac1d: SUBSCRIBED
realtime.ts:119 ✅ Successfully subscribed to lobby:269cf17f-3055-4659-95d1-efd44ddeac1d
LobbyWaitingRoom.vue:61 🎯 handleToggleReady called in component
useLobby.ts:148 🎯 toggleReady called
useLobby.ts:156 🎯 toggleReady: Setting ready state to true
queries.ts:628 📢 Broadcasted player ready event for 360c97e2-504f-420e-a903-3dd272eed80d ready: true
useLobby.ts:164 ✅ toggleReady: updatePlayerReady completed
lobbyStore.ts:71 🏪 STORE: updatePlayerReady called for player 8c62d409-9b5e-4388-9e40-6709e4139f33 ready: true
lobbyStore.ts:78 🏪 STORE: updatePlayerReady completed - fresh array assigned
useLobby.ts:168 ✅ toggleReady: Local state updated
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: Proxy(Object), player: Proxy(Object), playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency...