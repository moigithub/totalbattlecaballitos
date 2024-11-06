import { create, StateCreator } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { MobStack, TIPO } from './monsters'
import { persist } from 'zustand/middleware'

export interface BasicStats {
  str: number
  hp: number
}

interface UnitStats {
  ranged: BasicStats
  melee: BasicStats
  mounted: BasicStats
  flying: BasicStats
  // [key: string]: BasicStats
}

interface Engineer {
  siege: BasicStats
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Guardsman extends UnitStats {}
interface Specialist extends UnitStats {
  scout: BasicStats
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Mercs extends UnitStats {
  epicHunter: BasicStats
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Monster extends UnitStats {}

interface Bonus {
  guardsman: Guardsman
  specialist: Specialist
  engineer: Engineer
  elemental: Monster
  dragon: Monster
  beast: Monster
  giant: Monster
  // [key: string]: Guardsman | Specialist | Engineer | Monster
}

export type TroopType =
  | 'monster'
  | 'archer'
  | 'spearman'
  | 'rider'
  | 'spy'
  | 'swordsman'
  | 'catapult'

export type Category =
  | 'mounted'
  | 'ranged'
  | 'melee'
  | 'scout'
  | 'flying'
  // | 'fortification'
  | 'siege'

export type Group =
  | 'guardsman'
  | 'specialist'
  | 'engineer'
  | 'elemental'
  | 'beast'
  | 'dragon'
  | 'giant'

interface BasicUnit {
  tipo: TIPO
  name: string
  BASEHP: number
  BASESTR: number
  // LEADERSHIP: number
  // AUTHORITY: number
  // DOMINANCE: number
  INITIATIVE: number
  vsRangedPercent: number
  vsSiegePercent: number
  vsBeastPercent: number
  vsHumanPercent: number
  vsMountedPercent: number
  vsFlyingPercent: number
  vsMeleePercent: number
  vsFortificationsPercent: number
  vsGiants: number
  troop: string //TroopType
  // category: string //Category
  // group: string // Group
  level: string
}

interface HumanUnit extends BasicUnit {
  LEADERSHIP: number
  DOMINANCE: 0
  AUTHORITY: 0
}

export interface GuardsmanUnit extends HumanUnit {
  group: 'guardsman'
  category: keyof Guardsman
}
export interface SpecialistUnit extends HumanUnit {
  group: 'specialist'
  category: keyof Specialist
}

export interface EngineerUnit extends HumanUnit {
  group: 'engineer'
  category: keyof Engineer
}

export interface MercUnit extends BasicUnit {
  AUTHORITY: number
  LEADERSHIP: 0
  DOMINANCE: 0
  vsEpicMonster: number
  group: 'merc'
  category: keyof Mercs
}

export interface MonsterUnit extends BasicUnit {
  DOMINANCE: number
  AUTHORITY: 0
  LEADERSHIP: 0
  group: 'elemental' | 'dragon' | 'beast' | 'giant'
  category: keyof Monster
}

export type Unit = GuardsmanUnit | SpecialistUnit | EngineerUnit | MonsterUnit | MercUnit

export interface Stack {
  id: string // whichever at first position will be used as sacrifice, increases 1 by 1, ignoring lockMinSetup
  // health: number // (base hp+bonus) *units // DEBE ser calculado y no guardado, por si cambia el bono no tener que recalcular de nuevo
  //healthLeft o damageTaken
  // strength: number // (base str+bonus) *units// calculado basado contra que esta atacando// recalculado, no guardado
  leadership: number
  authority: number
  dominance: number
  unit: Unit
  units: number
  minSetup: number // used to calculate how many units are needed to kill one monster
  lockMinSetup: boolean //to know if the unit number increments one by one or by "minSetup" amount
  limit: number // max unit value
}

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
  fixStackUnits: (id: string, maxHealth: number) => void
  getStackStrength: (id: string, against: string) => number
  getStackHealth: (id: string) => number
  getStackLeadership: (id: string) => number
  toggleLockMin: (id: string) => void
  setGuardsmanRangedBonus: (bonus: BasicStats) => void
  setGuardsmanMeleeBonus: (bonus: BasicStats) => void
  setGuardsmanMountedBonus: (bonus: BasicStats) => void
  setGuardsmanFlyingBonus: (bonus: BasicStats) => void
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

export const getHPWithBonus = (unit: Unit, bonus: Bonus) => {
  //const hp = bonus[unit.troop]? 0

  // let stats: BasicStats = { str: 0, hp: 0 }
  let stats: BasicStats = { str: 0, hp: 0 } //bonus[unit.group] [unit.category]

  if (unit.group === 'guardsman') {
    stats = bonus.guardsman[unit.category]
  } else if (unit.group === 'specialist') {
    stats = bonus.specialist[unit.category]
  } else if (unit.group === 'engineer') {
    stats = bonus.engineer[unit.category]
  } else if (unit.group === 'elemental') {
    stats = bonus.elemental[unit.category]
  } else if (unit.group === 'dragon') {
    stats = bonus.dragon[unit.category]
  } else if (unit.group === 'beast') {
    stats = bonus.beast[unit.category]
  } else if (unit.group === 'giant') {
    stats = bonus.giant[unit.category]
  }
  //  = group[unit.category as Category]
  const bonusHP = stats?.hp ?? 0
  const bonusHPPercent = (unit.BASEHP * bonusHP) / 100
  const totalHPPerUnit = unit.BASEHP + bonusHPPercent

  return totalHPPerUnit
}
/**
 * export const useBearStore = create(
   persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
  )
 */
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
  fixStackUnits: (id: string, maxHealth: number) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.id === id) {
          // reduce the units amount, so the total stack health is lower than maxHealth
          let stackUnits = stack.units

          const totalHPPerUnit = getHPWithBonus(stack.unit, state.bonus)
          let stackHealth = totalHPPerUnit * stackUnits
          while (stackHealth >= maxHealth && stackUnits > 0) {
            stackUnits = stackUnits - 1
            stackHealth = totalHPPerUnit * stackUnits
          }
          return { ...stack, units: stackUnits }
        } else return stack
      })
    }))
  },
  getStackStrength: (id: string, against: string) => {
    const stack = get().army.find(army => army.id === id)
    const bonus = get().bonus

    if (stack) {
      const stackUnits = stack.units
      const unit = stack.unit

      let stats: BasicStats = { str: 0, hp: 0 } //bonus[unit.group] [unit.category]

      if (unit.group === 'guardsman') {
        stats = bonus.guardsman[unit.category]
      } else if (unit.group === 'specialist') {
        stats = bonus.specialist[unit.category]
      } else if (unit.group === 'engineer') {
        stats = bonus.engineer[unit.category]
      } else if (unit.group === 'elemental') {
        stats = bonus.elemental[unit.category]
      } else if (unit.group === 'dragon') {
        stats = bonus.dragon[unit.category]
      } else if (unit.group === 'beast') {
        stats = bonus.beast[unit.category]
      } else if (unit.group === 'giant') {
        stats = bonus.giant[unit.category]
      }

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

export const useStackStore = create<StackStore>()(persist(stackSlice, { name: 'stackstore' }))
