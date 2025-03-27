import { ReactNode } from 'react'
import { Stack } from './citadel'

export const getTroopBadges = (stack: Stack): ReactNode => {
  const tags = []
  if (stack.troop.vsMeleePercent > 0) {
    tags.push({
      badge: 'meleebadges',
      desc: 'vs Melee',
      percent: stack.troop.vsMeleePercent,
      value: stack.amount * stack.troop.baseStr * (1 + stack.troop.vsMeleePercent / 100)
    })
  }
  if (stack.troop.vsRangedPercent > 0) {
    tags.push({
      badge: 'rangedbadges',
      desc: 'vs Ranged',
      percent: stack.troop.vsRangedPercent,
      value: stack.amount * stack.troop.baseStr * (1 + stack.troop.vsRangedPercent / 100)
    })
  }
  if (stack.troop.vsMountedPercent > 0) {
    tags.push({
      badge: 'mountbadges',
      desc: 'vs Mounted',
      percent: stack.troop.vsMountedPercent,
      value: stack.amount * stack.troop.baseStr * (1 + stack.troop.vsMountedPercent / 100)
    })
  }
  if (stack.troop.vsFlyingPercent > 0) {
    tags.push({
      badge: 'flyingbadges',
      desc: 'vs Flying',
      percent: stack.troop.vsFlyingPercent,
      value: stack.amount * stack.troop.baseStr * (1 + stack.troop.vsFlyingPercent / 100)
    })
  }

  if (stack.troop.vsDragonPercent > 0) {
    tags.push({
      badge: 'dragonbadges',
      desc: 'vs Dragon',
      percent: stack.troop.vsDragonPercent,
      value: stack.amount * stack.troop.baseStr * (1 + stack.troop.vsDragonPercent / 100)
    })
  }
  if (stack.troop.vsBeastPercent > 0) {
    tags.push({
      badge: 'beastbadges',
      desc: 'vs Beast',
      percent: stack.troop.vsBeastPercent,
      value: stack.amount * stack.troop.baseStr * (1 + stack.troop.vsBeastPercent / 100)
    })
  }
  if (stack.troop.vsGiantPercent > 0) {
    tags.push({
      badge: 'giantbadges',
      desc: 'vs Giant',
      percent: stack.troop.vsGiantPercent,
      value: stack.amount * stack.troop.baseStr * (1 + stack.troop.vsGiantPercent / 100)
    })
  }
  if (stack.troop.vsElementalPercent > 0) {
    tags.push({
      badge: 'elementalbadges',
      desc: 'vs Elemental',
      percent: stack.troop.vsElementalPercent,
      value: stack.amount * stack.troop.baseStr * (1 + stack.troop.vsElementalPercent / 100)
    })
  }
  if (stack.troop.vsFortificationsPercent > 0) {
    tags.push({
      badge: 'fortificationbadges',
      desc: 'vs Fortifications',
      percent: stack.troop.vsFortificationsPercent,
      value: stack.amount * stack.troop.baseStr * (1 + stack.troop.vsFortificationsPercent / 100)
    })
  }
  if (stack.troop.vsSiegePercent > 0) {
    tags.push({
      badge: 'siegebadges',
      desc: 'vs Siege',
      percent: stack.troop.vsSiegePercent,
      value: stack.amount * stack.troop.baseStr * (1 + stack.troop.vsSiegePercent / 100)
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
