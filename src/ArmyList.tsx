import { useStackStore } from './stackStore'
import { BasicUnit, Stack, Unit } from './types'
import './armyList.css'
import { useEffect, useState } from 'react'
import { ARMY } from './soldiers'
import { whoCanIAttack } from './utils'
// import { useState } from 'react'

export const ArmyList = () => {
  const [search, setSearch] = useState('')
  const [filterVsTypes, setFilterVsTypes] = useState<string[]>(() => {
    // getting stored value
    const saved = localStorage.getItem('filterVsTypes')
    return saved
      ? JSON.parse(saved)
      : [
          'Melee',
          'Ranged',
          'Flying',
          'Mounted',
          'Siege',
          'Fortifications',
          'Dragon',
          'Elemental',
          'Giant',
          'Beast' //human,epic
        ]
  })

  const [filterTypes, setFilterTypes] = useState<string[]>(() => {
    // getting stored value
    const saved = localStorage.getItem('filterTypes')
    return saved
      ? JSON.parse(saved)
      : ['', 'melee', 'ranged', 'flying', 'mounted', 'siege', 'scout']
  })
  const [filterGroups, setFilterGroups] = useState<string[]>(() => {
    // getting stored value
    const saved = localStorage.getItem('filterGroups')
    return saved ? JSON.parse(saved) : ['', 'dragon', 'elemental', 'giant', 'beast']
  })
  const [filterGuardLevels, setFilterGuardLevels] = useState<string[]>(() => {
    // getting stored value
    const saved = localStorage.getItem('filterGuardLevels')
    return saved ? JSON.parse(saved) : ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  })
  const [filterSpecialistLevels, setFilterSpecialistLevels] = useState<string[]>(() => {
    // getting stored value
    const saved = localStorage.getItem('filterSpecialistLevels')
    return saved ? JSON.parse(saved) : ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  })
  const [filterMercLevels, setFilterMercLevels] = useState<string[]>(() => {
    // getting stored value
    const saved = localStorage.getItem('filterMercLevels')
    return saved ? JSON.parse(saved) : ['5', '6', '7', '8', '9']
  })
  const [filterMonsterLevels, setFilterMonsterLevels] = useState<string[]>(() => {
    // getting stored value
    const saved = localStorage.getItem('filterMonsterLevels')
    return saved ? JSON.parse(saved) : ['3', '4', '5', '6', '7', '8', '9']
  })

  // const [collapsed, setCollapsed] = useState(false)
  const addStack = useStackStore(state => state.addStack)
  // const bonus = useStackStore(state => state.bonus)
  const army = useStackStore(state => state.army)

  useEffect(() => {
    if (filterTypes !== undefined) {
      localStorage.setItem('filterTypes', JSON.stringify(filterTypes))
    }
    if (filterGroups !== undefined) {
      localStorage.setItem('filterGroups', JSON.stringify(filterGroups))
    }
    if (filterGuardLevels !== undefined) {
      localStorage.setItem('filterGuardLevels', JSON.stringify(filterGuardLevels))
    }
    if (filterSpecialistLevels !== undefined) {
      localStorage.setItem('filterSpecialistLevels', JSON.stringify(filterSpecialistLevels))
    }
    if (filterMonsterLevels !== undefined) {
      localStorage.setItem('filterMonsterLevels', JSON.stringify(filterMonsterLevels))
    }
  }, [filterTypes, filterGroups, filterGuardLevels, filterSpecialistLevels, filterMonsterLevels])

  const addTroops = (type: string) => {
    const UNIT_TYPE_MAPPING: Record<string, BasicUnit> = {
      // General Units
      RiderG1: ARMY.RiderG1,
      RiderG2: ARMY.RiderG2,
      RiderG3: ARMY.RiderG3,
      RiderG4: ARMY.RiderG4,
      RiderG5: ARMY.RiderG5,
      SpearmanG1: ARMY.SpearmanG1,
      SpearmanG2: ARMY.SpearmanG2,
      SpearmanG3: ARMY.SpearmanG3,
      SpearmanG4: ARMY.SpearmanG4,
      SpearmanG5: ARMY.SpearmanG5,
      ArcherG1: ARMY.ArcherG1,
      ArcherG2: ARMY.ArcherG2,
      ArcherG3: ARMY.ArcherG3,
      ArcherG4: ARMY.ArcherG4,
      ArcherG5: ARMY.ArcherG5,
      battleGriffinV: ARMY.battleGriffinV,
      battleGriffinVI: ARMY.battleGriffinVI,
      battleGriffinVII: ARMY.battleGriffinVII,
      heavyArbalesterVI: ARMY.heavyArbalesterVI,
      heavyArbalesterVII: ARMY.heavyArbalesterVII,
      heavyHalberdierVI: ARMY.heavyHalberdierVI,
      heavyHalberdierVII: ARMY.heavyHalberdierVII,
      mountedKnightVI: ARMY.mountedKnightVI,
      mountedKnightVII: ARMY.mountedKnightVII,
      purifierI: ARMY.purifierI,
      purifierII: ARMY.purifierII,
      punisherI: ARMY.punisherI,
      punisherII: ARMY.punisherII,
      smiterI: ARMY.smiterI,
      smiterII: ARMY.smiterII,
      coraxI: ARMY.coraxI,
      coraxII: ARMY.coraxII,

      // Specialists
      SwordmanS1: ARMY.SwordmanS1,
      SwordmanS2: ARMY.SwordmanS2,
      SwordmanS3: ARMY.SwordmanS3,
      SwordmanS4: ARMY.SwordmanS4,
      SwordmanS5: ARMY.SwordmanS5,
      SpyS1: ARMY.SpyS1,
      SpyS2: ARMY.SpyS2,
      SpyS3: ARMY.SpyS3,
      SpyS4: ARMY.SpyS4,
      SpyS5: ARMY.SpyS5,
      deadshotV: ARMY.deadshotV,
      deadshotVI: ARMY.deadshotVI,
      deadshotVII: ARMY.deadshotVII,
      lionRiderV: ARMY.lionRiderV,
      lionRiderVI: ARMY.lionRiderVI,
      lionRiderVII: ARMY.lionRiderVII,
      vulturesV: ARMY.vulturesV,
      vulturesVI: ARMY.vulturesVI,
      vulturesVII: ARMY.vulturesVII,
      heavyKnightVI: ARMY.heavyKnightVI,
      heavyKnightVII: ARMY.heavyKnightVII,
      swiftJaegerVI: ARMY.swiftJaegerVI,
      swiftJaegerVII: ARMY.swiftJaegerVII,
      legitimistI: ARMY.legitimistI,
      legitimistII: ARMY.legitimistII,
      duelistI: ARMY.duelistI,
      duelistII: ARMY.duelistII,
      whitemaneI: ARMY.whitemaneI,
      whitemaneII: ARMY.whitemaneII,
      royalLionI: ARMY.royalLionI,
      royalLionII: ARMY.royalLionII,
      panopticI: ARMY.panopticI,
      panopticII: ARMY.panopticII,

      // Engineering
      CatapultE1: ARMY.CatapultE1,
      CatapultE2: ARMY.CatapultE2,
      CatapultE3: ARMY.CatapultE3,
      CatapultE4: ARMY.CatapultE4,
      CatapultE5: ARMY.CatapultE5,
      CatapultE6: ARMY.CatapultE6,
      CatapultE7: ARMY.CatapultE7,
      CatapultE8: ARMY.CatapultE8,
      CatapultE9: ARMY.CatapultE9,

      // Mercenaries
      epicMonsterHunterVI: ARMY.epicMonsterHunterVI,
      epicMonsterHunterVII: ARMY.epicMonsterHunterVII,
      epicMonsterHunterII: ARMY.epicMonsterHunterII,
      bunnieII: ARMY.bunnieII,
      chariotVI: ARMY.chariotVI,
      deathChariotVI: ARMY.deathChariotVI,
      legionaryVI: ARMY.legionaryVI,
      arbalesterVI: ARMY.arbalesterVI,
      sphynxVI: ARMY.sphynxVI,
      knightVI: ARMY.knightVI,
      trailseekerVI: ARMY.trailseekerVI,
      rhinoRiderVI: ARMY.rhinoRiderVI,
      boneGolemVI: ARMY.boneGolemVI,
      sheduVI: ARMY.sheduVI,
      abominationVI: ARMY.abominationVI,
      entVI: ARMY.entVI,
      archdemonVI: ARMY.archdemonVI,
      lightningLordVII: ARMY.lightningLordVII,
      cursedDragonVII: ARMY.cursedDragonVII,
      seaLordVII: ARMY.seaLordVII,
      sandwormVII: ARMY.sandwormVII,
      lifeDragonVII: ARMY.lifeDragonVII,
      goldenDragonVII: ARMY.goldenDragonVII,
      overlordVII: ARMY.overlordVII,
      fireLordVII: ARMY.fireLordVII,
      jungleKingVII: ARMY.jungleKingVII,
      wyvernII: ARMY.wyvernII,
      arielII: ARMY.arielII,
      warregalII: ARMY.warregalII,
      demonicSalamanderII: ARMY.demonicSalamanderII,
      jagoII: ARMY.jagoII,
      eternalCannoneerII: ARMY.eternalCannoneerII,
      slavicWarriorII: ARMY.slavicWarriorII,
      wardenII: ARMY.wardenII,
      highlanderII: ARMY.highlanderII,
      galloperII: ARMY.galloperII,
      quicksandII: ARMY.quicksandII,
      scarfaceII: ARMY.scarfaceII,
      pounderII: ARMY.pounderII,
      graceII: ARMY.graceII,

      // Monsters
      waterElementalIII: ARMY.waterElementalIII,
      battleBoarIII: ARMY.battleBoarIII,
      emeraldDragonIII: ARMY.emeraldDragonIII,
      stoneGargoyleIII: ARMY.stoneGargoyleIII,
      icePhoenixIV: ARMY.icePhoenixIV,
      flamingCentaurV: ARMY.flamingCentaurV,
      rubiGolemVI: ARMY.rubiGolemVI,
      windLordVII: ARMY.windLordVII,
      firePhoenixI: ARMY.firePhoenixI,
      firePhoenixII: ARMY.firePhoenixII,
      gorgonMedusaIV: ARMY.gorgonMedusaIV,
      fearsomeManticoraV: ARMY.fearsomeManticoraV,
      jungleDestroyerVI: ARMY.jungleDestroyerVI,
      ancientTerrorVII: ARMY.ancientTerrorVII,
      tricksterI: ARMY.tricksterI,
      tricksterII: ARMY.tricksterII,
      magicDragonIV: ARMY.magicDragonIV,
      desertConquerV: ARMY.desertConquerV,
      crystalDragonVI: ARMY.crystalDragonVI,
      blackDragonVII: ARMY.blackDragonVII,
      devastatorII: ARMY.devastatorII,
      EttinV: ARMY.EttinV,
      trollRiderVI: ARMY.trollRiderVI,
      destructiveColossusVII: ARMY.destructiveColossusVII,
      devastatorI: ARMY.devastatorI,
      manyArmedGuardianIV: ARMY.manyArmedGuardianIV,
      pathFinderVI: ARMY.pathFinderVI,
      swiftMarksmanV: ARMY.swiftMarksmanV,
      scorpionV: ARMY.scorpionV,
      gargoyleV: ARMY.gargoyleV,
      trebuchetVI: ARMY.trebuchetVI,
      bearV: ARMY.bearV,
      unicornRiderV: ARMY.unicornRiderV,
      bullRiderV: ARMY.bullRiderV,
      giantZombieV: ARMY.giantZombieV,
      palintoneVII: ARMY.palintoneVII,
      scorpionRiderV: ARMY.scorpionRiderV,
      ifritV: ARMY.ifritV,
      cyclopsV: ARMY.cyclopsV,
      firewormRiderV: ARMY.firewormRiderV,
      cursedDendroidVI: ARMY.cursedDendroidVI,
      krakenI: ARMY.krakenI,
      krakenII: ARMY.krakenII
    }

    const unitType = UNIT_TYPE_MAPPING[type] || null // Returns null if type not found

    if (!unitType) {
      return
    }

    // // TODO: move calc minsetup when add the soldier (left panel)
    // const unitsNeededToKill1Mob = calculateUnitsMobKill(monster, unitType)

    // console.log('min units mob kill', stack.unit.name, unitsNeededToKill1Mob)

    const stack: Stack = {
      // health: RiderG1.BASEHP + (RiderG1.BASEHP * bonus.rider.G1.hp) / 100,
      // strength: RiderG1.BASESTR + (RiderG1.BASESTR * bonus.rider.G1.str) / 100,
      leadership: 0, //RiderG1.LEADERSHIP,
      authority: 0,
      dominance: 0,
      gapPercent: 100,
      unit: unitType as Unit,
      id: unitType.id,
      unitKey: unitType.id, // key for ARMY object
      unitsAmount: 0, //unitsNeededToKill1Mob
      // minSetup: 0,
      // lockMinSetup: true,
      limit: 0,
      strBonus: 0,
      hpBonus: 0,
      unitLimit: 0,
      usePlusOne: false,
      useMinusOne: false,
      comment: '',
      useUnitLimit: false,
      useStrLimit: false,
      strLimit: 0,
      strLimitType: '',
      useHpLimit: false,
      HpLimit: 0
    }
    addStack(stack)
  }

  const markTypes = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (!filterTypes.includes(e.target.value)) {
        setFilterTypes([...filterTypes, e.target.value])
      }
    } else {
      setFilterTypes(filterTypes.filter(troop => troop !== e.target.value))
    }
  }
  const markVsTypes = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (!filterVsTypes.includes(e.target.value)) {
        setFilterVsTypes([...filterVsTypes, e.target.value])
      }
    } else {
      setFilterVsTypes(filterVsTypes.filter(troop => troop !== e.target.value))
    }
  }
  const markGroups = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (!filterGroups.includes(e.target.value)) {
        setFilterGroups([...filterGroups, e.target.value])
      }
    } else {
      setFilterGroups(filterGroups.filter(troop => troop !== e.target.value))
    }
  }
  const markGuardLevels = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (!filterGuardLevels.includes(e.target.value)) {
        setFilterGuardLevels([...filterGuardLevels, e.target.value])
      }
    } else {
      setFilterGuardLevels(filterGuardLevels.filter(troop => troop !== e.target.value))
    }
  }

  const markSpecialistLevels = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (!filterSpecialistLevels.includes(e.target.value)) {
        setFilterSpecialistLevels([...filterSpecialistLevels, e.target.value])
      }
    } else {
      setFilterSpecialistLevels(filterSpecialistLevels.filter(troop => troop !== e.target.value))
    }
  }
  const markMercLevels = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (!filterMercLevels.includes(e.target.value)) {
        setFilterMercLevels([...filterMercLevels, e.target.value])
      }
    } else {
      setFilterMercLevels(filterMercLevels.filter(troop => troop !== e.target.value))
    }
  }
  const markMonsterLevels = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (!filterMonsterLevels.includes(e.target.value)) {
        setFilterMonsterLevels([...filterMonsterLevels, e.target.value])
      }
    } else {
      setFilterMonsterLevels(filterMonsterLevels.filter(troop => troop !== e.target.value))
    }
  }

  const clearCategoryFilters = () => {
    setFilterTypes([])
  }
  const clearSubCategoryFilters = () => {
    setFilterGroups([])
  }
  const clearTargetBonusFilters = () => {
    setFilterVsTypes([])
  }
  const clearGuardsLevelFilters = () => {
    setFilterGuardLevels([])
  }
  const clearSpecialistLevelFilters = () => {
    setFilterSpecialistLevels([])
  }
  const clearMercLevelFilters = () => {
    setFilterMercLevels([])
  }

  const clearMonsterLevelFilters = () => {
    setFilterMonsterLevels([])
  }

  const resetCategoryFilters = () => {
    setFilterTypes(['', 'melee', 'ranged', 'flying', 'mounted', 'siege', 'scout'])
  }
  const resetSubCategoryFilters = () => {
    setFilterGroups(['', 'dragon', 'elemental', 'giant', 'beast'])
  }
  const resetTargetBonusFilters = () => {
    setFilterVsTypes([
      'Melee',
      'Ranged',
      'Flying',
      'Mounted',
      'Siege',
      'Fortifications',
      'Dragon',
      'Elemental',
      'Giant',
      'Beast'
    ]) // human, epic
  }
  const resetGuardsLevelFilters = () => {
    setFilterGuardLevels(['1', '2', '3', '4', '5', '6', '7', '8', '9'])
  }
  const resetSpecialistLevelFilters = () => {
    setFilterSpecialistLevels(['1', '2', '3', '4', '5', '6', '7', '8', '9'])
  }
  const resetMercLevelFilters = () => {
    setFilterMercLevels(['5', '6', '7', '8', '9'])
  }

  const resetMonsterLevelFilters = () => {
    setFilterMonsterLevels(['3', '4', '5', '6', '7', '8', '9'])
  }

  const resetFilters = () => {
    resetCategoryFilters()
    resetSubCategoryFilters()
    resetTargetBonusFilters()
    resetGuardsLevelFilters()
    resetSpecialistLevelFilters()
    resetMercLevelFilters()
    resetMonsterLevelFilters()
  }

  const shouldShow = (type: string) => (unit: BasicUnit) => {
    // if (!unit) return false

    const searchFilter =
      unit.name.toLowerCase().includes(search.toLowerCase()) ||
      unit.nameEs.toLowerCase().includes(search.toLowerCase())
    const typeFilter = filterTypes.includes(unit.category) // melee, ranged, mounted, scout, flying
    let groupFilter = filterGroups.includes(unit.subGroup) //dragon, elemental, beast, giant

    const featBonus = whoCanIAttack(unit) //==Ranged,Mounted,Melee,Flying,Beast,Giant,Dragon,Elemental,Fortification,Siege,Human,Epic
    let vsTypeFilter = filterVsTypes.some(vsType => featBonus.includes(vsType))

    const isNotSelectedFilter = !selectedStacks.includes(unit.id)
    let levelFilter = true

    if (unit.group === 'guardsman' && type === 'guards') {
      levelFilter = filterGuardLevels.includes(unit.level)
      groupFilter = true // notienen dragon,beast,etc
    } else if (unit.group === 'specialist' && type === 'specialists') {
      levelFilter = filterSpecialistLevels.includes(unit.level)
      groupFilter = true // tiene bestia (leon real), pero no lo voy a considerar
      if (unit.category === 'scout') {
        //scouts dont have any vsType
        vsTypeFilter = true
      }
    } else if (unit.group === 'monster' && type === 'monsters') {
      levelFilter = filterMonsterLevels.includes(unit.level)
    } else if (unit.group === 'engineer' && type === 'engineers') {
      groupFilter = true // notienen dragon,beast,etc
    } else if (unit.group === 'mercs' && type === 'mercenaries') {
      // always show epics
      levelFilter = filterMercLevels.includes(unit.level)

      if (featBonus.includes('Epic')) {
        vsTypeFilter = true // others type(subgroup)
      }
    }

    let show =
      isNotSelectedFilter &&
      searchFilter &&
      levelFilter &&
      typeFilter &&
      groupFilter &&
      vsTypeFilter
    // if (show) console.log('graceII', filterGroups, unit)

    if (['bunnieII'].includes(unit.id)) {
      show = isNotSelectedFilter && true
    }

    return show
  }

  const selectedStacks = army.map(stack => stack.unit.id)

  const spearmans = [
    ...(shouldShow('guards')(ARMY.SpearmanG1) ? [ARMY.SpearmanG1] : []),
    ...(shouldShow('guards')(ARMY.SpearmanG2) ? [ARMY.SpearmanG2] : []),
    ...(shouldShow('guards')(ARMY.SpearmanG3) ? [ARMY.SpearmanG3] : []),
    ...(shouldShow('guards')(ARMY.SpearmanG4) ? [ARMY.SpearmanG4] : []),
    ...(shouldShow('guards')(ARMY.SpearmanG5) ? [ARMY.SpearmanG5] : [])
  ]
  const archers = [
    ...(shouldShow('guards')(ARMY.ArcherG1) ? [ARMY.ArcherG1] : []),
    ...(shouldShow('guards')(ARMY.ArcherG2) ? [ARMY.ArcherG2] : []),
    ...(shouldShow('guards')(ARMY.ArcherG3) ? [ARMY.ArcherG3] : []),
    ...(shouldShow('guards')(ARMY.ArcherG4) ? [ARMY.ArcherG4] : []),
    ...(shouldShow('guards')(ARMY.ArcherG5) ? [ARMY.ArcherG5] : [])
  ]
  const riders = [
    ...(shouldShow('guards')(ARMY.RiderG1) ? [ARMY.RiderG1] : []),
    ...(shouldShow('guards')(ARMY.RiderG2) ? [ARMY.RiderG2] : []),
    ...(shouldShow('guards')(ARMY.RiderG3) ? [ARMY.RiderG3] : []),
    ...(shouldShow('guards')(ARMY.RiderG4) ? [ARMY.RiderG4] : []),
    ...(shouldShow('guards')(ARMY.RiderG5) ? [ARMY.RiderG5] : [])
  ]
  const griffins = [
    ...(shouldShow('guards')(ARMY.battleGriffinV) ? [ARMY.battleGriffinV] : []),
    ...(shouldShow('guards')(ARMY.battleGriffinVI) ? [ARMY.battleGriffinVI] : []),
    ...(shouldShow('guards')(ARMY.battleGriffinVII) ? [ARMY.battleGriffinVII] : [])
  ]

  const hArbalester = [
    ...(shouldShow('guards')(ARMY.heavyArbalesterVI) ? [ARMY.heavyArbalesterVI] : []),
    ...(shouldShow('guards')(ARMY.heavyArbalesterVII) ? [ARMY.heavyArbalesterVII] : [])
  ]

  const hHalberdier = [
    ...(shouldShow('guards')(ARMY.heavyHalberdierVI) ? [ARMY.heavyHalberdierVI] : []),
    ...(shouldShow('guards')(ARMY.heavyHalberdierVII) ? [ARMY.heavyHalberdierVII] : [])
  ]
  const mountedKnight = [
    ...(shouldShow('guards')(ARMY.mountedKnightVI) ? [ARMY.mountedKnightVI] : []),
    ...(shouldShow('guards')(ARMY.mountedKnightVII) ? [ARMY.mountedKnightVII] : [])
  ]
  const purifier = [
    ...(shouldShow('guards')(ARMY.purifierI) ? [ARMY.purifierI] : []),
    ...(shouldShow('guards')(ARMY.purifierII) ? [ARMY.purifierII] : [])
  ]
  const punisher = [
    ...(shouldShow('guards')(ARMY.punisherI) ? [ARMY.punisherI] : []),
    ...(shouldShow('guards')(ARMY.punisherII) ? [ARMY.punisherII] : [])
  ]
  const smiter = [
    ...(shouldShow('guards')(ARMY.smiterI) ? [ARMY.smiterI] : []),
    ...(shouldShow('guards')(ARMY.smiterII) ? [ARMY.smiterII] : [])
  ]
  const corax = [
    ...(shouldShow('guards')(ARMY.coraxI) ? [ARMY.coraxI] : []),
    ...(shouldShow('guards')(ARMY.coraxII) ? [ARMY.coraxII] : [])
  ]

  const guardsman = [
    { title: 'Spearman/Lanceros', keyName: 'G', troops: spearmans },
    { title: 'Archer/Arqueros', keyName: 'G', troops: archers },
    { title: 'Riders/Jinetes', keyName: 'G', troops: riders },
    { title: 'Battle Griffin/Grifo de batalla', keyName: 'BG', troops: griffins },
    { title: 'Heavy arbalester/Arbalestero pesado', keyName: 'HA', troops: hArbalester },
    { title: 'Heavy Halberdier/Alabardero pesado', keyName: 'HA', troops: hHalberdier },
    { title: 'Mounted Knight/Caballero montado', keyName: 'MK', troops: mountedKnight },
    { title: 'Purifier/Purificador', keyName: 'P', troops: purifier },
    { title: 'Punisher/Castigador', keyName: 'P', troops: punisher },
    { title: 'Smiter/Aplastador', keyName: 'S', troops: smiter },
    { title: 'Corax', keyName: 'C', troops: corax }
  ]

  const swordman = [
    ...(shouldShow('specialists')(ARMY.SwordmanS1) ? [ARMY.SwordmanS1] : []),
    ...(shouldShow('specialists')(ARMY.SwordmanS2) ? [ARMY.SwordmanS2] : []),
    ...(shouldShow('specialists')(ARMY.SwordmanS3) ? [ARMY.SwordmanS3] : []),
    ...(shouldShow('specialists')(ARMY.SwordmanS4) ? [ARMY.SwordmanS4] : []),
    ...(shouldShow('specialists')(ARMY.SwordmanS5) ? [ARMY.SwordmanS5] : [])
  ]

  const spy = [
    ...(shouldShow('specialists')(ARMY.SpyS1) ? [ARMY.SpyS1] : []),
    ...(shouldShow('specialists')(ARMY.SpyS2) ? [ARMY.SpyS2] : [])
  ]
  const deadshot = [
    ...(shouldShow('specialists')(ARMY.deadshotV) ? [ARMY.deadshotV] : []),
    ...(shouldShow('specialists')(ARMY.deadshotVI) ? [ARMY.deadshotVI] : []),
    ...(shouldShow('specialists')(ARMY.deadshotVII) ? [ARMY.deadshotVII] : [])
  ]
  const lionRider = [
    ...(shouldShow('specialists')(ARMY.lionRiderV) ? [ARMY.lionRiderV] : []),
    ...(shouldShow('specialists')(ARMY.lionRiderVI) ? [ARMY.lionRiderVI] : []),
    ...(shouldShow('specialists')(ARMY.lionRiderVII) ? [ARMY.lionRiderVII] : [])
  ]
  const vulture = [
    ...(shouldShow('specialists')(ARMY.vulturesV) ? [ARMY.vulturesV] : []),
    ...(shouldShow('specialists')(ARMY.vulturesVI) ? [ARMY.vulturesVI] : []),
    ...(shouldShow('specialists')(ARMY.vulturesVII) ? [ARMY.vulturesVII] : [])
  ]
  const heavyKnight = [
    ...(shouldShow('specialists')(ARMY.heavyKnightVI) ? [ARMY.heavyKnightVI] : []),
    ...(shouldShow('specialists')(ARMY.heavyKnightVII) ? [ARMY.heavyKnightVII] : [])
  ]
  const swiftJaeger = [
    ...(shouldShow('specialists')(ARMY.swiftJaegerVI) ? [ARMY.swiftJaegerVI] : []),
    ...(shouldShow('specialists')(ARMY.swiftJaegerVII) ? [ARMY.swiftJaegerVII] : [])
  ]
  const legitimist = [
    ...(shouldShow('specialists')(ARMY.legitimistI) ? [ARMY.legitimistI] : []),
    ...(shouldShow('specialists')(ARMY.legitimistII) ? [ARMY.legitimistII] : [])
  ]
  const duelist = [
    ...(shouldShow('specialists')(ARMY.duelistI) ? [ARMY.duelistI] : []),
    ...(shouldShow('specialists')(ARMY.duelistII) ? [ARMY.duelistII] : [])
  ]
  const whitemane = [
    ...(shouldShow('specialists')(ARMY.whitemaneI) ? [ARMY.whitemaneI] : []),
    ...(shouldShow('specialists')(ARMY.whitemaneII) ? [ARMY.whitemaneII] : [])
  ]
  const royalLion = [
    ...(shouldShow('specialists')(ARMY.royalLionI) ? [ARMY.royalLionI] : []),
    ...(shouldShow('specialists')(ARMY.royalLionII) ? [ARMY.royalLionII] : [])
  ]
  const panoptic = [
    ...(shouldShow('specialists')(ARMY.panopticI) ? [ARMY.panopticI] : []),
    ...(shouldShow('specialists')(ARMY.panopticII) ? [ARMY.panopticII] : [])
  ]
  const specialist = [
    { title: 'Swordsman/Espadachin', keyName: 'G', troops: swordman },
    { title: 'Spy/Espia', keyName: 'G', troops: spy },
    { title: 'deadshot/ballestero elite', keyName: 'G', troops: deadshot },
    { title: 'lionRider/Jinete leon', keyName: 'G', troops: lionRider },
    { title: 'vultures/Buitres', keyName: 'G', troops: vulture },
    { title: 'heavy Knight/caballero pesado', keyName: 'G', troops: heavyKnight },
    { title: 'swift Jaeger/cazador rapido', keyName: 'G', troops: swiftJaeger },
    { title: 'legitimist/legitimista', keyName: 'G', troops: legitimist },
    { title: 'duelist/duelista', keyName: 'G', troops: duelist },
    { title: 'whitemane/manto blanco', keyName: 'G', troops: whitemane },
    { title: 'royal Lion/leon real', keyName: 'G', troops: royalLion },
    { title: 'panoptic/omnividente', keyName: 'G', troops: panoptic }
  ]

  const engineers = [
    ...(shouldShow('engineers')(ARMY.CatapultE1) ? [ARMY.CatapultE1] : []),
    ...(shouldShow('engineers')(ARMY.CatapultE2) ? [ARMY.CatapultE2] : []),
    ...(shouldShow('engineers')(ARMY.CatapultE3) ? [ARMY.CatapultE3] : []),
    ...(shouldShow('engineers')(ARMY.CatapultE4) ? [ARMY.CatapultE4] : []),
    ...(shouldShow('engineers')(ARMY.CatapultE5) ? [ARMY.CatapultE5] : []),
    ...(shouldShow('engineers')(ARMY.CatapultE6) ? [ARMY.CatapultE6] : []),
    ...(shouldShow('engineers')(ARMY.CatapultE7) ? [ARMY.CatapultE7] : []),
    ...(shouldShow('engineers')(ARMY.CatapultE8) ? [ARMY.CatapultE8] : []),
    ...(shouldShow('engineers')(ARMY.CatapultE9) ? [ARMY.CatapultE9] : [])
  ]

  const monstersLvl3 = [
    ...(shouldShow('monsters')(ARMY.waterElementalIII) ? [ARMY.waterElementalIII] : []),
    ...(shouldShow('monsters')(ARMY.battleBoarIII) ? [ARMY.battleBoarIII] : []),
    ...(shouldShow('monsters')(ARMY.emeraldDragonIII) ? [ARMY.emeraldDragonIII] : []),
    ...(shouldShow('monsters')(ARMY.stoneGargoyleIII) ? [ARMY.stoneGargoyleIII] : [])
  ]

  const monstersLvl4 = [
    ...(shouldShow('monsters')(ARMY.icePhoenixIV) ? [ARMY.icePhoenixIV] : []),
    ...(shouldShow('monsters')(ARMY.gorgonMedusaIV) ? [ARMY.gorgonMedusaIV] : []),
    ...(shouldShow('monsters')(ARMY.magicDragonIV) ? [ARMY.magicDragonIV] : []),
    ...(shouldShow('monsters')(ARMY.manyArmedGuardianIV) ? [ARMY.manyArmedGuardianIV] : [])
  ]

  const monstersLvl5 = [
    ...(shouldShow('monsters')(ARMY.flamingCentaurV) ? [ARMY.flamingCentaurV] : []),
    ...(shouldShow('monsters')(ARMY.fearsomeManticoraV) ? [ARMY.fearsomeManticoraV] : []),
    ...(shouldShow('monsters')(ARMY.desertConquerV) ? [ARMY.desertConquerV] : []),
    ...(shouldShow('monsters')(ARMY.EttinV) ? [ARMY.EttinV] : [])
  ]

  const monstersLvl6 = [
    ...(shouldShow('monsters')(ARMY.jungleDestroyerVI) ? [ARMY.jungleDestroyerVI] : []),
    ...(shouldShow('monsters')(ARMY.crystalDragonVI) ? [ARMY.crystalDragonVI] : []),
    ...(shouldShow('monsters')(ARMY.trollRiderVI) ? [ARMY.trollRiderVI] : []),
    ...(shouldShow('monsters')(ARMY.rubiGolemVI) ? [ARMY.rubiGolemVI] : [])
  ]

  const monstersLvl7 = [
    ...(shouldShow('monsters')(ARMY.windLordVII) ? [ARMY.windLordVII] : []),
    ...(shouldShow('monsters')(ARMY.ancientTerrorVII) ? [ARMY.ancientTerrorVII] : []),
    ...(shouldShow('monsters')(ARMY.blackDragonVII) ? [ARMY.blackDragonVII] : []),
    ...(shouldShow('monsters')(ARMY.destructiveColossusVII) ? [ARMY.destructiveColossusVII] : [])
  ]

  const monstersLvl8 = [
    ...(shouldShow('monsters')(ARMY.firePhoenixI) ? [ARMY.firePhoenixI] : []),
    ...(shouldShow('monsters')(ARMY.tricksterI) ? [ARMY.tricksterI] : []),
    ...(shouldShow('monsters')(ARMY.devastatorI) ? [ARMY.devastatorI] : []),
    ...(shouldShow('monsters')(ARMY.krakenI) ? [ARMY.krakenI] : [])
  ]

  const monstersLvl9 = [
    ...(shouldShow('monsters')(ARMY.firePhoenixII) ? [ARMY.firePhoenixII] : []),
    ...(shouldShow('monsters')(ARMY.tricksterII) ? [ARMY.tricksterII] : []),
    ...(shouldShow('monsters')(ARMY.devastatorII) ? [ARMY.devastatorII] : []),
    ...(shouldShow('monsters')(ARMY.krakenII) ? [ARMY.krakenII] : [])
  ]

  const monsters = [
    monstersLvl3,
    monstersLvl4,
    monstersLvl5,
    monstersLvl6,
    monstersLvl7,
    monstersLvl8,
    monstersLvl9
  ].filter(m => m.length > 0)

  const mercLvl5 = [
    ...(shouldShow('mercenaries')(ARMY.scorpionRiderV) ? [ARMY.scorpionRiderV] : []),
    ...(shouldShow('mercenaries')(ARMY.ifritV) ? [ARMY.ifritV] : []),
    ...(shouldShow('mercenaries')(ARMY.cyclopsV) ? [ARMY.cyclopsV] : []),
    ...(shouldShow('mercenaries')(ARMY.firewormRiderV) ? [ARMY.firewormRiderV] : []),
    ...(shouldShow('mercenaries')(ARMY.swiftMarksmanV) ? [ARMY.swiftMarksmanV] : []),
    ...(shouldShow('mercenaries')(ARMY.scorpionV) ? [ARMY.scorpionV] : []),
    ...(shouldShow('mercenaries')(ARMY.gargoyleV) ? [ARMY.gargoyleV] : []),
    ...(shouldShow('mercenaries')(ARMY.bearV) ? [ARMY.bearV] : []),
    ...(shouldShow('mercenaries')(ARMY.unicornRiderV) ? [ARMY.unicornRiderV] : []),
    ...(shouldShow('mercenaries')(ARMY.bullRiderV) ? [ARMY.bullRiderV] : []),
    ...(shouldShow('mercenaries')(ARMY.giantZombieV) ? [ARMY.giantZombieV] : [])
  ]
  const mercLvl6 = [
    ...(shouldShow('mercenaries')(ARMY.trebuchetVI) ? [ARMY.trebuchetVI] : []),
    ...(shouldShow('mercenaries')(ARMY.chariotVI) ? [ARMY.chariotVI] : []),
    ...(shouldShow('mercenaries')(ARMY.legionaryVI) ? [ARMY.legionaryVI] : []),
    ...(shouldShow('mercenaries')(ARMY.deathChariotVI) ? [ARMY.deathChariotVI] : []),
    ...(shouldShow('mercenaries')(ARMY.arbalesterVI) ? [ARMY.arbalesterVI] : []),
    ...(shouldShow('mercenaries')(ARMY.sphynxVI) ? [ARMY.sphynxVI] : []),
    ...(shouldShow('mercenaries')(ARMY.knightVI) ? [ARMY.knightVI] : []),
    ...(shouldShow('mercenaries')(ARMY.trailseekerVI) ? [ARMY.trailseekerVI] : []),
    ...(shouldShow('mercenaries')(ARMY.rhinoRiderVI) ? [ARMY.rhinoRiderVI] : []),
    ...(shouldShow('mercenaries')(ARMY.boneGolemVI) ? [ARMY.boneGolemVI] : []),
    ...(shouldShow('mercenaries')(ARMY.sheduVI) ? [ARMY.sheduVI] : []),
    ...(shouldShow('mercenaries')(ARMY.entVI) ? [ARMY.entVI] : []),
    ...(shouldShow('mercenaries')(ARMY.abominationVI) ? [ARMY.abominationVI] : []),
    ...(shouldShow('mercenaries')(ARMY.archdemonVI) ? [ARMY.archdemonVI] : []),
    ...(shouldShow('mercenaries')(ARMY.pathFinderVI) ? [ARMY.pathFinderVI] : [])
  ]
  const mercLvl7 = [
    ...(shouldShow('mercenaries')(ARMY.palintoneVII) ? [ARMY.palintoneVII] : []),
    ...(shouldShow('mercenaries')(ARMY.cursedDendroidVI) ? [ARMY.cursedDendroidVI] : []),
    ...(shouldShow('mercenaries')(ARMY.epicMonsterHunterVI) ? [ARMY.epicMonsterHunterVI] : []),
    ...(shouldShow('mercenaries')(ARMY.lightningLordVII) ? [ARMY.lightningLordVII] : []),
    ...(shouldShow('mercenaries')(ARMY.cursedDragonVII) ? [ARMY.cursedDragonVII] : []),
    ...(shouldShow('mercenaries')(ARMY.seaLordVII) ? [ARMY.seaLordVII] : []),
    ...(shouldShow('mercenaries')(ARMY.sandwormVII) ? [ARMY.sandwormVII] : []),
    ...(shouldShow('mercenaries')(ARMY.lifeDragonVII) ? [ARMY.lifeDragonVII] : []),
    ...(shouldShow('mercenaries')(ARMY.goldenDragonVII) ? [ARMY.goldenDragonVII] : []),
    ...(shouldShow('mercenaries')(ARMY.overlordVII) ? [ARMY.overlordVII] : []),
    ...(shouldShow('mercenaries')(ARMY.fireLordVII) ? [ARMY.fireLordVII] : []),
    ...(shouldShow('mercenaries')(ARMY.jungleKingVII) ? [ARMY.jungleKingVII] : []),
    ...(shouldShow('mercenaries')(ARMY.epicMonsterHunterVII) ? [ARMY.epicMonsterHunterVII] : [])
  ]
  const mercLvl9 = [
    ...(shouldShow('mercenaries')(ARMY.epicMonsterHunterII) ? [ARMY.epicMonsterHunterII] : []),
    ...(shouldShow('mercenaries')(ARMY.bunnieII) ? [ARMY.bunnieII] : []),
    ...(shouldShow('mercenaries')(ARMY.wyvernII) ? [ARMY.wyvernII] : []),
    ...(shouldShow('mercenaries')(ARMY.arielII) ? [ARMY.arielII] : []),
    ...(shouldShow('mercenaries')(ARMY.jagoII) ? [ARMY.jagoII] : []),
    ...(shouldShow('mercenaries')(ARMY.eternalCannoneerII) ? [ARMY.eternalCannoneerII] : []),
    ...(shouldShow('mercenaries')(ARMY.warregalII) ? [ARMY.warregalII] : []),
    ...(shouldShow('mercenaries')(ARMY.demonicSalamanderII) ? [ARMY.demonicSalamanderII] : []),
    ...(shouldShow('mercenaries')(ARMY.slavicWarriorII) ? [ARMY.slavicWarriorII] : []),
    ...(shouldShow('mercenaries')(ARMY.wardenII) ? [ARMY.wardenII] : []),
    ...(shouldShow('mercenaries')(ARMY.highlanderII) ? [ARMY.highlanderII] : []),
    ...(shouldShow('mercenaries')(ARMY.galloperII) ? [ARMY.galloperII] : []),
    ...(shouldShow('mercenaries')(ARMY.quicksandII) ? [ARMY.quicksandII] : []),
    ...(shouldShow('mercenaries')(ARMY.scarfaceII) ? [ARMY.scarfaceII] : []),
    ...(shouldShow('mercenaries')(ARMY.pounderII) ? [ARMY.pounderII] : []),
    ...(shouldShow('mercenaries')(ARMY.graceII) ? [ARMY.graceII] : [])
  ]

  const mercs = [mercLvl5, mercLvl6, mercLvl7, mercLvl9].filter(m => m.length > 0)

  return (
    <aside
      id='sidebar-multi-level-sidebar'
      className='fixed top-[56px] left-0 z-1 w-64 h-[calc(100vh-56px)] transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
      aria-label='Sidebar'
    >
      <div className=' w-full px-4 py-2  bg-gray-800'>
        <label>Search :</label>

        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   w-full   p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type='text'
          placeholder='Unit name, ie: spearman'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <section className='px-4 py-2 max-h-[300px] overflow-y-auto bg-gray-50 dark:bg-gray-800'>
        <button
          className='w-full cursor-pointer my-1 px-1 py-0.5 text-sm bg-blue-500 border border-blue-500 rounded-lg text-gray-200 hover:bg-blue-700 hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 dark:focus:ring-offset-gray-800'
          type='button'
          onClick={resetFilters}
        >
          Reset all filters
        </button>
        <div className='flex flex-wrap p-0.5 w-full border  my-2'>
          <div className='flex space-between items-center w-full mx-1'>
            <p className='block w-full text-xs font-medium text-gray-900 dark:text-gray-300'>
              Category
            </p>
            <button
              className='cursor-pointer my-0.5 px-1 py-0.5 text-xs bg-blue-500 border border-blue-500 rounded-lg text-gray-200 hover:bg-blue-700 hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 dark:focus:ring-offset-gray-800'
              type='button'
              onClick={clearCategoryFilters}
            >
              Clear
            </button>
            <button
              className='ml-1 cursor-pointer my-0.5 px-1 py-0.5 text-xs bg-blue-500 border border-blue-500 rounded-lg text-gray-200 hover:bg-blue-700 hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 dark:focus:ring-offset-gray-800'
              type='button'
              onClick={resetCategoryFilters}
            >
              Reset
            </button>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              Melee
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'melee'}
                checked={filterTypes.includes('melee')}
                onChange={markTypes}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              Ranged
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'ranged'}
                checked={filterTypes.includes('ranged')}
                onChange={markTypes}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              Flying
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'flying'}
                checked={filterTypes.includes('flying')}
                onChange={markTypes}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              Mounted
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'mounted'}
                checked={filterTypes.includes('mounted')}
                onChange={markTypes}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              Scout
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'scout'}
                checked={filterTypes.includes('scout')}
                onChange={markTypes}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              Siege
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'siege'}
                checked={filterTypes.includes('siege')}
                onChange={markTypes}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              Others
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={''}
                checked={filterTypes.includes('')}
                onChange={markTypes}
              />
            </label>
          </div>
        </div>
        <div className='flex flex-wrap p-0.5 w-full border  my-2'>
          <div className='flex space-between items-center w-full mx-1'>
            <p className='block w-full text-xs font-medium text-gray-900 dark:text-gray-300'>
              Sub Category
            </p>
            <button
              className='cursor-pointer my-1 px-1 py-0.5 text-xs bg-blue-500 border border-blue-500 rounded-lg text-gray-200 hover:bg-blue-700 hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 dark:focus:ring-offset-gray-800'
              type='button'
              onClick={clearSubCategoryFilters}
            >
              Clear
            </button>
            <button
              className='ml-1 cursor-pointer my-1 px-1 py-0.5 text-xs bg-blue-500 border border-blue-500 rounded-lg text-gray-200 hover:bg-blue-700 hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 dark:focus:ring-offset-gray-800'
              type='button'
              onClick={resetSubCategoryFilters}
            >
              Reset
            </button>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              Dragon
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'dragon'}
                checked={filterGroups.includes('dragon')}
                onChange={markGroups}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              Elemental
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'elemental'}
                checked={filterGroups.includes('elemental')}
                onChange={markGroups}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              Beast
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'beast'}
                checked={filterGroups.includes('beast')}
                onChange={markGroups}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              Giant
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'giant'}
                checked={filterGroups.includes('giant')}
                onChange={markGroups}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              Others
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={''}
                checked={filterGroups.includes('')}
                onChange={markGroups}
              />
            </label>
          </div>
        </div>
        <div className='flex flex-wrap p-0.5 w-full border  my-2'>
          <div className='flex space-between items-center w-full mx-1'>
            <p className='block w-full text-xs font-medium text-gray-900 dark:text-gray-300'>
              Feat.Bonus Target
            </p>
            <button
              className='cursor-pointer my-1 px-1 py-0.5 text-xs bg-blue-500 border border-blue-500 rounded-lg text-gray-200 hover:bg-blue-700 hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 dark:focus:ring-offset-gray-800'
              type='button'
              onClick={clearTargetBonusFilters}
            >
              Clear
            </button>
            <button
              className='ml-1 cursor-pointer my-1 px-1 py-0.5 text-xs bg-blue-500 border border-blue-500 rounded-lg text-gray-200 hover:bg-blue-700 hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 dark:focus:ring-offset-gray-800'
              type='button'
              onClick={resetTargetBonusFilters}
            >
              Reset
            </button>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              vsMelee
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'Melee'}
                checked={filterVsTypes.includes('Melee')}
                onChange={markVsTypes}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              vsRanged
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'Ranged'}
                checked={filterVsTypes.includes('Ranged')}
                onChange={markVsTypes}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              vsFlying
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'Flying'}
                checked={filterVsTypes.includes('Flying')}
                onChange={markVsTypes}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              vsMounted
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'Mounted'}
                checked={filterVsTypes.includes('Mounted')}
                onChange={markVsTypes}
              />
            </label>
          </div>

          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              vsSiege
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'Siege'}
                checked={filterVsTypes.includes('Siege')}
                onChange={markVsTypes}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              vsFortification
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'Fortifications'}
                checked={filterVsTypes.includes('Fortifications')}
                onChange={markVsTypes}
              />
            </label>
          </div>

          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              vsDragon
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'Dragon'}
                checked={filterVsTypes.includes('Dragon')}
                onChange={markVsTypes}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              vsElemental
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'Elemental'}
                checked={filterVsTypes.includes('Elemental')}
                onChange={markVsTypes}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              vsBeast
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'Beast'}
                checked={filterVsTypes.includes('Beast')}
                onChange={markVsTypes}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='text-xs font-medium text-gray-900 dark:text-gray-300'>
              vsGiant
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'Giant'}
                checked={filterVsTypes.includes('Giant')}
                onChange={markVsTypes}
              />
            </label>
          </div>
        </div>
        <div className='flex flex-wrap p-0.5 w-full border  my-2'>
          <div className='flex space-between items-center w-full mx-1'>
            <p className='block w-full text-xs font-medium text-gray-900 dark:text-gray-300'>
              Guards Level
            </p>
            <button
              className='cursor-pointer my-1 px-1 py-0.5 text-xs bg-blue-500 border border-blue-500 rounded-lg text-gray-200 hover:bg-blue-700 hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 dark:focus:ring-offset-gray-800'
              type='button'
              onClick={clearGuardsLevelFilters}
            >
              Clear
            </button>
            <button
              className='ml-1 cursor-pointer my-1 px-1 py-0.5 text-xs bg-blue-500 border border-blue-500 rounded-lg text-gray-200 hover:bg-blue-700 hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 dark:focus:ring-offset-gray-800'
              type='button'
              onClick={resetGuardsLevelFilters}
            >
              Reset
            </button>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              1
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'1'}
                checked={filterGuardLevels.includes('1')}
                onChange={markGuardLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              2
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'2'}
                checked={filterGuardLevels.includes('2')}
                onChange={markGuardLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              3
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'3'}
                checked={filterGuardLevels.includes('3')}
                onChange={markGuardLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              4
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'4'}
                checked={filterGuardLevels.includes('4')}
                onChange={markGuardLevels}
              />
            </label>
          </div>

          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              5
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'5'}
                checked={filterGuardLevels.includes('5')}
                onChange={markGuardLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              6
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'6'}
                checked={filterGuardLevels.includes('6')}
                onChange={markGuardLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              7
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'7'}
                checked={filterGuardLevels.includes('7')}
                onChange={markGuardLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              8
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'8'}
                checked={filterGuardLevels.includes('8')}
                onChange={markGuardLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              9
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'9'}
                checked={filterGuardLevels.includes('9')}
                onChange={markGuardLevels}
              />
            </label>
          </div>
        </div>
        <div className='flex flex-wrap p-0.5 w-full border  my-2'>
          <div className='flex space-between items-center w-full mx-1'>
            <p className='block w-full text-xs font-medium text-gray-900 dark:text-gray-300'>
              Specialist Level
            </p>
            <button
              className='cursor-pointer my-1 px-1 py-0.5 text-xs bg-blue-500 border border-blue-500 rounded-lg text-gray-200 hover:bg-blue-700 hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 dark:focus:ring-offset-gray-800'
              type='button'
              onClick={clearSpecialistLevelFilters}
            >
              Clear
            </button>
            <button
              className='ml-1 cursor-pointer my-1 px-1 py-0.5 text-xs bg-blue-500 border border-blue-500 rounded-lg text-gray-200 hover:bg-blue-700 hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 dark:focus:ring-offset-gray-800'
              type='button'
              onClick={resetSpecialistLevelFilters}
            >
              Reset
            </button>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              1
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'1'}
                checked={filterSpecialistLevels.includes('1')}
                onChange={markSpecialistLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              2
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'2'}
                checked={filterSpecialistLevels.includes('2')}
                onChange={markSpecialistLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              3
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'3'}
                checked={filterSpecialistLevels.includes('3')}
                onChange={markSpecialistLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              4
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'4'}
                checked={filterSpecialistLevels.includes('4')}
                onChange={markSpecialistLevels}
              />
            </label>
          </div>

          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              5
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'5'}
                checked={filterSpecialistLevels.includes('5')}
                onChange={markSpecialistLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              6
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'6'}
                checked={filterSpecialistLevels.includes('6')}
                onChange={markSpecialistLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              7
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'7'}
                checked={filterSpecialistLevels.includes('7')}
                onChange={markSpecialistLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              8
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'8'}
                checked={filterSpecialistLevels.includes('8')}
                onChange={markSpecialistLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              9
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'9'}
                checked={filterSpecialistLevels.includes('9')}
                onChange={markSpecialistLevels}
              />
            </label>
          </div>
        </div>
        <div className='flex flex-wrap p-0.5 w-full border  my-2'>
          <div className='flex space-between items-center w-full mx-1'>
            <p className='block w-full text-xs font-medium text-gray-900 dark:text-gray-300'>
              Monster Level
            </p>
            <button
              className='cursor-pointer my-1 px-1 py-0.5 text-xs bg-blue-500 border border-blue-500 rounded-lg text-gray-200 hover:bg-blue-700 hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 dark:focus:ring-offset-gray-800'
              type='button'
              onClick={clearMonsterLevelFilters}
            >
              Clear
            </button>
            <button
              className='ml-1 cursor-pointer my-1 px-1 py-0.5 text-xs bg-blue-500 border border-blue-500 rounded-lg text-gray-200 hover:bg-blue-700 hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 dark:focus:ring-offset-gray-800'
              type='button'
              onClick={resetMonsterLevelFilters}
            >
              Reset
            </button>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              3
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'3'}
                checked={filterMonsterLevels.includes('3')}
                onChange={markMonsterLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              4
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'4'}
                checked={filterMonsterLevels.includes('4')}
                onChange={markMonsterLevels}
              />
            </label>
          </div>

          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              5
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'5'}
                checked={filterMonsterLevels.includes('5')}
                onChange={markMonsterLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              6
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'6'}
                checked={filterMonsterLevels.includes('6')}
                onChange={markMonsterLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              7
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'7'}
                checked={filterMonsterLevels.includes('7')}
                onChange={markMonsterLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              8
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'8'}
                checked={filterMonsterLevels.includes('8')}
                onChange={markMonsterLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              9
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'9'}
                checked={filterMonsterLevels.includes('9')}
                onChange={markMonsterLevels}
              />
            </label>
          </div>
        </div>
        <div className='flex flex-wrap p-0.5 w-full border  my-2'>
          <div className='flex space-between items-center w-full mx-1'>
            <p className='block w-full text-xs font-medium text-gray-900 dark:text-gray-300'>
              Merc Level
            </p>
            <button
              className='cursor-pointer my-1 px-1 py-0.5 text-xs bg-blue-500 border border-blue-500 rounded-lg text-gray-200 hover:bg-blue-700 hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 dark:focus:ring-offset-gray-800'
              type='button'
              onClick={clearMercLevelFilters}
            >
              Clear
            </button>
            <button
              className='ml-1 cursor-pointer my-1 px-1 py-0.5 text-xs bg-blue-500 border border-blue-500 rounded-lg text-gray-200 hover:bg-blue-700 hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 dark:focus:ring-offset-gray-800'
              type='button'
              onClick={resetMercLevelFilters}
            >
              Reset
            </button>
          </div>

          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              5
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'5'}
                checked={filterMercLevels.includes('5')}
                onChange={markMercLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              6
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'6'}
                checked={filterMercLevels.includes('6')}
                onChange={markMercLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              7
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'7'}
                checked={filterMercLevels.includes('7')}
                onChange={markMercLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              8
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'8'}
                checked={filterMercLevels.includes('8')}
                onChange={markMercLevels}
              />
            </label>
          </div>
          <div className='mx-1'>
            <label className='mr-0.5 text-xs font-medium text-gray-900 dark:text-gray-300'>
              9
              <input
                className='ml-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                type='checkbox'
                value={'9'}
                checked={filterMercLevels.includes('9')}
                onChange={markMercLevels}
              />
            </label>
          </div>
        </div>
      </section>
      <div className='h-[calc(100%-300px-74px-56px)] mt-2 px-3 py-2 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
        <h2 className='header-title'>Army</h2>
        <div className='army-list'>
          {guardsman.length > 0 &&
            guardsman.map(({ title, troops, keyName }) => {
              return troops.length > 0 ? (
                <div className='guardsmen'>
                  <p className='group-title'>{title}</p>
                  <div className='btn-group'>
                    {troops.map(u => {
                      return (
                        <button
                          className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                          onClick={() => {
                            addTroops(u.id)
                          }}
                        >
                          {keyName}
                          {u.level}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <></>
              )
            })}

          {specialist.length > 0 &&
            specialist.map(({ title, troops, keyName }) => {
              return troops.length > 0 ? (
                <div className='specialists'>
                  <p className='group-title'>{title}</p>
                  <div className='btn-group'>
                    {troops.map(u => {
                      return (
                        <button
                          className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                          onClick={() => {
                            addTroops(u.id)
                          }}
                        >
                          {keyName}
                          {u.level}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <></>
              )
            })}

          <div className='engineer'>
            <p className='group-title'>Catapult/catapulta</p>
            <div className='btn-group'>
              {engineers.map(u => {
                return (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops(u.id)
                    }}
                  >
                    {u.name}
                  </button>
                )
              })}
            </div>
          </div>

          {monsters.length > 0 && (
            <div className='monsters'>
              <p className='group-title'>Monsters</p>
              {monsters.map(monster => {
                return (
                  <div className='btn-group'>
                    {monster.map(m => {
                      return (
                        <button
                          className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                          onClick={() => {
                            addTroops(m.id)
                          }}
                        >
                          {m.name}
                        </button>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          )}

          {mercs.length > 0 && (
            <div className='mercs'>
              <p className='group-title'>mercs</p>
              {mercs.map(u => {
                return (
                  <div className='btn-group'>
                    {u.map(m => {
                      return (
                        <button
                          className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                          onClick={() => {
                            addTroops(m.id)
                          }}
                        >
                          {m.name}
                        </button>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
