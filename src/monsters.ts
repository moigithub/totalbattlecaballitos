//doomsday nigromante strength 720, health 2160
//ancient/tinman arbalesteraAncestrengthal strength 720, health 2160, ranged

import { Category, MonsterType } from './guardStore'

export interface Monster {
  name: string
  BASEHP: number
  BASESTR: number
  LEADERSHIP: number
  INITIATIVE: number
  vsRangedPercent: number
  vsSiegePercent: number
  vsBeastPercent: number
  vsHumanPercent: number
  vsMountedPercent: number
  vsFlyingPercent: number
  vsMeleePercent: number
  vsFortificationsPercent: number
  unitType: MonsterType
  category: Category
  level: string
}

export const ragnarokMagoDraug: Monster = {
  // 50 epic jormungandr squad
  name: 'DraugMage',
  BASEHP: 2160,
  BASESTR: 720,
  LEADERSHIP: 8,
  INITIATIVE: 10,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 50,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  unitType: 'demon',
  category: 'ranged',
  level: 'II'
}

export const doomsdayOverseer: Monster = {
  // 50 epic inferno squad
  name: 'overseer',
  BASEHP: 19500,
  BASESTR: 6500,
  LEADERSHIP: 40,
  INITIATIVE: 10,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 70,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  unitType: 'demon',
  category: 'ranged',
  level: 'III'
}

export const doomsdayIfrit: Monster = {
  // 50 epic inferno squad
  name: 'ifrit',
  BASEHP: 132000,
  BASESTR: 44000,
  LEADERSHIP: 83,
  INITIATIVE: 10,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 0,
  vsMeleePercent: 70,
  vsFortificationsPercent: 0,
  unitType: 'demon',
  category: 'flying',
  // subtype: 'demon',
  level: 'III'
}

export const doomsdayFireswordRider: Monster = {
  // 50 epic inferno squad
  name: 'FireswordRider',
  BASEHP: 150000,
  BASESTR: 50000,
  LEADERSHIP: 96,
  INITIATIVE: 10,
  vsRangedPercent: 55,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 0,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  unitType: 'demon',
  category: 'mounted',
  level: 'V'
}

export const doomsdayHellBlacksmith: Monster = {
  // 50 epic inferno squad
  name: 'HellBlacksmith',
  BASEHP: 300000,
  BASESTR: 100000,
  LEADERSHIP: 10,
  INITIATIVE: 10,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 75,
  vsFlyingPercent: 0,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  unitType: 'demon',
  category: 'melee',
  level: 'III'
}

export const doomsdayNecromancer: Monster = {
  name: 'necromancer',
  BASEHP: 2160,
  BASESTR: 720,
  LEADERSHIP: 8,
  INITIATIVE: 10,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 50,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  unitType: 'elemental',
  category: 'ranged',
  level: 'II'
}
export const jacksReturnScarecrow: Monster = {
  // 50 epic pumpkin squad
  name: 'scarecrow',
  BASEHP: 33000,
  BASESTR: 11000,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 50,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  unitType: 'elemental',
  category: 'ranged',
  level: 'II'
}

export const arachneMercilessArachne: Monster = {
  // 50 epic squad arachne swarm
  name: 'mercilesArachne',
  BASEHP: 150000,
  BASESTR: 50000,
  LEADERSHIP: 5,
  INITIATIVE: 10,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 50,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  unitType: 'elemental',
  category: 'ranged',
  level: 'III'
}

export const jormungandr = {
  name: '50:ragnark-jormungandr',
  monsters: [
    {
      strength: 3200,
      health: 9600,
      name: 'ogro chaman',
      units: 4,
      bonusVsMounted: 60,
      type: 'melee'
    }
  ]
}
