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
authStore.ts:47 👂 Setting up auth state listener...
authStore.ts:73 ✅ Auth store initialized
authStore.ts:49 🔄 Auth state change: INITIAL_SESSION Session exists
LobbyCreateJoin.vue:32 🏗️ LobbyCreateJoin.handleCreateLobby called!
LobbyCreateJoin.vue:33 🔍 Component state: {isLoading: false}
LobbyCreateJoin.vue:35 🚀 Calling createNewLobby...
useLobby.ts:43 🎯 createNewLobby called - checking auth...
useLobby.ts:45 👤 Auth user: {id: 'e9cf764e-2348-4a37-b593-fe4e2b0a02b9', email: 'test12@yahoo.com', username: 'test12', avatar_url: null, created_at: '2025-11-08T18:38:22.928776+00:00', …}
useLobby.ts:53 ⏳ Setting loading state...
useLobby.ts:58 🧹 Leaving any existing lobbies before creating new one
queries.ts:543 🏠 leaveAllLobbies: Removing user from all lobbies: e9cf764e-2348-4a37-b593-fe4e2b0a02b9
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:555 ✅ leaveAllLobbies: Successfully removed user from all lobbies
useLobby.ts:66 🏗️ Creating lobby for user: e9cf764e-2348-4a37-b593-fe4e2b0a02b9 test12
useLobby.ts:67 🔄 About to call createLobby...
useLobby.ts:69 ✅ createLobby returned: {id: '528e2b9d-d916-4123-9c37-1e7aac193d23', room_code: 'HTM3F2', host_id: 'e9cf764e-2348-4a37-b593-fe4e2b0a02b9', status: 'waiting', current_round: 0, …}
useLobby.ts:77 💾 About to call setLobby...
lobbyStore.ts:26 🏪 STORE: setLobby called with: {lobby: {…}, player: {…}}
lobbyStore.ts:31 🏪 STORE: setLobby completed, currentLobby: Proxy(Object) {id: '528e2b9d-d916-4123-9c37-1e7aac193d23', room_code: 'HTM3F2', host_id: 'e9cf764e-2348-4a37-b593-fe4e2b0a02b9', status: 'waiting', current_round: 0, …}
useLobby.ts:79 👥 About to call updatePlayers...
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 1 players
lobbyStore.ts:36 🏪 STORE: Current players: []
lobbyStore.ts:37 🏪 STORE: New players: [{…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:81 ✅ Store operations completed - reactivity is automatic!
useLobby.ts:84 🎯 About to setup realtime subscription...
useLobby.ts:256 🔌 Setting up realtime subscription for lobby: 528e2b9d-d916-4123-9c37-1e7aac193d23
realtime.ts:21 📡 Subscribing to channel: lobby:528e2b9d-d916-4123-9c37-1e7aac193d23
useLobby.ts:87 ✅ Realtime subscription setup completed
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: Proxy(Object), player: Proxy(Object), playersCount: 1, players: Array(1)}
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:390 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: {playersCount: 1, players: Array(1)}
LobbyCreateJoin.vue:37 ✅ createNewLobby completed successfully
realtime.ts:129 📡 Channel subscription status for lobby:528e2b9d-d916-4123-9c37-1e7aac193d23: SUBSCRIBED 
realtime.ts:132 ✅ Successfully subscribed to lobby:528e2b9d-d916-4123-9c37-1e7aac193d23
realtime.ts:61 📢 REALTIME: Player joined lobby via broadcast {connected: true, id: '81ba20c7-e9ca-4b1e-83f1-bf0cafddd744', joined_at: '2025-11-08T19:02:18.325571+00:00', lobby_id: '528e2b9d-d916-4123-9c37-1e7aac193d23', ready: false, …}
useLobby.ts:268 👥 REALTIME CALLBACK: Player joined, refreshing players list
useLobby.ts:272 👥 REALTIME CALLBACK: Got players from DB: 2
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: [{…}]
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:274 👥 REALTIME CALLBACK: Updated store with players
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: Proxy(Object), player: Proxy(Object), playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(1), new: Array(2)}
realtime.ts:67 📢 REALTIME: Player ready status updated via broadcast {ready: true, userId: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
realtime.ts:68 📢 REALTIME: About to call onPlayerReady callback with userId: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
useLobby.ts:291 👥 REALTIME CALLBACK: Player ready status changed for player: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
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
LobbyWaitingRoom.vue:61 🎯 handleToggleReady called in component
useLobby.ts:171 🎯 toggleReady called
useLobby.ts:179 🎯 toggleReady: Setting ready state to true
queries.ts:698 📢 Broadcasted player ready event for e9cf764e-2348-4a37-b593-fe4e2b0a02b9 ready: true
useLobby.ts:187 ✅ toggleReady: updatePlayerReady completed
lobbyStore.ts:71 🏪 STORE: updatePlayerReady called for player cf34afb9-a9d7-4371-8649-1f92ed521c9e ready: true
lobbyStore.ts:78 🏪 STORE: updatePlayerReady completed - fresh array assigned
useLobby.ts:191 ✅ toggleReady: Local state updated
MultiplayerView.vue:45 🎯 MultiplayerView store changed: {lobby: Proxy(Object), player: Proxy(Object), playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
useLobby.ts:35 🧹 Cleaning up realtime subscription
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:390 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: {playersCount: 2, players: Array(2)}
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency...