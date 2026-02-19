🎮 MultiplayerView: Lobby status is now in_progress - should show game screen
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: Object
useLobby.ts:559 📤 useLobby returning actions only - state accessed via store directly
LobbyGameplay.vue:84 🔘 canSubmit check: Object
useLobby.ts:35 🧹 Cleaning up realtime subscription
useLobby.ts:453 📖 Loading figure: b61efbd0-c7f5-4259-baa0-50e235837e94
useLobby.ts:453 📖 Loading figure: ac51139b-e93a-4447-a9d6-c5398434455e
useLobby.ts:453 📖 Loading figure: 3388229c-139f-4f4c-8fd4-986176b0af38
useLobby.ts:453 📖 Loading figure: 7bc0d0db-702f-4305-80e2-2786a9efa7a0
useLobby.ts:453 📖 Loading figure: ceb08a13-e742-4e2c-af09-ec6fe0f71d40
useLobby.ts:453 📖 Loading figure: 06c026ce-9183-45e9-95ca-54108e50290c
useLobby.ts:453 📖 Loading figure: f42b31f2-0c7b-4ea7-88d0-0896679aa765
useLobby.ts:453 📖 Loading figure: 2bdee868-9128-4389-8cd4-ff272d0f3038
useLobby.ts:453 📖 Loading figure: 71855ba9-176a-4d37-8e66-ad7d76a030bc
useLobby.ts:457 ✅ Loaded 10 figures
useLobby.ts:459 💾 Setting figures in store...
useLobby.ts:462 🎲 Starting first round...
useLobby.ts:465 ✅ Started round 1 with figure: Confucius
useLobby.ts:470 🔄 Setting loading to false after game start
useLobby.ts:473 🎮 Game started successfully!
realtime.ts:162 📢 REALTIME: Submission received via broadcast: Object
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: Object
useLobby.ts:507 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:265 🗺️ Map clicked: Proxy(Object) hasSubmitted: false
LobbyGameplay.vue:269 📍 Set guessedLat: 21.861498734372567 guessedLon: 21.093750000000004
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:160 🎯 handleSubmitGuess called
LobbyGameplay.vue:161 canSubmit: true currentFigure: true
LobbyGameplay.vue:195 ✅ Client-side validation passed: Object
LobbyGameplay.vue:198 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:224 📊 Calculated scores: Object
useLobby.ts:269 🎯 submitGuess called with: Object
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 504711b9-5a8f-47de-9deb-f90fe8ea8c43
useLobby.ts:300 ✅ submitMultiplayerGuess returned: Object
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 504711b9-5a8f-47de-9deb-f90fe8ea8c43
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:276 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:277 🎯 Current figure for reveal: Confucius
LobbyGameplay.vue:281 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: Object
LobbyGameplay.vue:241 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:244 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:248 🎯 Adding own submission to local state: Object
LobbyGameplay.vue:290 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:92 📊 Score updates for this round: Object
MultiplayerView.vue:93 📊 Current player scores before update: Array(2)
LobbyGameplay.vue:294 🔄 Resetting UI state for next round
LobbyGameplay.vue:307 🔄 Resetting timer for next round
LobbyGameplay.vue:309 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:84 🔘 canSubmit check: Object
MultiplayerView.vue:102 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 0 + 91 = 91
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:102 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 0 + 60 = 60
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:117 📊 Player scores after update: Array(2)
MultiplayerView.vue:120 🎲 Current round: 1 Next round would be: 2
MultiplayerView.vue:128 🎯 Starting next round: 2
MultiplayerView.vue:132 🎯 Starting round with figure: Alan Turing
MultiplayerView.vue:141 ✅ Round advancement completed
LobbyGameplay.vue:265 🗺️ Map clicked: Proxy(Object) hasSubmitted: false
LobbyGameplay.vue:269 📍 Set guessedLat: 40.111688665595956 guessedLon: -1.7578125000000002
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:160 🎯 handleSubmitGuess called
LobbyGameplay.vue:161 canSubmit: true currentFigure: true
LobbyGameplay.vue:195 ✅ Client-side validation passed: Object
LobbyGameplay.vue:198 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:224 📊 Calculated scores: Object
useLobby.ts:269 🎯 submitGuess called with: Object
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: e888b264-c6d2-4c03-9d6f-8f67103fecf4
useLobby.ts:300 ✅ submitMultiplayerGuess returned: Object
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: e888b264-c6d2-4c03-9d6f-8f67103fecf4
useLobby.ts:306 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:241 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:244 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:248 🎯 Adding own submission to local state: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:162 📢 REALTIME: Submission received via broadcast: Object
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: Object
useLobby.ts:507 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:522 🎯 All players submitted - reveal phase should start in UI
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:276 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:277 🎯 Current figure for reveal: Alan Turing
LobbyGameplay.vue:281 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: Object
LobbyGameplay.vue:290 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:92 📊 Score updates for this round: Object
MultiplayerView.vue:93 📊 Current player scores before update: Array(2)
LobbyGameplay.vue:294 🔄 Resetting UI state for next round
LobbyGameplay.vue:307 🔄 Resetting timer for next round
LobbyGameplay.vue:309 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:84 🔘 canSubmit check: Object
MultiplayerView.vue:102 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 60 + 1530 = 1590
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:102 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 91 + 1625 = 1716
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:117 📊 Player scores after update: Array(2)
MultiplayerView.vue:120 🎲 Current round: 2 Next round would be: 3
MultiplayerView.vue:128 🎯 Starting next round: 3
MultiplayerView.vue:132 🎯 Starting round with figure: Malala Yousafzai
MultiplayerView.vue:141 ✅ Round advancement completed
LobbyGameplay.vue:265 🗺️ Map clicked: Proxy(Object) hasSubmitted: false
LobbyGameplay.vue:269 📍 Set guessedLat: 35.38904996691167 guessedLon: 44.6484375
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:160 🎯 handleSubmitGuess called
LobbyGameplay.vue:161 canSubmit: true currentFigure: true
LobbyGameplay.vue:195 ✅ Client-side validation passed: Object
LobbyGameplay.vue:198 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:224 📊 Calculated scores: Object
useLobby.ts:269 🎯 submitGuess called with: Object
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 2448709d-6226-47af-bff4-e728fd41d3cb
useLobby.ts:300 ✅ submitMultiplayerGuess returned: Object
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 2448709d-6226-47af-bff4-e728fd41d3cb
useLobby.ts:306 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:241 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:244 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:248 🎯 Adding own submission to local state: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:162 📢 REALTIME: Submission received via broadcast: Object
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: Object
useLobby.ts:507 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:522 🎯 All players submitted - reveal phase should start in UI
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:276 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:277 🎯 Current figure for reveal: Malala Yousafzai
LobbyGameplay.vue:281 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: Object
LobbyGameplay.vue:290 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:92 📊 Score updates for this round: Object
MultiplayerView.vue:93 📊 Current player scores before update: Array(2)
LobbyGameplay.vue:294 🔄 Resetting UI state for next round
LobbyGameplay.vue:307 🔄 Resetting timer for next round
LobbyGameplay.vue:309 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:84 🔘 canSubmit check: Object
MultiplayerView.vue:102 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 1590 + 609 = 2199
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:102 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 1716 + 1076 = 2792
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:117 📊 Player scores after update: Array(2)
MultiplayerView.vue:120 🎲 Current round: 3 Next round would be: 4
MultiplayerView.vue:128 🎯 Starting next round: 4
MultiplayerView.vue:132 🎯 Starting round with figure: Julius Caesar
MultiplayerView.vue:141 ✅ Round advancement completed
LobbyGameplay.vue:265 🗺️ Map clicked: Proxy(Object) hasSubmitted: false
LobbyGameplay.vue:269 📍 Set guessedLat: 38.75408327579141 guessedLon: 29.531250000000004
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:265 🗺️ Map clicked: Proxy(Object) hasSubmitted: false
LobbyGameplay.vue:269 📍 Set guessedLat: 40.38002840251183 guessedLon: 13.710937500000002
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:162 📢 REALTIME: Submission received via broadcast: Object
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: Object
useLobby.ts:507 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:160 🎯 handleSubmitGuess called
LobbyGameplay.vue:161 canSubmit: true currentFigure: true
LobbyGameplay.vue:195 ✅ Client-side validation passed: Object
LobbyGameplay.vue:198 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:224 📊 Calculated scores: Object
useLobby.ts:269 🎯 submitGuess called with: Object
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 12d6e40e-44dd-4fbb-9f6b-2cc52c1e56da
useLobby.ts:300 ✅ submitMultiplayerGuess returned: Object
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 12d6e40e-44dd-4fbb-9f6b-2cc52c1e56da
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:276 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:277 🎯 Current figure for reveal: Julius Caesar
LobbyGameplay.vue:281 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: Object
LobbyGameplay.vue:241 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:244 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:248 🎯 Adding own submission to local state: Object
LobbyGameplay.vue:290 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:92 📊 Score updates for this round: Object
MultiplayerView.vue:93 📊 Current player scores before update: Array(2)
LobbyGameplay.vue:294 🔄 Resetting UI state for next round
LobbyGameplay.vue:307 🔄 Resetting timer for next round
LobbyGameplay.vue:309 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:84 🔘 canSubmit check: Object
MultiplayerView.vue:102 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 2792 + 1274 = 4066
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:102 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 2199 + 1562 = 3761
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:117 📊 Player scores after update: Array(2)
MultiplayerView.vue:120 🎲 Current round: 4 Next round would be: 5
MultiplayerView.vue:128 🎯 Starting next round: 5
MultiplayerView.vue:132 🎯 Starting round with figure: Frida Kahlo
MultiplayerView.vue:141 ✅ Round advancement completed
LobbyGameplay.vue:265 🗺️ Map clicked: Proxy(Object) hasSubmitted: false
LobbyGameplay.vue:269 📍 Set guessedLat: 24.347096633808512 guessedLon: -101.77734375000001
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:265 🗺️ Map clicked: Proxy(Object) hasSubmitted: false
LobbyGameplay.vue:269 📍 Set guessedLat: 24.126701958681682 guessedLon: -249.25781250000003
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:160 🎯 handleSubmitGuess called
LobbyGameplay.vue:161 canSubmit: true currentFigure: true
LobbyGameplay.vue:191 ❌ Invalid coordinate ranges: Objectlat: 24.126701958681682lon: -249.25781250000003[[Prototype]]: Object
handleSubmitGuess @ LobbyGameplay.vue:191Understand this error
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:162 📢 REALTIME: Submission received via broadcast: Object
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: Object
useLobby.ts:507 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:51 ⏰ Timer expired - auto-submitting with current guesses
LobbyGameplay.vue:111 ⏰ autoSubmitOnTimeout called - submitting with current state
LobbyGameplay.vue:112 Current guesses - name:  coords: 24.126701958681682 -249.25781250000003 year: 0
LobbyGameplay.vue:130 📊 Auto-submitting with values: Object
LobbyGameplay.vue:139 📊 Auto-submit scores: Object
useLobby.ts:269 🎯 submitGuess called with: Object
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: Object
wmzinowylibtdwtqonow.supabase.co/rest/v1/lobby_submissions?select=*:1  Failed to load resource: the server responded with a status of 400 ()Understand this error
useLobby.ts:315 ❌ submitMultiplayerGuess failed: Objectcode: "23514"details: nullhint: nullmessage: "new row for relation \"lobby_submissions\" violates check constraint \"lobby_submissions_guessed_lon_check\""[[Prototype]]: Object
submitGuess @ useLobby.ts:315Understand this error
LobbyGameplay.vue:152 ❌ Auto-submit failed: Objectcode: "23514"details: nullhint: nullmessage: "new row for relation \"lobby_submissions\" violates check constraint \"lobby_submissions_guessed_lon_check\""[[Prototype]]: Object
autoSubmitOnTimeout @ LobbyGameplay.vue:152Understand this error
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:173 📡 Channel subscription status for lobby:1e5f5063-4ee5-4875-8f01-b2b4d6d56a3a: CHANNEL_ERROR 
realtime.ts:178 ❌ Channel error for lobby:1e5f5063-4ee5-4875-8f01-b2b4d6d56a3a: undefined
(anonymous) @ realtime.ts:178Understand this error
realtime.ts:173 📡 Channel subscription status for lobby:fb2b52c2-d6ec-4b30-a2da-a2f6bbfa1685: CHANNEL_ERROR 
realtime.ts:178 ❌ Channel error for lobby:fb2b52c2-d6ec-4b30-a2da-a2f6bbfa1685: undefined
(anonymous) @ realtime.ts:178Understand this error
realtime.ts:181 🔄 Attempting to resubscribe to lobby:1e5f5063-4ee5-4875-8f01-b2b4d6d56a3a
realtime.ts:181 🔄 Attempting to resubscribe to lobby:fb2b52c2-d6ec-4b30-a2da-a2f6bbfa1685
realtime.ts:173 📡 Channel subscription status for lobby:1e5f5063-4ee5-4875-8f01-b2b4d6d56a3a: SUBSCRIBED 
realtime.ts:176 ✅ Successfully subscribed to lobby:1e5f5063-4ee5-4875-8f01-b2b4d6d56a3a
realtime.ts:173 📡 Channel subscription status for lobby:fb2b52c2-d6ec-4b30-a2da-a2f6bbfa1685: SUBSCRIBED 
realtime.ts:176 ✅ Successfully subscribed to lobby:fb2b52c2-d6ec-4b30-a2da-a2f6bbfa1685
realtime.ts:196 🔗 Channel joined for lobby:1e5f5063-4ee5-4875-8f01-b2b4d6d56a3a
realtime.ts:200 👋 Channel left for lobby:1e5f5063-4ee5-4875-8f01-b2b4d6d56a3a
realtime.ts:204 💥 Channel system error for lobby:1e5f5063-4ee5-4875-8f01-b2b4d6d56a3a: Object