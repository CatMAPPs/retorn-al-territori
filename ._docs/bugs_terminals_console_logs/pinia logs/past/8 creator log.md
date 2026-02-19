client.ts:23 Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.
_GoTrueClient @ @supabase_supabase-js.js?v=a926d579:8302
SupabaseAuthClient @ @supabase_supabase-js.js?v=a926d579:10622
_initSupabaseAuthClient @ @supabase_supabase-js.js?v=a926d579:10788
SupabaseClient @ @supabase_supabase-js.js?v=a926d579:10664
createClient @ @supabase_supabase-js.js?v=a926d579:10830
(anonymous) @ client.ts:23Understand this warning
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
authStore.ts:47 👂 Setting up auth state listener...
authStore.ts:73 ✅ Auth store initialized
authStore.ts:49 🔄 Auth state change: INITIAL_SESSION Session exists
LobbyCreateJoin.vue:32 🏗️ LobbyCreateJoin.handleCreateLobby called!
LobbyCreateJoin.vue:33 🔍 Component state: {isLoading: false}
LobbyCreateJoin.vue:35 🚀 Calling createNewLobby...
useLobby.ts:42 🎯 createNewLobby called - checking auth...
useLobby.ts:44 👤 Auth user: {id: '2ac7adfc-3034-4e31-b812-72644d614b21', email: 'test@yahoo.com', username: 'testboyo', avatar_url: null, created_at: '2025-11-04T06:51:40.027271+00:00', …}
useLobby.ts:52 ⏳ Setting loading state...
useLobby.ts:56 🏗️ Creating lobby for user: 2ac7adfc-3034-4e31-b812-72644d614b21 testboyo
useLobby.ts:57 🔄 About to call createLobby...
useLobby.ts:34 🧹 Cleaning up realtime subscription
useLobby.ts:59 ✅ createLobby returned: {id: '269cf17f-3055-4659-95d1-efd44ddeac1d', room_code: 'W3F3MA', host_id: '2ac7adfc-3034-4e31-b812-72644d614b21', status: 'waiting', current_round: 0, …}
useLobby.ts:67 💾 About to call setLobby...
lobbyStore.ts:26 🏪 STORE: setLobby called with: {lobby: {…}, player: {…}}
lobbyStore.ts:31 🏪 STORE: setLobby completed, currentLobby: Proxy(Object) {id: '269cf17f-3055-4659-95d1-efd44ddeac1d', room_code: 'W3F3MA', host_id: '2ac7adfc-3034-4e31-b812-72644d614b21', status: 'waiting', current_round: 0, …}
useLobby.ts:69 👥 About to call updatePlayers...
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 1 players
lobbyStore.ts:36 🏪 STORE: Current players: []
lobbyStore.ts:37 🏪 STORE: New players: [{…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:71 ✅ Store operations completed - reactivity is automatic!
useLobby.ts:74 🎯 About to setup realtime subscription...
useLobby.ts:233 🔌 Setting up realtime subscription for lobby: 269cf17f-3055-4659-95d1-efd44ddeac1d
realtime.ts:21 📡 Subscribing to channel: lobby:269cf17f-3055-4659-95d1-efd44ddeac1d
useLobby.ts:77 ✅ Realtime subscription setup completed
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: Proxy(Object), player: Proxy(Object), playersCount: 1, players: Array(1)}
useLobby.ts:19 🏗️ useLobby composable called
useLobby.ts:22 🏪 Initializing lobbyStore...
useLobby.ts:24 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:357 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: {playersCount: 1, players: Array(1)}
LobbyCreateJoin.vue:37 ✅ createNewLobby completed successfully
realtime.ts:117 📡 Channel subscription status for lobby:269cf17f-3055-4659-95d1-efd44ddeac1d: SUBSCRIBED
realtime.ts:119 ✅ Successfully subscribed to lobby:269cf17f-3055-4659-95d1-efd44ddeac1d
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency...
realtime.ts:55 📢 REALTIME: Player joined lobby via broadcast {connected: true, id: '8c62d409-9b5e-4388-9e40-6709e4139f33', joined_at: '2025-11-08T09:08:22.855485+00:00', lobby_id: '269cf17f-3055-4659-95d1-efd44ddeac1d', ready: false, …}
useLobby.ts:237 👥 REALTIME CALLBACK: Player joined, refreshing players list
realtime.ts:61 📢 REALTIME: Player ready status updated via broadcast {ready: true, userId: '360c97e2-504f-420e-a903-3dd272eed80d'}
useLobby.ts:260 👥 REALTIME CALLBACK: Player ready status changed