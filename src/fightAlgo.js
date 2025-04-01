class SistemaCombate {
  constructor() {
    this.jugadores = {
      atacantes: [],
      defensores: []
    }
  }

  // Configuración de tipos y bonos
  tiposBonos = {
    ranged: { contra: 'melee', bono: 0.3 },
    mounted: { contra: 'ranged', bono: 0.55 },
    flying: { contra: 'mounted', bono: 0.44 },
    melee: { contra: 'mounted', bono: 0.3 }
  }

  // Método principal de selección de objetivo
  seleccionarObjetivo(atacante, ejercitoEnemigo) {
    const todosDefensores = this.jugadores[ejercitoEnemigo]
      .filter(defensor => defensor.unidades > 0)
      .map(defensor => this.calcularObjetivoPotencial(atacante, defensor))

    const objetivosValidos = this.filtrarYOrdenarObjetivos(todosDefensores)

    return objetivosValidos.length > 0
      ? objetivosValidos[0].defensor
      : this.obtenerObjetivoFallback(todosDefensores)
  }

  // Cálculo de parámetros para cada defensor
  calcularObjetivoPotencial(atacante, defensor) {
    const { aplicaBono, dañoBase, dañoBono, saludSuficiente } = this.calcularBonos(
      atacante,
      defensor
    )

    return {
      defensor,
      aplicaBono,
      dañoRequerido: aplicaBono ? dañoBono : dañoBase,
      saludSuficiente,
      fuerzaDefensor: defensor.unidades * defensor.ataquePorUnidad,
      prioridad: aplicaBono ? 2 : 1
    }
  }

  // Filtrado y ordenamiento de objetivos
  filtrarYOrdenarObjetivos(defensores) {
    return defensores
      .filter(d => d.saludSuficiente)
      .sort((a, b) => {
        if (a.prioridad !== b.prioridad) return b.prioridad - a.prioridad
        if (b.dañoRequerido !== a.dañoRequerido) return b.dañoRequerido - a.dañoRequerido
        return a.defensor.saludTotal - b.defensor.saludTotal
      })
  }

  // Método de fallback para selección de objetivo
  obtenerObjetivoFallback(defensores) {
    return defensores.sort((a, b) => b.fuerzaDefensor - a.fuerzaDefensor)[0]?.defensor || null
  }

  // Cálculo de bonos de daño
  calcularBonos(atacante, defensor) {
    const bonoConfig = this.tiposBonos[atacante.profesion] || {}
    const aplicaBono = bonoConfig.contra === defensor.tipo
    const dañoBase = atacante.ataqueTotal
    const dañoBono = dañoBase * (1 + (bonoConfig.bono || 0))

    return {
      aplicaBono,
      dañoBase,
      dañoBono,
      saludSuficiente: defensor.saludTotal >= (aplicaBono ? dañoBono : dañoBase)
    }
  }

  // Método para ejecutar el ataque
  ejecutarAtaque(atacante, defensor) {
    if (!defensor || defensor.unidades === 0) return

    const { aplicaBono, dañoBase, dañoBono } = this.calcularBonos(atacante, defensor)
    const dañoFinal = aplicaBono ? dañoBono : dañoBase

    if (defensor.saludTotal >= dañoFinal) {
      defensor.saludTotal -= dañoFinal
      console.log(`¡Ataque exitoso! Daño: ${dañoFinal} - Salud restante: ${defensor.saludTotal}`)
    } else {
      console.log(`Objetivo no válido: Salud insuficiente (${defensor.saludTotal} < ${dañoFinal})`)
    }
  }
}

//-----------
const combate = new SistemaCombate()

// Configurar ejércitos
combate.jugadores.defensores = [
  { tipo: 'melee', saludTotal: 130, unidades: 5, ataquePorUnidad: 20 },
  { tipo: 'ranged', saludTotal: 100, unidades: 3, ataquePorUnidad: 35 }
]

const atacante = { profesion: 'ranged', ataqueTotal: 100 }

// Ejecutar flujo de combate
const objetivo = combate.seleccionarObjetivo(atacante, 'defensores')
combate.ejecutarAtaque(atacante, objetivo)
