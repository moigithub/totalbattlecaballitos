import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, useSortable } from '@dnd-kit/sortable'
import { useStackStore } from './stackStore'
import { Stack } from './types'
import { cn } from './utils'
import { CSS } from '@dnd-kit/utilities'

export const MiniCardSorter = () => {
  const setArmy = useStackStore(state => state.setArmy)
  const { army } = useStackStore()

  const handleDrag = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const index1 = army.findIndex(stack => stack.id === active.id)
      const index2 = army.findIndex(stack => stack.id === over.id)
      setArmy(arrayMove(army, index1, index2))
    }
  }

  return (
    <div className='flex flex-col'>
      <DndContext onDragEnd={handleDrag} /*sensors={sensors}*/>
        <SortableContext items={army}>
          {army.map(stack => {
            return <MiniCardSort stack={stack} key={stack.id} />
          })}
        </SortableContext>
      </DndContext>
    </div>
  )
}

const MiniCardSort = ({ stack }: { stack: Stack }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: stack.id })
  const style = {
    // transform: CSS.Transform.toString(transform),
    transform: CSS.Translate.toString(transform),
    transition
  }

  return (
    <div
      className={cn(
        ' text-gray-900 border border-blue-700 cursor-pointer select-none touch-none',
        stack.disabled ? 'bg-gray-600' : 'bg-green-500'
      )}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className='flex flex-nowrap  text-ellipsis'>
        <span className='px-1 bg-purple-700 '>↕</span> <span className='px-1'>{stack.unit.name}</span>
      </div>
    </div>
  )
}
