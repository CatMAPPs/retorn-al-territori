# HistoGuesser User Flow

## Overview
This document outlines the **user journey through all in-game interactions** of HistoGuesser. It covers flows for guest and authenticated users, transitions between gameplay modes, and the way each feature connects within the single-page application (SPA) architecture.

---

## 1. Entry Points

### 1.1 New User (Guest)
```
Launch App → Landing Screen → Main Menu (Guest View)
```
- Sees three large buttons: **Daily Challenge (locked)**, **Free Play**, **Multiplayer (locked)**.
- CTA for login/signup visible in bottom bar.

### 1.2 Returning User (Authenticated)
```
Launch App → Auto-login (token validation) → Main Menu (Authenticated View)
```
- Username and profile avatar visible.
- All game modes available.

---

## 2. Main Menu States

| Mode | Access | Description |
|------|---------|-------------|
| **Daily Challenge** | Logged-in only | 10-round global challenge, one play per day |
| **Free Play** | Guest & logged-in | Unlimited casual play |
| **Multiplayer** | Logged-in only | Real-time lobbies with friends |

**Shared Elements:**
- Top: Logo and title
- Center: Mode buttons
- Bottom: Profile, Leaderboards, Settings

---

## 3. Free Play Flow (Guest & Logged-in)

### 3.1 Start
```
Main Menu → Free Play → Round 1 Start
```
- 10 random historical figures.
- Timer disabled.
- Local-only score tracking if guest.

### 3.2 Round Cycle (10x)
```
Prompt (guess inputs) → Submit → Reveal → Transition → Next Round
```
- Name, Location, and Year guesses.
- Scoring calculated locally.
- After Round 10, proceed to **Results Screen**.

### 3.3 Results Screen (Guest)
```
Score Summary + Signup Prompt
```
- Shows local score breakdown.
- Modal appears: “Want to save your score or play with friends? Sign up free!”
- Buttons:
  - [Sign Up Free] → opens Signup modal (no full reload)
  - [Play Again]
  - [Return to Menu]

### 3.4 Results Screen (Logged-in)
- Same summary, but **no signup modal**.
- Options: [Play Again], [Try Daily Challenge], [Return to Menu]

---

## 4. Daily Challenge Flow (Authenticated)

### 4.1 Access
```
Main Menu → Daily Challenge → Challenge Info Screen
```
- Shows date, streak counter, and “Start Challenge” button.
- If challenge already completed, display results + [Leaderboard] button.

### 4.2 Gameplay (10 Rounds)
```
Prompt → Submit → Reveal → Auto-next Round (8s delay)
```
- Timer enabled.
- Single attempt allowed.
- All player data recorded in Supabase.

### 4.3 Results Screen
- Shows total and component scores.
- Displays current global rank and streak.
- Options: [View Leaderboard], [Return to Menu]

---

## 5. Multiplayer Flow (Authenticated)

### 5.1 Create/Join Lobby
```
Main Menu → Multiplayer → Lobby Screen
```
Options:
- **Create Game:** Generates 6-character room code.
- **Join Game:** Enter room code or paste invite link.

### 5.2 Waiting Room
```
Lobby Screen → Waiting Room
```
- Displays list of players (2–8).
- Host sees [Start Game] button.
- All players synced via Supabase Realtime.

### 5.3 Gameplay Loop (10 Rounds)
```
Prompt → Submit → Reveal → Auto-next (8s) → Repeat ×10
```
- 45-second timer enforced.
- Live score updates broadcasted after each round.

### 5.4 Final Results
```
Leaderboard Overlay → Winner Announced
```
- Shows cumulative scores.
- Buttons:
  - [Play Again] → reuses same lobby if host chooses
  - [Return to Menu]

---

## 6. Transition Logic Summary

| From | To | Condition |
|------|----|------------|
| Launch | Auto-login | Valid session token |
| Launch | Main Menu (Guest) | No token / expired session |
| Free Play → Results | After 10 rounds |
| Results → Signup Modal | Guest only |
| Signup Modal → Authenticated Main Menu | Successful signup |
| Daily Challenge → Results | After 10 rounds |
| Multiplayer → Waiting Room | Lobby joined or created |
| Waiting Room → Gameplay | Host starts game |
| Gameplay → Results | After final round |

---

## 7. Modal & Overlay States

These appear **without full page reloads** (SPA behavior):

- **Signup/Login Modal**: triggered post-game or via profile icon.
- **Leaderboard Overlay**: accessible from results screen.
- **Settings Modal**: language, sound, display options.
- **Help Overlay**: accessible during gameplay.

---

## 8. Return Paths

| User State | Return Path |
|-------------|--------------|
| Guest → Signs Up | Returns to Main Menu (Authenticated) |
| Player Finishes Game | Results → [Return to Menu] |
| Multiplayer Host Ends | Lobby dissolved → Main Menu |

---

## 9. SPA Navigation Map
```
[Launch]
  ├─(Auto-login)→ [Main Menu Authenticated]
  ├─(No Token)→ [Main Menu Guest]
[Main Menu]
  ├─ Free Play → [Gameplay Loop] → [Results] → [Signup Prompt*]
  ├─ Daily Challenge → [Challenge Rounds] → [Results + Leaderboard]
  ├─ Multiplayer → [Lobby] → [Rounds] → [Final Results]
```
*Signup prompt only shown to guests.

---

## 10. UX Philosophy
- **Continuous flow:** All interactions occur within one logical route (SPA transitions).
- **Instant feedback:** Results, transitions, and modals should not reload pages.
- **Conversion encouragement:** Guest Free Play ends with optional signup modal to grow user base.
- **Auto-persistence:** Returning users skip manual login via stored tokens.

---

**End of Document — `user-flow.md`**

