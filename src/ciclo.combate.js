class SistemaCombateAlternado {
  constructor(jugadorA, jugadorB) {
    this.jugadores = {
      A: this.validarTropas(jugadorA),
      B: this.validarTropas(jugadorB)
    }
    this.turnoActual = 'A'
  }

  validarTropas(tropas) {
    return tropas.map(tropa => ({
      ...tropa,
      unidades: Math.max(tropa.unidades, 0),
      saludPorUnidad: Math.max(tropa.saludPorUnidad, 1),
      ataquePorUnidad: Math.max(tropa.ataquePorUnidad, 1),
      atacoEsteCiclo: false
    }))
  }

  iniciarCombate() {
    let ciclos = 0

    while (true) {
      const resultado = this.ejecutarCicloTurnos()
      if (resultado) return resultado

      // Prevención de bucles infinitos
      if (ciclos++ > 1000) throw new Error('Combate demasiado largo')
      this.reiniciarEstadoAtaque()
    }
  }

  ejecutarCicloTurnos() {
    const ordenAtaque = this.generarOrdenAtaque()

    for (const { ejercito, indice } of ordenAtaque) {
      const tropa = this.jugadores[ejercito][indice]

      if (tropa.unidades > 0 && !tropa.atacoEsteCiclo) {
        const objetivo = this.seleccionarObjetivo(ejercito === 'A' ? 'B' : 'A')
        if (!objetivo) return `Victoria de ${ejercito}`

        this.resolverAtaque(tropa, objetivo)
        tropa.atacoEsteCiclo = true

        if (this.verificarEjercitoDerrotado('A')) return 'Victoria de B'
        if (this.verificarEjercitoDerrotado('B')) return 'Victoria de A'
      }
    }

    return null
  }

  generarOrdenAtaque() {
    const orden = []

    // Intercalar unidades de ambos ejércitos
    const maxUnidades = Math.max(
      this.jugadores.A.filter(t => t.unidades > 0).length,
      this.jugadores.B.filter(t => t.unidades > 0).length
    )

    for (let i = 0; i < maxUnidades; i++) {
      if (i < this.jugadores.A.length && this.jugadores.A[i].unidades > 0) {
        orden.push({ ejercito: 'A', indice: i })
      }
      if (i < this.jugadores.B.length && this.jugadores.B[i].unidades > 0) {
        orden.push({ ejercito: 'B', indice: i })
      }
    }

    return orden
  }

  reiniciarEstadoAtaque() {
    for (const ejercito of ['A', 'B']) {
      this.jugadores[ejercito].forEach(tropa => {
        tropa.atacoEsteCiclo = false
      })
    }
  }

  // Mantener métodos anteriores con ajustes menores
}

// Ejemplo de flujo alternado:
const ejercitoA = [
  { nombre: 'Caballeros', unidades: 3, saludPorUnidad: 100, ataquePorUnidad: 30 },
  { nombre: 'Arqueros', unidades: 2, saludPorUnidad: 50, ataquePorUnidad: 40 }
]

const ejercitoB = [
  { nombre: 'Orcos', unidades: 4, saludPorUnidad: 80, ataquePorUnidad: 35 },
  { nombre: 'Dragones', unidades: 1, saludPorUnidad: 300, ataquePorUnidad: 100 }
]

const combate = new SistemaCombateAlternado(ejercitoA, ejercitoB)
console.log('Resultado:', combate.iniciarCombate())
