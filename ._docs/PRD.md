# **HistoGuesser \- Product Requirements Document**

---

## **1\. Executive Summary**

**HistoGuesser** (working title) is a web-based geography and history guessing game where players identify historical figures through portraits, photos, or sculptures. Players must guess three elements: **Who** the person is (name), **Where** they originated from (map location), and **When** they were born (year via timeline slider).

The game features three core modes:

* **Daily Challenge** \- A globally shared 10-round challenge with leaderboards  
* **Free Play** \- Casual practice mode with unlimited plays  
* **Multiplayer** \- Real-time competitive lobbies for 2-8 players

---

## **2\. Product Vision & Goals**

### **Vision**

Create an engaging, educational gaming experience that makes learning about historical figures interactive and competitive.

### **Primary Goals**

* Build an MVP focused on core gameplay mechanics and Free Play mode  
* Establish a scalable foundation for user accounts and competitive features  
* Create a smooth, responsive experience on both desktop and mobile devices  
* Maintain simplicity while ensuring replayability and educational value

### **Success Metrics**

* User engagement (games played per user)  
* Daily active users for Daily Challenge  
* Player retention and streak maintenance  
* Average game completion rate

---

## **3\. Game Modes**

### **3.1 Daily Challenge**

**Purpose:** Competitive daily gameplay with global rankings

**Key Features:**

* New 10-round challenge released daily at midnight UTC  
* Same figures shown to all players globally in the same order  
* One attempt per player per day  
* Final scores submitted to global leaderboard  
* Streak tracking for consecutive days played  
* Requires user account and login

**Scoring & Leaderboards:**

* Global Top 100 displayed  
* User's rank shown relative to all players  
* Streak counter visible on profile  
* No replay allowed for the same day's challenge

### **3.2 Free Play (Single Player)**

**Purpose:** Casual practice and exploration

**Key Features:**

* Unlimited games, each with 10 random figures  
* Local scoring only (no leaderboard submission)  
* Skip and Hint buttons available  
* Can replay immediately after finishing  
* No account required (but tracked if logged in)

**Differences from Daily Challenge:**

* Random figure selection each game  
* No competitive pressure or time limits  
* Practice-focused features enabled

### **3.3 Multiplayer Mode**

**Purpose:** Real-time competitive play with friends

**Key Features:**

* Support for 2-8 players per lobby  
* Host creates lobby with unique join code  
* All players see the same 10 figures simultaneously  
* 45-second timer per round (auto-advances if all submit early)  
* Round-by-round leaderboard after each reveal  
* Final winner screen with cumulative stats

**Lobby Flow:**

1. Host creates game (generates 6-character room code)  
2. Players join via code or shareable link  
3. Waiting room shows all connected players  
4. Host starts game when ready  
5. All players advance together through 10 rounds  
6. Final results screen with winner announcement

---

## **4\. Core Gameplay**

### **4.1 Round Structure**

Each game consists of 10 rounds. Each round follows this flow:

#### **Phase 1: Prompt (Gameplay)**

* Figure image(s) displayed in center  
* Interactive world map for location guessing  
* Year slider with BCE/CE toggle for birth year  
* Text input field for name entry  
* Timer displayed (45 seconds for multiplayer, no timer for Free Play)  
* Submit button to confirm guess

#### **Phase 2: Submission**

* Player clicks "Submit Guess"  
* System calculates scores based on accuracy

#### **Phase 3: Reveal**

* True location pin appears on map  
* Timeline shows correct birth year  
* Correct name displayed  
* Distance from guess shown (in kilometers)  
* Year difference shown  
* Name accuracy result shown  
* Points breakdown displayed by component  
* Brief educational blurb/fact about the figure

#### **Phase 4: Transition**

* "Next" button appears (8-second auto-advance for multiplayer)  
* Proceeds to next round  
* After round 10, shows final results screen

### **4.2 UI Layout (Single Screen)**

**Desktop Layout:**

┌─────────────────────────────────────────────────────┐  
│  Round X/10                          Timer: 00:45   │  
├─────────────────────────────────────────────────────┤  
│                                                     │  
│   ┌────────────────┐    ┌──────────────────────┐    |  
│   │                │    │                      │    │  
│   │  Figure Image  │    │   Interactive Map    │    │  
│   │   (Carousel)   │    │   (Click to place    │    │  
│   │                │    │      pin)            │    │  
│   └────────────────┘    │                      │    │  
│                         └──────────────────────┘    │  
│                                                     │  
│   Name: \[\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\]    │  
│                                                     │  
│   Year: \[────●─────────────\] BCE/CE Toggle        │  
│         Type year: \[\_\_\_\_\]                     │  
│                                                     │  
│                          \[Submit Guess\]           │  
└─────────────────────────────────────────────────────┘

**Mobile Layout:**

* Stacked vertical layout (same components)  
* Image at top  
* Map below image (full width)  
* Name input below map  
* Timeline slider at bottom  
* Submit button fixed at bottom

**Critical Requirement:** Map, timeline, image, and name input MUST all be visible on the same screen simultaneously. No tabs or hidden panels.

### **4.3 Guessing Mechanics**

**Location (Map):**

* Click or tap anywhere on world map to place pin  
* Full latitude/longitude precision (like GeoGuessr)  
* Can adjust pin placement before submitting  
* Scoring based on Haversine distance in kilometers

**Timeline (Birth Year):**

* Horizontal slider spanning 1000 BCE to 2025 CE  
* Toggle button to switch between BCE and CE  
* Can also type year directly into input field  
* Slider snaps to 5-year increments for easier mobile use  
* Internally stored as integers (negative for BCE, positive for CE)

**Name (Text Input):**

* Free-form text input field  
* Case-insensitive matching  
* Fuzzy matching algorithm for typos and variations  
* Supports aliases and alternative spellings  
* Skip leaves field blank \= 0 points for name component

**Partial Submissions:**

* Players can skip name input (receives 0 name points)  
* Must submit location and year to receive any points  
* Submit button disabled until location and year are provided

---

## **5\. Scoring System**

### **5.1 Component Breakdown**

Each round has a maximum of **2,500 points** distributed across four components:

| Component | Max Points | Formula |
| ----- | ----- | ----- |
| **Location Accuracy** | 800 | `max(0, 800 - (distance_km / 10))` |
| **Temporal Accuracy** | 800 | `max(0, 800 - (abs(year_diff) / 2))` |
| **Name Accuracy** | 800 | Tiered: 800/600/400/200/0 |
| **Speed Bonus** | 100 | Time-based decay (see below) |

**Game Maximum:** 25,000 points (10 rounds × 2,500)

### **5.2 Detailed Scoring Rules**

**Location Accuracy (0-800 points):**

* Perfect guess (0 km) \= 800 points  
* Linear decay: lose 10 points per 100 km  
* \~8,000 km off \= 0 points  
* Formula: `spatial_score = max(0, round(800 - (distance_km / 10)))`

**Temporal Accuracy (0-800 points):**

* Perfect guess (0 year difference) \= 800 points  
* Linear decay: lose 2 points per year off  
* \~400 years off \= 0 points  
* Calculated against figure's birth\_year  
* Formula: `temporal_score = max(0, round(800 - (abs(guessed_year - birth_year) / 2)))`

**Name Accuracy (0/200/400/600/800 points):**

* **800 points:** Exact match or minor misspelling (fuzzy match threshold ≥ 0.9)  
  * Includes recognized aliases  
  * Punctuation differences ignored  
  * Example: "John Kennedy" matches "John F. Kennedy"  
* **600 points:** Significant misspelling but clear intent (fuzzy match 0.7-0.89)  
* **400 points:** Only first name OR last name correct (even if misspelled)  
  * Must match at least 50% of one name component  
* **200 points:** Weak partial match or single name fragment  
* **0 points:** No match or empty field

**Implementation:** Use Levenshtein distance algorithm with alias table for known variations and nicknames.

**Speed Bonus (0-100 points):**

* Only applies in Daily Challenge and Multiplayer modes  
* Based on time from round start to submission:  
  * 0-10 seconds: **100 points**  
  * 10-12 seconds: **90 points**  
  * 12-14 seconds: **80 points**  
  * 14-16 seconds: **70 points**  
  * 16-18 seconds: **60 points**  
  * 18-20 seconds: **50 points**  
  * 20-22 seconds: **40 points**  
  * 22-24 seconds: **30 points**  
  * 24-26 seconds: **20 points**  
  * 26-28 seconds: **10 points**  
  * 28+ seconds: **0 points**  
* Formula: `speed_bonus = max(0, min(100, 110 - floor((time_seconds / 2)) * 10))`

### **5.3 Scoring Philosophy**

* **Linear design** keeps scoring transparent and predictable  
* **Lenient name matching** respects time pressure and spelling variations  
* **Balanced components** prevent single-aspect dominance  
* **Speed bonus** rewards quick thinking without overwhelming other factors

---

## **6\. Data Structure**

### **6.1 Figures Table (Core Content)**

Primary table storing all historical figures:

figures  
├─ id: UUID (primary key)  
├─ name: TEXT (canonical display name)  
├─ aliases: TEXT\[\] (alternative names, nicknames, transliterations)  
├─ images: JSONB\[\] (array of image objects)  
│  └─ Each object contains:  
│     ├─ url: TEXT  
│     ├─ license: TEXT  
│     ├─ credit: TEXT  
│     └─ source\_url: TEXT  
├─ birth\_year: INTEGER (used for scoring)  
├─ death\_year: INTEGER (optional, for display)  
├─ active\_year: INTEGER (optional, midpoint of career)  
├─ hometown: TEXT (city/region name for display)  
├─ lat: FLOAT (latitude for scoring)  
├─ lon: FLOAT (longitude for scoring)  
├─ description: TEXT (50-100 word humourous fun fact blurb)  
├─ tags: TEXT\[\] (e.g., \["scientist", "modern\_era", "europe"\])  
├─ created\_at: TIMESTAMP  
└─ updated\_at: TIMESTAMP

**Image Constraints:**

* Maximum 4 images per figure  
* All images must be public domain for MVP  
* Store complete attribution and license information

**Content Sourcing:**

* Manually curated for MVP  
* Wikipedia-scraped descriptions (via API, not HTML scraping)  
* Future: Wikimedia API for bulk imports with proper licensing checks

### **6.2 Users & Authentication**

**users table:**

users  
├─ id: UUID (primary key, from Supabase Auth)  
├─ email: TEXT (unique, not null)  
├─ username: TEXT (unique, not null, display name)  
├─ avatar\_url: TEXT (optional)  
├─ created\_at: TIMESTAMP  
└─ updated\_at: TIMESTAMP

**Authentication:**

* Email \+ password via Supabase Auth  
* Simple signup flow (no email verification for MVP)  
* Security email sent if new account created with user's email

### **6.3 Player Stats**

**player\_stats table:**

player\_stats  
├─ user\_id: UUID (primary key, foreign key to users)  
├─ total\_games: INTEGER (default 0\)  
├─ best\_score: INTEGER (default 0, daily challenge only)  
├─ daily\_streak: INTEGER (default 0\)  
├─ last\_daily\_date: DATE (last completed daily challenge)  
├─ created\_at: TIMESTAMP  
└─ updated\_at: TIMESTAMP

### **6.4 Daily Challenge Scores**

**daily\_scores table:**

daily\_scores  
├─ id: UUID (primary key)  
├─ user\_id: UUID (foreign key to users)  
├─ challenge\_date: DATE (not null)  
├─ score: INTEGER (not null)  
├─ completed\_at: TIMESTAMP  
└─ UNIQUE(user\_id, challenge\_date)

**Leaderboard Query:**

* Top 100 players per day  
* Ordered by score DESC, completed\_at ASC (tiebreaker)

### **6.5 Multiplayer Tables**

**lobbies table:**

lobbies  
├─ id: UUID (primary key)  
├─ room\_code: TEXT (unique, 6 characters, indexed)  
├─ host\_id: UUID (foreign key to users)  
├─ status: TEXT CHECK (status IN ('waiting', 'in\_progress', 'finished'))  
├─ current\_round: INTEGER (default 0\)  
├─ figure\_ids: UUID\[\] (array of 10 figure IDs for this game)  
├─ created\_at: TIMESTAMP  
└─ expires\_at: TIMESTAMP (auto-delete after 24 hours)

**lobby\_players table:**

lobby\_players  
├─ id: UUID (primary key)  
├─ lobby\_id: UUID (foreign key to lobbies)  
├─ user\_id: UUID (foreign key to users)  
├─ username: TEXT (denormalized for display)  
├─ score: INTEGER (default 0, cumulative)  
├─ ready: BOOLEAN (default false)  
├─ connected: BOOLEAN (default true)  
└─ joined\_at: TIMESTAMP

**lobby\_submissions table:**

lobby\_submissions  
├─ id: UUID (primary key)  
├─ lobby\_id: UUID (foreign key to lobbies)  
├─ user\_id: UUID (foreign key to users)  
├─ round\_number: INTEGER  
├─ figure\_id: UUID (foreign key to figures)  
├─ guessed\_name: TEXT  
├─ guessed\_lat: FLOAT  
├─ guessed\_lon: FLOAT  
├─ guessed\_year: INTEGER  
├─ submission\_time: FLOAT (seconds since round start)  
├─ score: INTEGER (round score)  
└─ submitted\_at: TIMESTAMP

---

## **7\. User Experience Flows**

### **7.1 Main Menu**

**Layout:**

┌─────────────────────────────────────────┐  
│          🕰️ HISTOGUESSER                │  
│─────────────────────────────────────────│  
│                                          │  
│       \[ 🏆 Daily Challenge \]            │  
│       \[ 🎯 Free Play \]                   │  
│       \[ 👥 Multiplayer \]                 │  
│                                          │  
│─────────────────────────────────────────│  
│  👤 @username     \[⚙️\] \[📊\] \[🚪\]        │  
└─────────────────────────────────────────┘

**Elements:**

* Title/logo centered at top  
* Three large, centered buttons for game modes  
* Bottom bar: username, settings, leaderboards, logout  
* Background: Subtle animated world map (optional polish phase)

### **7.2 Multiplayer Lobby Flow**

**Create/Join Screen:**

┌─────────────────────────────────────────┐  
│      MULTIPLAYER                         │  
│─────────────────────────────────────────│  
│                                          │  
│      \[ Create New Game \]                 │  
│                                          │  
│      ─── OR ───                          │  
│                                          │  
│      Join Game Code:                     │  
│      \[\_\_\_\_\_\_\]  \[Join\]                    │  
│                                          │  
└─────────────────────────────────────────┘

**Waiting Room:**

┌─────────────────────────────────────────┐  
│      LOBBY: ABC123     \[Copy Code\]      │  
│─────────────────────────────────────────│  
│                                          │  
│  Players: 5/8                            │  
│                                          │  
│  🟢 danlopez (Host)                      │  
│  🟢 historybuff                          │  
│  🟢 cleopatrakiller                      │  
│  🟢 napoleonfan88                        │  
│  🟢 timemaster                           │  
│                                          │  
│  Waiting for host to start...           │  
│                                          │  
│  \[Start Game\] (host only)               │  
│  \[Leave Lobby\]                           │  
└─────────────────────────────────────────┘

**Multiplayer Timing:**

* 45-second countdown per round  
* Auto-advance when timer expires OR all players submit (whichever first)  
* 8-second reveal phase with auto-advance to next round  
* Server-authoritative timing to prevent cheating

### **7.3 Results Screen**

**Daily Challenge / Free Play:**

┌─────────────────────────────────────────┐  
│      GAME COMPLETE                       │  
│─────────────────────────────────────────│  
│                                          │  
│  Final Score: 18,450 / 25,000           │  
│                                          │  
│  📍 Location Accuracy:    6,420 / 8,000  │  
│  📅 Timeline Accuracy:    5,890 / 8,000  │  
│  👤 Name Accuracy:        5,340 / 8,000  │  
│  ⚡ Speed Bonus:            800 / 1,000  │  
│                                          │  
│  Global Rank: \#47                        │  
│  Streak: 🔥 12 days                      │  
│                                          │  
│  \[View Leaderboard\]  \[Back to Menu\]     │  
└─────────────────────────────────────────┘

**Multiplayer:**

┌─────────────────────────────────────────┐  
│      🏆 WINNER: historybuff              │  
│─────────────────────────────────────────│  
│                                          │  
│  Final Standings:                        │  
│                                          │  
│  🥇 historybuff         21,340           │  
│  🥈 napoleonfan88       19,850           │  
│  🥉 danlopez            18,220           │  
│  4️⃣  timemaster          17,100           │  
│  5️⃣  cleopatrakiller     15,990           │  
│                                          │  
│  \[Play Again\]  \[Back to Menu\]           │  
└─────────────────────────────────────────┘

---

## **8\. Technical Stack**

### **8.1 Frontend**

* **Framework:** Vite \+ Vue 3 \+ TypeScript  
* **Styling:** TailwindCSS (utility-first)  
* **State Management:** Migrated to Pinia from Zustand (lightweight, Vue compatibility)  
* **Map Library:** Leaflet.js with OpenStreetMap tiles  
* **Build Tool:** Vite (fast HMR, optimized builds)

### **8.2 Backend & Infrastructure**

* **Database:** Supabase PostgreSQL  
* **Authentication:** Supabase Auth (email/password)  
* **Real-time:** Supabase Realtime (for multiplayer lobbies)  
* **Storage:** Supabase Storage (for figure images)  
* **Hosting:** Vercel (frontend), Supabase (backend)

**Rationale:** Supabase provides integrated auth, database, real-time, and storage with minimal setup. Allows rapid MVP development.

### **8.3 Key Libraries & Dependencies**

* **Leaflet.js:** Interactive maps with full lat/lon precision  
* **Leaflet.Geodesic:** Calculate Haversine distance for scoring  
* **Fuse.js or Levenshtein-js:** Fuzzy string matching for names  
* **Day.js:** Lightweight date/time manipulation  
* **Chart.js (optional):** Stats visualization on profile

### **8.4 Scalability Considerations**

* **Target Capacity:** 10 concurrent multiplayer lobbies for MVP  
* **Supabase Limits:** Free tier supports this; upgrade available  
* **Escape Hatch:** If real-time needs grow, migrate to custom Node.js WebSocket server  
* **CDN:** Vercel's edge network for frontend assets  
* **Image Optimization:** Serve images via Supabase Storage with automatic WebP conversion

---



## **15\. Appendices**

### **A. Scoring Formula Reference**

// Location Accuracy (max 800\)  
const spatialScore \= Math.max(0, Math.round(800 \- (distanceKm / 10)));

// Temporal Accuracy (max 800\)  
const temporalScore \= Math.max(0, Math.round(800 \- (Math.abs(yearDiff) / 2)));

// Name Accuracy (tiered: 0/200/400/600/800)  
const nameScore \= calculateNameMatch(guessedName, correctName, aliases);

// Speed Bonus (max 100\)  
const speedBonus \= Math.max(0, Math.min(100, 110 \- Math.floor(timeSeconds / 2\) \* 10));

// Round Total (max 2500\)  
const roundScore \= Math.min(2500, spatialScore \+ temporalScore \+ nameScore \+ speedBonus);

### **B. Example Figure Entry**

{  
  "id": "550e8400-e29b-41d4-a716-446655440000",  
  "name": "Albert Einstein",  
  "aliases": \["Einstein", "A. Einstein", "Albert Ainstein"\],  
  "images": \[  
    {  
      "url": "https://storage.supabase.co/figures/einstein-1921.jpg",  
      "license": "Public Domain",  
      "credit": "Nobel Foundation",  
      "source\_url": "https://commons.wikimedia.org/wiki/File:Einstein\_1921.jpg"  
    }  
  \],  
  "birth\_year": 1879,  
  "death\_year": 1955,  
  "active\_year": 1915,  
  "hometown": "Ulm, Germany",  
  "lat": 48.4011,  
  "lon": 9.9876,  
  "description": "German-born theoretical physicist who developed the theory of relativity and won the Nobel Prize in Physics in 1921\. His mass-energy equivalence formula E \= mc² is one of the most famous equations in physics.",  
  "tags": \["scientist", "physicist", "modern\_era", "europe", "nobel\_laureate"\]  
}

### **C. Technology Stack Summary**

| Category | Technology | Purpose |
| ----- | ----- | ----- |
| Frontend Framework | Vue 3 \+ TypeScript | Component-based UI |
| Build Tool | Vite | Fast dev server, optimized builds |
| Styling | TailwindCSS | Utility-first CSS |
| State Management | Pinia | Vue compatiable state managemant |
| Mapping | Leaflet.js | Interactive maps |
| Map Tiles | OpenStreetMap | Free map data |
| Distance Calculation | Custom Haversine | Great-circle distance calculation |
| Name Matching | Levenshtein/Fuse.js | Fuzzy string matching |
| Backend | Supabase | PostgreSQL \+ Auth \+ Realtime |
| Hosting | Vercel | Frontend CDN \+ serverless |
| Image Storage | Supabase Storage | File storage \+ CDN |

---

