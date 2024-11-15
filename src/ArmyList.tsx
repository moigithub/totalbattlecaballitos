import { mercChariot, mercEpicMonsterHunter } from './mercs'
import {
  ArcherG1,
  ArcherG2,
  ArcherG3,
  ArcherG4,
  ArcherG5,
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
    } else if (type === 'mercEpicMonsterHunter') {
      unitType = mercEpicMonsterHunter
    } else if (type === 'mercChariot') {
      unitType = mercChariot
    } else if (type === 'waterElemental') {
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

  return (
    <div className='army-container'>
      <h2 className='header-title'>Army</h2>
      <div className='army-list'>
        <div className='guardsmen'>
          <p className='group-title'>Spearman</p>
          <div className='btn-group'>
            <button
              className='troop '
              onClick={() => {
                addTroops('Spearman G1')
              }}
            >
              G1
            </button>

            <button
              className='troop  '
              onClick={() => {
                addTroops('Spearman G2')
              }}
            >
              G2
            </button>
            <button
              className='troop  '
              onClick={() => {
                addTroops('Spearman G3')
              }}
            >
              G3
            </button>

            <button
              className='troop  '
              onClick={() => {
                addTroops('Spearman G4')
              }}
            >
              G4
            </button>
            <button
              className='troop  '
              onClick={() => {
                addTroops('Spearman G5')
              }}
            >
              G5
            </button>
          </div>
        </div>

        <div className='guardsmen'>
          <p className='group-title'>Archer</p>
          <div className='btn-group'>
            <button
              className='troop '
              onClick={() => {
                addTroops('Archer G1')
              }}
            >
              G1
            </button>
            <button
              className='troop '
              onClick={() => {
                addTroops('Archer G2')
              }}
            >
              G2
            </button>
            <button
              className='troop '
              onClick={() => {
                addTroops('Archer G3')
              }}
            >
              G3
            </button>
            <button
              className='troop '
              onClick={() => {
                addTroops('Archer G4')
              }}
            >
              G4
            </button>
            <button
              className='troop '
              onClick={() => {
                addTroops('Archer G5')
              }}
            >
              G5
            </button>
          </div>
        </div>

        <div className='guardsmen'>
          <p className='group-title'>Rider</p>
          <div className='btn-group'>
            <button
              className='troop '
              onClick={() => {
                addTroops('Rider G1')
              }}
            >
              G1
            </button>

            <button
              className='troop '
              onClick={() => {
                addTroops('Rider G2')
              }}
            >
              G2
            </button>

            <button
              className='troop '
              onClick={() => {
                addTroops('Rider G3')
              }}
            >
              G3
            </button>

            <button
              className='troop '
              onClick={() => {
                addTroops('Rider G4')
              }}
            >
              G4
            </button>

            <button
              className='troop '
              onClick={() => {
                addTroops('Rider G5')
              }}
            >
              G5
            </button>
          </div>
        </div>

        <div className='specialists'>
          <p className='group-title'>Swordsman</p>
          <div className='btn-group'>
            <button
              className='troop '
              onClick={() => {
                addTroops('Swordsman S1')
              }}
            >
              S1
            </button>
            <button
              className='troop '
              onClick={() => {
                addTroops('Swordsman S2')
              }}
            >
              S2
            </button>
            <button
              className='troop '
              onClick={() => {
                addTroops('Swordsman S3')
              }}
            >
              S3
            </button>
            <button
              className='troop '
              onClick={() => {
                addTroops('Swordsman S4')
              }}
            >
              S4
            </button>
            <button
              className='troop '
              onClick={() => {
                addTroops('Swordsman S5')
              }}
            >
              S5
            </button>
          </div>
        </div>

        <div className='specialists'>
          <p className='group-title'>Spy</p>
          <div className='btn-group'>
            <button
              className='troop '
              onClick={() => {
                addTroops('Spy S1')
              }}
            >
              S1
            </button>
            <button
              className='troop '
              onClick={() => {
                addTroops('Spy S2')
              }}
            >
              S2
            </button>
          </div>
        </div>

        <div className='engineer'>
          <p className='group-title'>Catapult</p>
          <div className='btn-group'>
            <button
              className='troop'
              onClick={() => {
                addTroops('Catapult E1')
              }}
            >
              E1
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('Catapult E2')
              }}
            >
              E2
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('Catapult E3')
              }}
            >
              E3
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('Catapult E4')
              }}
            >
              E4
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('Catapult E5')
              }}
            >
              E5
            </button>
          </div>
        </div>

        <div className='monsters'>
          <p className='group-title'>Monsters</p>
          <div className='btn-group'>
            <button
              className='troop '
              onClick={() => {
                addTroops('waterElemental')
              }}
            >
              Water Elemental III
            </button>
            <button
              className='troop '
              onClick={() => {
                addTroops('battleBoar')
              }}
            >
              Battle Boar III
            </button>
            <button
              className='troop '
              onClick={() => {
                addTroops('emeraldDragon')
              }}
            >
              Emerald Dragon III
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('stoneGargole')
              }}
            >
              Stone Gargole III
            </button>
          </div>
          <div className='btn-group'>
            <button
              className='troop'
              onClick={() => {
                addTroops('iceFenix')
              }}
            >
              ice Fenix IV
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('gorgonMedusa')
              }}
            >
              gorgon Medusa IV
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('magicDragon')
              }}
            >
              magic Dragon IV
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('multiArmGuardian')
              }}
            >
              multi-Arm Guardian IV
            </button>
          </div>
          <div className='btn-group'>
            <button
              className='troop'
              onClick={() => {
                addTroops('burningCentaurus')
              }}
            >
              burning Centaurus V
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('fearManticora')
              }}
            >
              fear Manticora V
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('desertConquer')
              }}
            >
              desert Conquer V
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('Ettin')
              }}
            >
              Ettin V
            </button>
          </div>
          <div className='btn-group'>
            <button
              className='troop'
              onClick={() => {
                addTroops('forestDestructor')
              }}
            >
              forest Destructor VI
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('crystalDragon')
              }}
            >
              crystal Dragon VI
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('trollRider')
              }}
            >
              troll Rider VI
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('rubiGolem')
              }}
            >
              rubi Golem VI
            </button>
          </div>
          <div className='btn-group'>
            <button
              className='troop'
              onClick={() => {
                addTroops('windLord')
              }}
            >
              wind Lord VII
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('oldTerror')
              }}
            >
              old Terror VII
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('blackDragon')
              }}
            >
              black Dragon VII
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('destroyerColossus')
              }}
            >
              destroyer Colossus VII
            </button>
          </div>
          <div className='btn-group'>
            <button
              className='troop'
              onClick={() => {
                addTroops('fireFenixI')
              }}
            >
              fire Fenix I
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('embaucatorI')
              }}
            >
              embaucator I
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('devastatorI')
              }}
            >
              devastator I
            </button>
          </div>
          <div className='btn-group'>
            <button
              className='troop'
              onClick={() => {
                addTroops('fireFenixII')
              }}
            >
              fireFenix II
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('embaucatorII')
              }}
            >
              embaucator II
            </button>
            <button
              className='troop'
              onClick={() => {
                addTroops('devastatorII')
              }}
            >
              devastator II
            </button>
          </div>
        </div>

        <div className='mercs'>
          <p className='group-title'>Mercs</p>
          <div className='btn-group'>
            <button
              className='troop '
              onClick={() => {
                addTroops('mercEpicMonsterHunter')
              }}
            >
              Epic Monster Hunter VI
            </button>
            <button
              className='troop '
              onClick={() => {
                addTroops('mercChariot')
              }}
            >
              Chariot VI
            </button>
            <button
              className='troop '
              onClick={() => {
                addTroops('Legionary VI')
              }}
            >
              Legionary VI
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
