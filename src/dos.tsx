import { useState, useEffect, useRef, ChangeEvent } from 'react'

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
import { decodeAndLoadArmySetup, prepareExportData } from './utils.ts'
import { encodeHash } from './hashStore.ts'
import PageTitle from './pageTitle.tsx'

export interface DataResult {
  color: string
  msg: string
}

export const addReportData = (checkResult: DataResult[][], column: DataResult[]) => {
  checkResult.push(column)
}

function Dos() {
  const leadership = useStackStore(state => state.leadership)
  const authority = useStackStore(state => state.authority)
  const dominance = useStackStore(state => state.dominance)
  const gapBasePercent = useStackStore(state => state.gapBasePercent)
  const selectedTarget = useStackStore(state => state.selectedTarget)

  const setLeadership = useStackStore(state => state.setLeadership)
  const setAuthority = useStackStore(state => state.setAuthority)
  const setDominance = useStackStore(state => state.setDominance)
  const resetAllStacks = useStackStore(state => state.resetAllStacks)
  const setGapBasePercent = useStackStore(state => state.setGapBasePercent)
  const setSelectedTarget = useStackStore(state => state.setSelectedTarget)
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

  const [citadel, setCitadel] = useState<Citadel>(citadele20)

  // const [selectedTarget, setSelectedTarget] = useState('citadele10')
  const [addUnitMode, setAddUnitMode] = useState('previousStackStatsLimit')
  const [report, setReport] = useState<DataResult[][]>([])

  const [cardType, setCardType] = useState('card') // card , smallcard
  // const [gapPercent, setGapPercent] = useState(10) // card , smallcard
  const [gapStrength, setGapStrength] = useState(0)
  const [jsonExport, setJsonExport] = useState<string>('')
  const [presetArmy, setPresetArmy] = useState<string>('')
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
            // const unitStrength = stack.unit.BASESTR * (1 + strLimitValue.percent / 100)

            // fix: 14/4/25
            // para poder apuntar a un objetivo, solo el str sin feat.bono debe estar debajo del limite de vida del oponente
            // el strLimit con bono si puede pasar, es mas si DEBE pasar para poder asegurar que lo mate

            // en strLimit se pone la vida del enemigo
            // para que calcule la cantidad maxima de tropas a enviar
            // en el calculo del strLimit se usa el feature bonus: ejm. vsMelee
            // que se usa para el calculo del "daño efectivo" que es lo que se aplica al restar vida en una pelea
            // por lo tanto, este "daño efectivo" debe ser mayor o igual a la vida
            // por lo que debo agregar 1 unidad extra a la cuenta de tropas
            // y se debe usar > en lugar de >=
            if (stackStrength > ARMY[0].strLimit) {
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
      gapStrength = (sacrificeGroupStrength * gapBasePercent) / 100

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
                  // const unitStrength = stack.unit.BASESTR * (1 + strLimitValue.percent / 100)

                  // fix: 14/4/25
                  // para poder apuntar a un objetivo, solo el str sin feat.bono debe estar debajo del limite de vida del oponente
                  // el strLimit con bono si puede pasar, es mas si DEBE pasar para poder asegurar que lo mate

                  if (stackStrength > ARMY[i].strLimit) {
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
                  // const unitStrength = stack.unit.BASESTR * (1 + strLimitValue.percent / 100)

                  // fix: 14/4/25
                  // para poder apuntar a un objetivo, solo el str sin feat.bono debe estar debajo del limite de vida del oponente
                  // el strLimit con bono si puede pasar, es mas si DEBE pasar para poder asegurar que lo mate

                  if (stackStrength > ARMY[i].strLimit) {
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
                  // const unitStrength = stack.unit.BASESTR * (1 + strLimitValue.percent / 100)

                  // fix: 14/4/25
                  // para poder apuntar a un objetivo, solo el str sin feat.bono debe estar debajo del limite de vida del oponente
                  // el strLimit con bono si puede pasar, es mas si DEBE pasar para poder asegurar que lo mate

                  if (stackStrength > ARMY[i].strLimit) {
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

    setGapStrength((getStackStrength(ARMY, 0) * gapBasePercent) / 100)

    setTimeout(() => {
      setLoading(false)
    }, 300)
  }

  const verifyCitadel = () => {
    // console.log('verifying citadele20')
    const checkResult: DataResult[][] = []
    // let troopsTypes: boolean = false

    // ***********************************
    // simulation

    // BOTH sides my army, citadel already ordered based on stack strength, so no need to do anything
    // INFO: I DO first attack
    addReportData(checkResult, [{ color: 'green', msg: 'DOUBLE DAMAGE IS NOT CONSIDERED' }])
    addReportData(checkResult, [{ color: 'white', msg: 'I ATTACK FIRST' }])
    addReportData(checkResult, [{ color: 'white', msg: 'ATTACKER: ME, DEFENDER: CITADEL' }])
    addReportData(checkResult, [{ color: 'white', msg: '------------------' }])

    // prepare army units for fighting, format data to have same structure as citadel
    const myArmy = prepareArmyData(army)

    const citadelWithoutWalls = citadel.stacks.filter(
      stack => stack.unit.category !== 'fortification'
    )

    const citadelClone = structuredClone(citadelWithoutWalls)

    let result = fight(myArmy, citadelClone)
    checkResult.push(...result)
    addReportData(checkResult, [{ color: 'white', msg: '------------------' }])
    addReportData(checkResult, [{ color: 'white', msg: 'CITADEL ATTACK FIRST' }])
    addReportData(checkResult, [{ color: 'white', msg: 'ATTACKER: CITADEL, DEFENDER: ME' }])
    addReportData(checkResult, [{ color: 'white', msg: '------------------' }])

    const myArmy2 = prepareArmyData(army)

    const citadelWithoutWalls2 = citadel.stacks.filter(
      stack => stack.unit.category !== 'fortification'
    )

    const citadelClone2 = structuredClone(citadelWithoutWalls2)
    result = fight(citadelClone2, myArmy2)
    checkResult.push(...result)
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
     unitId,basestr,basehp,bonusStr,bonusHP,category,group+subGroup,unitsAmount,vsMelee%,vsETC%
     */
      armyRef.current.map(stack => ({
        unitId: stack.unitKey,
        baseStr: stack.unit.BASESTR,
        baseHp: stack.unit.BASEHP,
        bonusStr: stack.strBonus,
        bonusHp: stack.hpBonus,
        category: stack.unit.category,
        group: stack.unit.group,
        subGroup: stack.unit.subGroup,
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

  const saveData = () => {
    const data = prepareExportData(useStackStore.getState())
    const a = document.createElement('a')
    console.log('save data prepared', data)
    const json = encodeHash(JSON.stringify(data))
    const blob = new Blob([json], { type: 'octet/stream' })
    const url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = 'army.txt'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const readFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      const reader = new FileReader()

      if (event.target.files && event.target.files[0]) {
        reader.onload = function (e) {
          const output = e.target?.result
          console.log('file content', String(output))
          if (output) {
            decodeAndLoadArmySetup(String(output))
          }
        } //end onload()
        reader.readAsText(event.target.files[0])
      } //end if html5 filelist support
    } else {
      alert('The File APIs are not fully supported by your browser. Fallback required.')
    }
  }

  const loadPresetArmy = (event: ChangeEvent<HTMLSelectElement>) => {
    setPresetArmy(event.target.value)
    const cursed25G6M7Mercs =
      'eyJsZWFkZXJzaGlwIjoyMTAwMDAsImF1dGhvcml0eSI6MTAwMDAsImRvbWluYW5jZSI6MTAwMDAsImFybXkiOlt7ImxlYWRlcnNoaXAiOjAsImF1dGhvcml0eSI6MzE1LCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJ3eXZlcm5JSSIsInVuaXRLZXkiOiJ3eXZlcm5JSSIsInVuaXRzQW1vdW50Ijo1LCJsaW1pdCI6MCwic3RyQm9udXMiOjE4MzAsImhwQm9udXMiOjE4NTkuMywidW5pdExpbWl0Ijo1LCJ1c2VVbml0TGltaXQiOnRydWUsInVzZVN0ckxpbWl0IjpmYWxzZSwic3RyTGltaXQiOjAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjowfSx7ImxlYWRlcnNoaXAiOjAsImF1dGhvcml0eSI6NDU2LCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJkZW1vbmljU2FsYW1hbmRlcklJIiwidW5pdEtleSI6ImRlbW9uaWNTYWxhbWFuZGVySUkiLCJ1bml0c0Ftb3VudCI6MTIsImxpbWl0IjowLCJzdHJCb251cyI6MTIxMiwiaHBCb251cyI6MTM5NS4zLCJ1bml0TGltaXQiOjAsInVzZVVuaXRMaW1pdCI6ZmFsc2UsInVzZVN0ckxpbWl0IjpmYWxzZSwic3RyTGltaXQiOjAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjowfSx7ImxlYWRlcnNoaXAiOjAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjo0ODQsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJibGFja0RyYWdvblZJSSIsInVuaXRLZXkiOiJibGFja0RyYWdvblZJSSIsInVuaXRzQW1vdW50IjoxMSwibGltaXQiOjAsInN0ckJvbnVzIjoxODUxLCJocEJvbnVzIjoxODgyLjgsInVuaXRMaW1pdCI6MCwidXNlVW5pdExpbWl0IjpmYWxzZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6NTM0NjAwMDAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjowfSx7ImxlYWRlcnNoaXAiOjMwMDAwLCJhdXRob3JpdHkiOjAsImRvbWluYW5jZSI6MCwiZ2FwUGVyY2VudCI6MTAwLCJpZCI6IkNhdGFwdWx0RTUiLCJ1bml0S2V5IjoiQ2F0YXB1bHRFNSIsInVuaXRzQW1vdW50IjozMDAwLCJsaW1pdCI6MCwic3RyQm9udXMiOjcwNS41LCJocEJvbnVzIjo1MzUuMywidW5pdExpbWl0IjozMDAwLCJ1c2VVbml0TGltaXQiOnRydWUsInVzZVN0ckxpbWl0IjpmYWxzZSwic3RyTGltaXQiOjAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjowfSx7ImxlYWRlcnNoaXAiOjAsImF1dGhvcml0eSI6NTM0LCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJlcGljTW9uc3Rlckh1bnRlcklJIiwidW5pdEtleSI6ImVwaWNNb25zdGVySHVudGVySUkiLCJ1bml0c0Ftb3VudCI6NTM0LCJsaW1pdCI6MCwic3RyQm9udXMiOjM3NS41LCJocEJvbnVzIjo0ODguOCwidW5pdExpbWl0IjowLCJ1c2VVbml0TGltaXQiOmZhbHNlLCJ1c2VTdHJMaW1pdCI6ZmFsc2UsInN0ckxpbWl0IjowLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjoxODAwMCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJDYXRhcHVsdEU0IiwidW5pdEtleSI6IkNhdGFwdWx0RTQiLCJ1bml0c0Ftb3VudCI6MTgwMCwibGltaXQiOjAsInN0ckJvbnVzIjo3MDUuNSwiaHBCb251cyI6NTM1LjMsInVuaXRMaW1pdCI6MTgwMCwidXNlVW5pdExpbWl0Ijp0cnVlLCJ1c2VTdHJMaW1pdCI6ZmFsc2UsInN0ckxpbWl0IjowLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjoxNzAwLCJhdXRob3JpdHkiOjAsImRvbWluYW5jZSI6MCwiZ2FwUGVyY2VudCI6MTAwLCJpZCI6ImJhdHRsZUdyaWZmaW5WSSIsInVuaXRLZXkiOiJiYXR0bGVHcmlmZmluVkkiLCJ1bml0c0Ftb3VudCI6ODUsImxpbWl0IjowLCJzdHJCb251cyI6MTIwMCwiaHBCb251cyI6MTIwMCwidW5pdExpbWl0IjowLCJ1c2VVbml0TGltaXQiOmZhbHNlLCJ1c2VTdHJMaW1pdCI6ZmFsc2UsInN0ckxpbWl0IjowLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjozMjIwLCJhdXRob3JpdHkiOjAsImRvbWluYW5jZSI6MCwiZ2FwUGVyY2VudCI6MTAwLCJpZCI6ImJhdHRsZUdyaWZmaW5WIiwidW5pdEtleSI6ImJhdHRsZUdyaWZmaW5WIiwidW5pdHNBbW91bnQiOjE2MSwibGltaXQiOjAsInN0ckJvbnVzIjoxMjAwLCJocEJvbnVzIjoxMjAwLCJ1bml0TGltaXQiOjAsInVzZVVuaXRMaW1pdCI6ZmFsc2UsInVzZVN0ckxpbWl0IjpmYWxzZSwic3RyTGltaXQiOjAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjowfSx7ImxlYWRlcnNoaXAiOjAsImF1dGhvcml0eSI6NDAsImRvbWluYW5jZSI6MCwiZ2FwUGVyY2VudCI6MTAwLCJpZCI6ImV0ZXJuYWxDYW5ub25lZXJJSSIsInVuaXRLZXkiOiJldGVybmFsQ2Fubm9uZWVySUkiLCJ1bml0c0Ftb3VudCI6MSwibGltaXQiOjAsInN0ckJvbnVzIjoxMjEyLCJocEJvbnVzIjoxMzk1LjMsInVuaXRMaW1pdCI6MSwidXNlVW5pdExpbWl0Ijp0cnVlLCJ1c2VTdHJMaW1pdCI6ZmFsc2UsInN0ckxpbWl0IjowLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH1dfQ=='
    const cursed25 =
      'eyJsZWFkZXJzaGlwIjoxNTAwMDAsImF1dGhvcml0eSI6MTAwMDAsImRvbWluYW5jZSI6MTAwMDAsImFybXkiOlt7ImxlYWRlcnNoaXAiOjAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjoyNjQsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJibGFja0RyYWdvblZJSSIsInVuaXRLZXkiOiJibGFja0RyYWdvblZJSSIsInVuaXRzQW1vdW50Ijo2LCJtaW5TZXR1cCI6MCwibG9ja01pblNldHVwIjp0cnVlLCJsaW1pdCI6MCwic3RyQm9udXMiOjI0MjMuNSwiaHBCb251cyI6MjE3OC44LCJ1bml0TGltaXQiOjYsInVzZVVuaXRMaW1pdCI6dHJ1ZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6MTAwMCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJ2dWx0dXJlc1ZJSSIsInVuaXRLZXkiOiJ2dWx0dXJlc1ZJSSIsInVuaXRzQW1vdW50IjoxMDAwLCJtaW5TZXR1cCI6MCwibG9ja01pblNldHVwIjp0cnVlLCJsaW1pdCI6MCwic3RyQm9udXMiOjE4NjMsImhwQm9udXMiOjE1OTguMywidW5pdExpbWl0IjoxMDAwLCJ1c2VVbml0TGltaXQiOnRydWUsInVzZVN0ckxpbWl0IjpmYWxzZSwic3RyTGltaXQiOjAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjowfSx7ImxlYWRlcnNoaXAiOjAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjoxMDgsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJmaXJlUGhvZW5peEkiLCJ1bml0S2V5IjoiZmlyZVBob2VuaXhJIiwidW5pdHNBbW91bnQiOjIsIm1pblNldHVwIjowLCJsb2NrTWluU2V0dXAiOnRydWUsImxpbWl0IjowLCJzdHJCb251cyI6MjQyMy41LCJocEJvbnVzIjoyMTc4LjgsInVuaXRMaW1pdCI6MiwidXNlVW5pdExpbWl0Ijp0cnVlLCJ1c2VTdHJMaW1pdCI6ZmFsc2UsInN0ckxpbWl0IjowLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjo1MjAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjoxMDAsImlkIjoiY29yYXhJIiwidW5pdEtleSI6ImNvcmF4SSIsInVuaXRzQW1vdW50IjoyNiwibWluU2V0dXAiOjAsImxvY2tNaW5TZXR1cCI6dHJ1ZSwibGltaXQiOjAsInN0ckJvbnVzIjoxODYzLCJocEJvbnVzIjoxNTk4LjMsInVuaXRMaW1pdCI6MjYsInVzZVVuaXRMaW1pdCI6dHJ1ZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6MCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjI3MCwiZ2FwUGVyY2VudCI6MTAwLCJpZCI6IndpbmRMb3JkVklJIiwidW5pdEtleSI6IndpbmRMb3JkVklJIiwidW5pdHNBbW91bnQiOjYsIm1pblNldHVwIjowLCJsb2NrTWluU2V0dXAiOnRydWUsImxpbWl0IjowLCJzdHJCb251cyI6MTU1Ni41LCJocEJvbnVzIjoxNTEyLCJ1bml0TGltaXQiOjYsInVzZVVuaXRMaW1pdCI6dHJ1ZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6MTUwMCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJ2dWx0dXJlc1ZJIiwidW5pdEtleSI6InZ1bHR1cmVzVkkiLCJ1bml0c0Ftb3VudCI6MTUwMCwibWluU2V0dXAiOjAsImxvY2tNaW5TZXR1cCI6dHJ1ZSwibGltaXQiOjAsInN0ckJvbnVzIjoxODYzLCJocEJvbnVzIjoxNTk4LCJ1bml0TGltaXQiOjE1MDAsInVzZVVuaXRMaW1pdCI6dHJ1ZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6MjgwMDAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjoxMDAsImlkIjoiQ2F0YXB1bHRFMyIsInVuaXRLZXkiOiJDYXRhcHVsdEUzIiwidW5pdHNBbW91bnQiOjI4MDAsIm1pblNldHVwIjowLCJsb2NrTWluU2V0dXAiOnRydWUsImxpbWl0IjowLCJzdHJCb251cyI6OTk2LCJocEJvbnVzIjoyNzIsInVuaXRMaW1pdCI6MjgwMCwidXNlVW5pdExpbWl0Ijp0cnVlLCJ1c2VTdHJMaW1pdCI6ZmFsc2UsInN0ckxpbWl0IjowLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjoxNTUwMCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJDYXRhcHVsdEU0IiwidW5pdEtleSI6IkNhdGFwdWx0RTQiLCJ1bml0c0Ftb3VudCI6MTU1MCwibWluU2V0dXAiOjAsImxvY2tNaW5TZXR1cCI6dHJ1ZSwibGltaXQiOjAsInN0ckJvbnVzIjo5OTYsImhwQm9udXMiOjI3Mi4zLCJ1bml0TGltaXQiOjE1NTAsInVzZVVuaXRMaW1pdCI6dHJ1ZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6ODYwMCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJDYXRhcHVsdEU1IiwidW5pdEtleSI6IkNhdGFwdWx0RTUiLCJ1bml0c0Ftb3VudCI6ODYwLCJtaW5TZXR1cCI6MCwibG9ja01pblNldHVwIjp0cnVlLCJsaW1pdCI6MCwic3RyQm9udXMiOjk5NiwiaHBCb251cyI6MjcyLjMsInVuaXRMaW1pdCI6ODYwLCJ1c2VVbml0TGltaXQiOnRydWUsInVzZVN0ckxpbWl0IjpmYWxzZSwic3RyTGltaXQiOjAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjowfSx7ImxlYWRlcnNoaXAiOjQ0MDAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjoxMDAsImlkIjoiQ2F0YXB1bHRFNiIsInVuaXRLZXkiOiJDYXRhcHVsdEU2IiwidW5pdHNBbW91bnQiOjQ0MCwibWluU2V0dXAiOjAsImxvY2tNaW5TZXR1cCI6dHJ1ZSwibGltaXQiOjAsInN0ckJvbnVzIjo5OTYsImhwQm9udXMiOjI3Mi4zLCJ1bml0TGltaXQiOjQ0MCwidXNlVW5pdExpbWl0Ijp0cnVlLCJ1c2VTdHJMaW1pdCI6ZmFsc2UsInN0ckxpbWl0IjowLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjowLCJhdXRob3JpdHkiOjAsImRvbWluYW5jZSI6NTIsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJ0cmlja3N0ZXJJIiwidW5pdEtleSI6InRyaWNrc3RlckkiLCJ1bml0c0Ftb3VudCI6MSwibWluU2V0dXAiOjAsImxvY2tNaW5TZXR1cCI6dHJ1ZSwibGltaXQiOjAsInN0ckJvbnVzIjoyMTUzLjUsImhwQm9udXMiOjIwNDguOCwidW5pdExpbWl0IjoxLCJ1c2VVbml0TGltaXQiOnRydWUsInVzZVN0ckxpbWl0IjpmYWxzZSwic3RyTGltaXQiOjAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjowfSx7ImxlYWRlcnNoaXAiOjAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjo0MywiZ2FwUGVyY2VudCI6MTAwLCJpZCI6ImRlc3RydWN0aXZlQ29sb3NzdXNWSUkiLCJ1bml0S2V5IjoiZGVzdHJ1Y3RpdmVDb2xvc3N1c1ZJSSIsInVuaXRzQW1vdW50IjoxLCJtaW5TZXR1cCI6MCwibG9ja01pblNldHVwIjp0cnVlLCJsaW1pdCI6MCwic3RyQm9udXMiOjIxNTMuNSwiaHBCb251cyI6MjA0OC44LCJ1bml0TGltaXQiOjEsInVzZVVuaXRMaW1pdCI6dHJ1ZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9XX0='
    const elf20G7M7 =
      'eyJsZWFkZXJzaGlwIjoxNTAwMDAsImF1dGhvcml0eSI6MTAwMDAsImRvbWluYW5jZSI6MTAwMDAsImFybXkiOlt7ImxlYWRlcnNoaXAiOjAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjoxMzIsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJibGFja0RyYWdvblZJSSIsInVuaXRLZXkiOiJibGFja0RyYWdvblZJSSIsInVuaXRzQW1vdW50IjozLCJsaW1pdCI6MCwic3RyQm9udXMiOjI0NDIsImhwQm9udXMiOjE3MzMsInVuaXRMaW1pdCI6MywidXNlVW5pdExpbWl0Ijp0cnVlLCJ1c2VTdHJMaW1pdCI6ZmFsc2UsInN0ckxpbWl0IjowLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjowLCJhdXRob3JpdHkiOjAsImRvbWluYW5jZSI6Mjg2LCJnYXBQZXJjZW50IjoxMDAsImlkIjoiZmVhcnNvbWVNYW50aWNvcmFWIiwidW5pdEtleSI6ImZlYXJzb21lTWFudGljb3JhViIsInVuaXRzQW1vdW50IjoxMywibGltaXQiOjAsInN0ckJvbnVzIjoyMjczLCJocEJvbnVzIjoxNzMyLCJ1bml0TGltaXQiOjEzLCJ1c2VVbml0TGltaXQiOnRydWUsInVzZVN0ckxpbWl0IjpmYWxzZSwic3RyTGltaXQiOjAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjowfSx7ImxlYWRlcnNoaXAiOjM5OSwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJ2dWx0dXJlc1ZJSSIsInVuaXRLZXkiOiJ2dWx0dXJlc1ZJSSIsInVuaXRzQW1vdW50IjozOTksImxpbWl0IjowLCJzdHJCb251cyI6MTg1NiwiaHBCb251cyI6MTIzNCwidW5pdExpbWl0IjowLCJ1c2VVbml0TGltaXQiOmZhbHNlLCJ1c2VTdHJMaW1pdCI6ZmFsc2UsInN0ckxpbWl0IjowLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjozNDAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjoxMDAsImlkIjoiYmF0dGxlR3JpZmZpblZJSSIsInVuaXRLZXkiOiJiYXR0bGVHcmlmZmluVklJIiwidW5pdHNBbW91bnQiOjE3LCJsaW1pdCI6MCwic3RyQm9udXMiOjIwMTQuNSwiaHBCb251cyI6MTQ0MSwidW5pdExpbWl0IjowLCJ1c2VVbml0TGltaXQiOmZhbHNlLCJ1c2VTdHJMaW1pdCI6ZmFsc2UsInN0ckxpbWl0IjowLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjowLCJhdXRob3JpdHkiOjAsImRvbWluYW5jZSI6MTcwLCJnYXBQZXJjZW50IjoxNywiaWQiOiJqdW5nbGVEZXN0cm95ZXJWSSIsInVuaXRLZXkiOiJqdW5nbGVEZXN0cm95ZXJWSSIsInVuaXRzQW1vdW50Ijo1LCJsaW1pdCI6MCwic3RyQm9udXMiOjE1MTIsImhwQm9udXMiOjEwMzEsInVuaXRMaW1pdCI6NSwidXNlVW5pdExpbWl0Ijp0cnVlLCJ1c2VTdHJMaW1pdCI6ZmFsc2UsInN0ckxpbWl0IjowLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjo1MDAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjoxMDAsImlkIjoiYmF0dGxlR3JpZmZpblZJIiwidW5pdEtleSI6ImJhdHRsZUdyaWZmaW5WSSIsInVuaXRzQW1vdW50IjoyNSwibGltaXQiOjAsInN0ckJvbnVzIjoyMDE0LjUsImhwQm9udXMiOjE0NDEsInVuaXRMaW1pdCI6MCwidXNlVW5pdExpbWl0IjpmYWxzZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6NDExLCJhdXRob3JpdHkiOjAsImRvbWluYW5jZSI6MCwiZ2FwUGVyY2VudCI6MTAwLCJpZCI6ImhlYXZ5SGFsYmVyZGllclZJSSIsInVuaXRLZXkiOiJoZWF2eUhhbGJlcmRpZXJWSUkiLCJ1bml0c0Ftb3VudCI6NDExLCJsaW1pdCI6MCwic3RyQm9udXMiOjEyMDMuNSwiaHBCb251cyI6NzIwLCJ1bml0TGltaXQiOjQ1MCwidXNlVW5pdExpbWl0IjpmYWxzZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6MCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjQ1LCJnYXBQZXJjZW50IjoxMDAsImlkIjoid2luZExvcmRWSUkiLCJ1bml0S2V5Ijoid2luZExvcmRWSUkiLCJ1bml0c0Ftb3VudCI6MSwibGltaXQiOjAsInN0ckJvbnVzIjoxNDgxLCJocEJvbnVzIjoxMDMxLCJ1bml0TGltaXQiOjEsInVzZVVuaXRMaW1pdCI6dHJ1ZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6NDUwLCJhdXRob3JpdHkiOjAsImRvbWluYW5jZSI6MCwiZ2FwUGVyY2VudCI6MCwiaWQiOiJDYXRhcHVsdEU2IiwidW5pdEtleSI6IkNhdGFwdWx0RTYiLCJ1bml0c0Ftb3VudCI6NDUsImxpbWl0IjowLCJzdHJCb251cyI6NzY1LCJocEJvbnVzIjozNzgsInVuaXRMaW1pdCI6NDUsInVzZVVuaXRMaW1pdCI6dHJ1ZSwidXNlU3RyTGltaXQiOnRydWUsInN0ckxpbWl0Ijo2NTAwMDAwLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjo4MDAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjowLCJpZCI6IkNhdGFwdWx0RTUiLCJ1bml0S2V5IjoiQ2F0YXB1bHRFNSIsInVuaXRzQW1vdW50Ijo4MCwibGltaXQiOjAsInN0ckJvbnVzIjo3NjUsImhwQm9udXMiOjM3OCwidW5pdExpbWl0IjoyMDAsInVzZVVuaXRMaW1pdCI6ZmFsc2UsInVzZVN0ckxpbWl0Ijp0cnVlLCJzdHJMaW1pdCI6NjUwMDAwMCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6MTQ0MCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjAsImlkIjoiQ2F0YXB1bHRFNCIsInVuaXRLZXkiOiJDYXRhcHVsdEU0IiwidW5pdHNBbW91bnQiOjE0NCwibGltaXQiOjAsInN0ckJvbnVzIjo3NjUsImhwQm9udXMiOjM3OCwidW5pdExpbWl0IjoxNDAsInVzZVVuaXRMaW1pdCI6ZmFsc2UsInVzZVN0ckxpbWl0Ijp0cnVlLCJzdHJMaW1pdCI6NjUwMDAwMCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9XX0='
    const elf30G9S9 =
      'eyJsZWFkZXJzaGlwIjoxNTUwMDAwLCJhdXRob3JpdHkiOjE1NTAwMDAsImRvbWluYW5jZSI6MTU1MDAwMCwiYXJteSI6W3sibGVhZGVyc2hpcCI6MTAwMDAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjoxMDAsImlkIjoiY29yYXhJSSIsInVuaXRLZXkiOiJjb3JheElJIiwidW5pdHNBbW91bnQiOjUwMCwibGltaXQiOjAsInN0ckJvbnVzIjozMzgxLCJocEJvbnVzIjozMTkwLCJ1bml0TGltaXQiOjUwMCwidXNlVW5pdExpbWl0Ijp0cnVlLCJ1c2VTdHJMaW1pdCI6ZmFsc2UsInN0ckxpbWl0IjoxNjU2MDAwMDAwLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjowLCJhdXRob3JpdHkiOjAsImRvbWluYW5jZSI6MTE4OCwiZ2FwUGVyY2VudCI6MTAwLCJpZCI6ImZpcmVQaG9lbml4SUkiLCJ1bml0S2V5IjoiZmlyZVBob2VuaXhJSSIsInVuaXRzQW1vdW50IjoyMiwibGltaXQiOjAsInN0ckJvbnVzIjoyODkwLjUsImhwQm9udXMiOjIyMzguNSwidW5pdExpbWl0IjoxNiwidXNlVW5pdExpbWl0IjpmYWxzZSwidXNlU3RyTGltaXQiOnRydWUsInN0ckxpbWl0Ijo3OTIwMDAwMDAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjowfSx7ImxlYWRlcnNoaXAiOjQxNjAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjowLCJpZCI6InJveWFsTGlvbkkiLCJ1bml0S2V5Ijoicm95YWxMaW9uSSIsInVuaXRzQW1vdW50IjoyMDgsImxpbWl0IjowLCJzdHJCb251cyI6Mjg5MC41LCJocEJvbnVzIjoyMjM4LjUsInVuaXRMaW1pdCI6MjAwLCJ1c2VVbml0TGltaXQiOmZhbHNlLCJ1c2VTdHJMaW1pdCI6dHJ1ZSwic3RyTGltaXQiOjM4MjIwMDAwMCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6MjMwMCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjAsImlkIjoicm95YWxMaW9uSUkiLCJ1bml0S2V5Ijoicm95YWxMaW9uSUkiLCJ1bml0c0Ftb3VudCI6MTE1LCJsaW1pdCI6MCwic3RyQm9udXMiOjI4OTAuNSwiaHBCb251cyI6MjIzOC41LCJ1bml0TGltaXQiOjExMCwidXNlVW5pdExpbWl0IjpmYWxzZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6MzU0MCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjAsImlkIjoiY29yYXhJIiwidW5pdEtleSI6ImNvcmF4SSIsInVuaXRzQW1vdW50IjoxNzcsImxpbWl0IjowLCJzdHJCb251cyI6MzM4MSwiaHBCb251cyI6MzE5MCwidW5pdExpbWl0IjoxNzAsInVzZVVuaXRMaW1pdCI6ZmFsc2UsInVzZVN0ckxpbWl0IjpmYWxzZSwic3RyTGltaXQiOjAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjowfSx7ImxlYWRlcnNoaXAiOjYxODAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjoxMDAsImlkIjoiYmF0dGxlR3JpZmZpblZJSSIsInVuaXRLZXkiOiJiYXR0bGVHcmlmZmluVklJIiwidW5pdHNBbW91bnQiOjMwOSwibGltaXQiOjAsInN0ckJvbnVzIjozNDgxLCJocEJvbnVzIjozMjkwLCJ1bml0TGltaXQiOjI1MCwidXNlVW5pdExpbWl0IjpmYWxzZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6ODAwMDAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjoxMDAsImlkIjoiQ2F0YXB1bHRFNCIsInVuaXRLZXkiOiJDYXRhcHVsdEU0IiwidW5pdHNBbW91bnQiOjgwMDAsImxpbWl0IjowLCJzdHJCb251cyI6MTQ4OCwiaHBCb251cyI6MTM4MywidW5pdExpbWl0Ijo4MDAwLCJ1c2VVbml0TGltaXQiOnRydWUsInVzZVN0ckxpbWl0IjpmYWxzZSwic3RyTGltaXQiOjAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjoxMjc0MDAwMDB9LHsibGVhZGVyc2hpcCI6MjcyNCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJ2dWx0dXJlc1ZJSSIsInVuaXRLZXkiOiJ2dWx0dXJlc1ZJSSIsInVuaXRzQW1vdW50IjoyNzI0LCJsaW1pdCI6MCwic3RyQm9udXMiOjMzMDAsImhwQm9udXMiOjMyMDAsInVuaXRMaW1pdCI6MCwidXNlVW5pdExpbWl0IjpmYWxzZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6NDA1MCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJ2dWx0dXJlc1ZJIiwidW5pdEtleSI6InZ1bHR1cmVzVkkiLCJ1bml0c0Ftb3VudCI6NDA1MCwibGltaXQiOjAsInN0ckJvbnVzIjozMzAwLCJocEJvbnVzIjozMjAwLCJ1bml0TGltaXQiOjAsInVzZVVuaXRMaW1pdCI6ZmFsc2UsInVzZVN0ckxpbWl0IjpmYWxzZSwic3RyTGltaXQiOjAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjowfV19'
    const elf30G9S9b =
      'eyJsZWFkZXJzaGlwIjoxNTUwMDAwLCJhdXRob3JpdHkiOjE1NTAwMDAsImRvbWluYW5jZSI6MTU1MDAwMCwiYXJteSI6W3sibGVhZGVyc2hpcCI6MTAwMDAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjoxMDAsImlkIjoiY29yYXhJSSIsInVuaXRLZXkiOiJjb3JheElJIiwidW5pdHNBbW91bnQiOjUwMCwibGltaXQiOjAsInN0ckJvbnVzIjozMzgxLCJocEJvbnVzIjozMTkwLCJ1bml0TGltaXQiOjUwMCwidXNlVW5pdExpbWl0Ijp0cnVlLCJ1c2VTdHJMaW1pdCI6ZmFsc2UsInN0ckxpbWl0IjoxNjU2MDAwMDAwLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjowLCJhdXRob3JpdHkiOjAsImRvbWluYW5jZSI6MTE4OCwiZ2FwUGVyY2VudCI6MTAwLCJpZCI6ImZpcmVQaG9lbml4SUkiLCJ1bml0S2V5IjoiZmlyZVBob2VuaXhJSSIsInVuaXRzQW1vdW50IjoyMiwibGltaXQiOjAsInN0ckJvbnVzIjoyODkwLjUsImhwQm9udXMiOjIyMzguNSwidW5pdExpbWl0IjoxNiwidXNlVW5pdExpbWl0IjpmYWxzZSwidXNlU3RyTGltaXQiOnRydWUsInN0ckxpbWl0Ijo3OTIwMDAwMDAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjowfSx7ImxlYWRlcnNoaXAiOjQxNjAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjowLCJpZCI6InJveWFsTGlvbkkiLCJ1bml0S2V5Ijoicm95YWxMaW9uSSIsInVuaXRzQW1vdW50IjoyMDgsImxpbWl0IjowLCJzdHJCb251cyI6Mjg5MC41LCJocEJvbnVzIjoyMjM4LjUsInVuaXRMaW1pdCI6MjAwLCJ1c2VVbml0TGltaXQiOmZhbHNlLCJ1c2VTdHJMaW1pdCI6dHJ1ZSwic3RyTGltaXQiOjM4MjIwMDAwMCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6MjMwMCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjAsImlkIjoicm95YWxMaW9uSUkiLCJ1bml0S2V5Ijoicm95YWxMaW9uSUkiLCJ1bml0c0Ftb3VudCI6MTE1LCJsaW1pdCI6MCwic3RyQm9udXMiOjI4OTAuNSwiaHBCb251cyI6MjIzOC41LCJ1bml0TGltaXQiOjExMCwidXNlVW5pdExpbWl0IjpmYWxzZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6MzU0MCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjAsImlkIjoiY29yYXhJIiwidW5pdEtleSI6ImNvcmF4SSIsInVuaXRzQW1vdW50IjoxNzcsImxpbWl0IjowLCJzdHJCb251cyI6MzM4MSwiaHBCb251cyI6MzE5MCwidW5pdExpbWl0IjoxNzAsInVzZVVuaXRMaW1pdCI6ZmFsc2UsInVzZVN0ckxpbWl0IjpmYWxzZSwic3RyTGltaXQiOjAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjowfSx7ImxlYWRlcnNoaXAiOjYxODAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjoxMDAsImlkIjoiYmF0dGxlR3JpZmZpblZJSSIsInVuaXRLZXkiOiJiYXR0bGVHcmlmZmluVklJIiwidW5pdHNBbW91bnQiOjMwOSwibGltaXQiOjAsInN0ckJvbnVzIjozNDgxLCJocEJvbnVzIjozMjkwLCJ1bml0TGltaXQiOjI1MCwidXNlVW5pdExpbWl0IjpmYWxzZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6NTY0MywiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJ2dWx0dXJlc1ZJSSIsInVuaXRLZXkiOiJ2dWx0dXJlc1ZJSSIsInVuaXRzQW1vdW50Ijo1NjQzLCJsaW1pdCI6MCwic3RyQm9udXMiOjMzMDAsImhwQm9udXMiOjMyMDAsInVuaXRMaW1pdCI6MCwidXNlVW5pdExpbWl0IjpmYWxzZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6ODAwMDAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjoxMDAsImlkIjoiQ2F0YXB1bHRFNCIsInVuaXRLZXkiOiJDYXRhcHVsdEU0IiwidW5pdHNBbW91bnQiOjgwMDAsImxpbWl0IjowLCJzdHJCb251cyI6MTQ4OCwiaHBCb251cyI6MTM4MywidW5pdExpbWl0Ijo4MDAwLCJ1c2VVbml0TGltaXQiOnRydWUsInVzZVN0ckxpbWl0IjpmYWxzZSwic3RyTGltaXQiOjAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjoxMjc0MDAwMDB9XX0='

    const elf30G8S8M8 =
      'eyJsZWFkZXJzaGlwIjoyNTAwMDAsImF1dGhvcml0eSI6MjUwMDAwLCJkb21pbmFuY2UiOjI1MDAwMCwiYXJteSI6W3sibGVhZGVyc2hpcCI6MjAwMDAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjoxMDAsImlkIjoiY29yYXhJIiwidW5pdEtleSI6ImNvcmF4SSIsInVuaXRzQW1vdW50IjoxMDAwLCJsaW1pdCI6MCwic3RyQm9udXMiOjMxMzEuNSwiaHBCb251cyI6MzQwOS44LCJ1bml0TGltaXQiOjEwMDAsInVzZVVuaXRMaW1pdCI6dHJ1ZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6MCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjI1MzgsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJmaXJlUGhvZW5peEkiLCJ1bml0S2V5IjoiZmlyZVBob2VuaXhJIiwidW5pdHNBbW91bnQiOjQ3LCJsaW1pdCI6MCwic3RyQm9udXMiOjI0MjEsImhwQm9udXMiOjI0MDMuMywidW5pdExpbWl0IjozNywidXNlVW5pdExpbWl0IjpmYWxzZSwidXNlU3RyTGltaXQiOnRydWUsInN0ckxpbWl0Ijo3OTIwMDAwMDAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjowfSx7ImxlYWRlcnNoaXAiOjY3NDAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjoxMDAsImlkIjoiYmF0dGxlR3JpZmZpblZJSSIsInVuaXRLZXkiOiJiYXR0bGVHcmlmZmluVklJIiwidW5pdHNBbW91bnQiOjMzNywibGltaXQiOjAsInN0ckJvbnVzIjozMjMxLjUsImhwQm9udXMiOjM1MDkuOCwidW5pdExpbWl0IjozMDAsInVzZVVuaXRMaW1pdCI6ZmFsc2UsInVzZVN0ckxpbWl0Ijp0cnVlLCJzdHJMaW1pdCI6MzgyMjAwMDAwLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjoxMDUyMCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJiYXR0bGVHcmlmZmluVkkiLCJ1bml0S2V5IjoiYmF0dGxlR3JpZmZpblZJIiwidW5pdHNBbW91bnQiOjUyNiwibGltaXQiOjAsInN0ckJvbnVzIjozMjMxLjUsImhwQm9udXMiOjM1MDkuOCwidW5pdExpbWl0IjowLCJ1c2VVbml0TGltaXQiOmZhbHNlLCJ1c2VTdHJMaW1pdCI6ZmFsc2UsInN0ckxpbWl0IjowLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjoxNzA4MCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJiYXR0bGVHcmlmZmluViIsInVuaXRLZXkiOiJiYXR0bGVHcmlmZmluViIsInVuaXRzQW1vdW50Ijo4NTQsImxpbWl0IjowLCJzdHJCb251cyI6MzIzMS41LCJocEJvbnVzIjozNTA5LjgsInVuaXRMaW1pdCI6MCwidXNlVW5pdExpbWl0IjpmYWxzZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6NTc4MiwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJ2dWx0dXJlc1ZJSSIsInVuaXRLZXkiOiJ2dWx0dXJlc1ZJSSIsInVuaXRzQW1vdW50Ijo1NzgyLCJsaW1pdCI6MCwic3RyQm9udXMiOjIzMDMuMywiaHBCb251cyI6MjMyMSwidW5pdExpbWl0IjowLCJ1c2VVbml0TGltaXQiOmZhbHNlLCJ1c2VTdHJMaW1pdCI6ZmFsc2UsInN0ckxpbWl0IjowLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjoxMDQ1ODAsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjoxMDAsImlkIjoiQ2F0YXB1bHRFNCIsInVuaXRLZXkiOiJDYXRhcHVsdEU0IiwidW5pdHNBbW91bnQiOjEwNDU4LCJsaW1pdCI6MCwic3RyQm9udXMiOjExMzEsImhwQm9udXMiOjQ3MCwidW5pdExpbWl0IjoxMTAwMCwidXNlVW5pdExpbWl0Ijp0cnVlLCJ1c2VTdHJMaW1pdCI6ZmFsc2UsInN0ckxpbWl0IjowLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjo2MTgzLCJhdXRob3JpdHkiOjAsImRvbWluYW5jZSI6MCwiZ2FwUGVyY2VudCI6MCwiaWQiOiJ2dWx0dXJlc1ZJIiwidW5pdEtleSI6InZ1bHR1cmVzVkkiLCJ1bml0c0Ftb3VudCI6NjE4MywibGltaXQiOjAsInN0ckJvbnVzIjoyMzAzLjMsImhwQm9udXMiOjIzMjEsInVuaXRMaW1pdCI6MCwidXNlVW5pdExpbWl0IjpmYWxzZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9LHsibGVhZGVyc2hpcCI6MTExNzYsImF1dGhvcml0eSI6MCwiZG9taW5hbmNlIjowLCJnYXBQZXJjZW50IjowLCJpZCI6InZ1bHR1cmVzViIsInVuaXRLZXkiOiJ2dWx0dXJlc1YiLCJ1bml0c0Ftb3VudCI6MTExNzYsImxpbWl0IjowLCJzdHJCb251cyI6MjMwMy4zLCJocEJvbnVzIjoyMzIxLCJ1bml0TGltaXQiOjAsInVzZVVuaXRMaW1pdCI6ZmFsc2UsInVzZVN0ckxpbWl0IjpmYWxzZSwic3RyTGltaXQiOjAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjowfSx7ImxlYWRlcnNoaXAiOjAsImF1dGhvcml0eSI6Mzk4LCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjAsImlkIjoiZXBpY01vbnN0ZXJIdW50ZXJJSSIsInVuaXRLZXkiOiJlcGljTW9uc3Rlckh1bnRlcklJIiwidW5pdHNBbW91bnQiOjM5OCwibGltaXQiOjAsInN0ckJvbnVzIjoxMzAwLjUsImhwQm9udXMiOjE1OTUuOCwidW5pdExpbWl0IjowLCJ1c2VVbml0TGltaXQiOmZhbHNlLCJ1c2VTdHJMaW1pdCI6ZmFsc2UsInN0ckxpbWl0IjowLCJzdHJMaW1pdFR5cGUiOiIiLCJ1c2VIcExpbWl0IjpmYWxzZSwiSHBMaW1pdCI6MH0seyJsZWFkZXJzaGlwIjowLCJhdXRob3JpdHkiOjAsImRvbWluYW5jZSI6MzE2OCwiZ2FwUGVyY2VudCI6MTAwLCJpZCI6ImZlYXJzb21lTWFudGljb3JhViIsInVuaXRLZXkiOiJmZWFyc29tZU1hbnRpY29yYVYiLCJ1bml0c0Ftb3VudCI6MTQ0LCJsaW1pdCI6MCwic3RyQm9udXMiOjIwMDAsImhwQm9udXMiOjIwMDAsInVuaXRMaW1pdCI6MCwidXNlVW5pdExpbWl0IjpmYWxzZSwidXNlU3RyTGltaXQiOmZhbHNlLCJzdHJMaW1pdCI6MCwic3RyTGltaXRUeXBlIjoiIiwidXNlSHBMaW1pdCI6ZmFsc2UsIkhwTGltaXQiOjB9XX0='

    switch (event.target.value) {
      case 'elf20G7M7':
        decodeAndLoadArmySetup(elf20G7M7)
        break
      case 'cursed25':
        decodeAndLoadArmySetup(cursed25)
        break
      case 'cursed25G6M7Mercs':
        decodeAndLoadArmySetup(cursed25G6M7Mercs)
        break
      case 'elf30G8S8M8':
        decodeAndLoadArmySetup(elf30G8S8M8)
        break
      case 'elf30G9S9':
        decodeAndLoadArmySetup(elf30G9S9)
        break
      case 'elf30G9S9b':
        decodeAndLoadArmySetup(elf30G9S9b)
        break
      case 'noob':
        alert('not enough minerals')
        alert('IF you like this idea, send me your BR to include it in the next version @moogumuro')
        break
    }
  }

  const copyToClipboardHashedArmyData = () => {
    const data = JSON.stringify(prepareExportData(useStackStore.getState()))
    navigator.clipboard.writeText(encodeHash(data))
  }

  return (
    <>
      <PageTitle title='Calc' />
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
        <div className='p-4 border-2 max-w-[1200px]'>
          <div className='stack-container'>
            <div className='sticky  top-[57px]'>
              <div className='flex items-center  '>
                <table className='skill-info'>
                  <thead>
                    <tr>
                      <th onClick={copyToClipboardHashedArmyData} className='cursor-pointer'>
                        Leadrshp
                      </th>
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

                <div className='ml-5 flex items-center'>
                  <label
                    htmlFor='gap'
                    title='is a space between troops strength, in case a strength percent changes to avoid loosing the stack order and its calculated based on the first troop stack strength'
                  >
                    Gap Percent
                  </label>
                  <input
                    id='gap'
                    className='ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full min-w-[50px] max-w-[60px] h-[2.5rem] p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    type='number'
                    min={0}
                    max={100}
                    value={gapBasePercent}
                    onChange={e => setGapBasePercent(parseInt(e.target.value))}
                  />
                </div>

                <div className='ml-5 flex    '>
                  <label className=' text-center rounded-lg items-center cursor-pointer focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  text-lg px-1 py-0.5   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed'>
                    <span>Import army setup</span>
                    <input type='file' className='hidden w-' onChange={readFile} />
                  </label>

                  <button
                    className='ml-2  rounded-lg text-center items-center cursor-pointer focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  text-lg px-1 py-0.5   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed'
                    onClick={saveData}
                  >
                    Export army
                  </button>

                  <div className='ml-10 w-[200px] flex items-center'>
                    <label>Preset</label>
                    <select
                      className='ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      onChange={loadPresetArmy}
                      value={presetArmy}
                    >
                      <option value='' disabled>
                        Select preset
                      </option>

                      <option value='cursed25' className='bg-green-800'>
                        Citadel Cursed 25
                      </option>
                      <option value='cursed25G6M7Mercs' className='bg-green-800'>
                        Citadel Cursed 25 G6,M7,Mercs
                      </option>
                      <option value='noob'>Citadel Cursed 20</option>
                      <option value='dash' disabled>
                        ------------------
                      </option>
                      <option value='noob'>Citadel Elf 10 G1</option>
                      <option value='noob'>Citadel Elf 10 G2</option>
                      <option value='noob'>Citadel Elf 10 G3</option>
                      <option value='noob'>Citadel Elf 10 G4,M3</option>
                      <option value='noob'>Citadel Elf 10 G5,M5,Mercs</option>
                      <option value='dash' disabled>
                        ------------------
                      </option>
                      <option value='noob'>Citadel Elf 15 G4,M3,Mercs</option>
                      <option value='noob'>Citadel Elf 15 G5,M4,Mercs</option>
                      <option value='dash' disabled>
                        ------------------
                      </option>

                      <option value='elf20G7M7' className='bg-green-800'>
                        Citadel Elf 20 G7,M7
                      </option>
                      <option value='noob'>Citadel Elf 20 G5,M6,S6</option>
                      <option value='noob'>Citadel Elf 25 G5,M6,S6,Mercs</option>
                      <option value='noob'>Citadel Elf 25 G5,M6,S6,Mercs</option>
                      <option value='dash' disabled>
                        ------------------
                      </option>
                      <option value='elf30G8S8M8' className='bg-green-800'>
                        Citadel Elf 30 G8,M8,S8
                      </option>
                      <option value='noob'>Citadel Elf 30 G9,M9,S9,Mercs</option>
                      <option value='elf30G9S9' className='bg-green-800'>
                        Citadel Elf 30 G9,M9,S9 (1)
                      </option>
                      <option value='elf30G9S9b' className='bg-green-800'>
                        Citadel Elf 30 G9,M9,S9 (2)
                      </option>
                    </select>
                  </div>
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
                    setPresetArmy('')
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
          <div className='relative '>
            <div className='mt-4 p-4 border-2  sticky top-[164px]  w-fit'>
              {report.map((data, i) => {
                return (
                  <li key={`rpt${i}`} className={'text-sm'}>
                    {data.map((col, x) => {
                      let color = 'text-green-400'
                      if (col.color == 'blue') {
                        color = 'text-blue-500'
                      }
                      if (col.color == 'white') {
                        color = 'text-gray-200'
                      }
                      if (col.color == 'red') {
                        color = 'text-red-500'
                      }
                      if (col.color == 'purple') {
                        color = 'text-purple-200'
                      }
                      if (col.color == 'yellow') {
                        color = 'text-yellow-300'
                      }
                      return (
                        <span key={`col${x}`} className={`${color}`}>
                          {col.msg}{' '}
                        </span>
                      )
                    })}
                  </li>
                )
              })}
            </div>
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
