import { getTroopBadges } from './badges'
import {
  citadelc20,
  citadelc25,
  citadele10,
  citadele15,
  citadele20,
  citadele25,
  citadele30
} from './citadelData'

export const Citadel = ({ type }: { type: string }) => {
  let target = citadele10
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
            <tr key={`stack${stack.troop.name}`}>
              <td> {stack.troop.name}</td>
              <td> {stack.troop.type}</td>
              <td>{stack.amount * stack.troop.baseHp}</td> {/* total health  */}
              <td>{stack.amount * stack.troop.baseStr}</td> {/* total strength  */}
              <td>{getTroopBadges(stack)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
