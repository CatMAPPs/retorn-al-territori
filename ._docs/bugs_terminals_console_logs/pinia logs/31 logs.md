useLobby.ts:179 🔄 toggleReady: Updating database...
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: false players: (2) [{…}, {…}]
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: false {isHost: true, allPlayersReady: false, playerCount: 2}
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: player_ready
queries.ts:731 📢 Broadcasted player ready event for 4cea1883-91bc-431f-ba4f-eddc93a8b4c6 ready: true
useLobby.ts:186 ✅ toggleReady: Database update completed - optimistic update confirmed
realtime.ts:68 📢 REALTIME: Player ready status updated via broadcast {ready: true, userId: '26aa8060-5887-4a29-8b5a-2356ebc0cafb'}
realtime.ts:69 📢 REALTIME: About to call onPlayerReady callback with userId: 26aa8060-5887-4a29-8b5a-2356ebc0cafb
useLobby.ts:396 👥 REALTIME CALLBACK: Player ready status changed for player: 26aa8060-5887-4a29-8b5a-2356ebc0cafb
useLobby.ts:398 👥 REALTIME CALLBACK: About to refresh players list for lobby: 787fe649-88c0-4831-a694-6d2d43e579c5
realtime.ts:72 📢 REALTIME: onPlayerReady callback called successfully
useLobby.ts:401 👥 REALTIME CALLBACK: Server players: (2) [{…}, {…}]
useLobby.ts:416 👥 REALTIME CALLBACK: Current user optimistic state - server: true local: true
useLobby.ts:428 👥 REALTIME CALLBACK: Final reconciled players: (2) [{…}, {…}]
useLobby.ts:430 👥 REALTIME CALLBACK: About to update store with reconciled players
lobbyStore.ts:36 🏪 STORE: updatePlayers called with 2 players
lobbyStore.ts:37 🏪 STORE: Current players: (2) [{…}, {…}]
lobbyStore.ts:38 🏪 STORE: New players: (2) [{…}, {…}]
lobbyStore.ts:42 🏪 STORE: updatePlayers completed - fresh array assigned
useLobby.ts:432 👥 REALTIME CALLBACK: Updated store after ready change - reactivity is automatic!
MultiplayerView.vue:47 🎯 MultiplayerView store changed: {lobby: {…}, player: {…}, playersCount: 2, players: Array(2)}
LobbyWaitingRoom.vue:33 🎯 LobbyWaitingRoom players changed: {old: Array(2), new: Array(2)}
LobbyWaitingRoom.vue:45 🎯 LobbyWaitingRoom allPlayersReady computed: true players: (2) [{…}, {…}]
LobbyWaitingRoom.vue:51 🎯 LobbyWaitingRoom canStartGame computed: true {isHost: true, allPlayersReady: true, playerCount: 2}
LobbyWaitingRoom.vue:74 🎮 LobbyWaitingRoom: Start Game button clicked
LobbyWaitingRoom.vue:75 🎮 LobbyWaitingRoom: Current state: {isHost: true, allPlayersReady: true, canStartGame: true, players: Proxy(Array)}
useLobby.ts:202 🎮 startMultiplayerGame called for lobby: 787fe649-88c0-4831-a694-6d2d43e579c5
useLobby.ts:205 ⏳ Setting loading state for game start
useLobby.ts:209 🚀 Calling startGame API...
useLobby.ts:35 🧹 Cleaning up realtime subscription
queries.ts:617 🎮 Updating lobby status to in_progress...
queries.ts:633 ✅ Lobby status updated successfully
realtime.ts:247 📢 Broadcast successful on attempt 1 for event: game_started
queries.ts:644 📢 Broadcasted game started event for lobby: 787fe649-88c0-4831-a694-6d2d43e579c5
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
lobbyStore.ts:116 [Vue warn]: Unhandled error during execution of setup function 
  at <LobbyGameplay lobby= {id: '787fe649-88c0-4831-a694-6d2d43e579c5', room_code: '2PC4AJ', host_id: '4cea1883-91bc-431f-ba4f-eddc93a8b4c6', status: 'in_progress', current_round: 1, …} players= (2) [{…}, {…}] current-round=1  ... > 
  at <MultiplayerView onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< Proxy(Object) {__v_skip: true} > > 
  at <RouterView> 
  at <App>
warn$1 @ chunk-LG6AQRJS.js?v=a926d579:2149
logError @ chunk-LG6AQRJS.js?v=a926d579:2360
handleError @ chunk-LG6AQRJS.js?v=a926d579:2352
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2298
setupStatefulComponent @ chunk-LG6AQRJS.js?v=a926d579:10108
setupComponent @ chunk-LG6AQRJS.js?v=a926d579:10069
mountComponent @ chunk-LG6AQRJS.js?v=a926d579:7405
processComponent @ chunk-LG6AQRJS.js?v=a926d579:7371
patch @ chunk-LG6AQRJS.js?v=a926d579:6885
mountChildren @ chunk-LG6AQRJS.js?v=a926d579:7119
mountElement @ chunk-LG6AQRJS.js?v=a926d579:7042
processElement @ chunk-LG6AQRJS.js?v=a926d579:7007
patch @ chunk-LG6AQRJS.js?v=a926d579:6873
mountChildren @ chunk-LG6AQRJS.js?v=a926d579:7119
processFragment @ chunk-LG6AQRJS.js?v=a926d579:7301
patch @ chunk-LG6AQRJS.js?v=a926d579:6859
mountChildren @ chunk-LG6AQRJS.js?v=a926d579:7119
processFragment @ chunk-LG6AQRJS.js?v=a926d579:7301
patch @ chunk-LG6AQRJS.js?v=a926d579:6859
patchBlockChildren @ chunk-LG6AQRJS.js?v=a926d579:7241
patchElement @ chunk-LG6AQRJS.js?v=a926d579:7159
processElement @ chunk-LG6AQRJS.js?v=a926d579:7018
patch @ chunk-LG6AQRJS.js?v=a926d579:6873
componentUpdateFn @ chunk-LG6AQRJS.js?v=a926d579:7597
run @ chunk-LG6AQRJS.js?v=a926d579:505
runIfDirty @ chunk-LG6AQRJS.js?v=a926d579:543
callWithErrorHandling @ chunk-LG6AQRJS.js?v=a926d579:2296
flushJobs @ chunk-LG6AQRJS.js?v=a926d579:2504
Promise.then
queueFlush @ chunk-LG6AQRJS.js?v=a926d579:2418
queueJob @ chunk-LG6AQRJS.js?v=a926d579:2413
effect2.scheduler @ chunk-LG6AQRJS.js?v=a926d579:7639
trigger @ chunk-LG6AQRJS.js?v=a926d579:533
endBatch @ chunk-LG6AQRJS.js?v=a926d579:591
notify @ chunk-LG6AQRJS.js?v=a926d579:853
trigger @ chunk-LG6AQRJS.js?v=a926d579:827
set value @ chunk-LG6AQRJS.js?v=a926d579:1706
setLoading @ lobbyStore.ts:116
wrappedAction @ pinia.js?v=a926d579:5508
store.<computed> @ pinia.js?v=a926d579:5205
(anonymous) @ useLobby.ts:233
Promise.then
(anonymous) @ useLobby.ts:228
Promise.then
(anonymous) @ useLobby.ts:223
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
lobbyStore.ts:116 [Vue warn]: Unhandled error during execution of component update 
  at <MultiplayerView onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< Proxy(Object) {__v_skip: true} > > 
  at <RouterView> 
  at <App>