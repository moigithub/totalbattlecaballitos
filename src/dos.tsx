import { useState, useEffect, useRef } from 'react'

import './App.css'
import { useGuardsStore } from './guardStore'

// import classNames from 'classnames'
import {
  ancientArmy,
  arachneArmy,
  citadel10Army,
  doomsdayArmy,
  // EnemyUnit,
  // MobStack,
  ragnarokArmy,
  shadowCastleArmy
} from './monsters'
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
import { whoCanIAttack } from './utils'
import { Bonus } from './bonus'
import { SmallCard } from './SmallCard'
import {
  addArmyUnits,
  getArmyAuthority,
  getArmyDominance,
  getArmyLeadership,
  getStackStrength
} from './helpers'

function Dos() {
  // const getStackStrength = useStackStore(state => state.getStackStrength)
  // const getStack = useStackStore(state => state.getStack)
  const leadership = useGuardsStore(state => state.leadership)
  const authority = useGuardsStore(state => state.authority)
  const dominance = useGuardsStore(state => state.dominance)

  const setLeadership = useGuardsStore(state => state.setLeadership)
  const setAuthority = useGuardsStore(state => state.setAuthority)
  const setDominance = useGuardsStore(state => state.setDominance)
  const resetAllStacks = useStackStore(state => state.resetAllStacks)
  // const addUnits = useStackStore(state => state.addUnits)
  const updateMinSetup = useStackStore(state => state.updateMinSetup)
  const setMobArmy = useStackStore(state => state.setMobArmy)

  const armyRef = useRef(useStackStore.getState().army)

  //---------------------
  // para el drag & drop
  const setArmy = useStackStore(state => state.setArmy)
  const { army } = useStackStore()
  //---------------------

  // para mostrar data de mostros
  const mobArmy = useStackStore(state => state.mobArmy)
  //-------------------

  // const getStackUnits = useStackStore(state => state.getStackUnits)
  // const getStackUnitLimit = useStackStore(state => state.getStackUnitLimit)
  // const getStackStrLimit = useStackStore(state => state.getStackStrLimit)
  // const getArmyAuthority = useStackStore(state => state.getArmyAuthority)
  // const getArmyDominance = useStackStore(state => state.getArmyDominance)

  const [selectedEvent, setSelectedEvent] = useState('0')
  const [addUnitMode, setAddUnitMode] = useState('previousStackStatsLimit')
  const [windowMode, setWindowMode] = useState('showArmyConfig')
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

  useEffect(() => {
    let army = doomsdayArmy

    if (selectedEvent === '0') {
      army = ragnarokArmy
    } else if (selectedEvent === '1') {
      army = ancientArmy
    } else if (selectedEvent === '2') {
      army = doomsdayArmy
    } else if (selectedEvent === '3') {
      army = shadowCastleArmy
    } else if (selectedEvent === '4') {
      army = arachneArmy
    } else if (selectedEvent === '5') {
      army = citadel10Army
    }

    setMobArmy(army)
  }, [selectedEvent])

  useEffect(() => useStackStore.subscribe(state => (armyRef.current = state.army)), [])

  const changeMobEvent = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEvent(e.target.value)
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

  // const getMobTarget = (unit: Unit) => {
  //   //getMobTarget, usa getMonsterStack, y escoje un monster
  //   /**
  //    * beast vs mounted
  //    * beast vs ranged
  //    *
  //    * siege vs fortifications
  //    */
  //   let mob: MobStack | undefined = undefined
  //   if (unit.category === 'mounted') {
  //     /**
  //      * mounted vs ranged
  //      * mounted vs siege
  //      */
  //     // return draugMage
  //     mob = mobArmy.find(mob => mob.unit.category === 'ranged')
  //     if (!mob) {
  //       mob = mobArmy.find(mob => mob.unit.category === 'siege')
  //     }
  //   } else if (unit.category === 'ranged') {
  //     /*
  //      * ranged vs melee
  //      * ranged vs flying
  //      */
  //     mob = mobArmy.find(mob => mob.unit.category === 'flying')
  //     if (!mob) {
  //       mob = mobArmy.find(mob => mob.unit.category === 'melee')
  //     }
  //   } else if (unit.category === 'melee') {
  //     /*
  //      * melee vs beasts
  //      * melee vs humans
  //      * melee vs mounted  **
  //      */
  //     mob = mobArmy.find(mob => mob.unit.category === 'mounted')
  //     if (!mob) {
  //       mob = mobArmy.find(mob => mob.unit.race === 'beast')
  //     }
  //   } else if (unit.category === 'flying') {
  //     /*
  //      * flying vs elementals
  //      * flying vs mounted
  //      * flying vs giants
  //      */
  //     mob = mobArmy.find(mob => mob.unit.category === 'mounted')
  //     if (!mob) {
  //       mob = mobArmy.find(mob => mob.unit.race === 'giant')
  //     }
  //   } else if (unit.category === 'siege') {
  //     // const mob = mobArmy.find(mob => mob.unit.category === 'mounted')
  //   }

  //   // la raza tiene mayor prioridad, y reemplaza la categoria
  //   // ejm. mounstruo battleboard es mounted/beast
  //   // pero en el reporte ataca a un mounted
  //   // si fuese mounted la prioridad, atacaria un ranged/siege
  //   if (unit.group === 'elemental') {
  //     mob = mobArmy.find(mob => mob.unit.category === 'flying')
  //     if (!mob) {
  //       mob = mobArmy.find(mob => mob.unit.category === 'melee')
  //     }
  //   } else if (unit.group === 'giant') {
  //     mob = mobArmy.find(mob => mob.unit.category === 'melee')
  //     if (!mob) {
  //       mob = mobArmy.find(mob => mob.unit.race === 'beast')
  //     }
  //   } else if (unit.group === 'dragon') {
  //     mob = mobArmy.find(mob => mob.unit.category === 'mounted')
  //     if (!mob) {
  //       mob = mobArmy.find(mob => mob.unit.race === 'giant')
  //     }
  //   } else if (unit.group === 'beast') {
  //     mob = mobArmy.find(mob => mob.unit.category === 'mounted')
  //     if (!mob) {
  //       mob = mobArmy.find(mob => mob.unit.category === 'ranged')
  //     }
  //   }

  //   if (!mob) mob = mobArmy[0]
  //   return mob
  //   // return draugMage //doomsdayFireswordRider // retornar el que tiene mas hp ?
  // }

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

    let maxLoop = 1000 // 000 // should change it for a timer
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

      if (
        stack.unit.tipo === 'army' &&
        getArmyLeadership(ARMY) + stack.unit.LEADERSHIP <= leadership
      ) {
        addArmyUnits(ARMY, 0, 1)
      } else if (
        stack.unit.tipo === 'merc' &&
        getArmyAuthority(ARMY) + stack.unit.AUTHORITY <= authority
      ) {
        addArmyUnits(ARMY, 0, 1)
      } else if (
        stack.unit.tipo === 'monster' &&
        getArmyDominance(ARMY) + stack.unit.DOMINANCE <= dominance
      ) {
        addArmyUnits(ARMY, 0, 1)
      } else {
        // break
      }

      // console.log('army0', army[0], armyRef.current[0])

      // 3. calcular str del sacrificio
      const sacrificeGroupStrength = getStackStrength(ARMY, 0)
      console.log('sacrifice strength', sacrificeGroupStrength)

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
            console.log(
              '...lead',
              stack.unit.name,
              stack.strBonus,
              stack.useStrLimit,
              stack.strLimit,
              stack.useUnitLimit,
              stack.unitLimit
            )
            // 8. check HP acumulado + hp nuevo sea menor que el del sacrificio
            const stackStrength = getStackStrength(ARMY, i)
            // const totalSTRPerUnit = getSTRWithBonus(stack.unit, bonus) //sin el config bonus
            const totalSTRPerUnit = stack.unit.BASESTR * (1 + stack.strBonus) // ahora individual cada stack tiene su prpio bonus
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
              break
            }

            if (
              (ARMY[i].useStrLimit && stackStrength + newStackStrength > ARMY[i].strLimit) ||
              stackStrength + newStackStrength > groupStrength
            ) {
              break
            }

            if (stackStrength + newStackStrength > groupStrength) {
              // 9. agregar al stack
              break
            }

            console.log('leadership: agregando units a ', ARMY[i].unit.name)
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
          console.log('processing merc')
          // 7 check authority acumulado + authority nuevo sea menor que el disponible
          while (getArmyAuthority(ARMY) + newStackAuthority <= authority) {
            console.log(
              '...auth',
              stack.unit.name,
              stack.strBonus,
              stack.useStrLimit,
              stack.strLimit,
              stack.useUnitLimit,
              stack.unitLimit
            )
            console.log(
              'check auth calc MENOR IGUAL ',
              getArmyAuthority(ARMY) + newStackAuthority,
              'authority',
              authority
            )
            // 8. check HP acumulado + hp nuevo sea menor que el del sacrificio
            const stackStrength = getStackStrength(ARMY, i)
            // const totalSTRPerUnit = getSTRWithBonus(stack.unit, bonus)
            const totalSTRPerUnit = stack.unit.BASESTR * (1 + stack.strBonus) // ahora individual cada stack tiene su prpio bonus
            const newStackStrength = totalSTRPerUnit * unitsCount

            let groupStrength = sacrificeGroupStrength // if (addUnitMode === 'sacrificeStatsLimit') {}
            if (addUnitMode === 'previousStackStatsLimit') {
              const previousGroupStrength = getStackStrength(ARMY, i - 1)
              groupStrength = previousGroupStrength
            }

            if (ARMY[i].useUnitLimit && ARMY[i].units >= ARMY[i].unitLimit) {
              // if (stack.useUnitLimit && getStackUnits(stack.id) >= getStackUnitLimit(stack.id)) {
              break
            }

            if (
              (ARMY[i].useStrLimit && stackStrength + newStackStrength > ARMY[i].strLimit) ||
              stackStrength + newStackStrength > groupStrength
            ) {
              break
            }

            if (stackStrength + newStackStrength > groupStrength) {
              console.log(
                'break on str mayor ',
                stackStrength + newStackStrength,
                '>',
                groupStrength
              )
              break
            }

            // 9. agregar al stack
            console.log('authority: agregando units en ', ARMY[i].unit.name)
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
            console.log(
              '...domi',
              stack.unit.name,
              stack.strBonus,
              stack.useStrLimit,
              stack.strLimit,
              stack.useUnitLimit,
              stack.unitLimit
            )
            // 8. check HP acumulado + hp nuevo sea menor que el del sacrificio
            const stackStrength = getStackStrength(ARMY, i)
            // const totalSTRPerUnit = getSTRWithBonus(stack.unit, bonus)
            const totalSTRPerUnit = stack.unit.BASESTR * (1 + stack.strBonus) // ahora individual cada stack tiene su prpio bonus
            const newStackStrength = totalSTRPerUnit * unitsCount

            let groupStrength = sacrificeGroupStrength // if (addUnitMode === 'sacrificeStatsLimit') {}
            if (addUnitMode === 'previousStackStatsLimit') {
              const previousGroupStrength = getStackStrength(ARMY, i - 1)
              groupStrength = previousGroupStrength
            }

            if (ARMY[i].useUnitLimit && ARMY[i].units >= ARMY[i].unitLimit) {
              // if (stack.useUnitLimit && getStackUnits(stack.id) >= getStackUnitLimit(stack.id)) {
              break
            }

            if (
              (ARMY[i].useStrLimit && stackStrength + newStackStrength > ARMY[i].strLimit) ||
              stackStrength + newStackStrength > groupStrength
            ) {
              break
            }

            if (stackStrength + newStackStrength > groupStrength) {
              // 9. agregar al stack
              break
            }

            console.log('dominance: agregando units en ', ARMY[i].unit.name)
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

      if (ARMY[0].useUnitLimit && ARMY[0].units >= ARMY[0].unitLimit) {
        console.log('firstunit break')
        playing = false
        break
      }

      if (ARMY[0].useStrLimit && getStackStrength(ARMY, 0) >= ARMY[0].strLimit) {
        playing = false
        break
      }

      console.log('loop protection', maxLoop)
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
    console.log('event dragend', event)
    const { active, over } = event
    console.log({ active, over })

    if (over && active.id !== over.id) {
      const index1 = army.findIndex(stack => stack.id === active.id)
      const index2 = army.findIndex(stack => stack.id === over.id)
      setArmy(arrayMove(army, index1, index2))
    }
  }

  return (
    <div className='dos-main'>
      <nav className='fixed top-[56px] z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
          <div className='config-container'>
            <div className='configbar'>
              <div className='group'>
                <label>Event </label>
                <select
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  value={selectedEvent}
                  onChange={changeMobEvent}
                >
                  <option value='0'>Ragnarok/jörmungandr-fenrir </option>
                  <option value='1'>Ancient/Tinman </option>
                  <option value='2'>Doomsday </option>
                  <option value='3'>Shadow castle</option>
                  <option value='4'>Arachne</option>
                  {/* <option value='5'>Citadel lvl 10</option> */}
                  {/* <option value='54'>JacksReturn/Scarecrow</option> */}
                </select>
              </div>
            </div>
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
              className='cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300   rounded-lg text-xs px-0.5 py-0.5 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
            >
              Show Army
            </button>
            <div className='radio-group'>
              <div className='radiobtn'>
                <input
                  type='radio'
                  value='showArmyConfig'
                  name='extra'
                  checked={windowMode === 'showArmyConfig'}
                  onChange={() => {
                    setWindowMode('showArmyConfig')
                  }}
                  id='armyconfig'
                />
                <label htmlFor='armyconfig'>Army config</label>
              </div>

              <div className='radiobtn'>
                <input
                  type='radio'
                  value='showTargetMonsterInfo'
                  name='extra'
                  checked={windowMode === 'showTargetMonsterInfo'}
                  onChange={() => {
                    setWindowMode('showTargetMonsterInfo')
                  }}
                  id='monsterinfo'
                />
                <label htmlFor='monsterinfo'>Monster info</label>
              </div>
              {/* <div className='radiobtn'>
            <input
              type='radio'
              value='showBonusConfig'
              name='extra'
              checked={windowMode === 'showBonusConfig'}
              onChange={() => {
                setWindowMode('showBonusConfig')
              }}
              id='bonusconfig'
            />
            <label htmlFor='bonusconfig'>Bonus config</label>
          </div> */}
            </div>

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
      </nav>

      {windowMode === 'showArmyConfig' && (
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
                      {army.map((stack, index) => {
                        if (cardType === 'smallcard') {
                          return <SmallCard stack={stack} key={stack.id} isFirst={index === 0} />
                        } else {
                          return <Card stack={stack} key={stack.id} isFirst={index === 0} />
                        }
                      })}
                    </SortableContext>
                  </DndContext>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {windowMode === 'showTargetMonsterInfo' && (
        <div className='pt-[310px] mob-container'>
          {mobArmy.map(army => {
            return (
              <div className='mob-army-stack' key={army.id}>
                <div className='name'>
                  {army.unit.name} {army.unit.level} {army.unit.category}
                </div>
                <div className='units'>Units {army.units}</div>
                <div className='hp'>Stack HP {army.units * army.unit.BASEHP}</div>
                <div style={{ color: 'gray' }}>
                  i attack <span style={{ color: 'green' }}>{whoCanIAttack(army.unit)}</span>
                </div>
              </div>
            )
          })}
        </div>
      )}
      {windowMode === 'showBonusConfig' && <Bonus />}
    </div>
  )
}

export default Dos
