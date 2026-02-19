
useLobby.ts:19 🏗️ useLobby composable called
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
LobbyCreateJoin.vue:32 🏗️ LobbyCreateJoin.handleCreateLobby called!
LobbyCreateJoin.vue:33 🔍 Component state: Object
LobbyCreateJoin.vue:35 🚀 Calling createNewLobby...
useLobby.ts:42 🎯 createNewLobby called - checking auth...
useLobby.ts:44 👤 Auth user: Object
useLobby.ts:52 ⏳ Setting loading state...
useLobby.ts:56 🏗️ Creating lobby for user: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 test11
useLobby.ts:57 🔄 About to call createLobby...
useLobby.ts:34 🧹 Cleaning up realtime subscription
useLobby.ts:59 ✅ createLobby returned: Object
useLobby.ts:67 💾 About to call setLobby...
lobbyStore.ts:26 🏪 STORE: setLobby called with: Object
lobbyStore.ts:31 🏪 STORE: setLobby completed, currentLobby: Proxy(Object)
useLobby.ts:69 👥 About to call updatePlayers...
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 1 players
lobbyStore.ts:36 🏪 STORE: Current players: Array(0)
lobbyStore.ts:37 🏪 STORE: New players: Array(1)
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:71 ✅ Store operations completed - reactivity is automatic!
useLobby.ts:74 🎯 About to setup realtime subscription...
useLobby.ts:237 🔌 Setting up realtime subscription for lobby: 2e2439f1-c360-4db3-9aa3-c6b05b84cec5
realtime.ts:21 📡 Subscribing to channel: lobby:2e2439f1-c360-4db3-9aa3-c6b05b84cec5
useLobby.ts:77 ✅ Realtime subscription setup completed
MultiplayerView.vue:45 🎯 MultiplayerView store changed: Object
useLobby.ts:19 🏗️ useLobby composable called
useLobby.ts:22 🏪 Initializing lobbyStore...
useLobby.ts:24 🏪 lobbyStore initialized: Object
useLobby.ts:363 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: Object
LobbyCreateJoin.vue:37 ✅ createNewLobby completed successfully
realtime.ts:129 📡 Channel subscription status for lobby:2e2439f1-c360-4db3-9aa3-c6b05b84cec5: SUBSCRIBED
realtime.ts:131 ✅ Successfully subscribed to lobby:2e2439f1-c360-4db3-9aa3-c6b05b84cec5
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency...
realtime.ts:129 📡 Channel subscription status for lobby:2e2439f1-c360-4db3-9aa3-c6b05b84cec5: CHANNEL_ERROR
realtime.ts:133 ❌ Channel error for lobby:2e2439f1-c360-4db3-9aa3-c6b05b84cec5
(anonymous) @ realtime.ts:133Understand this error
LobbyWaitingRoom.vue:61 🎯 handleToggleReady called in component
useLobby.ts:152 🎯 toggleReady called
useLobby.ts:160 🎯 toggleReady: Setting ready state to true
LobbyWaitingRoom.vue:61 🎯 handleToggleReady called in component
useLobby.ts:152 🎯 toggleReady called
useLobby.ts:160 🎯 toggleReady: Setting ready state to true