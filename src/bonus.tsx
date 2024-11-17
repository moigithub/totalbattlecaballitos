import { Link } from 'react-router-dom'
import { useStackStore } from './stackStore'
import { useState } from 'react'

export const Bonus = () => {
  const [bonusMode, setBonusMode] = useState('showSelectedStacksOnly')

  const army = useStackStore(state => state.army)
  const bonus = useStackStore(state => state.bonus)

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

  const selectedStacksCategories = army.map(stack => stack.unit.group + ':' + stack.unit.category)
  const selectedStacksGroups = army.map(stack => stack.unit.group)

  return (
    <div className='bonus-container'>
      <h4>
        Strength & Health Bonus config (check <Link to={'/info'}>Info</Link>)
      </h4>
      <p className='small'>NO need to fill everything, but the stacks you using</p>
      <p className='small'>
        i saw 3 bonus values, when parking on city, when marching to a battle, and finally on the
        Battle Report (BR)
      </p>
      <p className='small'>
        probably the easier one to use would be the BR one, otherwise the stack order might vary
      </p>
      <div className='configbar'>
        <div>
          <label>Show all</label>
          <input
            type='radio'
            value='showAll'
            name='bonusMode'
            checked={bonusMode === 'showAll'}
            onChange={() => {
              setBonusMode('showAll')
            }}
          />
        </div>
        <div>
          <label>Show Selected Stacks Only</label>
          <input
            type='radio'
            value='showSelectedStacksOnly'
            name='bonusMode'
            checked={bonusMode === 'showSelectedStacksOnly'}
            onChange={() => {
              setBonusMode('showSelectedStacksOnly')
            }}
          />
        </div>
      </div>

      {bonusMode === 'showSelectedStacksOnly' && selectedStacksGroups.length === 0 && (
        <h2>Pick some army first</h2>
      )}

      {(bonusMode === 'showAll' || selectedStacksGroups.includes('guardsman')) && (
        <div className='guardsmen'>
          <p>Guardsman</p>

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('guardsman:melee'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('guardsman:ranged'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('guardsman:mounted'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('guardsman:flying'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('guardsman:epic'))) && (
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
          )}
        </div>
      )}

      {(bonusMode === 'showAll' || selectedStacksGroups.includes('specialist')) && (
        <div className='specialists'>
          <p>Specialist</p>
          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('specialist:melee'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('specialist:ranged'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('specialist:mounted'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('specialist:flying'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('specialist:scout'))) && (
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
          )}
        </div>
      )}

      {(bonusMode === 'showAll' || selectedStacksGroups.includes('engineer')) && (
        <div className='engineer'>
          <p>Engineer</p>
          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('engineer:siege'))) && (
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
          )}
        </div>
      )}

      {(bonusMode === 'showAll' || selectedStacksGroups.includes('elemental')) && (
        <div className='monsters'>
          <p>Monster - Elemental</p>
          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('elemental:melee'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('elemental:ranged'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('elemental:mounted'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('elemental:flying'))) && (
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
          )}
        </div>
      )}

      {(bonusMode === 'showAll' || selectedStacksGroups.includes('beast')) && (
        <div className='monsters'>
          <p>Monster - Beast</p>
          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('beast:melee'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('beast:ranged'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('beast:mounted'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('beast:flying'))) && (
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
          )}
        </div>
      )}

      {(bonusMode === 'showAll' || selectedStacksGroups.includes('dragon')) && (
        <div className='monsters'>
          <p>Monster - Dragon</p>
          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('dragon:melee'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('dragon:ranged'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('dragon:mounted'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('dragon:flying'))) && (
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
          )}
        </div>
      )}

      {(bonusMode === 'showAll' || selectedStacksGroups.includes('giant')) && (
        <div className='monsters'>
          <p>Monster - Giant</p>
          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('giant:melee'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('giant:ranged'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('giant:mounted'))) && (
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
          )}

          {(bonusMode === 'showAll' ||
            (bonusMode === 'showSelectedStacksOnly' &&
              selectedStacksCategories.includes('giant:flying'))) && (
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
          )}
        </div>
      )}
    </div>
  )
}
