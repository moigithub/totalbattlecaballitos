import { useState, useEffect, Fragment } from 'react'

import './App.css'
import {
  getHPWithBonus,
  GuardsmanLevel,
  // GuardsmanStats,
  // Level,
  // Stack,
  TroopType,
  Unit,
  // UnitType,
  useGuardsStore,
  useStackStore
} from './guardStore'
// import {
//   SwordmanG1,
//   SpearmanG1,
//   ArcherG1,
//   CatapultG1,
//   RiderG1,
//   RiderG2,
//   RiderG3,
//   RiderG5,
//   RiderG4
// } from './soldiers'
// import classNames from 'classnames'
import {
  doomsdayFireswordRider,
  // doomsdayHellBlacksmith,
  // doomsdayIfrit,
  doomsdayNecromancer,
  doomsdayOverseer,
  jacksReturnScarecrow,
  Monster,
  ragnarokMagoDraug
} from './monsters'
import { ArmyList } from './ArmyList'

function Dos() {
  const leadership = useGuardsStore(state => state.leadership)
  const setLeadership = useGuardsStore(state => state.setLeadership)
  const mobHealth = useGuardsStore(state => state.mobHealth)
  const setMobHealth = useGuardsStore(state => state.setMobHealth)

  const army = useStackStore(state => state.army)
  // const setArmy = useStackStore(state => state.setArmy)
  // const addArmy = useStackStore(state => state.addArmy)
  // const removeArmy = useStackStore(state => state.removeArmy)
  const bonus = useStackStore(state => state.bonus)
  const toggleLockMin = useStackStore(state => state.toggleLockMin)
  const addUnits = useStackStore(state => state.addUnits)
  const removeUnits = useStackStore(state => state.removeUnits)
  const getStackHealth = useStackStore(state => state.getStackHealth)
  const getStackStrength = useStackStore(state => state.getStackStrength)

  const getArmyLeadership = useStackStore(state => state.getArmyLeadership)
  // const getStackLeadership = useStackStore(state => state.getStackLeadership)
  const updateMinSetup = useStackStore(state => state.updateMinSetup)
  //-------------------

  const [selectedEvent, setSelectedEvent] = useState('0')

  useEffect(() => {
    let health = ragnarokMagoDraug.BASEHP

    if (selectedEvent === '0') {
      health = ragnarokMagoDraug.BASEHP
    } else if (selectedEvent === '1') {
      health = ragnarokMagoDraug.BASEHP
    } else if (selectedEvent === '2') {
      // doomsday -> Necromancer 2160 health
      health = doomsdayNecromancer.BASEHP
    } else if (selectedEvent === '3') {
      health = doomsdayOverseer.BASEHP
    } else if (selectedEvent === '4') {
      // jacks return -> scarecrow (espantapajaro) 33k health //11k str
      health = jacksReturnScarecrow.BASEHP
    }

    setMobHealth(health)
  }, [selectedEvent])

  const changeMobHealth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mobHealth = parseInt(e.target.value)
    setMobHealth(mobHealth)
  }

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
      return doomsdayOverseer
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

    return doomsdayFireswordRider // retornar el que tiene mas hp ?
  }

  // const getMonsterStack = () => {
  //   if (selectedEvent === '0') {
  //     //doomsday
  //     // return ragnarokStacks
  //     return [doomsdayOverseer, doomsdayIfrit, doomsdayFireswordRider, doomsdayHellBlacksmith]
  //   }
  // }

  const calculateUnitsMobKill = (monster: Monster, unit: Unit): number => {
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

    // minSetup === how many units on the stack should be used to kill one monster
    // calculate the minSetup for each stack

    // hay un selector de monstruos/evento que tiene un stack (varios tipos de) mounstruos, un array de objetos
    // el getmobtarget, deberia iterar el array y devolver el tipo de mostruo
    // de acuerdo al tipo de soldado que tengo.. ejm. mount vs ranged
    // y si no hay, deberia retornar el que tiene mayor hp ??
    // 4. check leadership acumulado del army
    let totalLeadership = getArmyLeadership()
    if (totalLeadership >= leadership) {
      return
    }

    // 1. agregar 1 unit al sacrificio
    addUnits(0)
    // 2. calcular hp del sacrificio
    const sacrificeGroupHealth = getStackHealth(0)
    console.log('sacrifice healt', sacrificeGroupHealth)

    for (let i = 1; i < army.length; i++) {
      const stack = army[i]

      // 3. calcular cuantos unit necesita pa matar 1 mob
      const monster = getMobTarget(stack.unit.troop)
      console.log('monster target', monster)

      const unitsNeededToKill1Mob = calculateUnitsMobKill(monster, stack.unit)
      updateMinSetup(stack.position!, unitsNeededToKill1Mob)
      console.log('min units mob kill', stack.unit.name, unitsNeededToKill1Mob)

      // 4. check leadership acumulado del army
      totalLeadership = getArmyLeadership()

      //5. check leadership del nuevo grupo
      const unitsCount = stack.lockMinSetup ? unitsNeededToKill1Mob : 1
      const newStackLeadership = stack.unit.LEADERSHIP * unitsCount

      // 5.1 check leadership acumulado + leadership nuevo sea menor que el disponible
      if (totalLeadership + newStackLeadership <= leadership) {
        // 6. check HP acumulado + hp nuevo sea menor que el del sacrificio
        const stackHealth = getStackHealth(stack.position!)
        const totalHPPerUnit = getHPWithBonus(stack.unit, bonus)
        const newStackHealth = totalHPPerUnit * unitsCount

        console.log(
          'stackhp+newHP',
          stack.position,
          ' // ',
          stackHealth,
          newStackHealth,
          '=',
          stackHealth + newStackHealth,
          '<',
          sacrificeGroupHealth
        )

        if (stackHealth + newStackHealth < sacrificeGroupHealth) {
          // 7. agregar al stack
          console.log('agregando units en ', stack.position)
          addUnits(stack.position!)
        }
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
            <option value='4'>JacksReturn/Scarecrow</option>
            <option value='3'>6500,19500/Supervisor</option>
          </select>
        </div>
        <div className='group'>
          <span>Health per unit: </span>{' '}
          <input type='number' value={mobHealth} onChange={changeMobHealth} required />
          <span className='small'>&lt;-- Change this value if you need a custom calculation</span>
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
            {army.map((stack, i) => {
              return (
                <div className='stack-card' key={i}>
                  <p className='stack-units'>{stack.units}</p>
                  <p className='stack-name'>{stack.unit.name}</p>
                  <p className='stack-health'>HP {getStackHealth(stack.position!)}</p>
                  <p className='stack-strength'>
                    STR {getStackStrength(stack.position!, ragnarokMagoDraug.category)}
                  </p>
                  <p className='stack-leadership'>Lead {stack.leadership}</p>
                  <p className='stack-minSetup'>Min {stack.minSetup}</p>
                  <p className='stack-limit'>Limit {stack.limit}</p>
                  <div className='stack-action'>
                    <button
                      className='action-btn'
                      onClick={() => {
                        addUnits(stack.position!)
                      }}
                    >
                      +
                    </button>
                    <button
                      className='action-btn'
                      onClick={() => {
                        removeUnits(stack.position!)
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div className='stack-config'>
                    <label>lock Min</label>

                    <input
                      type='checkbox'
                      checked={stack.lockMinSetup}
                      onChange={() => {
                        toggleLockMin(stack.position!)
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className='config-container'>skkkkkkkkkkkk</div>
      </div>
    </Fragment>
  )
}

export default Dos
