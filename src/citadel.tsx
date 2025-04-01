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

export const CitadelData = ({ type }: { type: string }) => {
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
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Stack</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Total health</th>
          <th>Regular Damage</th>
          <th>Dmg + bonus</th>
        </tr>
      </thead>
      <tbody>
        {target.stacks.map(stack => {
          const totalHealth = stack.unitsAmount * stack.unit.BASEHP
          const totalStrength = stack.unitsAmount * stack.unit.BASESTR
          return (
            <tr key={`stack${stack.unit.name}`}>
              <td className='px-1 py-0.5'> {stack.unit.name}</td>
              <td className='px-1 py-0.5'> {stack.unit.category}</td>
              <td className='px-1 py-0.5'> {stack.unitsAmount}</td>
              <td
                className='px-1 py-0.5 text-gray-300 cursor-pointer hover:text-lime-400 hover:font-bold'
                onClick={() => {
                  navigator.clipboard.writeText(totalHealth.toFixed(2))
                }}
              >
                {totalHealth.toLocaleString().replace(/,/g, '_')}
              </td>
              {/* total health  */}
              <td
                className='px-1 py-0.5  text-gray-300 cursor-pointer hover:text-lime-400 hover:font-bold'
                onClick={() => {
                  navigator.clipboard.writeText(totalStrength.toFixed(2))
                }}
              >
                {totalStrength.toLocaleString().replace(/,/g, '_')}
              </td>
              {/* total strength  */}
              <td className='px-1 py-0.5'>{getTroopBadges(stack)}</td>
            </tr>
          )
        })}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td className='px-1 py-0.5'>Total Dmg</td>
          <td className='px-1 py-0.5'>
            {target.stacks
              .reduce((dmg, stack) => dmg + stack.unitsAmount * stack.unit.BASESTR, 0)
              .toLocaleString()
              .replace(/,/g, '_')}
          </td>
          <td></td>
        </tr>
        <tr>
          <td colSpan={6}>
            {target.stacks
              .map((stack, i) => {
                if (i % 2 === 0) {
                  return `${stack.unitsAmount * stack.unit.BASESTR}`
                }
              })
              .filter(n => !!n)
              .join(' + ')}
            {` = `}
            {target.stacks
              .reduce(
                (dmg, stack, i) =>
                  i % 2 === 0 ? dmg + stack.unitsAmount * stack.unit.BASESTR : dmg,
                0
              )
              .toLocaleString()
              .replace(/,/g, '_')}
          </td>
        </tr>
        <tr>
          <td colSpan={6}>
            {target.stacks
              .map((stack, i) => {
                if (i % 2 === 1) {
                  return `${stack.unitsAmount * stack.unit.BASESTR}`
                }
              })
              .filter(n => !!n)
              .join(' + ')}
            {` = `}
            {target.stacks
              .reduce(
                (dmg, stack, i) =>
                  i % 2 === 1 ? dmg + stack.unitsAmount * stack.unit.BASESTR : dmg,
                0
              )
              .toLocaleString()
              .replace(/,/g, '_')}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export const LargeCitadel = ({ citadel }: { citadel: Citadel }) => {
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
          <th>Regular Damage</th>
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
              <td className='px-1 py-0.5'> {stack.unit.category}</td>
              <td className='px-1 py-0.5'> {stack.unitsAmount}</td>
              {/* amount */}
              <td className='px-1 py-0.5'> {stack.unit.BASESTR}</td>
              {/* str */}
              <td className='px-1 py-0.5'> {stack.unit.BASEHP}</td>
              {/* hp */}
              <td
                className='px-1 py-0.5 text-gray-300 cursor-pointer hover:text-lime-400 hover:font-bold'
                onClick={() => {
                  navigator.clipboard.writeText(totalHealth.toFixed(2))
                }}
              >
                {totalHealth.toLocaleString().replace(/,/g, '_')}
              </td>{' '}
              {/* total health  */}
              <td
                className='px-1 py-0.5 text-gray-300  cursor-pointer hover:text-lime-400 hover:font-bold'
                onClick={() => {
                  navigator.clipboard.writeText(totalStrength.toFixed(2))
                }}
              >
                {totalStrength.toLocaleString().replace(/,/g, '_')}
              </td>
              {/* total strength  */}
              <td className='px-1 py-0.5'>{getTroopBadges(stack)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
