import { MercUnit } from './types'

const mercRiderBuilder = (
  name: string,
  BASEHP: number,
  BASESTR: number,
  vsRangedPercent: number,
  vsSiegePercent: number,
  level: string
): MercUnit => {
  return {
    tipo: 'merc',
    name,
    BASEHP,
    BASESTR,
    LEADERSHIP: 0,
    AUTHORITY: 2,
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
    vsEpicMonster: 0,
    vsGiantPercent: 0,
    troop: 'rider',
    category: 'mounted',
    race: 'human',
    group: 'guardsman',
    level
  }
}

//------------------------------------

export const mercEpicMonsterHunter: MercUnit = {
  tipo: 'merc',
  name: 'mercEpicMonsterHunter',
  BASEHP: 6090,
  BASESTR: 2030,
  LEADERSHIP: 0,
  AUTHORITY: 1,
  DOMINANCE: 0,
  INITIATIVE: 10,
  vsRangedPercent: 329,
  vsSiegePercent: 273,
  vsBeastPercent: 0,
  vsHumanPercent: 0,
  vsMountedPercent: 0,
  vsFlyingPercent: 0,
  vsMeleePercent: 0,
  vsFortificationsPercent: 0,
  vsEpicMonster: 609,
  vsGiantPercent: 0,
  troop: 'merc',
  category: 'epic',
  race: 'human',
  group: 'guardsman',
  level: 'VI'
}
export const mercChariot = mercRiderBuilder('mercChariot', 11400, 3800, 493, 410, 'VI')
