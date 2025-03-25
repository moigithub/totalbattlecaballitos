import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { useStackStore } from './stackStore'
import { Stack } from './types'
import { whoCanIAttack } from './utils'

export const Card = ({ stack, isFirst }: { stack: Stack; isFirst: boolean }) => {
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
  const reduceSacrificeUnits = useStackStore(state => state.reduceSacrificeUnits)
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
        {data.type} {data.str.toFixed(2)}
      </span>
    )
  })

  return (
    <div className='stack-card' ref={setNodeRef} style={style}>
      <div className='handle' {...attributes} {...listeners}>
        <div className='drag-handler'></div>
      </div>
      <p className='stack-units'>{stack.units}</p>
      <p className='stack-name'>{stack.unit.name}</p>
      <p className='stack-health-strength'>
        <span className='text-sm text-red-600'>HP {stackHealth.toFixed(0)}</span> /{' '}
        <span className='text-sm text-teal-600'>STR {stackStrength.toFixed(2)}</span>
      </p>
      <p className='stack-other-strength text-sm text-teal-600'>STR {otherStrengthInfo}</p>
      {stack.unit.tipo === 'army' && <p className='stack-leadership'>Lead {stack.leadership}</p>}
      {stack.unit.tipo === 'monster' && <p className='stack-leadership'>Domi {stack.dominance}</p>}
      {stack.unit.tipo === 'merc' && <p className='stack-leadership'>Auth {stack.authority}</p>}
      <p className='stack-minSetup'>Min {stack.minSetup}</p>
      {/* <p className='stack-limit'>Limit {stack.limit}</p> */}

      <div className='stack-hpBonus'>
        HP bonus %
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
        STR bonus %
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

      <div className='stack-action'>
        <button
          className='shrink-0 bg-gray-500  cursor-pointer  inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
          onClick={() => {
            addUnits(stack.id!, 1)
          }}
        >
          +
        </button>
        <button
          className='shrink-0 bg-gray-500  cursor-pointer  inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
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
      {isFirst && (
        <div className='stack-config'>
          <button
            className='shrink-0 bg-gray-100 cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
            onClick={() => {
              reduceSacrificeUnits()
            }}
          >
            <span className='mobile'>R</span>
            <span className='widescreen'>Reduce sacrifices</span>
          </button>
        </div>
      )}

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
