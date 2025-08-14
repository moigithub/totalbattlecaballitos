import { useState, useEffect, useRef, ChangeEvent } from 'react'
import ReactGA from 'react-ga4'
import './App.css'
// import { useGuardsStore } from './guardStore'

// import classNames from 'classnames'
import { ArmyList } from './ArmyList'
import { Card } from './Card'
import {
  DndContext,
  DragEndEvent
  // KeyboardSensor,
  // MouseSensor,
  // TouchSensor,
  // useSensor,
  // useSensors
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext
  // sortableKeyboardCoordinates
} from '@dnd-kit/sortable'
import { /* getStats, getSTRWithBonus,*/ useStackStore } from './stackStore'
import { Stack /*, Unit */ } from './types'

import { SmallCard } from './SmallCard'
import { CitadelData } from './citadel.tsx'
import {
  addArmyUnits,
  ColumnResult,
  fight,
  getArmyAuthority,
  getArmyDominance,
  getArmyLeadership,
  getStackHealth,
  getStackStrength,
  getStrengthWithBonus,
  prepareArmyData
} from './helpers'
import {
  Citadel,
  citadelc20,
  citadelc25,
  citadele10,
  citadele15,
  citadele20,
  citadele25,
  citadele30
} from './citadelData.ts'
import { Tips } from './tips.tsx'
import { lvl17HeroicElfSquad } from './monsters.ts'
import { decodeAndLoadArmySetup, prepareExportData } from './utils.ts'
import { encodeHash } from './hashStore.ts'
import PageTitle from './pageTitle.tsx'
import { ARMY } from './soldiers.ts'
import { TinyCard } from './TinyCard.tsx'
import {
  cursed20G5S5M4,
  cursed25,
  cursed25G6M7Mercs,
  cursed25G6M7MercsB,
  cursed25G8M9,
  elf10G5M5,
  elf15G5M3,
  elf15G5M5,
  elf15G5M5S5,
  elf20G6Mercs,
  elf20G6S5Mercs,
  elf20G7M7,
  elf20G7Mercs,
  elf20G7Mercs2,
  elf25G7S6M5,
  elf25G7S7M5,
  elf25G8S7,
  elf30G8S8M8,
  elf30G9S9,
  elf30G9S9b,
  testsequence1,
  elf30somebearsurvive,
  elf30somebearsurvive2,
  elfHeroic17,
  cursed25Test,
  cursed25M6Mercs,
  testSeq3,
  testSeq4Elf25,
  testSeq4Elf20,
  testElf30,
  elf10G3M5Mercs,
  elf10G5M5b,
  elf15G5S6,
  elf30G8S6M5,
  elf25G7S6M5b,
  elf15G5M3b,
  elf15G5M3c,
  elf10G5M3,
  cursed20G5S5Merc
} from '@/citadelPresets.ts'
import { BattleReport } from './battleReport.tsx'
import { Checkbox } from 'flowbite-react'

function Dos() {
  const leadership = useStackStore(state => state.leadership)
  const authority = useStackStore(state => state.authority)
  const dominance = useStackStore(state => state.dominance)
  const gapBasePercent = useStackStore(state => state.gapBasePercent)
  const selectedTarget = useStackStore(state => state.selectedTarget)
  const sequence = useStackStore(state => state.sequence)

  const setLeadership = useStackStore(state => state.setLeadership)
  const setAuthority = useStackStore(state => state.setAuthority)
  const setDominance = useStackStore(state => state.setDominance)
  const resetAllStacks = useStackStore(state => state.resetAllStacks)
  const setGapBasePercent = useStackStore(state => state.setGapBasePercent)
  const setSelectedTarget = useStackStore(state => state.setSelectedTarget)
  const setSequence = useStackStore(state => state.setSequence)

  const armyRef = useRef(useStackStore.getState().army)

  //---------------------
  // para el drag & drop
  const setArmy = useStackStore(state => state.setArmy)
  const { army } = useStackStore()
  //---------------------

  //-------------------

  // const getStackUnits = useStackStore(state => state.getStackUnits)
  // const getStackUnitLimit = useStackStore(state => state.getStackUnitLimit)
  // const getStackStrLimit = useStackStore(state => state.getStackStrLimit)
  // const getArmyAuthority = useStackStore(state => state.getArmyAuthority)
  // const getArmyDominance = useStackStore(state => state.getArmyDominance)

  const [citadel, setCitadel] = useState<Citadel>(citadele20)

  // const [selectedTarget, setSelectedTarget] = useState('citadele10')
  const [addUnitMode, setAddUnitMode] = useState('previousStackStatsLimit')
  const [reportMeAttacks, setReportMeAttacks] = useState<ColumnResult[]>([])
  const [reportMeDefends, setReportMeDefends] = useState<ColumnResult[]>([])

  const [cardType, setCardType] = useState('card') // card , smallcard
  // const [gapPercent, setGapPercent] = useState(10) // card , smallcard
  const [gapStrength, setGapStrength] = useState(0)
  const [jsonExport, setJsonExport] = useState<string>('')
  const [presetArmy, setPresetArmy] = useState<string>('')
  const [pasto, setPasto] = useState<boolean>(false)
  const [showTips, setShowTips] = useState<boolean>(false)
  const [showTargetData, setShowTargetData] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState(false)
  const [loading, setLoading] = useState(false)

  // const sensors = useSensor(PointerSensor, {
  //   activationConstraint: {
  //     delay: 100,
  //     tolerance: 5,
  //   },
  // });
  // const sensors = useSensors(
  //   useSensor(MouseSensor, {
  //     activationConstraint: { delay: 20, tolerance: 3, distance: 8 }
  //   }),
  //   useSensor(TouchSensor, {
  //     activationConstraint: {
  //       delay: 20,
  //       tolerance: 3,
  //       distance: 8
  //     }
  //   }),
  //   useSensor(KeyboardSensor, {
  //     // Disable smooth scrolling in Cypress automated tests
  //     scrollBehavior: 'Cypress' in window ? 'auto' : undefined,
  //     coordinateGetter: sortableKeyboardCoordinates
  //   })
  // )
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/calc', title: 'calculator' })
  }, [])

  useEffect(() => useStackStore.subscribe(state => (armyRef.current = state.army)), [])

  useEffect(() => {
    let selectedCitadel = citadele10
    if (selectedTarget === 'citadele10') {
      selectedCitadel = citadele10
    }
    if (selectedTarget === 'citadele15') {
      selectedCitadel = citadele15
    }
    if (selectedTarget === 'citadele20') {
      selectedCitadel = citadele20
    }
    if (selectedTarget === 'citadele25') {
      selectedCitadel = citadele25
    }
    if (selectedTarget === 'citadele30') {
      selectedCitadel = citadele30
    }
    if (selectedTarget === 'citadelc20') {
      selectedCitadel = citadelc20
    }
    if (selectedTarget === 'citadelc25') {
      selectedCitadel = citadelc25
    }
    if (selectedTarget === 'lvl17HeroicElfSquad') {
      console.log('select target lvl17heroic', lvl17HeroicElfSquad)
      selectedCitadel = lvl17HeroicElfSquad
    }

    setCitadel(selectedCitadel)
  }, [selectedTarget])

  const changeMobTarget = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setReportMeAttacks([])
    setReportMeDefends([])
    setSelectedTarget(e.target.value)
  }

  const changeLeadership = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() !== '') {
      const value = parseInt(e.target.value)
      setLeadership(value)
    }
  }
  const changeAuthority = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() !== '') {
      const value = parseInt(e.target.value)
      setAuthority(value)
    }
  }
  const changeDominance = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() !== '') {
      const value = parseInt(e.target.value)
      setDominance(value)
    }
  }

  const shouldAddArmy = (ARMY: Stack[], i: number) => {
    const stack = ARMY[i]
    if (stack.useUnitLimit && stack.unitsAmount >= stack.unitLimit) {
      // console.log('rompio unit limit')
      return false
    }

    if (stack.useStrLimit) {
      const stackStrengthWithBonus = getStrengthWithBonus(stack)
      const featBonus =
        stack.strLimitType
          .split(',')
          .map(t => t.trim())
          .filter(Boolean) ?? []
      const allBonusesPercent = stackStrengthWithBonus.reduce(
        (total, bonus) => (featBonus.includes(bonus.type) ? bonus.percent + total : total),
        0
      )

      let multiplier = 1
      if (featBonus.includes('vsFortifications')) {
        multiplier = stack.unit.multiplier
      }

      const unitStrengthBase =
        stack.unit.BASESTR * (1 + (stack.strBonus + allBonusesPercent) / 100) * multiplier
      const stackStrength = unitStrengthBase * stack.unitsAmount

      let unitStrength = unitStrengthBase
      if (stack.usePlusOne) {
        unitStrength = unitStrengthBase * 0
      }
      if (stack.useMinusOne) {
        unitStrength = unitStrengthBase * 2
      }

      // console.log(' stackstrength', stackStrength)
      // console.log('unitStrengthBase', unitStrengthBase)
      // console.log('stack.unitsAmount', stack.unitsAmount)
      // console.log('unitstrengt', unitStrength)
      // console.log('both', stackStrength + unitStrength, '>', stack.strLimit)
      // console.log('featBonus', featBonus)
      // console.log('allBonusesPercent', allBonusesPercent)
      if (stackStrength + unitStrength >= stack.strLimit) {
        // console.log('rompio strlimit')
        return false
      }
    }

    const unitsCount = 1
    const stackStrength = getStackStrength(ARMY, i)
    // const totalSTRPerUnit = getSTRWithBonus(stack.unit, bonus)
    const totalSTRPerUnit = stack.unit.BASESTR * (1 + stack.strBonus / 100) // ahora individual cada stack tiene su prpio bonus
    const newStackStrength = totalSTRPerUnit * unitsCount

    // 3. calcular str del sacrificio
    const sacrificeGroupStrength = getStackStrength(ARMY, 0)
    // console.log('sacrifice strength', sacrificeGroupStrength)

    // calculate gap for next stacks
    const gapStrength = (sacrificeGroupStrength * gapBasePercent) / 100

    const finalGapStrength = (gapStrength * ARMY[i - 1].gapPercent) / 100
    let groupStrength = sacrificeGroupStrength - finalGapStrength
    if (addUnitMode === 'previousStackStatsLimit') {
      const previousGroupStrength = getStackStrength(ARMY, i - 1)
      groupStrength = previousGroupStrength - finalGapStrength
    }
    console.log('group with gap', stackStrength + newStackStrength, '>', groupStrength)
    if (stackStrength + newStackStrength >= groupStrength) {
      // 9. agregar al stack
      // console.log('rompio stack str')
      return false
    }

    const stackHealth = getStackHealth(ARMY, i)
    // const totalSTRPerUnit = getSTRWithBonus(stack.unit, bonus) //sin el config bonus
    const totalHPPerUnit = stack.unit.BASEHP * (1 + stack.hpBonus / 100) // ahora individual cada stack tiene su prpio bonus
    const newStackHealth = totalHPPerUnit * unitsCount
    if (stack.useHpLimit && stackHealth + newStackHealth >= stack.HpLimit) {
      // console.log(
      //   'dom: hp limit',
      //   ARMY[i].useHpLimit,
      //   stackHealth + newStackHealth,
      //   '>=',
      //   ARMY[i].HpLimit
      // )

      // console.log('rompio HP limit')
      return false
    }

    return true
  }

  const calcSTR = () => {
    ReactGA.event({
      category: 'army',
      action: 'calc'
    })
    setLoading(true)

    //https://www.youtube.com/watch?app=desktop&v=8rdVjHNRXn0
    // according to youtube video, the squad with highest strength attack first
    // its not based on health, as other people said
    /**
     * highest initiative determine the attack order, who attack first you or the monster
     * the order is determined only once at start
     *
     * question.. how u determine the initiative ??
     *
     * if both you vs enemy have the same initiative, the order is random
     *
     * then.. on some side.. the stack with highest strength attack first
     * the target is based on health
     * if your total damage is higher than the enemy health,
     * your stack attack another stack
     * ie:
     * melee can attack beast and mounted
     * if beast have lower hp than your squad total damage, then it will attack the mounted squad
     */

    /**
       im going to add a gap, void, empty, threshold, space (whatever term to describe a jump between troops strength) to try to avoid changes in stack order
to my useless calc
---
example...
first stack: melee (spearman) strength: 100,000
second stack: monster,flying, strength: 99,999
captain: stror (no bonus on strength) ^_^
---
everything works like a charm... you kill 100 citadels... all ok..
then you change captain to ingrid... monster 20% bonus strength added...
--
now ... your stack order are broken
second stack: monster,flying, strength: becomes 120,000 strength..
its no longer the 2nd stack
---
IF use "gap 50%"
first stack: melee (spearman) strength: 100,000
second stack: monster,flying, strength: 50,000
captain: stror (no bonus on strength) ^_^
--
change ingrid +20% bonus on monster
--
first stack: melee (spearman) strength: 100,000
second stack: monster,flying, strength:  60,000
--
second REMAINS second

     */

    if (armyRef.current.length === 0) {
      // algo debe estar marcado
      alert('pick riders')
      return
    }

    resetAllStacks()

    // gapPercent will be calculated based on first stack strength only
    // because if use the "previous stack" to calculate.. and each previous stack have lower strength
    // some of the latest troops will be affected negativelly
    // having less room to grow

    // deep copy the army to a normal object
    const ARMY = structuredClone(armyRef.current)

    // console.log('max leadership', leadership)
    // console.log('max authority', authority)
    // console.log('max dominance', dominance)
    // console.log('army', ARMY)

    let maxLoop = 1000000 // should change it for a timer
    //let totalLeadership = 0
    // let totalAuthority = 0
    // let totalDominance = 0
    let lastLeadershipCalculated = 0 // to break the loop, if didnt changed (loop protection)
    let lastAuthorityCalculated = 0 // to break the loop, if didnt changed (loop protection)
    let lastDominanceCalculated = 0 // to break the loop, if didnt changed (loop protection)

    let playing = true

    while (playing) {
      // 1. check leadership acumulado del army
      // 2. agregar 1 unit al sacrificio
      const stackZero: Stack | null = ARMY[0] // el primero de la lista es el sacrificio, incrementa de 1 en 1
      // console.log('army0', army[0], armyRef.current[0])

      let canIAddToFirstStack = true
      if (
        stackZero.unit.clasification === 'army' &&
        getArmyLeadership(ARMY) + stackZero.unit.LEADERSHIP > leadership
      ) {
        canIAddToFirstStack = false
        // addArmyUnits(ARMY, 0, 1)
      } else if (
        stackZero.unit.clasification === 'merc' &&
        getArmyAuthority(ARMY) + stackZero.unit.AUTHORITY > authority
      ) {
        canIAddToFirstStack = false
        // addArmyUnits(ARMY, 0, 1)
      } else if (
        stackZero.unit.clasification === 'monster' &&
        getArmyDominance(ARMY) + stackZero.unit.DOMINANCE > dominance
      ) {
        canIAddToFirstStack = false
        // addArmyUnits(ARMY, 0, 1)
      }

      if (ARMY[0].useUnitLimit && ARMY[0].unitsAmount >= ARMY[0].unitLimit) {
        canIAddToFirstStack = false
      }

      // const unitStrength = stack.unit.BASESTR * (1 + stack.strBonus / 100)
      console.log('use str limit 0', ARMY[0].useStrLimit, stackZero.strLimitType)
      if (ARMY[0].useStrLimit) {
        const stackStrengthWithBonus = getStrengthWithBonus(ARMY[0])

        const featBonus =
          stackZero.strLimitType
            .split(',')
            .map(t => t.trim())
            .filter(Boolean) ?? []
        // if (featBonus.length >= 0) {
        const allBonusesPercent = stackStrengthWithBonus.reduce(
          (total, bonus) => (featBonus.includes(bonus.type) ? bonus.percent + total : total),
          0
        )

        let multiplier = 1
        if (featBonus.includes('vsFortifications')) {
          multiplier = stackZero.unit.multiplier
        }

        const unitStrengthBase =
          stackZero.unit.BASESTR * (1 + (stackZero.strBonus + allBonusesPercent) / 100) * multiplier
        const stackStrength = unitStrengthBase * stackZero.unitsAmount

        let unitStrength = unitStrengthBase
        if (stackZero.usePlusOne) {
          unitStrength = unitStrengthBase * 0
        }
        if (stackZero.useMinusOne) {
          unitStrength = unitStrengthBase * 2
        }
        // fix: 14/4/25
        // para poder apuntar a un objetivo, solo el str sin feat.bono debe estar debajo del limite de vida del oponente
        // el strLimit con bono si puede pasar, es mas si DEBE pasar para poder asegurar que lo mate

        // fix: 17/4/25
        // si se pasa (ver nota anterior 14/4/25) el selectTarget cambiara de objetivo
        // a otro donde no haya desperdicio de daño: ver ejemplo firefenix vs melee or ent, cual escoje?

        // fix: 27/04/25
        // los bonos se pueden acumular, ejm: stonegargoyle(vsMelee,vsBeast) vs Beast(melee,beast)

        // en strLimit se pone la vida del enemigo
        // para que calcule la cantidad maxima de tropas a enviar
        // en el calculo del strLimit se usa el feature bonus: ejm. vsMelee
        // que se usa para el calculo del "daño efectivo" que es lo que se aplica al restar vida en una pelea
        // por lo tanto, este "daño efectivo" debe ser mayor o igual a la vida
        // por lo que debo agregar 1 unidad extra a la cuenta de tropas
        // y se debe usar > en lugar de >=

        console.log('ZERO stackstrength', stackStrength)
        console.log('unitstrengt', unitStrength)
        console.log('both', stackStrength + unitStrength, '>', ARMY[0].strLimit)
        console.log('featBonus', featBonus)
        console.log('allBonusesPercent', allBonusesPercent)
        if (stackStrength + unitStrength >= ARMY[0].strLimit) {
          console.log('no zero add')
          canIAddToFirstStack = false
        }
      }

      const unitHealth = stackZero.unit.BASEHP * (1 + stackZero.hpBonus / 100)
      if (ARMY[0].useHpLimit && getStackHealth(ARMY, 0) + unitHealth >= ARMY[0].HpLimit) {
        canIAddToFirstStack = false
      }

      if (canIAddToFirstStack) {
        addArmyUnits(ARMY, 0, 1)
      }

      // console.log('army0', army[0], armyRef.current[0])

      for (let i = 1; i < ARMY.length; i++) {
        if (!ARMY[i]) {
          playing = false
          break
        }
        // console.log('current stack', stack)

        /**manejo de leadership */
        if (ARMY[i].unit.clasification === 'army') {
          // 6. check leadership del nuevo grupo
          const unitsCount = 1 // por ahora siempre 1
          const newStackLeadership = ARMY[i].unit.LEADERSHIP * unitsCount

          // 7 check leadership acumulado + leadership nuevo sea menor que el disponible

          while (getArmyLeadership(ARMY) + newStackLeadership <= leadership) {
            if (!shouldAddArmy(ARMY, i)) {
              break
            }

            // console.log('leadership: agregando units a ', ARMY[i].unit.name)
            addArmyUnits(ARMY, i, unitsCount)

            // console.log('new army', ARMY)
          }
        }

        if (ARMY[i].unit.clasification === 'merc') {
          // 5. check authority acumulado del mercenaries
          // 6. check authority del nuevo grupo
          // const unitsCount = stack.lockMinSetup ? unitsNeededToKill1Mob : 1
          const unitsCount = 1 //siempre 1
          const newStackAuthority = ARMY[i].unit.AUTHORITY * unitsCount
          // 7 check authority acumulado + authority nuevo sea menor que el disponible
          while (getArmyAuthority(ARMY) + newStackAuthority <= authority) {
            if (!shouldAddArmy(ARMY, i)) {
              break
            }

            // 9. agregar al stack
            // console.log('authority: agregando units en ', ARMY[i].unit.name)
            addArmyUnits(ARMY, i, unitsCount)
          }
        }

        if (ARMY[i].unit.clasification === 'monster') {
          // 5. check DOMINANCE acumulado del mercenaries
          // 6. check DOMINANCE del nuevo grupo
          const unitsCount = 1
          const newStackDominance = ARMY[i].unit.DOMINANCE * unitsCount

          // 7 check DOMINANCE acumulado + DOMINANCE nuevo sea menor que el disponible
          while (getArmyDominance(ARMY) + newStackDominance <= dominance) {
            // console.log(
            //   '...domi',
            //   stack.unit.name,
            //   stack.strBonus,
            //   stack.useStrLimit,
            //   stack.strLimit,
            //   stack.useUnitLimit,
            //   stack.unitLimit
            // )
            // 8. check HP acumulado + hp nuevo sea menor que el del sacrificio

            if (!shouldAddArmy(ARMY, i)) {
              break
            }

            console.log('dominance: agregando units en ', ARMY[i].unit.name)
            addArmyUnits(ARMY, i, unitsCount)
          }
        }
      }

      // check if there were any changes

      if (
        lastLeadershipCalculated === getArmyLeadership(ARMY) &&
        lastAuthorityCalculated === getArmyAuthority(ARMY) &&
        lastDominanceCalculated === getArmyDominance(ARMY)
      ) {
        // console.log('no changes to leadership,authority or dominance, ending')
        playing = false
        break
      }
      lastLeadershipCalculated = getArmyLeadership(ARMY)
      lastAuthorityCalculated = getArmyAuthority(ARMY)
      lastDominanceCalculated = getArmyDominance(ARMY)

      console.log('quedan .........')
      console.log('leadership ', leadership, getArmyLeadership(ARMY))
      console.log('Authority ', authority, getArmyAuthority(ARMY))
      console.log('Dominance ', dominance, getArmyDominance(ARMY))

      if (
        getArmyAuthority(ARMY) > authority ||
        getArmyDominance(ARMY) > dominance ||
        getArmyLeadership(ARMY) > leadership
      ) {
        // no deberia pasar
        playing = false
        break
      }

      // console.log('loop protection', maxLoop)
      if (maxLoop-- < 1) {
        console.log('loop protection stop!!')
        playing = false
        break
      }
    }

    // update UI
    setArmy(ARMY)

    setGapStrength((getStackStrength(ARMY, 0) * gapBasePercent) / 100)

    setTimeout(() => {
      setLoading(false)
    }, 300)
  }

  const genTestData = () => {
    const fightStack = army
      .map(stack => {
        const vsPercent = Object.entries(stack.unit).filter(kv => {
          return kv[0].startsWith('vs') && kv[0].endsWith('Percent') && kv[1] > 0
        })
        const vs = vsPercent.map(v => `${v[0]}:${v[1]}`).join(',')
        return `createFightStack('${stack.id}','${stack.unit.name}','${stack.unit.category}','${stack.unit.subGroup}',${stack.unit.BASESTR},${stack.unit.BASEHP},${stack.strBonus},${stack.hpBonus},${stack.unitsAmount},{${vs}})`
      })
      .join(',\n')

    const citadelWithoutWalls = citadel.stacks
      .filter(stack => stack.unit.category !== 'fortification')
      .map(stack => {
        const vsPercent = Object.entries(stack.unit).filter(kv => {
          return kv[0].startsWith('vs') && kv[0].endsWith('Percent') && kv[1] > 0
        })
        const vs = vsPercent.map(v => `${v[0]}:${v[1]}`).join(',')
        return `createFightStack('${stack.id}','${stack.unit.name}','${stack.unit.category}','${stack.unit.subGroup}',${stack.unit.BASESTR},${stack.unit.BASEHP},0,0,${stack.unitsAmount},{${vs}})`
      })
      .join(',\n')

    const playerStacks = 'const playerStacks: FightStack[] = [' + fightStack + ']'
    const enemyStacks = 'const enemyStacks: FightStack[] = [' + citadelWithoutWalls + ']'

    navigator.clipboard.writeText(playerStacks + '\n\n' + enemyStacks)
  }

  const genAIData = () => {
    const allArmy = Object.values(ARMY)

    const citadelData = citadel.stacks
      .filter(stack => stack.unit.category !== 'fortification')
      .map(stack => ({
        unitId: stack.unit.name,
        baseStr: stack.unit.BASESTR,
        baseHp: stack.unit.BASEHP,
        unitsAmount: stack.unitsAmount,
        category: stack.unit.category,
        vsMeleePercent: stack.unit.vsMeleePercent,
        vsRangedPercent: stack.unit.vsRangedPercent,
        vsMountedPercent: stack.unit.vsMountedPercent,
        vsFlyingPercent: stack.unit.vsFlyingPercent,
        vsBeastPercent: stack.unit.vsBeastPercent,
        vsGiantPercent: stack.unit.vsGiantPercent,
        vsElementalPercent: stack.unit.vsElementalPercent,
        vsDragonPercent: stack.unit.vsDragonPercent,
        vsSiegePercent: stack.unit.vsSiegePercent
      }))

    const data =
      /**
     row format
     unitId,basestr,basehp,bonusStr,bonusHP,category,group+subGroup,unitsAmount,vsMelee%,vsETC%
     */
      armyRef.current.map(stack => ({
        unitId: stack.unitKey,
        baseStr: stack.unit.BASESTR,
        baseHp: stack.unit.BASEHP,
        bonusStr: stack.strBonus,
        bonusHp: stack.hpBonus,
        category: stack.unit.category,
        group: stack.unit.group,
        subGroup: stack.unit.subGroup,
        unitsAmount: stack.unitsAmount,
        vsMeleePercent: stack.unit.vsMeleePercent,
        vsRangedPercent: stack.unit.vsRangedPercent,
        vsMountedPercent: stack.unit.vsMountedPercent,
        vsFlyingPercent: stack.unit.vsFlyingPercent,
        vsBeastPercent: stack.unit.vsBeastPercent,
        vsGiantPercent: stack.unit.vsGiantPercent,
        vsElementalPercent: stack.unit.vsElementalPercent,
        vsDragonPercent: stack.unit.vsDragonPercent,
        vsSiegePercent: stack.unit.vsSiegePercent
      }))

    const citadelJsonData = JSON.stringify(citadelData)

    const jsondata = JSON.stringify(data)

    //     const prompt = `
    //     [Role]
    // Act as a strict data processor.
    // you know everything about a combat system,

    // [Rules]
    // - Only use explicitly provided parameters
    // - Never infer unstated variables
    // - Flag any missing critical data with "Parameter Required: [X]"

    //   this is a game combat system where have 2 sides, each sides can have many troops which we call a "stack" or "squad"
    //   and each stack can have many units.

    //   each unit have a category, subgroup, base strength, base health, strength bonus percent, health bonus percent,
    //   a strength bonus percent against centain opponent categories or subgroups (vsXPercent)

    //   it uses a turn-based system, where each side is sorted based on their stack strength
    //   ,descending, from strongest to weakest
    //   and the opponent is choose based on to whom the squad can do the most damage
    //   and fallback to whom is the more treathening opponent

    //   - ATTACK SEQUENCE
    //   to fight each side takes alternated turn, not sequential, example
    //   attacker have the following squads: a1,a2,a3
    //   defender have the following squads: d1,d2,d3

    //   if attacker attack first, then the sequence would be like this:

    // a1 will attack first
    // then d1 will attack
    // then a2 will attack
    // then d2 will attack
    // then a3 will attack
    // then d3 will attack

    // if one squad from one side dies, the next on the side queue will take its place, so it dont lose a turn,
    // dead squad will not participate on attacks
    // example:

    // Example Fixed Sequence:
    // a1 attacks → kills d1
    // [d1 removed from queue]
    // d2 attacks (replaces d1's turn)
    // a2 attacks
    // d3 attacks
    // a3 attacks

    // the squad who already attacked, will not attack again until another cycle start, and it repeats as many cycles needed,
    // until one side have no troops alive

    // in case any of the sides, have more squads than the other, then each squads who have not attacked yet,
    // will attack at the end of the cycle, before starts a new one, example:

    //   attacker have the following squads: a1,a2,a3,a4,a5,a6,a7
    //   defender have the following squads: d1,d2,d3

    //   if attacker attack first, then the sequence would be like this:

    // a1 will attack first
    // then d1 will attack
    // then a2 will attack
    // then d2 will attack
    // then a3 will attack
    // then d3 will attack
    // then a4 will attack
    // then a5 will attack
    // then a6 will attack
    // then a7 will attack

    // - DEAD UNIT HANDLING:
    //   Immediately remove any squad when 'remaining_health ≤ 0'.
    //   The next living squad in that side's original order automatically fills the attack slot.

    // - FORMULAS
    // totalHealth = baseHp * (1 + bonusHp/100) * unitsAmount - accumulatedDamage
    // stack strength = stack.unit.BASESTR * (1+ bonusStr /100) * units amount
    // damage = min ( stack.unit.BASESTR * (1+( bonusStr  + vsXPercent_category + vsXPercent_subgroup )/100) * units amount , totalHealth_enemy)
    // the max damage applied would be limited by the enemy health

    // the vsXPercent will only apply if the opponent belongs to the same bonus/category the attacker have
    // example

    // archer, have bonus against flying 30% and bonus against dragon 10%

    // if the opponent have "flying" category and "beast" subgroup
    // the damage formula would be

    // damage = min ( stack.unit.BASESTR * (1+( bonusStr  + vsFlying )/100) * units amount , totalHealth_enemy)
    // because only flying bonus match the category

    // ---
    // if the opponent have "flying" category and "dragon" subgroup
    // the damage formula would be

    // damage = min ( stack.unit.BASESTR * (1+( bonusStr  + vsFlying +vsDragon)/100) * units amount , totalHealth_enemy)
    // because both bonuses matches to the category and subgroup

    // ----
    // if the opponent have "ranged" category and "elemental" subgroup
    // the damage formula would be

    // damage = min ( stack.unit.BASESTR * (1+( bonusStr  )/100) * units amount , totalHealth_enemy)
    // because no matching bonuses

    // - ACUMULATED DAMAGE
    // if the damage do not kill the enemy it will be added into the next attack

    // - TARGET SELECTION RULES
    // which is based on
    // 1. Damage Maximization: Prioritizes targets the attacker can deal the most damage to
    // 2. Threat Mitigation: Considers how much damage the defender can retaliate with
    // 3. Bonus Optimization: Leverages all applicable combat bonuses
    // 4. Dead units cannot be selected as targets
    // 5. Attackers with no valid living targets skip their turn

    // rules:
    // 1. only alives opponents will be selected
    // 2. if stack strength is lower than the opponent health another target will be selected
    // 3. the opponent is choosen based on to whom the squad can do the most damage
    //    which can be found using the "damage" formula above
    //    if the "damage" is equal on more than 1 target, then the most threatening will be selected

    //    so you need to compute
    //     damage: BASESTR × (1 + all applicable Bonuses/100) × unitsAmount
    //     threat: Defender's potential counter-damage

    //     and Sort

    //     Primary sort: mostDamage (descending)
    //     Secondary sort: threat (descending)
    //     This ensures:
    //         Highest priority to targets you can eliminate quickly
    //         Secondary preference to dangerous enemies that could retaliate hard

    //   - CODE INTERFACE

    // export type Category =
    // | 'mounted'
    // | 'ranged'
    // | 'melee'
    // | 'scout'
    // | 'flying'
    // | 'fortification'
    // | 'siege'
    // | '' //mercenaries dont have

    // export type Group = 'enemy' | 'mercs' | 'guardsman' | 'specialist' | 'engineer' | 'monster'
    // export type SubGroup = '' | 'beast' | 'elemental' | 'dragon' | 'giant'

    // export interface ObjProps {
    //   name: string
    //   category: Category // melee, ranged,mounted,flying,| scout|siege
    //   group: Group // 'guardsman' specialist engineer mercs enemy
    //   subGroup: SubGroup //'elemental' | 'dragon' | 'beast' | 'giant'
    //   BASESTR: number
    //   BASEHP: number
    //   strBonus?: number
    //   hpBonus?: number
    //   multiplier: number // para las catapultas que tienen x 20
    //   vsRangedPercent: number
    //   vsSiegePercent: number
    //   vsBeastPercent: number
    //   vsHumanPercent: number
    //   vsMountedPercent: number
    //   vsFlyingPercent: number
    //   vsMeleePercent: number
    //   vsFortificationsPercent: number
    //   vsGiantPercent: number
    //   vsEpicPercent: number
    //   vsElementalPercent: number
    //   vsDragonPercent: number
    // }

    // export interface FightStack {
    //   id: string
    //   unit: ObjProps
    //   unitsAmount: number
    //   originalUnitsAmount: number
    //   accumulatedDamage: number
    // }

    // interface AttackStats {
    //   attackerStrength: number
    //   damage: number // Potential damage with all bonuses
    //   threat: number // Defender's potential counter damage
    //   defenderHealth: number
    //   defenderStrength: number
    //   mostDamage: number
    // }

    // - USER INPUT (#USERINPUT)
    // if the user tells you he/she have G4, it means he have guardsman from level 1 to 4
    // if the user tells you he/she have S6, it means he have specialis from level 1 to 6
    // if the user tells you he/she have M3, it means he have monster from level 1 to 3

    // if he have G4, he can use mercenaries (merc or mercs) until level 6
    // if he have G5, he can use mercenaries (merc or mercs) until level 7
    // if he have G6, he can use mercenaries (merc or mercs) until level 9

    // any level  higher than the specified by the user, will not be available

    // the user will provide you his army setup, where you can use to determine, what troops he have
    // and the max level of each groups he can use

    // and also he will provide you the enemy he will attack

    // you can give suggerences and modify the user army if needed to get the best result
    // you are allowed to change troops types or troops amount
    // based on the levels he have

    // do not assume or create new fields or data values

    // - USER EXPECTATION #USEREXPECTATION
    // the user want to know the best possible combination, based on the available guardsman,specialist,monster or mercenaries
    // he can use to have lower or zero loses
    // and expect you to do the calculations and give him the best setup possible
    // on both scenarios, if he attack first or second
    // and have a summary if he would win or loose, and how many units will loose if any

    // - FIXED GAME DATA
    // available soldiers JSON data (#soldiers): ${JSON.stringify(allArmy)}

    //  - USER DATA INPUT

    //     enemy JSON data (#enemy): ${citadelJsonData}

    //     player JSON data (#player):${jsondata}

    //     Dissalowed:
    //     - #soldiers and #enemy data can not be changed

    //     Allowed:
    //       #player troops types or unitAmount can be changed

    // determine what troops types he user could use, based on #USERINPUT and #soldiers data
    // and give recomendations based on #USEREXPECTATION

    // show me a battle report where both #player and #enemy attack eachother using all squads from both sides, and #player attack first
    //   `

    const prompt2 = `[COMBAT RULESET v2.5]
  # Core Mechanics
  1. **Unit Properties**:
     - Each unit has:
       'BASESTR', 'BASEHP', 'unitsAmount', 'category', 'subGroup',  'hpBonus','strBonus',
       'vsXPercent' bonuses (where X matches defender traits)
  2. **Stack Health and Strength**:
    - 'stackHealth = BASEHP × (1 + hpBonus/100) × unitsAmount - accumulatedDamage'
    - 'stackStrength = BASESTR × (1 + strBonus/100) × unitsAmount'

  # Attack Sequence
  1. **Initiation**:
     - Attacker always strikes first in first round
     - Alternate turns strictly (A1→D1→A2→D2...)

  2. **Turn Handling**:
     '''python
     while any_squads_alive(attacker) and any_squads_alive(defender):
         for attacker_squad, defender_squad in zip(attacker_queue, defender_queue):
             if attacker_squad.is_alive():
                 process_attack(attacker_squad, select_target(defender))
             if defender_squad.is_alive():  # Dead units skip turns
                 process_attack(defender_squad, select_target(attacker))
     '''

  3. **Death Processing** (NEW):
     - When unit health ≤ 0:
       a) Immediately remove from attack queue
       b) Next living unit in original order fills the turn slot
       c) Never recalculate turn order mid-battle

  # Target Selection
  1. **Valid Targets**:
     - Only living units with 'stackStrength < defenderHealth'
     - Must have matching 'vsXPercent' bonuses if applicable

  2. **Priority**:
     '''python
     def select_target(attacker, defenders):
         viable = [d for d in defenders if d.is_alive()]
         return max(
             viable,
             key=lambda d: (
                 damage_potential(attacker, d),
                 d.stackStrength  # Tiebreaker
             )
         )
     '''

  # Damage Calculation
  '''mathematica
  damage = Min[
    BASESTR × (1 + Σapplicable_bonuses/100) × unitsAmount,
    target.totalHealth
  ]
  '''

  # GAME DATA
available soldiers JSON data (#soldiers): ${JSON.stringify(allArmy)}

#  USER DATA INPUT

    enemy JSON data (#enemy): ${citadelJsonData}

    player JSON data (#player):${jsondata}



    analyze the player setup and provide me a lower or zero loses setup if possible, show me a battle report attack sequence
   `

    navigator.clipboard.writeText(prompt2)
  }

  const verifyCitadel = () => {
    setLoading(true)
    console.log('verifying citadele20')

    // let troopsTypes: boolean = false

    // ***********************************
    // simulation

    // BOTH sides my army, citadel already ordered based on stack strength, so no need to do anything
    // INFO: I DO first attack

    // prepare army units for fighting, format data to have same structure as citadel
    const myArmy = prepareArmyData(army)

    const citadelWithoutWalls = citadel.stacks.filter(
      stack => stack.unit.category !== 'fortification'
    )
    console.log('citadelWithoutWalls', citadelWithoutWalls)

    const citadelClone = structuredClone(citadelWithoutWalls)

    const attackResult = fight(myArmy, citadelClone)

    setReportMeAttacks(attackResult)
    const myArmy2 = prepareArmyData(army)

    const citadelWithoutWalls2 = citadel.stacks.filter(
      stack => stack.unit.category !== 'fortification'
    )

    const citadelClone2 = structuredClone(citadelWithoutWalls2)
    const defendResult = fight(citadelClone2, myArmy2)
    setReportMeDefends(defendResult)
    // console.log('citadel after hit', citadel)

    // if (sequence === '') {
    //   const attackHeader = `No double damage or walls are included, \r\nI attack first\r\n`
    //   const attackSequence = attackResult
    //     .map(entry => {
    //       return entry.data
    //         .map(data => {
    //           return data.msg
    //         })
    //         .join(' ')
    //     })
    //     .join('\r\n')

    //   const defendHeader = `No double damage or walls are included, \r\nI defend first\r\n`
    //   const defendSequence = defendResult
    //     .map(entry => {
    //       return entry.data
    //         .map(data => {
    //           return data.msg
    //         })
    //         .join(' ')
    //     })
    //     .join('\r\n')

    //   setSequence(attackHeader + attackSequence + defendHeader + defendSequence)
    // }

    // console.log(' citadele20 result', checkResult)

    setTimeout(() => {
      setLoading(false)
      setOpenModal(true)
    }, 200)
  }

  const generateData = () => {
    const citadelData = citadel.stacks.map(stack => ({
      unitId: stack.unit.name,
      baseStr: stack.unit.BASESTR,
      baseHp: stack.unit.BASEHP,
      unitsAmount: stack.unitsAmount,
      category: stack.unit.category,
      vsMeleePercent: stack.unit.vsMeleePercent,
      vsRangedPercent: stack.unit.vsRangedPercent,
      vsMountedPercent: stack.unit.vsMountedPercent,
      vsFlyingPercent: stack.unit.vsFlyingPercent,
      vsBeastPercent: stack.unit.vsBeastPercent,
      vsGiantPercent: stack.unit.vsGiantPercent,
      vsElementalPercent: stack.unit.vsElementalPercent,
      vsDragonPercent: stack.unit.vsDragonPercent,
      vsSiegePercent: stack.unit.vsSiegePercent
    }))

    const data =
      /**
     row format
     unitId,basestr,basehp,bonusStr,bonusHP,category,group+subGroup,unitsAmount,vsMelee%,vsETC%
     */
      armyRef.current.map(stack => ({
        unitId: stack.unitKey,
        baseStr: stack.unit.BASESTR,
        baseHp: stack.unit.BASEHP,
        bonusStr: stack.strBonus,
        bonusHp: stack.hpBonus,
        category: stack.unit.category,
        group: stack.unit.group,
        subGroup: stack.unit.subGroup,
        unitsAmount: stack.unitsAmount,
        vsMeleePercent: stack.unit.vsMeleePercent,
        vsRangedPercent: stack.unit.vsRangedPercent,
        vsMountedPercent: stack.unit.vsMountedPercent,
        vsFlyingPercent: stack.unit.vsFlyingPercent,
        vsBeastPercent: stack.unit.vsBeastPercent,
        vsGiantPercent: stack.unit.vsGiantPercent,
        vsElementalPercent: stack.unit.vsElementalPercent,
        vsDragonPercent: stack.unit.vsDragonPercent,
        vsSiegePercent: stack.unit.vsSiegePercent
      }))

    const citadelJsonData = JSON.stringify(citadelData)

    const jsondata = JSON.stringify(data)
    const myUnits = armyRef.current.map(stack => stack.unit.name).join(', ')
    const citadelUnits = citadel.stacks.map(stack => stack.unit.name)

    const report2 = `

1. Stack and Army Structure:

Stack: A group of units of the same category.
Army: A collection of stacks. Each player and enemy initializes an army consisting of one or more stacks. Each player and enemy has one army.

    ### Bonos de ataque (vsXPercent):
- Son modificadores *ofensivos* unidireccionales
- Solo se aplican al calcular daño *infligido*
- Ejemplo:
  Unidad A (vsMeleePercent:25) atacando a Unidad B (melee):
  daño = strBase × (1 + 25/100) × cantidadUnidades


and the following game rules (#gameRules):

1. Selección de objetivo:


1. La secuencia de ataque se determina por la "fuerza del escuadron", primero el más fuerte, luego el siguiente más fuerte, y así hasta el más débil..
2. El escuadrón mas fuerte (paso anterior) que aun no haya atacado, atacará al escuadrón al que pueda infligir el mayor daño posible (el calculo de daño incluye caracteristicas).
3. Solo se atacara, si el oponente tiene salud suficiente, mayor o igual a la "fuerza del escuadron", si no se buscara otro objetivo
4. si varios enemigos pueden recibir el mismo daño, atacará al escuadrón que sea la mayor amenaza.
5. la sequencia de ataque es alternada, Si un bando tiene más escuadrones (ejemplo: 10 vs 5), los escuadrones extras esperan su turno hasta que todos hayan atacado una vez, y luego se repite el ciclo, hasta que solo quede un bando con vida
7. el daño acumulado solo permanece durante la batalla
8. el daño maximo aplicado se limita a la cantidad de vida que tiene el oponente

formulas:
fuerza del escuadron = la fuerza de la tropa + el % de fuerza adicional × número de tropas en el escuadrón (NO incluye las características)

example: 100 archerG1 with 55% strength bonus    vs flying
fuerza del escuadron =50 + 55% * 100 = 7750

daño maximo = la fuerza de la tropa + el % de fuerza adicional + el % de las caracteristicas × número de tropas en el escuadrón

example: 100 archerG1 with 55% strength bonus    vs flying (67%)
daño maximo =50 + 55% + 67% * 100 = 11100


2. Daño efectivo:
- El daño se limita a la vida actual del enemigo.
- Si el daño aplicado supera la vida del enemigo, el excedente no se acumula, y el enemigo muere.
- damage is calculated based on the stack strength and bonuses
- Damage Application: Damage is applied to the entire stack, reducing the number of units based on the damage dealt.
- Fórmula de daño efectivo:


efectiveDamage = min(
    baseStr * (1 + (bonusStr + vsXPercent)/100) * unitsAmount,
    totalHealth_enemy  # Límite máximo: vida actual del objetivo
)

si la categoria y subgrupo del oponente coinciden con el tipo del bono de ataque, estos se deben sumar en el calculo del daño efectivo, ejemplo para un enemigo de categoria ranged, subgroup giant, la formula seria:

efectiveDamage = min(
    baseStr * (1 + (bonusStr + vsGiantPercent + vsRangedPercent)/100) * unitsAmount,
    totalHealth_enemy  # Límite máximo: vida actual del objetivo
)


3. Daño acumulado:
- Si el enemigo sobrevive, el daño adicional se suma en el próximo ataque.

4. Turnos alternados:
- Stacks Take Turns: Stacks attack one at a time, alternating between player and enemy.
- Alternating Turns: Each stack from the player and enemy takes turns attacking.
- Remaining Stacks: any stacks that haven't attacked yet, will attack at the end of the round.

5. Priorización de amenaza:
- Si múltiples enemigos son vulnerables a tu ataque, eliges al que represente mayor amenaza futura.
- Fórmula de amenaza:
Amenaza = totalStrength_enemigo × (1 +( bonus_enemigo_vs_tu_categoría + bonus_enemigo_vs_tu_subgrupo)/100)

6. Ataque sin bono:
- Si atacas sin coincidir con el tipo de bono, el daño es igual a tu fuerza total.
- Fórmula de fuerza total:
totalStrength = baseStr * (1 + bonusStr/100) * unitsAmount


8. Vida total:
- Fórmula de vida total:
totalHealth = baseHp * (1 + bonusHp/100) * unitsAmount - accumulatedDamage

9. Fuerza total enemigo:
- Fórmula de fuerza total para enemigos (sin bonus):
totalStrength = baseStr * unitsAmount

10. Vida total enemigo:
- Fórmula de vida total para enemigos (sin bonus):
totalHealth = baseHp * unitsAmount - acumulatedDamage

11. Victory Conditions:
- Elimination: The combat ends when one side has no remaining units in any of its stacks.
- Winner Declaration: The side with remaining units is declared the winner.

tengo la siguiente interface en typescript:


export interface ObjProps {
  name: string
  category: Category // melee, ranged,mounted,flying,| scout|siege
  group: Group // 'guardsman' specialist engineer mercs
  subGroup: SubGroup //'elemental' | 'dragon' | 'beast' | 'giant'
  BASESTR: number
  BASEHP: number
  strBonus?: number
  hpBonus?: number
  multiplier: number // para las catapultas que tienen x 20
  vsRangedPercent: number
  vsSiegePercent: number
  vsBeastPercent: number
  vsHumanPercent: number
  vsMountedPercent: number
  vsFlyingPercent: number
  vsMeleePercent: number
  vsFortificationsPercent: number
  vsGiantPercent: number
  vsEpicPercent: number
  vsElementalPercent: number
  vsDragonPercent: number
}

export interface FightStack {
  id: string
  unit: ObjProps
  unitsAmount: number
  originalUnitsAmount: number
  accumulatedDamage: number
}

todos los stacks, tanto del #enemy como del #player son de tipo FightStack

we have the following data:
    citadel JSON data (#enemy): ${citadelJsonData}
    player JSON data (#player):${jsondata}

battle report sequence of #enemy1 vs #player1, (#battleReport1):
    ${sequence}

the reason for the attack in the batle report is correct, the game rules not much

compara las reglas de juego con la razon del por que se elije el objetivo a atacar en el reporte de batalla, si en caso ambos no se alineen, el reporte de batalla debe tener preferencia en la logica, las reglas del juego no estan 100% afinadas


reglas de seleccion confirmadas:
- The strongest troop in each army would be the first striker for both sides.
- when attacking, the target is selected by how much that attacker can do to the opponent.
- The attacker would always choose the defender that it can do the most damage to.
- if equal damage can be done to multiple squads, it chooses the one that is most "threatening" (with the most potential damage against itself).
- si mi fuerza total incluido el bono de fuerza, sin el bono vsXPercent, es mayor que la vida disponible del objetivo, entonces se elige otro objetivo
- the strongest one available se usa como fallback despues de haber revisado las otras opciones para seleccionar objetivos de ataque


muestrame un algoritmo de seleccion de objetivo de ataque
y la implementacion de la funcion selectTargetToAttack en typescript


if i have damage bonus against certain category and subgroup, this should take preference, if only one enemy belong to those categories, then it will be selected, if more than one enemy belong to the same category or subgroup, then it should check which one have enough health to receive the attack with all bonuses, then fallback to biggest threat, and finally fallback to strongest


en que se seleccione todos los objetivos vivos del oponente
y que filtre todos los oponentes que su vida total con bonos incluidos menos el daño acumulado,
sea menor igual al su vida daño total del atacante con bonos incluidos
ademas de filtrar por mi vida total con bonos incluido menos el daño acumulado,
sea menor igual que el daño total del defensor con bonos incluidos

y si no encuentra ninguno, que retorne el oponente mas fuerte como fallback

filtro: alive===true &&& miVida<=suDmg && miDmg>=suVida || strongest oponent

utiliza el español, para hacer el analisis y las respuestas


----
ignora lo que continua abajo de esta linea:
    ${myUnits}
    ------
    ${citadelUnits}
    `
    setJsonExport(report2)
    alert('asdfasfasd')
    console.log('report promp', jsonExport)

    navigator.clipboard.writeText(report2)
  }

  const handleDrag = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const index1 = army.findIndex(stack => stack.id === active.id)
      const index2 = army.findIndex(stack => stack.id === over.id)
      setArmy(arrayMove(army, index1, index2))
    }
  }

  const saveData = () => {
    const data = prepareExportData(useStackStore.getState())
    const a = document.createElement('a')
    console.log('save data prepared', data)
    const json = encodeHash(JSON.stringify(data))
    const blob = new Blob([json], { type: 'octet/stream' })
    const url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = 'army.txt'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const readFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      const reader = new FileReader()

      if (event.target.files && event.target.files[0]) {
        reader.onload = function (e) {
          const output = e.target?.result
          console.log('file content', String(output))
          if (output) {
            decodeAndLoadArmySetup(String(output))
          }
        } //end onload()
        reader.readAsText(event.target.files[0])
      } //end if html5 filelist support
    } else {
      alert('The File APIs are not fully supported by your browser.')
    }
  }

  const loadPresetArmy = (event: ChangeEvent<HTMLSelectElement>) => {
    setReportMeAttacks([])
    setReportMeDefends([])
    setPresetArmy(event.target.value)

    switch (event.target.value) {
      case 'elfHeroic17':
        decodeAndLoadArmySetup(elfHeroic17)
        break
      case 'testsequence1':
        decodeAndLoadArmySetup(testsequence1)
        break
      case 'testsequence2':
        decodeAndLoadArmySetup(elf30somebearsurvive)
        break
      case 'testsequence3':
        decodeAndLoadArmySetup(elf30somebearsurvive2)
        break

      case 'testElf30':
        decodeAndLoadArmySetup(testElf30)
        break
      case 'elf10G5M3':
        decodeAndLoadArmySetup(elf10G5M3)
        break
      case 'elf10G5M5':
        decodeAndLoadArmySetup(elf10G5M5)
        break
      case 'elf10G5M5b':
        decodeAndLoadArmySetup(elf10G5M5b)
        break
      case 'elf10G3M5Mercs':
        decodeAndLoadArmySetup(elf10G3M5Mercs)
        break
      case 'elf15G5M3':
        decodeAndLoadArmySetup(elf15G5M3)
        break
      case 'elf15G5M3b':
        decodeAndLoadArmySetup(elf15G5M3b)
        break
      case 'elf15G5M3c':
        decodeAndLoadArmySetup(elf15G5M3c)
        break
      case 'elf15G5S6':
        decodeAndLoadArmySetup(elf15G5S6)
        break
      case 'elf15G5M5':
        decodeAndLoadArmySetup(elf15G5M5)
        break
      case 'elf15G5M5S5':
        decodeAndLoadArmySetup(elf15G5M5S5)
        break
      case 'elf20G6Mercs':
        decodeAndLoadArmySetup(elf20G6Mercs)
        break
      case 'elf20G6S5Mercs':
        decodeAndLoadArmySetup(elf20G6S5Mercs)
        break
      case 'elf20G7M7':
        decodeAndLoadArmySetup(elf20G7M7)
        break
      case 'elf20G7Mercs':
        decodeAndLoadArmySetup(elf20G7Mercs)
        break
      case 'elf20G7Mercs2':
        decodeAndLoadArmySetup(elf20G7Mercs2)
        break
      case 'cursed20G5S5M4':
        decodeAndLoadArmySetup(cursed20G5S5M4)
        break
      case 'cursed20G5S5Merc':
        decodeAndLoadArmySetup(cursed20G5S5Merc)
        break
      case 'cursed25':
        decodeAndLoadArmySetup(cursed25)
        break
      case 'cursed25G6M7Mercs':
        decodeAndLoadArmySetup(cursed25G6M7Mercs)
        break

      case 'cursed25M6Mercs':
        decodeAndLoadArmySetup(cursed25M6Mercs)
        break
      case 'cursed25G6M7MercsB':
        decodeAndLoadArmySetup(cursed25G6M7MercsB)
        break
      case 'cursed25G8M9':
        decodeAndLoadArmySetup(cursed25G8M9)
        break
      case 'elf25G7S6M5':
        decodeAndLoadArmySetup(elf25G7S6M5)
        break
      case 'elf25G7S6M5b':
        decodeAndLoadArmySetup(elf25G7S6M5b)
        break
      case 'elf25G7S7M5':
        decodeAndLoadArmySetup(elf25G7S7M5)
        break

      case 'elf25G8S7':
        decodeAndLoadArmySetup(elf25G8S7)
        break

      case 'elf30G8S6M5':
        decodeAndLoadArmySetup(elf30G8S6M5)
        break
      case 'elf30G8S8M8':
        decodeAndLoadArmySetup(elf30G8S8M8)
        break
      case 'elf30G9S9':
        decodeAndLoadArmySetup(elf30G9S9)
        break
      case 'elf30G9S9b':
        decodeAndLoadArmySetup(elf30G9S9b)
        break
      case 'noob':
        alert('IF you like this idea, send me your BR to include it in the next version @moogumuro')
        break

      case 'cursed25Test':
        decodeAndLoadArmySetup(cursed25Test)
        break
      case 'testSeq4Elf20':
        decodeAndLoadArmySetup(testSeq4Elf20)
        break
      case 'testSeq3':
        decodeAndLoadArmySetup(testSeq3)
        break
      case 'testSeq4Elf25':
        decodeAndLoadArmySetup(testSeq4Elf25)
        break
    }
  }

  const copyToClipboardHashedArmyData = () => {
    const data = JSON.stringify(prepareExportData(useStackStore.getState()))
    navigator.clipboard.writeText(encodeHash(data))
  }

  const isEnoughCatasToKillWalls = (): boolean => {
    if (armyRef.current.length === 0) {
      return false
    }

    const catasId = [
      ARMY.CatapultE1.id,
      ARMY.CatapultE2.id,
      ARMY.CatapultE3.id,
      ARMY.CatapultE4.id,
      ARMY.CatapultE5.id,
      ARMY.CatapultE6.id,
      ARMY.CatapultE7.id,
      ARMY.CatapultE8.id,
      ARMY.CatapultE9.id,
      ARMY.scorpionV.id,
      ARMY.trebuchetVI.id,
      ARMY.palintoneVII.id,
      ARMY.arielII.id
    ]

    const selectedSieges = army.filter(stack => catasId.includes(stack.unit.id))

    if (selectedSieges.length === 0) {
      return false
    }

    const totalDamage = selectedSieges.reduce((total, stack) => {
      const siegeDamage =
        stack.unitsAmount *
        (stack.unit.BASESTR *
          stack.unit.multiplier *
          (1 + (stack.strBonus + stack.unit.vsFortificationsPercent) / 100))
      return total + siegeDamage
    }, 0)

    const citadelWallsHP = citadel.stacks
      .filter(stack => stack.unit.category === 'fortification')
      .reduce((total, stack) => total + stack.unit.BASEHP * stack.unitsAmount, 0)

    const result = totalDamage >= citadelWallsHP
    return result
  }

  const showCatasVsWallWarning = !isEnoughCatasToKillWalls()
  const troopsSummary = army
    .map(stack => {
      return `${stack.unitsAmount} ${stack.unit.name}`
    })
    .join(', ')

  return (
    <>
      <PageTitle title='Calc' />
      <ArmyList />

      <nav className='pt-[57px] sm:ml-64 flex flex-col'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3 flex'>
          <div className='config-container flex items-center'>
            <div className=''>
              <button
                data-drawer-target='sidebar-multi-level-sidebar'
                data-drawer-toggle='sidebar-multi-level-sidebar'
                aria-controls='sidebar-multi-level-sidebar'
                type='button'
                className='cursor-pointer sm:hidden focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300   rounded-lg text-xs px-0.5 py-0.5 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
              >
                Show Army
              </button>
            </div>

            <div className='ml-2 flex items-center'>
              <label>Target </label>
              <select
                className='ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                value={selectedTarget}
                onChange={changeMobTarget}
              >
                <option value='citadele10'>Elf Citadel lvl 10</option>
                <option value='citadele15'>Elf Citadel lvl 15</option>
                <option value='citadele20'>Elf Citadel lvl 20</option>
                <option value='citadele25'>Elf Citadel lvl 25</option>
                <option value='citadele30'>Elf Citadel lvl 30</option>
                <option value='citadelc20'>Cursed Citadel lvl 20</option>
                <option value='citadelc25'>Cursed Citadel lvl 25</option>
                <option value='lvl17HeroicElfSquad'>lvl 17 Heroic Elf Squad</option>
              </select>
            </div>

            <div className='ml-2 '>
              <label>
                Show target data{' '}
                <Checkbox
                  checked={showTargetData}
                  onChange={() => setShowTargetData(!showTargetData)}
                />
              </label>
            </div>
          </div>
        </div>

        {showTargetData && (
          <div className='hidden lg:block'>
            {selectedTarget === 'citadele10' && <CitadelData type='e10' />}
            {selectedTarget === 'citadele15' && <CitadelData type='e15' />}
            {selectedTarget === 'citadele20' && <CitadelData type='e20' />}
            {selectedTarget === 'citadele25' && <CitadelData type='e25' />}
            {selectedTarget === 'citadele30' && <CitadelData type='e30' />}
            {selectedTarget === 'citadelc20' && <CitadelData type='c20' />}
            {selectedTarget === 'citadelc25' && <CitadelData type='c25' />}
            {selectedTarget === 'lvl17HeroicElfSquad' && <div>lvl17 Heroic Elf Squad</div>}
          </div>
        )}

        <div className='flex gap-4'>
          <div className=' border border-blue-400/25 p-2 border-opacity-10'>
            <div>
              <label>Leadership </label>
              <input
                type='number'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                value={leadership}
                onChange={changeLeadership}
                required
              />
            </div>
            <div>
              <label>Authority (mercs)</label>
              <input
                type='number'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                value={authority}
                onChange={changeAuthority}
                required
              />
            </div>
            <div>
              <label>Dominance (monsters)</label>
              <input
                type='number'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                value={dominance}
                onChange={changeDominance}
                required
              />
            </div>
          </div>

          <div>
            <div className=' border border-blue-400/25 p-2 border-opacity-10'>
              <div className=' '>
                <label>Sacrifice strength limit</label>
                <input
                  type='radio'
                  value='sacrificeStatsLimit'
                  name='strengthLimit'
                  checked={addUnitMode === 'sacrificeStatsLimit'}
                  onChange={() => {
                    setAddUnitMode('sacrificeStatsLimit')
                  }}
                />
              </div>
              <div>
                <label>Previous stack strength limit/Decrement</label>
                <input
                  type='radio'
                  value='previousStackStatsLimit'
                  name='strengthLimit'
                  checked={addUnitMode === 'previousStackStatsLimit'}
                  onChange={() => {
                    setAddUnitMode('previousStackStatsLimit')
                  }}
                />
              </div>
            </div>

            <div className='mt-2  border border-blue-400/25 p-2 border-opacity-10 flex'>
              <label>
                Show tips <Checkbox checked={showTips} onChange={() => setShowTips(!showTips)} />
              </label>
            </div>

            <div className='mt-2 border border-blue-400/25 p-2 border-opacity-10 flex gap-2'>
              <button
                className='px-2 py-0.5 bg-red-600 text-gray-100 rounded-2xl'
                onClick={generateData}
              >
                testAI
              </button>

              <p onClick={genTestData}>test</p>
              <p onClick={genAIData}>testAI2</p>

              <label>
                Seq <Checkbox checked={pasto} onChange={() => setPasto(!pasto)} />
              </label>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className=' border border-blue-400/25 p-2 border-opacity-10'>
              <div>
                <label>Card</label>{' '}
                <input
                  type='radio'
                  value='card'
                  name='cardType'
                  checked={cardType === 'card'}
                  onChange={() => {
                    setCardType('card')
                  }}
                />
              </div>
              <div>
                <label>Small Card</label>{' '}
                <input
                  type='radio'
                  value='card'
                  name='cardType'
                  checked={cardType === 'smallcard'}
                  onChange={() => {
                    setCardType('smallcard')
                  }}
                />
              </div>
              <div>
                <label>Tiny Card</label>{' '}
                <input
                  type='radio'
                  value='card'
                  name='cardType'
                  checked={cardType === 'tinycard'}
                  onChange={() => {
                    setCardType('tinycard')
                  }}
                />
              </div>
            </div>

            <div className=''>
              <button
                className='px-5 py-4 cursor-pointer bg-green-500 text-md font-bold text-white rounded-lg text-3xl leading-5 tracking-widest'
                onClick={verifyCitadel}
                disabled={loading}
              >
                {loading ? '.....thinking' : 'SIMULATE Fight'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className='p-1 sm:ml-64  bg-gray-900'
        onClick={() => {
          navigator.clipboard.writeText(troopsSummary)
        }}
      >
        <p className='block w-full'>click to copy</p>
        {troopsSummary}
      </div>
      <div className='pt-[57px] sm:ml-64 flex bg-gray-900'>
        <div className='p-4 border-2 border-blue-400/25  w-full min-w-[1100px]'>
          <div className='stack-container'>
            <div className='sticky  top-[57px]'>
              <div className='flex items-center  '>
                <table className='skill-info'>
                  <thead>
                    <tr>
                      <th onClick={copyToClipboardHashedArmyData} className='cursor-pointer'>
                        Leadrshp
                      </th>
                      <th>Authrity</th>
                      <th>Dominnce</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{getArmyLeadership(army)}</td>
                      <td>{getArmyAuthority(army)}</td>
                      <td>{getArmyDominance(army)}</td>
                    </tr>
                  </tbody>
                </table>

                <div className='ml-5 flex items-center'>
                  <label
                    htmlFor='gap'
                    title='is a space between troops strength, in case a strength percent changes to avoid loosing the stack order and its calculated based on the first troop stack strength'
                  >
                    Gap Percent
                  </label>
                  <input
                    id='gap'
                    className='ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full min-w-[50px] max-w-[60px] h-[2.5rem] p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    type='number'
                    min={0}
                    max={100}
                    value={gapBasePercent}
                    onChange={e => setGapBasePercent(parseInt(e.target.value))}
                  />
                </div>

                <div className='ml-5 flex    '>
                  <label className=' text-center rounded-lg items-center cursor-pointer focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  text-lg px-1 py-0.5   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed'>
                    <span>Import army setup</span>
                    <input type='file' className='hidden w-' onChange={readFile} />
                  </label>

                  <button
                    className='ml-2  rounded-lg text-center items-center cursor-pointer focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  text-lg px-1 py-0.5   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed'
                    onClick={saveData}
                  >
                    Export army
                  </button>

                  <div className='ml-10 w-full min-w-[250px] flex items-center'>
                    <label>Preset</label>
                    <select
                      className='ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      onChange={loadPresetArmy}
                      value={presetArmy}
                    >
                      <option value='' disabled>
                        Select preset
                      </option>

                      <option value='cursed20G5S5M4'>Citadel Cursed 20, G5,S5,M4</option>
                      <option value='cursed20G5S5Merc'>Citadel Cursed 20, G5,S5,Mercs</option>
                      
                      <option value='dash' disabled>
                        ------------------
                      </option>
                      <option value='cursed25' className='bg-green-800'>
                        Citadel Cursed 25
                      </option>
                      <option value='cursed25M6Mercs' className='bg-green-800'>
                        Citadel Cursed 25 M6,Mercs
                      </option>
                      <option value='cursed25G6M7Mercs' className='bg-green-800'>
                        Citadel Cursed 25 G6,M7,Mercs
                      </option>
                      <option value='cursed25G6M7MercsB' className='bg-green-800'>
                        Citadel Cursed 25 G6,M7,Mercs (2)
                      </option>
                      <option value='cursed25G8M9' className='bg-green-800'>
                        Citadel Cursed 25 G8,M9
                      </option>
                      <option value='dash' disabled>
                        ------------------
                      </option>
                      <option value='elf10G3M5Mercs' className='bg-orange-800'>
                        Citadel Elf 10 G3,M4, Mercs
                      </option>
                      
                      <option value='elf10G5M3' className='bg-orange-800'>
                        Citadel Elf 10 G5,M3
                      </option>
                      <option value='elf10G5M5b' className='bg-orange-800'>
                        Citadel Elf 10 G5,M5(2)
                      </option>
                      <option value='elf10G5M5' className='bg-orange-800'>
                        Citadel Elf 10 G5,M5
                      </option>
                      <option value='elf10G5M5S5' className='bg-orange-800'>
                        Citadel Elf 10 G5,M5,S5
                      </option>
                      <option value='dash' disabled>
                        ------------------
                      </option>
                      <option value='elf15G5M3' className='bg-blue-600'>
                        Citadel Elf 15 G5,M3
                      </option>
                      <option value='elf15G5M3b' className='bg-blue-600'>
                        Citadel Elf 15 G5,M3(2)
                      </option>
                      <option value='elf15G5M3c' className='bg-blue-600'>
                        Citadel Elf 15 G5,M3(3)
                      </option>
                      <option value='elf15G5S6' className='bg-blue-600'>
                        Citadel Elf 15 G5,S6
                      </option>
                      <option value='elf15G5M5' className='bg-blue-600'>
                        Citadel Elf 15 G5,M5
                      </option>
                      <option value='elf15G5M5S5' className='bg-blue-600'>
                        Citadel Elf 15 G5,M5,S5
                      </option>
                      <option value='dash' disabled>
                        ------------------
                      </option>
                      <option value='elf20G6Mercs' className='bg-green-800'>
                        Citadel Elf 20 G6,Mercs
                      </option>
                      <option value='elf20G6S5Mercs' className='bg-green-800'>
                        Citadel Elf 20 G6,S5,Mercs
                      </option>
                      <option value='elf20G7M7' className='bg-green-800'>
                        Citadel Elf 20 G7,M7
                      </option>
                      <option value='elf20G7Mercs' className='bg-green-800'>
                        Citadel Elf 20 G7,Mercs
                      </option>
                      <option value='elf20G7Mercs2' className='bg-green-800'>
                        Citadel Elf 20 G7,Mercs(2)
                      </option>
                      <option value='dash' disabled>
                        ------------------
                      </option>
                      <option value='elf25G7S6M5' className='bg-orange-600'>
                        Citadel Elf 25 G7,S6,M5
                      </option>
                      <option value='elf25G7S6M5b' className='bg-orange-600'>
                        Citadel Elf 25 G7,S6,M5 (2)
                      </option>
                      <option value='elf25G7S7M5' className='bg-orange-600'>
                        Citadel Elf 25 G7,S7,M5
                      </option>
                      <option value='elf25G8S7' className='bg-orange-600'>
                        Citadel Elf 25 G8,S7
                      </option>
                      <option value='dash' disabled>
                        ------------------
                      </option>
                      
                      <option value='elf30G8S6M5' className='bg-green-800'>
                        Citadel Elf 30 G8,M5,S6
                      </option>
                      <option value='elf30G8S8M8' className='bg-green-800'>
                        Citadel Elf 30 G8,M8,S8
                      </option>
                      <option value='elf30G9S9' className='bg-green-800'>
                        Citadel Elf 30 G9,M9,S9 (1)
                      </option>
                      <option value='elf30G9S9b' className='bg-green-800'>
                        Citadel Elf 30 G9,M9,S9 (2)
                      </option>

                      <option value='dash' disabled>
                        ------------------
                      </option>

                      <option value='testElf30'>test simulator Elf30</option>
                      <option value='testsequence1'>testsequence1</option>
                      <option value='testsequence2'>someBearMustSurvive</option>
                      <option value='testsequence3'>someBearMustSurvive2</option>
                      <option value='testSeq4Elf20'>testSeq4 elf20</option>
                      <option value='testSeq3'>testSeq3 elf25</option>
                      <option value='testSeq4Elf25'>testSeq4 elf25</option>
                      <option value='cursed25Test'>cursed25Test</option>
                      <option value='elfHeroic17'>elfHeroic17</option>
                    </select>
                  </div>
                </div>
              </div>

              {showTips && <Tips />}

              {pasto && (
                <div className='relative shrink-0 min-w-[300px]'>
                  <textarea
                    rows={15}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   w-full   p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={sequence}
                    onChange={e => setSequence(e.target.value)}
                  />
                </div>
              )}

              <div className='btn-group'>
                <button
                  className='text-center items-center cursor-pointer focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  text-lg px-[20%] py-0.5   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed'
                  onClick={calcSTR}
                  disabled={loading}
                >
                  {loading ? '.....thinking' : 'CALCULATE'}
                </button>
                <button
                  className='cursor-pointer focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300    text-lg px-3.5 py-0.5 me-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
                  onClick={() => {
                    setArmy([])
                    setPresetArmy('')
                  }}
                >
                  Clear
                </button>
                <button
                  className='cursor-pointer focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300    text-lg px-3.5 py-0.5 me-2  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800'
                  onClick={() => {
                    setArmy(
                      armyRef.current.toSorted((a, b) => {
                        // sort based on unit total health descending
                        return (
                          b.unit.BASEHP * (1 + b.hpBonus / 100) -
                          a.unit.BASEHP * (1 + a.hpBonus / 100)
                        )
                      })
                    )
                  }}
                >
                  Sort by health (descending)
                </button>

                {showCatasVsWallWarning && (
                  <span className='ml-auto text-red-700'>
                    Not enough catas to kill citadel walls
                  </span>
                )}
              </div>
            </div>

            <div className='stack-list'>
              <DndContext onDragEnd={handleDrag} /*sensors={sensors}*/>
                <SortableContext items={army}>
                  {army.map((stack, i, arr) => {
                    if (cardType === 'tinycard') {
                      return <TinyCard stack={stack} key={stack.id} />
                    } else if (cardType === 'smallcard') {
                      return <SmallCard stack={stack} key={stack.id} />
                    } else {
                      if (i > 0) {
                        const stackBonus = stack.strBonus > 0 ? 1 + stack.strBonus / 100 : 1
                        const stackStr = stack.unit.BASESTR * stackBonus * stack.unitsAmount

                        const prevStack = arr[i - 1]
                        const prevStackBonus =
                          prevStack.strBonus > 0 ? 1 + prevStack.strBonus / 100 : 1
                        const prevStackStr =
                          prevStack.unit.BASESTR * prevStackBonus * prevStack.unitsAmount

                        return (
                          <Card
                            stack={stack}
                            key={stack.id}
                            gapValue={gapStrength}
                            overflow={stackStr > prevStackStr}
                          />
                        )
                      } else {
                        return (
                          <Card
                            stack={stack}
                            key={stack.id}
                            gapValue={gapStrength}
                            overflow={false}
                          />
                        )
                      }
                    }
                  })}
                </SortableContext>
              </DndContext>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full min-w-[350px]'>
          <BattleReport
            open={openModal}
            onOpen={setOpenModal}
            attackReport={reportMeAttacks}
            defendReport={reportMeDefends}
            title={selectedTarget}
          />
        </div>
      </div>

      {/* <div className='p-4 border-2 border-gray-300'>
        <h3 className='text-lg font-bold mt-2'>ARMY json data</h3>
        <p className='text-sm text-gray-500 w-full'>{jsonExport}</p>
      </div> */}
    </>
  )
}

export default Dos
