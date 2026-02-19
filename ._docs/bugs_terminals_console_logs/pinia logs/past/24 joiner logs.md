 {irrelevant console logs removed prior to this for brevity}
{This seems concerning}
LobbyCreateJoin.vue:54 ✅ joinExistingLobby completed successfully
realtime.ts:173 📡 Channel subscription status for lobby:89ba2aff-95f0-432f-89ae-628d2f64ef86: SUBSCRIBED 
realtime.ts:176 ✅ Successfully subscribed to lobby:89ba2aff-95f0-432f-89ae-628d2f64ef86
realtime.ts:196 🔗 Channel joined for lobby:89ba2aff-95f0-432f-89ae-628d2f64ef86
realtime.ts:200 👋 Channel left for lobby:89ba2aff-95f0-432f-89ae-628d2f64ef86
realtime.ts:204 💥 Channel system error for lobby:89ba2aff-95f0-432f-89ae-628d2f64ef86: {message: 'Unable to subscribe to changes with given paramete…, "eq", "89ba2aff-95f0-432f-89ae-628d2f64ef86"}]]', status: 'error', extension: 'postgres_changes', channel: 'lobby:89ba2aff-95f0-432f-89ae-628d2f64ef86'}
(anonymous) @ realtime.ts:204
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3002
_trigger @ @supabase_supabase-js.js?v=a926d579:2987
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
decode @ @supabase_supabase-js.js?v=a926d579:2038
_onConnMessage @ @supabase_supabase-js.js?v=a926d579:3494
conn.onmessage @ @supabase_supabase-js.js?v=a926d579:3547Understand this error

MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: waiting → in_progress
MultiplayerView.vue:58 🎮 MultiplayerView: Lobby status is now in_progress - should show game screen
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:560 📤 useLobby returning actions only - state accessed via store directly
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
useLobby.ts:35 🧹 Cleaning up realtime subscription
useLobby.ts:454 📖 Loading figure: ceb08a13-e742-4e2c-af09-ec6fe0f71d40
useLobby.ts:454 📖 Loading figure: 71855ba9-176a-4d37-8e66-ad7d76a030bc
useLobby.ts:454 📖 Loading figure: 57706cbc-ffa0-4dcb-b98a-2ad5764135f8
useLobby.ts:454 📖 Loading figure: c03fa567-40cb-43ce-af57-83344d0fe25d
useLobby.ts:454 📖 Loading figure: f42b31f2-0c7b-4ea7-88d0-0896679aa765
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
useLobby.ts:454 📖 Loading figure: b61efbd0-c7f5-4259-baa0-50e235837e94
useLobby.ts:454 📖 Loading figure: 353538af-e5e9-4a2c-a0af-380d37a4e53c
useLobby.ts:454 📖 Loading figure: 571821e2-712f-4253-b9e2-acd347bb8910
useLobby.ts:454 📖 Loading figure: 1b639e55-33fa-4cfd-97d9-e3a6a4450546
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
useLobby.ts:458 ✅ Loaded 10 figures
useLobby.ts:460 💾 Setting figures in store...
useLobby.ts:463 🎲 Starting first round...
useLobby.ts:466 ✅ Started round 1 with figure: Muhammad Ali
useLobby.ts:471 🔄 Setting loading to false after game start
useLobby.ts:474 🎮 Game started successfully!
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:199 🗺️ Map clicked: Proxy(Object) {lat: 11.47329548249998, lon: 32.285334431877786} hasSubmitted: false
LobbyGameplay.vue:203 📍 Set guessedLat: 11.47329548249998 guessedLon: 32.285334431877786
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 11.47329548249998, guessedLon: 32.285334431877786, guessedYear: 0, …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 11.47329548249998, guessedLon: 32.285334431877786, guessedYear: 1906, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '3aaef136-429e-4ee1-81a3-6b8a666fe99d', guessed_lat: 31.9754637621887, guessed_lon: -79.453125, guessed_name: 'ali', guessed_year: 1826, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: '3aaef136-429e-4ee1-81a3-6b8a666fe99d', guessed_lat: 31.9754637621887, guessed_lon: -79.453125, guessed_name: 'ali', guessed_year: 1826, …}
useLobby.ts:508 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 11.47329548249998, guessedLon: 32.285334431877786, guessedYear: 1906, …}
LobbyGameplay.vue:104 🎯 handleSubmitGuess called
LobbyGameplay.vue:105 canSubmit: true currentFigure: true
LobbyGameplay.vue:132 ✅ Client-side validation passed: {lat: 11.47329548249998, lon: 32.285334431877786, year: 1906}
LobbyGameplay.vue:135 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:161 📊 Calculated scores: {spatial: 0, temporal: 782, name: 800, speed: 0, total: 1582}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: 'muhammed ali', guessedLat: 11.47329548249998, guessedLon: 32.285334431877786, guessedYear: 1906, score: 1582}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
queries.ts:688 📢 Broadcast sent for submission: 7a58005a-8228-4b49-8ac5-f72cb66f20d0
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: '7a58005a-8228-4b49-8ac5-f72cb66f20d0', lobby_id: '89ba2aff-95f0-432f-89ae-628d2f64ef86', user_id: '360c97e2-504f-420e-a903-3dd272eed80d', round_number: 1, figure_id: '3aaef136-429e-4ee1-81a3-6b8a666fe99d', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: 7a58005a-8228-4b49-8ac5-f72cb66f20d0
useLobby.ts:307 📊 roundSubmissions now has 2 items
useLobby.ts:311 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:210 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:211 🎯 Current figure for reveal: Muhammad Ali
RevealPhase.vue:123 RevealPhase figure data: {name: 'Muhammad Ali', hometown: 'Louisville, Kentucky', hasHometown: true, hometownLength: 20}
LobbyGameplay.vue:178 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:180 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:184 🎯 Adding own submission to local state: {id: '7a58005a-8228-4b49-8ac5-f72cb66f20d0', lobby_id: '89ba2aff-95f0-432f-89ae-628d2f64ef86', user_id: '360c97e2-504f-420e-a903-3dd272eed80d', round_number: 1, figure_id: '3aaef136-429e-4ee1-81a3-6b8a666fe99d', …}
LobbyGameplay.vue:219 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 1 Next round would be: 2
MultiplayerView.vue:106 🎯 Starting next round: 2
MultiplayerView.vue:110 🎯 Starting round with figure: Galileo Galilei
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:223 🔄 Resetting UI state for next round
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:199 🗺️ Map clicked: Proxy(Object) {lat: 45.79338211440398, lon: 38.61924200434426} hasSubmitted: false
LobbyGameplay.vue:203 📍 Set guessedLat: 45.79338211440398 guessedLon: 38.61924200434426
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 45.79338211440398, guessedLon: 38.61924200434426, guessedYear: 0, …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 45.79338211440398, guessedLon: 38.61924200434426, guessedYear: 1591, …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 45.79338211440398, guessedLon: 38.61924200434426, guessedYear: 1596, …}
LobbyGameplay.vue:104 🎯 handleSubmitGuess called
LobbyGameplay.vue:105 canSubmit: true currentFigure: true
LobbyGameplay.vue:132 ✅ Client-side validation passed: {lat: 45.79338211440398, lon: 38.61924200434426, year: 1596}
LobbyGameplay.vue:135 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:161 📊 Calculated scores: {spatial: 577, temporal: 784, name: 200, speed: 0, total: 1561}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: 'gae', guessedLat: 45.79338211440398, guessedLon: 38.61924200434426, guessedYear: 1596, score: 1561}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
queries.ts:688 📢 Broadcast sent for submission: b406edb7-2322-43e4-8cde-172662da247f
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: 'b406edb7-2322-43e4-8cde-172662da247f', lobby_id: '89ba2aff-95f0-432f-89ae-628d2f64ef86', user_id: '360c97e2-504f-420e-a903-3dd272eed80d', round_number: 2, figure_id: 'ceb08a13-e742-4e2c-af09-ec6fe0f71d40', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: b406edb7-2322-43e4-8cde-172662da247f
useLobby.ts:307 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:178 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:180 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:184 🎯 Adding own submission to local state: {id: 'b406edb7-2322-43e4-8cde-172662da247f', lobby_id: '89ba2aff-95f0-432f-89ae-628d2f64ef86', user_id: '360c97e2-504f-420e-a903-3dd272eed80d', round_number: 2, figure_id: 'ceb08a13-e742-4e2c-af09-ec6fe0f71d40', …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: true, guessedLat: 45.79338211440398, guessedLon: 38.61924200434426, guessedYear: 1596, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: 'ceb08a13-e742-4e2c-af09-ec6fe0f71d40', guessed_lat: 45.1084233376941, guessed_lon: 0.3515625, guessed_name: 'Galileo Gary ', guessed_year: 1986, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: 'ceb08a13-e742-4e2c-af09-ec6fe0f71d40', guessed_lat: 45.1084233376941, guessed_lon: 0.3515625, guessed_name: 'Galileo Gary ', guessed_year: 1986, …}
useLobby.ts:508 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:523 🎯 All players submitted - reveal phase should start in UI
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:210 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:211 🎯 Current figure for reveal: Galileo Galilei
RevealPhase.vue:123 RevealPhase figure data: {name: 'Galileo Galilei', hometown: 'Pisa, Italy', hasHometown: true, hometownLength: 11}
LobbyGameplay.vue:219 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 2 Next round would be: 3
MultiplayerView.vue:106 🎯 Starting next round: 3
MultiplayerView.vue:110 🎯 Starting round with figure: Abraham Lincoln
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:223 🔄 Resetting UI state for next round
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '71855ba9-176a-4d37-8e66-ad7d76a030bc', guessed_lat: 33.7471804481499, guessed_lon: -101.6015625, guessed_name: 'abe linc', guessed_year: 1941, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: '71855ba9-176a-4d37-8e66-ad7d76a030bc', guessed_lat: 33.7471804481499, guessed_lon: -101.6015625, guessed_name: 'abe linc', guessed_year: 1941, …}
useLobby.ts:508 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:199 🗺️ Map clicked: Proxy(Object) {lat: 25.991378099826534, lon: 16.09868174668561} hasSubmitted: false
LobbyGameplay.vue:203 📍 Set guessedLat: 25.991378099826534 guessedLon: 16.09868174668561
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 25.991378099826534, guessedLon: 16.09868174668561, guessedYear: 1876, …}
LobbyGameplay.vue:104 🎯 handleSubmitGuess called
LobbyGameplay.vue:105 canSubmit: true currentFigure: true
LobbyGameplay.vue:132 ✅ Client-side validation passed: {lat: 25.991378099826534, lon: 16.09868174668561, year: 1876}
LobbyGameplay.vue:135 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:161 📊 Calculated scores: {spatial: 0, temporal: 767, name: 0, speed: 0, total: 767}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: 'Alan Turning', guessedLat: 25.991378099826534, guessedLon: 16.09868174668561, guessedYear: 1876, score: 767}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
queries.ts:688 📢 Broadcast sent for submission: dc656ec3-8889-414a-a550-95714db4888c
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: 'dc656ec3-8889-414a-a550-95714db4888c', lobby_id: '89ba2aff-95f0-432f-89ae-628d2f64ef86', user_id: '360c97e2-504f-420e-a903-3dd272eed80d', round_number: 3, figure_id: '71855ba9-176a-4d37-8e66-ad7d76a030bc', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: dc656ec3-8889-414a-a550-95714db4888c
useLobby.ts:307 📊 roundSubmissions now has 2 items
useLobby.ts:311 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:210 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:211 🎯 Current figure for reveal: Abraham Lincoln
RevealPhase.vue:123 RevealPhase figure data: {name: 'Abraham Lincoln', hometown: 'Hodgenville, Kentucky', hasHometown: true, hometownLength: 21}
LobbyGameplay.vue:178 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:180 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:184 🎯 Adding own submission to local state: {id: 'dc656ec3-8889-414a-a550-95714db4888c', lobby_id: '89ba2aff-95f0-432f-89ae-628d2f64ef86', user_id: '360c97e2-504f-420e-a903-3dd272eed80d', round_number: 3, figure_id: '71855ba9-176a-4d37-8e66-ad7d76a030bc', …}
LobbyGameplay.vue:219 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 3 Next round would be: 4

{REMOVED LOGS for rounds 4-9 for brevity}


MultiplayerView.vue:98 🎲 Current round: 9 Next round would be: 10
MultiplayerView.vue:106 🎯 Starting next round: 10
MultiplayerView.vue:110 🎯 Starting round with figure: Vincent van Gogh
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:223 🔄 Resetting UI state for next round
LobbyGameplay.vue:64 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:199 🗺️ Map clicked: Proxy(Object) {lat: 32.20699135272648, lon: 88.23485132199836} hasSubmitted: false
LobbyGameplay.vue:203 📍 Set guessedLat: 32.20699135272648 guessedLon: 88.23485132199836
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 32.20699135272648, guessedLon: 88.23485132199836, guessedYear: 0, …}
LobbyGameplay.vue:64 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 32.20699135272648, guessedLon: 88.23485132199836, guessedYear: 2021, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '1b639e55-33fa-4cfd-97d9-e3a6a4450546', guessed_lat: 41.0006298486854, guessed_lon: -72.0703125, guessed_name: '', guessed_year: -500, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:495 📨 Submission received: {figure_id: '1b639e55-33fa-4cfd-97d9-e3a6a4450546', guessed_lat: 41.0006298486854, guessed_lon: -72.0703125, guessed_name: '', guessed_year: -500, …}
useLobby.ts:508 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:104 🎯 handleSubmitGuess called
LobbyGameplay.vue:105 canSubmit: true currentFigure: true
LobbyGameplay.vue:132 ✅ Client-side validation passed: {lat: 32.20699135272648, lon: 88.23485132199836, year: 2021}
LobbyGameplay.vue:135 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:161 📊 Calculated scores: {spatial: 115, temporal: 716, name: 0, speed: 0, total: 831}
useLobby.ts:270 🎯 submitGuess called with: {guessedName: '', guessedLat: 32.20699135272648, guessedLon: 88.23485132199836, guessedYear: 2021, score: 831}
useLobby.ts:285 🔄 Calling submitMultiplayerGuess...
queries.ts:688 📢 Broadcast sent for submission: 902b6ce4-f4ec-4317-978f-2d0fbfdf3c00
useLobby.ts:301 ✅ submitMultiplayerGuess returned: {id: '902b6ce4-f4ec-4317-978f-2d0fbfdf3c00', lobby_id: '89ba2aff-95f0-432f-89ae-628d2f64ef86', user_id: '360c97e2-504f-420e-a903-3dd272eed80d', round_number: 10, figure_id: '1b639e55-33fa-4cfd-97d9-e3a6a4450546', …}
useLobby.ts:304 🎯 Adding own submission to local roundSubmissions: 902b6ce4-f4ec-4317-978f-2d0fbfdf3c00
useLobby.ts:307 📊 roundSubmissions now has 2 items
useLobby.ts:311 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:210 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:211 🎯 Current figure for reveal: Vincent van Gogh
RevealPhase.vue:123 RevealPhase figure data: {name: 'Vincent van Gogh', hometown: 'Zundert, Netherlands', hasHometown: true, hometownLength: 20}
LobbyGameplay.vue:178 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:180 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:184 🎯 Adding own submission to local state: {id: '902b6ce4-f4ec-4317-978f-2d0fbfdf3c00', lobby_id: '89ba2aff-95f0-432f-89ae-628d2f64ef86', user_id: '360c97e2-504f-420e-a903-3dd272eed80d', round_number: 10, figure_id: '1b639e55-33fa-4cfd-97d9-e3a6a4450546', …}
LobbyGameplay.vue:219 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 10 Next round would be: 11
MultiplayerView.vue:102 🏆 Game completed! All 10 rounds finished
MultiplayerView.vue:119 ✅ Round advancement completed
LobbyGameplay.vue:223 🔄 Resetting UI state for next round
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: in_progress → finished


