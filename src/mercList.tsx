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
  mercEpicMonsterHunter,
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
  boneGolemVI
} from './mercs'
export const MercList = () => {
  const mercList = [
    mercEpicMonsterHunter,
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
    fireLordVII
  ]

  mercList.sort((a, b) => a.BASEHP - b.BASEHP)

  return (
    <div className='info'>
      <h2>Mercenaries</h2>

      <table>
        <thead>
          <th>Name</th>
          <th>Health</th>
          <th>Strength</th>
          <th>Authority</th>
        </thead>
        <tbody>
          {mercList.map(merc => {
            return (
              <tr>
                {/* <td>
                  <input type='checkbox' name='xx' id='' />
                </td> */}
                <td>{merc.name}</td>
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
 [AOW] Grimbold: ***MERCS***
.
Level 5
.
Epic Monster Hunter 635
Swift Marksman         635
Fireworm Rider             10
Cyclops                           15
Ifrit                                  15
Scorpion Rider               15
Giant Zombie                20
Bull Rider                       20
Unicorn Rider               25
Bear                                30
Gargoyle                        35
.
Level 6
.
Epic Monster Hunter  330
//**Sphynx                            35
//**Chariot                          175
//**Asbalester                    350
//**Legionary                     350
//**Shedu                             35
//**Rhino Rider                 175
//****Trailseeker                  350
//**Knight VI                     350
//**Abomination                  5
//**Bone Golem                  10
//**Death Chariot              10

[AOW] Grimbold: ***MERCS***
.
Level 7
Epic Monster Hunter 175
Chariot VII                   175
Arbalester VII             350
Legionary VII              350
Sphynx VII                      4
//**Sandworm                      1
//**Cursed Dragon              2
//**Life Dragon                    2
//**Overlord                         3
//**Golden Dragon              3
//**Lightning Lord               4
//**Sea Lord                          4
//**Jungle King                     6
//**FIRELORD
.
Level IX/II
Sup. EMH            175
Quicksand            30
Galloper               30
Slavic Warrior     60
Highlander          60
Pounder               60
Scarface               60

 */
