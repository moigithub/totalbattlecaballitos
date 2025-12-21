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
export const vp_B = 1_000_000_000
export const vp_M = 1_000_000
export const vp_K = 1_000

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

export const mobCommonBarbarianSquad4: Citadel = {
  id: 'CommonBarbarianSquad4',
  vp: 440,
  svp: '440',
  stacks: [stackBuilder('0', objectDB.goblin, 330)]
}

objectDB.wolfRiderI = objBuilder({
  name: 'WolfRiderI',
  category: 'mounted',
  BASESTR: 150,
  BASEHP: 450,
  vsRangedPercent: 60,
  vsSiegePercent: 40
})

export const mobCommonBarbarianSquad9: Citadel = {
  id: 'CommonBarbarianSquad9',
  vp: 5 * vp_K,
  svp: '5 K',
  stacks: [stackBuilder('0', objectDB.wolfRiderI, 510)]
}
export const mobCommonBarbarianSquad12: Citadel = {
  id: 'CommonBarbarianSquad12',
  vp: 21.1 * vp_K,
  svp: '21.1 K',
  stacks: [stackBuilder('0', objectDB.wolfRiderI, 1200), stackBuilder('1', objectDB.goblin, 2800)]
}

objectDB.axeThrowerII = objBuilder({
  name: 'axeThrowerII',
  category: 'ranged',
  BASESTR: 360,
  BASEHP: 1080,
  vsMeleePercent: 45,
  vsFlyingPercent: 50
})
export const mobCommonBarbarianSquad15: Citadel = {
  id: 'CommonBarbarianSquad15',
  vp: 69 * vp_K,
  svp: '69 K',
  stacks: [stackBuilder('0', objectDB.axeThrowerII, 1400), stackBuilder('1', objectDB.goblin, 7700)]
}
export const mobCommonBarbarianSquad17: Citadel = {
  id: 'CommonBarbarianSquad17',
  vp: 147 * vp_K,
  svp: '147 K',
  stacks: [
    stackBuilder('0', objectDB.axeThrowerII, 2700),
    stackBuilder('1', objectDB.wolfRiderI, 2700)
  ]
}
export const mobCommonBarbarianSquad18: Citadel = {
  id: 'CommonBarbarianSquad18',
  vp: 279 * vp_K,
  svp: '279 K',
  stacks: [
    stackBuilder('0', objectDB.axeThrowerII, 4600),
    stackBuilder('1', objectDB.goblin, 26000)
  ]
}
export const mobCommonBarbarianSquad20: Citadel = {
  id: 'CommonBarbarianSquad20',
  vp: 532 * vp_K,
  svp: '532 K',
  stacks: [
    stackBuilder('0', objectDB.axeThrowerII, 8100),
    stackBuilder('1', objectDB.goblin, 45000)
  ]
}
export const mobCommonBarbarianSquad21: Citadel = {
  id: 'CommonBarbarianSquad21',
  vp: 910 * vp_K,
  svp: '910 K',
  stacks: [
    stackBuilder('0', objectDB.axeThrowerII, 13000),
    stackBuilder('1', objectDB.wolfRiderI, 13000)
  ]
}
export const mobCommonBarbarianSquad22: Citadel = {
  id: 'CommonBarbarianSquad22',
  vp: 1.52 * vp_M,
  svp: '1.52 M',
  stacks: [
    stackBuilder('0', objectDB.axeThrowerII, 21000),
    stackBuilder('1', objectDB.goblin, 110000)
  ]
}
export const mobCommonBarbarianSquad23: Citadel = {
  id: 'CommonBarbarianSquad23',
  vp: 2.53 * vp_M,
  svp: '2.53 M',
  stacks: [
    stackBuilder('0', objectDB.axeThrowerII, 33000),
    stackBuilder('1', objectDB.wolfRiderI, 34000)
  ]
}
export const mobCommonBarbarianSquad24: Citadel = {
  id: 'CommonBarbarianSquad24',
  vp: 4.23 * vp_M,
  svp: '4.23 M',
  stacks: [
    stackBuilder('0', objectDB.ogreShamanIII, 5800),
    stackBuilder('1', objectDB.goblin, 290000)
  ]
}
export const mobCommonBarbarianSquad25: Citadel = {
  id: 'CommonBarbarianSquad25',
  vp: 7 * vp_M,
  svp: '7 M',
  stacks: [
    stackBuilder('0', objectDB.ogreShamanIII, 9200),
    stackBuilder('1', objectDB.axeThrowerII, 35000)
  ]
}
export const mobCommonBarbarianSquad26: Citadel = {
  id: 'CommonBarbarianSquad26',
  vp: 11.1 * vp_M,
  svp: '11.1 M',
  stacks: [
    stackBuilder('0', objectDB.ogreShamanIII, 14000),
    stackBuilder('1', objectDB.axeThrowerII, 53000)
  ]
}
export const mobCommonBarbarianSquad27: Citadel = {
  id: 'CommonBarbarianSquad27',
  vp: 17.4 * vp_M,
  svp: '17.4 M',
  stacks: [
    stackBuilder('0', objectDB.ogreShamanIII, 20_000),
    stackBuilder('1', objectDB.goblin, 1_000_000)
  ]
}
export const mobCommonBarbarianSquad28: Citadel = {
  id: 'CommonBarbarianSquad28',
  vp: 27 * vp_M,
  svp: '27 M',
  stacks: [
    stackBuilder('0', objectDB.ogreShamanIII, 30_000),
    stackBuilder('1', objectDB.goblin, 1_500_000)
  ]
}
export const mobCommonBarbarianSquad29: Citadel = {
  id: 'CommonBarbarianSquad29',
  vp: 42.2 * vp_M,
  svp: '42.2 M',
  stacks: [
    stackBuilder('0', objectDB.ogreShamanIII, 45_000),
    stackBuilder('1', objectDB.axeThrowerII, 170_000)
  ]
}
export const mobCommonBarbarianSquad30: Citadel = {
  id: 'CommonBarbarianSquad30',
  vp: 66 * vp_M,
  svp: '66 M',
  stacks: [
    stackBuilder('0', objectDB.ogreShamanIII, 66_000),
    stackBuilder('1', objectDB.axeThrowerII, 250_000)
  ]
}
export const mobCommonBarbarianSquad31: Citadel = {
  id: 'CommonBarbarianSquad31',
  vp: 93.5 * vp_M,
  svp: '93.5 M',
  stacks: [
    stackBuilder('0', objectDB.ogreShamanIII, 89_000),
    stackBuilder('1', objectDB.wolfRiderI, 820_000)
  ]
}
export const mobCommonBarbarianSquad32: Citadel = {
  id: 'CommonBarbarianSquad32',
  vp: 130 * vp_M,
  svp: '130 M',
  stacks: [
    stackBuilder('0', objectDB.ogreShamanIII, 120_000),
    stackBuilder('1', objectDB.axeThrowerII, 450_000)
  ]
}
export const mobCommonBarbarianSquad33: Citadel = {
  id: 'CommonBarbarianSquad33',
  vp: 181 * vp_M,
  svp: '181 M',
  stacks: [
    stackBuilder('0', objectDB.ogreShamanIII, 160_000),
    stackBuilder('1', objectDB.goblin, 7_600_000)
  ]
}
export const mobCommonBarbarianSquad34: Citadel = {
  id: 'CommonBarbarianSquad34',
  vp: 251 * vp_M,
  svp: '251 M',
  stacks: [
    stackBuilder('0', objectDB.ogreShamanIII, 210_000),
    stackBuilder('1', objectDB.axeThrowerII, 780_000)
  ]
}
export const mobCommonBarbarianSquad35: Citadel = {
  id: 'CommonBarbarianSquad35',
  vp: 350 * vp_M,
  svp: '350 M',
  stacks: [
    stackBuilder('0', objectDB.ogreShamanIII, 270_000),
    stackBuilder('1', objectDB.axeThrowerII, 1_000_000)
  ]
}
objectDB.scorpidII = objBuilder({
  name: 'scorpidII',
  category: 'melee',
  BASESTR: 500_000,
  BASEHP: 1_490_000,
  vsMountedPercent: 65
})
objectDB.lizardRiderI = objBuilder({
  name: 'lizardRiderI',
  category: 'mounted',
  BASESTR: 90_000,
  BASEHP: 280_000,
  vsRangedPercent: 80
})
export const mobCommonBarbarianSquad36: Citadel = {
  id: 'CommonBarbarianSquad36',
  vp: 538 * vp_M,
  svp: '538 M',
  stacks: [
    stackBuilder('0', objectDB.scorpidII, 1_100),
    stackBuilder('1', objectDB.lizardRiderI, 13_900)
  ]
}

objectDB.HorrorEyeI = objBuilder({
  name: 'HorrorEyeI',
  category: 'flying',
  BASESTR: 180_000,
  BASEHP: 550_000,
  vsMeleePercent: 75
})
export const mobCommonBarbarianSquad38: Citadel = {
  id: 'CommonBarbarianSquad38',
  vp: 845 * vp_M,
  svp: '845 M',
  stacks: [
    stackBuilder('0', objectDB.HorrorEyeI, 10_300),
    stackBuilder('1', objectDB.lizardRiderI, 8_820)
  ]
}

objectDB.GnollGunnerII = objBuilder({
  name: 'GnollGunnerII',
  category: 'ranged',
  BASESTR: 660_000,
  BASEHP: 1_980_000,
  vsFlyingPercent: 75
})
export const mobCommonBarbarianSquad39: Citadel = {
  id: 'CommonBarbarianSquad39',
  vp: 1.33 * vp_B,
  svp: '1.33 B',
  stacks: [
    stackBuilder('0', objectDB.GnollGunnerII, 1_820),
    stackBuilder('1', objectDB.lizardRiderI, 30_600)
  ]
}

export const mobCommonBarbarianSquad40: Citadel = {
  id: 'CommonBarbarianSquad40',
  vp: 2.09 * vp_B,
  svp: '2.09 B',
  stacks: [
    stackBuilder('0', objectDB.scorpidII, 3_580),
    stackBuilder('1', objectDB.HorrorEyeI, 22_500)
  ]
}
export const mobCommonBarbarianSquad41: Citadel = {
  id: 'CommonBarbarianSquad41',
  vp: 3.28 * vp_B,
  svp: '3.28 B',
  stacks: [
    stackBuilder('0', objectDB.scorpidII, 5_400),
    stackBuilder('1', objectDB.lizardRiderI, 68_000)
  ]
}

export const mobCommonBarbarianSquad43: Citadel = {
  id: 'CommonBarbarianSquad43',
  vp: 4.77 * vp_B,
  svp: '4.77 B',
  stacks: [
    stackBuilder('0', objectDB.GnollGunnerII, 5_580),
    stackBuilder('1', objectDB.HorrorEyeI, 46_900)
  ]
}
export const mobCommonBarbarianSquad44: Citadel = {
  id: 'CommonBarbarianSquad44',
  vp: 6.81 * vp_B,
  svp: '6.81 B',
  stacks: [
    stackBuilder('0', objectDB.lizardRiderI, 119_000),
    stackBuilder('1', objectDB.HorrorEyeI, 25_500)
  ]
}
export const mobCommonBarbarianSquad45: Citadel = {
  id: 'CommonBarbarianSquad45',
  vp: 9.73 * vp_B,
  svp: '9.73 B',
  stacks: [
    stackBuilder('0', objectDB.HorrorEyeI, 85_900),
    stackBuilder('1', objectDB.lizardRiderI, 73_600)
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

objectDB.darkElfIII = objBuilder({
  //epic monster, fenrir squad, flying unit
  name: 'darkElfIII',
  category: 'flying',
  BASESTR: 70000,
  BASEHP: 210000,
  vsMeleePercent: 80
})

objectDB.fenrirVI = objBuilder({
  //epic monster, fenrir squad, melee unit
  name: 'fenrirVI',
  category: 'melee',
  BASESTR: 100000,
  BASEHP: 300000,
  vsMountedPercent: 45
})

objectDB.valkyrieVI = objBuilder({
  //epic monster, fenrir squad, mounted unit
  name: 'valkyrieVI',
  category: 'mounted',
  BASESTR: 57000,
  BASEHP: 171000,
  vsRangedPercent: 60
})

objectDB.draugMageIII = objBuilder({
  //epic monster, fenrir squad, ranged unit
  name: 'draugMageIII',
  category: 'ranged',
  BASESTR: 720,
  BASEHP: 2160,
  vsFlyingPercent: 50
})

export const jormungandrFenrir: Citadel = {
  stacks: [
    stackBuilder('0', objectDB.darkElfIII, 3_375_000),
    stackBuilder('1', objectDB.fenrirVI, 3_666_665),
    stackBuilder('2', objectDB.valkyrieVI, 2_985_710),
    stackBuilder('3', objectDB.draugMageIII, 289_583_328)
  ]
}

objectDB.runic = objBuilder({
  //epic monster, fenrir squad, ranged unit
  name: 'runic',
  category: 'scout',
  BASESTR: 400,
  BASEHP: 1200
})

export const assaultRunics24: Citadel = {
  stacks: [
    stackBuilder('0', objectDB.runic, 32525),
    stackBuilder('1', objectDB.runic, 32524),
    stackBuilder('2', objectDB.runic, 32523),
    stackBuilder('3', objectDB.runic, 32522),
    stackBuilder('4', objectDB.runic, 32521),
    stackBuilder('5', objectDB.runic, 32520),
    stackBuilder('6', objectDB.runic, 32519),
    stackBuilder('7', objectDB.runic, 32518),
    stackBuilder('8', objectDB.runic, 32517)
  ]
}

export const assaultRunics21: Citadel = {
  stacks: [
    stackBuilder('0', objectDB.runic, 9986),
    stackBuilder('1', objectDB.runic, 9985),
    stackBuilder('2', objectDB.runic, 9984),
    stackBuilder('3', objectDB.runic, 9983),
    stackBuilder('4', objectDB.runic, 9982),
    stackBuilder('5', objectDB.runic, 9981),
    stackBuilder('6', objectDB.runic, 9980),
    stackBuilder('7', objectDB.runic, 9979),
    stackBuilder('7', objectDB.runic, 9978)
  ]
}

export const assaultRunics20: Citadel = {
  stacks: [
    stackBuilder('0', objectDB.runic, 6628),
    stackBuilder('1', objectDB.runic, 6627),
    stackBuilder('2', objectDB.runic, 6626),
    stackBuilder('3', objectDB.runic, 6625),
    stackBuilder('4', objectDB.runic, 6624),
    stackBuilder('5', objectDB.runic, 6623),
    stackBuilder('6', objectDB.runic, 6622),
    stackBuilder('7', objectDB.runic, 6621),
    stackBuilder('7', objectDB.runic, 6620)
  ]
}

//doomsday
objectDB.demonIII = objBuilder({
  //epic monster, flying unit
  name: 'demonIII',
  category: 'flying',
  BASESTR: 100000,
  BASEHP: 300000,
  vsMeleePercent: 80
})

objectDB.necromancerII = objBuilder({
  //epic monster, ranged unit
  name: 'necromancerII',
  category: 'ranged',
  BASESTR: 720,
  BASEHP: 2160,
  vsFlyingPercent: 50
})

export const doomsDay: Citadel = {
  stacks: [
    stackBuilder('0', objectDB.demonIII, 3_375_000),
    stackBuilder('1', objectDB.deathChariotVI, 3_666_665),
    stackBuilder('2', objectDB.boneGolemVI, 2_985_710),
    stackBuilder('3', objectDB.necromancerII, 289_583_328)
  ]
}
