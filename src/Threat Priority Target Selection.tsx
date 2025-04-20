import { FightStack, ObjProps } from './citadelData'
import { calculateEffectiveDamage } from './helpers'
import { BasicUnit } from './types'
import { whoCanIAttack } from './utils'
/**
 * EL ULTIMO DEL DIA 19/04/25
 * funciona con testsequence1
 */
function getApplicableBonusType1(attacker: FightStack, target: FightStack): string | undefined {
  // Check category bonuses first (higher priority)
  if (target.unit.category === 'melee' && attacker.unit.vsMeleePercent > 0) {
    return 'vsMelee'
  }
  if (target.unit.category === 'ranged' && attacker.unit.vsRangedPercent > 0) {
    return 'vsRanged'
  }
  if (target.unit.category === 'mounted' && attacker.unit.vsMountedPercent > 0) {
    return 'vsMounted'
  }
  if (target.unit.category === 'flying' && attacker.unit.vsFlyingPercent > 0) {
    return 'vsFlying'
  }
  if (target.unit.category === 'siege' && attacker.unit.vsSiegePercent > 0) {
    return 'vsSiege'
  }
  return undefined // No applicable bonus
}

function getApplicableBonusType2(attacker: FightStack, target: FightStack): string | undefined {
  // Check sub-group bonuses second
  if (target.unit.subGroup === 'beast' && attacker.unit.vsBeastPercent > 0) {
    return 'vsBeast'
  }
  if (target.unit.subGroup === 'giant' && attacker.unit.vsGiantPercent > 0) {
    return 'vsGiant'
  }
  if (target.unit.subGroup === 'elemental' && attacker.unit.vsElementalPercent > 0) {
    return 'vsElemental'
  }
  if (target.unit.subGroup === 'dragon' && attacker.unit.vsDragonPercent > 0) {
    return 'vsDragon'
  }

  return undefined // No applicable bonus
}

const getLogData = (candidates: FightStack[], attacker: FightStack) => {
  return candidates.map(candidate => {
    const bonusType1 = getApplicableBonusType1(attacker, candidate) || '' //category
    const bonusType2 = getApplicableBonusType2(attacker, candidate) || '' //subgroup

    return {
      id: candidate.id,
      bonusType1,
      bonusValue1: getApplicableBonusValue(attacker, bonusType1),
      bonusType2, // tengo vsMelee y el enemy es melee
      bonusValue2: getApplicableBonusValue(attacker, bonusType2),
      damagePotential: calculateEffectiveDamage(attacker, candidate),
      threatLevel: calculateThreat(candidate, attacker),
      currentHealth:
        candidate.unit.BASEHP * (1 + (candidate.unit.hpBonus || 0) / 100) * candidate.unitsAmount -
        candidate.accumulatedDamage
    }
  })
}

/**
 * Calcula la amenaza potencial de un objetivo contra el atacante
 */
function calculateThreat(target: FightStack, attacker: FightStack): number {
  // Calcular fuerza total del objetivo (sin bonos del jugador)
  const targetStrength = target.unit.BASESTR * target.unitsAmount

  // Identificar bonos del objetivo contra el atacante
  const targetBonus1 =
    (target[`vs${attacker.unit.category}Percent` as keyof FightStack] as number) || 0
  const targetBonus2 =
    (target[`vs${attacker.unit.subGroup}Percent` as keyof FightStack] as number) || 0

  return targetStrength * (1 + (targetBonus1 + targetBonus2) / 100)
}

function getApplicableBonusValue(attacker: FightStack, bonusType: string): number {
  if (!bonusType) return 0

  // Map bonus type to the actual value
  switch (bonusType) {
    case 'vsMelee':
      return attacker.unit.vsMeleePercent || 0
    case 'vsRanged':
      return attacker.unit.vsRangedPercent || 0
    case 'vsMounted':
      return attacker.unit.vsMountedPercent || 0
    case 'vsFlying':
      return attacker.unit.vsFlyingPercent || 0
    case 'vsSiege':
      return attacker.unit.vsSiegePercent || 0
    case 'vsBeast':
      return attacker.unit.vsBeastPercent || 0
    case 'vsGiant':
      return attacker.unit.vsGiantPercent || 0
    case 'vsElemental':
      return attacker.unit.vsElementalPercent || 0
    case 'vsDragon':
      return attacker.unit.vsDragonPercent || 0
    default:
      return 0
  }
}

export function selectTargetWithLogging(
  attacker: FightStack,
  enemyArmy: FightStack[]
): FightStack | null {
  // const logger = TargetSelectionLogger.getInstance();
  // logger.startNewLog(attacker.FightStackId);

  // 1. Filter alive enemies
  const aliveEnemies = enemyArmy.filter(enemy => enemy.unitsAmount > 0)

  const attackerHealth =
    attacker.unit.BASEHP * (1 + (attacker.unit.hpBonus || 0) / 100) * attacker.unitsAmount -
    attacker.accumulatedDamage
  const attackerStrength =
    attacker.unit.BASESTR * (1 + (attacker.unit.strBonus || 0) / 100) * attacker.unitsAmount

  console.log(
    'selectTarget: attacker',
    attacker.unit.name,
    attacker.unit.category,
    attacker.unit.subGroup,
    'i can attack ',
    whoCanIAttack(attacker.unit as BasicUnit).join(', '),
    'strength ',
    attackerStrength,
    'health:',
    attackerHealth,
    ' damage:',
    whoCanIAttack(attacker.unit as BasicUnit)
      .map(
        vsBonus =>
          `vs${vsBonus} ${
            attacker.unit.BASESTR *
            (1 +
              ((attacker.unit.strBonus || 0) + getApplicableBonusValue(attacker, 'vs' + vsBonus)) /
                100) *
            attacker.unitsAmount
          }`
      )
      .join(', ')
  )
  console.log('Initial Alive Enemies', aliveEnemies)

  if (aliveEnemies.length === 0) {
    // logger.recordFinalDecision(null, 'No alive enemies remaining');
    return null
  }

  // 2. Calculate total bonuses and threat
  const calculateTotalBonus = (source: FightStack, target: FightStack): number => {
    const bonusCategoryKey = `vs${
      target.unit.category.charAt(0).toUpperCase() + target.unit.category.slice(1)
    }Percent`
    const bonusSubGroupKey = `vs${
      target.unit.subGroup.charAt(0).toUpperCase() + target.unit.subGroup.slice(1)
    }Percent`
    const categoryBonus = (source.unit[bonusCategoryKey as keyof ObjProps] as number) || 0
    const subgroupBonus = (source.unit[bonusSubGroupKey as keyof ObjProps] as number) || 0

    // const categoryBonus = source[`vs${target.category}Percent`] || 0;
    // const subgroupBonus = source[`vs${target.subgroup}Percent`] || 0;
    return categoryBonus + subgroupBonus
  }

  // 3. Categorize targets with all relevant data
  const categorized = aliveEnemies.map(enemy => ({
    enemy,
    myTotalBonus: calculateTotalBonus(attacker, enemy),
    threat: calculateThreat(enemy, attacker), // Existing threat calculation
    strength: enemy.unit.BASESTR * (1 + (enemy.unit.strBonus || 0) / 100) * enemy.unitsAmount,
    health:
      enemy.unit.BASEHP * (1 + (enemy.unit.hpBonus || 0) / 100) * enemy.unitsAmount -
      enemy.accumulatedDamage,
    damage:
      enemy.unit.BASESTR *
      (1 + ((enemy.unit.strBonus || 0) + calculateTotalBonus(attacker, enemy)) / 100) *
      enemy.unitsAmount,

    hasAnyMyBonus: calculateTotalBonus(attacker, enemy) > 0
  }))

  console.log('%c alive enemies ', 'color: green; font-weight: bold; font-size: 1.5em;')
  console.table(
    categorized.map(t => ({
      target: t.enemy.unit.name,
      type: [t.enemy.unit.category, t.enemy.unit.subGroup].join(', '),
      canAttack: whoCanIAttack(t.enemy.unit as BasicUnit).join(', '),
      myTotalBonus: t.myTotalBonus,

      strength: t.strength,
      health: t.health,
      damage: t.damage,
      hasAnyMyBonus: t.hasAnyMyBonus
    }))
  )

  // 4. Priority selection logic
  let selectedTarget: FightStack | null = null
  let selectionReason = ''

  // Group 1: Enemies where we have bonuses
  const myBonusTargets = categorized
    .filter(t => t.hasAnyMyBonus) // && t.health >= attackerStrength)
    .sort(
      (a, b) => b.myTotalBonus - a.myTotalBonus || b.threat - a.threat || b.strength - a.strength
    )

  console.log(
    '%c checking for targets with my bonuses %s',
    'color: green; font-weight: bold; font-size: 1.5em;',
    whoCanIAttack(attacker.unit as BasicUnit).join(', ')
  )

  console.table(
    myBonusTargets.map(t => ({
      target: t.enemy.unit.name,
      type: [t.enemy.unit.category, t.enemy.unit.subGroup].join(', '),
      canAttack: whoCanIAttack(t.enemy.unit as BasicUnit).join(', '),
      myTotalBonus: t.myTotalBonus,

      strength: t.strength,
      health: t.health,
      damage: t.damage,
      hasAnyMyBonus: t.hasAnyMyBonus
    }))
  )

  if (myBonusTargets.length > 0) {
    selectedTarget = myBonusTargets[0].enemy
    const bonusSources = []
    if (attacker.unit[`vs${selectedTarget.unit.category}Percent` as keyof ObjProps] as number)
      bonusSources.push(selectedTarget.unit.category)
    if (attacker.unit[`vs${selectedTarget.unit.subGroup}Percent` as keyof ObjProps] as number)
      bonusSources.push(selectedTarget.unit.subGroup)

    selectionReason = `Priority: Bonus target (${bonusSources.join('+')} +${
      myBonusTargets[0].myTotalBonus
    }%)`
  }
  // Group 2: Highest threat enemies
  else {
    ///with bonuses against me ya no... ahora higher threats
    console.log(
      '%c alive enemies to check for targets with higher threats %s',
      'color: green; font-weight: bold; font-size: 1.5em;',
      [attacker.unit.category, attacker.unit.subGroup].join(', ')
    )

    // enemy attack strength/damage cant be higher than our health

    let highThreatTargets = [...categorized]

    console.table(
      highThreatTargets.map(t => ({
        target: t.enemy.unit.name,
        type: [t.enemy.unit.category, t.enemy.unit.subGroup].join(', '),
        canAttack: whoCanIAttack(t.enemy.unit as BasicUnit).join(', '),
        myTotalBonus: t.myTotalBonus,
        strength: t.strength,
        health: t.health,
        damage: t.damage,
        hasAnyMyBonus: t.hasAnyMyBonus
      }))
    )

    console.log(
      '%c highest threats, removing those who have strengh > my health %s',
      'color: green; font-weight: bold; font-size: 1.5em;',
      [attacker.unit.category, attacker.unit.subGroup].join(', ')
    )
    highThreatTargets = highThreatTargets
      .filter(t => t.strength <= attackerHealth)
      .sort((a, b) => b.threat - a.threat || b.strength - a.strength)

    console.table(
      highThreatTargets.map(t => ({
        target: t.enemy.unit.name,
        type: [t.enemy.unit.category, t.enemy.unit.subGroup].join(', '),
        canAttack: whoCanIAttack(t.enemy.unit as BasicUnit).join(', '),
        myTotalBonus: t.myTotalBonus,
        strength: t.strength,
        health: t.health,
        damage: t.damage,
        hasAnyMyBonus: t.hasAnyMyBonus
      }))
    )

    if (highThreatTargets.length > 0) {
      selectedTarget = highThreatTargets[0].enemy
      selectionReason = `Fallback: Highest threat (${highThreatTargets[0].threat})`
    }
    // Group 3: Strongest enemies
    else {
      console.log('%c checking for strongest', 'color: green; font-weight: bold; font-size: 1.5em;')

      const strongestTarget = [...categorized].sort((a, b) => b.strength - a.strength)

      console.table(
        strongestTarget.map(t => ({
          target: t.enemy.unit.name,
          type: [t.enemy.unit.category, t.enemy.unit.subGroup].join(', '),
          canAttack: whoCanIAttack(t.enemy.unit as BasicUnit).join(', '),
          myTotalBonus: t.myTotalBonus,
          strength: t.strength,
          health: t.health,
          damage: t.damage,
          hasAnyMyBonus: t.hasAnyMyBonus
        }))
      )

      selectedTarget = strongestTarget[0].enemy
      selectionReason = `Final Fallback: Strongest enemy (strength=${
        strongestTarget[0].enemy.unit.BASESTR *
        (1 + (strongestTarget[0].enemy.unit.strBonus || 0) / 100) *
        strongestTarget[0].enemy.unitsAmount
      })`
    }
  }

  console.log('SelectTarget:', selectionReason, selectedTarget)

  // logger.recordFinalDecision(selectedTarget, selectionReason, attacker);
  // console.log(logger.printFormattedLog());
  return selectedTarget
}
