import { create, StateCreator } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

interface CitadelStore {
  strBonus: number
  hpBonus: number
  cataMaxHealth: number
  useStackHealthLimit: boolean

  setCitadelStrBonus: (value: number) => void
  setCitadelHpBonus: (value: number) => void
  setCitadelCataMaxHealth: (value: number) => void
  toggleCitadelStackHealthLimit: () => void
}

const citadelSlice: StateCreator<CitadelStore, [], [['zustand/persist', unknown]]> = set => ({
  strBonus: 167.5,
  hpBonus: 91,
  cataMaxHealth: 904800,
  useStackHealthLimit: false,
  setCitadelStrBonus: value => {
    set(() => ({ strBonus: value }))
  },
  setCitadelHpBonus: value => {
    set(() => ({ hpBonus: value }))
  },
  setCitadelCataMaxHealth: value => {
    set(() => ({ cataMaxHealth: value }))
  },
  toggleCitadelStackHealthLimit: () => {
    set(state => ({
      useStackHealthLimit: !state.useStackHealthLimit
    }))
  }
})

export const useCitadelStore = create<CitadelStore>()(
  devtools(
    persist(citadelSlice, {
      name: 'citadel',
      version: 1,
      storage: createJSONStorage(() => localStorage)
    })
  )
)
