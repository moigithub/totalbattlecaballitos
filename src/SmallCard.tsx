import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { useStackStore } from './stackStore'
import { Stack } from './types'
import { whoCanIAttack } from './utils'

export const SmallCard = ({ stack }: { stack: Stack; isFirst: boolean }) => {
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
  // const toggleLockMin = useStackStore(state => state.toggleLockMin)
  const addUnits = useStackStore(state => state.addUnits)
  const removeUnits = useStackStore(state => state.removeUnits)
  // const reduceSacrificeUnits = useStackStore(state => state.reduceSacrificeUnits)
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
      <p className='stack-units' {...attributes} {...listeners}>
        <div className='drag-handler'></div>
        {stack.units}
      </p>
      <p className='stack-name'>
        {stack.unit.name} <span className='stack-health-small'>{stackHealth.toFixed(0)}</span>
        <span> / </span>
        <span className='stack-strength-small'>{stackStrength.toFixed(2)}</span>
      </p>
      {/* {stack.unit.tipo === 'army' && <p className='stack-leadership'>Lead {stack.leadership}</p>}
      {stack.unit.tipo === 'monster' && <p className='stack-leadership'>Domi {stack.dominance}</p>}
      {stack.unit.tipo === 'merc' && <p className='stack-leadership'>Auth {stack.authority}</p>} */}

      <div className='stack-action'>
        <button
          className='action-btn'
          onClick={() => {
            addUnits(stack.id!, 1)
          }}
        >
          +
        </button>
        <button
          className='action-btn'
          onClick={() => {
            removeUnits(stack.id!, 1)
          }}
        >
          -
        </button>
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
      <div className='stack-attack-info'>
        {stack.unit.group}:{stack.unit.category} <span style={{ color: 'red' }}>vs</span>{' '}
        <span>{whoCanIAttack(stack.unit).join(',')}</span>
      </div>
    </div>
  )
}
