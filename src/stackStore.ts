import { create, StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Stack, Unit } from './types'
import { hashStorage } from '@/hashStore'
import { createDebouncedJSONStorage } from 'zustand-debounce'
import { getStrengthWithBonus } from './helpers'
import { ARMY } from './soldiers'

interface StackStore {
  leadership: number
  authority: number
  dominance: number
  army: Stack[]

  setLeadership: (value: number) => void
  setAuthority: (value: number) => void
  setDominance: (value: number) => void
  setArmy: (data: Stack[]) => void
  addStack: (data: Stack) => void
  removeStack: (id: string) => void
  resetStack: (id: string) => void
  resetAllStacks: () => void
  setGapPercent: (id: string, value: number) => void
  setHpBonus: (id: string, value: number) => void
  setStrBonus: (id: string, value: number) => void
  toggleUseUnitLimit: (id: string) => void
  setStackUnitLimit: (id: string, value: number) => void
  toggleUseStrLimit: (id: string) => void
  setStackStrLimit: (id: string, value: number) => void
  setStackStrLimitType: (id: string, value: string) => void
  toggleUseHpLimit: (id: string) => void
  setStackHpLimit: (id: string, value: number) => void
  recalculatePosition: () => void
  updateMinSetup: (id: string, minSetup: number) => void
  addUnits: (id: string, amount: number) => void
  removeUnits: (id: string, amount: number) => void
  getStackStrength: (id: string) => number
  getStackAllStrength: (id: string) => [] | { type: string; percent: number; str: number }[]
  getStackHealth: (id: string) => number
  toggleLockMin: (id: string) => void
}

const stackSlice: StateCreator<StackStore, [], [['zustand/persist', unknown]]> = (set, get) => ({
  leadership: 10000,
  authority: 10000,
  dominance: 10000,
  army: [],

  setLeadership: value => {
    set(() => ({ leadership: value }))
  },
  setAuthority: value => {
    set(() => ({ authority: value }))
  },
  setDominance: value => {
    set(() => ({ dominance: value }))
  },
  setArmy: (data: Stack[]) => {
    //TODO: generate id for each stack
    set(() => ({ army: data }))
  },

  addStack: (data: Stack) => {
    set(state => ({ army: [...state.army, data] }))
  },
  removeStack: (id: string) => {
    set(state => ({ army: state.army.filter(stack => stack.id !== id) }))
  },
  resetStack: (id: string) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === id) {
          return {
            ...stack,
            unitsAmount: 0,
            leadership: 0,
            authority: 0,
            dominance: 0
          }
        }
        return stack
      })
    }))
  },
  resetAllStacks: () => {
    set(state => ({
      army: state.army.map(stack => {
        return {
          ...stack,
          unitsAmount: 0,
          leadership: 0,
          authority: 0,
          dominance: 0
        }
      })
    }))
  },
  updateMinSetup: (id: string, minSetup: number) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === id) {
          return {
            ...stack,
            minSetup
          }
        }
        return stack
      })
    }))
  },
  recalculatePosition: () => {
    set(state => ({ army: state.army.map((stack, index) => ({ ...stack, position: index })) }))
  },
  setGapPercent: (id: string, value: number) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === id) {
          return {
            ...stack,
            gapPercent: value
          }
        }
        return stack
      })
    }))
  },
  setHpBonus: (id: string, value: number) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === id) {
          return {
            ...stack,
            hpBonus: value
          }
        }
        return stack
      })
    }))
  },

  setStrBonus: (id: string, value: number) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === id) {
          return {
            ...stack,
            strBonus: value
          }
        }
        return stack
      })
    }))
  },

  toggleUseUnitLimit: (id: string) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === id) {
          return { ...stack, useUnitLimit: !stack.useUnitLimit }
        } else return stack
      })
    }))
  },
  setStackUnitLimit: (id: string, value: number) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === id) {
          return {
            ...stack,
            unitLimit: value
          }
        }
        return stack
      })
    }))
  },
  toggleUseStrLimit: (id: string) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === id) {
          return { ...stack, useStrLimit: !stack.useStrLimit }
        } else return stack
      })
    }))
  },
  setStackStrLimit: (id: string, value: number) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === id) {
          return {
            ...stack,
            strLimit: value
          }
        }
        return stack
      })
    }))
  },
  setStackStrLimitType: (id: string, value: string) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === id) {
          return {
            ...stack,
            strLimitType: value
          }
        }
        return stack
      })
    }))
  },
  toggleUseHpLimit: (id: string) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === id) {
          return { ...stack, useHpLimit: !stack.useHpLimit }
        } else return stack
      })
    }))
  },
  setStackHpLimit: (id: string, value: number) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === id) {
          return {
            ...stack,
            HpLimit: value
          }
        }
        return stack
      })
    }))
  },
  addUnits: (id: string, amount: number) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === id) {
          const leadership = stack.unit.LEADERSHIP
          const authority = stack.unit.AUTHORITY
          const dominance = stack.unit.DOMINANCE

          // index === 0 ,its a sacrifice, increase 1 by 1, this MUST have the highest hp
          // all others stack should check index 0 health, and keep lower health
          // const unitToAdd = stack.lockMinSetup && index > 0 ? stack.minSetup : 1

          const totalUnits = stack.unitsAmount + amount

          // console.log(
          //   'adding units',
          //   totalUnits,

          //   'lead',
          //   totalUnits * leadership
          // )

          return {
            ...stack,
            unitsAmount: totalUnits,
            leadership: totalUnits * leadership,
            authority: totalUnits * authority,
            dominance: totalUnits * dominance
          }
        } else return stack
      })
    }))
  },
  removeUnits: (id: string, amount: number) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === id) {
          const leadership = stack.unit.LEADERSHIP
          const authority = stack.unit.AUTHORITY
          const dominance = stack.unit.DOMINANCE

          // const unitToRemove = stack.lockMinSetup && index > 0 ? stack.minSetup : 1

          if (stack.unitsAmount - amount >= 0) {
            const totalUnits = stack.unitsAmount - amount

            // console.log(
            //   'removing units',
            //   totalUnits,

            //   'lead',
            //   totalUnits * leadership
            // )

            return {
              ...stack,
              unitsAmount: totalUnits,
              leadership: totalUnits * leadership,
              authority: totalUnits * authority,
              dominance: totalUnits * dominance
            }
          } else return stack
        } else return stack
      })
    }))
  },

  getStackAllStrength: (id: string) => {
    // return a list of the stack strength with bonus
    const stack = get().army.find(army => army.id === id)
    if (!stack) return []

    return getStrengthWithBonus(stack)
  },
  getStackStrength: (id: string) => {
    const stack = get().army.find(army => army.id === id)
    if (!stack) return 0

    const totalSTRPerUnit =
      stack.strBonus > 0 ? stack.unit.BASESTR * (1 + stack.strBonus / 100) : stack.unit.BASESTR
    return totalSTRPerUnit * stack.unitsAmount
  },
  getStackHealth: (id: string) => {
    const stack = get().army.find(army => army.id === id)
    if (!stack) return 0

    const totalHPPerUnit =
      stack.hpBonus > 0 ? stack.unit.BASEHP * (1 + stack.hpBonus / 100) : stack.unit.BASEHP
    return totalHPPerUnit * stack.unitsAmount
  },
  toggleLockMin: (id: string) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === id) {
          return { ...stack, lockMinSetup: !stack.lockMinSetup }
        } else return stack
      })
    }))
  }
})

export const useStackStore = create<StackStore>()(
  devtools(
    persist(stackSlice, {
      name: 'stacks',
      version: 8,
      // storage: createJSONStorage(() => hashStorage),
      storage: createDebouncedJSONStorage(hashStorage, {
        debounceTime: 500 // Debounce time in milliseconds ⏳
        // Other options can be specified here
      }),
      partialize: s => {
        return {
          leadership: s.leadership,
          authority: s.authority,
          dominance: s.dominance,
          army: s.army.map(({ unit, ...stack }) => {
            return { ...stack, unitKey: unit.id }
          })
          // mobArmy:s.mobArmy,
          // bonus:s.bonus,
        }
      },
      merge: (persistedState, currentState): StackStore => {
        // console.log('persistedState', persistedState)
        // console.log('currentstate', currentState)
        // console.log('ARMY', ARMY)
        const state: StackStore = persistedState as StackStore
        const newState = {
          ...currentState,
          ...state,
          army: state.army.map(stack => {
            const unit = ARMY[stack.unitKey as string] as Unit
            return {
              ...stack,
              unit: unit || ARMY.errorUnit
            }
          })
        }

        // console.log('newstate', newState)
        return newState
      }
    })
  )
)
