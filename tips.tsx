import { GapsTip } from './tips/gaps'
import { HPBonusTip } from './tips/HPBonus'
import { STRLimitTip } from './tips/STRLimit'
import { UnitLimitTip } from './tips/UnitLimit'
import { HealthLimitTip } from './tips/HealthLimit'
import { useState } from 'react'
import { STRBonusTip } from './tips/STRBonus'
import { TankMeatshieldTip } from './tips/TankMeatshield'
import { CardOrderingTip } from './tips/CardOrdering'
import { ArmySearchFilterTip } from './tips/ArmySearchFilter'
import { UnitStatsTip } from './tips/UnitStats'
import { CitadelCatapultsTip } from './tips/CitadelCatapults'
import { CombatSystemTip } from './tips/CombatSystem'

const myMin = 0
const myMax = 11

export const Tips = () => {
  const [whichTip, setWichTip] = useState(() => {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin)
  })

  return (
    <div className='w-full p-4 bg-gray-800 flex flex-col items-start'>
      <button
        className='bg-purple-700 text-white px-1 py-2 rounded-lg mt-4 self-end'
        onClick={() => setWichTip(wichTip => (wichTip + 1) % (myMax + 1))}
      >
        Next tip
      </button>
      {whichTip === 0 && <GapsTip />}
      {whichTip === 1 && <HPBonusTip />}
      {whichTip === 2 && <STRLimitTip />}
      {whichTip === 3 && <UnitLimitTip />}
      {whichTip === 4 && <HealthLimitTip />}
      {whichTip === 5 && <STRBonusTip />}
      {whichTip === 6 && <TankMeatshieldTip />}
      {whichTip === 7 && <CardOrderingTip />}
      {whichTip === 8 && <ArmySearchFilterTip />}
      {whichTip === 9 && <UnitStatsTip />}
      {whichTip === 10 && <CitadelCatapultsTip />}
      {whichTip === 11 && <CombatSystemTip />}
    </div>
  )
}
