import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// import { EnemyUnit } from './monsters'
import { BasicUnit, Stack, Unit } from './types'
import { decodeHash } from './hashStore'
import { ARMY } from './soldiers'
import { StackStoreBasic, useStackStore } from './stackStore'

export const whoCanIAttack = (unit: BasicUnit): string[] => {
  const target = []

  if (unit.vsRangedPercent > 0) {
    target.push('Ranged')
  }
  if (unit.vsSiegePercent > 0) {
    target.push('Siege')
  }
  if (unit.vsHumanPercent > 0) {
    target.push('Human')
  }
  if (unit.vsMountedPercent > 0) {
    target.push('Mounted')
  }
  if (unit.vsFlyingPercent > 0) {
    target.push('Flying')
  }
  if (unit.vsMeleePercent > 0) {
    target.push('Melee')
  }
  if (unit.vsFortificationsPercent > 0) {
    target.push('Fortifications')
  }
  if (unit.vsBeastPercent > 0) {
    target.push('Beast')
  }
  if (unit.vsGiantPercent > 0) {
    target.push('Giant')
  }
  if (unit.vsElementalPercent > 0) {
    target.push('Elemental')
  }
  if (unit.vsDragonPercent > 0) {
    target.push('Dragon')
  }
  if (unit.vsEpicPercent > 0) {
    target.push('Epic')
  }

  return target
}

//---------------------------
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

// tbarmy:"eyJzdGF0ZSI6eyJsZWFkZXJzaGlwIjoxMDAwMCwiYXV0aG9yaXR5IjoxMDAwMCwiZG9taW5hbmNlIjoxMDAwMCwiYXJteSI6W3sibGVhZGVyc2hpcCI6MCwiYXV0aG9yaXR5IjowLCJkb21pbmFuY2UiOjAsImdhcFBlcmNlbnQiOjEwMCwiaWQiOiJTcGVhcm1hbkc1IiwidW5pdEtleSI6IlNwZWFybWFuRzUiLCJ1bml0c0Ftb3VudCI6MCwibWluU2V0dXAiOjAsImxvY2tNaW5TZXR1cCI6dHJ1ZSwibGltaXQiOjAsInN0ckJvbnVzIjowLCJocEJvbnVzIjowLCJ1bml0TGltaXQiOjAsInVzZVVuaXRMaW1pdCI6ZmFsc2UsInVzZVN0ckxpbWl0IjpmYWxzZSwic3RyTGltaXQiOjAsInN0ckxpbWl0VHlwZSI6IiIsInVzZUhwTGltaXQiOmZhbHNlLCJIcExpbWl0IjowfV19LCJ2ZXJzaW9uIjo4fQ=="

const getData = (stack: Stack) => {
  const unit = ARMY[stack.unitKey as string] as Unit

  if (!unit) {
    console.log('decodeAndLoadArmySetup error unit', stack.unitKey, stack)
  }

  return {
    id: stack.id || 'error',
    unitKey: stack.unitKey || 'error',
    leadership: stack.leadership || 0,
    authority: stack.authority || 0,
    dominance: stack.dominance || 0,
    gapPercent: stack.gapPercent || 0,
    usePlusOne: stack.usePlusOne || false,
    hpBonus: stack.hpBonus || 0,
    strBonus: stack.strBonus || 0,
    useUnitLimit: stack.useUnitLimit || false,
    unitLimit: stack.unitLimit || 0,
    useStrLimit: stack.useStrLimit || false,
    strLimit: stack.strLimit || 0,
    strLimitType: stack.strLimitType || '',
    comment: stack.comment || '',
    useHpLimit: stack.useHpLimit || false,
    HpLimit: stack.HpLimit || 0,
    unitsAmount: stack.unitsAmount || 0,
    limit: stack.limit || 0,
    // ...stack,
    unit: unit || ARMY.errorUnit
  }
}

export const decodeAndLoadArmySetup = (data: string) => {
  // Helper function to decode the hash
  const decodedData = decodeHash(data)
  const parsed = JSON.parse(decodedData)
  // console.log('decodeAndLoadArmySetup parsed', parsed)
  if (parsed) {
    if (parsed.army && parsed.army.length > 0) {
      useStackStore.getState().setArmy((parsed.army as Stack[]).map(stack => getData(stack)))
    }
    if (parsed.leadership && parsed.leadership > 0) {
      useStackStore.getState().setLeadership(parsed.leadership)
    }
    if (parsed.authority && parsed.authority > 0) {
      useStackStore.getState().setAuthority(parsed.authority)
    }
    if (parsed.dominance && parsed.dominance > 0) {
      useStackStore.getState().setDominance(parsed.dominance)
    }
    if (parsed.gapBasePercent && parsed.gapBasePercent > 0) {
      useStackStore.getState().setGapBasePercent(parsed.gapBasePercent)
    }
    if (parsed.selectedTarget) {
      useStackStore.getState().setSelectedTarget(parsed.selectedTarget)
    }
  }
  // Using state outside of a component
  // const paw = useStore.getState().paw // read value
  // useStackStore.setState({ paw: false }) // set value
}

export const prepareExportData = (state: StackStoreBasic) => {
  return {
    leadership: state.leadership,
    authority: state.authority,
    dominance: state.dominance,
    gapBasePercent: state.gapBasePercent,
    selectedTarget: state.selectedTarget,
    army: state.army.map(({ unit, ...stack }) => {
      return { ...stack, unitKey: unit.id }
    })
  }
}

export const prepareImportData = (data: StackStoreBasic) => {
  return {
    ...data,
    army: data.army.map(stack => getData(stack))
  }
}
