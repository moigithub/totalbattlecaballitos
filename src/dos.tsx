import { useState, useEffect, useRef } from 'react'

import './App.css'
import { useGuardsStore } from './guardStore'

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
import { Citadel } from './citadel.tsx'
import {
  addArmyUnits,
  getArmyAuthority,
  getArmyDominance,
  getArmyLeadership,
  getStackHealth,
  getStackStrength
} from './helpers'

function Dos() {
  const leadership = useGuardsStore(state => state.leadership)
  const authority = useGuardsStore(state => state.authority)
  const dominance = useGuardsStore(state => state.dominance)

  const setLeadership = useGuardsStore(state => state.setLeadership)
  const setAuthority = useGuardsStore(state => state.setAuthority)
  const setDominance = useGuardsStore(state => state.setDominance)
  const resetAllStacks = useStackStore(state => state.resetAllStacks)
  // const addUnits = useStackStore(state => state.addUnits)
  const updateMinSetup = useStackStore(state => state.updateMinSetup)

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

  const [cardType, setCardType] = useState('card') // card , smallcard

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

    if (armyRef.current.length === 0) {
      // algo debe estar marcado
      alert('pick riders')
      return
    }

    resetAllStacks()

    // deep copy the army to a normal object
    const ARMY = structuredClone(armyRef.current)

    console.log('max leadership', leadership)
    console.log('max authority', authority)
    console.log('max dominance', dominance)
    console.log('army', ARMY)

    let maxLoop = 1000000 // should change it for a timer
    //let totalLeadership = 0
    // let totalAuthority = 0
    // let totalDominance = 0
    let lastLeadershipCalculated = 0 // to break the loop, if didnt changed (loop protection)
    let lastAuthorityCalculated = 0 // to break the loop, if didnt changed (loop protection)
    let lastDominanceCalculated = 0 // to break the loop, if didnt changed (loop protection)

    let playing = true
    while (playing) {
      // 1. check leadership acumulado del army
      // 2. agregar 1 unit al sacrificio
      let stack: Stack | null = ARMY[0] // el primero de la lista es el sacrificio, incrementa de 1 en 1
      // console.log('army0', army[0], armyRef.current[0])

      let canIAddToFirstStack = true
      if (
        stack.unit.tipo === 'army' &&
        getArmyLeadership(ARMY) + stack.unit.LEADERSHIP > leadership
      ) {
        canIAddToFirstStack = false
        // addArmyUnits(ARMY, 0, 1)
      } else if (
        stack.unit.tipo === 'merc' &&
        getArmyAuthority(ARMY) + stack.unit.AUTHORITY > authority
      ) {
        canIAddToFirstStack = false
        // addArmyUnits(ARMY, 0, 1)
      } else if (
        stack.unit.tipo === 'monster' &&
        getArmyDominance(ARMY) + stack.unit.DOMINANCE > dominance
      ) {
        canIAddToFirstStack = false
        // addArmyUnits(ARMY, 0, 1)
      }

      if (ARMY[0].useUnitLimit && ARMY[0].units >= ARMY[0].unitLimit) {
        canIAddToFirstStack = false
      }

      const unitStrength = stack.unit.BASESTR * (1 + stack.strBonus / 100)
      if (ARMY[0].useStrLimit && getStackStrength(ARMY, 0) + unitStrength > ARMY[0].strLimit) {
        canIAddToFirstStack = false
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

      // const monsterStack = getMobTarget(stack.unit)
      // const unitsNeededToKill1Mob = calculateUnitsMobKill(monsterStack.unit, stack.unit)
      // updateMinSetup(stack.id!, unitsNeededToKill1Mob)

      for (let i = 1; i < ARMY.length; i++) {
        stack = ARMY[i] //armyRef.current[i]
        if (!stack) {
          playing = false
          break
        }
        console.log('current stack', stack)

        // 4. calcular cuantos unit necesita pa matar 1 mob
        // const monsterStack = getMobTarget(stack.unit)

        // TODO: move calc minsetup when add the soldier (left panel)
        // const unitsNeededToKill1Mob = calculateUnitsMobKill(monsterStack.unit, stack.unit)
        const unitsNeededToKill1Mob = 1 //siempre 1
        updateMinSetup(stack.id!, unitsNeededToKill1Mob)
        // console.log('min units mob kill', stack.unit.name, unitsNeededToKill1Mob)

        /**manejo de leadership */
        if (stack.unit.tipo === 'army') {
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

            let groupStrength = sacrificeGroupStrength // if (addUnitMode === 'sacrificeStatsLimit') {}
            if (addUnitMode === 'previousStackStatsLimit') {
              const previousGroupStrength = getStackStrength(ARMY, i - 1)
              groupStrength = previousGroupStrength
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
            if (ARMY[i].useUnitLimit && ARMY[i].units >= ARMY[i].unitLimit) {
              // if (stack.useUnitLimit && getStackUnits(stack.id) >= getStackUnitLimit(stack.id)) {
              // console.log('rompio lead1')
              break
            }

            if (ARMY[i].useStrLimit && stackStrength + newStackStrength > ARMY[i].strLimit) {
              console.log(
                'lead: str limit',
                ARMY[i].useStrLimit,
                stackStrength + newStackStrength,
                '>=',
                ARMY[i].strLimit
              )

              // console.log('rompio lead2')
              break
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
            if (ARMY[i].useHpLimit && stackHealth + newStackHealth > ARMY[i].HpLimit) {
              console.log(
                'lead: hp limit',
                ARMY[i].useHpLimit,
                stackHealth + newStackHealth,
                '>=',
                ARMY[i].HpLimit
              )

              // console.log('rompio lead4')
              break
            }

            // console.log('leadership: agregando units a ', ARMY[i].unit.name)
            addArmyUnits(ARMY, i, unitsCount)

            console.log('new army', ARMY)
          }
        }

        if (stack.unit.tipo === 'merc') {
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

            let groupStrength = sacrificeGroupStrength // if (addUnitMode === 'sacrificeStatsLimit') {}
            if (addUnitMode === 'previousStackStatsLimit') {
              const previousGroupStrength = getStackStrength(ARMY, i - 1)
              groupStrength = previousGroupStrength
            }

            if (ARMY[i].useUnitLimit && ARMY[i].units >= ARMY[i].unitLimit) {
              // if (stack.useUnitLimit && getStackUnits(stack.id) >= getStackUnitLimit(stack.id)) {
              // console.log('rompio merc1')
              break
            }

            if (ARMY[i].useStrLimit && stackStrength + newStackStrength > ARMY[i].strLimit) {
              console.log(
                'auth: str limit',
                ARMY[i].useStrLimit,
                stackStrength + newStackStrength,
                '>=',
                ARMY[i].strLimit
              )
              // console.log('rompio merc2')
              break
            }

            if (stackStrength + newStackStrength >= groupStrength) {
              console.log(
                'break on str mayor ',
                stackStrength,
                newStackStrength,
                stackStrength + newStackStrength,
                '>',
                groupStrength
              )
              // console.log('rompio merc3')
              break
            }

            const stackHealth = getStackHealth(ARMY, i)
            // const totalSTRPerUnit = getSTRWithBonus(stack.unit, bonus) //sin el config bonus
            const totalHPPerUnit = stack.unit.BASEHP * (1 + stack.hpBonus / 100) // ahora individual cada stack tiene su prpio bonus
            const newStackHealth = totalHPPerUnit * unitsCount
            if (ARMY[i].useHpLimit && stackHealth + newStackHealth > ARMY[i].HpLimit) {
              console.log(
                'auth: hp limit',
                ARMY[i].useHpLimit,
                stackHealth + newStackHealth,
                '>=',
                ARMY[i].HpLimit
              )

              // console.log('rompio merc4')
              break
            }

            // 9. agregar al stack
            // console.log('authority: agregando units en ', ARMY[i].unit.name)
            addArmyUnits(ARMY, i, unitsCount)
          }
        }

        if (stack.unit.tipo === 'monster') {
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

            let groupStrength = sacrificeGroupStrength // if (addUnitMode === 'sacrificeStatsLimit') {}
            if (addUnitMode === 'previousStackStatsLimit') {
              const previousGroupStrength = getStackStrength(ARMY, i - 1)
              groupStrength = previousGroupStrength
            }

            if (ARMY[i].useUnitLimit && ARMY[i].units >= ARMY[i].unitLimit) {
              // if (stack.useUnitLimit && getStackUnits(stack.id) >= getStackUnitLimit(stack.id)) {
              // console.log('rompio dom1')
              break
            }

            if (ARMY[i].useStrLimit && stackStrength + newStackStrength > ARMY[i].strLimit) {
              console.log(
                'dominance: str limit',
                ARMY[i].useStrLimit,
                stackStrength + newStackStrength,
                '>=',
                ARMY[i].strLimit
              )
              // console.log('rompio dom2')
              break
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
            if (ARMY[i].useHpLimit && stackHealth + newStackHealth > ARMY[i].HpLimit) {
              console.log(
                'dom: hp limit',
                ARMY[i].useHpLimit,
                stackHealth + newStackHealth,
                '>=',
                ARMY[i].HpLimit
              )

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
        console.log('no changes to leadership,authority or dominance, ending')
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

    /**********************************************
     * basado en vitalidad
     * =======================
     *  la primera posicion, siempre sera el sacrificio
     * el sacrificio siempre incrementa de 1 en 1 sus unidades
     *
     */
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
    <div className='dos-main'>
      <nav className='fixed top-[56px] z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex'>
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

          <div className='inline-flex menu-options'>
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
          {selectedTarget === 'citadele10' && <Citadel type='e10' />}
          {selectedTarget === 'citadele15' && <Citadel type='e15' />}
          {selectedTarget === 'citadele20' && <Citadel type='e20' />}
          {selectedTarget === 'citadele25' && <Citadel type='e25' />}
          {selectedTarget === 'citadele30' && <Citadel type='e30' />}
          {selectedTarget === 'citadelc20' && <Citadel type='c20' />}
          {selectedTarget === 'citadelc25' && <Citadel type='c25' />}
        </div>
      </nav>

      <>
        <ArmyList />

        <div className='pt-[310px] sm:ml-64'>
          <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700'>
            <div className='stack-container'>
              <h2 className='header-title'>Stacks</h2>

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

              <div className='btn-group sticky'>
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

              <div className='stack-list'>
                <DndContext onDragEnd={handleDrag} /*sensors={sensors}*/>
                  <SortableContext items={army}>
                    {army.map(stack => {
                      if (cardType === 'smallcard') {
                        return <SmallCard stack={stack} key={stack.id} />
                      } else {
                        return <Card stack={stack} key={stack.id} />
                      }
                    })}
                  </SortableContext>
                </DndContext>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default Dos
