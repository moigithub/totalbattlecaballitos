import { useState, useEffect, useRef } from 'react'

import './App.css'
// import { useGuardsStore } from './guardStore'

// import classNames from 'classnames'
import { ArmyList } from './ArmyList'
import { Card } from './Card'
import {
  DndContext,
  DragEndEvent
  // KeyboardSensor,
  // MouseSensor,
  // TouchSensor,
  // useSensor,
  // useSensors
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext
  // sortableKeyboardCoordinates
} from '@dnd-kit/sortable'
import { /* getStats, getSTRWithBonus,*/ useStackStore } from './stackStore'
import { Stack /*, Unit */ } from './types'

import { SmallCard } from './SmallCard'
import { CitadelData } from './citadel.tsx'
import {
  addArmyUnits,
  fight,
  getArmyAuthority,
  getArmyDominance,
  getArmyLeadership,
  getStackHealth,
  getStackStrength,
  getStrengthWithBonus,
  prepareArmyData
} from './helpers'
import {
  Citadel,
  citadelc20,
  citadelc25,
  citadele10,
  citadele15,
  citadele20,
  citadele25,
  citadele30
} from './citadelData.ts'
import { Tips } from './tips.tsx'
import { lvl17HeroicElfSquad } from './monsters.ts'
export interface Result {
  status: number
  msg: string
  attacker: string
  defender: string
  killedUnits: number
  damageAmount: number
  reportType: string
}

export const addReportData = (
  checkResult: Result[],
  status: number,
  msg: string,
  attacker: string = '',
  defender: string = '',
  killedUnits: number = 0,
  damageAmount: number = 0,
  reportType: string = ''
) => {
  checkResult.push({
    status,
    msg,
    attacker,
    defender,
    killedUnits,
    damageAmount,
    reportType
  })
}

function Dos() {
  const leadership = useStackStore(state => state.leadership)
  const authority = useStackStore(state => state.authority)
  const dominance = useStackStore(state => state.dominance)

  const setLeadership = useStackStore(state => state.setLeadership)
  const setAuthority = useStackStore(state => state.setAuthority)
  const setDominance = useStackStore(state => state.setDominance)
  const resetAllStacks = useStackStore(state => state.resetAllStacks)
  // const addUnits = useStackStore(state => state.addUnits)
  // const updateMinSetup = useStackStore(state => state.updateMinSetup)

  const armyRef = useRef(useStackStore.getState().army)

  //---------------------
  // para el drag & drop
  const setArmy = useStackStore(state => state.setArmy)
  const { army } = useStackStore()
  //---------------------

  //-------------------

  // const getStackUnits = useStackStore(state => state.getStackUnits)
  // const getStackUnitLimit = useStackStore(state => state.getStackUnitLimit)
  // const getStackStrLimit = useStackStore(state => state.getStackStrLimit)
  // const getArmyAuthority = useStackStore(state => state.getArmyAuthority)
  // const getArmyDominance = useStackStore(state => state.getArmyDominance)

  const [citadel, setCitadel] = useState<Citadel>(citadele10)

  const [selectedTarget, setSelectedTarget] = useState('citadele10')
  const [addUnitMode, setAddUnitMode] = useState('previousStackStatsLimit')
  const [report, setReport] = useState<Result[]>([])

  const [cardType, setCardType] = useState('card') // card , smallcard
  const [gapPercent, setGapPercent] = useState(10) // card , smallcard
  const [gapStrength, setGapStrength] = useState(0)
  const [jsonExport, setJsonExport] = useState<string>('')
  const [loading, setLoading] = useState(false)

  // const sensors = useSensor(PointerSensor, {
  //   activationConstraint: {
  //     delay: 100,
  //     tolerance: 5,
  //   },
  // });
  // const sensors = useSensors(
  //   useSensor(MouseSensor, {
  //     activationConstraint: { delay: 20, tolerance: 3, distance: 8 }
  //   }),
  //   useSensor(TouchSensor, {
  //     activationConstraint: {
  //       delay: 20,
  //       tolerance: 3,
  //       distance: 8
  //     }
  //   }),
  //   useSensor(KeyboardSensor, {
  //     // Disable smooth scrolling in Cypress automated tests
  //     scrollBehavior: 'Cypress' in window ? 'auto' : undefined,
  //     coordinateGetter: sortableKeyboardCoordinates
  //   })
  // )

  useEffect(() => useStackStore.subscribe(state => (armyRef.current = state.army)), [])

  useEffect(() => {
    let selectedCitadel = citadele10
    if (selectedTarget === 'citadele10') {
      selectedCitadel = citadele10
    }
    if (selectedTarget === 'citadele15') {
      selectedCitadel = citadele15
    }
    if (selectedTarget === 'citadele20') {
      selectedCitadel = citadele20
    }
    if (selectedTarget === 'citadele25') {
      selectedCitadel = citadele25
    }
    if (selectedTarget === 'citadele30') {
      selectedCitadel = citadele30
    }
    if (selectedTarget === 'citadelc20') {
      selectedCitadel = citadelc20
    }
    if (selectedTarget === 'citadelc25') {
      selectedCitadel = citadelc25
    }
    if (selectedTarget === 'lvl17HeroicElfSquad') {
      console.log('select target lvl17heroic', lvl17HeroicElfSquad)
      selectedCitadel = lvl17HeroicElfSquad
    }

    setCitadel(selectedCitadel)
  }, [selectedTarget])

  const changeMobTarget = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTarget(e.target.value)
  }

  const changeLeadership = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() !== '') {
      const value = parseInt(e.target.value)
      setLeadership(value)
    }
  }
  const changeAuthority = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() !== '') {
      const value = parseInt(e.target.value)
      setAuthority(value)
    }
  }
  const changeDominance = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() !== '') {
      const value = parseInt(e.target.value)
      setDominance(value)
    }
  }

  const calcSTR = () => {
    setLoading(true)
    //https://www.youtube.com/watch?app=desktop&v=8rdVjHNRXn0
    // according to youtube video, the squad with highest strength attack first
    // its not based on health, as other people said
    /**
     * highest initiative determine the attack order, who attack first you or the monster
     * the order is determined only once at start
     *
     * question.. how u determine the initiative ??
     *
     * if both you vs enemy have the same initiative, the order is random
     *
     * then.. on some side.. the stack with highest strength attack first
     * the target is based on health
     * if your total damage is higher than the enemy health,
     * your stack attack another stack
     * ie:
     * melee can attack beast and mounted
     * if beast have lower hp than your squad total damage, then it will attack the mounted squad
     */

    /**
       im going to add a gap, void, empty, threshold, space (whatever term to describe a jump between troops strength) to try to avoid changes in stack order
to my useless calc
---
example...
first stack: melee (spearman) strength: 100,000
second stack: monster,flying, strength: 99,999
captain: stror (no bonus on strength) ^_^
---
everything works like a charm... you kill 100 citadels... all ok..
then you change captain to ingrid... monster 20% bonus strength added...
--
now ... your stack order are broken
second stack: monster,flying, strength: becomes 120,000 strength..
its no longer the 2nd stack
---
IF use "gap 50%"
first stack: melee (spearman) strength: 100,000
second stack: monster,flying, strength: 50,000
captain: stror (no bonus on strength) ^_^
--
change ingrid +20% bonus on monster
--
first stack: melee (spearman) strength: 100,000
second stack: monster,flying, strength:  60,000
--
second REMAINS second

     */

    if (armyRef.current.length === 0) {
      // algo debe estar marcado
      alert('pick riders')
      return
    }

    resetAllStacks()

    // gapPercent will be calculated based on first stack strength only
    // because if use the "previous stack" to calculate.. and each previous stack have lower strength
    // some of the latest troops will be affected negativelly
    // having less room to grow

    // deep copy the army to a normal object
    const ARMY = structuredClone(armyRef.current)

    // console.log('max leadership', leadership)
    // console.log('max authority', authority)
    // console.log('max dominance', dominance)
    // console.log('army', ARMY)

    let maxLoop = 1000000 // should change it for a timer
    //let totalLeadership = 0
    // let totalAuthority = 0
    // let totalDominance = 0
    let lastLeadershipCalculated = 0 // to break the loop, if didnt changed (loop protection)
    let lastAuthorityCalculated = 0 // to break the loop, if didnt changed (loop protection)
    let lastDominanceCalculated = 0 // to break the loop, if didnt changed (loop protection)

    let playing = true
    let gapStrength = 0
    while (playing) {
      // 1. check leadership acumulado del army
      // 2. agregar 1 unit al sacrificio
      let stack: Stack | null = ARMY[0] // el primero de la lista es el sacrificio, incrementa de 1 en 1
      // console.log('army0', army[0], armyRef.current[0])

      let canIAddToFirstStack = true
      if (
        stack.unit.clasification === 'army' &&
        getArmyLeadership(ARMY) + stack.unit.LEADERSHIP > leadership
      ) {
        canIAddToFirstStack = false
        // addArmyUnits(ARMY, 0, 1)
      } else if (
        stack.unit.clasification === 'merc' &&
        getArmyAuthority(ARMY) + stack.unit.AUTHORITY > authority
      ) {
        canIAddToFirstStack = false
        // addArmyUnits(ARMY, 0, 1)
      } else if (
        stack.unit.clasification === 'monster' &&
        getArmyDominance(ARMY) + stack.unit.DOMINANCE > dominance
      ) {
        canIAddToFirstStack = false
        // addArmyUnits(ARMY, 0, 1)
      }

      if (ARMY[0].useUnitLimit && ARMY[0].unitsAmount >= ARMY[0].unitLimit) {
        canIAddToFirstStack = false
      }

      const unitStrength = stack.unit.BASESTR * (1 + stack.strBonus / 100)

      if (ARMY[0].useStrLimit) {
        if (
          stack.strLimitType === '' &&
          getStackStrength(ARMY, 0) + unitStrength >= ARMY[0].strLimit
        ) {
          // el strLimit se pone la vida del enemigo
          // para que calcule la cantidad maxima de tropas a enviar
          // en el calculo del strLimit SIN  feature bonus: ejm. SIN vsMelee
          // la fuerza maxima del stack debe ser menor que la vida del enemigo
          // para que al seleccionar objetivo se tenga como target ese stack espeficico del enemigo
          // ejm.
          // si tengo bono de ataque vsMounted, y el enemigo tiene una tropa de tipo mounted, y su vida es de 1000
          // para poder atacarlo, la fuerza maxima de mi stack debe ser menor que 1000
          //--
          // SI incluyo el bono vsMounted en el calculo de la fuerza maxima, debo agregar 1 unidad extra a la cuenta de tropas
          // para que el daño efectivo total (incluido vsMounted) sobrepase a la vida disponible del enemigo
          //--
          // SI NO incluyo algun bono en el calculo de la fuerza maxima, voy a tener unidades extra, que aun van a atacar al mismo objetivo
          // y el daño efectivo total, va a exceder mucho mas que la vida disponible del enemigo
          //--
          // en ambos casos se apunta al mismo objetivo, pero al incluir el bono vsMounted y agregar 1, se ahorran mas tropas
          //--
          // en el codigo al tener la comprobacion con > y NO con >= automaticamente se suma 1 a la cuenta, por lo que el usuario no tiene que agregar nada

          canIAddToFirstStack = false
        } else {
          const stackStrengthWithBonus = getStrengthWithBonus(ARMY[0])

          const strLimitValue = stackStrengthWithBonus.find(
            limit => limit.type === stack?.strLimitType
          )
          if (strLimitValue) {
            const stackStrength = strLimitValue.str
            const unitStrength = stack.unit.BASESTR * (1 + strLimitValue.percent / 100)
            // en strLimit se pone la vida del enemigo
            // para que calcule la cantidad maxima de tropas a enviar
            // en el calculo del strLimit se usa el feature bonus: ejm. vsMelee
            // que se usa para el calculo del "daño efectivo" que es lo que se aplica al restar vida en una pelea
            // por lo tanto, este "daño efectivo" debe ser mayor o igual a la vida
            // por lo que debo agregar 1 unidad extra a la cuenta de tropas
            // y se debe usar > en lugar de >=
            if (stackStrength + unitStrength > ARMY[0].strLimit) {
              canIAddToFirstStack = false
            }
          }
        }
      }

      const unitHealth = stack.unit.BASEHP * (1 + stack.hpBonus / 100)
      if (ARMY[0].useHpLimit && getStackHealth(ARMY, 0) + unitHealth > ARMY[0].HpLimit) {
        canIAddToFirstStack = false
      }

      if (canIAddToFirstStack) {
        addArmyUnits(ARMY, 0, 1)
      }

      // console.log('army0', army[0], armyRef.current[0])

      // 3. calcular str del sacrificio
      const sacrificeGroupStrength = getStackStrength(ARMY, 0)
      // console.log('sacrifice strength', sacrificeGroupStrength)

      // calculate gap for next stacks
      gapStrength = (sacrificeGroupStrength * gapPercent) / 100

      // const monsterStack = getMobTarget(stack.unit)
      // const unitsNeededToKill1Mob = calculateUnitsMobKill(monsterStack.unit, stack.unit)
      // updateMinSetup(stack.id!, unitsNeededToKill1Mob)

      for (let i = 1; i < ARMY.length; i++) {
        stack = ARMY[i] //armyRef.current[i]
        if (!stack) {
          playing = false
          break
        }
        // console.log('current stack', stack)

        // 4. calcular cuantos unit necesita pa matar 1 mob
        // const monsterStack = getMobTarget(stack.unit)

        // TODO: move calc minsetup when add the soldier (left panel)
        // const unitsNeededToKill1Mob = calculateUnitsMobKill(monsterStack.unit, stack.unit)
        // const unitsNeededToKill1Mob = 1 //siempre 1
        // updateMinSetup(stack.id!, unitsNeededToKill1Mob)
        // console.log('min units mob kill', stack.unit.name, unitsNeededToKill1Mob)

        /**manejo de leadership */
        if (stack.unit.clasification === 'army') {
          // 6. check leadership del nuevo grupo
          // const unitsCount = stack.lockMinSetup ? unitsNeededToKill1Mob : 1
          const unitsCount = 1 // por ahora siempre 1
          const newStackLeadership = stack.unit.LEADERSHIP * unitsCount

          // 7 check leadership acumulado + leadership nuevo sea menor que el disponible

          while (getArmyLeadership(ARMY) + newStackLeadership <= leadership) {
            // console.log(
            //   '...lead',
            //   stack.unit.name,
            //   stack.strBonus,
            //   stack.useStrLimit,
            //   stack.strLimit,
            //   stack.useUnitLimit,
            //   stack.unitLimit
            // )
            // 8. check HP acumulado + hp nuevo sea menor que el del sacrificio
            const stackStrength = getStackStrength(ARMY, i)

            // const totalSTRPerUnit = getSTRWithBonus(stack.unit, bonus) //sin el config bonus
            const totalSTRPerUnit = stack.unit.BASESTR * (1 + stack.strBonus / 100) // ahora individual cada stack tiene su prpio bonus
            const newStackStrength = totalSTRPerUnit * unitsCount

            const finalGapStrength = (gapStrength * ARMY[i - 1].gapPercent) / 100

            let groupStrength = sacrificeGroupStrength - finalGapStrength // if (addUnitMode === 'sacrificeStatsLimit') {}
            if (addUnitMode === 'previousStackStatsLimit') {
              const previousGroupStrength = getStackStrength(ARMY, i - 1)
              groupStrength = previousGroupStrength - finalGapStrength
            }

            // console.log(
            //   'unit limit',
            //   stack.useUnitLimit,
            //   stack.units,
            //   getStackUnits(stack.id),
            //   stack.unitLimit,
            //   getStackStrLimit(stack.id),
            //   stack.strLimit
            // )
            if (ARMY[i].useUnitLimit && ARMY[i].unitsAmount >= ARMY[i].unitLimit) {
              // if (stack.useUnitLimit && getStackUnits(stack.id) >= getStackUnitLimit(stack.id)) {
              // console.log('rompio lead1')
              break
            }

            // if (ARMY[i].useStrLimit && stackStrength + newStackStrength >= ARMY[i].strLimit) {
            //   // console.log(
            //   //   'lead: str limit',
            //   //   ARMY[i].useStrLimit,
            //   //   stackStrength + newStackStrength,
            //   //   '>=',
            //   //   ARMY[i].strLimit
            //   // )

            //   // console.log('rompio lead2')
            //   break
            // }

            if (ARMY[i].useStrLimit) {
              if (
                stack.strLimitType === '' &&
                stackStrength + newStackStrength >= ARMY[i].strLimit
              ) {
                break
              } else {
                const stackStrengthWithBonus = getStrengthWithBonus(ARMY[i])

                const strLimitValue = stackStrengthWithBonus.find(
                  limit => limit.type === stack?.strLimitType
                )
                if (strLimitValue) {
                  const stackStrength = strLimitValue.str
                  const unitStrength = stack.unit.BASESTR * (1 + strLimitValue.percent / 100)

                  if (stackStrength + unitStrength > ARMY[i].strLimit) {
                    break
                  }
                }
              }
            }

            if (stackStrength + newStackStrength >= groupStrength) {
              // 9. agregar al stack
              // console.log('rompio lead3')
              break
            }

            const stackHealth = getStackHealth(ARMY, i)
            // const totalSTRPerUnit = getSTRWithBonus(stack.unit, bonus) //sin el config bonus
            const totalHPPerUnit = stack.unit.BASEHP * (1 + stack.hpBonus / 100) // ahora individual cada stack tiene su prpio bonus
            const newStackHealth = totalHPPerUnit * unitsCount
            if (ARMY[i].useHpLimit && stackHealth + newStackHealth >= ARMY[i].HpLimit) {
              // console.log(
              //   'lead: hp limit',
              //   ARMY[i].useHpLimit,
              //   stackHealth + newStackHealth,
              //   '>=',
              //   ARMY[i].HpLimit
              // )

              // console.log('rompio lead4')
              break
            }

            // console.log('leadership: agregando units a ', ARMY[i].unit.name)
            addArmyUnits(ARMY, i, unitsCount)

            // console.log('new army', ARMY)
          }
        }

        if (stack.unit.clasification === 'merc') {
          // 5. check authority acumulado del mercenaries
          // 6. check authority del nuevo grupo
          // const unitsCount = stack.lockMinSetup ? unitsNeededToKill1Mob : 1
          const unitsCount = 1 //siempre 1
          const newStackAuthority = stack.unit.AUTHORITY * unitsCount
          // 7 check authority acumulado + authority nuevo sea menor que el disponible
          while (getArmyAuthority(ARMY) + newStackAuthority <= authority) {
            // console.log(
            //   '...auth',
            //   stack.unit.name,
            //   stack.strBonus,
            //   stack.useStrLimit,
            //   stack.strLimit,
            //   stack.useUnitLimit,
            //   stack.unitLimit
            // )
            // console.log(
            //   'check auth calc MENOR IGUAL ',
            //   getArmyAuthority(ARMY) + newStackAuthority,
            //   'authority',
            //   authority
            // )
            // 8. check HP acumulado + hp nuevo sea menor que el del sacrificio
            const stackStrength = getStackStrength(ARMY, i)
            // const totalSTRPerUnit = getSTRWithBonus(stack.unit, bonus)
            const totalSTRPerUnit = stack.unit.BASESTR * (1 + stack.strBonus / 100) // ahora individual cada stack tiene su prpio bonus
            const newStackStrength = totalSTRPerUnit * unitsCount

            const finalGapStrength = (gapStrength * ARMY[i - 1].gapPercent) / 100
            let groupStrength = sacrificeGroupStrength - finalGapStrength // if (addUnitMode === 'sacrificeStatsLimit') {}
            if (addUnitMode === 'previousStackStatsLimit') {
              const previousGroupStrength = getStackStrength(ARMY, i - 1)
              groupStrength = previousGroupStrength - finalGapStrength
            }

            if (ARMY[i].useUnitLimit && ARMY[i].unitsAmount >= ARMY[i].unitLimit) {
              // if (stack.useUnitLimit && getStackUnits(stack.id) >= getStackUnitLimit(stack.id)) {
              // console.log('rompio merc1')
              break
            }

            // if (ARMY[i].useStrLimit && stackStrength + newStackStrength >= ARMY[i].strLimit) {
            //   // console.log(
            //   //   'auth: str limit',
            //   //   ARMY[i].useStrLimit,
            //   //   stackStrength + newStackStrength,
            //   //   '>=',
            //   //   ARMY[i].strLimit
            //   // )
            //   // console.log('rompio merc2')
            //   break
            // }
            if (ARMY[i].useStrLimit) {
              if (
                stack.strLimitType === '' &&
                stackStrength + newStackStrength >= ARMY[i].strLimit
              ) {
                break
              } else {
                const stackStrengthWithBonus = getStrengthWithBonus(ARMY[i])

                const strLimitValue = stackStrengthWithBonus.find(
                  limit => limit.type === stack?.strLimitType
                )
                if (strLimitValue) {
                  const stackStrength = strLimitValue.str
                  const unitStrength = stack.unit.BASESTR * (1 + strLimitValue.percent / 100)

                  if (stackStrength + unitStrength > ARMY[i].strLimit) {
                    break
                  }
                }
              }
            }

            if (stackStrength + newStackStrength >= groupStrength) {
              // console.log(
              //   'break on str mayor ',
              //   stackStrength,
              //   newStackStrength,
              //   stackStrength + newStackStrength,
              //   '>',
              //   groupStrength
              // )
              // console.log('rompio merc3')
              break
            }

            const stackHealth = getStackHealth(ARMY, i)
            // const totalSTRPerUnit = getSTRWithBonus(stack.unit, bonus) //sin el config bonus
            const totalHPPerUnit = stack.unit.BASEHP * (1 + stack.hpBonus / 100) // ahora individual cada stack tiene su prpio bonus
            const newStackHealth = totalHPPerUnit * unitsCount
            if (ARMY[i].useHpLimit && stackHealth + newStackHealth >= ARMY[i].HpLimit) {
              // console.log(
              //   'auth: hp limit',
              //   ARMY[i].useHpLimit,
              //   stackHealth + newStackHealth,
              //   '>=',
              //   ARMY[i].HpLimit
              // )

              // console.log('rompio merc4')
              break
            }

            // 9. agregar al stack
            // console.log('authority: agregando units en ', ARMY[i].unit.name)
            addArmyUnits(ARMY, i, unitsCount)
          }
        }

        if (stack.unit.clasification === 'monster') {
          // 5. check DOMINANCE acumulado del mercenaries
          // 6. check DOMINANCE del nuevo grupo
          // const unitsCount = stack.lockMinSetup ? unitsNeededToKill1Mob : 1
          const unitsCount = 1
          const newStackDominance = stack.unit.DOMINANCE * unitsCount

          // 7 check DOMINANCE acumulado + DOMINANCE nuevo sea menor que el disponible
          while (getArmyDominance(ARMY) + newStackDominance <= dominance) {
            // console.log(
            //   '...domi',
            //   stack.unit.name,
            //   stack.strBonus,
            //   stack.useStrLimit,
            //   stack.strLimit,
            //   stack.useUnitLimit,
            //   stack.unitLimit
            // )
            // 8. check HP acumulado + hp nuevo sea menor que el del sacrificio
            const stackStrength = getStackStrength(ARMY, i)
            // const totalSTRPerUnit = getSTRWithBonus(stack.unit, bonus)
            const totalSTRPerUnit = stack.unit.BASESTR * (1 + stack.strBonus / 100) // ahora individual cada stack tiene su prpio bonus
            const newStackStrength = totalSTRPerUnit * unitsCount

            const finalGapStrength = (gapStrength * ARMY[i - 1].gapPercent) / 100
            let groupStrength = sacrificeGroupStrength - finalGapStrength // if (addUnitMode === 'sacrificeStatsLimit') {}
            if (addUnitMode === 'previousStackStatsLimit') {
              const previousGroupStrength = getStackStrength(ARMY, i - 1)
              groupStrength = previousGroupStrength - finalGapStrength
            }

            if (ARMY[i].useUnitLimit && ARMY[i].unitsAmount >= ARMY[i].unitLimit) {
              // if (stack.useUnitLimit && getStackUnits(stack.id) >= getStackUnitLimit(stack.id)) {
              // console.log('rompio dom1')
              break
            }

            // if (ARMY[i].useStrLimit && stackStrength + newStackStrength >= ARMY[i].strLimit) {
            //   // console.log(
            //   //   'dominance: str limit',
            //   //   ARMY[i].useStrLimit,
            //   //   stackStrength + newStackStrength,
            //   //   '>=',
            //   //   ARMY[i].strLimit
            //   // )
            //   // console.log('rompio dom2')
            //   break
            // }
            if (ARMY[i].useStrLimit) {
              if (
                stack.strLimitType === '' &&
                stackStrength + newStackStrength >= ARMY[i].strLimit
              ) {
                break
              } else {
                const stackStrengthWithBonus = getStrengthWithBonus(ARMY[i])

                const strLimitValue = stackStrengthWithBonus.find(
                  limit => limit.type === stack?.strLimitType
                )
                if (strLimitValue) {
                  const stackStrength = strLimitValue.str
                  const unitStrength = stack.unit.BASESTR * (1 + strLimitValue.percent / 100)

                  if (stackStrength + unitStrength > ARMY[i].strLimit) {
                    break
                  }
                }
              }
            }

            if (stackStrength + newStackStrength >= groupStrength) {
              // 9. agregar al stack
              // console.log('rompio dom3')
              break
            }

            const stackHealth = getStackHealth(ARMY, i)
            // const totalSTRPerUnit = getSTRWithBonus(stack.unit, bonus) //sin el config bonus
            const totalHPPerUnit = stack.unit.BASEHP * (1 + stack.hpBonus / 100) // ahora individual cada stack tiene su prpio bonus
            const newStackHealth = totalHPPerUnit * unitsCount
            if (ARMY[i].useHpLimit && stackHealth + newStackHealth >= ARMY[i].HpLimit) {
              // console.log(
              //   'dom: hp limit',
              //   ARMY[i].useHpLimit,
              //   stackHealth + newStackHealth,
              //   '>=',
              //   ARMY[i].HpLimit
              // )

              // console.log('rompio dom4')
              break
            }

            // console.log('dominance: agregando units en ', ARMY[i].unit.name)
            addArmyUnits(ARMY, i, unitsCount)
          }
        }
      }

      // check if there were any changes

      if (
        lastLeadershipCalculated === getArmyLeadership(ARMY) &&
        lastAuthorityCalculated === getArmyAuthority(ARMY) &&
        lastDominanceCalculated === getArmyDominance(ARMY)
      ) {
        // console.log('no changes to leadership,authority or dominance, ending')
        playing = false
        break
      }
      lastLeadershipCalculated = getArmyLeadership(ARMY)
      lastAuthorityCalculated = getArmyAuthority(ARMY)
      lastDominanceCalculated = getArmyDominance(ARMY)

      console.log('quedan .........')
      console.log('leadership ', leadership, getArmyLeadership(ARMY))
      console.log('Authority ', authority, getArmyAuthority(ARMY))
      console.log('Dominance ', dominance, getArmyDominance(ARMY))

      if (
        getArmyAuthority(ARMY) > authority ||
        getArmyDominance(ARMY) > dominance ||
        getArmyLeadership(ARMY) > leadership
      ) {
        // no deberia pasar
        playing = false
        break
      }

      // console.log('loop protection', maxLoop)
      if (maxLoop-- < 1) {
        console.log('loop protection stop!!')
        playing = false
        break
      }
    }

    // update UI
    setArmy(ARMY)

    setGapStrength((getStackStrength(ARMY, 0) * gapPercent) / 100)

    setTimeout(() => {
      setLoading(false)
    }, 300)
  }

  const verifyCitadel = () => {
    // console.log('verifying citadele20')
    const checkResult: Result[] = []
    // let troopsTypes: boolean = false

    // ***********************************
    // simulation

    // BOTH sides my army, citadel already ordered based on stack strength, so no need to do anything
    // INFO: I DO first attack
    addReportData(checkResult, 0, 'simulation i attack first')

    // prepare army units for fighting, format data to have same structure as citadel
    const myArmy = prepareArmyData(army)

    const citadelWithoutWalls = citadel.stacks.filter(
      stack => stack.unit.category !== 'fortification'
    )

    const citadelClone = structuredClone(citadelWithoutWalls)

    // citadel.forEach((stack, i) => {
    //   stack.unitsAmount = citadele20.stacks[i].unitsAmount
    // })

    // las tropas ya estan ordenadas del mas fuerte al mas debil, no hay q hacer nada

    const fightResult = fight(myArmy, citadelClone)
    checkResult.push(...fightResult)

    // console.log('citadel after hit', citadel)

    setReport(checkResult)
    // console.log(' citadele20 result', checkResult)
  }

  const generateData = () => {
    const citadelData = citadel.stacks.map(stack => ({
      unitId: stack.unit.name,
      baseStr: stack.unit.BASESTR,
      baseHp: stack.unit.BASEHP,
      unitsAmount: stack.unitsAmount,
      category: stack.unit.category,
      vsMeleePercent: stack.unit.vsMeleePercent,
      vsRangedPercent: stack.unit.vsRangedPercent,
      vsMountedPercent: stack.unit.vsMountedPercent,
      vsFlyingPercent: stack.unit.vsFlyingPercent,
      vsBeastPercent: stack.unit.vsBeastPercent,
      vsGiantPercent: stack.unit.vsGiantPercent,
      vsElementalPercent: stack.unit.vsElementalPercent,
      vsDragonPercent: stack.unit.vsDragonPercent,
      vsSiegePercent: stack.unit.vsSiegePercent
    }))

    const data =
      /**
     row format
     unitId,basestr,basehp,bonusStr,bonusHP,category,group+subgroup,unitsAmount,vsMelee%,vsETC%
     */
      armyRef.current.map(stack => ({
        unitId: stack.unitKey,
        baseStr: stack.unit.BASESTR,
        baseHp: stack.unit.BASEHP,
        bonusStr: stack.strBonus,
        bonusHp: stack.hpBonus,
        category: stack.unit.category,
        group: stack.unit.group,
        subgroup: stack.unit.subGroup,
        unitsAmount: stack.unitsAmount,
        vsMeleePercent: stack.unit.vsMeleePercent,
        vsRangedPercent: stack.unit.vsRangedPercent,
        vsMountedPercent: stack.unit.vsMountedPercent,
        vsFlyingPercent: stack.unit.vsFlyingPercent,
        vsBeastPercent: stack.unit.vsBeastPercent,
        vsGiantPercent: stack.unit.vsGiantPercent,
        vsElementalPercent: stack.unit.vsElementalPercent,
        vsDragonPercent: stack.unit.vsDragonPercent,
        vsSiegePercent: stack.unit.vsSiegePercent
      }))

    const citadelJsonData = JSON.stringify(citadelData)

    const jsondata = JSON.stringify(data)
    const myUnits = armyRef.current.map(stack => stack.unit.name).join(', ')
    const citadelUnits = citadel.stacks.map(stack => stack.unit.name)
    const report = `
    formulas:
    to calculate total strength (#totalStrength):totalStrength= baseStr*(1+bonusStr/100)*unitsAmount

  to calculate total health  (#totalHealth): totalHealth=baseHp*(1+bonusHp/100)*unitsAmount

  to calculate efective damage, we use a feature bonus (#featureBonus): vsMeleePercent,
vsRangedPercent,
vsMountedPercent,
vsFlyingPercent,
vsBeastPercent,
vsGiantPercent,
vsElementalPercent,
vsDragonPercent,
vsSiegePercent
and the following formula  (#efectiveDamage):

efectiveDamage = min(
    baseStr * (1 + (bonusStr + featureBonus)/100) * unitsAmount,
    totalHealth_enemy  # Límite máximo: vida actual del objetivo
)

    to calculate total damage: (
    citadel JSON data (#enemy): ${citadelJsonData}
    player JSON data (#player):${jsondata}

    #enemy dont have bonusStr or bonusHp
    the formula to calculate totalStrength for #enemy would be
    totalStrength= baseStr*unitsAmount

    the formula to calculate totalHealth for #enemy would be
    totalHealth=baseHp*unitsAmount

    some of the combat rules are the following (#combatRulesToConfirm):
    1. stack order is determined by the strongest stack y se recalcula cada ciclo basado en el totalStrength actualizado.
    2. el objetivo se selecciona priorizando el mayor daño efectivo posible, pero con las siguientes condiciones:

    a. El oponente debe coincidir con el tipo del bono de ataque (ej: vsMontado → atacar unidades montadas).
    b. si existe mas de un objetivo que coincida con el tipo de bono, se priorizara al objetivo que nos pueda hacer el mayor daño efectivo posible, en otras palabras que tenga mayor capacidad de contraataque.
    c. si el oponente es del mismo tipo que el bono de ataque, pero su vida total disponible es menor que la fuerza total que dispone, entonces se buscara otro objetivo


    d. Si el objetivo cumple el tipo de bono y su vida es mayor que la fuerza del atacante, se procedera al ataque,
    calculando el daño efectivo,
    y si el daño efectivo es mayor a la vida disponible del enemigo  se eliminara al enemigo,
    el excedente no se acumula ni se transfiere. Se descarta totalmente.


    si el daño efectivo es menor a la vida disponible del enemigo, se acumulara el daño para el siguiente ataque
    e. si no se encuentra un objetivo de ataque, que su categoria sea del mismo tipo que el bono de ataque, entonces se atacara al oponente mas fuerte que aun este con vida
    f. si se ataca a un objetivo que no cumple el tipo de bono, el daño total sera igual a la fuerza total del atacante
    g. Si existen múltiples objetivos válidos que cumplen con el tipo de bono de ataque y tienen vida suficiente, se priorizará aquel que represente la mayor amenaza potencial futura. Esta amenaza se calculará como:

        Amenaza = totalStrength_enemigo × (1 + bono_enemigo_vs_tu_categoría/100)

        Donde:

    totalStrength_enemigo: Fuerza total del objetivo enemigo.
    bono_enemigo_vs_tu_categoría: Bono de daño del enemigo contra la categoría de la unidad atacante.



    7. El daño acumulativo aplica solo si el objetivo sobrevive al ataque inicial, que se sumara al daño inicial.


    8. el turno de ataque es alternado entre los dos enemigos.
    9. si alguno de los dos enemigos tiene mayor numero de tropas, las tropas restantes que aun no han atacado atacaran al final
    10. todo esto se repetira hasta que solo quede uno con vida


    we want to obtain the combat rules to confirm if the combat rules we know are correct or get corrected if needed  from the following battle report: (#battleReport)



- ArcherG5 ataca a LifeDragon haciendo un total de 29520000 de daño, mas 5463980 de daño adicional, eliminando a 41 unidades
- Ent ataca a heavyArbalesterVI haciendo un total de 12446500 de daño, mas 4416500 de daño adicional, eliminando a 447 unidades
- SpearmanG5 ataca a Ent haciendo un total de 24090000 de daño, eliminando a 110 unidades
- Centaur ataca a ArcherG5 haciendo un total de 9750000 de daño, mas 3250000 de daño adicional, eliminando a 633 unidades
- RiderG5 ataca a Centaur haciendo un total de 19500000 de daño, eliminando a 2500 unidades
- Bear ataca a RiderG5 haciendo un total de 8602000 de daño, mas 3542000 de daño adicional
- battleGriffinV ataca a Bear haciendo un total de 15180000 de daño, eliminando a 230 unidades
- Druid ataca a SpearmanG5 haciendo un total de 4050000 de daño, mas 810000 de daño adicional, , eliminando a 263 unidades
- heavyArbalesterVI ataca a Druid haciendo un total de 9720000 de daño, eliminando a 3600 unidades


utiliza el español, para hacer el analisis y las respuestas


----
ignora lo que continua abajo de esta linea:
    ${myUnits}
    ------
    ${citadelUnits}
    `

    const report2 = `

1. Stack and Army Structure:

Stack: A group of units of the same category.
Army: A collection of stacks. Each player and enemy initializes an army consisting of one or more stacks. Each player and enemy has one army.


to add some context, we have the following data:
    citadel JSON data (#enemy): ${citadelJsonData}
    player JSON data (#player):${jsondata}

and the following game rules (#gameRules):
   1. Selección de objetivo:
- Atacas al enemigo que mejor se adapte a tu bono de ataque (vsMelee, vsRanged, etc.).
- Si múltiples enemigos coinciden, eliges al que pueda hacerte más daño.
- Si el enemigo tiene poca vida, buscas otro objetivo.
- Threat Calculation: The target is selected based on the stack's total strength and the attacker's bonus against the target's category.
- Target Stack: The stack with the highest threat is selected as the target.

2. Daño efectivo:
- El daño se limita a la vida actual del enemigo.
- Si el daño supera la vida del enemigo, el excedente no se acumula.
- damage is calculated based on the stack strength and bonuses
- Damage Application: Damage is applied to the entire stack, reducing the number of units based on the damage dealt.
- Fórmula de daño efectivo:
efectiveDamage = min(
    baseStr * (1 + (bonusStr + featureBonus)/100) * unitsAmount,
    totalHealth_enemy
)

3. Daño acumulado:
- Si el enemigo sobrevive, el daño adicional se suma en el próximo ataque.

4. Turnos alternados:
- Stacks Take Turns: Stacks attack one at a time, alternating between player and enemy.
- Alternating Turns: Each stack from the player and enemy takes turns attacking.
- Remaining Stacks: any stacks that haven't attacked yet, will attack at the end of the round.

5. Priorización de amenaza:
- Si múltiples enemigos son vulnerables a tu ataque, eliges al que represente mayor amenaza futura.
- Fórmula de amenaza:
Amenaza = totalStrength_enemigo × (1 + bonus_enemigo_vs_tu_categoría/100)

6. Ataque sin bono:
- Si atacas sin coincidir con el tipo de bono, el daño es igual a tu fuerza total.
- Fórmula de fuerza total:
totalStrength = baseStr * (1 + bonusStr/100) * unitsAmount


8. Vida total:
- Fórmula de vida total:
totalHealth = baseHp * (1 + bonusHp/100) * unitsAmount

9. Fuerza total enemigo:
- Fórmula de fuerza total para enemigos (sin bonus):
totalStrength = baseStr * unitsAmount

10. Vida total enemigo:
- Fórmula de vida total para enemigos (sin bonus):
totalHealth = baseHp * unitsAmount

11. Victory Conditions:
- Elimination: The combat ends when one side has no remaining units in any of its stacks.
- Winner Declaration: The side with remaining units is declared the winner.


we want to obtain the combat rules to confirm if the combat rules we know are correct or get corrected if needed  from the following battle report: (#battleReport)

- ArcherG5 ataca a LifeDragon haciendo un total de 29520000 de daño, mas 5463980 de daño adicional, eliminando a 41 unidades
- Ent ataca a heavyArbalesterVI haciendo un total de 12446500 de daño, mas 4416500 de daño adicional, eliminando a 447 unidades
- SpearmanG5 ataca a Ent haciendo un total de 24090000 de daño, eliminando a 110 unidades
- Centaur ataca a ArcherG5 haciendo un total de 9750000 de daño, mas 3250000 de daño adicional, eliminando a 633 unidades
- RiderG5 ataca a Centaur haciendo un total de 19500000 de daño, eliminando a 2500 unidades
- Bear ataca a RiderG5 haciendo un total de 8602000 de daño, mas 3542000 de daño adicional
- battleGriffinV ataca a Bear haciendo un total de 15180000 de daño, eliminando a 230 unidades
- Druid ataca a SpearmanG5 haciendo un total de 4050000 de daño, mas 810000 de daño adicional, , eliminando a 263 unidades
- heavyArbalesterVI ataca a Druid haciendo un total de 9720000 de daño, eliminando a 3600 unidades


utiliza el español, para hacer el analisis y las respuestas


----
ignora lo que continua abajo de esta linea:
    ${myUnits}
    ------
    ${citadelUnits}
    `
    setJsonExport(report2)
    alert('asdfasfasd')
    console.log('report promp', jsonExport)
    console.log('report promp', report)
    navigator.clipboard.writeText(report2)
  }

  const handleDrag = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const index1 = army.findIndex(stack => stack.id === active.id)
      const index2 = army.findIndex(stack => stack.id === over.id)
      setArmy(arrayMove(army, index1, index2))
    }
  }

  let counter = 0 // lines enumeration visual only

  return (
    <>
      <ArmyList />

      <nav className='pt-[57px] sm:ml-64 flex'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
          <div className='config-container flex flex-wrap gap-8'>
            <div className=''>
              <div>
                <label>Leadership </label>
                <input
                  type='number'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  value={leadership}
                  onChange={changeLeadership}
                  required
                />
              </div>
              <div>
                <label>Authority (mercs)</label>
                <input
                  type='number'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  value={authority}
                  onChange={changeAuthority}
                  required
                />
              </div>
              <div>
                <label>Dominance (monsters)</label>
                <input
                  type='number'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  value={dominance}
                  onChange={changeDominance}
                  required
                />
              </div>
            </div>
            <div className=''>
              <div className='group  hidden lg:block'>
                <label>Target </label>
                <select
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  value={selectedTarget}
                  onChange={changeMobTarget}
                >
                  <option value='citadele10'>Elf Citadel lvl 10</option>
                  <option value='citadele15'>Elf Citadel lvl 15</option>
                  <option value='citadele20'>Elf Citadel lvl 20</option>
                  <option value='citadele25'>Elf Citadel lvl 25</option>
                  <option value='citadele30'>Elf Citadel lvl 30</option>
                  <option value='citadelc20'>Cursed Citadel lvl 20</option>
                  <option value='citadelc25'>Cursed Citadel lvl 25</option>
                  {/* <option value='lvl17HeroicElfSquad'>lvl 17 Heroic Elf Squad</option> */}
                </select>
              </div>

              <div className='mt-5'>
                <label>Sacrifice strength limit</label>
                <input
                  type='radio'
                  value='sacrificeStatsLimit'
                  name='strengthLimit'
                  checked={addUnitMode === 'sacrificeStatsLimit'}
                  onChange={() => {
                    setAddUnitMode('sacrificeStatsLimit')
                  }}
                />
              </div>
              <div>
                <label>Previous stack strength limit/Decrement</label>
                <input
                  type='radio'
                  value='previousStackStatsLimit'
                  name='strengthLimit'
                  checked={addUnitMode === 'previousStackStatsLimit'}
                  onChange={() => {
                    setAddUnitMode('previousStackStatsLimit')
                  }}
                />
              </div>
            </div>
          </div>

          {/* ---------------------- */}

          <div className=''>
            <button
              data-drawer-target='sidebar-multi-level-sidebar'
              data-drawer-toggle='sidebar-multi-level-sidebar'
              aria-controls='sidebar-multi-level-sidebar'
              type='button'
              className='cursor-pointer sm:hidden focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300   rounded-lg text-xs px-0.5 py-0.5 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
            >
              Show Army
            </button>

            <div className='mt-5'>
              <div>
                <label>Card</label>
                <input
                  type='radio'
                  value='card'
                  name='cardType'
                  checked={cardType === 'card'}
                  onChange={() => {
                    setCardType('card')
                  }}
                />
              </div>
              <div>
                <label>Small Card</label>
                <input
                  type='radio'
                  value='card'
                  name='cardType'
                  checked={cardType === 'smallcard'}
                  onChange={() => {
                    setCardType('smallcard')
                  }}
                />
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <button
              className='px-2 py-0.5 bg-red-600 text-gray-100 rounded-2xl'
              onClick={generateData}
            >
              craptest
            </button>
          </div>
        </div>

        <div className='hidden lg:block'>
          {selectedTarget === 'citadele10' && <CitadelData type='e10' />}
          {selectedTarget === 'citadele15' && <CitadelData type='e15' />}
          {selectedTarget === 'citadele20' && <CitadelData type='e20' />}
          {selectedTarget === 'citadele25' && <CitadelData type='e25' />}
          {selectedTarget === 'citadele30' && <CitadelData type='e30' />}
          {selectedTarget === 'citadelc20' && <CitadelData type='c20' />}
          {selectedTarget === 'citadelc25' && <CitadelData type='c25' />}
          {selectedTarget === 'lvl17HeroicElfSquad' && <div>lvl17 Heroic Elf Squad</div>}

          <button
            className='px-1 py-0.5 bg-indigo-500 text-md font-bold text-white'
            onClick={verifyCitadel}
          >
            krap Zimulation
          </button>
        </div>
      </nav>

      <div className='pt-[57px] sm:ml-64 flex bg-gray-900'>
        <div className='p-4 border-2 '>
          <div className='stack-container'>
            <div className='sticky  top-[57px]'>
              <div className='flex  items-baseline'>
                <table className='skill-info'>
                  <thead>
                    <tr>
                      <th>Leadrshp</th>
                      <th>Authrity</th>
                      <th>Dominnce</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{getArmyLeadership(army)}</td>
                      <td>{getArmyAuthority(army)}</td>
                      <td>{getArmyDominance(army)}</td>
                    </tr>
                  </tbody>
                </table>

                <div className='ml-5 flex'>
                  <label
                    htmlFor='gap'
                    title='is a space between troops strength, in case a strength percent changes to avoid loosing the stack order and its calculated based on the first troop stack strength'
                  >
                    Gap Percent
                  </label>
                  <input
                    id='gap'
                    className='ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full max-w-[60px] h-[2.5rem] p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    type='number'
                    min={0}
                    max={100}
                    value={gapPercent}
                    onChange={e => setGapPercent(parseInt(e.target.value))}
                  />
                </div>
              </div>
              <Tips />
              <div className='btn-group'>
                <button
                  className='inline-flex text-center items-center cursor-pointer focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  text-lg px-[20%] py-0.5   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed'
                  onClick={calcSTR}
                  disabled={loading}
                >
                  {loading ? '.....thinking' : 'CALCULATE'}
                </button>
                <button
                  className='inline-flex cursor-pointer focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300    text-lg px-3.5 py-0.5 me-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
                  onClick={() => {
                    setArmy([])
                  }}
                >
                  Clear
                </button>
                <button
                  className='inline-flex cursor-pointer focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300    text-lg px-3.5 py-0.5 me-2  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800'
                  onClick={() => {
                    setArmy(
                      armyRef.current.toSorted((a, b) => {
                        // sort based on unit total health descending
                        return (
                          b.unit.BASEHP * (1 + b.hpBonus / 100) -
                          a.unit.BASEHP * (1 + a.hpBonus / 100)
                        )
                      })
                    )
                  }}
                >
                  dont touch me
                </button>
              </div>
            </div>

            <div className='stack-list'>
              <DndContext onDragEnd={handleDrag} /*sensors={sensors}*/>
                <SortableContext items={army}>
                  {army.map((stack, i, arr) => {
                    if (cardType === 'smallcard') {
                      return <SmallCard stack={stack} key={stack.id} />
                    } else {
                      if (i > 0) {
                        const stackBonus = stack.strBonus > 0 ? 1 + stack.strBonus / 100 : 1
                        const stackStr = stack.unit.BASESTR * stackBonus * stack.unitsAmount

                        const prevStack = arr[i - 1]
                        const prevStackBonus =
                          prevStack.strBonus > 0 ? 1 + prevStack.strBonus / 100 : 1
                        const prevStackStr =
                          prevStack.unit.BASESTR * prevStackBonus * prevStack.unitsAmount

                        return (
                          <Card
                            stack={stack}
                            key={stack.id}
                            gapValue={gapStrength}
                            overflow={stackStr > prevStackStr}
                          />
                        )
                      } else {
                        return (
                          <Card
                            stack={stack}
                            key={stack.id}
                            gapValue={gapStrength}
                            overflow={false}
                          />
                        )
                      }
                    }
                  })}
                </SortableContext>
              </DndContext>
            </div>
          </div>
        </div>
        {report.length > 0 && (
          <div className='mt-4 p-4 border-2'>
            {report.map((data, i) => {
              let color = 'text-green-700'
              if (data.status == 0) {
                color = 'text-blue-700'
              }
              if (data.status == 2) {
                color = 'text-red-700'
              }
              if (data.status == 3) {
                color = 'text-gray-200'
              }
              if (data.status == 4) {
                color = 'text-yellow-300'
              }

              if (data.reportType === 'item') {
                counter++
              }
              if (data.msg === '') {
                return (
                  <li key={`rpt${i}`} className={`text-sm ${color}`}>
                    {data.reportType === 'item' && (
                      <span className='font-bold text-yellow-300 mr-2'>{counter}: </span>
                    )}
                    <span className='font-bold text-emerald-600'>{data.attacker}</span> attacked{' '}
                    <span className='font-bold text-emerald-600'>{data.defender}</span>, dealing{' '}
                    <span className='font-bold text-blue-600'>{data.damageAmount.toFixed(0)}</span>{' '}
                    damage, killing{' '}
                    <span className='font-bold text-red-600'>{data.killedUnits}</span> units
                  </li>
                )
              } else {
                return (
                  <li key={`rpt${i}`} className={`text-sm ${color}`}>
                    <span>{data.msg}</span>
                  </li>
                )
              }
            })}
          </div>
        )}
      </div>

      {/* <div className='p-4 border-2 border-gray-300'>
        <h3 className='text-lg font-bold mt-2'>ARMY json data</h3>
        <p className='text-sm text-gray-500 w-full'>{jsonExport}</p>
      </div> */}
    </>
  )
}

export default Dos
