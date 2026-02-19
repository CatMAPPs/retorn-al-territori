
_GoTrueClient @ @supabase_supabase-js.js?v=a926d579:8302
SupabaseAuthClient @ @supabase_supabase-js.js?v=a926d579:10622
_initSupabaseAuthClient @ @supabase_supabase-js.js?v=a926d579:10788
SupabaseClient @ @supabase_supabase-js.js?v=a926d579:10664
createClient @ @supabase_supabase-js.js?v=a926d579:10830
(anonymous) @ client.ts:23Understand this warning
useLobby.ts:20 🏗️ useLobby composable called
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
useLobby.ts:69 ✅ createLobby returned: {id: '606d3fe0-e302-4e0e-b9d0-37a0e73321af', room_code: 'ME83MT', host_id: '360c97e2-504f-420e-a903-3dd272eed80d', status: 'waiting', current_round: 0, …}
useLobby.ts:77 💾 About to call setLobby...
lobbyStore.ts:26 🏪 STORE: setLobby called with: {lobby: {…}, player: {…}}
lobbyStore.ts:31 🏪 STORE: setLobby completed, currentLobby: Proxy(Object) {id: '606d3fe0-e302-4e0e-b9d0-37a0e73321af', room_code: 'ME83MT', host_id: '360c97e2-504f-420e-a903-3dd272eed80d', status: 'waiting', current_round: 0, …}
useLobby.ts:79 👥 About to call updatePlayers...
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 1 players
lobbyStore.ts:36 🏪 STORE: Current players: []
lobbyStore.ts:37 🏪 STORE: New players: [{…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:81 ✅ Store operations completed - reactivity is automatic!
useLobby.ts:84 🎯 About to setup realtime subscription...
useLobby.ts:306 🔌 Setting up realtime subscription for lobby: 606d3fe0-e302-4e0e-b9d0-37a0e73321af
realtime.ts:21 📡 Subscribing to channel: lobby:606d3fe0-e302-4e0e-b9d0-37a0e73321af
useLobby.ts:87 ✅ Realtime subscription setup completed
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 1, players: Array(1)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: undefined → waiting
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:497 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: {playersCount: 1, players: Array(1)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: [{…}]
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false {isHost: true, allPlayersReady: false, playerCount: 1}
LobbyCreateJoin.vue:37 ✅ createNewLobby completed successfully
realtime.ts:154 📡 Channel subscription status for lobby:606d3fe0-e302-4e0e-b9d0-37a0e73321af: SUBSCRIBED 
realtime.ts:157 ✅ Successfully subscribed to lobby:606d3fe0-e302-4e0e-b9d0-37a0e73321af
realtime.ts:177 🔗 Channel joined for lobby:606d3fe0-e302-4e0e-b9d0-37a0e73321af
realtime.ts:181 👋 Channel left for lobby:606d3fe0-e302-4e0e-b9d0-37a0e73321af
realtime.ts:185 💥 Channel system error for lobby:606d3fe0-e302-4e0e-b9d0-37a0e73321af: {message: 'Unable to subscribe to changes with given paramete…, "eq", "606d3fe0-e302-4e0e-b9d0-37a0e73321af"}]]', status: 'error', extension: 'postgres_changes', channel: 'lobby:606d3fe0-e302-4e0e-b9d0-37a0e73321af'}
(anonymous) @ realtime.ts:185
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3002
_trigger @ @supabase_supabase-js.js?v=a926d579:2987
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
decode @ @supabase_supabase-js.js?v=a926d579:2038
_onConnMessage @ @supabase_supabase-js.js?v=a926d579:3494
conn.onmessage @ @supabase_supabase-js.js?v=a926d579:3547Understand this error
realtime.ts:61 📢 REALTIME: Player joined lobby via broadcast {connected: true, id: 'a551e061-6c29-4804-a6f3-3734d559ae5c', joined_at: '2025-11-09T04:44:15.170772+00:00', lobby_id: '606d3fe0-e302-4e0e-b9d0-37a0e73321af', ready: false, …}
useLobby.ts:318 👥 REALTIME CALLBACK: Player joined, refreshing players list
useLobby.ts:322 👥 REALTIME CALLBACK: Got players from DB: 2
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: [{…}]
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:324 👥 REALTIME CALLBACK: Updated store with players
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(1), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: (2) [{…}, {…}]
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false {isHost: true, allPlayersReady: false, playerCount: 2}
realtime.ts:67 📢 REALTIME: Player ready status updated via broadcast {ready: true, userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
realtime.ts:68 📢 REALTIME: About to call onPlayerReady callback with userId: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
useLobby.ts:341 👥 REALTIME CALLBACK: Player ready status changed for player: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
useLobby.ts:343 👥 REALTIME CALLBACK: About to refresh players list for lobby: 606d3fe0-e302-4e0e-b9d0-37a0e73321af
realtime.ts:71 📢 REALTIME: onPlayerReady callback called successfully
useLobby.ts:346 👥 REALTIME CALLBACK: Server players: (2) [{…}, {…}]
useLobby.ts:361 👥 REALTIME CALLBACK: Current user optimistic state - server: false local: false
useLobby.ts:373 👥 REALTIME CALLBACK: Final reconciled players: (2) [{…}, {…}]
useLobby.ts:375 👥 REALTIME CALLBACK: About to update store with reconciled players
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: (2) [{…}, {…}]
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:377 👥 REALTIME CALLBACK: Updated store after ready change - reactivity is automatic!
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: (2) [{…}, {…}]
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false {isHost: true, allPlayersReady: false, playerCount: 2}
LobbyWaitingRoom.vue:69 🎯 handleToggleReady called in component
useLobby.ts:165 🎯 toggleReady called
useLobby.ts:173 🎯 toggleReady: Current ready state: false → New state: true
useLobby.ts:176 ⚡ toggleReady: Applying optimistic local update
lobbyStore.ts:71 🏪 STORE: updatePlayerReady called for player 05d94133-dd77-457f-be19-6a0425da04b2 ready: true
lobbyStore.ts:78 🏪 STORE: updatePlayerReady completed - fresh array assigned
useLobby.ts:180 🔄 toggleReady: Updating database...
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: true players: (2) [{…}, {…}]
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: true {isHost: true, allPlayersReady: true, playerCount: 2}
queries.ts:720 📢 Broadcasted player ready event for 360c97e2-504f-420e-a903-3dd272eed80d ready: true
useLobby.ts:187 ✅ toggleReady: Database update completed - optimistic update confirmed
LobbyWaitingRoom.vue:74 🎮 LobbyWaitingRoom: Start Game button clicked
LobbyWaitingRoom.vue:75 🎮 LobbyWaitingRoom: Current state: {isHost: true, allPlayersReady: true, canStartGame: true, players: Proxy(Array)}
useLobby.ts:203 🎮 startMultiplayerGame called for lobby: 606d3fe0-e302-4e0e-b9d0-37a0e73321af
useLobby.ts:206 ⏳ Setting loading state for game start
useLobby.ts:210 🚀 Calling startGame API...
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:616 🎮 Updating lobby status to in_progress...
queries.ts:632 ✅ Lobby status updated successfully
queries.ts:643 📢 Broadcasted game started event for lobby: 606d3fe0-e302-4e0e-b9d0-37a0e73321af
useLobby.ts:212 ✅ startGame API completed - game started successfully!
useLobby.ts:213 ⏳ Waiting for realtime status update to transition UI...
useLobby.ts:218 ⏰ Realtime transition timeout - forcing game start manually
(anonymous) @ useLobby.ts:218
setTimeout
startMultiplayerGame @ useLobby.ts:216
await in startMultiplayerGame
handleStartGame @ LobbyWaitingRoom.vue:81
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
emit @ chunk-LG6AQRJS.js?v=a926d579:8589
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:10300
handleClick @ Button.vue:98
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335Understand this warning
useLobby.ts:225 🔄 Fallback: Manually updating lobby status to in_progress
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: waiting → in_progress
MultiplayerView.vue:58 🎮 MultiplayerView: Lobby status is now in_progress - should show game screen
useLobby.ts:235 ✅ Fallback game start completed
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:497 📤 useLobby returning actions only - state accessed via store directly