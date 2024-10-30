import { useState, useEffect, Fragment } from 'react'

import './App.css'
import { useGuardsStore } from './guardStore'
import { SwordmanG1, SpearmanG1, ArcherG1, CatapultG1 } from './soldiers'

//doomsday nigromante str 720, hp 2160
//ancient/tinman arbalesteraAncestral str 720, hp 2160, ranged
// doomsday? supervisor str 6500, hp 19500, ranged
const ragnarokMagoDraug = {
  hp: 2160,
  str: 720,
  leadership: 8,
  initiative: 10,
  bonoFlyPercent: 50
}
const doomsdaySupervisor = {
  hp: 19500,
  str: 7265000,
  leadership: 8,
  initiative: 10,
  bonoFlyPercent: 50
}

function App() {
  const bonusHP = useGuardsStore(state => state.bonusHP)
  const bonusSTR = useGuardsStore(state => state.bonusSTR)
  const setBonusHP = useGuardsStore(state => state.setBonusHP)
  const setBonusSTR = useGuardsStore(state => state.setBonusSTR)
  const setSacrificeBonusSTR = useGuardsStore(state => state.setSacrificeBonusSTR)
  const sacrificeBonusSTR = useGuardsStore(state => state.sacrificeBonusSTR)
  const leadership = useGuardsStore(state => state.leadership)
  const setLeadership = useGuardsStore(state => state.setLeadership)
  const mobHealth = useGuardsStore(state => state.mobHealth)
  const setMobHealth = useGuardsStore(state => state.setMobHealth)
  const sacrifice = useGuardsStore(state => state.sacrifice)
  const rider1 = useGuardsStore(state => state.rider1)
  const rider2 = useGuardsStore(state => state.rider2)
  const rider3 = useGuardsStore(state => state.rider3)
  const rider4 = useGuardsStore(state => state.rider4)
  const rider5 = useGuardsStore(state => state.rider5)
  const setSacrifice = useGuardsStore(state => state.setSacrifice)
  const setRider1 = useGuardsStore(state => state.setRider1)
  const setRider2 = useGuardsStore(state => state.setRider2)
  const setRider3 = useGuardsStore(state => state.setRider3)
  const setRider4 = useGuardsStore(state => state.setRider4)
  const setRider5 = useGuardsStore(state => state.setRider5)

  // cuantos tropas puede llevar el capitan al ataque

  const [selectedEvent, setSelectedEvent] = useState('0')
  const [selectedSacrifice, setSelectedSacrifice] = useState('0')
  const [sacrificeBase, setSacrificeBase] = useState({
    BASEHP: 150,
    BASESTR: 50,
    LEADERSHIP: 0,
    INITIATIVE: 0
  })
  const [showHealthData, setShowHealthData] = useState(false)
  const [showStrengthData, setShowStrengthData] = useState(false)

  const [useSacrifices, setUseSacrifices] = useState(true)
  const [useG1Rider, setUseG1Rider] = useState(true)
  const [useG2Rider, setUseG2Rider] = useState(true)
  const [useG3Rider, setUseG3Rider] = useState(false)
  const [useG4Rider, setUseG4Rider] = useState(false)
  const [useG5Rider, setUseG5Rider] = useState(false)
  // const [factorX, setFactorX] = useState(1)

  useEffect(() => {
    let health = ragnarokMagoDraug.hp

    if (selectedEvent === '0') {
      health = ragnarokMagoDraug.hp
    } else if (selectedEvent === '1') {
      health = ragnarokMagoDraug.hp
    } else if (selectedEvent === '2') {
      health = ragnarokMagoDraug.hp
    } else if (selectedEvent === '3') {
      health = doomsdaySupervisor.hp
    }

    setMobHealth(health)
  }, [selectedEvent])

  useEffect(() => {
    setSacrifice({ str: sacrificeBase.BASESTR + (sacrificeBonusSTR * sacrificeBase.BASESTR) / 100 })
    setSacrifice({ hp: sacrificeBase.BASEHP /*+ (sacrificeBonusHP * sacrificeBase.BASEHP) / 100*/ })
  }, [sacrificeBase.BASESTR, sacrificeBase.BASEHP, sacrificeBonusSTR])

  const calculateStr = (bonusSTR: number) => {
    // calculate hp and str with bonus, for GUARDIANS/EJERCITO (spearman, archer, rider)

    setRider1({
      str: rider1.BASESTR + ((rider1.bonusStrAgainstRanged + bonusSTR) * rider1.BASESTR) / 100
    })
    setRider2({
      str: rider2.BASESTR + ((rider2.bonusStrAgainstRanged + bonusSTR) * rider2.BASESTR) / 100
    })
    setRider3({
      str: rider3.BASESTR + ((rider3.bonusStrAgainstRanged + bonusSTR) * rider3.BASESTR) / 100
    })
    setRider4({
      str: rider4.BASESTR + ((rider4.bonusStrAgainstRanged + bonusSTR) * rider4.BASESTR) / 100
    })
    setRider5({
      str: rider5.BASESTR + ((rider5.bonusStrAgainstRanged + bonusSTR) * rider5.BASESTR) / 100
    })
  }

  const calculateHP = (bonusHP: number) => {
    // calculate hp and str with bonus, for GUARDIANS/EJERCITO (spearman, archer, rider)
    // hay un bono diferente para cada uno

    // ESPECIALISTAS y TROPAS DE INGENIERIA, BESTIAS (gigantes, elementales y dragones)
    // son otra categoria, diferente cada uno y tiene su propio bono
    //

    setRider1({ hp: rider1.BASEHP + (bonusHP * rider1.BASEHP) / 100 })
    setRider2({ hp: rider2.BASEHP + (bonusHP * rider2.BASEHP) / 100 })
    setRider3({ hp: rider3.BASEHP + (bonusHP * rider3.BASEHP) / 100 })
    setRider4({ hp: rider4.BASEHP + (bonusHP * rider4.BASEHP) / 100 })
    setRider5({ hp: rider5.BASEHP + (bonusHP * rider5.BASEHP) / 100 })
  }

  const changeMobHealth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mobHealth = parseInt(e.target.value)
    setMobHealth(mobHealth)

    // calc()
  }

  const changeMobEvent = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEvent(e.target.value)

    // calc()
  }

  const changeSacrifice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSacrifice = e.target.value
    setSelectedSacrifice(selectedSacrifice)

    let Sacrifice = SwordmanG1 // { hp: 150, str: 50, leadership: 1, initiative: 10 }

    if (selectedSacrifice === '0') {
      Sacrifice = SwordmanG1
    } else if (selectedSacrifice === '1') {
      Sacrifice = ArcherG1
    } else if (selectedSacrifice === '2') {
      Sacrifice = SpearmanG1
    } else if (selectedSacrifice === '3') {
      Sacrifice = CatapultG1
    }

    setSacrificeBase({ ...Sacrifice })
    calculateHP(bonusHP)
    calculateStr(bonusSTR)
    // calc()
  }

  const changeLeadership = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setLeadership(value)
    console.log('changing leadership', value)
    // calc()
  }

  const setAndSaveSacrificeBonusStr = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)

    setSacrificeBonusSTR(value)
  }

  const setAndSaveBonusStr = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)

    setBonusSTR(value)

    calculateStr(value)

    // calc()
  }

  const setAndSaveBonusHp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)

    setBonusHP(value)
    // localStorage.setItem('gralSTR', value.toString())
    calculateHP(value)

    // calc()
  }

  const calc = () => {
    if (!useG1Rider && !useG2Rider && !useG3Rider && !useG4Rider && !useG5Rider) {
      // algo debe estar marcado
      return
    }
    calculateHP(bonusHP)
    calculateStr(bonusSTR)
    const sacrifice = useGuardsStore.getState().sacrifice
    const rider1 = useGuardsStore.getState().rider1
    const rider2 = useGuardsStore.getState().rider2
    const rider3 = useGuardsStore.getState().rider3
    const rider4 = useGuardsStore.getState().rider4
    const rider5 = useGuardsStore.getState().rider5
    const leadership = useGuardsStore.getState().leadership
    const mobHealth = useGuardsStore.getState().mobHealth

    const sacrificesNeededToKillOneMob = Math.ceil(mobHealth / sacrifice.str)
    const g1NeededToKillOneMob = Math.ceil(mobHealth / rider1.str)
    const g2NeededToKillOneMob = Math.ceil(mobHealth / rider2.str)
    const g3NeededToKillOneMob = Math.ceil(mobHealth / rider3.str)
    const g4NeededToKillOneMob = Math.ceil(mobHealth / rider4.str)
    const g5NeededToKillOneMob = Math.ceil(mobHealth / rider5.str)

    {
      /**el sacrificio debe tener mas juerza que todos, para que ataque primero */
    }

    // let maxLeaderShip = leadership
    // let sacrificeGroupsCount = 0
    // let g1GroupsCount = 0
    // let g2GroupsCount = 0
    // let g3GroupsCount = 0
    // let g4GroupsCount = 0
    // let g5GroupsCount = 0

    let sacrificeTroopsCount = 0
    let g1TroopsCount = 0
    let g2TroopsCount = 0
    let g3TroopsCount = 0
    let g4TroopsCount = 0
    let g5TroopsCount = 0

    // calculate how many troops needed for each group to kill one mob,based on leadership
    if (useG5Rider) {
      // const g5GroupStrength = g5NeededToKillOneMob * rider5.str
      g5TroopsCount = g5NeededToKillOneMob
    }

    if (useG4Rider) {
      //g4 needs to have more strength than g5
      const g4GroupStrength = g4NeededToKillOneMob * rider4.str
      const groupStrengths = [g4GroupStrength]
      if (useG5Rider) {
        groupStrengths.push(g5TroopsCount * rider5.str)
      }
      const maxGroupStr = Math.max(...groupStrengths)

      const mult = Math.ceil(maxGroupStr / g4GroupStrength)
      g4TroopsCount = g4NeededToKillOneMob * mult
    }

    if (useG3Rider) {
      //g4 needs to have more strength than g5
      const g3GroupStrength = g3NeededToKillOneMob * rider3.str
      const groupStrengths = [g3GroupStrength]
      if (useG5Rider) {
        groupStrengths.push(g5TroopsCount * rider5.str)
      }
      if (useG4Rider) {
        groupStrengths.push(g4TroopsCount * rider4.str)
      }
      console.log('g3 st  r', groupStrengths)
      const maxGroupStr = Math.max(...groupStrengths)
      const mult = Math.ceil(maxGroupStr / g3GroupStrength)
      g3TroopsCount = g3NeededToKillOneMob * mult
    }

    if (useG2Rider) {
      //g4 needs to have more strength than g5
      const g2GroupStrength = g2NeededToKillOneMob * rider2.str
      const groupStrengths = [g2GroupStrength]
      if (useG5Rider) {
        groupStrengths.push(g5TroopsCount * rider5.str)
      }
      if (useG4Rider) {
        groupStrengths.push(g4TroopsCount * rider4.str)
      }
      if (useG3Rider) {
        groupStrengths.push(g3TroopsCount * rider3.str)
      }
      const maxGroupStr = Math.max(...groupStrengths)
      const mult = Math.ceil(maxGroupStr / g2GroupStrength)
      g2TroopsCount = g2NeededToKillOneMob * mult
    }

    if (useG1Rider) {
      //g4 needs to have more strength than g5
      const g1GroupStrength = g1NeededToKillOneMob * rider1.str
      const groupStrengths = [g1GroupStrength]
      if (useG5Rider) {
        groupStrengths.push(g5TroopsCount * rider5.str)
      }
      if (useG4Rider) {
        groupStrengths.push(g4TroopsCount * rider4.str)
      }
      if (useG3Rider) {
        groupStrengths.push(g3TroopsCount * rider3.str)
      }
      if (useG2Rider) {
        groupStrengths.push(g2TroopsCount * rider2.str)
      }
      const maxGroupStr = Math.max(...groupStrengths)
      const mult = Math.ceil(maxGroupStr / g1GroupStrength)
      g1TroopsCount = g1NeededToKillOneMob * mult
    }

    if (useSacrifices) {
      //g4 needs to have more strength than g5
      const sacrificeGroupStrength = sacrificesNeededToKillOneMob * sacrifice.str
      const groupStrengths = [sacrificeGroupStrength]
      if (useG5Rider) {
        groupStrengths.push(g5TroopsCount * rider5.str)
      }
      if (useG4Rider) {
        groupStrengths.push(g4TroopsCount * rider4.str)
      }
      if (useG3Rider) {
        groupStrengths.push(g3TroopsCount * rider3.str)
      }
      if (useG2Rider) {
        groupStrengths.push(g2TroopsCount * rider2.str)
      }
      if (useG1Rider) {
        groupStrengths.push(g1TroopsCount * rider1.str)
      }
      const maxGroupStr = Math.max(...groupStrengths)
      const mult = Math.ceil(maxGroupStr / sacrificeGroupStrength)
      sacrificeTroopsCount = sacrificesNeededToKillOneMob * mult

      // const sacTroopsCount = maxGroupStr / sacrifice.str
      // console.log('sacrifice troopscount vs el q tiene mas gente', sacTroopsCount)
    }

    // const toCheck = []
    // if (useG1Rider) toCheck.push(groupLeadershipCostG1)
    // if (useG2Rider) toCheck.push(groupLeadershipCostG2)
    // if (useG3Rider) toCheck.push(groupLeadershipCostG3)
    // if (useG4Rider) toCheck.push(groupLeadershipCostG4)
    // if (useG5Rider) toCheck.push(groupLeadershipCostG5)

    // let sacrificeLeadershipCost = 0
    // let sacrificeTroops = 0

    /*
             ¿que pasa si mando varios stacks, g1,g2,g3?
             el sacrificio solo debe ser igual al mayor de todos
             G1 es el mas tropas tiene
            */
    // debe tener mas fuerza que el grupo anterior, para que ataque primero
    // no importa si completa un grupo para matar 1,
    // calcular el monto minimo mayor al grupo anterior en fuerza
    // let maxLoop = 10000 // to prevent infinite loop
    // do {
    //   if (useG5Rider) {
    //     // si tengo suficiente para este y los siguiente grupo, descontar

    //     const nextGroupLeadershipCost = g1Leadership + g2Leadership + g3Leadership + g4Leadership
    //     if (maxLeaderShip - groupLeadershipCostG5 - nextGroupLeadershipCost >= 0) {
    //       maxLeaderShip = maxLeaderShip - groupLeadershipCostG5
    //       g5GroupsCount = g5GroupsCount + 1
    //       g5TroopsCount = g5TroopsCount + g5NeededToKillOneMob
    //       g5LeadershipConsumed = g5LeadershipConsumed + groupLeadershipCostG5

    //       console.log('adding g5 min ', g5NeededToKillOneMob)
    //     } else {
    //       console.log(
    //         'G5 not enough for next group: leadership ',
    //         maxLeaderShip,
    //         'group',
    //         groupLeadershipCostG5
    //       )
    //       console.log('required ', groupLeadershipCostG5)
    //       break
    //     }
    //   }

    //   if (useG4Rider) {
    //     // si tengo suficiente para este y los siguiente grupo, descontar

    //     let mult = 1
    //     if (useG5Rider) {
    //       mult = Math.round(g5GroupStrength / g4GroupStrength)
    //       console.log('mult g4 vs g5', mult)
    //     }

    //     const nextGroupLeadershipCost =
    //       groupLeadershipCostG4 * mult + g1Leadership + g2Leadership + g3Leadership
    //     if (maxLeaderShip - nextGroupLeadershipCost >= 0) {
    //       maxLeaderShip = maxLeaderShip - groupLeadershipCostG4 * mult
    //       g4GroupsCount = g4GroupsCount + 1 * mult
    //       g4TroopsCount = g4TroopsCount + g4NeededToKillOneMob * mult
    //       g4LeadershipConsumed = g4LeadershipConsumed + groupLeadershipCostG4 * mult

    //       console.log('adding g5 min ', g4NeededToKillOneMob)
    //     } else {
    //       console.log(
    //         'G4 not enough for next group: leadership ',
    //         maxLeaderShip,
    //         'group',
    //         groupLeadershipCostG4
    //       )
    //       console.log('required ', groupLeadershipCostG4)
    //       break
    //     }
    //   }

    //   if (useG3Rider) {
    //     /*
    //          ¿que pasa si mando varios stacks, g1,g2,g3?
    //          el sacrificio solo debe ser igual al mayor de todos
    //          G1 es el mas tropas tiene
    //         */
    //     //sacrifices, cuantos soldados estoy mandando
    //     // por cada G1 que mando,mandar dos sacrificio, por que el leadership del caballo es el doble
    //     const mult = g3Mult()
    //     if (!useG1Rider && !useG2Rider) {
    //       // solo debe revisar sus predecesores, que tienen mas soldados
    //       const doble = 2
    //       const sameAmountOfSacrificesAsG3 = g3NeededToKillOneMob * mult * doble
    //       const groupLeadershipCostSacrifices = sameAmountOfSacrificesAsG3 * sacrifice.LEADERSHIP
    //       if (useSacrifices && maxLeaderShip - groupLeadershipCostSacrifices >= 0) {
    //         maxLeaderShip = maxLeaderShip - groupLeadershipCostSacrifices
    //         sacrificeGroupsCount = sacrificeGroupsCount + doble * mult
    //         sacrificeTroopsCount = sacrificeTroopsCount + sameAmountOfSacrificesAsG3
    //         sacrificeLeadershipConsumed =
    //           sacrificeLeadershipConsumed + groupLeadershipCostSacrifices
    //       }
    //     }

    //     // si tengo suficiente para este y el siguiente grupo, descontar
    //     if (maxLeaderShip - groupLeadershipCostG3 * mult >= 0) {
    //       maxLeaderShip = maxLeaderShip - groupLeadershipCostG3 * mult
    //       g3GroupsCount = g3GroupsCount + 1 * mult
    //       g3TroopsCount = g3TroopsCount + g3NeededToKillOneMob * mult
    //       // g*MinCount = cuantos soldados se necesitan para matar 1 monstruo
    //       // doubleFactorLevel = usar el doble para los soldados de level mas bajo, ejm: 200 g2, 100 g1
    //       g3LeadershipConsumed = g3LeadershipConsumed + groupLeadershipCostG3 * mult
    //     } else {
    //       console.log(
    //         'G3 not enough for next group: leadership ',
    //         maxLeaderShip,
    //         'group',
    //         groupLeadershipCostG3
    //       )
    //       console.log('required ', groupLeadershipCostG3)
    //       break
    //     }

    //     // if (maxLeaderShip - groupLeadershipCost < 0) {
    //     //   console.log('maxLeaderShip-groupLeadershipCost g3', maxLeaderShip, groupLeadershipCost)
    //     //   break // si ni pa este le queda, fin
    //     // }
    //   }

    //   if (useG2Rider) {
    //     /*
    //          ¿que pasa si mando varios stacks, g1,g2,g3?
    //          el sacrificio solo debe ser igual al mayor de todos
    //          G1 es el mas tropas tiene
    //         */
    //     //sacrifices, cuantos soldados estoy mandando
    //     // por cada G1 que mando,mandar dos sacrificio, por que el leadership del caballo es el doble
    //     const mult = g2Mult()
    //     if (!useG1Rider) {
    //       // solo debe revisar sus predecesores, que tienen mas soldados
    //       const doble = 2
    //       const sameAmountOfSacrificesAsG2 = g2NeededToKillOneMob * mult * doble
    //       const groupLeadershipCostSacrifices = sameAmountOfSacrificesAsG2 * sacrifice.LEADERSHIP
    //       if (useSacrifices && maxLeaderShip - groupLeadershipCostSacrifices >= 0) {
    //         maxLeaderShip = maxLeaderShip - groupLeadershipCostSacrifices
    //         sacrificeGroupsCount = sacrificeGroupsCount + doble * mult
    //         sacrificeTroopsCount = sacrificeTroopsCount + sameAmountOfSacrificesAsG2
    //         sacrificeLeadershipConsumed =
    //           sacrificeLeadershipConsumed + groupLeadershipCostSacrifices
    //       }
    //     }

    //     // si tengo suficiente para este y el siguiente grupo, descontar
    //     if (maxLeaderShip - groupLeadershipCostG2 * mult >= 0) {
    //       maxLeaderShip = maxLeaderShip - groupLeadershipCostG2 * mult
    //       g2GroupsCount = g2GroupsCount + 1 * mult
    //       g2TroopsCount = g2TroopsCount + g2NeededToKillOneMob * mult
    //       // g*MinCount = cuantos soldados se necesitan para matar 1 monstruo
    //       // doubleFactorLevel = usar el doble para los soldados de level mas bajo, ejm: 200 g2, 100 g1
    //       g2LeadershipConsumed = g2LeadershipConsumed + groupLeadershipCostG2 * mult
    //     } else {
    //       console.log(
    //         'G2 not enough for next group: leadership ',
    //         maxLeaderShip,
    //         'group',
    //         groupLeadershipCostG2
    //       )
    //       console.log('required ', groupLeadershipCostG2)
    //       break
    //     }

    //     // if (maxLeaderShip - groupLeadershipCost < 0) {
    //     //   break // si ni pa este le queda, fin
    //     // }
    //   }

    //   if (useG1Rider) {
    //     /*
    //          ¿que pasa si mando varios stacks, g1,g2,g3?
    //          el sacrificio solo debe ser igual al mayor de todos
    //          G1 es el mas tropas tiene
    //         */
    //     //sacrifices, cuantos soldados estoy mandando
    //     // por cada G1 que mando,mandar dos sacrificio, por que el leadership del caballo es el doble
    //     const mult = g1Mult()
    //     const doble = 2
    //     const sameAmountOfSacrificesAsG1 = g1NeededToKillOneMob * mult * doble
    //     const groupLeadershipCostSacrifices = sameAmountOfSacrificesAsG1 * sacrifice.LEADERSHIP
    //     if (useSacrifices && maxLeaderShip - groupLeadershipCostSacrifices >= 0) {
    //       maxLeaderShip = maxLeaderShip - groupLeadershipCostSacrifices
    //       sacrificeGroupsCount = sacrificeGroupsCount + doble * mult
    //       sacrificeTroopsCount = sacrificeTroopsCount + sameAmountOfSacrificesAsG1
    //       sacrificeLeadershipConsumed = sacrificeLeadershipConsumed + groupLeadershipCostSacrifices
    //     }

    //     // si tengo suficiente para este y el siguiente grupo, descontar
    //     if (maxLeaderShip - groupLeadershipCostG1 * mult >= 0) {
    //       maxLeaderShip = maxLeaderShip - groupLeadershipCostG1 * mult
    //       g1GroupsCount = g1GroupsCount + 1 * mult
    //       g1TroopsCount = g1TroopsCount + g1NeededToKillOneMob * mult
    //       // g*MinCount = cuantos soldados se necesitan para matar 1 monstruo
    //       // doubleFactorLevel = usar el doble para los soldados de level mas bajo, ejm: 200 g2, 100 g1
    //       g1LeadershipConsumed = g1LeadershipConsumed + groupLeadershipCostG1 * mult
    //     } else {
    //       console.log(
    //         'G1 not enough for next group: leadership ',
    //         maxLeaderShip,
    //         'group',
    //         groupLeadershipCostG1
    //       )
    //       console.log('required ', groupLeadershipCostG1)
    //       break
    //     }

    //     // if (maxLeaderShip - groupLeadershipCost < 0) {
    //     //   break // si ni pa este le queda, fin
    //     // }

    //     // console.log('g1 calc', g1TroopsCount)
    //   }

    //   console.log('remaining leadership', maxLeaderShip, maxLoop)

    //   if (
    //     toCheck.every(leadershipRequired => maxLeaderShip < leadershipRequired) ||
    //     maxLeaderShip <= 0
    //   ) {
    //     console.log('not enough leadership, ....ending')
    //     break
    //   }
    // } while (maxLeaderShip > 0 && maxLoop-- > 0)
    // calcular el factor/numero pa q al multiplicar se consuma el total leadership
    const g1Leadership = g1TroopsCount * rider1.LEADERSHIP
    const g2Leadership = g2TroopsCount * rider2.LEADERSHIP
    const g3Leadership = g3TroopsCount * rider3.LEADERSHIP
    const g4Leadership = g4TroopsCount * rider4.LEADERSHIP
    const g5Leadership = g5TroopsCount * rider5.LEADERSHIP
    const sacrificeLeadership = sacrificeTroopsCount * sacrifice.LEADERSHIP
    const totalLeadership =
      g1Leadership + g2Leadership + g3Leadership + g4Leadership + g5Leadership + sacrificeLeadership

    let factor = 0
    do {
      // if (factor * totalLeadership < leadership) {
      factor = factor + 1
      // } else break
    } while (factor * totalLeadership < leadership)
    console.log('factor', factor)
    // setFactorX(factor)

    //TODO test, remove this line
    factor = 1

    console.log('g1', g1TroopsCount, g1NeededToKillOneMob, g1TroopsCount / g1NeededToKillOneMob)
    console.log('g2', g2TroopsCount, g2NeededToKillOneMob, g2TroopsCount / g2NeededToKillOneMob)
    console.log('g3', g3TroopsCount, g3NeededToKillOneMob, g3TroopsCount / g3NeededToKillOneMob)
    console.log('g4', g4TroopsCount, g4NeededToKillOneMob, g4TroopsCount / g4NeededToKillOneMob)
    console.log('g5', g5TroopsCount, g5NeededToKillOneMob, g5TroopsCount / g5NeededToKillOneMob)

    setRider1({
      groupCount: (g1TroopsCount * factor) / g1NeededToKillOneMob,
      leadership: g1TroopsCount * factor * rider1.LEADERSHIP,
      minCount: g1NeededToKillOneMob,
      maxCount: g1TroopsCount * factor
    })
    setRider2({
      groupCount: (g2TroopsCount * factor) / g2NeededToKillOneMob,
      leadership: g2TroopsCount * factor * rider2.LEADERSHIP,
      minCount: g2NeededToKillOneMob,
      maxCount: g2TroopsCount * factor
    })
    setRider3({
      groupCount: (g3TroopsCount * factor) / g3NeededToKillOneMob,
      leadership: g3TroopsCount * factor * rider3.LEADERSHIP,
      minCount: g3NeededToKillOneMob,
      maxCount: g3TroopsCount * factor
    })
    setRider4({
      groupCount: (g4TroopsCount * factor) / g4NeededToKillOneMob,
      leadership: g4TroopsCount * factor * rider4.LEADERSHIP,
      minCount: g4NeededToKillOneMob,
      maxCount: g4TroopsCount * factor
    })
    setRider5({
      groupCount: (g5TroopsCount * factor) / g5NeededToKillOneMob,
      leadership: g5TroopsCount * factor * rider5.LEADERSHIP,
      minCount: g5NeededToKillOneMob,
      maxCount: g5TroopsCount * factor
    })

    // console.log('sacrifices', sacrificeGroupsCount)
    setSacrifice({
      groupCount: (sacrificeTroopsCount * factor) / sacrificesNeededToKillOneMob,
      leadership: sacrificeTroopsCount * factor * sacrifice.LEADERSHIP,
      minCount: sacrificesNeededToKillOneMob,
      maxCount: sacrificeTroopsCount * factor
    })
  }

  const handleDecGroupCount = (group: string) => {
    if (group === 'xx') {
      const groupCount = sacrifice.groupCount - 1
      const leadership = sacrifice.LEADERSHIP * groupCount * sacrifice.minCount
      const troopsCount = sacrifice.maxCount - sacrifice.minCount
      setSacrifice({ groupCount, leadership, maxCount: troopsCount })
    } else if (group === 'g1') {
      const groupCount = rider1.groupCount - 1
      const leadership = rider1.LEADERSHIP * groupCount * rider1.minCount
      const troopsCount = rider1.maxCount - rider1.minCount
      setRider1({ groupCount, leadership, maxCount: troopsCount })
    } else if (group === 'g2') {
      const groupCount = rider2.groupCount - 1
      const leadership = rider2.LEADERSHIP * groupCount * rider2.minCount
      const troopsCount = rider2.maxCount - rider2.minCount
      setRider2({ groupCount, leadership, maxCount: troopsCount })
    } else if (group === 'g3') {
      const groupCount = rider3.groupCount - 1
      const leadership = rider3.LEADERSHIP * groupCount * rider3.minCount
      const troopsCount = rider3.maxCount - rider3.minCount
      setRider3({ groupCount, leadership, maxCount: troopsCount })
    } else if (group === 'g4') {
      const groupCount = rider4.groupCount - 1
      const leadership = rider4.LEADERSHIP * groupCount * rider4.minCount
      const troopsCount = rider4.maxCount - rider4.minCount
      setRider4({ groupCount, leadership, maxCount: troopsCount })
    } else if (group === 'g5') {
      const groupCount = rider5.groupCount - 1
      const leadership = rider5.LEADERSHIP * groupCount * rider5.minCount
      const troopsCount = rider5.maxCount - rider5.minCount
      setRider5({ groupCount, leadership, maxCount: troopsCount })
    }
  }

  const handleIncGroupCount = (group: string) => {
    if (group === 'xx') {
      const groupCount = sacrifice.groupCount + 1
      const leadership = sacrifice.LEADERSHIP * groupCount * sacrifice.minCount
      const troopsCount = sacrifice.maxCount + sacrifice.minCount
      setSacrifice({ groupCount, leadership, maxCount: troopsCount })
    } else if (group === 'g1') {
      const groupCount = rider1.groupCount + 1
      const leadership = rider1.LEADERSHIP * groupCount * rider1.minCount
      const troopsCount = rider1.maxCount + rider1.minCount
      setRider1({ groupCount, leadership, maxCount: troopsCount })
    } else if (group === 'g2') {
      const groupCount = rider2.groupCount + 1
      const leadership = rider2.LEADERSHIP * groupCount * rider2.minCount
      const troopsCount = rider2.maxCount + rider2.minCount
      setRider2({ groupCount, leadership, maxCount: troopsCount })
    } else if (group === 'g3') {
      const groupCount = rider3.groupCount + 1
      const leadership = rider3.LEADERSHIP * groupCount * rider3.minCount
      const troopsCount = rider3.maxCount + rider3.minCount
      setRider3({ groupCount, leadership, maxCount: troopsCount })
    } else if (group === 'g4') {
      const groupCount = rider4.groupCount + 1
      const leadership = rider4.LEADERSHIP * groupCount * rider4.minCount
      const troopsCount = rider4.maxCount + rider4.minCount
      setRider4({ groupCount, leadership, maxCount: troopsCount })
    } else if (group === 'g5') {
      const groupCount = rider5.groupCount + 1
      const leadership = rider5.LEADERSHIP * groupCount * rider5.minCount
      const troopsCount = rider5.maxCount + rider5.minCount
      setRider5({ groupCount, leadership, maxCount: troopsCount })
    }
  }

  //calc()
  const leadershipConsumed =
    sacrifice.leadership +
    rider1.leadership +
    rider2.leadership +
    rider3.leadership +
    rider4.leadership +
    rider5.leadership

  return (
    <Fragment>
      <h1>Troops calculation - totalbattle</h1>
      <h6>Riders vs ranged</h6>
      <div className='event'>
        <div className='group'>
          <label>Event </label>
          <select value={selectedEvent} onChange={changeMobEvent}>
            <option value='0'>Ragnarok/jörmungandr-fenrir/Doug Mage</option>
            <option value='1'>Ancient/Tinman/Arbalest</option>
            <option value='2'>720,2160/Nigromante</option>
            <option value='3'>6500,19500/Supervisor</option>
          </select>
        </div>
        <div className='group'>
          <span>Health per unit: </span>{' '}
          <input type='number' value={mobHealth} onChange={changeMobHealth} required />
          <span className='small'>&lt;-- Change this value if you need a custom calculation</span>
        </div>
      </div>
      <div className='container'>
        <div className='configbar'>
          <div className='card'>
            <label>Leadership </label>
            <input type='number' value={leadership} onChange={changeLeadership} required />
          </div>
          <div className='card'>
            <label>STR Bonus </label>
            <input
              type='number'
              value={bonusSTR}
              step={0.1}
              onChange={setAndSaveBonusStr}
              required
            />
          </div>
          <div className='card'>
            <label>HP Bonus </label>
            <input type='number' value={bonusHP} step={0.1} onChange={setAndSaveBonusHp} required />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Use</th>

              {showStrengthData && <th>Str + bonus</th>}
              {showHealthData && <th>Health + bonus</th>}
              <th>Min setup</th>
              <th>Max setup</th>
              <th>Groups count</th>
              {showHealthData && <th>Stack Health</th>}
              {showStrengthData && <th>Stack Strength</th>}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className='card'>
                  <label>Sacrifices</label>
                  <input
                    type='checkbox'
                    checked={useSacrifices}
                    onChange={() => {
                      setUseSacrifices(!useSacrifices)
                    }}
                  />
                </div>
              </td>

              {showStrengthData && <td>{sacrifice.str.toFixed(0)}</td>}
              {showHealthData && <td>{sacrifice.hp.toFixed(0)}</td>}
              <td>{sacrifice.minCount}</td>
              <td className='bright'>{sacrifice.maxCount}</td>
              <td>
                {sacrifice.groupCount}
                <button className='btnGroupCount' onClick={() => handleDecGroupCount('xx')}>
                  -
                </button>
                <button className='btnGroupCount' onClick={() => handleIncGroupCount('xx')}>
                  +
                </button>
              </td>
              {showHealthData && <td>{(sacrifice.hp * sacrifice.maxCount).toFixed(0)}</td>}
              {showStrengthData && <td>{(sacrifice.str * sacrifice.maxCount).toFixed(0)}</td>}
            </tr>

            <tr>
              <td>
                <div className='card'>
                  <label>G1 Riders</label>
                  <input
                    type='checkbox'
                    checked={useG1Rider}
                    onChange={() => {
                      setUseG1Rider(!useG1Rider)
                    }}
                  />
                </div>
              </td>

              {showStrengthData && <td>{rider1.str.toFixed(0)}</td>}
              {showHealthData && <td>{rider1.hp.toFixed(0)}</td>}
              <td>{rider1.minCount}</td>
              <td className='bright'>
                {rider1.maxCount} <span className='small'>(x{rider1.LEADERSHIP})</span>
              </td>
              <td>
                {rider1.groupCount}
                <button className='btnGroupCount' onClick={() => handleDecGroupCount('g1')}>
                  -
                </button>
                <button className='btnGroupCount' onClick={() => handleIncGroupCount('g1')}>
                  +
                </button>
              </td>
              {showHealthData && <td>{(rider1.hp * rider1.maxCount).toFixed(0)}</td>}
              {showStrengthData && <td>{(rider1.str * rider1.maxCount).toFixed(0)}</td>}
            </tr>

            <tr>
              <td>
                <div className='card'>
                  <label>G2 Riders</label>
                  <input
                    type='checkbox'
                    checked={useG2Rider}
                    onChange={() => {
                      setUseG2Rider(!useG2Rider)
                    }}
                  />
                </div>
              </td>
              {showStrengthData && <td>{rider2.str.toFixed(0)}</td>}
              {showHealthData && <td>{rider2.hp.toFixed(0)}</td>}
              <td>{rider2.minCount}</td>
              <td className='bright'>
                {rider2.maxCount} <span className='small'>(x{rider2.LEADERSHIP})</span>
              </td>
              <td>
                {rider2.groupCount}{' '}
                <button className='btnGroupCount' onClick={() => handleDecGroupCount('g2')}>
                  -
                </button>
                <button className='btnGroupCount' onClick={() => handleIncGroupCount('g2')}>
                  +
                </button>
              </td>
              {showHealthData && <td>{(rider2.hp * rider2.maxCount).toFixed(0)}</td>}
              {showStrengthData && <td>{(rider2.str * rider2.maxCount).toFixed(0)}</td>}
            </tr>

            <tr>
              <td>
                <div className='card'>
                  <label>G3 Riders</label>
                  <input
                    type='checkbox'
                    checked={useG3Rider}
                    onChange={() => {
                      setUseG3Rider(!useG3Rider)
                    }}
                  />
                </div>
              </td>
              {showStrengthData && <td>{rider3.str.toFixed(0)}</td>}
              {showHealthData && <td>{rider3.hp.toFixed(0)}</td>}
              <td>{rider3.minCount.toFixed(0)}</td>
              <td className='bright'>
                {rider3.maxCount} <span className='small'>(x{rider3.LEADERSHIP})</span>
              </td>
              <td>
                {rider3.groupCount}{' '}
                <button className='btnGroupCount' onClick={() => handleDecGroupCount('g3')}>
                  -
                </button>
                <button className='btnGroupCount' onClick={() => handleIncGroupCount('g3')}>
                  +
                </button>
              </td>
              {showHealthData && <td>{(rider3.hp * rider3.maxCount).toFixed(0)}</td>}
              {showStrengthData && <td>{(rider3.str * rider3.maxCount).toFixed(0)}</td>}
            </tr>

            <tr>
              <td>
                <div className='card'>
                  <label>G4 Riders</label>
                  <input
                    type='checkbox'
                    checked={useG4Rider}
                    onChange={() => {
                      setUseG4Rider(!useG4Rider)
                    }}
                  />
                </div>
              </td>
              {showStrengthData && <td>{rider4.str.toFixed(0)}</td>}
              {showHealthData && <td>{rider4.hp.toFixed(0)}</td>}
              <td>{rider4.minCount.toFixed(0)}</td>
              <td className='bright'>
                {rider4.maxCount} <span className='small'>(x{rider4.LEADERSHIP})</span>
              </td>
              <td>
                {rider4.groupCount}{' '}
                <button className='btnGroupCount' onClick={() => handleDecGroupCount('g4')}>
                  -
                </button>
                <button className='btnGroupCount' onClick={() => handleIncGroupCount('g4')}>
                  +
                </button>
              </td>
              {showHealthData && <td>{(rider4.hp * rider4.maxCount).toFixed(0)}</td>}
              {showStrengthData && <td>{(rider4.str * rider4.maxCount).toFixed(0)}</td>}
            </tr>

            <tr>
              <td>
                <div className='card'>
                  <label>G5 Riders</label>
                  <input
                    type='checkbox'
                    checked={useG5Rider}
                    onChange={() => {
                      setUseG5Rider(!useG5Rider)
                    }}
                  />
                </div>
              </td>
              {showStrengthData && <td>{rider5.str.toFixed(0)}</td>}
              {showHealthData && <td>{rider5.hp.toFixed(0)}</td>}
              <td>{rider5.minCount.toFixed(0)}</td>
              <td className='bright'>
                {rider5.maxCount} <span className='small'>(x{rider5.LEADERSHIP})</span>
              </td>
              <td>
                {rider5.groupCount}{' '}
                <button className='btnGroupCount' onClick={() => handleDecGroupCount('g5')}>
                  -
                </button>
                <button className='btnGroupCount' onClick={() => handleIncGroupCount('g5')}>
                  +
                </button>
              </td>
              {showHealthData && <td>{(rider5.hp * rider5.maxCount).toFixed(0)}</td>}
              {showStrengthData && <td>{(rider5.str * rider5.maxCount).toFixed(0)}</td>}
            </tr>

            <tr style={{ backgroundColor: 'purple' }}>
              <td></td>
              {showStrengthData && <td></td>}
              {showHealthData && <td></td>}
              <td>Leadership used</td>
              <td> {leadershipConsumed}</td>
              <td></td>
              {showHealthData && <td></td>}
              {showStrengthData && <td></td>}
            </tr>
          </tbody>
        </table>
        <div className='card'>
          <label>Show health info</label>
          <input
            type='checkbox'
            checked={showHealthData}
            onChange={() => {
              setShowHealthData(!showHealthData)
            }}
          />
        </div>
        <div className='card'>
          <label>Show strength info</label>
          <input
            type='checkbox'
            checked={showStrengthData}
            onChange={() => {
              setShowStrengthData(!showStrengthData)
            }}
          />
        </div>
        <p>
          Min Setup, shows how many soldiers is needed to kill <strong>one</strong> monster
        </p>

        {leadershipConsumed == 0 && (
          <p style={{ color: 'red' }}>can't find a setup with this configuration</p>
        )}
        {leadershipConsumed > leadership && (
          <p style={{ color: 'red' }}>you do NOT have enough leadership</p>
        )}
        <div>
          <div className='group'>
            <label>Sacrifies </label>
            <select value={selectedSacrifice} onChange={changeSacrifice}>
              <option value='0'>Swordman G1</option>
              <option value='1'>Archer G1</option>
              <option value='2'>Spearman G1</option>
              {/* <option value='3'>Catapult G1</option> */}
            </select>
          </div>
          <div className='card'>
            <label>Sacrifice STR Bonus </label>
            <input
              type='number'
              value={sacrificeBonusSTR}
              step={0.1}
              onChange={setAndSaveSacrificeBonusStr}
              required
            />
          </div>
        </div>
      </div>

      <button className='gobtn' onClick={calc}>
        CALCULATE
      </button>

      <div className='info'>
        <div>
          <ul style={{ color: 'pink' }}>
            <li>Send sacrifices first</li>
            <li>The cheapest group should go above</li>
            <li>Higher strength attack first</li>
            <li>There are 4 big groups, guards(3),specialist(2),engineer(1),monster(4)</li>
            <li>Each group have subgroups</li>
            <li>Each subgroups have its own bonus value, im handling only riders guards bonus</li>
            <li>
              Put more points on strength, or max strength first, leave health after you maxed
              strength ;)
            </li>
          </ul>

          <br />
          <hr />
          <p>LOAD ALL your bonuses/buff (vip, personal-&gt;strenght, etc), before use this</p>
          <p>
            you can find the bonus value on <span>Barracks -&gt; Guardsmen -&gt; (any) Rider</span>
          </p>

          <hr />
          <p>
            recommend to send higher amount of lowest soldiers like G1, so they attack (/die) first
          </p>
          <p>because they are cheaper/faster to rebuild</p>
          <p>the recomendation is to use 2 groups: example g1 and g2</p>
          <p>
            because if you get attacked first and you sent only one group, you will not get any
            kills/exp
          </p>
          <p>
            if send two groups, and the first group get killed, the second group will get you
            experience
          </p>
          <hr />
          <p>
            * use 3 groups or more only if you have a bigger player on raid with many groups/stacks
          </p>
          <hr />
          <p>and finally... do whatever you want</p>
        </div>
        <img src='./bonus.jpg' alt='bonus' />
      </div>
    </Fragment>
  )
}

export default App
