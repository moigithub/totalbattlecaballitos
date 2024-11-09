import { unitBuilder } from './soldiers'
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
  name: 'mercEpicMonsterHunter',
  BASEHP: 6090,
  BASESTR: 2030,
  AUTHORITY: 1,
  INITIATIVE: 10,
  vsRangedPercent: 329,
  vsSiegePercent: 273,
  vsEpicMonster: 609,
  troop: 'merc',
  category: 'epic',
  race: 'human',
  group: 'guardsman',
  level: 'VI'
})

export const mercChariot = mercRiderBuilder('mercChariot', 11400, 3800, 493, 410, 'VI')
