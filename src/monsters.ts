//doomsday nigromante strength 720, health 2160
//ancient/tinman arbalesteraAncestrengthal strength 720, health 2160, ranged

import { Citadel, objBuilder, objectDB, stackBuilder } from './citadelData'
// import { Category } from './types'

// export type MonsterType = 'jormungandr' | 'swarm' | 'ancient' | 'guardsman' | 'demon' | 'monster'
// export type MonsterGroup = 'epic' | 'citadel'
// export type TIPO = 'monster' | 'merc' | 'army'
// export type MonsterRace = 'beast' | 'giant' | 'elemental' | 'dragon'

//  export interface EnemyUnit {
//   tipo: TIPO
//   name: string
//   BASEHP: number
//   BASESTR: number
//   DOMINANCE: number
//   LEADERSHIP: number
//   AUTHORITY: number
//   INITIATIVE: number
//   vsRangedPercent: number
//   vsSiegePercent: number
//   vsBeastPercent: number
//   vsHumanPercent: number
//   vsMountedPercent: number
//   vsFlyingPercent: number
//   vsMeleePercent: number
//   vsFortificationsPercent: number
//   vsGiantPercent: number
//   vsElementalPercent: number
//   vsDragonPercent: number
//   vsEpicPercent: number
//   troop: MonsterType
//   race: MonsterRace
//   group: MonsterGroup //| 'epic'
//   category: Category
//   level: string
// }

const pegasusRiderIV = objBuilder({
  name: 'Pegaso Rider IV',
  category: 'flying',
  BASESTR: 8200,
  BASEHP: 24600,
  vsMeleePercent: 60,
  vsDragonPercent: 50
})
const unicornRiderV = objBuilder({
  name: 'Unicorn Rider V',
  category: 'mounted',
  BASESTR: 27000,
  BASEHP: 81000,
  vsRangedPercent: 65
})

const druidII = objBuilder({
  name: 'druidII',
  category: 'ranged',
  BASESTR: 900,
  BASEHP: 2700,
  vsMeleePercent: 25
})
const entVI = objBuilder({
  name: 'entVI',
  category: 'melee',
  BASESTR: 73000,
  BASEHP: 219000,
  vsRangedPercent: 55,
  vsDragonPercent: 45
})

// lvl 17 heroic elf squad

export const lvl17HeroicElfSquad: Citadel = {
  // walls: { hp: 77500 * 30_000 },
  stacks: [
    {
      id: 'e1',
      unit: entVI,
      unitsAmount: 130,
      originalUnitsAmount: 130,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: 'e2',
      unit: entVI,
      unitsAmount: 130,
      originalUnitsAmount: 130,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: 'e3',
      unit: entVI,
      unitsAmount: 130,
      originalUnitsAmount: 130,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: 'e4',
      unit: entVI,
      unitsAmount: 130,
      originalUnitsAmount: 130,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: 'e5',
      unit: entVI,
      unitsAmount: 130,
      originalUnitsAmount: 130,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },

    {
      id: 'ur1',
      unit: unicornRiderV,
      unitsAmount: 114,
      originalUnitsAmount: 114,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: 'ur2',
      unit: unicornRiderV,
      unitsAmount: 114,
      originalUnitsAmount: 114,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: 'ur3',
      unit: unicornRiderV,
      unitsAmount: 114,
      originalUnitsAmount: 114,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: 'ur4',
      unit: unicornRiderV,
      unitsAmount: 114,
      originalUnitsAmount: 114,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: 'ur5',
      unit: unicornRiderV,
      unitsAmount: 114,
      originalUnitsAmount: 114,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },

    {
      id: 'pr1',
      unit: pegasusRiderIV,
      unitsAmount: 170,
      originalUnitsAmount: 170,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: 'pr2',
      unit: pegasusRiderIV,
      unitsAmount: 170,
      originalUnitsAmount: 170,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: 'pr3',
      unit: pegasusRiderIV,
      unitsAmount: 170,
      originalUnitsAmount: 170,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: 'pr4',
      unit: pegasusRiderIV,
      unitsAmount: 170,
      originalUnitsAmount: 170,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: 'pr5',
      unit: pegasusRiderIV,
      unitsAmount: 170,
      originalUnitsAmount: 170,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: 'd1',
      unit: druidII,
      unitsAmount: 1720,
      originalUnitsAmount: 1720,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: 'd2',
      unit: druidII,
      unitsAmount: 1720,
      originalUnitsAmount: 1720,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: 'd3',
      unit: druidII,
      unitsAmount: 1720,
      originalUnitsAmount: 1720,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: 'd4',
      unit: druidII,
      unitsAmount: 1720,
      originalUnitsAmount: 1720,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: 'd5',
      unit: druidII,
      unitsAmount: 1720,
      originalUnitsAmount: 1720,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    }
  ]
}
// lvl17HeroicElfSquad.stacks.sort(
//   (a, b) => b.unit.BASESTR * b.unitsAmount - a.unit.BASESTR * a.unitsAmount
// )
// console.log(
//   'lvl17HeroicElfSquad.stacks',
//   lvl17HeroicElfSquad.stacks.map(s => ({ ...s, sstr: s.unit.BASESTR * s.unitsAmount }))
// )

objectDB.fireHorseRider = objBuilder({
  name: 'FireHorseRiderIII',
  category: 'mounted',
  BASESTR: 4100,
  BASEHP: 12300,
  vsRangedPercent: 50
})
objectDB.overseer = objBuilder({
  name: 'OverseerIII',
  category: 'ranged',
  BASESTR: 6500,
  BASEHP: 19500,
  vsMeleePercent: 70
})

objectDB.ogreShamanIII = objBuilder({
  name: 'ogreShamanIII',
  category: 'ranged',
  BASESTR: 3200,
  BASEHP: 9600,
  vsMountedPercent: 60
})

objectDB.goblin = objBuilder({
  name: 'goblin',
  category: 'melee',
  BASESTR: 28,
  BASEHP: 84,
  vsMountedPercent: 10
})

export const mobCommonInfernoSquad31: Citadel = {
  stacks: [
    stackBuilder('0', objectDB.fireHorseRider, 53000),
    stackBuilder('1', objectDB.overseer, 33000)
  ]
}

export const mobCommonCursedSquad29: Citadel = {
  stacks: [
    stackBuilder('0', objectDB.deathRiderIII, 41000),
    stackBuilder('1', objectDB.wereWolfII, 160000)
  ]
}

export const mobCommonBarbarianSquad28: Citadel = {
  stacks: [
    stackBuilder('0', objectDB.ogreShamanIII, 30_000),
    stackBuilder('1', objectDB.goblin, 1_500_000)
  ]
}

// olympus
// quimera

objectDB.harpyIII = objBuilder({
  name: 'harpyIII',
  category: 'flying',
  BASESTR: 70000,
  BASEHP: 210000,
  vsMeleePercent: 80
})
objectDB.chimeraVI = objBuilder({
  name: 'chimeraVI',
  category: 'melee',
  BASESTR: 100000,
  BASEHP: 300000,
  vsMountedPercent: 45
})
objectDB.centaurVI = objBuilder({
  name: 'centaurVI',
  category: 'mounted',
  BASESTR: 57000,
  BASEHP: 171000,
  vsRangedPercent: 60
})
objectDB.satyrII = objBuilder({
  name: 'satyrII',
  category: 'ranged',
  BASESTR: 720,
  BASEHP: 2160,
  vsFlyingPercent: 50
})

export const olympusChimera: Citadel = {
  stacks: [
    stackBuilder('0', objectDB.harpyIII, 2_531_250),
    stackBuilder('1', objectDB.harpyIII, 2_531_250),
    stackBuilder('2', objectDB.harpyIII, 2_531_250),
    stackBuilder('3', objectDB.harpyIII, 2_531_250),

    stackBuilder('4', objectDB.centaurVI, 2_749_999),
    stackBuilder('5', objectDB.centaurVI, 2_749_999),
    stackBuilder('6', objectDB.centaurVI, 2_749_999),
    stackBuilder('7', objectDB.centaurVI, 2_749_999),

    stackBuilder('8', objectDB.chimeraVI, 2_239_283),
    stackBuilder('9', objectDB.chimeraVI, 2_239_283),
    stackBuilder('10', objectDB.chimeraVI, 2_239_283),
    stackBuilder('11', objectDB.chimeraVI, 2_239_283),

    stackBuilder('12', objectDB.satyrII, 217_187_504),
    stackBuilder('13', objectDB.satyrII, 217_187_504),
    stackBuilder('14', objectDB.satyrII, 217_187_504),
    stackBuilder('15', objectDB.satyrII, 217_187_504)
  ]
}

objectDB.basiliskIII = objBuilder({
  name: 'basiliskIII',
  category: 'melee',
  BASESTR: 100000,
  BASEHP: 300000,
  vsMountedPercent: 75
})

objectDB.harpyV = objBuilder({
  name: 'harpyV',
  category: 'flying',
  BASESTR: 44000,
  BASEHP: 132000,
  vsMeleePercent: 70
})

objectDB.centaurV = objBuilder({
  name: 'centaurV',
  category: 'mounted',
  BASESTR: 50000,
  BASEHP: 150000,
  vsRangedPercent: 55
})

objectDB.satyrIII = objBuilder({
  name: 'satyrIII',
  category: 'ranged',
  BASESTR: 6500,
  BASEHP: 19500,
  vsFlyingPercent: 70
})

export const olympusBasilisk: Citadel = {
  stacks: [
    stackBuilder('0', objectDB.basiliskIII, 2_430_000),
    stackBuilder('1', objectDB.harpyV, 5_500_000),
    stackBuilder('2', objectDB.centaurV, 4_820_000),
    stackBuilder('3', objectDB.satyrIII, 37_075_000)
  ]
}
