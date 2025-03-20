import { useEffect, useState } from 'react'
import {
  CatapultE1,
  CatapultE2,
  CatapultE3,
  CatapultE4,
  CatapultE5,
  CatapultE6,
  CatapultE7
} from './soldiers'

const citadele10 = {
  walls: { hp: 90 * 30_000 },
  centaur: {
    units: 0,
    str: 0,
    bonusPercentVsSiege: 0,
    bonusPercentVsRanged: 0,
    dmg: 0,
    dmgSiege: Infinity,
    dmgRanged: 0
  }
}

const citadele15 = {
  walls: { hp: 700 * 30_000 },
  centaur: {
    units: 290,
    str: 2600,
    bonusPercentVsSiege: 20,
    bonusPercentVsRanged: 50,
    dmg: 2600 * 290,
    dmgSiege: 2600 * 290 * 1.2,
    dmgRanged: 2600 * 290 * 1.5
  }
}

const citadele20 = {
  walls: { hp: 3650 * 30_000 },
  centaur: {
    units: 2500,
    str: 2600,
    bonusPercentVsSiege: 20,
    bonusPercentVsRanged: 50,
    dmg: 2600 * 2500,
    dmgSiege: 2600 * 2500 * 1.2,
    dmgRanged: 2600 * 2500 * 1.5
  }
}

export const Citadels = () => {
  const [selectedCitadel, setSelectedCitadel] = useState('e15')
  const [citadel, setCitadel] = useState(citadele15)
  const [selectedCatapultLevel, setSelectedCatapultLevel] = useState(7)
  const [StrBonus, setStrBonus] = useState(134.8)
  const [HPBonus, setHPBonus] = useState(126.8)
  const [cataMaxHealth, setCataMaxHealth] = useState(citadel.centaur.dmgSiege)
  const [useStackHealthLimit, setUseStackHealthLimit] = useState(false)
  const [catasResult, setCatasResult] = useState({
    lvl7: 0,
    lvl6: 0,
    lvl5: 0,
    lvl4: 0,
    lvl3: 0,
    lvl2: 0,
    lvl1: 0,
    lvl1e: 0
  })

  const cata1 = {
    hp: CatapultE1.BASEHP * (1 + HPBonus / 100),
    str: CatapultE1.BASESTR * 20 * (1 + (StrBonus + CatapultE1.vsFortificationsPercent) / 100)
  }
  const cata2 = {
    hp: CatapultE2.BASEHP * (1 + HPBonus / 100),
    str: CatapultE2.BASESTR * 20 * (1 + (StrBonus + CatapultE2.vsFortificationsPercent) / 100)
  }
  const cata3 = {
    hp: CatapultE3.BASEHP * (1 + HPBonus / 100),
    str: CatapultE3.BASESTR * 20 * (1 + (StrBonus + CatapultE3.vsFortificationsPercent) / 100)
  }
  const cata4 = {
    hp: CatapultE4.BASEHP * (1 + HPBonus / 100),
    str: CatapultE4.BASESTR * 20 * (1 + (StrBonus + CatapultE4.vsFortificationsPercent) / 100)
  }
  const cata5 = {
    hp: CatapultE5.BASEHP * (1 + HPBonus / 100),
    str: CatapultE5.BASESTR * 20 * (1 + (StrBonus + CatapultE5.vsFortificationsPercent) / 100)
  }
  const cata6 = {
    hp: CatapultE6.BASEHP * (1 + HPBonus / 100),
    str: CatapultE6.BASESTR * 20 * (1 + (StrBonus + CatapultE6.vsFortificationsPercent) / 100)
  }
  const cata7 = {
    hp: CatapultE7.BASEHP * (1 + HPBonus / 100),
    str: CatapultE7.BASESTR * 20 * (1 + (StrBonus + CatapultE7.vsFortificationsPercent) / 100)
  }

  const changeStrBonus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStrBonus(parseFloat(e.target.value))
  }

  const changeHPBonus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHPBonus(parseFloat(e.target.value))
  }

  const changeCatapultLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCatapultLevel(parseInt(e.target.value))
  }

  useEffect(() => {
    switch (selectedCitadel) {
      case 'e10':
        setCitadel(citadele10)
        setCataMaxHealth(Infinity)
        break
      case 'e15':
        setCitadel(citadele15)
        setCataMaxHealth(citadele15.centaur.dmgSiege)
        break
      case 'e20':
        setCitadel(citadele20)
        setCataMaxHealth(citadele20.centaur.dmgSiege)
        break
      default:
        setCitadel(citadele15)
        setCataMaxHealth(citadele15.centaur.dmgSiege)
    }
  }, [selectedCitadel])

  const changeCitadel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCitadel(e.target.value)
  }

  const calc = () => {
    // calculate how many catapults needed to kill a citadel
    // but its health must be lower than centaurs damage
    // so it dont get targeted by centaurs
    let cata7count = 0
    let cata6count = 0
    let cata5count = 0
    let cata4count = 0
    let cata3count = 0
    let cata2count = 0
    let cata1count = 0
    let cataExtraCount = 0
    let acumDmg = 0
    console.log('selectedCatapultLevel', selectedCatapultLevel)

    if (selectedCatapultLevel >= 7) {
      //add many cat5 until cata dmg >= walls.hp
      // and cata.stack.hp <= centaur.dmg
      while (acumDmg + cata7count * cata7.str <= citadel.walls.hp) {
        cata7count++
        if (useStackHealthLimit && (cata7count + 1) * cata7.hp >= cataMaxHealth) {
          break
        }
      }

      acumDmg = acumDmg + cata7count * cata7.str

      console.log('cata7', cata7count)
    }

    if (selectedCatapultLevel >= 6) {
      //add many cat5 until cata dmg >= walls.hp
      // and cata.stack.hp <= centaur.dmg
      while (acumDmg + cata6count * cata6.str <= citadel.walls.hp) {
        cata6count++
        if (useStackHealthLimit && (cata6count + 1) * cata6.hp >= cataMaxHealth) {
          break
        }
      }

      acumDmg = acumDmg + cata6count * cata6.str

      console.log('cata6', cata6count)
    }

    if (selectedCatapultLevel >= 5) {
      //add many cat5 until cata dmg >= walls.hp
      // and cata.stack.hp <= centaur.dmg
      while (acumDmg + cata5count * cata5.str <= citadel.walls.hp) {
        cata5count++
        if (useStackHealthLimit && (cata5count + 1) * cata5.hp >= cataMaxHealth) {
          break
        }
      }

      acumDmg = acumDmg + cata5count * cata5.str

      console.log('cata5', cata5count)
    }

    if (selectedCatapultLevel >= 4) {
      //add many cat4 until cata dmg >= walls.hp
      // and cata.stack.hp <= centaur.dmg
      while (acumDmg + cata4count * cata4.str <= citadel.walls.hp) {
        cata4count++
        if (useStackHealthLimit && (cata4count + 1) * cata4.hp >= cataMaxHealth) {
          break
        }
      }

      acumDmg = acumDmg + cata4count * cata4.str
      console.log('cata4', cata4count)
    }

    if (selectedCatapultLevel >= 3) {
      //add many cat3 until cata dmg >= walls.hp
      // and cata.stack.hp <= centaur.dmg
      while (acumDmg + cata3count * cata3.str <= citadel.walls.hp) {
        cata3count++
        if (useStackHealthLimit && (cata3count + 1) * cata3.hp >= cataMaxHealth) {
          break
        }
      }
      acumDmg = acumDmg + cata3count * cata3.str
      console.log('cata3', cata3count)
    }
    if (selectedCatapultLevel >= 2) {
      //add many cat2 until cata dmg >= walls.hp
      // and cata.stack.hp <= centaur.dmg
      while (acumDmg + cata2count * cata2.str <= citadel.walls.hp) {
        cata2count++
        if (useStackHealthLimit && (cata2count + 1) * cata2.hp >= cataMaxHealth) {
          break
        }
      }
      acumDmg = acumDmg + cata2count * cata2.str
      console.log('cata2', cata2count)
    }
    if (selectedCatapultLevel >= 1) {
      //add many cat1 until cata dmg >= walls.hp
      // and cata.stack.hp <= centaur.dmg
      while (acumDmg + cata1count * cata1.str <= citadel.walls.hp) {
        cata1count++
        if (useStackHealthLimit && (cata1count + 1) * cata1.hp >= cataMaxHealth) {
          break
        }
      }
      acumDmg = acumDmg + cata1count * cata1.str
      console.log('cata1', cata1count)
    }

    // extra calc for cata1
    const missingHealth = citadel.walls.hp - acumDmg

    while (cataExtraCount * cata1.str <= missingHealth) {
      cataExtraCount++
      if (useStackHealthLimit && (cataExtraCount + 1) * cata1.hp >= cataMaxHealth) {
        break
      }
    }

    const minus = 0
    setCatasResult({
      lvl7: cata7count > 0 ? cata7count - minus : 0,
      lvl6: cata6count > 0 ? cata6count - minus : 0,
      lvl5: cata5count > 0 ? cata5count - minus : 0,
      lvl4: cata4count > 0 ? cata4count - minus : 0,
      lvl3: cata3count > 0 ? cata3count - minus : 0,
      lvl2: cata2count > 0 ? cata2count - minus : 0,
      lvl1: cata1count > 0 ? cata1count - minus : 0,
      lvl1e: cataExtraCount > 0 ? cataExtraCount : 0
    })
  }

  const totalDmg =
    catasResult.lvl7 * cata7.str +
    catasResult.lvl6 * cata6.str +
    catasResult.lvl5 * cata5.str +
    catasResult.lvl4 * cata4.str +
    catasResult.lvl3 * cata3.str +
    catasResult.lvl2 * cata2.str +
    catasResult.lvl1 * cata1.str +
    catasResult.lvl1e * cata1.str

  return (
    <div>
      <div className='group'>
        <label>STR bonus </label>
        <input type='number' value={StrBonus} onChange={changeStrBonus} />
      </div>
      <div className='group'>
        <label>HP bonus </label>
        <input type='number' value={HPBonus} onChange={changeHPBonus} />
      </div>
      <div className='group'>
        <label>Citadel </label>
        <select value={selectedCitadel} onChange={changeCitadel}>
          <option value='e20'>elf 20</option>
          <option value='e15'>elf 15</option>
          <option value='e10'>elf 10</option>
        </select>
      </div>
      <div className='group'>
        <label>Catapult level </label>
        <select value={selectedCatapultLevel} onChange={changeCatapultLevel}>
          <option value='7'>7</option>
          <option value='6'>6</option>
          <option value='5'>5</option>
          <option value='4'>4</option>
          <option value='3'>3</option>
          <option value='2'>2</option>
          <option value='1'>1</option>
        </select>
      </div>
      <br />
      <div className='group'>
        <label>Use stack health limit </label>
        <input
          type='checkbox'
          checked={useStackHealthLimit}
          onChange={() => {
            setUseStackHealthLimit(!useStackHealthLimit)
          }}
        />

        <input
          type='number'
          value={cataMaxHealth}
          onChange={e => {
            setCataMaxHealth(parseInt(e.target.value))
          }}
        />
      </div>

      {['e15', 'e20'].includes(selectedCitadel) && <p>centaur dmg {citadel.centaur.dmgSiege}</p>}
      <br />
      <button onClick={calc}>calc</button>

      <table>
        <thead>
          <th>cat lvl</th>
          <th>amount</th>
          <th>damage</th>
          <th>health</th>
        </thead>
        <tbody>
          {catasResult.lvl7 > 0 && (
            <tr>
              <td>7</td>
              <td>{catasResult.lvl7}</td>
              <td>{Math.round(catasResult.lvl7 * cata7.str)}</td>
              <td>{Math.round(catasResult.lvl7 * cata7.hp)}</td>
            </tr>
          )}

          {catasResult.lvl6 > 0 && (
            <tr>
              <td>6</td>
              <td>{catasResult.lvl6}</td>
              <td>{Math.round(catasResult.lvl6 * cata6.str)}</td>
              <td>{Math.round(catasResult.lvl6 * cata6.hp)}</td>
            </tr>
          )}

          {catasResult.lvl5 > 0 && (
            <tr>
              <td>5</td>
              <td>{catasResult.lvl5}</td>
              <td>{Math.round(catasResult.lvl5 * cata5.str)}</td>
              <td>{Math.round(catasResult.lvl5 * cata5.hp)}</td>
            </tr>
          )}

          {catasResult.lvl4 > 0 && (
            <tr>
              <td>4</td>
              <td>{catasResult.lvl4}</td>
              <td>{Math.round(catasResult.lvl4 * cata4.str)}</td>
              <td>{Math.round(catasResult.lvl4 * cata4.hp)}</td>
            </tr>
          )}

          {catasResult.lvl3 > 0 && (
            <tr>
              <td>3</td>
              <td>{catasResult.lvl3}</td>
              <td>{Math.round(catasResult.lvl3 * cata3.str)}</td>
              <td>{Math.round(catasResult.lvl3 * cata3.hp)}</td>
            </tr>
          )}

          {catasResult.lvl2 > 0 && (
            <tr>
              <td>2</td>
              <td>{catasResult.lvl2}</td>
              <td>{Math.round(catasResult.lvl2 * cata2.str)}</td>
              <td>{Math.round(catasResult.lvl2 * cata2.hp)}</td>
            </tr>
          )}

          {catasResult.lvl1 > 0 && (
            <tr>
              <td>1</td>
              <td>{catasResult.lvl1}</td>
              <td>{Math.round(catasResult.lvl1 * cata1.str)}</td>
              <td>{Math.round(catasResult.lvl1 * cata1.hp)}</td>
            </tr>
          )}

          {catasResult.lvl1e > 0 && (
            <tr>
              <td>1</td>
              <td>{catasResult.lvl1e}</td>
              <td>{Math.round(catasResult.lvl1e * cata1.str)}</td>
              <td>{Math.round(catasResult.lvl1e * cata1.hp)}</td>
            </tr>
          )}

          <tr>
            <td>{catasResult.lvl1 + catasResult.lvl1e}</td>
            <td>total dmg</td>
            <td>{totalDmg}</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <p>citadel walls hp {citadel.walls.hp}</p>

      <br />
      {totalDmg < citadel.walls.hp && <p>not enough catas to kill the walls</p>}
    </div>
  )
}
