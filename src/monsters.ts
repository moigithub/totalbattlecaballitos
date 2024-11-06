//doomsday nigromante strength 720, health 2160
//ancient/tinman arbalesteraAncestrengthal strength 720, health 2160, ranged

import { Category, MercUnit, Unit } from './types'

export type MonsterType = 'jormungandr' | 'swarm' | 'ancient' | 'guardsman' | 'demon' | 'monster'
export type MonsterGroup = 'epic'
export type TIPO = 'monster' | 'merc' | 'army'

export interface EnemyUnit {
  tipo: TIPO
  name: string
  BASEHP: number
  BASESTR: number
  DOMINANCE: number
  LEADERSHIP: number
  AUTHORITY: number
  INITIATIVE: number
  vsRangedPercent: number
  vsSiegePercent: number
  vsBeastPercent: number
  vsHumanPercent: number
  vsMountedPercent: number
  vsFlyingPercent: number
  vsMeleePercent: number
  vsGiants: number
  vsFortificationsPercent: number
  vsEpicMonster: number
  troop: MonsterType
  category: Category
  group: MonsterGroup //| 'epic'
  level: string
}

export interface MobStack {
  id: string // whichever at first position will be used as sacrifice, increases 1 by 1, ignoring lockMinSetup
  leadership: number
  unit: EnemyUnit
  units: number
}
//-------------------------------------------------
export const draugMage: EnemyUnit = {
  // 50 epic jormungandr squad/ragnarok
  tipo: 'monster',
  name: 'DraugMage',
  BASEHP: 2160,
  BASESTR: 720,
  LEADERSHIP: 8,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 50,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'jormungandr',
  category: 'ranged',
  group: 'epic',
  level: 'II'
}
const jormungandr: EnemyUnit = {
  // 50 epic jormungandr squad/ragnarok
  tipo: 'monster',
  name: 'jormungandr',
  BASEHP: 300000,
  BASESTR: 100000,
  LEADERSHIP: 74,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 45,
  vsFlyingPercent: 0,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'jormungandr',
  category: 'melee',
  group: 'epic',
  level: 'VI'
}
const valkyrie: EnemyUnit = {
  // 50 epic jormungandr squad/ragnarok
  tipo: 'monster',
  name: 'valkyrie',
  BASEHP: 171000,
  BASESTR: 57000,
  LEADERSHIP: 60,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 60,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 0,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'jormungandr',
  category: 'mounted',
  group: 'epic',
  level: 'VI'
}
export const darkElf: EnemyUnit = {
  // 50 epic jormungandr squad/ragnarok
  tipo: 'monster',
  name: 'darkElf',
  BASEHP: 210000,
  BASESTR: 70000,
  LEADERSHIP: 10,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 0,
  vsMeleePercent: 80,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'jormungandr',
  category: 'flying',
  group: 'epic',
  level: 'III'
}
const draugMageStack: MobStack = {
  id: 'draugMageStack1',
  unit: draugMage,
  units: 216161657,
  leadership: 216161657 * draugMage.LEADERSHIP
}
const jormungandrStack: MobStack = {
  id: 'jormungandrStack1',
  unit: jormungandr,
  units: 2238740,
  leadership: 2238740 * jormungandr.LEADERSHIP
}
const valkyrieStack: MobStack = {
  id: 'valkyrieStack1',
  unit: valkyrie,
  units: 2733905,
  leadership: 2733905 * valkyrie.LEADERSHIP
}
const darkElfStack: MobStack = {
  id: 'darkElfStack1',
  unit: darkElf,
  units: 2525002,
  leadership: 2525002 * darkElf.LEADERSHIP
}
export const ragnarokArmy = [
  draugMageStack, // x4
  jormungandrStack, // x4
  valkyrieStack, // x4
  darkElfStack // x4
]

//-------------------

export const overseer: EnemyUnit = {
  // 50 epic inferno squad
  tipo: 'monster',
  name: 'overseer',
  BASEHP: 19500,
  BASESTR: 6500,
  LEADERSHIP: 40,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 70,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'demon', //ranged unit, demon, epic monster
  category: 'ranged',
  group: 'epic',
  level: 'III'
}
const ifrit: EnemyUnit = {
  // 50 epic inferno squad
  tipo: 'monster',
  name: 'ifrit',
  BASEHP: 132000,
  BASESTR: 44000,
  LEADERSHIP: 83,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 0,
  vsMeleePercent: 70,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'demon',
  category: 'flying',
  group: 'epic',
  level: 'V'
}

const fireswordRider: EnemyUnit = {
  // 50 epic inferno squad
  tipo: 'monster',
  name: 'FireswordRider',
  BASEHP: 150000,
  BASESTR: 50000,
  LEADERSHIP: 96,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 55,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 0,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'demon',
  category: 'mounted',
  group: 'epic',
  level: 'V'
}

const fireHidra: EnemyUnit = {
  // 50 epic inferno squad
  tipo: 'monster',
  name: 'fireHidra',
  BASEHP: 300000,
  BASESTR: 100000,
  LEADERSHIP: 10,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 75,
  vsFlyingPercent: 0,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'demon',
  category: 'mounted',
  group: 'epic',
  level: 'V'
}
const overseerStack: MobStack = {
  id: 'overseerStack1',
  unit: overseer,
  units: 33651592,
  leadership: 33651592 * overseer.LEADERSHIP
}
const ifritStack: MobStack = {
  id: 'ifritStack1',
  unit: ifrit,
  units: 4165631,
  leadership: 4165631 * ifrit.LEADERSHIP
}
const fireswordRiderStack: MobStack = {
  id: 'fireswordRiderStack1',
  unit: fireswordRider,
  units: 4071044,
  leadership: 4071044 * fireswordRider.LEADERSHIP
}
const fireHidraStack: MobStack = {
  id: 'fireHidraStack1',
  unit: fireHidra,
  units: 2263309,
  leadership: 2263309 * fireHidra.LEADERSHIP
}
export const doomsdayArmy = [overseerStack, ifritStack, fireswordRiderStack, fireHidraStack]

//---------------------------------------

// const hellBlacksmith: MonsterUnit = {
//   // 50 epic inferno squad
//   name: 'HellBlacksmith',
//   BASEHP: 300000,
//   BASESTR: 100000,
//   LEADERSHIP: 10,
//   INITIATIVE: 10,
//   vsRangedPercent: 0,
//   vsSiegePercent: 0,
//   vsBeastPercent: 0,
//   vsHumanPercent: 0,
//   vsMountedPercent: 75,
//   vsFlyingPercent: 0,
//   vsMeleePercent: 0,
//   vsFortificationsPercent: 0,vsEpicMonster:0,
//   troop: 'demon',
//   category: 'melee',
//   level: 'III'
// }

export const doomsdayNecromancer: EnemyUnit = {
  tipo: 'monster',
  name: 'necromancer',
  BASEHP: 2160,
  BASESTR: 720,
  LEADERSHIP: 8,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 50,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'monster',
  category: 'ranged',
  group: 'epic',
  level: 'II'
}
export const jacksReturnScarecrow: EnemyUnit = {
  // 50 epic pumpkin squad
  tipo: 'monster',
  name: 'scarecrow',
  BASEHP: 33000,
  BASESTR: 11000,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 50,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'monster',
  category: 'ranged',
  group: 'epic',
  level: 'II'
}

//------------------------------------
const mechanicalGriffin: EnemyUnit = {
  // ancient/tinman
  tipo: 'monster',
  name: 'mechanicalGriffin',
  BASEHP: 210000,
  BASESTR: 70000,
  LEADERSHIP: 10,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 0,
  vsMeleePercent: 80,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'ancient',
  category: 'flying',
  group: 'epic',
  level: 'II'
}
const ancientArbalest: EnemyUnit = {
  // ancient/tinman
  tipo: 'monster',
  name: 'ancientArbalest',
  BASEHP: 2160,
  BASESTR: 720,
  LEADERSHIP: 8,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 50,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'ancient',
  category: 'ranged',
  group: 'epic',
  level: 'II'
}
const tigerRider: EnemyUnit = {
  // ancient/tinman
  tipo: 'monster',
  name: 'tigerRider',
  BASEHP: 171000,
  BASESTR: 57000,
  LEADERSHIP: 60,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 60,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 0,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'ancient',
  category: 'mounted',
  group: 'epic',
  level: 'II'
}
const goldenGuardian: EnemyUnit = {
  // ancient/tinman
  tipo: 'monster',
  name: 'goldenGuardian',
  BASEHP: 300000,
  BASESTR: 100000,
  LEADERSHIP: 74,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 45,
  vsFlyingPercent: 0,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'ancient',
  category: 'melee',
  group: 'epic',
  level: 'III'
}
const mechanicalGriffinStack: MobStack = {
  id: 'mechanicalGriffinStack1',
  unit: mechanicalGriffin,
  units: 16770,
  leadership: 16770 * mechanicalGriffin.LEADERSHIP
}
const ancientArbalestStack: MobStack = {
  id: 'ancientArbalestStack1',
  unit: ancientArbalest,
  units: 1550411,
  leadership: 1550411 * ancientArbalest.LEADERSHIP
}
const tigerRiderStack: MobStack = {
  id: 'tigerRiderStack1',
  unit: tigerRider,
  units: 18015,
  leadership: 18015 * tigerRider.LEADERSHIP
}
const goldenGuardianStack: MobStack = {
  id: 'goldenGuardianStack1',
  unit: goldenGuardian,
  units: 20202,
  leadership: 20202 * goldenGuardian.LEADERSHIP
}
export const ancientArmy = [
  goldenGuardianStack,
  mechanicalGriffinStack,
  ancientArbalestStack,
  tigerRiderStack
]
//----------------------------------

const maliciousMantis: EnemyUnit = {
  // 50 epic squad arachne swarm
  tipo: 'monster',
  name: 'MaliciousMantis',
  BASEHP: 33000,
  BASESTR: 11000,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 50,
  vsFlyingPercent: 0,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'swarm',
  category: 'melee',
  group: 'epic',
  level: 'II'
}
const caterpillarCavalry: EnemyUnit = {
  // 50 epic squad arachne swarm
  tipo: 'monster',
  name: 'caterpillarCavalry',
  BASEHP: 33000,
  BASESTR: 11000,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 50,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 0,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'swarm',
  category: 'mounted',
  group: 'epic',
  level: 'II'
}
const elusiveWasp: EnemyUnit = {
  // 50 epic squad arachne swarm
  tipo: 'monster',
  name: 'elusiveWasp',
  BASEHP: 33000,
  BASESTR: 11000,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 0,
  vsMeleePercent: 50,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'swarm',
  category: 'flying',
  group: 'epic',
  level: 'II'
}
const mercilesArachne: EnemyUnit = {
  // 50 epic squad arachne swarm
  tipo: 'monster',
  name: 'mercilesArachne',
  BASEHP: 150000,
  BASESTR: 50000,
  LEADERSHIP: 5,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 50,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'swarm',
  category: 'ranged',
  group: 'epic',
  level: 'III'
}
const maliciousMantisStack: MobStack = {
  id: 'maliciousMantisStack1',
  unit: maliciousMantis,
  units: 5088165,
  leadership: 5088165 * maliciousMantis.LEADERSHIP
}
const caterpillarCavalryStack: MobStack = {
  id: 'caterpillarCavalryStack1',
  unit: caterpillarCavalry,
  units: 4252506,
  leadership: 4252506 * caterpillarCavalry.LEADERSHIP
}
const elusiveWaspStack: MobStack = {
  id: 'elusiveWaspStack1',
  unit: elusiveWasp,
  units: 4138056,
  leadership: 4138056 * elusiveWasp.LEADERSHIP
}
const mercilesArachneStack: MobStack = {
  id: 'mercilesArachneStack1',
  unit: mercilesArachne,
  units: 1111690,
  leadership: 1111690 * mercilesArachne.LEADERSHIP
}
export const arachneArmy = [
  maliciousMantisStack, //x2
  caterpillarCavalryStack, //x2
  elusiveWaspStack, //x2
  mercilesArachneStack //x2
]

// export const jormungandr = {
//   name: '50:ragnark-jormungandr',
//   monsters: [
//     {
//       strength: 3200,
//       health: 9600,
//       name: 'ogro chaman',
//       units: 4,
//       bonusVsMounted: 60,
//       type: 'melee'
//     }
//   ]
// }

const shadowWarrior: EnemyUnit = {
  // OK
  tipo: 'monster',
  name: 'shadowWarrior',
  BASEHP: 29760,
  BASESTR: 9920,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 50,
  vsFlyingPercent: 0,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'guardsman',
  category: 'melee', // melee
  group: 'epic',
  level: 'III'
}
const shadowRanged: EnemyUnit = {
  // OK
  tipo: 'monster',
  name: 'shadowRanged',
  BASEHP: 29760,
  BASESTR: 9920,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 50,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'guardsman',
  category: 'ranged', // melee
  group: 'epic',
  level: 'III'
}
const shadowRider: EnemyUnit = {
  // OK
  tipo: 'monster',
  name: 'shadowRider',
  BASEHP: 59520,
  BASESTR: 19840,
  LEADERSHIP: 4,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 50,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 0,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'guardsman',
  category: 'mounted', // melee
  group: 'epic',
  level: 'III'
}
const shadowCorax: EnemyUnit = {
  // OK
  tipo: 'monster',
  name: 'shadowCorax',
  BASEHP: 297600,
  BASESTR: 99200,
  LEADERSHIP: 20,
  INITIATIVE: 10,
  DOMINANCE: 0,
  AUTHORITY: 0,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 0,
  vsMeleePercent: 50,
  vsFortificationsPercent: 0,
  vsEpicMonster: 0,
  vsGiants: 0,
  troop: 'guardsman',
  category: 'flying',
  group: 'epic',
  level: 'III'
}
/*category
| 'mounted'| 'ranged'| 'melee'| 'flying'| 'fortification'| 'siege'
| 'elemental'| 'beast'| 'dragon'| 'giant'
*/
export const whoCanIAttack = (unit: EnemyUnit | Unit | MercUnit) => {
  const target = []
  if (unit.vsRangedPercent > 0) {
    target.push('ranged')
  }
  if (unit.vsSiegePercent > 0) {
    target.push('siege')
  }
  if (unit.vsBeastPercent > 0) {
    target.push('beast')
  }

  if (unit.vsHumanPercent) {
    target.push('human')
  }
  if (unit.vsMountedPercent) {
    target.push('mounted')
  }
  if (unit.vsFlyingPercent) {
    target.push('flying')
  }
  if (unit.vsMeleePercent) {
    target.push('melee')
  }
  if (unit.vsFortificationsPercent) {
    target.push('fortification')
  }
  if (unit.vsEpicMonster) {
    target.push('epic')
  }
  if (unit.vsGiants) {
    target.push('giants')
  }
  return target.join(', ')
}

const shadowWarriorStack: MobStack = {
  id: 'shadowWarriorStack1',
  unit: shadowWarrior,
  units: 121963341,
  leadership: 121963341 * shadowWarrior.LEADERSHIP
}
const shadowRangedStack: MobStack = {
  id: 'shadowRangedStack1',
  unit: shadowRanged,
  units: 115395036,
  leadership: 115395036 * shadowRanged.LEADERSHIP
}
const shadowRiderStack: MobStack = {
  id: 'shadowRiderStack1',
  unit: shadowRider,
  units: 57203657,
  leadership: 57203657 * shadowRider.LEADERSHIP
}
const shadowCoraxStack: MobStack = {
  id: 'shadowCoraxStack1',
  unit: shadowCorax,
  units: 12121748,
  leadership: 12121748 * shadowCorax.LEADERSHIP
}

export const shadowCastleArmy = [
  shadowWarriorStack,
  shadowRangedStack,
  shadowRiderStack,
  shadowCoraxStack
]
