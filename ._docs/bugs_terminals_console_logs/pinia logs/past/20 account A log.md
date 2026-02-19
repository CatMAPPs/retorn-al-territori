{54 logs ommited as unneccesary for current analysis}
LobbyCreateJoin.vue:37 ✅ createNewLobby completed successfully
realtime.ts:173 📡 Channel subscription status for lobby:7740ffab-ba33-48ca-8157-a37b7bc4b204: SUBSCRIBED 
realtime.ts:176 ✅ Successfully subscribed to lobby:7740ffab-ba33-48ca-8157-a37b7bc4b204
realtime.ts:196 🔗 Channel joined for lobby:7740ffab-ba33-48ca-8157-a37b7bc4b204
realtime.ts:200 👋 Channel left for lobby:7740ffab-ba33-48ca-8157-a37b7bc4b204
realtime.ts:204 💥 Channel system error for lobby:7740ffab-ba33-48ca-8157-a37b7bc4b204: {message: 'Unable to subscribe to changes with given paramete…, "eq", "7740ffab-ba33-48ca-8157-a37b7bc4b204"}]]', status: 'error', extension: 'postgres_changes', channel: 'lobby:7740ffab-ba33-48ca-8157-a37b7bc4b204'}
(anonymous) @ realtime.ts:204
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3002
_trigger @ @supabase_supabase-js.js?v=a926d579:2987
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
decode @ @supabase_supabase-js.js?v=a926d579:2038
_onConnMessage @ @supabase_supabase-js.js?v=a926d579:3494
conn.onmessage @ @supabase_supabase-js.js?v=a926d579:3547Understand this error
realtime.ts:61 📢 REALTIME: Player joined lobby via broadcast {connected: true, id: '7bd43a49-d4c2-46f4-ba4a-66a761ff5ea2', joined_at: '2025-11-09T08:57:26.324731+00:00', lobby_id: '7740ffab-ba33-48ca-8157-a37b7bc4b204', ready: false, …}
useLobby.ts:345 👥 REALTIME CALLBACK: Player joined, refreshing players list
useLobby.ts:349 👥 REALTIME CALLBACK: Got players from DB: 2
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: [{…}]
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:351 👥 REALTIME CALLBACK: Updated store with players
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(1), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: (2) [{…}, {…}]
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false {isHost: true, allPlayersReady: false, playerCount: 2}
realtime.ts:67 📢 REALTIME: Player ready status updated via broadcast {ready: true, userId: '360c97e2-504f-420e-a903-3dd272eed80d'}
realtime.ts:68 📢 REALTIME: About to call onPlayerReady callback with userId: 360c97e2-504f-420e-a903-3dd272eed80d
useLobby.ts:368 👥 REALTIME CALLBACK: Player ready status changed for player: 360c97e2-504f-420e-a903-3dd272eed80d
useLobby.ts:370 👥 REALTIME CALLBACK: About to refresh players list for lobby: 7740ffab-ba33-48ca-8157-a37b7bc4b204
realtime.ts:71 📢 REALTIME: onPlayerReady callback called successfully
useLobby.ts:373 👥 REALTIME CALLBACK: Server players: (2) [{…}, {…}]
useLobby.ts:388 👥 REALTIME CALLBACK: Current user optimistic state - server: false local: false
useLobby.ts:400 👥 REALTIME CALLBACK: Final reconciled players: (2) [{…}, {…}]
useLobby.ts:402 👥 REALTIME CALLBACK: About to update store with reconciled players
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: (2) [{…}, {…}]
lobbyStore.ts:37 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:404 👥 REALTIME CALLBACK: Updated store after ready change - reactivity is automatic!
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: (2) [{…}, {…}]
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false {isHost: true, allPlayersReady: false, playerCount: 2}
LobbyWaitingRoom.vue:69 🎯 handleToggleReady called in component
useLobby.ts:165 🎯 toggleReady called
useLobby.ts:173 🎯 toggleReady: Current ready state: false → New state: true
useLobby.ts:176 ⚡ toggleReady: Applying optimistic local update
lobbyStore.ts:71 🏪 STORE: updatePlayerReady called for player c74610d4-462f-479d-b46a-39b7eb1efd64 ready: true
lobbyStore.ts:78 🏪 STORE: updatePlayerReady completed - fresh array assigned
useLobby.ts:180 🔄 toggleReady: Updating database...
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: true players: (2) [{…}, {…}]
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: true {isHost: true, allPlayersReady: true, playerCount: 2}
queries.ts:731 📢 Broadcasted player ready event for 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 ready: true
useLobby.ts:187 ✅ toggleReady: Database update completed - optimistic update confirmed
LobbyWaitingRoom.vue:74 🎮 LobbyWaitingRoom: Start Game button clicked
LobbyWaitingRoom.vue:75 🎮 LobbyWaitingRoom: Current state: {isHost: true, allPlayersReady: true, canStartGame: true, players: Proxy(Array)}
useLobby.ts:203 🎮 startMultiplayerGame called for lobby: 7740ffab-ba33-48ca-8157-a37b7bc4b204
useLobby.ts:206 ⏳ Setting loading state for game start
useLobby.ts:210 🚀 Calling startGame API...
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:617 🎮 Updating lobby status to in_progress...
queries.ts:633 ✅ Lobby status updated successfully
queries.ts:644 📢 Broadcasted game started event for lobby: 7740ffab-ba33-48ca-8157-a37b7bc4b204
useLobby.ts:212 ✅ startGame API completed - game started successfully!
useLobby.ts:213 ⏳ Waiting for realtime status update to transition UI...
useLobby.ts:218 ⏰ Realtime transition timeout - forcing game start manually
(anonymous) @ useLobby.ts:218
setTimeout
startMultiplayerGame @ useLobby.ts:216
await in startMultiplayerGame
handleStartGame @ LobbyWaitingRoom.vue:81
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
emit @ chunk-LG6AQRJS.js?v=a926d579:8589
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:10300
handleClick @ Button.vue:98
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335Understand this warning
useLobby.ts:225 🔄 Fallback: Manually updating lobby status to in_progress
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: waiting → in_progress
MultiplayerView.vue:58 🎮 MultiplayerView: Lobby status is now in_progress - should show game screen
useLobby.ts:235 ✅ Fallback game start completed
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:524 📤 useLobby returning actions only - state accessed via store directly
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:181 🗺️ Map clicked: Proxy(Object) {lat: 42.313877566161864, lon: -3.8671875000000004} hasSubmitted: false
LobbyGameplay.vue:185 📍 Set guessedLat: 42.313877566161864 guessedLon: -3.8671875000000004
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 1741, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 1741, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 1741, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 1741, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 1741, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 1741, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 1741, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 1741, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 1741, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 1741, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 1741, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 1741, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 1741, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 1741, …}
LobbyGameplay.vue:99 🎯 handleSubmitGuess called
LobbyGameplay.vue:100 canSubmit: true currentFigure: true
LobbyGameplay.vue:127 ✅ Client-side validation passed: {lat: 42.313877566161864, lon: -3.8671875000000004, year: 1741}
LobbyGameplay.vue:130 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:156 📊 Calculated scores: {spatial: 738, temporal: 730, name: 0, speed: 20, total: 1488}
queries.ts:688 📢 Broadcast sent for submission: 3492cf1b-fce1-4f6d-9ce0-e386c3cdb0c9
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: true, guessedLat: 42.313877566161864, guessedLon: -3.8671875000000004, guessedYear: 1741, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '6774e5e2-7830-4a3d-960b-ea4103bb0a23', guessed_lat: 7.27529233637217, guessed_lon: 22.1484375, guessed_name: 'Nikola Tesla', guessed_year: 1726, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:466 📨 Submission received: {figure_id: '6774e5e2-7830-4a3d-960b-ea4103bb0a23', guessed_lat: 7.27529233637217, guessed_lon: 22.1484375, guessed_name: 'Nikola Tesla', guessed_year: 1726, …}
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
useLobby.ts:470 📊 Updated submissions: 2 players: 2
useLobby.ts:477 🎯 All players submitted - ending round
useLobby.ts:35 🧹 Cleaning up realtime subscription
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency...

