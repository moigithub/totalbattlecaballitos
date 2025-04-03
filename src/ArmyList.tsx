import {
  abominationVI,
  arbalesterVI,
  archidemonVI,
  arielII,
  boneGolemVI,
  chariotVI,
  cursedDragonVII,
  deathChariotVI,
  demonicSalamanderII,
  epicMonsterHunterII,
  epicMonsterHunterVII,
  eternalCannoneerII,
  fireLordVII,
  galloperII,
  goldenDragonVII,
  highlanderII,
  jagoII,
  jungleKingVII,
  knightVI,
  legionaryVI,
  lifeDragonVII,
  lightningLordVII,
  epicMonsterHunterVI,
  overlordVII,
  pounderII,
  quicksandII,
  rhinoRiderVI,
  sandwormVII,
  scarfaceII,
  seaLordVII,
  sheduVI,
  slavicWarriorII,
  sphynxVI,
  trailseekerVI,
  wardenII,
  warregalII,
  wyvernII,
  entVI
} from './mercs'
import {
  ArcherG1,
  ArcherG2,
  ArcherG3,
  ArcherG4,
  ArcherG5,
  ARMY,
  battleBoar,
  battleGriffinV,
  battleGriffinVI,
  battleGriffinVII,
  blackDragon,
  flamingCentaurusV,
  CatapultE1,
  CatapultE2,
  CatapultE3,
  CatapultE4,
  CatapultE5,
  CatapultE6,
  CatapultE7,
  CatapultE8,
  CatapultE9,
  coraxI,
  coraxII,
  crystalDragon,
  deadshotV,
  deadshotVI,
  deadshotVII,
  desertConquer,
  destructiveColossusVII,
  devastatorI,
  devastatorII,
  duelistI,
  duelistII,
  tricksterI,
  tricksterII,
  emeraldDragon,
  Ettin,
  fearsomeManticoraV,
  firePhoenixI,
  firePhoenixII,
  jungleDestroyerVI,
  gorgonMedusa,
  heavyArbalesterVI,
  heavyArbalesterVII,
  heavyHalberdierVI,
  heavyHalberdierVII,
  heavyKnightVI,
  heavyKnightVII,
  icePhoenix,
  legitimistI,
  legitimistII,
  lionRiderV,
  lionRiderVI,
  lionRiderVII,
  magicDragon,
  mountedKnightVI,
  mountedKnightVII,
  multiArmGuardianIV,
  ancientTerrorVII,
  panopticI,
  panopticII,
  punisherI,
  punisherII,
  purifierI,
  purifierII,
  RiderG1,
  RiderG2,
  RiderG3,
  RiderG4,
  RiderG5,
  royalLionI,
  royalLionII,
  rubiGolem,
  smiterI,
  smiterII,
  SpearmanG1,
  SpearmanG2,
  SpearmanG3,
  SpearmanG4,
  SpearmanG5,
  SpyS1,
  SpyS2,
  SpyS3,
  SpyS4,
  SpyS5,
  stoneGargole,
  swiftJaegerVI,
  swiftJaegerVII,
  SwordmanS1,
  SwordmanS2,
  SwordmanS3,
  SwordmanS4,
  SwordmanS5,
  trollRider,
  vulturesV,
  vulturesVI,
  vulturesVII,
  waterElemental,
  whitemaneI,
  whitemaneII,
  windLord
} from './soldiers'
import { useStackStore } from './stackStore'
import { EngineerUnit, GuardsmanUnit, MercUnit, MonsterUnit, SpecialistUnit, Stack } from './types'
import './armyList.css'
import { useState } from 'react'
// import { useState } from 'react'

export const ArmyList = () => {
  const [search, setSearch] = useState('')
  const [filterTypes, setFilterTypes] = useState<string[]>([
    'melee',
    'ranged',
    'flying',
    'mounted',
    'siege',
    'scout'
  ])
  const [filterGroups, setFilterGroups] = useState<string[]>([
    'dragon',
    'elemental',
    'giant',
    'beast'
  ])

  // const [collapsed, setCollapsed] = useState(false)
  const addStack = useStackStore(state => state.addStack)
  // const bonus = useStackStore(state => state.bonus)
  const army = useStackStore(state => state.army)

  const addTroops = (type: string) => {
    let unitType = null
    if (type === 'Rider G1') {
      unitType = RiderG1
    } else if (type === 'Rider G2') {
      unitType = RiderG2
    } else if (type === 'Rider G3') {
      unitType = RiderG3
    } else if (type === 'Rider G4') {
      unitType = RiderG4
    } else if (type === 'Rider G5') {
      unitType = RiderG5
    } else if (type === 'Spearman G1') {
      unitType = SpearmanG1
    } else if (type === 'Spearman G2') {
      unitType = SpearmanG2
    } else if (type === 'Spearman G3') {
      unitType = SpearmanG3
    } else if (type === 'Spearman G4') {
      unitType = SpearmanG4
    } else if (type === 'Spearman G5') {
      unitType = SpearmanG5
    } else if (type === 'Archer G1') {
      unitType = ArcherG1
    } else if (type === 'Archer G2') {
      unitType = ArcherG2
    } else if (type === 'Archer G3') {
      unitType = ArcherG3
    } else if (type === 'Archer G4') {
      unitType = ArcherG4
    } else if (type === 'Archer G5') {
      unitType = ArcherG5
    } else if (type === 'battleGriffinV') {
      unitType = battleGriffinV
    } else if (type === 'battleGriffinVI') {
      unitType = battleGriffinVI
    } else if (type === 'battleGriffinVII') {
      unitType = battleGriffinVII
    } else if (type === 'heavyArbalesterVI') {
      unitType = heavyArbalesterVI
    } else if (type === 'heavyArbalesterVII') {
      unitType = heavyArbalesterVII
    } else if (type === 'heavyHalberdierVI') {
      unitType = heavyHalberdierVI
    } else if (type === 'heavyHalberdierVII') {
      unitType = heavyHalberdierVII
    } else if (type === 'mountedKnightVI') {
      unitType = mountedKnightVI
    } else if (type === 'mountedKnightVII') {
      unitType = mountedKnightVII
    } else if (type === 'purifierI') {
      unitType = purifierI
    } else if (type === 'purifierII') {
      unitType = purifierII
    } else if (type === 'punisherI') {
      unitType = punisherI
    } else if (type === 'punisherII') {
      unitType = punisherII
    } else if (type === 'smiterI') {
      unitType = smiterI
    } else if (type === 'smiterII') {
      unitType = smiterII
    } else if (type === 'coraxI') {
      unitType = coraxI
    } else if (type === 'coraxII') {
      unitType = coraxII
    }

    //specialists
    else if (type === 'Swordsman S1') {
      unitType = SwordmanS1
    } else if (type === 'Swordsman S2') {
      unitType = SwordmanS2
    } else if (type === 'Swordsman S3') {
      unitType = SwordmanS3
    } else if (type === 'Swordsman S4') {
      unitType = SwordmanS4
    } else if (type === 'Swordsman S5') {
      unitType = SwordmanS5
    } else if (type === 'Spy S1') {
      unitType = SpyS1
    } else if (type === 'Spy S2') {
      unitType = SpyS2
    } else if (type === 'Spy S3') {
      unitType = SpyS3
    } else if (type === 'Spy S4') {
      unitType = SpyS4
    } else if (type === 'Spy S5') {
      unitType = SpyS5
    } else if (type === 'deadshotV') {
      unitType = deadshotV
    } else if (type === 'deadshotVI') {
      unitType = deadshotVI
    } else if (type === 'deadshotVII') {
      unitType = deadshotVII
    } else if (type === 'lionRiderV') {
      unitType = lionRiderV
    } else if (type === 'lionRiderVI') {
      unitType = lionRiderVI
    } else if (type === 'lionRiderVII') {
      unitType = lionRiderVII
    } else if (type === 'vulturesV') {
      unitType = vulturesV
    } else if (type === 'vulturesVI') {
      unitType = vulturesVI
    } else if (type === 'vulturesVII') {
      unitType = vulturesVII
    } else if (type === 'heavyKnightVI') {
      unitType = heavyKnightVI
    } else if (type === 'heavyKnightVII') {
      unitType = heavyKnightVII
    } else if (type === 'swiftJaegerVI') {
      unitType = swiftJaegerVI
    } else if (type === 'swiftJaegerVII') {
      unitType = swiftJaegerVII
    } else if (type === 'legitimistI') {
      unitType = legitimistI
    } else if (type === 'legitimistII') {
      unitType = legitimistII
    } else if (type === 'duelistI') {
      unitType = duelistI
    } else if (type === 'duelistII') {
      unitType = duelistII
    } else if (type === 'whitemaneI') {
      unitType = whitemaneI
    } else if (type === 'whitemaneII') {
      unitType = whitemaneII
    } else if (type === 'royalLionI') {
      unitType = royalLionI
    } else if (type === 'royalLionII') {
      unitType = royalLionII
    } else if (type === 'panopticI') {
      unitType = panopticI
    } else if (type === 'panopticII') {
      unitType = panopticII
    }
    //ENGINEERING
    else if (type === 'Catapult E1') {
      unitType = CatapultE1
    } else if (type === 'Catapult E2') {
      unitType = CatapultE2
    } else if (type === 'Catapult E3') {
      unitType = CatapultE3
    } else if (type === 'Catapult E4') {
      unitType = CatapultE4
    } else if (type === 'Catapult E5') {
      unitType = CatapultE5
    } else if (type === 'Catapult E6') {
      unitType = CatapultE6
    } else if (type === 'Catapult E7') {
      unitType = CatapultE7
    } else if (type === 'Catapult E8') {
      unitType = CatapultE8
    } else if (type === 'Catapult E9') {
      unitType = CatapultE9
    }

    // MERCENARIES ------------------------------
    else if (type === 'mercEpicMonsterHunter') {
      unitType = epicMonsterHunterVI
    } else if (type === 'chariotVI') {
      unitType = chariotVI
    } else if (type === 'deathChariotVI') {
      unitType = deathChariotVI
    } else if (type === 'legionaryVI') {
      unitType = legionaryVI
    } else if (type === 'arbalesterVI') {
      unitType = arbalesterVI
    } else if (type === 'sphynxVI') {
      unitType = sphynxVI
    } else if (type === 'knightVI') {
      unitType = knightVI
    } else if (type === 'trailseekerVI') {
      unitType = trailseekerVI
    } else if (type === 'rhinoRiderVI') {
      unitType = rhinoRiderVI
    } else if (type === 'boneGolemVI') {
      unitType = boneGolemVI
    } else if (type === 'sheduVI') {
      unitType = sheduVI
    } else if (type === 'abominationVI') {
      unitType = abominationVI
    } else if (type === 'entVI') {
      unitType = entVI
    } else if (type === 'archidemonVI') {
      unitType = archidemonVI
    } else if (type === 'lightningLordVII') {
      unitType = lightningLordVII
    } else if (type === 'cursedDragonVII') {
      unitType = cursedDragonVII
    } else if (type === 'seaLordVII') {
      unitType = seaLordVII
    } else if (type === 'sandwormVII') {
      unitType = sandwormVII
    } else if (type === 'lifeDragonVII') {
      unitType = lifeDragonVII
    } else if (type === 'goldenDragonVII') {
      unitType = goldenDragonVII
    } else if (type === 'overlordVII') {
      unitType = overlordVII
    } else if (type === 'fireLordVII') {
      unitType = fireLordVII
    } else if (type === 'jungleKingVII') {
      unitType = jungleKingVII
    } else if (type === 'epicMonsterHunterVII') {
      unitType = epicMonsterHunterVII
    } else if (type === 'wyvernII') {
      unitType = wyvernII
    } else if (type === 'arielII') {
      unitType = arielII
    } else if (type === 'warregalII') {
      unitType = warregalII
    } else if (type === 'demonicSalamanderII') {
      unitType = demonicSalamanderII
    } else if (type === 'epicMonsterHunterII') {
      unitType = epicMonsterHunterII
    } else if (type === 'jagoII') {
      unitType = jagoII
    } else if (type === 'eternalCannoneerII') {
      unitType = eternalCannoneerII
    } else if (type === 'slavicWarriorII') {
      unitType = slavicWarriorII
    } else if (type === 'wardenII') {
      unitType = wardenII
    } else if (type === 'highlanderII') {
      unitType = highlanderII
    } else if (type === 'galloperII') {
      unitType = galloperII
    } else if (type === 'quicksandII') {
      unitType = quicksandII
    } else if (type === 'scarfaceII') {
      unitType = scarfaceII
    } else if (type === 'pounderII') {
      unitType = pounderII
    }

    // MONSTERS ------------------------------
    else if (type === 'waterElemental') {
      unitType = waterElemental
    } else if (type === 'battleBoar') {
      unitType = battleBoar
    } else if (type === 'emeraldDragon') {
      unitType = emeraldDragon
    } else if (type === 'stoneGargole') {
      unitType = stoneGargole
    } else if (type === 'icePhoenix') {
      unitType = icePhoenix
    } else if (type === 'flamingCentaurusV') {
      unitType = flamingCentaurusV
    } else if (type === 'rubiGolem') {
      unitType = rubiGolem
    } else if (type === 'windLord') {
      unitType = windLord
    } else if (type === 'firePhoenixI') {
      unitType = firePhoenixI
    } else if (type === 'firePhoenixII') {
      unitType = firePhoenixII
    } else if (type === 'gorgonMedusa') {
      unitType = gorgonMedusa
    } else if (type === 'fearsomeManticoraV') {
      unitType = fearsomeManticoraV
    } else if (type === 'jungleDestroyerVI') {
      unitType = jungleDestroyerVI
    } else if (type === 'ancientTerrorVII') {
      unitType = ancientTerrorVII
    } else if (type === 'tricksterI') {
      unitType = tricksterI
    } else if (type === 'tricksterII') {
      unitType = tricksterII
    } else if (type === 'magicDragon') {
      unitType = magicDragon
    } else if (type === 'desertConquer') {
      unitType = desertConquer
    } else if (type === 'crystalDragon') {
      unitType = crystalDragon
    } else if (type === 'blackDragon') {
      unitType = blackDragon
    } else if (type === 'devastatorII') {
      unitType = devastatorII
    } else if (type === 'Ettin') {
      unitType = Ettin
    } else if (type === 'trollRider') {
      unitType = trollRider
    } else if (type === 'destructiveColossusVII') {
      unitType = destructiveColossusVII
    } else if (type === 'devastatorI') {
      unitType = devastatorI
    } else if (type === 'multiArmGuardianIV') {
      unitType = multiArmGuardianIV
    }

    if (!unitType) {
      return
    }

    // const monster = getMobTarget(unitType.troop)
    // console.log('monster target', monster)

    // // TODO: move calc minsetup when add the soldier (left panel)
    // const unitsNeededToKill1Mob = calculateUnitsMobKill(monster, unitType)

    // console.log('min units mob kill', stack.unit.name, unitsNeededToKill1Mob)

    const stack: Omit<Stack, 'id'> = {
      // health: RiderG1.BASEHP + (RiderG1.BASEHP * bonus.rider.G1.hp) / 100,
      // strength: RiderG1.BASESTR + (RiderG1.BASESTR * bonus.rider.G1.str) / 100,
      leadership: 0, //RiderG1.LEADERSHIP,
      authority: 0,
      dominance: 0,
      unit: unitType,
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

  const shouldShow = (
    unitname: string,
    unit: GuardsmanUnit | SpecialistUnit | EngineerUnit | MonsterUnit | MercUnit
  ) => {
    let show = true

    if (filterTypes.length > 0) {
      show = filterTypes.includes(unit.category) // melee, ranged, mounted, scout, flying
    }

    if (!unitname.toLowerCase().includes(search.toLowerCase())) {
      show = false
    }
    if (selectedStacks.includes(unitname)) {
      show = false
    }
    return show
  }

  const shouldShowMonster = (unitname: string, unit: MonsterUnit) => {
    let show = true

    if (filterTypes.length === 0) {
      show = filterGroups.includes(unit.group) //dragon, elemental, beast, giant
    } else {
      // combine both, so we get dragon:melee dragon:flying dragon:mounted etc
      show = filterGroups.includes(unit.group) && filterTypes.includes(unit.category) //dragon, elemental, beast, giant
    }
    if (selectedStacks.includes(unitname)) {
      show = false
    }
    if (!unitname.toLowerCase().includes(search.toLowerCase())) {
      show = false
    }
    return show
  }

  const selectedStacks = army.map(stack => stack.unit.name)
  // console.log('selected army', selectedStacks)

  // console.log('selected filter types', filterTypes)

  // let collapseClass = 'army-container '
  // if (collapsed) {
  //   collapseClass = collapseClass + 'collapsed'
  // }

  return (
    <aside
      id='sidebar-multi-level-sidebar'
      className='fixed top-[56px] left-0 z-40 w-64 h-[calc(100vh-56px)] transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
      aria-label='Sidebar'
    >
      <section className='px-4 py-4   bg-gray-50 dark:bg-gray-800'>
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
          <div className='ml-3'>
            <label className='mr-1 text-xs ms-2 font-medium text-gray-900 dark:text-gray-300'>
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
          <div className='ml-3'>
            <label className='mr-1 text-xs ms-2 font-medium text-gray-900 dark:text-gray-300'>
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
          <div className='ml-3'>
            <label className='mr-1 text-xs ms-2 font-medium text-gray-900 dark:text-gray-300'>
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
          <div className='ml-3'>
            <label className='mr-1 text-xs ms-2 font-medium text-gray-900 dark:text-gray-300'>
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
          <div className='ml-3'>
            <label className='mr-1 text-xs ms-2 font-medium text-gray-900 dark:text-gray-300'>
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
          <div className='ml-3'>
            <label className='mr-1 text-xs ms-2 font-medium text-gray-900 dark:text-gray-300'>
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
          <div className='ml-3'>
            <label className='mr-1 text-xs ms-2 font-medium text-gray-900 dark:text-gray-300'>
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
          <div className='ml-3'>
            <label className='mr-1 text-xs ms-2 font-medium text-gray-900 dark:text-gray-300'>
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
          <div className='ml-3'>
            <label className='mr-1 text-xs ms-2 font-medium text-gray-900 dark:text-gray-300'>
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
          <div className='ml-3'>
            <label className='mr-1 text-xs ms-2 font-medium text-gray-900 dark:text-gray-300'>
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
      </section>
      <div className='h-[calc(100%-274px-56px)] px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
        <h2 className='header-title'>Army</h2>
        <div className='army-list'>
          <div className='guardsmen'>
            <p className='group-title'>Spearman</p>
            <div className='btn-group'>
              {shouldShow(ARMY.SpearmanG1, SpearmanG1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Spearman G1')
                  }}
                >
                  G1
                </button>
              )}

              {shouldShow(ARMY.SpearmanG2, SpearmanG2) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Spearman G2')
                  }}
                >
                  G2
                </button>
              )}

              {shouldShow(ARMY.SpearmanG3, SpearmanG3) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Spearman G3')
                  }}
                >
                  G3
                </button>
              )}

              {shouldShow(ARMY.SpearmanG4, SpearmanG4) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Spearman G4')
                  }}
                >
                  G4
                </button>
              )}

              {shouldShow(ARMY.SpearmanG5, SpearmanG5) && (
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
              {shouldShow(ARMY.ArcherG1, ArcherG1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Archer G1')
                  }}
                >
                  G1
                </button>
              )}

              {shouldShow(ARMY.ArcherG2, ArcherG2) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Archer G2')
                  }}
                >
                  G2
                </button>
              )}

              {shouldShow(ARMY.ArcherG3, ArcherG3) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Archer G3')
                  }}
                >
                  G3
                </button>
              )}

              {shouldShow(ARMY.ArcherG4, ArcherG4) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Archer G4')
                  }}
                >
                  G4
                </button>
              )}

              {shouldShow(ARMY.ArcherG5, ArcherG5) && (
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
              {shouldShow(ARMY.RiderG1, RiderG1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Rider G1')
                  }}
                >
                  G1
                </button>
              )}

              {shouldShow(ARMY.RiderG2, RiderG2) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Rider G2')
                  }}
                >
                  G2
                </button>
              )}

              {shouldShow(ARMY.RiderG3, RiderG3) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Rider G3')
                  }}
                >
                  G3
                </button>
              )}

              {shouldShow(ARMY.RiderG4, RiderG4) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Rider G4')
                  }}
                >
                  G4
                </button>
              )}

              {shouldShow(ARMY.RiderG5, RiderG5) && (
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
              {shouldShow(ARMY.battleGriffinV, battleGriffinV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('battleGriffinV')
                  }}
                >
                  bf5
                </button>
              )}

              {shouldShow(ARMY.battleGriffinVI, battleGriffinVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('battleGriffinVI')
                  }}
                >
                  bf6
                </button>
              )}

              {shouldShow(ARMY.battleGriffinVII, battleGriffinVII) && (
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
              {shouldShow(ARMY.heavyArbalesterVI, heavyArbalesterVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('heavyArbalesterVI')
                  }}
                >
                  ha6
                </button>
              )}

              {shouldShow(ARMY.heavyArbalesterVII, heavyArbalesterVII) && (
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
              {shouldShow(ARMY.heavyHalberdierVI, heavyHalberdierVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('heavyHalberdierVI')
                  }}
                >
                  HH6
                </button>
              )}

              {shouldShow(ARMY.heavyHalberdierVII, heavyHalberdierVII) && (
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
              {shouldShow(ARMY.mountedKnightVI, mountedKnightVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('mountedKnightVI')
                  }}
                >
                  MK6
                </button>
              )}

              {shouldShow(ARMY.mountedKnightVII, mountedKnightVII) && (
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
              {shouldShow(ARMY.purifierI, purifierI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('purifierI')
                  }}
                >
                  P1
                </button>
              )}

              {shouldShow(ARMY.purifierII, purifierII) && (
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
              {shouldShow(ARMY.punisherI, punisherI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('punisherI')
                  }}
                >
                  P1
                </button>
              )}

              {shouldShow(ARMY.punisherII, punisherII) && (
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
              {shouldShow(ARMY.smiterI, smiterI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('smiterI')
                  }}
                >
                  S1
                </button>
              )}

              {shouldShow(ARMY.smiterII, smiterII) && (
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
              {shouldShow(ARMY.coraxI, coraxI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('coraxI')
                  }}
                >
                  C1
                </button>
              )}

              {shouldShow(ARMY.coraxII, coraxII) && (
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
              {shouldShow(ARMY.SwordmanS1, SwordmanS1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Swordsman S1')
                  }}
                >
                  S1
                </button>
              )}
              {shouldShow(ARMY.SwordmanS2, SwordmanS2) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Swordsman S2')
                  }}
                >
                  S2
                </button>
              )}
              {shouldShow(ARMY.SwordmanS3, SwordmanS3) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Swordsman S3')
                  }}
                >
                  S3
                </button>
              )}
              {shouldShow(ARMY.SwordmanS4, SwordmanS4) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Swordsman S4')
                  }}
                >
                  S4
                </button>
              )}
              {shouldShow(ARMY.SwordmanS5, SwordmanS5) && (
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
              {shouldShow(ARMY.SpyS1, SpyS1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Spy S1')
                  }}
                >
                  S1
                </button>
              )}
              {shouldShow(ARMY.SpyS2, SpyS2) && (
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
              {shouldShow(ARMY.deadshotsV, deadshotV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('deadshotV')
                  }}
                >
                  DS5
                </button>
              )}
              {shouldShow(ARMY.deadshotsVI, deadshotVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('deadshotVI')
                  }}
                >
                  DS6
                </button>
              )}
              {shouldShow(ARMY.deadshotsVII, deadshotVII) && (
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
              {shouldShow(ARMY.lionRiderV, lionRiderV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('lionRiderV')
                  }}
                >
                  LR5
                </button>
              )}
              {shouldShow(ARMY.lionRiderVI, lionRiderVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('lionRiderVI')
                  }}
                >
                  LR6
                </button>
              )}
              {shouldShow(ARMY.lionRiderVII, lionRiderVII) && (
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
              {shouldShow(ARMY.vulturesV, vulturesV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('vulturesV')
                  }}
                >
                  V5
                </button>
              )}
              {shouldShow(ARMY.vulturesVI, vulturesVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('vulturesVI')
                  }}
                >
                  V6
                </button>
              )}
              {shouldShow(ARMY.vulturesVII, vulturesVII) && (
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
              {shouldShow(ARMY.heavyKnightVI, heavyKnightVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('heavyKnightVI')
                  }}
                >
                  HK5
                </button>
              )}
              {shouldShow(ARMY.heavyKnightVII, heavyKnightVII) && (
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
              {shouldShow(ARMY.swiftJaegerVI, swiftJaegerVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('swiftJaegerVI')
                  }}
                >
                  SJ5
                </button>
              )}
              {shouldShow(ARMY.swiftJaegerVII, swiftJaegerVII) && (
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
              {shouldShow(ARMY.legitimistI, legitimistI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('legitimistI')
                  }}
                >
                  L1
                </button>
              )}
              {shouldShow(ARMY.legitimistII, legitimistII) && (
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
              {shouldShow(ARMY.duelistI, duelistI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('duelistI')
                  }}
                >
                  D1
                </button>
              )}
              {shouldShow(ARMY.duelistII, duelistII) && (
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
              {shouldShow(ARMY.whitemaneI, whitemaneI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('whitemaneI')
                  }}
                >
                  W1
                </button>
              )}
              {shouldShow(ARMY.whitemaneII, whitemaneII) && (
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
              {shouldShow(ARMY.royalLionI, royalLionI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('royalLionI')
                  }}
                >
                  RL1
                </button>
              )}
              {shouldShow(ARMY.royalLionII, royalLionII) && (
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
              {shouldShow(ARMY.panopticI, panopticI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('panopticI')
                  }}
                >
                  P1
                </button>
              )}
              {shouldShow(ARMY.panopticII, panopticII) && (
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
              {shouldShow(ARMY.CatapultE1, CatapultE1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E1')
                  }}
                >
                  E1
                </button>
              )}
              {shouldShow(ARMY.CatapultE2, CatapultE2) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E2')
                  }}
                >
                  E2
                </button>
              )}
              {shouldShow(ARMY.CatapultE3, CatapultE3) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E3')
                  }}
                >
                  E3
                </button>
              )}
              {shouldShow(ARMY.CatapultE4, CatapultE4) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E4')
                  }}
                >
                  E4
                </button>
              )}
              {shouldShow(ARMY.CatapultE5, CatapultE5) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E5')
                  }}
                >
                  E5
                </button>
              )}
              {shouldShow(ARMY.CatapultE6, CatapultE6) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E6')
                  }}
                >
                  E6 Ballistae VI
                </button>
              )}
              {shouldShow(ARMY.CatapultE7, CatapultE7) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E7')
                  }}
                >
                  E7 Ballistae VII
                </button>
              )}
              {shouldShow(ARMY.CatapultE8, CatapultE8) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E8')
                  }}
                >
                  E8 Josephine I
                </button>
              )}
              {shouldShow(ARMY.CatapultE9, CatapultE9) && (
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
              {shouldShowMonster(ARMY.waterElemental, waterElemental) &&
                ARMY.waterElemental.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(waterElemental.category) ||
                  filterGroups.includes(waterElemental.group)) &&
                !selectedStacks.includes(ARMY.waterElemental) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('waterElemental')
                    }}
                  >
                    Water Elemental III
                  </button>
                )}
              {shouldShowMonster(ARMY.battleBoar, battleBoar) &&
                ARMY.battleBoar.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(battleBoar.category) ||
                  filterGroups.includes(battleBoar.group)) &&
                !selectedStacks.includes(ARMY.battleBoar) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('battleBoar')
                    }}
                  >
                    Battle Boar III
                  </button>
                )}
              {shouldShowMonster(ARMY.emeraldDragon, emeraldDragon) &&
                ARMY.emeraldDragon.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(emeraldDragon.category) ||
                  filterGroups.includes(emeraldDragon.group)) &&
                !selectedStacks.includes(ARMY.emeraldDragon) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('emeraldDragon')
                    }}
                  >
                    Emerald Dragon III
                  </button>
                )}
              {shouldShowMonster(ARMY.stoneGargole, stoneGargole) &&
                ARMY.stoneGargole.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(stoneGargole.category) ||
                  filterGroups.includes(stoneGargole.group)) &&
                !selectedStacks.includes(ARMY.stoneGargole) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('stoneGargole')
                    }}
                  >
                    Stone Gargole III
                  </button>
                )}
            </div>
            <div className='btn-group'>
              {shouldShowMonster(ARMY.icePhoenix, icePhoenix) &&
                ARMY.icePhoenix.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(icePhoenix.category) ||
                  filterGroups.includes(icePhoenix.group)) &&
                !selectedStacks.includes(ARMY.icePhoenix) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('icePhoenix')
                    }}
                  >
                    ice Phoenix IV
                  </button>
                )}
              {shouldShowMonster(ARMY.gorgonMedusa, gorgonMedusa) &&
                ARMY.gorgonMedusa.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(gorgonMedusa.category) ||
                  filterGroups.includes(gorgonMedusa.group)) &&
                !selectedStacks.includes(ARMY.gorgonMedusa) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('gorgonMedusa')
                    }}
                  >
                    gorgon Medusa IV
                  </button>
                )}
              {shouldShowMonster(ARMY.magicDragon, magicDragon) &&
                ARMY.magicDragon.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(magicDragon.category) ||
                  filterGroups.includes(magicDragon.group)) &&
                !selectedStacks.includes(ARMY.magicDragon) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('magicDragon')
                    }}
                  >
                    magic Dragon IV
                  </button>
                )}
              {shouldShowMonster(ARMY.multiArmGuardianIV, multiArmGuardianIV) &&
                ARMY.multiArmGuardianIV.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(multiArmGuardianIV.category) ||
                  filterGroups.includes(multiArmGuardianIV.group)) &&
                !selectedStacks.includes(ARMY.multiArmGuardianIV) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('multiArmGuardianIV')
                    }}
                  >
                    many-Armed Guardian IV
                  </button>
                )}
            </div>
            <div className='btn-group'>
              {shouldShowMonster(ARMY.flamingCentaur, flamingCentaurusV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('flamingCentaurusV')
                  }}
                >
                  flaming Centaurus V
                </button>
              )}
              {shouldShowMonster(ARMY.fearsomeManticora, fearsomeManticoraV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('fearsomeManticoraV')
                  }}
                >
                  fear Manticora V
                </button>
              )}
              {shouldShowMonster(ARMY.desertConquer, desertConquer) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('desertConquer')
                  }}
                >
                  desert Vanquisher V
                </button>
              )}
              {shouldShowMonster(ARMY.Ettin, Ettin) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Ettin')
                  }}
                >
                  Ettin V
                </button>
              )}
            </div>
            <div className='btn-group'>
              {shouldShowMonster(ARMY.jungleDestroyerVI, jungleDestroyerVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('jungleDestroyerVI')
                  }}
                >
                  jungle Destroyer VI
                </button>
              )}
              {shouldShowMonster(ARMY.crystalDragon, crystalDragon) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('crystalDragon')
                  }}
                >
                  crystal Dragon VI
                </button>
              )}
              {shouldShowMonster(ARMY.trollRider, trollRider) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('trollRider')
                  }}
                >
                  troll Rider VI
                </button>
              )}
              {shouldShowMonster(ARMY.rubiGolem, rubiGolem) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('rubiGolem')
                  }}
                >
                  rubi Golem VI
                </button>
              )}
            </div>
            <div className='btn-group'>
              {shouldShowMonster(ARMY.windLord, windLord) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('windLord')
                  }}
                >
                  wind Lord VII
                </button>
              )}
              {shouldShowMonster(ARMY.ancientTerrorVII, ancientTerrorVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('ancientTerrorVII')
                  }}
                >
                  ancient Terror VII
                </button>
              )}
              {shouldShowMonster(ARMY.blackDragon, blackDragon) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('blackDragon')
                  }}
                >
                  black Dragon VII
                </button>
              )}
              {shouldShowMonster(ARMY.destructiveColossusVII, destructiveColossusVII) && (
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
              {shouldShowMonster(ARMY.firePhoenixI, firePhoenixI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('firePhoenixI')
                  }}
                >
                  fire Phoenix I
                </button>
              )}
              {shouldShowMonster(ARMY.tricksterI, tricksterI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('tricksterI')
                  }}
                >
                  trickster I
                </button>
              )}
              {shouldShowMonster(ARMY.devastatorI, devastatorI) && (
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
              {shouldShowMonster(ARMY.firePhoenixII, firePhoenixII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('firePhoenixII')
                  }}
                >
                  firePhoenix II
                </button>
              )}
              {shouldShowMonster(ARMY.tricksterII, tricksterII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('tricksterII')
                  }}
                >
                  trickster II
                </button>
              )}
              {shouldShowMonster(ARMY.devastatorII, devastatorII) && (
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
              {shouldShow(ARMY.epicMonsterHunterVI, epicMonsterHunterVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('mercEpicMonsterHunter')
                  }}
                >
                  Epic Monster Hunter VI
                </button>
              )}
              {shouldShow(ARMY.chariotVI, chariotVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('chariotVI')
                  }}
                >
                  Chariot VI
                </button>
              )}
              {shouldShow(ARMY.legionaryVI, legionaryVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('legionaryVI')
                  }}
                >
                  Legionary VI
                </button>
              )}
              {shouldShow(ARMY.deathChariotVI, deathChariotVI) && (
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
              {shouldShow(ARMY.arbalesterVI, arbalesterVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('arbalesterVI')
                  }}
                >
                  arbalester VI
                </button>
              )}
              {shouldShow(ARMY.sphynxVI, sphynxVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('sphynxVI')
                  }}
                >
                  sphynx VI
                </button>
              )}
              {shouldShow(ARMY.knightVI, knightVI) && (
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
              {shouldShow(ARMY.trailseekerVI, trailseekerVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('trailseekerVI')
                  }}
                >
                  trailseeker VI
                </button>
              )}
              {shouldShow(ARMY.rhinoRiderVI, rhinoRiderVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('rhinoRiderVI')
                  }}
                >
                  rhinoRider VI
                </button>
              )}

              {shouldShow(ARMY.boneGolemVI, boneGolemVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('boneGolemVI')
                  }}
                >
                  boneGolemVI
                </button>
              )}
              {shouldShow(ARMY.sheduVI, sheduVI) && (
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
              {shouldShow(ARMY.entVI, entVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('entVI')
                  }}
                >
                  ent VI
                </button>
              )}
              {shouldShow(ARMY.abominationVI, abominationVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('abominationVI')
                  }}
                >
                  abomination VI
                </button>
              )}
              {shouldShow(ARMY.archidemonVI, archidemonVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('archidemonVI')
                  }}
                >
                  archidemon VI
                </button>
              )}

              {shouldShow(ARMY.lightningLordVII, lightningLordVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('lightningLordVII')
                  }}
                >
                  lightningLordVII
                </button>
              )}

              {shouldShow(ARMY.cursedDragonVII, cursedDragonVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('cursedDragonVII')
                  }}
                >
                  cursedDragonVII
                </button>
              )}

              {shouldShow(ARMY.seaLordVII, seaLordVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('seaLordVII')
                  }}
                >
                  seaLordVII
                </button>
              )}

              {shouldShow(ARMY.sandwormVII, sandwormVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('sandwormVII')
                  }}
                >
                  sandwormVII
                </button>
              )}
              {shouldShow(ARMY.lifeDragonVII, lifeDragonVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('lifeDragonVII')
                  }}
                >
                  lifeDragonVII
                </button>
              )}
              {shouldShow(ARMY.goldenDragonVII, goldenDragonVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('goldenDragonVII')
                  }}
                >
                  goldenDragonVII
                </button>
              )}

              {shouldShow(ARMY.overlordVII, overlordVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('overlordVII')
                  }}
                >
                  overlordVII
                </button>
              )}

              {shouldShow(ARMY.fireLordVII, fireLordVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('fireLordVII')
                  }}
                >
                  fireLordVII
                </button>
              )}
              {shouldShow(ARMY.jungleKingVII, jungleKingVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('jungleKingVII')
                  }}
                >
                  jungleKingVII
                </button>
              )}
              {shouldShow(ARMY.epicMonsterHunterVII, epicMonsterHunterVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('epicMonsterHunterVII')
                  }}
                >
                  epicMonsterHunterVII
                </button>
              )}

              {shouldShow(ARMY.wyvernII, wyvernII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('wyvernII')
                  }}
                >
                  wyvernII
                </button>
              )}

              {shouldShow(ARMY.arielII, arielII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('arielII')
                  }}
                >
                  arielII
                </button>
              )}

              {shouldShow(ARMY.jagoII, jagoII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('jagoII')
                  }}
                >
                  jagoII
                </button>
              )}
              {shouldShow(ARMY.eternalCannoneerII, eternalCannoneerII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('eternalCannoneerII')
                  }}
                >
                  eternalCannoneerII
                </button>
              )}
              {shouldShow(ARMY.epicMonsterHunterII, epicMonsterHunterII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('epicMonsterHunterII')
                  }}
                >
                  epicMonsterHunterII
                </button>
              )}
              {shouldShow(ARMY.SwordmanS1, SwordmanS1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('warregalII')
                  }}
                >
                  warregalII
                </button>
              )}
              {shouldShow(ARMY.SwordmanS1, SwordmanS1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('demonicSalamanderII')
                  }}
                >
                  demonicSalamanderII
                </button>
              )}
              {shouldShow(ARMY.SwordmanS1, SwordmanS1) &&
                ARMY.slavicWarriorII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(slavicWarriorII.category) ||
                  filterGroups.includes(slavicWarriorII.group)) &&
                !selectedStacks.includes(ARMY.slavicWarriorII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('slavicWarriorII')
                    }}
                  >
                    slavicWarriorII
                  </button>
                )}

              {shouldShow(ARMY.SwordmanS1, SwordmanS1) &&
                ARMY.wardenII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(wardenII.category) ||
                  filterGroups.includes(wardenII.group)) &&
                !selectedStacks.includes(ARMY.wardenII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('wardenII')
                    }}
                  >
                    wardenII
                  </button>
                )}
              {shouldShow(ARMY.SwordmanS1, SwordmanS1) &&
                ARMY.highlanderII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(highlanderII.category) ||
                  filterGroups.includes(highlanderII.group)) &&
                !selectedStacks.includes(ARMY.highlanderII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('highlanderII')
                    }}
                  >
                    highlanderII
                  </button>
                )}
              {shouldShow(ARMY.SwordmanS1, SwordmanS1) &&
                ARMY.galloperII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(galloperII.category) ||
                  filterGroups.includes(galloperII.group)) &&
                !selectedStacks.includes(ARMY.galloperII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('galloperII')
                    }}
                  >
                    galloperII
                  </button>
                )}
              {shouldShow(ARMY.SwordmanS1, SwordmanS1) &&
                ARMY.quicksandII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(quicksandII.category) ||
                  filterGroups.includes(quicksandII.group)) &&
                !selectedStacks.includes(ARMY.quicksandII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('quicksandII')
                    }}
                  >
                    quicksandII
                  </button>
                )}

              {shouldShow(ARMY.SwordmanS1, SwordmanS1) &&
                ARMY.scarfaceII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(scarfaceII.category) ||
                  filterGroups.includes(scarfaceII.group)) &&
                !selectedStacks.includes(ARMY.scarfaceII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('scarfaceII')
                    }}
                  >
                    scarfaceII
                  </button>
                )}
              {shouldShow(ARMY.SwordmanS1, SwordmanS1) &&
                ARMY.pounderII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(pounderII.category) ||
                  filterGroups.includes(pounderII.group)) &&
                !selectedStacks.includes(ARMY.pounderII) && (
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
