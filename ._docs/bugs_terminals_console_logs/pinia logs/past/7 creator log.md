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
authStore.ts:47 👂 Setting up auth state listener...
authStore.ts:73 ✅ Auth store initialized
authStore.ts:49 🔄 Auth state change: INITIAL_SESSION Session exists
LobbyCreateJoin.vue:32 🏗️ LobbyCreateJoin.handleCreateLobby called!
LobbyCreateJoin.vue:33 🔍 Component state: {isLoading: false}
LobbyCreateJoin.vue:35 🚀 Calling createNewLobby...
useLobby.ts:42 🎯 createNewLobby called - checking auth...
useLobby.ts:44 👤 Auth user: {id: '2ac7adfc-3034-4e31-b812-72644d614b21', email: 'test@yahoo.com', username: 'testboyo', avatar_url: null, created_at: '2025-11-04T06:51:40.027271+00:00', …}
useLobby.ts:52 ⏳ Setting loading state...
useLobby.ts:56 🏗️ Creating lobby for user: 2ac7adfc-3034-4e31-b812-72644d614b21 testboyo
useLobby.ts:57 🔄 About to call createLobby...
useLobby.ts:34 🧹 Cleaning up realtime subscription
useLobby.ts:59 ✅ createLobby returned: {id: 'e5707697-6567-4744-babe-cbbef5a30206', room_code: 'CVWMJ8', host_id: '2ac7adfc-3034-4e31-b812-72644d614b21', status: 'waiting', current_round: 0, …}
useLobby.ts:67 💾 About to call setLobby...
lobbyStore.ts:26 🏪 STORE: setLobby called with: {lobby: {…}, player: {…}}
lobbyStore.ts:31 🏪 STORE: setLobby completed, currentLobby: Proxy(Object) {id: 'e5707697-6567-4744-babe-cbbef5a30206', room_code: 'CVWMJ8', host_id: '2ac7adfc-3034-4e31-b812-72644d614b21', status: 'waiting', current_round: 0, …}
useLobby.ts:69 👥 About to call updatePlayers...
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 1 players
lobbyStore.ts:36 🏪 STORE: Current players: []length: 0[[Prototype]]: Array(0)
lobbyStore.ts:37 🏪 STORE: New players: [{…}]0: {id: '3be82515-8b69-442b-a489-e629f1b39013', user_id: '2ac7adfc-3034-4e31-b812-72644d614b21', ready: false}length: 1[[Prototype]]: Array(0)
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:71 ✅ Store operations completed - reactivity is automatic!
useLobby.ts:74 🎯 About to setup realtime subscription...
useLobby.ts:233 🔌 Setting up realtime subscription for lobby: e5707697-6567-4744-babe-cbbef5a30206
realtime.ts:21 📡 Subscribing to channel: lobby:e5707697-6567-4744-babe-cbbef5a30206
useLobby.ts:77 ✅ Realtime subscription setup completed
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: Proxy(Object), player: Proxy(Object), playersCount: 1, players: Array(1)}lobby: Proxy(Object) {id: 'e5707697-6567-4744-babe-cbbef5a30206', room_code: 'CVWMJ8', host_id: '2ac7adfc-3034-4e31-b812-72644d614b21', status: 'waiting', current_round: 0, …}player: Proxy(Object) {id: '3be82515-8b69-442b-a489-e629f1b39013', lobby_id: 'e5707697-6567-4744-babe-cbbef5a30206', user_id: '2ac7adfc-3034-4e31-b812-72644d614b21', username: 'testboyo', score: 0, …}players: [{…}]playersCount: 1[[Prototype]]: Object
useLobby.ts:19 🏗️ useLobby composable called
useLobby.ts:22 🏪 Initializing lobbyStore...
useLobby.ts:24 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}currentLobby: Proxy(Object) {id: 'e5707697-6567-4744-babe-cbbef5a30206', room_code: 'CVWMJ8', host_id: '2ac7adfc-3034-4e31-b812-72644d614b21', status: 'waiting', current_round: 0, …}hasSetLoading: trueisLoading: false[[Prototype]]: Object
useLobby.ts:357 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: {playersCount: 1, players: Array(1)}players: [{…}]playersCount: 1[[Prototype]]: Object
LobbyCreateJoin.vue:37 ✅ createNewLobby completed successfully
realtime.ts:132 📡 Channel subscription status for lobby:e5707697-6567-4744-babe-cbbef5a30206: SUBSCRIBED
realtime.ts:134 ✅ Successfully subscribed to lobby:e5707697-6567-4744-babe-cbbef5a30206
realtime.ts:55 📢 REALTIME: Player joined lobby via broadcast {connected: true, id: 'f45c9c19-5ad9-47aa-82e3-0ec73af38852', joined_at: '2025-11-08T08:14:34.687243+00:00', lobby_id: 'e5707697-6567-4744-babe-cbbef5a30206', ready: false, …}
useLobby.ts:237 👥 REALTIME CALLBACK: Player joined, refreshing players list
useLobby.ts:241 👥 REALTIME CALLBACK: Got players from DB: 2
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: [{…}]0: {id: '3be82515-8b69-442b-a489-e629f1b39013', user_id: '2ac7adfc-3034-4e31-b812-72644d614b21', ready: false}length: 1[[Prototype]]: Array(0)
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]0: {id: '3be82515-8b69-442b-a489-e629f1b39013', user_id: '2ac7adfc-3034-4e31-b812-72644d614b21', ready: false}1: {id: 'f45c9c19-5ad9-47aa-82e3-0ec73af38852', user_id: 'a51c9365-8ece-4a8d-a052-2e41a2fef6b3', ready: false}length: 2[[Prototype]]: Array(0)
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:243 👥 REALTIME CALLBACK: Updated store with players
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: Proxy(Object), player: Proxy(Object), playersCount: 2, players: Array(2)}lobby: Proxy(Object) {id: 'e5707697-6567-4744-babe-cbbef5a30206', room_code: 'CVWMJ8', host_id: '2ac7adfc-3034-4e31-b812-72644d614b21', status: 'waiting', current_round: 0, …}player: Proxy(Object) {id: '3be82515-8b69-442b-a489-e629f1b39013', lobby_id: 'e5707697-6567-4744-babe-cbbef5a30206', user_id: '2ac7adfc-3034-4e31-b812-72644d614b21', username: 'testboyo', score: 0, …}players: (2) [{…}, {…}]playersCount: 2[[Prototype]]: Object
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(1), new: Array(2)}new: (2) [{…}, {…}]old: [{…}][[Prototype]]: Object
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency...
LobbyWaitingRoom.vue:61 🎯 handleToggleReady called in component
useLobby.ts:148 🎯 toggleReady called
useLobby.ts:156 🎯 toggleReady: Setting ready state to true
realtime.ts:132 📡 Channel subscription status for lobby:e5707697-6567-4744-babe-cbbef5a30206: CLOSED
realtime.ts:140 🔌 Channel closed for lobby:e5707697-6567-4744-babe-cbbef5a30206