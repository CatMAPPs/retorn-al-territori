useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:416 📤 useLobby returning actions only - state accessed via store directly
MultiplayerView.vue:36 🔍 lobbyStore reactive refs: {lobby: ObjectRefImpl, player: ObjectRefImpl, isLoading: ObjectRefImpl}
MultiplayerView.vue:37 🎯 MultiplayerView mounted, initial state: {lobby: null, player: null, isLoading: false}
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:416 📤 useLobby returning actions only - state accessed via store directly
LobbyCreateJoin.vue:20 🎨 LobbyCreateJoin component mounted!
LobbyCreateJoin.vue:21 🔍 LobbyCreateJoin reactive values: {isLoading: false, hasCreateNewLobby: true, hasJoinExistingLobby: true}
MultiplayerView.vue:30 🎯 MultiplayerView mounted - cleaning up any existing lobby state
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
authStore.ts:47 👂 Setting up auth state listener...
authStore.ts:73 ✅ Auth store initialized
authStore.ts:49 🔄 Auth state change: INITIAL_SESSION Session exists
LobbyCreateJoin.vue:44 🏗️ LobbyCreateJoin.handleJoinLobby called with roomCode: JXM983
LobbyCreateJoin.vue:52 🚀 Calling joinExistingLobby...
useLobby.ts:103 🚪 joinExistingLobby called with roomCode: JXM983
useLobby.ts:110 👤 Authenticated user: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
useLobby.ts:113 🧹 Cleaning up any existing lobby state before joining
useLobby.ts:400 🧹 Cleaning up lobby state and realtime subscriptions
useLobby.ts:410 🔄 Resetting lobby store
useLobby.ts:413 ✅ Cleanup completed
useLobby.ts:120 ⏳ Setting loading state to true
useLobby.ts:124 🔄 Calling joinLobby API...
queries.ts:422 🔍 joinLobby: Looking for lobby with code: JXM983
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:439 ✅ joinLobby: Found lobby: b1a03c09-ae3c-4ddb-9b95-ac5ae4acf1ff status: waiting
queries.ts:445 🔍 joinLobby: Checking player capacity for lobby: b1a03c09-ae3c-4ddb-9b95-ac5ae4acf1ff
queries.ts:458 ✅ joinLobby: Current player count: 1
queries.ts:464 🔍 joinLobby: Checking if user already in lobby: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
queries.ts:497 📝 joinLobby: Adding player to lobby
queries.ts:515 ✅ joinLobby: Player added successfully: 703e5b01-45b3-4c28-aef7-26601f34bfcb
realtime.ts:178 Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.
send @ @supabase_supabase-js.js?v=a926d579:2805
broadcastLobbyEvent @ realtime.ts:178
joinLobby @ queries.ts:520
await in joinLobby
joinExistingLobby @ useLobby.ts:125
handleJoinLobby @ LobbyCreateJoin.vue:53
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:12326
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335Understand this warning
queries.ts:521 📢 Broadcasted player joined event for Anonymous
queries.ts:527 🎉 joinLobby: Successfully joined lobby: b1a03c09-ae3c-4ddb-9b95-ac5ae4acf1ff
useLobby.ts:131 ✅ joinLobby API returned: {lobbyId: 'b1a03c09-ae3c-4ddb-9b95-ac5ae4acf1ff', roomCode: 'JXM983', playerId: '703e5b01-45b3-4c28-aef7-26601f34bfcb'}
useLobby.ts:133 📊 Fetching updated players list...
useLobby.ts:135 ✅ Got players list: 2 players
useLobby.ts:137 💾 Setting lobby and players in store...
lobbyStore.ts:26 🏪 STORE: setLobby called with: {lobby: {…}, player: {…}}
lobbyStore.ts:31 🏪 STORE: setLobby completed, currentLobby: Proxy(Object) {id: 'b1a03c09-ae3c-4ddb-9b95-ac5ae4acf1ff', room_code: 'JXM983', host_id: '2ac7adfc-3034-4e31-b812-72644d614b21', status: 'waiting', current_round: 0, …}
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: []
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:140 ✅ Store updated successfully
useLobby.ts:143 🎯 About to setup realtime subscription for join...
useLobby.ts:256 🔌 Setting up realtime subscription for lobby: b1a03c09-ae3c-4ddb-9b95-ac5ae4acf1ff
realtime.ts:21 📡 Subscribing to channel: lobby:b1a03c09-ae3c-4ddb-9b95-ac5ae4acf1ff
useLobby.ts:146 ✅ Realtime subscription setup completed for join
useLobby.ts:151 🎉 joinExistingLobby completed successfully
useLobby.ts:159 🔄 Setting loading state to false
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: Proxy(Object), player: Proxy(Object), playersCount: 2, players: Array(2)}
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:416 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: {playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: (2) [{…}, {…}]
LobbyCreateJoin.vue:54 ✅ joinExistingLobby completed successfully
realtime.ts:129 📡 Channel subscription status for lobby:b1a03c09-ae3c-4ddb-9b95-ac5ae4acf1ff: SUBSCRIBED 
realtime.ts:132 ✅ Successfully subscribed to lobby:b1a03c09-ae3c-4ddb-9b95-ac5ae4acf1ff
realtime.ts:152 🔗 Channel joined for lobby:b1a03c09-ae3c-4ddb-9b95-ac5ae4acf1ff
realtime.ts:156 👋 Channel left for lobby:b1a03c09-ae3c-4ddb-9b95-ac5ae4acf1ff
realtime.ts:160 💥 Channel system error for lobby:b1a03c09-ae3c-4ddb-9b95-ac5ae4acf1ff: {message: 'Unable to subscribe to changes with given paramete…, "eq", "b1a03c09-ae3c-4ddb-9b95-ac5ae4acf1ff"}]]', status: 'error', extension: 'postgres_changes', channel: 'lobby:b1a03c09-ae3c-4ddb-9b95-ac5ae4acf1ff'}
(anonymous) @ realtime.ts:160
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3002
_trigger @ @supabase_supabase-js.js?v=a926d579:2987
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
decode @ @supabase_supabase-js.js?v=a926d579:2038
_onConnMessage @ @supabase_supabase-js.js?v=a926d579:3494
conn.onmessage @ @supabase_supabase-js.js?v=a926d579:3547Understand this error
realtime.ts:67 📢 REALTIME: Player ready status updated via broadcast {ready: true, userId: '2ac7adfc-3034-4e31-b812-72644d614b21'}
realtime.ts:68 📢 REALTIME: About to call onPlayerReady callback with userId: 2ac7adfc-3034-4e31-b812-72644d614b21
useLobby.ts:291 👥 REALTIME CALLBACK: Player ready status changed for player: 2ac7adfc-3034-4e31-b812-72644d614b21
useLobby.ts:293 👥 REALTIME CALLBACK: About to refresh players list for lobby: b1a03c09-ae3c-4ddb-9b95-ac5ae4acf1ff
realtime.ts:71 📢 REALTIME: onPlayerReady callback called successfully
useLobby.ts:296 👥 REALTIME CALLBACK: Server players: (2) [{…}, {…}]
useLobby.ts:311 👥 REALTIME CALLBACK: Current user optimistic state - server: false local: false
useLobby.ts:323 👥 REALTIME CALLBACK: Final reconciled players: (2) [{…}, {…}]
useLobby.ts:325 👥 REALTIME CALLBACK: About to update store with reconciled players
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: (2) [{…}, {…}]
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:327 👥 REALTIME CALLBACK: Updated store after ready change - reactivity is automatic!
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: Proxy(Object), player: Proxy(Object), playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: (2) [{…}, {…}]
LobbyWaitingRoom.vue:69 🎯 handleToggleReady called in component
useLobby.ts:165 🎯 toggleReady called
useLobby.ts:173 🎯 toggleReady: Current ready state: false → New state: true
useLobby.ts:176 ⚡ toggleReady: Applying optimistic local update
lobbyStore.ts:71 🏪 STORE: updatePlayerReady called for player 703e5b01-45b3-4c28-aef7-26601f34bfcb ready: true
lobbyStore.ts:78 🏪 STORE: updatePlayerReady completed - fresh array assigned
useLobby.ts:180 🔄 toggleReady: Updating database...
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: Proxy(Object), player: Proxy(Object), playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: true players: (2) [{…}, {…}]
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false {isHost: false, allPlayersReady: true, playerCount: 2}
queries.ts:698 📢 Broadcasted player ready event for 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 ready: true
useLobby.ts:187 ✅ toggleReady: Database update completed - optimistic update confirmed
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency...