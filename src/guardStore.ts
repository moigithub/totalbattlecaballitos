import { create } from 'zustand'
import { RiderG1, RiderG2, RiderG3, RiderG4, RiderG5 } from './soldiers'

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
  setMobHealth: (value: number) => void
  setSacrifice: (stats: Partial<Stats>) => void
  setRider1: (stats: Partial<Stats>) => void
  setRider2: (stats: Partial<Stats>) => void
  setRider3: (stats: Partial<Stats>) => void
  setRider4: (stats: Partial<Stats>) => void
  setRider5: (stats: Partial<Stats>) => void
}
export type UnitType = 'riderG1' | 'riderG2' | 'riderG3' | 'riderG4' | 'riderG5'
export interface Stack {
  position?: number // whichever at first position will be used as sacrifice, increases 1 by 1, ignoring lockMinSetup
  name: string
  health: number // (base hp+bonus) *units
  strength: number // (base str+bonus) *units// calculado basado contra que esta atacando
  leadership: number
  units: number
  unitType: UnitType
  minSetup: number // used to calculate how many units are needed to kill one monster
  lockMinSetup: boolean //to know if the unit number increments one by one or by "minSetup" amount
  limit: number // max unit value
}
interface Bonus {
  str: number
  hp: number
}

interface StackStore {
  army: Stack[]
  bonus: {
    // guardsmen
    archerG1: Bonus
    archerG2: Bonus
    archerG3: Bonus
    archerG4: Bonus
    archerG5: Bonus
    spearmanG1: Bonus
    spearmanG2: Bonus
    spearmanG3: Bonus
    spearmanG4: Bonus
    spearmanG5: Bonus
    riderG1: Bonus
    riderG2: Bonus
    riderG3: Bonus
    riderG4: Bonus
    riderG5: Bonus
    // Engineer corps
    catapultE1: Bonus
    catapultE2: Bonus
    catapultE3: Bonus
    catapultE4: Bonus
    catapultE5: Bonus
    // specialist
    swordsmanS1: Bonus
    spyS1: Bonus
    swordsmanS2: Bonus
    spyS2: Bonus
    swordsmanS3: Bonus
    spyS3: Bonus
    swordsmanS4: Bonus
    spyS4: Bonus
    swordsmanS5: Bonus
    spyS5: Bonus
    // monsters
    waterElementalM3: Bonus
    battleBoarM3: Bonus
    emeraldDragonM3: Bonus
    stoneGargoleM3: Bonus
    //---- mercenaries
    epicMonsterHunterVI: Bonus
    chariotVI: Bonus
    legionaryVI: Bonus
  }
  setArmy: (data: Stack[]) => void
  addArmy: (data: Stack) => void
  removeArmy: (position: number) => void
  setStackPosition: (position: number, newPosition: number) => void
  recalculatePosition: () => void
  addUnits: (position: number) => void
  removeUnits: (position: number) => void
  fixStackUnits: (position: number, maxHealth: number) => void
  getStackStrength: (position: number, against: string) => void
  getStackHealth: (position: number) => void
  toggleLockMin: (position: number) => void

  setArcherG1Bonus: (bonus: Bonus) => void
  setArcherG2Bonus: (bonus: Bonus) => void
  setArcherG3Bonus: (bonus: Bonus) => void
  setArcherG4Bonus: (bonus: Bonus) => void
  setArcherG5Bonus: (bonus: Bonus) => void
  setSpearmanG1Bonus: (bonus: Bonus) => void
  setSpearmanG2Bonus: (bonus: Bonus) => void
  setSpearmanG3Bonus: (bonus: Bonus) => void
  setSpearmanG4Bonus: (bonus: Bonus) => void
  setSpearmanG5Bonus: (bonus: Bonus) => void
  setRiderG1Bonus: (bonus: Bonus) => void
  setRiderG2Bonus: (bonus: Bonus) => void
  setRiderG3Bonus: (bonus: Bonus) => void
  setRiderG4Bonus: (bonus: Bonus) => void
  setRiderG5Bonus: (bonus: Bonus) => void

  setCatapultE1Bonus: (bonus: Bonus) => void
  setCatapultE2Bonus: (bonus: Bonus) => void
  setCatapultE3Bonus: (bonus: Bonus) => void
  setCatapultE4Bonus: (bonus: Bonus) => void
  setCatapultE5Bonus: (bonus: Bonus) => void

  setSwordsmanS1Bonus: (bonus: Bonus) => void
  setSpyS1Bonus: (bonus: Bonus) => void
  setSwordsmanS2Bonus: (bonus: Bonus) => void
  setSpyS2Bonus: (bonus: Bonus) => void
  setSwordsmanS3Bonus: (bonus: Bonus) => void
  setSpyS3Bonus: (bonus: Bonus) => void
  setSwordsmanS4Bonus: (bonus: Bonus) => void
  setSpyS4Bonus: (bonus: Bonus) => void
  setSwordsmanS5Bonus: (bonus: Bonus) => void
  setSpyS5Bonus: (bonus: Bonus) => void

  setWaterElementalM3Bonus: (bonus: Bonus) => void
  setBattleBoarM3Bonus: (bonus: Bonus) => void
  setEmeraldDragonM3Bonus: (bonus: Bonus) => void
  setStoneGargoleM3Bonus: (bonus: Bonus) => void

  setEpicMonsterHunterVIBonus: (bonus: Bonus) => void
  setChariotVIBonus: (bonus: Bonus) => void
  setLegionaryVIBonus: (bonus: Bonus) => void
}

export const useStackStore = create<StackStore>((set, get) => ({
  army: [],
  bonus: {
    // guardsmen
    archerG1: {
      str: 0,
      hp: 0
    },
    archerG2: {
      str: 0,
      hp: 0
    },
    archerG3: {
      str: 0,
      hp: 0
    },
    archerG4: {
      str: 0,
      hp: 0
    },
    archerG5: {
      str: 0,
      hp: 0
    },
    spearmanG1: {
      str: 0,
      hp: 0
    },
    spearmanG2: {
      str: 0,
      hp: 0
    },
    spearmanG3: {
      str: 0,
      hp: 0
    },
    spearmanG4: {
      str: 0,
      hp: 0
    },
    spearmanG5: {
      str: 0,
      hp: 0
    },
    riderG1: {
      str: 0,
      hp: 0
    },
    riderG2: {
      str: 0,
      hp: 0
    },
    riderG3: {
      str: 0,
      hp: 0
    },
    riderG4: {
      str: 0,
      hp: 0
    },
    riderG5: {
      str: 0,
      hp: 0
    },
    // Engineer corps
    catapultE1: {
      str: 0,
      hp: 0
    },
    catapultE2: {
      str: 0,
      hp: 0
    },
    catapultE3: {
      str: 0,
      hp: 0
    },
    catapultE4: {
      str: 0,
      hp: 0
    },
    catapultE5: {
      str: 0,
      hp: 0
    },
    // specialist
    swordsmanS1: {
      str: 0,
      hp: 0
    },
    spyS1: {
      str: 0,
      hp: 0
    },
    swordsmanS2: {
      str: 0,
      hp: 0
    },
    spyS2: {
      str: 0,
      hp: 0
    },
    swordsmanS3: {
      str: 0,
      hp: 0
    },
    spyS3: {
      str: 0,
      hp: 0
    },
    swordsmanS4: {
      str: 0,
      hp: 0
    },
    spyS4: {
      str: 0,
      hp: 0
    },
    swordsmanS5: {
      str: 0,
      hp: 0
    },
    spyS5: {
      str: 0,
      hp: 0
    },
    // monsters
    waterElementalM3: {
      str: 0,
      hp: 0
    },
    battleBoarM3: {
      str: 0,
      hp: 0
    },
    emeraldDragonM3: {
      str: 0,
      hp: 0
    },
    stoneGargoleM3: {
      str: 0,
      hp: 0
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
  setArmy: (data: Stack[]) => {
    set(() => ({ army: data }))
  },
  addArmy: (data: Stack) => {
    set(state => ({ army: [...state.army, { ...data, position: state.army.length }] }))
  },
  removeArmy: (position: number) => {
    set(state => ({ army: state.army.filter((_, pos) => pos !== position) }))
  },
  setStackPosition: (position: number, newPosition: number) => {
    const army = get().army
    const stack1 = army[newPosition]
    army[newPosition] = army[position]
    army[position] = stack1
    set(() => ({ army }))
  },
  recalculatePosition: () => {
    set(state => ({ army: state.army.map((stack, index) => ({ ...stack, position: index })) }))
  },
  addUnits: (position: number) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.position === position) {
          let leadership = 1
          let totalHPPerUnit = 0
          if (stack.unitType === 'riderG1') {
            leadership = RiderG1.LEADERSHIP

            const bonusHP = (RiderG1.BASEHP * state.bonus.riderG1.hp) / 100
            totalHPPerUnit = RiderG1.BASEHP + bonusHP
          } else if (stack.unitType === 'riderG2') {
            leadership = RiderG2.LEADERSHIP

            const bonusHP = (RiderG2.BASEHP * state.bonus.riderG2.hp) / 100
            totalHPPerUnit = RiderG2.BASEHP + bonusHP
          } else if (stack.unitType === 'riderG3') {
            leadership = RiderG3.LEADERSHIP

            const bonusHP = (RiderG3.BASEHP * state.bonus.riderG3.hp) / 100
            totalHPPerUnit = RiderG3.BASEHP + bonusHP
          } else if (stack.unitType === 'riderG4') {
            leadership = RiderG4.LEADERSHIP

            const bonusHP = (RiderG4.BASEHP * state.bonus.riderG4.hp) / 100
            totalHPPerUnit = RiderG4.BASEHP + bonusHP
          } else if (stack.unitType === 'riderG5') {
            leadership = RiderG5.LEADERSHIP

            const bonusHP = (RiderG5.BASEHP * state.bonus.riderG5.hp) / 100
            totalHPPerUnit = RiderG5.BASEHP + bonusHP
          }

          if (stack.lockMinSetup) {
            const totalUnits = stack.units + stack.minSetup
            const stackHealth = totalHPPerUnit * totalUnits

            return {
              ...stack,
              units: totalUnits,
              leadership: totalUnits * leadership,
              health: stackHealth
            }
          } else {
            const totalUnits = stack.units + 1
            const stackHealth = totalHPPerUnit * totalUnits

            return {
              ...stack,
              units: totalUnits,
              leadership: totalUnits * leadership,
              health: stackHealth
            }
          }
        } else return stack
      })
    }))
  },
  removeUnits: (position: number) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.position === position) {
          let leadership = 1
          let totalHPPerUnit = 0
          if (stack.unitType === 'riderG1') {
            leadership = RiderG1.LEADERSHIP

            const bonusHP = (RiderG1.BASEHP * state.bonus.riderG1.hp) / 100
            totalHPPerUnit = RiderG1.BASEHP + bonusHP
          } else if (stack.unitType === 'riderG2') {
            leadership = RiderG2.LEADERSHIP

            const bonusHP = (RiderG2.BASEHP * state.bonus.riderG2.hp) / 100
            totalHPPerUnit = RiderG2.BASEHP + bonusHP
          } else if (stack.unitType === 'riderG3') {
            leadership = RiderG3.LEADERSHIP

            const bonusHP = (RiderG3.BASEHP * state.bonus.riderG3.hp) / 100
            totalHPPerUnit = RiderG3.BASEHP + bonusHP
          } else if (stack.unitType === 'riderG4') {
            leadership = RiderG4.LEADERSHIP

            const bonusHP = (RiderG4.BASEHP * state.bonus.riderG4.hp) / 100
            totalHPPerUnit = RiderG4.BASEHP + bonusHP
          } else if (stack.unitType === 'riderG5') {
            leadership = RiderG5.LEADERSHIP

            const bonusHP = (RiderG5.BASEHP * state.bonus.riderG5.hp) / 100
            totalHPPerUnit = RiderG5.BASEHP + bonusHP
          }

          if (stack.lockMinSetup) {
            if (stack.units - stack.minSetup >= 0) {
              const totalUnits = stack.units - stack.minSetup
              const stackHealth = totalHPPerUnit * totalUnits

              return {
                ...stack,
                units: totalUnits,
                leadership: totalUnits * leadership,
                health: stackHealth
              }
            } else return stack
          } else {
            if (stack.units >= 0) {
              const totalUnits = stack.units - 1
              const stackHealth = totalHPPerUnit * totalUnits

              return {
                ...stack,
                units: totalUnits,
                leadership: totalUnits * leadership,
                health: stackHealth
              }
            } else return stack
          }
        } else return stack
      })
    }))
  },
  fixStackUnits: (position: number, maxHealth: number) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.position === position) {
          // reduce the units amount, so the total stack health is lower than maxHealth
          let stackUnits = stack.units
          const unitType = stack.unitType

          if (unitType === 'riderG1') {
            const bonusHP = (RiderG1.BASEHP * state.bonus.riderG1.hp) / 100
            const totalHPPerUnit = RiderG1.BASEHP + bonusHP
            let stackHealth = totalHPPerUnit * stackUnits
            while (stackHealth >= maxHealth && stackUnits > 0) {
              stackUnits = stackUnits - 1
              stackHealth = totalHPPerUnit * stackUnits
            }
            return { ...stack, units: stackUnits, health: stackHealth }
          } else if (unitType === 'riderG2') {
            const bonusHP = (RiderG2.BASEHP * state.bonus.riderG2.hp) / 100
            const totalHPPerUnit = RiderG2.BASEHP + bonusHP
            let stackHealth = totalHPPerUnit * stackUnits
            while (stackHealth >= maxHealth && stackUnits > 0) {
              stackUnits = stackUnits - 1
              stackHealth = totalHPPerUnit * stackUnits
            }
            return { ...stack, units: stackUnits, health: stackHealth }
          } else if (unitType === 'riderG3') {
            const bonusHP = (RiderG3.BASEHP * state.bonus.riderG3.hp) / 100
            const totalHPPerUnit = RiderG3.BASEHP + bonusHP
            let stackHealth = totalHPPerUnit * stackUnits
            while (stackHealth >= maxHealth && stackUnits > 0) {
              stackUnits = stackUnits - 1
              stackHealth = totalHPPerUnit * stackUnits
            }
            return { ...stack, units: stackUnits, health: stackHealth }
          } else if (unitType === 'riderG4') {
            const bonusHP = (RiderG4.BASEHP * state.bonus.riderG4.hp) / 100
            const totalHPPerUnit = RiderG4.BASEHP + bonusHP
            let stackHealth = totalHPPerUnit * stackUnits
            while (stackHealth >= maxHealth && stackUnits > 0) {
              stackUnits = stackUnits - 1
              stackHealth = totalHPPerUnit * stackUnits
            }
            return { ...stack, units: stackUnits, health: stackHealth }
          } else if (unitType === 'riderG5') {
            const bonusHP = (RiderG5.BASEHP * state.bonus.riderG5.hp) / 100
            const totalHPPerUnit = RiderG5.BASEHP + bonusHP
            let stackHealth = totalHPPerUnit * stackUnits
            while (stackHealth >= maxHealth && stackUnits > 0) {
              stackUnits = stackUnits - 1
              stackHealth = totalHPPerUnit * stackUnits
            }
            return { ...stack, units: stackUnits, health: stackHealth }
          }

          return stack
        } else return stack
      })
    }))
  },
  getStackStrength: (position: number, against: string) => {
    const stack = get().army.find(army => army.position === position)
    const bonus = get().bonus

    if (stack) {
      const stackUnits = stack.units
      const unitType = stack.unitType

      if (unitType === 'riderG1') {
        if (against === 'ranged') {
          const bonusSTR = (RiderG1.BASESTR * (RiderG1.vsRangedPercent + bonus.riderG1.str)) / 100
          const totalSTRPerUnit = RiderG1.BASESTR + bonusSTR
          const stackStrength = totalSTRPerUnit * stackUnits
          return stackStrength
        } else if (against === 'siege') {
          const bonusSTR = (RiderG1.BASESTR * (RiderG1.vsSiegePercent + bonus.riderG1.str)) / 100
          const totalSTRPerUnit = RiderG1.BASESTR + bonusSTR
          const stackStrength = totalSTRPerUnit * stackUnits
          return stackStrength
        } else {
          const bonusSTR = (RiderG1.BASESTR * bonus.riderG1.str) / 100
          const totalSTRPerUnit = RiderG1.BASESTR + bonusSTR
          const stackStrength = totalSTRPerUnit * stackUnits
          return stackStrength
        }
      } else if (unitType === 'riderG2') {
        if (against === 'ranged') {
          const bonusSTR = (RiderG2.BASESTR * (RiderG2.vsRangedPercent + bonus.riderG2.str)) / 100
          const totalSTRPerUnit = RiderG2.BASESTR + bonusSTR
          const stackStrength = totalSTRPerUnit * stackUnits
          return stackStrength
        } else if (against === 'siege') {
          const bonusSTR = (RiderG2.BASESTR * (RiderG2.vsSiegePercent + bonus.riderG2.str)) / 100
          const totalSTRPerUnit = RiderG2.BASESTR + bonusSTR
          const stackStrength = totalSTRPerUnit * stackUnits
          return stackStrength
        } else {
          const bonusSTR = (RiderG2.BASESTR * bonus.riderG2.str) / 100
          const totalSTRPerUnit = RiderG2.BASESTR + bonusSTR
          const stackStrength = totalSTRPerUnit * stackUnits
          return stackStrength
        }
      } else if (unitType === 'riderG3') {
        if (against === 'ranged') {
          const bonusSTR = (RiderG3.BASESTR * (RiderG3.vsRangedPercent + bonus.riderG3.str)) / 100
          const totalSTRPerUnit = RiderG3.BASESTR + bonusSTR
          const stackStrength = totalSTRPerUnit * stackUnits
          return stackStrength
        } else if (against === 'siege') {
          const bonusSTR = (RiderG3.BASESTR * (RiderG3.vsSiegePercent + bonus.riderG3.str)) / 100
          const totalSTRPerUnit = RiderG3.BASESTR + bonusSTR
          const stackStrength = totalSTRPerUnit * stackUnits
          return stackStrength
        } else {
          const bonusSTR = (RiderG3.BASESTR * bonus.riderG3.str) / 100
          const totalSTRPerUnit = RiderG3.BASESTR + bonusSTR
          const stackStrength = totalSTRPerUnit * stackUnits
          return stackStrength
        }
      } else if (unitType === 'riderG4') {
        if (against === 'ranged') {
          const bonusSTR = (RiderG4.BASESTR * (RiderG4.vsRangedPercent + bonus.riderG4.str)) / 100
          const totalSTRPerUnit = RiderG4.BASESTR + bonusSTR
          const stackStrength = totalSTRPerUnit * stackUnits
          return stackStrength
        } else if (against === 'siege') {
          const bonusSTR = (RiderG4.BASESTR * (RiderG4.vsSiegePercent + bonus.riderG4.str)) / 100
          const totalSTRPerUnit = RiderG4.BASESTR + bonusSTR
          const stackStrength = totalSTRPerUnit * stackUnits
          return stackStrength
        } else {
          const bonusSTR = (RiderG4.BASESTR * bonus.riderG4.str) / 100
          const totalSTRPerUnit = RiderG4.BASESTR + bonusSTR
          const stackStrength = totalSTRPerUnit * stackUnits
          return stackStrength
        }
      } else if (unitType === 'riderG5') {
        if (against === 'ranged') {
          const bonusSTR = (RiderG5.BASESTR * (RiderG5.vsRangedPercent + bonus.riderG5.str)) / 100
          const totalSTRPerUnit = RiderG5.BASESTR + bonusSTR
          const stackStrength = totalSTRPerUnit * stackUnits
          return stackStrength
        } else if (against === 'siege') {
          const bonusSTR = (RiderG5.BASESTR * (RiderG5.vsSiegePercent + bonus.riderG5.str)) / 100
          const totalSTRPerUnit = RiderG5.BASESTR + bonusSTR
          const stackStrength = totalSTRPerUnit * stackUnits
          return stackStrength
        } else {
          const bonusSTR = (RiderG5.BASESTR * bonus.riderG5.str) / 100
          const totalSTRPerUnit = RiderG5.BASESTR + bonusSTR
          const stackStrength = totalSTRPerUnit * stackUnits
          return stackStrength
        }
      }
    }
  },
  getStackHealth: (position: number) => {
    const stack = get().army.find(army => army.position === position)
    if (stack) return stack.health
  },
  toggleLockMin: (position: number) => {
    set(state => ({
      army: state.army.map(stack => {
        if (stack.position === position) {
          return { ...stack, lockMinSetup: !stack.lockMinSetup }
        } else return stack
      })
    }))
  },

  setArcherG1Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, archerG1: bonus } }))
  },
  setArcherG2Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, archerG2: bonus } }))
  },
  setArcherG3Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, archerG3: bonus } }))
  },
  setArcherG4Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, archerG4: bonus } }))
  },
  setArcherG5Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, archerG5: bonus } }))
  },
  setSpearmanG1Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, spearmanG1: bonus } }))
  },
  setSpearmanG2Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, spearmanG2: bonus } }))
  },
  setSpearmanG3Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, spearmanG3: bonus } }))
  },
  setSpearmanG4Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, spearmanG4: bonus } }))
  },
  setSpearmanG5Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, spearmanG5: bonus } }))
  },
  setRiderG1Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, riderG1: bonus } }))
  },
  setRiderG2Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, riderG2: bonus } }))
  },
  setRiderG3Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, riderG3: bonus } }))
  },
  setRiderG4Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, riderG4: bonus } }))
  },
  setRiderG5Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, riderG5: bonus } }))
  },

  setCatapultE1Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, catapultE1: bonus } }))
  },
  setCatapultE2Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, catapultE2: bonus } }))
  },
  setCatapultE3Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, catapultE3: bonus } }))
  },
  setCatapultE4Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, catapultE4: bonus } }))
  },
  setCatapultE5Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, catapultE5: bonus } }))
  },

  setSwordsmanS1Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, swordsmanS1: bonus } }))
  },
  setSwordsmanS2Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, swordsmanS12: bonus } }))
  },
  setSwordsmanS3Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, swordsmanS3: bonus } }))
  },
  setSwordsmanS4Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, swordsmanS4: bonus } }))
  },
  setSwordsmanS5Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, swordsmanS5: bonus } }))
  },

  setSpyS1Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, spyS1: bonus } }))
  },
  setSpyS2Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, spyS2: bonus } }))
  },
  setSpyS3Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, spyS3: bonus } }))
  },
  setSpyS4Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, spyS4: bonus } }))
  },
  setSpyS5Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, spyS5: bonus } }))
  },

  setWaterElementalM3Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, waterElementalM3: bonus } }))
  },
  setBattleBoarM3Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, battleBoarM3: bonus } }))
  },
  setEmeraldDragonM3Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, emeraldDragonM3: bonus } }))
  },
  setStoneGargoleM3Bonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, stoneGargoleM3: bonus } }))
  },

  setEpicMonsterHunterVIBonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, epicMonsterHunterVI: bonus } }))
  },
  setChariotVIBonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, chariotVI: bonus } }))
  },
  setLegionaryVIBonus: (bonus: Bonus) => {
    set(state => ({ bonus: { ...state.bonus, legionaryVI: bonus } }))
  }
}))

export const useGuardsStore = create<GuardsStore>(set => ({
  bonusHP: 0,
  bonusSTR: 0,
  sacrificeBonusHP: 0,
  sacrificeBonusSTR: 0,
  leadership: 1000,
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
