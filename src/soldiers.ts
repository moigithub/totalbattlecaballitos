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
  // guardsmen
  RiderG1: 'RiderG1',
  RiderG2: 'RiderG2',
  RiderG3: 'RiderG3',
  RiderG4: 'RiderG4',
  RiderG5: 'RiderG5',

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

  battleGriffinV: 'battleGriffinV',
  battleGriffinVI: 'battleGriffinVI',
  battleGriffinVII: 'battleGriffinVII',
  heavyArbalesterVI: 'heavyArbalesterVI',
  heavyArbalesterVII: 'heavyArbalesterVII',

  heavyHalberdierVI: 'heavyHalberdierVI',
  heavyHalberdierVII: 'heavyHalberdierVII',

  mountedKnightVI: 'mountedKnightVI',
  mountedKnightVII: 'mountedKnightVII',

  purifierI: 'purifierI',
  purifierII: 'purifierII',

  punisherI: 'punisherI',
  punisherII: 'punisherII',

  smiterI: 'smiterI',
  smiterII: 'smiterII',

  coraxI: 'coraxI',
  coraxII: 'coraxII',

  // specialist

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
  deadshotsV: 'deadshotsV',
  deadshotsVI: 'deadshotsVI',
  deadshotsVII: 'deadshotsVII',

  lionRiderV: 'lionRiderV',
  lionRiderVI: 'lionRiderVI',
  lionRiderVII: 'lionRiderVII',

  vulturesV: 'vulturesV',
  vulturesVI: 'vulturesVI',
  vulturesVII: 'vulturesVII',

  heavyKnightVI: 'heavyKnightVI',
  heavyKnightVII: 'heavyKnightVII',

  swiftJaegerVI: 'swiftJaegerVI',
  swiftJaegerVII: 'swiftJaegerVII',

  legitimistI: 'legitimistI',
  legitimistII: 'legitimistII',

  duelistI: 'duelistI',
  duelistII: 'duelistII',

  whitemaneI: 'whitemaneI',
  whitemaneII: 'whitemaneII',

  royalLionI: 'royalLionI',
  royalLionII: 'royalLionII',

  panopticI: 'panopticI',
  panopticII: 'panopticII',

  CatapultE1: 'CatapultE1',
  CatapultE2: 'CatapultE2',
  CatapultE3: 'CatapultE3',
  CatapultE4: 'CatapultE4',
  CatapultE5: 'CatapultE5',
  CatapultE6: 'CatapultE6',
  CatapultE7: 'CatapultE7',
  //monsters
  // dragons
  emeraldDragon: 'emeraldDragonIII',
  magicDragon: 'magicDragonIV',
  desertConquer: 'desertVanquisherV',
  crystalDragon: 'crystalDragonVI',
  blackDragon: 'blackDragonVII',
  devastatorI: 'devastatorI',
  devastatorII: 'devastatorII',

  //elementals
  waterElemental: 'waterElementalIII',
  icePhoenix: 'icePhoenixIV',
  flamingCentaur: 'flamingCentaurV',
  rubiGolem: 'rubiGolemVI',
  windLord: 'windLordVII',
  firePhoenixI: 'firePhoenixI',
  firePhoenixII: 'firePhoenixII',

  //giants
  stoneGargole: 'stoneGargoyleIII',
  manyArmedGuardian: 'many-Armed GuardianIV',
  Ettin: 'EttinV',
  trollRider: 'trollRiderVI',
  destructiveColossus: 'destructiveColossusVII',
  krakenI: 'krakenI',
  krakenII: 'krakenII',

  //beasts
  battleBoar: 'battleBoarIII',
  gorgonMedusa: 'gorgonMedusaIV',
  fearsomeManticora: 'fearsomeManticoreV',
  jungleDestructor: 'jungleDestroyerVI',
  ancientTerror: 'ancientTerrorVII',
  tricksterI: 'tricksterI',
  tricksterII: 'tricksterII',

  //mercenaries
  scorpionRiderV: 'scorpionRiderV',
  cyclopsV: 'cyclopsV',
  gargoyleV: 'gargoyleV',
  bearV: 'bearV',
  ifritV: 'ifritV',
  giantZombieV: 'giantZombieV',
  firewormRiderV: 'firewormRiderV',
  bullRiderV: 'bullRiderV',
  unicornRiderV: 'unicornRiderV',
  epicMonsterHunterVI: 'epicMonsterHunterVI',
  chariotVI: 'chariotVI',
  deathChariotVI: 'deathChariotVI',
  legionaryVI: 'legionaryVI',
  arbalesterVI: 'arbalesterVI',
  sphynxVI: 'sphynxVI',
  knightVI: 'knightVI',
  trailseekerVI: 'trailseekerVI',
  rhinoRiderVI: 'rhinoRiderVI',
  sheduVI: 'sheduVI',
  boneGolemVI: 'boneGolemVI',
  abominationVI: 'abominationVI',
  archidemonVI: 'archidemonVI',
  lightningLordVII: 'lightningLordVII',
  cursedDragonVII: 'cursedDragonVII',
  seaLordVII: 'seaLordVII',
  sandwormVII: 'sandwormVII',
  lifeDragonVII: 'lifeDragonVII',
  goldenDragonVII: 'goldenDragonVII',
  overlordVII: 'overlordVII',
  fireLordVII: 'fireLordVII',
  jungleKingVII: 'jungleKingVII',
  wyvernII: 'wyvernII',
  arielII: 'arielII',
  jagoII: 'jagoII',
  warregalII: 'warregalII',
  epicMonsterHunterVII: 'epicMonsterHunterVII',
  epicMonsterHunterII: 'epicMonsterHunterII',
  demonicSalamanderII: 'demonicSalamanderII',
  eternalCannoneerII: 'eternalCannoneerII',
  slavicWarriorII: 'slavicWarriorII',
  wardenII: 'wardenII',
  highlanderII: 'highlanderII',
  galloperII: 'galloperII',
  scarfaceII: 'scarfaceII',
  quicksandII: 'quicksandII',
  pounderII: 'pounderII'
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
export const deadshotV = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.deadshotsV,
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
export const deadshotVI = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.deadshotsVI,
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
export const deadshotVII = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.deadshotsVII,
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
export const lionRiderV = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.lionRiderV,
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
export const lionRiderVI = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.lionRiderVI,
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
export const lionRiderVII = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.lionRiderVII,
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
export const vulturesV = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.vulturesV,
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
export const vulturesVI = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.vulturesVI,
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
export const vulturesVII = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.vulturesVII,
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
export const heavyKnightVI = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.heavyKnightVI,
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
export const heavyKnightVII = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.heavyKnightVII,
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
export const swiftJaegerVI = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.swiftJaegerVI,
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
export const swiftJaegerVII = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.swiftJaegerVII,
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
export const legitimistI = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.legitimistI,
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
export const legitimistII = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.legitimistII,
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
export const duelistI = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.duelistI,
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
export const duelistII = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.duelistII,
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
export const whitemaneI = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.whitemaneI,
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
export const whitemaneII = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.whitemaneII,
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
export const royalLionI = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.royalLionI,
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
export const royalLionII = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.royalLionII,
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
export const panopticI = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.panopticI,
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
export const panopticII = unitBuilder<SpecialistUnit>({
  tipo: 'army',
  name: ARMY.panopticII,
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

export const battleGriffinV = unitBuilder<GuardsmanUnit>({
  tipo: 'army',
  name: ARMY.battleGriffinV,
  BASEHP: 30000,
  BASESTR: 10000,
  LEADERSHIP: 10,
  DOMINANCE: 0,
  INITIATIVE: 10,
  vsMountedPercent: 395,
  vsFortificationsPercent: 208,
  troop: 'monster',
  category: 'flying',
  group: 'beast',
  race: 'monster',
  level: 'V'
})
export const battleGriffinVI = unitBuilder<GuardsmanUnit>({
  tipo: 'army',
  name: ARMY.battleGriffinVI,
  BASEHP: 57000,
  BASESTR: 19000,
  LEADERSHIP: 10,
  DOMINANCE: 0,
  INITIATIVE: 10,
  vsMountedPercent: 592,
  vsFortificationsPercent: 311,
  troop: 'monster',
  category: 'flying',
  group: 'beast',
  race: 'monster',
  level: 'VI'
})
export const battleGriffinVII = unitBuilder<GuardsmanUnit>({
  tipo: 'army',
  name: ARMY.battleGriffinVII,
  BASEHP: 102000,
  BASESTR: 34000,
  LEADERSHIP: 10,
  DOMINANCE: 0,
  INITIATIVE: 10,
  vsMountedPercent: 888,
  vsFortificationsPercent: 467,
  troop: 'monster',
  category: 'flying',
  group: 'beast',
  race: 'monster',
  level: 'VII'
})

export const heavyArbalesterVI = unitBuilder<GuardsmanUnit>({
  tipo: 'army',
  name: ARMY.heavyArbalesterVI,
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
export const heavyArbalesterVII = unitBuilder<GuardsmanUnit>({
  tipo: 'army',
  name: ARMY.heavyArbalesterVII,
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
export const heavyHalberdierVI = unitBuilder<GuardsmanUnit>({
  tipo: 'army',
  name: ARMY.heavyHalberdierVI,
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
export const heavyHalberdierVII = unitBuilder<GuardsmanUnit>({
  tipo: 'army',
  name: ARMY.heavyHalberdierVII,
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
export const mountedKnightVI = unitBuilder<GuardsmanUnit>({
  tipo: 'army',
  name: ARMY.mountedKnightVI,
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
export const mountedKnightVII = unitBuilder<GuardsmanUnit>({
  tipo: 'army',
  name: ARMY.mountedKnightVII,
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
export const purifierI = unitBuilder<GuardsmanUnit>({
  tipo: 'army',
  name: ARMY.purifierI,
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
export const purifierII = unitBuilder<GuardsmanUnit>({
  tipo: 'army',
  name: ARMY.purifierII,
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
export const punisherI = unitBuilder<GuardsmanUnit>({
  tipo: 'army',
  name: ARMY.punisherI,
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
export const punisherII = unitBuilder<GuardsmanUnit>({
  tipo: 'army',
  name: ARMY.punisherII,
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
export const smiterI = unitBuilder<GuardsmanUnit>({
  tipo: 'army',
  name: ARMY.smiterI,
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
export const smiterII = unitBuilder<GuardsmanUnit>({
  tipo: 'army',
  name: ARMY.smiterII,
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
export const coraxI = unitBuilder<GuardsmanUnit>({
  tipo: 'army',
  name: ARMY.coraxI,
  BASEHP: 61200,
  BASESTR: 183600,
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
export const coraxII = unitBuilder<GuardsmanUnit>({
  tipo: 'army',
  name: ARMY.coraxII,
  BASEHP: 110200,
  BASESTR: 330600,
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
export const CatapultE6 = catapultBuilder(ARMY.CatapultE6, 28400, 4730, 494, 'E6')
export const CatapultE7 = catapultBuilder(ARMY.CatapultE7, 51000, 8500, 740, 'E7')

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
  name: ARMY.icePhoenix, //'iceFenix',
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
  name: ARMY.flamingCentaur, //'burningCentaurus',
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
  name: ARMY.firePhoenixI, //'fireFenixI',
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
  name: ARMY.firePhoenixII, //'fireFenixII',
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
  name: ARMY.fearsomeManticora, //'fearManticora',
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
  name: ARMY.jungleDestructor, //'forestDestructor',
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
  name: ARMY.ancientTerror, //'oldTerror',
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
  name: ARMY.tricksterI, //'embaucatorI',
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
  name: ARMY.tricksterII, //'embaucatorII',
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
  name: ARMY.manyArmedGuardian, //'multiArmGuardian',
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
  name: ARMY.destructiveColossus, //'destroyerColossus',
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
