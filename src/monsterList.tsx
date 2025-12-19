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
import { whoCanIAttack } from './utils'
import { BasicUnit } from './types'
import { useState } from 'react'

export const MonsterList = () => {
  const [myHp, setMyHp] = useState(1000000)
  const [myStr, setMyStr] = useState(1000000)
  const [useFilter, setUseFilter] = useState(false)

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
    mobCommonInfernoSquad45
  ]

  let monsterList = monsterSquads.map(squad => ({
    id: squad.id,
    vp: squad.vp,
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

  // monsterList.sort((a, b) => a.BASEHP - b.BASEHP)

  if (useFilter) {
    monsterList = monsterList.filter(merc => merc.maxStr <= myHp)
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
              checked={useFilter}
              className='text-black'
              onChange={() => setUseFilter(!useFilter)}
            />
          </label>
        </p>

        {useFilter && (
          <>
            <p className='p-3'>
              example: enter your (one) wyvern health/strength +bonus%, and this will show which
              squad can do lossless and how many wyverns need to send
            </p>

            <label>
              My HP
              <input
                type='text'
                value={myHp}
                className='text-black'
                onChange={e => {
                  // get only numbers from input
                  setMyHp(Number(e.target.value.replace(/[^0-9]/g, '')))
                }}
              />
            </label>

            <label>
              My STR
              <input
                type='text'
                value={myStr}
                className='text-black'
                onChange={e => setMyStr(Number(e.target.value.replace(/[^0-9]/g, '')))}
              />
            </label>
          </>
        )}
        {monsterList.map((merc, i) => {
          const unitsNeededToKill1Mob = Math.ceil(merc.maxHp / myStr)
          return (
            <div key={`monster${i}`} className='max-w-[500px] my-2 border border-purple-600'>
              <div className='flex justify-between'>
                <span className='font-bold text-xl'>{merc.id}</span>
                <span className='font-bold text-xl'>
                  {merc.svp} <span className='text-xs font-light'>VP</span>
                </span>
                {useFilter && (
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
