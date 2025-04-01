class Unit {
  constructor(type, category, strength, life) {
    this.type = type // "guardias" o "monstruos"
    this.category = category // "melee", "ranged", "mounted", "flying"
    this.strength = strength
    this.life = life
  }
}

class Troop {
  constructor(units) {
    this.units = units // Array de Unit
    this.totalStrength = units.reduce((sum, unit) => sum + unit.strength, 0)
    this.totalLife = units.reduce((sum, unit) => sum + unit.life, 0)
  }

  isAlive() {
    return this.totalLife > 0
  }

  calculateDamage(bonusPercentage) {
    return this.totalStrength * (1 + bonusPercentage / 100)
  }

  receiveDamage(damage) {
    this.totalLife = Math.max(0, this.totalLife - damage)
  }
}

class Battle {
  constructor(attackerTroops, defenderTroops) {
    this.attacker = {
      troops: attackerTroops,
      isTurn: true
    }
    this.defender = {
      troops: defenderTroops,
      isTurn: false
    }
  }

  getBonus(attackerCategory, defenderCategory) {
    const bonuses = {
      melee: defenderCategory === 'ranged' ? 0.3 : 0,
      ranged: defenderCategory === 'flying' ? 0.4 : 0,
      mounted: defenderCategory === 'melee' ? 0.15 : 0,
      flying: 0
    }
    return bonuses[attackerCategory] || 0
  }

  selectTarget(attackerTroop, defenderTroops) {
    let maxDamage = 0
    let selectedTarget = null

    for (const target of defenderTroops) {
      if (!target.isAlive()) continue

      const bonus = this.getBonus(attackerTroop.units[0].category, target.units[0].category)
      const damage = attackerTroop.calculateDamage(bonus)

      if (damage > maxDamage) {
        maxDamage = damage
        selectedTarget = target
      }
    }

    return selectedTarget
  }

  startFight() {
    while (
      this.attacker.troops.some(t => t.isAlive()) &&
      this.defender.troops.some(t => t.isAlive())
    ) {
      // Ordenar tropas atacantes por fuerza
      const sortedAttackerTroops = this.attacker.troops
        .filter(t => t.isAlive())
        .sort((a, b) => b.totalStrength - a.totalStrength)

      const sortedDefenderTroops = this.defender.troops
        .filter(t => t.isAlive())
        .sort((a, b) => b.totalStrength - a.totalStrength)

      // Turno de ataque
      if (this.attacker.isTurn) {
        for (const troop of sortedAttackerTroops) {
          const target = this.selectTarget(troop, this.defender.troops)
          if (!target) continue

          const bonus = this.getBonus(troop.units[0].category, target.units[0].category)
          const damage = troop.calculateDamage(bonus)

          if (target.totalLife > damage) {
            target.receiveDamage(damage)
          }
        }
        this.attacker.isTurn = false
      } else {
        for (const troop of sortedDefenderTroops) {
          const target = this.selectTarget(troop, this.attacker.troops)
          if (!target) continue

          const bonus = this.getBonus(troop.units[0].category, target.units[0].category)
          const damage = troop.calculateDamage(bonus)

          if (target.totalLife > damage) {
            target.receiveDamage(damage)
          }
        }
        this.defender.isTurn = true
      }

      // Verificar tropas restantes
      const attackerAlive = this.attacker.troops.some(t => t.isAlive())
      const defenderAlive = this.defender.troops.some(t => t.isAlive())

      if (!attackerAlive || !defenderAlive) break
    }

    const result = attackerAlive ? 'Atacante gana' : 'Defensor gana'
    console.log(result)
  }
}

// Ejemplo de uso:
const guardiasMelee = new Unit('guardias', 'melee', 10, 20)
const guardiasRanged = new Unit('guardias', 'ranged', 8, 25)

const bestias = new Unit('monstruos', 'melee', 12, 15)
const elementales = new Unit('monstruos', 'flying', 9, 18)

const troop1 = new Troop([guardiasMelee, guardiasMelee])
const troop2 = new Troop([guardiasRanged, guardiasRanged])
const troop3 = new Troop([bestias, bestias, bestias])
const troop4 = new Troop([elementales])

const attackerTroops = [troop1, troop2]
const defenderTroops = [troop3, troop4]

const battle = new Battle(attackerTroops, defenderTroops)
battle.startFight()
