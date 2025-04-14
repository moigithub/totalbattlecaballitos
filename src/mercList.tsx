import { ARMY } from './soldiers'
import { whoCanIAttack } from './utils'

export const MercList = () => {
  const mercList = [
    ARMY.epicMonsterHunterVI,
    ARMY.swiftMarksmanV,
    ARMY.gargoyleV,
    ARMY.unicornRiderV,
    ARMY.giantZombieV,
    ARMY.bullRiderV,
    ARMY.scorpionRiderV,
    ARMY.ifritV,
    ARMY.firewormRiderV,
    ARMY.cyclopsV,

    ARMY.bearV,
    ARMY.chariotVI,
    ARMY.pathFinderVI,
    ARMY.trebuchetVI,
    ARMY.cursedDendroidVI,
    ARMY.scorpionV,
    ARMY.deathChariotVI,
    ARMY.legionaryVI,
    ARMY.arbalesterVI,
    ARMY.sphynxVI,
    ARMY.knightVI,
    ARMY.trailseekerVI,
    ARMY.rhinoRiderVI,
    ARMY.boneGolemVI,
    ARMY.sheduVI,
    ARMY.entVI,
    ARMY.abominationVI,
    ARMY.archdemonVI,
    ARMY.lightningLordVII,
    ARMY.palintoneVII,
    ARMY.cursedDragonVII,
    ARMY.seaLordVII,
    ARMY.sandwormVII,
    ARMY.lifeDragonVII,
    ARMY.goldenDragonVII,
    ARMY.overlordVII,
    ARMY.jungleKingVII,
    ARMY.fireLordVII,
    ARMY.epicMonsterHunterVII,

    ARMY.wyvernII,
    ARMY.arielII,
    ARMY.warregalII,
    ARMY.demonicSalamanderII,
    ARMY.epicMonsterHunterII,
    ARMY.jagoII,
    ARMY.eternalCannoneerII,
    ARMY.slavicWarriorII,
    ARMY.wardenII,
    ARMY.highlanderII,
    ARMY.galloperII,
    ARMY.quicksandII,
    ARMY.scarfaceII,
    ARMY.pounderII,
    ARMY.graceII
  ]

  mercList.sort((a, b) => a.BASEHP - b.BASEHP)

  return (
    <div className='p-5 pt-[56px]'>
      <h2 className='font-bold text-2xl mb-2'>Mercenaries</h2>

      <table>
        <thead>
          <th></th>
          <th>Name</th>
          <th>Category</th>
          <th>Feat.bonus</th>
          <th>Health</th>
          <th>Strength</th>
          <th>Authority</th>
        </thead>
        <tbody>
          {mercList.map((merc, i) => {
            const categories = [merc.category, merc.subGroup].filter(Boolean).join(', ')
            return (
              <tr key={`merc${i}`}>
                <td>
                  <input type='checkbox' name='xx' id='' />
                </td>
                <td>{i + 1}</td>
                <td>{merc.name}</td>
                <td>{categories}</td>
                <td>{whoCanIAttack(merc).join(', ')}</td>
                <td>{merc.BASEHP}</td>
                <td>{merc.BASESTR}</td>
                <td>{merc.AUTHORITY}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
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
