import { useState, useEffect } from 'react'

import './App.css'

const mountG1 = {
  hp: 300,
  str: 100,
  leadership: 2,
  initiative: 10,
  vsRangedPercent: 65,
  vsSiegePercent: 54
}
const mountG2 = {
  hp: 54,
  str: 180,
  leadership: 2,
  initiative: 10,
  vsRangedPercent: 98,
  vsSiegePercent: 81
}
const mountG3 = {
  hp: 960,
  str: 320,
  leadership: 2,
  initiative: 10,
  vsRangedPercent: 146,
  vsSiegePercent: 122
}
const mountG4 = {
  hp: 1740,
  str: 580,
  leadership: 2,
  initiative: 10,
  vsRangedPercent: 219,
  vsSiegePercent: 182
}
const mountG5 = {
  hp: 3150,
  str: 1050,
  leadership: 2,
  initiative: 10,
  vsRangedPercent: 329,
  vsSiegePercent: 273
}

//doomsday nigromante str 720, hp 2160
//ancient/tinman arbalesteraAncestral str 720, hp 2160, ranged
// doomsday? supervisor str 6500, hp 19500, ranged
const ragnarokMagoDraug = {
  hp: 2160,
  str: 720,
  leadership: 8,
  initiative: 10,
  bonoFlyPercent: 50
}
const doomsdaySupervisor = {
  hp: 19500,
  str: 7265000,
  leadership: 8,
  initiative: 10,
  bonoFlyPercent: 50
}

function App() {
  // cuantos tropas puede llevar el capitan al ataque
  const [leadership, setLeadership] = useState(
    parseFloat(localStorage.getItem('leadership') || '0') || 3575
  )
  const [selectedEvent, setSelectedEvent] = useState('0')
  const [showRidersConfig, setShowRidersConfig] = useState(
    JSON.parse(localStorage.getItem('showRiderConfig') || 'false') || false
  )

  const [useG1Mount, setUseG1Mount] = useState(true)
  const [useG2Mount, setUseG2Mount] = useState(true)
  const [useG3Mount, setUseG3Mount] = useState(false)
  const [useG4Mount, setUseG4Mount] = useState(false)
  const [useG5Mount, setUseG5Mount] = useState(false)

  const [g1MountBonusStr, setG1MountBonusStr] = useState(
    parseFloat(localStorage.getItem('g1MountStr') || '0') || 65
  )
  const [g2MountBonusStr, setG2MountBonusStr] = useState(
    parseFloat(localStorage.getItem('g2MountStr') || '0') || 98
  )
  const [g3MountBonusStr, setG3MountBonusStr] = useState(
    parseFloat(localStorage.getItem('g3MountStr') || '0') || 146
  )
  const [g4MountBonusStr, setG4MountBonusStr] = useState(
    parseFloat(localStorage.getItem('g4MountStr') || '0') || 219
  )
  const [g5MountBonusStr, setG5MountBonusStr] = useState(
    parseFloat(localStorage.getItem('g5MountStr') || '0') || 329
  )

  const [bonusStr, setBonusStr] = useState(parseFloat(localStorage.getItem('gralStr') || '0') || 86)
  const [mobHealth, setmobHealth] = useState(0)

  const [g1MinCount, setG1MinCount] = useState(0)
  const [g2MinCount, setG2MinCount] = useState(0)
  const [g3MinCount, setG3MinCount] = useState(0)
  const [g4MinCount, setG4MinCount] = useState(0)
  const [g5MinCount, setG5MinCount] = useState(0)

  const [g1Mount, setG1Mount] = useState(0)
  const [g2Mount, setG2Mount] = useState(0)
  const [g3Mount, setG3Mount] = useState(0)
  const [g4Mount, setG4Mount] = useState(0)
  const [g5Mount, setG5Mount] = useState(0)

  const [g1Kills, setG1Kills] = useState(0)
  const [g2Kills, setG2Kills] = useState(0)
  const [g3Kills, setG3Kills] = useState(0)
  const [g4Kills, setG4Kills] = useState(0)
  const [g5Kills, setG5Kills] = useState(0)

  const [g1RiderStr, setG1RiderStr] = useState(0)
  const [g2RiderStr, setG2RiderStr] = useState(0)
  const [g3RiderStr, setG3RiderStr] = useState(0)
  const [g4RiderStr, setG4RiderStr] = useState(0)
  const [g5RiderStr, setG5RiderStr] = useState(0)

  useEffect(() => {
    let health = ragnarokMagoDraug.hp

    if (selectedEvent === '0') {
      health = ragnarokMagoDraug.hp
    } else if (selectedEvent === '1') {
      health = ragnarokMagoDraug.hp
    } else if (selectedEvent === '2') {
      health = ragnarokMagoDraug.hp
    } else if (selectedEvent === '3') {
      health = doomsdaySupervisor.hp
    }

    setmobHealth(health)
  }, [selectedEvent])

  const setAndSaveBonusStr = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const value = parseFloat(e.target.value)
    if (key === 'gral') {
      setBonusStr(value)
      localStorage.setItem('gralStr', value.toString())
    } else if (key === 'g1') {
      setG1MountBonusStr(value)
      localStorage.setItem('g1MountStr', value.toString())
    } else if (key === 'g2') {
      setG2MountBonusStr(parseInt(e.target.value))
      localStorage.setItem('g2MountStr', value.toString())
    } else if (key === 'g3') {
      setG3MountBonusStr(parseInt(e.target.value))
      localStorage.setItem('g3MountStr', value.toString())
    } else if (key === 'g4') {
      setG4MountBonusStr(parseInt(e.target.value))
      localStorage.setItem('g4MountStr', value.toString())
    } else if (key === 'g5') {
      setG5MountBonusStr(parseInt(e.target.value))
      localStorage.setItem('g5MountStr', value.toString())
    }

    calc()
  }

  const calc = () => {
    if (!useG1Mount && !useG2Mount && !useG3Mount && !useG4Mount && !useG5Mount) {
      // algo debe estar marcado
      return
    }

    const g1TotalStr = mountG1.str + ((bonusStr + g1MountBonusStr) * mountG1.str) / 100
    const g2TotalStr = mountG2.str + ((bonusStr + g2MountBonusStr) * mountG2.str) / 100
    const g3TotalStr = mountG3.str + ((bonusStr + g3MountBonusStr) * mountG3.str) / 100
    const g4TotalStr = mountG4.str + ((bonusStr + g4MountBonusStr) * mountG4.str) / 100
    const g5TotalStr = mountG5.str + ((bonusStr + g5MountBonusStr) * mountG5.str) / 100

    setG1RiderStr(g1TotalStr)
    setG2RiderStr(g2TotalStr)
    setG3RiderStr(g3TotalStr)
    setG4RiderStr(g4TotalStr)
    setG5RiderStr(g5TotalStr)

    // vs Ragnarok Mago Doug
    const g1MinCount = Math.ceil(mobHealth / g1TotalStr)
    const g2MinCount = Math.ceil(mobHealth / g2TotalStr)
    const g3MinCount = Math.ceil(mobHealth / g3TotalStr)
    const g4MinCount = Math.ceil(mobHealth / g4TotalStr)
    const g5MinCount = Math.ceil(mobHealth / g5TotalStr)
    setG1MinCount(g1MinCount)
    setG2MinCount(g2MinCount)
    setG3MinCount(g3MinCount)
    setG4MinCount(g4MinCount)
    setG5MinCount(g5MinCount)

    console.log('g1 min ', g1MinCount)
    console.log('g2 min ', g2MinCount)
    console.log('g3 min ', g3MinCount)
    console.log('g4 min ', g4MinCount)
    console.log('g5 min ', g5MinCount)

    let maxLeaderShip = leadership
    // if (useG1Mount || useG2Mount||useG3Mount) {
    //   maxLeaderShip=Math.floor(maxLeaderShip/2)
    // }
    console.log('max leadership ', maxLeaderShip / 2)

    let g1TroopsCount = 0
    let g2TroopsCount = 0
    let g3TroopsCount = 0
    let g4TroopsCount = 0
    let g5TroopsCount = 0

    let g1KillsCount = 0
    let g2KillsCount = 0
    let g3KillsCount = 0
    let g4KillsCount = 0
    let g5KillsCount = 0

    do {
      if (useG5Mount) {
        let mult = 1

        // if (useG4Mount) {
        //   mult = 2;
        // }
        maxLeaderShip = maxLeaderShip - g5MinCount * mountG5.leadership * mult
        if (maxLeaderShip < 0) break
        g5TroopsCount = g5TroopsCount + g5MinCount * mult
        g5KillsCount++
        // console.log('g5 calc', g5TroopsCount);
      }

      if (useG4Mount) {
        let mult = 1

        if (useG5Mount) {
          mult = 2
        }
        maxLeaderShip = maxLeaderShip - g4MinCount * mountG4.leadership * mult
        if (maxLeaderShip < 0) break
        g4TroopsCount = g4TroopsCount + g4MinCount * mult
        g4KillsCount++
        // console.log('g4 calc', g4TroopsCount);
      }

      if (useG3Mount) {
        let mult = 1

        if (useG4Mount) {
          mult = 2
        }
        if (useG5Mount) {
          mult = 4
        }
        maxLeaderShip = maxLeaderShip - g3MinCount * mountG3.leadership * mult
        if (maxLeaderShip < 0) break
        g3TroopsCount = g3TroopsCount + g3MinCount * mult
        g3KillsCount++
        // console.log('g3 calc', g3TroopsCount);
      }

      if (useG2Mount) {
        let mult = 1

        if (useG3Mount) {
          mult = 2
        }
        if (useG4Mount) {
          mult = 4
        }
        if (useG5Mount) {
          mult = 8
        }
        maxLeaderShip = maxLeaderShip - g2MinCount * mountG2.leadership * mult
        if (maxLeaderShip < 0) break
        g2TroopsCount = g2TroopsCount + g2MinCount * mult
        g2KillsCount = g2KillsCount + mult
        // console.log('g2 calc', g2TroopsCount);
      }

      if (useG1Mount) {
        let mult = 1
        if (useG2Mount) {
          mult = 2
        }
        if (useG3Mount) {
          mult = 4
        }
        if (useG4Mount) {
          mult = 8
        }
        if (useG5Mount) {
          mult = 16
        }
        maxLeaderShip = maxLeaderShip - g1MinCount * mountG1.leadership * mult
        if (maxLeaderShip < 0) break
        g1TroopsCount = g1TroopsCount + g1MinCount * mult
        g1KillsCount = g1KillsCount + mult
        // console.log('g1 calc', g1TroopsCount);
      }

      console.log('remaining leadership', maxLeaderShip)
    } while (maxLeaderShip > 0)
    console.log('troops count g1', g1TroopsCount)
    console.log('troops count g2', g2TroopsCount)
    console.log('troops count g3', g3TroopsCount)
    console.log('troops count g4', g4TroopsCount)
    console.log('troops count g5', g5TroopsCount)
    setG1Mount(g1TroopsCount)
    setG2Mount(g2TroopsCount)
    setG3Mount(g3TroopsCount)
    setG4Mount(g4TroopsCount)
    setG5Mount(g5TroopsCount)

    console.log('g1 min ', g1MinCount)
    console.log('g2 min ', g2MinCount)
    console.log('g3 min ', g3MinCount)
    console.log('g4 min ', g4MinCount)
    console.log('g5 min ', g5MinCount)
    console.log('expecting to kill with g1 ', g1KillsCount)
    console.log('expecting to kill with g2 ', g2KillsCount)
    console.log('expecting to kill with g3 ', g3KillsCount)
    console.log('expecting to kill with g4 ', g4KillsCount)
    console.log('expecting to kill with g5 ', g5KillsCount)
    setG1Kills(g1KillsCount)
    setG2Kills(g2KillsCount)
    setG3Kills(g3KillsCount)
    setG4Kills(g4KillsCount)
    setG5Kills(g5KillsCount)
    console.log(
      'total kills',
      g1KillsCount + g2KillsCount + g3KillsCount + g4KillsCount + g5KillsCount
    )
  }

  return (
    <>
      <h1>Troops calculation - totalbattle</h1>
      <div className='event'>
        <div>
          <label>Event </label>
          <select
            value={selectedEvent}
            onChange={e => {
              setSelectedEvent(e.target.value)
            }}
          >
            <option value='0'>Ragnarok/jörmungandr-fenrir/Doug Mage</option>
            <option value='1'>Ancient/Tinman/Arbalest</option>
            <option value='2'>720,2160/Nigromante</option>
            <option value='3'>6500,19500/Supervisor</option>
          </select>
        </div>
        <div>
          <span>Health per unit: </span>{' '}
          <input
            type='number'
            value={mobHealth}
            onChange={e => {
              setmobHealth(parseInt(e.target.value))
            }}
            required
          />
          <span className='small'>Change this value if you need a custom calculation health</span>
        </div>
      </div>
      <div className='container'>
        <div className='configbar'>
          <div className='card'>
            <label>Leadership </label>
            <input
              type='number'
              value={leadership}
              onChange={e => {
                const value = parseInt(e.target.value)
                setLeadership(value)
                localStorage.setItem('leadership', value.toString())
              }}
              required
            />
          </div>
          <div className='card'>
            <label>STR Bonus </label>
            <input
              type='number'
              value={bonusStr}
              step={0.1}
              onChange={e => {
                setAndSaveBonusStr(e, 'gral')
              }}
              required
            />
          </div>
        </div>
        <table>
          <tr>
            <th>Use</th>
            {showRidersConfig && <th>Str base</th>}
            <th>Str + bonus</th>
            <th>Min setup</th>
            <th>Max setup</th>
            <th>Kills expected</th>
          </tr>

          <tr>
            <td>
              <div className='card'>
                <label>G1</label>
                <input
                  type='checkbox'
                  checked={useG1Mount}
                  onChange={() => {
                    setUseG1Mount(!useG1Mount)
                  }}
                />
              </div>
            </td>
            {showRidersConfig && (
              <td>
                <input
                  type='number'
                  step={0.1}
                  value={g1MountBonusStr}
                  onChange={e => {
                    setAndSaveBonusStr(e, 'g1')
                  }}
                />
              </td>
            )}
            <td>{g1RiderStr}</td>
            <td>{g1MinCount}</td>
            <td className='bright'>{g1Mount}</td>
            <td>{g1Kills}</td>
          </tr>

          <tr>
            <td>
              <div className='card'>
                <label>G2</label>
                <input
                  type='checkbox'
                  checked={useG2Mount}
                  onChange={() => {
                    setUseG2Mount(!useG2Mount)
                  }}
                />
              </div>
            </td>
            {showRidersConfig && (
              <td>
                <input
                  type='number'
                  step={0.1}
                  value={g2MountBonusStr}
                  onChange={e => {
                    setAndSaveBonusStr(e, 'g2')
                  }}
                />
              </td>
            )}
            <td>{g2RiderStr}</td>
            <td>{g2MinCount}</td>
            <td className='bright'>{g2Mount}</td> <td>{g2Kills}</td>
          </tr>

          <tr>
            <td>
              <div className='card'>
                <label>G3</label>
                <input
                  type='checkbox'
                  checked={useG3Mount}
                  onChange={() => {
                    setUseG3Mount(!useG3Mount)
                  }}
                />
              </div>
            </td>
            {showRidersConfig && (
              <td>
                <input
                  type='number'
                  step={0.1}
                  value={g3MountBonusStr}
                  onChange={e => {
                    setAndSaveBonusStr(e, 'g3')
                  }}
                />
              </td>
            )}
            <td>{g3RiderStr}</td>
            <td>{g3MinCount}</td>
            <td className='bright'>{g3Mount}</td> <td>{g3Kills}</td>
          </tr>

          <tr>
            <td>
              <div className='card'>
                <label>G4</label>
                <input
                  type='checkbox'
                  checked={useG4Mount}
                  onChange={() => {
                    setUseG4Mount(!useG4Mount)
                  }}
                />
              </div>
            </td>
            {showRidersConfig && (
              <td>
                <input
                  type='number'
                  step={0.1}
                  value={g4MountBonusStr}
                  onChange={e => {
                    setAndSaveBonusStr(e, 'g4')
                  }}
                />
              </td>
            )}
            <td>{g4RiderStr}</td>
            <td>{g4MinCount}</td>
            <td className='bright'>{g4Mount}</td> <td>{g4Kills}</td>
          </tr>

          <tr>
            <td>
              <div className='card'>
                <label>G5</label>
                <input
                  type='checkbox'
                  checked={useG5Mount}
                  onChange={() => {
                    setUseG5Mount(!useG5Mount)
                  }}
                />
              </div>
            </td>
            {showRidersConfig && (
              <td>
                <input
                  type='number'
                  step={0.1}
                  value={g5MountBonusStr}
                  onChange={e => {
                    setAndSaveBonusStr(e, 'g5')
                  }}
                />
              </td>
            )}
            <td>{g5RiderStr}</td>
            <td>{g5MinCount}</td>
            <td className='bright'>{g5Mount}</td> <td>{g5Kills}</td>
          </tr>
          <tr style={{ backgroundColor: 'purple' }}>
            <td></td> <td></td>
            <td>Total</td>
            {g1Mount * mountG1.leadership +
              g2Mount * mountG2.leadership +
              g3Mount * mountG3.leadership +
              g4Mount * mountG4.leadership +
              g5Mount * mountG5.leadership}
            <td>{g1Kills + g2Kills + g3Kills + g4Kills + g5Kills}</td>
          </tr>
        </table>
      </div>
      <div className='card'>
        <label>Show config</label>
        <input
          type='checkbox'
          checked={showRidersConfig}
          onChange={() => {
            setShowRidersConfig(!showRidersConfig)
            localStorage.setItem('showRiderConfig', JSON.stringify(showRidersConfig))
          }}
        />
      </div>
      <button className='gobtn' onClick={calc}>
        CALCULATE
      </button>

      <h6>riders goes against Doug Mage, which is the weakest monster</h6>
      <br />
      <hr />
      <p>LOAD ALL your bonuses/buff (vip, personal-&gt;strenght, etc), before use this</p>
      <p>
        you can find the bonus value on{' '}
        <span>
          <h6>Barracks -&gt; Guardsmen -&gt; (any) Rider</h6>
        </span>
      </p>
      <small>put more points on strength</small>
      <hr />
      <p>we send higher amount of G1, so they attack (or get attacked) first</p>
      <p>because they are cheaper/faster to rebuild</p>
      <p>the recomendation is to use 2 groups: example g1 and g2</p>
      <p>
        because if you get attacked first and you sent only one group, you will not get any
        kills/exp
      </p>
      <p>
        if send two groups, and the first group get killed, the second group will get you experience
      </p>
      <hr />
      <p>* use 3 groups only if you have a bigger player on raid with many groups/stacks</p>
      <hr />
      <p>
        didnt test because i dont have G4 yet, but using G4 or bigger might not go against Doug
        Mage, because too much power/str vs Doug Mage life
      </p>
    </>
  )
}

export default App
