import {
  BasicUnit,
  EngineerUnit,
  GuardsmanUnit,
  MercUnit,
  MonsterUnit,
  SpecialistUnit
} from './types'

// function unitBuilder<T>(arg: T): T {
//   return arg
// }
// const genericArrowFunction = <T>(arg: T): T => {
//   return arg
// }

const unitBuilder = <T>(props: Partial<BasicUnit> & Pick<BasicUnit, 'id'>): T => {
  return {
    clasification: '', // army,merc,monster (para saber si es leadership,authority,dominance)
    name: '',
    nameEs: '',
    BASEHP: 0,
    BASESTR: 0,
    LEADERSHIP: 0,
    AUTHORITY: 0,
    DOMINANCE: 0,
    INITIATIVE: 0,
    multiplier: 1,
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
    category: '',
    group: '',
    subGroup: '',
    level: '1',
    sortOrderBase: 0,
    ...props
  } as T
}

const riderBuilder = (
  id: string,
  name: string,
  nameEs: string,
  BASEHP: number,
  BASESTR: number,
  vsRangedPercent: number,
  vsSiegePercent: number,
  level: string
): GuardsmanUnit => {
  return unitBuilder<GuardsmanUnit>({
    id,
    clasification: 'army',
    name,
    nameEs,
    BASEHP,
    BASESTR,
    LEADERSHIP: 2,
    INITIATIVE: 10,
    vsRangedPercent,
    vsSiegePercent,
    category: 'mounted',
    group: 'guardsman',
    level,
    sortOrderBase: 20
  })
}
const errorUnit = riderBuilder('error', 'error', 'error', 0, 0, 0, 0, '0')
const RiderG1 = riderBuilder('RiderG1', 'RiderG1', 'RiderG1', 300, 100, 65, 54, '1')
const RiderG2 = riderBuilder('RiderG2', 'RiderG2', 'RiderG2', 540, 180, 98, 81, '2')
const RiderG3 = riderBuilder('RiderG3', 'RiderG3', 'RiderG3', 960, 320, 146, 122, '3')
const RiderG4 = riderBuilder('RiderG4', 'RiderG4', 'RiderG4', 1740, 580, 219, 182, '4')
const RiderG5 = riderBuilder('RiderG5', 'RiderG5', 'RiderG5', 3150, 1050, 329, 273, '5')

//--------------------------------
const swordmanBuilder = (
  id: string,
  name: string,
  nameEs: string,
  BASEHP: number,
  BASESTR: number,
  vsBeastPercent: number,
  vsHumanPercent: number,
  vsMountedPercent: number,
  level: string
) => {
  return unitBuilder<SpecialistUnit>({
    id,
    clasification: 'army',
    name,
    nameEs,
    BASEHP,
    BASESTR,
    LEADERSHIP: 1,
    INITIATIVE: 10,
    vsBeastPercent,
    vsHumanPercent,
    vsMountedPercent,
    category: 'melee',
    group: 'specialist',
    level,
    sortOrderBase: 10
  })
}
const SwordmanS1 = swordmanBuilder(
  'SwordmanS1',
  'SwordmanS1',
  'EspadachinS1',
  150,
  50,
  40,
  105,
  20,
  '1'
)
const SwordmanS2 = swordmanBuilder(
  'SwordmanS2',
  'SwordmanS2',
  'EspadachinS2',
  270,
  90,
  60,
  105,
  29,
  '2'
)
const SwordmanS3 = swordmanBuilder(
  'SwordmanS3',
  'SwordmanS3',
  'EspadachinS3',
  480,
  160,
  90,
  105,
  44,
  '3'
)
const SwordmanS4 = swordmanBuilder(
  'SwordmanS4',
  'SwordmanS4',
  'EspadachinS4',
  870,
  290,
  135,
  105,
  66,
  '4'
)
const SwordmanS5 = swordmanBuilder(
  'SwordmanS5',
  'SwordmanS5',
  'EspadachinS5',
  1560,
  520,
  203,
  105,
  99,
  '5'
)

//----------------------------

const spyBuilder = (
  id: string,
  name: string,
  nameEs: string,
  BASEHP: number,
  BASESTR: number,
  level: string
) => {
  return unitBuilder<SpecialistUnit>({
    id,
    clasification: 'army',
    name,
    nameEs,
    BASEHP,
    BASESTR,
    LEADERSHIP: 1,
    INITIATIVE: 10,
    category: 'scout',
    group: 'specialist',
    level,
    sortOrderBase: 20
  })
}

const SpyS1 = spyBuilder('SpyS1', 'SpyS1', 'EspiaS1', 75, 25, '1')
const SpyS2 = spyBuilder('SpyS2', 'SpyS2', 'EspiaS2', 135, 45, '2')
const SpyS3 = spyBuilder('SpyS3', 'SpyS3', 'EspiaS3', 240, 80, '3')
const SpyS4 = spyBuilder('SpyS4', 'SpyS4', 'EspiaS4', 450, 150, '4')
const SpyS5 = spyBuilder('SpyS5', 'SpyS5', 'EspiaS5', 780, 260, '5')

//----------------------------------
const deadshotV = unitBuilder<SpecialistUnit>({
  id: 'deadshotV',
  clasification: 'army',
  name: 'deadshotV',
  nameEs: 'Ballestero elite V',
  BASEHP: 1560,
  BASESTR: 520,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsMeleePercent: 132,
  vsFlyingPercent: 170,
  category: 'ranged',
  group: 'specialist',
  level: '5',
  sortOrderBase: 10
})
const deadshotVI = unitBuilder<SpecialistUnit>({
  id: 'deadshotVI',
  clasification: 'army',
  name: 'deadshotVI',
  nameEs: 'Ballestero elite VI',
  BASEHP: 2820,
  BASESTR: 940,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsMeleePercent: 197,
  vsFlyingPercent: 254,
  category: 'ranged',
  group: 'specialist',
  level: '6',
  sortOrderBase: 10
})
const deadshotVII = unitBuilder<SpecialistUnit>({
  id: 'deadshotVII',
  clasification: 'army',
  name: 'deadshotVII',
  nameEs: 'Ballestero elite VII',
  BASEHP: 5100,
  BASESTR: 1700,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsMeleePercent: 296,
  vsFlyingPercent: 382,
  category: 'ranged',
  group: 'specialist',
  level: '7',
  sortOrderBase: 10
})
const lionRiderV = unitBuilder<SpecialistUnit>({
  id: 'lionRiderV',
  clasification: 'army',
  name: 'lionRiderV',
  nameEs: 'Jinete de leon V',
  BASEHP: 3150,
  BASESTR: 1050,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsRangedPercent: 165,
  vsSiegePercent: 137,
  category: 'mounted',
  group: 'specialist',
  level: '5',
  sortOrderBase: 10
})
const lionRiderVI = unitBuilder<SpecialistUnit>({
  id: 'lionRiderVI',
  clasification: 'army',
  name: 'lionRiderVI',
  nameEs: 'Jinete de leon VI',
  BASEHP: 5700,
  BASESTR: 1900,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsRangedPercent: 247,
  vsSiegePercent: 205,
  category: 'mounted',
  group: 'specialist',
  level: '6',
  sortOrderBase: 10
})
const lionRiderVII = unitBuilder<SpecialistUnit>({
  id: 'lionRiderVII',
  clasification: 'army',
  name: 'lionRiderVII',
  nameEs: 'Jinete de leon VII',
  BASEHP: 10200,
  BASESTR: 3400,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsRangedPercent: 370,
  vsSiegePercent: 308,
  category: 'mounted',
  group: 'specialist',
  level: '7',
  sortOrderBase: 10
})
const vulturesV = unitBuilder<SpecialistUnit>({
  id: 'vulturesV',
  clasification: 'army',
  name: 'vulturesV',
  nameEs: 'BuitreV',
  BASEHP: 1560,
  BASESTR: 520,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsMountedPercent: 197,
  vsFortificationsPercent: 104,
  category: 'flying',
  group: 'specialist',
  level: '5',
  sortOrderBase: 10
})
const vulturesVI = unitBuilder<SpecialistUnit>({
  id: 'vulturesVI',
  clasification: 'army',
  name: 'vulturesVI',
  nameEs: 'BuitreVI',
  BASEHP: 2820,
  BASESTR: 940,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsMountedPercent: 296,
  vsFortificationsPercent: 156,
  category: 'flying',
  group: 'specialist',
  level: '6',
  sortOrderBase: 10
})
const vulturesVII = unitBuilder<SpecialistUnit>({
  id: 'vulturesVII',
  clasification: 'army',
  name: 'vulturesVII',
  nameEs: 'BuitreVII',
  BASEHP: 5100,
  BASESTR: 1700,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsMountedPercent: 444,
  vsFortificationsPercent: 234,
  category: 'flying',
  group: 'specialist',
  level: '7',
  sortOrderBase: 10
})
const heavyKnightVI = unitBuilder<SpecialistUnit>({
  id: 'heavyKnightVI',
  clasification: 'army',
  name: 'heavyKnightVI',
  nameEs: 'Caballero montado VI',
  BASEHP: 2820,
  BASESTR: 940,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsMountedPercent: 148,
  vsBeastPercent: 304,
  category: 'melee',
  group: 'specialist',
  level: '6',
  sortOrderBase: 10
})
const heavyKnightVII = unitBuilder<SpecialistUnit>({
  id: 'heavyKnightVII',
  clasification: 'army',
  name: 'heavyKnightVII',
  nameEs: 'Caballero montado VII',
  BASEHP: 5100,
  BASESTR: 1700,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsMountedPercent: 222,
  vsBeastPercent: 456,
  category: 'melee',
  group: 'specialist',
  level: '7',
  sortOrderBase: 10
})
const swiftJaegerVI = unitBuilder<SpecialistUnit>({
  id: 'swiftJaegerVI',
  clasification: 'army',
  name: 'swiftJaegerVI',
  nameEs: 'cazador rapido VI',
  BASEHP: 1410,
  BASESTR: 470,
  LEADERSHIP: 5,
  INITIATIVE: 10,
  category: 'scout',
  group: 'specialist',
  level: '6',
  sortOrderBase: 10
})
const swiftJaegerVII = unitBuilder<SpecialistUnit>({
  id: 'swiftJaegerVII',
  clasification: 'army',
  name: 'swiftJaegerVII',
  nameEs: 'cazador rapido VII',
  BASEHP: 2550,
  BASESTR: 850,
  LEADERSHIP: 5,
  INITIATIVE: 10,
  category: 'scout',
  group: 'specialist',
  level: '7',
  sortOrderBase: 10
})
const legitimistI = unitBuilder<SpecialistUnit>({
  id: 'legitimistI',
  clasification: 'army',
  name: 'legitimistI',
  nameEs: 'legitimista I',
  BASEHP: 9180,
  BASESTR: 3060,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMeleePercent: 444,
  vsFlyingPercent: 572,
  category: 'ranged',
  group: 'specialist',
  level: '8',
  sortOrderBase: 10
})
const legitimistII = unitBuilder<SpecialistUnit>({
  id: 'legitimistII',
  clasification: 'army',
  name: 'legitimistII',
  nameEs: 'legitimista II',
  BASEHP: 16530,
  BASESTR: 5510,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMeleePercent: 667,
  vsFlyingPercent: 859,
  category: 'ranged',
  group: 'specialist',
  level: '9',
  sortOrderBase: 10
})
const duelistI = unitBuilder<SpecialistUnit>({
  id: 'duelistI',
  clasification: 'army',
  name: 'duelistI',
  nameEs: 'duelista I',
  BASEHP: 9180,
  BASESTR: 3060,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMountedPercent: 333,
  vsBeastPercent: 680,
  category: 'melee',
  group: 'specialist',
  level: '8',
  sortOrderBase: 10
})
const duelistII = unitBuilder<SpecialistUnit>({
  id: 'duelistII',
  clasification: 'army',
  name: 'duelistII',
  nameEs: 'duelista II',
  BASEHP: 16530,
  BASESTR: 5510,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMountedPercent: 500,
  vsBeastPercent: 1025,
  category: 'melee',
  group: 'specialist',
  level: '9',
  sortOrderBase: 10
})
const whitemaneI = unitBuilder<SpecialistUnit>({
  id: 'whitemaneI',
  clasification: 'army',
  name: 'whitemaneI',
  nameEs: 'manto blanco I',
  BASEHP: 18360,
  BASESTR: 6120,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsRangedPercent: 555,
  vsSiegePercent: 461,
  category: 'mounted',
  group: 'specialist',
  level: '8',
  sortOrderBase: 10
})
const whitemaneII = unitBuilder<SpecialistUnit>({
  id: 'whitemaneII',
  clasification: 'army',
  name: 'whitemaneII',
  nameEs: 'manto blanco II',
  BASEHP: 33060,
  BASESTR: 11020,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsRangedPercent: 833,
  vsSiegePercent: 692,
  category: 'mounted',
  group: 'specialist',
  level: '9',
  sortOrderBase: 10
})
const royalLionI = unitBuilder<SpecialistUnit>({
  id: 'royalLionI',
  clasification: 'army',
  name: 'royalLionI',
  nameEs: 'leon real I',
  BASEHP: 183600,
  BASESTR: 61200,
  LEADERSHIP: 20,
  INITIATIVE: 10,
  vsMountedPercent: 667,
  vsFortificationsPercent: 350,
  category: 'flying',
  group: 'specialist',
  subGroup: 'beast',
  level: '8',
  sortOrderBase: 10
})
const royalLionII = unitBuilder<SpecialistUnit>({
  id: 'royalLionII',
  clasification: 'army',
  name: 'royalLionII',
  nameEs: 'leon real II',
  BASEHP: 330600,
  BASESTR: 110200,
  LEADERSHIP: 20,
  INITIATIVE: 10,
  vsMountedPercent: 1000,
  vsFortificationsPercent: 525,
  category: 'flying',
  group: 'specialist',
  subGroup: 'beast',
  level: '9',
  sortOrderBase: 10
})
const panopticI = unitBuilder<SpecialistUnit>({
  id: 'panopticI',
  clasification: 'army',
  name: 'panopticI',
  nameEs: 'omnividente I',
  BASEHP: 4590,
  BASESTR: 1530,
  LEADERSHIP: 5,
  INITIATIVE: 10,
  category: 'scout',
  group: 'specialist',
  level: '8',
  sortOrderBase: 10
})
const panopticII = unitBuilder<SpecialistUnit>({
  id: 'panopticII',
  clasification: 'army',
  name: 'panopticII',
  nameEs: 'omnividente II',
  BASEHP: 8280,
  BASESTR: 2760,
  LEADERSHIP: 5,
  INITIATIVE: 10,
  category: 'scout',
  group: 'specialist',
  level: '9',
  sortOrderBase: 10
})
//----------------------------------
const spearmanBuilder = (
  id: string,
  name: string,
  nameEs: string,
  BASEHP: number,
  BASESTR: number,
  vsBeastPercent: number,
  vsMountedPercent: number,
  level: string
): GuardsmanUnit => {
  return unitBuilder<GuardsmanUnit>({
    id,
    clasification: 'army',
    name,
    nameEs,
    BASEHP,
    BASESTR,
    LEADERSHIP: 1,
    INITIATIVE: 10,
    vsBeastPercent,
    vsMountedPercent,
    category: 'melee', // vs beast||mounted
    group: 'guardsman',
    level,
    sortOrderBase: 20
  })
}

const SpearmanG1 = spearmanBuilder('SpearmanG1', 'SpearmanG1', 'Lancero G1', 150, 50, 80, 39, '1')
const SpearmanG2 = spearmanBuilder('SpearmanG2', 'SpearmanG2', 'Lancero G2', 270, 90, 120, 59, '2')
const SpearmanG3 = spearmanBuilder('SpearmanG3', 'SpearmanG3', 'Lancero G3', 480, 160, 180, 88, '3')
const SpearmanG4 = spearmanBuilder(
  'SpearmanG4',
  'SpearmanG4',
  'Lancero G4',
  870,
  290,
  270,
  132,
  '4'
)
const SpearmanG5 = spearmanBuilder(
  'SpearmanG5',
  'SpearmanG5',
  'Lancero G5',
  1560,
  520,
  405,
  197,
  '5'
)

//----------------------------------
const archerBuilder = (
  id: string,
  name: string,
  nameEs: string,
  BASEHP: number,
  BASESTR: number,
  vsFlyingPercent: number,
  vsMeleePercent: number,
  level: string
): GuardsmanUnit => {
  return unitBuilder<GuardsmanUnit>({
    id,
    clasification: 'army',
    name,
    nameEs,
    BASEHP,
    BASESTR,
    LEADERSHIP: 1,
    INITIATIVE: 10,
    vsFlyingPercent,
    vsMeleePercent,
    category: 'ranged',
    group: 'guardsman',
    level,
    sortOrderBase: 20
  })
}
const ArcherG1 = archerBuilder('ArcherG1', 'ArcherG1', 'ArqueroG1', 150, 50, 67, 52, '1')
const ArcherG2 = archerBuilder('ArcherG2', 'ArcherG2', 'ArqueroG2', 270, 90, 101, 78, '2')
const ArcherG3 = archerBuilder('ArcherG3', 'ArcherG3', 'ArqueroG3', 480, 160, 151, 117, '3')
const ArcherG4 = archerBuilder('ArcherG4', 'ArcherG4', 'ArqueroG4', 870, 290, 226, 176, '4')
const ArcherG5 = archerBuilder('ArcherG5', 'ArcherG5', 'ArqueroG5', 1560, 520, 339, 263, '5')

const battleGriffinV = unitBuilder<GuardsmanUnit>({
  id: 'battleGriffinV',
  clasification: 'army',
  name: 'battleGriffinV',
  nameEs: 'grifo batalla V',
  BASEHP: 30000,
  BASESTR: 10000,
  LEADERSHIP: 20,
  DOMINANCE: 0,
  INITIATIVE: 10,
  vsMountedPercent: 395,
  vsFortificationsPercent: 208,
  category: 'flying',
  group: 'guardsman',
  subGroup: 'beast',
  level: '5',
  sortOrderBase: 20
})
const battleGriffinVI = unitBuilder<GuardsmanUnit>({
  id: 'battleGriffinVI',
  clasification: 'army',
  name: 'battleGriffinVI',
  nameEs: 'grifo batalla VI',
  BASEHP: 57000,
  BASESTR: 19000,
  LEADERSHIP: 20,
  DOMINANCE: 0,
  INITIATIVE: 10,
  vsMountedPercent: 592,
  vsFortificationsPercent: 311,
  category: 'flying',
  group: 'guardsman',
  subGroup: 'beast',
  level: '6',
  sortOrderBase: 20
})
const battleGriffinVII = unitBuilder<GuardsmanUnit>({
  id: 'battleGriffinVII',
  clasification: 'army',
  name: 'battleGriffinVII',
  nameEs: 'grifo batalla VII',
  BASEHP: 102000,
  BASESTR: 34000,
  LEADERSHIP: 20,
  DOMINANCE: 0,
  INITIATIVE: 10,
  vsMountedPercent: 888,
  vsFortificationsPercent: 467,
  category: 'flying',
  group: 'guardsman',
  subGroup: 'beast',
  level: '7',
  sortOrderBase: 20
})

const heavyArbalesterVI = unitBuilder<GuardsmanUnit>({
  id: 'heavyArbalesterVI',
  clasification: 'army',
  name: 'heavyArbalesterVI',
  nameEs: 'arbalestero pesado VI',
  BASEHP: 2820,
  BASESTR: 940,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMeleePercent: 395,
  vsFlyingPercent: 509,
  category: 'ranged',
  group: 'guardsman',
  level: '6',
  sortOrderBase: 20
})
const heavyArbalesterVII = unitBuilder<GuardsmanUnit>({
  id: 'heavyArbalesterVII',
  clasification: 'army',
  name: 'heavyArbalesterVII',
  nameEs: 'arbalestero pesado VII',
  BASEHP: 5100,
  BASESTR: 1700,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMeleePercent: 592,
  vsFlyingPercent: 763,
  category: 'ranged',
  group: 'guardsman',
  level: '7',
  sortOrderBase: 20
})
const heavyHalberdierVI = unitBuilder<GuardsmanUnit>({
  id: 'heavyHalberdierVI',
  clasification: 'army',
  name: 'heavyHalberdierVI',
  nameEs: 'alabardero pesado VI',
  BASESTR: 940,
  BASEHP: 2820,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMountedPercent: 296,
  vsBeastPercent: 608,
  category: 'melee',
  group: 'guardsman',
  level: '6',
  sortOrderBase: 20
})
const heavyHalberdierVII = unitBuilder<GuardsmanUnit>({
  id: 'heavyHalberdierVII',
  clasification: 'army',
  name: 'heavyHalberdierVII',
  nameEs: 'alabardero pesado VII',
  BASESTR: 1700,
  BASEHP: 5100,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMountedPercent: 444,
  vsBeastPercent: 911,
  category: 'melee',
  group: 'guardsman',
  level: '7',
  sortOrderBase: 20
})
const mountedKnightVI = unitBuilder<GuardsmanUnit>({
  id: 'mountedKnightVI',
  clasification: 'army',
  name: 'mountedKnightVI',
  nameEs: 'caballero montado VI',
  BASESTR: 1900,
  BASEHP: 5700,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsRangedPercent: 494,
  vsSiegePercent: 410,
  category: 'mounted',
  group: 'guardsman',
  level: '6',
  sortOrderBase: 20
})
const mountedKnightVII = unitBuilder<GuardsmanUnit>({
  id: 'mountedKnightVII',
  clasification: 'army',
  name: 'mountedKnightVII',
  nameEs: 'caballero montado VII',
  BASESTR: 3400,
  BASEHP: 10200,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsRangedPercent: 740,
  vsSiegePercent: 615,
  category: 'mounted',
  group: 'guardsman',
  level: '7',
  sortOrderBase: 20
})
const purifierI = unitBuilder<GuardsmanUnit>({
  id: 'purifierI',
  clasification: 'army',
  name: 'purifierI',
  nameEs: 'purificador I',
  BASEHP: 3060,
  BASESTR: 9180,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMeleePercent: 888,
  vsFlyingPercent: 1145,
  category: 'ranged',
  group: 'guardsman',
  level: '8',
  sortOrderBase: 20
})
const purifierII = unitBuilder<GuardsmanUnit>({
  id: 'purifierII',
  clasification: 'army',
  name: 'purifierII',
  nameEs: 'purificador II',
  BASEHP: 5510,
  BASESTR: 16530,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMeleePercent: 1333,
  vsFlyingPercent: 1717,
  category: 'ranged',
  group: 'guardsman',
  level: '9',
  sortOrderBase: 20
})
const punisherI = unitBuilder<GuardsmanUnit>({
  id: 'punisherI',
  clasification: 'army',
  name: 'punisherI',
  nameEs: 'castigador I',
  BASESTR: 3060,
  BASEHP: 9180,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMountedPercent: 667,
  vsBeastPercent: 1367,
  category: 'melee',
  group: 'guardsman',
  level: '8',
  sortOrderBase: 20
})
const punisherII = unitBuilder<GuardsmanUnit>({
  id: 'punisherII',
  clasification: 'army',
  name: 'punisherII',
  nameEs: 'castigador II',
  BASESTR: 5510,
  BASEHP: 16530,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMountedPercent: 1000,
  vsBeastPercent: 2050,
  category: 'melee',
  group: 'guardsman',
  level: '9',
  sortOrderBase: 20
})
const smiterI = unitBuilder<GuardsmanUnit>({
  id: 'smiterI',
  clasification: 'army',
  name: 'smiterI',
  nameEs: 'aplastador I',
  BASESTR: 6120,
  BASEHP: 18360,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsRangedPercent: 1111,
  vsSiegePercent: 923,
  category: 'mounted',
  group: 'guardsman',
  level: '6',
  sortOrderBase: 20
})
const smiterII = unitBuilder<GuardsmanUnit>({
  id: 'smiterII',
  clasification: 'army',
  name: 'smiterII',
  nameEs: 'aplastador II',
  BASESTR: 11020,
  BASEHP: 33060,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsRangedPercent: 1667,
  vsSiegePercent: 1384,
  category: 'mounted',
  group: 'guardsman',
  level: '6',
  sortOrderBase: 20
})
const coraxI = unitBuilder<GuardsmanUnit>({
  id: 'coraxI',
  clasification: 'army',
  name: 'coraxI',
  nameEs: 'coraxI',
  BASEHP: 183600,
  BASESTR: 61200,
  LEADERSHIP: 20,
  INITIATIVE: 10,
  vsMountedPercent: 1333,
  vsFortificationsPercent: 701,
  category: 'flying',
  group: 'guardsman',
  level: '8',
  sortOrderBase: 20
})
const coraxII = unitBuilder<GuardsmanUnit>({
  id: 'coraxII',
  clasification: 'army',
  name: 'coraxII',
  nameEs: 'coraxII',
  BASEHP: 330600,
  BASESTR: 110200,
  LEADERSHIP: 20,
  INITIATIVE: 10,
  vsMountedPercent: 1999,
  vsFortificationsPercent: 1051,
  category: 'flying',
  group: 'guardsman',
  level: '9',
  sortOrderBase: 20
})
//----------------------------------
const catapultBuilder = (
  id: string,
  name: string,
  nameEs: string,
  BASEHP: number,
  BASESTR: number,
  vsFortificationsPercent: number,
  level: string
): EngineerUnit => {
  return unitBuilder<EngineerUnit>({
    id,
    clasification: 'army',
    name,
    nameEs,
    BASEHP,
    BASESTR,
    LEADERSHIP: 10,
    INITIATIVE: 10,
    multiplier: 20,
    vsFortificationsPercent,
    category: 'siege',
    group: 'engineer',
    level,
    sortOrderBase: 20
  })
}

const CatapultE1 = catapultBuilder('CatapultE1', 'CatapultE1', 'CatapultE1', 1500, 250, 65, '1')
const CatapultE2 = catapultBuilder('CatapultE2', 'CatapultE2', 'CatapultE2', 2700, 450, 98, '2')
const CatapultE3 = catapultBuilder('CatapultE3', 'CatapultE3', 'CatapultE3', 4860, 810, 146, '3')
const CatapultE4 = catapultBuilder('CatapultE4', 'CatapultE4', 'CatapultE4', 8750, 1460, 219, '4')
const CatapultE5 = catapultBuilder('CatapultE5', 'CatapultE5', 'CatapultE5', 15800, 2630, 329, '5')
const CatapultE6 = catapultBuilder(
  'CatapultE6',
  'E6 Ballistae VI',
  'E6 Balista VI',
  28400,
  4730,
  494,
  '6'
)
const CatapultE7 = catapultBuilder(
  'CatapultE7',
  'E7 Ballistae VII',
  'E7 Balista VII',
  51000,
  8500,
  740,
  '7'
)
const CatapultE8 = catapultBuilder(
  'CatapultE8',
  'E8 Josephine I',
  'E8 Josefina I',
  91800,
  15310,
  1111,
  '8'
)
const CatapultE9 = catapultBuilder(
  'CatapultE9',
  'E9 Josephine II',
  'E9 Josefina II',
  165300,
  27550,
  1667,
  '9'
)

//------------------------

//------------------------------------
const waterElementalIII = unitBuilder<MonsterUnit>({
  id: 'waterElementalIII',
  clasification: 'monster',
  name: 'waterElementalIII', //'waterElemental',
  nameEs: 'Elemental agua III', //'waterElemental',
  BASEHP: 5700,
  BASESTR: 1900,
  DOMINANCE: 3,
  INITIATIVE: 10,
  vsMeleePercent: 113,
  vsFlyingPercent: 144,
  category: 'ranged',
  group: 'monster',
  subGroup: 'elemental',
  level: '3',
  sortOrderBase: 30
})
const icePhoenixIV = unitBuilder<MonsterUnit>({
  id: 'icePhoenixIV',
  clasification: 'monster',
  name: 'icePhoenixIV', //'iceFenix'
  nameEs: 'fenix hielo IV', //'iceFenix',
  BASESTR: 17000,
  BASEHP: 51000,
  DOMINANCE: 15,
  INITIATIVE: 10,
  vsFlyingPercent: 223,
  vsDragonPercent: 162,
  group: 'monster',
  subGroup: 'elemental',
  category: 'flying',
  level: '4',
  sortOrderBase: 30
})
const flamingCentaurV = unitBuilder<MonsterUnit>({
  id: 'flamingCentaurV',
  clasification: 'monster',
  name: 'flamingCentaurV', //'burningCentaurus'
  nameEs: 'Centauro ardiente V', //'burningCentaurus',
  BASESTR: 44000,
  BASEHP: 132000,
  DOMINANCE: 21,
  INITIATIVE: 10,
  vsBeastPercent: 162,
  vsRangedPercent: 415,
  group: 'monster',
  subGroup: 'elemental',
  category: 'mounted',
  level: '5',
  sortOrderBase: 30
})
const rubiGolemVI = unitBuilder<MonsterUnit>({
  id: 'rubiGolemVI',
  clasification: 'monster',
  name: 'rubiGolemVI', //'rubiGolem',
  nameEs: 'Golem rubi VI', //'rubiGolem',
  BASESTR: 130000,
  BASEHP: 390000,
  DOMINANCE: 35,
  INITIATIVE: 10,
  vsMeleePercent: 486,
  vsMountedPercent: 380,
  group: 'monster',
  subGroup: 'elemental',
  category: 'melee',
  level: '6',
  sortOrderBase: 30
})
const windLordVII = unitBuilder<MonsterUnit>({
  id: 'windLordVII',
  clasification: 'monster',
  name: 'windLordVII', //'windLord'
  nameEs: 'señor viento VII', //'windLord',
  BASESTR: 310000,
  BASEHP: 930000,
  DOMINANCE: 45,
  INITIATIVE: 10,
  vsDragonPercent: 911,
  vsMountedPercent: 387,
  group: 'monster',
  subGroup: 'elemental',
  category: 'melee',
  level: '7',
  sortOrderBase: 30
})
const firePhoenixI = unitBuilder<MonsterUnit>({
  id: 'firePhoenixI',
  clasification: 'monster',
  name: 'firePhoenixI', //'firePhoenixI'
  nameEs: 'fenix fuego I', //'firePhoenixI',
  BASESTR: 660000,
  BASEHP: 1980000,
  DOMINANCE: 54,
  INITIATIVE: 10,
  vsMeleePercent: 701,
  vsDragonPercent: 1247,
  group: 'monster',
  subGroup: 'elemental',
  category: 'flying',
  level: '8',
  sortOrderBase: 30
})
const firePhoenixII = unitBuilder<MonsterUnit>({
  id: 'firePhoenixII',
  clasification: 'monster',
  name: 'firePhoenixII', //'firePhoenixII'
  nameEs: 'fenix fuego II', //'firePhoenixII',
  BASESTR: 1190000,
  BASEHP: 3570000,
  DOMINANCE: 54,
  INITIATIVE: 10,
  vsMeleePercent: 1051,
  vsDragonPercent: 1871,
  group: 'monster',
  subGroup: 'elemental',
  category: 'flying',
  level: '9',
  sortOrderBase: 30
})

//-----------------------------
const battleBoarIII = unitBuilder<MonsterUnit>({
  id: 'battleBoarIII',
  clasification: 'monster',
  name: 'battleBoarIII', //'battleBoar'
  nameEs: 'jabali batalla III', //'battleBoar',
  BASESTR: 3900,
  BASEHP: 11700,
  DOMINANCE: 6,
  INITIATIVE: 10,
  vsMountedPercent: 144,
  vsRangedPercent: 113,
  group: 'monster',
  subGroup: 'beast',
  category: 'mounted',
  level: '3',
  sortOrderBase: 30
})
const gorgonMedusaIV = unitBuilder<MonsterUnit>({
  id: 'gorgonMedusaIV',
  clasification: 'monster',
  name: 'gorgonMedusaIV',
  nameEs: 'medusa gorgona IV', //'gorgonMedusa',
  BASESTR: 12000,
  BASEHP: 36000,
  DOMINANCE: 10,
  INITIATIVE: 10,
  vsMeleePercent: 277,
  vsFlyingPercent: 108,
  group: 'monster',
  subGroup: 'beast',
  category: 'ranged',
  level: '4',
  sortOrderBase: 30
})
const fearsomeManticoraV = unitBuilder<MonsterUnit>({
  id: 'fearsomeManticoraV',
  clasification: 'monster',
  name: 'fearsomeManticoraV',
  nameEs: 'Manticora temible V', //'fearManticora',
  BASESTR: 46000,
  BASEHP: 138000,
  DOMINANCE: 22,
  INITIATIVE: 10,
  vsFlyingPercent: 253,
  vsGiantPercent: 324,
  group: 'monster',
  subGroup: 'beast',
  category: 'flying',
  level: '5',
  sortOrderBase: 30
})
const jungleDestroyerVI = unitBuilder<MonsterUnit>({
  id: 'jungleDestroyerVI',
  clasification: 'monster',
  name: 'jungleDestroyerVI',
  nameEs: 'destructor selva VI', //'forestDestructor',
  BASESTR: 130000,
  BASEHP: 390000,
  DOMINANCE: 34,
  INITIATIVE: 10,
  vsDragonPercent: 243,
  vsMountedPercent: 623,
  group: 'monster',
  subGroup: 'beast',
  category: 'melee',
  level: '6',
  sortOrderBase: 30
})
const ancientTerrorVII = unitBuilder<MonsterUnit>({
  id: 'ancientTerrorVII',
  clasification: 'monster',
  name: 'ancientTerrorVII',
  nameEs: 'Terror antiguo VII', //'oldTerror',
  BASESTR: 280000,
  BASEHP: 840000,
  DOMINANCE: 41,
  INITIATIVE: 10,
  vsRangedPercent: 752,
  vsFortificationsPercent: 547,
  group: 'monster',
  subGroup: 'beast',
  category: 'mounted',
  level: '7',
  sortOrderBase: 30
})
const tricksterI = unitBuilder<MonsterUnit>({
  id: 'tricksterI',
  clasification: 'monster',
  name: 'tricksterI',
  nameEs: 'embaucador I', //'tricksterI',
  BASESTR: 640000,
  BASEHP: 1920000,
  DOMINANCE: 52,
  INITIATIVE: 10,
  vsFlyingPercent: 940,
  vsElementalPercent: 1008,
  group: 'monster',
  subGroup: 'beast',
  category: 'ranged',
  level: '8',
  sortOrderBase: 30
})
const tricksterII = unitBuilder<MonsterUnit>({
  id: 'tricksterII',
  clasification: 'monster',
  name: 'tricksterII',
  nameEs: 'embaucador II', //'tricksterII',
  BASESTR: 1150000,
  BASEHP: 3450000,
  DOMINANCE: 52,
  INITIATIVE: 10,
  vsFlyingPercent: 1410,
  vsElementalPercent: 1512,
  group: 'monster',
  subGroup: 'beast',
  category: 'ranged',
  level: '9',
  sortOrderBase: 30
})
//-----------------------------
const emeraldDragonIII = unitBuilder<MonsterUnit>({
  id: 'emeraldDragonIII',
  clasification: 'monster',
  name: 'emeraldDragonIII',
  nameEs: 'Dragon esmeralda III', //'emeraldDragon',
  BASESTR: 4500,
  BASEHP: 13500,
  DOMINANCE: 7,
  INITIATIVE: 10,
  vsGiantPercent: 72,
  vsMountedPercent: 185,
  group: 'monster',
  subGroup: 'dragon',
  category: 'flying',
  level: '3',
  sortOrderBase: 30
})
const magicDragonIV = unitBuilder<MonsterUnit>({
  id: 'magicDragonIV',
  clasification: 'monster',
  name: 'magicDragonIV',
  nameEs: 'Dragon magico IV', //'magicDragon',
  BASESTR: 15000,
  BASEHP: 45000,
  DOMINANCE: 13,
  INITIATIVE: 10,
  vsRangedPercent: 216,
  vsMeleePercent: 169,
  group: 'monster',
  subGroup: 'dragon',
  category: 'ranged',
  level: '4',
  sortOrderBase: 30
})
const desertConquerV = unitBuilder<MonsterUnit>({
  id: 'desertConquerV',
  clasification: 'monster',
  name: 'desertConquerV',
  nameEs: 'conquistador desierto V', //'desertConquer',
  BASESTR: 42000,
  BASEHP: 126000,
  DOMINANCE: 20,
  INITIATIVE: 10,
  vsElementalPercent: 324,
  vsRangedPercent: 253,
  group: 'monster',
  subGroup: 'dragon',
  category: 'mounted',
  level: '5',
  sortOrderBase: 30
})

const crystalDragonVI = unitBuilder<MonsterUnit>({
  id: 'crystalDragonVI',
  clasification: 'monster',
  name: 'crystalDragonVI',
  nameEs: 'Dragon cristal VI', //'crystalDragon',
  BASESTR: 120000,
  BASEHP: 360000,
  DOMINANCE: 33,
  INITIATIVE: 10,
  vsElementalPercent: 608,
  vsMountedPercent: 258,
  group: 'monster',
  subGroup: 'dragon',
  category: 'melee',
  level: '6',
  sortOrderBase: 30
})
const blackDragonVII = unitBuilder<MonsterUnit>({
  id: 'blackDragonVII',
  clasification: 'monster',
  name: 'blackDragonVII',
  nameEs: 'Dragon negro VII', //'blackDragon',
  BASESTR: 300000,
  BASEHP: 900000,
  DOMINANCE: 44,
  INITIATIVE: 10,
  vsBeastPercent: 729,
  vsMeleePercent: 570,
  group: 'monster',
  subGroup: 'dragon',
  category: 'flying',
  level: '7',
  sortOrderBase: 30
})
const devastatorI = unitBuilder<MonsterUnit>({
  id: 'devastatorI',
  clasification: 'monster',
  name: 'devastatorI',
  nameEs: 'devastador I', //'devastatorI',
  BASESTR: 650000,
  BASEHP: 1950000,
  DOMINANCE: 53,
  INITIATIVE: 10,
  vsRangedPercent: 1281,
  vsGiantPercent: 667,
  group: 'monster',
  subGroup: 'dragon',
  category: 'mounted',
  level: '8',
  sortOrderBase: 30
})
const devastatorII = unitBuilder<MonsterUnit>({
  id: 'devastatorII',
  clasification: 'monster',
  name: 'devastatorII', //'devastatorII',
  nameEs: 'devastador II', //'devastatorII',
  BASESTR: 1170000,
  BASEHP: 3510000,
  DOMINANCE: 53,
  INITIATIVE: 10,
  vsRangedPercent: 1922,
  vsGiantPercent: 1000,
  group: 'monster',
  subGroup: 'dragon',
  category: 'mounted',
  level: '9',
  sortOrderBase: 30
})

const stoneGargoyleIII = unitBuilder<MonsterUnit>({
  id: 'stoneGargoyleIII',
  clasification: 'monster',
  name: 'stoneGargoyleIII', //'stoneGargole',
  nameEs: 'Gargola piedra III', //'stoneGargole',
  BASESTR: 5200,
  BASEHP: 15600,
  DOMINANCE: 8,
  INITIATIVE: 10,
  vsBeastPercent: 72,
  vsMeleePercent: 185,
  group: 'monster',
  subGroup: 'giant',
  category: 'flying',
  level: '3',
  sortOrderBase: 30
})
const manyArmedGuardianIV = unitBuilder<MonsterUnit>({
  id: 'manyArmedGuardianIV',
  clasification: 'monster',
  name: 'manyArmedGuardianIV', //'multiArmGuardianIV',
  nameEs: 'Guardian multibrazos IV', //'multiArmGuardianIV',
  BASESTR: 13000,
  BASEHP: 39000,
  DOMINANCE: 11,
  INITIATIVE: 10,
  vsMountedPercent: 115,
  vsElementalPercent: 270,
  group: 'monster',
  subGroup: 'giant',
  category: 'melee',
  level: '4',
  sortOrderBase: 30
})
const EttinV = unitBuilder<MonsterUnit>({
  id: 'EttinV',
  clasification: 'monster',
  name: 'EttinV', //'Ettin',
  nameEs: 'EttinV', //'Ettin',
  BASESTR: 48000,
  BASEHP: 144000,
  DOMINANCE: 23,
  INITIATIVE: 10,
  vsFortificationsPercent: 243,
  vsMountedPercent: 334,
  group: 'monster',
  subGroup: 'giant',
  category: 'melee',
  level: '5',
  sortOrderBase: 30
})
const trollRiderVI = unitBuilder<MonsterUnit>({
  id: 'trollRiderVI',
  clasification: 'monster',
  name: 'trollRiderVI', //'trollRider',
  nameEs: 'jinete troll VI', //'trollRider',
  BASESTR: 110000,
  BASEHP: 330000,
  DOMINANCE: 30,
  INITIATIVE: 10,
  vsFortificationsPercent: 486,
  vsRangedPercent: 380,
  group: 'monster',
  subGroup: 'giant',
  category: 'mounted',
  level: '6',
  sortOrderBase: 30
})
const destructiveColossusVII = unitBuilder<MonsterUnit>({
  id: 'destructiveColossusVII',
  clasification: 'monster',
  name: 'destructiveColossusVII', //'destructiveColossusVII',
  nameEs: 'Coloso destructor VII', //'destructiveColossusVII',
  BASESTR: 290000,
  BASEHP: 870000,
  DOMINANCE: 43,
  INITIATIVE: 10,
  vsMeleePercent: 752,
  vsFlyingPercent: 547,
  group: 'monster',
  subGroup: 'giant',
  category: 'ranged',
  level: '7',
  sortOrderBase: 30
})
const krakenI = unitBuilder<MonsterUnit>({
  id: 'krakenI',
  clasification: 'monster',
  name: 'krakenI', //'krakenI',
  nameEs: 'krakenI', //'krakenI',
  BASESTR: 670000,
  BASEHP: 2010000,
  DOMINANCE: 55,
  INITIATIVE: 10,
  vsMountedPercent: 991,
  vsBeastPercent: 957,
  group: 'monster',
  subGroup: 'giant',
  category: 'melee',
  level: '8',
  sortOrderBase: 30
})
const krakenII = unitBuilder<MonsterUnit>({
  id: 'krakenII',
  clasification: 'monster',
  name: 'krakenII', //'krakenII',
  nameEs: 'krakenII', //'krakenII',
  BASESTR: 1210000,
  BASEHP: 3630000,
  DOMINANCE: 55,
  INITIATIVE: 10,
  vsMountedPercent: 1486,
  vsBeastPercent: 1435,
  group: 'monster',
  subGroup: 'giant',
  category: 'melee',
  level: '9',
  sortOrderBase: 30
})

// mercenaries

//---------------------------
const scorpionRiderV: MercUnit = unitBuilder<MercUnit>({
  id: 'scorpionRiderV',
  clasification: 'merc',
  name: 'scorpionRiderV',
  nameEs: 'jinete escorpion V',
  BASEHP: 111000,
  BASESTR: 37000,
  AUTHORITY: 36,
  INITIATIVE: 10,
  vsRangedPercent: 40,
  category: 'mounted',
  group: 'mercs',
  level: '5',
  sortOrderBase: 40
})

const cyclopsV: MercUnit = unitBuilder<MercUnit>({
  id: 'cyclopsV',
  clasification: 'merc',
  name: 'cyclopsV',
  nameEs: 'ciclope V',
  BASEHP: 135000,
  BASESTR: 45000,
  AUTHORITY: 43,
  INITIATIVE: 10,
  vsFortificationsPercent: 100,
  vsBeastPercent: 40,
  vsMeleePercent: 45,
  category: 'ranged',
  group: 'mercs',
  subGroup: 'giant',
  level: '5',
  sortOrderBase: 40
})

const gargoyleV: MercUnit = unitBuilder<MercUnit>({
  id: 'gargoyleV',
  clasification: 'merc',
  name: 'gargoyleV',
  nameEs: 'gargola V',
  BASEHP: 57000,
  BASESTR: 19000,
  AUTHORITY: 19,
  INITIATIVE: 10,
  vsMountedPercent: 70,
  vsElementalPercent: 45,
  category: 'flying',
  group: 'mercs', //'undead',
  subGroup: 'beast',
  level: '5',
  sortOrderBase: 40
})

const bearV: MercUnit = unitBuilder<MercUnit>({
  id: 'bearV',
  clasification: 'merc',
  name: 'bearV',
  nameEs: 'oso V',
  BASEHP: 66000,
  BASESTR: 22000,
  AUTHORITY: 21,
  INITIATIVE: 10,
  vsMountedPercent: 70,
  vsElementalPercent: 50,
  category: 'melee',
  subGroup: 'beast',
  group: 'mercs', //'elf',
  level: '5',
  sortOrderBase: 40
})

const ifritV: MercUnit = unitBuilder<MercUnit>({
  id: 'ifritV',
  clasification: 'merc',
  name: 'ifritV',
  nameEs: 'ifrit V',
  BASEHP: 132000,
  BASESTR: 44000,
  AUTHORITY: 42,
  INITIATIVE: 10,
  vsMeleePercent: 70,
  vsDragonPercent: 40,
  category: 'flying',
  group: 'mercs', //
  subGroup: 'elemental',
  level: '5',
  sortOrderBase: 40
})
const swiftMarksmanV: MercUnit = unitBuilder<MercUnit>({
  id: 'swiftMarksmanV',
  clasification: 'merc',
  name: 'swiftMarksman',
  nameEs: 'swiftMarksman',
  BASEHP: 3150,
  BASESTR: 1050,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsFlyingPercent: 339,
  vsMeleePercent: 263,
  category: 'ranged',
  group: 'mercs',
  subGroup: '',
  level: '5',
  sortOrderBase: 40
})
const giantZombieV: MercUnit = unitBuilder<MercUnit>({
  id: 'giantZombieV',
  clasification: 'merc',
  name: 'giantZombieV',
  nameEs: 'Zombi gigante V',
  BASEHP: 99000,
  BASESTR: 33000,
  AUTHORITY: 32,
  INITIATIVE: 10,
  vsMountedPercent: 70,
  vsBeastPercent: 45,
  category: 'melee',
  group: 'mercs', // 'cursed',
  subGroup: 'giant',
  level: '5',
  sortOrderBase: 40
})

const firewormRiderV: MercUnit = unitBuilder<MercUnit>({
  id: 'firewormRiderV',
  clasification: 'merc',
  name: 'firewormRiderV',
  nameEs: 'jinete gusano V',
  BASEHP: 150000,
  BASESTR: 50000,
  AUTHORITY: 48,
  INITIATIVE: 10,
  vsRangedPercent: 55,
  category: 'mounted',
  group: 'mercs',
  // subGroup :'',
  level: '5',
  sortOrderBase: 40
})

const unicornRiderV: MercUnit = unitBuilder<MercUnit>({
  id: 'unicornRiderV',
  clasification: 'merc',
  name: 'unicornRiderV',
  nameEs: 'jinete unicornio V',
  BASEHP: 81000,
  BASESTR: 27000,
  AUTHORITY: 26,
  INITIATIVE: 10,
  vsRangedPercent: 65,
  category: 'mounted',
  group: 'mercs', //
  level: '5',
  sortOrderBase: 40
})

const bullRiderV: MercUnit = unitBuilder<MercUnit>({
  id: 'bullRiderV',
  clasification: 'merc',
  name: 'bullRiderV',
  nameEs: 'jinete toro V',
  BASEHP: 87000,
  BASESTR: 29000,
  AUTHORITY: 28,
  INITIATIVE: 10,
  vsRangedPercent: 55,
  category: 'mounted',
  group: 'mercs', //
  level: '5',
  sortOrderBase: 40
})
//------------------------------------

const chariotVI: MercUnit = unitBuilder<MercUnit>({
  id: 'chariotVI',
  clasification: 'merc',
  name: 'chariotVI',
  nameEs: 'carruaje VI',
  BASEHP: 11400,
  BASESTR: 3800,
  AUTHORITY: 2,
  INITIATIVE: 10,
  vsRangedPercent: 493,
  vsSiegePercent: 410,
  category: 'mounted',
  group: 'mercs', //
  level: '6',
  sortOrderBase: 40
})

const legionaryVI: MercUnit = unitBuilder<MercUnit>({
  id: 'legionaryVI',
  clasification: 'merc',
  name: 'legionaryVI',
  nameEs: 'legionario VI',
  BASEHP: 5700,
  BASESTR: 1900,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsMountedPercent: 295,
  vsBeastPercent: 608,
  category: 'melee',
  group: 'mercs', //
  level: '6',
  sortOrderBase: 40
})

const arbalesterVI: MercUnit = unitBuilder<MercUnit>({
  id: 'arbalesterVI',
  clasification: 'merc',
  name: 'arbalesterVI',
  nameEs: 'arbalester VI',
  BASEHP: 5700,
  BASESTR: 1900,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsFlyingPercent: 509,
  vsMeleePercent: 394,
  category: 'ranged',
  group: 'mercs', //
  level: '6',
  sortOrderBase: 40
})

const sphynxVI: MercUnit = unitBuilder<MercUnit>({
  id: 'sphynxVI',
  clasification: 'merc',
  name: 'sphynxVI',
  nameEs: 'sphynxVI',
  BASEHP: 56700,
  BASESTR: 18900,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsFortificationsPercent: 311,
  vsMountedPercent: 592,
  category: 'flying',
  group: 'mercs', //
  level: '6',
  sortOrderBase: 40
})

const knightVI: MercUnit = unitBuilder<MercUnit>({
  id: 'knightVI',
  clasification: 'merc',
  name: 'knightVI',
  nameEs: 'caballero VI',
  BASEHP: 5700,
  BASESTR: 1900,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsBeastPercent: 304,
  vsHumanPercent: 105,
  vsMountedPercent: 148,
  category: 'melee',
  group: 'mercs', //
  level: '6',
  sortOrderBase: 40
})
const trailseekerVI: MercUnit = unitBuilder<MercUnit>({
  id: 'trailseekerVI',
  clasification: 'merc',
  name: 'trailseekerVI',
  nameEs: 'trailseekerVI',
  BASEHP: 5670,
  BASESTR: 1890,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsFlyingPercent: 254,
  vsHumanPercent: 105,
  vsMeleePercent: 198,
  category: 'ranged',
  group: 'mercs', //
  level: '6',
  sortOrderBase: 40
})
const rhinoRiderVI: MercUnit = unitBuilder<MercUnit>({
  id: 'rhinoRiderVI',
  clasification: 'merc',
  name: 'rhinoRiderVI',
  nameEs: 'jinete rinoceronte VI',
  BASEHP: 11340,
  BASESTR: 3780,
  AUTHORITY: 2,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsRangedPercent: 247,
  vsSiegePercent: 205,
  category: 'mounted',
  group: 'mercs', //
  level: '6',
  sortOrderBase: 40
})

const deathChariotVI: MercUnit = unitBuilder<MercUnit>({
  id: 'deathChariotVI',
  clasification: 'merc',
  name: 'deathChariotVI',
  nameEs: 'carruaje muerte VI',
  BASEHP: 171000,
  BASESTR: 57000,
  AUTHORITY: 30,
  INITIATIVE: 10,
  vsRangedPercent: 60,
  category: 'mounted',
  group: 'mercs', //
  level: '6',
  sortOrderBase: 40
})

const sheduVI: MercUnit = unitBuilder<MercUnit>({
  id: 'sheduVI',
  clasification: 'merc',
  name: 'sheduVI',
  nameEs: 'sheduVI',
  BASEHP: 226800,
  BASESTR: 75600,
  AUTHORITY: 40,
  INITIATIVE: 10,
  vsFortificationsPercent: 156,
  vsHumanPercent: 105,
  vsMountedPercent: 296,
  category: 'flying',
  subGroup: 'beast',
  group: 'mercs', //
  level: '6',
  sortOrderBase: 40
})

const entVI: MercUnit = unitBuilder<MercUnit>({
  id: 'entVI',
  clasification: 'merc',
  name: 'entVI',
  nameEs: 'entVI',
  BASEHP: 219000,
  BASESTR: 73000,
  AUTHORITY: 39,
  INITIATIVE: 10,
  vsDragonPercent: 45,
  vsRangedPercent: 55,
  category: 'melee',
  subGroup: 'elemental',
  group: 'mercs', //
  level: '6',
  sortOrderBase: 40
})
const abominationVI: MercUnit = unitBuilder<MercUnit>({
  id: 'abominationVI',
  clasification: 'merc',
  name: 'abominationVI',
  nameEs: 'abominacion VI',
  BASEHP: 390000,
  BASESTR: 130000,
  AUTHORITY: 68,
  INITIATIVE: 10,
  vsElementalPercent: 50,
  vsRangedPercent: 60,
  category: 'melee',
  subGroup: 'beast',
  group: 'mercs', //
  level: '6',
  sortOrderBase: 40
})
const boneGolemVI: MercUnit = unitBuilder<MercUnit>({
  id: 'boneGolemVI',
  clasification: 'merc',
  name: 'boneGolemVI',
  nameEs: 'Golem hueso VI',
  BASEHP: 210000,
  BASESTR: 70000,
  AUTHORITY: 37,
  INITIATIVE: 10,
  vsDragonPercent: 40,
  category: 'melee',
  group: 'mercs', //
  level: '6',
  sortOrderBase: 40
})

const archdemonVI: MercUnit = unitBuilder<MercUnit>({
  id: 'archdemonVI',
  clasification: 'merc',
  name: 'archdemonVI',
  nameEs: 'archdemonVI',
  BASEHP: 540000,
  BASESTR: 180000,
  AUTHORITY: 95,
  INITIATIVE: 10,
  vsBeastPercent: 40,
  vsMountedPercent: 60,
  category: 'melee',
  subGroup: 'giant',
  group: 'mercs', //'demon',
  level: '6',
  sortOrderBase: 40
})
const pathFinderVI: MercUnit = unitBuilder<MercUnit>({
  id: 'pathFinderVI',
  clasification: 'merc',
  name: 'pathFinderVI',
  nameEs: 'pathFinderVI',
  BASEHP: 2800,
  BASESTR: 940,
  AUTHORITY: 5,
  INITIATIVE: 10,
  category: 'scout',
  group: 'mercs',
  level: '6',
  sortOrderBase: 40
})

const cursedDendroidVI: MercUnit = unitBuilder<MercUnit>({
  id: 'cursedDendroidVI',
  clasification: 'merc',
  name: 'cursedDendroidVI',
  nameEs: 'dendroid maldito VI',
  BASEHP: 330000,
  BASESTR: 110000,
  AUTHORITY: 57,
  INITIATIVE: 10,
  vsDragonPercent: 50,
  vsRangedPercent: 65,
  category: 'melee',
  subGroup: 'elemental',
  group: 'mercs',
  level: '6',
  sortOrderBase: 40
})

const lightningLordVII: MercUnit = unitBuilder<MercUnit>({
  id: 'lightningLordVII',
  clasification: 'merc',
  name: 'lightningLordVII',
  nameEs: 'señor truenos VII',
  BASEHP: 460000,
  BASESTR: 153000,
  AUTHORITY: 45,
  INITIATIVE: 10,
  vsBeastPercent: 729,
  vsMeleePercent: 570,
  category: 'ranged',
  subGroup: 'giant',
  group: 'mercs', //
  level: '7',
  sortOrderBase: 40
})

const cursedDragonVII: MercUnit = unitBuilder<MercUnit>({
  id: 'cursedDragonVII',
  clasification: 'merc',
  name: 'cursedDragonVII',
  nameEs: 'Dragon maldito VII',
  BASEHP: 960000,
  BASESTR: 320000,
  AUTHORITY: 93,
  INITIATIVE: 10,
  vsGiantPercent: 50,
  vsMountedPercent: 50,
  category: 'flying',
  subGroup: 'dragon',
  group: 'mercs', //'cursed',
  level: '7',
  sortOrderBase: 40
})

const seaLordVII: MercUnit = unitBuilder<MercUnit>({
  id: 'seaLordVII',
  clasification: 'merc',
  name: 'seaLordVII',
  nameEs: 'señor mares VII',
  BASEHP: 420000,
  BASESTR: 140000,
  AUTHORITY: 40,
  INITIATIVE: 10,
  vsDragonPercent: 547,
  vsRangedPercent: 752,
  category: 'mounted',
  subGroup: 'elemental',
  group: 'mercs', //
  level: '7',
  sortOrderBase: 40
})

const sandwormVII: MercUnit = unitBuilder<MercUnit>({
  id: 'sandwormVII',
  clasification: 'merc',
  name: 'sandwormVII',
  nameEs: 'gusano arena VII',
  BASEHP: 1290000,
  BASESTR: 430000,
  AUTHORITY: 128,
  INITIATIVE: 10,
  vsDragonPercent: 50,
  vsMountedPercent: 75,
  category: 'melee',
  subGroup: 'elemental',
  group: 'mercs', //'barbarian',
  level: '7',
  sortOrderBase: 40
})

const lifeDragonVII: MercUnit = unitBuilder<MercUnit>({
  id: 'lifeDragonVII',
  clasification: 'merc',
  name: 'lifeDragonVII',
  nameEs: 'Dragon vida VII',
  BASEHP: 720000,
  BASESTR: 240000,
  AUTHORITY: 70,
  INITIATIVE: 10,
  vsGiantPercent: 50,
  vsMountedPercent: 60,
  category: 'flying',
  group: 'mercs',
  subGroup: 'dragon',
  level: '7',
  sortOrderBase: 40
})

const goldenDragonVII: MercUnit = unitBuilder<MercUnit>({
  id: 'goldenDragonVII',
  clasification: 'merc',
  name: 'goldenDragonVII',
  nameEs: 'Dragon oro VII',
  BASEHP: 510000,
  BASESTR: 170000,
  AUTHORITY: 50,
  INITIATIVE: 10,
  vsGiantPercent: 365,
  vsMountedPercent: 934,
  category: 'flying',
  subGroup: 'dragon',
  group: 'mercs', //
  level: '7',
  sortOrderBase: 40
})
const overlordVII: MercUnit = unitBuilder<MercUnit>({
  id: 'overlordVII',
  clasification: 'merc',
  name: 'overlordVII',
  nameEs: 'jefe supremo VII',
  BASEHP: 600000,
  BASESTR: 200000,
  AUTHORITY: 60,
  INITIATIVE: 10,
  vsBeastPercent: 50,
  vsMeleePercent: 60,
  category: 'ranged',
  group: 'mercs',
  subGroup: 'giant',
  level: '7',
  sortOrderBase: 40
})

const fireLordVII: MercUnit = unitBuilder<MercUnit>({
  id: 'fireLordVII',
  clasification: 'merc',
  name: 'fireLordVII',
  nameEs: 'señor fuego VII',
  BASEHP: 1680000,
  BASESTR: 560000,
  AUTHORITY: 164,
  INITIATIVE: 10,
  vsDragonPercent: 45,
  vsMeleePercent: 80,
  category: 'ranged',
  subGroup: 'elemental',
  group: 'mercs', //'demon',
  level: '7',
  sortOrderBase: 40
})
const jungleKingVII: MercUnit = unitBuilder<MercUnit>({
  id: 'jungleKingVII',
  clasification: 'merc',
  name: 'jungleKingVII',
  nameEs: 'rey selva VII',
  BASEHP: 330000,
  BASESTR: 110000,
  AUTHORITY: 33,
  INITIATIVE: 10,
  vsElementalPercent: 911,
  vsMountedPercent: 387,
  category: 'melee',
  subGroup: 'beast',
  group: 'mercs', //
  level: '7',
  sortOrderBase: 40
})

const wyvernII: MercUnit = unitBuilder<MercUnit>({
  id: 'wyvernII',
  clasification: 'merc',
  name: 'wyvernII',
  nameEs: 'wyvernII',
  BASEHP: 2070000,
  BASESTR: 690000,
  AUTHORITY: 63,
  INITIATIVE: 10,
  vsMeleePercent: 75,
  category: 'flying',
  group: 'mercs', //
  level: '9',
  sortOrderBase: 40
})
const palintoneVII: MercUnit = unitBuilder<MercUnit>({
  id: 'palintoneVII',
  clasification: 'merc',
  name: 'palintoneVII',
  nameEs: 'palintoneVII',
  BASEHP: 102000,
  BASESTR: 17000,
  AUTHORITY: 10,
  INITIATIVE: 10,
  multiplier: 20,
  vsFortificationsPercent: 740,
  category: 'siege',
  group: 'mercs', //
  level: '7',
  sortOrderBase: 40
})
const trebuchetVI: MercUnit = unitBuilder<MercUnit>({
  id: 'trebuchetVI',
  clasification: 'merc',
  name: 'trebuchetVI',
  nameEs: 'trebuchetVI',
  BASEHP: 57000,
  BASESTR: 9500,
  AUTHORITY: 10,
  INITIATIVE: 10,
  multiplier: 20,
  vsFortificationsPercent: 494,
  category: 'siege',
  group: 'mercs', //
  level: '6',
  sortOrderBase: 40
})
const scorpionV: MercUnit = unitBuilder<MercUnit>({
  id: 'scorpionV',
  clasification: 'merc',
  name: 'scorpionV',
  nameEs: 'scorpionV',
  BASEHP: 32000,
  BASESTR: 5250,
  AUTHORITY: 10,
  INITIATIVE: 10,
  multiplier: 20,
  vsFortificationsPercent: 329,
  category: 'siege',
  group: 'mercs', //
  level: '5',
  sortOrderBase: 40
})
const arielII: MercUnit = unitBuilder<MercUnit>({
  id: 'arielII',
  clasification: 'merc',
  name: 'arielII',
  nameEs: 'arielII',
  BASEHP: 330000,
  BASESTR: 55000,
  AUTHORITY: 10,
  INITIATIVE: 10,
  multiplier: 20,
  vsFortificationsPercent: 1667,
  category: 'siege',
  group: 'mercs', //
  level: '9',
  sortOrderBase: 40
})

const jagoII: MercUnit = unitBuilder<MercUnit>({
  id: 'jagoII',
  clasification: 'merc',
  name: 'jagoII',
  nameEs: 'jagoII',
  BASEHP: 660000,
  BASESTR: 220000,
  AUTHORITY: 20,
  INITIATIVE: 10,
  vsMountedPercent: 1000,
  vsFortificationsPercent: 525,
  category: 'flying',
  group: 'mercs', //
  level: '9',
  sortOrderBase: 40
})

const eternalCannoneerII: MercUnit = unitBuilder<MercUnit>({
  id: 'eternalCannoneerII',
  clasification: 'merc',
  name: 'eternalCannoneerII',
  nameEs: 'Cañonero eterno II',
  BASEHP: 1320000,
  BASESTR: 440000,
  AUTHORITY: 40,
  INITIATIVE: 10,
  vsFlyingPercent: 65,
  category: 'ranged',
  group: 'mercs', //
  level: '9',
  sortOrderBase: 40
})
const warregalII: MercUnit = unitBuilder<MercUnit>({
  id: 'warregalII',
  clasification: 'merc',
  name: 'warregalII',
  nameEs: 'indomable II',
  BASEHP: 660000,
  BASESTR: 220000,
  AUTHORITY: 20,
  INITIATIVE: 10,
  vsMountedPercent: 1999,
  vsFortificationsPercent: 1051,
  category: 'flying',
  subGroup: 'beast',
  group: 'mercs', //
  level: '9',
  sortOrderBase: 40
})

const epicMonsterHunterVI: MercUnit = unitBuilder<MercUnit>({
  id: 'epicMonsterHunterVI',
  clasification: 'merc',
  name: 'epicMonsterHunterVI',
  nameEs: 'cazador monstruos epicos VI',
  BASEHP: 6090,
  BASESTR: 2030,
  AUTHORITY: 1,
  INITIATIVE: 10,
  // vsRangedPercent: 329,
  // vsSiegePercent: 273,
  vsEpicPercent: 609,
  category: '', // //
  group: 'mercs',
  level: '6',
  sortOrderBase: 40
})

const epicMonsterHunterVII: MercUnit = unitBuilder<MercUnit>({
  id: 'epicMonsterHunterVII',
  clasification: 'merc',
  name: 'epicMonsterHunterVII',
  nameEs: 'cazador monstruos epicos VII',
  BASEHP: 11220,
  BASESTR: 3740,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsEpicPercent: 934,
  category: '', //
  group: 'mercs',
  level: '7',
  sortOrderBase: 40
})
const epicMonsterHunterII: MercUnit = unitBuilder<MercUnit>({
  id: 'epicMonsterHunterII',
  clasification: 'merc',
  name: 'epicMonsterHunterII',
  nameEs: 'cazador monstruos epicos II',
  BASEHP: 75000,
  BASESTR: 25000,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsEpicPercent: 1000,
  category: '', //
  group: 'mercs',
  level: '9',
  sortOrderBase: 40
})

const demonicSalamanderII: MercUnit = unitBuilder<MercUnit>({
  id: 'demonicSalamanderII',
  clasification: 'merc',
  name: 'demonicSalamanderII',
  nameEs: 'Salamandra demoniaca II',
  BASEHP: 1230000,
  BASESTR: 410000,
  AUTHORITY: 38,
  INITIATIVE: 10,
  vsMountedPercent: 65,
  category: 'melee',
  group: 'mercs', //
  level: '9',
  sortOrderBase: 40
})
const slavicWarriorII: MercUnit = unitBuilder<MercUnit>({
  id: 'slavicWarriorII',
  clasification: 'merc',
  name: 'slavicWarriorII',
  nameEs: 'guerrero eslavo II',
  BASEHP: 33000,
  BASESTR: 11000,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsBeastPercent: 2050,
  vsMountedPercent: 1000,
  category: 'melee',
  group: 'mercs', //
  level: '9',
  sortOrderBase: 40
})
const pounderII: MercUnit = unitBuilder<MercUnit>({
  id: 'pounderII',
  clasification: 'merc',
  name: 'pounderII',
  nameEs: 'artillero II',
  BASEHP: 33000,
  BASESTR: 11000,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsMeleePercent: 667,
  vsFlyingPercent: 859,
  category: 'ranged',
  group: 'mercs',
  level: '9',
  sortOrderBase: 40
})
const highlanderII: MercUnit = unitBuilder<MercUnit>({
  id: 'highlanderII',
  clasification: 'merc',
  name: 'highlanderII',
  nameEs: 'montañes II',
  BASEHP: 33000,
  BASESTR: 11000,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsMeleePercent: 1333,
  vsFlyingPercent: 1717,
  category: 'ranged',
  group: 'mercs',
  level: '9',
  sortOrderBase: 40
})
const wardenII: MercUnit = unitBuilder<MercUnit>({
  id: 'wardenII',
  clasification: 'merc',
  name: 'wardenII',
  nameEs: 'wardenII',
  BASEHP: 1410000,
  BASESTR: 470000,
  AUTHORITY: 43,
  INITIATIVE: 10,
  vsRangedPercent: 70,
  category: 'mounted',
  group: 'mercs', // 'elves',
  level: '9',
  sortOrderBase: 40
})
const graceII: MercUnit = unitBuilder<MercUnit>({
  id: 'graceII',
  clasification: 'merc',
  name: 'graceII',
  nameEs: 'graceII',
  BASEHP: 16530,
  BASESTR: 5510,
  AUTHORITY: 5,
  INITIATIVE: 10,
  category: 'scout',
  group: 'mercs',
  level: '9',
  sortOrderBase: 40
})
const galloperII: MercUnit = unitBuilder<MercUnit>({
  id: 'galloperII',
  clasification: 'merc',
  name: 'galloperII',
  nameEs: 'bucaneiro II',
  BASEHP: 66000,
  BASESTR: 22000,
  AUTHORITY: 2,
  INITIATIVE: 10,
  vsRangedPercent: 833,
  vsSiegePercent: 692,
  category: 'mounted',
  group: 'mercs', //
  level: '9',
  sortOrderBase: 40
})
const quicksandII: MercUnit = unitBuilder<MercUnit>({
  id: 'quicksandII',
  clasification: 'merc',
  name: 'quicksandII',
  nameEs: 'beduino II',
  BASEHP: 66000,
  BASESTR: 22000,
  AUTHORITY: 2,
  INITIATIVE: 10,
  vsRangedPercent: 1667,
  vsSiegePercent: 1384,
  category: 'mounted',
  group: 'mercs', //
  level: '9',
  sortOrderBase: 40
})
const scarfaceII: MercUnit = unitBuilder<MercUnit>({
  id: 'scarfaceII',
  clasification: 'merc',
  name: 'scarfaceII',
  nameEs: 'scarfaceII',
  BASEHP: 33000,
  BASESTR: 11000,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsMountedPercent: 500,
  vsBeastPercent: 1025,
  category: 'melee',
  group: 'mercs', // 'specialist',
  level: '9',
  sortOrderBase: 40
})
const bunnieII: MercUnit = unitBuilder<MercUnit>({
  id: 'bunnieII',
  clasification: 'merc',
  name: 'bunnieII',
  nameEs: 'cazadorMayor',
  BASEHP: 75000,
  BASESTR: 25000,
  AUTHORITY: 1,
  INITIATIVE: 10,
  // vsBeastManPercent:1000, //contra hombres bestia
  category: '',
  group: 'mercs', // 'specialist',
  level: '9',
  sortOrderBase: 40
})
export interface Army {
  [key: string]: BasicUnit
}
export const ARMY: Army = {
  errorUnit,
  RiderG1,
  RiderG2,
  RiderG3,
  RiderG4,
  RiderG5,
  SwordmanS1,
  SwordmanS2,
  SwordmanS3,
  SwordmanS4,
  SwordmanS5,
  SpyS1,
  SpyS2,
  SpyS3,
  SpyS4,
  SpyS5,
  deadshotV,
  deadshotVI,
  deadshotVII,
  lionRiderV,
  lionRiderVI,
  lionRiderVII,
  vulturesV,
  vulturesVI,
  vulturesVII,
  heavyKnightVI,
  heavyKnightVII,
  swiftJaegerVI,
  swiftJaegerVII,
  legitimistI,
  legitimistII,
  duelistI,
  duelistII,
  whitemaneI,
  whitemaneII,
  royalLionI,
  royalLionII,
  panopticI,
  panopticII,
  SpearmanG1,
  SpearmanG2,
  SpearmanG3,
  SpearmanG4,
  SpearmanG5,
  ArcherG1,
  ArcherG2,
  ArcherG3,
  ArcherG4,
  ArcherG5,
  battleGriffinV,
  battleGriffinVI,
  battleGriffinVII,
  heavyArbalesterVI,
  heavyArbalesterVII,
  heavyHalberdierVI,
  heavyHalberdierVII,
  mountedKnightVI,
  mountedKnightVII,
  purifierI,
  purifierII,
  punisherI,
  punisherII,
  smiterI,
  smiterII,
  coraxI,
  coraxII,
  CatapultE1,
  CatapultE2,
  CatapultE3,
  CatapultE4,
  CatapultE5,
  CatapultE6,
  CatapultE7,
  CatapultE8,
  CatapultE9,
  waterElementalIII,
  icePhoenixIV,
  flamingCentaurV,
  rubiGolemVI,
  windLordVII,
  firePhoenixI,
  firePhoenixII,
  battleBoarIII,
  gorgonMedusaIV,
  fearsomeManticoraV,
  jungleDestroyerVI,
  ancientTerrorVII,
  tricksterI,
  tricksterII,
  emeraldDragonIII,
  magicDragonIV,
  desertConquerV,
  crystalDragonVI,
  blackDragonVII,
  devastatorI,
  devastatorII,
  stoneGargoyleIII,
  manyArmedGuardianIV,
  EttinV,
  trollRiderVI,
  destructiveColossusVII,
  krakenI,
  krakenII,

  // mercenaries
  scorpionRiderV,
  cyclopsV,
  gargoyleV,
  bearV,
  ifritV,
  swiftMarksmanV,
  giantZombieV,
  scorpionV,
  firewormRiderV,
  unicornRiderV,
  bullRiderV,
  epicMonsterHunterVI,
  chariotVI,
  legionaryVI,
  arbalesterVI,
  sphynxVI,
  knightVI,
  trailseekerVI,
  rhinoRiderVI,
  deathChariotVI,
  sheduVI,
  entVI,
  abominationVI,
  boneGolemVI,
  archdemonVI,
  pathFinderVI,
  trebuchetVI,
  cursedDendroidVI,
  lightningLordVII,
  palintoneVII,
  cursedDragonVII,
  seaLordVII,
  sandwormVII,
  lifeDragonVII,
  goldenDragonVII,
  overlordVII,
  fireLordVII,
  jungleKingVII,
  wyvernII,
  arielII,
  jagoII,
  eternalCannoneerII,
  warregalII,
  epicMonsterHunterVII,
  epicMonsterHunterII,
  demonicSalamanderII,
  slavicWarriorII,
  pounderII,
  highlanderII,
  wardenII,
  galloperII,
  quicksandII,
  scarfaceII,
  graceII,
  bunnieII
}
