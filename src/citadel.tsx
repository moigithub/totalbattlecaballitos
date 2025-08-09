import { useState } from 'react'
import { getTroopBadges } from './badges'
import {
  Citadel,
  citadelc20,
  citadelc25,
  citadele10,
  citadele15,
  citadele20,
  citadele25,
  citadele30
} from './citadelData'
import { lvl17HeroicElfSquad } from './monsters'

export const CitadelData = ({ type }: { type: string }) => {
  const [selectedStr, setSelectedStr] = useState<string[]>([])
  const [selectedHp, setSelectedHp] = useState<string[]>([])

  let target: Citadel = citadele10
  switch (type) {
    case 'e10':
      target = citadele10
      break
    case 'e15':
      target = citadele15
      break
    case 'e20':
      target = citadele20
      break
    case 'e25':
      target = citadele25
      break
    case 'e30':
      target = citadele30
      break
    case 'c20':
      target = citadelc20
      break
    case 'c25':
      target = citadelc25
      break
    case 'lvl17HeroicElfSquad':
      target = lvl17HeroicElfSquad
  }

  const markStrTroop = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (!selectedStr.includes(e.target.value)) {
        setSelectedStr([...selectedStr, e.target.value])
      }
    } else {
      setSelectedStr(selectedStr.filter(troop => troop !== e.target.value))
    }
  }
  const markHpTroop = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (!selectedHp.includes(e.target.value)) {
        setSelectedHp([...selectedHp, e.target.value])
      }
    } else {
      setSelectedHp(selectedHp.filter(troop => troop !== e.target.value))
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Stack</th>
          <th>Type</th>
          <th>Total health</th>

          <th>Dmg + bonus</th>
        </tr>
      </thead>
      <tbody>
        {target.stacks.map(stack => {
          const totalHealth = stack.unitsAmount * stack.unit.BASEHP

          return (
            <tr key={`stack${stack.unit.name}`}>
              <td className='px-1 py-0.5'> {stack.unit.name}</td>
              <td className='px-1 py-0.5'>
                {' '}
                {[stack.unit.category, stack.unit.subGroup].filter(Boolean).join(', ')}
              </td>

              {/* total health  */}
              <td>
                <input type='checkbox' value={totalHealth.toString()} onChange={markHpTroop} />
                <span
                  className='px-1 py-0.5 text-gray-300 cursor-pointer hover:text-lime-400 hover:font-bold'
                  onClick={() => {
                    navigator.clipboard.writeText(totalHealth.toString())
                  }}
                >
                  {totalHealth.toLocaleString().replace(/,/g, '_')}
                </span>
              </td>

              {/* total strength  */}

              <td className='px-1 py-0.5'>
                {getTroopBadges(stack).map((data, i) => (
                  <div key={`badge+${i}`} className='flex flex-column'>
                    <div className='flex flex-row text-xs'>
                      <input
                        type='checkbox'
                        id={data.id + data.badge}
                        value={data.value.toString()}
                        onChange={markStrTroop}
                      />{' '}
                      {data.percent > 0 && (
                        <span className={data.badge}>
                          {data.desc} +{data.percent}%
                        </span>
                      )}
                      {data.percent === 0 && <span className={data.badge}>{data.desc}</span>}
                      <span>{data.value.toLocaleString().replace(/,/g, '_')}</span>
                    </div>
                  </div>
                ))}
              </td>
            </tr>
          )
        })}

        <tr>
          <td colSpan={4}>
            Selected damage:{' '}
            {selectedStr
              .map(str => {
                return str
              })
              .join(' + ')}
            {` = `}
            {selectedStr
              .reduce((total, str) => total + parseInt(str), 0)
              .toLocaleString()
              .replace(/,/g, '_')}
          </td>
        </tr>
        <tr>
          <td colSpan={4}>
            Selected Health:{' '}
            {selectedHp
              .map(Hp => {
                return Hp
              })
              .join(' + ')}
            {` = `}
            {selectedHp
              .reduce((total, Hp) => total + parseInt(Hp), 0)
              .toLocaleString()
              .replace(/,/g, '_')}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

interface StrData {
  id: string
  value: number
}
export const LargeCitadel = ({ citadel }: { citadel: Citadel }) => {
  const [selectedStr, setSelectedStr] = useState<StrData[]>([])
  const [selectedHp, setSelectedHp] = useState<string[]>([])

  const markStrTroop = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (!selectedStr.find(s => s.id === e.target.id)) {
        setSelectedStr([...selectedStr, { id: e.target.id, value: +e.target.value }])
      }
    } else {
      setSelectedStr(selectedStr.filter(s => s.id !== e.target.id))
    }
  }
  const markHpTroop = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (!selectedHp.includes(e.target.value)) {
        setSelectedHp([...selectedHp, e.target.value])
      }
    } else {
      setSelectedHp(selectedHp.filter(troop => troop !== e.target.value))
    }
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Stack</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Base strength</th>
          <th>Base health</th>

          <th>Total health</th>

          <th>Dmg + bonus</th>
        </tr>
      </thead>
      <tbody>
        {citadel.stacks.map(stack => {
          const totalHealth = stack.unitsAmount * stack.unit.BASEHP
          const totalStrength = stack.unitsAmount * stack.unit.BASESTR
          return (
            <tr key={`stack${stack.unit.name}`}>
              <td className='px-1 py-0.5'> {stack.unit.name}</td>
              <td className='px-1 py-0.5'>
                {' '}
                {[stack.unit.category, stack.unit.subGroup].filter(Boolean).join(', ')}
              </td>
              <td className='px-1 py-0.5'> {stack.unitsAmount}</td>
              {/* amount */}
              <td className='px-1 py-0.5'> {stack.unit.BASESTR}</td>
              {/* str */}
              <td className='px-1 py-0.5'> {stack.unit.BASEHP}</td>
              {/* total health  */}
              <td>
                <input type='checkbox' value={totalHealth.toString()} onChange={markHpTroop} />
                <span
                  className='px-1 py-0.5 text-gray-300 cursor-pointer hover:text-lime-400 hover:font-bold'
                  onClick={() => {
                    navigator.clipboard.writeText(totalHealth.toString())
                  }}
                >
                  {totalHealth.toLocaleString().replace(/,/g, '_')}
                </span>
              </td>

              {/* total strength  */}
              <td className='px-1 py-0.5'>
                {getTroopBadges(stack).map((data, i) => (
                  <div key={`badge+${i}`} className='flex flex-column'>
                    <div className='flex flex-row text-xs'>
                      <input
                        type='checkbox'
                        id={data.id + data.badge}
                        value={data.value.toString()}
                        onChange={markStrTroop}
                      />{' '}
                      {data.percent > 0 && (
                        <span
                          className={data.badge}
                          onClick={() => {
                            navigator.clipboard.writeText(totalStrength.toString())
                          }}
                        >
                          {data.desc} +{data.percent}%
                        </span>
                      )}
                      {data.percent === 0 && (
                        <span
                          className={data.badge}
                          onClick={() => {
                            navigator.clipboard.writeText(totalStrength.toString())
                          }}
                        >
                          {data.desc}
                        </span>
                      )}
                      <span>{data.value.toLocaleString().replace(/,/g, '_')}</span>
                    </div>
                  </div>
                ))}
              </td>
            </tr>
          )
        })}
        <tr>
          <td colSpan={10}>
            Selected damage:{' '}
            {selectedStr
              .map(dataStr => {
                return dataStr.value
              })
              .join(' + ')}
            {` = `}
            {selectedStr
              .reduce((total, strData) => total + strData.value, 0)
              .toLocaleString()
              .replace(/,/g, '_')}
          </td>
        </tr>
        <tr>
          <td colSpan={10}>
            Selected Health:{' '}
            {selectedHp
              .map(Hp => {
                return Hp
              })
              .join(' + ')}
            {` = `}
            {selectedHp
              .reduce((total, Hp) => total + parseInt(Hp), 0)
              .toLocaleString()
              .replace(/,/g, '_')}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
