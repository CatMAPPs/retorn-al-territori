/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly VITE_APP_NAME: string
  readonly VITE_APP_URL: string
  readonly VITE_ENABLE_MULTIPLAYER: string
  readonly VITE_ENABLE_DAILY_CHALLENGE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

