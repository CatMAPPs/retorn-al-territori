startMultiplayerGame called for lobby: 5756cb13-5ef3-4531-afe9-98b19fb8e4df
useLobby.ts:205 ⏳ Setting loading state for game start
useLobby.ts:209 🚀 Calling startGame API...
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:617 🎮 Updating lobby status to in_progress...
queries.ts:633 ✅ Lobby status updated successfully
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: game_started
queries.ts:644 📢 Broadcasted game started event for lobby: 5756cb13-5ef3-4531-afe9-98b19fb8e4df
useLobby.ts:211 ✅ startGame API completed - game started successfully!
useLobby.ts:212 ⏳ Waiting for realtime status update to transition UI...
useLobby.ts:217 ⏰ Realtime transition timeout - forcing game start manually
(anonymous) @ useLobby.ts:217
setTimeout
startMultiplayerGame @ useLobby.ts:215
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
useLobby.ts:224 🔄 Fallback: Manually updating lobby status to in_progress
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: waiting → in_progress
MultiplayerView.vue:58 🎮 MultiplayerView: Lobby status is now in_progress - should show game screen
useLobby.ts:234 ✅ Fallback game start completed
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:559 📤 useLobby returning actions only - state accessed via store directly
LobbyGameplay.vue:84 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
LobbyGameplay.vue:265 🗺️ Map clicked: Proxy(Object) {lat: -7.917793352627911, lon: 55.54687500000001} hasSubmitted: false
LobbyGameplay.vue:269 📍 Set guessedLat: -7.917793352627911 guessedLon: 55.54687500000001
LobbyGameplay.vue:84 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:160 🎯 handleSubmitGuess called
LobbyGameplay.vue:161 canSubmit: true currentFigure: true
LobbyGameplay.vue:195 ✅ Client-side validation passed: {lat: -7.917793352627911, lon: 55.54687500000001, year: 0}
LobbyGameplay.vue:198 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:224 📊 Calculated scores: {spatial: 0, temporal: 18, name: 0, speed: 80, total: 98}
useLobby.ts:269 🎯 submitGuess called with: {guessedName: '', guessedLat: -7.917793352627911, guessedLon: 55.54687500000001, guessedYear: 0, score: 98}
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 0cad0c8a-d58d-44bc-a4dc-ac1282d62c1e
useLobby.ts:300 ✅ submitMultiplayerGuess returned: {id: '0cad0c8a-d58d-44bc-a4dc-ac1282d62c1e', lobby_id: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', user_id: '23fb740b-4843-4549-8f1b-93bb20822714', round_number: 1, figure_id: '2bdee868-9128-4389-8cd4-ff272d0f3038', …}
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 0cad0c8a-d58d-44bc-a4dc-ac1282d62c1e
useLobby.ts:306 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:241 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:244 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:248 🎯 Adding own submission to local state: {id: '0cad0c8a-d58d-44bc-a4dc-ac1282d62c1e', lobby_id: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', user_id: '23fb740b-4843-4549-8f1b-93bb20822714', round_number: 1, figure_id: '2bdee868-9128-4389-8cd4-ff272d0f3038', …}
LobbyGameplay.vue:84 🔘 canSubmit check: {result: false, hasSubmitted: true, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '2bdee868-9128-4389-8cd4-ff272d0f3038', guessed_lat: 14.2910005386049, guessed_lon: 23.203125, guessed_name: '', guessed_year: 0, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: {figure_id: '2bdee868-9128-4389-8cd4-ff272d0f3038', guessed_lat: 14.2910005386049, guessed_lon: 23.203125, guessed_name: '', guessed_year: 0, …}
useLobby.ts:507 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:522 🎯 All players submitted - reveal phase should start in UI
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:276 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:277 🎯 Current figure for reveal: William Shakespeare
LobbyGameplay.vue:281 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: {name: 'William Shakespeare', hometown: 'Stratford-upon-Avon, England', hasHometown: true, hometownLength: 28}
LobbyGameplay.vue:290 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:92 📊 Score updates for this round: {23fb740b-4843-4549-8f1b-93bb20822714: 98, 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 392}
MultiplayerView.vue:93 📊 Current player scores before update: (2) [{…}, {…}]
LobbyGameplay.vue:294 🔄 Resetting UI state for next round
LobbyGameplay.vue:307 🔄 Resetting timer for next round
LobbyGameplay.vue:309 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:84 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
MultiplayerView.vue:102 🔢 Player 23fb740b-4843-4549-8f1b-93bb20822714: 0 + 98 = 98
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', userId: '23fb740b-4843-4549-8f1b-93bb20822714', score: 98}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', userId: '23fb740b-4843-4549-8f1b-93bb20822714', score: 98}
MultiplayerView.vue:110 💾 Persisted score to database: {userId: '23fb740b-4843-4549-8f1b-93bb20822714', newScore: 98}
MultiplayerView.vue:102 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 0 + 392 = 392
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 392}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 392}
MultiplayerView.vue:110 💾 Persisted score to database: {userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', newScore: 392}
MultiplayerView.vue:117 📊 Player scores after update: (2) [{…}, {…}]
MultiplayerView.vue:120 🎲 Current round: 1 Next round would be: 2
MultiplayerView.vue:128 🎯 Starting next round: 2
MultiplayerView.vue:132 🎯 Starting round with figure: George Washington
MultiplayerView.vue:141 ✅ Round advancement completed
LobbyGameplay.vue:265 🗺️ Map clicked: Proxy(Object) {lat: 37.274052809979054, lon: -76.640625} hasSubmitted: false
LobbyGameplay.vue:269 📍 Set guessedLat: 37.274052809979054 guessedLon: -76.640625
LobbyGameplay.vue:84 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:84 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:84 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:84 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:84 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:160 🎯 handleSubmitGuess called
LobbyGameplay.vue:161 canSubmit: true currentFigure: true
LobbyGameplay.vue:195 ✅ Client-side validation passed: {lat: 37.274052809979054, lon: -76.640625, year: 1701}
LobbyGameplay.vue:198 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:224 📊 Calculated scores: {spatial: 790, temporal: 785, name: 0, speed: 0, total: 1575}
useLobby.ts:269 🎯 submitGuess called with: {guessedName: 'Galileo Gary ', guessedLat: 37.274052809979054, guessedLon: -76.640625, guessedYear: 1701, score: 1575}
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 76da7216-e2f3-41be-acc1-7df8c7c9b754
useLobby.ts:300 ✅ submitMultiplayerGuess returned: {id: '76da7216-e2f3-41be-acc1-7df8c7c9b754', lobby_id: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', user_id: '23fb740b-4843-4549-8f1b-93bb20822714', round_number: 2, figure_id: 'f42b31f2-0c7b-4ea7-88d0-0896679aa765', …}
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 76da7216-e2f3-41be-acc1-7df8c7c9b754
useLobby.ts:306 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:241 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:244 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:248 🎯 Adding own submission to local state: {id: '76da7216-e2f3-41be-acc1-7df8c7c9b754', lobby_id: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', user_id: '23fb740b-4843-4549-8f1b-93bb20822714', round_number: 2, figure_id: 'f42b31f2-0c7b-4ea7-88d0-0896679aa765', …}
LobbyGameplay.vue:84 🔘 canSubmit check: {result: false, hasSubmitted: true, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: 'f42b31f2-0c7b-4ea7-88d0-0896679aa765', guessed_lat: 49.8556933225343, guessed_lon: 5.625, guessed_name: 'washingtoh', guessed_year: 1831, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: {figure_id: 'f42b31f2-0c7b-4ea7-88d0-0896679aa765', guessed_lat: 49.8556933225343, guessed_lon: 5.625, guessed_name: 'washingtoh', guessed_year: 1831, …}
useLobby.ts:507 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:522 🎯 All players submitted - reveal phase should start in UI
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:276 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:277 🎯 Current figure for reveal: George Washington
LobbyGameplay.vue:281 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: {name: 'George Washington', hometown: 'Westmoreland County, Virginia', hasHometown: true, hometownLength: 29}
LobbyGameplay.vue:290 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:92 📊 Score updates for this round: {23fb740b-4843-4549-8f1b-93bb20822714: 1575, 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 1713}
MultiplayerView.vue:93 📊 Current player scores before update: (2) [{…}, {…}]
LobbyGameplay.vue:294 🔄 Resetting UI state for next round
LobbyGameplay.vue:307 🔄 Resetting timer for next round
LobbyGameplay.vue:309 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:84 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
MultiplayerView.vue:102 🔢 Player 23fb740b-4843-4549-8f1b-93bb20822714: 0 + 1575 = 1575
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', userId: '23fb740b-4843-4549-8f1b-93bb20822714', score: 1575}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', userId: '23fb740b-4843-4549-8f1b-93bb20822714', score: 1575}
MultiplayerView.vue:110 💾 Persisted score to database: {userId: '23fb740b-4843-4549-8f1b-93bb20822714', newScore: 1575}
MultiplayerView.vue:102 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 0 + 1713 = 1713
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 1713}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 1713}
MultiplayerView.vue:110 💾 Persisted score to database: {userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', newScore: 1713}
MultiplayerView.vue:117 📊 Player scores after update: (2) [{…}, {…}]
MultiplayerView.vue:120 🎲 Current round: 2 Next round would be: 3
MultiplayerView.vue:128 🎯 Starting next round: 3
MultiplayerView.vue:132 🎯 Starting round with figure: Alan Turing
MultiplayerView.vue:141 ✅ Round advancement completed
LobbyGameplay.vue:265 🗺️ Map clicked: Proxy(Object) {lat: 51.70660846336452, lon: -1.0546875000000002} hasSubmitted: false
LobbyGameplay.vue:269 📍 Set guessedLat: 51.70660846336452 guessedLon: -1.0546875000000002
LobbyGameplay.vue:84 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:84 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:84 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:160 🎯 handleSubmitGuess called
LobbyGameplay.vue:161 canSubmit: true currentFigure: true
LobbyGameplay.vue:195 ✅ Client-side validation passed: {lat: 51.70660846336452, lon: -1.0546875000000002, year: 1671}
LobbyGameplay.vue:198 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:224 📊 Calculated scores: {spatial: 793, temporal: 680, name: 0, speed: 50, total: 1523}
useLobby.ts:269 🎯 submitGuess called with: {guessedName: '', guessedLat: 51.70660846336452, guessedLon: -1.0546875000000002, guessedYear: 1671, score: 1523}
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 39a3661d-590e-4564-828e-e63fa2fdce17
useLobby.ts:300 ✅ submitMultiplayerGuess returned: {id: '39a3661d-590e-4564-828e-e63fa2fdce17', lobby_id: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', user_id: '23fb740b-4843-4549-8f1b-93bb20822714', round_number: 3, figure_id: 'b61efbd0-c7f5-4259-baa0-50e235837e94', …}
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 39a3661d-590e-4564-828e-e63fa2fdce17
useLobby.ts:306 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:241 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:244 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:248 🎯 Adding own submission to local state: {id: '39a3661d-590e-4564-828e-e63fa2fdce17', lobby_id: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', user_id: '23fb740b-4843-4549-8f1b-93bb20822714', round_number: 3, figure_id: 'b61efbd0-c7f5-4259-baa0-50e235837e94', …}
LobbyGameplay.vue:84 🔘 canSubmit check: {result: false, hasSubmitted: true, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: 'b61efbd0-c7f5-4259-baa0-50e235837e94', guessed_lat: 52.0693770960239, guessed_lon: -0.703125, guessed_name: '', guessed_year: 1926, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: {figure_id: 'b61efbd0-c7f5-4259-baa0-50e235837e94', guessed_lat: 52.0693770960239, guessed_lon: -0.703125, guessed_name: '', guessed_year: 1926, …}
useLobby.ts:507 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:522 🎯 All players submitted - reveal phase should start in UI
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:276 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:277 🎯 Current figure for reveal: Alan Turing
LobbyGameplay.vue:281 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: {name: 'Alan Turing', hometown: 'London, England', hasHometown: true, hometownLength: 15}
LobbyGameplay.vue:290 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:92 📊 Score updates for this round: {23fb740b-4843-4549-8f1b-93bb20822714: 1523, 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 1656}
MultiplayerView.vue:93 📊 Current player scores before update: (2) [{…}, {…}]
LobbyGameplay.vue:294 🔄 Resetting UI state for next round
LobbyGameplay.vue:307 🔄 Resetting timer for next round
LobbyGameplay.vue:309 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:84 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
MultiplayerView.vue:102 🔢 Player 23fb740b-4843-4549-8f1b-93bb20822714: 0 + 1523 = 1523
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', userId: '23fb740b-4843-4549-8f1b-93bb20822714', score: 1523}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', userId: '23fb740b-4843-4549-8f1b-93bb20822714', score: 1523}
MultiplayerView.vue:110 💾 Persisted score to database: {userId: '23fb740b-4843-4549-8f1b-93bb20822714', newScore: 1523}
MultiplayerView.vue:102 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 0 + 1656 = 1656
queries.ts:746 🎯 updatePlayerScore called: {lobbyId: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 1656}
queries.ts:756 ✅ Player score updated successfully: {lobbyId: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', score: 1656}
MultiplayerView.vue:110 💾 Persisted score to database: {userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb', newScore: 1656}
MultiplayerView.vue:117 📊 Player scores after update: (2) [{…}, {…}]
MultiplayerView.vue:120 🎲 Current round: 3 Next round would be: 4
MultiplayerView.vue:128 🎯 Starting next round: 4
MultiplayerView.vue:132 🎯 Starting round with figure: Julius Caesar
MultiplayerView.vue:141 ✅ Round advancement completed
LobbyGameplay.vue:265 🗺️ Map clicked: Proxy(Object) {lat: -7.5694373362514344, lon: 41.48437500000001} hasSubmitted: false
LobbyGameplay.vue:269 📍 Set guessedLat: -7.5694373362514344 guessedLon: 41.48437500000001
LobbyGameplay.vue:84 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
LobbyGameplay.vue:51 ⏰ Timer expired - auto-submitting with current guesses
LobbyGameplay.vue:111 ⏰ autoSubmitOnTimeout called - submitting with current state
LobbyGameplay.vue:112 Current guesses - name:  coords: -7.5694373362514344 41.48437500000001 year: 0
LobbyGameplay.vue:130 📊 Auto-submitting with values: {lat: -7.5694373362514344, lon: 41.48437500000001, year: 0, name: ''}
LobbyGameplay.vue:139 📊 Auto-submit scores: {spatial: 176, temporal: 750, name: 0, speed: 0, total: 926}
useLobby.ts:269 🎯 submitGuess called with: {guessedName: '', guessedLat: -7.5694373362514344, guessedLon: 41.48437500000001, guessedYear: 0, score: 926}
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '3388229c-139f-4f4c-8fd4-986176b0af38', guessed_lat: 0, guessed_lon: 0, guessed_name: '', guessed_year: 0, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: {figure_id: '3388229c-139f-4f4c-8fd4-986176b0af38', guessed_lat: 0, guessed_lon: 0, guessed_name: '', guessed_year: 0, …}
useLobby.ts:507 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 47b2427d-6540-4329-b0af-b29f027ed510
useLobby.ts:300 ✅ submitMultiplayerGuess returned: {id: '47b2427d-6540-4329-b0af-b29f027ed510', lobby_id: '5756cb13-5ef3-4531-afe9-98b19fb8e4df', user_id: '23fb740b-4843-4549-8f1b-93bb20822714', round_number: 4, figure_id: '3388229c-139f-4f4c-8fd4-986176b0af38', …}
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 47b2427d-6540-4329-b0af-b29f027ed510
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:276 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:277 🎯 Current figure for reveal: Julius Caesar
LobbyGameplay.vue:281 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: {name: 'Julius Caesar', hometown: 'Rome, Italy', hasHometown: true, hometownLength: 11}
LobbyGameplay.vue:144 ✅ Auto-submit completed successfully
LobbyGameplay.vue:149 🎯 Adding auto-submitted guess to local state: 47b2427d-6540-4329-b0af-b29f027ed510