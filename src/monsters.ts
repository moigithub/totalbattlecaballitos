//doomsday nigromante strength 720, health 2160
//ancient/tinman arbalesteraAncestrengthal strength 720, health 2160, ranged

import { Citadel, objBuilder } from './citadelData'
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
      accumulatedDamage: 0
    },
    {
      id: 'e2',
      unit: entVI,
      unitsAmount: 130,
      accumulatedDamage: 0
    },
    {
      id: 'e3',
      unit: entVI,
      unitsAmount: 130,
      accumulatedDamage: 0
    },
    {
      id: 'e4',
      unit: entVI,
      unitsAmount: 130,
      accumulatedDamage: 0
    },
    {
      id: 'e5',
      unit: entVI,
      unitsAmount: 130,
      accumulatedDamage: 0
    },

    {
      id: 'ur1',
      unit: unicornRiderV,
      unitsAmount: 114,
      accumulatedDamage: 0
    },
    {
      id: 'ur2',
      unit: unicornRiderV,
      unitsAmount: 114,
      accumulatedDamage: 0
    },
    {
      id: 'ur3',
      unit: unicornRiderV,
      unitsAmount: 114,
      accumulatedDamage: 0
    },
    {
      id: 'ur4',
      unit: unicornRiderV,
      unitsAmount: 114,
      accumulatedDamage: 0
    },
    {
      id: 'ur5',
      unit: unicornRiderV,
      unitsAmount: 114,
      accumulatedDamage: 0
    },

    {
      id: 'pr1',
      unit: pegasusRiderIV,
      unitsAmount: 170,
      accumulatedDamage: 0
    },
    {
      id: 'pr2',
      unit: pegasusRiderIV,
      unitsAmount: 170,
      accumulatedDamage: 0
    },
    {
      id: 'pr3',
      unit: pegasusRiderIV,
      unitsAmount: 170,
      accumulatedDamage: 0
    },
    {
      id: 'pr4',
      unit: pegasusRiderIV,
      unitsAmount: 170,
      accumulatedDamage: 0
    },
    {
      id: 'pr5',
      unit: pegasusRiderIV,
      unitsAmount: 170,
      accumulatedDamage: 0
    },
    {
      id: 'd1',
      unit: druidII,
      unitsAmount: 1720,
      accumulatedDamage: 0
    },
    {
      id: 'd2',
      unit: druidII,
      unitsAmount: 1720,
      accumulatedDamage: 0
    },
    {
      id: 'd3',
      unit: druidII,
      unitsAmount: 1720,
      accumulatedDamage: 0
    },
    {
      id: 'd4',
      unit: druidII,
      unitsAmount: 1720,
      accumulatedDamage: 0
    },
    {
      id: 'd5',
      unit: druidII,
      unitsAmount: 1720,
      accumulatedDamage: 0
    }
  ]
}
// lvl17HeroicElfSquad.stacks.sort(
//   (a, b) => b.unit.BASESTR * b.unitsAmount - a.unit.BASESTR * a.unitsAmount
// )
console.log(
  'lvl17HeroicElfSquad.stacks',
  lvl17HeroicElfSquad.stacks.map(s => ({ ...s, sstr: s.unit.BASESTR * s.unitsAmount }))
)
