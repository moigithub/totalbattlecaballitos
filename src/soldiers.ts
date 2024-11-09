import { EngineerUnit, GuardsmanUnit, MercUnit, MonsterUnit, SpecialistUnit } from './types'

const riderBuilder = (
  name: string,
  BASEHP: number,
  BASESTR: number,
  vsRangedPercent: number,
  vsSiegePercent: number,
  level: string
): GuardsmanUnit => {
  return {
    tipo: 'army',
    name,
    BASEHP,
    BASESTR,
    LEADERSHIP: 2,
    AUTHORITY: 0,
    DOMINANCE: 0,
    INITIATIVE: 10,
    vsRangedPercent,
    vsSiegePercent,
    vsBeastPercent: 0,
    vsHumanPercent: 0,
    vsMountedPercent: 0,
    vsFlyingPercent: 0,
    vsMeleePercent: 0,
    vsFortificationsPercent: 0,
    vsGiantPercent: 0,
    vsEpicMonster: 0,
    troop: 'rider',
    category: 'mounted',
    // group: 'guardsman',
    race: 'human',
    group: 'guardsman',
    level
  }
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
): SpecialistUnit => {
  return {
    tipo: 'army',
    name,
    BASEHP,
    BASESTR,
    LEADERSHIP: 1,
    AUTHORITY: 0,
    DOMINANCE: 0,
    INITIATIVE: 10,
    vsRangedPercent: 0,
    vsSiegePercent: 0,
    vsBeastPercent,
    vsHumanPercent,
    vsMountedPercent,
    vsFlyingPercent: 0,
    vsMeleePercent: 0,
    vsFortificationsPercent: 0,
    vsGiantPercent: 0,
    vsEpicMonster: 0,
    troop: 'swordsman',
    category: 'melee',
    race: 'human',
    group: 'specialist',
    level
  }
}
export const SwordmanS1 = swordmanBuilder('SwordmanS1', 150, 50, 40, 105, 20, 'S1')
export const SwordmanS2 = swordmanBuilder('SwordmanS2', 270, 90, 60, 105, 29, 'S2')
export const SwordmanS3 = swordmanBuilder('SwordmanS3', 480, 160, 90, 105, 44, 'S3')
export const SwordmanS4 = swordmanBuilder('SwordmanS4', 870, 290, 135, 105, 66, 'S4')
export const SwordmanS5 = swordmanBuilder('SwordmanS5', 1560, 520, 203, 105, 99, 'S5')

//----------------------------

const spyBuilder = (
  name: string,
  BASEHP: number,
  BASESTR: number,
  level: string
): SpecialistUnit => {
  return {
    tipo: 'army',
    name,
    BASEHP,
    BASESTR,
    LEADERSHIP: 1,
    AUTHORITY: 0,
    DOMINANCE: 0,
    INITIATIVE: 10,
    vsRangedPercent: 0,
    vsSiegePercent: 0,
    vsBeastPercent: 0,
    vsHumanPercent: 0,
    vsMountedPercent: 0,
    vsFlyingPercent: 0,
    vsMeleePercent: 0,
    vsFortificationsPercent: 0,
    vsGiantPercent: 0,
    vsEpicMonster: 0,
    troop: 'spy',
    category: 'melee',
    race: 'human',
    group: 'specialist',
    level
  }
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
  return {
    tipo: 'army',
    name,
    BASEHP,
    BASESTR,
    LEADERSHIP: 1,
    AUTHORITY: 0,
    DOMINANCE: 0,
    INITIATIVE: 10,
    vsRangedPercent: 0,
    vsSiegePercent: 0,
    vsBeastPercent,
    vsHumanPercent: 0,
    vsMountedPercent,
    vsFlyingPercent: 0,
    vsMeleePercent: 0,
    vsFortificationsPercent: 0,
    vsGiantPercent: 0,
    vsEpicMonster: 0,
    troop: 'spearman',
    category: 'melee', // vs beast||mounted
    race: 'human',
    group: 'guardsman',
    level
  }
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
  return {
    tipo: 'army',
    name,
    BASEHP,
    BASESTR,
    LEADERSHIP: 1,
    AUTHORITY: 0,
    DOMINANCE: 0,
    INITIATIVE: 10,
    vsRangedPercent: 0,
    vsSiegePercent: 0,
    vsBeastPercent: 0,
    vsHumanPercent: 0,
    vsMountedPercent: 0,
    vsFlyingPercent,
    vsMeleePercent,
    vsFortificationsPercent: 0,
    vsGiantPercent: 0,
    vsEpicMonster: 0,
    troop: 'archer',
    category: 'ranged',
    race: 'human',
    group: 'guardsman',
    level
  }
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
  return {
    tipo: 'army',
    name,
    BASEHP,
    BASESTR,
    LEADERSHIP: 10,
    AUTHORITY: 0,
    DOMINANCE: 0,
    INITIATIVE: 10,
    vsRangedPercent: 0,
    vsSiegePercent: 0,
    vsBeastPercent: 0,
    vsHumanPercent: 0,
    vsMountedPercent: 0,
    vsFlyingPercent: 0,
    vsMeleePercent: 0,
    //str * 20 ?
    vsFortificationsPercent,
    vsGiantPercent: 0,
    vsEpicMonster: 0,
    troop: 'catapult',
    category: 'siege',
    race: 'human',
    group: 'engineer',
    level
  }
}

export const CatapultE1 = catapultBuilder('Catapult E1', 1500, 250, 65, 'E1')
export const CatapultE2 = catapultBuilder('Catapult E2', 2700, 450, 98, 'E2')
export const CatapultE3 = catapultBuilder('Catapult E3', 4860, 810, 146, 'E3')
export const CatapultE4 = catapultBuilder('Catapult E4', 8750, 1460, 219, 'E4')
export const CatapultE5 = catapultBuilder('Catapult E5', 15800, 2630, 329, 'E5')

//------------------------

//------------------------------------
export const waterElemental: MonsterUnit = {
  tipo: 'monster',
  name: 'waterElemental',
  BASEHP: 5700,
  BASESTR: 1900,
  LEADERSHIP: 0,
  AUTHORITY: 0,
  DOMINANCE: 3,
  INITIATIVE: 10,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 144,
  vsMeleePercent: 113,
  vsFortificationsPercent: 0,
  vsGiantPercent: 0,
  vsEpicMonster: 0,
  troop: 'monster',
  category: 'ranged',
  race: 'elemental',
  group: 'monster',
  level: 'M3'
}
export const battleBoar: MonsterUnit = {
  tipo: 'monster',
  name: 'battleBoar',
  BASEHP: 11700,
  BASESTR: 3900,
  LEADERSHIP: 0,
  AUTHORITY: 0,
  DOMINANCE: 6,
  INITIATIVE: 10,
  vsRangedPercent: 113,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 144,
  vsFlyingPercent: 0,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsGiantPercent: 0,
  vsEpicMonster: 0,
  troop: 'monster',
  race: 'beast',
  group: 'monster',
  category: 'mounted',
  level: 'M3'
}
export const emeraldDragon: MonsterUnit = {
  tipo: 'monster',
  name: 'emeraldDragon',
  BASEHP: 13500,
  BASESTR: 4500,
  LEADERSHIP: 0,
  AUTHORITY: 0,
  DOMINANCE: 7,
  INITIATIVE: 10,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 185,
  vsGiantPercent: 72,
  vsEpicMonster: 0,
  vsFlyingPercent: 0,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  troop: 'monster',
  race: 'dragon',
  group: 'monster',
  category: 'flying',
  level: 'M3'
}
export const stoneGargole: MonsterUnit = {
  tipo: 'monster',
  name: 'stoneGargole',
  BASEHP: 15600,
  BASESTR: 5200,
  LEADERSHIP: 0,
  AUTHORITY: 0,
  DOMINANCE: 8,
  INITIATIVE: 10,
  vsRangedPercent: 0,
  vsSiegePercent: 0,
  vsBeastPercent: 72,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsGiantPercent: 0,
  vsEpicMonster: 0,
  vsFlyingPercent: 0,
  vsMeleePercent: 185,
  vsFortificationsPercent: 0,
  troop: 'monster',
  race: 'giant',
  group: 'monster',
  category: 'flying',
  level: 'M3'
}
