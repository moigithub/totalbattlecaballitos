import { useStackStore, Stack } from './guardStore'
import { ragnarokMagoDraug } from './monsters'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export const Card = ({ stack }: { stack: Stack }) => {
  // const army = useStackStore(state => state.army)
  // const setArmy = useStackStore(state => state.setArmy)
  // const addArmy = useStackStore(state => state.addArmy)
  // const resetAllStacks = useStackStore(state => state.resetAllStacks)
  // const bonus = useStackStore(state => state.bonus)
  // const getArmyLeadership = useStackStore(state => state.getArmyLeadership)
  // const getStackLeadership = useStackStore(state => state.getStackLeadership)
  // const updateMinSetup = useStackStore(state => state.updateMinSetup)
  const removeStack = useStackStore(state => state.removeStack)
  const resetStack = useStackStore(state => state.resetStack)
  const toggleLockMin = useStackStore(state => state.toggleLockMin)
  const addUnits = useStackStore(state => state.addUnits)
  const removeUnits = useStackStore(state => state.removeUnits)
  const getStackHealth = useStackStore(state => state.getStackHealth)
  const getStackStrength = useStackStore(state => state.getStackStrength)
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: stack.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div className='stack-card' ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <p className='stack-units'>{stack.units}</p>
      <p className='stack-name'>{stack.unit.name}</p>
      <p className='stack-health'>HP {getStackHealth(stack.id!)}</p>
      <p className='stack-strength'>
        STR {getStackStrength(stack.id!, ragnarokMagoDraug.category)}
      </p>
      <p className='stack-leadership'>Lead {stack.leadership}</p>
      <p className='stack-minSetup'>Min {stack.minSetup}</p>
      <p className='stack-limit'>Limit {stack.limit}</p>
      <div className='stack-action'>
        <button
          className='action-btn'
          onClick={() => {
            addUnits(stack.id!)
          }}
        >
          +
        </button>
        <button
          className='action-btn'
          onClick={() => {
            removeUnits(stack.id!)
          }}
        >
          -
        </button>
      </div>
      <div className='stack-config'>
        <label>lock Min</label>

        <input
          type='checkbox'
          checked={stack.lockMinSetup}
          onChange={() => {
            toggleLockMin(stack.id!)
          }}
        />
      </div>
      <div className='stack-delete'>
        <button className='remove-btn' onClick={() => removeStack(stack.id!)}>
          X
        </button>
      </div>
      <div className='stack-reset'>
        <button className='reset-btn' onClick={() => resetStack(stack.id!)}>
          C
        </button>
      </div>
      <span className='stack-id tiny'>(id.{stack.id})</span>
    </div>
  )
}
