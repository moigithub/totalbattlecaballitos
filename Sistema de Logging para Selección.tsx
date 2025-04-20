import { whoCanIAttack } from '@/utils'
import { FightStack, ObjProps } from './src/citadelData'
import { calculateEffectiveDamage } from './src/helpers'
import { BasicUnit } from '@/types'

/**
 ESTE SI, ES EL QUE MEJOR SE ADAPTA,
 SOLO FALTA QUE EN EL SEGUNDO PASO, SE ESCOJA AL QUE MAS DAÑO ME PUEDA HACER

 EN EL 11. CATAPULTA DEBRIA ATACAR A ELF ARCHER
 PERO ESTA ATACANDO AL CENTAURO, XQ EL CENTAURO TIENE BONO CONTRA MI,, Y SU ATAQUE ES MENOR QUE MI VIDA

 PERO EL ARCHER TIENE MAS PODER DE ATAQUE, OSEA QUE ES EL Q REPRESENTA MAYOR AMENAZA

 --

 ENTONCES DEBERIA CAMBIAR..
 DE.... EL QUE TIENE BONO CONTRA MI (DE ENTRE LOS QUE TIENEN BONOS)
 A ... LA MAYOR AMENAZA CONTRA MI, DE TODOS LOS QUE ESTAN VIVOS
*/

/**
 * Calcula el daño potencial que una unidad puede infligir a un objetivo
 */
// function calculatePotentialDamage(attacker: FightStack, target: FightStack): number {
//   // 1. Calcular fuerza total base
//   const totalStrength = attacker.unit.BASESTR * attacker.unitsAmount

//   // 2. Identificar todos los bonos aplicables
//   const applicableBonuses: AttackBonus[] = []

//   // Bonos por categoría
//   if (attacker[`vs${target.unit.category}Percent` as keyof FightStack]) {
//     applicableBonuses.push({
//       type: `vs${target.unit.category}`,
//       value: (attacker[`vs${target.unit.category}Percent` as keyof FightStack] as number) || 0
//     })
//   }

//   // Bonos por subgrupo (si existe)
//   if (target.unit.subGroup && attacker[`vs${target.unit.subGroup}Percent` as keyof FightStack]) {
//     applicableBonuses.push({
//       type: `vs${target.unit.subGroup}`,
//       value: (attacker[`vs${target.unit.subGroup}Percent` as keyof FightStack] as number) || 0
//     })
//   }

//   // 3. Sumar todos los bonos aplicables
//   const totalBonus = applicableBonuses.reduce((sum, bonus) => sum + bonus.value, 0)

//   // 4. Calcular daño potencial
//   const potentialDamage = totalStrength * (1 + ((attacker.unit.strBonus || 0) + totalBonus / 100))

//   // 5. Limitar por vida actual del objetivo
//   const targetTotalHealth =
//     target.unit.BASEHP * (1 + (target.unit.hpBonus || 0) / 100) * target.unitsAmount -
//     target.accumulatedDamage

//   return Math.min(potentialDamage, targetTotalHealth)
// }

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
/*
export class TargetSelectionLogger {
  private log: SelectionLog
  private static instance: TargetSelectionLogger

  private constructor() {
    this.log = {
      timestamp: new Date().toISOString(),
      attackerId: '',
      decisionSteps: []
    }
  }

  public static getInstance(): TargetSelectionLogger {
    if (!TargetSelectionLogger.instance) {
      TargetSelectionLogger.instance = new TargetSelectionLogger()
    }
    return TargetSelectionLogger.instance
  }

  public startNewLog(attackerId: string): void {
    this.log = {
      timestamp: new Date().toISOString(),
      attackerId,
      decisionSteps: []
    }
  }

  public addDecisionStep(
    stage: string,
    candidates: FightStack[],
    attacker: FightStack,
    evaluationCriteria: string,
    filtered = false
  ): void {
    const mappedCandidates = candidates.map(candidate => ({
      id: candidate.id,
      bonusType: this.getApplicableBonusType(attacker, candidate),
      bonusValue: this.getApplicableBonusValue(attacker, candidate),
      damagePotential: calculateEffectiveDamage(attacker, candidate),
      threatLevel: calculateThreat(candidate, attacker),
      currentHealth:
        candidate.unit.BASEHP * (1 + (candidate.unit.hpBonus || 0) / 100) * candidate.unitsAmount
    }))

    this.log.decisionSteps.push({
      stage,
      candidates: mappedCandidates,
      evaluationCriteria,
      filtered
    })
  }

  public recordFinalDecision(
    target: FightStack | null,
    reason: string,
    attacker: FightStack | null = null
  ): void {
    this.log.finalTarget = {
      id: target?.id ?? '',
      reason,
      damagePotential: attacker && target ? calculateEffectiveDamage(attacker, target) : 0,
      threatLevel: target && attacker ? calculateThreat(target, attacker) : 0,
      applicableBonus: attacker && target ? this.getApplicableBonusValue(attacker, target) : 0
    }
  }

  public getLog(): SelectionLog {
    return this.log
  }

  public printFormattedLog(): string {
    let output = `[Target Selection Log] ${this.log.timestamp}\n`
    output += `Attacker: ${this.log.attackerId}\n\n`

    this.log.decisionSteps.forEach(step => {
      output += `=== ${step.stage.toUpperCase()} ===\n`
      output += `Evaluation: ${step.evaluationCriteria}\n`

      if (step.filtered) {
        output += `(Filtered from ${step.candidates.length} candidates)\n`
      } else {
        step.candidates.forEach(cand => {
          output += `- ${cand.id}: `
          if (cand.bonusType) {
            output += `Bonus ${cand.bonusType}(${cand.bonusValue}%) `
          }
          output += `Damage=${cand.damagePotential.toFixed(0)} `
          output += `Threat=${cand.threatLevel.toFixed(0)} `
          output += `Health=${cand.currentHealth.toFixed(0)}\n`
        })
      }
      output += '\n'
    })

    if (this.log.finalTarget) {
      output += `>>> FINAL SELECTION: ${this.log.finalTarget.id} <<<\n`
      output += `Reason: ${this.log.finalTarget.reason}\n`
      output += `Damage Potential: ${this.log.finalTarget.damagePotential.toFixed(0)}\n`
      output += `Threat Level: ${this.log.finalTarget.threatLevel.toFixed(0)}\n`
      if (this.log.finalTarget.applicableBonus > 0) {
        output += `Applicable Bonus: ${this.log.finalTarget.applicableBonus}%\n`
      }
    }

    return output
  }



}
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
// const getFinalTargetData = (
//   target: FightStack | null,
//   attacker: FightStack | null,
//   reason: string = ''
// ) => {
//   const bonusType1 = getApplicableBonusType1(attacker, target) ||'' //category
//   const bonusType2 = getApplicableBonusType2(attacker, target) ||'' //subgroup
//   return {
//     id: target?.id ?? '',
//     reason,
//     damagePotential: attacker && target ? calculateEffectiveDamage(attacker, target) : 0,
//     threatLevel: target && attacker ? calculateThreat(target, attacker) : 0,
//     applicableBonus1: attacker  ? getApplicableBonusValue(attacker, bonusType1) : 0,
//     applicableBonus2: attacker  ? getApplicableBonusValue(attacker, bonusType2) : 0
//   }
// }

// function findSignificantThreat(
//   threats: Array<{ enemy: FightStack; threat: number; strength: number }>
// ): { enemy: FightStack; threat: number } | null {
//   if (threats.length === 0) return null

//   // Calculate threat difference threshold (20% of max threat)
//   const maxThreat = threats[0].threat
//   const threshold = maxThreat * 0.2

//   // Check if top threat is significantly higher than others
//   const isSignificant = threats.length === 1 || maxThreat - threats[1].threat >= threshold

//   return isSignificant ? { enemy: threats[0].enemy, threat: maxThreat } : null
// }

// Función modificada para incluir logging
export function selectTargetWithLogging2(
  attacker: FightStack,
  enemyArmy: FightStack[]
): FightStack | null {
  // const logger = TargetSelectionLogger.getInstance()
  // logger.startNewLog(attacker.id)

  // 1. Filtrar unidades enemigas con vida
  const aliveEnemies = enemyArmy.filter(enemy => enemy.unitsAmount > 0)
  console.log(
    'selectTarget: attacker',
    attacker.unit.name,
    attacker.unit.category,
    attacker.unit.subGroup,
    'i can attack ',
    whoCanIAttack(attacker.unit as BasicUnit).join(', '),
    attacker
  )
  console.log('Initial Alive Enemies', aliveEnemies)
  if (aliveEnemies.length === 0) {
    // logger.recordFinalDecision(null, 'No alive enemies remaining')
    console.log('No alive enemies remaining')
    return null
  }
  console.log(
    'Initial Alive Enemies   ',

    getLogData(aliveEnemies, attacker)
  )

  // 2. Categorize targets into priority groups
  const categorized = aliveEnemies.map(enemy => {
    // tengo vsMelee y el enemy es melee
    const bonusType1 = getApplicableBonusType1(attacker, enemy) || '' //category
    const bonusType2 = getApplicableBonusType2(attacker, enemy) || '' //subgroup
    return {
      enemy,
      bonusType1,
      bonusValue1: getApplicableBonusValue(attacker, bonusType1),
      bonusType2, // tengo vsMelee y el enemy es melee
      bonusValue2: getApplicableBonusValue(attacker, bonusType2),
      threat: calculateThreat(enemy, attacker),
      strength: enemy.unit.BASESTR * (1 + (enemy.unit.strBonus || 0) / 100) * enemy.unitsAmount
    }
  })

  console.log(
    'categorized enemies who i can attack using my vsType bonuses',
    getLogData(
      categorized.map(t => t.enemy),
      attacker
    )
  )
  console.table(
    categorized.map(t => ({
      target: t.enemy.unit.name,
      bonusType1: t.bonusType1,
      bonusValue: t.bonusValue1,
      bonusType2: t.bonusType2,
      bonusValue2: t.bonusValue2,
      threat: t.threat,
      strength: t.strength
    }))
  )

  // 3. Priority selection logic
  let selectedTarget: FightStack | null = null
  let selectionReason = ''

  // Group 1: Bonus-applicable threats (highest priority)
  const bonusThreats = categorized
    .filter(t => t.bonusType1 || t.bonusType2)
    .sort((a, b) => b.threat - a.threat || b.strength - a.strength)

  if (bonusThreats.length > 0) {
    selectedTarget = bonusThreats[0].enemy
    selectionReason = `Highest threat with ${bonusThreats[0].bonusType1} or ${bonusThreats[0].bonusType2} bonus (threat=${bonusThreats[0].threat}, bonus1=${bonusThreats[0].bonusValue1}%, bonus2=${bonusThreats[0].bonusValue2}%)`
  }
  // Group 2: Other bonus targets
  else {
    const bonusTargets = categorized
      .filter(t => t.bonusType1 || t.bonusType2)
      .sort(
        (a, b) =>
          b.bonusValue1 - a.bonusValue1 || b.bonusValue2 - a.bonusValue2 || b.strength - a.strength
      )

    if (bonusTargets.length > 0) {
      selectedTarget = bonusTargets[0].enemy
      selectionReason = `Highest ${bonusTargets[0].bonusType1} bonus (${bonusTargets[0].bonusValue1}%),
       ${bonusTargets[0].bonusType2} bonus (${bonusTargets[0].bonusValue2}%)`
    }
    // Group 3: Pure threats
    else {
      const pureThreats = [...categorized].sort(
        (a, b) => b.threat - a.threat || b.strength - a.strength
      )

      if (pureThreats.length > 0) {
        selectedTarget = pureThreats[0].enemy
        selectionReason = `Highest threat (${pureThreats[0].threat}) without applicable bonuses`
      }
    }
  }

  // 4. Fallback to strongest if no other criteria met
  if (!selectedTarget) {
    const strongest = [...categorized].sort((a, b) => b.strength - a.strength)[0].enemy
    selectedTarget = strongest
    const str =
      strongest.unit.BASESTR * (1 + (strongest.unit.strBonus || 0) / 100) * strongest.unitsAmount
    selectionReason = `Fallback to strongest unit (strength=${str})`
  }

  // logger.recordFinalDecision(selectedTarget, selectionReason, attacker);
  // console.log(logger.printFormattedLog());
  console.log('SelectTarget:', selectionReason, selectedTarget)

  return selectedTarget

  // 2. Identificar todos los posibles bonos de ataque del atacante
  // const attackBonuses: { type: string; value: number }[] = [
  //   { type: 'vsMelee', value: attacker.unit.vsMeleePercent || 0 },
  //   { type: 'vsRanged', value: attacker.unit.vsRangedPercent || 0 },
  //   { type: 'vsMounted', value: attacker.unit.vsMountedPercent || 0 },
  //   { type: 'vsFlying', value: attacker.unit.vsFlyingPercent || 0 },
  //   { type: 'vsSiege', value: attacker.unit.vsSiegePercent || 0 },
  //   { type: 'vsBeast', value: attacker.unit.vsBeastPercent || 0 },
  //   { type: 'vsGiant', value: attacker.unit.vsGiantPercent || 0 },
  //   { type: 'vsElemental', value: attacker.unit.vsElementalPercent || 0 },
  //   { type: 'vsDragon', value: attacker.unit.vsDragonPercent || 0 }
  // ].filter(bonus => bonus.value > 0)

  // // 3. Ordenar bonos de mayor a menor
  // attackBonuses.sort((a, b) => b.value - a.value)
  // console.log('attacker bonuses', attackBonuses)

  // console.log('searching who i can attack with feat.bonuses')
  // // 4. Buscar objetivos que coincidan con los mayores bonos
  // for (const bonus of attackBonuses) {
  //   const matchingEnemies = aliveEnemies.filter(enemy => {
  //     // Verificar coincidencia con categoría principal
  //     const categoryMatch =
  //       (bonus.type === 'vsMelee' && enemy.unit.category === 'melee') ||
  //       (bonus.type === 'vsRanged' && enemy.unit.category === 'ranged') ||
  //       (bonus.type === 'vsMounted' && enemy.unit.category === 'mounted') ||
  //       (bonus.type === 'vsFlying' && enemy.unit.category === 'flying') ||
  //       (bonus.type === 'vsSiege' && enemy.unit.category === 'siege')

  //     // Verificar coincidencia con subgrupo
  //     const subgroupMatch =
  //       (bonus.type === 'vsBeast' && enemy.unit.subGroup === 'beast') ||
  //       (bonus.type === 'vsGiant' && enemy.unit.subGroup === 'giant') ||
  //       (bonus.type === 'vsElemental' && enemy.unit.subGroup === 'elemental') ||
  //       (bonus.type === 'vsDragon' && enemy.unit.subGroup === 'dragon')

  //     return categoryMatch || subgroupMatch
  //   })

  //   if (matchingEnemies.length > 0) {
  //     // logger.addDecisionStep(
  //     //   'Filtering',
  //     //   matchingEnemies,
  //     //   attacker,
  //     //   'Enemies with matching bonuses'
  //     // )
  //     console.log('Enemies with matching bonuses', getLogData(aliveEnemies, attacker))

  //     // 5. Entre los objetivos con mismo bono, seleccionar por amenaza y daño efectivo
  //     const evaluatedTargets = matchingEnemies.map(target => ({
  //       target,
  //       damage: calculateEffectiveDamage(attacker, target),
  //       threat: calculateThreat(target, attacker),
  //       health: target.unit.BASEHP * (1 + (target.unit.hpBonus || 0) / 100) * target.unitsAmount
  //     }))

  //     // Ordenar por:
  //     // 1. Mayor daño efectivo (sin exceder vida del objetivo)
  //     // 2. Mayor amenaza (si el daño es igual)
  //     evaluatedTargets.sort((a, b) => {
  //       const effectiveDamageA = Math.min(a.damage, a.health)
  //       const effectiveDamageB = Math.min(b.damage, b.health)

  //       if (effectiveDamageB !== effectiveDamageA) {
  //         return effectiveDamageB - effectiveDamageA
  //       }
  //       return b.threat - a.threat
  //     })

  //     console.log('evaluatedTargets', getLogData(aliveEnemies, attacker))
  //     console.table(
  //       evaluatedTargets.map(t => ({
  //         target: t.target.unit.name,
  //         damage: t.damage,
  //         threat: t.threat,
  //         health: t.health
  //       }))
  //     )

  //     // Seleccionar el mejor objetivo que no resulte en sobre-daño
  //     const optimalTarget = evaluatedTargets.find(t => t.damage < t.health) || evaluatedTargets[0]
  //     return optimalTarget.target
  //   }
  // }

  // // 3. If no bonus targets found, evaluate by threat
  // // if (!selectedTarget) {
  // //   logger.addDecisionStep(
  // //     'Threat Evaluation',
  // //     aliveEnemies,
  // //     attacker,
  // //     'No bonus targets found - evaluating by threat'
  // //   );

  // // Calculate threat for all enemies
  // const threats = aliveEnemies.map(enemy => ({
  //   enemy,
  //   threat: calculateThreat(enemy, attacker),
  //   strength: enemy.unit.BASESTR * (1 + (enemy.unit.strBonus || 0) / 100) * enemy.unitsAmount
  // }))

  // // Sort by threat (descending) then strength (descending)
  // threats.sort((a, b) => {
  //   if (b.threat !== a.threat) return b.threat - a.threat
  //   return b.strength - a.strength
  // })

  // const threatsEnemies = threats.map(t => t.enemy)
  // console.log('getting threats and strongest', getLogData(threatsEnemies, attacker))
  // console.table(
  //   threats.map(t => ({
  //     target: t.enemy.unit.name,
  //     threat: t.threat,
  //     health: t.strength
  //   }))
  // )

  // console.log('returning the most threatening/strongest enemy', threats[0].enemy)
  // return threats[0].enemy
  // Find the biggest threat that's significantly more threatening than others
  // const biggestThreat = this.findSignificantThreat(threats);

  // if (biggestThreat) {
  //   selectedTarget = biggestThreat.enemy;
  //   // logger.recordFinalDecision(
  //   //   selectedTarget,
  //   //   `Selected biggest threat (threat score: ${biggestThreat.threat})`,
  //   //   attacker
  //   // );
  //   // console.log(logger.printFormattedLog());
  //   return selectedTarget;
  // }

  // 4. Fallback to strongest if no clear biggest threat
  // selectedTarget = threats[0].enemy; // Already sorted by strength
  // logger.recordFinalDecision(
  //   selectedTarget,
  //   `No significant threats - fell back to strongest (strength: ${threats[0].strength})`,
  //   attacker
  // );
  // }

  // 6. FALLBACK: Si no hay objetivos con bonos, seleccionar el más fuerte disponible
  // const selectedTarget = aliveEnemies.reduce((strongest, current) =>
  //   current.unit.BASESTR * (1 + (current.unit.strBonus || 0) / 100) * current.unitsAmount >
  //   strongest.unit.BASESTR * (1 + (strongest.unit.strBonus || 0) / 100) * strongest.unitsAmount
  //     ? current
  //     : strongest
  // )

  // // Ejemplo de registro en una etapa intermedia:
  // logger.addDecisionStep(
  //   'Bonus Evaluation',
  //   matchingEnemies,
  //   attacker,
  //   'Targets matching highest attack bonus',
  //   true
  // );

  // Al final, antes de retornar:
  // logger.recordFinalDecision(selectedTarget, 'selectionReason', attacker)
  // // console.log(logger.printFormattedLog())
  // console.log('Final decision:', getFinalTargetData(selectedTarget, attacker, 'fallback strongest'))
  // return selectedTarget
}

// logger.recordFinalDecision(null, 'No alive enemies remaining');
export function selectTargetWithLoggingBoo2(
  attacker: FightStack,
  enemyArmy: FightStack[]
): FightStack | null {
  console.log('%c selectTargetWithLoggingBoo2', 'background: #222; color: #bada55')
  // helper Calculate total applicable bonuses (category + subgroup)
  const calculateTotalBonus = (source: FightStack, target: FightStack): number => {
    const bonusCategoryKey = `vs${
      target.unit.category.charAt(0).toUpperCase() + target.unit.category.slice(1)
    }Percent`
    const bonusSubGroupKey = `vs${
      target.unit.subGroup.charAt(0).toUpperCase() + target.unit.subGroup.slice(1)
    }Percent`
    // console.log('calculateTotalBonus keys ', target.unit.name, bonusCategoryKey, bonusSubGroupKey)
    const categoryBonus = (source.unit[bonusCategoryKey as keyof ObjProps] as number) || 0
    const subgroupBonus = (source.unit[bonusSubGroupKey as keyof ObjProps] as number) || 0
    return categoryBonus + subgroupBonus
  }

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
    console.log('No alive enemies remaining')
    return null
  }

  // 3. Categorize targets with stacked bonus data
  const categorized = aliveEnemies.map(enemy => ({
    enemy,
    myTotalBonus: calculateTotalBonus(attacker, enemy),
    theirTotalBonus: calculateTotalBonus(enemy, attacker),
    strength: enemy.unit.BASESTR * (1 + (enemy.unit.strBonus || 0) / 100) * enemy.unitsAmount,
    health:
      enemy.unit.BASEHP * (1 + (enemy.unit.hpBonus || 0) / 100) * enemy.unitsAmount -
      enemy.accumulatedDamage,
    theirdamage:
      enemy.unit.BASESTR *
      (1 + ((enemy.unit.strBonus || 0) + calculateTotalBonus(enemy, attacker)) / 100) *
      enemy.unitsAmount,
    mydamage:
      attacker.unit.BASESTR *
      (1 + ((attacker.unit.strBonus || 0) + calculateTotalBonus(attacker, enemy)) / 100) *
      attacker.unitsAmount,

    hasAnyMyBonus: calculateTotalBonus(attacker, enemy) > 0,
    hasAnyTheirBonus: calculateTotalBonus(enemy, attacker) > 0
  }))

  console.log(
    'categorized enemies who i can attack using my vsType bonuses',
    whoCanIAttack(attacker.unit as BasicUnit).join(', '),
    getLogData(
      categorized.map(t => t.enemy),
      attacker
    )
  )
  console.table(
    categorized.map(t => ({
      target: t.enemy.unit.name,
      type: [t.enemy.unit.category, t.enemy.unit.subGroup].join(', '),
      canAttack: whoCanIAttack(t.enemy.unit as BasicUnit).join(', '),
      myTotalBonus: t.myTotalBonus,
      theirTotalBonus: t.theirTotalBonus,
      strength: t.strength,
      health: t.health,
      mydamage: t.mydamage,
      theirdamage: t.theirdamage,
      hasAnyMyBonus: t.hasAnyMyBonus,
      hasAnyTheirBonus: t.hasAnyTheirBonus
    }))
  )

  // 4. Priority selection logic
  let selectedTarget: FightStack | null = null
  let selectionReason = ''

  // Group 1: Enemies where we have stacked bonuses
  // enemy health cant be lower than our damage
  let myBonusTargets = categorized.filter(t => t.hasAnyMyBonus)
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
      theirTotalBonus: t.theirTotalBonus,
      strength: t.strength,
      health: t.health,
      mydamage: t.mydamage,
      theirdamage: t.theirdamage,
      hasAnyMyBonus: t.hasAnyMyBonus,
      hasAnyTheirBonus: t.hasAnyTheirBonus
    }))
  )

  myBonusTargets = myBonusTargets.filter(t => t.health >= attackerStrength)
  // .sort((a, b) => b.myTotalBonus - a.myTotalBonus || b.strenght - a.strenght)
  // health ascending, damage descending
  const lowHealthTargets = myBonusTargets.toSorted(
    (a, b) => a.health - b.health || b.theirdamage - a.theirdamage
  )
  const mostThreatsTargets = myBonusTargets.toSorted(
    (a, b) => b.theirdamage - a.theirdamage || a.health - b.health
  )

  console.log(
    '%c checking for targets with health > our damage %s',
    'color: green; font-weight: bold; font-size: 1.5em;',
    'mydamage',
    attackerStrength,
    whoCanIAttack(attacker.unit as BasicUnit).join(', ')
  )
  console.table(
    myBonusTargets.map(t => ({
      target: t.enemy.unit.name,
      type: [t.enemy.unit.category, t.enemy.unit.subGroup].join(', '),
      canAttack: whoCanIAttack(t.enemy.unit as BasicUnit).join(', '),
      myTotalBonus: t.myTotalBonus,
      theirTotalBonus: t.theirTotalBonus,
      strength: t.strength,
      health: t.health,
      mydamage: t.mydamage,
      theirdamage: t.theirdamage,
      hasAnyMyBonus: t.hasAnyMyBonus,
      hasAnyTheirBonus: t.hasAnyTheirBonus
    }))
  )

  if (myBonusTargets.length > 0) {
    selectedTarget = mostThreatsTargets[0].enemy || lowHealthTargets[0].enemy //myBonusTargets[0].enemy
    const bonusSources: string[] = []
    if (attacker.unit[`vs${selectedTarget.unit.category}Percent` as keyof ObjProps] as number)
      bonusSources.push(selectedTarget.unit.category)
    if (attacker.unit[`vs${selectedTarget.unit.subGroup}Percent` as keyof ObjProps] as number)
      bonusSources.push(selectedTarget.unit.subGroup)

    selectionReason = `We have stacked bonuses against ${bonusSources.join('+')} (total +${
      myBonusTargets[0].myTotalBonus
    }%)`
  }
  // Group 2: Enemies that have stacked bonuses against us
  else {
    console.log(
      '%c checking for targets higher threat %s',
      'color: green; font-weight: bold; font-size: 1.5em;',
      [attacker.unit.category, attacker.unit.subGroup].join(', ')
    )

    // enemy attack strength/damage cant be higher than our health
    const theirBonusTargets = categorized
      // .filter(t => /* t.hasAnyTheirBonus &&*/ t.strength <= attackerHealth)
      .sort((a, b) => b.theirdamage - a.theirdamage || b.strength - a.strength)
    // .sort((a, b) => b.theirTotalBonus - a.theirTotalBonus || b.strength - a.strength)

    console.table(
      theirBonusTargets.map(t => ({
        target: t.enemy.unit.name,
        type: [t.enemy.unit.category, t.enemy.unit.subGroup].join(', '),
        canAttack: whoCanIAttack(t.enemy.unit as BasicUnit).join(', '),
        myTotalBonus: t.myTotalBonus,
        theirTotalBonus: t.theirTotalBonus,
        strength: t.strength,
        health: t.health,
        mydamage: t.mydamage,
        theirdamage: t.theirdamage,
        hasAnyMyBonus: t.hasAnyMyBonus,
        hasAnyTheirBonus: t.hasAnyTheirBonus
      }))
    )

    if (theirBonusTargets.length > 0) {
      selectedTarget = theirBonusTargets[0].enemy
      const bonusSources: string[] = []
      if (selectedTarget.unit[`vs${attacker.unit.category}Percent` as keyof ObjProps] as number)
        bonusSources.push(attacker.unit.category)
      if (selectedTarget.unit[`vs${attacker.unit.subGroup}Percent` as keyof ObjProps] as number)
        bonusSources.push(attacker.unit.subGroup)

      selectionReason = `Target has stacked bonuses against our ${bonusSources.join('+')} (total +${
        theirBonusTargets[0].theirTotalBonus
      }%)`
    }
    // Group 3: Fallback to strongest
    else {
      console.log('%c checking for strongest', 'color: green; font-weight: bold; font-size: 1.5em;')

      const strongestTarget = [...categorized].sort((a, b) => b.strength - a.strength)

      console.table(
        strongestTarget.map(t => ({
          target: t.enemy.unit.name,
          type: [t.enemy.unit.category, t.enemy.unit.subGroup].join(', '),
          canAttack: whoCanIAttack(t.enemy.unit as BasicUnit).join(', '),
          myTotalBonus: t.myTotalBonus,
          theirTotalBonus: t.theirTotalBonus,
          strength: t.strength,
          health: t.health,
          mydamage: t.mydamage,
          theirdamage: t.theirdamage,
          hasAnyMyBonus: t.hasAnyMyBonus,
          hasAnyTheirBonus: t.hasAnyTheirBonus
        }))
      )

      selectedTarget = strongestTarget[0].enemy
      selectionReason = `Fallback to strongest enemy (strength=${
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

// export function selectTargetWithLogging3(attacker: FightStack, enemyArmy: FightStack[]): FightStack| null {

//   // 1. Filter alive enemies
//   const aliveEnemies = enemyArmy.filter(enemy => enemy.unitsAmount > 0);

//   console.log(
//     'selectTarget: attacker',
//     attacker.unit.name,
//     attacker.unit.category,
//     attacker.unit.subGroup,
//     'i can attack ',
//     whoCanIAttack(attacker.unit as BasicUnit).join(', '),
//     attacker
//   )
//   console.log('Initial Alive Enemies', aliveEnemies)

//   if (aliveEnemies.length === 0) {
//     console.log('No alive enemies remaining')

//     return null;
//   }

//   // 2. Categorize targets with all relevant data
//   const categorized = aliveEnemies.map(enemy => ({
//     enemy,
//     myBonus: {
//       type: this.getApplicableBonusType(attacker, enemy),
//       value: this.getApplicableBonusValue(attacker, enemy)
//     },
//     theirBonus: {
//       type: this.getApplicableBonusType(enemy, attacker),
//       value: this.getApplicableBonusValue(enemy, attacker)
//     },
//     strength: enemy.baseStr * enemy.unitsAmount
//   }));

//   // 3. Priority selection logic
//   let selectedTarget: FightStack | null = null;
//   let selectionReason = '';

//   // Group 1: Enemies we have bonuses against
//   const myBonusTargets = categorized
//     .filter(t => t.myBonus.type)
//     .sort((a, b) => b.myBonus.value - a.myBonus.value || b.strength - a.strength);

//   if (myBonusTargets.length > 0) {
//     selectedTarget = myBonusTargets[0].enemy;
//     selectionReason = `We have ${myBonusTargets[0].myBonus.type} bonus (${myBonusTargets[0].myBonus.value}%) against this target`;
//   }
//   // Group 2: Enemies that have bonuses against us
//   else {
//     const theirBonusTargets = categorized
//       .filter(t => t.theirBonus.type)
//       .sort((a, b) => b.theirBonus.value - a.theirBonus.value || b.strength - a.strength);

//     if (theirBonusTargets.length > 0) {
//       selectedTarget = theirBonusTargets[0].enemy;
//       selectionReason = `Target has ${theirBonusTargets[0].theirBonus.type} bonus (${theirBonusTargets[0].theirBonus.value}%) against us`;
//     }
//     // Group 3: Fallback to strongest
//     else {
//       const strongestTarget = [...categorized]
//         .sort((a, b) => b.strength - a.strength)[0].enemy;
//       selectedTarget = strongestTarget;
//       selectionReason = `Fallback to strongest enemy (strength=${strongestTarget.baseStr * strongestTarget.unitsAmount})`;
//     }
//   }

//   logger.recordFinalDecision(selectedTarget, selectionReason, attacker);
//   console.log(logger.printFormattedLog());
//   return selectedTarget;
// }
