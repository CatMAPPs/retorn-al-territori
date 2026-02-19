{removed prior logs for brevity}
useLobby.ts:202 🎮 startMultiplayerGame called for lobby: b7bea2a3-5b08-4158-9799-5a612e3e67d0
useLobby.ts:205 ⏳ Setting loading state for game start
useLobby.ts:209 🚀 Calling startGame API...
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:617 🎮 Updating lobby status to in_progress...
queries.ts:633 ✅ Lobby status updated successfully
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: game_started
queries.ts:644 📢 Broadcasted game started event for lobby: b7bea2a3-5b08-4158-9799-5a612e3e67d0
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
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:57 🎯 MultiplayerView: Lobby status changed: waiting → in_progress
MultiplayerView.vue:59 🎮 MultiplayerView: Lobby status is now in_progress - should show game screen
useLobby.ts:234 ✅ Fallback game start completed
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:569 📤 useLobby returning actions only - state accessed via store directly
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: false, hasCoordinates: false, hasYear: true, …}
LobbyGameplay.vue:283 🗺️ Map clicked: Proxy(Object) {lat: 52.214338608258224, lon: 13.359375000000002} hasSubmitted: false
LobbyGameplay.vue:287 📍 Set guessedLat: 52.214338608258224 guessedLon: 13.359375000000002
LobbyGameplay.vue:89 🔘 canSubmit check: {result: true, hasSubmitted: false, isSubmitting: false, hasCoordinates: true, hasYear: true, …}
realtime.ts:163 📢 REALTIME: Submission received via broadcast: {figure_id: '572fb89d-07be-4b9b-8b5c-33f3c9de79c0', guessed_lat: 38.0178039800611, guessed_lon: 90.3515625, guessed_name: '', guessed_year: 0, …}
realtime.ts:164 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:504 📨 Submission received: {figure_id: '572fb89d-07be-4b9b-8b5c-33f3c9de79c0', guessed_lat: 38.0178039800611, guessed_lon: 90.3515625, guessed_name: '', guessed_year: 0, …}
useLobby.ts:517 📊 Added new submission from user, total now: 1 players: 2
realtime.ts:167 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
LobbyGameplay.vue:176 🎯 handleSubmitGuess called
LobbyGameplay.vue:177 canSubmit: true currentFigure: true
LobbyGameplay.vue:213 ✅ Client-side validation passed: {lat: 52.214338608258224, lon: 13.359375000000002, year: 0}
LobbyGameplay.vue:216 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:242 📊 Calculated scores: {spatial: 22, temporal: 0, name: 0, speed: 70, total: 92}
useLobby.ts:269 🎯 submitGuess called with: {guessedName: '', guessedLat: 52.214338608258224, guessedLon: 13.359375000000002, guessedYear: 0, score: 92}
useLobby.ts:284 🔄 Calling submitMultiplayerGuess...
LobbyGameplay.vue:89 🔘 canSubmit check: {result: false, hasSubmitted: false, isSubmitting: true, hasCoordinates: true, hasYear: true, …}
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: submission_received
queries.ts:688 📢 Broadcast sent for submission: 0d558a58-88b1-4f06-9f50-fac12295a357
useLobby.ts:300 ✅ submitMultiplayerGuess returned: {id: '0d558a58-88b1-4f06-9f50-fac12295a357', lobby_id: 'b7bea2a3-5b08-4158-9799-5a612e3e67d0', user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', round_number: 1, figure_id: '572fb89d-07be-4b9b-8b5c-33f3c9de79c0', …}
useLobby.ts:303 🎯 Adding own submission to local roundSubmissions: 0d558a58-88b1-4f06-9f50-fac12295a357
useLobby.ts:306 📊 roundSubmissions now has 2 items
useLobby.ts:310 🎯 All players submitted (including self) - reveal phase should start in UI
LobbyGameplay.vue:294 🎯 All players submitted - showing reveal phase
LobbyGameplay.vue:295 🎯 Current figure for reveal: Rosa Parks
LobbyGameplay.vue:299 ⏸️ Timer paused during reveal phase
RevealPhase.vue:132 RevealPhase figure data: {name: 'Rosa Parks', hometown: 'Tuskegee, Alabama', hasHometown: true, hometownLength: 17}
LobbyGameplay.vue:259 ✅ submitGuess completed successfully, setting hasSubmitted = true
LobbyGameplay.vue:262 ✅ hasSubmitted set to true, button should be disabled
LobbyGameplay.vue:266 🎯 Adding own submission to local state: {id: '0d558a58-88b1-4f06-9f50-fac12295a357', lobby_id: 'b7bea2a3-5b08-4158-9799-5a612e3e67d0', user_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', round_number: 1, figure_id: '572fb89d-07be-4b9b-8b5c-33f3c9de79c0', …}
LobbyGameplay.vue:308 🎯 handleReadyForNextRound called: true
LobbyGameplay.vue:313 🎯 Setting player ready for next round: 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 true
lobbyStore.ts:98 🏪 STORE: setPlayerReadyForNextRound called for user 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 ready: true
lobbyStore.ts:111 🏪 STORE: setPlayerReadyForNextRound completed - ready players: Proxy(Array) {0: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6'}
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:34 [Vue warn]: onUnmounted is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.
warn$1 @ chunk-LG6AQRJS.js?v=a926d579:2149
injectHook @ chunk-LG6AQRJS.js?v=a926d579:4991
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:4998
useLobby @ useLobby.ts:34
handleReadyForNextRound @ LobbyGameplay.vue:317
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
emit @ chunk-LG6AQRJS.js?v=a926d579:8589
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:10300
handleNext @ RevealPhase.vue:167
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
emit @ chunk-LG6AQRJS.js?v=a926d579:8589
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:10300
handleClick @ Button.vue:98
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335Understand this warning
useLobby.ts:569 📤 useLobby returning actions only - state accessed via store directly
RevealPhase.vue:167 [Vue warn]: Unhandled error during execution of component event handler 
  at <RevealPhase figure= {id: '572fb89d-07be-4b9b-8b5c-33f3c9de79c0', name: 'Rosa Parks', aliases: Array(1), images: Array(1), birth_year: 1913, …} is-multiplayer=true round-submissions= (2) [Proxy(Object), {…}]  ... > 
  at <LobbyGameplay lobby= {id: 'b7bea2a3-5b08-4158-9799-5a612e3e67d0', room_code: 'MWE59J', host_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', status: 'in_progress', current_round: 1, …} players= (2) [{…}, {…}] current-round=1  ... > 
  at <MultiplayerView onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< Proxy(Object) {__v_skip: true} > > 
  at <RouterView> 
  at <App>
warn$1 @ chunk-LG6AQRJS.js?v=a926d579:2149
logError @ chunk-LG6AQRJS.js?v=a926d579:2360
handleError @ chunk-LG6AQRJS.js?v=a926d579:2352
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2298
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
emit @ chunk-LG6AQRJS.js?v=a926d579:8589
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:10300
handleNext @ RevealPhase.vue:167
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
emit @ chunk-LG6AQRJS.js?v=a926d579:8589
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:10300
handleClick @ Button.vue:98
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335Understand this warning
Button.vue:98 [Vue warn]: Unhandled error during execution of component event handler 
  at <Button variant="primary" size="lg" full-width=""  ... > 
  at <RevealPhase figure= {id: '572fb89d-07be-4b9b-8b5c-33f3c9de79c0', name: 'Rosa Parks', aliases: Array(1), images: Array(1), birth_year: 1913, …} is-multiplayer=true round-submissions= (2) [Proxy(Object), {…}]  ... > 
  at <LobbyGameplay lobby= {id: 'b7bea2a3-5b08-4158-9799-5a612e3e67d0', room_code: 'MWE59J', host_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', status: 'in_progress', current_round: 1, …} players= (2) [{…}, {…}] current-round=1  ... > 
  at <MultiplayerView onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< Proxy(Object) {__v_skip: true} > > 
  at <RouterView> 
  at <App>
warn$1 @ chunk-LG6AQRJS.js?v=a926d579:2149
logError @ chunk-LG6AQRJS.js?v=a926d579:2360
handleError @ chunk-LG6AQRJS.js?v=a926d579:2352
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2298
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
emit @ chunk-LG6AQRJS.js?v=a926d579:8589
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:10300
handleClick @ Button.vue:98
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335Understand this warning
chunk-LG6AQRJS.js?v=a926d579:2149 [Vue warn]: Unhandled error during execution of native event handler 
  at <Button variant="primary" size="lg" full-width=""  ... > 
  at <RevealPhase figure= {id: '572fb89d-07be-4b9b-8b5c-33f3c9de79c0', name: 'Rosa Parks', aliases: Array(1), images: Array(1), birth_year: 1913, …} is-multiplayer=true round-submissions= (2) [Proxy(Object), {…}]  ... > 
  at <LobbyGameplay lobby= {id: 'b7bea2a3-5b08-4158-9799-5a612e3e67d0', room_code: 'MWE59J', host_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', status: 'in_progress', current_round: 1, …} players= (2) [{…}, {…}] current-round=1  ... > 
  at <MultiplayerView onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< Proxy(Object) {__v_skip: true} > > 
  at <RouterView> 
  at <App>
warn$1 @ chunk-LG6AQRJS.js?v=a926d579:2149
logError @ chunk-LG6AQRJS.js?v=a926d579:2360
handleError @ chunk-LG6AQRJS.js?v=a926d579:2352
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2298
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335Understand this warning
chunk-LG6AQRJS.js?v=a926d579:2365 Uncaught TypeError: broadcastEvent is not a function
    at handleReadyForNextRound (LobbyGameplay.vue:318:5)
    at callWithErrorHandling (chunk-LG6AQRJS.js?v=a926d579:2296:19)
    at callWithAsyncErrorHandling (chunk-LG6AQRJS.js?v=a926d579:2303:17)
    at emit (chunk-LG6AQRJS.js?v=a926d579:8589:5)
    at chunk-LG6AQRJS.js?v=a926d579:10300:45
    at handleNext (RevealPhase.vue:167:5)
    at callWithErrorHandling (chunk-LG6AQRJS.js?v=a926d579:2296:19)
    at callWithAsyncErrorHandling (chunk-LG6AQRJS.js?v=a926d579:2303:17)
    at emit (chunk-LG6AQRJS.js?v=a926d579:8589:5)
    at chunk-LG6AQRJS.js?v=a926d579:10300:45
handleReadyForNextRound @ LobbyGameplay.vue:318
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
emit @ chunk-LG6AQRJS.js?v=a926d579:8589
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:10300
handleNext @ RevealPhase.vue:167
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
emit @ chunk-LG6AQRJS.js?v=a926d579:8589
(anonymous) @ chunk-LG6AQRJS.js?v=a926d579:10300
handleClick @ Button.vue:98
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2303
invoker @ chunk-LG6AQRJS.js?v=a926d579:11335Understand this error
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency...
realtime.ts:185 📡 Channel subscription status for lobby:b7bea2a3-5b08-4158-9799-5a612e3e67d0: CHANNEL_ERROR 
realtime.ts:190 ❌ Channel error for lobby:b7bea2a3-5b08-4158-9799-5a612e3e67d0: undefined
(anonymous) @ realtime.ts:190
(anonymous) @ @supabase_supabase-js.js?v=a926d579:2680
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3085
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3002
_trigger @ @supabase_supabase-js.js?v=a926d579:2987
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3629
_triggerChanError @ @supabase_supabase-js.js?v=a926d579:3629
_onConnClose @ @supabase_supabase-js.js?v=a926d579:3613
conn.onclose @ @supabase_supabase-js.js?v=a926d579:3548Understand this error
realtime.ts:193 🔄 Attempting to resubscribe to lobby:b7bea2a3-5b08-4158-9799-5a612e3e67d0
realtime.ts:185 📡 Channel subscription status for lobby:b7bea2a3-5b08-4158-9799-5a612e3e67d0: SUBSCRIBED 
realtime.ts:188 ✅ Successfully subscribed to lobby:b7bea2a3-5b08-4158-9799-5a612e3e67d0
realtime.ts:208 🔗 Channel joined for lobby:b7bea2a3-5b08-4158-9799-5a612e3e67d0
realtime.ts:212 👋 Channel left for lobby:b7bea2a3-5b08-4158-9799-5a612e3e67d0
realtime.ts:216 💥 Channel system error for lobby:b7bea2a3-5b08-4158-9799-5a612e3e67d0: {message: 'Unable to subscribe to changes with given paramete…, "eq", "b7bea2a3-5b08-4158-9799-5a612e3e67d0"}]]', status: 'error', extension: 'postgres_changes', channel: 'lobby:b7bea2a3-5b08-4158-9799-5a612e3e67d0'}