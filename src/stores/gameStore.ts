import { createStore } from 'zustand/vanilla'
import type { GameSession, RoundState, Guess, GameMode } from '@/types/game'
import type { Figure } from '@/types/figure'
import { calculateRoundScore } from '@/lib/scoring'

interface GameStore {
  session: GameSession | null
  currentRound: RoundState | null
  isPlaying: boolean
  isPaused: boolean

  // Actions
  startGame: (mode: GameMode, figures: Figure[]) => void
  submitGuess: (guess: Guess) => void
  revealAnswer: () => void
  nextRound: () => void
  endGame: () => void
  pauseGame: () => void
  resumeGame: () => void
  resetGame: () => void
}

const store = createStore<GameStore>((set, get) => ({
  session: null,
  currentRound: null,
  isPlaying: false,
  isPaused: false,

  startGame: (mode: GameMode, figures: Figure[]) => {
    const session: GameSession = {
      mode,
      figures,
      current_round: 1,
      rounds: [],
      total_score: 0,
      started_at: new Date().toISOString(),
      completed_at: null,
    }

    const currentRound: RoundState = {
      round_number: 1,
      figure: figures[0],
      phase: 'prompt',
      guess: null,
      score: null,
      time_elapsed: 0,
    }

    set({ session, currentRound, isPlaying: true, isPaused: false })
  },

  submitGuess: (guess: Guess) => {
    const { session, currentRound } = get()
    if (!session || !currentRound) return

    const figure = currentRound.figure
    const score = calculateRoundScore(
      guess.name,
      guess.lat,
      guess.lon,
      guess.year,
      figure.nom,
      figure.lat,
      figure.lon,
      figure.any_foto,
      [],
      guess.submission_time,
      session.mode,
    )

    const updatedRound: RoundState = {
      ...currentRound,
      guess,
      score,
      phase: 'submitted',
      time_elapsed: guess.submission_time,
    }

    set({ currentRound: updatedRound })
  },

  revealAnswer: () => {
    const { currentRound } = get()
    if (!currentRound) return

    set({
      currentRound: {
        ...currentRound,
        phase: 'reveal',
      },
    })
  },

  nextRound: () => {
    const { session, currentRound } = get()
    if (!session || !currentRound) return

    const updatedRounds = [...session.rounds, currentRound]
    const totalScore = session.total_score + (currentRound.score?.total || 0)

    if (currentRound.round_number >= 10) {
      set({
        session: {
          ...session,
          rounds: updatedRounds,
          total_score: totalScore,
          completed_at: new Date().toISOString(),
        },
        currentRound: null,
        isPlaying: false,
      })
      return
    }

    const nextRoundNumber = currentRound.round_number + 1
    const nextFigure = session.figures[nextRoundNumber - 1]

    const nextRound: RoundState = {
      round_number: nextRoundNumber,
      figure: nextFigure,
      phase: 'prompt',
      guess: null,
      score: null,
      time_elapsed: 0,
    }

    set({
      session: {
        ...session,
        current_round: nextRoundNumber,
        rounds: updatedRounds,
        total_score: totalScore,
      },
      currentRound: nextRound,
    })
  },

  endGame: () => {
    const { session, currentRound } = get()
    if (!session) return

    const rounds = currentRound ? [...session.rounds, currentRound] : session.rounds
    const totalScore = session.total_score + (currentRound?.score?.total || 0)

    set({
      session: {
        ...session,
        rounds,
        total_score: totalScore,
        completed_at: new Date().toISOString(),
      },
      currentRound: null,
      isPlaying: false,
    })
  },

  pauseGame: () => set({ isPaused: true }),
  resumeGame: () => set({ isPaused: false }),

  resetGame: () =>
    set({
      session: null,
      currentRound: null,
      isPlaying: false,
      isPaused: false,
    }),
}))

export const gameStore = store
