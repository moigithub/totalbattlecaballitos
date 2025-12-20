import PageTitle from './pageTitle'
import {
  mobCommonBarbarianSquad4,
  mobCommonBarbarianSquad9,
  mobCommonBarbarianSquad12,
  mobCommonBarbarianSquad15,
  mobCommonBarbarianSquad17,
  mobCommonBarbarianSquad18,
  mobCommonBarbarianSquad20,
  mobCommonBarbarianSquad21,
  mobCommonBarbarianSquad22,
  mobCommonBarbarianSquad23,
  mobCommonBarbarianSquad24,
  mobCommonBarbarianSquad25,
  mobCommonBarbarianSquad26,
  mobCommonBarbarianSquad27,
  mobCommonBarbarianSquad28,
  mobCommonBarbarianSquad29,
  mobCommonBarbarianSquad30,
  mobCommonBarbarianSquad31,
  mobCommonBarbarianSquad32,
  mobCommonBarbarianSquad33,
  mobCommonBarbarianSquad34,
  mobCommonBarbarianSquad35,
  mobCommonBarbarianSquad36,
  mobCommonBarbarianSquad38,
  mobCommonBarbarianSquad39,
  mobCommonBarbarianSquad40,
  mobCommonBarbarianSquad41,
  mobCommonBarbarianSquad43,
  mobCommonBarbarianSquad44,
  mobCommonBarbarianSquad45
} from './monsters'
import {
  mobCommonInfernoSquad5,
  mobCommonInfernoSquad10,
  mobCommonInfernoSquad13,
  mobCommonInfernoSquad15,
  mobCommonInfernoSquad17,
  mobCommonInfernoSquad19,
  mobCommonInfernoSquad20,
  mobCommonInfernoSquad21,
  mobCommonInfernoSquad22,
  mobCommonInfernoSquad23,
  mobCommonInfernoSquad24,
  mobCommonInfernoSquad25,
  mobCommonInfernoSquad26,
  mobCommonInfernoSquad27,
  mobCommonInfernoSquad28,
  mobCommonInfernoSquad29,
  mobCommonInfernoSquad30,
  mobCommonInfernoSquad31,
  mobCommonInfernoSquad32,
  mobCommonInfernoSquad33,
  mobCommonInfernoSquad34,
  mobCommonInfernoSquad35,
  mobCommonInfernoSquad37,
  mobCommonInfernoSquad38,
  mobCommonInfernoSquad39,
  mobCommonInfernoSquad40,
  mobCommonInfernoSquad42,
  mobCommonInfernoSquad43,
  mobCommonInfernoSquad44,
  mobCommonInfernoSquad45
} from './monstera'
import {
  mobCommonUndeadSquad1,
  mobCommonUndeadSquad6,
  mobCommonUndeadSquad11,
  mobCommonUndeadSquad13,
  mobCommonUndeadSquad16,
  mobCommonUndeadSquad17,
  mobCommonUndeadSquad19,
  mobCommonUndeadSquad21,
  mobCommonUndeadSquad22,
  mobCommonUndeadSquad23,
  mobCommonUndeadSquad24,
  mobCommonUndeadSquad25,
  mobCommonUndeadSquad26,
  mobCommonUndeadSquad27,
  mobCommonUndeadSquad28,
  mobCommonUndeadSquad29,
  mobCommonUndeadSquad30,
  mobCommonUndeadSquad31,
  mobCommonUndeadSquad32,
  mobCommonUndeadSquad33,
  mobCommonUndeadSquad34,
  mobCommonUndeadSquad35,
  mobCommonUndeadSquad36,
  mobCommonUndeadSquad37,
  mobCommonUndeadSquad38,
  mobCommonUndeadSquad39,
  mobCommonUndeadSquad41,
  mobCommonUndeadSquad42,
  mobCommonUndeadSquad43,
  mobCommonUndeadSquad44
} from './monsterb'
import { whoCanIAttack } from './utils'
import { BasicUnit, Stack } from './types'

import { useStackStore } from './stackStore'
import { useCommonMonsterStore } from './commonMonsterStore'

export const MonsterList = () => {
  const army = useStackStore(state => state.army)

  const setTroopStr = useCommonMonsterStore(state => state.setTroopStr)
  const setTroopHp = useCommonMonsterStore(state => state.setTroopHp)
  const toggleTroopStackHealthLimit = useCommonMonsterStore(
    state => state.toggleTroopStackHealthLimit
  )
  const { str, hp, useStackHealthLimit } = useCommonMonsterStore()

  const monsterSquads = [
    mobCommonBarbarianSquad4,
    mobCommonBarbarianSquad9,
    mobCommonBarbarianSquad12,
    mobCommonBarbarianSquad15,
    mobCommonBarbarianSquad17,
    mobCommonBarbarianSquad18,
    mobCommonBarbarianSquad20,
    mobCommonBarbarianSquad21,
    mobCommonBarbarianSquad22,
    mobCommonBarbarianSquad23,
    mobCommonBarbarianSquad24,
    mobCommonBarbarianSquad25,
    mobCommonBarbarianSquad26,
    mobCommonBarbarianSquad27,
    mobCommonBarbarianSquad28,
    mobCommonBarbarianSquad29,
    mobCommonBarbarianSquad30,
    mobCommonBarbarianSquad31,
    mobCommonBarbarianSquad32,
    mobCommonBarbarianSquad33,
    mobCommonBarbarianSquad34,
    mobCommonBarbarianSquad35,
    mobCommonBarbarianSquad36,
    mobCommonBarbarianSquad38,
    mobCommonBarbarianSquad39,
    mobCommonBarbarianSquad40,
    mobCommonBarbarianSquad41,
    mobCommonBarbarianSquad43,
    mobCommonBarbarianSquad44,
    mobCommonBarbarianSquad45,
    mobCommonInfernoSquad5,
    mobCommonInfernoSquad10,
    mobCommonInfernoSquad13,
    mobCommonInfernoSquad15,
    mobCommonInfernoSquad17,
    mobCommonInfernoSquad19,
    mobCommonInfernoSquad20,
    mobCommonInfernoSquad21,
    mobCommonInfernoSquad22,
    mobCommonInfernoSquad23,
    mobCommonInfernoSquad24,
    mobCommonInfernoSquad25,
    mobCommonInfernoSquad26,
    mobCommonInfernoSquad27,
    mobCommonInfernoSquad28,
    mobCommonInfernoSquad29,
    mobCommonInfernoSquad30,
    mobCommonInfernoSquad31,
    mobCommonInfernoSquad32,
    mobCommonInfernoSquad33,
    mobCommonInfernoSquad34,
    mobCommonInfernoSquad35,
    mobCommonInfernoSquad37,
    mobCommonInfernoSquad38,
    mobCommonInfernoSquad39,
    mobCommonInfernoSquad40,
    mobCommonInfernoSquad42,
    mobCommonInfernoSquad43,
    mobCommonInfernoSquad44,
    mobCommonInfernoSquad45,
    mobCommonUndeadSquad1,
    mobCommonUndeadSquad6,
    mobCommonUndeadSquad11,
    mobCommonUndeadSquad13,
    mobCommonUndeadSquad16,
    mobCommonUndeadSquad17,
    mobCommonUndeadSquad19,
    mobCommonUndeadSquad21,
    mobCommonUndeadSquad22,
    mobCommonUndeadSquad23,
    mobCommonUndeadSquad24,
    mobCommonUndeadSquad25,
    mobCommonUndeadSquad26,
    mobCommonUndeadSquad27,
    mobCommonUndeadSquad28,
    mobCommonUndeadSquad29,
    mobCommonUndeadSquad30,
    mobCommonUndeadSquad31,
    mobCommonUndeadSquad32,
    mobCommonUndeadSquad33,
    mobCommonUndeadSquad34,
    mobCommonUndeadSquad35,
    mobCommonUndeadSquad36,
    mobCommonUndeadSquad37,
    mobCommonUndeadSquad38,
    mobCommonUndeadSquad39,
    mobCommonUndeadSquad41,
    mobCommonUndeadSquad42,
    mobCommonUndeadSquad43,
    mobCommonUndeadSquad44
  ]

  let monsterList = monsterSquads.map(squad => ({
    id: squad.id,
    vp: squad.vp || 0,
    svp: squad.svp,
    stacks: squad.stacks.map(s => ({
      name: s.unit.name,
      category: s.unit.category,
      subGroup: s.unit.subGroup,
      str: s.unit.BASESTR * s.unitsAmount,
      hp: s.unit.BASEHP * s.unitsAmount,
      canAttack: whoCanIAttack(s.unit as BasicUnit).join(', '),
      vsRangedPercent: s.unit.vsRangedPercent,
      vsSiegePercent: s.unit.vsSiegePercent,
      vsBeastPercent: s.unit.vsBeastPercent,
      vsHumanPercent: s.unit.vsHumanPercent,
      vsMountedPercent: s.unit.vsMountedPercent,
      vsFlyingPercent: s.unit.vsFlyingPercent,
      vsMeleePercent: s.unit.vsMeleePercent,
      vsFortificationsPercent: s.unit.vsFortificationsPercent,
      vsGiantPercent: s.unit.vsGiantPercent,
      vsEpicPercent: s.unit.vsEpicPercent,
      vsElementalPercent: s.unit.vsElementalPercent,
      vsDragonPercent: s.unit.vsDragonPercent
    })),
    // from each stack, get the highest str and hp
    maxStr: Math.max(...squad.stacks.map(s => s.unit.BASESTR * s.unitsAmount)),
    maxHp: Math.max(...squad.stacks.map(s => s.unit.BASEHP * s.unitsAmount))
  }))

  monsterList.sort((a, b) => b.vp - a.vp)

  if (useStackHealthLimit) {
    monsterList = monsterList.filter(merc => merc.maxStr <= hp)
  }

  return (
    <>
      <PageTitle title='Monsters' />
      <div className='p-5 pt-[56px]'>
        <h2 className='font-bold text-2xl mb-2'>Monsters</h2>

        <p>
          <label>
            show only monster i can survive first hit{' '}
            <input
              type='checkbox'
              checked={useStackHealthLimit}
              className='text-black'
              onChange={() => toggleTroopStackHealthLimit()}
            />
          </label>
        </p>

        {useStackHealthLimit && (
          <>
            <p className='p-3'>
              example: enter your (one) wyvern health/strength +bonus%, and this will show which
              squad can do lossless and how many wyverns need to send
            </p>
            <p className='p-3'>
              by default it shows hp/str of the first troop selected on "stack calc"
            </p>

            <label>
              My HP
              <input
                type='text'
                value={hp}
                className='text-black'
                onChange={e => {
                  // get only numbers from input
                  const MyHp = Number(e.target.value.replace(/[^0-9]/g, ''))
                  setTroopHp(MyHp)
                }}
              />
            </label>

            <label>
              My STR
              <input
                type='text'
                value={str}
                className='text-black'
                onChange={e => {
                  const MyStr = Number(e.target.value.replace(/[^0-9]/g, ''))
                  setTroopStr(MyStr)
                }}
              />
            </label>

            <button
              onClick={() => {
                const firstArmyUnit: Stack = army[0]
                if (firstArmyUnit) {
                  const unitStrength = Number(
                    (firstArmyUnit.unit.BASESTR * (1 + firstArmyUnit.strBonus / 100)).toFixed(0)
                  )
                  setTroopStr(unitStrength)
                  const unitHealth = Number(
                    (firstArmyUnit.unit.BASEHP * (1 + firstArmyUnit.hpBonus / 100)).toFixed(0)
                  )
                  setTroopHp(unitHealth)
                }
              }}
              className='ml-5 focus:outline-none font-extrabold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300   rounded-lg text-xs px-10 py-2 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Use first troop value
            </button>
          </>
        )}
        {monsterList.map((merc, i) => {
          const unitsNeededToKill1Mob = Math.ceil(merc.maxHp / str)
          return (
            <div key={`monster${i}`} className='max-w-[500px] my-2 border border-purple-600'>
              <div className='flex justify-between'>
                <span className='font-bold text-xl'>{merc.id}</span>
                <span className='font-bold text-xl text-pink-500'>
                  {merc.svp} <span className='text-xs font-light'>VP</span>
                </span>
                {useStackHealthLimit && (
                  <p>
                    <span className='text-xs font-light'>to Kill this squad needs</span>{' '}
                    {unitsNeededToKill1Mob}
                  </p>
                )}
              </div>
              <table>
                <thead>
                  <tr>
                    <th className='p-1'>Name</th>
                    <th className='p-1'>Category</th>
                    <th className='p-1'>Can attack</th>
                    <th className='p-1'>STR</th>
                    <th className='p-1'>HP</th>
                  </tr>
                </thead>
                <tbody>
                  {merc.stacks.map((stack, i) => {
                    const categories = [stack.category, stack.subGroup].filter(Boolean).join(', ')
                    return (
                      <tr key={`stack${i}`}>
                        <td className='p-1'>{stack.name}</td>
                        <td className='p-1'>{categories}</td>
                        <td className='p-1'>{stack.canAttack}</td>
                        <td className='p-1'>{stack.str}</td>
                        <td className='p-1'>{stack.hp}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )
        })}
      </div>
    </>
  )
}

/*
por revisar

epicmonsterhunter 6,7,9
demonic salamander
eternal canonner
warden
wyvern
sphynx
*/
