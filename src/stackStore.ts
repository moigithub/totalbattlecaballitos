import { create, StateCreator } from 'zustand'
// import { MobStack } from './monsters'
import { devtools, persist } from 'zustand/middleware'
import { BasicStats, Bonus, Stack, Unit } from './types'
// import { getStrWithExtraBonus, whoCanIAttack } from './utils'
import { hashStorage } from '@/hashStore'
import { createDebouncedJSONStorage } from 'zustand-debounce'
import { getStrengthWithBonus } from './helpers'
import { ARMY } from './soldiers'

interface StackStore {
  leadership: number
  authority: number
  dominance: number
  army: Stack[]
  // mobArmy: MobStack[]
  bonus: Bonus
  // {
  //   archer: { G1: { str: number; hp: number } }
  //   spearman: { G1: { str: number; hp: number } }
  //   rider: { G1: { str: number; hp: number } }
  //   spy: { G1: { str: number; hp: number } }
  //   swordsman: { G1: { str: number; hp: number } }
  //   catapult: { G1: { str: number; hp: number } }
  // }
  setLeadership: (value: number) => void
  setAuthority: (value: number) => void
  setDominance: (value: number) => void
  // setMobArmy: (data: MobStack[]) => void
  setArmy: (data: Stack[]) => void
  // getArmyStrength: () => number
  // getArmyHealth: () => number
  addStack: (data: Stack) => void
  removeStack: (id: string) => void
  resetStack: (id: string) => void
  // getStack: (id: string) => Stack | null
  resetAllStacks: () => void

  setGapPercent: (id: string, value: number) => void
  setHpBonus: (id: string, value: number) => void
  setStrBonus: (id: string, value: number) => void
  toggleUseUnitLimit: (id: string) => void
  setStackUnitLimit: (id: string, value: number) => void
  // getStackUnitLimit: (id: string) => number
  toggleUseStrLimit: (id: string) => void
  setStackStrLimit: (id: string, value: number) => void
  setStackStrLimitType: (id: string, value: string) => void
  // getStackStrLimit: (id: string) => number
  toggleUseHpLimit: (id: string) => void
  setStackHpLimit: (id: string, value: number) => void

  // getArmyLeadership: () => number
  // getArmyAuthority: () => number
  // getArmyDominance: () => number
  // setStackPosition: (id:string, newPosition: number) => void
  recalculatePosition: () => void
  updateMinSetup: (id: string, minSetup: number) => void
  // getStackUnits: (id: string) => number
  addUnits: (id: string, amount: number) => void
  removeUnits: (id: string, amount: number) => void

  // fixStackUnits: (id: string, maxHealth: number) => void
  // calcWhichMobIDoMostDmg: (id: string) => MobStack
  getStackStrength: (id: string) => number
  getStackAllStrength: (id: string) => [] | { type: string; percent: number; str: number }[]
  getStackHealth: (id: string) => number
  // getStackLeadership: (id: string) => number
  toggleLockMin: (id: string) => void
  setGuardsmanRangedBonus: (bonus: BasicStats) => void
  setGuardsmanMeleeBonus: (bonus: BasicStats) => void
  setGuardsmanMountedBonus: (bonus: BasicStats) => void
  setGuardsmanFlyingBonus: (bonus: BasicStats) => void
  setGuardsmanEpicBonus: (bonus: BasicStats) => void
  setSpecialistRangedBonus: (bonus: BasicStats) => void
  setSpecialistMeleeBonus: (bonus: BasicStats) => void
  setSpecialistMountedBonus: (bonus: BasicStats) => void
  setSpecialistFlyingBonus: (bonus: BasicStats) => void
  setSpecialistScoutBonus: (bonus: BasicStats) => void
  setEngineerSiegeBonus: (bonus: BasicStats) => void
  setElementalRangedBonus: (bonus: BasicStats) => void
  setElementalMeleeBonus: (bonus: BasicStats) => void
  setElementalMountedBonus: (bonus: BasicStats) => void
  setElementalFlyingBonus: (bonus: BasicStats) => void
  setBeastRangedBonus: (bonus: BasicStats) => void
  setBeastMeleeBonus: (bonus: BasicStats) => void
  setBeastMountedBonus: (bonus: BasicStats) => void
  setBeastFlyingBonus: (bonus: BasicStats) => void
  setDragonRangedBonus: (bonus: BasicStats) => void
  setDragonMeleeBonus: (bonus: BasicStats) => void
  setDragonMountedBonus: (bonus: BasicStats) => void
  setDragonFlyingBonus: (bonus: BasicStats) => void
  setGiantRangedBonus: (bonus: BasicStats) => void
  setGiantMeleeBonus: (bonus: BasicStats) => void
  setGiantMountedBonus: (bonus: BasicStats) => void
  setGiantFlyingBonus: (bonus: BasicStats) => void
}

const stackSlice: StateCreator<StackStore, [], [['zustand/persist', unknown]]> = (set, get) => ({
  leadership: 10000,
  authority: 10000,
  dominance: 10000,
  // mobArmy: [],
  army: [],
  bonus: {
    guardsman: {
      ranged: {
        str: 0,
        hp: 0
      },
      melee: {
        str: 0,
        hp: 0
      },
      mounted: {
        str: 0,
        hp: 0
      },
      flying: {
        str: 0,
        hp: 0
      },
      epic: {
        str: 0, // merc epic monster hunter VI
        hp: 85
      }
    },
    // Engineer corps
    engineer: {
      siege: {
        str: 0,
        hp: 0
      }
    },
    specialist: {
      scout: {
        str: 0,
        hp: 0
      },
      ranged: {
        str: 0,
        hp: 0
      },
      melee: {
        str: 0,
        hp: 0
      },
      mounted: {
        str: 0,
        hp: 0
      },
      flying: {
        str: 0,
        hp: 0
      }
    },

    // monsters
    elemental: {
      ranged: {
        str: 0,
        hp: 0
      },
      melee: {
        str: 0,
        hp: 0
      },
      mounted: {
        str: 0,
        hp: 0
      },
      flying: {
        str: 0,
        hp: 0
      }
    },
    beast: {
      ranged: {
        str: 0,
        hp: 0
      },
      melee: {
        str: 0,
        hp: 0
      },
      mounted: {
        str: 0,
        hp: 0
      },
      flying: {
        str: 0,
        hp: 0
      }
    },
    dragon: {
      ranged: {
        str: 0,
        hp: 0
      },
      melee: {
        str: 0,
        hp: 0
      },
      mounted: {
        str: 0,
        hp: 0
      },
      flying: {
        str: 0,
        hp: 0
      }
    },
    giant: {
      ranged: {
        str: 0,
        hp: 0
      },
      melee: {
        str: 0,
        hp: 0
      },
      mounted: {
        str: 0,
        hp: 0
      },
      flying: {
        str: 0,
        hp: 0
      }
    }
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
  // setMobArmy: (data: MobStack[]) => {
  //   //TODO: generate id for each stack
  //   set(() => ({ mobArmy: data }))
  // },
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
  // getStack: (id: string) => {
  //   const stack = get().army.find(army => army.id === id)
  //   if (!stack) return null

  //   return stack
  // },
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
  // setStackPosition: (id: string, newPosition: number) => {
  //   const army = get().army
  //   const stack1 = army[newPosition]
  //   army[newPosition] = army[position]
  //   army[position] = stack1
  //   set(() => ({ army }))
  // },
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
  // getStackUnitLimit: (id: string) => {
  //   const stack = get().army.find(army => army.id === id)
  //   if (!stack) return 0

  //   return stack.unitLimit
  // },
  // getStackStrLimit: (id: string) => {
  //   const stack = get().army.find(army => army.id === id)
  //   if (!stack) return 0

  //   return stack.strLimit
  // },
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
  // getStackUnits: (id: string) => {
  //   const stack = get().army.find(army => army.id === id)
  //   if (!stack) return 0

  //   return stack.units
  // },
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
    // const stack = get().army.find(army => army.position === position)
    // return stack?.health ?? 0

    const stack = get().army.find(army => army.id === id)
    if (!stack) return 0

    // const bonus = get().bonus
    // const totalHPPerUnit = getHPWithBonus(stack.unit, bonus)
    const totalSTRPerUnit =
      stack.strBonus > 0 ? stack.unit.BASESTR * (1 + stack.strBonus / 100) : stack.unit.BASESTR
    return totalSTRPerUnit * stack.unitsAmount
  },
  getStackHealth: (id: string) => {
    // const stack = get().army.find(army => army.position === position)
    // return stack?.health ?? 0

    const stack = get().army.find(army => army.id === id)
    if (!stack) return 0

    // const bonus = get().bonus
    // const totalHPPerUnit = getHPWithBonus(stack.unit, bonus)
    const totalHPPerUnit =
      stack.hpBonus > 0 ? stack.unit.BASEHP * (1 + stack.hpBonus / 100) : stack.unit.BASEHP
    return totalHPPerUnit * stack.unitsAmount
  },
  // getStackLeadership: (id: string) => {
  //   const stack = get().army.find(army => army.id === id)
  //   return stack?.leadership ?? 0
  // },
  // getArmyLeadership: () => {
  //   const leadership = get().army.reduce((count, stack) => {
  //     return count + stack.leadership
  //   }, 0)
  //   return leadership
  // },
  // getArmyAuthority: () => {
  //   const authority = get().army.reduce((count, stack) => {
  //     return count + stack.authority
  //   }, 0)
  //   return authority
  // },
  // getArmyDominance: () => {
  //   const dominance = get().army.reduce((count, stack) => {
  //     return count + stack.dominance
  //   }, 0)
  //   return dominance
  // },
  // getArmyHealth: () => {
  //   const bonus = get().bonus
  //   const health = get().army.reduce((hp, stack) => {
  //     return hp + getHPWithBonus(stack.unit, bonus) * stack.units
  //   }, 0)
  //   return health
  // },
  // getArmyStrength: () => {
  //   const bonus = get().bonus
  //   const health = get().army.reduce((hp, stack) => {
  //     return hp + getSTRWithBonus(stack.unit, bonus) * stack.units
  //   }, 0)
  //   return health
  // },
  toggleLockMin: (id: string) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === id) {
          return { ...stack, lockMinSetup: !stack.lockMinSetup }
        } else return stack
      })
    }))
  },

  setGuardsmanRangedBonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, guardsman: { ...state.bonus.guardsman, ranged: bonus } }
    }))
  },
  setGuardsmanMeleeBonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, guardsman: { ...state.bonus.guardsman, melee: bonus } }
    }))
  },
  setGuardsmanMountedBonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, guardsman: { ...state.bonus.guardsman, mounted: bonus } }
    }))
  },
  setGuardsmanFlyingBonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, guardsman: { ...state.bonus.guardsman, flying: bonus } }
    }))
  },
  setGuardsmanEpicBonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, guardsman: { ...state.bonus.guardsman, epic: bonus } }
    }))
  },
  setSpecialistRangedBonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, specialist: { ...state.bonus.specialist, ranged: bonus } }
    }))
  },
  setSpecialistMeleeBonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, specialist: { ...state.bonus.specialist, melee: bonus } }
    }))
  },
  setSpecialistMountedBonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, specialist: { ...state.bonus.specialist, mounted: bonus } }
    }))
  },
  setSpecialistFlyingBonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, specialist: { ...state.bonus.specialist, flying: bonus } }
    }))
  },
  setSpecialistScoutBonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, specialist: { ...state.bonus.specialist, scout: bonus } }
    }))
  },

  setEngineerSiegeBonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, engineer: { ...state.bonus.engineer, siege: bonus } }
    }))
  },

  setElementalRangedBonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, elemental: { ...state.bonus.elemental, ranged: bonus } }
    }))
  },
  setElementalMeleeBonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, elemental: { ...state.bonus.elemental, melee: bonus } }
    }))
  },
  setElementalMountedBonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, elemental: { ...state.bonus.elemental, mounted: bonus } }
    }))
  },
  setElementalFlyingBonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, elemental: { ...state.bonus.elemental, flying: bonus } }
    }))
  },

  setBeastRangedBonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, beast: { ...state.bonus.beast, ranged: bonus } } }))
  },
  setBeastMeleeBonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, beast: { ...state.bonus.beast, melee: bonus } } }))
  },
  setBeastMountedBonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, beast: { ...state.bonus.beast, mounted: bonus } } }))
  },
  setBeastFlyingBonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, beast: { ...state.bonus.beast, flying: bonus } } }))
  },

  setDragonRangedBonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, dragon: { ...state.bonus.dragon, ranged: bonus } } }))
  },
  setDragonMeleeBonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, dragon: { ...state.bonus.dragon, melee: bonus } } }))
  },
  setDragonMountedBonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, dragon: { ...state.bonus.dragon, mounted: bonus } } }))
  },
  setDragonFlyingBonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, dragon: { ...state.bonus.dragon, flying: bonus } } }))
  },

  setGiantRangedBonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, giant: { ...state.bonus.giant, ranged: bonus } } }))
  },
  setGiantMeleeBonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, giant: { ...state.bonus.giant, melee: bonus } } }))
  },
  setGiantMountedBonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, giant: { ...state.bonus.giant, mounted: bonus } } }))
  },
  setGiantFlyingBonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, giant: { ...state.bonus.giant, flying: bonus } } }))
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
