
handleSubmit @ LoginView.vue:107
await in handleSubmit
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:12326
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
invoker @ chunk-LG6AQRJS.js?v=06551993:11335Understand this error
authStore.ts:87 🔑 Attempting sign in for: test2@yahoo.com
auth.ts:90  POST https://wmzinowylibtdwtqonow.supabase.co/auth/v1/token?grant_type=password 400 (Bad Request)
(anonymous) @ @supabase_supabase-js.js?v=06551993:6592
_handleRequest3 @ @supabase_supabase-js.js?v=06551993:6882
_request @ @supabase_supabase-js.js?v=06551993:6872
signInWithPassword @ @supabase_supabase-js.js?v=06551993:8574
signIn @ auth.ts:90
signIn @ authStore.ts:89
handleSubmit @ LoginView.vue:82
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:12326
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
invoker @ chunk-LG6AQRJS.js?v=06551993:11335Understand this error
authStore.ts:103 ❌ Sign in error: AuthApiError: Invalid login credentials
    at handleError3 (@supabase_supabase-js.js?v=06551993:6847:9)
    at async _handleRequest3 (@supabase_supabase-js.js?v=06551993:6888:5)
    at async _request (@supabase_supabase-js.js?v=06551993:6872:16)
    at async SupabaseAuthClient.signInWithPassword (@supabase_supabase-js.js?v=06551993:8574:15)
    at async Module.signIn (auth.ts:90:27)
    at async Object.signIn (authStore.ts:89:27)
    at async handleSubmit (LoginView.vue:82:7)
signIn @ authStore.ts:103
await in signIn
handleSubmit @ LoginView.vue:82
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:12326
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
invoker @ chunk-LG6AQRJS.js?v=06551993:11335Understand this error
LoginView.vue:107 Auth error: AuthApiError: Invalid login credentials
    at handleError3 (@supabase_supabase-js.js?v=06551993:6847:9)
    at async _handleRequest3 (@supabase_supabase-js.js?v=06551993:6888:5)
    at async _request (@supabase_supabase-js.js?v=06551993:6872:16)
    at async SupabaseAuthClient.signInWithPassword (@supabase_supabase-js.js?v=06551993:8574:15)
    at async Module.signIn (auth.ts:90:27)
    at async Object.signIn (authStore.ts:89:27)
    at async handleSubmit (LoginView.vue:82:7)
handleSubmit @ LoginView.vue:107
await in handleSubmit
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:12326
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
invoker @ chunk-LG6AQRJS.js?v=06551993:11335Understand this error
authStore.ts:111 📝 Attempting sign up for: test3@yahoo.com test3

queries.ts:11 🎭 Loading random figures for Free Play...
queries.ts:15 🔍 Testing database connectivity...