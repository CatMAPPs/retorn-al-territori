🏗️ useLobby composable called
useLobby.ts:22 🏪 Initializing lobbyStore...
useLobby.ts:24 🏪 lobbyStore initialized: Object
useLobby.ts:363 📤 useLobby returning actions only - state accessed via store directly
MultiplayerView.vue:36 🔍 lobbyStore reactive refs: Object
MultiplayerView.vue:37 🎯 MultiplayerView mounted, initial state: Object
MultiplayerView.vue:45 🎯 MultiplayerView store changed: Object
useLobby.ts:19 🏗️ useLobby composable called
useLobby.ts:22 🏪 Initializing lobbyStore...
useLobby.ts:24 🏪 lobbyStore initialized: Object
useLobby.ts:363 📤 useLobby returning actions only - state accessed via store directly
LobbyCreateJoin.vue:20 🎨 LobbyCreateJoin component mounted!
LobbyCreateJoin.vue:21 🔍 LobbyCreateJoin reactive values: Object
MultiplayerView.vue:30 🎯 MultiplayerView mounted - cleaning up any existing lobby state
MultiplayerView.vue:45 🎯 MultiplayerView store changed: Object
LobbyCreateJoin.vue:44 🏗️ LobbyCreateJoin.handleJoinLobby called with roomCode: FEB5H6
LobbyCreateJoin.vue:52 🚀 Calling joinExistingLobby...
useLobby.ts:93 🚪 joinExistingLobby called with roomCode: FEB5H6
useLobby.ts:100 👤 Authenticated user: e9cf764e-2348-4a37-b593-fe4e2b0a02b9
useLobby.ts:103 🧹 Cleaning up any existing lobby state before joining
useLobby.ts:347 🧹 Cleaning up lobby state and realtime subscriptions
useLobby.ts:357 🔄 Resetting lobby store
useLobby.ts:360 ✅ Cleanup completed
useLobby.ts:107 ⏳ Setting loading state to true
useLobby.ts:111 🔄 Calling joinLobby API...
MultiplayerView.vue:45 🎯 MultiplayerView store changed: Object
useLobby.ts:34 🧹 Cleaning up realtime subscription
@supabase_supabase-js.js?v=a926d579:2805 Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.
send @ @supabase_supabase-js.js?v=a926d579:2805Understand this warning
queries.ts:480 📢 Broadcasted player joined event for Anonymous
useLobby.ts:118 ✅ joinLobby API returned: Object
useLobby.ts:120 📊 Fetching updated players list...
useLobby.ts:122 ✅ Got players list: 2 players
useLobby.ts:124 💾 Setting lobby and players in store...
lobbyStore.ts:26 🏪 STORE: setLobby called with: Object
lobbyStore.ts:31 🏪 STORE: setLobby completed, currentLobby: Proxy(Object)
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: Array(0)
lobbyStore.ts:37 🏪 STORE: New players: Array(2)
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:127 ✅ Store updated successfully
useLobby.ts:130 🎯 About to setup realtime subscription for join...
useLobby.ts:237 🔌 Setting up realtime subscription for lobby: 2e2439f1-c360-4db3-9aa3-c6b05b84cec5
realtime.ts:21 📡 Subscribing to channel: lobby:2e2439f1-c360-4db3-9aa3-c6b05b84cec5
useLobby.ts:133 ✅ Realtime subscription setup completed for join
useLobby.ts:138 🎉 joinExistingLobby completed successfully
useLobby.ts:146 🔄 Setting loading state to false
MultiplayerView.vue:45 🎯 MultiplayerView store changed: Object
useLobby.ts:19 🏗️ useLobby composable called
useLobby.ts:22 🏪 Initializing lobbyStore...
useLobby.ts:24 🏪 lobbyStore initialized: Object
useLobby.ts:363 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: Object
LobbyCreateJoin.vue:54 ✅ joinExistingLobby completed successfully
realtime.ts:129 📡 Channel subscription status for lobby:2e2439f1-c360-4db3-9aa3-c6b05b84cec5: SUBSCRIBED
realtime.ts:131 ✅ Successfully subscribed to lobby:2e2439f1-c360-4db3-9aa3-c6b05b84cec5
LobbyWaitingRoom.vue:61 🎯 handleToggleReady called in component
useLobby.ts:152 🎯 toggleReady called
useLobby.ts:160 🎯 toggleReady: Setting ready state to true
queries.ts:628 📢 Broadcasted player ready event for e9cf764e-2348-4a37-b593-fe4e2b0a02b9 ready: true
useLobby.ts:168 ✅ toggleReady: updatePlayerReady completed
lobbyStore.ts:71 🏪 STORE: updatePlayerReady called for player 4c07ef6a-5af5-473d-988d-0a88787fa054 ready: true
lobbyStore.ts:78 🏪 STORE: updatePlayerReady completed - fresh array assigned
useLobby.ts:172 ✅ toggleReady: Local state updated
MultiplayerView.vue:45 🎯 MultiplayerView store changed: Object
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: Object
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency...


