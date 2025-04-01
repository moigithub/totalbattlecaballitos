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
import { Stack } from './types'
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
              {ARMY.SpearmanG1.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(SpearmanG1.category) ||
                  filterGroups.includes(SpearmanG1.group)) &&
                !selectedStacks.includes(ARMY.SpearmanG1) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Spearman G1')
                    }}
                  >
                    G1
                  </button>
                )}

              {ARMY.SpearmanG2.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(SpearmanG2.category) ||
                  filterGroups.includes(SpearmanG2.group)) &&
                !selectedStacks.includes(ARMY.SpearmanG2) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Spearman G2')
                    }}
                  >
                    G2
                  </button>
                )}

              {ARMY.SpearmanG3.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(SpearmanG3.category) ||
                  filterGroups.includes(SpearmanG3.group)) &&
                !selectedStacks.includes(ARMY.SpearmanG3) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Spearman G3')
                    }}
                  >
                    G3
                  </button>
                )}

              {ARMY.SpearmanG4.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(SpearmanG4.category) ||
                  filterGroups.includes(SpearmanG4.group)) &&
                !selectedStacks.includes(ARMY.SpearmanG4) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Spearman G4')
                    }}
                  >
                    G4
                  </button>
                )}

              {ARMY.SpearmanG5.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(SpearmanG5.category) ||
                  filterGroups.includes(SpearmanG5.group)) &&
                !selectedStacks.includes(ARMY.SpearmanG5) && (
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
              {ARMY.ArcherG1.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(ArcherG1.category) ||
                  filterGroups.includes(ArcherG1.group)) &&
                !selectedStacks.includes(ARMY.ArcherG1) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Archer G1')
                    }}
                  >
                    G1
                  </button>
                )}

              {ARMY.ArcherG2.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(ArcherG2.category) ||
                  filterGroups.includes(ArcherG2.group)) &&
                !selectedStacks.includes(ARMY.ArcherG2) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Archer G2')
                    }}
                  >
                    G2
                  </button>
                )}

              {ARMY.ArcherG3.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(ArcherG3.category) ||
                  filterGroups.includes(ArcherG3.group)) &&
                !selectedStacks.includes(ARMY.ArcherG3) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Archer G3')
                    }}
                  >
                    G3
                  </button>
                )}

              {ARMY.ArcherG4.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(ArcherG4.category) ||
                  filterGroups.includes(ArcherG4.group)) &&
                !selectedStacks.includes(ARMY.ArcherG4) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Archer G4')
                    }}
                  >
                    G4
                  </button>
                )}

              {ARMY.ArcherG5.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(ArcherG5.category) ||
                  filterGroups.includes(ArcherG5.group)) &&
                !selectedStacks.includes(ARMY.ArcherG5) && (
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
              {ARMY.RiderG1.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(RiderG1.category) || filterGroups.includes(RiderG1.group)) &&
                !selectedStacks.includes(ARMY.RiderG1) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Rider G1')
                    }}
                  >
                    G1
                  </button>
                )}

              {ARMY.RiderG2.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(RiderG2.category) || filterGroups.includes(RiderG2.group)) &&
                !selectedStacks.includes(ARMY.RiderG2) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Rider G2')
                    }}
                  >
                    G2
                  </button>
                )}

              {ARMY.RiderG3.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(RiderG3.category) || filterGroups.includes(RiderG3.group)) &&
                !selectedStacks.includes(ARMY.RiderG3) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Rider G3')
                    }}
                  >
                    G3
                  </button>
                )}

              {ARMY.RiderG4.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(RiderG4.category) || filterGroups.includes(RiderG4.group)) &&
                !selectedStacks.includes(ARMY.RiderG4) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Rider G4')
                    }}
                  >
                    G4
                  </button>
                )}

              {ARMY.RiderG5.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(RiderG5.category) || filterGroups.includes(RiderG5.group)) &&
                !selectedStacks.includes(ARMY.RiderG5) && (
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
              {ARMY.battleGriffinV.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(battleGriffinV.category) ||
                  filterGroups.includes(battleGriffinV.group)) &&
                !selectedStacks.includes(ARMY.battleGriffinV) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('battleGriffinV')
                    }}
                  >
                    bf5
                  </button>
                )}

              {ARMY.battleGriffinVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(battleGriffinVI.category) ||
                  filterGroups.includes(battleGriffinVI.group)) &&
                !selectedStacks.includes(ARMY.battleGriffinVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('battleGriffinVI')
                    }}
                  >
                    bf6
                  </button>
                )}

              {ARMY.battleGriffinVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(battleGriffinVII.category) ||
                  filterGroups.includes(battleGriffinVII.group)) &&
                !selectedStacks.includes(ARMY.battleGriffinVII) && (
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
              {ARMY.heavyArbalesterVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(heavyArbalesterVI.category) ||
                  filterGroups.includes(heavyArbalesterVI.group)) &&
                !selectedStacks.includes(ARMY.heavyArbalesterVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('heavyArbalesterVI')
                    }}
                  >
                    ha6
                  </button>
                )}

              {ARMY.heavyArbalesterVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(heavyArbalesterVII.category) ||
                  filterGroups.includes(heavyArbalesterVII.group)) &&
                !selectedStacks.includes(ARMY.heavyArbalesterVII) && (
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
              {ARMY.heavyHalberdierVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(heavyHalberdierVI.category) ||
                  filterGroups.includes(heavyHalberdierVI.group)) &&
                !selectedStacks.includes(ARMY.heavyHalberdierVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('heavyHalberdierVI')
                    }}
                  >
                    HH6
                  </button>
                )}

              {ARMY.heavyHalberdierVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(heavyHalberdierVII.category) ||
                  filterGroups.includes(heavyHalberdierVII.group)) &&
                !selectedStacks.includes(ARMY.heavyHalberdierVII) && (
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
              {ARMY.mountedKnightVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(mountedKnightVI.category) ||
                  filterGroups.includes(mountedKnightVI.group)) &&
                !selectedStacks.includes(ARMY.mountedKnightVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('mountedKnightVI')
                    }}
                  >
                    MK6
                  </button>
                )}

              {ARMY.mountedKnightVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(mountedKnightVII.category) ||
                  filterGroups.includes(mountedKnightVII.group)) &&
                !selectedStacks.includes(ARMY.mountedKnightVII) && (
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
              {ARMY.purifierI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(purifierI.category) ||
                  filterGroups.includes(purifierI.group)) &&
                !selectedStacks.includes(ARMY.purifierI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('purifierI')
                    }}
                  >
                    P1
                  </button>
                )}

              {ARMY.purifierII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(purifierII.category) ||
                  filterGroups.includes(purifierII.group)) &&
                !selectedStacks.includes(ARMY.purifierII) && (
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
              {ARMY.punisherI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(punisherI.category) ||
                  filterGroups.includes(punisherI.group)) &&
                !selectedStacks.includes(ARMY.punisherI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('punisherI')
                    }}
                  >
                    P1
                  </button>
                )}

              {ARMY.punisherII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(punisherII.category) ||
                  filterGroups.includes(punisherII.group)) &&
                !selectedStacks.includes(ARMY.punisherII) && (
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
              {ARMY.smiterI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(smiterI.category) || filterGroups.includes(smiterI.group)) &&
                !selectedStacks.includes(ARMY.smiterI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('smiterI')
                    }}
                  >
                    S1
                  </button>
                )}

              {ARMY.smiterII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(smiterII.category) ||
                  filterGroups.includes(smiterII.group)) &&
                !selectedStacks.includes(ARMY.smiterII) && (
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
              {ARMY.coraxI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(coraxI.category) || filterGroups.includes(coraxI.group)) &&
                !selectedStacks.includes(ARMY.coraxI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('coraxI')
                    }}
                  >
                    C1
                  </button>
                )}

              {ARMY.coraxII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(coraxII.category) || filterGroups.includes(coraxII.group)) &&
                !selectedStacks.includes(ARMY.coraxII) && (
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
              {ARMY.SwordmanS1.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(SwordmanS1.category) ||
                  filterGroups.includes(SwordmanS1.group)) &&
                !selectedStacks.includes(ARMY.SwordmanS1) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Swordsman S1')
                    }}
                  >
                    S1
                  </button>
                )}
              {ARMY.SwordmanS2.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(SwordmanS2.category) ||
                  filterGroups.includes(SwordmanS2.group)) &&
                !selectedStacks.includes(ARMY.SwordmanS2) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Swordsman S2')
                    }}
                  >
                    S2
                  </button>
                )}
              {ARMY.SwordmanS3.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(SwordmanS3.category) ||
                  filterGroups.includes(SwordmanS3.group)) &&
                !selectedStacks.includes(ARMY.SwordmanS3) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Swordsman S3')
                    }}
                  >
                    S3
                  </button>
                )}
              {ARMY.SwordmanS4.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(SwordmanS4.category) ||
                  filterGroups.includes(SwordmanS4.group)) &&
                !selectedStacks.includes(ARMY.SwordmanS4) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Swordsman S4')
                    }}
                  >
                    S4
                  </button>
                )}
              {ARMY.SwordmanS5.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(SwordmanS5.category) ||
                  filterGroups.includes(SwordmanS5.group)) &&
                !selectedStacks.includes(ARMY.SwordmanS5) && (
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
              {ARMY.SpyS1.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(SpyS1.category) || filterGroups.includes(SpyS1.group)) &&
                !selectedStacks.includes(ARMY.SpyS1) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Spy S1')
                    }}
                  >
                    S1
                  </button>
                )}
              {ARMY.SpyS2.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(SpyS2.category) || filterGroups.includes(SpyS2.group)) &&
                !selectedStacks.includes(ARMY.SpyS2) && (
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
              {ARMY.deadshotsV.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(deadshotV.category) ||
                  filterGroups.includes(deadshotV.group)) &&
                !selectedStacks.includes(ARMY.deadshotsV) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('deadshotV')
                    }}
                  >
                    DS5
                  </button>
                )}
              {ARMY.deadshotsVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(deadshotVI.category) ||
                  filterGroups.includes(deadshotVI.group)) &&
                !selectedStacks.includes(ARMY.deadshotsVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('deadshotVI')
                    }}
                  >
                    DS6
                  </button>
                )}
              {ARMY.deadshotsVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(deadshotVII.category) ||
                  filterGroups.includes(deadshotVII.group)) &&
                !selectedStacks.includes(ARMY.deadshotsVII) && (
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
              {ARMY.lionRiderV.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(lionRiderV.category) ||
                  filterGroups.includes(lionRiderV.group)) &&
                !selectedStacks.includes(ARMY.lionRiderV) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('lionRiderV')
                    }}
                  >
                    LR5
                  </button>
                )}
              {ARMY.lionRiderVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(lionRiderVI.category) ||
                  filterGroups.includes(lionRiderVI.group)) &&
                !selectedStacks.includes(ARMY.lionRiderVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('lionRiderVI')
                    }}
                  >
                    LR6
                  </button>
                )}
              {ARMY.lionRiderVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(lionRiderVII.category) ||
                  filterGroups.includes(lionRiderVII.group)) &&
                !selectedStacks.includes(ARMY.lionRiderVII) && (
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
              {ARMY.vulturesV.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(vulturesV.category) ||
                  filterGroups.includes(vulturesV.group)) &&
                !selectedStacks.includes(ARMY.vulturesV) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('vulturesV')
                    }}
                  >
                    V5
                  </button>
                )}
              {ARMY.vulturesVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(vulturesVI.category) ||
                  filterGroups.includes(vulturesVI.group)) &&
                !selectedStacks.includes(ARMY.vulturesVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('vulturesVI')
                    }}
                  >
                    V6
                  </button>
                )}
              {ARMY.vulturesVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(vulturesVII.category) ||
                  filterGroups.includes(vulturesVII.group)) &&
                !selectedStacks.includes(ARMY.vulturesVII) && (
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
              {ARMY.heavyKnightVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(heavyKnightVI.category) ||
                  filterGroups.includes(heavyKnightVI.group)) &&
                !selectedStacks.includes(ARMY.heavyKnightVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('heavyKnightVI')
                    }}
                  >
                    HK5
                  </button>
                )}
              {ARMY.heavyKnightVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(heavyKnightVII.category) ||
                  filterGroups.includes(heavyKnightVII.group)) &&
                !selectedStacks.includes(ARMY.heavyKnightVII) && (
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
              {ARMY.swiftJaegerVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(swiftJaegerVI.category) ||
                  filterGroups.includes(swiftJaegerVI.group)) &&
                !selectedStacks.includes(ARMY.swiftJaegerVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('swiftJaegerVI')
                    }}
                  >
                    SJ5
                  </button>
                )}
              {ARMY.swiftJaegerVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(swiftJaegerVII.category) ||
                  filterGroups.includes(swiftJaegerVII.group)) &&
                !selectedStacks.includes(ARMY.swiftJaegerVII) && (
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
              {ARMY.legitimistI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(legitimistI.category) ||
                  filterGroups.includes(legitimistI.group)) &&
                !selectedStacks.includes(ARMY.legitimistI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('legitimistI')
                    }}
                  >
                    L1
                  </button>
                )}
              {ARMY.legitimistII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(legitimistII.category) ||
                  filterGroups.includes(legitimistII.group)) &&
                !selectedStacks.includes(ARMY.legitimistII) && (
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
              {ARMY.duelistI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(duelistI.category) ||
                  filterGroups.includes(duelistI.group)) &&
                !selectedStacks.includes(ARMY.duelistI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('duelistI')
                    }}
                  >
                    D1
                  </button>
                )}
              {ARMY.duelistII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(duelistII.category) ||
                  filterGroups.includes(duelistII.group)) &&
                !selectedStacks.includes(ARMY.duelistII) && (
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
              {ARMY.whitemaneI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(whitemaneI.category) ||
                  filterGroups.includes(whitemaneI.group)) &&
                !selectedStacks.includes(ARMY.whitemaneI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('whitemaneI')
                    }}
                  >
                    W1
                  </button>
                )}
              {ARMY.whitemaneII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(whitemaneII.category) ||
                  filterGroups.includes(whitemaneII.group)) &&
                !selectedStacks.includes(ARMY.whitemaneII) && (
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
              {ARMY.royalLionI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(royalLionI.category) ||
                  filterGroups.includes(royalLionI.group)) &&
                !selectedStacks.includes(ARMY.royalLionI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('royalLionI')
                    }}
                  >
                    RL1
                  </button>
                )}
              {ARMY.royalLionII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(royalLionII.category) ||
                  filterGroups.includes(royalLionII.group)) &&
                !selectedStacks.includes(ARMY.royalLionII) && (
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
              {ARMY.panopticI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(panopticI.category) ||
                  filterGroups.includes(panopticI.group)) &&
                !selectedStacks.includes(ARMY.panopticI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('panopticI')
                    }}
                  >
                    P1
                  </button>
                )}
              {ARMY.panopticII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(panopticII.category) ||
                  filterGroups.includes(panopticII.group)) &&
                !selectedStacks.includes(ARMY.panopticII) && (
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
              {ARMY.CatapultE1.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(CatapultE1.category) ||
                  filterGroups.includes(CatapultE1.group)) &&
                !selectedStacks.includes(ARMY.CatapultE1) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Catapult E1')
                    }}
                  >
                    E1
                  </button>
                )}
              {ARMY.CatapultE2.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(CatapultE2.category) ||
                  filterGroups.includes(CatapultE2.group)) &&
                !selectedStacks.includes(ARMY.CatapultE2) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Catapult E2')
                    }}
                  >
                    E2
                  </button>
                )}
              {ARMY.CatapultE3.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(CatapultE3.category) ||
                  filterGroups.includes(CatapultE3.group)) &&
                !selectedStacks.includes(ARMY.CatapultE3) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Catapult E3')
                    }}
                  >
                    E3
                  </button>
                )}
              {ARMY.CatapultE4.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(CatapultE4.category) ||
                  filterGroups.includes(CatapultE4.group)) &&
                !selectedStacks.includes(ARMY.CatapultE4) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Catapult E4')
                    }}
                  >
                    E4
                  </button>
                )}
              {ARMY.CatapultE5.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(CatapultE5.category) ||
                  filterGroups.includes(CatapultE5.group)) &&
                !selectedStacks.includes(ARMY.CatapultE5) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Catapult E5')
                    }}
                  >
                    E5
                  </button>
                )}
              {ARMY.CatapultE6.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(CatapultE6.category) ||
                  filterGroups.includes(CatapultE6.group)) &&
                !selectedStacks.includes(ARMY.CatapultE6) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Catapult E6')
                    }}
                  >
                    E6 Ballistae VI
                  </button>
                )}
              {ARMY.CatapultE7.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(CatapultE7.category) ||
                  filterGroups.includes(CatapultE7.group)) &&
                !selectedStacks.includes(ARMY.CatapultE7) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Catapult E7')
                    }}
                  >
                    E7 Ballistae VII
                  </button>
                )}
              {ARMY.CatapultE8.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(CatapultE8.category) ||
                  filterGroups.includes(CatapultE8.group)) &&
                !selectedStacks.includes(ARMY.CatapultE8) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('Catapult E8')
                    }}
                  >
                    E8 Josephine I
                  </button>
                )}
              {ARMY.CatapultE9.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(CatapultE9.category) ||
                  filterGroups.includes(CatapultE9.group)) &&
                !selectedStacks.includes(ARMY.CatapultE9) && (
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
              {ARMY.waterElemental.toLowerCase().includes(search.toLowerCase()) &&
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
              {ARMY.battleBoar.toLowerCase().includes(search.toLowerCase()) &&
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
              {ARMY.emeraldDragon.toLowerCase().includes(search.toLowerCase()) &&
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
              {ARMY.stoneGargole.toLowerCase().includes(search.toLowerCase()) &&
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
              {ARMY.icePhoenix.toLowerCase().includes(search.toLowerCase()) &&
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
              {ARMY.gorgonMedusa.toLowerCase().includes(search.toLowerCase()) &&
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
              {ARMY.magicDragon.toLowerCase().includes(search.toLowerCase()) &&
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
              {ARMY.multiArmGuardianIV.toLowerCase().includes(search.toLowerCase()) &&
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
              {ARMY.flamingCentaur.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(flamingCentaurusV.category) ||
                  filterGroups.includes(flamingCentaurusV.group)) &&
                !selectedStacks.includes(ARMY.flamingCentaur) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('flamingCentaurusV')
                    }}
                  >
                    flaming Centaurus V
                  </button>
                )}
              {ARMY.fearsomeManticora.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(fearsomeManticoraV.category) ||
                  filterGroups.includes(fearsomeManticoraV.group)) &&
                !selectedStacks.includes(ARMY.fearsomeManticora) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('fearsomeManticoraV')
                    }}
                  >
                    fear Manticora V
                  </button>
                )}
              {ARMY.desertConquer.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(desertConquer.category) ||
                  filterGroups.includes(desertConquer.group)) &&
                !selectedStacks.includes(ARMY.desertConquer) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('desertConquer')
                    }}
                  >
                    desert Vanquisher V
                  </button>
                )}
              {ARMY.Ettin.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(Ettin.category) || filterGroups.includes(Ettin.group)) &&
                !selectedStacks.includes(ARMY.Ettin) && (
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
              {ARMY.jungleDestroyerVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(jungleDestroyerVI.category) ||
                  filterGroups.includes(jungleDestroyerVI.group)) &&
                !selectedStacks.includes(ARMY.jungleDestroyerVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('jungleDestroyerVI')
                    }}
                  >
                    jungle Destroyer VI
                  </button>
                )}
              {ARMY.crystalDragon.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(crystalDragon.category) ||
                  filterGroups.includes(crystalDragon.group)) &&
                !selectedStacks.includes(ARMY.crystalDragon) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('crystalDragon')
                    }}
                  >
                    crystal Dragon VI
                  </button>
                )}
              {ARMY.trollRider.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(trollRider.category) ||
                  filterGroups.includes(trollRider.group)) &&
                !selectedStacks.includes(ARMY.trollRider) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('trollRider')
                    }}
                  >
                    troll Rider VI
                  </button>
                )}
              {ARMY.rubiGolem.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(rubiGolem.category) ||
                  filterGroups.includes(rubiGolem.group)) &&
                !selectedStacks.includes(ARMY.rubiGolem) && (
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
              {ARMY.windLord.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(windLord.category) ||
                  filterGroups.includes(windLord.group)) &&
                !selectedStacks.includes(ARMY.windLord) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('windLord')
                    }}
                  >
                    wind Lord VII
                  </button>
                )}
              {ARMY.ancientTerrorVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(ancientTerrorVII.category) ||
                  filterGroups.includes(ancientTerrorVII.group)) &&
                !selectedStacks.includes(ARMY.ancientTerrorVII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('ancientTerrorVII')
                    }}
                  >
                    ancient Terror VII
                  </button>
                )}
              {ARMY.blackDragon.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(blackDragon.category) ||
                  filterGroups.includes(blackDragon.group)) &&
                !selectedStacks.includes(ARMY.blackDragon) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('blackDragon')
                    }}
                  >
                    black Dragon VII
                  </button>
                )}
              {ARMY.destructiveColossusVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(destructiveColossusVII.category) ||
                  filterGroups.includes(destructiveColossusVII.group)) &&
                !selectedStacks.includes(ARMY.destructiveColossusVII) && (
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
              {ARMY.firePhoenixI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(firePhoenixI.category) ||
                  filterGroups.includes(firePhoenixI.group)) &&
                !selectedStacks.includes(ARMY.firePhoenixI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('firePhoenixI')
                    }}
                  >
                    fire Phoenix I
                  </button>
                )}
              {ARMY.tricksterI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(tricksterI.category) ||
                  filterGroups.includes(tricksterI.group)) &&
                !selectedStacks.includes(ARMY.tricksterI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('tricksterI')
                    }}
                  >
                    trickster I
                  </button>
                )}
              {ARMY.devastatorI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(devastatorI.category) ||
                  filterGroups.includes(devastatorI.group)) &&
                !selectedStacks.includes(ARMY.devastatorI) && (
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
              {ARMY.firePhoenixII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(firePhoenixII.category) ||
                  filterGroups.includes(firePhoenixII.group)) &&
                !selectedStacks.includes(ARMY.firePhoenixII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('firePhoenixII')
                    }}
                  >
                    firePhoenix II
                  </button>
                )}
              {ARMY.tricksterII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(tricksterII.category) ||
                  filterGroups.includes(tricksterII.group)) &&
                !selectedStacks.includes(ARMY.tricksterII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('tricksterII')
                    }}
                  >
                    trickster II
                  </button>
                )}
              {ARMY.devastatorII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(devastatorII.category) ||
                  filterGroups.includes(devastatorII.group)) &&
                !selectedStacks.includes(ARMY.devastatorII) && (
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
              {ARMY.epicMonsterHunterVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(epicMonsterHunterVI.category) ||
                  filterGroups.includes(epicMonsterHunterVI.group)) &&
                !selectedStacks.includes(ARMY.epicMonsterHunterVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('mercEpicMonsterHunter')
                    }}
                  >
                    Epic Monster Hunter VI
                  </button>
                )}
              {ARMY.chariotVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(chariotVI.category) ||
                  filterGroups.includes(chariotVI.group)) &&
                !selectedStacks.includes(ARMY.chariotVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('chariotVI')
                    }}
                  >
                    Chariot VI
                  </button>
                )}
              {ARMY.legionaryVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(legionaryVI.category) ||
                  filterGroups.includes(legionaryVI.group)) &&
                !selectedStacks.includes(ARMY.legionaryVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('legionaryVI')
                    }}
                  >
                    Legionary VI
                  </button>
                )}
              {ARMY.deathChariotVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(deathChariotVI.category) ||
                  filterGroups.includes(deathChariotVI.group)) &&
                !selectedStacks.includes(ARMY.deathChariotVI) && (
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
              {ARMY.arbalesterVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(arbalesterVI.category) ||
                  filterGroups.includes(arbalesterVI.group)) &&
                !selectedStacks.includes(ARMY.arbalesterVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('arbalesterVI')
                    }}
                  >
                    arbalester VI
                  </button>
                )}
              {ARMY.sphynxVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(sphynxVI.category) ||
                  filterGroups.includes(sphynxVI.group)) &&
                !selectedStacks.includes(ARMY.sphynxVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('sphynxVI')
                    }}
                  >
                    sphynx VI
                  </button>
                )}
              {ARMY.knightVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(knightVI.category) ||
                  filterGroups.includes(knightVI.group)) &&
                !selectedStacks.includes(ARMY.knightVI) && (
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
              {ARMY.trailseekerVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(trailseekerVI.category) ||
                  filterGroups.includes(trailseekerVI.group)) &&
                !selectedStacks.includes(ARMY.trailseekerVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('trailseekerVI')
                    }}
                  >
                    trailseeker VI
                  </button>
                )}
              {ARMY.rhinoRiderVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(rhinoRiderVI.category) ||
                  filterGroups.includes(rhinoRiderVI.group)) &&
                !selectedStacks.includes(ARMY.rhinoRiderVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('rhinoRiderVI')
                    }}
                  >
                    rhinoRider VI
                  </button>
                )}

              {ARMY.boneGolemVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(boneGolemVI.category) ||
                  filterGroups.includes(boneGolemVI.group)) &&
                !selectedStacks.includes(ARMY.boneGolemVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('boneGolemVI')
                    }}
                  >
                    boneGolemVI
                  </button>
                )}
              {ARMY.sheduVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(sheduVI.category) || filterGroups.includes(sheduVI.group)) &&
                !selectedStacks.includes(ARMY.sheduVI) && (
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
              {ARMY.entVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(entVI.category) || filterGroups.includes(entVI.group)) &&
                !selectedStacks.includes(ARMY.entVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('entVI')
                    }}
                  >
                    ent VI
                  </button>
                )}
              {ARMY.abominationVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(abominationVI.category) ||
                  filterGroups.includes(abominationVI.group)) &&
                !selectedStacks.includes(ARMY.abominationVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('abominationVI')
                    }}
                  >
                    abomination VI
                  </button>
                )}
              {ARMY.archidemonVI.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(archidemonVI.category) ||
                  filterGroups.includes(archidemonVI.group)) &&
                !selectedStacks.includes(ARMY.archidemonVI) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('archidemonVI')
                    }}
                  >
                    archidemon VI
                  </button>
                )}

              {ARMY.lightningLordVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(lightningLordVII.category) ||
                  filterGroups.includes(lightningLordVII.group)) &&
                !selectedStacks.includes(ARMY.lightningLordVII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('lightningLordVII')
                    }}
                  >
                    lightningLordVII
                  </button>
                )}

              {ARMY.cursedDragonVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(cursedDragonVII.category) ||
                  filterGroups.includes(cursedDragonVII.group)) &&
                !selectedStacks.includes(ARMY.cursedDragonVII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('cursedDragonVII')
                    }}
                  >
                    cursedDragonVII
                  </button>
                )}

              {ARMY.seaLordVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(seaLordVII.category) ||
                  filterGroups.includes(seaLordVII.group)) &&
                !selectedStacks.includes(ARMY.seaLordVII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('seaLordVII')
                    }}
                  >
                    seaLordVII
                  </button>
                )}

              {ARMY.sandwormVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(sandwormVII.category) ||
                  filterGroups.includes(sandwormVII.group)) &&
                !selectedStacks.includes(ARMY.sandwormVII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('sandwormVII')
                    }}
                  >
                    sandwormVII
                  </button>
                )}
              {ARMY.lifeDragonVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(lifeDragonVII.category) ||
                  filterGroups.includes(lifeDragonVII.group)) &&
                !selectedStacks.includes(ARMY.lifeDragonVII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('lifeDragonVII')
                    }}
                  >
                    lifeDragonVII
                  </button>
                )}
              {ARMY.goldenDragonVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(goldenDragonVII.category) ||
                  filterGroups.includes(goldenDragonVII.group)) &&
                !selectedStacks.includes(ARMY.goldenDragonVII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('goldenDragonVII')
                    }}
                  >
                    goldenDragonVII
                  </button>
                )}

              {ARMY.overlordVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(overlordVII.category) ||
                  filterGroups.includes(overlordVII.group)) &&
                !selectedStacks.includes(ARMY.overlordVII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('overlordVII')
                    }}
                  >
                    overlordVII
                  </button>
                )}

              {ARMY.fireLordVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(fireLordVII.category) ||
                  filterGroups.includes(fireLordVII.group)) &&
                !selectedStacks.includes(ARMY.fireLordVII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('fireLordVII')
                    }}
                  >
                    fireLordVII
                  </button>
                )}
              {ARMY.jungleKingVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(jungleKingVII.category) ||
                  filterGroups.includes(jungleKingVII.group)) &&
                !selectedStacks.includes(ARMY.jungleKingVII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('jungleKingVII')
                    }}
                  >
                    jungleKingVII
                  </button>
                )}
              {ARMY.epicMonsterHunterVII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(epicMonsterHunterVII.category) ||
                  filterGroups.includes(epicMonsterHunterVII.group)) &&
                !selectedStacks.includes(ARMY.epicMonsterHunterVII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('epicMonsterHunterVII')
                    }}
                  >
                    epicMonsterHunterVII
                  </button>
                )}

              {ARMY.wyvernII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(wyvernII.category) ||
                  filterGroups.includes(wyvernII.group)) &&
                !selectedStacks.includes(ARMY.wyvernII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('wyvernII')
                    }}
                  >
                    wyvernII
                  </button>
                )}

              {ARMY.arielII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(arielII.category) || filterGroups.includes(arielII.group)) &&
                !selectedStacks.includes(ARMY.arielII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('arielII')
                    }}
                  >
                    arielII
                  </button>
                )}

              {ARMY.jagoII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(jagoII.category) || filterGroups.includes(jagoII.group)) &&
                !selectedStacks.includes(ARMY.jagoII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('jagoII')
                    }}
                  >
                    jagoII
                  </button>
                )}
              {ARMY.eternalCannoneerII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(eternalCannoneerII.category) ||
                  filterGroups.includes(eternalCannoneerII.group)) &&
                !selectedStacks.includes(ARMY.eternalCannoneerII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('eternalCannoneerII')
                    }}
                  >
                    eternalCannoneerII
                  </button>
                )}
              {ARMY.epicMonsterHunterII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(epicMonsterHunterII.category) ||
                  filterGroups.includes(epicMonsterHunterII.group)) &&
                !selectedStacks.includes(ARMY.epicMonsterHunterII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('epicMonsterHunterII')
                    }}
                  >
                    epicMonsterHunterII
                  </button>
                )}
              {ARMY.warregalII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(warregalII.category) ||
                  filterGroups.includes(warregalII.group)) &&
                !selectedStacks.includes(ARMY.warregalII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('warregalII')
                    }}
                  >
                    warregalII
                  </button>
                )}
              {ARMY.demonicSalamanderII.toLowerCase().includes(search.toLowerCase()) &&
                (filterTypes.includes(demonicSalamanderII.category) ||
                  filterGroups.includes(demonicSalamanderII.group)) &&
                !selectedStacks.includes(ARMY.demonicSalamanderII) && (
                  <button
                    className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                    onClick={() => {
                      addTroops('demonicSalamanderII')
                    }}
                  >
                    demonicSalamanderII
                  </button>
                )}
              {ARMY.slavicWarriorII.toLowerCase().includes(search.toLowerCase()) &&
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

              {ARMY.wardenII.toLowerCase().includes(search.toLowerCase()) &&
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
              {ARMY.highlanderII.toLowerCase().includes(search.toLowerCase()) &&
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
              {ARMY.galloperII.toLowerCase().includes(search.toLowerCase()) &&
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
              {ARMY.quicksandII.toLowerCase().includes(search.toLowerCase()) &&
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

              {ARMY.scarfaceII.toLowerCase().includes(search.toLowerCase()) &&
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
              {ARMY.pounderII.toLowerCase().includes(search.toLowerCase()) &&
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
