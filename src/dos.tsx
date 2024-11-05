import { useState, useEffect, Fragment } from 'react'

import './App.css'
import {
  getHPWithBonus,
  GuardsmanLevel,
  MercUnit,
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
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { Link } from 'react-router-dom'

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

  const authority = useGuardsStore(state => state.authority)
  const setAuthority = useGuardsStore(state => state.setAuthority)

  const dominance = useGuardsStore(state => state.dominance)
  const setDominance = useGuardsStore(state => state.setDominance)

  const army = useStackStore(state => state.army)
  const setArmy = useStackStore(state => state.setArmy)
  const resetAllStacks = useStackStore(state => state.resetAllStacks)
  const bonus = useStackStore(state => state.bonus)
  const addUnits = useStackStore(state => state.addUnits)
  const getStackHealth = useStackStore(state => state.getStackHealth)
  const getArmyLeadership = useStackStore(state => state.getArmyLeadership)
  const getArmyAuthority = useStackStore(state => state.getArmyAuthority)
  const getArmyDominance = useStackStore(state => state.getArmyDominance)
  const updateMinSetup = useStackStore(state => state.updateMinSetup)

  const mobArmy = useStackStore(state => state.mobArmy)
  const setMobArmy = useStackStore(state => state.setMobArmy)

  const setSpearmanG1Bonus = useStackStore(state => state.setSpearmanG1Bonus)
  const setSpearmanG2Bonus = useStackStore(state => state.setSpearmanG2Bonus)
  const setSpearmanG3Bonus = useStackStore(state => state.setSpearmanG3Bonus)
  const setSpearmanG4Bonus = useStackStore(state => state.setSpearmanG4Bonus)
  const setSpearmanG5Bonus = useStackStore(state => state.setSpearmanG5Bonus)

  const setArcherG1Bonus = useStackStore(state => state.setArcherG1Bonus)
  const setArcherG2Bonus = useStackStore(state => state.setArcherG2Bonus)
  const setArcherG3Bonus = useStackStore(state => state.setArcherG3Bonus)
  const setArcherG4Bonus = useStackStore(state => state.setArcherG4Bonus)
  const setArcherG5Bonus = useStackStore(state => state.setArcherG5Bonus)

  const setRiderG1Bonus = useStackStore(state => state.setRiderG1Bonus)
  const setRiderG2Bonus = useStackStore(state => state.setRiderG2Bonus)
  const setRiderG3Bonus = useStackStore(state => state.setRiderG3Bonus)
  const setRiderG4Bonus = useStackStore(state => state.setRiderG4Bonus)
  const setRiderG5Bonus = useStackStore(state => state.setRiderG5Bonus)

  const setSwordsmanS1Bonus = useStackStore(state => state.setSwordsmanS1Bonus)
  const setSwordsmanS2Bonus = useStackStore(state => state.setSwordsmanS2Bonus)
  const setSwordsmanS3Bonus = useStackStore(state => state.setSwordsmanS3Bonus)
  const setSwordsmanS4Bonus = useStackStore(state => state.setSwordsmanS4Bonus)
  const setSwordsmanS5Bonus = useStackStore(state => state.setSwordsmanS5Bonus)

  const setSpyS1Bonus = useStackStore(state => state.setSpyS1Bonus)
  const setSpyS2Bonus = useStackStore(state => state.setSpyS2Bonus)
  const setSpyS3Bonus = useStackStore(state => state.setSpyS3Bonus)
  const setSpyS4Bonus = useStackStore(state => state.setSpyS4Bonus)
  const setSpyS5Bonus = useStackStore(state => state.setSpyS5Bonus)

  const setCatapultE1Bonus = useStackStore(state => state.setCatapultE1Bonus)
  const setCatapultE2Bonus = useStackStore(state => state.setCatapultE2Bonus)
  const setCatapultE3Bonus = useStackStore(state => state.setCatapultE3Bonus)
  const setCatapultE4Bonus = useStackStore(state => state.setCatapultE4Bonus)
  const setCatapultE5Bonus = useStackStore(state => state.setCatapultE5Bonus)
  //-------------------

  const [selectedEvent, setSelectedEvent] = useState('0')
  const [addUnitMode, setAddUnitMode] = useState('sacrificeHealthLimit')
  const [windowMode, setWindowMode] = useState('showTargetMonsterInfo')

  // const sensors = useSensor(PointerSensor, {
  //   activationConstraint: {
  //     delay: 100,
  //     tolerance: 5,
  //   },
  // });
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: { delay: 250, tolerance: 5, distance: 8 }
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
        distance: 8
      }
    }),
    useSensor(KeyboardSensor, {
      // Disable smooth scrolling in Cypress automated tests
      scrollBehavior: 'Cypress' in window ? 'auto' : undefined,
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

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
  const changeAuthority = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setAuthority(value)

    console.log('changing authority', value)
  }
  const changeDominance = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setDominance(value)

    console.log('changing dominance', value)
  }

  const getMobTarget = (iam: TroopType | string) => {
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

  const calculateUnitsMobKill = (
    monster: MonsterUnit,
    unit: Unit | MercUnit | MonsterUnit
  ): number => {
    const monsterHealth = monster.BASEHP
    let soldierStrength = unit.BASESTR
    // TODO: add more combinations
    // mounted vs ranged

    if (unit.category === 'mounted' && monster.category === 'ranged') {
      //  unit.troop=='rider'
      const level = unit.level

      // incluir el bono de los heroes/capitanes/equipo/clan/buff/vip
      // const otherBonus = bonus.rider.G1.str ?? 0
      const otherBonus = bonus.rider[level as GuardsmanLevel]?.str ?? 0

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
      if (totalLeadership < leadership) {
        addUnits(army[0].id)
      } else {
        // break
      }
      // 3. calcular hp del sacrificio
      const sacrificeGroupHealth = getStackHealth(army[0].id)
      console.log('sacrifice healt', sacrificeGroupHealth)

      for (let i = 1; i < army.length; i++) {
        const stack = army[i]

        // 4. calcular cuantos unit necesita pa matar 1 mob
        const monster = getMobTarget(stack.unit.troop)
        console.log('monster target', monster)

        // TODO: move calc minsetup when add the soldier (left panel)
        const unitsNeededToKill1Mob = calculateUnitsMobKill(monster, stack.unit)
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
            const stackHealth = getStackHealth(stack.id!)
            const totalHPPerUnit = getHPWithBonus(stack.unit, bonus)
            const newStackHealth = totalHPPerUnit * unitsCount

            if (addUnitMode === 'sacrificeHealthLimit') {
              if (stackHealth + newStackHealth < sacrificeGroupHealth) {
                // 9. agregar al stack
                console.log('leadership: agregando units en ', stack.id)
                addUnits(stack.id!)
              }
            }
            if (addUnitMode === 'previousStackHealthLimit') {
              const previousGroupHealth = getStackHealth(army[i - 1].id)

              if (stackHealth + newStackHealth < previousGroupHealth) {
                // 9. agregar al stack
                console.log('leadership: agregando units en ', stack.id)
                addUnits(stack.id!)
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
            // 8. check HP acumulado + hp nuevo sea menor que el del sacrificio
            const stackHealth = getStackHealth(stack.id!)
            const totalHPPerUnit = getHPWithBonus(stack.unit, bonus)
            const newStackHealth = totalHPPerUnit * unitsCount

            if (addUnitMode === 'sacrificeHealthLimit') {
              if (stackHealth + newStackHealth < sacrificeGroupHealth) {
                // 9. agregar al stack
                console.log('authority: agregando units en ', stack.id)
                addUnits(stack.id!)
              }
            }
            if (addUnitMode === 'previousStackHealthLimit') {
              const previousGroupHealth = getStackHealth(army[i - 1].id)

              if (stackHealth + newStackHealth < previousGroupHealth) {
                // 9. agregar al stack
                console.log('authority: agregando units en ', stack.id)
                addUnits(stack.id!)
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
            const stackHealth = getStackHealth(stack.id!)
            const totalHPPerUnit = getHPWithBonus(stack.unit, bonus)
            const newStackHealth = totalHPPerUnit * unitsCount

            if (addUnitMode === 'sacrificeHealthLimit') {
              if (stackHealth + newStackHealth < sacrificeGroupHealth) {
                // 9. agregar al stack
                console.log('dominance: agregando units en ', stack.id)
                addUnits(stack.id!)
              }
            }
            if (addUnitMode === 'previousStackHealthLimit') {
              const previousGroupHealth = getStackHealth(army[i - 1].id)

              if (stackHealth + newStackHealth < previousGroupHealth) {
                // 9. agregar al stack
                console.log('dominance: agregando units en ', stack.id)
                addUnits(stack.id!)
              }
            }
          }
        }
      }

      totalLeadership = getArmyLeadership()
      totalAuthority = getArmyAuthority()
      totalDominance = getArmyDominance()

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
    <Fragment>
      <div className='config-container'>
        <div className='event'>
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
            <label>Sacrifice health limit</label>
            <input
              type='radio'
              value='sacrificeHealthLimit'
              name='healthLimit'
              checked={addUnitMode === 'sacrificeHealthLimit'}
              onChange={() => {
                setAddUnitMode('sacrificeHealthLimit')
              }}
            />
          </div>
          <div>
            <label>Previous stack health limit</label>
            <input
              type='radio'
              value='previousStackHealthLimit'
              name='healthLimit'
              checked={addUnitMode === 'previousStackHealthLimit'}
              onChange={() => {
                setAddUnitMode('previousStackHealthLimit')
              }}
            />
          </div>
        </div>

        <button className='gobtn' onClick={calcHP}>
          CALCULATE (hp)
        </button>

        <div>
          <p>TO-DO:</p>
          <ul>
            <li>fix min setup value</li>
            <li>add bonus config inputs</li>
          </ul>
        </div>
      </div>

      {/* ---------------------- */}

      <div className='main-container'>
        <ArmyList />

        <div className='stack-container'>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px' }}>
            <h2>Stacks</h2> <p>leadership {getArmyLeadership()}</p>
            <p>authority {getArmyAuthority()}</p>
            <p>dominance {getArmyDominance()}</p>
          </div>
          <div style={{ color: 'pink', fontSize: 13 }}>
            drag (hold for 1 second) and drop the card/stacks to arrange it
          </div>
          <div className='stack-list'>
            <DndContext onDragEnd={handleDrag} sensors={sensors}>
              <SortableContext items={army}>
                {army.map(stack => {
                  return <Card stack={stack} key={stack.id} />
                })}
              </SortableContext>
            </DndContext>
          </div>
        </div>

        <div className='mob-container'>
          <div className='configbar'>
            <div>
              <label>Show Target monster info</label>
              <input
                type='radio'
                value='showTargetMonsterInfo'
                name='extra'
                checked={windowMode === 'showTargetMonsterInfo'}
                onChange={() => {
                  setWindowMode('showTargetMonsterInfo')
                }}
              />
            </div>
            <div>
              <label>Show bonus config</label>
              <input
                type='radio'
                value='showBonusConfig'
                name='extra'
                checked={windowMode === 'showBonusConfig'}
                onChange={() => {
                  setWindowMode('showBonusConfig')
                }}
              />
            </div>
          </div>
          {windowMode === 'showTargetMonsterInfo' && (
            <div>
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
              <div className='guardsmen'>
                <div className='row'>
                  <div className='field'>
                    <label>Spearman G1 str</label>
                    <input
                      type='number'
                      value={bonus.spearman.G1.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setSpearmanG1Bonus({ str, hp: bonus.spearman.G1.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.spearman.G1.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setSpearmanG1Bonus({ hp, str: bonus.spearman.G1.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>Spearman G2 str</label>
                    <input
                      type='number'
                      value={bonus.spearman.G2.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setSpearmanG2Bonus({ str, hp: bonus.spearman.G2.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.spearman.G2.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setSpearmanG2Bonus({ hp, str: bonus.spearman.G2.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>Spearman G3 str</label>
                    <input
                      type='number'
                      value={bonus.spearman.G3.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setSpearmanG3Bonus({ str, hp: bonus.spearman.G3.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.spearman.G3.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setSpearmanG3Bonus({ hp, str: bonus.spearman.G3.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>Spearman G4 str</label>
                    <input
                      type='number'
                      value={bonus.spearman.G4.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setSpearmanG4Bonus({ str, hp: bonus.spearman.G4.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.spearman.G4.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setSpearmanG4Bonus({ hp, str: bonus.spearman.G4.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>Spearman G5 str</label>
                    <input
                      type='number'
                      value={bonus.spearman.G5.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setSpearmanG5Bonus({ str, hp: bonus.spearman.G5.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.spearman.G5.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setSpearmanG5Bonus({ hp, str: bonus.spearman.G5.str })
                      }}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='guardsmen'>
                <div className='row'>
                  <div className='field'>
                    <label>Archer G1 str</label>
                    <input
                      type='number'
                      value={bonus.archer.G1.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setArcherG1Bonus({ str, hp: bonus.archer.G1.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.archer.G1.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setArcherG1Bonus({ hp, str: bonus.archer.G1.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>Archer G2 str</label>
                    <input
                      type='number'
                      value={bonus.archer.G2.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setArcherG2Bonus({ str, hp: bonus.archer.G2.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.archer.G2.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setArcherG2Bonus({ hp, str: bonus.archer.G2.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>Archer G3 str</label>
                    <input
                      type='number'
                      value={bonus.archer.G3.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setArcherG3Bonus({ str, hp: bonus.archer.G3.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.archer.G3.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setArcherG3Bonus({ hp, str: bonus.archer.G3.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>Archer G4 str</label>
                    <input
                      type='number'
                      value={bonus.archer.G4.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setArcherG4Bonus({ str, hp: bonus.archer.G4.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.archer.G4.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setArcherG4Bonus({ hp, str: bonus.archer.G4.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>Archer G5 str</label>
                    <input
                      type='number'
                      value={bonus.archer.G5.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setArcherG5Bonus({ str, hp: bonus.archer.G5.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.archer.G5.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setArcherG5Bonus({ hp, str: bonus.archer.G5.str })
                      }}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='guardsmen'>
                <div className='row'>
                  <div className='field'>
                    <label>rider G1 str</label>
                    <input
                      type='number'
                      value={bonus.rider.G1.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setRiderG1Bonus({ str, hp: bonus.rider.G1.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.rider.G1.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setRiderG1Bonus({ hp, str: bonus.rider.G1.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>rider G2 str</label>
                    <input
                      type='number'
                      value={bonus.rider.G2.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setRiderG2Bonus({ str, hp: bonus.rider.G2.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.rider.G2.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setRiderG2Bonus({ hp, str: bonus.rider.G2.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>rider G3 str</label>
                    <input
                      type='number'
                      value={bonus.rider.G3.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setRiderG3Bonus({ str, hp: bonus.rider.G3.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.rider.G3.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setRiderG3Bonus({ hp, str: bonus.rider.G3.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>rider G4 str</label>
                    <input
                      type='number'
                      value={bonus.rider.G4.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setRiderG4Bonus({ str, hp: bonus.rider.G4.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.rider.G4.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setRiderG4Bonus({ hp, str: bonus.rider.G4.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>rider G5 str</label>
                    <input
                      type='number'
                      value={bonus.rider.G5.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setRiderG5Bonus({ str, hp: bonus.rider.G5.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.rider.G5.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setRiderG5Bonus({ hp, str: bonus.rider.G5.str })
                      }}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='specialists'>
                <div className='row'>
                  <div className='field'>
                    <label>swordsman S1 str</label>
                    <input
                      type='number'
                      value={bonus.swordsman.S1.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setSwordsmanS1Bonus({ str, hp: bonus.swordsman.S1.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.swordsman.S1.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setSwordsmanS1Bonus({ hp, str: bonus.swordsman.S1.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>swordsman S2 str</label>
                    <input
                      type='number'
                      value={bonus.swordsman.S2.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setSwordsmanS2Bonus({ str, hp: bonus.swordsman.S2.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.swordsman.S2.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setSwordsmanS2Bonus({ hp, str: bonus.swordsman.S2.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>swordsman S3 str</label>
                    <input
                      type='number'
                      value={bonus.swordsman.S3.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setSwordsmanS3Bonus({ str, hp: bonus.swordsman.S3.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.swordsman.S3.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setSwordsmanS3Bonus({ hp, str: bonus.swordsman.S3.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>swordsman S4 str</label>
                    <input
                      type='number'
                      value={bonus.swordsman.S4.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setSwordsmanS4Bonus({ str, hp: bonus.swordsman.S4.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.swordsman.S4.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setSwordsmanS4Bonus({ hp, str: bonus.swordsman.S4.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>swordsman S5 str</label>
                    <input
                      type='number'
                      value={bonus.swordsman.S5.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setSwordsmanS5Bonus({ str, hp: bonus.swordsman.S5.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.swordsman.S5.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setSwordsmanS5Bonus({ hp, str: bonus.swordsman.S5.str })
                      }}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='specialists'>
                <div className='row'>
                  <div className='field'>
                    <label>spy S1 str</label>
                    <input
                      type='number'
                      value={bonus.spy.S1.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setSpyS1Bonus({ str, hp: bonus.spy.S1.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.spy.S1.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setSpyS1Bonus({ hp, str: bonus.spy.S1.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>spy S2 str</label>
                    <input
                      type='number'
                      value={bonus.spy.S2.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setSpyS2Bonus({ str, hp: bonus.spy.S2.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.spy.S2.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setSpyS2Bonus({ hp, str: bonus.spy.S2.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>spy S3 str</label>
                    <input
                      type='number'
                      value={bonus.spy.S3.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setSpyS3Bonus({ str, hp: bonus.spy.S3.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.spy.S3.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setSpyS3Bonus({ hp, str: bonus.spy.S3.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>spy S4 str</label>
                    <input
                      type='number'
                      value={bonus.spy.S4.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setSpyS4Bonus({ str, hp: bonus.spy.S4.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.spy.S4.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setSpyS4Bonus({ hp, str: bonus.spy.S4.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>spy S5 str</label>
                    <input
                      type='number'
                      value={bonus.spy.S5.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setSpyS5Bonus({ str, hp: bonus.spy.S5.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.spy.S5.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setSpyS5Bonus({ hp, str: bonus.spy.S5.str })
                      }}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='engineer'>
                <div className='row'>
                  <div className='field'>
                    <label>Catapult E1 str</label>
                    <input
                      type='number'
                      value={bonus.catapult.E1.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setCatapultE1Bonus({ str, hp: bonus.catapult.E1.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.catapult.E1.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setCatapultE1Bonus({ hp, str: bonus.catapult.E1.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>Catapult E2 str</label>
                    <input
                      type='number'
                      value={bonus.catapult.E2.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setCatapultE2Bonus({ str, hp: bonus.catapult.E2.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.catapult.E2.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setCatapultE2Bonus({ hp, str: bonus.catapult.E2.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>Catapult E3 str</label>
                    <input
                      type='number'
                      value={bonus.catapult.E3.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setCatapultE3Bonus({ str, hp: bonus.catapult.E3.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.catapult.E3.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setCatapultE3Bonus({ hp, str: bonus.catapult.E3.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>Catapult E4 str</label>
                    <input
                      type='number'
                      value={bonus.catapult.E4.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setCatapultE4Bonus({ str, hp: bonus.catapult.E4.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.catapult.E4.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setCatapultE4Bonus({ hp, str: bonus.catapult.E4.str })
                      }}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='field'>
                    <label>Catapult E5 str</label>
                    <input
                      type='number'
                      value={bonus.catapult.E5.str}
                      onChange={e => {
                        const str = parseInt(e.target.value)
                        setCatapultE5Bonus({ str, hp: bonus.catapult.E5.hp })
                      }}
                      required
                    />
                  </div>
                  <div className='field'>
                    <label>hp </label>
                    <input
                      type='number'
                      value={bonus.catapult.E5.hp}
                      onChange={e => {
                        const hp = parseInt(e.target.value)
                        setCatapultE5Bonus({ hp, str: bonus.catapult.E5.str })
                      }}
                      required
                    />
                  </div>
                </div>
              </div>
              <pre>{JSON.stringify(bonus, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default Dos
