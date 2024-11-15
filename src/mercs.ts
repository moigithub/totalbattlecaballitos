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

/*
trebuchetVI
deathchariot
archdemon



*/
