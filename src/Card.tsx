import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { useStackStore } from './stackStore'
import { Stack } from './types'
import { whoCanIAttack } from './utils'
import { cn } from './utils'

export const Card = ({
  stack,
  gapValue,
  overflow
}: {
  stack: Stack
  gapValue: number
  overflow: boolean
}) => {
  // const bonus = useStackStore(state => state.bonus)
  // const getArmyLeadership = useStackStore(state => state.getArmyLeadership)
  // const updateMinSetup = useStackStore(state => state.updateMinSetup)

  const setHpBonus = useStackStore(state => state.setHpBonus)
  const setStrBonus = useStackStore(state => state.setStrBonus)
  const toggleUseUnitLimit = useStackStore(state => state.toggleUseUnitLimit)
  const setUnitLimit = useStackStore(state => state.setStackUnitLimit)
  const toggleUseStrLimit = useStackStore(state => state.toggleUseStrLimit)
  const setStrLimit = useStackStore(state => state.setStackStrLimit)
  const setStrLimitType = useStackStore(state => state.setStackStrLimitType)
  const toggleUseHpLimit = useStackStore(state => state.toggleUseHpLimit)
  const togglePlusOne = useStackStore(state => state.togglePlusOne)
  const setHpLimit = useStackStore(state => state.setStackHpLimit)
  const setStackComment = useStackStore(state => state.setStackComment)

  const removeStack = useStackStore(state => state.removeStack)
  const resetStack = useStackStore(state => state.resetStack)
  // const toggleLockMin = useStackStore(state => state.toggleLockMin)
  const addUnits = useStackStore(state => state.addUnits)
  const removeUnits = useStackStore(state => state.removeUnits)
  const getStackHealth = useStackStore(state => state.getStackHealth)
  const getStackStrength = useStackStore(state => state.getStackStrength)
  const getStackAllStrength = useStackStore(state => state.getStackAllStrength)
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: stack.id })
  const setGapPercent = useStackStore(state => state.setGapPercent)

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginBottom: `${stack.gapPercent / 5}px`
  }

  const unitHealth = stack.unit.BASEHP * (1 + stack.hpBonus / 100)
  const unitStrength = stack.unit.BASESTR * (1 + stack.strBonus / 100)
  const stackHealth = getStackHealth(stack.id!)
  const stackStrength = getStackStrength(stack.id!)
  const stackAllStrength = getStackAllStrength(stack.id!)
  const otherStrengthInfo = stackAllStrength.map(data => {
    return (
      <span className={data.type} key={data.type}>
        {data.type}({data.percent}%) {data.str.toLocaleString().replace(/,/g, '_')}
      </span>
    )
  })
  const strBonusOptions = stackAllStrength.map(data => data.type)

  return (
    <div
      className={cn('stack-card', overflow ? 'border-red-600 border-3' : 'border border-gray-500 ')}
      ref={setNodeRef}
      style={style}
    >
      <div
        className='handle w-full h-full mr-1 cursor-pointer select-none touch-none relative'
        {...attributes}
        {...listeners}
      >
        <div className='drag-handler '></div>
        <p className='text-sm w-max z-1 text-green-200 tracking-widest font-extrabold origin-bottom-left rotate-90'>
          ⮜ Drag ⮞
        </p>
      </div>
      <p className='stack-units font-bold text-lg sm:text-2xl md:text-3xl flex justify-center items-center bg-green-800 text-gray-300 p-1 sm:p-2 md:p-4 mr-2 relative'>
        {stack.unitsAmount}
      </p>
      <p className='stack-name'>{stack.unit.name}</p>
      <p className='stack-health-strength flex flex-wrap'>
        Stack{' '}
        <span className='text-sm text-red-600'>
          HP {stackHealth.toLocaleString().replace(/,/g, '_')}
        </span>{' '}
        <span className='text-sm text-teal-600'>
          STR {stackStrength.toLocaleString().replace(/,/g, '_')}
        </span>
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
          <>
            <select
              className='ml-1 inline-flex bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full max-w-[80px] p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              onChange={e => {
                setStrLimitType(stack.id!, e.target.value)
              }}
              value={stack.strLimitType}
            >
              <option value=''>Stack Str</option>
              {strBonusOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <input
              type='number'
              className='ml-1 inline-flex  bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500   w-full max-w-[120px] p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              value={stack.strLimit}
              onChange={e => {
                const value = parseInt(e.target.value) || 0
                setStrLimit(stack.id!, value)
              }}
            />
            <label className='ml-1 whitespace-nowrap'>
              +1
              <input
                className='ml-1 '
                type='checkbox'
                checked={stack.usePlusOne}
                onChange={() => {
                  togglePlusOne(stack.id!)
                }}
              />
            </label>
          </>
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
      <div className='stack-attack-info text-sm'>
        <span className='text-yellow-500'>
          {stack.unit.group === 'monster' ? stack.unit.subGroup : stack.unit.group}
        </span>
        :{stack.unit.category} <span className='text-red-600'>vs</span>{' '}
        <span className='text-green-600'>{whoCanIAttack(stack.unit).join(',')}</span>
      </div>
      <div className='stack-basic-info'>
        Unit{' '}
        <span className='text-sm text-red-600'>
          Hp {unitHealth.toLocaleString().replace(/,/g, '_')}
        </span>{' '}
        <span className='text-sm text-teal-600'>
          Str {unitStrength.toLocaleString().replace(/,/g, '_')}
        </span>
      </div>
      {/* <span className='stack-id tiny'>(id.{stack.id})</span> */}

      <div className='stack-gap relative mb-6'>
        <label htmlFor='labels-range-input' className='sr-only'>
          Gap %
        </label>
        <input
          id='labels-range-input'
          className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
          type='range'
          value={stack.gapPercent}
          min='0'
          max='100'
          onChange={e => {
            setGapPercent(stack.id!, parseInt(e.target.value))
          }}
        />
        <span className='text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6'>
          No gap
        </span>

        <span className='text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6'>
          Max ({gapValue.toFixed(0)})
        </span>
      </div>

      <div className='stack-comment text-sm text-pink-500 dark:text-pink-400'>
        <input
          className='w-full h-8 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
          type='text'
          value={stack.comment}
          onChange={e => setStackComment(stack.id!, e.target.value)}
          placeholder='enter notes here'
        />
      </div>
    </div>
  )
}
