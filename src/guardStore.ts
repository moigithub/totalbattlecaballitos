import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { MobStack, MonsterUnit, TIPO } from './monsters'
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

export type TroopType = 'archer' | 'spearman' | 'rider' | 'spy' | 'swordsman' | 'catapult'

export type Category =
  | 'mounted'
  | 'ranged'
  | 'melee'
  | 'flying'
  | 'fortification'
  | 'siege'
  | 'elemental'
  | 'beast'
  | 'dragon'
  | 'giant'

export interface Stack {
  id: string // whichever at first position will be used as sacrifice, increases 1 by 1, ignoring lockMinSetup
  // health: number // (base hp+bonus) *units // DEBE ser calculado y no guardado, por si cambia el bono no tener que recalcular de nuevo
  //healthLeft o damageTaken
  // strength: number // (base str+bonus) *units// calculado basado contra que esta atacando// recalculado, no guardado
  leadership: number
  authority: number
  dominance: number
  unit: Unit | MercUnit | MonsterUnit
  units: number
  minSetup: number // used to calculate how many units are needed to kill one monster
  lockMinSetup: boolean //to know if the unit number increments one by one or by "minSetup" amount
  limit: number // max unit value
}

export interface Unit {
  tipo: TIPO
  name: string
  BASEHP: number
  BASESTR: number
  LEADERSHIP: number
  AUTHORITY: number
  DOMINANCE: number
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
  troop: TroopType
  category: Category
  level: string
}
export interface MercUnit {
  tipo: TIPO
  name: string
  BASEHP: number
  BASESTR: number
  LEADERSHIP: number
  AUTHORITY: number
  DOMINANCE: number
  INITIATIVE: number
  vsRangedPercent: number
  vsSiegePercent: number
  vsBeastPercent: number
  vsHumanPercent: number
  vsMountedPercent: number
  vsFlyingPercent: number
  vsMeleePercent: number
  vsFortificationsPercent: number
  vsEpicMonster: number
  vsGiants: number
  troop: string
  category: string
  level: string
}
export type GuardsmanLevel = 'G1' | 'G2' | 'G3' | 'G4' | 'G5'
export type EngineerLevel = 'E1' | 'E2' | 'E3' | 'E4' | 'E5'
export type SpecialistLevel = 'S1' | 'S2' | 'S3' | 'S4' | 'S5'
export type MonsterLevel = 'M1' | 'M2' | 'M3' | 'M4' | 'M5' | 'M6'
export type Level = GuardsmanLevel | EngineerLevel | SpecialistLevel | MonsterLevel

interface BasicStats {
  str: number
  hp: number
}

type Staaats<L extends Level> = {
  [E in L]: BasicStats
}

export type GuardsmanStats = Staaats<GuardsmanLevel>
// export type RiderStats = Staaats<GuardsmanLevel>

// export type GuardsmanStats = Record<GuardsmanLevel, BasicStats>
// export type SpearmanStats = Record<GuardsmanLevel, BasicStats>
// export type RiderStats = Record<GuardsmanLevel, BasicStats>
export type SpecialistStats = Record<SpecialistLevel, BasicStats>
// export type SpyStats = Record<SpecialistLevel, BasicStats>
// export type SwordsmanStats = Record<SpecialistLevel, BasicStats>
export type EngineerStats = Record<EngineerLevel, BasicStats>
export type MonsterStats = Record<MonsterLevel, BasicStats>

interface Bonus {
  archer: GuardsmanStats
  spearman: GuardsmanStats
  rider: GuardsmanStats
  spy: SpecialistStats
  swordsman: SpecialistStats
  catapult: EngineerStats
  elemental: MonsterStats
  dragon: MonsterStats
  beast: MonsterStats
  giant: MonsterStats
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

  setArcherG1Bonus: (bonus: BasicStats) => void
  setArcherG2Bonus: (bonus: BasicStats) => void
  setArcherG3Bonus: (bonus: BasicStats) => void
  setArcherG4Bonus: (bonus: BasicStats) => void
  setArcherG5Bonus: (bonus: BasicStats) => void
  setSpearmanG1Bonus: (bonus: BasicStats) => void
  setSpearmanG2Bonus: (bonus: BasicStats) => void
  setSpearmanG3Bonus: (bonus: BasicStats) => void
  setSpearmanG4Bonus: (bonus: BasicStats) => void
  setSpearmanG5Bonus: (bonus: BasicStats) => void
  setRiderG1Bonus: (bonus: BasicStats) => void
  setRiderG2Bonus: (bonus: BasicStats) => void
  setRiderG3Bonus: (bonus: BasicStats) => void
  setRiderG4Bonus: (bonus: BasicStats) => void
  setRiderG5Bonus: (bonus: BasicStats) => void

  setCatapultE1Bonus: (bonus: BasicStats) => void
  setCatapultE2Bonus: (bonus: BasicStats) => void
  setCatapultE3Bonus: (bonus: BasicStats) => void
  setCatapultE4Bonus: (bonus: BasicStats) => void
  setCatapultE5Bonus: (bonus: BasicStats) => void

  setSwordsmanS1Bonus: (bonus: BasicStats) => void
  setSpyS1Bonus: (bonus: BasicStats) => void
  setSwordsmanS2Bonus: (bonus: BasicStats) => void
  setSpyS2Bonus: (bonus: BasicStats) => void
  setSwordsmanS3Bonus: (bonus: BasicStats) => void
  setSpyS3Bonus: (bonus: BasicStats) => void
  setSwordsmanS4Bonus: (bonus: BasicStats) => void
  setSpyS4Bonus: (bonus: BasicStats) => void
  setSwordsmanS5Bonus: (bonus: BasicStats) => void
  setSpyS5Bonus: (bonus: BasicStats) => void

  setWaterElementalM3Bonus: (bonus: BasicStats) => void
  setBattleBoarM3Bonus: (bonus: BasicStats) => void
  setEmeraldDragonM3Bonus: (bonus: BasicStats) => void
  setStoneGargoleM3Bonus: (bonus: BasicStats) => void

  setEpicMonsterHunterVIBonus: (bonus: BasicStats) => void
  setChariotVIBonus: (bonus: BasicStats) => void
  setLegionaryVIBonus: (bonus: BasicStats) => void
}

/**
 {
    // guardsmen
    archer: { G1: BasicStats; G2: BasicStats; G3: BasicStats; G4: BasicStats; G5: BasicStats }
    spearman: { G1: BasicStats; G2: BasicStats; G3: BasicStats; G4: BasicStats; G5: BasicStats }
    rider: {
      G1: BasicStats
      G2: BasicStats
      G3: BasicStats
      G4: BasicStats
      G5: BasicStats
    }
    // Engineer corps (catapults)
    catapult: { E1: BasicStats; E2: BasicStats; E3: BasicStats; E4: BasicStats; E5: BasicStats }
    // specialist

    swordsman: {
      S1: BasicStats
      S2: BasicStats
      S3: BasicStats
      S4: BasicStats
      S5: BasicStats
    }
    spy: { S1: BasicStats; S2: BasicStats; S3: BasicStats; S4: BasicStats; S5: BasicStats }

    // monsters
    waterElemental: { M3: BasicStats }
    battleBoar: { M3: BasicStats }
    emeraldDragon: { M3: BasicStats }
    stoneGargole: { M3: BasicStats }
    //---- mercenaries
    epicMonsterHunterVI: BasicStats
    chariotVI: BasicStats
    legionaryVI: BasicStats
  }
 */

export const getHPWithBonus = (unit: Unit | MercUnit | MonsterUnit, bonus: Bonus) => {
  //const hp = bonus[unit.troop][unit.level].hp ?? 0
  let hp = 0

  if (unit.troop === 'archer') {
    hp = bonus[unit.troop][unit.level as GuardsmanLevel]?.hp ?? 0
  } else if (unit.troop == 'spearman') {
    hp = bonus[unit.troop][unit.level as GuardsmanLevel]?.hp ?? 0
  } else if (unit.troop == 'rider') {
    hp = bonus[unit.troop][unit.level as GuardsmanLevel]?.hp ?? 0
  } else if (unit.troop == 'spy') {
    hp = bonus[unit.troop][unit.level as SpecialistLevel]?.hp ?? 0
  } else if (unit.troop == 'swordsman') {
    hp = bonus[unit.troop][unit.level as SpecialistLevel]?.hp ?? 0
  } else if (unit.troop == 'catapult') {
    hp = bonus[unit.troop][unit.level as EngineerLevel]?.hp ?? 0
  } else if (unit.troop == 'elemental') {
    hp = bonus[unit.troop][unit.level as MonsterLevel]?.hp ?? 0
  } else if (unit.troop == 'beast') {
    hp = bonus[unit.troop][unit.level as MonsterLevel]?.hp ?? 0
  } else if (unit.troop == 'dragon') {
    hp = bonus[unit.troop][unit.level as MonsterLevel]?.hp ?? 0
  } else if (unit.troop == 'giant') {
    hp = bonus[unit.troop][unit.level as MonsterLevel]?.hp ?? 0
  }

  const bonusHP = (unit.BASEHP * hp) / 100
  const totalHPPerUnit = unit.BASEHP + bonusHP

  return totalHPPerUnit
}

export const useStackStore = create<StackStore>((set, get) => ({
  mobArmy: [],
  army: [],
  bonus: {
    // guardsmen
    archer: {
      G1: { str: 0, hp: 0 },
      G2: { str: 0, hp: 0 },
      G3: { str: 0, hp: 0 },
      G4: { str: 0, hp: 0 },
      G5: { str: 0, hp: 0 }
    },
    spearman: {
      G1: { str: 0, hp: 0 },
      G2: { str: 0, hp: 0 },
      G3: { str: 0, hp: 0 },
      G4: { str: 0, hp: 0 },
      G5: { str: 0, hp: 0 }
    },
    rider: {
      G1: { str: 0, hp: 0 },
      G2: { str: 0, hp: 0 },
      G3: { str: 0, hp: 0 },
      G4: { str: 0, hp: 0 },
      G5: { str: 0, hp: 0 }
    },
    // Engineer corps
    catapult: {
      E1: { str: 0, hp: 0 },
      E2: { str: 0, hp: 0 },
      E3: { str: 0, hp: 0 },
      E4: { str: 0, hp: 0 },
      E5: { str: 0, hp: 0 }
    },

    // specialist
    swordsman: {
      S1: { str: 0, hp: 0 },
      S2: { str: 0, hp: 0 },
      S3: { str: 0, hp: 0 },
      S4: { str: 0, hp: 0 },
      S5: { str: 0, hp: 0 }
    },
    spy: {
      S1: { str: 0, hp: 0 },
      S2: { str: 0, hp: 0 },
      S3: { str: 0, hp: 0 },
      S4: { str: 0, hp: 0 },
      S5: { str: 0, hp: 0 }
    },

    // monsters
    elemental: {
      M1: { str: 0, hp: 0 },
      M2: { str: 0, hp: 0 },
      M3: { str: 0, hp: 0 },
      M4: { str: 0, hp: 0 },
      M5: { str: 0, hp: 0 },
      M6: { str: 0, hp: 0 }
    },
    beast: {
      M1: { str: 0, hp: 0 },
      M2: { str: 0, hp: 0 },
      M3: { str: 0, hp: 0 },
      M4: { str: 0, hp: 0 },
      M5: { str: 0, hp: 0 },
      M6: { str: 0, hp: 0 }
    },
    dragon: {
      M1: { str: 0, hp: 0 },
      M2: { str: 0, hp: 0 },
      M3: { str: 0, hp: 0 },
      M4: { str: 0, hp: 0 },
      M5: { str: 0, hp: 0 },
      M6: { str: 0, hp: 0 }
    },
    giant: {
      M1: { str: 0, hp: 0 },
      M2: { str: 0, hp: 0 },
      M3: { str: 0, hp: 0 },
      M4: { str: 0, hp: 0 },
      M5: { str: 0, hp: 0 },
      M6: { str: 0, hp: 0 }
    },
    //---- mercenaries
    epicMonsterHunterVI: {
      str: 0,
      hp: 0
    },
    chariotVI: {
      str: 0,
      hp: 0
    },
    legionaryVI: {
      str: 0,
      hp: 0
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

          if (stack.unit.troop === 'rider' && stack.unit.level === 'G1') {
            const totalHPPerUnit = getHPWithBonus(stack.unit, state.bonus)
            let stackHealth = totalHPPerUnit * stackUnits
            while (stackHealth >= maxHealth && stackUnits > 0) {
              stackUnits = stackUnits - 1
              stackHealth = totalHPPerUnit * stackUnits
            }
            return { ...stack, units: stackUnits }
          } else if (stack.unit.troop === 'rider' && stack.unit.level === 'G2') {
            const totalHPPerUnit = getHPWithBonus(stack.unit, state.bonus)
            let stackHealth = totalHPPerUnit * stackUnits
            while (stackHealth >= maxHealth && stackUnits > 0) {
              stackUnits = stackUnits - 1
              stackHealth = totalHPPerUnit * stackUnits
            }
            return { ...stack, units: stackUnits }
          } else if (stack.unit.troop === 'rider' && stack.unit.level === 'G3') {
            const totalHPPerUnit = getHPWithBonus(stack.unit, state.bonus)
            let stackHealth = totalHPPerUnit * stackUnits
            while (stackHealth >= maxHealth && stackUnits > 0) {
              stackUnits = stackUnits - 1
              stackHealth = totalHPPerUnit * stackUnits
            }
            return { ...stack, units: stackUnits }
          } else if (stack.unit.troop === 'rider' && stack.unit.level === 'G4') {
            const totalHPPerUnit = getHPWithBonus(stack.unit, state.bonus)
            let stackHealth = totalHPPerUnit * stackUnits
            while (stackHealth >= maxHealth && stackUnits > 0) {
              stackUnits = stackUnits - 1
              stackHealth = totalHPPerUnit * stackUnits
            }
            return { ...stack, units: stackUnits }
          } else if (stack.unit.troop === 'rider' && stack.unit.level === 'G5') {
            const totalHPPerUnit = getHPWithBonus(stack.unit, state.bonus)
            let stackHealth = totalHPPerUnit * stackUnits
            while (stackHealth >= maxHealth && stackUnits > 0) {
              stackUnits = stackUnits - 1
              stackHealth = totalHPPerUnit * stackUnits
            }
            return { ...stack, units: stackUnits }
          }

          return stack
        } else return stack
      })
    }))
    // TODO: add more units
  },
  getStackStrength: (id: string, against: string) => {
    const stack = get().army.find(army => army.id === id)
    const bonus = get().bonus

    if (stack) {
      const stackUnits = stack.units

      let otherBonus = 0
      let percent = 0

      if (stack.unit.troop === 'rider') {
        switch (stack.unit.level) {
          case 'G1':
            otherBonus = bonus.rider.G1.str ?? 0
            break
          case 'G2':
            otherBonus = bonus.rider.G2.str ?? 0
            break
          case 'G3':
            otherBonus = bonus.rider.G3.str ?? 0
            break
          case 'G4':
            otherBonus = bonus.rider.G4.str ?? 0
            break
          case 'G5':
            otherBonus = bonus.rider.G5.str ?? 0
            break
        }

        if (against === 'ranged') {
          percent = stack.unit.vsRangedPercent
        } else if (against === 'siege') {
          percent = stack.unit.vsSiegePercent
        }
      } else if (stack.unit.troop === 'spearman') {
        /* spearmans, melee vs beast||mounted  */
        switch (stack.unit.level) {
          case 'G1':
            otherBonus = bonus.rider.G1.str ?? 0
            break
          case 'G2':
            otherBonus = bonus.rider.G2.str ?? 0
            break
          case 'G3':
            otherBonus = bonus.rider.G3.str ?? 0
            break
          case 'G4':
            otherBonus = bonus.rider.G4.str ?? 0
            break
          case 'G5':
            otherBonus = bonus.rider.G5.str ?? 0
            break
        }

        if (against === 'beast') {
          percent = stack.unit.vsBeastPercent
        } else if (against === 'mounted') {
          percent = stack.unit.vsMountedPercent
        }
      } else if (stack.unit.troop === 'archer') {
        /* spearmans, melee vs beast||mounted  */
        switch (stack.unit.level) {
          case 'G1':
            otherBonus = bonus.archer.G1.str ?? 0
            break
          case 'G2':
            otherBonus = bonus.archer.G2.str ?? 0
            break
          case 'G3':
            otherBonus = bonus.archer.G3.str ?? 0
            break
          case 'G4':
            otherBonus = bonus.archer.G4.str ?? 0
            break
          case 'G5':
            otherBonus = bonus.archer.G5.str ?? 0
            break
        }

        if (against === 'flying') {
          percent = stack.unit.vsFlyingPercent
        } else if (against === 'melee') {
          percent = stack.unit.vsMeleePercent
        }
      } else if (stack.unit.troop === 'swordsman') {
        /* spearmans, melee vs beast||mounted  */
        switch (stack.unit.level) {
          case 'S1':
            otherBonus = bonus.swordsman.S1.str ?? 0
            break
          case 'S2':
            otherBonus = bonus.swordsman.S2.str ?? 0
            break
          case 'S3':
            otherBonus = bonus.swordsman.S3.str ?? 0
            break
          case 'S4':
            otherBonus = bonus.swordsman.S4.str ?? 0
            break
          case 'S5':
            otherBonus = bonus.swordsman.S5.str ?? 0
            break
        }

        if (against === 'beast') {
          percent = stack.unit.vsBeastPercent
        } else if (against === 'human') {
          percent = stack.unit.vsHumanPercent
        } else if (against === 'mounted') {
          percent = stack.unit.vsMountedPercent
        }
      } else if (stack.unit.troop === 'spy') {
        /* spearmans, melee vs beast||mounted  */
        switch (stack.unit.level) {
          case 'S1':
            otherBonus = bonus.spy.S1.str ?? 0
            break
          case 'S2':
            otherBonus = bonus.spy.S2.str ?? 0
            break
          case 'S3':
            otherBonus = bonus.spy.S3.str ?? 0
            break
          case 'S4':
            otherBonus = bonus.spy.S4.str ?? 0
            break
          case 'S5':
            otherBonus = bonus.spy.S5.str ?? 0
            break
        }
      } else if (stack.unit.troop === 'catapult') {
        /* spearmans, melee vs beast||mounted  */
        switch (stack.unit.level) {
          case 'E1':
            otherBonus = bonus.catapult.E1.str ?? 0
            break
          case 'E2':
            otherBonus = bonus.catapult.E2.str ?? 0
            break
          case 'E3':
            otherBonus = bonus.catapult.E3.str ?? 0
            break
          case 'E4':
            otherBonus = bonus.catapult.E4.str ?? 0
            break
          case 'E5':
            otherBonus = bonus.catapult.E5.str ?? 0
            break
        }

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

  setArcherG1Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, archer: { ...state.bonus.archer, G1: bonus } } }))
  },
  setArcherG2Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, archer: { ...state.bonus.archer, G2: bonus } } }))
  },
  setArcherG3Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, archer: { ...state.bonus.archer, G3: bonus } } }))
  },
  setArcherG4Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, archer: { ...state.bonus.archer, G4: bonus } } }))
  },
  setArcherG5Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, archer: { ...state.bonus.archer, G5: bonus } } }))
  },
  setSpearmanG1Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, spearman: { ...state.bonus.spearman, G1: bonus } } }))
  },
  setSpearmanG2Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, spearman: { ...state.bonus.spearman, G2: bonus } } }))
  },
  setSpearmanG3Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, spearman: { ...state.bonus.spearman, G3: bonus } } }))
  },
  setSpearmanG4Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, spearman: { ...state.bonus.spearman, G4: bonus } } }))
  },
  setSpearmanG5Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, spearman: { ...state.bonus.spearman, G5: bonus } } }))
  },
  setRiderG1Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, rider: { ...state.bonus.rider, G1: bonus } } }))
  },
  setRiderG2Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, rider: { ...state.bonus.rider, G2: bonus } } }))
  },
  setRiderG3Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, rider: { ...state.bonus.rider, G3: bonus } } }))
  },
  setRiderG4Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, rider: { ...state.bonus.rider, G4: bonus } } }))
  },
  setRiderG5Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, rider: { ...state.bonus.rider, G5: bonus } } }))
  },

  setCatapultE1Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, catapult: { ...state.bonus.catapult, E1: bonus } } }))
  },
  setCatapultE2Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, catapult: { ...state.bonus.catapult, E2: bonus } } }))
  },
  setCatapultE3Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, catapult: { ...state.bonus.catapult, E3: bonus } } }))
  },
  setCatapultE4Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, catapult: { ...state.bonus.catapult, E4: bonus } } }))
  },
  setCatapultE5Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, catapult: { ...state.bonus.catapult, E5: bonus } } }))
  },

  setSwordsmanS1Bonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, swordsman: { ...state.bonus.swordsman, S1: bonus } }
    }))
  },
  setSwordsmanS2Bonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, swordsman: { ...state.bonus.swordsman, S2: bonus } }
    }))
  },
  setSwordsmanS3Bonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, swordsman: { ...state.bonus.swordsman, S3: bonus } }
    }))
  },
  setSwordsmanS4Bonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, swordsman: { ...state.bonus.swordsman, S4: bonus } }
    }))
  },
  setSwordsmanS5Bonus: (bonus: BasicStats) => {
    set(state => ({
      bonus: { ...state.bonus, swordsman: { ...state.bonus.swordsman, S5: bonus } }
    }))
  },

  setSpyS1Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, spy: { ...state.bonus.spy, S1: bonus } } }))
  },
  setSpyS2Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, spy: { ...state.bonus.spy, S2: bonus } } }))
  },
  setSpyS3Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, spy: { ...state.bonus.spy, S3: bonus } } }))
  },
  setSpyS4Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, spy: { ...state.bonus.spy, S4: bonus } } }))
  },
  setSpyS5Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, spy: { ...state.bonus.spy, S5: bonus } } }))
  },

  setWaterElementalM3Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, waterElementalM3: bonus } }))
  },
  setBattleBoarM3Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, battleBoarM3: bonus } }))
  },
  setEmeraldDragonM3Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, emeraldDragonM3: bonus } }))
  },
  setStoneGargoleM3Bonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, stoneGargoleM3: bonus } }))
  },

  setEpicMonsterHunterVIBonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, epicMonsterHunterVI: bonus } }))
  },
  setChariotVIBonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, chariotVI: bonus } }))
  },
  setLegionaryVIBonus: (bonus: BasicStats) => {
    set(state => ({ bonus: { ...state.bonus, legionaryVI: bonus } }))
  }
}))

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
