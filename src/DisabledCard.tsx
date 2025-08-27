import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { useStackStore } from './stackStore'
import { Stack } from './types'

export const DisabledCard = ({ stack }: { stack: Stack }) => {
  const removeStack = useStackStore(state => state.removeStack)
  const toggleDisable = useStackStore(state => state.toggleDisable)

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: stack.id })

  const style = {
    // transform: CSS.Transform.toString(transform),
    transform: CSS.Translate.toString(transform),
    transition
  }

  return (
    <div
      className='min-w-[820px]  my-[10px] gap-2 w-full grid grid-cols-[30px_320px_150px_auto_30px] md:grid-cols-[30px_320px_150px_auto_30px] border-4 border-gray-500 '
      ref={setNodeRef}
      style={style}
    >
      <div
        className='relative w-[20px] h-full mr-1 cursor-pointer bg-fuchsia-600 select-none touch-none'
        {...attributes}
        {...listeners}
      >
        <div className='drag-handler'></div>
        <p className='text-xs w-[30px] h-[18px]  z-1 -translate-y-2 text-green-200 tracking-tight font-bold origin-bottom-left rotate-90'>
          ⮜ ⮞
        </p>
      </div>

      <p className=' text-md md:text-2xl lg:text-3xl font-bold overflow-ellipsis'>
        {stack.unit.name}
      </p>

      <p className='text-lg text-red-700 font-bold mx-4'>DISABLED</p>
      <div className='stack-disabled'>
        <button
          className='shrink-0 bg-blue-500 text-white text-lg px-4 py-0.5 cursor-pointer  inline-flex items-center justify-center border border-gray-300 rounded-md   focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
          onClick={() => toggleDisable(stack.id!)}
        >
          Enable
        </button>
      </div>
      <div className='flex justify-end'>
        <button
          className='shrink-0 bg-red-500 text-white text-2xl p-3 cursor-pointer  inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
          onClick={() => removeStack(stack.id!)}
        >
          X
        </button>
      </div>
    </div>
  )
}
