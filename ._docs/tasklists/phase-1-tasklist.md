
## **Phase 1: MVP \- Core Gameplay (Free Play Mode)**

### **Type Definitions & Core Models**

* \[ \] Define core TypeScript interfaces  
  * \[ \] Create `figure-types.ts` (Figure, FigureImage, Coordinates)  
  * \[ \] Create `game-types.ts` (GameState, Round, Guess, Score)  
  * \[ \] Create `user-types.ts` (User, PlayerStats)  
  * \[ \] Create utility types for API responses  
  * \[ \] Export all types from central `index.ts`

### **Scoring System Implementation**

* \[ \] Build core scoring service

  * \[ \] Implement Haversine distance calculation in `/services/scoring/distanceCalculator.ts`  
  * \[ \] Create location accuracy scorer (max 800, linear decay)  
  * \[ \] Create temporal accuracy scorer (max 800, linear decay)  
  * \[ \] Implement tiered name matching with fuzzy logic  
  * \[ \] Create speed bonus calculator (time-based decay)  
* \[ \] Implement name matching service

  * \[ \] Set up Levenshtein or Fuse.js for fuzzy matching  
  * \[ \] Create alias normalization function  
  * \[ \] Implement tiered scoring logic (0/200/400/600/800)  
  * \[ \] Add first/last name partial match detection  
  * \[ \] Test with various misspellings and aliases  
* \[ \] Create round score aggregator

  * \[ \] Combine all scoring components into single function  
  * \[ \] Enforce max 2500 points per round  
  * \[ \] Create score breakdown object for UI display  
  * \[ \] Add validation and error handling  
  * \[ \] Write unit tests for scoring edge cases

### **Map Component & Location Guessing**

* \[ \] Set up Leaflet.js integration

  * \[ \] Create `useMap.ts` composable for map initialization  
  * \[ \] Configure OpenStreetMap tile layer  
  * \[ \] Set up map container component with proper sizing  
  * \[ \] Implement lazy loading for map library  
  * \[ \] Handle map cleanup on component unmount  
* \[ \] Implement pin placement system

  * \[ \] Create interactive pin placement on map click  
  * \[ \] Store guessed coordinates in component state  
  * \[ \] Add visual feedback for placed pin (gold outline, cream fill)  
  * \[ \] Allow pin repositioning before submission  
  * \[ \] Ensure mobile touch compatibility  
* \[ \] Create map reveal functionality

  * \[ \] Show correct location pin after submission  
  * \[ \] Draw line between guessed and correct location  
  * \[ \] Display distance in kilometers  
  * \[ \] Add smooth pan/zoom to reveal both pins  
  * \[ \] Style correct pin distinctly (red accent)

### **Timeline Slider Component**

* \[ \] Build year input system

  * \[ \] Create horizontal slider spanning \-1000 BCE to 2025 CE  
  * \[ \] Implement BCE/CE toggle button  
  * \[ \] Add direct year input field (synchronized with slider)  
  * \[ \] Snap slider to 5-year increments for mobile  
  * \[ \] Store year internally as integer (negative for BCE)  
* \[ \] Style timeline component

  * \[ \] Apply noir theme (dark track, gold progress, cream thumb)  
  * \[ \] Add visible markers at century boundaries  
  * \[ \] Show current selected year prominently  
  * \[ \] Ensure responsive sizing for mobile/desktop  
  * \[ \] Add keyboard navigation support

### **Name Input & Image Display**

* \[ \] Create figure image carousel

  * \[ \] Display figure image(s) with proper aspect ratio  
  * \[ \] Support multiple images per figure (up to 4\)  
  * \[ \] Add navigation between images if multiple  
  * \[ \] Implement lazy loading for images  
  * \[ \] Show loading state and error handling  
* \[ \] Build name input component

  * \[ \] Create text input with noir styling  
  * \[ \] Add placeholder text guidance  
  * \[ \] Implement case-insensitive input handling  
  * \[ \] Allow skip functionality (empty submission)  
  * \[ \] Style focus states with gold ring

### **Game State Management**

* \[ \] Create game state store (Zustand)

  * \[ \] Define `useGameStore.ts` with core game state  
  * \[ \] Implement round progression logic  
  * \[ \] Store current figure, guesses, scores  
  * \[ \] Track round number (1-10)  
  * \[ \] Add actions for starting/ending rounds  
* \[ \] Implement Free Play game flow

  * \[ \] Create game initialization function (select 10 random figures)  
  * \[ \] Build round start logic (load figure, reset inputs)  
  * \[ \] Implement submission handler  
  * \[ \] Calculate and store round scores  
  * \[ \] Progress to next round or end game  
  * \[ \] Reset game state for replay

### **Gameplay View & UI Integration**

* \[ \] Build main gameplay layout

  * \[ \] Create responsive two-column layout (desktop)  
  * \[ \] Implement mobile vertical stack layout  
  * \[ \] Ensure all four components visible simultaneously (md+)  
  * \[ \] Position submit button prominently  
  * \[ \] Add round counter display  
* \[ \] Create reveal phase UI

  * \[ \] Show correct answer information (name, location, year)  
  * \[ \] Display distance and year difference  
  * \[ \] Show score breakdown by component  
  * \[ \] Add figure description/fun fact  
  * \[ \] Implement "Next Round" button with auto-advance  
* \[ \] Build results screen

  * \[ \] Show final score out of 25,000  
  * \[ \] Display component breakdowns (location, temporal, name, speed)  
  * \[ \] Add "Play Again" and "Back to Menu" buttons  
  * \[ \] Show score summary statistics  
  * \[ \] Style with noir theme cards

### **Main Menu & Navigation**

* \[ \] Create main menu view

  * \[ \] Build hero section with logo/title  
  * \[ \] Add three mode buttons (Daily, Free Play, Multiplayer)  
  * \[ \] Implement guest view (lock Daily/Multiplayer)  
  * \[ \] Add bottom navigation bar  
  * \[ \] Style with noir aesthetic  
* \[ \] Set up Vue Router navigation

  * \[ \] Define routes for menu, gameplay, results  
  * \[ \] Implement route guards for protected modes  
  * \[ \] Add smooth transitions between views  
  * \[ \] Handle browser back button gracefully  
  * \[ \] Configure SPA mode (no full reloads)

### **Basic UI Components Library**

* \[ \] Create reusable button component

  * \[ \] Primary CTA style (red background, gold border)  
  * \[ \] Secondary style (black background, gold border)  
  * \[ \] Disabled state styling  
  * \[ \] Hover and active state animations  
  * \[ \] Implement with TypeScript props interface  
* \[ \] Create card component

  * \[ \] Black surface with gold border  
  * \[ \] Layered shadow for depth  
  * \[ \] Configurable padding and radius  
  * \[ \] Support for header/body/footer slots  
  * \[ \] Responsive sizing  
* \[ \] Create modal component

  * \[ \] Backdrop with 80% opacity black  
  * \[ \] Centered modal panel with noir styling  
  * \[ \] Fade \+ scale animation (280ms)  
  * \[ \] Close on backdrop click or ESC key  
  * \[ \] Trap focus within modal

---