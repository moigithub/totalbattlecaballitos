import { getTroopBadges } from "./badges"
import { Citadel } from "./citadelData"

export const MonsterData = ({ monster }: { monster: Citadel }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className='px-1 py-0.5'>Stack</th>
          <th className='px-1 py-0.5'>Type</th>
          <th className='px-1 py-0.5'>Amount</th>
          <th className='px-1 py-0.5'>Total health</th>
          <th className='px-1 py-0.5'>Total strength</th>
          <th className='px-1 py-0.5'>Dmg + bonus</th>
        </tr>
      </thead>
      <tbody>
        {monster.stacks.map(stack => {
          const totalHealth = stack.unitsAmount * stack.unit.BASEHP
          const totalStrength = stack.unitsAmount * stack.unit.BASESTR

          return (
            <tr key={`stack${stack.unit.name}`}>
              <td className='px-1 py-0.5'>{stack.unit.name}</td>
              <td className='px-1 py-0.5'>{stack.unit.category}</td>
              <td className='px-1 py-0.5'>{stack.unitsAmount}</td>
              <td className='px-1 py-0.5'>{totalHealth}</td>
              <td className='px-1 py-0.5'>{totalStrength}</td>
              <td className='px-1 py-0.5'>
                {getTroopBadges(stack).map((data, i) => (
                  <div key={`badge+${i}`} className='flex flex-column'>
                    <div className='flex flex-row text-xs'>

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

      </tbody>
    </table>
  )
}