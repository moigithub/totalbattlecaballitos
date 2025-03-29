import { ReactNode } from 'react'
import { FightStack } from './citadelData'

export const getTroopBadges = (stack: FightStack): ReactNode => {
  const tags = []
  if (stack.unit.vsMeleePercent > 0) {
    tags.push({
      badge: 'meleebadges',
      desc: 'vs Melee',
      percent: stack.unit.vsMeleePercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsMeleePercent / 100)
    })
  }
  if (stack.unit.vsRangedPercent > 0) {
    tags.push({
      badge: 'rangedbadges',
      desc: 'vs Ranged',
      percent: stack.unit.vsRangedPercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsRangedPercent / 100)
    })
  }
  if (stack.unit.vsMountedPercent > 0) {
    tags.push({
      badge: 'mountbadges',
      desc: 'vs Mounted',
      percent: stack.unit.vsMountedPercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsMountedPercent / 100)
    })
  }
  if (stack.unit.vsFlyingPercent > 0) {
    tags.push({
      badge: 'flyingbadges',
      desc: 'vs Flying',
      percent: stack.unit.vsFlyingPercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsFlyingPercent / 100)
    })
  }

  if (stack.unit.vsDragonPercent > 0) {
    tags.push({
      badge: 'dragonbadges',
      desc: 'vs Dragon',
      percent: stack.unit.vsDragonPercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsDragonPercent / 100)
    })
  }
  if (stack.unit.vsBeastPercent > 0) {
    tags.push({
      badge: 'beastbadges',
      desc: 'vs Beast',
      percent: stack.unit.vsBeastPercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsBeastPercent / 100)
    })
  }
  if (stack.unit.vsGiantPercent > 0) {
    tags.push({
      badge: 'giantbadges',
      desc: 'vs Giant',
      percent: stack.unit.vsGiantPercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsGiantPercent / 100)
    })
  }
  if (stack.unit.vsElementalPercent > 0) {
    tags.push({
      badge: 'elementalbadges',
      desc: 'vs Elemental',
      percent: stack.unit.vsElementalPercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsElementalPercent / 100)
    })
  }
  if (stack.unit.vsFortificationsPercent > 0) {
    tags.push({
      badge: 'fortificationbadges',
      desc: 'vs Fortifications',
      percent: stack.unit.vsFortificationsPercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsFortificationsPercent / 100)
    })
  }
  if (stack.unit.vsSiegePercent > 0) {
    tags.push({
      badge: 'siegebadges',
      desc: 'vs Siege',
      percent: stack.unit.vsSiegePercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsSiegePercent / 100)
    })
  }
  return tags.map((data, i) => (
    <div key={`badge+${i}`}>
      <span className={data.badge}>
        {data.desc} +{data.percent}%
      </span>{' '}
      <span>{data.value}</span>
    </div>
  ))
}
