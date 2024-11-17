import { useState, useEffect } from 'react'

import './App.css'
import { useGuardsStore } from './guardStore'

// import classNames from 'classnames'
import {
  ancientArmy,
  arachneArmy,
  doomsdayArmy,
  EnemyUnit,
  MobStack,
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
import { Link } from 'react-router-dom'
import { getStats, getSTRWithBonus, useStackStore } from './stackStore'
import { Unit } from './types'
import { whoCanIAttack } from './utils'

function Dos() {
  // const mobHealth = useGuardsStore(state => state.mobHealth)
  // const setMobHealth = useGuardsStore(state => state.setMobHealth)
  // const addArmy = useStackStore(state => state.addArmy)
  // const removeStack = useStackStore(state => state.removeStack)
  // const resetStack = useStackStore(state => state.resetStack)
  // const toggleLockMin = useStackStore(state => state.toggleLockMin)
  // const removeUnits = useStackStore(state => state.removeUnits)
  const getStackStrength = useStackStore(state => state.getStackStrength)
  // const getStackLeadership = useStackStore(state => state.getStackLeadership)
  const leadership = useGuardsStore(state => state.leadership)
  const setLeadership = useGuardsStore(state => state.setLeadership)

  const authority = useGuardsStore(state => state.authority)
  const setAuthority = useGuardsStore(state => state.setAuthority)

  const dominance = useGuardsStore(state => state.dominance)
  const setDominance = useGuardsStore(state => state.setDominance)

  const army = useStackStore(state => state.army)
  const setArmy = useStackStore(state => state.setArmy)
  const resetAllStacks = useStackStore(state => state.resetAllStacks)
  const bonus = useStackStore(state => state.bonus)
  const addUnits = useStackStore(state => state.addUnits)
  // const getStackHealth = useStackStore(state => state.getStackHealth)
  const getArmyLeadership = useStackStore(state => state.getArmyLeadership)
  const getArmyAuthority = useStackStore(state => state.getArmyAuthority)
  const getArmyDominance = useStackStore(state => state.getArmyDominance)
  const updateMinSetup = useStackStore(state => state.updateMinSetup)

  const mobArmy = useStackStore(state => state.mobArmy)
  const setMobArmy = useStackStore(state => state.setMobArmy)

  const setGuardsmanRangedBonus = useStackStore(state => state.setGuardsmanRangedBonus)
  const setGuardsmanMeleeBonus = useStackStore(state => state.setGuardsmanMeleeBonus)
  const setGuardsmanMountedBonus = useStackStore(state => state.setGuardsmanMountedBonus)
  const setGuardsmanFlyingBonus = useStackStore(state => state.setGuardsmanFlyingBonus)
  const setGuardsmanEpicBonus = useStackStore(state => state.setGuardsmanEpicBonus)
  const setSpecialistRangedBonus = useStackStore(state => state.setSpecialistRangedBonus)
  const setSpecialistMeleeBonus = useStackStore(state => state.setSpecialistMeleeBonus)
  const setSpecialistMountedBonus = useStackStore(state => state.setSpecialistMountedBonus)
  const setSpecialistFlyingBonus = useStackStore(state => state.setSpecialistFlyingBonus)
  const setSpecialistScoutBonus = useStackStore(state => state.setSpecialistScoutBonus)
  const setEngineerSiegeBonus = useStackStore(state => state.setEngineerSiegeBonus)
  const setElementalRangedBonus = useStackStore(state => state.setElementalRangedBonus)
  const setElementalMeleeBonus = useStackStore(state => state.setElementalMeleeBonus)
  const setElementalMountedBonus = useStackStore(state => state.setElementalMountedBonus)
  const setElementalFlyingBonus = useStackStore(state => state.setElementalFlyingBonus)
  const setBeastRangedBonus = useStackStore(state => state.setBeastRangedBonus)
  const setBeastMeleeBonus = useStackStore(state => state.setBeastMeleeBonus)
  const setBeastMountedBonus = useStackStore(state => state.setBeastMountedBonus)
  const setBeastFlyingBonus = useStackStore(state => state.setBeastFlyingBonus)
  const setDragonRangedBonus = useStackStore(state => state.setDragonRangedBonus)
  const setDragonMeleeBonus = useStackStore(state => state.setDragonMeleeBonus)
  const setDragonMountedBonus = useStackStore(state => state.setDragonMountedBonus)
  const setDragonFlyingBonus = useStackStore(state => state.setDragonFlyingBonus)
  const setGiantRangedBonus = useStackStore(state => state.setGiantRangedBonus)
  const setGiantMeleeBonus = useStackStore(state => state.setGiantMeleeBonus)
  const setGiantMountedBonus = useStackStore(state => state.setGiantMountedBonus)
  const setGiantFlyingBonus = useStackStore(state => state.setGiantFlyingBonus)
  //-------------------

  const [selectedEvent, setSelectedEvent] = useState('0')
  const [addUnitMode, setAddUnitMode] = useState('previousStackStatsLimit')
  const [windowMode, setWindowMode] = useState('showArmyConfig')

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
    }

    setMobArmy(army)
  }, [selectedEvent])

  const changeMobEvent = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEvent(e.target.value)
  }

  const changeLeadership = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() !== '') {
      const value = parseInt(e.target.value)
      setLeadership(value)
      console.log('changing leadership', value)
    }
  }
  const changeAuthority = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() !== '') {
      const value = parseInt(e.target.value)
      setAuthority(value)

      console.log('changing authority', value)
    }
  }
  const changeDominance = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() !== '') {
      const value = parseInt(e.target.value)
      setDominance(value)

      console.log('changing dominance', value)
    }
  }

  const getMobTarget = (unit: Unit) => {
    //getMobTarget, usa getMonsterStack, y escoje un monster
    /**
     * beast vs mounted
     * beast vs ranged
     *
     * siege vs fortifications
     */
    let mob: MobStack | undefined = undefined
    if (unit.category === 'mounted') {
      /**
       * mounted vs ranged
       * mounted vs siege
       */
      // return draugMage
      mob = mobArmy.find(mob => mob.unit.category === 'ranged')
      if (!mob) {
        mob = mobArmy.find(mob => mob.unit.category === 'siege')
      }
    } else if (unit.category === 'ranged') {
      /*
       * ranged vs melee
       * ranged vs flying
       */
      mob = mobArmy.find(mob => mob.unit.category === 'flying')
      if (!mob) {
        mob = mobArmy.find(mob => mob.unit.category === 'melee')
      }
    } else if (unit.category === 'melee') {
      /*
       * melee vs beasts
       * melee vs humans
       * melee vs mounted  **
       */
      mob = mobArmy.find(mob => mob.unit.category === 'mounted')
      if (!mob) {
        mob = mobArmy.find(mob => mob.unit.race === 'beast')
      }
    } else if (unit.category === 'flying') {
      /*
       * flying vs elementals
       * flying vs mounted
       * flying vs giants
       */
      mob = mobArmy.find(mob => mob.unit.category === 'mounted')
      if (!mob) {
        mob = mobArmy.find(mob => mob.unit.race === 'giant')
      }
    } else if (unit.category === 'siege') {
      // const mob = mobArmy.find(mob => mob.unit.category === 'mounted')
    }

    // la raza tiene mayor prioridad, y reemplaza la categoria
    // ejm. mounstruo battleboard es mounted/beast
    // pero en el reporte ataca a un mounted
    // si fuese mounted la prioridad, atacaria un ranged/siege
    if (unit.race === 'elemental') {
      mob = mobArmy.find(mob => mob.unit.category === 'flying')
      if (!mob) {
        mob = mobArmy.find(mob => mob.unit.category === 'melee')
      }
    } else if (unit.race === 'giant') {
      mob = mobArmy.find(mob => mob.unit.category === 'melee')
      if (!mob) {
        mob = mobArmy.find(mob => mob.unit.race === 'beast')
      }
    } else if (unit.race === 'dragon') {
      mob = mobArmy.find(mob => mob.unit.category === 'mounted')
      if (!mob) {
        mob = mobArmy.find(mob => mob.unit.race === 'giant')
      }
    } else if (unit.race === 'beast') {
      mob = mobArmy.find(mob => mob.unit.category === 'mounted')
      if (!mob) {
        mob = mobArmy.find(mob => mob.unit.category === 'ranged')
      }
    }

    if (!mob) mob = mobArmy[0]
    return mob
    // return draugMage //doomsdayFireswordRider // retornar el que tiene mas hp ?
  }

  const calculateUnitsMobKill = (monster: EnemyUnit, unit: Unit): number => {
    const monsterHealth = monster.BASEHP
    let soldierStrength = unit.BASESTR

    // mounted vs ranged
    const stats = getStats(unit, bonus)

    const otherBonus = stats?.str ?? 0

    if (unit.category === 'mounted') {
      if (monster.category === 'ranged') {
        const strBonus = ((otherBonus + unit.vsRangedPercent) * unit.BASESTR) / 100
        soldierStrength = unit.BASESTR + strBonus
      } else if (monster.category === 'siege') {
        const strBonus = ((otherBonus + unit.vsSiegePercent) * unit.BASESTR) / 100
        soldierStrength = unit.BASESTR + strBonus
      }
    } else if (unit.category === 'ranged') {
      if (monster.category === 'flying') {
        const strBonus = ((otherBonus + unit.vsFlyingPercent) * unit.BASESTR) / 100
        soldierStrength = unit.BASESTR + strBonus
      } else if (monster.category === 'melee') {
        const strBonus = ((otherBonus + unit.vsMeleePercent) * unit.BASESTR) / 100
        soldierStrength = unit.BASESTR + strBonus
      }
    } else if (unit.category === 'melee') {
      if (monster.category === 'mounted') {
        const strBonus = ((otherBonus + unit.vsMountedPercent) * unit.BASESTR) / 100
        soldierStrength = unit.BASESTR + strBonus
      } else if (monster.race === 'beast') {
        const strBonus = ((otherBonus + unit.vsBeastPercent) * unit.BASESTR) / 100
        soldierStrength = unit.BASESTR + strBonus
      }
    } else if (unit.category === 'flying') {
      if (monster.category === 'mounted') {
        const strBonus = ((otherBonus + unit.vsMountedPercent) * unit.BASESTR) / 100
        soldierStrength = unit.BASESTR + strBonus
      } else if (monster.race === 'giant') {
        const strBonus = ((otherBonus + unit.vsGiantPercent) * unit.BASESTR) / 100
        soldierStrength = unit.BASESTR + strBonus
      }
    }

    if (unit.race === 'elemental') {
      if (monster.category === 'flying') {
        const strBonus = ((otherBonus + unit.vsFlyingPercent) * unit.BASESTR) / 100
        soldierStrength = unit.BASESTR + strBonus
      } else if (monster.category === 'melee') {
        const strBonus = ((otherBonus + unit.vsGiantPercent) * unit.BASESTR) / 100
        soldierStrength = unit.BASESTR + strBonus
      }
    } else if (unit.race === 'giant') {
      if (monster.category === 'melee') {
        const strBonus = ((otherBonus + unit.vsMeleePercent) * unit.BASESTR) / 100
        soldierStrength = unit.BASESTR + strBonus
      } else if (monster.race === 'beast') {
        const strBonus = ((otherBonus + unit.vsBeastPercent) * unit.BASESTR) / 100
        soldierStrength = unit.BASESTR + strBonus
      }
    } else if (unit.race === 'dragon') {
      if (monster.category === 'mounted') {
        const strBonus = ((otherBonus + unit.vsMountedPercent) * unit.BASESTR) / 100
        soldierStrength = unit.BASESTR + strBonus
      } else if (monster.race === 'giant') {
        const strBonus = ((otherBonus + unit.vsGiantPercent) * unit.BASESTR) / 100
        soldierStrength = unit.BASESTR + strBonus
      }
    } else if (unit.race === 'beast') {
      if (monster.category === 'mounted') {
        const strBonus = ((otherBonus + unit.vsMountedPercent) * unit.BASESTR) / 100
        soldierStrength = unit.BASESTR + strBonus
      } else if (monster.category === 'ranged') {
        const strBonus = ((otherBonus + unit.vsRangedPercent) * unit.BASESTR) / 100
        soldierStrength = unit.BASESTR + strBonus
      }
    }

    console.log('MINSETUP', { monsterHealth, soldierStrength, unit, monster })
    // retorna el num de soldados minimo que se necesita para matar un monstruo
    return Math.ceil(monsterHealth / soldierStrength)
  }

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

    if (army.length === 0) {
      // algo debe estar marcado
      alert('pick riders')
      return
    }

    /* NOTAS:
     minSetup === how many units on the stack should be used to kill one monster
     calculate the minSetup for each stack

     hay un selector de monstruos/evento que tiene un stack (varios tipos de) mounstruos, un array de objetos
     el getmobtarget, deberia iterar el array y devolver el tipo de mostruo
     de acuerdo al tipo de soldado que tengo.. ejm. mount vs ranged
     y si no hay, deberia retornar el que tiene mayor hp ??
*/

    resetAllStacks()

    let maxLoop = 1000000 // should change it for a timer
    let totalLeadership = 0
    let totalAuthority = 0
    let totalDominance = 0
    let lastLeadershipCalculated = 0 // to break the loop, if didnt changed (loop protection)
    let lastAuthorityCalculated = 0 // to break the loop, if didnt changed (loop protection)
    let lastDominanceCalculated = 0 // to break the loop, if didnt changed (loop protection)

    while (true) {
      // 1. check leadership acumulado del army
      // totalLeadership = getArmyLeadership()
      // if (totalLeadership >= leadership) {
      //   break
      // }

      // 2. agregar 1 unit al sacrificio
      let stack = army[0] // el primero de la lista es el sacrificio, incrementa de 1 en 1

      if (stack.unit.tipo === 'army' && totalLeadership + stack.unit.LEADERSHIP <= leadership) {
        addUnits(army[0].id, 1)
      } else if (stack.unit.tipo === 'merc' && totalAuthority + stack.unit.AUTHORITY <= authority) {
        addUnits(army[0].id, 1)
      } else if (
        stack.unit.tipo === 'monster' &&
        totalDominance + stack.unit.DOMINANCE <= dominance
      ) {
        addUnits(army[0].id, 1)
      } else {
        // break
      }

      // 3. calcular str del sacrificio
      const sacrificeGroupStrength = getStackStrength(army[0].id)
      console.log('sacrifice healt', sacrificeGroupStrength)

      for (let i = 1; i < army.length; i++) {
        stack = army[i]

        // 4. calcular cuantos unit necesita pa matar 1 mob
        const monsterStack = getMobTarget(stack.unit)
        console.log('monster target', monsterStack)

        // TODO: move calc minsetup when add the soldier (left panel)
        const unitsNeededToKill1Mob = calculateUnitsMobKill(monsterStack.unit, stack.unit)
        updateMinSetup(stack.id!, unitsNeededToKill1Mob)
        console.log('min units mob kill', stack.unit.name, unitsNeededToKill1Mob)

        /**manejo de leadership */
        if (stack.unit.tipo === 'army') {
          // 5. check leadership acumulado del army
          totalLeadership = getArmyLeadership()

          // 6. check leadership del nuevo grupo
          const unitsCount = stack.lockMinSetup ? unitsNeededToKill1Mob : 1
          const newStackLeadership = stack.unit.LEADERSHIP * unitsCount

          // 7 check leadership acumulado + leadership nuevo sea menor que el disponible
          if (totalLeadership + newStackLeadership <= leadership) {
            // 8. check HP acumulado + hp nuevo sea menor que el del sacrificio
            const stackStrength = getStackStrength(stack.id!)
            const totalSTRPerUnit = getSTRWithBonus(stack.unit, bonus)
            const newStackStrength = totalSTRPerUnit * unitsCount

            if (addUnitMode === 'sacrificeStatsLimit') {
              if (stackStrength + newStackStrength < sacrificeGroupStrength) {
                // 9. agregar al stack
                console.log('leadership: agregando units en ', stack.id)
                addUnits(stack.id!, unitsCount)
              }
            }
            if (addUnitMode === 'previousStackStatsLimit') {
              const previousGroupStrength = getStackStrength(army[i - 1].id)

              if (stackStrength + newStackStrength < previousGroupStrength) {
                // 9. agregar al stack
                console.log('leadership: agregando units en ', stack.id)
                addUnits(stack.id!, unitsCount)
              }
            }
          }
        } else if (stack.unit.tipo === 'merc') {
          // 5. check authority acumulado del mercenaries

          totalAuthority = getArmyAuthority()

          // 6. check authority del nuevo grupo
          const unitsCount = stack.lockMinSetup ? unitsNeededToKill1Mob : 1
          const newStackAuthority = stack.unit.AUTHORITY * unitsCount

          // 7 check authority acumulado + authority nuevo sea menor que el disponible
          if (totalAuthority + newStackAuthority <= authority) {
            console.log(
              'check auth calc MENOR IGUAL ',
              totalAuthority + newStackAuthority,
              'authority',
              authority
            )
            // 8. check HP acumulado + hp nuevo sea menor que el del sacrificio
            const stackStrength = getStackStrength(stack.id!)
            const totalSTRPerUnit = getSTRWithBonus(stack.unit, bonus)
            const newStackStrength = totalSTRPerUnit * unitsCount

            if (addUnitMode === 'sacrificeStatsLimit') {
              if (stackStrength + newStackStrength < sacrificeGroupStrength) {
                // 9. agregar al stack
                console.log('authority: agregando units en ', stack.id)
                addUnits(stack.id!, unitsCount)
              }
            }
            if (addUnitMode === 'previousStackStatsLimit') {
              const previousGroupStrength = getStackStrength(army[i - 1].id)

              if (stackStrength + newStackStrength < previousGroupStrength) {
                // 9. agregar al stack
                console.log('authority: agregando units en ', stack.id)
                addUnits(stack.id!, unitsCount)
              }
            }
          }
        } else if (stack.unit.tipo === 'monster') {
          // 5. check DOMINANCE acumulado del mercenaries

          totalDominance = getArmyDominance()

          // 6. check DOMINANCE del nuevo grupo
          const unitsCount = stack.lockMinSetup ? unitsNeededToKill1Mob : 1
          const newStackDominance = stack.unit.DOMINANCE * unitsCount

          // 7 check DOMINANCE acumulado + DOMINANCE nuevo sea menor que el disponible
          if (totalDominance + newStackDominance <= dominance) {
            // 8. check HP acumulado + hp nuevo sea menor que el del sacrificio
            const stackStrength = getStackStrength(stack.id!)
            const totalSTRPerUnit = getSTRWithBonus(stack.unit, bonus)
            const newStackStrength = totalSTRPerUnit * unitsCount

            if (addUnitMode === 'sacrificeStatsLimit') {
              if (stackStrength + newStackStrength < sacrificeGroupStrength) {
                // 9. agregar al stack
                console.log('dominance: agregando units en ', stack.id)
                addUnits(stack.id!, unitsCount)
              }
            }
            if (addUnitMode === 'previousStackStatsLimit') {
              const previousGroupStrength = getStackStrength(army[i - 1].id)

              if (stackStrength + newStackStrength < previousGroupStrength) {
                // 9. agregar al stack
                console.log('dominance: agregando units en ', stack.id)
                addUnits(stack.id!, unitsCount)
              }
            }
          }
        }
      }

      // check if there were any changes
      totalLeadership = getArmyLeadership()
      totalAuthority = getArmyAuthority()
      totalDominance = getArmyDominance()

      console.log('using leadership', totalLeadership, 'of', leadership)
      console.log('using authority', totalAuthority, 'of', authority)
      console.log('using dominance', totalDominance, 'of', dominance)

      // if (totalLeadership > leadership) break
      if (
        lastLeadershipCalculated === totalLeadership &&
        lastAuthorityCalculated === totalAuthority &&
        lastDominanceCalculated === totalDominance
      ) {
        console.log('no changes to leadership,authority or dominance, ending')
        break
      }
      lastLeadershipCalculated = totalLeadership
      lastAuthorityCalculated = totalAuthority
      lastDominanceCalculated = totalDominance

      if (
        totalAuthority > authority ||
        totalDominance > dominance ||
        totalLeadership > leadership
      ) {
        // no deberia pasar
        break
      }

      if (maxLoop-- < 1) {
        console.log('loop protection', maxLoop)
        break
      }
    }

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
      <div className='config-container'>
        <div className='configbar'>
          <div className='group'>
            <label>Event </label>
            <select value={selectedEvent} onChange={changeMobEvent}>
              <option value='0'>Ragnarok/jörmungandr-fenrir </option>
              <option value='1'>Ancient/Tinman </option>
              <option value='2'>Doomsday </option>
              <option value='3'>Shadow castle</option>
              <option value='4'>Arachne</option>
              {/* <option value='54'>JacksReturn/Scarecrow</option> */}
            </select>
          </div>
        </div>
        <div className='configbar'>
          <div>
            <label>Leadership </label>
            <input type='number' value={leadership} onChange={changeLeadership} required />
          </div>
          <div>
            <label>Authority (mercs)</label>
            <input type='number' value={authority} onChange={changeAuthority} required />
          </div>
          <div>
            <label>Dominance (monsters)</label>
            <input type='number' value={dominance} onChange={changeDominance} required />
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
      <div className='menu-options'>
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
          <div className='radiobtn'>
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
          </div>
        </div>
      </div>

      {windowMode === 'showArmyConfig' && (
        <div className='stack-army'>
          <ArmyList />
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
                  <td>{getArmyLeadership()}</td>
                  <td>{getArmyAuthority()}</td>
                  <td>{getArmyDominance()}</td>
                </tr>
              </tbody>
            </table>

            <div className='btn-group sticky'>
              <button className='gobtn' onClick={calcSTR}>
                CALCULATE
              </button>
              <button
                className='btn-clear-army'
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
                    return <Card stack={stack} key={stack.id} isFirst={index === 0} />
                  })}
                </SortableContext>
              </DndContext>
            </div>
          </div>
        </div>
      )}

      {windowMode === 'showTargetMonsterInfo' && (
        <div className='mob-container'>
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
      {windowMode === 'showBonusConfig' && (
        <div className='bonus-container'>
          <h4>
            Strength & Health Bonus config (check <Link to={'/info'}>Info</Link>)
          </h4>
          <p className='small'>NO need to fill everything, but the stacks you using</p>
          <p className='small'>
            i saw 3 bonus values, when parking on city, when marching to a battle, and finally on
            the Battle Report (BR)
          </p>
          <p className='small'>
            probably the easier one to use would be the BR one, otherwise the stack order might vary
          </p>
          <div className='guardsmen'>
            <p>Guardsman</p>
            <div className='row'>
              <span>Melee</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.guardsman.melee.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setGuardsmanMeleeBonus({ str, hp: bonus.guardsman.melee.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.guardsman.melee.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setGuardsmanMeleeBonus({ hp, str: bonus.guardsman.melee.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Ranged</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.guardsman.ranged.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setGuardsmanRangedBonus({ str, hp: bonus.guardsman.ranged.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.guardsman.ranged.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setGuardsmanRangedBonus({ hp, str: bonus.guardsman.ranged.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Mounted</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.guardsman.mounted.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setGuardsmanMountedBonus({ str, hp: bonus.guardsman.mounted.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.guardsman.mounted.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setGuardsmanMountedBonus({ hp, str: bonus.guardsman.mounted.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Flying</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.guardsman.flying.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setGuardsmanFlyingBonus({ str, hp: bonus.guardsman.flying.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.guardsman.flying.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setGuardsmanFlyingBonus({ hp, str: bonus.guardsman.flying.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Epic</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.guardsman.epic.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setGuardsmanEpicBonus({ str, hp: bonus.guardsman.epic.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.guardsman.epic.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setGuardsmanEpicBonus({ hp, str: bonus.guardsman.epic.str })
                    }
                  }}
                  required
                />
              </div>
            </div>
          </div>

          <div className='specialists'>
            <p>Specialist</p>
            <div className='row'>
              <span>Melee</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.specialist.melee.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setSpecialistMeleeBonus({ str, hp: bonus.specialist.melee.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.specialist.melee.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setSpecialistMeleeBonus({ hp, str: bonus.specialist.melee.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Ranged</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.specialist.ranged.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setSpecialistRangedBonus({ str, hp: bonus.specialist.ranged.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.specialist.ranged.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setSpecialistRangedBonus({ hp, str: bonus.specialist.ranged.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Mounted</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.specialist.mounted.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setSpecialistMountedBonus({ str, hp: bonus.specialist.mounted.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.specialist.mounted.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setSpecialistMountedBonus({ hp, str: bonus.specialist.mounted.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Flying</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.specialist.flying.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setSpecialistFlyingBonus({ str, hp: bonus.specialist.flying.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.specialist.flying.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setSpecialistFlyingBonus({ hp, str: bonus.specialist.flying.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Scout</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.specialist.scout.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setSpecialistScoutBonus({ str, hp: bonus.specialist.scout.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.specialist.scout.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setSpecialistScoutBonus({ hp, str: bonus.specialist.scout.str })
                    }
                  }}
                  required
                />
              </div>
            </div>
          </div>

          <div className='engineer'>
            <p>Engineer</p>
            <div className='row'>
              <span>Siege</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.engineer.siege.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setEngineerSiegeBonus({ str, hp: bonus.engineer.siege.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.engineer.siege.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setEngineerSiegeBonus({ hp, str: bonus.engineer.siege.str })
                    }
                  }}
                  required
                />
              </div>
            </div>
          </div>

          <div className='monsters'>
            <p>Monster - Elemental</p>
            <div className='row'>
              <span>Melee</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.elemental.melee.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setElementalMeleeBonus({ str, hp: bonus.elemental.melee.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.elemental.melee.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setElementalMeleeBonus({ hp, str: bonus.elemental.melee.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Ranged</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.elemental.ranged.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setElementalRangedBonus({ str, hp: bonus.elemental.ranged.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.elemental.ranged.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setElementalRangedBonus({ hp, str: bonus.elemental.ranged.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Mounted</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.elemental.mounted.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setElementalMountedBonus({ str, hp: bonus.elemental.mounted.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.elemental.mounted.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setElementalMountedBonus({ hp, str: bonus.elemental.mounted.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Flying</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.elemental.flying.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setElementalFlyingBonus({ str, hp: bonus.elemental.flying.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.elemental.flying.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setElementalFlyingBonus({ hp, str: bonus.elemental.flying.str })
                    }
                  }}
                  required
                />
              </div>
            </div>
          </div>

          <div className='monsters'>
            <p>Monster - Beast</p>
            <div className='row'>
              <span>Melee</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.beast.melee.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setBeastMeleeBonus({ str, hp: bonus.beast.melee.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.beast.melee.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setBeastMeleeBonus({ hp, str: bonus.beast.melee.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Ranged</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.beast.ranged.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setBeastRangedBonus({ str, hp: bonus.beast.ranged.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.beast.ranged.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setBeastRangedBonus({ hp, str: bonus.beast.ranged.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Mounted</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.beast.mounted.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setBeastMountedBonus({ str, hp: bonus.beast.mounted.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.beast.mounted.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setBeastMountedBonus({ hp, str: bonus.beast.mounted.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Flying</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.beast.flying.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setBeastFlyingBonus({ str, hp: bonus.beast.flying.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.beast.flying.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setBeastFlyingBonus({ hp, str: bonus.beast.flying.str })
                    }
                  }}
                  required
                />
              </div>
            </div>
          </div>

          <div className='monsters'>
            <p>Monster - Dragon</p>
            <div className='row'>
              <span>Melee</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.dragon.melee.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setDragonMeleeBonus({ str, hp: bonus.dragon.melee.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.dragon.melee.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setDragonMeleeBonus({ hp, str: bonus.dragon.melee.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Ranged</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.dragon.ranged.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setDragonRangedBonus({ str, hp: bonus.dragon.ranged.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.dragon.ranged.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setDragonRangedBonus({ hp, str: bonus.dragon.ranged.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Mounted</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.dragon.mounted.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setDragonMountedBonus({ str, hp: bonus.dragon.mounted.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.dragon.mounted.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setDragonMountedBonus({ hp, str: bonus.dragon.mounted.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Flying</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.dragon.flying.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setDragonFlyingBonus({ str, hp: bonus.dragon.flying.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.dragon.flying.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setDragonFlyingBonus({ hp, str: bonus.dragon.flying.str })
                    }
                  }}
                  required
                />
              </div>
            </div>
          </div>

          <div className='monsters'>
            <p>Monster - Giant</p>
            <div className='row'>
              <span>Melee</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.giant.melee.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setGiantMeleeBonus({ str, hp: bonus.giant.melee.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.giant.melee.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setGiantMeleeBonus({ hp, str: bonus.giant.melee.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Ranged</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.giant.ranged.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setGiantRangedBonus({ str, hp: bonus.giant.ranged.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.giant.ranged.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setGiantRangedBonus({ hp, str: bonus.giant.ranged.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Mounted</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.giant.mounted.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setGiantMountedBonus({ str, hp: bonus.giant.mounted.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.giant.mounted.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setGiantMountedBonus({ hp, str: bonus.giant.mounted.str })
                    }
                  }}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <span>Flying</span>
              <div className='field'>
                <label>str</label>
                <input
                  type='number'
                  value={bonus.giant.flying.str}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const str = parseFloat(e.target.value)
                      setGiantFlyingBonus({ str, hp: bonus.giant.flying.hp })
                    }
                  }}
                  required
                />
              </div>
              <div className='field'>
                <label>hp</label>
                <input
                  type='number'
                  value={bonus.giant.flying.hp}
                  onChange={e => {
                    if (e.target.value.trim() !== '') {
                      const hp = parseFloat(e.target.value)
                      setGiantFlyingBonus({ hp, str: bonus.giant.flying.str })
                    }
                  }}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dos
