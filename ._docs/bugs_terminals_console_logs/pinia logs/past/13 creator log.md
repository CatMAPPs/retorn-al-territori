
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: Object
useLobby.ts:490 📤 useLobby returning actions only - state accessed via store directly
MultiplayerView.vue:36 🔍 lobbyStore reactive refs: Object
MultiplayerView.vue:37 🎯 MultiplayerView mounted, initial state: Object
MultiplayerView.vue:45 🎯 MultiplayerView store changed: Object
MultiplayerView.vue:55 🎯 MultiplayerView: Lobby status changed: undefined → undefined
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: Object
useLobby.ts:490 📤 useLobby returning actions only - state accessed via store directly
LobbyCreateJoin.vue:20 🎨 LobbyCreateJoin component mounted!
LobbyCreateJoin.vue:21 🔍 LobbyCreateJoin reactive values: Object
MultiplayerView.vue:30 🎯 MultiplayerView mounted - cleaning up any existing lobby state
MultiplayerView.vue:45 🎯 MultiplayerView store changed: Object
LobbyCreateJoin.vue:32 🏗️ LobbyCreateJoin.handleCreateLobby called!
LobbyCreateJoin.vue:33 🔍 Component state: Object
LobbyCreateJoin.vue:35 🚀 Calling createNewLobby...
useLobby.ts:43 🎯 createNewLobby called - checking auth...
useLobby.ts:45 👤 Auth user: Object
useLobby.ts:53 ⏳ Setting loading state...
useLobby.ts:58 🧹 Leaving any existing lobbies before creating new one
queries.ts:543 🏠 leaveAllLobbies: Removing user from all lobbies: 360c97e2-504f-420e-a903-3dd272eed80d
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:555 ✅ leaveAllLobbies: Successfully removed user from all lobbies
useLobby.ts:66 🏗️ Creating lobby for user: 360c97e2-504f-420e-a903-3dd272eed80d test3
useLobby.ts:67 🔄 About to call createLobby...
useLobby.ts:69 ✅ createLobby returned: Object
useLobby.ts:77 💾 About to call setLobby...
lobbyStore.ts:26 🏪 STORE: setLobby called with: Object
lobbyStore.ts:31 🏪 STORE: setLobby completed, currentLobby: Proxy(Object)
useLobby.ts:79 👥 About to call updatePlayers...
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 1 players
lobbyStore.ts:36 🏪 STORE: Current players: Array(0)
lobbyStore.ts:37 🏪 STORE: New players: Array(1)
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:81 ✅ Store operations completed - reactivity is automatic!
useLobby.ts:84 🎯 About to setup realtime subscription...
useLobby.ts:306 🔌 Setting up realtime subscription for lobby: 26e7024a-172a-4dc8-94a2-7b9cb0df14c2
realtime.ts:21 📡 Subscribing to channel: lobby:26e7024a-172a-4dc8-94a2-7b9cb0df14c2
useLobby.ts:87 ✅ Realtime subscription setup completed
MultiplayerView.vue:45 🎯 MultiplayerView store changed: Object
MultiplayerView.vue:55 🎯 MultiplayerView: Lobby status changed: undefined → waiting
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: Object
useLobby.ts:490 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: Object
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: Array(1)
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false Object
LobbyCreateJoin.vue:37 ✅ createNewLobby completed successfully
realtime.ts:154 📡 Channel subscription status for lobby:26e7024a-172a-4dc8-94a2-7b9cb0df14c2: SUBSCRIBED 
realtime.ts:157 ✅ Successfully subscribed to lobby:26e7024a-172a-4dc8-94a2-7b9cb0df14c2
realtime.ts:177 🔗 Channel joined for lobby:26e7024a-172a-4dc8-94a2-7b9cb0df14c2
realtime.ts:181 👋 Channel left for lobby:26e7024a-172a-4dc8-94a2-7b9cb0df14c2
realtime.ts:185 💥 Channel system error for lobby:26e7024a-172a-4dc8-94a2-7b9cb0df14c2: Object
(anonymous) @ realtime.ts:185Understand this error
realtime.ts:61 📢 REALTIME: Player joined lobby via broadcast Object
useLobby.ts:318 👥 REALTIME CALLBACK: Player joined, refreshing players list
useLobby.ts:322 👥 REALTIME CALLBACK: Got players from DB: 2
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: Array(1)
lobbyStore.ts:37 🏪 STORE: New players: Array(2)
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:324 👥 REALTIME CALLBACK: Updated store with players
MultiplayerView.vue:45 🎯 MultiplayerView store changed: Object
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: Object
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: Array(2)
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false Object
realtime.ts:67 📢 REALTIME: Player ready status updated via broadcast Object
realtime.ts:68 📢 REALTIME: About to call onPlayerReady callback with userId: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
useLobby.ts:341 👥 REALTIME CALLBACK: Player ready status changed for player: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
useLobby.ts:343 👥 REALTIME CALLBACK: About to refresh players list for lobby: 26e7024a-172a-4dc8-94a2-7b9cb0df14c2
realtime.ts:71 📢 REALTIME: onPlayerReady callback called successfully
useLobby.ts:346 👥 REALTIME CALLBACK: Server players: Array(2)
useLobby.ts:361 👥 REALTIME CALLBACK: Current user optimistic state - server: false local: false
useLobby.ts:373 👥 REALTIME CALLBACK: Final reconciled players: Array(2)
useLobby.ts:375 👥 REALTIME CALLBACK: About to update store with reconciled players
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: Array(2)
lobbyStore.ts:37 🏪 STORE: New players: Array(2)
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:377 👥 REALTIME CALLBACK: Updated store after ready change - reactivity is automatic!
MultiplayerView.vue:45 🎯 MultiplayerView store changed: Object
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: Object
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: Array(2)
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false Object
LobbyWaitingRoom.vue:69 🎯 handleToggleReady called in component
useLobby.ts:165 🎯 toggleReady called
useLobby.ts:173 🎯 toggleReady: Current ready state: false → New state: true
useLobby.ts:176 ⚡ toggleReady: Applying optimistic local update
lobbyStore.ts:71 🏪 STORE: updatePlayerReady called for player 8bf70fee-451d-436b-a058-7a3eea5b3063 ready: true
lobbyStore.ts:78 🏪 STORE: updatePlayerReady completed - fresh array assigned
useLobby.ts:180 🔄 toggleReady: Updating database...
MultiplayerView.vue:45 🎯 MultiplayerView store changed: Object
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: Object
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: true players: Array(2)
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: true Object
queries.ts:720 📢 Broadcasted player ready event for 360c97e2-504f-420e-a903-3dd272eed80d ready: true
useLobby.ts:187 ✅ toggleReady: Database update completed - optimistic update confirmed
LobbyWaitingRoom.vue:74 🎮 LobbyWaitingRoom: Start Game button clicked
LobbyWaitingRoom.vue:75 🎮 LobbyWaitingRoom: Current state: Object
useLobby.ts:203 🎮 startMultiplayerGame called for lobby: 26e7024a-172a-4dc8-94a2-7b9cb0df14c2
useLobby.ts:206 ⏳ Setting loading state for game start
useLobby.ts:210 🚀 Calling startGame API...
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:616 🎮 Updating lobby status to in_progress...
queries.ts:632 ✅ Lobby status updated successfully
queries.ts:643 📢 Broadcasted game started event for lobby: 26e7024a-172a-4dc8-94a2-7b9cb0df14c2
useLobby.ts:212 ✅ startGame API completed - game started successfully!
useLobby.ts:213 ⏳ Waiting for realtime status update to transition UI...
useLobby.ts:218 ⏰ Realtime transition timeout - forcing game start manually
(anonymous) @ useLobby.ts:218Understand this warning
useLobby.ts:225 🔄 Fallback: Manually updating lobby status to in_progress
MultiplayerView.vue:45 🎯 MultiplayerView store changed: Object
MultiplayerView.vue:55 🎯 MultiplayerView: Lobby status changed: waiting → in_progress
MultiplayerView.vue:57 🎮 MultiplayerView: Lobby status is now in_progress - should show game screen
useLobby.ts:235 ✅ Fallback game start completed
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: Object
useLobby.ts:490