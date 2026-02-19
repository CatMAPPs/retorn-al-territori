## **Phase 0: Project Setup & Infrastructure**

### **Environment & Tooling Setup**

* \[ \] Initialize Vite \+ Vue 3 \+ TypeScript project

  * \[ \] Configure `tsconfig.json` with `noImplicitAny: true` and `strict: true`  
  * \[ \] Set up path aliases (`@/` for src directory)  
  * \[ \] Configure Vite build options and environment variables  
  * \[ \] Add ESLint \+ Prettier with project-specific rules  
  * \[ \] Create `.env.example` with required environment variables  
* \[ \] Configure TailwindCSS with Film Noir theme

  * \[ \] Install and initialize Tailwind  
  * \[ \] Add custom color tokens to `tailwind.config.js` (noir-bg, noir-surface, noir-text, noir-red, noir-gold)  
  * \[ \] Configure custom fonts (Bebas Neue, Playfair Display, Inter, JetBrains Mono)  
  * \[ \] Set up purge/content configuration for production builds  
  * \[ \] Create base CSS file with custom utility classes and `:root` variables  
* \[ \] Set up Supabase backend

  * \[ \] Create Supabase project and obtain API keys  
  * \[ \] Initialize Supabase client in `/services/api/SupabaseService.ts`  
  * \[ \] Configure environment variables for Supabase URL and anon key  
  * \[ \] Set up Supabase Auth configuration (email/password)  
  * \[ \] Create initial database schema migration file  
* \[ \] Create core directory structure

  * \[ \] Set up `/src/components` with gameplay, layout, ui subdirectories  
  * \[ \] Create `/src/composables` with game, map, system subdirectories  
  * \[ \] Set up `/src/services` with api, scoring subdirectories  
  * \[ \] Create `/src/stores` directory for Zustand stores  
  * \[ \] Set up `/src/types` for shared TypeScript interfaces  
  * \[ \] Create `/src/views` for route components

### **Database Schema Setup**

* \[ \] Create `figures` table

  * \[ \] Define schema with id, name, aliases, images (JSONB), birth\_year, death\_year, active\_year  
  * \[ \] Add hometown, lat, lon, description, tags columns  
  * \[ \] Add created\_at and updated\_at timestamps  
  * \[ \] Create indexes on commonly queried fields  
* \[ \] Create `users` table

  * \[ \] Define schema synced with Supabase Auth  
  * \[ \] Add username, avatar\_url, created\_at, updated\_at  
  * \[ \] Set up foreign key to auth.users  
  * \[ \] Create unique constraints on email and username  
* \[ \] Create `player_stats` table

  * \[ \] Define schema with user\_id (FK), total\_games, best\_score  
  * \[ \] Add daily\_streak, last\_daily\_date columns  
  * \[ \] Set up timestamps  
  * \[ \] Create index on user\_id  
* \[ \] Set up Row Level Security (RLS) policies

  * \[ \] Enable RLS on all tables  
  * \[ \] Create policies for authenticated read access on figures  
  * \[ \] Create policies for user-owned records (stats, scores)  
  * \[ \] Test RLS policies with different user roles  
* \[ \] Seed initial test data

  * \[ \] Create 20-30 test figures with proper data structure  
  * \[ \] Include diverse historical figures (different eras, regions)  
  * \[ \] Ensure all required fields are populated  
  * \[ \] Add proper image URLs (placeholder or public domain)  
  * \[ \] Validate lat/lon coordinates and birth years

---