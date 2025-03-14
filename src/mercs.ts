import { ARMY, unitBuilder } from './soldiers'
import { MercUnit } from './types'

const mercRiderBuilder = (
  name: string,
  BASEHP: number,
  BASESTR: number,
  vsRangedPercent: number,
  vsSiegePercent: number,
  level: string
): MercUnit => {
  return unitBuilder<MercUnit>({
    tipo: 'merc',
    name,
    BASEHP,
    BASESTR,
    AUTHORITY: 2,
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

//------------------------------------
export const mercEpicMonsterHunter: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.mercEpicMonsterHunter, //'mercEpicMonsterHunter',
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

export const chariotVI = mercRiderBuilder(ARMY.chariotVI, 11400, 3800, 493, 410, 'VI')

export const legionaryVI: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.legionaryVI,
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

export const arbalesterVI: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.arbalesterVI,
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

export const sphynxVI: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.sphynxVI,
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

export const knightVI: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.knightVI,
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
export const trailseekerVI: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.trailseekerVI,
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
export const rhinoRiderVI: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.rhinoRiderVI,
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

export const deathChariotVI: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.deathChariotVI,
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
export const sheduVI: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.sheduVI,
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

export const abominationVI: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.abominationVI,
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
export const boneGolemVI: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.boneGolemVI,
  BASEHP: 210000,
  BASESTR: 70000,
  AUTHORITY: 74,
  INITIATIVE: 10,
  vsDragonPercent: 40,
  troop: 'merc',
  category: 'melee',
  race: 'undead',
  group: '',
  level: 'VI'
})

export const archidemonVI: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.archidemonVI,
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

export const lightningLordVII: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.lightningLordVII,
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

export const cursedDragonVII: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.cursedDragonVII,
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

export const seaLordVII: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.seaLordVII,
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

export const sandwormVII: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.sandwormVII,
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

export const lifeDragonVII: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.lifeDragonVII,
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

export const goldenDragonVII: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.goldenDragonVII,
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
export const overlordVII: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.overlordVII,
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

export const fireLordVII: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.fireLordVII,
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
export const jungleKingVII: MercUnit = unitBuilder<MercUnit>({
  tipo: 'merc',
  name: ARMY.jungleKingVII,
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
/*
trebuchetVI
deathchariot
archdemon



*/
