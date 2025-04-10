import { useStackStore } from './stackStore'
import { BasicUnit, Stack, Unit } from './types'
import './armyList.css'
import { useEffect, useState } from 'react'
import { ARMY } from './soldiers'
// import { useState } from 'react'

export const ArmyList = () => {
  const [search, setSearch] = useState('')
  const [filterTypes, setFilterTypes] = useState<string[]>(() => {
    // getting stored value
    const saved = localStorage.getItem('filterTypes')
    return saved ? JSON.parse(saved) : ['melee', 'ranged', 'flying', 'mounted', 'siege', 'scout']
  })
  const [filterGroups, setFilterGroups] = useState<string[]>(() => {
    // getting stored value
    const saved = localStorage.getItem('filterGroups')
    return saved ? JSON.parse(saved) : ['dragon', 'elemental', 'giant', 'beast']
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
    let unitType = null
    if (type === 'Rider G1') {
      unitType = ARMY.RiderG1
    } else if (type === 'Rider G2') {
      unitType = ARMY.RiderG2
    } else if (type === 'Rider G3') {
      unitType = ARMY.RiderG3
    } else if (type === 'Rider G4') {
      unitType = ARMY.RiderG4
    } else if (type === 'Rider G5') {
      unitType = ARMY.RiderG5
    } else if (type === 'Spearman G1') {
      unitType = ARMY.SpearmanG1
    } else if (type === 'Spearman G2') {
      unitType = ARMY.SpearmanG2
    } else if (type === 'Spearman G3') {
      unitType = ARMY.SpearmanG3
    } else if (type === 'Spearman G4') {
      unitType = ARMY.SpearmanG4
    } else if (type === 'Spearman G5') {
      unitType = ARMY.SpearmanG5
    } else if (type === 'Archer G1') {
      unitType = ARMY.ArcherG1
    } else if (type === 'Archer G2') {
      unitType = ARMY.ArcherG2
    } else if (type === 'Archer G3') {
      unitType = ARMY.ArcherG3
    } else if (type === 'Archer G4') {
      unitType = ARMY.ArcherG4
    } else if (type === 'Archer G5') {
      unitType = ARMY.ArcherG5
    } else if (type === 'battleGriffinV') {
      unitType = ARMY.battleGriffinV
    } else if (type === 'battleGriffinVI') {
      unitType = ARMY.battleGriffinVI
    } else if (type === 'battleGriffinVII') {
      unitType = ARMY.battleGriffinVII
    } else if (type === 'heavyArbalesterVI') {
      unitType = ARMY.heavyArbalesterVI
    } else if (type === 'heavyArbalesterVII') {
      unitType = ARMY.heavyArbalesterVII
    } else if (type === 'heavyHalberdierVI') {
      unitType = ARMY.heavyHalberdierVI
    } else if (type === 'heavyHalberdierVII') {
      unitType = ARMY.heavyHalberdierVII
    } else if (type === 'mountedKnightVI') {
      unitType = ARMY.mountedKnightVI
    } else if (type === 'mountedKnightVII') {
      unitType = ARMY.mountedKnightVII
    } else if (type === 'purifierI') {
      unitType = ARMY.purifierI
    } else if (type === 'purifierII') {
      unitType = ARMY.purifierII
    } else if (type === 'punisherI') {
      unitType = ARMY.punisherI
    } else if (type === 'punisherII') {
      unitType = ARMY.punisherII
    } else if (type === 'smiterI') {
      unitType = ARMY.smiterI
    } else if (type === 'smiterII') {
      unitType = ARMY.smiterII
    } else if (type === 'coraxI') {
      unitType = ARMY.coraxI
    } else if (type === 'coraxII') {
      unitType = ARMY.coraxII
    }

    //specialists
    else if (type === 'Swordsman S1') {
      unitType = ARMY.SwordmanS1
    } else if (type === 'Swordsman S2') {
      unitType = ARMY.SwordmanS2
    } else if (type === 'Swordsman S3') {
      unitType = ARMY.SwordmanS3
    } else if (type === 'Swordsman S4') {
      unitType = ARMY.SwordmanS4
    } else if (type === 'Swordsman S5') {
      unitType = ARMY.SwordmanS5
    } else if (type === 'Spy S1') {
      unitType = ARMY.SpyS1
    } else if (type === 'Spy S2') {
      unitType = ARMY.SpyS2
    } else if (type === 'Spy S3') {
      unitType = ARMY.SpyS3
    } else if (type === 'Spy S4') {
      unitType = ARMY.SpyS4
    } else if (type === 'Spy S5') {
      unitType = ARMY.SpyS5
    } else if (type === 'deadshotV') {
      unitType = ARMY.deadshotV
    } else if (type === 'deadshotVI') {
      unitType = ARMY.deadshotVI
    } else if (type === 'deadshotVII') {
      unitType = ARMY.deadshotVII
    } else if (type === 'lionRiderV') {
      unitType = ARMY.lionRiderV
    } else if (type === 'lionRiderVI') {
      unitType = ARMY.lionRiderVI
    } else if (type === 'lionRiderVII') {
      unitType = ARMY.lionRiderVII
    } else if (type === 'vulturesV') {
      unitType = ARMY.vulturesV
    } else if (type === 'vulturesVI') {
      unitType = ARMY.vulturesVI
    } else if (type === 'vulturesVII') {
      unitType = ARMY.vulturesVII
    } else if (type === 'heavyKnightVI') {
      unitType = ARMY.heavyKnightVI
    } else if (type === 'heavyKnightVII') {
      unitType = ARMY.heavyKnightVII
    } else if (type === 'swiftJaegerVI') {
      unitType = ARMY.swiftJaegerVI
    } else if (type === 'swiftJaegerVII') {
      unitType = ARMY.swiftJaegerVII
    } else if (type === 'legitimistI') {
      unitType = ARMY.legitimistI
    } else if (type === 'legitimistII') {
      unitType = ARMY.legitimistII
    } else if (type === 'duelistI') {
      unitType = ARMY.duelistI
    } else if (type === 'duelistII') {
      unitType = ARMY.duelistII
    } else if (type === 'whitemaneI') {
      unitType = ARMY.whitemaneI
    } else if (type === 'whitemaneII') {
      unitType = ARMY.whitemaneII
    } else if (type === 'royalLionI') {
      unitType = ARMY.royalLionI
    } else if (type === 'royalLionII') {
      unitType = ARMY.royalLionII
    } else if (type === 'panopticI') {
      unitType = ARMY.panopticI
    } else if (type === 'panopticII') {
      unitType = ARMY.panopticII
    }
    //ENGINEERING
    else if (type === 'Catapult E1') {
      unitType = ARMY.CatapultE1
    } else if (type === 'Catapult E2') {
      unitType = ARMY.CatapultE2
    } else if (type === 'Catapult E3') {
      unitType = ARMY.CatapultE3
    } else if (type === 'Catapult E4') {
      unitType = ARMY.CatapultE4
    } else if (type === 'Catapult E5') {
      unitType = ARMY.CatapultE5
    } else if (type === 'Catapult E6') {
      unitType = ARMY.CatapultE6
    } else if (type === 'Catapult E7') {
      unitType = ARMY.CatapultE7
    } else if (type === 'Catapult E8') {
      unitType = ARMY.CatapultE8
    } else if (type === 'Catapult E9') {
      unitType = ARMY.CatapultE9
    }

    // MERCENARIES ------------------------------
    else if (type === 'mercEpicMonsterHunter') {
      unitType = ARMY.epicMonsterHunterVI
    } else if (type === 'chariotVI') {
      unitType = ARMY.chariotVI
    } else if (type === 'deathChariotVI') {
      unitType = ARMY.deathChariotVI
    } else if (type === 'legionaryVI') {
      unitType = ARMY.legionaryVI
    } else if (type === 'arbalesterVI') {
      unitType = ARMY.arbalesterVI
    } else if (type === 'sphynxVI') {
      unitType = ARMY.sphynxVI
    } else if (type === 'knightVI') {
      unitType = ARMY.knightVI
    } else if (type === 'trailseekerVI') {
      unitType = ARMY.trailseekerVI
    } else if (type === 'rhinoRiderVI') {
      unitType = ARMY.rhinoRiderVI
    } else if (type === 'boneGolemVI') {
      unitType = ARMY.boneGolemVI
    } else if (type === 'sheduVI') {
      unitType = ARMY.sheduVI
    } else if (type === 'abominationVI') {
      unitType = ARMY.abominationVI
    } else if (type === 'entVI') {
      unitType = ARMY.entVI
    } else if (type === 'archidemonVI') {
      unitType = ARMY.archidemonVI
    } else if (type === 'lightningLordVII') {
      unitType = ARMY.lightningLordVII
    } else if (type === 'cursedDragonVII') {
      unitType = ARMY.cursedDragonVII
    } else if (type === 'seaLordVII') {
      unitType = ARMY.seaLordVII
    } else if (type === 'sandwormVII') {
      unitType = ARMY.sandwormVII
    } else if (type === 'lifeDragonVII') {
      unitType = ARMY.lifeDragonVII
    } else if (type === 'goldenDragonVII') {
      unitType = ARMY.goldenDragonVII
    } else if (type === 'overlordVII') {
      unitType = ARMY.overlordVII
    } else if (type === 'fireLordVII') {
      unitType = ARMY.fireLordVII
    } else if (type === 'jungleKingVII') {
      unitType = ARMY.jungleKingVII
    } else if (type === 'epicMonsterHunterVII') {
      unitType = ARMY.epicMonsterHunterVII
    } else if (type === 'wyvernII') {
      unitType = ARMY.wyvernII
    } else if (type === 'arielII') {
      unitType = ARMY.arielII
    } else if (type === 'warregalII') {
      unitType = ARMY.warregalII
    } else if (type === 'demonicSalamanderII') {
      unitType = ARMY.demonicSalamanderII
    } else if (type === 'epicMonsterHunterII') {
      unitType = ARMY.epicMonsterHunterII
    } else if (type === 'jagoII') {
      unitType = ARMY.jagoII
    } else if (type === 'eternalCannoneerII') {
      unitType = ARMY.eternalCannoneerII
    } else if (type === 'slavicWarriorII') {
      unitType = ARMY.slavicWarriorII
    } else if (type === 'wardenII') {
      unitType = ARMY.wardenII
    } else if (type === 'highlanderII') {
      unitType = ARMY.highlanderII
    } else if (type === 'galloperII') {
      unitType = ARMY.galloperII
    } else if (type === 'quicksandII') {
      unitType = ARMY.quicksandII
    } else if (type === 'scarfaceII') {
      unitType = ARMY.scarfaceII
    } else if (type === 'pounderII') {
      unitType = ARMY.pounderII
    }

    // MONSTERS ------------------------------
    else if (type === 'waterElementalIII') {
      unitType = ARMY.waterElementalIII
    } else if (type === 'battleBoarIII') {
      unitType = ARMY.battleBoarIII
    } else if (type === 'emeraldDragonIII') {
      unitType = ARMY.emeraldDragonIII
    } else if (type === 'stoneGargoyleIII') {
      unitType = ARMY.stoneGargoyleIII
    } else if (type === 'icePhoenixIV') {
      unitType = ARMY.icePhoenixIV
    } else if (type === 'flamingCentaurV') {
      unitType = ARMY.flamingCentaurV
    } else if (type === 'rubiGolemVI') {
      unitType = ARMY.rubiGolemVI
    } else if (type === 'windLordVII') {
      unitType = ARMY.windLordVII
    } else if (type === 'firePhoenixI') {
      unitType = ARMY.firePhoenixI
    } else if (type === 'firePhoenixII') {
      unitType = ARMY.firePhoenixII
    } else if (type === 'gorgonMedusaIV') {
      unitType = ARMY.gorgonMedusaIV
    } else if (type === 'fearsomeManticoraV') {
      unitType = ARMY.fearsomeManticoraV
    } else if (type === 'jungleDestroyerVI') {
      unitType = ARMY.jungleDestroyerVI
    } else if (type === 'ancientTerrorVII') {
      unitType = ARMY.ancientTerrorVII
    } else if (type === 'tricksterI') {
      unitType = ARMY.tricksterI
    } else if (type === 'tricksterII') {
      unitType = ARMY.tricksterII
    } else if (type === 'magicDragonIV') {
      unitType = ARMY.magicDragonIV
    } else if (type === 'desertConquerV') {
      unitType = ARMY.desertConquerV
    } else if (type === 'crystalDragonVI') {
      unitType = ARMY.crystalDragonVI
    } else if (type === 'blackDragonVII') {
      unitType = ARMY.blackDragonVII
    } else if (type === 'devastatorII') {
      unitType = ARMY.devastatorII
    } else if (type === 'EttinV') {
      unitType = ARMY.EttinV
    } else if (type === 'trollRiderVI') {
      unitType = ARMY.trollRiderVI
    } else if (type === 'destructiveColossusVII') {
      unitType = ARMY.destructiveColossusVII
    } else if (type === 'devastatorI') {
      unitType = ARMY.devastatorI
    } else if (type === 'manyArmedGuardianIV') {
      unitType = ARMY.manyArmedGuardianIV
    }

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
      minSetup: 0,
      lockMinSetup: true,
      limit: 0,
      strBonus: 0,
      hpBonus: 0,
      unitLimit: 0,
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

  const markMonsterLevels = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (!filterMonsterLevels.includes(e.target.value)) {
        setFilterMonsterLevels([...filterMonsterLevels, e.target.value])
      }
    } else {
      setFilterMonsterLevels(filterMonsterLevels.filter(troop => troop !== e.target.value))
    }
  }

  const shouldShow = (type: string) => (unit: BasicUnit) => {
    let show = true
    const unitname = unit.name.toLowerCase()

    if (filterTypes.length > 0) {
      if (unit.category === '') {
        show = true
      } else {
        show = filterTypes.includes(unit.category) // melee, ranged, mounted, scout, flying
      }
    }

    if (type === 'guards') {
      if (show && !filterGuardLevels.includes(unit.level)) {
        show = false
      }
    } else if (type === 'specialists') {
      if (show && !filterSpecialistLevels.includes(unit.level)) {
        show = false
      }
    } else if (type === 'monsters') {
      if (show && !filterMonsterLevels.includes(unit.level)) {
        show = false
      }
    } else if (type === 'engineers') {
      //
    } else if (type === 'mercenaries') {
      //
    }

    if (show && !unitname.toLowerCase().includes(search.toLowerCase())) {
      show = false
    }
    if (show && selectedStacks.includes(unitname)) {
      show = false
    }
    return show
  }

  const shouldShowMonster = (unit: BasicUnit) => {
    let show = true
    const unitname = unit.name.toLowerCase()

    if (filterTypes.length === 0) {
      show = filterGroups.includes(unit.subGroup) //dragon, elemental, beast, giant
    } else {
      // combine both, so we get dragon:melee dragon:flying dragon:mounted etc
      show = filterGroups.includes(unit.subGroup) && filterTypes.includes(unit.category) //dragon, elemental, beast, giant
    }
    if (show && !filterMonsterLevels.includes(unit.level)) {
      show = false
    }
    if (show && !unitname.toLowerCase().includes(search.toLowerCase())) {
      show = false
    }
    if (show && selectedStacks.includes(unitname)) {
      show = false
    }
    return show
  }

  const selectedStacks = army.map(stack => stack.unit.name.toLowerCase())
  // console.log('selected army', selectedStacks)

  // console.log('selected filter types', filterTypes)

  // let collapseClass = 'army-container '
  // if (collapsed) {
  //   collapseClass = collapseClass + 'collapsed'
  // }

  return (
    <aside
      id='sidebar-multi-level-sidebar'
      className='fixed top-[56px] left-0 z-10 w-64 h-[calc(100vh-56px)] transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
      aria-label='Sidebar'
    >
      <section className='px-4 py-4 max-h-[300px] overflow-y-auto bg-gray-50 dark:bg-gray-800'>
        <div>
          <label>Search :</label>

          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   w-full   p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type='text'
            placeholder='Unit name, ie: spearman'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className='flex flex-wrap p-0.5 w-full border border-b-emerald-400 my-2'>
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
          </div>{' '}
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
        </div>
        <div className='flex flex-wrap p-0.5 w-full border border-b-emerald-400 my-2'>
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
        </div>
        <div className='flex flex-wrap p-0.5 w-full border border-b-emerald-400 my-2'>
          <p className='block w-full text-xs font-medium text-gray-900 dark:text-gray-300'>
            Guards Level
          </p>
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
        <div className='flex flex-wrap p-0.5 w-full border border-b-emerald-400 my-2'>
          <p className='block w-full text-xs font-medium text-gray-900 dark:text-gray-300'>
            Specialist Level
          </p>
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
        <div className='flex flex-wrap p-0.5 w-full border border-b-emerald-400 my-2'>
          <p className='block w-full text-xs font-medium text-gray-900 dark:text-gray-300'>
            Monster Level
          </p>

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
      </section>
      <div className='h-[calc(100%-255px-56px)] mt-2 px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
        <h2 className='header-title'>Army</h2>
        <div className='army-list'>
          <div className='guardsmen'>
            <p className='group-title'>Spearman</p>
            <div className='btn-group'>
              {shouldShow('guards')(ARMY.SpearmanG1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Spearman G1')
                  }}
                >
                  G1
                </button>
              )}

              {shouldShow('guards')(ARMY.SpearmanG2) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Spearman G2')
                  }}
                >
                  G2
                </button>
              )}

              {shouldShow('guards')(ARMY.SpearmanG3) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Spearman G3')
                  }}
                >
                  G3
                </button>
              )}

              {shouldShow('guards')(ARMY.SpearmanG4) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Spearman G4')
                  }}
                >
                  G4
                </button>
              )}

              {shouldShow('guards')(ARMY.SpearmanG5) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Spearman G5')
                  }}
                >
                  G5
                </button>
              )}
            </div>
          </div>

          <div className='guardsmen'>
            <p className='group-title'>Archer</p>
            <div className='btn-group'>
              {shouldShow('guards')(ARMY.ArcherG1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Archer G1')
                  }}
                >
                  G1
                </button>
              )}

              {shouldShow('guards')(ARMY.ArcherG2) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Archer G2')
                  }}
                >
                  G2
                </button>
              )}

              {shouldShow('guards')(ARMY.ArcherG3) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Archer G3')
                  }}
                >
                  G3
                </button>
              )}

              {shouldShow('guards')(ARMY.ArcherG4) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Archer G4')
                  }}
                >
                  G4
                </button>
              )}

              {shouldShow('guards')(ARMY.ArcherG5) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Archer G5')
                  }}
                >
                  G5
                </button>
              )}
            </div>
          </div>

          <div className='guardsmen'>
            <p className='group-title'>Rider</p>
            <div className='btn-group'>
              {shouldShow('guards')(ARMY.RiderG1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Rider G1')
                  }}
                >
                  G1
                </button>
              )}

              {shouldShow('guards')(ARMY.RiderG2) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Rider G2')
                  }}
                >
                  G2
                </button>
              )}

              {shouldShow('guards')(ARMY.RiderG3) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Rider G3')
                  }}
                >
                  G3
                </button>
              )}

              {shouldShow('guards')(ARMY.RiderG4) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Rider G4')
                  }}
                >
                  G4
                </button>
              )}

              {shouldShow('guards')(ARMY.RiderG5) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Rider G5')
                  }}
                >
                  G5
                </button>
              )}
            </div>
          </div>

          <div className='guardsmen'>
            <p className='group-title'>battle Griffin</p>
            <div className='btn-group'>
              {shouldShow('guards')(ARMY.battleGriffinV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('battleGriffinV')
                  }}
                >
                  bf5
                </button>
              )}

              {shouldShow('guards')(ARMY.battleGriffinVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('battleGriffinVI')
                  }}
                >
                  bf6
                </button>
              )}

              {shouldShow('guards')(ARMY.battleGriffinVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('battleGriffinVII')
                  }}
                >
                  bf7
                </button>
              )}
            </div>
          </div>

          <div className='guardsmen'>
            <p className='group-title'>Heavy arbalester</p>
            <div className='btn-group'>
              {shouldShow('guards')(ARMY.heavyArbalesterVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('heavyArbalesterVI')
                  }}
                >
                  ha6
                </button>
              )}

              {shouldShow('guards')(ARMY.heavyArbalesterVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('heavyArbalesterVII')
                  }}
                >
                  ha7
                </button>
              )}
            </div>
          </div>

          <div className='guardsmen'>
            <p className='group-title'>Heavy Halberdier</p>
            <div className='btn-group'>
              {shouldShow('guards')(ARMY.heavyHalberdierVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('heavyHalberdierVI')
                  }}
                >
                  HH6
                </button>
              )}

              {shouldShow('guards')(ARMY.heavyHalberdierVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('heavyHalberdierVII')
                  }}
                >
                  HH7
                </button>
              )}
            </div>
          </div>

          <div className='guardsmen'>
            <p className='group-title'>Mounted Knight</p>
            <div className='btn-group'>
              {shouldShow('guards')(ARMY.mountedKnightVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('mountedKnightVI')
                  }}
                >
                  MK6
                </button>
              )}

              {shouldShow('guards')(ARMY.mountedKnightVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('mountedKnightVII')
                  }}
                >
                  MK7
                </button>
              )}
            </div>
          </div>

          <div className='guardsmen'>
            <p className='group-title'>Purifier</p>
            <div className='btn-group'>
              {shouldShow('guards')(ARMY.purifierI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('purifierI')
                  }}
                >
                  P1
                </button>
              )}

              {shouldShow('guards')(ARMY.purifierII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('purifierII')
                  }}
                >
                  P2
                </button>
              )}
            </div>
          </div>

          <div className='guardsmen'>
            <p className='group-title'>Punisher</p>
            <div className='btn-group'>
              {shouldShow('guards')(ARMY.punisherI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('punisherI')
                  }}
                >
                  P1
                </button>
              )}

              {shouldShow('guards')(ARMY.punisherII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('punisherII')
                  }}
                >
                  P2
                </button>
              )}
            </div>
          </div>

          <div className='guardsmen'>
            <p className='group-title'>Smiter</p>
            <div className='btn-group'>
              {shouldShow('guards')(ARMY.smiterI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('smiterI')
                  }}
                >
                  S1
                </button>
              )}

              {shouldShow('guards')(ARMY.smiterII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('smiterII')
                  }}
                >
                  S2
                </button>
              )}
            </div>
          </div>

          <div className='guardsmen'>
            <p className='group-title'>Corax</p>
            <div className='btn-group'>
              {shouldShow('guards')(ARMY.coraxI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('coraxI')
                  }}
                >
                  C1
                </button>
              )}

              {shouldShow('guards')(ARMY.coraxII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('coraxII')
                  }}
                >
                  C2
                </button>
              )}
            </div>
          </div>

          <div className='specialists'>
            <p className='group-title'>Swordsman</p>
            <div className='btn-group'>
              {shouldShow('specialists')(ARMY.SwordmanS1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Swordsman S1')
                  }}
                >
                  S1
                </button>
              )}
              {shouldShow('specialists')(ARMY.SwordmanS2) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Swordsman S2')
                  }}
                >
                  S2
                </button>
              )}
              {shouldShow('specialists')(ARMY.SwordmanS3) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Swordsman S3')
                  }}
                >
                  S3
                </button>
              )}
              {shouldShow('specialists')(ARMY.SwordmanS4) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Swordsman S4')
                  }}
                >
                  S4
                </button>
              )}
              {shouldShow('specialists')(ARMY.SwordmanS5) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Swordsman S5')
                  }}
                >
                  S5
                </button>
              )}
            </div>
          </div>

          <div className='specialists'>
            <p className='group-title'>Spy</p>
            <div className='btn-group'>
              {shouldShow('specialists')(ARMY.SpyS1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Spy S1')
                  }}
                >
                  S1
                </button>
              )}
              {shouldShow('specialists')(ARMY.SpyS2) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Spy S2')
                  }}
                >
                  S2
                </button>
              )}
            </div>
          </div>

          <div className='specialists'>
            <p className='group-title'>deadshot</p>
            <div className='btn-group'>
              {shouldShow('specialists')(ARMY.deadshotV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('deadshotV')
                  }}
                >
                  DS5
                </button>
              )}
              {shouldShow('specialists')(ARMY.deadshotVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('deadshotVI')
                  }}
                >
                  DS6
                </button>
              )}
              {shouldShow('specialists')(ARMY.deadshotVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('deadshotVII')
                  }}
                >
                  DS7
                </button>
              )}
            </div>
          </div>

          <div className='specialists'>
            <p className='group-title'>lionRider</p>
            <div className='btn-group'>
              {shouldShow('specialists')(ARMY.lionRiderV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('lionRiderV')
                  }}
                >
                  LR5
                </button>
              )}
              {shouldShow('specialists')(ARMY.lionRiderVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('lionRiderVI')
                  }}
                >
                  LR6
                </button>
              )}
              {shouldShow('specialists')(ARMY.lionRiderVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('lionRiderVII')
                  }}
                >
                  LR7
                </button>
              )}
            </div>
          </div>

          <div className='specialists'>
            <p className='group-title'>vultures</p>
            <div className='btn-group'>
              {shouldShow('specialists')(ARMY.vulturesV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('vulturesV')
                  }}
                >
                  V5
                </button>
              )}
              {shouldShow('specialists')(ARMY.vulturesVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('vulturesVI')
                  }}
                >
                  V6
                </button>
              )}
              {shouldShow('specialists')(ARMY.vulturesVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('vulturesVII')
                  }}
                >
                  V7
                </button>
              )}
            </div>
          </div>

          <div className='specialists'>
            <p className='group-title'>heavy Knight</p>
            <div className='btn-group'>
              {shouldShow('specialists')(ARMY.heavyKnightVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('heavyKnightVI')
                  }}
                >
                  HK5
                </button>
              )}
              {shouldShow('specialists')(ARMY.heavyKnightVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('heavyKnightVII')
                  }}
                >
                  HK6
                </button>
              )}
            </div>
          </div>

          <div className='specialists'>
            <p className='group-title'>swift Jaeger</p>
            <div className='btn-group'>
              {shouldShow('specialists')(ARMY.swiftJaegerVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('swiftJaegerVI')
                  }}
                >
                  SJ5
                </button>
              )}
              {shouldShow('specialists')(ARMY.swiftJaegerVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('swiftJaegerVII')
                  }}
                >
                  SJ6
                </button>
              )}
            </div>
          </div>

          <div className='specialists'>
            <p className='group-title'>legitimist</p>
            <div className='btn-group'>
              {shouldShow('specialists')(ARMY.legitimistI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('legitimistI')
                  }}
                >
                  L1
                </button>
              )}
              {shouldShow('specialists')(ARMY.legitimistII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('legitimistII')
                  }}
                >
                  L2
                </button>
              )}
            </div>
          </div>

          <div className='specialists'>
            <p className='group-title'>duelist</p>
            <div className='btn-group'>
              {shouldShow('specialists')(ARMY.duelistI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('duelistI')
                  }}
                >
                  D1
                </button>
              )}
              {shouldShow('specialists')(ARMY.duelistII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('duelistII')
                  }}
                >
                  D2
                </button>
              )}
            </div>
          </div>

          <div className='specialists'>
            <p className='group-title'>whitemane</p>
            <div className='btn-group'>
              {shouldShow('specialists')(ARMY.whitemaneI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('whitemaneI')
                  }}
                >
                  W1
                </button>
              )}
              {shouldShow('specialists')(ARMY.whitemaneII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('whitemaneII')
                  }}
                >
                  W2
                </button>
              )}
            </div>
          </div>

          <div className='specialists'>
            <p className='group-title'>royal Lion</p>
            <div className='btn-group'>
              {shouldShow('specialists')(ARMY.royalLionI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('royalLionI')
                  }}
                >
                  RL1
                </button>
              )}
              {shouldShow('specialists')(ARMY.royalLionII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('royalLionII')
                  }}
                >
                  RL2
                </button>
              )}
            </div>
          </div>

          <div className='specialists'>
            <p className='group-title'>panoptic</p>
            <div className='btn-group'>
              {shouldShow('specialists')(ARMY.panopticI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('panopticI')
                  }}
                >
                  P1
                </button>
              )}
              {shouldShow('specialists')(ARMY.panopticII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('panopticII')
                  }}
                >
                  P2
                </button>
              )}
            </div>
          </div>

          <div className='engineer'>
            <p className='group-title'>Catapult</p>
            <div className='btn-group'>
              {shouldShow('engineers')(ARMY.CatapultE1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E1')
                  }}
                >
                  E1
                </button>
              )}
              {shouldShow('engineers')(ARMY.CatapultE2) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E2')
                  }}
                >
                  E2
                </button>
              )}
              {shouldShow('engineers')(ARMY.CatapultE3) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E3')
                  }}
                >
                  E3
                </button>
              )}
              {shouldShow('engineers')(ARMY.CatapultE4) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E4')
                  }}
                >
                  E4
                </button>
              )}
              {shouldShow('engineers')(ARMY.CatapultE5) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E5')
                  }}
                >
                  E5
                </button>
              )}
              {shouldShow('engineers')(ARMY.CatapultE6) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E6')
                  }}
                >
                  E6 Ballistae VI
                </button>
              )}
              {shouldShow('engineers')(ARMY.CatapultE7) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E7')
                  }}
                >
                  E7 Ballistae VII
                </button>
              )}
              {shouldShow('engineers')(ARMY.CatapultE8) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E8')
                  }}
                >
                  E8 Josephine I
                </button>
              )}
              {shouldShow('engineers')(ARMY.CatapultE9) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E9')
                  }}
                >
                  E9 Josephine II
                </button>
              )}
            </div>
          </div>

          <div className='monsters'>
            <p className='group-title'>Monsters</p>
            <div className='btn-group'>
              {shouldShowMonster(ARMY.waterElementalIII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('waterElementalIII')
                  }}
                >
                  Water Elemental III
                </button>
              )}
              {shouldShowMonster(ARMY.battleBoarIII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('battleBoarIII')
                  }}
                >
                  Battle Boar III
                </button>
              )}
              {shouldShowMonster(ARMY.emeraldDragonIII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('emeraldDragonIII')
                  }}
                >
                  Emerald Dragon III
                </button>
              )}
              {shouldShowMonster(ARMY.stoneGargoyleIII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('stoneGargoyleIII')
                  }}
                >
                  Stone Gargole III
                </button>
              )}
            </div>
            <div className='btn-group'>
              {shouldShowMonster(ARMY.icePhoenixIV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('icePhoenixIV')
                  }}
                >
                  ice Phoenix IV
                </button>
              )}
              {shouldShowMonster(ARMY.gorgonMedusaIV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('gorgonMedusaIV')
                  }}
                >
                  gorgon Medusa IV
                </button>
              )}
              {shouldShowMonster(ARMY.magicDragonIV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('magicDragonIV')
                  }}
                >
                  magic Dragon IV
                </button>
              )}
              {shouldShowMonster(ARMY.manyArmedGuardianIV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('manyArmedGuardianIV')
                  }}
                >
                  many-Armed Guardian IV
                </button>
              )}
            </div>
            <div className='btn-group'>
              {shouldShowMonster(ARMY.flamingCentaurV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('flamingCentaurV')
                  }}
                >
                  flaming Centaurus V
                </button>
              )}
              {shouldShowMonster(ARMY.fearsomeManticoraV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('fearsomeManticoraV')
                  }}
                >
                  fear Manticora V
                </button>
              )}
              {shouldShowMonster(ARMY.desertConquerV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('desertConquerV')
                  }}
                >
                  desert Vanquisher V
                </button>
              )}
              {shouldShowMonster(ARMY.EttinV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('EttinV')
                  }}
                >
                  Ettin V
                </button>
              )}
            </div>
            <div className='btn-group'>
              {shouldShowMonster(ARMY.jungleDestroyerVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('jungleDestroyerVI')
                  }}
                >
                  jungle Destroyer VI
                </button>
              )}
              {shouldShowMonster(ARMY.crystalDragonVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('crystalDragonVI')
                  }}
                >
                  crystal Dragon VI
                </button>
              )}
              {shouldShowMonster(ARMY.trollRiderVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('trollRiderVI')
                  }}
                >
                  troll Rider VI
                </button>
              )}
              {shouldShowMonster(ARMY.rubiGolemVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('rubiGolemVI')
                  }}
                >
                  rubi Golem VI
                </button>
              )}
            </div>
            <div className='btn-group'>
              {shouldShowMonster(ARMY.windLordVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('windLordVII')
                  }}
                >
                  wind Lord VII
                </button>
              )}
              {shouldShowMonster(ARMY.ancientTerrorVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('ancientTerrorVII')
                  }}
                >
                  ancient Terror VII
                </button>
              )}
              {shouldShowMonster(ARMY.blackDragonVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('blackDragonVII')
                  }}
                >
                  black Dragon VII
                </button>
              )}
              {shouldShowMonster(ARMY.destructiveColossusVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('destructiveColossusVII')
                  }}
                >
                  destructive Colossus VII
                </button>
              )}
            </div>
            <div className='btn-group'>
              {shouldShowMonster(ARMY.firePhoenixI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('firePhoenixI')
                  }}
                >
                  fire Phoenix I
                </button>
              )}
              {shouldShowMonster(ARMY.tricksterI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('tricksterI')
                  }}
                >
                  trickster I
                </button>
              )}
              {shouldShowMonster(ARMY.devastatorI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('devastatorI')
                  }}
                >
                  devastator I
                </button>
              )}
            </div>

            <div className='btn-group'>
              {shouldShowMonster(ARMY.firePhoenixII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('firePhoenixII')
                  }}
                >
                  firePhoenix II
                </button>
              )}
              {shouldShowMonster(ARMY.tricksterII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('tricksterII')
                  }}
                >
                  trickster II
                </button>
              )}
              {shouldShowMonster(ARMY.devastatorII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('devastatorII')
                  }}
                >
                  devastator II
                </button>
              )}
            </div>
          </div>

          <div className='mercs'>
            <p className='group-title'>Mercs</p>
            <div className='btn-group'>
              {shouldShow('mercenaries')(ARMY.epicMonsterHunterVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('mercEpicMonsterHunter')
                  }}
                >
                  Epic Monster Hunter VI
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.chariotVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('chariotVI')
                  }}
                >
                  Chariot VI
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.legionaryVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('legionaryVI')
                  }}
                >
                  Legionary VI
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.deathChariotVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('deathChariotVI')
                  }}
                >
                  deathChariotVI
                </button>
              )}
            </div>

            <div className='btn-group'>
              {shouldShow('mercenaries')(ARMY.arbalesterVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('arbalesterVI')
                  }}
                >
                  arbalester VI
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.sphynxVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('sphynxVI')
                  }}
                >
                  sphynx VI
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.knightVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('knightVI')
                  }}
                >
                  knight VI
                </button>
              )}
            </div>

            <div className='btn-group'>
              {shouldShow('mercenaries')(ARMY.trailseekerVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('trailseekerVI')
                  }}
                >
                  trailseeker VI
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.rhinoRiderVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('rhinoRiderVI')
                  }}
                >
                  rhinoRider VI
                </button>
              )}

              {shouldShow('mercenaries')(ARMY.boneGolemVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('boneGolemVI')
                  }}
                >
                  boneGolemVI
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.sheduVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('sheduVI')
                  }}
                >
                  shedu VI
                </button>
              )}
            </div>

            <div className='btn-group'>
              {shouldShow('mercenaries')(ARMY.entVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('entVI')
                  }}
                >
                  ent VI
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.abominationVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('abominationVI')
                  }}
                >
                  abomination VI
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.archidemonVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('archidemonVI')
                  }}
                >
                  archidemon VI
                </button>
              )}

              {shouldShow('mercenaries')(ARMY.lightningLordVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('lightningLordVII')
                  }}
                >
                  lightningLordVII
                </button>
              )}

              {shouldShow('mercenaries')(ARMY.cursedDragonVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('cursedDragonVII')
                  }}
                >
                  cursedDragonVII
                </button>
              )}

              {shouldShow('mercenaries')(ARMY.seaLordVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('seaLordVII')
                  }}
                >
                  seaLordVII
                </button>
              )}

              {shouldShow('mercenaries')(ARMY.sandwormVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('sandwormVII')
                  }}
                >
                  sandwormVII
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.lifeDragonVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('lifeDragonVII')
                  }}
                >
                  lifeDragonVII
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.goldenDragonVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('goldenDragonVII')
                  }}
                >
                  goldenDragonVII
                </button>
              )}

              {shouldShow('mercenaries')(ARMY.overlordVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('overlordVII')
                  }}
                >
                  overlordVII
                </button>
              )}

              {shouldShow('mercenaries')(ARMY.fireLordVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('fireLordVII')
                  }}
                >
                  fireLordVII
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.jungleKingVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('jungleKingVII')
                  }}
                >
                  jungleKingVII
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.epicMonsterHunterVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('epicMonsterHunterVII')
                  }}
                >
                  epicMonsterHunterVII
                </button>
              )}

              {shouldShow('mercenaries')(ARMY.wyvernII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('wyvernII')
                  }}
                >
                  wyvernII
                </button>
              )}

              {shouldShow('mercenaries')(ARMY.arielII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('arielII')
                  }}
                >
                  arielII
                </button>
              )}

              {shouldShow('mercenaries')(ARMY.jagoII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('jagoII')
                  }}
                >
                  jagoII
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.eternalCannoneerII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('eternalCannoneerII')
                  }}
                >
                  eternalCannoneerII
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.epicMonsterHunterII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('epicMonsterHunterII')
                  }}
                >
                  epicMonsterHunterII
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.warregalII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('warregalII')
                  }}
                >
                  warregalII
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.demonicSalamanderII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('demonicSalamanderII')
                  }}
                >
                  demonicSalamanderII
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.slavicWarriorII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('slavicWarriorII')
                  }}
                >
                  slavicWarriorII
                </button>
              )}

              {shouldShow('mercenaries')(ARMY.wardenII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('wardenII')
                  }}
                >
                  wardenII
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.highlanderII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('highlanderII')
                  }}
                >
                  highlanderII
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.galloperII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('galloperII')
                  }}
                >
                  galloperII
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.quicksandII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('quicksandII')
                  }}
                >
                  quicksandII
                </button>
              )}

              {shouldShow('mercenaries')(ARMY.scarfaceII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('scarfaceII')
                  }}
                >
                  scarfaceII
                </button>
              )}
              {shouldShow('mercenaries')(ARMY.pounderII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('pounderII')
                  }}
                >
                  pounderII
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
