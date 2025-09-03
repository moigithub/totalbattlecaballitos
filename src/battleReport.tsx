import { Modal, ModalBody, ModalHeader } from 'flowbite-react'
import { ColumnResult } from './helpers'

export const BattleReport = ({
  attackReport = [],
  defendReport = [],
  title = '',
  open = true,
  onOpen
}: {
  attackReport: ColumnResult[]
  defendReport: ColumnResult[]
  title: string
  open: boolean
  onOpen: (status: boolean) => void
}) => {
  return (
    <Modal
      show={open}
      size='5xl'
      position={'center'}
      popup
      dismissible
      onClose={() => onOpen(false)}
    >
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>
        <div className='p-4 w-full'>
          <p>NO Walls or double damage are considered</p>
          <p className='py-3 font-bold text-2xl text-amber-300'>I attack first</p>
          <ReportContentAtkFirst report={attackReport} />
          <br />
          <hr />
          <br />
          <p className='py-3 font-bold text-2xl text-amber-300'>I attack second</p>
          <ReportContentAtkSecond report={defendReport} />
        </div>
      </ModalBody>
    </Modal>
  )
}

const ReportContentAtkFirst = ({ report }: { report: ColumnResult[] }) => {
  return report.map((data, i) => {
    const {
      isPlayerTurn,
      lineCounter,
      attackerUnits,
      attackerName,
      attacker,
      attackerUnitLost,
      isAttackerDead,
      oponentUnits,
      oponentName,
      opponent,
      oponentUnitLost,
      isOponentDead,
      damage,
      acummulatedDamage,
      usedFeat,
      attackReason
    } = data

    const bgColor = isPlayerTurn
      ? 'bg-gradient-to-r from-gray-800 from-10%  to-gray-700 to-80% '
      : 'bg-gradient-to-l from-gray-800 from-10%  to-gray-700 to-80% '

    const neededHpBonusToSurvive =
      Math.ceil(((acummulatedDamage * 100) / attacker.unit.BASEHP - 100) * 100) / 100

    return (
      <div key={`rpt${i}`} className={`p-2 flex gap-1.5 items-center ${bgColor}`}>
        <div className='p-4'>{lineCounter}</div>
        <div className='flex flex-col shrink-0 relative border border-fuchsia-500/80 w-[200px] h-[80px]'>
          <div className='font-bold text-center px-2'>{attackerName}</div>
          <div className='text-xs text-center text-red-600'>
            HP: {attackerUnits * attacker.unit.BASEHP * (1 + (attacker.unit?.hpBonus ?? 0) / 100)}
          </div>
          <div className='text-xs text-center text-green-600'>
            STR:{' '}
            {attackerUnits * attacker.unit.BASESTR * (1 + (attacker.unit?.strBonus ?? 0) / 100)}
          </div>
          <div className='grow'></div>
          <div>
            <div className='text-right px-2 text-white text-xs bg-gradient-to-r from-transparent from-30% via-gray-700 via-60% to-gray-900 to-100% '>
              {attackerUnits}
            </div>
            {attackerUnitLost > 0 && (
              <div className='flex justify-between px-2 text-xs bg-red-500 text-white'>
                <span>X</span> {attackerUnitLost}
              </div>
            )}
          </div>
          {isAttackerDead && (
            <div className='absolute top-0  w-full h-full flex items-center justify-center text-red-600 '>
              {/* <span className='font-lg font-bold text-2xl'>Dead</span>
               */}
              <div className='bg-gray-900/70 absolute w-full h-full'></div>
              <img className='z-1' src='./cross.png' alt='dead' width={60} height={60} />
            </div>
          )}
        </div>
        <div className='font-extrabold text-5xl'>{isPlayerTurn ? '⇒' : '⇐'}</div>
        <div className='flex flex-col  shrink-0  relative border border-fuchsia-500/80 w-[200px] h-[80px]'>
          <div className='font-bold text-center px-2'>{oponentName}</div>
          <div className='text-xs text-center text-red-600'>
            HP: {oponentUnits * opponent.unit.BASEHP * (1 + (opponent.unit?.hpBonus ?? 0) / 100)}
          </div>
          <div className='text-xs text-center text-red-600'>
            STR: {oponentUnits * opponent.unit.BASESTR * (1 + (opponent.unit?.strBonus ?? 0) / 100)}
          </div>
          <div className='grow'></div>
          <div>
            <div className='text-right px-2 text-white text-xs bg-gradient-to-r from-transparent from-30% via-gray-700 via-60% to-gray-900 to-100% '>
              {oponentUnits}
            </div>
            {oponentUnitLost > 0 && (
              <div className='flex justify-between px-2 text-xs bg-red-500 text-white'>
                <span>X</span> {oponentUnitLost}
              </div>
            )}
          </div>
          {isOponentDead && (
            <div className='absolute  top-0 w-full h-full flex items-center justify-center text-red-600'>
              {/* <span className='font-lg font-bold text-2xl'>Dead</span>
               */}
              <div className='bg-gray-900/70 absolute w-full h-full'></div>
              <img className='z-1' src='./cross.png' alt='dead' width={60} height={60} />
            </div>
          )}
        </div>
        <div>
          <p>
            the {isPlayerTurn ? 'attacker' : 'monster'} squad dealt {damage.toFixed(2)} of damage{' '}
            {usedFeat ? '+ aditional damage' : ''}
          </p>
          <p className='text-xs text-red-600'>
            {acummulatedDamage > 0 ? `(accum dmg: ${acummulatedDamage.toFixed(2)})` : ''}
          </p>
          <p className='text-xs text-cyan-500'>
            {attackerUnitLost > 0 &&
              acummulatedDamage > 0 &&
              `(need ${neededHpBonusToSurvive}% hp to survive)`}
          </p>
          <p className='text-xs text-green-400'>{attackReason} </p>
        </div>
      </div>
    )
  })
}

const ReportContentAtkSecond = ({ report }: { report: ColumnResult[] }) => {
  return report.map((data, i) => {
    const {
      isPlayerTurn,
      lineCounter,
      attackerUnits,
      attackerName,
      attacker,
      attackerUnitLost,
      isAttackerDead,
      oponentUnits,
      oponentName,
      opponent,
      oponentUnitLost,
      isOponentDead,
      damage,
      acummulatedDamage,
      usedFeat,
      attackReason
    } = data

    const bgColor = isPlayerTurn
      ? 'bg-gradient-to-r from-gray-800 from-10%  to-gray-700 to-80% '
      : 'bg-gradient-to-l from-gray-800 from-10%  to-gray-700 to-80% '

    const neededHpBonusToSurvive =
      Math.ceil(((acummulatedDamage * 100) / opponent.unit.BASEHP - 100) * 100) / 100

    return (
      <div key={`rpt${i}`} className={`p-2 flex gap-1.5 items-center ${bgColor}`}>
        <div className='p-4'>{lineCounter}</div>
        <div className='flex flex-col shrink-0 relative border border-fuchsia-500/80 w-[200px] h-[80px]'>
          <div className='font-bold text-center px-2'>{oponentName}</div>
          <div className='text-xs text-center text-red-600'>
            HP: {oponentUnits * opponent.unit.BASEHP * (1 + (opponent.unit?.hpBonus ?? 0) / 100)}
          </div>
          <div className='text-xs text-center text-red-600'>
            STR: {oponentUnits * opponent.unit.BASESTR * (1 + (opponent.unit?.strBonus ?? 0) / 100)}
          </div>
          <div className='grow'></div>
          <div>
            <div className='text-right px-2 text-white text-xs bg-gradient-to-r from-transparent from-30% via-gray-700 via-60% to-gray-900 to-100% '>
              {oponentUnits}
            </div>
            {oponentUnitLost > 0 && (
              <div className='flex justify-between px-2 text-xs bg-red-500 text-white'>
                <span>X</span> {oponentUnitLost}
              </div>
            )}
          </div>
          {isOponentDead && (
            <div className='absolute top-0  w-full h-full flex items-center justify-center text-red-600'>
              {/* <span className='font-lg font-bold text-2xl'>Dead</span>
               */}
              <div className='bg-gray-900/70 absolute  w-full h-full'></div>
              <img className='z-1' src='./cross.png' alt='dead' width={60} height={60} />
            </div>
          )}
        </div>
        <div className='font-extrabold text-5xl'>{isPlayerTurn ? '⇐' : '⇒'}</div>
        <div className='flex flex-col shrink-0  relative border border-fuchsia-500/80 w-[200px] h-[80px]'>
          <div className='font-bold text-center px-2'>{attackerName}</div>
          <div className='text-xs text-center text-red-600'>
            HP: {attackerUnits * attacker.unit.BASEHP * (1 + (attacker.unit?.hpBonus ?? 0) / 100)}
          </div>
          <div className='text-xs text-center text-red-600'>
            STR:{' '}
            {attackerUnits * attacker.unit.BASESTR * (1 + (attacker.unit?.strBonus ?? 0) / 100)}
          </div>
          <div className='grow'></div>
          <div>
            <div className='text-right px-2 text-white text-xs bg-gradient-to-r from-transparent from-30% via-gray-700 via-60% to-gray-900 to-100% '>
              {attackerUnits}
            </div>
            {attackerUnitLost > 0 && (
              <div className='flex justify-between px-2 text-xs bg-red-500 text-white'>
                <span>X</span> {attackerUnitLost}
              </div>
            )}
          </div>
          {isAttackerDead && (
            <div className='absolute  top-0 w-full h-full flex items-center justify-center text-red-600'>
              {/* <span className='font-lg font-bold text-2xl'>Dead</span>
               */}
              <div className='bg-gray-900/70 absolute w-full h-full'></div>
              <img className='z-1' src='./cross.png' alt='dead' width={60} height={60} />
            </div>
          )}
        </div>
        <div>
          <p>
            the {isPlayerTurn ? 'attacker' : 'monster'} squad dealt {damage.toFixed(2)} of damage{' '}
            {usedFeat ? '+ aditional damage' : ''}
          </p>
          <p className='text-xs text-red-600'>
            {acummulatedDamage > 0 ? `(accum dmg: ${acummulatedDamage.toFixed(2)})` : ''}
          </p>
          <p className='text-xs text-cyan-500'>
            {oponentUnitLost > 0 &&
              acummulatedDamage > 0 &&
              `(need ${neededHpBonusToSurvive}% hp to survive)`}
          </p>
          <p className='text-xs text-green-400'>{attackReason} </p>
        </div>
      </div>
    )
  })
}
