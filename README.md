# HistoGuesser

A web-based geography and history guessing game where players identify historical figures through portraits, photos, or sculptures.

## Game Modes

- **Daily Challenge** - A globally shared 10-round challenge with leaderboards
- **Free Play** - Casual practice mode with unlimited plays
- **Multiplayer** - Real-time competitive lobbies for 2-8 players

## Features

- Guess **Who** (name), **Where** (map location), and **When** (birth year) for each historical figure
- Film Noir themed UI with skeuomorphic design
- Comprehensive scoring system with spatial, temporal, and name accuracy
- Real-time multiplayer using Supabase Realtime
- Streak tracking and global leaderboards

## Tech Stack

### Frontend
- **Vite 7** - Fast build tool and dev server
- **Vue 3.5** - Progressive JavaScript framework
- **TypeScript 5.6** - Type-safe development
- **TailwindCSS 3.4** - Utility-first CSS framework
- **Zustand 5** - Lightweight state management
- **Leaflet.js 1.9** - Interactive maps with OpenStreetMap
- **Day.js 1.11** - Lightweight date/time library

### Backend
- **Supabase 2.78** - PostgreSQL database, authentication, and real-time
- **Vercel** - Frontend hosting and deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Histo-Guesser
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:
```
VITE_SUPABASE_URL=your-project-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

4. Run the database migrations:

Go to your Supabase project dashboard, navigate to the SQL Editor, and run the migration files in order:
- `supabase/migrations/001_initial_schema.sql`
- `supabase/migrations/002_multiplayer_tables.sql`
- `supabase/migrations/003_row_level_security.sql`
- `supabase/migrations/004_seed_figures.sql`

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
npm run preview
```

### Linting and Formatting

```bash
npm run lint
npm run format
```

## Project Structure

```
src/
├── components/        # Vue components (ui, game, lobby)
├── composables/       # Vue composition functions
├── lib/               # Core business logic
│   ├── scoring/       # Scoring algorithms
│   ├── matching/      # Fuzzy name matching
│   ├── geography/     # Distance calculations
│   └── supabase/      # Database queries and auth
├── stores/            # Zustand state management
├── views/             # Page-level components
├── router/            # Vue Router configuration
├── types/             # TypeScript definitions
└── styles/            # Global CSS and Tailwind

supabase/
└── migrations/        # Database schema migrations
```

## Game Scoring

Each round has a maximum of **2,500 points**:

- **Location Accuracy** (0-800): Based on distance from correct location
- **Temporal Accuracy** (0-800): Based on year difference from birth year
- **Name Accuracy** (0-800): Fuzzy matching with tiered scoring
- **Speed Bonus** (0-100): Time-based bonus (Daily/Multiplayer only)

Total game maximum: **25,000 points** (10 rounds)

## Database Schema

### Core Tables
- `figures` - Historical figures with images and metadata
- `users` - User profiles synced with Supabase Auth
- `player_stats` - Player statistics and streaks
- `daily_scores` - Daily challenge submissions

### Multiplayer Tables
- `lobbies` - Game lobbies with room codes
- `lobby_players` - Players in each lobby
- `lobby_submissions` - Round submissions per player

## Contributing

Moon & Monitor Classic. This project was developed by Daniel Lopez from Hays, America. Criticisms & Contributions are welcome!

## License

MIT 2025(tm)

## Acknowledgments

- Historical figure images from Wikimedia Commons (Public Domain)
- Map tiles from OpenStreetMap