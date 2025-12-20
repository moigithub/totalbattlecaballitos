import { create, StateCreator } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

interface CommonMonsterStore {
  str: number
  hp: number
  useStackHealthLimit: boolean

  setTroopStr: (value: number) => void
  setTroopHp: (value: number) => void
  toggleTroopStackHealthLimit: () => void
}

const commonMonsterSlice: StateCreator<
  CommonMonsterStore,
  [],
  [['zustand/persist', unknown]]
> = set => ({
  str: 1000000,
  hp: 1000000,
  useStackHealthLimit: false,
  setTroopStr: value => {
    set(() => ({ str: value }))
  },
  setTroopHp: value => {
    set(() => ({ hp: value }))
  },
  toggleTroopStackHealthLimit: () => {
    set(state => ({
      useStackHealthLimit: !state.useStackHealthLimit
    }))
  }
})

export const useCommonMonsterStore = create<CommonMonsterStore>()(
  devtools(
    persist(commonMonsterSlice, {
      name: 'commonMonster',
      version: 1,
      storage: createJSONStorage(() => localStorage)
    })
  )
)
