📋 Current session: Found
authStore.ts:35 👤 Ensuring user consistency...
authStore.ts:37 ✅ User consistency ensured: testboyo
authStore.ts:51 👂 Setting up auth state listener...
authStore.ts:77 ✅ Auth store initialized
authStore.ts:53 🔄 Auth state change: INITIAL_SESSION Session exists
authStore.ts:53 🔄 Auth state change: SIGNED_OUT No session
authStore.ts:69 🚪 User signed out
authStore.ts:111 📝 Attempting sign up for: test4@yahoo.com test4
authStore.ts:53 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:57 🔑 User signed in, ensuring consistency...
authStore.ts:59 ✅ Sign in consistency ensured: test4
@supabase_supabase-js.js?v=06551993:6161  POST https://wmzinowylibtdwtqonow.supabase.co/rest/v1/users 409 (Conflict)
(anonymous) @ @supabase_supabase-js.js?v=06551993:6161
(anonymous) @ @supabase_supabase-js.js?v=06551993:6182
await in (anonymous)
then @ @supabase_supabase-js.js?v=06551993:615Understand this error
auth.ts:62 Profile creation failed: {code: '23505', details: null, hint: null, message: 'duplicate key value violates unique constraint "users_pkey"'}
signUp @ auth.ts:62
await in signUp
signUp @ authStore.ts:113
handleSubmit @ LoginView.vue:78
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:12326
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
invoker @ chunk-LG6AQRJS.js?v=06551993:11335Understand this error
authStore.ts:129 ❌ Sign up error: Error: This username is already taken. Please choose another.
    at Module.signUp (auth.ts:66:13)
    at async Object.signUp (authStore.ts:113:27)
    at async handleSubmit (LoginView.vue:78:7)
signUp @ authStore.ts:129
await in signUp
handleSubmit @ LoginView.vue:78
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:12326
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
invoker @ chunk-LG6AQRJS.js?v=06551993:11335Understand this error
LoginView.vue:107 Auth error: Error: This username is already taken. Please choose another.
    at Module.signUp (auth.ts:66:13)
    at async Object.signUp (authStore.ts:113:27)
    at async handleSubmit (LoginView.vue:78:7)
handleSubmit @ LoginView.vue:107
await in handleSubmit
(anonymous) @ chunk-LG6AQRJS.js?v=06551993:12326
callWithErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2296
callWithAsyncErrorHandling @ chunk-LG6AQRJS.js?v=06551993:2303
invoker @ chunk-LG6AQRJS.js?v=06551993:11335Understand this error
authStore.ts:87 🔑 Attempting sign in for: test4@yahoo.com
authStore.ts:53 🔄 Auth state change: SIGNED_IN Session exists
authStore.ts:57 🔑 User signed in, ensuring consistency...
authStore.ts:59 ✅ Sign in consistency ensured: test4
authStore.ts:90 📋 Sign in result - session: Exists
authStore.ts:93 👤 Ensuring user consistency after sign in...
authStore.ts:95 ✅ Sign in user consistency ensured: test4