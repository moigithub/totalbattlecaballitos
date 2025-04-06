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
  // findStrongestTarget,
  // findTargetOfTypeWithHealth,
  // findTargetOfTypeWithHeath,
  // findTargetWithHealth,
  // getStackDamage,
  getArmyAuthority,
  getArmyDominance,
  getArmyLeadership,
  getStackHealth,
  getStackStrength,
  getStrengthWithBonus,
  getStrongestTroopAlive,
  haveTroopsAlive,
  prepareArmyData
} from './helpers'
import { citadele10, FightStack } from './citadelData.ts'
export interface Result {
  status: number
  msg: string
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

  const [selectedTarget, setSelectedTarget] = useState('citadele10')
  const [addUnitMode, setAddUnitMode] = useState('previousStackStatsLimit')
  const [report, setReport] = useState<{ status: number; msg: string }[]>([])

  const [cardType, setCardType] = useState('card') // card , smallcard
  const [gapPercent, setGapPercent] = useState(10) // card , smallcard
  const [gapStrength, setGapStrength] = useState(0)

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

  // const calculateUnitsMobKill = (monster: EnemyUnit, unit: Unit): number => {
  //   const monsterHealth = monster.BASEHP
  //   let soldierStrength = unit.BASESTR

  //   // mounted vs ranged
  //   const stats = getStats(unit, bonus)

  //   const otherBonus = stats?.str ?? 0

  //   if (unit.category === 'mounted') {
  //     if (monster.category === 'ranged') {
  //       const strBonus = ((otherBonus + unit.vsRangedPercent) * unit.BASESTR) / 100
  //       soldierStrength = unit.BASESTR + strBonus
  //     } else if (monster.category === 'siege') {
  //       const strBonus = ((otherBonus + unit.vsSiegePercent) * unit.BASESTR) / 100
  //       soldierStrength = unit.BASESTR + strBonus
  //     }
  //   } else if (unit.category === 'ranged') {
  //     if (monster.category === 'flying') {
  //       const strBonus = ((otherBonus + unit.vsFlyingPercent) * unit.BASESTR) / 100
  //       soldierStrength = unit.BASESTR + strBonus
  //     } else if (monster.category === 'melee') {
  //       const strBonus = ((otherBonus + unit.vsMeleePercent) * unit.BASESTR) / 100
  //       soldierStrength = unit.BASESTR + strBonus
  //     }
  //   } else if (unit.category === 'melee') {
  //     if (monster.category === 'mounted') {
  //       const strBonus = ((otherBonus + unit.vsMountedPercent) * unit.BASESTR) / 100
  //       soldierStrength = unit.BASESTR + strBonus
  //     } else if (monster.race === 'beast') {
  //       const strBonus = ((otherBonus + unit.vsBeastPercent) * unit.BASESTR) / 100
  //       soldierStrength = unit.BASESTR + strBonus
  //     }
  //   } else if (unit.category === 'flying') {
  //     if (monster.category === 'mounted') {
  //       const strBonus = ((otherBonus + unit.vsMountedPercent) * unit.BASESTR) / 100
  //       soldierStrength = unit.BASESTR + strBonus
  //     } else if (monster.race === 'giant') {
  //       const strBonus = ((otherBonus + unit.vsGiantPercent) * unit.BASESTR) / 100
  //       soldierStrength = unit.BASESTR + strBonus
  //     }
  //   }

  //   if (unit.group === 'elemental') {
  //     if (monster.category === 'flying') {
  //       const strBonus = ((otherBonus + unit.vsFlyingPercent) * unit.BASESTR) / 100
  //       soldierStrength = unit.BASESTR + strBonus
  //     } else if (monster.category === 'melee') {
  //       const strBonus = ((otherBonus + unit.vsGiantPercent) * unit.BASESTR) / 100
  //       soldierStrength = unit.BASESTR + strBonus
  //     }
  //   } else if (unit.group === 'giant') {
  //     if (monster.category === 'melee') {
  //       const strBonus = ((otherBonus + unit.vsMeleePercent) * unit.BASESTR) / 100
  //       soldierStrength = unit.BASESTR + strBonus
  //     } else if (monster.race === 'beast') {
  //       const strBonus = ((otherBonus + unit.vsBeastPercent) * unit.BASESTR) / 100
  //       soldierStrength = unit.BASESTR + strBonus
  //     }
  //   } else if (unit.group === 'dragon') {
  //     if (monster.category === 'mounted') {
  //       const strBonus = ((otherBonus + unit.vsMountedPercent) * unit.BASESTR) / 100
  //       soldierStrength = unit.BASESTR + strBonus
  //     } else if (monster.race === 'giant') {
  //       const strBonus = ((otherBonus + unit.vsGiantPercent) * unit.BASESTR) / 100
  //       soldierStrength = unit.BASESTR + strBonus
  //     }
  //   } else if (unit.group === 'beast') {
  //     if (monster.category === 'mounted') {
  //       const strBonus = ((otherBonus + unit.vsMountedPercent) * unit.BASESTR) / 100
  //       soldierStrength = unit.BASESTR + strBonus
  //     } else if (monster.category === 'ranged') {
  //       const strBonus = ((otherBonus + unit.vsRangedPercent) * unit.BASESTR) / 100
  //       soldierStrength = unit.BASESTR + strBonus
  //     }
  //   }

  //   console.log('MINSETUP', { monsterHealth, soldierStrength, unit, monster })
  //   // retorna el num de soldados minimo que se necesita para matar un monstruo
  //   return Math.ceil(monsterHealth / soldierStrength)
  // }

  const calcSTR = () => {
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

    /**********************************************
     * basado en vitalidad
     * =======================
     *  la primera posicion, siempre sera el sacrificio
     * el sacrificio siempre incrementa de 1 en 1 sus unidades
     *
     */
  }

  const verifyCitadele10 = () => {
    // console.log('verifying citadele10')
    const checkResult: Result[] = []
    // let troopsTypes: boolean = false
    let firstEnemyKilled: boolean = false
    let secondEnemyKilled: boolean = false
    let thirdEnemyKilled: boolean = false
    let fourthEnemyKilled: boolean = false
    // let fifthEnemyKilled: boolean = false

    let firstStackDied: boolean = false
    let secondStackDied: boolean = false
    let thirdStackDied: boolean = false
    let fourthStackDied: boolean = false
    // let fifthStackDied: boolean = false

    const myFirstStackUnitHealth = 1 * army[0].unit.BASEHP * (1 + army[0].hpBonus / 100)
    let enemyFirstStackStrength =
      citadele10.stacks[0].unitsAmount * citadele10.stacks[0].unit.BASESTR
    let enemySecondStackStrength =
      citadele10.stacks[1].unitsAmount * citadele10.stacks[1].unit.BASESTR
    let enemyThirdStackStrength =
      citadele10.stacks[2].unitsAmount * citadele10.stacks[2].unit.BASESTR
    let enemyFourthStackStrength =
      citadele10.stacks[3].unitsAmount * citadele10.stacks[3].unit.BASESTR
    let enemyFifthStackStrength =
      citadele10.stacks[4].unitsAmount * citadele10.stacks[4].unit.BASESTR

    const enemyFirstStackHealth =
      citadele10.stacks[0].unitsAmount * citadele10.stacks[0].unit.BASEHP
    const enemySecondStackHealth =
      citadele10.stacks[1].unitsAmount * citadele10.stacks[1].unit.BASEHP
    const enemyThirdStackHealth =
      citadele10.stacks[2].unitsAmount * citadele10.stacks[2].unit.BASEHP
    const enemyFourthStackHealth =
      citadele10.stacks[3].unitsAmount * citadele10.stacks[3].unit.BASEHP
    const enemyFifthStackHealth =
      citadele10.stacks[4].unitsAmount * citadele10.stacks[4].unit.BASEHP

    // check all stack type should NOT be mounted,dragon,melee,elemental
    checkResult.push({ status: 0, msg: '=== Checking troop types ===' })

    for (let i = 0; i < army.length; i++) {
      if (
        army[i].unit.category !== 'mounted' &&
        army[i].unit.category !== 'melee' &&
        army[i].unit.group !== 'dragon' &&
        army[i].unit.group !== 'elemental'
      ) {
        checkResult.push({ status: 1, msg: `Stack ${i} : troop type GOOD!` })
      } else {
        checkResult.push({
          status: 2,
          msg: `Stack ${i} : will get extra damage =( ...because its troop type`
        })
      }
    }

    //===============================================================
    checkResult.push({ status: 0, msg: '=== Checking meatshield/tank capability ===' })
    let totalDamage: number = 0
    //first hit will be against bear who have bonus against mounted, elemental
    // and will get aditional damage
    if (army[0].unit.category === 'mounted') {
      enemyFirstStackStrength =
        enemyFirstStackStrength * (1 + citadele10.stacks[0].unit.vsMountedPercent / 100)
    }
    if (army[0].unit.group === 'elemental') {
      enemyFirstStackStrength =
        enemyFirstStackStrength * (1 + citadele10.stacks[0].unit.vsElementalPercent / 100)
    }

    totalDamage = totalDamage + enemyFirstStackStrength
    // first stack, each unit must have health(+bonus) higher than the enemy first stack strength+bonus
    if (myFirstStackUnitHealth > totalDamage) {
      checkResult.push({ status: 1, msg: 'first stack can tank/absorb enemy first attack' })
    } else {
      checkResult.push({
        status: 2,
        msg: 'first stack might die on enemy first attack, add more health'
      })
      firstStackDied = true
    }

    // check if first stack,can tank enemy 2nd stack attack
    // vs Pegaso Rider IV who havebonus against melee,dragon
    if (army[0].unit.category === 'melee') {
      enemySecondStackStrength =
        enemySecondStackStrength * (1 + citadele10.stacks[1].unit.vsMeleePercent / 100)
    }
    if (army[0].unit.group === 'dragon') {
      enemySecondStackStrength =
        enemySecondStackStrength * (1 + citadele10.stacks[1].unit.vsDragonPercent / 100)
    }

    // first stack, each unit must have health(+bonus) higher than the enemy 2nd stack strength+bonus
    if (!firstStackDied) {
      totalDamage = totalDamage + enemySecondStackStrength

      if (myFirstStackUnitHealth > totalDamage) {
        checkResult.push({ status: 1, msg: 'first stack can tank/absorb enemy second attack' })
      } else {
        checkResult.push({
          status: 2,
          msg: 'first stack might die on enemy second attack, if enemy is not killed first, add more health'
        })
        secondStackDied = true
      }

      // check if first stack,can tank enemy 3rd stack attack
      // vs Elf archer I who havebonus against melee
      if (army[0].unit.category === 'melee') {
        enemyThirdStackStrength =
          enemyThirdStackStrength * (1 + citadele10.stacks[2].unit.vsMeleePercent / 100)
      }

      if (!secondStackDied) {
        totalDamage = totalDamage + enemyThirdStackStrength
        // first stack, each unit must have health(+bonus) higher than the enemy 3rd stack strength+bonus
        if (myFirstStackUnitHealth > totalDamage) {
          checkResult.push({ status: 1, msg: 'first stack can tank/absorb enemy third attack' })
        } else {
          checkResult.push({
            status: 2,
            msg: 'first stack might die on enemy third attack, if enemy is not killed first, add more health'
          })
          thirdStackDied = true
        }

        // check if first stack,can tank enemy 4th stack attack
        // vs Druid II who havebonus against melee
        if (army[0].unit.category === 'melee') {
          enemyFourthStackStrength =
            enemyFourthStackStrength * (1 + citadele10.stacks[3].unit.vsMeleePercent / 100)
        }

        if (!thirdStackDied) {
          totalDamage = totalDamage + enemyFourthStackStrength
          // first stack, each unit must have health(+bonus) higher than the enemy 4th stack strength+bonus
          if (myFirstStackUnitHealth > totalDamage) {
            checkResult.push({ status: 1, msg: 'first stack can tank/absorb enemy fourth attack' })
          } else {
            checkResult.push({
              status: 2,
              msg: 'first stack might die on enemy fourth attack, if enemy is not killed first, add more health'
            })
            fourthStackDied = true
          }

          // check if first stack,can tank enemy 5th stack attack
          // vs Dwarf who havebonus against mount
          if (army[0].unit.category === 'mounted') {
            enemyFifthStackStrength =
              enemyFifthStackStrength * (1 + citadele10.stacks[4].unit.vsMountedPercent / 100)
          }

          if (!fourthStackDied) {
            totalDamage = totalDamage + enemyFifthStackStrength
            // first stack, each unit must have health(+bonus) higher than the enemy 5th stack strength+bonus
            if (myFirstStackUnitHealth > totalDamage) {
              checkResult.push({ status: 1, msg: 'first stack can tank/absorb enemy fifth attack' })
              checkResult.push({ status: 4, msg: 'WHOA!, EXCELENT MEATSHIELD!!' })
            } else {
              checkResult.push({
                status: 2,
                msg: 'first stack might die on enemy fifth attack, if enemy is not killed first, add more health'
              })
            }
          }
        }
      }
    }
    //===============================================================
    checkResult.push({ status: 0, msg: '=== Checking first stack strength ===' })

    // first stack, should be powerful enough to kill enemy first stack
    const myFirstStackStrength =
      army[0].unitsAmount * army[0].unit.BASESTR * (1 + army[0].strBonus / 100)

    // if (!firstStackDied) {
    if (myFirstStackStrength >= enemyFirstStackHealth) {
      checkResult.push({ status: 1, msg: 'first stack can kill enemy first stack' })
      firstEnemyKilled = true
    } else {
      checkResult.push({
        status: 2,
        msg: 'first stack is not strong enough to kill first enemy, ADD MORE UNITS!'
      })
      firstEnemyKilled = false
    }

    if (firstEnemyKilled) {
      if (myFirstStackStrength >= enemySecondStackHealth) {
        checkResult.push({ status: 1, msg: 'first stack can kill enemy second stack' })
        secondEnemyKilled = true
      } else {
        checkResult.push({
          status: 2,
          msg: 'first stack is not strong enough to kill second enemy, ADD MORE UNITS!'
        })
        secondEnemyKilled = false
      }

      if (secondEnemyKilled) {
        if (myFirstStackStrength >= enemyThirdStackHealth) {
          checkResult.push({ status: 1, msg: 'first stack can kill enemy third stack' })
          thirdEnemyKilled = true
        } else {
          checkResult.push({
            status: 2,
            msg: 'first stack is not strong enough to kill third enemy, ADD MORE UNITS!'
          })
          thirdEnemyKilled = false
        }

        if (thirdEnemyKilled) {
          if (myFirstStackStrength >= enemyFourthStackHealth) {
            checkResult.push({ status: 1, msg: 'first stack can kill enemy fourth stack' })
            fourthEnemyKilled = true
          } else {
            checkResult.push({
              status: 2,
              msg: 'first stack is not strong enough to kill fourth enemy, ADD MORE UNITS!'
            })
            fourthEnemyKilled = false
          }

          if (fourthEnemyKilled) {
            if (myFirstStackStrength >= enemyFifthStackHealth) {
              checkResult.push({ status: 1, msg: 'first stack can kill enemy fifth stack' })
              checkResult.push({ status: 4, msg: 'WHOA!, EXCELENT KILLER!!' })
              // fifthEnemyKilled = true
            } else {
              checkResult.push({
                status: 2,
                msg: 'first stack is not strong enough to kill fifth enemy, ADD MORE UNITS!'
              })
              // fifthEnemyKilled = false
            }
          }
        }
      }
      // }
    }

    // ***********************************
    // simulation

    // BOTH sides my army, citadel already ordered based on stack strength, so no need to do anything
    // INFO: I DO first attack
    checkResult.push({ status: 0, msg: 'simulation i attack first' })

    // prepare army units for fighting, format data to have same structure as citadel
    const myArmy = prepareArmyData(army)
    const citadel = structuredClone(citadele10.stacks)

    let attacker: FightStack | null = myArmy[0] // single stack
    let defender: FightStack[] | null = citadel // array of stacks
    // check both sides have troops alive
    let loopProtect = 20
    let turn = 0
    const stacksCount = myArmy.length + citadel.length
    let tmpCounter = 1
    while (haveTroopsAlive(myArmy) && haveTroopsAlive(citadel)) {
      // get strongest troop alive who didnt fight yet
      attacker = getStrongestTroopAlive(myArmy, turn)
      if (attacker) {
        defender = citadel

        // console.log('attacker', attacker, 'defender', defender)
        // console.log('fight')
        fight(attacker, defender, checkResult)
        tmpCounter++
      }

      attacker = getStrongestTroopAlive(citadel, turn)
      if (attacker) {
        defender = myArmy

        // console.log('attacker', attacker, 'defender', defender)
        // console.log('fight')
        fight(attacker, defender, checkResult)
        tmpCounter++
      }

      if (tmpCounter >= stacksCount) {
        turn++
        tmpCounter = 1
      }

      loopProtect--
      if (loopProtect < 1) {
        console.log('loop protection')
        break
      }
    }

    // console.log('citadel after hit', citadel)

    setReport(checkResult)
    // console.log(' citadele10 result', checkResult)
  }

  const handleDrag = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const index1 = army.findIndex(stack => stack.id === active.id)
      const index2 = army.findIndex(stack => stack.id === over.id)
      setArmy(arrayMove(army, index1, index2))
    }
  }

  return (
    <>
      <ArmyList />

      <nav className='pt-[57px] sm:ml-64 flex'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
          <div className='config-container'>
            <div className='configbar'>
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
            <div className='configbar'>
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
                </select>
              </div>

              <div>
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

            <div className='configbar'>
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
        </div>

        <div className='hidden lg:block'>
          {selectedTarget === 'citadele10' && <CitadelData type='e10' />}
          {selectedTarget === 'citadele15' && <CitadelData type='e15' />}
          {selectedTarget === 'citadele20' && <CitadelData type='e20' />}
          {selectedTarget === 'citadele25' && <CitadelData type='e25' />}
          {selectedTarget === 'citadele30' && <CitadelData type='e30' />}
          {selectedTarget === 'citadelc20' && <CitadelData type='c20' />}
          {selectedTarget === 'citadelc25' && <CitadelData type='c25' />}

          {selectedTarget === 'citadele10' && (
            <button
              className='bg-indigo-500 text-md font-bold text-white'
              onClick={verifyCitadele10}
            >
              Verify
            </button>
          )}
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
              <div>
                <p>whats a gap?</p>
                <p>
                  its a space between troops strength, in case a strength percent changes to avoid
                  loosing the stack order and its calculated based on the first troop stack
                  strength, the downside is you will have less room for your next troops, because
                  the max strength of your other troops available would be reduced
                </p>
                <p className='bg-green-800 w-fit'>
                  [army (all troops) max strength_________________________________________]
                </p>
                <p className='bg-blue-800 w-fit'>
                  [first troop]<span className='bg-orange-800 text-white'>[gap 50%______]</span>
                  [second troop]<span className='bg-orange-800 text-white'>[gap 50%______]</span>
                  [third troop]
                </p>
                <p className='bg-fuchsia-800 w-fit'>
                  [first troop]<span className='bg-orange-800 text-white'>[gap 10%__]</span>[second
                  troop____]<span className='bg-orange-800 text-white'>[gap 10%__]</span>[third
                  troop____]
                </p>
              </div>
              <div className='btn-group'>
                <button
                  className='inline-flex text-center items-center cursor-pointer focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  text-lg px-[20%] py-0.5   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  onClick={calcSTR}
                >
                  CALCULATE
                </button>
                <button
                  className='inline-flex cursor-pointer focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300    text-lg px-3.5 py-0.5 me-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
                  onClick={() => {
                    setArmy([])
                  }}
                >
                  Clear
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
              if (data.status == 4) {
                color = 'text-yellow-300'
              }
              return (
                <li key={`rpt${i}`} className={`text-sm ${color}`}>
                  {data.msg}
                </li>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default Dos
