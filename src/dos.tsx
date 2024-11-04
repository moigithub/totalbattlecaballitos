import { useState, useEffect, Fragment } from 'react'

import './App.css'
import {
  getHPWithBonus,
  GuardsmanLevel,
  TroopType,
  Unit,
  useGuardsStore,
  useStackStore
} from './guardStore'

// import classNames from 'classnames'
import {
  ancientArmy,
  arachneArmy,
  doomsdayArmy,
  draugMage,
  MonsterUnit,
  ragnarokArmy,
  shadowCastleArmy,
  whoCanIAttack
} from './monsters'
import { ArmyList } from './ArmyList'
import { Card } from './Card'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'

function Dos() {
  // const mobHealth = useGuardsStore(state => state.mobHealth)
  // const setMobHealth = useGuardsStore(state => state.setMobHealth)
  // const addArmy = useStackStore(state => state.addArmy)
  // const removeStack = useStackStore(state => state.removeStack)
  // const resetStack = useStackStore(state => state.resetStack)
  // const toggleLockMin = useStackStore(state => state.toggleLockMin)
  // const removeUnits = useStackStore(state => state.removeUnits)
  // const getStackStrength = useStackStore(state => state.getStackStrength)
  // const getStackLeadership = useStackStore(state => state.getStackLeadership)
  const leadership = useGuardsStore(state => state.leadership)
  const setLeadership = useGuardsStore(state => state.setLeadership)
  const army = useStackStore(state => state.army)
  const setArmy = useStackStore(state => state.setArmy)
  const resetAllStacks = useStackStore(state => state.resetAllStacks)
  const bonus = useStackStore(state => state.bonus)
  const addUnits = useStackStore(state => state.addUnits)
  const getStackHealth = useStackStore(state => state.getStackHealth)
  const getArmyLeadership = useStackStore(state => state.getArmyLeadership)
  const updateMinSetup = useStackStore(state => state.updateMinSetup)

  const mobArmy = useStackStore(state => state.mobArmy)
  const setMobArmy = useStackStore(state => state.setMobArmy)
  //-------------------

  const [selectedEvent, setSelectedEvent] = useState('0')

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
    const value = parseInt(e.target.value)
    setLeadership(value)

    console.log('changing leadership', value)
  }

  const getMobTarget = (iam: TroopType) => {
    //getMobTarget, usa getMonsterStack, y escoje un monster
    /**
     * mounted vs ranged
     * mounted vs siege
     *
     * ranged vs flying
     * ranged vs melee
     *
     * melee vs elementals
     * melee vs ranged
     * melee vs dragons
     * melee vs beasts
     * melee vs humans
     * melee vs mounted
     *
     * flying vs elementals
     * flying vs mounted
     * flying vs giants
     *
     * beast vs mounted
     * beast vs ranged
     *
     * siege vs fortifications
     */
    if (iam === 'rider') {
      /** */
      return draugMage
    }
    //  else if (iam === 'archer') {
    //   // vs melee, loquequeda
    //   return {
    //     health: 2160,
    //     strength: 720,
    //     leadership: 8,
    //     initiative: 10,
    //     bonoFlyPercent: 50,
    //     unitType: 'melee'
    //   }
    // } else if (iam === 'spearman') {
    //   /** */
    //   return {
    //     health: 2160,
    //     strength: 720,
    //     leadership: 8,
    //     initiative: 10,
    //     bonoFlyPercent: 50,
    //     unitType: 'mounted'
    //   }
    // } else if (iam === 'flying') {
    //   // vs mounted, melee
    //   return {
    //     health: 2160,
    //     strength: 720,
    //     leadership: 8,
    //     initiative: 10,
    //     bonoFlyPercent: 50,
    //     unitType: 'mounted'
    //   }
    // }

    return draugMage //doomsdayFireswordRider // retornar el que tiene mas hp ?
  }

  // const getMonsterStack = () => {
  //   if (selectedEvent === '0') {
  //     //doomsday
  //     // return ragnarokStacks
  //     return [doomsdayOverseer, doomsdayIfrit, doomsdayFireswordRider, doomsdayHellBlacksmith]
  //   }
  // }

  const calculateUnitsMobKill = (monster: MonsterUnit, unit: Unit): number => {
    const monsterHealth = monster.BASEHP
    let soldierStrength = unit.BASESTR

    // mounted vs ranged

    if (unit.category === 'mounted' && monster.category === 'ranged') {
      //  unit.troop=='rider'
      const level = unit.level

      // incluir el bono de los heroes/capitanes/equipo/clan/buff/vip
      // const otherBonus = bonus.rider.G1.str ?? 0
      const otherBonus = bonus.rider[level as GuardsmanLevel].str ?? 0

      const strBonus = ((otherBonus + unit.vsRangedPercent) * soldierStrength) / 100
      soldierStrength = soldierStrength + strBonus
    }
    // retorna el num de soldados minimo que se necesita para matar un monstruo
    return Math.ceil(monsterHealth / soldierStrength)
  }

  const calcHP = () => {
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
    let lastLeadershipCalculated = 0 // to break the loop, if didnt changed (loop protection)
    while (totalLeadership < leadership) {
      // 1. check leadership acumulado del army
      // totalLeadership = getArmyLeadership()
      // if (totalLeadership >= leadership) {
      //   break
      // }

      // 2. agregar 1 unit al sacrificio
      addUnits(army[0].id)
      // 3. calcular hp del sacrificio
      const sacrificeGroupHealth = getStackHealth(army[0].id)
      console.log('sacrifice healt', sacrificeGroupHealth)

      for (let i = 1; i < army.length; i++) {
        const stack = army[i]

        // 4. calcular cuantos unit necesita pa matar 1 mob
        const monster = getMobTarget(stack.unit.troop)
        console.log('monster target', monster)

        const unitsNeededToKill1Mob = calculateUnitsMobKill(monster, stack.unit)
        updateMinSetup(stack.id!, unitsNeededToKill1Mob)
        console.log('min units mob kill', stack.unit.name, unitsNeededToKill1Mob)

        // 5. check leadership acumulado del army
        totalLeadership = getArmyLeadership()

        // 6. check leadership del nuevo grupo
        const unitsCount = stack.lockMinSetup ? unitsNeededToKill1Mob : 1
        const newStackLeadership = stack.unit.LEADERSHIP * unitsCount

        // 7 check leadership acumulado + leadership nuevo sea menor que el disponible
        if (totalLeadership + newStackLeadership <= leadership) {
          // 8. check HP acumulado + hp nuevo sea menor que el del sacrificio
          const stackHealth = getStackHealth(stack.id!)
          const totalHPPerUnit = getHPWithBonus(stack.unit, bonus)
          const newStackHealth = totalHPPerUnit * unitsCount

          console.log(
            'stackhp+newHP',
            stack.id,
            ' // ',
            stackHealth,
            newStackHealth,
            '=',
            stackHealth + newStackHealth,
            '<',
            sacrificeGroupHealth
          )

          if (stackHealth + newStackHealth < sacrificeGroupHealth) {
            // 9. agregar al stack
            console.log('agregando units en ', stack.id)
            addUnits(stack.id!)
          }
        }
      }

      totalLeadership = getArmyLeadership()

      if (totalLeadership > leadership) break
      if (lastLeadershipCalculated === totalLeadership) {
        console.log('no changes to leadership, ending')
        break
      }
      lastLeadershipCalculated = totalLeadership

      console.log('loop protection', maxLoop)
      if (maxLoop-- < 1) break
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
    <Fragment>
      <h1>Troops calculation - totalbattle</h1>
      <h6>Riders vs ranged</h6>
      <div className='event'>
        <div className='group'>
          <label>Event </label>
          <select value={selectedEvent} onChange={changeMobEvent}>
            <option value='0'>Ragnarok/jörmungandr-fenrir/Doug Mage</option>
            <option value='1'>Ancient/Tinman/Arbalest</option>
            <option value='2'>Doomsday/Necromancer</option>
            <option value='3'>Shadow castle</option>
            <option value='4'>Arachne</option>
            {/* <option value='54'>JacksReturn/Scarecrow</option> */}
          </select>
        </div>
      </div>
      <div className='container'>
        <div className='configbar'>
          <div className='card'>
            <label>Leadership </label>
            <input type='number' value={leadership} onChange={changeLeadership} required />
          </div>
        </div>

        <button className='gobtn' onClick={calcHP}>
          CALCULATE (hp)
        </button>
      </div>

      {/* ---------------------- */}

      <div className='main-container'>
        <ArmyList />

        <div className='stack-container'>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px' }}>
            <h2>Stacks</h2> <p>Army leadership {getArmyLeadership()}</p>
          </div>
          <div className='stack-list'>
            <DndContext onDragEnd={handleDrag}>
              <SortableContext items={army}>
                {army.map(stack => {
                  return <Card stack={stack} key={stack.id} />
                })}
              </SortableContext>
            </DndContext>
          </div>
        </div>

        <div className='config-container'>
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
      </div>
    </Fragment>
  )
}

export default Dos
