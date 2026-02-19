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
useLobby.ts:110 👤 Authenticated user: 360c97e2-504f-420e-a903-3dd272eed80d
useLobby.ts:113 🧹 Cleaning up any existing lobby state before joining
useLobby.ts:400 🧹 Cleaning up lobby state and realtime subscriptions
useLobby.ts:410 🔄 Resetting lobby store
useLobby.ts:413 ✅ Cleanup completed
useLobby.ts:120 ⏳ Setting loading state to true
useLobby.ts:124 🔄 Calling joinLobby API...
queries.ts:422 🔍 joinLobby: Looking for lobby with code: JXM983
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: null, player: null, playersCount: 0, players: Array(0)}
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:439 ✅ joinLobby: Found lobby: b1a03c09-ae3c-4ddb-9b95-ac5ae4acf1ff status: in_progress
queries.ts:533 💥 joinLobby: Unexpected error: Error: Game has already started
    at joinLobby (queries.ts:442:13)
    at async joinExistingLobby (useLobby.ts:125:33)
    at async handleJoinLobby (LobbyCreateJoin.vue:53:5)
joinLobby @ queries.ts:533
await in joinLobby
joinExistingLobby @ useLobby.ts:125
handleJoinLobby @ LobbyCreateJoin.vue:53
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:12326
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335Understand this error
useLobby.ts:155 ❌ joinExistingLobby failed: Game has already started
joinExistingLobby @ useLobby.ts:155
await in joinExistingLobby
handleJoinLobby @ LobbyCreateJoin.vue:53
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:12326
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335Understand this error
useLobby.ts:159 🔄 Setting loading state to false
LobbyCreateJoin.vue:56 ❌ joinExistingLobby failed: Error: Game has already started
    at joinLobby (queries.ts:442:13)
    at async joinExistingLobby (useLobby.ts:125:33)
    at async handleJoinLobby (LobbyCreateJoin.vue:53:5)