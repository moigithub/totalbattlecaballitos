// import { create } from 'zustand'

// import { RiderG1, RiderG2, RiderG3, RiderG4, RiderG5 } from './soldiers'

// interface GuardsStore {
//   leadership: number
//   authority: number
//   dominance: number

//   setLeadership: (value: number) => void
//   setAuthority: (value: number) => void
//   setDominance: (value: number) => void
// }

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

// export const useGuardsStore = create<GuardsStore>(set => ({
//   leadership: 10000,
//   authority: 10000,
//   dominance: 10000,

//   setLeadership: value => {
//     set(() => ({ leadership: value }))
//   },
//   setAuthority: value => {
//     set(() => ({ authority: value }))
//   },
//   setDominance: value => {
//     set(() => ({ dominance: value }))
//   }
// }))
