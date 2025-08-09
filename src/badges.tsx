import { FightStack } from './citadelData'

export interface Tags {
  id: string
  badge: string
  desc: string
  percent: number
  value: number
}

export const getTroopBadges = (stack: FightStack): Tags[] => {
  const tags = []
  tags.push({
    id: stack.id,
    badge: 'noFeatBonus',
    desc: 'regular dmg',
    percent: 0,
    value: stack.unitsAmount * stack.unit.BASESTR
  })

  if (stack.unit.vsMeleePercent > 0) {
    tags.push({
      id: stack.id,
      badge: 'meleebadges',
      desc: 'vs Melee',
      percent: stack.unit.vsMeleePercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsMeleePercent / 100)
    })
  }
  if (stack.unit.vsRangedPercent > 0) {
    tags.push({
      id: stack.id,
      badge: 'rangedbadges',
      desc: 'vs Ranged',
      percent: stack.unit.vsRangedPercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsRangedPercent / 100)
    })
  }
  if (stack.unit.vsMountedPercent > 0) {
    tags.push({
      id: stack.id,
      badge: 'mountbadges',
      desc: 'vs Mounted',
      percent: stack.unit.vsMountedPercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsMountedPercent / 100)
    })
  }
  if (stack.unit.vsFlyingPercent > 0) {
    tags.push({
      id: stack.id,
      badge: 'flyingbadges',
      desc: 'vs Flying',
      percent: stack.unit.vsFlyingPercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsFlyingPercent / 100)
    })
  }

  if (stack.unit.vsDragonPercent > 0) {
    tags.push({
      id: stack.id,
      badge: 'dragonbadges',
      desc: 'vs Dragon',
      percent: stack.unit.vsDragonPercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsDragonPercent / 100)
    })
  }
  if (stack.unit.vsBeastPercent > 0) {
    tags.push({
      id: stack.id,
      badge: 'beastbadges',
      desc: 'vs Beast',
      percent: stack.unit.vsBeastPercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsBeastPercent / 100)
    })
  }
  if (stack.unit.vsGiantPercent > 0) {
    tags.push({
      id: stack.id,
      badge: 'giantbadges',
      desc: 'vs Giant',
      percent: stack.unit.vsGiantPercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsGiantPercent / 100)
    })
  }
  if (stack.unit.vsElementalPercent > 0) {
    tags.push({
      id: stack.id,
      badge: 'elementalbadges',
      desc: 'vs Elemental',
      percent: stack.unit.vsElementalPercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsElementalPercent / 100)
    })
  }
  if (stack.unit.vsFortificationsPercent > 0) {
    tags.push({
      id: stack.id,
      badge: 'fortificationbadges',
      desc: 'vs Fortifications',
      percent: stack.unit.vsFortificationsPercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsFortificationsPercent / 100)
    })
  }
  if (stack.unit.vsSiegePercent > 0) {
    tags.push({
      id: stack.id,
      badge: 'siegebadges',
      desc: 'vs Siege',
      percent: stack.unit.vsSiegePercent,
      value: stack.unitsAmount * stack.unit.BASESTR * (1 + stack.unit.vsSiegePercent / 100)
    })
  }

  return tags
}
