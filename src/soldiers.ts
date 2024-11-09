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
  vsEpicMonster: number
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
    vsEpicMonster: 0,
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
export const RiderG1 = riderBuilder('RiderG1', 300, 100, 65, 54, 'G1')
export const RiderG2 = riderBuilder('RiderG2', 540, 180, 98, 81, 'G2')
export const RiderG3 = riderBuilder('RiderG3', 960, 320, 146, 122, 'G3')
export const RiderG4 = riderBuilder('RiderG4', 1740, 580, 219, 182, 'G4')
export const RiderG5 = riderBuilder('RiderG5', 3150, 1050, 329, 273, 'G5')

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
export const SwordmanS1 = swordmanBuilder('SwordmanS1', 150, 50, 40, 105, 20, 'S1')
export const SwordmanS2 = swordmanBuilder('SwordmanS2', 270, 90, 60, 105, 29, 'S2')
export const SwordmanS3 = swordmanBuilder('SwordmanS3', 480, 160, 90, 105, 44, 'S3')
export const SwordmanS4 = swordmanBuilder('SwordmanS4', 870, 290, 135, 105, 66, 'S4')
export const SwordmanS5 = swordmanBuilder('SwordmanS5', 1560, 520, 203, 105, 99, 'S5')

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
    category: 'melee',
    race: 'human',
    group: 'specialist',
    level
  })
}

export const SpyS1 = spyBuilder('SpyS1', 75, 25, 'S1')
export const SpyS2 = spyBuilder('SpyS2', 135, 45, 'S2')
export const SpyS3 = spyBuilder('SpyS3', 240, 80, 'S3')
export const SpyS4 = spyBuilder('SpyS4', 450, 150, 'S4')
export const SpyS5 = spyBuilder('SpyS5', 780, 260, 'S5')

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

export const SpearmanG1 = spearmanBuilder('SpearmanG1', 150, 50, 80, 39, 'G1')
export const SpearmanG2 = spearmanBuilder('SpearmanG2', 270, 90, 120, 59, 'G2')
export const SpearmanG3 = spearmanBuilder('SpearmanG3', 480, 160, 180, 88, 'G3')
export const SpearmanG4 = spearmanBuilder('SpearmanG4', 870, 290, 270, 132, 'G4')
export const SpearmanG5 = spearmanBuilder('SpearmanG5', 1560, 520, 405, 197, 'G5')

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
export const ArcherG1 = archerBuilder('Archer G1', 150, 50, 67, 52, 'G1')
export const ArcherG2 = archerBuilder('Archer G2', 270, 90, 101, 78, 'G2')
export const ArcherG3 = archerBuilder('Archer G3', 480, 160, 151, 117, 'G3')
export const ArcherG4 = archerBuilder('Archer G4', 870, 290, 226, 176, 'G4')
export const ArcherG5 = archerBuilder('Archer G5', 1560, 520, 339, 263, 'G5')

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

export const CatapultE1 = catapultBuilder('Catapult E1', 1500, 250, 65, 'E1')
export const CatapultE2 = catapultBuilder('Catapult E2', 2700, 450, 98, 'E2')
export const CatapultE3 = catapultBuilder('Catapult E3', 4860, 810, 146, 'E3')
export const CatapultE4 = catapultBuilder('Catapult E4', 8750, 1460, 219, 'E4')
export const CatapultE5 = catapultBuilder('Catapult E5', 15800, 2630, 329, 'E5')

//------------------------

//------------------------------------
export const waterElemental = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: 'waterElemental',
  BASEHP: 5700,
  BASESTR: 1900,
  DOMINANCE: 3,
  INITIATIVE: 10,
  vsMeleePercent: 113,
  vsFlyingPercent: 144,
  troop: 'monster',
  category: 'ranged',
  race: 'elemental',
  group: 'monster',
  level: 'III'
})
export const iceFenix: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: 'iceFenix',
  BASESTR: 17000,
  BASEHP: 51000,
  DOMINANCE: 15,
  INITIATIVE: 10,
  vsFlyingPercent: 223,
  vsDragonPercent: 162,
  troop: 'monster',
  race: 'elemental',
  group: 'monster',
  category: 'flying',
  level: 'IV'
})
export const burningCentaurus: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: 'burningCentaurus',
  BASESTR: 44000,
  BASEHP: 132000,
  DOMINANCE: 21,
  INITIATIVE: 10,
  vsBeastPercent: 162,
  vsRangedPercent: 415,
  troop: 'monster',
  race: 'elemental',
  group: 'monster',
  category: 'mounted',
  level: 'V'
})
export const rubiGolem: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'rubiGolem',
  BASESTR: 130000,
  BASEHP: 390000,
  DOMINANCE: 35,
  INITIATIVE: 10,
  vsMeleePercent: 486,
  vsMountedPercent: 380,
  race: 'elemental',
  category: 'melee',
  level: 'VI'
})
export const windLord: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'windLord',
  BASESTR: 310000,
  BASEHP: 930000,
  DOMINANCE: 45,
  INITIATIVE: 10,
  vsDragonPercent: 911,
  vsMountedPercent: 387,
  race: 'elemental',
  category: 'melee',
  level: 'VII'
})
export const fireFenixI: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'fireFenixI',
  BASESTR: 660000,
  BASEHP: 1980000,
  DOMINANCE: 54,
  INITIATIVE: 10,
  vsMeleePercent: 701,
  vsDragonPercent: 1247,
  race: 'elemental',
  category: 'flying',
  level: 'I'
})
export const fireFenixII: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'fireFenixII',
  BASESTR: 1190000,
  BASEHP: 3570000,
  DOMINANCE: 54,
  INITIATIVE: 10,
  vsMeleePercent: 1051,
  vsDragonPercent: 1871,
  race: 'elemental',
  category: 'flying',
  level: 'II'
})

//-----------------------------
export const battleBoar: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'battleBoar',
  BASESTR: 3900,
  BASEHP: 11700,
  DOMINANCE: 6,
  INITIATIVE: 10,
  vsMountedPercent: 144,
  vsRangedPercent: 113,
  race: 'beast',
  category: 'mounted',
  level: 'III'
})
export const gorgonMedusa: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'gorgonMedusa',
  BASESTR: 12000,
  BASEHP: 36000,
  DOMINANCE: 10,
  INITIATIVE: 10,
  vsMeleePercent: 277,
  vsFlyingPercent: 108,
  race: 'beast',
  category: 'ranged',
  level: 'IV'
})
export const fearManticora: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'fearManticora',
  BASESTR: 46000,
  BASEHP: 138000,
  DOMINANCE: 22,
  INITIATIVE: 10,
  vsFlyingPercent: 253,
  vsGiantPercent: 324,
  race: 'beast',
  category: 'flying',
  level: 'V'
})
export const forestDestructor: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'forestDestructor',
  BASESTR: 130000,
  BASEHP: 390000,
  DOMINANCE: 34,
  INITIATIVE: 10,
  vsDragonPercent: 243,
  vsMountedPercent: 623,
  race: 'beast',
  category: 'melee',
  level: 'VI'
})
export const oldTerror: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'oldTerror',
  BASESTR: 280000,
  BASEHP: 840000,
  DOMINANCE: 41,
  INITIATIVE: 10,
  vsRangedPercent: 752,
  vsFortificationsPercent: 547,
  race: 'beast',
  category: 'mounted',
  level: 'VII'
})
export const embaucatorI: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'embaucatorI',
  BASESTR: 640000,
  BASEHP: 1920000,
  DOMINANCE: 52,
  INITIATIVE: 10,
  vsFlyingPercent: 940,
  vsElementalPercent: 1008,
  race: 'beast',
  category: 'ranged',
  level: 'I'
})
export const embaucatorII: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'embaucatorII',
  BASESTR: 1150000,
  BASEHP: 3450000,
  DOMINANCE: 52,
  INITIATIVE: 10,
  vsFlyingPercent: 1410,
  vsElementalPercent: 1512,
  race: 'beast',
  category: 'ranged',
  level: 'II'
})
//-----------------------------
export const emeraldDragon: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: 'emeraldDragon',
  BASESTR: 4500,
  BASEHP: 13500,
  DOMINANCE: 7,
  INITIATIVE: 10,
  vsGiantPercent: 72,
  vsMountedPercent: 185,
  troop: 'monster',
  race: 'dragon',
  group: 'monster',
  category: 'flying',
  level: 'III'
})
export const magicDragon: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: 'magicDragon',
  BASESTR: 15000,
  BASEHP: 45000,
  DOMINANCE: 13,
  INITIATIVE: 10,
  vsRangedPercent: 216,
  vsMeleePercent: 169,
  troop: 'monster',
  race: 'dragon',
  group: 'monster',
  category: 'ranged',
  level: 'IV'
})
export const desertConquer: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: 'desertConquer',
  BASESTR: 42000,
  BASEHP: 126000,
  DOMINANCE: 20,
  INITIATIVE: 10,
  vsElementalPercent: 324,
  vsRangedPercent: 253,
  troop: 'monster',
  race: 'dragon',
  group: 'monster',
  category: 'mounted',
  level: 'V'
})

export const crystalDragon: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: 'crystalDragon',
  BASESTR: 120000,
  BASEHP: 360000,
  DOMINANCE: 33,
  INITIATIVE: 10,
  vsElementalPercent: 608,
  vsMountedPercent: 258,
  troop: 'monster',
  race: 'dragon',
  group: 'monster',
  category: 'melee',
  level: 'VI'
})
export const blackDragon: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: 'blackDragon',
  BASESTR: 300000,
  BASEHP: 900000,
  DOMINANCE: 44,
  INITIATIVE: 10,
  vsBeastPercent: 729,
  vsMeleePercent: 570,
  troop: 'monster',
  race: 'dragon',
  group: 'monster',
  category: 'flying',
  level: 'VII'
})
export const devastatorI: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: 'devastatorI',
  BASESTR: 650000,
  BASEHP: 1950000,
  DOMINANCE: 53,
  INITIATIVE: 10,
  vsRangedPercent: 1281,
  vsGiantPercent: 667,
  troop: 'monster',
  race: 'dragon',
  group: 'monster',
  category: 'mounted',
  level: 'I'
})
export const devastatorII: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  name: 'devastatorII',
  BASESTR: 1170000,
  BASEHP: 3510000,
  DOMINANCE: 53,
  INITIATIVE: 10,
  vsRangedPercent: 1922,
  vsGiantPercent: 1000,
  troop: 'monster',
  race: 'dragon',
  group: 'monster',
  category: 'mounted',
  level: 'II'
})

export const stoneGargole: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'stoneGargole',
  BASESTR: 5200,
  BASEHP: 15600,
  DOMINANCE: 8,
  INITIATIVE: 10,
  vsBeastPercent: 72,
  vsMeleePercent: 185,
  race: 'giant',
  category: 'flying',
  level: 'III'
})
export const multiArmGuardian: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'multiArmGuardian',
  BASESTR: 13000,
  BASEHP: 39000,
  DOMINANCE: 11,
  INITIATIVE: 10,
  vsMountedPercent: 115,
  vsElementalPercent: 270,
  race: 'giant',
  category: 'melee',
  level: 'IV'
})
export const Ettin: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'Ettin',
  BASESTR: 48000,
  BASEHP: 144000,
  DOMINANCE: 23,
  INITIATIVE: 10,
  vsFortificationsPercent: 243,
  vsMountedPercent: 334,
  race: 'giant',
  category: 'melee',
  level: 'V'
})
export const trollRider: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'trollRider',
  BASESTR: 110000,
  BASEHP: 330000,
  DOMINANCE: 30,
  INITIATIVE: 10,
  vsFortificationsPercent: 486,
  vsRangedPercent: 380,
  race: 'giant',
  category: 'mounted',
  level: 'VI'
})
export const destroyerColossus: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'destroyerColossus',
  BASESTR: 290000,
  BASEHP: 870000,
  DOMINANCE: 43,
  INITIATIVE: 10,
  vsMeleePercent: 752,
  vsFlyingPercent: 547,
  race: 'giant',
  category: 'ranged',
  level: 'VII'
})
export const krakenI: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'krakenI',
  BASESTR: 670000,
  BASEHP: 2010000,
  DOMINANCE: 55,
  INITIATIVE: 10,
  vsMountedPercent: 991,
  vsBeastPercent: 957,
  race: 'giant',
  category: 'melee',
  level: 'I'
})
export const krakenII: MonsterUnit = unitBuilder<MonsterUnit>({
  tipo: 'monster',
  troop: 'monster',
  group: 'monster',
  name: 'krakenII',
  BASESTR: 1210000,
  BASEHP: 3630000,
  DOMINANCE: 55,
  INITIATIVE: 10,
  vsMountedPercent: 1486,
  vsBeastPercent: 1435,
  race: 'giant',
  category: 'melee',
  level: 'II'
})
