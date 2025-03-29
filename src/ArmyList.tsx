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
  wyvernII
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
  burningCentaurus,
  CatapultE1,
  CatapultE2,
  CatapultE3,
  CatapultE4,
  CatapultE5,
  CatapultE6,
  CatapultE7,
  coraxI,
  coraxII,
  crystalDragon,
  deadshotV,
  deadshotVI,
  deadshotVII,
  desertConquer,
  destroyerColossus,
  devastatorI,
  devastatorII,
  duelistI,
  duelistII,
  embaucatorI,
  embaucatorII,
  emeraldDragon,
  Ettin,
  fearManticora,
  fireFenixI,
  fireFenixII,
  forestDestructor,
  gorgonMedusa,
  heavyArbalesterVI,
  heavyArbalesterVII,
  heavyHalberdierVI,
  heavyHalberdierVII,
  heavyKnightVI,
  heavyKnightVII,
  iceFenix,
  legitimistI,
  legitimistII,
  lionRiderV,
  lionRiderVI,
  lionRiderVII,
  magicDragon,
  mountedKnightVI,
  mountedKnightVII,
  multiArmGuardian,
  oldTerror,
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
// import { useState } from 'react'

export const ArmyList = () => {
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
    } else if (type === 'iceFenix') {
      unitType = iceFenix
    } else if (type === 'burningCentaurus') {
      unitType = burningCentaurus
    } else if (type === 'rubiGolem') {
      unitType = rubiGolem
    } else if (type === 'windLord') {
      unitType = windLord
    } else if (type === 'fireFenixI') {
      unitType = fireFenixI
    } else if (type === 'fireFenixII') {
      unitType = fireFenixII
    } else if (type === 'gorgonMedusa') {
      unitType = gorgonMedusa
    } else if (type === 'fearManticora') {
      unitType = fearManticora
    } else if (type === 'forestDestructor') {
      unitType = forestDestructor
    } else if (type === 'oldTerror') {
      unitType = oldTerror
    } else if (type === 'embaucatorI') {
      unitType = embaucatorI
    } else if (type === 'embaucatorII') {
      unitType = embaucatorII
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
    } else if (type === 'destroyerColossus') {
      unitType = destroyerColossus
    } else if (type === 'devastatorI') {
      unitType = devastatorI
    } else if (type === 'multiArmGuardian') {
      unitType = multiArmGuardian
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
      useHpLimit: false,
      HpLimit: 0
    }
    addStack(stack)
  }

  const selectedStacks = army.map(stack => stack.unit.name)

  // let collapseClass = 'army-container '
  // if (collapsed) {
  //   collapseClass = collapseClass + 'collapsed'
  // }

  return (
    <aside
      id='sidebar-multi-level-sidebar'
      className='fixed top-[56px] left-0 z-40 w-64 h-[calc(100vh-56px)] pt-[300px] transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
      aria-label='Sidebar'
    >
      <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
        <h2 className='header-title'>Army</h2>
        <div className='army-list'>
          <div className='guardsmen'>
            <p className='group-title'>Spearman</p>
            <div className='btn-group'>
              {!selectedStacks.includes(ARMY.SpearmanG1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Spearman G1')
                  }}
                >
                  G1
                </button>
              )}

              {!selectedStacks.includes(ARMY.SpearmanG2) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Spearman G2')
                  }}
                >
                  G2
                </button>
              )}

              {!selectedStacks.includes(ARMY.SpearmanG3) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Spearman G3')
                  }}
                >
                  G3
                </button>
              )}

              {!selectedStacks.includes(ARMY.SpearmanG4) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Spearman G4')
                  }}
                >
                  G4
                </button>
              )}

              {!selectedStacks.includes(ARMY.SpearmanG5) && (
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
              {!selectedStacks.includes(ARMY.ArcherG1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Archer G1')
                  }}
                >
                  G1
                </button>
              )}

              {!selectedStacks.includes(ARMY.ArcherG2) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Archer G2')
                  }}
                >
                  G2
                </button>
              )}

              {!selectedStacks.includes(ARMY.ArcherG3) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Archer G3')
                  }}
                >
                  G3
                </button>
              )}

              {!selectedStacks.includes(ARMY.ArcherG4) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Archer G4')
                  }}
                >
                  G4
                </button>
              )}

              {!selectedStacks.includes(ARMY.ArcherG5) && (
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
              {!selectedStacks.includes(ARMY.RiderG1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Rider G1')
                  }}
                >
                  G1
                </button>
              )}

              {!selectedStacks.includes(ARMY.RiderG2) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Rider G2')
                  }}
                >
                  G2
                </button>
              )}

              {!selectedStacks.includes(ARMY.RiderG3) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Rider G3')
                  }}
                >
                  G3
                </button>
              )}

              {!selectedStacks.includes(ARMY.RiderG4) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Rider G4')
                  }}
                >
                  G4
                </button>
              )}

              {!selectedStacks.includes(ARMY.RiderG5) && (
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
              {!selectedStacks.includes(ARMY.battleGriffinV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('battleGriffinV')
                  }}
                >
                  bf5
                </button>
              )}

              {!selectedStacks.includes(ARMY.battleGriffinVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('battleGriffinVI')
                  }}
                >
                  bf6
                </button>
              )}

              {!selectedStacks.includes(ARMY.battleGriffinVII) && (
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
              {!selectedStacks.includes(ARMY.heavyArbalesterVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('heavyArbalesterVI')
                  }}
                >
                  ha6
                </button>
              )}

              {!selectedStacks.includes(ARMY.heavyArbalesterVII) && (
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
              {!selectedStacks.includes(ARMY.heavyHalberdierVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('heavyHalberdierVI')
                  }}
                >
                  HH6
                </button>
              )}

              {!selectedStacks.includes(ARMY.heavyHalberdierVII) && (
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
              {!selectedStacks.includes(ARMY.mountedKnightVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('mountedKnightVI')
                  }}
                >
                  MK6
                </button>
              )}

              {!selectedStacks.includes(ARMY.mountedKnightVII) && (
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
              {!selectedStacks.includes(ARMY.purifierI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('purifierI')
                  }}
                >
                  P1
                </button>
              )}

              {!selectedStacks.includes(ARMY.purifierII) && (
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
              {!selectedStacks.includes(ARMY.punisherI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('punisherI')
                  }}
                >
                  P1
                </button>
              )}

              {!selectedStacks.includes(ARMY.punisherII) && (
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
              {!selectedStacks.includes(ARMY.smiterI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('smiterI')
                  }}
                >
                  S1
                </button>
              )}

              {!selectedStacks.includes(ARMY.smiterII) && (
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
              {!selectedStacks.includes(ARMY.coraxI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('coraxI')
                  }}
                >
                  C1
                </button>
              )}

              {!selectedStacks.includes(ARMY.coraxII) && (
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
              {!selectedStacks.includes(ARMY.SwordmanS1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Swordsman S1')
                  }}
                >
                  S1
                </button>
              )}
              {!selectedStacks.includes(ARMY.SwordmanS2) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Swordsman S2')
                  }}
                >
                  S2
                </button>
              )}
              {!selectedStacks.includes(ARMY.SwordmanS3) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Swordsman S3')
                  }}
                >
                  S3
                </button>
              )}
              {!selectedStacks.includes(ARMY.SwordmanS4) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Swordsman S4')
                  }}
                >
                  S4
                </button>
              )}
              {!selectedStacks.includes(ARMY.SwordmanS5) && (
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
              {!selectedStacks.includes(ARMY.SpyS1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Spy S1')
                  }}
                >
                  S1
                </button>
              )}
              {!selectedStacks.includes(ARMY.SpyS2) && (
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
              {!selectedStacks.includes(ARMY.deadshotsV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('deadshotV')
                  }}
                >
                  DS5
                </button>
              )}
              {!selectedStacks.includes(ARMY.deadshotsVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('deadshotVI')
                  }}
                >
                  DS6
                </button>
              )}
              {!selectedStacks.includes(ARMY.deadshotsVII) && (
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
              {!selectedStacks.includes(ARMY.lionRiderV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('lionRiderV')
                  }}
                >
                  LR5
                </button>
              )}
              {!selectedStacks.includes(ARMY.lionRiderVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('lionRiderVI')
                  }}
                >
                  LR6
                </button>
              )}
              {!selectedStacks.includes(ARMY.lionRiderVII) && (
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
              {!selectedStacks.includes(ARMY.vulturesV) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('vulturesV')
                  }}
                >
                  V5
                </button>
              )}
              {!selectedStacks.includes(ARMY.vulturesVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('vulturesVI')
                  }}
                >
                  V6
                </button>
              )}
              {!selectedStacks.includes(ARMY.vulturesVII) && (
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
              {!selectedStacks.includes(ARMY.heavyKnightVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('heavyKnightVI')
                  }}
                >
                  HK5
                </button>
              )}
              {!selectedStacks.includes(ARMY.heavyKnightVII) && (
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
              {!selectedStacks.includes(ARMY.swiftJaegerVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('swiftJaegerVI')
                  }}
                >
                  SJ5
                </button>
              )}
              {!selectedStacks.includes(ARMY.swiftJaegerVII) && (
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
              {!selectedStacks.includes(ARMY.legitimistI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('legitimistI')
                  }}
                >
                  L1
                </button>
              )}
              {!selectedStacks.includes(ARMY.legitimistII) && (
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
              {!selectedStacks.includes(ARMY.duelistI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('duelistI')
                  }}
                >
                  D1
                </button>
              )}
              {!selectedStacks.includes(ARMY.duelistII) && (
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
              {!selectedStacks.includes(ARMY.whitemaneI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('whitemaneI')
                  }}
                >
                  W1
                </button>
              )}
              {!selectedStacks.includes(ARMY.whitemaneII) && (
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
              {!selectedStacks.includes(ARMY.royalLionI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('royalLionI')
                  }}
                >
                  RL1
                </button>
              )}
              {!selectedStacks.includes(ARMY.royalLionII) && (
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
              {!selectedStacks.includes(ARMY.panopticI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('panopticI')
                  }}
                >
                  P1
                </button>
              )}
              {!selectedStacks.includes(ARMY.panopticII) && (
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
              {!selectedStacks.includes(ARMY.CatapultE1) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E1')
                  }}
                >
                  E1
                </button>
              )}
              {!selectedStacks.includes(ARMY.CatapultE2) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E2')
                  }}
                >
                  E2
                </button>
              )}
              {!selectedStacks.includes(ARMY.CatapultE3) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E3')
                  }}
                >
                  E3
                </button>
              )}
              {!selectedStacks.includes(ARMY.CatapultE4) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E4')
                  }}
                >
                  E4
                </button>
              )}
              {!selectedStacks.includes(ARMY.CatapultE5) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E5')
                  }}
                >
                  E5
                </button>
              )}
              {!selectedStacks.includes(ARMY.CatapultE6) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E6')
                  }}
                >
                  E6
                </button>
              )}
              {!selectedStacks.includes(ARMY.CatapultE7) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('Catapult E7')
                  }}
                >
                  E7
                </button>
              )}
            </div>
          </div>

          <div className='monsters'>
            <p className='group-title'>Monsters</p>
            <div className='btn-group'>
              {!selectedStacks.includes(ARMY.waterElemental) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('waterElemental')
                  }}
                >
                  Water Elemental III
                </button>
              )}
              {!selectedStacks.includes(ARMY.battleBoar) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('battleBoar')
                  }}
                >
                  Battle Boar III
                </button>
              )}
              {!selectedStacks.includes(ARMY.emeraldDragon) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('emeraldDragon')
                  }}
                >
                  Emerald Dragon III
                </button>
              )}
              {!selectedStacks.includes(ARMY.stoneGargole) && (
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
              {!selectedStacks.includes(ARMY.icePhoenix) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('iceFenix')
                  }}
                >
                  ice Phoenix IV
                </button>
              )}
              {!selectedStacks.includes(ARMY.gorgonMedusa) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('gorgonMedusa')
                  }}
                >
                  gorgon Medusa IV
                </button>
              )}
              {!selectedStacks.includes(ARMY.magicDragon) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('magicDragon')
                  }}
                >
                  magic Dragon IV
                </button>
              )}
              {!selectedStacks.includes(ARMY.manyArmedGuardian) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('multiArmGuardian')
                  }}
                >
                  many-Armed Guardian IV
                </button>
              )}
            </div>
            <div className='btn-group'>
              {!selectedStacks.includes(ARMY.flamingCentaur) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('burningCentaurus')
                  }}
                >
                  flaming Centaurus V
                </button>
              )}
              {!selectedStacks.includes(ARMY.fearsomeManticora) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('fearManticora')
                  }}
                >
                  fear Manticora V
                </button>
              )}
              {!selectedStacks.includes(ARMY.desertConquer) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('desertConquer')
                  }}
                >
                  desert Vanquisher V
                </button>
              )}
              {!selectedStacks.includes(ARMY.Ettin) && (
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
              {!selectedStacks.includes(ARMY.jungleDestructor) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('forestDestructor')
                  }}
                >
                  jungle Destroyer VI
                </button>
              )}
              {!selectedStacks.includes(ARMY.crystalDragon) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('crystalDragon')
                  }}
                >
                  crystal Dragon VI
                </button>
              )}
              {!selectedStacks.includes(ARMY.trollRider) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('trollRider')
                  }}
                >
                  troll Rider VI
                </button>
              )}
              {!selectedStacks.includes(ARMY.rubiGolem) && (
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
              {!selectedStacks.includes(ARMY.windLord) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('windLord')
                  }}
                >
                  wind Lord VII
                </button>
              )}
              {!selectedStacks.includes(ARMY.ancientTerror) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('oldTerror')
                  }}
                >
                  ancient Terror VII
                </button>
              )}
              {!selectedStacks.includes(ARMY.blackDragon) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('blackDragon')
                  }}
                >
                  black Dragon VII
                </button>
              )}
              {!selectedStacks.includes(ARMY.destructiveColossus) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('destroyerColossus')
                  }}
                >
                  destructive Colossus VII
                </button>
              )}
            </div>
            <div className='btn-group'>
              {!selectedStacks.includes(ARMY.firePhoenixI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('fireFenixI')
                  }}
                >
                  fire Phoenix I
                </button>
              )}
              {!selectedStacks.includes(ARMY.tricksterI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('embaucatorI')
                  }}
                >
                  trickster I
                </button>
              )}
              {!selectedStacks.includes(ARMY.devastatorI) && (
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
              {!selectedStacks.includes(ARMY.firePhoenixII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('fireFenixII')
                  }}
                >
                  firePhoenix II
                </button>
              )}
              {!selectedStacks.includes(ARMY.tricksterII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('embaucatorII')
                  }}
                >
                  trickster II
                </button>
              )}
              {!selectedStacks.includes(ARMY.devastatorII) && (
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
              {!selectedStacks.includes(ARMY.epicMonsterHunterVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('mercEpicMonsterHunter')
                  }}
                >
                  Epic Monster Hunter VI
                </button>
              )}
              {!selectedStacks.includes(ARMY.chariotVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('chariotVI')
                  }}
                >
                  Chariot VI
                </button>
              )}
              {!selectedStacks.includes(ARMY.legionaryVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('legionaryVI')
                  }}
                >
                  Legionary VI
                </button>
              )}
              {!selectedStacks.includes(ARMY.deathChariotVI) && (
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
              {!selectedStacks.includes(ARMY.arbalesterVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('arbalesterVI')
                  }}
                >
                  arbalester VI
                </button>
              )}
              {!selectedStacks.includes(ARMY.sphynxVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('sphynxVI')
                  }}
                >
                  sphynx VI
                </button>
              )}
              {!selectedStacks.includes(ARMY.knightVI) && (
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
              {!selectedStacks.includes(ARMY.trailseekerVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('trailseekerVI')
                  }}
                >
                  trailseeker VI
                </button>
              )}
              {!selectedStacks.includes(ARMY.rhinoRiderVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('rhinoRiderVI')
                  }}
                >
                  rhinoRider VI
                </button>
              )}

              {!selectedStacks.includes(ARMY.boneGolemVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('boneGolemVI')
                  }}
                >
                  boneGolemVI
                </button>
              )}
              {!selectedStacks.includes(ARMY.sheduVI) && (
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
              {!selectedStacks.includes(ARMY.abominationVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('abominationVI')
                  }}
                >
                  abomination VI
                </button>
              )}
              {!selectedStacks.includes(ARMY.archidemonVI) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('archidemonVI')
                  }}
                >
                  archidemon VI
                </button>
              )}

              {!selectedStacks.includes(ARMY.lightningLordVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('lightningLordVII')
                  }}
                >
                  lightningLordVII
                </button>
              )}

              {!selectedStacks.includes(ARMY.cursedDragonVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('cursedDragonVII')
                  }}
                >
                  cursedDragonVII
                </button>
              )}

              {!selectedStacks.includes(ARMY.seaLordVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('seaLordVII')
                  }}
                >
                  seaLordVII
                </button>
              )}

              {!selectedStacks.includes(ARMY.sandwormVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('sandwormVII')
                  }}
                >
                  sandwormVII
                </button>
              )}
              {!selectedStacks.includes(ARMY.lifeDragonVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('lifeDragonVII')
                  }}
                >
                  lifeDragonVII
                </button>
              )}
              {!selectedStacks.includes(ARMY.goldenDragonVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('goldenDragonVII')
                  }}
                >
                  goldenDragonVII
                </button>
              )}

              {!selectedStacks.includes(ARMY.overlordVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('overlordVII')
                  }}
                >
                  overlordVII
                </button>
              )}

              {!selectedStacks.includes(ARMY.fireLordVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('fireLordVII')
                  }}
                >
                  fireLordVII
                </button>
              )}
              {!selectedStacks.includes(ARMY.jungleKingVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('jungleKingVII')
                  }}
                >
                  jungleKingVII
                </button>
              )}
              {!selectedStacks.includes(ARMY.epicMonsterHunterVII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('epicMonsterHunterVII')
                  }}
                >
                  epicMonsterHunterVII
                </button>
              )}

              {!selectedStacks.includes(ARMY.wyvernII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('wyvernII')
                  }}
                >
                  wyvernII
                </button>
              )}

              {!selectedStacks.includes(ARMY.arielII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('arielII')
                  }}
                >
                  arielII
                </button>
              )}

              {!selectedStacks.includes(ARMY.jagoII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('jagoII')
                  }}
                >
                  jagoII
                </button>
              )}
              {!selectedStacks.includes(ARMY.eternalCannoneerII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('eternalCannoneerII')
                  }}
                >
                  eternalCannoneerII
                </button>
              )}
              {!selectedStacks.includes(ARMY.epicMonsterHunterII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('epicMonsterHunterII')
                  }}
                >
                  epicMonsterHunterII
                </button>
              )}
              {!selectedStacks.includes(ARMY.warregalII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('warregalII')
                  }}
                >
                  warregalII
                </button>
              )}
              {!selectedStacks.includes(ARMY.demonicSalamanderII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('demonicSalamanderII')
                  }}
                >
                  demonicSalamanderII
                </button>
              )}
              {!selectedStacks.includes(ARMY.slavicWarriorII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('slavicWarriorII')
                  }}
                >
                  slavicWarriorII
                </button>
              )}

              {!selectedStacks.includes(ARMY.wardenII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('wardenII')
                  }}
                >
                  wardenII
                </button>
              )}
              {!selectedStacks.includes(ARMY.highlanderII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('highlanderII')
                  }}
                >
                  highlanderII
                </button>
              )}
              {!selectedStacks.includes(ARMY.galloperII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('galloperII')
                  }}
                >
                  galloperII
                </button>
              )}
              {!selectedStacks.includes(ARMY.quicksandII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('quicksandII')
                  }}
                >
                  quicksandII
                </button>
              )}

              {!selectedStacks.includes(ARMY.scarfaceII) && (
                <button
                  className='shrink-0 bg-gray-800  cursor-pointer  inline-flex items-center justify-center border border-gray-700 mx-0.5 my-0.5 rounded-md px-0.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  onClick={() => {
                    addTroops('scarfaceII')
                  }}
                >
                  scarfaceII
                </button>
              )}
              {!selectedStacks.includes(ARMY.pounderII) && (
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
