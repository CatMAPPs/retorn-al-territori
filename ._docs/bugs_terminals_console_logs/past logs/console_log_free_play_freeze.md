authStore.ts:42 🚪 No active session
authStore.ts:47 👂 Setting up auth state listener...
authStore.ts:73 ✅ Auth store initialized
authStore.ts:49 🔄 Auth state change: INITIAL_SESSION No session
authStore.ts:83 🔑 Attempting sign in for: test@yahoo.com
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency...
authStore.ts:55 ✅ Sign in consistency ensured: testboyo
authStore.ts:86 📋 Sign in result - session: Exists
authStore.ts:89 👤 Ensuring user consistency after sign in...
authStore.ts:91 ✅ Sign in user consistency ensured: testboyo
GameplayView.vue:172 [Vue warn]: Unhandled error during execution of component event handler 
  at <GameplayView ref="gameplayRef" current-figure= {id: '53190f65-066e-4ea7-911b-7cc31946dd66', name: 'Charles Darwin', images: Array(1), birth_year: 1809, lat: 52.7081, …} current-round=1  ... > 
  at <FreePlayView onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< Proxy(Object) {__v_skip: true} > > 
  at <RouterView> 
  at <App>
warn$1 @ chunk-LG6AQRJS.js?v=06551993:2149
logError @ chunk-LG6AQRJS.js?v=06551993:2360
handleError @ chunk-LG6AQRJS.js?v=06551993:2352
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2298
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
emit @ chunk-LG6AQRJS.js?v=06551993:8589
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:10300
handleSubmit @ GameplayView.vue:172
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
emit @ chunk-LG6AQRJS.js?v=06551993:8589
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:10300
handleClick @ Button.vue:98
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
invoker @ chunk-LG6AQRJS.js?v=06551993:11335Understand this warning
Button.vue:98 [Vue warn]: Unhandled error during execution of component event handler 
  at <Button variant="primary" size="lg" full-width=""  ... > 
  at <GameplayView ref="gameplayRef" current-figure= {id: '53190f65-066e-4ea7-911b-7cc31946dd66', name: 'Charles Darwin', images: Array(1), birth_year: 1809, lat: 52.7081, …} current-round=1  ... > 
  at <FreePlayView onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< Proxy(Object) {__v_skip: true} > > 
  at <RouterView> 
  at <App>
warn$1 @ chunk-LG6AQRJS.js?v=06551993:2149
logError @ chunk-LG6AQRJS.js?v=06551993:2360
handleError @ chunk-LG6AQRJS.js?v=06551993:2352
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2298
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
emit @ chunk-LG6AQRJS.js?v=06551993:8589
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:10300
handleClick @ Button.vue:98
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
invoker @ chunk-LG6AQRJS.js?v=06551993:11335Understand this warning
chunk-LG6AQRJS.js?v=06551993:2149 [Vue warn]: Unhandled error during execution of native event handler 
  at <Button variant="primary" size="lg" full-width=""  ... > 
  at <GameplayView ref="gameplayRef" current-figure= {id: '53190f65-066e-4ea7-911b-7cc31946dd66', name: 'Charles Darwin', images: Array(1), birth_year: 1809, lat: 52.7081, …} current-round=1  ... > 
  at <FreePlayView onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< Proxy(Object) {__v_skip: true} > > 
  at <RouterView> 
  at <App>
warn$1 @ chunk-LG6AQRJS.js?v=06551993:2149
logError @ chunk-LG6AQRJS.js?v=06551993:2360
handleError @ chunk-LG6AQRJS.js?v=06551993:2352
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2298
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
invoker @ chunk-LG6AQRJS.js?v=06551993:11335Understand this warning
chunk-LG6AQRJS.js?v=06551993:2365 Uncaught TypeError: mapRef.value.showCorrectLocation is not a function
    at Proxy.showRevealPhase (GameplayView.vue:229:18)
    at handleSubmit (FreePlayView.vue:81:23)
    at callWithErrorHandling (chunk-LG6AQRJS.js?v=06551993:2296:19)
    at callWithAsyncErrorHandling (chunk-LG6AQRJS.js?v=06551993:2303:17)
    at emit (chunk-LG6AQRJS.js?v=06551993:8589:5)
    at chunk-LG6AQRJS.js?v=06551993:10300:45
    at handleSubmit (GameplayView.vue:172:3)
    at callWithErrorHandling (chunk-LG6AQRJS.js?v=06551993:2296:19)
    at callWithAsyncErrorHandling (chunk-LG6AQRJS.js?v=06551993:2303:17)
    at emit (chunk-LG6AQRJS.js?v=06551993:8589:5)
showRevealPhase @ GameplayView.vue:229
handleSubmit @ FreePlayView.vue:81
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
emit @ chunk-LG6AQRJS.js?v=06551993:8589
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:10300
handleSubmit @ GameplayView.vue:172
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
emit @ chunk-LG6AQRJS.js?v=06551993:8589
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:10300
handleClick @ Button.vue:98
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
invoker @ chunk-LG6AQRJS.js?v=06551993:11335Understand this error
GameplayView.vue:172 [Vue warn]: Unhandled error during execution of component event handler 
  at <GameplayView ref="gameplayRef" current-figure= {id: '572fb89d-07be-4b9b-8b5c-33f3c9de79c0', name: 'Rosa Parks', images: Array(1), birth_year: 1913, lat: 32.4296, …} current-round=2  ... > 
  at <FreePlayView onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< Proxy(Object) {__v_skip: true} > > 
  at <RouterView> 
  at <App>
warn$1 @ chunk-LG6AQRJS.js?v=06551993:2149
logError @ chunk-LG6AQRJS.js?v=06551993:2360
handleError @ chunk-LG6AQRJS.js?v=06551993:2352
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2298
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
emit @ chunk-LG6AQRJS.js?v=06551993:8589
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:10300
handleSubmit @ GameplayView.vue:172
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
emit @ chunk-LG6AQRJS.js?v=06551993:8589
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:10300
handleClick @ Button.vue:98
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
invoker @ chunk-LG6AQRJS.js?v=06551993:11335Understand this warning
Button.vue:98 [Vue warn]: Unhandled error during execution of component event handler 
  at <Button variant="primary" size="lg" full-width=""  ... > 
  at <GameplayView ref="gameplayRef" current-figure= {id: '572fb89d-07be-4b9b-8b5c-33f3c9de79c0', name: 'Rosa Parks', images: Array(1), birth_year: 1913, lat: 32.4296, …} current-round=2  ... > 
  at <FreePlayView onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< Proxy(Object) {__v_skip: true} > > 
  at <RouterView> 
  at <App>
warn$1 @ chunk-LG6AQRJS.js?v=06551993:2149
logError @ chunk-LG6AQRJS.js?v=06551993:2360
handleError @ chunk-LG6AQRJS.js?v=06551993:2352
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2298
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
emit @ chunk-LG6AQRJS.js?v=06551993:8589
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:10300
handleClick @ Button.vue:98
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
invoker @ chunk-LG6AQRJS.js?v=06551993:11335Understand this warning
chunk-LG6AQRJS.js?v=06551993:2149 [Vue warn]: Unhandled error during execution of native event handler 
  at <Button variant="primary" size="lg" full-width=""  ... > 
  at <GameplayView ref="gameplayRef" current-figure= {id: '572fb89d-07be-4b9b-8b5c-33f3c9de79c0', name: 'Rosa Parks', images: Array(1), birth_year: 1913, lat: 32.4296, …} current-round=2  ... > 
  at <FreePlayView onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< Proxy(Object) {__v_skip: true} > > 
  at <RouterView> 
  at <App>
warn$1 @ chunk-LG6AQRJS.js?v=06551993:2149
logError @ chunk-LG6AQRJS.js?v=06551993:2360
handleError @ chunk-LG6AQRJS.js?v=06551993:2352
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2298
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
invoker @ chunk-LG6AQRJS.js?v=06551993:11335Understand this warning
chunk-LG6AQRJS.js?v=06551993:2365 Uncaught TypeError: aliases is not iterable
    at calculateNameScore (nameScore.ts:38:37)
    at calculateRoundScore (calculateScore.ts:39:21)
    at Object.submitGuess (gameStore.ts:60:19)
    at handleSubmit (FreePlayView.vue:62:24)
    at callWithErrorHandling (chunk-LG6AQRJS.js?v=06551993:2296:19)
    at callWithAsyncErrorHandling (chunk-LG6AQRJS.js?v=06551993:2303:17)
    at emit (chunk-LG6AQRJS.js?v=06551993:8589:5)
    at chunk-LG6AQRJS.js?v=06551993:10300:45
    at handleSubmit (GameplayView.vue:172:3)
    at callWithErrorHandling (chunk-LG6AQRJS.js?v=06551993:2296:19)
calculateNameScore @ nameScore.ts:38
calculateRoundScore @ calculateScore.ts:39
submitGuess @ gameStore.ts:60
handleSubmit @ FreePlayView.vue:62
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
emit @ chunk-LG6AQRJS.js?v=06551993:8589
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:10300
handleSubmit @ GameplayView.vue:172
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
emit @ chunk-LG6AQRJS.js?v=06551993:8589
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:10300
handleClick @ Button.vue:98
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
invoker @ chunk-LG6AQRJS.js?v=06551993:11335Understand this error
authStore.ts:49 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:53 🔑 User signed in, ensuring consistency...