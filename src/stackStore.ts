import { create, StateCreator } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { MobStack } from './monsters'
import { persist } from 'zustand/middleware'
import { BasicStats, Bonus, Stack, Unit } from './types'

interface StackStore {
  army: Stack[]
  mobArmy: MobStack[]
  bonus: Bonus
  // {
  //   archer: { G1: { str: number; hp: number } }
  //   spearman: { G1: { str: number; hp: number } }
  //   rider: { G1: { str: number; hp: number } }
  //   spy: { G1: { str: number; hp: number } }
  //   swordsman: { G1: { str: number; hp: number } }
  //   catapult: { G1: { str: number; hp: number } }
  // }
  setMobArmy: (data: MobStack[]) => void
  setArmy: (data: Stack[]) => void
  getArmyStrength: () => number
  getArmyHealth: () => number
  addStack: (data: Omit<Stack, 'id'>) => void
  removeStack: (id: string) => void
  resetStack: (id: string) => void
  resetAllStacks: () => void
  getArmyLeadership: () => number
  getArmyAuthority: () => number
  getArmyDominance: () => number
  // setStackPosition: (id:string, newPosition: number) => void
  recalculatePosition: () => void
  updateMinSetup: (id: string, minSetup: number) => void
  addUnits: (id: string) => void
  removeUnits: (id: string) => void
  reduceSacrificeUnits: () => void
  // fixStackUnits: (id: string, maxHealth: number) => void
  getStackStrength: (id: string) => number
  getStackHealth: (id: string) => number
  getStackLeadership: (id: string) => number
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

export const getStats = (unit: Unit, bonus: Bonus) => {
  // let stats: BasicStats = { str: 0, hp: 0 }
  let stats: BasicStats = { str: 0, hp: 0 } //bonus[unit.group] [unit.category]

  if (unit.group === 'guardsman' && unit.race === 'human' && unit.tipo === 'merc') {
    stats = bonus.guardsman[unit.category]
  } else if (unit.group === 'guardsman' && unit.race === 'human' && unit.tipo === 'army') {
    stats = bonus.guardsman[unit.category]
  } else if (unit.group === 'specialist' && unit.race === 'human') {
    stats = bonus.specialist[unit.category]
  } else if (unit.group === 'engineer' && unit.race === 'human') {
    stats = bonus.engineer[unit.category]
  } else if (unit.group === 'monster' && unit.race === 'elemental') {
    stats = bonus.elemental[unit.category]
  } else if (unit.group === 'monster' && unit.race === 'dragon') {
    stats = bonus.dragon[unit.category]
  } else if (unit.group === 'monster' && unit.race === 'beast') {
    stats = bonus.beast[unit.category]
  } else if (unit.group === 'monster' && unit.race === 'giant') {
    stats = bonus.giant[unit.category]
  }

  return stats
}

export const getHPWithBonus = (unit: Unit, bonus: Bonus) => {
  const stats = getStats(unit, bonus)
  const bonusHP = stats?.hp ?? 0
  const bonusHPPercent = (unit.BASEHP * bonusHP) / 100
  const totalHPPerUnit = unit.BASEHP + bonusHPPercent

  return totalHPPerUnit
}

export const getSTRWithBonus = (unit: Unit, bonus: Bonus) => {
  const stats = getStats(unit, bonus)
  const bonusSTR = stats?.str ?? 0
  const bonusSTRPercent = (unit.BASESTR * bonusSTR) / 100
  const totalHPPerUnit = unit.BASESTR + bonusSTRPercent

  return totalHPPerUnit
}

const stackSlice: StateCreator<StackStore, [], [['zustand/persist', unknown]]> = (set, get) => ({
  mobArmy: [],
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
  setMobArmy: (data: MobStack[]) => {
    //TODO: generate id for each stack
    set(() => ({ mobArmy: data }))
  },
  setArmy: (data: Stack[]) => {
    //TODO: generate id for each stack
    set(() => ({ army: data }))
  },
  addStack: (data: Omit<Stack, 'id'>) => {
    set(state => ({ army: [...state.army, { ...data, id: uuidv4() }] }))
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
            units: 0,
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
          units: 0,
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

  addUnits: (id: string) => {
    set(state => ({
      army: state.army.map((stack, index) => {
        if (stack.id === id) {
          const leadership = stack.unit.LEADERSHIP
          const authority = stack.unit.AUTHORITY
          const dominance = stack.unit.DOMINANCE

          // index === 0 ,its a sacrifice, increase 1 by 1, this MUST have the highest hp
          // all others stack should check index 0 health, and keep lower health
          const unitToAdd = stack.lockMinSetup && index > 0 ? stack.minSetup : 1

          const totalUnits = stack.units + unitToAdd

          console.log(
            'adding units',
            totalUnits,

            'lead',
            totalUnits * leadership
          )

          return {
            ...stack,
            units: totalUnits,
            leadership: totalUnits * leadership,
            authority: totalUnits * authority,
            dominance: totalUnits * dominance
          }
        } else return stack
      })
    }))
  },
  removeUnits: (id: string) => {
    set(state => ({
      army: state.army.map((stack, index) => {
        if (stack.id === id) {
          const leadership = stack.unit.LEADERSHIP
          const authority = stack.unit.AUTHORITY
          const dominance = stack.unit.DOMINANCE

          const unitToRemove = stack.lockMinSetup && index > 0 ? stack.minSetup : 1

          if (stack.units - unitToRemove >= 0) {
            const totalUnits = stack.units - unitToRemove

            console.log(
              'removing units',
              totalUnits,

              'lead',
              totalUnits * leadership
            )

            return {
              ...stack,
              units: totalUnits,
              leadership: totalUnits * leadership,
              authority: totalUnits * authority,
              dominance: totalUnits * dominance
            }
          } else return stack
        } else return stack
      })
    }))
  },
  reduceSacrificeUnits: () => {
    if (get().army.length < 2) return

    const firstStack = get().army[0]

    const secondStack = get().army[1]
    const secondStackUnits = secondStack.units
    const totalSTRPerUnit = getSTRWithBonus(secondStack.unit, get().bonus)
    const secondStackStrength = totalSTRPerUnit * secondStackUnits

    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === firstStack.id) {
          // reduce the units amount, so the total stack health is a bit higher than the second stack
          // so send less sacrifices, but enough to be first position
          let stackUnits = stack.units

          const totalSTRPerUnit = getSTRWithBonus(stack.unit, state.bonus)
          let stackStrength = totalSTRPerUnit * stackUnits
          while (stackStrength >= secondStackStrength && stackUnits > 0) {
            stackUnits = stackUnits - 1
            stackStrength = totalSTRPerUnit * stackUnits
          }
          return { ...stack, units: stackUnits + 1 }
        } else return stack
      })
    }))
  },

  // fixStackUnits: (id: string, maxHealth: number) => {
  //   set(state => ({
  //     army: state.army.map(stack => {
  //       if (stack.id === id) {
  //         // reduce the units amount, so the total stack health is lower than maxHealth
  //         let stackUnits = stack.units

  //         const totalHPPerUnit = getHPWithBonus(stack.unit, state.bonus)
  //         let stackHealth = totalHPPerUnit * stackUnits
  //         while (stackHealth >= maxHealth && stackUnits > 0) {
  //           stackUnits = stackUnits - 1
  //           stackHealth = totalHPPerUnit * stackUnits
  //         }
  //         return { ...stack, units: stackUnits }
  //       } else return stack
  //     })
  //   }))
  // },
  calcWhichMobIDoMostDmg: (id: string, against: string) => {
    // TODO: fix this
    /* calc the strength vs all the posibles monsters it can attack
    ie: melee can attack beast and mounted

    which can have the highest damage possible
    ie.
    dmgVsBeast = stackStr + vsBeastPercentBonus *units
    dmgVsMounted = stackStr + vsMountedPercentBonus *units
    if (dmgVsBeast > dmgVsMounted) mobToAttack = beast
    else mobToAttack = mounted

    BUT... if the target mob health is lower then your damage it should switch to the mob
    where you can do most dmg

    if beastStackTotalHealth < dmgVsBeast and dmgVsMounted>= mountedStackTotalHealth
      mobToattack = mounted
    */
    const stack = get().army.find(army => army.id === id)
    const bonus = get().bonus

    if (stack) {
      const stackUnits = stack.units
      const unit = stack.unit

      const stats = getStats(unit, bonus)

      const otherBonus = stats?.str ?? 0
      let percent = 0

      if (stack.unit.category === 'mounted') {
        if (against === 'ranged') {
          percent = stack.unit.vsRangedPercent
        } else if (against === 'siege') {
          percent = stack.unit.vsSiegePercent
        }
      } else if (stack.unit.category === 'ranged') {
        /* spearmans, melee vs beast||mounted  */

        if (against === 'flying') {
          percent = stack.unit.vsFlyingPercent
        } else if (against === 'melee') {
          percent = stack.unit.vsMeleePercent
        }
      } else if (stack.unit.category === 'melee') {
        /* spearmans/swordsman, melee vs beast||mounted  */

        if (against === 'beast') {
          percent = stack.unit.vsBeastPercent
        } else if (against === 'human') {
          percent = stack.unit.vsHumanPercent
        } else if (against === 'mounted') {
          percent = stack.unit.vsMountedPercent
        }
      } else if (stack.unit.category === 'scout') {
        /* spearmans, melee vs beast||mounted  */
      } else if (stack.unit.category === 'siege') {
        /* spearmans, melee vs beast||mounted  */

        if (against === 'fortification') {
          percent = stack.unit.vsFortificationsPercent
        }
      }

      const bonusSTR = (stack.unit.BASESTR * (percent + otherBonus)) / 100
      const totalSTRPerUnit = stack.unit.BASESTR + bonusSTR
      const stackStrength = totalSTRPerUnit * stackUnits
      return stackStrength
    }
    // TODO : add more units
    return 0
  },
  getStackStrength: (id: string) => {
    // return the stack strength with bonus,
    // but without extra bonus,ie. vsMeleePercent

    const stack = get().army.find(army => army.id === id)
    if (!stack) return 0

    const bonus = get().bonus
    const totalSTRPerUnit = getSTRWithBonus(stack.unit, bonus)
    return totalSTRPerUnit * stack.units
  },
  getStackHealth: (id: string) => {
    // const stack = get().army.find(army => army.position === position)
    // return stack?.health ?? 0

    const stack = get().army.find(army => army.id === id)
    if (!stack) return 0

    const bonus = get().bonus
    const totalHPPerUnit = getHPWithBonus(stack.unit, bonus)
    return totalHPPerUnit * stack.units
  },
  getStackLeadership: (id: string) => {
    const stack = get().army.find(army => army.id === id)
    return stack?.leadership ?? 0
  },
  getArmyLeadership: () => {
    const leadership = get().army.reduce((count, stack) => {
      return count + stack.leadership
    }, 0)
    return leadership
  },
  getArmyAuthority: () => {
    const authority = get().army.reduce((count, stack) => {
      return count + stack.authority
    }, 0)
    return authority
  },
  getArmyDominance: () => {
    const dominance = get().army.reduce((count, stack) => {
      return count + stack.dominance
    }, 0)
    return dominance
  },
  getArmyHealth: () => {
    const bonus = get().bonus
    const health = get().army.reduce((hp, stack) => {
      return hp + getHPWithBonus(stack.unit, bonus) * stack.units
    }, 0)
    return health
  },
  getArmyStrength: () => {
    const bonus = get().bonus
    const health = get().army.reduce((hp, stack) => {
      return hp + getSTRWithBonus(stack.unit, bonus) * stack.units
    }, 0)
    return health
  },
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
  persist(stackSlice, { name: 'stackstore', version: 2 })
)
