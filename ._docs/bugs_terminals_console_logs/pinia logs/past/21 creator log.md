{Note: removed first 113 lines of console log for irrelevancy to our current problem solving}
useLobby.ts:203 🎮 startMultiplayerGame called for lobby: 6f0356ce-9280-4a7c-aba0-c71a8bdc10d2
useLobby.ts:206 ⏳ Setting loading state for game start
useLobby.ts:210 🚀 Calling startGame API...
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:617 🎮 Updating lobby status to in_progress...
queries.ts:633 ✅ Lobby status updated successfully
queries.ts:644 📢 Broadcasted game started event for lobby: 6f0356ce-9280-4a7c-aba0-c71a8bdc10d2
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
authStore.ts:49 🔄 Auth state change: TOKEN_REFRESHED Session exists
authStore.ts:69 🔄 Token refreshed
useLobby.ts:225 🔄 Fallback: Manually updating lobby status to in_progress
MultiplayerView.vue:46 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
MultiplayerView.vue:56 🎯 MultiplayerView: Lobby status changed: waiting → in_progress
MultiplayerView.vue:58 🎮 MultiplayerView: Lobby status is now in_progress - should show game screen
useLobby.ts:235 ✅ Fallback game start completed
useLobby.ts:20 🏗️ useLobby composable called
useLobby.ts:23 🏪 Initializing lobbyStore...
useLobby.ts:25 🏪 lobbyStore initialized: {isLoading: false, currentLobby: Proxy(Object), hasSetLoading: true}
useLobby.ts:514 📤 useLobby returning actions only - state accessed via store directly
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
realtime.ts:196 🔗 Channel joined for lobby:6f0356ce-9280-4a7c-aba0-c71a8bdc10d2
realtime.ts:200 👋 Channel left for lobby:6f0356ce-9280-4a7c-aba0-c71a8bdc10d2
realtime.ts:204 💥 Channel system error for lobby:6f0356ce-9280-4a7c-aba0-c71a8bdc10d2: {message: 'Unable to subscribe to changes with given paramete…, "eq", "6f0356ce-9280-4a7c-aba0-c71a8bdc10d2"}]]', status: 'error', extension: 'postgres_changes', channel: 'lobby:6f0356ce-9280-4a7c-aba0-c71a8bdc10d2'}
(anonymous) @ realtime.ts:204
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3002
_trigger @ @supabase_supabase-js.js?v=a926d579:2987
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
(anonymous) @ @supabase_supabase-js.js?v=a926d579:3509
decode @ @supabase_supabase-js.js?v=a926d579:2038
_onConnMessage @ @supabase_supabase-js.js?v=a926d579:3494
conn.onmessage @ @supabase_supabase-js.js?v=a926d579:3547Understand this error
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: false, guessedLat: null, guessedLon: null, guessedYear: 0, …}
LobbyGameplay.vue:185 🗺️ Map clicked: Proxy(Object) {lat: 43.345154990451135, lon: 6.328125000000001} hasSubmitted: false
LobbyGameplay.vue:189 📍 Set guessedLat: 43.345154990451135 guessedLon: 6.328125000000001
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 43.345154990451135, guessedLon: 6.328125000000001, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 43.345154990451135, guessedLon: 6.328125000000001, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 43.345154990451135, guessedLon: 6.328125000000001, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 43.345154990451135, guessedLon: 6.328125000000001, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 43.345154990451135, guessedLon: 6.328125000000001, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 43.345154990451135, guessedLon: 6.328125000000001, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 43.345154990451135, guessedLon: 6.328125000000001, guessedYear: 0, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 43.345154990451135, guessedLon: 6.328125000000001, guessedYear: 1846, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 43.345154990451135, guessedLon: 6.328125000000001, guessedYear: 1841, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 43.345154990451135, guessedLon: 6.328125000000001, guessedYear: 1841, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 43.345154990451135, guessedLon: 6.328125000000001, guessedYear: 1841, …}
LobbyGameplay.vue:63 🔘 canSubmit check: {result: true, hasSubmitted: false, guessedLat: 43.345154990451135, guessedLon: 6.328125000000001, guessedYear: 1841, …}
LobbyGameplay.vue:103 🎯 handleSubmitGuess called
LobbyGameplay.vue:104 canSubmit: true currentFigure: true
LobbyGameplay.vue:131 ✅ Client-side validation passed: {lat: 43.345154990451135, lon: 6.328125000000001, year: 1841}
LobbyGameplay.vue:134 ✅ Validation passed - proceeding with submission
LobbyGameplay.vue:160 📊 Calculated scores: {spatial: 775, temporal: 764, name: 0, speed: 0, total: 1539}
queries.ts:688 📢 Broadcast sent for submission: 9ff7ebf4-331f-42fc-bbc6-b4ae91af13c8
LobbyGameplay.vue:63 🔘 canSubmit check: {result: false, hasSubmitted: true, guessedLat: 43.345154990451135, guessedLon: 6.328125000000001, guessedYear: 1841, …}
realtime.ts:162 📢 REALTIME: Submission received via broadcast: {figure_id: '571821e2-712f-4253-b9e2-acd347bb8910', guessed_lat: 41.352072144513, guessed_lon: 8.4375, guessed_name: 'napolean bonaparte', guessed_year: 1821, …}
realtime.ts:163 📨 REALTIME: About to call onSubmissionReceived callback via broadcast
useLobby.ts:466 📨 Submission received: {figure_id: '571821e2-712f-4253-b9e2-acd347bb8910', guessed_lat: 41.352072144513, guessed_lon: 8.4375, guessed_name: 'napolean bonaparte', guessed_year: 1821, …}
realtime.ts:166 📨 REALTIME: onSubmissionReceived callback completed successfully via broadcast
useLobby.ts:470 📊 Updated submissions: 2 players: 2
useLobby.ts:477 🎯 All players submitted - reveal phase should start in UI
LobbyGameplay.vue:196 🎯 All players submitted - showing reveal phase
RevealPhase.vue:123 RevealPhase figure data: {name: 'Napoleon Bonaparte', hometown: 'Ajaccio, Corsica', hasHometown: true, hometownLength: 16}
LobbyGameplay.vue:203 🎯 advanceRound called - emitting to parent for round progression
MultiplayerView.vue:74 🎯 handleAdvanceRound called in MultiplayerView
MultiplayerView.vue:83 🏁 Ending current round and updating scores
MultiplayerView.vue:98 🎲 Current round: 1 Next round would be: 2
MultiplayerView.vue:106 🎯 Starting next round: 2
MultiplayerView.vue:110 🎯 Starting round with figure: Julius Caesar
MultiplayerView.vue:119 ✅ Round advancement completed