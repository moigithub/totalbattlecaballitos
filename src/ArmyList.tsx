import { Stack, useStackStore } from './guardStore'
import {
  ArcherG1,
  ArcherG2,
  ArcherG3,
  ArcherG4,
  ArcherG5,
  CatapultE1,
  CatapultE2,
  CatapultE3,
  CatapultE4,
  CatapultE5,
  mercChariot,
  mercEpicMonsterHunter,
  RiderG1,
  RiderG2,
  RiderG3,
  RiderG4,
  RiderG5,
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
  SwordmanS1,
  SwordmanS2,
  SwordmanS3,
  SwordmanS4,
  SwordmanS5
} from './soldiers'

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
    }

    if (!unitType) {
      return
    }

    const stack: Omit<Stack, 'id'> = {
      // health: RiderG1.BASEHP + (RiderG1.BASEHP * bonus.rider.G1.hp) / 100,
      // strength: RiderG1.BASESTR + (RiderG1.BASESTR * bonus.rider.G1.str) / 100,
      leadership: 0, //RiderG1.LEADERSHIP,
      unit: unitType,
      units: 0,
      minSetup: 0,
      lockMinSetup: true,
      limit: 0
    }
    addStack(stack)
  }

  return (
    <div className='army-container'>
      <h2>Army</h2>
      <div className='army-list'>
        <div
          className='troop guardsmen'
          onClick={() => {
            addTroops('Spearman G1')
          }}
        >
          Spearman G1
        </div>
        <div
          className='troop guardsmen'
          onClick={() => {
            addTroops('Archer G1')
          }}
        >
          Archer G1
        </div>
        <div
          className='troop guardsmen'
          onClick={() => {
            addTroops('Rider G1')
          }}
        >
          Rider G1
        </div>
        <hr />
        <div
          className='troop guardsmen'
          onClick={() => {
            addTroops('Spearman G2')
          }}
        >
          Spearman G2
        </div>
        <div
          className='troop guardsmen'
          onClick={() => {
            addTroops('Archer G2')
          }}
        >
          Archer G2
        </div>
        <div
          className='troop guardsmen'
          onClick={() => {
            addTroops('Rider G2')
          }}
        >
          Rider G2
        </div>
        <hr />
        <div
          className='troop guardsmen'
          onClick={() => {
            addTroops('Spearman G3')
          }}
        >
          Spearman G3
        </div>
        <div
          className='troop guardsmen'
          onClick={() => {
            addTroops('Archer G3')
          }}
        >
          Archer G3
        </div>
        <div
          className='troop guardsmen'
          onClick={() => {
            addTroops('Rider G3')
          }}
        >
          Rider G3
        </div>
        <hr />
        <div
          className='troop guardsmen'
          onClick={() => {
            addTroops('Spearman G4')
          }}
        >
          Spearman G4
        </div>
        <div
          className='troop guardsmen'
          onClick={() => {
            addTroops('Archer G4')
          }}
        >
          Archer G4
        </div>
        <div
          className='troop guardsmen'
          onClick={() => {
            addTroops('Rider G4')
          }}
        >
          Rider G4
        </div>
        <hr />
        <div
          className='troop guardsmen'
          onClick={() => {
            addTroops('Spearman G5')
          }}
        >
          Spearman G5
        </div>
        <div
          className='troop guardsmen'
          onClick={() => {
            addTroops('Archer G5')
          }}
        >
          Archer G5
        </div>
        <div
          className='troop guardsmen'
          onClick={() => {
            addTroops('Rider G5')
          }}
        >
          Rider G5
        </div>
        <hr />
        <div
          className='troop specialists'
          onClick={() => {
            addTroops('Swordsman S1')
          }}
        >
          Swordsman S1
        </div>

        <div
          className='troop specialists'
          onClick={() => {
            addTroops('Swordsman S2')
          }}
        >
          Swordsman S2
        </div>

        <div
          className='troop specialists'
          onClick={() => {
            addTroops('Swordsman S3')
          }}
        >
          Swordsman S3
        </div>

        <div
          className='troop specialists'
          onClick={() => {
            addTroops('Swordsman S4')
          }}
        >
          Swordsman S4
        </div>

        <div
          className='troop specialists'
          onClick={() => {
            addTroops('Swordsman S5')
          }}
        >
          Swordsman S5
        </div>
        <div
          className='troop specialists'
          onClick={() => {
            addTroops('Spy S1')
          }}
        >
          Spy S1
        </div>
        <div
          className='troop specialists'
          onClick={() => {
            addTroops('Spy S2')
          }}
        >
          Spy S2
        </div>
        <hr />
        <div
          className='troop engineer'
          onClick={() => {
            addTroops('Catapult E1')
          }}
        >
          Catapult E1
        </div>
        <div
          className='troop engineer'
          onClick={() => {
            addTroops('Catapult E2')
          }}
        >
          Catapult E2
        </div>
        <div
          className='troop engineer'
          onClick={() => {
            addTroops('Catapult E3')
          }}
        >
          Catapult E3
        </div>
        <div
          className='troop engineer'
          onClick={() => {
            addTroops('Catapult E4')
          }}
        >
          Catapult E4
        </div>
        <div
          className='troop engineer'
          onClick={() => {
            addTroops('Catapult E5')
          }}
        >
          Catapult E5
        </div>
        <hr />
        <div
          className='troop monsters'
          onClick={() => {
            addTroops('Water Elemental')
          }}
        >
          Water Elemental M3
        </div>
        <div
          className='troop monsters'
          onClick={() => {
            addTroops('Battle Boar')
          }}
        >
          Battle Boar M3
        </div>
        <div
          className='troop monsters'
          onClick={() => {
            addTroops('Emerald Dragon')
          }}
        >
          Emerald Dragon M3
        </div>
        <div
          className='troop monsters'
          onClick={() => {
            addTroops('Stone Gargole')
          }}
        >
          Stone Gargole M3
        </div>
        <hr />
        <div
          className='troop mercs'
          onClick={() => {
            addTroops('mercEpicMonsterHunter')
          }}
        >
          Epic Monster Hunter VI
        </div>
        <div
          className='troop mercs'
          onClick={() => {
            addTroops('mercChariot')
          }}
        >
          Chariot VI
        </div>
        <div
          className='troop mercs'
          onClick={() => {
            addTroops('Legionary VI')
          }}
        >
          Legionary VI
        </div>
      </div>
    </div>
  )
}
