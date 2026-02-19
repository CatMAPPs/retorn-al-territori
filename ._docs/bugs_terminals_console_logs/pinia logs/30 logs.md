🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: Object
useLobby.ts:559 📤 useLobby returning actions only - state accessed via store directly
MultiplayerView.vue:37 🔍 lobbyStore reactive refs: Object
MultiplayerView.vue:38 🎯 MultiplayerView mounted, initial state: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: undefined → undefined
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: Object
useLobby.ts:559 📤 useLobby returning actions only - state accessed via store directly
LobbyCreateJoin.vue:20 🎨 LobbyCreateJoin component mounted!
LobbyCreateJoin.vue:21 🔍 LobbyCreateJoin reactive values: Object
MultiplayerView.vue:31 🎯 MultiplayerView mounted - cleaning up any existing lobby state
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
authStore.ts:47 👂 Setting up auth state listener...
authStore.ts:73 ✅ Auth store initialized
authStore.ts:49 🔄 Auth state change: INITIAL_SESSION Session exists
LobbyCreateJoin.vue:32 🏗️ LobbyCreateJoin.handleCreateLobby called!
LobbyCreateJoin.vue:33 🔍 Component state: Object
LobbyCreateJoin.vue:35 🚀 Calling createNewLobby...
useLobby.ts:43 🎯 createNewLobby called - checking auth...
useLobby.ts:45 👤 Auth user: Object
useLobby.ts:53 ⏳ Setting loading state...
useLobby.ts:58 🧹 Leaving any existing lobbies before creating new one
queries.ts:544 🏠 leaveAllLobbies: Removing user from all lobbies: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:556 ✅ leaveAllLobbies: Successfully removed user from all lobbies
useLobby.ts:66 🏗️ Creating lobby for user: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 test11
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
useLobby.ts:361 🔌 Setting up realtime subscription for lobby: d3e878e9-534d-4b14-97ee-e8a21002599f
realtime.ts:21 📡 Subscribing to channel: lobby:d3e878e9-534d-4b14-97ee-e8a21002599f
useLobby.ts:87 ✅ Realtime subscription setup completed
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: undefined → waiting
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: Object
useLobby.ts:559 📤 useLobby returning actions only - state accessed via store directly
LobbyWaitingRoom.vue:26 🎯 LobbyWaitingRoom props: Object
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: Array(1)
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false Object
LobbyCreateJoin.vue:37 ✅ createNewLobby completed successfully
realtime.ts:173 📡 Channel subscription status for lobby:d3e878e9-534d-4b14-97ee-e8a21002599f: SUBSCRIBED 
realtime.ts:176 ✅ Successfully subscribed to lobby:d3e878e9-534d-4b14-97ee-e8a21002599f
realtime.ts:196 🔗 Channel joined for lobby:d3e878e9-534d-4b14-97ee-e8a21002599f
realtime.ts:200 👋 Channel left for lobby:d3e878e9-534d-4b14-97ee-e8a21002599f
realtime.ts:204 💥 Channel system error for lobby:d3e878e9-534d-4b14-97ee-e8a21002599f: Object
(anonymous) @ realtime.ts:204Understand this error
realtime.ts:61 📢 REALTIME: Player joined lobby via broadcast Object
useLobby.ts:373 👥 REALTIME CALLBACK: Player joined, refreshing players list
useLobby.ts:377 👥 REALTIME CALLBACK: Got players from DB: 2
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: Array(1)
lobbyStore.ts:37 🏪 STORE: New players: Array(2)
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:379 👥 REALTIME CALLBACK: Updated store with players
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: Object
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: Array(2)
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false Object
LobbyWaitingRoom.vue:69 🎯 handleToggleReady called in component
useLobby.ts:164 🎯 toggleReady called
useLobby.ts:172 🎯 toggleReady: Current ready state: false → New state: true
useLobby.ts:175 ⚡ toggleReady: Applying optimistic local update
lobbyStore.ts:71 🏪 STORE: updatePlayerReady called for player a494068a-06d3-4569-a4b0-159108442b9e ready: true
lobbyStore.ts:78 🏪 STORE: updatePlayerReady completed - fresh array assigned
useLobby.ts:179 🔄 toggleReady: Updating database...
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: Object
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: Array(2)
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false Object
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: player_ready
queries.ts:731 📢 Broadcasted player ready event for 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 ready: true
useLobby.ts:186 ✅ toggleReady: Database update completed - optimistic update confirmed
realtime.ts:67 📢 REALTIME: Player ready status updated via broadcast Object
realtime.ts:68 📢 REALTIME: About to call onPlayerReady callback with userId: 26aa8060-5887-4a29-8b5a-2356ebc0cafb
useLobby.ts:396 👥 REALTIME CALLBACK: Player ready status changed for player: 26aa8060-5887-4a29-8b5a-2356ebc0cafb
useLobby.ts:398 👥 REALTIME CALLBACK: About to refresh players list for lobby: d3e878e9-534d-4b14-97ee-e8a21002599f
realtime.ts:71 📢 REALTIME: onPlayerReady callback called successfully
useLobby.ts:401 👥 REALTIME CALLBACK: Server players: Array(2)
useLobby.ts:416 👥 REALTIME CALLBACK: Current user optimistic state - server: true local: true
useLobby.ts:428 👥 REALTIME CALLBACK: Final reconciled players: Array(2)
useLobby.ts:430 👥 REALTIME CALLBACK: About to update store with reconciled players
lobbyStore.ts:35 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:36 🏪 STORE: Current players: Array(2)
lobbyStore.ts:37 🏪 STORE: New players: Array(2)
lobbyStore.ts:41 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:432 👥 REALTIME CALLBACK: Updated store after ready change - reactivity is automatic!
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: Object
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: true players: Array(2)
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: true Object
LobbyWaitingRoom.vue:74 🎮 LobbyWaitingRoom: Start Game button clicked
LobbyWaitingRoom.vue:75 🎮 LobbyWaitingRoom: Current state: Object
useLobby.ts:202 🎮 startMultiplayerGame called for lobby: d3e878e9-534d-4b14-97ee-e8a21002599f
useLobby.ts:205 ⏳ Setting loading state for game start
useLobby.ts:209 🚀 Calling startGame API...
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:617 🎮 Updating lobby status to in_progress...
queries.ts:633 ✅ Lobby status updated successfully
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: game_started
queries.ts:644 📢 Broadcasted game started event for lobby: d3e878e9-534d-4b14-97ee-e8a21002599f
useLobby.ts:211 ✅ startGame API completed - game started successfully!
useLobby.ts:212 ⏳ Waiting for realtime status update to transition UI...
useLobby.ts:217 ⏰ Realtime transition timeout - forcing game start manually
(anonymous) @ useLobby.ts:217Understand this warning
useLobby.ts:224 🔄 Fallback: Manually updating lobby status to in_progress
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: waiting → in_progress
MultiplayerView.vue:58 🎮 MultiplayerView: Lobby status is now in_progress - should show game screen
useLobby.ts:234 ✅ Fallback game start completed
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: Object
useLobby.ts:559 📤 useLobby returning actions only - state accessed via store directly
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:278 🗺️ Map clicked: Proxy(Object) hasSubmitted: false
LobbyGameplay.vue:282 📍 Set guessedLat: -76.70001918871925 guessedLon: 151.52343750000003
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:171 🎯 handleSubmitGuess called
LobbyGameplay.vue:172 canSubmit: true currentFigure: true
LobbyGameplay.vue:208 ✅ Client-side validation passed: Object
LobbyGameplay.vue:211 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:237 📊 Calculated scores: Object
useLobby.ts:269 🎯 submitGuess called with: Object
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 08588b4d-b762-436e-bdef-684f5c83d135
useLobby.ts:300 ✅ submitMultiplayerGuess returned: Object
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 08588b4d-b762-436e-bdef-684f5c83d135
useLobby.ts:306 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:254 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:257 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:261 🎯 Adding own submission to local state: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:162 📢 REALTIME: Submission received via broadcast: Object
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: Object
useLobby.ts:507 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:522 🎯 All players submitted - reveal phase should start in UI
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:289 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:290 🎯 Current figure for reveal: Cleopatra VII
LobbyGameplay.vue:294 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: Object
LobbyGameplay.vue:303 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:92 📊 Score updates for this round: Object
MultiplayerView.vue:93 📊 Current player scores before update: Array(2)
LobbyGameplay.vue:307 🔄 Resetting UI state for next round
LobbyGameplay.vue:320 🔄 Resetting timer for next round
LobbyGameplay.vue:322 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:84 🔘 canSubmit check: Object
MultiplayerView.vue:102 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 0 + 730 = 730
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:102 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 0 + 176 = 176
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:117 📊 Player scores after update: Array(2)
MultiplayerView.vue:120 🎲 Current round: 1 Next round would be: 2
MultiplayerView.vue:128 🎯 Starting next round: 2
MultiplayerView.vue:132 🎯 Starting round with figure: Frida Kahlo
MultiplayerView.vue:141 ✅ Round advancement completed
LobbyGameplay.vue:278 🗺️ Map clicked: Proxy(Object) hasSubmitted: false
LobbyGameplay.vue:282 📍 Set guessedLat: -16.003575733881313 guessedLon: -62.57812500000001
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:162 📢 REALTIME: Submission received via broadcast: Object
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: Object
useLobby.ts:507 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:171 🎯 handleSubmitGuess called
LobbyGameplay.vue:172 canSubmit: true currentFigure: true
LobbyGameplay.vue:208 ✅ Client-side validation passed: Object
LobbyGameplay.vue:211 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:237 📊 Calculated scores: Object
useLobby.ts:269 🎯 submitGuess called with: Object
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: c43acfdb-d2a2-4e12-8513-f17d85214e18
useLobby.ts:300 ✅ submitMultiplayerGuess returned: Object
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: c43acfdb-d2a2-4e12-8513-f17d85214e18
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:289 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:290 🎯 Current figure for reveal: Frida Kahlo
LobbyGameplay.vue:294 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: Object
LobbyGameplay.vue:254 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:257 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:261 🎯 Adding own submission to local state: Object
LobbyGameplay.vue:303 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:92 📊 Score updates for this round: Object
MultiplayerView.vue:93 📊 Current player scores before update: Array(2)
LobbyGameplay.vue:307 🔄 Resetting UI state for next round
LobbyGameplay.vue:320 🔄 Resetting timer for next round
LobbyGameplay.vue:322 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:84 🔘 canSubmit check: Object
MultiplayerView.vue:102 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 176 + 1893 = 2069
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:102 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 730 + 1564 = 2294
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:117 📊 Player scores after update: Array(2)
MultiplayerView.vue:120 🎲 Current round: 2 Next round would be: 3
MultiplayerView.vue:128 🎯 Starting next round: 3
MultiplayerView.vue:132 🎯 Starting round with figure: Alan Turing
MultiplayerView.vue:141 ✅ Round advancement completed
LobbyGameplay.vue:278 🗺️ Map clicked: Proxy(Object) hasSubmitted: false
LobbyGameplay.vue:282 📍 Set guessedLat: 51.56341232867588 guessedLon: -3.5156250000000004
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:162 📢 REALTIME: Submission received via broadcast: Object
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: Object
useLobby.ts:507 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:171 🎯 handleSubmitGuess called
LobbyGameplay.vue:172 canSubmit: true currentFigure: true
LobbyGameplay.vue:208 ✅ Client-side validation passed: Object
LobbyGameplay.vue:211 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:237 📊 Calculated scores: Object
useLobby.ts:269 🎯 submitGuess called with: Object
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 8155a7a7-a713-4c0a-a51a-d2539bdcb9ca
useLobby.ts:300 ✅ submitMultiplayerGuess returned: Object
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 8155a7a7-a713-4c0a-a51a-d2539bdcb9ca
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:289 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:290 🎯 Current figure for reveal: Alan Turing
LobbyGameplay.vue:294 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: Object
LobbyGameplay.vue:254 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:257 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:261 🎯 Adding own submission to local state: Object
LobbyGameplay.vue:303 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:92 📊 Score updates for this round: Object
MultiplayerView.vue:93 📊 Current player scores before update: Array(2)
LobbyGameplay.vue:307 🔄 Resetting UI state for next round
LobbyGameplay.vue:320 🔄 Resetting timer for next round
LobbyGameplay.vue:322 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:84 🔘 canSubmit check: Object
MultiplayerView.vue:102 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 2069 + 743 = 2812
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:102 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 2294 + 1514 = 3808
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:117 📊 Player scores after update: Array(2)
MultiplayerView.vue:120 🎲 Current round: 3 Next round would be: 4
MultiplayerView.vue:128 🎯 Starting next round: 4
MultiplayerView.vue:132 🎯 Starting round with figure: Nelson Mandela
MultiplayerView.vue:141 ✅ Round advancement completed
LobbyGameplay.vue:278 🗺️ Map clicked: Proxy(Object) hasSubmitted: false
LobbyGameplay.vue:282 📍 Set guessedLat: -33.797408767572485 guessedLon: 20.742187500000004
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:162 📢 REALTIME: Submission received via broadcast: Object
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: Object
useLobby.ts:507 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:171 🎯 handleSubmitGuess called
LobbyGameplay.vue:172 canSubmit: true currentFigure: true
LobbyGameplay.vue:208 ✅ Client-side validation passed: Object
LobbyGameplay.vue:211 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:237 📊 Calculated scores: Object
useLobby.ts:269 🎯 submitGuess called with: Object
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 0cc123a6-3de3-4ccb-8baf-683e05527b62
useLobby.ts:300 ✅ submitMultiplayerGuess returned: Object
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 0cc123a6-3de3-4ccb-8baf-683e05527b62
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:289 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:290 🎯 Current figure for reveal: Nelson Mandela
LobbyGameplay.vue:294 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: Object
LobbyGameplay.vue:254 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:257 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:261 🎯 Adding own submission to local state: Object
LobbyGameplay.vue:303 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:92 📊 Score updates for this round: Object
MultiplayerView.vue:93 📊 Current player scores before update: Array(2)
LobbyGameplay.vue:307 🔄 Resetting UI state for next round
LobbyGameplay.vue:320 🔄 Resetting timer for next round
LobbyGameplay.vue:322 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:84 🔘 canSubmit check: Object
MultiplayerView.vue:102 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 2812 + 20 = 2832
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:102 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 3808 + 2126 = 5934
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:117 📊 Player scores after update: Array(2)
MultiplayerView.vue:120 🎲 Current round: 4 Next round would be: 5
MultiplayerView.vue:128 🎯 Starting next round: 5
MultiplayerView.vue:132 🎯 Starting round with figure: Albert Einstein
MultiplayerView.vue:141 ✅ Round advancement completed
LobbyGameplay.vue:278 🗺️ Map clicked: Proxy(Object) hasSubmitted: false
LobbyGameplay.vue:282 📍 Set guessedLat: 51.56341232867588 guessedLon: -0.3515625
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:162 📢 REALTIME: Submission received via broadcast: Object
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: Object
useLobby.ts:507 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:51 ⏰ Timer expired - auto-submitting with current guesses
LobbyGameplay.vue:111 ⏰ autoSubmitOnTimeout called - submitting with current state
LobbyGameplay.vue:112 Current guesses - name:  coords: 51.56341232867588 -0.3515625 year: 0
LobbyGameplay.vue:133 📊 Auto-submitting with sanitized values: Object
LobbyGameplay.vue:142 📊 Auto-submit scores: Object
useLobby.ts:269 🎯 submitGuess called with: Object
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: b3214cc8-784d-4aaf-94f1-4fdcd33585da
useLobby.ts:300 ✅ submitMultiplayerGuess returned: Object
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: b3214cc8-784d-4aaf-94f1-4fdcd33585da
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:289 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:290 🎯 Current figure for reveal: Albert Einstein
LobbyGameplay.vue:294 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: Object
LobbyGameplay.vue:147 ✅ Auto-submit completed successfully
LobbyGameplay.vue:152 🎯 Adding auto-submitted guess to local state: b3214cc8-784d-4aaf-94f1-4fdcd33585da
LobbyGameplay.vue:303 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:92 📊 Score updates for this round: Object
MultiplayerView.vue:93 📊 Current player scores before update: Array(2)
LobbyGameplay.vue:307 🔄 Resetting UI state for next round
LobbyGameplay.vue:320 🔄 Resetting timer for next round
LobbyGameplay.vue:322 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:84 🔘 canSubmit check: Object
MultiplayerView.vue:102 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 2832 + 766 = 3598
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:102 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 5934 + 718 = 6652
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:117 📊 Player scores after update: Array(2)
MultiplayerView.vue:120 🎲 Current round: 5 Next round would be: 6
MultiplayerView.vue:128 🎯 Starting next round: 6
MultiplayerView.vue:132 🎯 Starting round with figure: Winston Churchill
MultiplayerView.vue:141 ✅ Round advancement completed
LobbyGameplay.vue:278 🗺️ Map clicked: Proxy(Object) hasSubmitted: false
LobbyGameplay.vue:282 📍 Set guessedLat: 24.126701958681682 guessedLon: 72.42187500000001
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:162 📢 REALTIME: Submission received via broadcast: Object
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: Object
useLobby.ts:507 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:171 🎯 handleSubmitGuess called
LobbyGameplay.vue:172 canSubmit: true currentFigure: true
LobbyGameplay.vue:208 ✅ Client-side validation passed: Object
LobbyGameplay.vue:211 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:237 📊 Calculated scores: Object
useLobby.ts:269 🎯 submitGuess called with: Object
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 04179c2b-b0d3-432c-9775-d2b31943b1cd
useLobby.ts:300 ✅ submitMultiplayerGuess returned: Object
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 04179c2b-b0d3-432c-9775-d2b31943b1cd
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:289 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:290 🎯 Current figure for reveal: Winston Churchill
LobbyGameplay.vue:294 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: Object
LobbyGameplay.vue:254 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:257 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:261 🎯 Adding own submission to local state: Object
LobbyGameplay.vue:303 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:92 📊 Score updates for this round: Object
MultiplayerView.vue:93 📊 Current player scores before update: Array(2)
LobbyGameplay.vue:307 🔄 Resetting UI state for next round
LobbyGameplay.vue:320 🔄 Resetting timer for next round
LobbyGameplay.vue:322 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:84 🔘 canSubmit check: Object
MultiplayerView.vue:102 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 3598 + 51 = 3649
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:102 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 6652 + 858 = 7510
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:117 📊 Player scores after update: Array(2)
MultiplayerView.vue:120 🎲 Current round: 6 Next round would be: 7
MultiplayerView.vue:128 🎯 Starting next round: 7
MultiplayerView.vue:132 🎯 Starting round with figure: Stephen Hawking
MultiplayerView.vue:141 ✅ Round advancement completed
LobbyGameplay.vue:278 🗺️ Map clicked: Proxy(Object) hasSubmitted: false
LobbyGameplay.vue:282 📍 Set guessedLat: 3.0746950723696944 guessedLon: 75.93750000000001
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:171 🎯 handleSubmitGuess called
LobbyGameplay.vue:172 canSubmit: true currentFigure: true
LobbyGameplay.vue:208 ✅ Client-side validation passed: Object
LobbyGameplay.vue:211 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:237 📊 Calculated scores: Object
useLobby.ts:269 🎯 submitGuess called with: Object
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 695650ac-9e2b-46d5-a5c6-8782e69e8ffa
useLobby.ts:300 ✅ submitMultiplayerGuess returned: Object
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 695650ac-9e2b-46d5-a5c6-8782e69e8ffa
useLobby.ts:306 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:254 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:257 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:261 🎯 Adding own submission to local state: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:162 📢 REALTIME: Submission received via broadcast: Object
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: Object
useLobby.ts:507 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:522 🎯 All players submitted - reveal phase should start in UI
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:289 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:290 🎯 Current figure for reveal: Stephen Hawking
LobbyGameplay.vue:294 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: Object
LobbyGameplay.vue:303 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:92 📊 Score updates for this round: Object
MultiplayerView.vue:93 📊 Current player scores before update: Array(2)
LobbyGameplay.vue:307 🔄 Resetting UI state for next round
LobbyGameplay.vue:320 🔄 Resetting timer for next round
LobbyGameplay.vue:322 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:84 🔘 canSubmit check: Object
MultiplayerView.vue:102 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 7510 + 100 = 7610
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:102 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 3649 + 121 = 3770
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:117 📊 Player scores after update: Array(2)
MultiplayerView.vue:120 🎲 Current round: 7 Next round would be: 8
MultiplayerView.vue:128 🎯 Starting next round: 8
MultiplayerView.vue:132 🎯 Starting round with figure: Marie Curie
MultiplayerView.vue:141 ✅ Round advancement completed
LobbyGameplay.vue:278 🗺️ Map clicked: Proxy(Object) hasSubmitted: false
LobbyGameplay.vue:282 📍 Set guessedLat: 46.9052455464292 guessedLon: 8.525390625000002
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:162 📢 REALTIME: Submission received via broadcast: Object
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: Object
useLobby.ts:507 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:171 🎯 handleSubmitGuess called
LobbyGameplay.vue:172 canSubmit: true currentFigure: true
LobbyGameplay.vue:208 ✅ Client-side validation passed: Object
LobbyGameplay.vue:211 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:237 📊 Calculated scores: Object
useLobby.ts:269 🎯 submitGuess called with: Object
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 6c52e1d4-b5ee-42e2-914e-c8b5f3307282
useLobby.ts:300 ✅ submitMultiplayerGuess returned: Object
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 6c52e1d4-b5ee-42e2-914e-c8b5f3307282
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:289 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:290 🎯 Current figure for reveal: Marie Curie
LobbyGameplay.vue:294 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: Object
LobbyGameplay.vue:254 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:257 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:261 🎯 Adding own submission to local state: Object
LobbyGameplay.vue:303 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:92 📊 Score updates for this round: Object
MultiplayerView.vue:93 📊 Current player scores before update: Array(2)
LobbyGameplay.vue:307 🔄 Resetting UI state for next round
LobbyGameplay.vue:320 🔄 Resetting timer for next round
LobbyGameplay.vue:322 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:84 🔘 canSubmit check: Object
MultiplayerView.vue:102 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 3770 + 1507 = 5277
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:102 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 7610 + 722 = 8332
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:117 📊 Player scores after update: Array(2)
MultiplayerView.vue:120 🎲 Current round: 8 Next round would be: 9
MultiplayerView.vue:128 🎯 Starting next round: 9
MultiplayerView.vue:132 🎯 Starting round with figure: Queen Elizabeth I
MultiplayerView.vue:141 ✅ Round advancement completed
realtime.ts:162 📢 REALTIME: Submission received via broadcast: Object
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: Object
useLobby.ts:507 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:278 🗺️ Map clicked: Proxy(Object) hasSubmitted: false
LobbyGameplay.vue:282 📍 Set guessedLat: -15.029685756555674 guessedLon: -55.54687500000001
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:171 🎯 handleSubmitGuess called
LobbyGameplay.vue:172 canSubmit: true currentFigure: true
LobbyGameplay.vue:208 ✅ Client-side validation passed: Object
LobbyGameplay.vue:211 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:237 📊 Calculated scores: Object
useLobby.ts:269 🎯 submitGuess called with: Object
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 752f763c-1b10-41ec-a4d3-1c7b271f1ca1
useLobby.ts:300 ✅ submitMultiplayerGuess returned: Object
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 752f763c-1b10-41ec-a4d3-1c7b271f1ca1
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:289 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:290 🎯 Current figure for reveal: Queen Elizabeth I
LobbyGameplay.vue:294 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: Object
LobbyGameplay.vue:254 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:257 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:261 🎯 Adding own submission to local state: Object
LobbyGameplay.vue:303 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:92 📊 Score updates for this round: Object
MultiplayerView.vue:93 📊 Current player scores before update: Array(2)
LobbyGameplay.vue:307 🔄 Resetting UI state for next round
LobbyGameplay.vue:320 🔄 Resetting timer for next round
LobbyGameplay.vue:322 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:84 🔘 canSubmit check: Object
MultiplayerView.vue:102 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 5277 + 801 = 6078
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:102 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 8332 + 34 = 8366
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:117 📊 Player scores after update: Array(2)
MultiplayerView.vue:120 🎲 Current round: 9 Next round would be: 10
MultiplayerView.vue:128 🎯 Starting next round: 10
MultiplayerView.vue:132 🎯 Starting round with figure: Confucius
MultiplayerView.vue:141 ✅ Round advancement completed
LobbyGameplay.vue:278 🗺️ Map clicked: Proxy(Object) hasSubmitted: false
LobbyGameplay.vue:282 📍 Set guessedLat: 28.536274512989916 guessedLon: 115.66406250000001
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
LobbyGameplay.vue:171 🎯 handleSubmitGuess called
LobbyGameplay.vue:172 canSubmit: true currentFigure: true
LobbyGameplay.vue:208 ✅ Client-side validation passed: Object
LobbyGameplay.vue:211 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:237 📊 Calculated scores: Object
useLobby.ts:269 🎯 submitGuess called with: Object
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:235 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 89110dc7-9607-46d6-ab15-d913a34f71f6
useLobby.ts:300 ✅ submitMultiplayerGuess returned: Object
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 89110dc7-9607-46d6-ab15-d913a34f71f6
useLobby.ts:306 📊 roundSubmissions now has 1 items
LobbyGameplay.vue:254 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:257 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:261 🎯 Adding own submission to local state: Object
LobbyGameplay.vue:84 🔘 canSubmit check: Object
realtime.ts:162 📢 REALTIME: Submission received via broadcast: Object
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:494 📨 Submission received: Object
useLobby.ts:507 📊 Added new submission from user, total now: 2 players: 2
useLobby.ts:522 🎯 All players submitted - reveal phase should start in UI
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:289 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:290 🎯 Current figure for reveal: Confucius
LobbyGameplay.vue:294 ⏸️ Timer paused during reveal phase
RevealPhase.vue:123 RevealPhase figure data: Object
LobbyGameplay.vue:303 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:92 📊 Score updates for this round: Object
MultiplayerView.vue:93 📊 Current player scores before update: Array(2)
LobbyGameplay.vue:307 🔄 Resetting UI state for next round
LobbyGameplay.vue:320 🔄 Resetting timer for next round
LobbyGameplay.vue:322 ▶️ Starting fresh timer for next round
LobbyGameplay.vue:84 🔘 canSubmit check: Object
MultiplayerView.vue:102 🔢 Player 4cea1883-91bc-431f-ba4f-eddc93a8b4c6: 8366 + 1583 = 9949
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:102 🔢 Player 26aa8060-5887-4a29-8b5a-2356ebc0cafb: 6078 + 179 = 6257
queries.ts:746 🎯 updatePlayerScore called: Object
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
queries.ts:756 ✅ Player score updated successfully: Object
MultiplayerView.vue:110 💾 Persisted score to database: Object
MultiplayerView.vue:117 📊 Player scores after update: Array(2)
MultiplayerView.vue:120 🎲 Current round: 10 Next round would be: 11
MultiplayerView.vue:124 🏆 Game completed! All 10 rounds finished
MultiplayerView.vue:141 ✅ Round advancement completed
MultiplayerView.vue:46 🎯 MultiplayerView store changed: Object
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: in_progress → finished
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: Object
useLobby.ts:559 📤 useLobby returning actions only - state accessed via store directly
useLobby.ts:35 🧹 Cleaning up realtime subscription
LobbyGameplay.vue:103 🧹 LobbyGameplay unmounting - ensuring timer cleanup
LobbyResults.vue:25 📊 Fetching fresh player data for results...
LobbyResults.vue:26 📊 Props players: Array(2)
LobbyResults.vue:29 ✅ Loaded fresh player data from DB: Array(2)
LobbyResults.vue:30 ✅ Final playersData for display: Array(2)