{Note: removed first 119 lines of console log for irrelevancy to our current problem solving} 
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false {isHost: false, allPlayersReady: true, playerCount: 2}
realtime.ts:79 📢 REALTIME: Game started via broadcast {current_round: 1, lobbyId: '6f0356ce-9280-4a7c-aba0-c71a8bdc10d2', status: 'in_progress', timestamp: '2025-11-09T16:00:18.317Z'}
realtime.ts:80 🎮 REALTIME: Game started broadcast received - calling onGameStarted
useLobby.ts:411 🎮 REALTIME CALLBACK: onGameStarted triggered for lobby: 6f0356ce-9280-4a7c-aba0-c71a8bdc10d2
useLobby.ts:414 📊 Fetching updated lobby with players...
realtime.ts:83 🎮 REALTIME: onGameStarted callback completed successfully
useLobby.ts:416 ✅ Got updated lobby - status: in_progress current_round: 1
useLobby.ts:418 💾 Updating lobby status in store...
useLobby.ts:420 ✅ Lobby status updated to: in_progress
useLobby.ts:422 🎯 Loading figures for game...
useLobby.ts:425 📖 Loading figure: 571821e2-712f-4253-b9e2-acd347bb8910
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: waiting → in_progress
MultiplayerView.vue:58 🎮 MultiplayerView: Lobby status is now in_progress - should show game screen
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:514 📤 useLobby returning actions only - state accessed via store directly
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
useLobby.ts:35 🧹 Cleaning up realtime subscription
useLobby.ts:425 📖 Loading figure: 3388229c-139f-4f4c-8fd4-986176b0af38
useLobby.ts:425 📖 Loading figure: 96c5921a-6920-43cd-bcdb-990386420862
useLobby.ts:425 📖 Loading figure: 487ea03d-2cd4-4f68-91eb-1bddeade34b8
useLobby.ts:425 📖 Loading figure: 2ba3ca99-5e72-4edc-bb07-4e799e5cb92b
useLobby.ts:425 📖 Loading figure: 0b2c1e3e-d069-406b-9986-f18aaac83c5b
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
useLobby.ts:425 📖 Loading figure: 8060d265-cd30-46a3-af00-aebe877c5f8c
useLobby.ts:425 📖 Loading figure: 57706cbc-ffa0-4dcb-b98a-2ad5764135f8
useLobby.ts:425 📖 Loading figure: f2933cfe-2576-4749-8d14-e6dfd46a8788
useLobby.ts:425 📖 Loading figure: e26ac096-49f6-42fa-bfba-e503551f8c66
useLobby.ts:429 ✅ Loaded 10 figures
useLobby.ts:431 💾 Setting figures in store...
useLobby.ts:434 🎲 Starting first round...
useLobby.ts:437 ✅ Started round 1 with figure: Napoleon Bonaparte
useLobby.ts:442 🔄 Setting loading to false after game start
useLobby.ts:445 🎮 Game started successfully!
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:185 🗺️ Map clicked: Proxy(Object) {lat: 41.35207214451295, lon: 8.437500000000002} hasSubmitted: false
LobbyGameplay.vue:189 📍 Set guessedLat: 41.35207214451295 guessedLon: 8.437500000000002
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1586, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1586, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1656, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1736, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1736, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '571821e2-712f-4253-b9e2-acd347bb8910', guessed_lat: 43.3451549904511, guessed_lon: 6.328125, guessed_name: 'Darwin', guessed_year: 1841, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:466 📨 Submission received: {figure_id: '571821e2-712f-4253-b9e2-acd347bb8910', guessed_lat: 43.3451549904511, guessed_lon: 6.328125, guessed_name: 'Darwin', guessed_year: 1841, …}
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
useLobby.ts:470 📊 Updated submissions: 1 players: 2
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
LobbyGameplay.vue:103 🎯 handleSubmitGuess called
LobbyGameplay.vue:104 canSubmit: true currentFigure: true
LobbyGameplay.vue:131 ✅ Client-side validation passed: {lat: 41.35207214451295, lon: 8.437500000000002, year: 1821}
LobbyGameplay.vue:134 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:160 📊 Calculated scores: {spatial: 793, temporal: 774, name: 800, speed: 0, total: 2367}
queries.ts:688 📢 Broadcast sent for submission: b4a4326d-5ab2-42b2-a685-9a01e13cf658
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: true, guessedLat: 41.35207214451295, guessedLon: 8.437500000000002, guessedYear: 1821, …}
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency