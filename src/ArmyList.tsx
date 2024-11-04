import { Stack, useStackStore } from './guardStore'
import {
  ArcherG1,
  ArcherG2,
  ArcherG3,
  ArcherG4,
  ArcherG5,
  RiderG1,
  RiderG2,
  RiderG3,
  RiderG4,
  RiderG5,
  SpearmanG1,
  SpearmanG2,
  SpearmanG3,
  SpearmanG4,
  SpearmanG5
} from './soldiers'

export const ArmyList = () => {
  const addArmy = useStackStore(state => state.addArmy)
  // const bonus = useStackStore(state => state.bonus)

  const addTroops = (type: string) => {
    if (type === 'Rider G1') {
      const stack: Stack = {
        // health: RiderG1.BASEHP + (RiderG1.BASEHP * bonus.rider.G1.hp) / 100,
        // strength: RiderG1.BASESTR + (RiderG1.BASESTR * bonus.rider.G1.str) / 100,
        leadership: 0, //RiderG1.LEADERSHIP,
        unit: RiderG1,
        units: 0,
        minSetup: 0,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Rider G2') {
      const stack: Stack = {
        // health: RiderG2.BASEHP + (RiderG2.BASEHP * bonus.rider.G2.hp) / 100,
        // strength: RiderG2.BASESTR + (RiderG2.BASESTR * bonus.rider.G2.str) / 100,
        leadership: 0, //RiderG2.LEADERSHIP,
        unit: RiderG2,
        units: 0,
        minSetup: 0,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Rider G3') {
      const stack: Stack = {
        // health: RiderG3.BASEHP + (RiderG3.BASEHP * bonus.rider.G3.hp) / 100,
        // strength: RiderG3.BASESTR + (RiderG3.BASESTR * bonus.rider.G3.str) / 100,
        leadership: 0, //RiderG3.LEADERSHIP,
        unit: RiderG3,
        units: 0,
        minSetup: 0,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Rider G4') {
      const stack: Stack = {
        // health: RiderG4.BASEHP + (RiderG4.BASEHP * bonus.rider.G4.hp) / 100,
        // strength: RiderG4.BASESTR + (RiderG4.BASESTR * bonus.rider.G4.str) / 100,
        leadership: 0, //RiderG4.LEADERSHIP,
        unit: RiderG4,
        units: 0,
        minSetup: 0,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Rider G5') {
      const stack: Stack = {
        // health: RiderG5.BASEHP + (RiderG5.BASEHP * bonus.rider.G5.hp) / 100,
        // strength: RiderG5.BASESTR + (RiderG5.BASESTR * bonus.rider.G5.str) / 100,
        leadership: 0, //sRiderG5.LEADERSHIP,
        unit: RiderG5,
        units: 0,
        minSetup: 0,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Spearman G1') {
      const stack: Stack = {
        // health: RiderG5.BASEHP + (RiderG5.BASEHP * bonus.rider.G5.hp) / 100,
        // strength: RiderG5.BASESTR + (RiderG5.BASESTR * bonus.rider.G5.str) / 100,
        leadership: 0, //sRiderG5.LEADERSHIP,
        unit: SpearmanG1,
        units: 0,
        minSetup: 0,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Spearman G2') {
      const stack: Stack = {
        // health: RiderG5.BASEHP + (RiderG5.BASEHP * bonus.rider.G5.hp) / 100,
        // strength: RiderG5.BASESTR + (RiderG5.BASESTR * bonus.rider.G5.str) / 100,
        leadership: 0, //sRiderG5.LEADERSHIP,
        unit: SpearmanG2,
        units: 0,
        minSetup: 0,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Spearman G3') {
      const stack: Stack = {
        // health: RiderG5.BASEHP + (RiderG5.BASEHP * bonus.rider.G5.hp) / 100,
        // strength: RiderG5.BASESTR + (RiderG5.BASESTR * bonus.rider.G5.str) / 100,
        leadership: 0, //sRiderG5.LEADERSHIP,
        unit: SpearmanG3,
        units: 0,
        minSetup: 0,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Spearman G4') {
      const stack: Stack = {
        // health: RiderG5.BASEHP + (RiderG5.BASEHP * bonus.rider.G5.hp) / 100,
        // strength: RiderG5.BASESTR + (RiderG5.BASESTR * bonus.rider.G5.str) / 100,
        leadership: 0, //sRiderG5.LEADERSHIP,
        unit: SpearmanG4,
        units: 0,
        minSetup: 0,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Spearman G5') {
      const stack: Stack = {
        // health: RiderG5.BASEHP + (RiderG5.BASEHP * bonus.rider.G5.hp) / 100,
        // strength: RiderG5.BASESTR + (RiderG5.BASESTR * bonus.rider.G5.str) / 100,
        leadership: 0, //sRiderG5.LEADERSHIP,
        unit: SpearmanG5,
        units: 0,
        minSetup: 0,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Archer G1') {
      const stack: Stack = {
        // health: RiderG5.BASEHP + (RiderG5.BASEHP * bonus.rider.G5.hp) / 100,
        // strength: RiderG5.BASESTR + (RiderG5.BASESTR * bonus.rider.G5.str) / 100,
        leadership: 0, //sRiderG5.LEADERSHIP,
        unit: ArcherG1,
        units: 0,
        minSetup: 0,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Archer G2') {
      const stack: Stack = {
        // health: RiderG5.BASEHP + (RiderG5.BASEHP * bonus.rider.G5.hp) / 100,
        // strength: RiderG5.BASESTR + (RiderG5.BASESTR * bonus.rider.G5.str) / 100,
        leadership: 0, //sRiderG5.LEADERSHIP,
        unit: ArcherG2,
        units: 0,
        minSetup: 0,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Archer G3') {
      const stack: Stack = {
        // health: RiderG5.BASEHP + (RiderG5.BASEHP * bonus.rider.G5.hp) / 100,
        // strength: RiderG5.BASESTR + (RiderG5.BASESTR * bonus.rider.G5.str) / 100,
        leadership: 0, //sRiderG5.LEADERSHIP,
        unit: ArcherG3,
        units: 0,
        minSetup: 0,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Archer G4') {
      const stack: Stack = {
        // health: RiderG5.BASEHP + (RiderG5.BASEHP * bonus.rider.G5.hp) / 100,
        // strength: RiderG5.BASESTR + (RiderG5.BASESTR * bonus.rider.G5.str) / 100,
        leadership: 0, //sRiderG5.LEADERSHIP,
        unit: ArcherG4,
        units: 0,
        minSetup: 0,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    } else if (type === 'Archer G5') {
      const stack: Stack = {
        // health: RiderG5.BASEHP + (RiderG5.BASEHP * bonus.rider.G5.hp) / 100,
        // strength: RiderG5.BASESTR + (RiderG5.BASESTR * bonus.rider.G5.str) / 100,
        leadership: 0, //sRiderG5.LEADERSHIP,
        unit: ArcherG5,
        units: 0,
        minSetup: 0,
        lockMinSetup: true,
        limit: 0
      }
      addArmy(stack)
    }
  }

  return (
    <div className='army-container'>
      <h2>Army</h2>
      <div className='army-list'>
        <div
          className='troop'
          onClick={() => {
            addTroops('Spearman G1')
          }}
        >
          Spearman G1
        </div>
        <div
          className='troop'
          onClick={() => {
            addTroops('Archer G1')
          }}
        >
          Archer G1
        </div>
        <div
          className='troop'
          onClick={() => {
            addTroops('Rider G1')
          }}
        >
          Rider G1
        </div>
        <hr />
        <div
          className='troop'
          onClick={() => {
            addTroops('Spearman G2')
          }}
        >
          Spearman G2
        </div>
        <div
          className='troop'
          onClick={() => {
            addTroops('Archer G2')
          }}
        >
          Archer G2
        </div>
        <div
          className='troop'
          onClick={() => {
            addTroops('Rider G2')
          }}
        >
          Rider G2
        </div>
        <hr />
        <div
          className='troop'
          onClick={() => {
            addTroops('Spearman G3')
          }}
        >
          Spearman G3
        </div>
        <div
          className='troop'
          onClick={() => {
            addTroops('Archer G3')
          }}
        >
          Archer G3
        </div>
        <div
          className='troop'
          onClick={() => {
            addTroops('Rider G3')
          }}
        >
          Rider G3
        </div>
        <hr />
        <div
          className='troop'
          onClick={() => {
            addTroops('Spearman G4')
          }}
        >
          Spearman G4
        </div>
        <div
          className='troop'
          onClick={() => {
            addTroops('Archer G4')
          }}
        >
          Archer G4
        </div>
        <div
          className='troop'
          onClick={() => {
            addTroops('Rider G4')
          }}
        >
          Rider G4
        </div>
        <hr />
        <div
          className='troop'
          onClick={() => {
            addTroops('Spearman G5')
          }}
        >
          Spearman G5
        </div>
        <div
          className='troop'
          onClick={() => {
            addTroops('Archer G5')
          }}
        >
          Archer G5
        </div>
        <div
          className='troop'
          onClick={() => {
            addTroops('Rider G5')
          }}
        >
          Rider G5
        </div>
        <hr />
        <div
          className='troop'
          onClick={() => {
            addTroops('Swordman S1')
          }}
        >
          Swordman S1
        </div>
        <div
          className='troop'
          onClick={() => {
            addTroops('Spy S1')
          }}
        >
          Spy S1
        </div>
        <hr />
        <div
          className='troop'
          onClick={() => {
            addTroops('Swordman S2')
          }}
        >
          Swordman S2
        </div>
        <div
          className='troop'
          onClick={() => {
            addTroops('Spy S2')
          }}
        >
          Spy S2
        </div>
        <hr />
        <div
          className='troop'
          onClick={() => {
            addTroops('Catapult E1')
          }}
        >
          Catapult E1
        </div>
        <div
          className='troop'
          onClick={() => {
            addTroops('Catapult E2')
          }}
        >
          Catapult E2
        </div>
        <hr />
        <div
          className='troop'
          onClick={() => {
            addTroops('Water Elemental')
          }}
        >
          Water Elemental M3
        </div>
        <div
          className='troop'
          onClick={() => {
            addTroops('Battle Boar')
          }}
        >
          Battle Boar M3
        </div>
        <div
          className='troop'
          onClick={() => {
            addTroops('Emerald Dragon')
          }}
        >
          Emerald Dragon M3
        </div>
        <div
          className='troop'
          onClick={() => {
            addTroops('Stone Gargole')
          }}
        >
          Stone Gargole M3
        </div>
        <hr />
        <div
          className='troop'
          onClick={() => {
            addTroops('Epic Monster')
          }}
        >
          Epic Monster Hunter VI
        </div>
        <div
          className='troop'
          onClick={() => {
            addTroops('Chariot VI')
          }}
        >
          Chariot VI
        </div>
        <div
          className='troop'
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
