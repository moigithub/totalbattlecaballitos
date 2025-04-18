import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'

import {
  citadelc20,
  citadelc25,
  citadele10,
  citadele15,
  citadele20,
  citadele25,
  citadele30
} from './citadelData'

import { LargeCitadel } from './citadel'
import { ARMY } from './soldiers'
import { useCitadelStore } from './citadelStore'
import PageTitle from './pageTitle'

export const Citadels = () => {
  const [selectedCitadel, setSelectedCitadel] = useState('e15')
  const [citadel, setCitadel] = useState(citadele15)
  const [selectedCatapultLevel, setSelectedCatapultLevel] = useState(7)
  const [catasResult, setCatasResult] = useState({
    lvl10: 0, // ariel (merc)
    lvl9: 0, // josephine
    lvl8: 0, // josephine
    lvl7: 0, // ballistae
    lvl6: 0, // ballistae
    lvl5: 0, // catapult
    lvl4: 0,
    lvl3: 0,
    lvl2: 0,
    lvl1: 0
  })
  const setCitadelStrBonus = useCitadelStore(state => state.setCitadelStrBonus)
  const setCitadelHpBonus = useCitadelStore(state => state.setCitadelHpBonus)
  const setCitadelCataMaxHealth = useCitadelStore(state => state.setCitadelCataMaxHealth)
  const toggleCitadelStackHealthLimit = useCitadelStore(
    state => state.toggleCitadelStackHealthLimit
  )
  const { strBonus, hpBonus, cataMaxHealth, useStackHealthLimit } = useCitadelStore()

  const cata1 = {
    hp: ARMY.CatapultE1.BASEHP * (1 + hpBonus / 100),
    str:
      ARMY.CatapultE1.BASESTR *
      ARMY.CatapultE1.multiplier *
      (1 + (strBonus + ARMY.CatapultE1.vsFortificationsPercent) / 100)
  }
  const cata2 = {
    hp: ARMY.CatapultE2.BASEHP * (1 + hpBonus / 100),
    str:
      ARMY.CatapultE2.BASESTR *
      ARMY.CatapultE2.multiplier *
      (1 + (strBonus + ARMY.CatapultE2.vsFortificationsPercent) / 100)
  }
  const cata3 = {
    hp: ARMY.CatapultE3.BASEHP * (1 + hpBonus / 100),
    str:
      ARMY.CatapultE3.BASESTR *
      ARMY.CatapultE3.multiplier *
      (1 + (strBonus + ARMY.CatapultE3.vsFortificationsPercent) / 100)
  }
  const cata4 = {
    hp: ARMY.CatapultE4.BASEHP * (1 + hpBonus / 100),
    str:
      ARMY.CatapultE4.BASESTR *
      ARMY.CatapultE4.multiplier *
      (1 + (strBonus + ARMY.CatapultE4.vsFortificationsPercent) / 100)
  }
  const cata5 = {
    hp: ARMY.CatapultE5.BASEHP * (1 + hpBonus / 100),
    str:
      ARMY.CatapultE5.BASESTR *
      ARMY.CatapultE5.multiplier *
      (1 + (strBonus + ARMY.CatapultE5.vsFortificationsPercent) / 100)
  }
  const cata6 = {
    hp: ARMY.CatapultE6.BASEHP * (1 + hpBonus / 100),
    str:
      ARMY.CatapultE6.BASESTR *
      ARMY.CatapultE6.multiplier *
      (1 + (strBonus + ARMY.CatapultE6.vsFortificationsPercent) / 100)
  }
  const cata7 = {
    hp: ARMY.CatapultE7.BASEHP * (1 + hpBonus / 100),
    str:
      ARMY.CatapultE7.BASESTR *
      ARMY.CatapultE7.multiplier *
      (1 + (strBonus + ARMY.CatapultE7.vsFortificationsPercent) / 100)
  }
  const cata8 = {
    hp: ARMY.CatapultE8.BASEHP * (1 + hpBonus / 100),
    str:
      ARMY.CatapultE8.BASESTR *
      ARMY.CatapultE8.multiplier *
      (1 + (strBonus + ARMY.CatapultE8.vsFortificationsPercent) / 100)
  }
  const cata9 = {
    hp: ARMY.CatapultE9.BASEHP * (1 + hpBonus / 100),
    str:
      ARMY.CatapultE9.BASESTR *
      ARMY.CatapultE9.multiplier *
      (1 + (strBonus + ARMY.CatapultE9.vsFortificationsPercent) / 100)
  }
  const cata10 = {
    hp: ARMY.arielII.BASEHP * (1 + hpBonus / 100),
    str:
      ARMY.arielII.BASESTR *
      ARMY.arielII.multiplier *
      (1 + (strBonus + ARMY.arielII.vsFortificationsPercent) / 100)
  }

  const changeStrBonus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCitadelStrBonus(parseFloat(e.target.value))
  }

  const changeHPBonus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCitadelHpBonus(parseFloat(e.target.value))
  }

  const changeCatapultLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCatapultLevel(parseInt(e.target.value))
  }

  useEffect(() => {
    switch (selectedCitadel) {
      case 'e10':
        setCitadel(citadele10)
        break
      case 'e15':
        setCitadel(citadele15)
        break
      case 'e20':
        setCitadel(citadele20)
        break
      case 'e25':
        setCitadel(citadele25)
        break
      case 'e30':
        setCitadel(citadele30)
        break
      case 'c20':
        setCitadel(citadelc20)
        break
      case 'c25':
        setCitadel(citadelc25)
        break
      default:
        setCitadel(citadele15)
    }
  }, [selectedCitadel])

  const changeCitadel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCitadel(e.target.value)
  }

  const calc = () => {
    ReactGA.event({
      category: 'catapults',
      action: 'calc'
    })
    // calculate how many catapults needed to kill a citadel
    // but its health must be lower than centaurs damage
    // so it dont get targeted by centaurs
    let cata10count = 0 // arielII- merc
    let cata9count = 0 // josephine
    let cata8count = 0 // josephine
    let cata7count = 0 // ballistae
    let cata6count = 0 // ballistae
    let cata5count = 0 // catapults
    let cata4count = 0
    let cata3count = 0
    let cata2count = 0
    let cata1count = 0

    let acumDmg = 0
    // console.log('selectedCatapultLevel', selectedCatapultLevel)

    const walls = citadel.stacks.filter(stack => stack.unit.category === 'fortification')
    let wallsHealth = 0
    if (walls.length > 0) {
      wallsHealth = walls[0].unit.BASEHP * walls[0].unitsAmount
    }

    if (selectedCatapultLevel >= 10) {
      //arielII merc

      while (acumDmg + cata10count * cata10.str <= wallsHealth) {
        cata10count++
        if (useStackHealthLimit && (cata10count + 1) * cata10.hp >= cataMaxHealth) {
          break
        }
      }

      acumDmg = acumDmg + cata10count * cata10.str

      // console.log('cata10', cata10count)
    }

    if (selectedCatapultLevel >= 9) {
      //add many cat5 until cata dmg >= walls.hp
      // and cata.stack.hp <= centaur.dmg

      while (acumDmg + cata9count * cata9.str <= wallsHealth) {
        cata9count++
        if (useStackHealthLimit && (cata9count + 1) * cata9.hp >= cataMaxHealth) {
          break
        }
      }

      acumDmg = acumDmg + cata9count * cata9.str

      // console.log('cata9', cata9count)
    }

    if (selectedCatapultLevel >= 8) {
      //add many cat5 until cata dmg >= walls.hp
      // and cata.stack.hp <= centaur.dmg

      while (acumDmg + cata8count * cata8.str <= wallsHealth) {
        cata8count++
        if (useStackHealthLimit && (cata8count + 1) * cata8.hp >= cataMaxHealth) {
          break
        }
      }

      acumDmg = acumDmg + cata8count * cata8.str

      // console.log('cata8', cata8count)
    }

    if (selectedCatapultLevel >= 7) {
      //add many cat5 until cata dmg >= walls.hp
      // and cata.stack.hp <= centaur.dmg

      while (acumDmg + cata7count * cata7.str <= wallsHealth) {
        cata7count++
        if (useStackHealthLimit && (cata7count + 1) * cata7.hp >= cataMaxHealth) {
          break
        }
      }

      acumDmg = acumDmg + cata7count * cata7.str

      // console.log('cata7', cata7count)
    }

    if (selectedCatapultLevel >= 6) {
      //add many cat5 until cata dmg >= walls.hp
      // and cata.stack.hp <= centaur.dmg
      while (acumDmg + cata6count * cata6.str <= wallsHealth) {
        cata6count++
        if (useStackHealthLimit && (cata6count + 1) * cata6.hp >= cataMaxHealth) {
          break
        }
      }

      acumDmg = acumDmg + cata6count * cata6.str

      // console.log('cata6', cata6count)
    }

    if (selectedCatapultLevel >= 5) {
      //add many cat5 until cata dmg >= walls.hp
      // and cata.stack.hp <= centaur.dmg
      while (acumDmg + cata5count * cata5.str <= wallsHealth) {
        cata5count++
        if (useStackHealthLimit && (cata5count + 1) * cata5.hp >= cataMaxHealth) {
          break
        }
      }

      acumDmg = acumDmg + cata5count * cata5.str

      // console.log('cata5', cata5count)
    }

    if (selectedCatapultLevel >= 4) {
      //add many cat4 until cata dmg >= walls.hp
      // and cata.stack.hp <= centaur.dmg
      while (acumDmg + cata4count * cata4.str <= wallsHealth) {
        cata4count++
        if (useStackHealthLimit && (cata4count + 1) * cata4.hp >= cataMaxHealth) {
          break
        }
      }

      acumDmg = acumDmg + cata4count * cata4.str
      // console.log('cata4', cata4count)
    }

    if (selectedCatapultLevel >= 3) {
      //add many cat3 until cata dmg >= walls.hp
      // and cata.stack.hp <= centaur.dmg
      while (acumDmg + cata3count * cata3.str <= wallsHealth) {
        cata3count++
        if (useStackHealthLimit && (cata3count + 1) * cata3.hp >= cataMaxHealth) {
          break
        }
      }
      acumDmg = acumDmg + cata3count * cata3.str
      // console.log('cata3', cata3count)
    }
    if (selectedCatapultLevel >= 2) {
      //add many cat2 until cata dmg >= walls.hp
      // and cata.stack.hp <= centaur.dmg
      while (acumDmg + cata2count * cata2.str <= wallsHealth) {
        cata2count++
        if (useStackHealthLimit && (cata2count + 1) * cata2.hp >= cataMaxHealth) {
          break
        }
      }
      acumDmg = acumDmg + cata2count * cata2.str
      // console.log('cata2', cata2count)
    }
    if (selectedCatapultLevel >= 1) {
      //add many cat1 until cata dmg >= walls.hp
      // and cata.stack.hp <= centaur.dmg
      while (acumDmg + cata1count * cata1.str <= wallsHealth) {
        cata1count++
        if (useStackHealthLimit && (cata1count + 1) * cata1.hp >= cataMaxHealth) {
          break
        }
      }
      acumDmg = acumDmg + cata1count * cata1.str
      // console.log('cata1', cata1count)
    }

    const minus = 0
    setCatasResult({
      lvl10: cata10count > 0 ? cata10count - minus : 0,
      lvl9: cata9count > 0 ? cata9count - minus : 0,
      lvl8: cata8count > 0 ? cata8count - minus : 0,
      lvl7: cata7count > 0 ? cata7count - minus : 0,
      lvl6: cata6count > 0 ? cata6count - minus : 0,
      lvl5: cata5count > 0 ? cata5count - minus : 0,
      lvl4: cata4count > 0 ? cata4count - minus : 0,
      lvl3: cata3count > 0 ? cata3count - minus : 0,
      lvl2: cata2count > 0 ? cata2count - minus : 0,
      lvl1: cata1count > 0 ? cata1count - minus : 0
    })
  }

  const totalDmg =
    catasResult.lvl10 * cata10.str +
    catasResult.lvl9 * cata9.str +
    catasResult.lvl8 * cata8.str +
    catasResult.lvl7 * cata7.str +
    catasResult.lvl6 * cata6.str +
    catasResult.lvl5 * cata5.str +
    catasResult.lvl4 * cata4.str +
    catasResult.lvl3 * cata3.str +
    catasResult.lvl2 * cata2.str +
    catasResult.lvl1 * cata1.str
  // console.log('walls hp', citadel.walls.hp.toLocaleString())

  const walls = citadel.stacks.filter(stack => stack.unit.category === 'fortification')
  let wallsHealth = 0
  if (walls.length > 0) {
    wallsHealth = walls[0].unit.BASEHP * walls[0].unitsAmount
  }

  return (
    <>
      <PageTitle title='Citadels catas calc' />
      <div className='p-5 pt-[56px]'>
        <div className='flex mb-8'>
          <form className='max-w-xs '>
            <div className='group'>
              <label>Citadel </label>
              <select
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                value={selectedCitadel}
                onChange={changeCitadel}
              >
                <option value='c25'>cursed 25</option>
                <option value='c20'>cursed 20</option>
                <option value='e30'>elf 30</option>
                <option value='e25'>elf 25</option>
                <option value='e20'>elf 20</option>
                <option value='e15'>elf 15</option>
                <option value='e10'>elf 10</option>
              </select>
            </div>
            <div className='group'>
              <label>Catapult level </label>
              <select
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                value={selectedCatapultLevel}
                onChange={changeCatapultLevel}
              >
                <option value='10'>10 Ariel</option>
                <option value='9'>9 Josephine 2</option>
                <option value='8'>8 Josephine 1</option>
                <option value='7'>7 Ballistae VII</option>
                <option value='6'>6 Ballistae VI</option>
                <option value='5'>5 Catapult V</option>
                <option value='4'>4 Catapult IV</option>
                <option value='3'>3 Catapult III</option>
                <option value='2'>2 Catapult II</option>
                <option value='1'>1 Catapult I</option>
              </select>
            </div>

            <div className='group'>
              <label>STR bonus </label>
              <input
                type='number'
                className='ml-1 inline-flex bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                value={strBonus}
                onChange={changeStrBonus}
              />
            </div>

            <br />
            <div className='group'>
              <label>Use stack health limit </label>
              <input
                type='checkbox'
                checked={useStackHealthLimit}
                onChange={() => {
                  toggleCitadelStackHealthLimit()
                }}
              />
              {useStackHealthLimit && (
                <>
                  <div className='group'>
                    <label>HP bonus </label>
                    <input
                      type='number'
                      className='ml-1 inline-flex bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      value={hpBonus}
                      onChange={changeHPBonus}
                    />
                  </div>
                  <input
                    type='number'
                    className='ml-1 inline-flex bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={cataMaxHealth}
                    onChange={e => {
                      setCitadelCataMaxHealth(parseInt(e.target.value))
                    }}
                  />{' '}
                </>
              )}
            </div>

            <br />
            <button
              className='focus:outline-none font-extrabold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300   rounded-lg text-xs px-10 py-2 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={calc}
              type='button'
            >
              CALC
            </button>
          </form>
          <div className='ml-10'>
            <table>
              <thead>
                <tr>
                  <th>cat lvl</th>
                  <th>amount</th>
                  <th>damage</th>
                  {useStackHealthLimit && <th>health</th>}
                </tr>
              </thead>
              <tbody>
                {catasResult.lvl10 > 0 && (
                  <tr>
                    <td className='px-1 py-0.5'>10. Ariel</td>
                    <td className='px-1 py-0.5'>{catasResult.lvl10}</td>
                    <td className='px-1 py-0.5'>{Math.round(catasResult.lvl10 * cata10.str)}</td>
                    {useStackHealthLimit && (
                      <td className='px-1 py-0.5'>{Math.round(catasResult.lvl10 * cata10.hp)}</td>
                    )}
                  </tr>
                )}
                {catasResult.lvl9 > 0 && (
                  <tr>
                    <td className='px-1 py-0.5'>9. Josephine 2</td>
                    <td className='px-1 py-0.5'>{catasResult.lvl9}</td>
                    <td className='px-1 py-0.5'>{Math.round(catasResult.lvl9 * cata9.str)}</td>
                    {useStackHealthLimit && (
                      <td className='px-1 py-0.5'>{Math.round(catasResult.lvl9 * cata9.hp)}</td>
                    )}
                  </tr>
                )}
                {catasResult.lvl8 > 0 && (
                  <tr>
                    <td className='px-1 py-0.5'>8. Josephine 1</td>
                    <td className='px-1 py-0.5'>{catasResult.lvl8}</td>
                    <td className='px-1 py-0.5'>{Math.round(catasResult.lvl8 * cata8.str)}</td>
                    {useStackHealthLimit && (
                      <td className='px-1 py-0.5'>{Math.round(catasResult.lvl8 * cata8.hp)}</td>
                    )}
                  </tr>
                )}

                {catasResult.lvl7 > 0 && (
                  <tr>
                    <td className='px-1 py-0.5'>7. Ballistae VII</td>
                    <td className='px-1 py-0.5'>{catasResult.lvl7}</td>
                    <td className='px-1 py-0.5'>{Math.round(catasResult.lvl7 * cata7.str)}</td>
                    {useStackHealthLimit && (
                      <td className='px-1 py-0.5'>{Math.round(catasResult.lvl7 * cata7.hp)}</td>
                    )}
                  </tr>
                )}

                {catasResult.lvl6 > 0 && (
                  <tr>
                    <td className='px-1 py-0.5'>6. Ballistae VI</td>
                    <td className='px-1 py-0.5'>{catasResult.lvl6}</td>
                    <td className='px-1 py-0.5'>{Math.round(catasResult.lvl6 * cata6.str)}</td>
                    {useStackHealthLimit && (
                      <td className='px-1 py-0.5'>{Math.round(catasResult.lvl6 * cata6.hp)}</td>
                    )}
                  </tr>
                )}

                {catasResult.lvl5 > 0 && (
                  <tr>
                    <td className='px-1 py-0.5'>5. Cata 5</td>
                    <td className='px-1 py-0.5'>{catasResult.lvl5}</td>
                    <td className='px-1 py-0.5'>{Math.round(catasResult.lvl5 * cata5.str)}</td>
                    {useStackHealthLimit && (
                      <td className='px-1 py-0.5'>{Math.round(catasResult.lvl5 * cata5.hp)}</td>
                    )}
                  </tr>
                )}

                {catasResult.lvl4 > 0 && (
                  <tr>
                    <td className='px-1 py-0.5'>4</td>
                    <td className='px-1 py-0.5'>{catasResult.lvl4}</td>
                    <td className='px-1 py-0.5'>{Math.round(catasResult.lvl4 * cata4.str)}</td>
                    {useStackHealthLimit && (
                      <td className='px-1 py-0.5'>{Math.round(catasResult.lvl4 * cata4.hp)}</td>
                    )}
                  </tr>
                )}

                {catasResult.lvl3 > 0 && (
                  <tr>
                    <td className='px-1 py-0.5'>3</td>
                    <td className='px-1 py-0.5'>{catasResult.lvl3}</td>
                    <td className='px-1 py-0.5'>{Math.round(catasResult.lvl3 * cata3.str)}</td>
                    {useStackHealthLimit && (
                      <td className='px-1 py-0.5'>{Math.round(catasResult.lvl3 * cata3.hp)}</td>
                    )}
                  </tr>
                )}

                {catasResult.lvl2 > 0 && (
                  <tr>
                    <td className='px-1 py-0.5'>2</td>
                    <td className='px-1 py-0.5'>{catasResult.lvl2}</td>
                    <td className='px-1 py-0.5'>{Math.round(catasResult.lvl2 * cata2.str)}</td>
                    {useStackHealthLimit && (
                      <td className='px-1 py-0.5'>{Math.round(catasResult.lvl2 * cata2.hp)}</td>
                    )}
                  </tr>
                )}

                {catasResult.lvl1 > 0 && (
                  <tr>
                    <td className='px-1 py-0.5'>1</td>
                    <td className='px-1 py-0.5'>{catasResult.lvl1}</td>
                    <td className='px-1 py-0.5'>{Math.round(catasResult.lvl1 * cata1.str)}</td>
                    {useStackHealthLimit && (
                      <td className='px-1 py-0.5'>{Math.round(catasResult.lvl1 * cata1.hp)}</td>
                    )}
                  </tr>
                )}

                <tr>
                  <td className='px-1 py-0.5'> </td>
                  <td className='px-1 py-0.5'>total dmg</td>
                  <td className='px-1 py-0.5'>{totalDmg.toLocaleString()}</td>
                  {useStackHealthLimit && <td className='px-1 py-0.5'></td>}
                </tr>
              </tbody>
            </table>

            <h2 className='text-lg font-bold'>
              Citadel walls health {wallsHealth.toLocaleString().replace(/,/g, '_')}
            </h2>
            {totalDmg < wallsHealth && (
              <p style={{ color: 'red' }}>not enough catas to kill the walls</p>
            )}
          </div>
        </div>

        <hr />

        <h3 className='text-lg font-extrabold mt-4'>Citadel elf 10</h3>
        <h2>
          NO <span className='mountbadges'>mounted</span>,{' '}
          <span className='dragonbadges'>dragon</span>, <span className='meleebadges'>melee</span>{' '}
          or
          <span className='elementalbadges'>elemental</span>
          to avoid to have more losses, unless{' '}
          <a className='text-sm text-blue-400' href='#rule-exception'>
            you have huge health
          </a>
        </h2>

        <LargeCitadel citadel={citadele10} />

        <hr />

        <h3 className='text-lg font-extrabold mt-4'>Citadel elf 15</h3>
        <h2>
          NO
          <span className='rangedbadges'>ranged</span>, <span className='meleebadges'>melee</span>{' '}
          or
          <span className='dragonbadges'>dragon</span>
          to avoid to have more losses, unless{' '}
          <a className='text-sm text-blue-400' href='#rule-exception'>
            you have huge health
          </a>
        </h2>
        <LargeCitadel citadel={citadele15} />

        <hr />

        <h3 className='text-lg font-extrabold mt-4'>Citadel elf 20</h3>
        <h2>
          NO <span className='mountbadges'>mounted</span>,{' '}
          <span className='rangedbadges'>ranged</span>, <span className='meleebadges'>melee</span>,{' '}
          <span className='giantbadges'>giant</span>, <span className='dragonbadges'>dragon</span>{' '}
          or
          <span className='elementalbadges'>elemental</span>
          to avoid to have more losses, unless{' '}
          <a className='text-sm text-blue-400' href='#rule-exception'>
            you have huge health
          </a>
        </h2>
        <LargeCitadel citadel={citadele20} />

        <hr />

        <h3 className='text-lg font-extrabold mt-4'>Citadel elf 25</h3>
        <h2>
          NO <span className='mountbadges'>mounted</span>,{' '}
          <span className='rangedbadges'>ranged</span>, <span className='meleebadges'>melee</span>,{' '}
          <span className='giantbadges'>giant</span>, <span className='dragonbadges'>dragon</span>{' '}
          or
          <span className='elementalbadges'>elemental</span>
          to avoid to have more losses, unless{' '}
          <a className='text-sm text-blue-400' href='#rule-exception'>
            you have huge health
          </a>
        </h2>
        <LargeCitadel citadel={citadele25} />

        <hr />

        <h3 className='text-lg font-extrabold mt-4'>Citadel elf 30</h3>
        <h2>
          NO <span className='mountbadges'>mounted</span>,{' '}
          <span className='rangedbadges'>ranged</span>, <span className='meleebadges'>melee</span>,{' '}
          <span className='giantbadges'>giant</span>, <span className='dragonbadges'>dragon</span>{' '}
          or
          <span className='elementalbadges'>elemental</span>
          to avoid to have more losses, unless{' '}
          <a className='text-sm text-blue-400' href='#rule-exception'>
            you have huge health
          </a>
        </h2>
        <LargeCitadel citadel={citadele30} />

        <hr />
        <br />

        <h3 className='text-lg font-extrabold mt-4'>Citadel cursed 20</h3>
        <h2>
          NO <span className='mountbadges'>mounted</span>,{' '}
          <span className='rangedbadges'>ranged</span>, <span className='giantbadges'>giant</span>{' '}
          or
          <span className='beastbadges'>beast</span>
          to avoid to have more losses, unless{' '}
          <a className='text-sm text-blue-400' href='#rule-exception'>
            you have huge health
          </a>
        </h2>
        <LargeCitadel citadel={citadelc20} />

        <hr />

        <h3 className='text-lg font-extrabold mt-4'>Citadel cursed 25</h3>
        <h2>
          NO <span className='mountbadges'>mounted</span>,{' '}
          <span className='rangedbadges'>ranged</span>, <span className='giantbadges'>giant</span>,{' '}
          <span className='dragonbadges'>dragon</span> or
          <span className='beastbadges'>beast</span>
          to avoid to have more losses, unless{' '}
          <a className='text-sm text-blue-400' href='#rule-exception'>
            you have huge health
          </a>
        </h2>
        <LargeCitadel citadel={citadelc25} />

        <br />
        <hr />
        <h4 id='rule-exception' className='text-lg text-red-700'>
          Rule exception
        </h4>
        <ul className='list-disc list-inside text-gray-500'>
          <li>
            Each of your meatshield/tank units must have higher health than the damage generated by
            the stack enemy
          </li>
        </ul>
        <br />

        <hr />
        <h2 className='text-lg font-bold'>
          Example calculating how many cat4 units needed to kill walls on citadel lvl 15
        </h2>
        <img src='./cataFormula.jpg' alt='calculate catapults units to kill walls' />

        <h2 className='text-lg font-bold'>Tutorial to calculate catapults amount</h2>
        <img src='./tutorialCataCalc.jpg' alt='tutorial to calculate catapults' />
      </div>
    </>
  )
}
