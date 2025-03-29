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
        <th>Stack</th>
        <th>Type</th>
        <th>Total health</th>
        <th>Regular Damage</th>
        <th>Dmg + bonus</th>
      </thead>
      <tbody>
        {target.stacks.map(stack => {
          return (
            <tr key={`stack${stack.unit.name}`}>
              <td> {stack.unitsAmount}</td>
              <td> {stack.unit.name}</td>
              <td> {stack.unit.category}</td>
              <td>{stack.unitsAmount * stack.unit.BASEHP}</td> {/* total health  */}
              <td>{stack.unitsAmount * stack.unit.BASESTR}</td> {/* total strength  */}
              <td>{getTroopBadges(stack)}</td>
            </tr>
          )
        })}
        <tr>
          <td></td>
          <td></td>
          <td>Total Dmg</td>
          <td>
            {target.stacks.reduce((dmg, stack) => dmg + stack.unitsAmount * stack.unit.BASESTR, 0)}
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}
