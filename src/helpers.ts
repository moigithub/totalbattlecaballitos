import { FightStack, ObjProps } from './citadelData'
import { addReportData, DataResult } from './dos'
// import { Result } from './dos'
import { BasicUnit, Stack } from './types'
import { whoCanIAttack } from './utils'

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
        subGroup: stack.unit.subGroup,
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
      originalUnitsAmount: stack.unitsAmount,
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
  return (stack.unit[key] as number) ?? 0
}

const calcStrengthWithBonus = (stack: FightStack, bonuses: number): number => {
  return stack.unit.BASESTR * (1 + bonuses / 100)
}
const calcStackStrengthWithBonus = (stack: FightStack, bonuses: number): number => {
  // console.log('calcStackStrengthWithBonus', stack, stack.unitsAmount, bonuses)
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
    const bonusa = a.unit.strBonus || 0
    const bonusb = b.unit.strBonus || 0

    return calcStackStrengthWithBonus(a, bonusa) > calcStackStrengthWithBonus(b, bonusb) ? a : b
  })
}

const getBiggestThreat = (attackingStack: FightStack, stacks: FightStack[]): FightStack | null => {
  let maxThreat = 0
  let bestTarget: FightStack | null = null
  // yo soy beast,flying
  // busco un enemigo que tenga bono vsBeast y vsFlying
  // para identificar quien es el mayor riesgo

  // enemies who its counter attack is highest
  stacks.forEach(counterAtkStack => {
    // Calculate threat based on stack's total strength and bonus against attacker's category
    const bonus = counterAtkStack.unit.strBonus || 0
    const vsCategoryBonus = getBonusByCategory(counterAtkStack, attackingStack.unit.category)
    const vsCategory2Bonus = getBonusByCategory(counterAtkStack, attackingStack.unit.subGroup)

    const threat = calcStackStrengthWithBonus(
      counterAtkStack,
      bonus + vsCategoryBonus + vsCategory2Bonus
    )
    // console.log('getBiggestThreat stack', counterAtkStack, 'threat', threat, 'maxthreat', maxThreat)
    // console.log('getBiggestThreat bonuses', bonus, vsCategoryBonus, vsCategory2Bonus)
    if (threat > maxThreat) {
      maxThreat = threat
      bestTarget = counterAtkStack
    }
  })

  return bestTarget
}

const getEnemiesWithEnoughHealth = (attackingStack: FightStack, enemies: FightStack[]) => {
  const bonusStr = attackingStack.unit.strBonus || 0
  // const totalStrength =
  //   attackingStack.unitsAmount * attackingStack.unit.BASESTR * (1 + bonusStr / 100)

  const totalStrength = calcStackStrengthWithBonus(attackingStack, bonusStr)
  console.log('selectTarget: attacker strength', attackingStack.unit.name, totalStrength)

  const enemiesWithEnoughHealth = enemies.filter(
    // need to substract accumulated damage from health to get actual health
    stack =>
      calcStackHealthWithBonus(stack, stack.unit.hpBonus || 0) - stack.accumulatedDamage >=
      totalStrength
  )
  console.log('selectTarget: ', attackingStack.unit.name, 'checking if those have enough health')
  return enemiesWithEnoughHealth
}

const getEnemiesWithFeatureBonus = (
  attackingStack: FightStack,
  enemies: FightStack[]
): FightStack[] => {
  return enemies.filter(
    stack =>
      getBonusByCategory(attackingStack, stack.unit.category) > 0 ||
      getBonusByCategory(attackingStack, stack.unit.subGroup) > 0
  )
}

const logAliveEnemies = (aliveEnemies: FightStack[]) => {
  console.log('Alive enemies:')
  console.table(
    aliveEnemies.map(s => ({
      name: s.unit.name,
      units: s.unitsAmount,
      categ: s.unit.category,
      subGroup: s.unit.subGroup
    }))
  )
}

const logAttackerDetails = (attackingStack: FightStack) => {
  console.log(
    'Attacker:',
    attackingStack.unit.name,
    'can attack:',
    whoCanIAttack(attackingStack.unit as BasicUnit).join(', ')
  )
}

const logEnemiesWithFeatureBonus = (enemiesWithFeatureBonus: FightStack[]) => {
  console.log('Enemies with feature bonus:')
  console.table(
    enemiesWithFeatureBonus.map(s => ({
      name: s.unit.name,
      type: s.unit.category,
      subGroup: s.unit.subGroup,
      bonus: whoCanIAttack(s.unit as BasicUnit).join(', ')
    }))
  )
}

const logEnemiesWithEnoughHealth = (
  attackingStack: FightStack,
  enemiesWithEnoughHealth: FightStack[]
) => {
  console.log('Enemies with enough health:')
  console.table(
    enemiesWithEnoughHealth.map(s => ({
      name: s.unit.name,
      type: s.unit.category,
      subGroup: s.unit.subGroup,
      bonus: whoCanIAttack(s.unit as BasicUnit).join(', '),
      threat: calcStackStrengthWithBonus(
        s,
        getBonusByCategory(s, attackingStack.unit.category) +
          getBonusByCategory(s, attackingStack.unit.subGroup) +
          (s.unit?.strBonus ?? 0)
      )
    }))
  )
}

export const selectTarget = (
  attackingStack: FightStack,
  enemyStacks: FightStack[],
  attackedStacks: Set<FightStack>
): FightStack | null => {
  if (enemyStacks.length === 0) return null

  const aliveEnemies = enemyStacks.filter(stack => stack.unitsAmount > 0)
  if (aliveEnemies.length === 0) return null

  logAliveEnemies(aliveEnemies)
  logAttackerDetails(attackingStack)

  const enemiesWithFeatureBonus = getEnemiesWithFeatureBonus(attackingStack, aliveEnemies)
  if (enemiesWithFeatureBonus.length > 0) {
    logEnemiesWithFeatureBonus(enemiesWithFeatureBonus)

    const enemiesWithEnoughHealth = getEnemiesWithEnoughHealth(
      attackingStack,
      enemiesWithFeatureBonus
    )
    if (enemiesWithEnoughHealth.length > 0) {
      logEnemiesWithEnoughHealth(attackingStack, enemiesWithEnoughHealth)

      const enemiesNotAttackedYet = enemiesWithEnoughHealth.filter(s => !attackedStacks.has(s))
      const target =
        getBiggestThreat(attackingStack, enemiesNotAttackedYet) ||
        getBiggestThreat(attackingStack, enemiesWithEnoughHealth)
      return target
    }
  }
  const threat1 = getBiggestThreat(attackingStack, aliveEnemies)
  console.log('biggestthreat from alive enemies', structuredClone(threat1))

  const strongest = getStrongestStack(aliveEnemies)
  console.log('strongest from alive enemies', structuredClone(strongest))

  const target = threat1 || strongest

  return target
}

export const calculateEffectiveDamage = (
  attackingStack: FightStack,
  defendingStack: FightStack
): number => {
  const bonusStr = attackingStack.unit.strBonus || 0
  const featureBonus = getBonusByCategory(attackingStack, defendingStack.unit.category)
  const featureBonus2 = getBonusByCategory(attackingStack, defendingStack.unit.subGroup)

  // const totalStrength =
  //   attackingStack.unitsAmount * attackingStack.unit.BASESTR * (1 + (bonusStr + featureBonus) / 100)
  const totalStrength = calcStackStrengthWithBonus(
    attackingStack,
    bonusStr + featureBonus + featureBonus2
  )
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

  console.log(
    'damage formula',
    defendingStack.accumulatedDamage,
    ' /',
    unitHealth,
    '=',
    unitsToRemove
  )

  console.log(
    'applydamage: unitHealth ',
    unitHealth,
    'acumulatedDamage',
    defendingStack.accumulatedDamage,
    'damage',
    damage,
    'unitsToRemove',
    unitsToRemove
  )

  // Reduce accumulated damage by the health of the units killed
  defendingStack.accumulatedDamage -= unitsToRemove * unitHealth

  console.log(
    'damage',
    `${attackingStack.id}:${attackingStack.unit.name} attacked ${defendingStack.id}:${defendingStack.unit.name} , dealing ${damage} damage, killing ${unitsToRemove} units`
  )
  return unitsToRemove
}

//----------------------
// combat system

// Finalizar el turno actual
const endTurn = (isPlayerTurn: boolean): boolean => {
  console.log('endTurn----------------------')
  return !isPlayerTurn // Alternar entre Player y Enemy
}

// Obtener el siguiente turno
const getNextTurn = (
  isPlayerTurn: boolean,
  playerStacks: FightStack[],
  enemyStacks: FightStack[],
  attackedStacks: Set<FightStack> // Añadir este parámetro
): FightStack | null => {
  const stacks = isPlayerTurn ? playerStacks : enemyStacks

  const aliveStacks = stacks.filter(stack => stack.unitsAmount > 0)
  const unattackedStacks = aliveStacks.filter(stack => !attackedStacks.has(stack))

  const strongestStack = getStrongestStack(unattackedStacks)

  if (strongestStack) {
    return strongestStack
  }

  // Si no hay stacks vivos disponibles o todos ya han atacado
  return null
}

export const fight = (attacker: FightStack[], defender: FightStack[]): DataResult[][] => {
  const checkResult: DataResult[][] = []
  const playerStacks: FightStack[] = attacker
  const enemyStacks: FightStack[] = defender

  let isPlayerTurn: boolean = true // Alternar entre Player y Enemy

  let cycle = 1
  let outerLoopProtect = 200
  let lineCounter = 1

  while (haveTroopsAlive(attacker) && haveTroopsAlive(defender)) {
    console.log(`\nCiclo ${cycle}:`)
    addReportData(checkResult, [{ color: 'red', msg: `LAP ${cycle}:` }])

    const attackedStacks = new Set<FightStack>() // Rastrear stacks que ya han atacado
    let allStacksAttacked = false // Indica si todos los stacks han atacado en este ciclo

    let innerLoopProtect = 200
    let innerCycle = 1
    while (!allStacksAttacked) {
      const stack = getNextTurn(
        isPlayerTurn,
        playerStacks,
        enemyStacks,
        attackedStacks // Pasar el conjunto de stacks que ya han atacado
      )

      console.log('===============================================')
      console.log(
        'inner cycle',
        innerCycle,
        'stack attacker',
        stack?.unit.name,
        stack,
        '...picking target'
      )

      if (stack) {
        // Procesar el stack si está vivo y no ha atacado en este ciclo
        const targetStack = selectTarget(stack, isPlayerTurn ? defender : attacker, attackedStacks)
        console.log('target found', targetStack)
        if (targetStack) {
          const damage = calculateEffectiveDamage(stack, targetStack)
          const unitsKilled = applyDamage(stack, targetStack, damage)

          addReportData(checkResult, [
            { color: 'yellow', msg: `${lineCounter++}: ` },
            { color: 'green', msg: stack.unit.name + ' ' },
            { color: 'white', msg: 'attacked ' },
            { color: 'green', msg: targetStack.unit.name + ' ' },
            { color: 'white', msg: 'dealing ' },
            { color: 'blue', msg: `${damage.toFixed(0)} ` },
            { color: 'white', msg: 'killing ' },
            { color: 'red', msg: `${unitsKilled} ` },
            { color: 'white', msg: 'units ' }
          ])

          attackedStacks.add(stack) // Marcar el stack como atacado
        }
      }

      // Verificar si todos los stacks han atacado en este ciclo
      const totalStacks = playerStacks.length + enemyStacks.length
      if (attackedStacks.size >= totalStacks) {
        console.log('all stacks attacked *********')
        allStacksAttacked = true // Todos los stacks han atacado
      }

      //  // Si no hay stacks vivos disponibles, salir del bucle
      //  if (!stack) {
      //   allStacksAttacked = true
      //   break
      // }
      // Alternar turno
      isPlayerTurn = endTurn(isPlayerTurn)

      if (!haveTroopsAlive(attacker) || !haveTroopsAlive(defender)) {
        console.log('we got a winner')
        break
      }

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

  const winner = haveTroopsAlive(attacker) ? 'ATTACKER' : 'DEFENDER'
  console.log(`\n¡La batalla ha terminado! El ganador es el bando ${winner}.`)
  addReportData(checkResult, [
    { color: 'yellow', msg: 'WINNER: ' },
    { color: 'purple', msg: winner }
  ])

  // create fight resume report
  addReportData(checkResult, [{ color: 'purple', msg: '-------------------------------' }])
  addReportData(checkResult, [{ color: 'purple', msg: 'SUMMARY' }])
  addReportData(checkResult, [{ color: 'purple', msg: '-------------------------------' }])

  let looseCount = 0
  if (winner === 'ATTACKER') {
    attacker.forEach(unit => {
      if (unit.originalUnitsAmount !== unit.unitsAmount) {
        looseCount++
        addReportData(checkResult, [
          { color: 'blue', msg: unit.unit.name },
          { color: 'white', msg: 'lost' },
          { color: 'red', msg: `${unit.originalUnitsAmount - unit.unitsAmount}` },
          { color: 'white', msg: 'units' }
        ])
      }
    })
  } else {
    defender.forEach(unit => {
      if (unit.originalUnitsAmount !== unit.unitsAmount) {
        looseCount++
        addReportData(checkResult, [
          { color: 'blue', msg: unit.unit.name },
          { color: 'white', msg: 'lost' },
          { color: 'red', msg: `${unit.originalUnitsAmount - unit.unitsAmount}` },
          { color: 'white', msg: 'units' }
        ])
      }
    })
  }
  if (looseCount === 0) {
    addReportData(checkResult, [{ color: 'yellow', msg: 'NO loses' }])
  }

  return checkResult
}
