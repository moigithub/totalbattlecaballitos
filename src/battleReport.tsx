import { Modal, ModalBody, ModalHeader } from 'flowbite-react'
import { ColumnResult } from './dos'

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
          <ReportContent report={attackReport} />
          <br />
          <hr />
          <br />
          <p className='py-3 font-bold text-2xl text-amber-300'>I attack second</p>
          <ReportContent report={defendReport} />
        </div>
      </ModalBody>
    </Modal>
  )
}

const ReportContent = ({ report }: { report: ColumnResult[] }) => {
  return report.map((data, i) => {
    // let bgColor = ''
    // if (data.bg == 'gray') {
    //   bgColor = 'bg-yellow-950'
    // } else if (data.bg == 'darkgray') {
    //   bgColor = 'bg-gray-800'
    // }
    const {
      isPlayerTurn,
      lineCounter,
      attackerUnits,
      attackerName,
      attackerUnitLost,
      isAttackerDead,
      oponentUnits,
      oponentName,
      oponentUnitLost,
      isOponentDead,
      damage,
      usedFeat
    } = data

    console.log('report data', data)

    const bgColor = isPlayerTurn
      ? 'bg-gradient-to-r from-zinc-800 from-10%  to-gray-700 to-80% '
      : 'bg-gradient-to-l from-zinc-800 from-10%  to-gray-700 to-80% '
    return (
      <div key={`rpt${i}`} className={`p-2 flex gap-1.5 items-center ${bgColor}`}>
        <div className='p-4'>{lineCounter}</div>
        <div className='flex flex-col justify-between shrink-0 relative border border-b-fuchsia-500 w-[200px] h-[80px]'>
          <div className='font-bold text-center px-2'>{attackerName}</div>
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
            <div className='absolute top-0  w-full h-full flex items-center justify-center text-red-600'>
              <span className='font-lg font-bold text-2xl'>Dead</span>
            </div>
          )}
        </div>
        <div className='font-extrabold text-5xl'>{isPlayerTurn ? '⇒' : '⇐'}</div>
        <div className='flex flex-col justify-between shrink-0  relative border border-b-fuchsia-500 w-[200px] h-[80px]'>
          <div className='font-bold text-center px-2'>{oponentName}</div>
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
              <span className='font-lg font-bold text-2xl'>Dead</span>
            </div>
          )}
        </div>
        <div>
          the {isPlayerTurn ? 'attacker' : 'monster'} squad dealt {damage} of damage{' '}
          {usedFeat ? '+ aditional damage' : ''}
        </div>
      </div>
    )
  })
}
