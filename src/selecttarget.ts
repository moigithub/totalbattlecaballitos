import { FightStack, ObjProps } from '@/citadelData'
import { BasicUnit } from '@/types'
import { whoCanIAttack } from '@/utils'
/**
 * 21/04/25
 * si hay varios del mismo tipo, ejemplo 2 melee (bear y ent)
 * y hay una tropa con bono vsMelee (firefenix)
 * y si la fuerza con bonos incluido el feat.bono es mayor a la vida de alguno,
 * ejm. fireFenix + %strBono + %vsMeleeBono > bear health
 * entonces se elijira al ent, donde mejor se aprovechara el daño
 *
 * quiere decir q hay otro criterio para seleccionar objetivo
 *
 * 1. q tenga suficiente vida (hp>str)
 * 2. si el dmg es igual para todos
 * 3. dentro del mismo tipo, si el daño con bono supera la vida, se escoje a otro q tenga mas vida
 * 3. se escojera al q nos pueda hacer mas daño
 * 4. fallback al mas fuerte
 */
interface AttackStats {
  // strength: number
  damage: number
  threat: number
  defenderHealth: number
  defenderStrength: number
}

/**
 * Calcula el daño potencial que un atacante puede infligir a un defensor
 */
function calculateAttackDamage(attacker: FightStack, defender: FightStack): AttackStats {
  // Determinar bonos aplicables basados en categoría y subgrupo del defensor
  const categoryBonus =
    (attacker.unit[
      `vs${capitalizeFirstLetter(defender.unit.category)}Percent` as keyof ObjProps
    ] as number) || 0
  const subgroupBonus = defender.unit.subGroup
    ? (attacker.unit[
        `vs${capitalizeFirstLetter(defender.unit.subGroup)}Percent` as keyof ObjProps
      ] as number) || 0
    : 0

  // Calcular daño efectivo (limitado por la vida del defensor)
  const baseBonus = attacker.unit.strBonus || 0
  const totalBonus = baseBonus + categoryBonus + subgroupBonus
  // const totalStrength = attacker.unit.BASESTR * (1 + baseBonus / 100) * attacker.unitsAmount
  const baseDamage = attacker.unit.BASESTR * (1 + totalBonus / 100) * attacker.unitsAmount
  const defenderHealth =
    defender.unit.BASEHP * (1 + (defender.unit.hpBonus || 0) / 100) * defender.unitsAmount -
    defender.accumulatedDamage

  // const effectiveDamage = Math.min(baseDamage, defenderHealth)
  const effectiveDamage = baseDamage

  // Calcular amenaza potencial del defensor
  const defenderCategoryBonus =
    (defender.unit[
      `vs${capitalizeFirstLetter(attacker.unit.category)}Percent` as keyof ObjProps
    ] as number) || 0
  const defenderSubgroupBonus = attacker.unit.subGroup
    ? (defender.unit[
        `vs${capitalizeFirstLetter(attacker.unit.subGroup)}Percent` as keyof ObjProps
      ] as number) || 0
    : 0

  const defenderBaseBonus = defender.unit.strBonus || 0
  const defenderTotalBonus = defenderBaseBonus + defenderCategoryBonus + defenderSubgroupBonus
  const defenderStrength =
    defender.unit.BASESTR * (1 + defenderBaseBonus / 100) * defender.unitsAmount
  const defenderPotentialDamage =
    defender.unit.BASESTR * (1 + defenderTotalBonus / 100) * defender.unitsAmount

  return {
    // strength: totalStrength,
    damage: effectiveDamage,
    threat: defenderPotentialDamage,
    defenderHealth,
    defenderStrength
  }
}

/**
 * Selecciona el objetivo óptimo para atacar
 */
export function selectTargetToAttack(
  attacker: FightStack,
  defenders: FightStack[]
  // attackedStacks: Set<string>
): FightStack | null {
  // 3. Calcular vida del atacante
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

  // 1. Filtrar defensores vivos, que han atacado para hacer counter attack
  const aliveDefenders = defenders.filter(defender => {
    const health =
      defender.unit.BASEHP * (1 + (defender.unit.hpBonus || 0) / 100) * defender.unitsAmount -
      defender.accumulatedDamage
    return health > 0
  })

  if (aliveDefenders.length === 0) {
    return null
  }

  // 2. Calcular stats de ataque para cada defensor
  const defenderStats = aliveDefenders.map(defender => {
    const stats = calculateAttackDamage(attacker, defender)
    return { defender, stats }
  })

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

  // 4. Filtrar objetivos válidos según las condiciones
  // tiene que tener suficiente vida mayor a mi fuerza
  //
  let validTargets = defenderStats.filter(({ defender }) => {
    // game rule... si mi fuerza sobrepasa a su vida busca otro target
    // game rule... para target un enemigo, bajar la fuerza debajo de su vida para atacarlo
    return (
      // stats.damage <=
      attackerStrength <=
      defender.unit.BASEHP * (1 + (defender.unit.hpBonus || 0) / 100) * defender.unitsAmount -
        defender.accumulatedDamage // no tengo suficiente vida
    )
  })

  // filtro result true se mantiene

  console.log('filtered targets ', 'strength <= defender health  ')
  console.table(
    validTargets.map(t => ({
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

  // quiero saber si hay mas de 2enemigos con la misma categoria/sugbrupo
  // si hay mas de 2, y el daño con bono supera la vida de uno, se debe escoger al siguiente que tenga suficiente vida
  const allUnitsCategAndSubGroup = validTargets
    .reduce(
      (all, t) => [...all, t.defender.unit.category, t.defender.unit.subGroup],
      [] as string[]
    )
    .filter(Boolean)
    .map(s => s.trim())
  const allUniquesCategAndSubGroup = [...new Set(allUnitsCategAndSubGroup)]
  const haveDuplicates = allUnitsCategAndSubGroup.length !== allUniquesCategAndSubGroup.length
  // console.log('%c duplicates?', 'color: orange, font-size: 20px', haveDuplicates && ' YES')
  // console.log(allUnitsCategAndSubGroup, allUniquesCategAndSubGroup)

  validTargets = validTargets.filter(({ defender, stats }) => {
    // game rule... si mi fuerza sobrepasa a su vida busca otro target
    // game rule... para target un enemigo, bajar la fuerza debajo de su vida para atacarlo

    // if we have bonuses, we target the healthy one
    if (haveDuplicates) {
      return (
        // stats.damage === is attacker strength with all bonuses
        stats.damage <=
        defender.unit.BASEHP * (1 + (defender.unit.hpBonus || 0) / 100) * defender.unitsAmount -
          defender.accumulatedDamage // no tengo suficiente vida
      )
    }
    return true
  })

  console.log('filtered targets ', 'strength+bonuses <= defender health  ')
  console.table(
    validTargets.map(t => ({
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

  // 5. Seleccionar objetivo entre los válidos
  if (validTargets.length > 0) {
    // Ordenar por mayor daño, menor vida, luego por mayor amenaza
    validTargets.sort((a, b) => {
      // if (b.stats.damage !== a.stats.damage) {
      //   return b.stats.damage - a.stats.damage
      // }
      return (
        b.stats.damage - a.stats.damage || // damage descending
        b.stats.threat - a.stats.threat || // threat descending
        a.stats.defenderHealth - b.stats.defenderHealth // defenderHealth ascending
      )
    })

    // filtro result true se mantiene
    // console.log('filtrar miDmg<=suVida && miVida>=suDmg ')
    console.log('filtered targets ', '  defenderStr<= attackerHealth  ')
    console.table(
      validTargets.map(t => ({
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

    // const attacked = validTargets.filter(t => attackedStacks.has(t.defender.id))
    // const notAttacked = validTargets.filter(t => !attackedStacks.has(t.defender.id))

    // if (notAttacked.length === 1) {
    //   return notAttacked[0].defender // except on last one
    // } else {
    //   if (attacked.length > 0) {
    //     return attacked[0].defender // we counter attack
    //   }
    // }

    // return validTargets[0].defender
  }

  console.log('no hay targets, fallback to the most threatening target')
  // 6. Fallback: seleccionar el defensor más fuerte (mayor potencial de daño)
  defenderStats.sort((a, b) => b.stats.threat - a.stats.threat)

  return defenderStats[0].defender
}

// Función auxiliar para capitalizar strings
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
