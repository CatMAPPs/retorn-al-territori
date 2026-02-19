 useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: 
{isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:452 📤 useLobby returning actions only - state accessed via store directly
MultiplayerView.vue:36 🔍 lobbyStore reactive refs: 
{lobby: ObjectRefImpl, player: ObjectRefImpl, isLoading: ObjectRefImpl}
MultiplayerView.vue:37 🎯 MultiplayerView mounted, initial state: 
{lobby: null, player: null, isLoading: false}
MultiplayerView.vue:45 🎯 MultiplayerView store changed: 
{lobby: null, player: null, playersCount: 0, players: Array(0)}
MultiplayerView.vue:55 🎯 MultiplayerView: Lobby status changed: undefined → undefined
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: 
{isLoading: false, currentLobby: null, hasSetLoading: true}
useLobby.ts:452 📤 useLobby returning actions only - state accessed via store directly
LobbyCreateJoin.vue:20 🎨 LobbyCreateJoin component mounted!
LobbyCreateJoin.vue:21 🔍 LobbyCreateJoin reactive values: 
{isLoading: false, hasCreateNewLobby: true, hasJoinExistingLobby: true}
MultiplayerView.vue:30 🎯 MultiplayerView mounted - cleaning up any existing lobby state
MultiplayerView.vue:45 🎯 MultiplayerView store changed: 
{lobby: null, player: null, playersCount: 0, players: Array(0)}
authStore.ts:47 👂 Setting up auth state listener...
authStore.ts:73 ✅ Auth store initialized
authStore.ts:49 🔄 Auth state change: INITIAL_SESSION Session exists
LobbyCreateJoin.vue:44 🏗️ LobbyCreateJoin.handleJoinLobby called with roomCode: 7XJXLT
LobbyCreateJoin.vue:52 🚀 Calling joinExistingLobby...
useLobby.ts:103 🚪 joinExistingLobby called with roomCode: 7XJXLT
useLobby.ts:110 👤 Authenticated user: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
useLobby.ts:113 🧹 Cleaning up any existing lobby state before joining
useLobby.ts:436 🧹 Cleaning up lobby state and realtime subscriptions
useLobby.ts:446 🔄 Resetting lobby store
useLobby.ts:449 ✅ Cleanup completed
useLobby.ts:120 ⏳ Setting loading state to true
useLobby.ts:124 🔄 Calling joinLobby API...
queries.ts:422 🔍 joinLobby: Looking for lobby with code: 7XJXLT
MultiplayerView.vue:45 🎯 MultiplayerView store changed: 
{lobby: null, player: null, playersCount: 0, players: Array(0)}
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:439 ✅ joinLobby: Found lobby: fa74972d-4081-4876-b361-f3e3caa47160 status: waiting
queries.ts:445 🔍 joinLobby: Checking player capacity for lobby: fa74972d-4081-4876-b361-f3e3caa47160
queries.ts:458 ✅ joinLobby: Current player count: 1
queries.ts:464 🔍 joinLobby: Checking if user already in lobby: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
queries.ts:497 📝 joinLobby: Adding player to lobby
queries.ts:515 ✅ joinLobby: Player added successfully: 84f50583-b1c0-4d65-9cf0-5892523feb70
realtime.ts:202 Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.
queries.ts:521 📢 Broadcasted player joined event for Anonymous
queries.ts:527 🎉 joinLobby: Successfully joined lobby: fa74972d-4081-4876-b361-f3e3caa47160
useLobby.ts:131 ✅ joinLobby API returned: 
{lobbyId: 'fa74972d-4081-4876-b361-f3e3caa47160', roomCode: '7XJXLT', playerId: '84f50583-b1c0-4d65-9cf0-5892523feb70'}
useLobby.ts:133 📊 Fetching updated players list...
useLobby.ts:135 ✅ Got players list: 2 players
useLobby.ts:137 💾 Setting lobby and players in store...
lobbyStore.ts:26 🏪 STORE: setLobby called with: 
{lobby: {…}, player: {…}}
lobbyStore.ts:31 🏪 STORE: setLobby completed, currentLobby: 
Proxy(Object) {id: 'fa74972d-4081-4876-b361-f3e3caa47160', room_code: '7XJXLT', host_id: '360c97e2-504f-420e-a903-3dd272eed80d', status: 'waiting', current_round: 0, …}
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: 
[]
lobbyStore.ts:37 🏪 STORE: New players: 
(2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:140 ✅ Store updated successfully
useLobby.ts:143 🎯 About to setup realtime subscription for join...
useLobby.ts:268 🔌 Setting up realtime subscription for lobby: fa74972d-4081-4876-b361-f3e3caa47160
realtime.ts:21 📡 Subscribing to channel: lobby:fa74972d-4081-4876-b361-f3e3caa47160
useLobby.ts:146 ✅ Realtime subscription setup completed for join
useLobby.ts:151 🎉 joinExistingLobby completed successfully
useLobby.ts:159 🔄 Setting loading state to false
MultiplayerView.vue:45 🎯 MultiplayerView store changed: 
{lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:55 🎯 MultiplayerView: Lobby status changed: undefined → waiting
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: 
{isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:452 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: 
{playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: 
(2) [{…}, {…}]
LobbyCreateJoin.vue:54 ✅ joinExistingLobby completed successfully
realtime.ts:153 📡 Channel subscription status for lobby:fa74972d-4081-4876-b361-f3e3caa47160: SUBSCRIBED 
realtime.ts:156 ✅ Successfully subscribed to lobby:fa74972d-4081-4876-b361-f3e3caa47160
realtime.ts:176 🔗 Channel joined for lobby:fa74972d-4081-4876-b361-f3e3caa47160
realtime.ts:180 👋 Channel left for lobby:fa74972d-4081-4876-b361-f3e3caa47160
realtime.ts:184 💥 Channel system error for lobby:fa74972d-4081-4876-b361-f3e3caa47160: 
{message: 'Unable to subscribe to changes with given paramete…, "eq", "fa74972d-4081-4876-b361-f3e3caa47160"}]]', status: 'error', extension: 'postgres_changes', channel: 'lobby:fa74972d-4081-4876-b361-f3e3caa47160'}
LobbyWaitingRoom.vue:69 🎯 handleToggleReady called in component
useLobby.ts:165 🎯 toggleReady called
useLobby.ts:173 🎯 toggleReady: Current ready state: false → New state: true
useLobby.ts:176 ⚡ toggleReady: Applying optimistic local update
lobbyStore.ts:71 🏪 STORE: updatePlayerReady called for player 84f50583-b1c0-4d65-9cf0-5892523feb70 ready: true
lobbyStore.ts:78 🏪 STORE: updatePlayerReady completed - fresh array assigned
useLobby.ts:180 🔄 toggleReady: Updating database...
MultiplayerView.vue:45 🎯 MultiplayerView store changed: 
{lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: 
{old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: 
(2) [{…}, {…}]
queries.ts:708 📢 Broadcasted player ready event for 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 ready: true
useLobby.ts:187 ✅ toggleReady: Database update completed - optimistic update confirmed
﻿