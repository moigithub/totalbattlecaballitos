import PageTitle from './pageTitle'
import { ARMY } from './soldiers'
import { whoCanIAttack } from './utils'

export const TroopList = () => {
  const troopList = [
    ARMY.RiderG1,
    ARMY.RiderG2,
    ARMY.RiderG3,
    ARMY.RiderG4,
    ARMY.RiderG5,
    ARMY.SwordmanS1,
    ARMY.SwordmanS2,
    ARMY.SwordmanS3,
    ARMY.SwordmanS4,
    ARMY.SwordmanS5,
    ARMY.SpyS1,
    ARMY.SpyS2,
    ARMY.SpyS3,
    ARMY.SpyS4,
    ARMY.SpyS5,
    ARMY.deadshotV,
    ARMY.deadshotVI,
    ARMY.deadshotVII,
    ARMY.lionRiderV,
    ARMY.lionRiderVI,
    ARMY.lionRiderVII,
    ARMY.vulturesV,
    ARMY.vulturesVI,
    ARMY.vulturesVII,
    ARMY.heavyKnightVI,
    ARMY.heavyKnightVII,
    ARMY.swiftJaegerVI,
    ARMY.swiftJaegerVII,
    ARMY.legitimistI,
    ARMY.legitimistII,
    ARMY.duelistI,
    ARMY.duelistII,
    ARMY.whitemaneI,
    ARMY.whitemaneII,
    ARMY.royalLionI,
    ARMY.royalLionII,
    ARMY.panopticI,
    ARMY.panopticII,
    ARMY.SpearmanG1,
    ARMY.SpearmanG2,
    ARMY.SpearmanG3,
    ARMY.SpearmanG4,
    ARMY.SpearmanG5,
    ARMY.ArcherG1,
    ARMY.ArcherG2,
    ARMY.ArcherG3,
    ARMY.ArcherG4,
    ARMY.ArcherG5,
    ARMY.battleGriffinV,
    ARMY.battleGriffinVI,
    ARMY.battleGriffinVII,
    ARMY.heavyArbalesterVI,
    ARMY.heavyArbalesterVII,
    ARMY.heavyHalberdierVI,
    ARMY.heavyHalberdierVII,
    ARMY.mountedKnightVI,
    ARMY.mountedKnightVII,
    ARMY.purifierI,
    ARMY.purifierII,
    ARMY.punisherI,
    ARMY.punisherII,
    ARMY.smiterI,
    ARMY.smiterII,
    ARMY.coraxI,
    ARMY.coraxII,
    ARMY.CatapultE1,
    ARMY.CatapultE2,
    ARMY.CatapultE3,
    ARMY.CatapultE4,
    ARMY.CatapultE5,
    ARMY.CatapultE6,
    ARMY.CatapultE7,
    ARMY.CatapultE8,
    ARMY.CatapultE9
  ]

  const monsterList = [
    ARMY.waterElementalIII,
    ARMY.icePhoenixIV,
    ARMY.flamingCentaurV,
    ARMY.rubiGolemVI,
    ARMY.windLordVII,
    ARMY.firePhoenixI,
    ARMY.firePhoenixII,
    ARMY.battleBoarIII,
    ARMY.gorgonMedusaIV,
    ARMY.fearsomeManticoraV,
    ARMY.jungleDestroyerVI,
    ARMY.ancientTerrorVII,
    ARMY.tricksterI,
    ARMY.tricksterII,
    ARMY.emeraldDragonIII,
    ARMY.magicDragonIV,
    ARMY.desertConquerV,
    ARMY.crystalDragonVI,
    ARMY.blackDragonVII,
    ARMY.devastatorI,
    ARMY.devastatorII,
    ARMY.stoneGargoyleIII,
    ARMY.manyArmedGuardianIV,
    ARMY.EttinV,
    ARMY.trollRiderVI,
    ARMY.destructiveColossusVII,
    ARMY.krakenI,
    ARMY.krakenII
  ]

  troopList.sort((a, b) => a.BASEHP - b.BASEHP)
  monsterList.sort((a, b) => a.BASEHP - b.BASEHP)

  return (
    <>
      <PageTitle title='Troops' />
      <div className='p-5 pt-[56px]'>
        <h2 className='font-bold text-2xl mb-2'>Troops</h2>

        <table>
          <thead>
            <th></th>
            <th></th>
            <th>Name</th>
            <th>Category</th>
            <th>Feat.bonus</th>
            <th>Health</th>
            <th>Strength</th>
            <th>Leadership</th>
          </thead>
          <tbody>
            {troopList.map((troop, i) => {
              const categories = [troop.category, troop.subGroup].filter(Boolean).join(', ')
              return (
                <tr key={`troop${i}`}>
                  <td>
                    <input type='checkbox' name='xx' id='' />
                  </td>
                  <td>{i + 1}</td>
                  <td>{troop.name}</td>
                  <td>{categories}</td>
                  <td>{whoCanIAttack(troop).join(', ')}</td>
                  <td>{troop.BASEHP}</td>
                  <td>{troop.BASESTR}</td>
                  <td>{troop.LEADERSHIP}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className='p-5 pt-[56px]'>
        <h2 className='font-bold text-2xl mb-2'>Monsters</h2>

        <table>
          <thead>
            <th></th>
            <th></th>
            <th>Name</th>
            <th>Category</th>
            <th>Feat.bonus</th>
            <th>Health</th>
            <th>Strength</th>
            <th>Dominance</th>
          </thead>
          <tbody>
            {monsterList.map((monster, i) => {
              const categories = [monster.category, monster.subGroup].filter(Boolean).join(', ')
              return (
                <tr key={`monster${i}`}>
                  <td>
                    <input type='checkbox' name='xx' id='' />
                  </td>
                  <td>{i + 1}</td>
                  <td>{monster.name}</td>
                  <td>{categories}</td>
                  <td>{whoCanIAttack(monster).join(', ')}</td>
                  <td>{monster.BASEHP}</td>
                  <td>{monster.BASESTR}</td>
                  <td>{monster.DOMINANCE}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

/*
por revisar

epicmonsterhunter 6,7,9
demonic salamander
eternal canonner
warden
wyvern
sphynx
*/
