import { useState, useEffect, Fragment } from 'react'

import './App.css'
import { Stack, useGuardsStore, useStackStore } from './guardStore'
import {
  SwordmanG1,
  SpearmanG1,
  ArcherG1,
  CatapultG1,
  RiderG1,
  RiderG2,
  RiderG3,
  RiderG5,
  RiderG4
} from './soldiers'
import classNames from 'classnames'
import {
  doomsdayNecromancer,
  doomsdaySupervisor,
  jacksReturnScarecrow,
  ragnarokMagoDraug
} from './monsters'

function Dos() {
  const leadership = useGuardsStore(state => state.leadership)
  const setLeadership = useGuardsStore(state => state.setLeadership)
  const mobHealth = useGuardsStore(state => state.mobHealth)
  const setMobHealth = useGuardsStore(state => state.setMobHealth)

  const army = useStackStore(state => state.army)
  const setArmy = useStackStore(state => state.setArmy)
  const addArmy = useStackStore(state => state.addArmy)
  const removeArmy = useStackStore(state => state.removeArmy)
  const bonus = useStackStore(state => state.bonus)
  const toggleLockMin = useStackStore(state => state.toggleLockMin)
  const addUnits = useStackStore(state => state.addUnits)
  const removeUnits = useStackStore(state => state.removeUnits)

  //-------------------

  const [selectedEvent, setSelectedEvent] = useState('0')

  useEffect(() => {
    let health = ragnarokMagoDraug.hp

    if (selectedEvent === '0') {
      health = ragnarokMagoDraug.hp
    } else if (selectedEvent === '1') {
      health = ragnarokMagoDraug.hp
    } else if (selectedEvent === '2') {
      // doomsday -> Necromancer 2160 hp
      health = doomsdayNecromancer.hp
    } else if (selectedEvent === '3') {
      health = doomsdaySupervisor.hp
    } else if (selectedEvent === '4') {
      // jacks return -> scarecrow (espantapajaro) 33k hp //11k str
      health = jacksReturnScarecrow.hp
    }

    setMobHealth(health)
  }, [selectedEvent])

  const changeMobHealth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mobHealth = parseInt(e.target.value)
    setMobHealth(mobHealth)

    // calc()
  }

  const changeMobEvent = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEvent(e.target.value)

    // calc()
  }

  const changeLeadership = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setLeadership(value)

    console.log('changing leadership', value)

    // calc()
  }

  const calcHP = () => {
    // if (!useG1Rider && !useG2Rider && !useG3Rider && !useG4Rider && !useG5Rider) {
    //   // algo debe estar marcado
    //   alert('pick riders')
    //   return
    // }

    // const sacrificesNeededToKillOneMob = Math.ceil(mobHealth / sacrifice.str)
    // const g1NeededToKillOneMob = Math.ceil(mobHealth / rider1.str)
    // const g2NeededToKillOneMob = Math.ceil(mobHealth / rider2.str)
    // const g3NeededToKillOneMob = Math.ceil(mobHealth / rider3.str)
    // const g4NeededToKillOneMob = Math.ceil(mobHealth / rider4.str)
    // const g5NeededToKillOneMob = Math.ceil(mobHealth / rider5.str)

    let finalSacrificeTroopsCount = 0
    let finalG1TroopsCount = 0
    let finalG2TroopsCount = 0
    let finalG3TroopsCount = 0
    let finalG4TroopsCount = 0
    let finalG5TroopsCount = 0

    /*
    el sacrificio debe tener mas "vida grupal" que todos, para que vaya primero
     el resto puede tener cualquier valor siempre y cuando sea menor
            */

    let maxLoop = 1000000 // should change it for a timer

    let sacrificeTroopsCount = 0
    let g1TroopsCount = 0
    let g2TroopsCount = 0
    let g3TroopsCount = 0
    let g4TroopsCount = 0
    let g5TroopsCount = 0
    /*
    let g1Leadership = g1TroopsCount * rider1.LEADERSHIP
    let g2Leadership = g2TroopsCount * rider2.LEADERSHIP
    let g3Leadership = g3TroopsCount * rider3.LEADERSHIP
    let g4Leadership = g4TroopsCount * rider4.LEADERSHIP
    let g5Leadership = g5TroopsCount * rider5.LEADERSHIP
    let sacrificeLeadership = sacrificeTroopsCount * sacrifice.LEADERSHIP

    let totalLeadership =
      g1Leadership + g2Leadership + g3Leadership + g4Leadership + g5Leadership + sacrificeLeadership
      */
    let totalLeadership = 0
    let lastLeadershipCalculated = 0 // to break the loop, if didnt changed (loop protection)
    /***********************************************
     *  basado en fuerza
     * ==========================
     * inicia con g5 troops,
     * las siguientes tropas incrementa el "doble" (o un numero mayor)
     * teniendo en cuenta el minimo de tropas para matar 1 mob
     * de esa forma tiene mas fuerza que el grupo anterior
     * el ultimo grupo que seria el sacrificio, tendra mas fuerza que todos
     */

    /**********************************************
     * basado en vitalidad
     * =======================
     * no interesa si tiene un grupo mas vida que otro
     * siempre y cuando no sobrepase el del sacrificio, todo OK
     * si prioritizo el G5, deberia tener mayor num de kills.. no?
     * ------------------------
     * inicio con el sacrificio, y luego de mayor a menor,,  g5,g4,g3,g2,g1
     * agregar 1 (o un grupo) sacrificio
     * calcular cuanto hp tiene grupalmente
     * calcular el num de g5 para matar 1 mob
     * si el leadership acumulado + el leadership de este grupo, sobrepasa al leadership disponible salir
     * si la vitalidad grupal del g5 no sobrepasa la vitalidad grupal del sacrificio
     * agregarlo a la cuenta del g5
     * -- repetir para g4,g3,g2,g1
     * si el total de leadership > al disponible salir
     */
  }

  const addTroops = (type: string) => {
    if (type === 'Rider G1') {
      const stack: Stack = {
        name: 'Rider G1',
        health: RiderG1.BASEHP + (RiderG1.BASEHP * bonus.riderG1.hp) / 100,
        strength: RiderG1.BASESTR + (RiderG1.BASESTR * bonus.riderG1.str) / 100,
        leadership: RiderG1.LEADERSHIP,
        units: 1,
        unitType: 'riderG1',
        minSetup: 1,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Rider G2') {
      const stack: Stack = {
        name: 'Rider G2',
        health: RiderG2.BASEHP + (RiderG2.BASEHP * bonus.riderG2.hp) / 100,
        strength: RiderG2.BASESTR + (RiderG2.BASESTR * bonus.riderG2.str) / 100,
        leadership: RiderG2.LEADERSHIP,
        units: 1,
        unitType: 'riderG2',
        minSetup: 3,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Rider G3') {
      const stack: Stack = {
        name: 'Rider G3',
        health: RiderG3.BASEHP + (RiderG3.BASEHP * bonus.riderG3.hp) / 100,
        strength: RiderG3.BASESTR + (RiderG3.BASESTR * bonus.riderG3.str) / 100,
        leadership: RiderG3.LEADERSHIP,
        units: 1,
        unitType: 'riderG3',
        minSetup: 1,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Rider G4') {
      const stack: Stack = {
        name: 'Rider G4',
        health: RiderG4.BASEHP + (RiderG4.BASEHP * bonus.riderG4.hp) / 100,
        strength: RiderG4.BASESTR + (RiderG4.BASESTR * bonus.riderG4.str) / 100,
        leadership: RiderG4.LEADERSHIP,
        units: 1,
        unitType: 'riderG4',
        minSetup: 1,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Rider G5') {
      const stack: Stack = {
        name: 'Rider G5',
        health: RiderG5.BASEHP + (RiderG5.BASEHP * bonus.riderG5.hp) / 100,
        strength: RiderG5.BASESTR + (RiderG5.BASESTR * bonus.riderG5.str) / 100,
        leadership: RiderG5.LEADERSHIP,
        units: 1,
        unitType: 'riderG5',
        minSetup: 1,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    }
  }

  //calc()

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
        <div className='army-container'>
          <h2>Army</h2>
          <div className='army-list'>
            <div
              className='troop'
              onClick={() => {
                addTroops('Spearman G1')
              }}
            >
              Spearman G1
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Archer G1')
              }}
            >
              Archer G1
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Rider G1')
              }}
            >
              Rider G1
            </div>
            <hr />
            <div
              className='troop'
              onClick={() => {
                addTroops('Spearman G2')
              }}
            >
              Spearman G2
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Archer G2')
              }}
            >
              Archer G2
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Rider G2')
              }}
            >
              Rider G2
            </div>
            <hr />
            <div
              className='troop'
              onClick={() => {
                addTroops('Spearman G3')
              }}
            >
              Spearman G3
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Archer G3')
              }}
            >
              Archer G3
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Rider G3')
              }}
            >
              Rider G3
            </div>
            <hr />
            <div
              className='troop'
              onClick={() => {
                addTroops('Spearman G4')
              }}
            >
              Spearman G4
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Archer G4')
              }}
            >
              Archer G4
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Rider G4')
              }}
            >
              Rider G4
            </div>
            <hr />
            <div
              className='troop'
              onClick={() => {
                addTroops('Spearman G5')
              }}
            >
              Spearman G5
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Archer G5')
              }}
            >
              Archer G5
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Rider G5')
              }}
            >
              Rider G5
            </div>
            <hr />
            <div
              className='troop'
              onClick={() => {
                addTroops('Swordman S1')
              }}
            >
              Swordman S1
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Spy S1')
              }}
            >
              Spy S1
            </div>
            <hr />
            <div
              className='troop'
              onClick={() => {
                addTroops('Swordman S2')
              }}
            >
              Swordman S2
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Spy S2')
              }}
            >
              Spy S2
            </div>
            <hr />
            <div
              className='troop'
              onClick={() => {
                addTroops('Catapult E1')
              }}
            >
              Catapult E1
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Catapult E2')
              }}
            >
              Catapult E2
            </div>
            <hr />
            <div
              className='troop'
              onClick={() => {
                addTroops('Water Elemental')
              }}
            >
              Water Elemental M3
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Battle Boar')
              }}
            >
              Battle Boar M3
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Emerald Dragon')
              }}
            >
              Emerald Dragon M3
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Stone Gargole')
              }}
            >
              Stone Gargole M3
            </div>
            <hr />
            <div
              className='troop'
              onClick={() => {
                addTroops('Epic Monster')
              }}
            >
              Epic Monster Hunter VI
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Chariot VI')
              }}
            >
              Chariot VI
            </div>
            <div
              className='troop'
              onClick={() => {
                addTroops('Legionary VI')
              }}
            >
              Legionary VI
            </div>
          </div>
        </div>

        <div className='stack-container'>
          <h2>Stacks</h2>
          <div className='stack-list'>
            {army.map(stack => {
              return (
                <div className='stack-card'>
                  <p className='stack-units'>{stack.units}</p>
                  <p className='stack-name'>{stack.name}</p>
                  <p className='stack-health'>HP {stack.health}</p>
                  <p className='stack-strength'>STR {stack.strength}</p>
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

        <div className='config-container'>s</div>
      </div>
    </Fragment>
  )
}

export default Dos
