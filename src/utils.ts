import { EnemyUnit } from './monsters'
import { MercUnit, Unit } from './types'

export const whoCanIAttack = (unit: EnemyUnit | Unit | MercUnit): string[] => {
  const target = []

  if (unit.vsRangedPercent > 0) {
    target.push('Ranged')
  }
  if (unit.vsSiegePercent > 0) {
    target.push('Siege')
  }
  if (unit.vsHumanPercent > 0) {
    target.push('Human')
  }
  if (unit.vsMountedPercent > 0) {
    target.push('Mounted')
  }
  if (unit.vsFlyingPercent > 0) {
    target.push('Flying')
  }
  if (unit.vsMeleePercent > 0) {
    target.push('Melee')
  }
  if (unit.vsFortificationsPercent > 0) {
    target.push('Fortifications')
  }
  if (unit.vsBeastPercent > 0) {
    target.push('Beast')
  }
  if (unit.vsGiantPercent > 0) {
    target.push('Giant')
  }
  if (unit.vsElementalPercent > 0) {
    target.push('Elemental')
  }
  if (unit.vsDragonPercent > 0) {
    target.push('Dragon')
  }
  if (unit.vsEpicPercent > 0) {
    target.push('Epic')
  }

  return target
}

export const getStrWithExtraBonus = (
  unit: Unit,
  strBonus: number,
  extraPercent: number
): number => {
  const bonusSTR = (unit.BASESTR * (extraPercent + strBonus)) / 100
  const totalSTRPerUnit = unit.BASESTR + bonusSTR
  return totalSTRPerUnit
}
