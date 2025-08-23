import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { useStackStore } from './stackStore'
import { Stack } from './types'
import { whoCanIAttack } from './utils'

export const SmallCard = ({ stack }: { stack: Stack }) => {
  // const bonus = useStackStore(state => state.bonus)
  // const getArmyLeadership = useStackStore(state => state.getArmyLeadership)
  // const updateMinSetup = useStackStore(state => state.updateMinSetup)

  const removeStack = useStackStore(state => state.removeStack)
  // const resetStack = useStackStore(state => state.resetStack)
  // const toggleLockMin = useStackStore(state => state.toggleLockMin)
  const addUnits = useStackStore(state => state.addUnits)
  const removeUnits = useStackStore(state => state.removeUnits)
  const getStackHealth = useStackStore(state => state.getStackHealth)
  const getStackStrength = useStackStore(state => state.getStackStrength)
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: stack.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  const stackHealth = getStackHealth(stack.id!)
  const stackStrength = getStackStrength(stack.id!)

  return (
    <div className='stack-card-small' ref={setNodeRef} style={style}>
      <div
        className='handle w-full h-full mr-1 cursor-pointer bg-fuchsia-600 select-none touch-none relative'
        {...attributes}
        {...listeners}
      >
        <div className='drag-handler '></div>
        <p className='text-xs w-max z-1 text-green-200 tracking-tight font-bold origin-bottom-left rotate-90'>
          ⮜ ⮞
        </p>
      </div>
      <p className='stack-units font-bold text-md sm:text-2xl md:text-3xl flex justify-center items-center bg-green-800 text-gray-300 p-1 sm:p-2 md:p-4 mr-2 relative'>
        {stack.unitsAmount}
      </p>
      <p className='stack-name'>
        {stack.unit.name} <span className='stack-health-small'>{stackHealth.toFixed(0)}</span>
        <span> / </span>
        <span className='stack-strength-small'>{stackStrength.toFixed(2)}</span>
      </p>
      {/* {stack.unit.tipo === 'army' && <p className='stack-leadership'>Lead {stack.leadership}</p>}
      {stack.unit.tipo === 'monster' && <p className='stack-leadership'>Domi {stack.dominance}</p>}
      {stack.unit.tipo === 'merc' && <p className='stack-leadership'>Auth {stack.authority}</p>} */}

      <div className='stack-action flex justify-around items-center gap-5'>
        <button
          className='shrink-0 grow bg-gray-500  cursor-pointer  inline-flex items-center justify-center border border-gray-300 rounded-md h-5 min-w-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
          onClick={() => {
            addUnits(stack.id!, 1)
          }}
        >
          +
        </button>
        <button
          className='shrink-0 grow bg-gray-500  cursor-pointer  inline-flex items-center justify-center border border-gray-300 rounded-md h-5 min-w-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
          onClick={() => {
            removeUnits(stack.id!, 1)
          }}
        >
          -
        </button>
      </div>

      <div className='stack-delete flex justify-end'>
        <button
          className='shrink-0 bg-red-500 text-white text-2xl p-4 cursor-pointer  inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
          onClick={() => removeStack(stack.id!)}
        >
          X
        </button>
      </div>
      {/* <div className='stack-reset'>
        <button
          className='shrink-0 bg-blue-500 cursor-pointer  inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
          onClick={() => resetStack(stack.id!)}
        >
          C
        </button>
      </div> */}
      <div className='stack-attack-info'>
        {stack.unit.group}:{stack.unit.category} <span style={{ color: 'red' }}>vs</span>{' '}
        <span>{whoCanIAttack(stack.unit).join(',')}</span>
      </div>
    </div>
  )
}
