
_GoTrueClient @ @supabase_supabase-js.js?v=a926d579:8302
SupabaseAuthClient @ @supabase_supabase-js.js?v=a926d579:10622
_initSupabaseAuthClient @ @supabase_supabase-js.js?v=a926d579:10788
SupabaseClient @ @supabase_supabase-js.js?v=a926d579:10664
createClient @ @supabase_supabase-js.js?v=a926d579:10830
(anonymous) @ client.ts:23Understand this warning
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:452 📤 useLobby returning actions only - state accessed via store directly
MultiplayerView.vue:36 🔍 lobbyStore reactive refs: {lobby: ObjectRefImpl, player: ObjectRefImpl, isLoading: ObjectRefImpl}
MultiplayerView.vue:37 🎯 MultiplayerView mounted, initial state: {lobby: null, player: null, isLoading: false}
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
MultiplayerView.vue:55 🎯 MultiplayerView: Lobby status changed: undefined → undefined
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:452 📤 useLobby returning actions only - state accessed via store directly
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
useLobby.ts:43 🎯 createNewLobby called - checking auth...
useLobby.ts:45 👤 Auth user: {id: '360c97e2-504f-420e-a903-3dd272eed80d', email: 'test3@yahoo.com', username: 'test3', avatar_url: null, created_at: '2025-11-06T02:48:49.099448+00:00', …}
useLobby.ts:53 ⏳ Setting loading state...
useLobby.ts:58 🧹 Leaving any existing lobbies before creating new one
queries.ts:543 🏠 leaveAllLobbies: Removing user from all lobbies: 360c97e2-504f-420e-a903-3dd272eed80d
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:555 ✅ leaveAllLobbies: Successfully removed user from all lobbies
useLobby.ts:66 🏗️ Creating lobby for user: 360c97e2-504f-420e-a903-3dd272eed80d test3
useLobby.ts:67 🔄 About to call createLobby...
useLobby.ts:69 ✅ createLobby returned: {id: 'fa74972d-4081-4876-b361-f3e3caa47160', room_code: '7XJXLT', host_id: '360c97e2-504f-420e-a903-3dd272eed80d', status: 'waiting', current_round: 0, …}
useLobby.ts:77 💾 About to call setLobby...
lobbyStore.ts:26 🏪 STORE: setLobby called with: {lobby: {…}, player: {…}}
lobbyStore.ts:31 🏪 STORE: setLobby completed, currentLobby: Proxy(Object) {id: 'fa74972d-4081-4876-b361-f3e3caa47160', room_code: '7XJXLT', host_id: '360c97e2-504f-420e-a903-3dd272eed80d', status: 'waiting', current_round: 0, …}
useLobby.ts:79 👥 About to call updatePlayers...
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 1 players
lobbyStore.ts:36 🏪 STORE: Current players: []
lobbyStore.ts:37 🏪 STORE: New players: [{…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:81 ✅ Store operations completed - reactivity is automatic!
useLobby.ts:84 🎯 About to setup realtime subscription...
useLobby.ts:268 🔌 Setting up realtime subscription for lobby: fa74972d-4081-4876-b361-f3e3caa47160
realtime.ts:21 📡 Subscribing to channel: lobby:fa74972d-4081-4876-b361-f3e3caa47160
useLobby.ts:87 ✅ Realtime subscription setup completed
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 1, players: Array(1)}
MultiplayerView.vue:55 🎯 MultiplayerView: Lobby status changed: undefined → waiting
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:452 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: {playersCount: 1, players: Array(1)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: [{…}]
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false {isHost: true, allPlayersReady: false, playerCount: 1}
LobbyCreateJoin.vue:37 ✅ createNewLobby completed successfully
realtime.ts:153 📡 Channel subscription status for lobby:fa74972d-4081-4876-b361-f3e3caa47160: SUBSCRIBED 
realtime.ts:156 ✅ Successfully subscribed to lobby:fa74972d-4081-4876-b361-f3e3caa47160
realtime.ts:176 🔗 Channel joined for lobby:fa74972d-4081-4876-b361-f3e3caa47160
realtime.ts:180 👋 Channel left for lobby:fa74972d-4081-4876-b361-f3e3caa47160
realtime.ts:184 💥 Channel system error for lobby:fa74972d-4081-4876-b361-f3e3caa47160: {message: 'Unable to subscribe to changes with given paramete…, "eq", "fa74972d-4081-4876-b361-f3e3caa47160"}]]', status: 'error', extension: 'postgres_changes', channel: 'lobby:fa74972d-4081-4876-b361-f3e3caa47160'}
(anonymous) @ realtime.ts:184
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3002
_trigger @ @supabase_supabase-js.js?v=a926d579:2987
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
decode @ @supabase_supabase-js.js?v=a926d579:2038
_onConnMessage @ @supabase_supabase-js.js?v=a926d579:3494
conn.onmessage @ @supabase_supabase-js.js?v=a926d579:3547Understand this error
realtime.ts:61 📢 REALTIME: Player joined lobby via broadcast {connected: true, id: '84f50583-b1c0-4d65-9cf0-5892523feb70', joined_at: '2025-11-08T22:09:45.859011+00:00', lobby_id: 'fa74972d-4081-4876-b361-f3e3caa47160', ready: false, …}
useLobby.ts:280 👥 REALTIME CALLBACK: Player joined, refreshing players list
useLobby.ts:284 👥 REALTIME CALLBACK: Got players from DB: 2
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: [{…}]
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:286 👥 REALTIME CALLBACK: Updated store with players
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(1), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: (2) [{…}, {…}]
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false {isHost: true, allPlayersReady: false, playerCount: 2}
realtime.ts:67 📢 REALTIME: Player ready status updated via broadcast {ready: true, userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
realtime.ts:68 📢 REALTIME: About to call onPlayerReady callback with userId: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
useLobby.ts:303 👥 REALTIME CALLBACK: Player ready status changed for player: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
useLobby.ts:305 👥 REALTIME CALLBACK: About to refresh players list for lobby: fa74972d-4081-4876-b361-f3e3caa47160
realtime.ts:71 📢 REALTIME: onPlayerReady callback called successfully
useLobby.ts:308 👥 REALTIME CALLBACK: Server players: (2) [{…}, {…}]
useLobby.ts:323 👥 REALTIME CALLBACK: Current user optimistic state - server: false local: false
useLobby.ts:335 👥 REALTIME CALLBACK: Final reconciled players: (2) [{…}, {…}]
useLobby.ts:337 👥 REALTIME CALLBACK: About to update store with reconciled players
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: (2) [{…}, {…}]
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:339 👥 REALTIME CALLBACK: Updated store after ready change - reactivity is automatic!
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: (2) [{…}, {…}]
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false {isHost: true, allPlayersReady: false, playerCount: 2}
LobbyWaitingRoom.vue:69 🎯 handleToggleReady called in component
useLobby.ts:165 🎯 toggleReady called
useLobby.ts:173 🎯 toggleReady: Current ready state: false → New state: true
useLobby.ts:176 ⚡ toggleReady: Applying optimistic local update
lobbyStore.ts:71 🏪 STORE: updatePlayerReady called for player ccde15ed-1564-4d3e-b6ee-ca6dfd473453 ready: true
lobbyStore.ts:78 🏪 STORE: updatePlayerReady completed - fresh array assigned
useLobby.ts:180 🔄 toggleReady: Updating database...
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: true players: (2) [{…}, {…}]0: {id: '360c97e2-504f-420e-a903-3dd272eed80d', ready: true}1: {id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', ready: true}length: 2[[Prototype]]: Array(0)
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: true {isHost: true, allPlayersReady: true, playerCount: 2}
queries.ts:708 📢 Broadcasted player ready event for 360c97e2-504f-420e-a903-3dd272eed80d ready: true
useLobby.ts:187 ✅ toggleReady: Database update completed - optimistic update confirmed
LobbyWaitingRoom.vue:74 🎮 LobbyWaitingRoom: Start Game button clicked
LobbyWaitingRoom.vue:75 🎮 LobbyWaitingRoom: Current state: {isHost: true, allPlayersReady: true, canStartGame: true, players: Proxy(Array)}
useLobby.ts:203 🎮 startMultiplayerGame called for lobby: fa74972d-4081-4876-b361-f3e3caa47160
useLobby.ts:206 ⏳ Setting loading state for game start
useLobby.ts:210 🚀 Calling startGame API...
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:631 📢 Broadcasted game started event for lobby: fa74972d-4081-4876-b361-f3e3caa47160
useLobby.ts:212 ✅ startGame API completed - waiting for realtime status update
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency...