import {
  arbalesterVI,
  chariotVI,
  knightVI,
  legionaryVI,
  mercEpicMonsterHunter,
  rhinoRiderVI,
  sheduVI,
  sphynxVI,
  trailseekerVI
} from './mercs'
import {
  ArcherG1,
  ArcherG2,
  ArcherG3,
  ArcherG4,
  ArcherG5,
  ARMY,
  battleBoar,
  blackDragon,
  burningCentaurus,
  CatapultE1,
  CatapultE2,
  CatapultE3,
  CatapultE4,
  CatapultE5,
  crystalDragon,
  desertConquer,
  destroyerColossus,
  devastatorI,
  devastatorII,
  embaucatorI,
  embaucatorII,
  emeraldDragon,
  Ettin,
  fearManticora,
  fireFenixI,
  fireFenixII,
  forestDestructor,
  gorgonMedusa,
  iceFenix,
  magicDragon,
  multiArmGuardian,
  oldTerror,
  RiderG1,
  RiderG2,
  RiderG3,
  RiderG4,
  RiderG5,
  rubiGolem,
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
  SwordmanS1,
  SwordmanS2,
  SwordmanS3,
  SwordmanS4,
  SwordmanS5,
  trollRider,
  waterElemental,
  windLord
} from './soldiers'
import { useStackStore } from './stackStore'
import { Stack } from './types'
import './armyList.css'

export const ArmyList = () => {
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
    } else if (type === 'Swordsman S1') {
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
    } else if (type === 'Catapult E1') {
      unitType = CatapultE1
    } else if (type === 'Catapult E2') {
      unitType = CatapultE2
    } else if (type === 'Catapult E3') {
      unitType = CatapultE3
    } else if (type === 'Catapult E4') {
      unitType = CatapultE4
    } else if (type === 'Catapult E5') {
      unitType = CatapultE5
    }

    // MERCENARIES ------------------------------
    else if (type === 'mercEpicMonsterHunter') {
      unitType = mercEpicMonsterHunter
    } else if (type === 'chariotVI') {
      unitType = chariotVI
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
    } else if (type === 'sheduVI') {
      unitType = sheduVI
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
      units: 0, //unitsNeededToKill1Mob
      minSetup: 0,
      lockMinSetup: true,
      limit: 0
    }
    addStack(stack)
  }

  const selectedStacks = army.map(stack => stack.unit.name)

  return (
    <div className='army-container'>
      <h2 className='header-title'>Army</h2>
      <div className='army-list'>
        <div className='guardsmen'>
          <p className='group-title'>Spearman</p>
          <div className='btn-group'>
            {!selectedStacks.includes(ARMY.SpearmanG1) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('Spearman G1')
                }}
              >
                G1
              </button>
            )}

            {!selectedStacks.includes(ARMY.SpearmanG2) && (
              <button
                className='troop  '
                onClick={() => {
                  addTroops('Spearman G2')
                }}
              >
                G2
              </button>
            )}

            {!selectedStacks.includes(ARMY.SpearmanG3) && (
              <button
                className='troop  '
                onClick={() => {
                  addTroops('Spearman G3')
                }}
              >
                G3
              </button>
            )}

            {!selectedStacks.includes(ARMY.SpearmanG4) && (
              <button
                className='troop  '
                onClick={() => {
                  addTroops('Spearman G4')
                }}
              >
                G4
              </button>
            )}

            {!selectedStacks.includes(ARMY.SpearmanG5) && (
              <button
                className='troop  '
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
                className='troop '
                onClick={() => {
                  addTroops('Archer G1')
                }}
              >
                G1
              </button>
            )}

            {!selectedStacks.includes(ARMY.ArcherG2) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('Archer G2')
                }}
              >
                G2
              </button>
            )}

            {!selectedStacks.includes(ARMY.ArcherG3) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('Archer G3')
                }}
              >
                G3
              </button>
            )}

            {!selectedStacks.includes(ARMY.ArcherG4) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('Archer G4')
                }}
              >
                G4
              </button>
            )}

            {!selectedStacks.includes(ARMY.ArcherG5) && (
              <button
                className='troop '
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
                className='troop '
                onClick={() => {
                  addTroops('Rider G1')
                }}
              >
                G1
              </button>
            )}

            {!selectedStacks.includes(ARMY.RiderG2) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('Rider G2')
                }}
              >
                G2
              </button>
            )}

            {!selectedStacks.includes(ARMY.RiderG3) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('Rider G3')
                }}
              >
                G3
              </button>
            )}

            {!selectedStacks.includes(ARMY.RiderG4) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('Rider G4')
                }}
              >
                G4
              </button>
            )}

            {!selectedStacks.includes(ARMY.RiderG5) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('Rider G5')
                }}
              >
                G5
              </button>
            )}
          </div>
        </div>

        <div className='specialists'>
          <p className='group-title'>Swordsman</p>
          <div className='btn-group'>
            {!selectedStacks.includes(ARMY.SwordmanS1) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('Swordsman S1')
                }}
              >
                S1
              </button>
            )}
            {!selectedStacks.includes(ARMY.SwordmanS2) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('Swordsman S2')
                }}
              >
                S2
              </button>
            )}
            {!selectedStacks.includes(ARMY.SwordmanS3) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('Swordsman S3')
                }}
              >
                S3
              </button>
            )}
            {!selectedStacks.includes(ARMY.SwordmanS4) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('Swordsman S4')
                }}
              >
                S4
              </button>
            )}
            {!selectedStacks.includes(ARMY.SwordmanS5) && (
              <button
                className='troop '
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
                className='troop '
                onClick={() => {
                  addTroops('Spy S1')
                }}
              >
                S1
              </button>
            )}
            {!selectedStacks.includes(ARMY.SpyS2) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('Spy S2')
                }}
              >
                S2
              </button>
            )}
          </div>
        </div>

        <div className='engineer'>
          <p className='group-title'>Catapult</p>
          <div className='btn-group'>
            {!selectedStacks.includes(ARMY.CatapultE1) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('Catapult E1')
                }}
              >
                E1
              </button>
            )}
            {!selectedStacks.includes(ARMY.CatapultE2) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('Catapult E2')
                }}
              >
                E2
              </button>
            )}
            {!selectedStacks.includes(ARMY.CatapultE3) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('Catapult E3')
                }}
              >
                E3
              </button>
            )}
            {!selectedStacks.includes(ARMY.CatapultE4) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('Catapult E4')
                }}
              >
                E4
              </button>
            )}
            {!selectedStacks.includes(ARMY.CatapultE5) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('Catapult E5')
                }}
              >
                E5
              </button>
            )}
          </div>
        </div>

        <div className='monsters'>
          <p className='group-title'>Monsters</p>
          <div className='btn-group'>
            {!selectedStacks.includes(ARMY.waterElemental) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('waterElemental')
                }}
              >
                Water Elemental III
              </button>
            )}
            {!selectedStacks.includes(ARMY.battleBoar) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('battleBoar')
                }}
              >
                Battle Boar III
              </button>
            )}
            {!selectedStacks.includes(ARMY.emeraldDragon) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('emeraldDragon')
                }}
              >
                Emerald Dragon III
              </button>
            )}
            {!selectedStacks.includes(ARMY.stoneGargole) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('stoneGargole')
                }}
              >
                Stone Gargole III
              </button>
            )}
          </div>
          <div className='btn-group'>
            {!selectedStacks.includes(ARMY.iceFenix) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('iceFenix')
                }}
              >
                ice Fenix IV
              </button>
            )}
            {!selectedStacks.includes(ARMY.gorgonMedusa) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('gorgonMedusa')
                }}
              >
                gorgon Medusa IV
              </button>
            )}
            {!selectedStacks.includes(ARMY.magicDragon) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('magicDragon')
                }}
              >
                magic Dragon IV
              </button>
            )}
            {!selectedStacks.includes(ARMY.multiArmGuardian) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('multiArmGuardian')
                }}
              >
                multi-Arm Guardian IV
              </button>
            )}
          </div>
          <div className='btn-group'>
            {!selectedStacks.includes(ARMY.burningCentaurus) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('burningCentaurus')
                }}
              >
                burning Centaurus V
              </button>
            )}
            {!selectedStacks.includes(ARMY.fearManticora) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('fearManticora')
                }}
              >
                fear Manticora V
              </button>
            )}
            {!selectedStacks.includes(ARMY.desertConquer) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('desertConquer')
                }}
              >
                desert Conquer V
              </button>
            )}
            {!selectedStacks.includes(ARMY.Ettin) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('Ettin')
                }}
              >
                Ettin V
              </button>
            )}
          </div>
          <div className='btn-group'>
            {!selectedStacks.includes(ARMY.forestDestructor) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('forestDestructor')
                }}
              >
                forest Destructor VI
              </button>
            )}
            {!selectedStacks.includes(ARMY.crystalDragon) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('crystalDragon')
                }}
              >
                crystal Dragon VI
              </button>
            )}
            {!selectedStacks.includes(ARMY.trollRider) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('trollRider')
                }}
              >
                troll Rider VI
              </button>
            )}
            {!selectedStacks.includes(ARMY.rubiGolem) && (
              <button
                className='troop'
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
                className='troop'
                onClick={() => {
                  addTroops('windLord')
                }}
              >
                wind Lord VII
              </button>
            )}
            {!selectedStacks.includes(ARMY.oldTerror) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('oldTerror')
                }}
              >
                old Terror VII
              </button>
            )}
            {!selectedStacks.includes(ARMY.blackDragon) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('blackDragon')
                }}
              >
                black Dragon VII
              </button>
            )}
            {!selectedStacks.includes(ARMY.destroyerColossus) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('destroyerColossus')
                }}
              >
                destroyer Colossus VII
              </button>
            )}
          </div>
          <div className='btn-group'>
            {!selectedStacks.includes(ARMY.fireFenixI) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('fireFenixI')
                }}
              >
                fire Fenix I
              </button>
            )}
            {!selectedStacks.includes(ARMY.embaucatorI) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('embaucatorI')
                }}
              >
                embaucator I
              </button>
            )}
            {!selectedStacks.includes(ARMY.devastatorI) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('devastatorI')
                }}
              >
                devastator I
              </button>
            )}
          </div>

          <div className='btn-group'>
            {!selectedStacks.includes(ARMY.fireFenixII) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('fireFenixII')
                }}
              >
                fireFenix II
              </button>
            )}
            {!selectedStacks.includes(ARMY.embaucatorII) && (
              <button
                className='troop'
                onClick={() => {
                  addTroops('embaucatorII')
                }}
              >
                embaucator II
              </button>
            )}
            {!selectedStacks.includes(ARMY.devastatorII) && (
              <button
                className='troop'
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
            {!selectedStacks.includes(ARMY.mercEpicMonsterHunter) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('mercEpicMonsterHunter')
                }}
              >
                Epic Monster Hunter VI
              </button>
            )}
            {!selectedStacks.includes(ARMY.chariotVI) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('chariotVI')
                }}
              >
                Chariot VI
              </button>
            )}
            {!selectedStacks.includes(ARMY.legionaryVI) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('legionaryVI')
                }}
              >
                Legionary VI
              </button>
            )}
          </div>

          <div className='btn-group'>
            {!selectedStacks.includes(ARMY.arbalesterVI) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('arbalesterVI')
                }}
              >
                arbalester VI
              </button>
            )}
            {!selectedStacks.includes(ARMY.sphynxVI) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('sphynxVI')
                }}
              >
                sphynx VI
              </button>
            )}
            {!selectedStacks.includes(ARMY.knightVI) && (
              <button
                className='troop '
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
                className='troop '
                onClick={() => {
                  addTroops('trailseekerVI')
                }}
              >
                trailseeker VI
              </button>
            )}
            {!selectedStacks.includes(ARMY.rhinoRiderVI) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('rhinoRiderVI')
                }}
              >
                rhinoRider VI
              </button>
            )}
            {!selectedStacks.includes(ARMY.sheduVI) && (
              <button
                className='troop '
                onClick={() => {
                  addTroops('sheduVI')
                }}
              >
                shedu VI
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
