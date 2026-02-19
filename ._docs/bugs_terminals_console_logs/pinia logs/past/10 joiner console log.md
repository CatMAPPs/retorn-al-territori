useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:390 📤 useLobby returning actions only - state accessed via store directly
MultiplayerView.vue:36 🔍 lobbyStore reactive refs: {lobby: ObjectRefImpl, player: ObjectRefImpl, isLoading: ObjectRefImpl}
MultiplayerView.vue:37 🎯 MultiplayerView mounted, initial state: {lobby: null, player: null, isLoading: false}
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:390 📤 useLobby returning actions only - state accessed via store directly
LobbyCreateJoin.vue:20 🎨 LobbyCreateJoin component mounted!
LobbyCreateJoin.vue:21 🔍 LobbyCreateJoin reactive values: {isLoading: false, hasCreateNewLobby: true, hasJoinExistingLobby: true}
MultiplayerView.vue:30 🎯 MultiplayerView mounted - cleaning up any existing lobby state
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
LobbyCreateJoin.vue:44 🏗️ LobbyCreateJoin.handleJoinLobby called with roomCode: HTM3F2
LobbyCreateJoin.vue:52 🚀 Calling joinExistingLobby...
useLobby.ts:103 🚪 joinExistingLobby called with roomCode: HTM3F2
useLobby.ts:110 👤 Authenticated user: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
useLobby.ts:113 🧹 Cleaning up any existing lobby state before joining
useLobby.ts:374 🧹 Cleaning up lobby state and realtime subscriptions
useLobby.ts:384 🔄 Resetting lobby store
useLobby.ts:387 ✅ Cleanup completed
useLobby.ts:117 🏠 Leaving any existing lobbies in database before joining
queries.ts:543 🏠 leaveAllLobbies: Removing user from all lobbies: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
queries.ts:555 ✅ leaveAllLobbies: Successfully removed user from all lobbies
useLobby.ts:126 ⏳ Setting loading state to true
useLobby.ts:130 🔄 Calling joinLobby API...
queries.ts:422 🔍 joinLobby: Looking for lobby with code: HTM3F2
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:439 ✅ joinLobby: Found lobby: 528e2b9d-d916-4123-9c37-1e7aac193d23 status: waiting
queries.ts:445 🔍 joinLobby: Checking player capacity for lobby: 528e2b9d-d916-4123-9c37-1e7aac193d23
queries.ts:458 ✅ joinLobby: Current player count: 1
queries.ts:464 🔍 joinLobby: Checking if user already in lobby: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
queries.ts:497 📝 joinLobby: Adding player to lobby
queries.ts:515 ✅ joinLobby: Player added successfully: 81ba20c7-e9ca-4b1e-83f1-bf0cafddd744
realtime.ts:164 Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.
send @ @supabase_supabase-js.js?v=a926d579:2805
broadcastLobbyEvent @ realtime.ts:164
joinLobby @ queries.ts:520
await in joinLobby
joinExistingLobby @ useLobby.ts:131
await in joinExistingLobby
handleJoinLobby @ LobbyCreateJoin.vue:53
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:12326
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335Understand this warning
queries.ts:521 📢 Broadcasted player joined event for Anonymous
queries.ts:527 🎉 joinLobby: Successfully joined lobby: 528e2b9d-d916-4123-9c37-1e7aac193d23
useLobby.ts:137 ✅ joinLobby API returned: {lobbyId: '528e2b9d-d916-4123-9c37-1e7aac193d23', roomCode: 'HTM3F2', playerId: '81ba20c7-e9ca-4b1e-83f1-bf0cafddd744'}
useLobby.ts:139 📊 Fetching updated players list...
useLobby.ts:141 ✅ Got players list: 2 players
useLobby.ts:143 💾 Setting lobby and players in store...
lobbyStore.ts:26 🏪 STORE: setLobby called with: {lobby: {…}, player: {…}}
lobbyStore.ts:31 🏪 STORE: setLobby completed, currentLobby: Proxy(Object) {id: '528e2b9d-d916-4123-9c37-1e7aac193d23', room_code: 'HTM3F2', host_id: 'e9cf764e-2348-4a37-b593-fe4e2b0a02b9', status: 'waiting', current_round: 0, …}
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: []
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:146 ✅ Store updated successfully
useLobby.ts:149 🎯 About to setup realtime subscription for join...
useLobby.ts:256 🔌 Setting up realtime subscription for lobby: 528e2b9d-d916-4123-9c37-1e7aac193d23
realtime.ts:21 📡 Subscribing to channel: lobby:528e2b9d-d916-4123-9c37-1e7aac193d23
useLobby.ts:152 ✅ Realtime subscription setup completed for join
useLobby.ts:157 🎉 joinExistingLobby completed successfully
useLobby.ts:165 🔄 Setting loading state to false
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: Proxy(Object), player: Proxy(Object), playersCount: 2, players: Array(2)}
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:390 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: {playersCount: 2, players: Array(2)}
LobbyCreateJoin.vue:54 ✅ joinExistingLobby completed successfully
realtime.ts:129 📡 Channel subscription status for lobby:528e2b9d-d916-4123-9c37-1e7aac193d23: SUBSCRIBED 
realtime.ts:132 ✅ Successfully subscribed to lobby:528e2b9d-d916-4123-9c37-1e7aac193d23
LobbyWaitingRoom.vue:61 🎯 handleToggleReady called in component
useLobby.ts:171 🎯 toggleReady called
useLobby.ts:179 🎯 toggleReady: Setting ready state to true
queries.ts:698 📢 Broadcasted player ready event for 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 ready: true
useLobby.ts:187 ✅ toggleReady: updatePlayerReady completed
lobbyStore.ts:71 🏪 STORE: updatePlayerReady called for player 81ba20c7-e9ca-4b1e-83f1-bf0cafddd744 ready: true
lobbyStore.ts:78 🏪 STORE: updatePlayerReady completed - fresh array assigned
useLobby.ts:191 ✅ toggleReady: Local state updated
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: Proxy(Object), player: Proxy(Object), playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
realtime.ts:67 📢 REALTIME: Player ready status updated via broadcast {ready: true, userId: 'e9cf764e-2348-4a37-b593-fe4e2b0a02b9'}
realtime.ts:68 📢 REALTIME: About to call onPlayerReady callback with userId: e9cf764e-2348-4a37-b593-fe4e2b0a02b9
useLobby.ts:291 👥 REALTIME CALLBACK: Player ready status changed for player: e9cf764e-2348-4a37-b593-fe4e2b0a02b9
useLobby.ts:293 👥 REALTIME CALLBACK: About to refresh players list for lobby: 528e2b9d-d916-4123-9c37-1e7aac193d23
realtime.ts:71 📢 REALTIME: onPlayerReady callback called successfully
useLobby.ts:296 👥 REALTIME CALLBACK: Refreshed players after ready change: 2 players
useLobby.ts:297 👥 REALTIME CALLBACK: Player ready statuses: (2) [{…}, {…}]
useLobby.ts:299 👥 REALTIME CALLBACK: About to update store with players
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: (2) [{…}, {…}]
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:301 👥 REALTIME CALLBACK: Updated store after ready change - reactivity is automatic!
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: Proxy(Object), player: Proxy(Object), playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency...