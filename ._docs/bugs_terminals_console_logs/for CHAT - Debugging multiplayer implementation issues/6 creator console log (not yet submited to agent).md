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
LobbyCreateJoin.vue:16 🏗️ LobbyCreateJoin.handleCreateLobby called!
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: false, hasPlayer: false, isLoading: true}
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: false, hasPlayer: false, isLoading: true}
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: false, hasPlayer: false, isLoading: true}
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: false, hasPlayer: false, isLoading: true}
MultiplayerView.vue:34 ⏳ LOADING CHANGED: {old: false, new: true}
useLobby.ts:65 🧹 Unsubscribing from lobbyStore
useLobby.ts:84 💾 About to call setLobby...
lobbyStore.ts:55 🏪 STORE: setLobby called with: {lobby: {…}, player: {…}}
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: true, hasPlayer: true, isLoading: true}
lobbyStore.ts:62 🏪 STORE: setLobby completed, new state: {currentLobby: {…}, currentPlayer: {…}, players: Array(0), figures: Array(0), currentRound: 0, …}
useLobby.ts:86 👥 About to call updatePlayers...
lobbyStore.ts:66 🏪 STORE: updatePlayers called with 1 players
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: true, hasPlayer: true, isLoading: true}
lobbyStore.ts:68 🏪 STORE: updatePlayers completed
useLobby.ts:88 🔄 Syncing reactive state after store operations...
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: true, hasPlayer: true, isLoading: true}
useLobby.ts:90 ✅ Store operations and sync completed
useLobby.ts:93 🎯 About to setup realtime subscription...
useLobby.ts:236 🔌 Setting up realtime subscription for lobby: 245fa3e2-db9c-4153-84f9-6d97dd7cdd0e
realtime.ts:21 📡 Subscribing to channel: lobby:245fa3e2-db9c-4153-84f9-6d97dd7cdd0e
useLobby.ts:96 ✅ Realtime subscription setup completed
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: true, hasPlayer: true, isLoading: false}
MultiplayerView.vue:26 🎯 LOBBY CHANGED: {old: null, new: Proxy(Object)}
MultiplayerView.vue:30 👤 PLAYER CHANGED: {old: null, new: Proxy(Object)}
MultiplayerView.vue:34 ⏳ LOADING CHANGED: {old: true, new: false}
useLobby.ts:19 🏗️ useLobby composable called
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: true, hasPlayer: true, isLoading: false}
useLobby.ts:356 📤 useLobby returning with reactive state: {lobby: Proxy(Object), player: Proxy(Object), isLoading: false}
LobbyCreateJoin.vue:19 ✅ createNewLobby completed successfully
realtime.ts:132 📡 Channel subscription status for lobby:245fa3e2-db9c-4153-84f9-6d97dd7cdd0e: SUBSCRIBED
realtime.ts:134 ✅ Successfully subscribed to lobby:245fa3e2-db9c-4153-84f9-6d97dd7cdd0e
realtime.ts:55 📢 REALTIME: Player joined lobby via broadcast {connected: true, id: '06ba7f7a-8cd9-4710-987c-cc903b60dddb', joined_at: '2025-11-07T21:08:16.251136+00:00', lobby_id: '245fa3e2-db9c-4153-84f9-6d97dd7cdd0e', ready: false, …}
useLobby.ts:240 👥 REALTIME CALLBACK: Player joined, refreshing players list
useLobby.ts:244 👥 REALTIME CALLBACK: Got players from DB: 2
lobbyStore.ts:66 🏪 STORE: updatePlayers called with 2 players
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: true, hasPlayer: true, isLoading: false}
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: true, hasPlayer: true, isLoading: false}
lobbyStore.ts:68 🏪 STORE: updatePlayers completed
useLobby.ts:246 👥 REALTIME CALLBACK: Updated store with players
realtime.ts:61 📢 REALTIME: Player ready status updated via broadcast {ready: true, userId: '360c97e2-504f-420e-a903-3dd272eed80d'}
useLobby.ts:263 👥 REALTIME CALLBACK: Player ready status changed for 360c97e2-504f-420e-a903-3dd272eed80d
useLobby.ts:267 👥 REALTIME CALLBACK: Refreshed players after ready change: 2 players
useLobby.ts:268 👥 REALTIME CALLBACK: Player ready statuses: (2) [{…}, {…}]
lobbyStore.ts:66 🏪 STORE: updatePlayers called with 2 players
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: true, hasPlayer: true, isLoading: false}
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: true, hasPlayer: true, isLoading: false}
lobbyStore.ts:68 🏪 STORE: updatePlayers completed
useLobby.ts:271 👥 REALTIME CALLBACK: Updated store after ready change
useLobby.ts:274 👥 REALTIME CALLBACK: Forcing reactive sync...
useLobby.ts:37 🔄 SYNCING: Updating refs from store: {hasLobby: true, hasPlayer: true, isLoading: false}
useLobby.ts:276 👥 REALTIME CALLBACK: Reactive sync completed
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency...