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
    clasification: '',
    name: '',
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
    troop: '',
    category: '',
    race: '',
    group: '',
    level: '',
    ...props
  } as T
}

const riderBuilder = (
  id: string,
  name: string,
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
const RiderG1 = riderBuilder('RiderG1', 'RiderG1', 300, 100, 65, 54, 'G1')
const RiderG2 = riderBuilder('RiderG2', 'RiderG2', 540, 180, 98, 81, 'G2')
const RiderG3 = riderBuilder('RiderG3', 'RiderG3', 960, 320, 146, 122, 'G3')
const RiderG4 = riderBuilder('RiderG4', 'RiderG4', 1740, 580, 219, 182, 'G4')
const RiderG5 = riderBuilder('RiderG5', 'RiderG5', 3150, 1050, 329, 273, 'G5')

//--------------------------------
const swordmanBuilder = (
  id: string,
  name: string,
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
const SwordmanS1 = swordmanBuilder('SwordmanS1', 'SwordmanS1', 150, 50, 40, 105, 20, 'S1')
const SwordmanS2 = swordmanBuilder('SwordmanS2', 'SwordmanS2', 270, 90, 60, 105, 29, 'S2')
const SwordmanS3 = swordmanBuilder('SwordmanS3', 'SwordmanS3', 480, 160, 90, 105, 44, 'S3')
const SwordmanS4 = swordmanBuilder('SwordmanS4', 'SwordmanS4', 870, 290, 135, 105, 66, 'S4')
const SwordmanS5 = swordmanBuilder('SwordmanS5', 'SwordmanS5', 1560, 520, 203, 105, 99, 'S5')

//----------------------------

const spyBuilder = (id: string, name: string, BASEHP: number, BASESTR: number, level: string) => {
  return unitBuilder<SpecialistUnit>({
    id,
    clasification: 'army',
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

const SpyS1 = spyBuilder('SpyS1', 'SpyS1', 75, 25, 'S1')
const SpyS2 = spyBuilder('SpyS2', 'SpyS2', 135, 45, 'S2')
const SpyS3 = spyBuilder('SpyS3', 'SpyS3', 240, 80, 'S3')
const SpyS4 = spyBuilder('SpyS4', 'SpyS4', 450, 150, 'S4')
const SpyS5 = spyBuilder('SpyS5', 'SpyS5', 780, 260, 'S5')

//----------------------------------
const deadshotV = unitBuilder<SpecialistUnit>({
  id: 'deadshotsV',
  clasification: 'army',
  name: 'deadshotsV',
  BASEHP: 1560,
  BASESTR: 520,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsMeleePercent: 132,
  vsFlyingPercent: 170,
  troop: 'este cre q no sirve',
  category: 'ranged',
  race: 'human',
  group: 'specialist',
  level: 'V'
})
const deadshotVI = unitBuilder<SpecialistUnit>({
  id: 'deadshotsVI',
  clasification: 'army',
  name: 'deadshotsVI',
  BASEHP: 2820,
  BASESTR: 940,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsMeleePercent: 197,
  vsFlyingPercent: 254,
  troop: 'este cre q no sirve',
  category: 'ranged',
  race: 'human',
  group: 'specialist',
  level: 'VI'
})
const deadshotVII = unitBuilder<SpecialistUnit>({
  id: 'deadshotsVII',
  clasification: 'army',
  name: 'deadshotsVII',
  BASEHP: 5100,
  BASESTR: 1700,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsMeleePercent: 296,
  vsFlyingPercent: 382,
  troop: 'este cre q no sirve',
  category: 'ranged',
  race: 'human',
  group: 'specialist',
  level: 'VII'
})
const lionRiderV = unitBuilder<SpecialistUnit>({
  id: 'lionRiderV',
  clasification: 'army',
  name: 'lionRiderV',
  BASEHP: 3150,
  BASESTR: 1050,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsRangedPercent: 165,
  vsSiegePercent: 137,
  troop: 'rider este cre q no sirve',
  category: 'mounted',
  race: 'human',
  group: 'specialist',
  level: 'V'
})
const lionRiderVI = unitBuilder<SpecialistUnit>({
  id: 'lionRiderVI',
  clasification: 'army',
  name: 'lionRiderVI',
  BASEHP: 5700,
  BASESTR: 1900,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsRangedPercent: 247,
  vsSiegePercent: 205,
  troop: 'rider este cre q no sirve',
  category: 'mounted',
  race: 'human',
  group: 'specialist',
  level: 'VI'
})
const lionRiderVII = unitBuilder<SpecialistUnit>({
  id: 'lionRiderVII',
  clasification: 'army',
  name: 'lionRiderVII',
  BASEHP: 10200,
  BASESTR: 3400,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsRangedPercent: 370,
  vsSiegePercent: 308,
  troop: 'rider este cre q no sirve',
  category: 'mounted',
  race: 'human',
  group: 'specialist',
  level: 'VII'
})
const vulturesV = unitBuilder<SpecialistUnit>({
  id: 'vulturesV',
  clasification: 'army',
  name: 'vulturesV',
  BASEHP: 1560,
  BASESTR: 520,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsMountedPercent: 197,
  vsFortificationsPercent: 104,
  troop: 'flying este cre q no sirve',
  category: 'flying',
  race: 'human',
  group: 'specialist',
  level: 'V'
})
const vulturesVI = unitBuilder<SpecialistUnit>({
  id: 'vulturesVI',
  clasification: 'army',
  name: 'vulturesVI',
  BASEHP: 2820,
  BASESTR: 940,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsMountedPercent: 296,
  vsFortificationsPercent: 156,
  troop: 'flying este cre q no sirve',
  category: 'flying',
  race: 'human',
  group: 'specialist',
  level: 'VI'
})
const vulturesVII = unitBuilder<SpecialistUnit>({
  id: 'vulturesVII',
  clasification: 'army',
  name: 'vulturesVII',
  BASEHP: 5100,
  BASESTR: 1700,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsMountedPercent: 444,
  vsFortificationsPercent: 234,
  troop: 'flying este cre q no sirve',
  category: 'flying',
  race: 'human',
  group: 'specialist',
  level: 'VII'
})
const heavyKnightVI = unitBuilder<SpecialistUnit>({
  id: 'heavyKnightVI',
  clasification: 'army',
  name: 'heavyKnightVI',
  BASEHP: 2820,
  BASESTR: 940,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsMountedPercent: 148,
  vsBeastPercent: 304,
  troop: 'swordsman este cre q no sirve',
  category: 'melee',
  race: 'human',
  group: 'specialist',
  level: 'VI'
})
const heavyKnightVII = unitBuilder<SpecialistUnit>({
  id: 'heavyKnightVII',
  clasification: 'army',
  name: 'heavyKnightVII',
  BASEHP: 5100,
  BASESTR: 1700,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsMountedPercent: 222,
  vsBeastPercent: 456,
  troop: 'swordsman este cre q no sirve',
  category: 'melee',
  race: 'human',
  group: 'specialist',
  level: 'VII'
})
const swiftJaegerVI = unitBuilder<SpecialistUnit>({
  id: 'swiftJaegerVI',
  clasification: 'army',
  name: 'swiftJaegerVI',
  BASEHP: 1410,
  BASESTR: 470,
  LEADERSHIP: 5,
  INITIATIVE: 10,
  troop: 'spy este cre q no sirve',
  category: 'scout',
  race: 'human',
  group: 'specialist',
  level: 'VI'
})
const swiftJaegerVII = unitBuilder<SpecialistUnit>({
  id: 'swiftJaegerVII',
  clasification: 'army',
  name: 'swiftJaegerVII',
  BASEHP: 2550,
  BASESTR: 850,
  LEADERSHIP: 5,
  INITIATIVE: 10,
  troop: 'spy este cre q no sirve',
  category: 'scout',
  race: 'human',
  group: 'specialist',
  level: 'VII'
})
const legitimistI = unitBuilder<SpecialistUnit>({
  id: 'legitimistI',
  clasification: 'army',
  name: 'legitimistI',
  BASEHP: 9180,
  BASESTR: 3060,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMeleePercent: 444,
  vsFlyingPercent: 572,
  troop: 'este cre q no sirve',
  category: 'ranged',
  race: 'human',
  group: 'specialist',
  level: 'I'
})
const legitimistII = unitBuilder<SpecialistUnit>({
  id: 'legitimistII',
  clasification: 'army',
  name: 'legitimistII',
  BASEHP: 16530,
  BASESTR: 5510,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMeleePercent: 667,
  vsFlyingPercent: 859,
  troop: 'este cre q no sirve',
  category: 'ranged',
  race: 'human',
  group: 'specialist',
  level: 'II'
})
const duelistI = unitBuilder<SpecialistUnit>({
  id: 'duelistI',
  clasification: 'army',
  name: 'duelistI',
  BASEHP: 9180,
  BASESTR: 3060,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMountedPercent: 333,
  vsBeastPercent: 680,
  troop: 'swordsman este cre q no sirve',
  category: 'melee',
  race: 'human',
  group: 'specialist',
  level: 'I'
})
const duelistII = unitBuilder<SpecialistUnit>({
  id: 'duelistII',
  clasification: 'army',
  name: 'duelistII',
  BASEHP: 16530,
  BASESTR: 5510,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMountedPercent: 500,
  vsBeastPercent: 1025,
  troop: 'swordsman este cre q no sirve',
  category: 'melee',
  race: 'human',
  group: 'specialist',
  level: 'II'
})
const whitemaneI = unitBuilder<SpecialistUnit>({
  id: 'whitemaneI',
  clasification: 'army',
  name: 'whitemaneI',
  BASEHP: 18360,
  BASESTR: 6120,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsRangedPercent: 555,
  vsSiegePercent: 461,
  troop: 'rider este cre q no sirve',
  category: 'mounted',
  race: 'human',
  group: 'specialist',
  level: 'I'
})
const whitemaneII = unitBuilder<SpecialistUnit>({
  id: 'whitemaneII',
  clasification: 'army',
  name: 'whitemaneII',
  BASEHP: 33060,
  BASESTR: 11020,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsRangedPercent: 833,
  vsSiegePercent: 692,
  troop: 'rider este cre q no sirve',
  category: 'mounted',
  race: 'human',
  group: 'specialist',
  level: 'II'
})
const royalLionI = unitBuilder<SpecialistUnit>({
  id: 'royalLionI',
  clasification: 'army',
  name: 'royalLionI',
  BASEHP: 183600,
  BASESTR: 61200,
  LEADERSHIP: 20,
  INITIATIVE: 10,
  vsMountedPercent: 667,
  vsFortificationsPercent: 350,
  troop: 'flying este cre q no sirve',
  category: 'flying',
  race: 'human',
  group: 'specialist',
  level: 'I'
})
const royalLionII = unitBuilder<SpecialistUnit>({
  id: 'royalLionII',
  clasification: 'army',
  name: 'royalLionII',
  BASEHP: 330600,
  BASESTR: 110200,
  LEADERSHIP: 20,
  INITIATIVE: 10,
  vsMountedPercent: 1000,
  vsFortificationsPercent: 525,
  troop: 'flying este cre q no sirve',
  category: 'flying',
  race: 'human',
  group: 'specialist',
  level: 'II'
})
const panopticI = unitBuilder<SpecialistUnit>({
  id: 'panopticI',
  clasification: 'army',
  name: 'panopticI',
  BASEHP: 4590,
  BASESTR: 1530,
  LEADERSHIP: 5,
  INITIATIVE: 10,
  troop: 'spy este cre q no sirve',
  category: 'scout',
  race: 'human',
  group: 'specialist',
  level: 'I'
})
const panopticII = unitBuilder<SpecialistUnit>({
  id: 'panopticII',
  clasification: 'army',
  name: 'panopticII',
  BASEHP: 8280,
  BASESTR: 2760,
  LEADERSHIP: 5,
  INITIATIVE: 10,
  troop: 'spy este cre q no sirve',
  category: 'scout',
  race: 'human',
  group: 'specialist',
  level: 'II'
})
//----------------------------------
const spearmanBuilder = (
  id: string,
  name: string,
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

const SpearmanG1 = spearmanBuilder('SpearmanG1', 'SpearmanG1', 150, 50, 80, 39, 'G1')
const SpearmanG2 = spearmanBuilder('SpearmanG2', 'SpearmanG2', 270, 90, 120, 59, 'G2')
const SpearmanG3 = spearmanBuilder('SpearmanG3', 'SpearmanG3', 480, 160, 180, 88, 'G3')
const SpearmanG4 = spearmanBuilder('SpearmanG4', 'SpearmanG4', 870, 290, 270, 132, 'G4')
const SpearmanG5 = spearmanBuilder('SpearmanG5', 'SpearmanG5', 1560, 520, 405, 197, 'G5')

//----------------------------------
const archerBuilder = (
  id: string,
  name: string,
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
const ArcherG1 = archerBuilder('ArcherG1', 'ArcherG1', 150, 50, 67, 52, 'G1')
const ArcherG2 = archerBuilder('ArcherG2', 'ArcherG2', 270, 90, 101, 78, 'G2')
const ArcherG3 = archerBuilder('ArcherG3', 'ArcherG3', 480, 160, 151, 117, 'G3')
const ArcherG4 = archerBuilder('ArcherG4', 'ArcherG4', 870, 290, 226, 176, 'G4')
const ArcherG5 = archerBuilder('ArcherG5', 'ArcherG5', 1560, 520, 339, 263, 'G5')

const battleGriffinV = unitBuilder<GuardsmanUnit>({
  id: 'battleGriffinV',
  clasification: 'army',
  name: 'battleGriffinV',
  BASEHP: 30000,
  BASESTR: 10000,
  LEADERSHIP: 20,
  DOMINANCE: 0,
  INITIATIVE: 10,
  vsMountedPercent: 395,
  vsFortificationsPercent: 208,
  troop: 'monster',
  category: 'flying',
  group: 'guardsman',
  race: 'human',
  level: 'V'
})
const battleGriffinVI = unitBuilder<GuardsmanUnit>({
  id: 'battleGriffinVI',
  clasification: 'army',
  name: 'battleGriffinVI',
  BASEHP: 57000,
  BASESTR: 19000,
  LEADERSHIP: 20,
  DOMINANCE: 0,
  INITIATIVE: 10,
  vsMountedPercent: 592,
  vsFortificationsPercent: 311,
  troop: 'monster',
  category: 'flying',
  group: 'guardsman',
  race: 'human',
  level: 'VI'
})
const battleGriffinVII = unitBuilder<GuardsmanUnit>({
  id: 'battleGriffinVII',
  clasification: 'army',
  name: 'battleGriffinVII',
  BASEHP: 102000,
  BASESTR: 34000,
  LEADERSHIP: 20,
  DOMINANCE: 0,
  INITIATIVE: 10,
  vsMountedPercent: 888,
  vsFortificationsPercent: 467,
  troop: 'monster',
  category: 'flying',
  group: 'guardsman',
  race: 'human',
  level: 'VII'
})

const heavyArbalesterVI = unitBuilder<GuardsmanUnit>({
  id: 'heavyArbalesterVI',
  clasification: 'army',
  name: 'heavyArbalesterVI',
  BASEHP: 2820,
  BASESTR: 940,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMeleePercent: 395,
  vsFlyingPercent: 509,
  troop: 'archer',
  category: 'ranged',
  group: 'human',
  race: 'guardsman',
  level: 'VI'
})
const heavyArbalesterVII = unitBuilder<GuardsmanUnit>({
  id: 'heavyArbalesterVII',
  clasification: 'army',
  name: 'heavyArbalesterVII',
  BASEHP: 5100,
  BASESTR: 1700,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMeleePercent: 592,
  vsFlyingPercent: 763,
  troop: 'archer',
  category: 'ranged',
  group: 'human',
  race: 'guardsman',
  level: 'VII'
})
const heavyHalberdierVI = unitBuilder<GuardsmanUnit>({
  id: 'heavyHalberdierVI',
  clasification: 'army',
  name: 'heavyHalberdierVI',
  BASESTR: 940,
  BASEHP: 2820,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMountedPercent: 296,
  vsBeastPercent: 608,
  troop: 'spearman',
  category: 'melee',
  race: 'human',
  group: 'guardsman',
  level: 'VI'
})
const heavyHalberdierVII = unitBuilder<GuardsmanUnit>({
  id: 'heavyHalberdierVII',
  clasification: 'army',
  name: 'heavyHalberdierVII',
  BASESTR: 1700,
  BASEHP: 5100,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMountedPercent: 444,
  vsBeastPercent: 911,
  troop: 'spearman',
  category: 'melee',
  race: 'human',
  group: 'guardsman',
  level: 'VII'
})
const mountedKnightVI = unitBuilder<GuardsmanUnit>({
  id: 'mountedKnightVI',
  clasification: 'army',
  name: 'mountedKnightVI',
  BASESTR: 1900,
  BASEHP: 5700,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsRangedPercent: 494,
  vsSiegePercent: 410,
  troop: 'rider',
  category: 'mounted',
  race: 'human',
  group: 'guardsman',
  level: 'VI'
})
const mountedKnightVII = unitBuilder<GuardsmanUnit>({
  id: 'mountedKnightVII',
  clasification: 'army',
  name: 'mountedKnightVII',
  BASESTR: 3400,
  BASEHP: 10200,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsRangedPercent: 740,
  vsSiegePercent: 615,
  troop: 'rider',
  category: 'mounted',
  race: 'human',
  group: 'guardsman',
  level: 'VII'
})
const purifierI = unitBuilder<GuardsmanUnit>({
  id: 'purifierI',
  clasification: 'army',
  name: 'purifierI',
  BASEHP: 3060,
  BASESTR: 9180,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMeleePercent: 888,
  vsFlyingPercent: 1145,
  troop: 'archer',
  category: 'ranged',
  group: 'human',
  race: 'guardsman',
  level: 'I'
})
const purifierII = unitBuilder<GuardsmanUnit>({
  id: 'purifierII',
  clasification: 'army',
  name: 'purifierII',
  BASEHP: 5510,
  BASESTR: 16530,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMeleePercent: 1333,
  vsFlyingPercent: 1717,
  troop: 'archer',
  category: 'ranged',
  group: 'human',
  race: 'guardsman',
  level: 'II'
})
const punisherI = unitBuilder<GuardsmanUnit>({
  id: 'punisherI',
  clasification: 'army',
  name: 'punisherI',
  BASESTR: 3060,
  BASEHP: 9180,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMountedPercent: 667,
  vsBeastPercent: 1367,
  troop: 'spearman',
  category: 'melee',
  race: 'human',
  group: 'guardsman',
  level: 'I'
})
const punisherII = unitBuilder<GuardsmanUnit>({
  id: 'punisherII',
  clasification: 'army',
  name: 'punisherII',
  BASESTR: 5510,
  BASEHP: 16530,
  LEADERSHIP: 1,
  INITIATIVE: 10,
  vsMountedPercent: 1000,
  vsBeastPercent: 2050,
  troop: 'spearman',
  category: 'melee',
  race: 'human',
  group: 'guardsman',
  level: 'II'
})
const smiterI = unitBuilder<GuardsmanUnit>({
  id: 'smiterI',
  clasification: 'army',
  name: 'smiterI',
  BASESTR: 6120,
  BASEHP: 18360,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsRangedPercent: 1111,
  vsSiegePercent: 923,
  troop: 'rider',
  category: 'mounted',
  race: 'human',
  group: 'guardsman',
  level: 'VI'
})
const smiterII = unitBuilder<GuardsmanUnit>({
  id: 'smiterII',
  clasification: 'army',
  name: 'smiterII',
  BASESTR: 11020,
  BASEHP: 33060,
  LEADERSHIP: 2,
  INITIATIVE: 10,
  vsRangedPercent: 1667,
  vsSiegePercent: 1384,
  troop: 'rider',
  category: 'mounted',
  race: 'human',
  group: 'guardsman',
  level: 'VI'
})
const coraxI = unitBuilder<GuardsmanUnit>({
  id: 'coraxI',
  clasification: 'army',
  name: 'coraxI',
  BASEHP: 183600,
  BASESTR: 61200,
  LEADERSHIP: 20,
  INITIATIVE: 10,
  vsMountedPercent: 1333,
  vsFortificationsPercent: 701,
  troop: 'flying',
  category: 'flying',
  group: 'human',
  race: 'guardsman',
  level: 'I'
})
const coraxII = unitBuilder<GuardsmanUnit>({
  id: 'coraxII',
  clasification: 'army',
  name: 'coraxII',
  BASEHP: 330600,
  BASESTR: 110200,
  LEADERSHIP: 20,
  INITIATIVE: 10,
  vsMountedPercent: 1999,
  vsFortificationsPercent: 1051,
  troop: 'flying',
  category: 'flying',
  group: 'human',
  race: 'guardsman',
  level: 'II'
})
//----------------------------------
const catapultBuilder = (
  id: string,
  name: string,
  BASEHP: number,
  BASESTR: number,
  vsFortificationsPercent: number,
  level: string
): EngineerUnit => {
  return unitBuilder<EngineerUnit>({
    id,
    clasification: 'army',
    name,
    BASEHP,
    BASESTR,
    LEADERSHIP: 10,
    INITIATIVE: 10,
    multiplier: 20,
    vsFortificationsPercent,
    troop: 'catapult',
    category: 'siege',
    race: 'human',
    group: 'engineer',
    level
  })
}

const CatapultE1 = catapultBuilder('CatapultE1', 'CatapultE1', 1500, 250, 65, 'E1')
const CatapultE2 = catapultBuilder('CatapultE2', 'CatapultE2', 2700, 450, 98, 'E2')
const CatapultE3 = catapultBuilder('CatapultE3', 'CatapultE3', 4860, 810, 146, 'E3')
const CatapultE4 = catapultBuilder('CatapultE4', 'CatapultE4', 8750, 1460, 219, 'E4')
const CatapultE5 = catapultBuilder('CatapultE5', 'CatapultE5', 15800, 2630, 329, 'E5')
const CatapultE6 = catapultBuilder('CatapultE6', 'CatapultE6', 28400, 4730, 494, 'E6')
const CatapultE7 = catapultBuilder('CatapultE7', 'CatapultE7', 51000, 8500, 740, 'E7')
const CatapultE8 = catapultBuilder('CatapultE8', 'CatapultE8', 91800, 15310, 1111, 'E8')
const CatapultE9 = catapultBuilder('CatapultE9', 'CatapultE9', 165300, 27550, 1667, 'E9')

//------------------------

//------------------------------------
const waterElementalIII = unitBuilder<MonsterUnit>({
  id: 'waterElemental',
  clasification: 'monster',
  name: 'waterElementalIII', //'waterElemental',
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
const icePhoenixIV = unitBuilder<MonsterUnit>({
  id: 'icePhoenix',
  clasification: 'monster',
  name: 'icePhoenixIV', //'iceFenix',
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
const flamingCentaurV = unitBuilder<MonsterUnit>({
  id: 'flamingCentaurV',
  clasification: 'monster',
  name: 'flamingCentaurV', //'burningCentaurus',
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
const rubiGolemVI = unitBuilder<MonsterUnit>({
  id: 'rubiGolemVI',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'rubiGolemVI', //'rubiGolem',
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
const windLordVII = unitBuilder<MonsterUnit>({
  id: 'windLordVII',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'windLordVII', //'windLord',
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
const firePhoenixI = unitBuilder<MonsterUnit>({
  id: 'firePhoenixI',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'firePhoenixI', //'firePhoenixI',
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
const firePhoenixII = unitBuilder<MonsterUnit>({
  id: 'firePhoenixII',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'firePhoenixII', //'firePhoenixII',
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
const battleBoarIII = unitBuilder<MonsterUnit>({
  id: 'battleBoar',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'battleBoarIII', //'battleBoar',
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
const gorgonMedusaIV = unitBuilder<MonsterUnit>({
  id: 'gorgonMedusa',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'gorgonMedusaIV', //'gorgonMedusa',
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
const fearsomeManticoraV = unitBuilder<MonsterUnit>({
  id: 'fearsomeManticoraV',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'fearsomeManticoraV', //'fearManticora',
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
const jungleDestroyerVI = unitBuilder<MonsterUnit>({
  id: 'jungleDestroyerVI',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'jungleDestroyerVI', //'forestDestructor',
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
const ancientTerrorVII = unitBuilder<MonsterUnit>({
  id: 'ancientTerrorVII',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'ancientTerrorVII', //'oldTerror',
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
const tricksterI = unitBuilder<MonsterUnit>({
  id: 'tricksterI',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'tricksterI', //'tricksterI',
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
const tricksterII = unitBuilder<MonsterUnit>({
  id: 'tricksterII',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'tricksterII', //'tricksterII',
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
const emeraldDragonIII = unitBuilder<MonsterUnit>({
  id: 'emeraldDragon',
  clasification: 'monster',
  name: 'emeraldDragonIII', //'emeraldDragon',
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
const magicDragonIV = unitBuilder<MonsterUnit>({
  id: 'magicDragon',
  clasification: 'monster',
  name: 'magicDragonIV', //'magicDragon',
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
const desertConquerV = unitBuilder<MonsterUnit>({
  id: 'desertConquer',
  clasification: 'monster',
  name: 'desertConquerV', //'desertConquer',
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

const crystalDragonVI = unitBuilder<MonsterUnit>({
  id: 'crystalDragon',
  clasification: 'monster',
  name: 'crystalDragonVI', //'crystalDragon',
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
const blackDragonVII = unitBuilder<MonsterUnit>({
  id: 'blackDragonVII',
  clasification: 'monster',
  name: 'blackDragonVII', //'blackDragon',
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
const devastatorI = unitBuilder<MonsterUnit>({
  id: 'devastatorI',
  clasification: 'monster',
  name: 'devastatorI', //'devastatorI',
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
const devastatorII = unitBuilder<MonsterUnit>({
  id: 'devastatorII',
  clasification: 'monster',
  name: 'devastatorII', //'devastatorII',
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

const stoneGargoyleIII = unitBuilder<MonsterUnit>({
  id: 'stoneGargoyleIII',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'stoneGargoyleIII', //'stoneGargole',
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
const manyArmedGuardianIV = unitBuilder<MonsterUnit>({
  id: 'manyArmedGuardianIV',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'manyArmedGuardianIV', //'multiArmGuardianIV',
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
const EttinV = unitBuilder<MonsterUnit>({
  id: 'Ettin',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'EttinV', //'Ettin',
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
const trollRiderVI = unitBuilder<MonsterUnit>({
  id: 'trollRiderVI',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'trollRiderVI', //'trollRider',
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
const destructiveColossusVII = unitBuilder<MonsterUnit>({
  id: 'destructiveColossusVII',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'destructiveColossusVII', //'destructiveColossusVII',
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
const krakenI = unitBuilder<MonsterUnit>({
  id: 'krakenI',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'krakenI', //'krakenI',
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
const krakenII = unitBuilder<MonsterUnit>({
  id: 'krakenII',
  clasification: 'monster',
  troop: 'monster',
  race: 'monster',
  name: 'krakenII', //'krakenII',
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

// mercenaries

//---------------------------
const scorpionRiderV: MercUnit = unitBuilder<MercUnit>({
  id: 'scorpionRiderV',
  clasification: 'merc',
  name: 'scorpionRiderV',
  BASEHP: 111000,
  BASESTR: 37000,
  AUTHORITY: 71,
  INITIATIVE: 10,
  vsRangedPercent: 40,
  vsSiegePercent: 0,
  vsEpicPercent: 0,
  troop: 'merc',
  category: 'mounted',
  race: 'barbarian',
  group: '',
  level: 'V'
})

const cyclopsV: MercUnit = unitBuilder<MercUnit>({
  id: 'cyclopsV',
  clasification: 'merc',
  name: 'cyclopsV',
  BASEHP: 135000,
  BASESTR: 45000,
  AUTHORITY: 85,
  INITIATIVE: 10,
  vsFortificationsPercent: 100,
  vsBeastPercent: 40,
  vsMeleePercent: 45,
  troop: 'merc',
  category: 'ranged',
  race: 'barbarian',
  group: 'giant',
  level: 'V'
})

const gargoyleV: MercUnit = unitBuilder<MercUnit>({
  id: 'gargoyleV',
  clasification: 'merc',
  name: 'gargoyleV',
  BASEHP: 57000,
  BASESTR: 19000,
  AUTHORITY: 37,
  INITIATIVE: 10,
  vsMountedPercent: 70,
  vsElementalPercent: 45,
  troop: 'merc',
  category: 'flying',
  race: 'beast',
  group: 'undead',
  level: 'V'
})

const bearV: MercUnit = unitBuilder<MercUnit>({
  id: 'bearV',
  clasification: 'merc',
  name: 'bearV',
  BASEHP: 66000,
  BASESTR: 22000,
  AUTHORITY: 41,
  INITIATIVE: 10,
  vsMountedPercent: 70,
  vsElementalPercent: 50,
  troop: 'merc',
  category: 'melee',
  race: 'beast',
  group: 'elf',
  level: 'V'
})

const ifritV: MercUnit = unitBuilder<MercUnit>({
  id: 'ifritV',
  clasification: 'merc',
  name: 'ifritV',
  BASEHP: 132000,
  BASESTR: 44000,
  AUTHORITY: 83,
  INITIATIVE: 10,
  vsMeleePercent: 70,
  vsDragonPercent: 40,
  troop: 'merc',
  category: 'flying',
  race: 'demon',
  group: 'elemental',
  level: 'V'
})

const giantZombieV: MercUnit = unitBuilder<MercUnit>({
  id: 'giantZombieV',
  clasification: 'merc',
  name: 'giantZombieV',
  BASEHP: 99000,
  BASESTR: 33000,
  AUTHORITY: 63,
  INITIATIVE: 10,
  vsMountedPercent: 70,
  vsBeastPercent: 45,
  troop: 'merc',
  category: 'melee',
  race: 'giant',
  group: 'cursed',
  level: 'V'
})

const firewormRiderV: MercUnit = unitBuilder<MercUnit>({
  id: 'firewormRiderV',
  clasification: 'merc',
  name: 'firewormRiderV',
  BASEHP: 150000,
  BASESTR: 50000,
  AUTHORITY: 96,
  INITIATIVE: 10,
  vsRangedPercent: 55,
  troop: 'merc',
  category: 'mounted',
  race: 'demon',
  group: '',
  level: 'V'
})

const unicornRiderV: MercUnit = unitBuilder<MercUnit>({
  id: 'unicornRiderV',
  clasification: 'merc',
  name: 'unicornRiderV',
  BASEHP: 81000,
  BASESTR: 27000,
  AUTHORITY: 96,
  INITIATIVE: 10,
  vsRangedPercent: 65,
  troop: 'merc',
  category: 'mounted',
  race: 'elf',
  group: '',
  level: 'V'
})

const bullRiderV: MercUnit = unitBuilder<MercUnit>({
  id: 'bullRiderV',
  clasification: 'merc',
  name: 'bullRiderV',
  BASEHP: 87000,
  BASESTR: 29000,
  AUTHORITY: 56,
  INITIATIVE: 10,
  vsRangedPercent: 55,
  troop: 'merc',
  category: 'mounted',
  race: 'cursed',
  group: '',
  level: 'V'
})
//------------------------------------
const epicMonsterHunterVI: MercUnit = unitBuilder<MercUnit>({
  id: 'epicMonsterHunterVI',
  clasification: 'merc',
  name: 'epicMonsterHunterVI',
  BASEHP: 6090,
  BASESTR: 2030,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsRangedPercent: 329,
  vsSiegePercent: 273,
  vsEpicPercent: 609,
  troop: 'merc',
  category: 'epic',
  race: 'human',
  group: 'guardsman',
  level: 'VI'
})

const chariotVI: MercUnit = unitBuilder<MercUnit>({
  id: 'chariotVI',
  clasification: 'merc',
  name: 'chariotVI',
  BASEHP: 11400,
  BASESTR: 3800,
  AUTHORITY: 71,
  INITIATIVE: 10,
  vsRangedPercent: 493,
  vsSiegePercent: 410,
  troop: 'merc',
  category: 'mounted',
  race: 'barbarian',
  group: '',
  level: 'VI'
})

const legionaryVI: MercUnit = unitBuilder<MercUnit>({
  id: 'legionaryVI',
  clasification: 'merc',
  name: 'legionaryVI',
  BASEHP: 5700,
  BASESTR: 1900,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsMountedPercent: 295,
  vsBeastPercent: 608,
  troop: 'merc',
  category: 'melee',
  race: 'human',
  group: 'guardsman',
  level: 'VI'
})

const arbalesterVI: MercUnit = unitBuilder<MercUnit>({
  id: 'arbalesterVI',
  clasification: 'merc',
  name: 'arbalesterVI',
  BASEHP: 5700,
  BASESTR: 1900,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsFlyingPercent: 509,
  vsMeleePercent: 394,
  troop: 'merc',
  category: 'ranged',
  race: 'human',
  group: 'guardsman',
  level: 'VI'
})

const sphynxVI: MercUnit = unitBuilder<MercUnit>({
  id: 'sphynxVI',
  clasification: 'merc',
  name: 'sphynxVI',
  BASEHP: 56700,
  BASESTR: 18900,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsFortificationsPercent: 311,
  vsMountedPercent: 592,
  troop: 'merc',
  category: 'flying',
  race: 'beast',
  group: 'guardsman',
  level: 'VI'
})

const knightVI: MercUnit = unitBuilder<MercUnit>({
  id: 'knightVI',
  clasification: 'merc',
  name: 'knightVI',
  BASEHP: 5700,
  BASESTR: 1900,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsBeastPercent: 304,
  vsHumanPercent: 105,
  vsMountedPercent: 148,
  troop: 'merc',
  category: 'melee',
  race: 'human',
  group: 'specialist',
  level: 'VI'
})
const trailseekerVI: MercUnit = unitBuilder<MercUnit>({
  id: 'trailseekerVI',
  clasification: 'merc',
  name: 'trailseekerVI',
  BASEHP: 5670,
  BASESTR: 1890,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsFlyingPercent: 254,
  vsHumanPercent: 105,
  vsMeleePercent: 198,
  troop: 'merc',
  category: 'ranged',
  race: 'human',
  group: 'specialist',
  level: 'VI'
})
const rhinoRiderVI: MercUnit = unitBuilder<MercUnit>({
  id: 'rhinoRiderVI',
  clasification: 'merc',
  name: 'rhinoRiderVI',
  BASEHP: 11340,
  BASESTR: 3780,
  AUTHORITY: 2,
  INITIATIVE: 10,
  vsHumanPercent: 105,
  vsRangedPercent: 247,
  vsSiegePercent: 205,
  troop: 'merc',
  category: 'mounted',
  race: 'human',
  group: 'specialist',
  level: 'VI'
})

const deathChariotVI: MercUnit = unitBuilder<MercUnit>({
  id: 'deathChariotVI',
  clasification: 'merc',
  name: 'deathChariotVI',
  BASEHP: 171000,
  BASESTR: 57000,
  AUTHORITY: 30,
  INITIATIVE: 10,
  vsRangedPercent: 60,
  troop: 'merc',
  category: 'mounted',
  race: 'undead',
  group: '',
  level: 'VI'
})
const sheduVI: MercUnit = unitBuilder<MercUnit>({
  id: 'sheduVI',
  clasification: 'merc',
  name: 'sheduVI',
  BASEHP: 56700,
  BASESTR: 18900,
  AUTHORITY: 10,
  INITIATIVE: 10,
  vsFortificationsPercent: 156,
  vsHumanPercent: 105,
  vsMountedPercent: 296,
  troop: 'merc',
  category: 'flying',
  race: 'beast',
  group: 'guardsman',
  level: 'VI'
})

const entVI: MercUnit = unitBuilder<MercUnit>({
  id: 'entVI',
  clasification: 'merc',
  name: 'entVI',
  BASEHP: 219000,
  BASESTR: 73000,
  AUTHORITY: 39,
  INITIATIVE: 10,
  vsDragonPercent: 45,
  vsRangedPercent: 55,
  troop: 'merc',
  category: 'melee',
  race: 'elf',
  group: '',
  level: 'VI'
})
const abominationVI: MercUnit = unitBuilder<MercUnit>({
  id: 'abominationVI',
  clasification: 'merc',
  name: 'abominationVI',
  BASEHP: 390000,
  BASESTR: 130000,
  AUTHORITY: 68,
  INITIATIVE: 10,
  vsElementalPercent: 50,
  vsRangedPercent: 60,
  troop: 'merc',
  category: 'melee',
  race: 'beast',
  group: '',
  level: 'VI'
})
const boneGolemVI: MercUnit = unitBuilder<MercUnit>({
  id: 'boneGolemVI',
  clasification: 'merc',
  name: 'boneGolemVI',
  BASEHP: 210000,
  BASESTR: 70000,
  AUTHORITY: 37,
  INITIATIVE: 10,
  vsDragonPercent: 40,
  troop: 'merc',
  category: 'melee',
  race: 'undead',
  group: '',
  level: 'VI'
})

const archidemonVI: MercUnit = unitBuilder<MercUnit>({
  id: 'archidemonVI',
  clasification: 'merc',
  name: 'archidemonVI',
  BASEHP: 540000,
  BASESTR: 180000,
  AUTHORITY: 95,
  INITIATIVE: 10,
  vsBeastPercent: 40,
  vsMountedPercent: 60,
  troop: 'merc',
  category: 'melee',
  race: 'giant',
  group: 'demon',
  level: 'VI'
})

const lightningLordVII: MercUnit = unitBuilder<MercUnit>({
  id: 'lightningLordVII',
  clasification: 'merc',
  name: 'lightningLordVII',
  BASEHP: 460000,
  BASESTR: 153000,
  AUTHORITY: 45,
  INITIATIVE: 10,
  vsBeastPercent: 729,
  vsMeleePercent: 570,
  troop: 'merc',
  category: 'ranged',
  race: 'giant',
  group: '',
  level: 'VII'
})

const cursedDragonVII: MercUnit = unitBuilder<MercUnit>({
  id: 'cursedDragonVII',
  clasification: 'merc',
  name: 'cursedDragonVII',
  BASEHP: 960000,
  BASESTR: 320000,
  AUTHORITY: 93,
  INITIATIVE: 10,
  vsGiantPercent: 50,
  vsMountedPercent: 50,
  troop: 'merc',
  category: 'flying',
  race: 'dragon',
  group: 'cursed',
  level: 'VII'
})

const seaLordVII: MercUnit = unitBuilder<MercUnit>({
  id: 'seaLordVII',
  clasification: 'merc',
  name: 'seaLordVII',
  BASEHP: 420000,
  BASESTR: 140000,
  AUTHORITY: 40,
  INITIATIVE: 10,
  vsDragonPercent: 547,
  vsRangedPercent: 752,
  troop: 'merc',
  category: 'mounted',
  race: 'elemental',
  group: '',
  level: 'VII'
})

const sandwormVII: MercUnit = unitBuilder<MercUnit>({
  id: 'sandwormVII',
  clasification: 'merc',
  name: 'sandwormVII',
  BASEHP: 1290000,
  BASESTR: 430000,
  AUTHORITY: 128,
  INITIATIVE: 10,
  vsDragonPercent: 50,
  vsMountedPercent: 75,
  troop: 'merc',
  category: 'melee',
  race: 'elemental',
  group: 'barbarian',
  level: 'VII'
})

const lifeDragonVII: MercUnit = unitBuilder<MercUnit>({
  id: 'lifeDragonVII',
  clasification: 'merc',
  name: 'lifeDragonVII',
  BASEHP: 720000,
  BASESTR: 240000,
  AUTHORITY: 70,
  INITIATIVE: 10,
  vsGiantPercent: 50,
  vsMountedPercent: 60,
  troop: 'merc',
  category: 'flying',
  race: 'dragon',
  group: 'elf',
  level: 'VII'
})

const goldenDragonVII: MercUnit = unitBuilder<MercUnit>({
  id: 'goldenDragonVII',
  clasification: 'merc',
  name: 'goldenDragonVII',
  BASEHP: 510000,
  BASESTR: 170000,
  AUTHORITY: 50,
  INITIATIVE: 10,
  vsGiantPercent: 365,
  vsMountedPercent: 934,
  troop: 'merc',
  category: 'flying',
  race: 'dragon',
  group: '',
  level: 'VII'
})
const overlordVII: MercUnit = unitBuilder<MercUnit>({
  id: 'overlordVII',
  clasification: 'merc',
  name: 'overlordVII',
  BASEHP: 600000,
  BASESTR: 200000,
  AUTHORITY: 60,
  INITIATIVE: 10,
  vsBeastPercent: 50,
  vsMeleePercent: 60,
  troop: 'merc',
  category: 'ranged',
  race: 'giant',
  group: 'undead',
  level: 'VII'
})

const fireLordVII: MercUnit = unitBuilder<MercUnit>({
  id: 'fireLordVII',
  clasification: 'merc',
  name: 'fireLordVII',
  BASEHP: 1680000,
  BASESTR: 560000,
  AUTHORITY: 164,
  INITIATIVE: 10,
  vsDragonPercent: 45,
  vsMeleePercent: 80,
  troop: 'merc',
  category: 'ranged',
  race: 'elemental',
  group: 'demon',
  level: 'VII'
})
const jungleKingVII: MercUnit = unitBuilder<MercUnit>({
  id: 'jungleKingVII',
  clasification: 'merc',
  name: 'jungleKingVII',
  BASEHP: 330000,
  BASESTR: 110000,
  AUTHORITY: 33,
  INITIATIVE: 10,
  vsElementalPercent: 911,
  vsMountedPercent: 387,
  troop: 'merc',
  category: 'melee',
  race: 'beast',
  group: '',
  level: 'VII'
})

const wyvernII: MercUnit = unitBuilder<MercUnit>({
  id: 'wyvernII',
  clasification: 'merc',
  name: 'wyvernII',
  BASEHP: 2070000,
  BASESTR: 690000,
  AUTHORITY: 63,
  INITIATIVE: 10,
  vsMeleePercent: 75,
  troop: 'merc',
  category: 'flying',
  race: 'cursed',
  group: '',
  level: 'II'
})

const arielII: MercUnit = unitBuilder<MercUnit>({
  id: 'arielII',
  clasification: 'merc',
  name: 'arielII',
  BASEHP: 330000,
  BASESTR: 55000,
  AUTHORITY: 10,
  INITIATIVE: 10,
  multiplier: 20,
  vsFortificationsPercent: 1667,
  troop: 'merc',
  category: 'asedio',
  race: 'human',
  group: '',
  level: 'II'
})

const jagoII: MercUnit = unitBuilder<MercUnit>({
  id: 'jagoII',
  clasification: 'merc',
  name: 'jagoII',
  BASEHP: 660000,
  BASESTR: 220000,
  AUTHORITY: 20,
  INITIATIVE: 10,
  vsMountedPercent: 1000,
  vsFortificationsPercent: 525,
  troop: 'merc',
  category: 'flying',
  race: 'beast',
  group: '',
  level: 'II'
})

const eternalCannoneerII: MercUnit = unitBuilder<MercUnit>({
  id: 'eternalCannoneerII',
  clasification: 'merc',
  name: 'eternalCannoneerII',
  BASEHP: 1320000,
  BASESTR: 440000,
  AUTHORITY: 40,
  INITIATIVE: 10,
  vsFlyingPercent: 65,
  troop: 'merc',
  category: 'ranged',
  race: 'undead',
  group: '',
  level: 'II'
})
const warregalII: MercUnit = unitBuilder<MercUnit>({
  id: 'warregalII',
  clasification: 'merc',
  name: 'warregalII',
  BASEHP: 660000,
  BASESTR: 220000,
  AUTHORITY: 20,
  INITIATIVE: 10,
  vsMountedPercent: 1999,
  vsFortificationsPercent: 1051,
  troop: 'merc',
  category: 'flying',
  race: 'beast',
  group: '',
  level: 'II'
})
const epicMonsterHunterVII: MercUnit = unitBuilder<MercUnit>({
  id: 'epicMonsterHunterVII',
  clasification: 'merc',
  name: 'epicMonsterHunterVII',
  BASEHP: 11220,
  BASESTR: 3740,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsEpicPercent: 934,
  troop: 'merc',
  category: 'epic',
  race: 'human',
  group: 'guardsman',
  level: 'VII'
})
const epicMonsterHunterII: MercUnit = unitBuilder<MercUnit>({
  id: 'epicMonsterHunterII',
  clasification: 'merc',
  name: 'epicMonsterHunterII',
  BASEHP: 75000,
  BASESTR: 25000,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsEpicPercent: 1000,
  troop: 'merc',
  category: 'epic',
  race: 'human',
  group: 'guardsman',
  level: 'II'
})

const demonicSalamanderII: MercUnit = unitBuilder<MercUnit>({
  id: 'demonicSalamanderII',
  clasification: 'merc',
  name: 'demonicSalamanderII',
  BASEHP: 1230000,
  BASESTR: 410000,
  AUTHORITY: 38,
  INITIATIVE: 10,
  vsMountedPercent: 65,
  troop: 'merc',
  category: 'melee',
  race: 'demon',
  group: '',
  level: 'II'
})
const slavicWarriorII: MercUnit = unitBuilder<MercUnit>({
  id: 'slavicWarriorII',
  clasification: 'merc',
  name: 'slavicWarriorII',
  BASEHP: 33000,
  BASESTR: 11000,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsBeastPercent: 2050,
  vsMountedPercent: 1000,
  troop: 'merc',
  category: 'melee',
  race: 'human',
  group: '',
  level: 'II'
})
const pounderII: MercUnit = unitBuilder<MercUnit>({
  id: 'pounderII',
  clasification: 'merc',
  name: 'pounderII',
  BASEHP: 33000,
  BASESTR: 11000,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsMeleePercent: 667,
  vsFlyingPercent: 859,
  troop: 'merc',
  category: 'ranged',
  race: 'human',
  group: 'specialist',
  level: 'II'
})
const highlanderII: MercUnit = unitBuilder<MercUnit>({
  id: 'highlanderII',
  clasification: 'merc',
  name: 'highlanderII',
  BASEHP: 33000,
  BASESTR: 11000,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsMeleePercent: 1333,
  vsFlyingPercent: 1717,
  troop: 'merc',
  category: 'ranged',
  race: 'human',
  group: 'guardsman',
  level: 'II'
})
const wardenII: MercUnit = unitBuilder<MercUnit>({
  id: 'wardenII',
  clasification: 'merc',
  name: 'wardenII',
  BASEHP: 1410000,
  BASESTR: 470000,
  AUTHORITY: 43,
  INITIATIVE: 10,
  vsRangedPercent: 70,
  troop: 'merc',
  category: 'mounted',
  race: 'human',
  group: 'elves',
  level: 'II'
})
const galloperII: MercUnit = unitBuilder<MercUnit>({
  id: 'galloperII',
  clasification: 'merc',
  name: 'galloperII',
  BASEHP: 66000,
  BASESTR: 22000,
  AUTHORITY: 2,
  INITIATIVE: 10,
  vsRangedPercent: 833,
  vsSiegePercent: 692,
  troop: 'merc',
  category: 'mounted',
  race: 'human',
  group: 'specialist',
  level: 'II'
})
const quicksandII: MercUnit = unitBuilder<MercUnit>({
  id: 'quicksandII',
  clasification: 'merc',
  name: 'quicksandII',
  BASEHP: 66000,
  BASESTR: 22000,
  AUTHORITY: 2,
  INITIATIVE: 10,
  vsRangedPercent: 1667,
  vsSiegePercent: 1384,
  troop: 'merc',
  category: 'mounted',
  race: 'human',
  group: 'specialist',
  level: 'II'
})
const scarfaceII: MercUnit = unitBuilder<MercUnit>({
  id: 'scarfaceII',
  clasification: 'merc',
  name: 'scarfaceII',
  BASEHP: 33000,
  BASESTR: 11000,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsMountedPercent: 500,
  vsBeastPercent: 1025,
  troop: 'merc',
  category: 'melee',
  race: 'human',
  group: 'specialist',
  level: 'II'
})
/*
trebuchetVI
deathchariot
archdemon



*/
export interface Army {
  [key: string]: BasicUnit
}
export const ARMY: Army = {
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
  giantZombieV,
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
  archidemonVI,
  lightningLordVII,
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
  scarfaceII
}
