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
  walls: { hp: 90 * 30_000 }
}

const citadele15 = {
  walls: { hp: 700 * 30_000 }
}

const citadele20 = {
  walls: { hp: 3650 * 30_000 }
}
const citadele25 = {
  walls: { hp: 31900 * 30_000 }
}

const citadele30 = {
  walls: { hp: 135000 * 30_000 }
}

const citadelc20 = {
  walls: { hp: 9200 * 30_000 }
}
const citadelc25 = {
  walls: { hp: 77500 * 30_000 }
}

export const Citadels = () => {
  const [selectedCitadel, setSelectedCitadel] = useState('e15')
  const [citadel, setCitadel] = useState(citadele15)
  const [selectedCatapultLevel, setSelectedCatapultLevel] = useState(7)
  const [StrBonus, setStrBonus] = useState(134.8)
  const [HPBonus, setHPBonus] = useState(126.8)
  const [cataMaxHealth, setCataMaxHealth] = useState(904800)
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
    <div className='info'>
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

      <br />
      <button
        onClick={calc}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 10,
          paddingRight: 10
        }}
      >
        CALC
      </button>

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

      <h3>Citadel elf 10</h3>
      <h2>
        NO <span className='mountbadges'>mounted</span>,{' '}
        <span className='rangedbadges'>ranged</span>, <span className='meleebadges'>melee</span> or
        <span className='elementalbadges'>elemental</span>
      </h2>

      <table>
        <thead>
          <th>Stack</th>
          <th>Amount</th>
          <th>Base strength</th>
          <th>Base health</th>
          <th>Total health</th>
          <th>Regular Damage</th>
          <th>Dmg + bonus</th>
          <th>Dmg + bonus</th>
        </thead>
        <tbody>
          <tr>
            <td>Bear V</td>
            <td>9</td>
            {/* amount */}
            <td>22000</td>
            {/* str */}
            <td>66000</td>
            {/* hp */}
            <td>{9 * 66000}</td> {/* total health  */}
            <td>{9 * 22000}</td> {/* total strength  */}
            <td>
              <span className='mountbadges'>vs Mount +70%</span> {9 * 22000 * 1.7}
            </td>
            <td>
              <span className='elementalbadges'>vs Elemental +50%</span> : {9 * 22000 * 1.5}
            </td>
          </tr>
          <tr>
            <td>Unicorn rider IV</td>
            <td>19</td> {/* amount */}
            <td>8200</td> {/* str */}
            <td>24600</td> {/* hp */}
            <td>{19 * 24600}</td> {/* total health  */}
            <td>{19 * 8200}</td> {/* total strength  */}
            <td>
              <span className='rangedbadges'>vs Ranged +65%</span> : {19 * 8200 * 1.65}
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Elf archer I</td>
            <td>1200</td> {/* amount */}
            <td>100</td> {/* str */}
            <td>300</td> {/* hp */}
            <td>{1200 * 300}</td> {/* total health  */}
            <td>{1200 * 100}</td> {/* total strength  */}
            <td>
              <span className='meleebadges'>vs Melee +35%</span> : {1200 * 100 * 1.35}
            </td>
            <td> </td>
          </tr>

          <tr>
            <td>Druid II</td>
            <td>100</td>
            {/* amount */}
            <td>900</td>
            {/* str */}
            <td>2700</td>
            {/* hp */}
            <td>{100 * 2700}</td> {/* total health  */}
            <td>{100 * 900}</td> {/* total strength  */}
            <td>
              <span className='meleebadges'>vs Melee +25%</span> : {100 * 900 * 1.25}
            </td>
            <td></td>
          </tr>

          <tr>
            <td>Dwarf</td>
            <td>2200</td> {/* amount */}
            <td>28</td> {/* str */}
            <td>84</td> {/* hp */}
            <td>{2200 * 84}</td> {/* total health  */}
            <td>{2200 * 28}</td> {/* total strength  */}
            <td>
              <span className='mountbadges'>vs Mount +10%</span> : {2200 * 28 * 1.1}
            </td>
            <td> </td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h3>Citadel elf 15</h3>
      <h2>
        NO
        <span className='rangedbadges'>ranged</span>, <span className='meleebadges'>melee</span> or
        <span className='dragonbadges'>dragon</span>
      </h2>

      <table>
        <thead>
          <th>Stack</th>
          <th>Amount</th>
          <th>Base strength</th>
          <th>Base health</th>
          <th>Total health</th>
          <th>Regular Damage</th>
          <th>Dmg + bonus</th>
          <th>Dmg + bonus</th>
        </thead>
        <tbody>
          <tr>
            <td>Ent VI</td>
            <td>21</td>
            {/* amount */}
            <td>73000</td>
            {/* str */}
            <td>219000</td>
            {/* hp */}
            <td>{21 * 219000}</td> {/* total health  */}
            <td>{21 * 73000}</td> {/* total strength  */}
            <td>
              <span className='rangedbadges'>vs Ranged +55%</span> : {21 * 73000 * 1.55}
            </td>
            <td>
              <span className='dragonbadges'>vs Dragon +45%</span> : {21 * 73000 * 1.45}
            </td>
          </tr>
          <tr>
            <td>Unicorn rider V</td>
            <td>47</td>
            {/* amount */}
            <td>27000</td>
            {/* str */}
            <td>81000</td>
            {/* hp */}
            <td>{47 * 81000}</td> {/* total health  */}
            <td>{47 * 27000}</td> {/* total strength  */}
            <td>
              <span className='rangedbadges'>vs Ranged +65%</span> : {47 * 27000 * 1.65}
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Druid II</td>
            <td>1100</td>
            {/* amount */}
            <td>900</td>
            {/* str */}
            <td>2700</td>
            {/* hp */}
            <td>{1100 * 2700}</td> {/* total health  */}
            <td>{1100 * 900}</td> {/* total strength  */}
            <td>
              <span className='meleebadges'>vs Melee +25%</span> : {1100 * 900 * 1.25}
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Centaur III</td>
            <td>290</td>
            {/* amount */}
            <td>2600</td>
            {/* str */}
            <td>7800</td>
            {/* hp */}
            <td>{290 * 7800}</td> {/* total health  */}
            <td>{290 * 2600}</td> {/* total strength  */}
            <td>
              <span className='rangedbadges'>vs Ranged +50%</span> : {290 * 2600 * 1.5}
            </td>
            <td>
              <span className='siegebadges'>vs Siege +20%</span> : {290 * 2600 * 1.2}
            </td>
          </tr>
          <tr>
            <td>Elf archer I</td>
            <td>5000</td> {/* amount */}
            <td>100</td> {/* str */}
            <td>300</td> {/* hp */}
            <td>{5000 * 300}</td> {/* total health  */}
            <td>{5000 * 100}</td> {/* total strength  */}
            <td>
              <span className='meleebadges'>vs Melee +35%</span> : {5000 * 100 * 1.35}
            </td>
            <td> </td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h3>Citadel elf 20</h3>
      <h2>
        NO <span className='mountbadges'>mounted</span>,{' '}
        <span className='rangedbadges'>ranged</span>, <span className='meleebadges'>melee</span>,{' '}
        <span className='giantbadges'>giant</span>, <span className='dragonbadges'>dragon</span> or
        <span className='elementalbadges'>elemental</span>
      </h2>

      <table>
        <thead>
          <th>Stack</th>
          <th>Amount</th>
          <th>Base strength</th>
          <th>Base health</th>
          <th>Total health</th>
          <th>Regular Damage</th>
          <th>Dmg + bonus</th>
          <th>Dmg + bonus</th>
        </thead>
        <tbody>
          <tr>
            <td>Life dragon VII</td>
            <td>41</td>
            {/* amount */}
            <td>240000</td>
            {/* str */}
            <td>720000</td>
            {/* hp */}
            <td>{41 * 720000}</td> {/* total health  */}
            <td>{41 * 240000}</td> {/* total strength  */}
            <td>
              <span className='mountbadges'>vs Mounted +60%</span> {41 * 240000 * 1.6}
            </td>
            <td>
              <span className='giantbadges'>vs Giant +50%</span> {41 * 240000 * 1.5}
            </td>
          </tr>
          <tr>
            <td>Ent VI</td>
            <td>110</td>
            {/* amount */}
            <td>73000</td>
            {/* str */}
            <td>219000</td>
            {/* hp */}
            <td>{110 * 219000}</td> {/* total health  */}
            <td>{110 * 73000}</td> {/* total strength  */}
            <td>
              <span className='rangedbadges'>vs Ranged +55%</span> : {110 * 73000 * 1.55}
            </td>
            <td>
              <span className='dragonbadges'>vs Dragon +45%</span> : {110 * 73000 * 1.45}
            </td>
          </tr>
          <tr>
            <td>Centaur III</td>
            <td>2500</td>
            {/* amount */}
            <td>2600</td>
            {/* str */}
            <td>7800</td>
            {/* hp */}
            <td>{2500 * 7800}</td> {/* total health  */}
            <td>{2500 * 2600}</td> {/* total strength  */}
            <td>
              <span className='rangedbadges'>vs Ranged +50%</span> : {2500 * 2600 * 1.5}
            </td>
            <td>
              <span className='siegebadges'>vs Siege +20%</span> : {2500 * 2600 * 1.2}
            </td>
          </tr>
          <tr>
            <td>Bear V</td>
            <td>230</td>
            {/* amount */}
            <td>22000</td>
            {/* str */}
            <td>66000</td>
            {/* hp */}
            <td>{230 * 66000}</td> {/* total health  */}
            <td>{230 * 22000}</td> {/* total strength  */}
            <td>
              <span className='mountbadges'>vs Mounted +70%</span> {230 * 22000 * 1.7}
            </td>
            <td>
              <span className='elementalbadges'>vs Elemental +50%</span> : {230 * 22000 * 1.5}
            </td>
          </tr>
          <tr>
            <td>Druid II</td>
            <td>3600</td>
            {/* amount */}
            <td>900</td>
            {/* str */}
            <td>2700</td>
            {/* hp */}
            <td>{3600 * 2700}</td> {/* total health  */}
            <td>{3600 * 900}</td> {/* total strength  */}
            <td>
              <span className='meleebadges'>vs Melee +25%</span> : {3600 * 900 * 1.25}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <hr />

      <h3>Citadel elf 25</h3>
      <h2>
        NO <span className='mountbadges'>mounted</span>,{' '}
        <span className='rangedbadges'>ranged</span>, <span className='giantbadges'>giant</span>,{' '}
        <span className='dragonbadges'>dragon</span> or
        <span className='elementalbadges'>elemental</span>
      </h2>

      <table>
        <thead>
          <th>Stack</th>
          <th>Amount</th>
          <th>Base strength</th>
          <th>Base health</th>
          <th>Total health</th>
          <th>Regular Damage</th>
          <th>Dmg + bonus</th>
          <th>Dmg + bonus</th>
        </thead>
        <tbody>
          <tr>
            <td>Life dragon VII</td>
            <td>480</td>
            {/* amount */}
            <td>240000</td>
            {/* str */}
            <td>720000</td>
            {/* hp */}
            <td>{480 * 720000}</td> {/* total health  */}
            <td>{480 * 240000}</td> {/* total strength  */}
            <td>
              <span className='mountbadges'>vs Mounted +60%</span> {480 * 240000 * 1.6}
            </td>
            <td>
              <span className='giantbadges'>vs Giant +50%</span> {480 * 240000 * 1.5}
            </td>
          </tr>
          <tr>
            <td>Ent VI</td>
            <td>880</td>
            {/* amount */}
            <td>73000</td>
            {/* str */}
            <td>219000</td>
            {/* hp */}
            <td>{880 * 219000}</td> {/* total health  */}
            <td>{880 * 73000}</td> {/* total strength  */}
            <td>
              <span className='rangedbadges'>vs Ranged +55%</span> : {880 * 73000 * 1.55}
            </td>
            <td>
              <span className='dragonbadges'>vs Dragon +45%</span> : {880 * 73000 * 1.45}
            </td>
          </tr>
          <tr>
            <td>Bear V</td>
            <td>2400</td>
            {/* amount */}
            <td>22000</td>
            {/* str */}
            <td>66000</td>
            {/* hp */}
            <td>{2400 * 66000}</td> {/* total health  */}
            <td>{2400 * 22000}</td> {/* total strength  */}
            <td>
              <span className='mountbadges'>vs Mounted +70%</span> {2400 * 22000 * 1.7}
            </td>
            <td>
              <span className='elementalbadges'>vs Elemental +50%</span> : {2400 * 22000 * 1.5}
            </td>
          </tr>

          <tr>
            <td>Unicorn rider IV</td>
            <td>4300</td> {/* amount */}
            <td>8200</td> {/* str */}
            <td>24600</td> {/* hp */}
            <td>{4300 * 24600}</td> {/* total health  */}
            <td>{4300 * 8200}</td> {/* total strength  */}
            <td>
              <span className='rangedbadges'>vs Ranged +65%</span> : {4300 * 8200 * 1.65}
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Centaur III</td>
            <td>10000</td>
            {/* amount */}
            <td>2600</td>
            {/* str */}
            <td>7800</td>
            {/* hp */}
            <td>{10000 * 7800}</td> {/* total health  */}
            <td>{10000 * 2600}</td> {/* total strength  */}
            <td>
              <span className='rangedbadges'>vs Ranged +50%</span> : {10000 * 2600 * 1.5}
            </td>
            <td>
              <span className='siegebadges'>vs Siege +20%</span> : {10000 * 2600 * 1.2}
            </td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h3>Citadel elf 30</h3>
      <h2>
        NO <span className='mountbadges'>mounted</span>,{' '}
        <span className='rangedbadges'>ranged</span>, <span className='giantbadges'>giant</span>,{' '}
        <span className='dragonbadges'>dragon</span> or
        <span className='elementalbadges'>elemental</span>
      </h2>

      <table>
        <thead>
          <th>Stack</th>
          <th>Amount</th>
          <th>Base strength</th>
          <th>Base health</th>
          <th>Total health</th>
          <th>Regular Damage</th>
          <th>Dmg + bonus</th>
          <th>Dmg + bonus</th>
        </thead>
        <tbody>
          <tr>
            <td>Life dragon VII</td>
            <td>2300</td>
            {/* amount */}
            <td>240000</td>
            {/* str */}
            <td>720000</td>
            {/* hp */}
            <td>{2300 * 720000}</td> {/* total health  */}
            <td>{2300 * 240000}</td> {/* total strength  */}
            <td>
              <span className='mountbadges'>vs Mounted +60%</span> {2300 * 240000 * 1.6}
            </td>
            <td>
              <span className='giantbadges'>vs Giant +50%</span> {2300 * 240000 * 1.5}
            </td>
          </tr>
          <tr>
            <td>Ent VI</td>
            <td>4300</td>
            {/* amount */}
            <td>73000</td>
            {/* str */}
            <td>219000</td>
            {/* hp */}
            <td>{4300 * 219000}</td> {/* total health  */}
            <td>{4300 * 73000}</td> {/* total strength  */}
            <td>
              <span className='rangedbadges'>vs Ranged +55%</span> : {4300 * 73000 * 1.55}
            </td>
            <td>
              <span className='dragonbadges'>vs Dragon +45%</span> : {4300 * 73000 * 1.45}
            </td>
          </tr>
          <tr>
            <td>Bear V</td>
            <td>12000</td>
            {/* amount */}
            <td>22000</td>
            {/* str */}
            <td>66000</td>
            {/* hp */}
            <td>{12000 * 66000}</td> {/* total health  */}
            <td>{12000 * 22000}</td> {/* total strength  */}
            <td>
              <span className='mountbadges'>vs Mounted +70%</span> {12000 * 22000 * 1.7}
            </td>
            <td>
              <span className='elementalbadges'>vs Elemental +50%</span> : {12000 * 22000 * 1.5}
            </td>
          </tr>

          <tr>
            <td>Unicorn rider IV</td>
            <td>21000</td> {/* amount */}
            <td>8200</td> {/* str */}
            <td>24600</td> {/* hp */}
            <td>{21000 * 24600}</td> {/* total health  */}
            <td>{21000 * 8200}</td> {/* total strength  */}
            <td>
              <span className='rangedbadges'>vs Ranged +65%</span> : {21000 * 8200 * 1.65}
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Centaur III</td>
            <td>49000</td>
            {/* amount */}
            <td>2600</td>
            {/* str */}
            <td>7800</td>
            {/* hp */}
            <td>{49000 * 7800}</td> {/* total health  */}
            <td>{49000 * 2600}</td> {/* total strength  */}
            <td>
              <span className='rangedbadges'>vs Ranged +50%</span> : {49000 * 2600 * 1.5}
            </td>
            <td>
              <span className='siegebadges'>vs Siege +20%</span> : {49000 * 2600 * 1.2}
            </td>
          </tr>
        </tbody>
      </table>

      <hr />
      <br />

      <h3>Citadel cursed 20</h3>
      <h2>
        NO <span className='mountbadges'>mounted</span>,{' '}
        <span className='rangedbadges'>ranged</span>, <span className='giantbadges'>giant</span> or
        <span className='beastbadges'>beast</span>
      </h2>

      <table>
        <thead>
          <th>Stack</th>
          <th>Amount</th>
          <th>Base strength</th>
          <th>Base health</th>
          <th>Total health</th>
          <th>Regular Damage</th>
          <th>Dmg + bonus</th>
          <th>Dmg + bonus</th>
        </thead>
        <tbody>
          <tr>
            <td>cursed Dragon VII</td>
            <td>10</td>
            {/* amount */}
            <td>320000</td>
            {/* str */}
            <td>960000</td>
            {/* hp */}
            <td>{10 * 960000}</td> {/* total health  */}
            <td>{10 * 320000}</td> {/* total strength  */}
            <td>
              <span className='mountbadges'>vs Mounted +50%</span> {10 * 320000 * 1.5}
            </td>
            <td>
              <span className='giantbadges'>vs Giant +50%</span> {10 * 320000 * 1.5}
            </td>
          </tr>

          <tr>
            <td>Giant zombie V</td>
            <td>80</td>
            {/* amount */}
            <td>33000</td>
            {/* str */}
            <td>99000</td>
            {/* hp */}
            <td>{80 * 99000}</td> {/* total health  */}
            <td>{80 * 33000}</td> {/* total strength  */}
            <td>
              <span className='mountbadges'>vs Mounted +70%</span> {80 * 33000 * 1.7}
            </td>
            <td>
              <span className='beastbadges'>vs Beast +45%</span> : {80 * 33000 * 1.45}
            </td>
          </tr>
          <tr>
            <td>death rider III</td>
            <td>650</td>
            {/* amount */}
            <td>3200</td>
            {/* str */}
            <td>9600</td>
            {/* hp */}
            <td>{650 * 9600}</td> {/* total health  */}
            <td>{650 * 3200}</td> {/* total strength  */}
            <td>
              <span className='rangedbadges'>vs Ranged +50%</span> : {650 * 3200 * 1.5}
            </td>
            <td></td>
          </tr>
          <tr>
            <td>bull rider V</td>
            <td>54</td> {/* amount */}
            <td>29000</td> {/* str */}
            <td>87000</td> {/* hp */}
            <td>{54 * 87000}</td> {/* total health  */}
            <td>{54 * 29000}</td> {/* total strength  */}
            <td>
              <span className='rangedbadges'>vs Ranged +65%</span> : {54 * 29000 * 1.65}
            </td>
            <td></td>
          </tr>
          <tr>
            <td>wolf man II</td>
            <td>2900</td> {/* amount */}
            <td>360</td> {/* str */}
            <td>1080</td> {/* hp */}
            <td>{2900 * 1080}</td> {/* total health  */}
            <td>{2900 * 360}</td> {/* total strength  */}
            <td>
              <span className='mountbadges'>vs Mounted +65%</span> : {2900 * 360 * 1.65}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h3>Citadel cursed 25</h3>
      <h2>
        NO <span className='mountbadges'>mounted</span>,{' '}
        <span className='rangedbadges'>ranged</span>, <span className='giantbadges'>giant</span>,{' '}
        <span className='dragonbadges'>dragon</span> or
        <span className='beastbadges'>beast</span>
      </h2>

      <table>
        <thead>
          <th>Stack</th>
          <th>Amount</th>
          <th>Base strength</th>
          <th>Base health</th>
          <th>Total health</th>
          <th>Regular Damage</th>
          <th>Dmg + bonus</th>
          <th>Dmg + bonus</th>
        </thead>
        <tbody>
          <tr>
            <td>cursed Dragon VII</td>
            <td>120</td>
            {/* amount */}
            <td>320000</td>
            {/* str */}
            <td>960000</td>
            {/* hp */}
            <td>{120 * 960000}</td> {/* total health  */}
            <td>{120 * 320000}</td> {/* total strength  */}
            <td>
              <span className='mountbadges'>vs Mounted +50%</span> {120 * 320000 * 1.5}
            </td>
            <td>
              <span className='giantbadges'>vs Giant +50%</span> {120 * 320000 * 1.5}
            </td>
          </tr>
          <tr>
            <td>cursed Dendroid VI</td>
            <td>205</td>
            {/* amount */}
            <td>110000</td>
            {/* str */}
            <td>330000</td>
            {/* hp */}
            <td>{205 * 330000}</td> {/* total health  */}
            <td>{205 * 110000}</td> {/* total strength  */}
            <td>
              <span className='rangedbadges'>vs Ranged +55%</span> : {205 * 110000 * 1.55}
            </td>
            <td>
              <span className='dragonbadges'>vs Dragon +45%</span> : {205 * 110000 * 1.45}
            </td>
          </tr>
          <tr>
            <td>Giant zombie V</td>
            <td>540</td>
            {/* amount */}
            <td>33000</td>
            {/* str */}
            <td>99000</td>
            {/* hp */}
            <td>{540 * 99000}</td> {/* total health  */}
            <td>{540 * 33000}</td> {/* total strength  */}
            <td>
              <span className='mountbadges'>vs Mounted +70%</span> {540 * 33000 * 1.7}
            </td>
            <td>
              <span className='beastbadges'>vs Beast +45%</span> : {540 * 33000 * 1.45}
            </td>
          </tr>

          <tr>
            <td>bull rider V</td>
            <td>400</td> {/* amount */}
            <td>29000</td> {/* str */}
            <td>87000</td> {/* hp */}
            <td>{400 * 87000}</td> {/* total health  */}
            <td>{400 * 29000}</td> {/* total strength  */}
            <td>
              <span className='rangedbadges'>vs Ranged +65%</span> : {400 * 29000 * 1.65}
            </td>
            <td></td>
          </tr>
          <tr>
            <td>death rider III</td>
            <td>2750</td>
            {/* amount */}
            <td>3200</td>
            {/* str */}
            <td>9600</td>
            {/* hp */}
            <td>{2750 * 9600}</td> {/* total health  */}
            <td>{2750 * 3200}</td> {/* total strength  */}
            <td>
              <span className='rangedbadges'>vs Ranged +50%</span> : {2750 * 3200 * 1.5}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
