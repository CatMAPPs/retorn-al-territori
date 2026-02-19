 {irrelevant console logs removed prior to this for brevity}
useLobby.ts:203 🎮 startMultiplayerGame called for lobby: 89ba2aff-95f0-432f-89ae-628d2f64ef86
useLobby.ts:206 ⏳ Setting loading state for game start
useLobby.ts:210 🚀 Calling startGame API...
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:617 🎮 Updating lobby status to in_progress...
queries.ts:633 ✅ Lobby status updated successfully
queries.ts:644 📢 Broadcasted game started event for lobby: 89ba2aff-95f0-432f-89ae-628d2f64ef86
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
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335
useLobby.ts:225 🔄 Fallback: Manually updating lobby status to in_progress
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: waiting → in_progress
MultiplayerView.vue:58 🎮 MultiplayerView: Lobby status is now in_progress - should show game screen
useLobby.ts:235 ✅ Fallback game start completed
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:560 📤 useLobby returning actions only - state accessed via store directly
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:199 🗺️ Map clicked: Proxy(Object) {lat: 31.975463762188678, lon: -79.45312500000001} hasSubmitted: false
LobbyGameplay.vue:203 📍 Set guessedLat: 31.975463762188678 guessedLon: -79.45312500000001

LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 31.975463762188678, guessedLon: -79.45312500000001, guessedYear: 1911, …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 31.975463762188678, guessedLon: -79.45312500000001, guessedYear: 1911, …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 31.975463762188678, guessedLon: -79.45312500000001, guessedYear: 1826, …}
LobbyGameplay.vue:104 🎯 handleSubmitGuess called
LobbyGameplay.vue:105 canSubmit: true currentFigure: true
LobbyGameplay.vue:132 ✅ Client-side validation passed: {lat: 31.975463762188678, lon: -79.45312500000001, year: 1826}
LobbyGameplay.vue:135 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:161 📊 Calculated scores: {spatial: 710, temporal: 742, name: 800, speed: 20, total: 2272}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: 'ali', guessedLat: 31.975463762188678, guessedLon: -79.45312500000001, guessedYear: 1826, score: 2272}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
queries.ts:688 📢 Broadcast sent for submission: 41e5151b-17bb-4f63-81c1-91e7f12c3b6f
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: '41e5151b-17bb-4f63-81c1-91e7f12c3b6f', lobby_id: '89ba2aff-95f0-432f-89ae-628d2f64ef86', user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', round_number: 1, figure_id: '3aaef136-429e-4ee1-81a3-6b8a666fe99d', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: 41e5151b-17bb-4f63-81c1-91e7f12c3b6f
useLobby.ts:307 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:178 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:180 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:184 🎯 Adding own submission to local state: {id: '41e5151b-17bb-4f63-81c1-91e7f12c3b6f', lobby_id: '89ba2aff-95f0-432f-89ae-628d2f64ef86', user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', round_number: 1, figure_id: '3aaef136-429e-4ee1-81a3-6b8a666fe99d', …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: true, guessedLat: 31.975463762188678, guessedLon: -79.45312500000001, guessedYear: 1826, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '3aaef136-429e-4ee1-81a3-6b8a666fe99d', guessed_lat: 11.4732954825, guessed_lon: 32.2853344318778, guessed_name: 'muhammed ali', guessed_year: 1906, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: '3aaef136-429e-4ee1-81a3-6b8a666fe99d', guessed_lat: 11.4732954825, guessed_lon: 32.2853344318778, guessed_name: 'muhammed ali', guessed_year: 1906, …}
useLobby.ts:508 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:523 🎯 All players submitted - reveal phase should start in UI
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:210 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:211 🎯 Current figure for reveal: Muhammad Ali
RevealPhase.vue:123 RevealPhase figure data: {name: 'Muhammad Ali', hometown: 'Louisville, Kentucky', hasHometown: true, hometownLength: 20}
LobbyGameplay.vue:219 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 1 Next round would be: 2
MultiplayerView.vue:106 🎯 Starting next round: 2
MultiplayerView.vue:110 🎯 Starting round with figure: Galileo Galilei
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:223 🔄 Resetting UI state for next round
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:199 🗺️ Map clicked: Proxy(Object) {lat: 45.108423337694084, lon: 0.3515625} hasSubmitted: false
LobbyGameplay.vue:203 📍 Set guessedLat: 45.108423337694084 guessedLon: 0.3515625
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 45.108423337694084, guessedLon: 0.3515625, guessedYear: 0, …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 45.108423337694084, guessedLon: 0.3515625, guessedYear: 1986, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: 'ceb08a13-e742-4e2c-af09-ec6fe0f71d40', guessed_lat: 45.793382114404, guessed_lon: 38.6192420043443, guessed_name: 'gae', guessed_year: 1596, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: 'ceb08a13-e742-4e2c-af09-ec6fe0f71d40', guessed_lat: 45.793382114404, guessed_lon: 38.6192420043443, guessed_name: 'gae', guessed_year: 1596, …}
useLobby.ts:508 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:104 🎯 handleSubmitGuess called
LobbyGameplay.vue:105 canSubmit: true currentFigure: true
LobbyGameplay.vue:132 ✅ Client-side validation passed: {lat: 45.108423337694084, lon: 0.3515625, year: 1986}
LobbyGameplay.vue:135 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:161 📊 Calculated scores: {spatial: 719, temporal: 589, name: 400, speed: 20, total: 1728}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: 'Galileo Gary ', guessedLat: 45.108423337694084, guessedLon: 0.3515625, guessedYear: 1986, score: 1728}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
queries.ts:688 📢 Broadcast sent for submission: 3a97a5cd-7a44-4ad8-8ac0-b3d12c7a03ad
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: '3a97a5cd-7a44-4ad8-8ac0-b3d12c7a03ad', lobby_id: '89ba2aff-95f0-432f-89ae-628d2f64ef86', user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', round_number: 2, figure_id: 'ceb08a13-e742-4e2c-af09-ec6fe0f71d40', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: 3a97a5cd-7a44-4ad8-8ac0-b3d12c7a03ad
useLobby.ts:307 📊 roundSubmissions now has 2 items
useLobby.ts:311 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:210 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:211 🎯 Current figure for reveal: Galileo Galilei
RevealPhase.vue:123 RevealPhase figure data: {name: 'Galileo Galilei', hometown: 'Pisa, Italy', hasHometown: true, hometownLength: 11}
LobbyGameplay.vue:178 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:180 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:184 🎯 Adding own submission to local state: {id: '3a97a5cd-7a44-4ad8-8ac0-b3d12c7a03ad', lobby_id: '89ba2aff-95f0-432f-89ae-628d2f64ef86', user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', round_number: 2, figure_id: 'ceb08a13-e742-4e2c-af09-ec6fe0f71d40', …}
LobbyGameplay.vue:219 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 2 Next round would be: 3
MultiplayerView.vue:106 🎯 Starting next round: 3
MultiplayerView.vue:110 🎯 Starting round with figure: Abraham Lincoln
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:223 🔄 Resetting UI state for next round
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:199 🗺️ Map clicked: Proxy(Object) {lat: 33.747180448149855, lon: -101.6015625} hasSubmitted: false
LobbyGameplay.vue:203 📍 Set guessedLat: 33.747180448149855 guessedLon: -101.6015625
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 33.747180448149855, guessedLon: -101.6015625, guessedYear: 0, …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 33.747180448149855, guessedLon: -101.6015625, guessedYear: 1941, …}
LobbyGameplay.vue:104 🎯 handleSubmitGuess called
LobbyGameplay.vue:105 canSubmit: true currentFigure: true
LobbyGameplay.vue:132 ✅ Client-side validation passed: {lat: 33.747180448149855, lon: -101.6015625, year: 1941}
LobbyGameplay.vue:135 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:161 📊 Calculated scores: {spatial: 651, temporal: 734, name: 200, speed: 20, total: 1605}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: 'abe linc', guessedLat: 33.747180448149855, guessedLon: -101.6015625, guessedYear: 1941, score: 1605}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
queries.ts:688 📢 Broadcast sent for submission: 37b7bd82-42e5-4e48-a836-3d59373c724a
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: '37b7bd82-42e5-4e48-a836-3d59373c724a', lobby_id: '89ba2aff-95f0-432f-89ae-628d2f64ef86', user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', round_number: 3, figure_id: '71855ba9-176a-4d37-8e66-ad7d76a030bc', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: 37b7bd82-42e5-4e48-a836-3d59373c724a
useLobby.ts:307 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:178 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:180 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:184 🎯 Adding own submission to local state: {id: '37b7bd82-42e5-4e48-a836-3d59373c724a', lobby_id: '89ba2aff-95f0-432f-89ae-628d2f64ef86', user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', round_number: 3, figure_id: '71855ba9-176a-4d37-8e66-ad7d76a030bc', …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: true, guessedLat: 33.747180448149855, guessedLon: -101.6015625, guessedYear: 1941, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '71855ba9-176a-4d37-8e66-ad7d76a030bc', guessed_lat: 25.9913780998265, guessed_lon: 16.0986817466856, guessed_name: 'Alan Turning', guessed_year: 1876, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: '71855ba9-176a-4d37-8e66-ad7d76a030bc', guessed_lat: 25.9913780998265, guessed_lon: 16.0986817466856, guessed_name: 'Alan Turning', guessed_year: 1876, …}
useLobby.ts:508 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:523 🎯 All players submitted - reveal phase should start in UI
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:210 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:211 🎯 Current figure for reveal: Abraham Lincoln
RevealPhase.vue:123 RevealPhase figure data: {name: 'Abraham Lincoln', hometown: 'Hodgenville, Kentucky', hasHometown: true, hometownLength: 21}
LobbyGameplay.vue:219 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 3 Next round would be: 4

{REMOVED LOGS for rounds 4-9 for brevity}

MultiplayerView.vue:106 🎯 Starting next round: 10
MultiplayerView.vue:110 🎯 Starting round with figure: Vincent van Gogh
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:223 🔄 Resetting UI state for next round
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:199 🗺️ Map clicked: Proxy(Object) {lat: 41.000629848685385, lon: -72.07031250000001} hasSubmitted: false
LobbyGameplay.vue:203 📍 Set guessedLat: 41.000629848685385 guessedLon: -72.07031250000001
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.000629848685385, guessedLon: -72.07031250000001, guessedYear: 0, …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.000629848685385, guessedLon: -72.07031250000001, guessedYear: 1326, …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 41.000629848685385, guessedLon: -72.07031250000001, guessedYear: -500, …}
LobbyGameplay.vue:104 🎯 handleSubmitGuess called
LobbyGameplay.vue:105 canSubmit: true currentFigure: true
LobbyGameplay.vue:132 ✅ Client-side validation passed: {lat: 41.000629848685385, lon: -72.07031250000001, year: -500}
LobbyGameplay.vue:135 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:161 📊 Calculated scores: {spatial: 226, temporal: 0, name: 0, speed: 20, total: 246}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: '', guessedLat: 41.000629848685385, guessedLon: -72.07031250000001, guessedYear: -500, score: 246}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
queries.ts:688 📢 Broadcast sent for submission: aff5edb5-43e2-4394-a1d0-d7ddffd40152
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: 'aff5edb5-43e2-4394-a1d0-d7ddffd40152', lobby_id: '89ba2aff-95f0-432f-89ae-628d2f64ef86', user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', round_number: 10, figure_id: '1b639e55-33fa-4cfd-97d9-e3a6a4450546', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: aff5edb5-43e2-4394-a1d0-d7ddffd40152
useLobby.ts:307 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:178 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:180 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:184 🎯 Adding own submission to local state: {id: 'aff5edb5-43e2-4394-a1d0-d7ddffd40152', lobby_id: '89ba2aff-95f0-432f-89ae-628d2f64ef86', user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', round_number: 10, figure_id: '1b639e55-33fa-4cfd-97d9-e3a6a4450546', …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: true, guessedLat: 41.000629848685385, guessedLon: -72.07031250000001, guessedYear: -500, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '1b639e55-33fa-4cfd-97d9-e3a6a4450546', guessed_lat: 32.2069913527265, guessed_lon: 88.2348513219984, guessed_name: '', guessed_year: 2021, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: '1b639e55-33fa-4cfd-97d9-e3a6a4450546', guessed_lat: 32.2069913527265, guessed_lon: 88.2348513219984, guessed_name: '', guessed_year: 2021, …}
useLobby.ts:508 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:523 🎯 All players submitted - reveal phase should start in UI
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:210 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:211 🎯 Current figure for reveal: Vincent van Gogh
RevealPhase.vue:123 RevealPhase figure data: {name: 'Vincent van Gogh', hometown: 'Zundert, Netherlands', hasHometown: true, hometownLength: 20}
LobbyGameplay.vue:219 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 10 Next round would be: 11
MultiplayerView.vue:102 🏆 Game completed! All 10 rounds finished
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:223 🔄 Resetting UI state for next round
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: in_progress → finished



