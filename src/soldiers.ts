import { EngineerUnit, GuardsmanUnit, MonsterUnit, SpecialistUnit } from './types'

interface UnitProps {
  tipo: string
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
  vsGiantPercent: number
  vsEpicPercent: number
  vsElementalPercent: number
  vsDragonPercent: number
  troop: string
  category: string
  race: string
  group: string
  level: string
}
// function unitBuilder<T>(arg: T): T {
//   return arg
// }
// const genericArrowFunction = <T>(arg: T): T => {
//   return arg
// }
export const ARMY = {
  RiderG1: 'RiderG1',
  RiderG2: 'RiderG2',
  RiderG3: 'RiderG3',
  RiderG4: 'RiderG4',
  RiderG5: 'RiderG5',
  SwordmanS1: 'SwordmanS1',
  SwordmanS2: 'SwordmanS2',
  SwordmanS3: 'SwordmanS3',
  SwordmanS4: 'SwordmanS4',
  SwordmanS5: 'SwordmanS5',
  SpyS1: 'SpyS1',
  SpyS2: 'SpyS2',
  SpyS3: 'SpyS3',
  SpyS4: 'SpyS4',
  SpyS5: 'SpyS5',
  SpearmanG1: 'SpearmanG1',
  SpearmanG2: 'SpearmanG2',
  SpearmanG3: 'SpearmanG3',
  SpearmanG4: 'SpearmanG4',
  SpearmanG5: 'SpearmanG5',
  ArcherG1: 'ArcherG1',
  ArcherG2: 'ArcherG2',
  ArcherG3: 'ArcherG3',
  ArcherG4: 'ArcherG4',
  ArcherG5: 'ArcherG5',
  CatapultE1: 'CatapultE1',
  CatapultE2: 'CatapultE2',
  CatapultE3: 'CatapultE3',
  CatapultE4: 'CatapultE4',
  CatapultE5: 'CatapultE5',

  waterElemental: 'waterElemental',
  iceFenix: 'iceFenix',
  burningCentaurus: 'burningCentaurus',
  rubiGolem: 'rubiGolem',
  windLord: 'windLord',
  fireFenixI: 'fireFenixI',
  fireFenixII: 'fireFenixII',
  battleBoar: 'battleBoar',
  gorgonMedusa: 'gorgonMedusa',
  fearManticora: 'fearManticora',
  forestDestructor: 'forestDestructor',
  oldTerror: 'oldTerror',
  embaucatorI: 'embaucatorI',
  embaucatorII: 'embaucatorII',
  emeraldDragon: 'emeraldDragon',
  magicDragon: 'magicDragon',
  desertConquer: 'desertConquer',
  crystalDragon: 'crystalDragon',
  blackDragon: 'blackDragon',
  devastatorI: 'devastatorI',
  devastatorII: 'devastatorII',
  stoneGargole: 'stoneGargole',
  multiArmGuardian: 'multiArmGuardian',
  Ettin: 'Ettin',
  trollRider: 'trollRider',
  destroyerColossus: 'destroyerColossus',
  krakenI: 'krakenI',
  krakenII: 'krakenII',

  mercEpicMonsterHunter: 'mercEpicMonsterHunter',
  chariotVI: 'chariotVI',
  legionaryVI: 'legionaryVI',
  arbalesterVI: 'arbalesterVI',
  sphynxVI: 'sphynxVI',
  knightVI: 'knightVI',
  trailseekerVI: 'trailseekerVI',
  rhinoRiderVI: 'rhinoRiderVI',
  sheduVI: 'sheduVI'
}
export const unitBuilder = <T>(props: Partial<UnitProps>): T => {
  return {
    tipo: '',
    name: '',
    BASEHP: 0,
    BASESTR: 0,
    LEADERSHIP: 0,
    AUTHORITY: 0,
    DOMINANCE: 0,
    INITIATIVE: 0,
    vsRangedPercent: 0,
    vsSiegePercent: 0,
    vsHumanPercent: 0,
    vsMountedPercent: 0,
    vsFlyingPercent: 0,
    vsMeleePercent: 0,
    vsFortificationsPercent: 0,
    vsBeastPercent: 0,
    vsGiantPercent: 0,
    vsElementalPercent: 0,
    vsDragonPercent: 0,
    vsEpicPercent: 0,
    troop: '',
    category: '',
    race: '',
    group: '',
    level: '',
    ...props
  } as T
}

const riderBuilder = (
  name: string,
  BASEHP: number,
  BASESTR: number,
  vsRangedPercent: number,
  vsSiegePercent: number,
  level: string
): GuardsmanUnit => {
  return unitBuilder<GuardsmanUnit>({
    tipo: 'army',
    name,
    BASEHP,
    BASESTR,
    LEADERSHIP: 2,
    INITIATIVE: 10,
    vsRangedPercent,
    vsSiegePercent,
    troop: 'rider',
    category: 'mounted',
    race: 'human',
    group: 'guardsman',
    level
  })
}
export const RiderG1 = riderBuilder(ARMY.RiderG1, 300, 100, 65, 54, 'G1')
export const RiderG2 = riderBuilder(ARMY.RiderG2, 540, 180, 98, 81, 'G2')
export const RiderG3 = riderBuilder(ARMY.RiderG3, 960, 320, 146, 122, 'G3')
export const RiderG4 = riderBuilder(ARMY.RiderG4, 1740, 580, 219, 182, 'G4')
export const RiderG5 = riderBuilder(ARMY.RiderG5, 3150, 1050, 329, 273, 'G5')

//--------------------------------
const swordmanBuilder = (
  name: string,
  BASEHP: number,
  BASESTR: number,
  vsBeastPercent: number,
  vsHumanPercent: number,
  vsMountedPercent: number,
  level: string
) => {
  return unitBuilder<SpecialistUnit>({
    tipo: 'army',
    name,
    BASEHP,
    BASESTR,
    LEADERSHIP: 1,
    INITIATIVE: 10,
    vsBeastPercent,
    vsHumanPercent,
    vsMountedPercent,
    troop: 'swordsman',
    category: 'melee',
    race: 'human',
    group: 'specialist',
    level
  })
}
export const SwordmanS1 = swordmanBuilder(ARMY.SwordmanS1, 150, 50, 40, 105, 20, 'S1')
export const SwordmanS2 = swordmanBuilder(ARMY.SwordmanS2, 270, 90, 60, 105, 29, 'S2')
export const SwordmanS3 = swordmanBuilder(ARMY.SwordmanS3, 480, 160, 90, 105, 44, 'S3')
export const SwordmanS4 = swordmanBuilder(ARMY.SwordmanS4, 870, 290, 135, 105, 66, 'S4')
export const SwordmanS5 = swordmanBuilder(ARMY.SwordmanS5, 1560, 520, 203, 105, 99, 'S5')

//----------------------------

const spyBuilder = (name: string, BASEHP: number, BASESTR: number, level: string) => {
  return unitBuilder<SpecialistUnit>({
    tipo: 'army',
    name,
    BASEHP,
    BASESTR,
    LEADERSHIP: 1,
    INITIATIVE: 10,
    troop: 'spy',
    category: 'scout',
    race: 'human',
    group: 'specialist',
    level
  })
}

export const SpyS1 = spyBuilder(ARMY.SpyS1, 75, 25, 'S1')
export const SpyS2 = spyBuilder(ARMY.SpyS2, 135, 45, 'S2')
export const SpyS3 = spyBuilder(ARMY.SpyS3, 240, 80, 'S3')
export const SpyS4 = spyBuilder(ARMY.SpyS4, 450, 150, 'S4')
export const SpyS5 = spyBuilder(ARMY.SpyS5, 780, 260, 'S5')

//----------------------------------
const spearmanBuilder = (
  name: string,
  BASEHP: number,
  BASESTR: number,
  vsBeastPercent: number,
  vsMountedPercent: number,
  level: string
): GuardsmanUnit => {
  return unitBuilder<GuardsmanUnit>({
    tipo: 'army',
    name,
    BASEHP,
    BASESTR,
    LEADERSHIP: 1,
    INITIATIVE: 10,
    vsBeastPercent,
    vsMountedPercent,
    troop: 'spearman',
    category: 'melee', // vs beast||mounted
    race: 'human',
    group: 'guardsman',
    level
  })
}

export const SpearmanG1 = spearmanBuilder(ARMY.SpearmanG1, 150, 50, 80, 39, 'G1')
export const SpearmanG2 = spearmanBuilder(ARMY.SpearmanG2, 270, 90, 120, 59, 'G2')
export const SpearmanG3 = spearmanBuilder(ARMY.SpearmanG3, 480, 160, 180, 88, 'G3')
export const SpearmanG4 = spearmanBuilder(ARMY.SpearmanG4, 870, 290, 270, 132, 'G4')
export const SpearmanG5 = spearmanBuilder(ARMY.SpearmanG5, 1560, 520, 405, 197, 'G5')

//----------------------------------
const archerBuilder = (
  name: string,
  BASEHP: number,
  BASESTR: number,
  vsFlyingPercent: number,
  vsMeleePercent: number,
  level: string
): GuardsmanUnit => {
  return unitBuilder<GuardsmanUnit>({
    tipo: 'army',
    name,
    BASEHP,
    BASESTR,
    LEADERSHIP: 1,
    INITIATIVE: 10,
    vsFlyingPercent,
    vsMeleePercent,
    troop: 'archer',
    category: 'ranged',
    race: 'human',
    group: 'guardsman',
    level
  })
}
export const ArcherG1 = archerBuilder(ARMY.ArcherG1, 150, 50, 67, 52, 'G1')
export const ArcherG2 = archerBuilder(ARMY.ArcherG2, 270, 90, 101, 78, 'G2')
export const ArcherG3 = archerBuilder(ARMY.ArcherG3, 480, 160, 151, 117, 'G3')
export const ArcherG4 = archerBuilder(ARMY.ArcherG4, 870, 290, 226, 176, 'G4')
export const ArcherG5 = archerBuilder(ARMY.ArcherG5, 1560, 520, 339, 263, 'G5')

//----------------------------------
const catapultBuilder = (
  name: string,
  BASEHP: number,
  BASESTR: number,
  vsFortificationsPercent: number,
  level: string
): EngineerUnit => {
  return unitBuilder<EngineerUnit>({
    tipo: 'army',
    name,
    BASEHP,
    BASESTR,
    LEADERSHIP: 10,
    INITIATIVE: 10,
    //str * 20 ?
    vsFortificationsPercent,
    troop: 'catapult',
    category: 'siege',
    race: 'human',
    group: 'engineer',
    level
  })
}

export const CatapultE1 = catapultBuilder(ARMY.CatapultE1, 1500, 250, 65, 'E1')
export const CatapultE2 = catapultBuilder(ARMY.CatapultE2, 2700, 450, 98, 'E2')
export const CatapultE3 = catapultBuilder(ARMY.CatapultE3, 4860, 810, 146, 'E3')
export const CatapultE4 = catapultBuilder(ARMY.CatapultE4, 8750, 1460, 219, 'E4')
export const CatapultE5 = catapultBuilder(ARMY.CatapultE5, 15800, 2630, 329, 'E5')

//------------------------

//------------------------------------
export const waterElemental = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: ARMY.waterElemental, //'waterElemental',
  BASEHP: 5700,
  BASESTR: 1900,
  DOMINANCE: 3,
  INITIATIVE: 10,
  vsMeleePercent: 113,
  vsFlyingPercent: 144,
  troop: 'monster',
  category: 'ranged',
  group: 'elemental',
  race: 'monster',
  level: 'III'
})
export const iceFenix: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: ARMY.iceFenix, //'iceFenix',
  BASESTR: 17000,
  BASEHP: 51000,
  DOMINANCE: 15,
  INITIATIVE: 10,
  vsFlyingPercent: 223,
  vsDragonPercent: 162,
  troop: 'monster',
  group: 'elemental',
  race: 'monster',
  category: 'flying',
  level: 'IV'
})
export const burningCentaurus: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: ARMY.burningCentaurus, //'burningCentaurus',
  BASESTR: 44000,
  BASEHP: 132000,
  DOMINANCE: 21,
  INITIATIVE: 10,
  vsBeastPercent: 162,
  vsRangedPercent: 415,
  troop: 'monster',
  group: 'elemental',
  race: 'monster',
  category: 'mounted',
  level: 'V'
})
export const rubiGolem: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.rubiGolem, //'rubiGolem',
  BASESTR: 130000,
  BASEHP: 390000,
  DOMINANCE: 35,
  INITIATIVE: 10,
  vsMeleePercent: 486,
  vsMountedPercent: 380,
  group: 'elemental',
  category: 'melee',
  level: 'VI'
})
export const windLord: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.windLord, //'windLord',
  BASESTR: 310000,
  BASEHP: 930000,
  DOMINANCE: 45,
  INITIATIVE: 10,
  vsDragonPercent: 911,
  vsMountedPercent: 387,
  group: 'elemental',
  category: 'melee',
  level: 'VII'
})
export const fireFenixI: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.fireFenixI, //'fireFenixI',
  BASESTR: 660000,
  BASEHP: 1980000,
  DOMINANCE: 54,
  INITIATIVE: 10,
  vsMeleePercent: 701,
  vsDragonPercent: 1247,
  group: 'elemental',
  category: 'flying',
  level: 'I'
})
export const fireFenixII: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.fireFenixII, //'fireFenixII',
  BASESTR: 1190000,
  BASEHP: 3570000,
  DOMINANCE: 54,
  INITIATIVE: 10,
  vsMeleePercent: 1051,
  vsDragonPercent: 1871,
  group: 'elemental',
  category: 'flying',
  level: 'II'
})

//-----------------------------
export const battleBoar: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.battleBoar, //'battleBoar',
  BASESTR: 3900,
  BASEHP: 11700,
  DOMINANCE: 6,
  INITIATIVE: 10,
  vsMountedPercent: 144,
  vsRangedPercent: 113,
  group: 'beast',
  category: 'mounted',
  level: 'III'
})
export const gorgonMedusa: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.gorgonMedusa, //'gorgonMedusa',
  BASESTR: 12000,
  BASEHP: 36000,
  DOMINANCE: 10,
  INITIATIVE: 10,
  vsMeleePercent: 277,
  vsFlyingPercent: 108,
  group: 'beast',
  category: 'ranged',
  level: 'IV'
})
export const fearManticora: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.fearManticora, //'fearManticora',
  BASESTR: 46000,
  BASEHP: 138000,
  DOMINANCE: 22,
  INITIATIVE: 10,
  vsFlyingPercent: 253,
  vsGiantPercent: 324,
  group: 'beast',
  category: 'flying',
  level: 'V'
})
export const forestDestructor: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.forestDestructor, //'forestDestructor',
  BASESTR: 130000,
  BASEHP: 390000,
  DOMINANCE: 34,
  INITIATIVE: 10,
  vsDragonPercent: 243,
  vsMountedPercent: 623,
  group: 'beast',
  category: 'melee',
  level: 'VI'
})
export const oldTerror: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.oldTerror, //'oldTerror',
  BASESTR: 280000,
  BASEHP: 840000,
  DOMINANCE: 41,
  INITIATIVE: 10,
  vsRangedPercent: 752,
  vsFortificationsPercent: 547,
  group: 'beast',
  category: 'mounted',
  level: 'VII'
})
export const embaucatorI: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.embaucatorI, //'embaucatorI',
  BASESTR: 640000,
  BASEHP: 1920000,
  DOMINANCE: 52,
  INITIATIVE: 10,
  vsFlyingPercent: 940,
  vsElementalPercent: 1008,
  group: 'beast',
  category: 'ranged',
  level: 'I'
})
export const embaucatorII: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.embaucatorII, //'embaucatorII',
  BASESTR: 1150000,
  BASEHP: 3450000,
  DOMINANCE: 52,
  INITIATIVE: 10,
  vsFlyingPercent: 1410,
  vsElementalPercent: 1512,
  group: 'beast',
  category: 'ranged',
  level: 'II'
})
//-----------------------------
export const emeraldDragon: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: ARMY.emeraldDragon, //'emeraldDragon',
  BASESTR: 4500,
  BASEHP: 13500,
  DOMINANCE: 7,
  INITIATIVE: 10,
  vsGiantPercent: 72,
  vsMountedPercent: 185,
  troop: 'monster',
  group: 'dragon',
  race: 'monster',
  category: 'flying',
  level: 'III'
})
export const magicDragon: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: ARMY.magicDragon, //'magicDragon',
  BASESTR: 15000,
  BASEHP: 45000,
  DOMINANCE: 13,
  INITIATIVE: 10,
  vsRangedPercent: 216,
  vsMeleePercent: 169,
  troop: 'monster',
  group: 'dragon',
  race: 'monster',
  category: 'ranged',
  level: 'IV'
})
export const desertConquer: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: ARMY.desertConquer, //'desertConquer',
  BASESTR: 42000,
  BASEHP: 126000,
  DOMINANCE: 20,
  INITIATIVE: 10,
  vsElementalPercent: 324,
  vsRangedPercent: 253,
  troop: 'monster',
  group: 'dragon',
  race: 'monster',
  category: 'mounted',
  level: 'V'
})

export const crystalDragon: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: ARMY.crystalDragon, //'crystalDragon',
  BASESTR: 120000,
  BASEHP: 360000,
  DOMINANCE: 33,
  INITIATIVE: 10,
  vsElementalPercent: 608,
  vsMountedPercent: 258,
  troop: 'monster',
  group: 'dragon',
  race: 'monster',
  category: 'melee',
  level: 'VI'
})
export const blackDragon: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: ARMY.blackDragon, //'blackDragon',
  BASESTR: 300000,
  BASEHP: 900000,
  DOMINANCE: 44,
  INITIATIVE: 10,
  vsBeastPercent: 729,
  vsMeleePercent: 570,
  troop: 'monster',
  group: 'dragon',
  race: 'monster',
  category: 'flying',
  level: 'VII'
})
export const devastatorI: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: ARMY.devastatorI, //'devastatorI',
  BASESTR: 650000,
  BASEHP: 1950000,
  DOMINANCE: 53,
  INITIATIVE: 10,
  vsRangedPercent: 1281,
  vsGiantPercent: 667,
  troop: 'monster',
  group: 'dragon',
  race: 'monster',
  category: 'mounted',
  level: 'I'
})
export const devastatorII: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: ARMY.devastatorII, //'devastatorII',
  BASESTR: 1170000,
  BASEHP: 3510000,
  DOMINANCE: 53,
  INITIATIVE: 10,
  vsRangedPercent: 1922,
  vsGiantPercent: 1000,
  troop: 'monster',
  group: 'dragon',
  race: 'monster',
  category: 'mounted',
  level: 'II'
})

export const stoneGargole: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.stoneGargole, //'stoneGargole',
  BASESTR: 5200,
  BASEHP: 15600,
  DOMINANCE: 8,
  INITIATIVE: 10,
  vsBeastPercent: 72,
  vsMeleePercent: 185,
  group: 'giant',
  category: 'flying',
  level: 'III'
})
export const multiArmGuardian: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.multiArmGuardian, //'multiArmGuardian',
  BASESTR: 13000,
  BASEHP: 39000,
  DOMINANCE: 11,
  INITIATIVE: 10,
  vsMountedPercent: 115,
  vsElementalPercent: 270,
  group: 'giant',
  category: 'melee',
  level: 'IV'
})
export const Ettin: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.Ettin, //'Ettin',
  BASESTR: 48000,
  BASEHP: 144000,
  DOMINANCE: 23,
  INITIATIVE: 10,
  vsFortificationsPercent: 243,
  vsMountedPercent: 334,
  group: 'giant',
  category: 'melee',
  level: 'V'
})
export const trollRider: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.trollRider, //'trollRider',
  BASESTR: 110000,
  BASEHP: 330000,
  DOMINANCE: 30,
  INITIATIVE: 10,
  vsFortificationsPercent: 486,
  vsRangedPercent: 380,
  group: 'giant',
  category: 'mounted',
  level: 'VI'
})
export const destroyerColossus: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.destroyerColossus, //'destroyerColossus',
  BASESTR: 290000,
  BASEHP: 870000,
  DOMINANCE: 43,
  INITIATIVE: 10,
  vsMeleePercent: 752,
  vsFlyingPercent: 547,
  group: 'giant',
  category: 'ranged',
  level: 'VII'
})
export const krakenI: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.krakenI, //'krakenI',
  BASESTR: 670000,
  BASEHP: 2010000,
  DOMINANCE: 55,
  INITIATIVE: 10,
  vsMountedPercent: 991,
  vsBeastPercent: 957,
  group: 'giant',
  category: 'melee',
  level: 'I'
})
export const krakenII: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  race: 'monster',
  name: ARMY.krakenII, //'krakenII',
  BASESTR: 1210000,
  BASEHP: 3630000,
  DOMINANCE: 55,
  INITIATIVE: 10,
  vsMountedPercent: 1486,
  vsBeastPercent: 1435,
  group: 'giant',
  category: 'melee',
  level: 'II'
})
