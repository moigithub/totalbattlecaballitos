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
    clasification: 'merc',
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

//---------------------------
export const scorpionRiderV: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.scorpionRiderV,
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

export const cyclopsV: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.cyclopsV,
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

export const gargoyleV: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.gargoyleV,
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

export const bearV: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.bearV,
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

export const ifritV: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.ifritV,
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

export const giantZombieV: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.giantZombieV,
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

export const firewormRiderV: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.firewormRiderV,
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

export const unicornRiderV: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.unicornRiderV,
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

export const bullRiderV: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.bullRiderV,
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
export const epicMonsterHunterVI: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.epicMonsterHunterVI,
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
  clasification: 'merc',
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
  clasification: 'merc',
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
  clasification: 'merc',
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
  clasification: 'merc',
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
  clasification: 'merc',
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
  clasification: 'merc',
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
  clasification: 'merc',
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
  clasification: 'merc',
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

export const entVI: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.entVI,
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
export const abominationVI: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
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
  clasification: 'merc',
  name: ARMY.boneGolemVI,
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

export const archidemonVI: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
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
  clasification: 'merc',
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
  clasification: 'merc',
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
  clasification: 'merc',
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
  clasification: 'merc',
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
  clasification: 'merc',
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
  clasification: 'merc',
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
  clasification: 'merc',
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
  clasification: 'merc',
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
  clasification: 'merc',
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

export const wyvernII: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.wyvernII,
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

export const arielII: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.arielII,
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

export const jagoII: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.jagoII,
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

export const eternalCannoneerII: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.eternalCannoneerII,
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
export const warregalII: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.warregalII,
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
export const epicMonsterHunterVII: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.epicMonsterHunterVII,
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
export const epicMonsterHunterII: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.epicMonsterHunterII,
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

export const demonicSalamanderII: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.demonicSalamanderII,
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
export const slavicWarriorII: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.slavicWarriorII,
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
export const pounderII: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.pounderII,
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
export const highlanderII: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.highlanderII,
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
export const wardenII: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.wardenII,
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
export const galloperII: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.galloperII,
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
export const quicksandII: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.quicksandII,
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
export const scarfaceII: MercUnit = unitBuilder<MercUnit>({
  clasification: 'merc',
  name: ARMY.scarfaceII,
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
