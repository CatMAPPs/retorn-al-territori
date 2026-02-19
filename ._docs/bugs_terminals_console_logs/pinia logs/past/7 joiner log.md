👂 Setting up auth state listener...
authStore.ts:73 ✅ Auth store initialized
authStore.ts:49 🔄 Auth state change: INITIAL_SESSION Session exists
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
LobbyCreateJoin.vue:44 🏗️ LobbyCreateJoin.handleJoinLobby called with roomCode: CVWMJ8
LobbyCreateJoin.vue:52 🚀 Calling joinExistingLobby...
useLobby.ts:93 🚪 joinExistingLobby called with roomCode: CVWMJ8
useLobby.ts:100 👤 Authenticated user: a51c9365-8ece-4a8d-a052-2e41a2fef6b3
useLobby.ts:103 ⏳ Setting loading state to true
useLobby.ts:107 🔄 Calling joinLobby API...
useLobby.ts:34 🧹 Cleaning up realtime subscription
realtime.ts:159 Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.
send @ @supabase_supabase-js.js?v=a926d579:2805
broadcastLobbyEvent @ realtime.ts:159
joinLobby @ queries.ts:479
await in joinLobby
joinExistingLobby @ useLobby.ts:108
handleJoinLobby @ LobbyCreateJoin.vue:53
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:12326
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335Understand this warning
queries.ts:480 📢 Broadcasted player joined event for Anonymous
useLobby.ts:114 ✅ joinLobby API returned: {lobbyId: 'e5707697-6567-4744-babe-cbbef5a30206', roomCode: 'CVWMJ8', playerId: 'f45c9c19-5ad9-47aa-82e3-0ec73af38852'}
useLobby.ts:116 📊 Fetching updated players list...
useLobby.ts:118 ✅ Got players list: 2 players
useLobby.ts:120 💾 Setting lobby and players in store...
lobbyStore.ts:26 🏪 STORE: setLobby called with: {lobby: {…}, player: {…}}
lobbyStore.ts:31 🏪 STORE: setLobby completed, currentLobby: Proxy(Object) {id: 'e5707697-6567-4744-babe-cbbef5a30206', room_code: 'CVWMJ8', host_id: '2ac7adfc-3034-4e31-b812-72644d614b21', status: 'waiting', current_round: 0, …}
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: []
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:123 ✅ Store updated successfully
useLobby.ts:126 🎯 About to setup realtime subscription for join...
useLobby.ts:233 🔌 Setting up realtime subscription for lobby: e5707697-6567-4744-babe-cbbef5a30206
realtime.ts:21 📡 Subscribing to channel: lobby:e5707697-6567-4744-babe-cbbef5a30206
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
realtime.ts:132 📡 Channel subscription status for lobby:e5707697-6567-4744-babe-cbbef5a30206: SUBSCRIBED
realtime.ts:134 ✅ Successfully subscribed to lobby:e5707697-6567-4744-babe-cbbef5a30206
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency...
LobbyWaitingRoom.vue:61 🎯 handleToggleReady called in component
useLobby.ts:148 🎯 toggleReady called
useLobby.ts:156 🎯 toggleReady: Setting ready state to true
LobbyWaitingRoom.vue:61 🎯 handleToggleReady called in component
useLobby.ts:148 🎯 toggleReady called
useLobby.ts:156 🎯 toggleReady: Setting ready state to true
realtime.ts:132 📡 Channel subscription status for lobby:e5707697-6567-4744-babe-cbbef5a30206: CLOSED
realtime.ts:140 🔌 Channel closed for lobby:e5707697-6567-4744-babe-cbbef5a30206