import { FightStack, ObjProps } from './citadelData'
import { BasicUnit } from './types'
import { whoCanIAttack } from './utils'

interface AttackStats {
  attackerStrength: number
  damage: number // Potential damage with all bonuses
  threat: number // Defender's potential counter damage
  defenderHealth: number
  defenderStrength: number
  mostDamage: number
}

function getBonuses(attacker: FightStack): { vsBonus: string; value: number }[] {
  // Check category bonuses first (higher priority)
  const attackerStrength = (bonus: number) =>
    attacker.unit.BASESTR *
    (1 + ((attacker.unit.strBonus || 0) + bonus) / 100) *
    attacker.unitsAmount

  const vsPercent = Object.entries(attacker.unit).filter(kv => {
    return kv[0].startsWith('vs') && kv[0].endsWith('Percent') && kv[1] > 0
  })
  const vs = vsPercent.map(v => ({ vsBonus: v[0], value: v[1], damage: attackerStrength(v[1]) }))
  return vs
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
  console.table(getBonuses(attacker))

  // 2. Calculate attack stats against each defender
  const defenderStats = aliveDefenders.map(defender => ({
    defender,
    stats: calculateAttackStats(attacker, defender)
  }))
  const sortedByMostDmg = [...defenderStats].sort(
    (a, b) =>
      b.stats.mostDamage - a.stats.mostDamage || //1. who i can deal most damage
      b.stats.threat - a.stats.threat //2. highest threat
  )

  console.log('%c alive oponent/defender', 'color: green; font-weight: bold; font-size: 1.5em;')
  console.table(
    sortedByMostDmg.map(t => ({
      defender: t.defender.unit.name,
      type: [t.defender.unit.category, t.defender.unit.subGroup].join(', '),
      canAttack: whoCanIAttack(t.defender.unit as BasicUnit).join(', '),
      strWithAllBonuses: t.stats.damage, // attacker str+feat.bonus
      mostDamage: t.stats.mostDamage,

      defenderStrength: t.stats.defenderStrength,
      theyAttackMe: t.stats.threat, //defender str+feat.bonus
      defenderHealth: t.stats.defenderHealth
    }))
  )

  return sortedByMostDmg[0]?.defender ?? null
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
  const maxDamage = attacker.unit.BASESTR * (1 + totalBonus / 100) * attacker.unitsAmount

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
    damage: maxDamage,
    threat: defenderThreat,
    defenderHealth,
    defenderStrength,
    mostDamage: Math.min(maxDamage, defenderHealth)
  }
}

export function getBonus(attacker: FightStack, targetType: string): number {
  const property = `vs${capitalizeFirstLetter(targetType)}Percent` as keyof ObjProps
  return (attacker.unit[property] as number) || 0
}

// function hasAttackBonuses(attacker: FightStack, defender: FightStack): boolean {
//   const categoryBonus = getBonus(attacker, defender.unit.category)
//   const subgroupBonus = defender.unit.subGroup ? getBonus(attacker, defender.unit.subGroup) : 0
//   return categoryBonus > 0 || subgroupBonus > 0
// }

// function selectBestTarget(targets: { defender: FightStack; stats: AttackStats }[]) {
//   return targets.sort((a, b) => {
//     // Sort by: damage potential (desc), threat (desc), health (asc)
//     return (
//       b.stats.damage - a.stats.damage ||
//       b.stats.threat - a.stats.threat ||
//       a.stats.defenderHealth - b.stats.defenderHealth
//     )
//   })[0].defender
// }

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
