import { FightStack, ObjProps } from './citadelData'
import { addReportData, Result } from './dos'
// import { Result } from './dos'
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
  // console.log(
  //   'adding units',
  //   stack.unit.name,
  //   totalUnits,

  //   'lead',
  //   totalUnits * leadership
  // )
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

export const getStrengthWithBonus = (stack: Stack) => {
  const stackStrength: { type: string; percent: number; str: number }[] = []
  if (!stack) return stackStrength

  // const totalSTRPerUnit =
  //   stack.strBonus > 0 ? stack.unit.BASESTR * (1 + stack.strBonus / 100) : stack.unit.BASESTR

  // //  normal strength with bonus, no extra
  // stackStrength.push({ type: '', str: totalSTRPerUnit * stack.units })

  const strBonus = stack.strBonus ?? 0

  if (stack.unit.vsMeleePercent > 0) {
    const str = stack.unit.BASESTR * (1 + (strBonus + stack.unit.vsMeleePercent) / 100)

    stackStrength.push({
      type: 'vsMelee',
      percent: stack.unit.vsMeleePercent,
      str: str * stack.unitsAmount
    })
  }

  if (stack.unit.vsRangedPercent > 0) {
    const str = stack.unit.BASESTR * (1 + (strBonus + stack.unit.vsRangedPercent) / 100)

    stackStrength.push({
      type: 'vsRanged',
      percent: stack.unit.vsRangedPercent,
      str: str * stack.unitsAmount
    })
  }

  if (stack.unit.vsMountedPercent > 0) {
    const str = stack.unit.BASESTR * (1 + (strBonus + stack.unit.vsMountedPercent) / 100)

    stackStrength.push({
      type: 'vsMounted',
      percent: stack.unit.vsMountedPercent,
      str: str * stack.unitsAmount
    })
  }

  if (stack.unit.vsFlyingPercent > 0) {
    const str = stack.unit.BASESTR * (1 + (strBonus + stack.unit.vsFlyingPercent) / 100)

    stackStrength.push({
      type: 'vsFlying',
      percent: stack.unit.vsFlyingPercent,
      str: str * stack.unitsAmount
    })
  }

  if (stack.unit.vsBeastPercent > 0) {
    const str = stack.unit.BASESTR * (1 + (strBonus + stack.unit.vsBeastPercent) / 100)

    stackStrength.push({
      type: 'vsBeast',
      percent: stack.unit.vsBeastPercent,
      str: str * stack.unitsAmount
    })
  }

  if (stack.unit.vsGiantPercent > 0) {
    const str = stack.unit.BASESTR * (1 + (strBonus + stack.unit.vsGiantPercent) / 100)

    stackStrength.push({
      type: 'vsGiant',
      percent: stack.unit.vsGiantPercent,
      str: str * stack.unitsAmount
    })
  }

  if (stack.unit.vsDragonPercent > 0) {
    const str = stack.unit.BASESTR * (1 + (strBonus + stack.unit.vsDragonPercent) / 100)

    stackStrength.push({
      type: 'vsDragon',
      percent: stack.unit.vsDragonPercent,
      str: str * stack.unitsAmount
    })
  }

  if (stack.unit.vsElementalPercent > 0) {
    const str = stack.unit.BASESTR * (1 + (stack.strBonus + stack.unit.vsElementalPercent) / 100)

    stackStrength.push({
      type: 'vsElemental',
      percent: stack.unit.vsElementalPercent,
      str: str * stack.unitsAmount
    })
  }

  if (stack.unit.vsSiegePercent > 0) {
    const str = stack.unit.BASESTR * (1 + (stack.strBonus + stack.unit.vsSiegePercent) / 100)

    stackStrength.push({
      type: 'vsSiege',
      percent: stack.unit.vsSiegePercent,
      str: str * stack.unitsAmount
    })
  }

  if (stack.unit.vsFortificationsPercent > 0) {
    const str =
      stack.unit.BASESTR *
      stack.unit.multiplier *
      (1 + (stack.strBonus + stack.unit.vsFortificationsPercent) / 100)

    stackStrength.push({
      type: 'vsFortifications',
      percent: stack.unit.vsFortificationsPercent,
      str: str * stack.unitsAmount
    })
  }

  return stackStrength
}

export const prepareArmyData = (army: Stack[]): FightStack[] => {
  return army.map(stack => {
    return {
      unit: {
        name: stack.unit.name,
        category: stack.unit.category, //'beast, melee'
        group: 'enemy',
        subGroup: '',
        BASESTR: stack.unit.BASESTR,
        BASEHP: stack.unit.BASEHP,
        multiplier: 1,
        strBonus: stack.strBonus, // must include bonus
        hpBonus: stack.hpBonus, // must include bonus
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
      id: stack.id,
      unitsAmount: stack.unitsAmount,
      accumulatedDamage: 0
    }
  })
}

export const haveTroopsAlive = (army: FightStack[]): boolean => {
  return army.some(stack => stack.unitsAmount > 0)
}

export const getBonusByCategory = (stack: FightStack, category: string): number => {
  const categoryMap: { [key: string]: keyof ObjProps } = {
    ranged: 'vsRangedPercent',
    mounted: 'vsMountedPercent',
    flying: 'vsFlyingPercent',
    melee: 'vsMeleePercent',
    beast: 'vsBeastPercent',
    giant: 'vsGiantPercent',
    elemental: 'vsElementalPercent',
    dragon: 'vsDragonPercent',
    fortifications: 'vsFortificationsPercent',
    siege: 'vsSiegePercent',
    human: 'vsHumanPercent',
    epic: 'vsEpicPercent'
  }

  if (category === '') return 0
  const key = categoryMap[category]
  // console.log('getBonusByCategory', stack, category, key)
  // Type assertion to ensure we are accessing a valid property
  return stack.unit[key] as number
}

const calcStrengthWithBonus = (stack: FightStack, bonuses: number): number => {
  return stack.unit.BASESTR * (1 + bonuses / 100)
}
const calcStackStrengthWithBonus = (stack: FightStack, bonuses: number): number => {
  return stack.unitsAmount * calcStrengthWithBonus(stack, bonuses)
}
const calcHealthWithBonus = (stack: FightStack, bonuses: number): number => {
  return stack.unit.BASEHP * (1 + bonuses / 100)
}
const calcStackHealthWithBonus = (stack: FightStack, bonuses: number): number => {
  return stack.unitsAmount * calcHealthWithBonus(stack, bonuses)
}

const getStrongestStack = (stacks: FightStack[]): FightStack | null => {
  if (stacks.length === 0) return null

  return stacks.reduce((a, b) => {
    const featBonus = 0 // getBonusByCategory(b, b.unit.category)
    const bonus = b.unit.strBonus || 0

    return calcStackStrengthWithBonus(a, bonus + featBonus) >
      calcStackStrengthWithBonus(b, bonus + featBonus)
      ? a
      : b
  })
}

export const selectTarget = (
  attackingStack: FightStack,
  enemyStacks: FightStack[]
): FightStack | null => {
  /**
 rules to select target:

 -- prioritize the feature bonus --
 1. if i have a feature bonus against the enemy stack's category, otherwise return strongest stack
 2. if the enemy stack health is higher than my stack strength, otherwise return strongest stack
 3. if have multiple stacks that match 1 and 2, get the stack with the highest threat

 if no target found, get the strongest stack as fallback
 */

  let maxThreat = 0
  // console.log('selectTarget', structuredClone(attackingStack), structuredClone(enemyStacks))
  if (enemyStacks.length === 0) return null
  const stacksAlive: FightStack[] = enemyStacks.filter(stack => stack.unitsAmount > 0)

  const enemyIHaveFeatureBonusAgainst = stacksAlive.filter(
    stack => getBonusByCategory(attackingStack, stack.unit.category) > 0
  )
  console.log(
    'selectTarget: the enemies i have feature bonus against',
    attackingStack.unit.name,
    JSON.stringify(enemyIHaveFeatureBonusAgainst)
  )
  if (enemyIHaveFeatureBonusAgainst.length === 0) {
    console.log('selectTarget: no feature bonus found, get strongest stack')
    return getStrongestStack(stacksAlive)
  }

  const bonusStr = attackingStack.unit.strBonus || 0
  // const totalStrength =
  //   attackingStack.unitsAmount * attackingStack.unit.BASESTR * (1 + bonusStr / 100)

  const totalStrength = calcStackStrengthWithBonus(attackingStack, bonusStr)
  console.log('selectTarget: attacker strength', attackingStack.unit.name, totalStrength)

  const enemiesWithEnoughHealth = enemyIHaveFeatureBonusAgainst.filter(
    // need to substract accumulated damage from health to get actual health
    stack =>
      calcStackHealthWithBonus(stack, stack.unit.hpBonus || 0) - stack.accumulatedDamage >=
      totalStrength
  )
  console.log(
    'selectTarget: the enemies i have feature bonus against and enough health',
    attackingStack.unit.name,
    enemiesWithEnoughHealth
  )
  if (enemiesWithEnoughHealth.length === 0) {
    console.log('selectTarget: no feature bonus found, get strongest stack')

    return getStrongestStack(stacksAlive)
  }

  // enemies who its counter attack is highest
  enemiesWithEnoughHealth.forEach(counterAtkStack => {
    // Calculate threat based on stack's total strength and bonus against attacker's category
    const bonus = counterAtkStack.unit.strBonus || 0
    // const vsCategoryBonus = getBonusByCategory(attackingStack, stack.unit.category)
    const vsCategoryBonus = getBonusByCategory(counterAtkStack, attackingStack.unit.category)
    // const threat =
    //   counterAtkStack.unit.BASESTR *
    //   (1 + (bonus + vsCategoryBonus) / 100) *
    //   counterAtkStack.unitsAmount

    const threat = calcStackStrengthWithBonus(counterAtkStack, bonus + vsCategoryBonus)

    // console.log(
    //   'selectTarget: bonus, attacker:',
    //   counterAtkStack.unit.name,
    //   ' vs defender: ',
    //   attackingStack.unit.name,
    //   attackingStack.unit.category,
    //   'bonuses',
    //   bonus,
    //   vsCategoryBonus,
    //   'possible dmg',
    //   threat
    // )

    if (threat > maxThreat) {
      maxThreat = threat
    }
    // console.log('selectTarget: threat', threat, maxThreat, bestTarget?.unit.name)
  })

  // if have multiples with highest threat, get the one with the highest health
  const enemiesWithHighestThreat = enemiesWithEnoughHealth.filter(stack => {
    const bonus = stack.unit.strBonus || 0
    const vsCategoryBonus = getBonusByCategory(stack, attackingStack.unit.category)
    const threat = calcStackStrengthWithBonus(stack, bonus + vsCategoryBonus)
    return threat === maxThreat
  })

  console.log(
    'selectTarget: the enemies with highest threat',
    attackingStack.unit.name,
    enemiesWithHighestThreat
  )

  const bestTarget: FightStack = enemiesWithHighestThreat.reduce((a, b) => {
    const aHealth = calcStackHealthWithBonus(a, a.unit.hpBonus || 0) - a.accumulatedDamage
    const bHealth = calcStackHealthWithBonus(b, b.unit.hpBonus || 0) - b.accumulatedDamage
    return aHealth > bHealth ? a : b
  }, enemiesWithHighestThreat[0])

  console.log('selectTarget: the best target', attackingStack.unit.name, enemiesWithHighestThreat)
  return bestTarget
}

export const calculateEffectiveDamage = (
  attackingStack: FightStack,
  defendingStack: FightStack
): number => {
  const bonusStr = attackingStack.unit.strBonus || 0
  const featureBonus = getBonusByCategory(attackingStack, defendingStack.unit.category) || 0
  // const totalStrength =
  //   attackingStack.unitsAmount * attackingStack.unit.BASESTR * (1 + (bonusStr + featureBonus) / 100)
  const totalStrength = calcStackStrengthWithBonus(attackingStack, bonusStr + featureBonus)
  const totalHealth =
    defendingStack.unitsAmount *
      defendingStack.unit.BASEHP *
      (1 + (defendingStack.unit.hpBonus || 0) / 100) -
    defendingStack.accumulatedDamage

  console.log(
    'calculateEffectiveDamage: attackingStack',
    attackingStack,
    'defendingStack',
    defendingStack,
    'bonusStr',
    bonusStr,
    'feature bonus',
    featureBonus,
    'totalStrength',
    totalStrength,
    'totalHealth',
    totalHealth
  )
  // if health is less than strength, discard extra damage
  return Math.min(totalStrength, totalHealth)
}

export const applyDamage = (
  attackingStack: FightStack,
  defendingStack: FightStack,
  damage: number
): number => {
  // Calculate units to remove from the defending stack
  // console.log('damage', attackingStack, JSON.stringify(defendingStack), damage)

  const unitHealth = defendingStack.unit.BASEHP * (1 + (defendingStack.unit.hpBonus || 0) / 100)

  // Add damage to accumulated damage
  defendingStack.accumulatedDamage += damage

  // Calculate units to remove based on accumulated damage
  const unitsToRemove = Math.floor(defendingStack.accumulatedDamage / unitHealth)
  defendingStack.unitsAmount = Math.max(0, defendingStack.unitsAmount - unitsToRemove)

  // Reduce accumulated damage by the health of the units killed
  defendingStack.accumulatedDamage -= unitsToRemove * unitHealth
  console.log(
    'applydamage ',
    unitHealth,
    'acumulatedDamage',
    defendingStack.accumulatedDamage,
    'damage',
    damage,
    'unitsToRemove',
    unitsToRemove
  )
  console.log(
    'damage',
    `${attackingStack.id}:${attackingStack.unit.name} attacked ${defendingStack.id}:${defendingStack.unit.name} , dealing ${damage} damage, killing ${unitsToRemove} units`
  )
  return unitsToRemove
}

/*
export const fight2 = (attacker: FightStack[], defender: FightStack[]): Result[] => {
  const checkResult: Result[] = []
  let loopProtect = 20
  // console.log('fight', attacker, defender)

  // Initialize separate queues for player and enemy
  const playerQueue: FightStack[] = attacker.filter(stack => stack.unitsAmount > 0)
  const enemyQueue: FightStack[] = defender.filter(stack => stack.unitsAmount > 0)

  while (haveTroopsAlive(attacker) && haveTroopsAlive(defender)) {
    // Resetear estado de ataque para todos los stacks vivos
    // attacker.forEach(stack => stack.unitsAmount > 0 && (stack.hasAttacked = false))
    // defender.forEach(stack => stack.unitsAmount > 0 && (stack.hasAttacked = false))

    // Process player's turn
    let playerStack: FightStack | undefined
    while (playerQueue.length > 0) {
      playerStack = playerQueue.shift()! // Dequeue the next player stack
      if (playerStack.unitsAmount > 0) break // Exit if the stack is alive
      playerStack = undefined // Skip dead stacks
    }

    // if (playerStack && !playerStack.hasAttacked) {
    if (playerStack) {
      const targetStack = selectTarget(playerStack, enemyQueue)
      if (targetStack) {
        const damage = calculateEffectiveDamage(playerStack, targetStack)
        const unitsKilled = applyDamage(playerStack, targetStack, damage)
        // playerStack.hasAttacked = true

        addReportData(
          checkResult,
          3,
          '',
          playerStack.unit.name,
          targetStack.unit.name,
          unitsKilled,
          damage
        )

        // Check if targetStack is dead
        if (targetStack.unitsAmount <= 0) {
          // Remove the dead stack from the enemy queue
          enemyQueue.splice(enemyQueue.indexOf(targetStack), 1)
        }
      }

      // Re-enqueue the player stack if it's still alive
      if (playerStack.unitsAmount > 0) {
        playerQueue.push(playerStack)
      }
    }

    // Process enemy's turn
    let enemyStack: FightStack | undefined
    while (enemyQueue.length > 0) {
      enemyStack = enemyQueue.shift()! // Dequeue the next enemy stack
      if (enemyStack.unitsAmount > 0) break // Exit if the stack is alive
      enemyStack = undefined // Skip dead stacks
    }

    // if (enemyStack && !enemyStack.hasAttacked) {
    if (enemyStack) {
      const targetStack = selectTarget(enemyStack, playerQueue)
      if (targetStack) {
        const damage = calculateEffectiveDamage(enemyStack, targetStack)
        const unitsKilled = applyDamage(enemyStack, targetStack, damage)
        // enemyStack.hasAttacked = true

        addReportData(
          checkResult,
          3,
          '',
          enemyStack.unit.name,
          targetStack.unit.name,
          unitsKilled,
          damage
        )

        // Check if targetStack is dead
        if (targetStack.unitsAmount <= 0) {
          // Remove the dead stack from the player queue
          playerQueue.splice(playerQueue.indexOf(targetStack), 1)
        }
      }

      // Re-enqueue the enemy stack if it's still alive
      if (enemyStack.unitsAmount > 0) {
        enemyQueue.push(enemyStack)
      }
    }

    loopProtect--
    if (loopProtect < 1) {
      console.log('loop protection')
      break
    }
  }
  return checkResult
}
*/

//----------------------
// combat system

// Finalizar el turno actual
const endTurn = (isPlayerTurn: boolean): boolean => {
  return !isPlayerTurn // Alternar entre Player y Enemy
}

// Obtener el siguiente turno
const getNextTurn = (
  isPlayerTurn: boolean,
  playerStacks: FightStack[],
  enemyStacks: FightStack[],
  currentPlayerIndex: number,
  currentEnemyIndex: number,
  attackedStacks: Set<FightStack> // Añadir este parámetro
): { stack: FightStack | null; newPlayerIndex: number; newEnemyIndex: number } => {
  const stacks = isPlayerTurn ? playerStacks : enemyStacks
  const currentIndex = isPlayerTurn ? currentPlayerIndex : currentEnemyIndex

  // Buscar el siguiente stack con vida que no haya atacado
  for (let i = currentIndex; i < stacks.length; i++) {
    if (stacks[i].unitsAmount > 0 && !attackedStacks.has(stacks[i])) {
      return {
        stack: stacks[i],
        newPlayerIndex: isPlayerTurn ? i : currentPlayerIndex,
        newEnemyIndex: isPlayerTurn ? currentEnemyIndex : i
      }
    }
  }

  // Si no se encuentra, reiniciar la búsqueda desde el principio
  for (let i = 0; i < currentIndex; i++) {
    if (stacks[i].unitsAmount > 0 && !attackedStacks.has(stacks[i])) {
      return {
        stack: stacks[i],
        newPlayerIndex: isPlayerTurn ? i : currentPlayerIndex,
        newEnemyIndex: isPlayerTurn ? currentEnemyIndex : i
      }
    }
  }

  // Si no hay stacks vivos disponibles o todos ya han atacado
  return {
    stack: null,
    newPlayerIndex: currentPlayerIndex,
    newEnemyIndex: currentEnemyIndex
  }
}

export const fight = (attacker: FightStack[], defender: FightStack[]): Result[] => {
  const checkResult: Result[] = []
  const playerStacks: FightStack[] = attacker
  const enemyStacks: FightStack[] = defender
  let currentPlayerIndex: number = 0
  let currentEnemyIndex: number = 0
  let isPlayerTurn: boolean = true // Alternar entre Player y Enemy

  let cycle = 1
  let outerLoopProtect = 200

  while (haveTroopsAlive(attacker) && haveTroopsAlive(defender)) {
    console.log(`\nCiclo ${cycle}:`)
    addReportData(checkResult, 1, `LAP ${cycle}:`, 'title')

    const attackedStacks = new Set<FightStack>() // Rastrear stacks que ya han atacado
    let allStacksAttacked = false // Indica si todos los stacks han atacado en este ciclo

    let innerLoopProtect = 200
    let innerCycle = 1
    while (!allStacksAttacked) {
      const { stack, newPlayerIndex, newEnemyIndex } = getNextTurn(
        isPlayerTurn,
        playerStacks,
        enemyStacks,
        currentPlayerIndex,
        currentEnemyIndex,
        attackedStacks // Pasar el conjunto de stacks que ya han atacado
      )

      // Actualizar índices
      currentPlayerIndex = newPlayerIndex
      currentEnemyIndex = newEnemyIndex

      // Si no hay stacks vivos disponibles, salir del bucle
      if (!stack) {
        allStacksAttacked = true
        break
      }
      console.log('inner cycle', innerCycle, 'stack', stack)

      // Procesar el stack si está vivo y no ha atacado en este ciclo
      const targetStack = selectTarget(stack, isPlayerTurn ? defender : attacker)
      console.log('inner cycle', innerCycle, 'targetStack', targetStack)
      if (targetStack) {
        const damage = calculateEffectiveDamage(stack, targetStack)
        const unitsKilled = applyDamage(stack, targetStack, damage)

        addReportData(
          checkResult,
          3,
          '',
          // `${isPlayerTurn ? 'Player' : 'Enemy'} Turn `,
          /*stack.id + ':' +*/ stack.unit.name,
          /*targetStack.id + ':' +*/ targetStack.unit.name,
          unitsKilled,
          damage,
          'item'
        )

        attackedStacks.add(stack) // Marcar el stack como atacado
      }

      // Verificar si todos los stacks han atacado en este ciclo
      const totalStacks = playerStacks.length + enemyStacks.length
      if (attackedStacks.size >= totalStacks) {
        allStacksAttacked = true // Todos los stacks han atacado
      }

      // Alternar turno
      isPlayerTurn = endTurn(isPlayerTurn)

      if (innerLoopProtect-- <= 0) {
        console.log('innerLoopProtect')
        break
      }

      innerCycle++
    }

    cycle++

    if (outerLoopProtect-- <= 0) {
      console.log('outerLoopProtect')
      break
    }
  }

  const winner = haveTroopsAlive(attacker) ? 'Player' : 'Enemy'
  console.log(`\n¡La batalla ha terminado! El ganador es el bando ${winner}.`)
  addReportData(checkResult, 4, 'WINNER: ' + winner, 'title')

  return checkResult
}
