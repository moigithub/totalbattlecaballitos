import {
  abominationVI,
  arbalesterVI,
  archidemonVI,
  chariotVI,
  cursedDragonVII,
  deathChariotVI,
  knightVI,
  legionaryVI,
  lifeDragonVII,
  lightningLordVII,
  epicMonsterHunterVI,
  rhinoRiderVI,
  sandwormVII,
  seaLordVII,
  sheduVI,
  sphynxVI,
  trailseekerVI,
  overlordVII,
  jungleKingVII,
  fireLordVII,
  goldenDragonVII,
  boneGolemVI,
  wyvernII,
  arielII,
  warregalII,
  demonicSalamanderII,
  epicMonsterHunterII,
  jagoII,
  eternalCannoneerII,
  slavicWarriorII,
  epicMonsterHunterVII,
  wardenII,
  highlanderII,
  galloperII,
  quicksandII,
  scarfaceII,
  pounderII
} from './mercs'
export const MercList = () => {
  const mercList = [
    epicMonsterHunterVI,
    chariotVI,
    deathChariotVI,
    legionaryVI,
    arbalesterVI,
    sphynxVI,
    knightVI,
    trailseekerVI,
    rhinoRiderVI,
    boneGolemVI,
    sheduVI,
    abominationVI,
    archidemonVI,
    lightningLordVII,
    cursedDragonVII,
    seaLordVII,
    sandwormVII,
    lifeDragonVII,
    goldenDragonVII,
    overlordVII,
    jungleKingVII,
    fireLordVII,
    epicMonsterHunterVII,

    wyvernII,
    arielII,
    warregalII,
    demonicSalamanderII,
    epicMonsterHunterII,
    jagoII,
    eternalCannoneerII,
    slavicWarriorII,
    wardenII,
    highlanderII,
    galloperII,
    quicksandII,
    scarfaceII,
    pounderII
  ]

  mercList.sort((a, b) => a.BASEHP - b.BASEHP)

  return (
    <div className='info'>
      <h2>Mercenaries</h2>

      <table>
        <thead>
          <th></th>
          <th>Name</th>
          <th>Category</th>
          <th>Health</th>
          <th>Strength</th>
          <th>Authority</th>
        </thead>
        <tbody>
          {mercList.map((merc, i) => {
            return (
              <tr>
                {/* <td>
                  <input type='checkbox' name='xx' id='' />
                </td> */}
                <td>{i + 1}</td>
                <td>{merc.name}</td>
                <td>{merc.category}</td>
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

/**
 *
T5 Swift Marksman
T5 Epic Monster Hunter
T5 Scorpion

los stats son correctos pero el authority esta mal
    T5 Unicorn Rider **
    T5 Bull Rider**
    T5 Gargoyle  ****
    T5 Bear  ***
    T5 Giant Zombie **
    T5 Scorpion Rider  ***
    T5 Ifrit ***
    T5 Cyclops ***
    T5 Fireworm Rider **


    T6 Arbalester **
    Trailseeker **
    T6 Legionary ***
    Knight **
    T6 Chariot **
    Rhino Rider **
    T6 Sphinx **
    Shedu **
    T6 Death Chariots **
    T6 Bone Golem **
T6 Epic Monster Hunter
T6 Pathfinder / Pionnier
T6 Trebuchet
T6 Ent
T6 Cursed Dendroids
    T6 Abomination **
    T6 Archdemons **
T7 Palintone
T7 Epic Monster Hunter
    T7 Jungle King**
    T7 Sea Lord**
    T7 Lighting Lord**
    T7 Golden Dragon**
    T7 Overlord**
    T7 Life Dragon**
    T7 Cursed Dragon**
    T7 Sandworm**
    T7 Fire Lord**
    TII Highlander  **
    / Scarface **
    / Pounder **
TII Grace
    TII Quicksand / ***
    Galloper ***
    TII Wardens ***
    TII Slavic Warrior **
    TII Eternal Cannoneers **
    TII Warregal **
    TII Epic Monster Hunter **
    TII Ariel **
    Jago **
    TII Demonic Salamanders**
    TII Wyverns **
*/
