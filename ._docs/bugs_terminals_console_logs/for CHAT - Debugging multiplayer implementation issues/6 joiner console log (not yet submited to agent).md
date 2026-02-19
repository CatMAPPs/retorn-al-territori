
client.ts:23 Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.
_GoTrueClient @ @supabase_supabase-js.js?v=06551993:8302
SupabaseAuthClient @ @supabase_supabase-js.js?v=06551993:10622
_initSupabaseAuthClient @ @supabase_supabase-js.js?v=06551993:10788
SupabaseClient @ @supabase_supabase-js.js?v=06551993:10664
createClient @ @supabase_supabase-js.js?v=06551993:10830
(anonymous) @ client.ts:23Understand this warning
useLobby.ts:19 🏗️ useLobby composable called
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: false, hasPlayer: false, isLoading: false}
useLobby.ts:356 📤 useLobby returning with reactive state: {lobby: null, player: null, isLoading: false}
MultiplayerView.vue:14 🔍 lobbyComposable: {lobby: RefImpl, player: RefImpl, players: RefImpl, figures: RefImpl, currentRound: RefImpl, …}
MultiplayerView.vue:15 🔍 lobbyComposable.error: RefImpl {dep: Dep, __v_isRef: true, __v_isShallow: false, _rawValue: null, _value: null}
MultiplayerView.vue:18 🎯 MultiplayerView mounted, initial state: {lobby: null, player: null, isLoading: false}
useLobby.ts:19 🏗️ useLobby composable called
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: false, hasPlayer: false, isLoading: false}
useLobby.ts:356 📤 useLobby returning with reactive state: {lobby: null, player: null, isLoading: false}
authStore.ts:47 👂 Setting up auth state listener...
authStore.ts:73 ✅ Auth store initialized
authStore.ts:49 🔄 Auth state change: INITIAL_SESSION Session exists
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: false, hasPlayer: false, isLoading: true}
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: false, hasPlayer: false, isLoading: true}
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: false, hasPlayer: false, isLoading: true}
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: false, hasPlayer: false, isLoading: true}
MultiplayerView.vue:34 ⏳ LOADING CHANGED: {old: false, new: true}
useLobby.ts:65 🧹 Unsubscribing from lobbyStore
realtime.ts:159 Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.
send @ @supabase_supabase-js.js?v=06551993:2805
broadcastLobbyEvent @ realtime.ts:159
joinLobby @ queries.ts:479
await in joinLobby
joinExistingLobby @ useLobby.ts:118
handleJoinLobby @ LobbyCreateJoin.vue:33
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:12326
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
invoker @ chunk-LG6AQRJS.js?v=06551993:11335Understand this warning
queries.ts:480 📢 Broadcasted player joined event for Anonymous
lobbyStore.ts:55 🏪 STORE: setLobby called with: {lobby: {…}, player: {…}}
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: true, hasPlayer: true, isLoading: true}
lobbyStore.ts:62 🏪 STORE: setLobby completed, new state: {currentLobby: {…}, currentPlayer: {…}, players: Array(0), figures: Array(0), currentRound: 0, …}
lobbyStore.ts:66 🏪 STORE: updatePlayers called with 2 players
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: true, hasPlayer: true, isLoading: true}
lobbyStore.ts:68 🏪 STORE: updatePlayers completed
useLobby.ts:132 🎯 About to setup realtime subscription for join...
useLobby.ts:236 🔌 Setting up realtime subscription for lobby: 245fa3e2-db9c-4153-84f9-6d97dd7cdd0e
realtime.ts:21 📡 Subscribing to channel: lobby:245fa3e2-db9c-4153-84f9-6d97dd7cdd0e
useLobby.ts:135 ✅ Realtime subscription setup completed for join
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: true, hasPlayer: true, isLoading: false}
MultiplayerView.vue:26 🎯 LOBBY CHANGED: {old: null, new: Proxy(Object)}
MultiplayerView.vue:30 👤 PLAYER CHANGED: {old: null, new: Proxy(Object)}
MultiplayerView.vue:34 ⏳ LOADING CHANGED: {old: true, new: false}
useLobby.ts:19 🏗️ useLobby composable called
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: true, hasPlayer: true, isLoading: false}
useLobby.ts:356 📤 useLobby returning with reactive state: {lobby: Proxy(Object), player: Proxy(Object), isLoading: false}
realtime.ts:132 📡 Channel subscription status for lobby:245fa3e2-db9c-4153-84f9-6d97dd7cdd0e: SUBSCRIBED
realtime.ts:134 ✅ Successfully subscribed to lobby:245fa3e2-db9c-4153-84f9-6d97dd7cdd0e
LobbyWaitingRoom.vue:39 🎯 handleToggleReady called in component
useLobby.ts:151 🎯 toggleReady called
useLobby.ts:159 🎯 toggleReady: Setting ready state to true
queries.ts:628 📢 Broadcasted player ready event for 360c97e2-504f-420e-a903-3dd272eed80d ready: true
useLobby.ts:167 ✅ toggleReady: updatePlayerReady completed
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: true, hasPlayer: true, isLoading: false}
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: true, hasPlayer: true, isLoading: false}
useLobby.ts:171 ✅ toggleReady: Local state updated
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency...
LobbyWaitingRoom.vue:39 🎯 handleToggleReady called in component
useLobby.ts:151 🎯 toggleReady called
useLobby.ts:159 🎯 toggleReady: Setting ready state to true