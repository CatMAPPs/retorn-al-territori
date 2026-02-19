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
useLobby.ts:332 📤 useLobby returning with Pinia reactive state - automatic reactivity!
useLobby.ts:362 📤 Return object created: {hasIsLoading: true, isLoadingValue: false, hasCreateNewLobby: true}
MultiplayerView.vue:14 🔍 lobbyComposable: {lobby: null, player: null, players: Proxy(Array), figures: Proxy(Array), currentRound: 0, …}
MultiplayerView.vue:15 🔍 lobbyComposable.error: null
MultiplayerView.vue:18 🎯 MultiplayerView mounted, initial state: {lobby: null, player: null, isLoading: false}
useLobby.ts:19 🏗️ useLobby composable called
useLobby.ts:22 🏪 Initializing lobbyStore...
useLobby.ts:24 🏪 lobbyStore initialized: {isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:332 📤 useLobby returning with Pinia reactive state - automatic reactivity!
useLobby.ts:362 📤 Return object created: {hasIsLoading: true, isLoadingValue: false, hasCreateNewLobby: true}
LobbyCreateJoin.vue:14 🎨 LobbyCreateJoin component mounted!
LobbyCreateJoin.vue:15 🔍 LobbyCreateJoin destructured values: {isLoading: false, hasCreateNewLobby: true, hasJoinExistingLobby: true}
LobbyCreateJoin.vue:20 🔍 Full composable object: {lobby: null, player: null, players: Proxy(Array), figures: Proxy(Array), currentRound: 0, …}
authStore.ts:47 👂 Setting up auth state listener...
authStore.ts:73 ✅ Auth store initialized
authStore.ts:49 🔄 Auth state change: INITIAL_SESSION Session exists
LobbyCreateJoin.vue:27 🏗️ LobbyCreateJoin.handleCreateLobby called!
LobbyCreateJoin.vue:28 🔍 Component state: {isLoading: undefined}
LobbyCreateJoin.vue:30 🚀 Calling createNewLobby...
useLobby.ts:42 🎯 createNewLobby called - checking auth...
useLobby.ts:44 👤 Auth user: {id: '360c97e2-504f-420e-a903-3dd272eed80d', email: 'test3@yahoo.com', username: 'test3', avatar_url: null, created_at: '2025-11-06T02:48:49.099448+00:00', …}
useLobby.ts:52 ⏳ Setting loading state...
useLobby.ts:56 🏗️ Creating lobby for user: 360c97e2-504f-420e-a903-3dd272eed80d test3
useLobby.ts:57 🔄 About to call createLobby...
useLobby.ts:59 ✅ createLobby returned: {id: 'ef185053-cde8-410a-8cb7-94785847a859', room_code: 'Z62ADL', host_id: '360c97e2-504f-420e-a903-3dd272eed80d', status: 'waiting', current_round: 0, …}
useLobby.ts:67 💾 About to call setLobby...
lobbyStore.ts:26 🏪 STORE: setLobby called with: {lobby: {…}, player: {…}}
lobbyStore.ts:31 🏪 STORE: setLobby completed, currentLobby: Proxy(Object) {id: 'ef185053-cde8-410a-8cb7-94785847a859', room_code: 'Z62ADL', host_id: '360c97e2-504f-420e-a903-3dd272eed80d', status: 'waiting', current_round: 0, …}
useLobby.ts:69 👥 About to call updatePlayers...
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 1 players
lobbyStore.ts:37 🏪 STORE: updatePlayers completed
useLobby.ts:71 ✅ Store operations completed - reactivity is automatic!
useLobby.ts:74 🎯 About to setup realtime subscription...
useLobby.ts:217 🔌 Setting up realtime subscription for lobby: ef185053-cde8-410a-8cb7-94785847a859
realtime.ts:21 📡 Subscribing to channel: lobby:ef185053-cde8-410a-8cb7-94785847a859
useLobby.ts:77 ✅ Realtime subscription setup completed
LobbyCreateJoin.vue:32 ✅ createNewLobby completed successfully
realtime.ts:132 📡 Channel subscription status for lobby:ef185053-cde8-410a-8cb7-94785847a859: SUBSCRIBED
realtime.ts:134 ✅ Successfully subscribed to lobby:ef185053-cde8-410a-8cb7-94785847a859