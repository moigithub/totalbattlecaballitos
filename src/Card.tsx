import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { useStackStore } from './stackStore'
import { Stack } from './types'
import { whoCanIAttack } from './utils'

export const Card = ({ stack }: { stack: Stack }) => {
  // const bonus = useStackStore(state => state.bonus)
  // const getArmyLeadership = useStackStore(state => state.getArmyLeadership)
  // const updateMinSetup = useStackStore(state => state.updateMinSetup)

  const setHpBonus = useStackStore(state => state.setHpBonus)
  const setStrBonus = useStackStore(state => state.setStrBonus)
  const toggleUseUnitLimit = useStackStore(state => state.toggleUseUnitLimit)
  const setUnitLimit = useStackStore(state => state.setStackUnitLimit)
  const toggleUseStrLimit = useStackStore(state => state.toggleUseStrLimit)
  const setStrLimit = useStackStore(state => state.setStackStrLimit)
  const toggleUseHpLimit = useStackStore(state => state.toggleUseHpLimit)
  const setHpLimit = useStackStore(state => state.setStackHpLimit)

  const removeStack = useStackStore(state => state.removeStack)
  const resetStack = useStackStore(state => state.resetStack)
  // const toggleLockMin = useStackStore(state => state.toggleLockMin)
  const addUnits = useStackStore(state => state.addUnits)
  const removeUnits = useStackStore(state => state.removeUnits)
  const getStackHealth = useStackStore(state => state.getStackHealth)
  const getStackStrength = useStackStore(state => state.getStackStrength)
  const getStackAllStrength = useStackStore(state => state.getStackAllStrength)
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: stack.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  const stackHealth = getStackHealth(stack.id!)
  const stackStrength = getStackStrength(stack.id!)
  const stackAllStrength = getStackAllStrength(stack.id!)
  const otherStrengthInfo = stackAllStrength.map(data => {
    return (
      <span className={data.type}>
        {data.type}({data.percent}%) {data.str.toFixed(2)}
      </span>
    )
  })

  return (
    <div className='stack-card' ref={setNodeRef} style={style}>
      <div
        className='handle w-full h-full mr-1 cursor-pointer select-none touch-none relative'
        {...attributes}
        {...listeners}
      >
        <div className='drag-handler '></div>
        <p className='text-sm w-max z-30 text-green-200 tracking-widest font-extrabold origin-bottom-left rotate-90'>
          ⮜ Drag ⮞
        </p>
      </div>
      <p className='stack-units font-bold text-lg sm:text-2xl md:text-3xl flex justify-center items-center bg-green-800 text-gray-300 p-1 sm:p-2 md:p-4 mr-2 relative'>
        {stack.unitsAmount}
      </p>
      <p className='stack-name'>{stack.unit.name}</p>
      <p className='stack-health-strength flex flex-wrap'>
        <span className='text-sm text-red-600'>HP {stackHealth.toFixed(0)}</span> /{' '}
        <span className='text-sm text-teal-600'>STR {stackStrength.toFixed(2)}</span>
      </p>
      <p className='stack-other-strength flex flex-wrap text-sm text-teal-600'>
        STR {otherStrengthInfo}
      </p>
      {stack.unit.clasification === 'army' && (
        <p className='stack-leadership'>Lead {stack.leadership}</p>
      )}
      {stack.unit.clasification === 'monster' && (
        <p className='stack-leadership'>Domi {stack.dominance}</p>
      )}
      {stack.unit.clasification === 'merc' && (
        <p className='stack-leadership'>Auth {stack.authority}</p>
      )}
      {/* <p className='stack-minSetup'>Min {stack.minSetup}</p> */}
      {/* <p className='stack-limit'>Limit {stack.limit}</p> */}

      <div className='stack-hpBonus'>
        <span title='HP bonus %'>+HP %</span>
        <input
          type='number'
          className='ml-1 inline-flex bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          value={stack.hpBonus}
          onChange={e => {
            const value = parseFloat(e.target.value) || 0
            setHpBonus(stack.id!, value)
          }}
        />
      </div>
      <div className='stack-strBonus'>
        <span title='STR bonus %'>+STR %</span>

        <input
          type='number'
          className='ml-1 inline-flex bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          value={stack.strBonus}
          onChange={e => {
            const value = parseFloat(e.target.value) || 0
            setStrBonus(stack.id!, value)
          }}
        />
      </div>

      <div className='stack-unitLimit'>
        Unit Limit?
        <input
          type='checkbox'
          checked={stack.useUnitLimit}
          onChange={() => {
            toggleUseUnitLimit(stack.id!)
          }}
        />
        {stack.useUnitLimit && (
          <input
            type='number'
            className='ml-1 inline-flex  bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            value={stack.unitLimit}
            onChange={e => {
              const value = parseInt(e.target.value) || 0
              setUnitLimit(stack.id!, value)
            }}
          />
        )}
      </div>

      <div className='stack-strLimit'>
        Str Limit?
        <input
          type='checkbox'
          checked={stack.useStrLimit}
          onChange={() => {
            toggleUseStrLimit(stack.id!)
          }}
        />
        {stack.useStrLimit && (
          <input
            type='number'
            className='ml-1 inline-flex  bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500   w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            value={stack.strLimit}
            onChange={e => {
              const value = parseInt(e.target.value) || 0
              setStrLimit(stack.id!, value)
            }}
          />
        )}
      </div>

      <div className='stack-hpLimit'>
        Health Limit?
        <input
          type='checkbox'
          checked={stack.useHpLimit}
          onChange={() => {
            toggleUseHpLimit(stack.id!)
          }}
        />
        {stack.useHpLimit && (
          <input
            type='number'
            className='ml-1 inline-flex  bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500   w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            value={stack.HpLimit}
            onChange={e => {
              const value = parseInt(e.target.value) || 0
              setHpLimit(stack.id!, value)
            }}
          />
        )}
      </div>

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
      {/* {!isFirst && (
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
      )} */}

      <div className='stack-delete'>
        <button
          className='shrink-0 bg-red-500  cursor-pointer  inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
          onClick={() => removeStack(stack.id!)}
        >
          X
        </button>
      </div>
      <div className='stack-reset'>
        <button
          className='shrink-0 bg-blue-500  cursor-pointer  inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
          onClick={() => resetStack(stack.id!)}
        >
          C
        </button>
      </div>
      <div className='stack-attack-info'>
        {stack.unit.group}:{stack.unit.category} <span style={{ color: 'red' }}>vs</span>{' '}
        <span>{whoCanIAttack(stack.unit).join(',')}</span>
      </div>
      <div className='stack-basic-info'>
        base Hp {stack.unit.BASEHP} Str {stack.unit.BASESTR}
      </div>
      {/* <span className='stack-id tiny'>(id.{stack.id})</span> */}
    </div>
  )
}
