import { FightStack } from './citadelData'
import { Result } from './dos'
import { Stack } from './types'

export const getArmyLeadership = (army: Stack[]) => {
  const leadership = army.reduce((count, stack) => {
    return count + stack.leadership
  }, 0)
  return leadership
}

export const getArmyAuthority = (army: Stack[]) => {
  const authority = army.reduce((count, stack) => {
    return count + stack.authority
  }, 0)
  return authority
}

export const getArmyDominance = (army: Stack[]) => {
  const dominance = army.reduce((count, stack) => {
    return count + stack.dominance
  }, 0)
  return dominance
}

export const getStackStrength = (army: Stack[], index: number) => {
  // return the stack strength with bonus,
  // but without extra bonus,ie. vsMeleePercent
  const stack = army[index]
  if (!stack) return 0

  const totalSTRPerUnit =
    stack.strBonus > 0 ? stack.unit.BASESTR * (1 + stack.strBonus / 100) : stack.unit.BASESTR
  return totalSTRPerUnit * stack.unitsAmount
}

export const getStackHealth = (army: Stack[], index: number) => {
  // return the stack strength with bonus,
  // but without extra bonus,ie. vsMeleePercent
  const stack = army[index]
  if (!stack) return 0

  const totalHPPerUnit =
    stack.hpBonus > 0 ? stack.unit.BASEHP * (1 + stack.hpBonus / 100) : stack.unit.BASEHP
  return totalHPPerUnit * stack.unitsAmount
}

export const addArmyUnits = (army: Stack[], index: number, amount: number) => {
  const stack = army[index]
  const leadership = stack.unit.LEADERSHIP
  const authority = stack.unit.AUTHORITY
  const dominance = stack.unit.DOMINANCE

  const totalUnits = stack.unitsAmount + amount

  army[index] = {
    ...stack,
    unitsAmount: totalUnits,
    leadership: totalUnits * leadership,
    authority: totalUnits * authority,
    dominance: totalUnits * dominance
  }
  console.log(
    'adding units',
    stack.unit.name,
    totalUnits,

    'lead',
    totalUnits * leadership
  )
}

export const getStackDamage = (stack: FightStack) => {
  const damage = []

  if (stack.unit.vsRangedPercent > 0) {
    damage.push({
      type: 'ranged',
      damage: Math.trunc(
        stack.unitsAmount *
          stack.unit.BASESTR *
          (1 + (stack.unit?.strBonus ?? 0 + stack.unit.vsRangedPercent) / 100)
      )
    })
  }

  if (stack.unit.vsMeleePercent > 0) {
    damage.push({
      type: 'melee',
      damage: Math.trunc(
        stack.unitsAmount *
          stack.unit.BASESTR *
          (1 + (stack.unit?.strBonus ?? 0 + stack.unit.vsMeleePercent) / 100)
      )
    })
  }

  if (stack.unit.vsFlyingPercent > 0) {
    damage.push({
      type: 'flying',
      damage: Math.trunc(
        stack.unitsAmount *
          stack.unit.BASESTR *
          (1 + (stack.unit?.strBonus ?? 0 + stack.unit.vsFlyingPercent) / 100)
      )
    })
  }

  if (stack.unit.vsMountedPercent > 0) {
    damage.push({
      type: 'mounted',
      damage: Math.trunc(
        stack.unitsAmount *
          stack.unit.BASESTR *
          (1 + (stack.unit?.strBonus ?? 0 + stack.unit.vsMountedPercent) / 100)
      )
    })
  }

  if (stack.unit.vsBeastPercent > 0) {
    damage.push({
      type: 'beast',
      damage: Math.trunc(
        stack.unitsAmount *
          stack.unit.BASESTR *
          (1 + (stack.unit?.strBonus ?? 0 + stack.unit.vsBeastPercent) / 100)
      )
    })
  }
  if (stack.unit.vsGiantPercent > 0) {
    damage.push({
      type: 'giant',
      damage: Math.trunc(
        stack.unitsAmount *
          stack.unit.BASESTR *
          (1 + (stack.unit?.strBonus ?? 0 + stack.unit.vsGiantPercent) / 100)
      )
    })
  }
  if (stack.unit.vsDragonPercent > 0) {
    damage.push({
      type: 'dragon',
      damage: Math.trunc(
        stack.unitsAmount *
          stack.unit.BASESTR *
          (1 + (stack.unit?.strBonus ?? 0 + stack.unit.vsDragonPercent) / 100)
      )
    })
  }

  if (stack.unit.vsElementalPercent > 0) {
    damage.push({
      type: 'elemental',
      damage: Math.trunc(
        stack.unitsAmount *
          stack.unit.BASESTR *
          (1 + (stack.unit?.strBonus ?? 0 + stack.unit.vsElementalPercent) / 100)
      )
    })
  }
  if (stack.unit.vsSiegePercent > 0) {
    damage.push({
      type: 'siege',
      damage: Math.trunc(
        stack.unitsAmount *
          stack.unit.BASESTR *
          (1 + (stack.unit?.strBonus ?? 0 + stack.unit.vsSiegePercent) / 100)
      )
    })
  }
  if (stack.unit.vsFortificationsPercent > 0) {
    damage.push({
      type: 'fortification',
      damage: Math.trunc(
        stack.unitsAmount *
          stack.unit.BASESTR *
          (1 + (stack.unit?.strBonus ?? 0 + stack.unit.vsFortificationsPercent) / 100)
      )
    })
  }

  // sort descending
  damage.sort((a, b) => b.damage - a.damage)

  return damage
}

export const findTargetOfTypeWithHealth = (
  defender: FightStack[],
  type: string,
  damage: number
) => {
  return defender.find(stack => {
    const stackHealth = stack.unit.BASEHP * stack.unitsAmount
    // console.log('findTargetOfTypeWithHealth', type, stackHealth, '>', damage)
    return stack.unit.category.includes(type) && stackHealth >= damage
  })
}

export const findTargetWithHealth = (defender: FightStack[], damage: number) => {
  return defender.find(stack => {
    const stackHealth = stack.unit.BASEHP * stack.unitsAmount
    return stackHealth >= damage
  })
}

export const prepareArmyData = (army: Stack[]): FightStack[] => {
  return army.map(stack => {
    return {
      unit: {
        name: stack.unit.name,
        category: stack.unit.category, //'beast, melee'
        BASESTR: stack.unit.BASESTR,
        BASEHP: stack.unit.BASEHP * (1 + stack.hpBonus / 100),
        strBonus: stack.strBonus, // must include bonus
        vsRangedPercent: stack.unit.vsRangedPercent,
        vsSiegePercent: stack.unit.vsSiegePercent,
        vsBeastPercent: stack.unit.vsBeastPercent,
        vsHumanPercent: stack.unit.vsHumanPercent,
        vsMountedPercent: stack.unit.vsMountedPercent,
        vsFlyingPercent: stack.unit.vsFlyingPercent,
        vsMeleePercent: stack.unit.vsMeleePercent,
        vsFortificationsPercent: stack.unit.vsFortificationsPercent,
        vsGiantPercent: stack.unit.vsGiantPercent,
        vsEpicPercent: stack.unit.vsEpicPercent,
        vsElementalPercent: stack.unit.vsElementalPercent,
        vsDragonPercent: stack.unit.vsDragonPercent
      },
      unitsAmount: stack.unitsAmount,
      damage: 0
    }
  })
}

export const haveTroopsAlive = (army: FightStack[]) => {
  return army.filter(stack => stack.unitsAmount > 0).length > 0
}

export const getStrongestTroopAlive = (army: FightStack[]) => {
  const armyAlive = army.filter(stack => stack.unitsAmount > 0)
  if (armyAlive.length > 0) {
    armyAlive.sort((a, b) => b.unitsAmount * b.unit.BASESTR - a.unitsAmount * a.unit.BASESTR)
    return armyAlive[0]
  }
  return null
}

export const fight = (attacker: FightStack, defender: FightStack[], checkResult: Result[]) => {
  // check what kind of str featured bonus i have, and calculate damage
  const myDamage = getStackDamage(attacker)
  console.log('damages i can do', myDamage)

  let iHitSomething = false
  let dmgCount = 0

  while (!iHitSomething && dmgCount < myDamage.length) {
    console.log('searching for troop type', myDamage[dmgCount].type, defender)
    const target = findTargetOfTypeWithHealth(
      defender,
      myDamage[dmgCount].type,
      myDamage[dmgCount].damage
    )
    if (target /* found */) {
      const unitsKilled = Math.trunc(myDamage[dmgCount].damage / target.unit.BASEHP)
      checkResult.push({
        status: 1,
        msg:
          `${attacker.unit.name} attack ${target.unit.name}` +
          ` by ${myDamage[dmgCount].damage} featured damage,` +
          ` killing ${unitsKilled}`
      })
      console.log('target found stage1', target)
      target.damage += myDamage[dmgCount].damage
      target.unitsAmount -= unitsKilled
      iHitSomething = true

      break
    }

    dmgCount++
  }

  // if damage is lower than available health
  if (!iHitSomething) {
    console.log('killing first troop stage2', 'attacker', attacker)
    // regular damage
    const damage = Math.trunc(
      attacker.unitsAmount * attacker.unit.BASESTR * (1 + (attacker.unit?.strBonus ?? 0) / 100)
    )
    const target = findTargetWithHealth(defender, damage)
    if (target /* found */) {
      const unitsKilled = Math.trunc(damage / target.unit.BASEHP)

      checkResult.push({
        status: 1,
        msg:
          `${attacker.unit.name} attack ${target.unit.name}` +
          ` by ${damage},` +
          ` killing ${unitsKilled}`
      })
      console.log('target found stage2', target)

      target.damage += damage
      target.unitsAmount -= unitsKilled
      iHitSomething = true
    }
  }

  // if damage is higher than available health
  if (!iHitSomething) {
    console.log('killing first troop stage3')
    // regular damage
    const target = findTargetWithHealth(defender, 1)
    if (target /* found */) {
      const targetHealth = target.unit.BASEHP * target.unitsAmount - target.damage
      const unitsKilled = target.unitsAmount
      checkResult.push({
        status: 1,
        msg:
          `${attacker.unit.name} attack ${target.unit.name}` +
          ` by ${targetHealth},` +
          ` killing ${unitsKilled}`
      })
      console.log('target found stage3', target)

      target.damage += targetHealth
      target.unitsAmount = 0
      iHitSomething = true
    }
  }
}
