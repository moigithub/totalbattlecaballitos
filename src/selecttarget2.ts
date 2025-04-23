import { FightStack, ObjProps } from './citadelData'
import { BasicUnit } from './types'
import { whoCanIAttack } from './utils'

interface AttackStats {
  attackerStrength: number
  damage: number // Potential damage with all bonuses
  threat: number // Defender's potential counter damage
  defenderHealth: number
  defenderStrength: number
}

/**
 * Selects optimal attack target based on combat rules
 */
export function selectTargetToAttack(
  attacker: FightStack,
  defenders: FightStack[]
  // attackedStacks: Set<string>
): FightStack | null {
  // 1. Filter out dead defenders
  const aliveDefenders = defenders.filter(defender => {
    const defenderHealth = calculateDefenderHealth(defender)
    return defenderHealth > 0
  })

  if (aliveDefenders.length === 0) return null

  const attackerHealth =
    attacker.unit.BASEHP * (1 + (attacker.unit.hpBonus || 0) / 100) * attacker.unitsAmount -
    attacker.accumulatedDamage

  const attackerStrength =
    attacker.unit.BASESTR * (1 + (attacker.unit.strBonus || 0) / 100) * attacker.unitsAmount

  console.log('%c attacker stats', 'color: red; font-weight: bold; font-size: 1.5em;')

  console.table([
    {
      name: attacker.unit.name,
      type: [attacker.unit.category, attacker.unit.subGroup].join(', '),
      canAttack: whoCanIAttack(attacker.unit as BasicUnit).join(', '),
      health: attackerHealth.toFixed(0), // attacker
      strength: attackerStrength.toFixed(0)
    }
  ])

  // 2. Calculate attack stats against each defender
  const defenderStats = aliveDefenders.map(defender => ({
    defender,
    stats: calculateAttackStats(attacker, defender)
  }))

  console.log('%c alive oponent/defender', 'color: green; font-weight: bold; font-size: 1.5em;')
  console.table(
    defenderStats.map(t => ({
      defender: t.defender.unit.name,
      type: [t.defender.unit.category, t.defender.unit.subGroup].join(', '),
      canAttack: whoCanIAttack(t.defender.unit as BasicUnit).join(', '),
      strength: attackerStrength,
      health: attackerHealth,
      damage: t.stats.damage, // attacker str+feat.bonus

      defenderStrength: t.stats.defenderStrength,
      theyAttackMe: t.stats.threat, //defender str+feat.bonus
      defenderHealth: t.stats.defenderHealth,

      miDmgMenorQueSuHp: `${attackerStrength}<=${t.stats.defenderHealth}=${
        attackerStrength <= t.stats.defenderHealth ? 'true' : ''
      }`,
      suDmgMenorQueMiHp: `${t.stats.defenderStrength}<=${attackerHealth.toFixed(0)}=${
        t.stats.defenderStrength <= attackerHealth ? 'true' : ''
      }`
    }))
  )

  // 3. Apply selection rules in priority order

  // Rule 1: Prefer targets with matching bonuses
  const bonusTargets = defenderStats.filter(({ defender, stats: _s }) =>
    hasAttackBonuses(attacker, defender)
  )

  // If we have bonus targets, apply additional filtering
  if (bonusTargets.length > 0) {
    console.log(
      '%c with feat.bonus i have against them',
      'color: green; font-weight: bold; font-size: 1.5em;'
    )
    console.table(
      bonusTargets.map(t => ({
        defender: t.defender.unit.name,
        type: [t.defender.unit.category, t.defender.unit.subGroup].join(', '),
        canAttack: whoCanIAttack(t.defender.unit as BasicUnit).join(', '),
        strength: attackerStrength,
        health: attackerHealth,
        damage: t.stats.damage, // attacker str+feat.bonus

        defenderStrength: t.stats.defenderStrength,
        theyAttackMe: t.stats.threat, //defender str+feat.bonus
        defenderHealth: t.stats.defenderHealth,

        miDmgMenorQueSuHp: `${attackerStrength}<=${t.stats.defenderHealth}=${
          attackerStrength <= t.stats.defenderHealth ? 'true' : ''
        }`,
        suDmgMenorQueMiHp: `${t.stats.defenderStrength}<=${attackerHealth.toFixed(0)}=${
          t.stats.defenderStrength <= attackerHealth ? 'true' : ''
        }`
      }))
    )
    const targetWithBonusAndEnoughHealth = bonusTargets.filter(
      ({ defender: _d, stats }) => stats.attackerStrength <= stats.defenderHealth
    )

    if (targetWithBonusAndEnoughHealth.length === 1) {
      console.log(
        '%c with feat.bonus i have against them, they got enough health',
        'color: green; font-weight: bold; font-size: 1.5em;'
      )
      console.table(
        targetWithBonusAndEnoughHealth.map(t => ({
          defender: t.defender.unit.name,
          type: [t.defender.unit.category, t.defender.unit.subGroup].join(', '),
          canAttack: whoCanIAttack(t.defender.unit as BasicUnit).join(', '),
          strength: attackerStrength,
          health: attackerHealth,
          damage: t.stats.damage, // attacker str+feat.bonus

          defenderStrength: t.stats.defenderStrength,
          theyAttackMe: t.stats.threat, //defender str+feat.bonus
          defenderHealth: t.stats.defenderHealth,

          miDmgMenorQueSuHp: `${attackerStrength}<=${t.stats.defenderHealth}=${
            attackerStrength <= t.stats.defenderHealth ? 'true' : ''
          }`,
          suDmgMenorQueMiHp: `${t.stats.defenderStrength}<=${attackerHealth.toFixed(0)}=${
            t.stats.defenderStrength <= attackerHealth ? 'true' : ''
          }`
        }))
      )

      return targetWithBonusAndEnoughHealth[0].defender
    }

    // Rule 1a: Among bonus targets, prefer those that can survive full attack
    const viableBonusTargets = bonusTargets.filter(
      ({ defender: _d, stats }) => stats.damage <= stats.defenderHealth
    )

    // If we have viable bonus targets, select best one
    if (viableBonusTargets.length > 0) {
      console.log(
        '%c with enough health to take dmg + all bonuses',
        'color: green; font-weight: bold; font-size: 1.5em;'
      )
      console.table(
        viableBonusTargets.map(t => ({
          defender: t.defender.unit.name,
          type: [t.defender.unit.category, t.defender.unit.subGroup].join(', '),
          canAttack: whoCanIAttack(t.defender.unit as BasicUnit).join(', '),
          strength: attackerStrength,
          health: attackerHealth,
          damage: t.stats.damage, // attacker str+feat.bonus

          defenderStrength: t.stats.defenderStrength,
          theyAttackMe: t.stats.threat, //defender str+feat.bonus
          defenderHealth: t.stats.defenderHealth,

          miDmgMenorQueSuHp: `${attackerStrength}<=${t.stats.defenderHealth}=${
            attackerStrength <= t.stats.defenderHealth ? 'true' : ''
          }`,
          suDmgMenorQueMiHp: `${t.stats.defenderStrength}<=${attackerHealth.toFixed(0)}=${
            t.stats.defenderStrength <= attackerHealth ? 'true' : ''
          }`
        }))
      )
      return selectBestTarget(viableBonusTargets)
    }
  }

  // Rule 2: Fallback to highest threat target
  const sortedByThreat = [...defenderStats].sort((a, b) => b.stats.threat - a.stats.threat)

  console.log('%c fallback to biggest threat', 'color: green; font-weight: bold; font-size: 1.5em;')

  return sortedByThreat[0]?.defender ?? null
}

// Helper functions

function calculateDefenderHealth(defender: FightStack): number {
  return (
    defender.unit.BASEHP * (1 + (defender.unit.hpBonus || 0) / 100) * defender.unitsAmount -
    defender.accumulatedDamage
  )
}

function calculateAttackStats(attacker: FightStack, defender: FightStack): AttackStats {
  // Calculate all applicable bonuses

  //si el defender es de categ melee
  // getBonus busca el attacker.vsMeleePercent
  const categoryBonus = getBonus(attacker, defender.unit.category)
  const subgroupBonus = defender.unit.subGroup ? getBonus(attacker, defender.unit.subGroup) : 0
  const strBonus = attacker.unit.strBonus || 0
  const totalBonus = strBonus + categoryBonus + subgroupBonus

  // Calculate potential damage with bonuses
  const attackerStrength = attacker.unit.BASESTR * (1 + strBonus / 100) * attacker.unitsAmount
  const baseDamage = attacker.unit.BASESTR * (1 + totalBonus / 100) * attacker.unitsAmount

  const defenderHealth = calculateDefenderHealth(defender)

  // Calculate defender's threat
  const defenderCategoryBonus = getBonus(defender, attacker.unit.category)
  const defenderSubgroupBonus = attacker.unit.subGroup
    ? getBonus(defender, attacker.unit.subGroup)
    : 0
  const defenderBaseBonus = defender.unit.strBonus || 0

  const defenderTotalBonus = defenderBaseBonus + defenderCategoryBonus + defenderSubgroupBonus

  const defenderThreat =
    defender.unit.BASESTR * (1 + defenderTotalBonus / 100) * defender.unitsAmount
  const defenderStrength =
    defender.unit.BASESTR * (1 + defenderBaseBonus / 100) * defender.unitsAmount

  return {
    attackerStrength,
    damage: baseDamage,
    threat: defenderThreat,
    defenderHealth,
    defenderStrength
  }
}

function getBonus(attacker: FightStack, targetType: string): number {
  const property = `vs${capitalizeFirstLetter(targetType)}Percent` as keyof ObjProps
  return (attacker.unit[property] as number) || 0
}

function hasAttackBonuses(attacker: FightStack, defender: FightStack): boolean {
  const categoryBonus = getBonus(attacker, defender.unit.category)
  const subgroupBonus = defender.unit.subGroup ? getBonus(attacker, defender.unit.subGroup) : 0
  return categoryBonus > 0 || subgroupBonus > 0
}

function selectBestTarget(targets: { defender: FightStack; stats: AttackStats }[]) {
  return targets.sort((a, b) => {
    // Sort by: damage potential (desc), threat (desc), health (asc)
    return (
      b.stats.damage - a.stats.damage ||
      b.stats.threat - a.stats.threat ||
      a.stats.defenderHealth - b.stats.defenderHealth
    )
  })[0].defender
}

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
