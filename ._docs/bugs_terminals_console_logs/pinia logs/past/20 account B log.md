{119 logs ommited as unneccesary for current analysis}
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false {isHost: false, allPlayersReady: true, playerCount: 2}
realtime.ts:79 📢 REALTIME: Game started via broadcast {current_round: 1, lobbyId: '7740ffab-ba33-48ca-8157-a37b7bc4b204', status: 'in_progress', timestamp: '2025-11-09T08:59:02.596Z'}
realtime.ts:80 🎮 REALTIME: Game started broadcast received - calling onGameStarted
useLobby.ts:411 🎮 REALTIME CALLBACK: onGameStarted triggered for lobby: 7740ffab-ba33-48ca-8157-a37b7bc4b204
useLobby.ts:414 📊 Fetching updated lobby with players...
realtime.ts:83 🎮 REALTIME: onGameStarted callback completed successfully
useLobby.ts:416 ✅ Got updated lobby - status: in_progress current_round: 1
useLobby.ts:418 💾 Updating lobby status in store...
useLobby.ts:420 ✅ Lobby status updated to: in_progress
useLobby.ts:422 🎯 Loading figures for game...
useLobby.ts:425 📖 Loading figure: 6774e5e2-7830-4a3d-960b-ea4103bb0a23
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: waiting → in_progress
MultiplayerView.vue:58 🎮 MultiplayerView: Lobby status is now in_progress - should show game screen
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:524 📤 useLobby returning actions only - state accessed via store directly
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
useLobby.ts:35 🧹 Cleaning up realtime subscription
useLobby.ts:425 📖 Loading figure: 2bdee868-9128-4389-8cd4-ff272d0f3038
useLobby.ts:425 📖 Loading figure: d3556929-f466-468f-808f-de23560f0e21
useLobby.ts:425 📖 Loading figure: 71855ba9-176a-4d37-8e66-ad7d76a030bc
useLobby.ts:425 📖 Loading figure: f42b31f2-0c7b-4ea7-88d0-0896679aa765
useLobby.ts:425 📖 Loading figure: 8060d265-cd30-46a3-af00-aebe877c5f8c
useLobby.ts:425 📖 Loading figure: 571821e2-712f-4253-b9e2-acd347bb8910
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
useLobby.ts:425 📖 Loading figure: 53190f65-066e-4ea7-911b-7cc31946dd66
useLobby.ts:425 📖 Loading figure: 6c221933-363d-45c0-bde9-97ae38323368
useLobby.ts:425 📖 Loading figure: 0b2c1e3e-d069-406b-9986-f18aaac83c5b
useLobby.ts:429 ✅ Loaded 10 figures
useLobby.ts:431 💾 Setting figures in store...
useLobby.ts:434 🎲 Starting first round...
useLobby.ts:437 ✅ Started round 1 with figure: Pablo Picasso
useLobby.ts:442 🔄 Setting loading to false after game start
useLobby.ts:445 🎮 Game started successfully!
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:181 🗺️ Map clicked: Proxy(Object) {lat: 7.27529233637217, lon: 22.148437500000004} hasSubmitted: false
LobbyGameplay.vue:185 📍 Set guessedLat: 7.27529233637217 guessedLon: 22.148437500000004
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 7.27529233637217, guessedLon: 22.148437500000004, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 7.27529233637217, guessedLon: 22.148437500000004, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 7.27529233637217, guessedLon: 22.148437500000004, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 7.27529233637217, guessedLon: 22.148437500000004, guessedYear: 0, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 7.27529233637217, guessedLon: 22.148437500000004, guessedYear: 1716, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 7.27529233637217, guessedLon: 22.148437500000004, guessedYear: 1726, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 7.27529233637217, guessedLon: 22.148437500000004, guessedYear: 1726, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 7.27529233637217, guessedLon: 22.148437500000004, guessedYear: 1726, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 7.27529233637217, guessedLon: 22.148437500000004, guessedYear: 1726, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 7.27529233637217, guessedLon: 22.148437500000004, guessedYear: 1726, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 7.27529233637217, guessedLon: 22.148437500000004, guessedYear: 1726, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 7.27529233637217, guessedLon: 22.148437500000004, guessedYear: 1726, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 7.27529233637217, guessedLon: 22.148437500000004, guessedYear: 1726, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '6774e5e2-7830-4a3d-960b-ea4103bb0a23', guessed_lat: 42.3138775661619, guessed_lon: -3.8671875, guessed_name: 'winny churchill', guessed_year: 1741, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:466 📨 Submission received: {figure_id: '6774e5e2-7830-4a3d-960b-ea4103bb0a23', guessed_lat: 42.3138775661619, guessed_lon: -3.8671875, guessed_name: 'winny churchill', guessed_year: 1741, …}
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
useLobby.ts:470 📊 Updated submissions: 1 players: 2
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 7.27529233637217, guessedLon: 22.148437500000004, guessedYear: 1726, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 7.27529233637217, guessedLon: 22.148437500000004, guessedYear: 1726, …}
LobbyGameplay.vue:59 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 7.27529233637217, guessedLon: 22.148437500000004, guessedYear: 1726, …}
LobbyGameplay.vue:99 🎯 handleSubmitGuess called
LobbyGameplay.vue:100 canSubmit: true currentFigure: true
LobbyGameplay.vue:127 ✅ Client-side validation passed: {lat: 7.27529233637217, lon: 22.148437500000004, year: 1726}
LobbyGameplay.vue:130 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:156 📊 Calculated scores: {spatial: 376, temporal: 723, name: 0, speed: 0, total: 1099}
queries.ts:688 📢 Broadcast sent for submission: c131e58f-9930-497c-9efd-8a872f1773a7
LobbyGameplay.vue:59 🔘 canSubmit check: {result: false, hasSubmitted: true, guessedLat: 7.27529233637217, guessedLon: 22.148437500000004, guessedYear: 1726, …}