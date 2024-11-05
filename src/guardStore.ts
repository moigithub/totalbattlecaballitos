import { create } from 'zustand'

// import { RiderG1, RiderG2, RiderG3, RiderG4, RiderG5 } from './soldiers'

interface Stats {
  BASEHP: number
  BASESTR: number
  LEADERSHIP: number
  INITIATIVE: number
  bonusStrAgainstRanged: number
  hp: number
  str: number
  leadership: number
  groupCount: number
  minCount: number
  maxCount: number
}

interface GuardsStore {
  bonusHP: number
  bonusSTR: number
  sacrificeBonusHP: number
  sacrificeBonusSTR: number
  leadership: number
  authority: number
  dominance: number
  mobHealth: number
  sacrifice: Stats
  rider1: Stats
  rider2: Stats
  rider3: Stats
  rider4: Stats
  rider5: Stats
  // archer1: Stats,
  // archer2: Stats,
  // archer3: Stats,
  // archer4: Stats,
  // archer5: Stats,
  // spearman1: Stats,
  // spearman2: Stats,
  // spearman3: Stats,
  // spearman4: Stats,
  // spearman5: Stats}
  setBonusHP: (value: number) => void
  setBonusSTR: (value: number) => void
  setSacrificeBonusHP: (value: number) => void
  setSacrificeBonusSTR: (value: number) => void
  setLeadership: (value: number) => void
  setAuthority: (value: number) => void
  setDominance: (value: number) => void
  setMobHealth: (value: number) => void
  setSacrifice: (stats: Partial<Stats>) => void
  setRider1: (stats: Partial<Stats>) => void
  setRider2: (stats: Partial<Stats>) => void
  setRider3: (stats: Partial<Stats>) => void
  setRider4: (stats: Partial<Stats>) => void
  setRider5: (stats: Partial<Stats>) => void
}

// export type GuardsmanLevel = 'G1' | 'G2' | 'G3' | 'G4' | 'G5'
// export type EngineerLevel = 'E1' | 'E2' | 'E3' | 'E4' | 'E5'
// export type SpecialistLevel = 'S1' | 'S2' | 'S3' | 'S4' | 'S5'
// export type MonsterLevel = 'M1' | 'M2' | 'M3' | 'M4' | 'M5' | 'M6'
// export type Level = GuardsmanLevel | EngineerLevel | SpecialistLevel | MonsterLevel

// type Staaats<L extends Level> = {
//   [E in L]: BasicStats
// }

// export type GuardsmanStats = Staaats<GuardsmanLevel>
// // export type RiderStats = Staaats<GuardsmanLevel>

// // export type GuardsmanStats = Record<GuardsmanLevel, BasicStats>
// // export type SpearmanStats = Record<GuardsmanLevel, BasicStats>
// // export type RiderStats = Record<GuardsmanLevel, BasicStats>
// export type SpecialistStats = Record<SpecialistLevel, BasicStats>
// // export type SpyStats = Record<SpecialistLevel, BasicStats>
// // export type SwordsmanStats = Record<SpecialistLevel, BasicStats>
// export type EngineerStats = Record<EngineerLevel, BasicStats>
// export type MonsterStats = Record<MonsterLevel, BasicStats>

export const useGuardsStore = create<GuardsStore>(set => ({
  bonusHP: 0,
  bonusSTR: 0,
  sacrificeBonusHP: 0,
  sacrificeBonusSTR: 0,
  leadership: 1000,
  authority: 1000,
  dominance: 1000,
  mobHealth: 2160,
  sacrifice: {
    BASEHP: 300,
    BASESTR: 100,
    INITIATIVE: 10,
    LEADERSHIP: 1,
    bonusStrAgainstRanged: 0,
    hp: 300,
    str: 100,
    leadership: 0,
    groupCount: 0,
    minCount: 0,
    maxCount: 0
  },
  rider1: {
    BASEHP: 300,
    BASESTR: 100,
    INITIATIVE: 10,
    LEADERSHIP: 2,
    bonusStrAgainstRanged: 65,
    hp: 300,
    str: 100,
    leadership: 0,
    groupCount: 0,
    minCount: 0,
    maxCount: 0
  },
  rider2: {
    BASEHP: 540,
    BASESTR: 180,
    INITIATIVE: 10,
    LEADERSHIP: 2,
    bonusStrAgainstRanged: 98,
    hp: 540,
    str: 180,
    leadership: 0,
    groupCount: 0,
    minCount: 0,
    maxCount: 0
  },
  rider3: {
    BASEHP: 960,
    BASESTR: 320,
    INITIATIVE: 10,
    LEADERSHIP: 2,
    bonusStrAgainstRanged: 146,
    hp: 960,
    str: 320,
    leadership: 0,
    groupCount: 0,
    minCount: 0,
    maxCount: 0
  },
  rider4: {
    BASEHP: 1740,
    BASESTR: 580,
    INITIATIVE: 10,
    LEADERSHIP: 2,
    bonusStrAgainstRanged: 219,
    hp: 1740,
    str: 580,
    leadership: 0,
    groupCount: 0,
    minCount: 0,
    maxCount: 0
  },
  rider5: {
    BASEHP: 3150,
    BASESTR: 1050,
    INITIATIVE: 10,
    LEADERSHIP: 2,
    bonusStrAgainstRanged: 329,
    hp: 3150,
    str: 1050,
    leadership: 0,
    groupCount: 0,
    minCount: 0,
    maxCount: 0
  },
  setBonusHP: value => {
    set(() => ({ bonusHP: value }))
  },
  setBonusSTR: value => {
    set(() => ({ bonusSTR: value }))
  },
  setSacrificeBonusSTR: value => {
    set(() => ({ sacrificeBonusSTR: value }))
  },
  setSacrificeBonusHP: value => {
    set(() => ({ sacrificeBonusHP: value }))
  },
  setLeadership: value => {
    set(() => ({ leadership: value }))
  },
  setAuthority: value => {
    set(() => ({ authority: value }))
  },
  setDominance: value => {
    set(() => ({ dominance: value }))
  },
  setMobHealth: value => {
    set(() => ({ mobHealth: value }))
  },
  // todos los stats en sacrifice si puedeN ser cambiadoS, por que cambia entre archer,guardman,swordman, etc.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSacrifice: stats => {
    set(state => ({ sacrifice: { ...state.sacrifice, ...stats } }))
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setRider1: ({ BASEHP, BASESTR, LEADERSHIP, INITIATIVE, ...stats }) => {
    set(state => ({ rider1: { ...state.rider1, ...stats } }))
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setRider2: ({ BASEHP, BASESTR, LEADERSHIP, INITIATIVE, ...stats }) => {
    set(state => ({ rider2: { ...state.rider2, ...stats } }))
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setRider3: ({ BASEHP, BASESTR, LEADERSHIP, INITIATIVE, ...stats }) => {
    set(state => ({ rider3: { ...state.rider3, ...stats } }))
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setRider4: ({ BASEHP, BASESTR, LEADERSHIP, INITIATIVE, ...stats }) => {
    set(state => ({ rider4: { ...state.rider4, ...stats } }))
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setRider5: ({ BASEHP, BASESTR, LEADERSHIP, INITIATIVE, ...stats }) => {
    set(state => ({ rider5: { ...state.rider5, ...stats } }))
  }
}))
