import { useState, useEffect, Fragment } from 'react'

import './App.css'
import { useGuardsStore } from './guardStore'
import { SwordmanG1, SpearmanG1, ArcherG1, CatapultG1 } from './soldiers'
import classNames from 'classnames'

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
const doomsdayNecromancer = {
  hp: 2160,
  str: 720,
  leadership: 8,
  initiative: 10,
  bonoFlyPercent: 50
}
const jacksReturnScarecrow = {
  hp: 33000,
  str: 11000,
  leadership: 2,
  initiative: 10,
  bonoFlyPercent: 50
}

function App() {
  const bonusHP = useGuardsStore(state => state.bonusHP)
  const setBonusHP = useGuardsStore(state => state.setBonusHP)
  const bonusSTR = useGuardsStore(state => state.bonusSTR)
  const setBonusSTR = useGuardsStore(state => state.setBonusSTR)
  const setSacrificeBonusSTR = useGuardsStore(state => state.setSacrificeBonusSTR)
  const sacrificeBonusSTR = useGuardsStore(state => state.sacrificeBonusSTR)
  const setSacrificeBonusHP = useGuardsStore(state => state.setSacrificeBonusHP)
  const sacrificeBonusHP = useGuardsStore(state => state.sacrificeBonusHP)

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

  const [maxSacrifices, setMaxSacrifices] = useState(0)
  const [useMaxSacrifices, setUseMaxSacrifices] = useState(false)
  const [useSacrifices, setUseSacrifices] = useState(true)
  const [useG1Rider, setUseG1Rider] = useState(true)
  const [useG2Rider, setUseG2Rider] = useState(true)
  const [useG3Rider, setUseG3Rider] = useState(false)
  const [useG4Rider, setUseG4Rider] = useState(false)
  const [useG5Rider, setUseG5Rider] = useState(false)

  useEffect(() => {
    calculateHP(bonusHP)
    calculateStr(bonusSTR)
  }, [])

  useEffect(() => {
    let health = ragnarokMagoDraug.hp

    if (selectedEvent === '0') {
      health = ragnarokMagoDraug.hp
    } else if (selectedEvent === '1') {
      health = ragnarokMagoDraug.hp
    } else if (selectedEvent === '2') {
      // doomsday -> Necromancer 2160 hp
      health = doomsdayNecromancer.hp
    } else if (selectedEvent === '3') {
      health = doomsdaySupervisor.hp
    } else if (selectedEvent === '4') {
      // jacks return -> scarecrow (espantapajaro) 33k hp //11k str
      health = jacksReturnScarecrow.hp
    }

    setMobHealth(health)
  }, [selectedEvent])

  useEffect(() => {
    setSacrifice({ str: sacrificeBase.BASESTR + (sacrificeBonusSTR * sacrificeBase.BASESTR) / 100 })
    setSacrifice({ hp: sacrificeBase.BASEHP + (sacrificeBonusHP * sacrificeBase.BASEHP) / 100 })
  }, [sacrificeBase.BASESTR, sacrificeBase.BASEHP, sacrificeBonusSTR, sacrificeBonusHP])

  useEffect(() => {
    calcHP()
  }, [useSacrifices, useG1Rider, useG2Rider, useG3Rider, useG4Rider, useG5Rider])

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

  const setAndSaveSacrificeBonusHp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)

    setSacrificeBonusHP(value)
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

  const getTotalLeadershipConsumed = (
    g1: number,
    g2: number,
    g3: number,
    g4: number,
    g5: number,
    sac: number
  ) => {
    const g1Leadership = g1 * rider1.LEADERSHIP
    const g2Leadership = g2 * rider2.LEADERSHIP
    const g3Leadership = g3 * rider3.LEADERSHIP
    const g4Leadership = g4 * rider4.LEADERSHIP
    const g5Leadership = g5 * rider5.LEADERSHIP
    const sacrificeLeadership = sac * sacrifice.LEADERSHIP

    return (
      g1Leadership + g2Leadership + g3Leadership + g4Leadership + g5Leadership + sacrificeLeadership
    )
  }

  const calcSTR = () => {
    if (!useG1Rider && !useG2Rider && !useG3Rider && !useG4Rider && !useG5Rider) {
      // algo debe estar marcado
      alert('pick riders')
      return
    }

    const sacrificesNeededToKillOneMob = Math.ceil(mobHealth / sacrifice.str)
    const g1NeededToKillOneMob = Math.ceil(mobHealth / rider1.str)
    const g2NeededToKillOneMob = Math.ceil(mobHealth / rider2.str)
    const g3NeededToKillOneMob = Math.ceil(mobHealth / rider3.str)
    const g4NeededToKillOneMob = Math.ceil(mobHealth / rider4.str)
    const g5NeededToKillOneMob = Math.ceil(mobHealth / rider5.str)

    let finalSacrificeTroopsCount = 0
    let finalG1TroopsCount = 0
    let finalG2TroopsCount = 0
    let finalG3TroopsCount = 0
    let finalG4TroopsCount = 0
    let finalG5TroopsCount = 0

    /*
    el sacrificio debe tener mas "vida grupal" que todos, para que vaya primero
     el resto puede tener cualquier valor siempre y cuando sea menor
            */

    let factor = 0
    let maxLoop = 1000

    let sacrificeTroopsCount = 0
    let g1TroopsCount = 0
    let g2TroopsCount = 0
    let g3TroopsCount = 0
    let g4TroopsCount = 0
    let g5TroopsCount = 0
    /*
    let g1Leadership = g1TroopsCount * rider1.LEADERSHIP
    let g2Leadership = g2TroopsCount * rider2.LEADERSHIP
    let g3Leadership = g3TroopsCount * rider3.LEADERSHIP
    let g4Leadership = g4TroopsCount * rider4.LEADERSHIP
    let g5Leadership = g5TroopsCount * rider5.LEADERSHIP
    let sacrificeLeadership = sacrificeTroopsCount * sacrifice.LEADERSHIP

    let totalLeadership =
      g1Leadership + g2Leadership + g3Leadership + g4Leadership + g5Leadership + sacrificeLeadership
      */
    let totalLeadership = 0
    /***********************************************
     *  basado en fuerza
     * ==========================
     * inicia con g5 troops,
     * las siguientes tropas incrementa el "doble" (o un numero mayor)
     * teniendo en cuenta el minimo de tropas para matar 1 mob
     * de esa forma tiene mas fuerza que el grupo anterior
     * el ultimo grupo que seria el sacrificio, tendra mas fuerza que todos
     */

    /**********************************************
     * basado en vitalidad
     * =======================
     * no interesa si tiene un grupo mas vida que otro
     * siempre y cuando no sobrepase el del sacrificio, todo OK
     * si prioritizo el G5, deberia tener mayor num de kills.. no?
     * ------------------------
     * inicio con el sacrificio, y luego de mayor a menor,,  g5,g4,g3,g2,g1
     * agregar 1 (o un grupo) sacrificio
     * calcular cuanto hp tiene grupalmente
     * calcular el num de g5 para matar 1 mob
     * si el leadership acumulado + el leadership de este grupo, sobrepasa al leadership disponible salir
     * si la vitalidad grupal del g5 no sobrepasa la vitalidad grupal del sacrificio
     * agregarlo a la cuenta del g5
     * -- repetir para g4,g3,g2,g1
     * si el total de leadership > al disponible salir
     */
    while (totalLeadership < leadership) {
      factor = factor + 1
      // calculate how many troops needed for each group to kill one mob,based on leadership
      if (useG5Rider) {
        g5TroopsCount = g5NeededToKillOneMob * factor
      }

      if (useG4Rider) {
        //g4 needs to have more strength than g5
        if (useG5Rider) {
          const g4GroupStrength = g4NeededToKillOneMob * rider4.str
          const groupStrengths = [g4GroupStrength]
          if (useG5Rider) {
            groupStrengths.push(g5TroopsCount * rider5.str)
          }
          const maxGroupStr = Math.max(...groupStrengths)

          const mult = Math.ceil(maxGroupStr / g4GroupStrength)
          g4TroopsCount = g4NeededToKillOneMob * mult
        } else {
          g4TroopsCount = g4NeededToKillOneMob * factor
        }
      }

      if (useG3Rider) {
        //g3 needs to have more strength than g4,g5
        if (useG5Rider || useG4Rider) {
          const g3GroupStrength = g3NeededToKillOneMob * rider3.str
          const groupStrengths = [g3GroupStrength]
          if (useG5Rider) {
            groupStrengths.push(g5TroopsCount * rider5.str)
          }
          if (useG4Rider) {
            groupStrengths.push(g4TroopsCount * rider4.str)
          }
          const maxGroupStr = Math.max(...groupStrengths)
          const mult = Math.ceil(maxGroupStr / g3GroupStrength)
          g3TroopsCount = g3NeededToKillOneMob * mult
        } else {
          g3TroopsCount = g3NeededToKillOneMob * factor
        }
      }

      if (useG2Rider) {
        //g2 needs to have more strength than g3,g4,g5
        if (useG5Rider || useG4Rider || useG3Rider) {
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
        } else {
          g2TroopsCount = g2NeededToKillOneMob * factor
        }
      }

      if (useG1Rider) {
        //g1 needs to have more strength than all rest
        if (useG5Rider || useG4Rider || useG3Rider || useG2Rider) {
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
        } else {
          g1TroopsCount = g1NeededToKillOneMob * factor
        }
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
      }

      const g1Leadership = g1TroopsCount * rider1.LEADERSHIP
      const g2Leadership = g2TroopsCount * rider2.LEADERSHIP
      const g3Leadership = g3TroopsCount * rider3.LEADERSHIP
      const g4Leadership = g4TroopsCount * rider4.LEADERSHIP
      const g5Leadership = g5TroopsCount * rider5.LEADERSHIP
      const sacrificeLeadership = sacrificeTroopsCount * sacrifice.LEADERSHIP

      totalLeadership =
        g1Leadership +
        g2Leadership +
        g3Leadership +
        g4Leadership +
        g5Leadership +
        sacrificeLeadership

      if (totalLeadership > leadership) break

      // hold the previous value before overflow
      finalSacrificeTroopsCount = sacrificeTroopsCount
      finalG1TroopsCount = g1TroopsCount
      finalG2TroopsCount = g2TroopsCount
      finalG3TroopsCount = g3TroopsCount
      finalG4TroopsCount = g4TroopsCount
      finalG5TroopsCount = g5TroopsCount

      if (totalLeadership > leadership) break

      if (maxLoop-- < 1) break
    }

    setRider1({
      groupCount: finalG1TroopsCount / g1NeededToKillOneMob,
      leadership: finalG1TroopsCount * rider1.LEADERSHIP,
      minCount: g1NeededToKillOneMob,
      maxCount: finalG1TroopsCount
    })
    setRider2({
      groupCount: finalG2TroopsCount / g2NeededToKillOneMob,
      leadership: finalG2TroopsCount * rider2.LEADERSHIP,
      minCount: g2NeededToKillOneMob,
      maxCount: finalG2TroopsCount
    })
    setRider3({
      groupCount: finalG3TroopsCount / g3NeededToKillOneMob,
      leadership: finalG3TroopsCount * rider3.LEADERSHIP,
      minCount: g3NeededToKillOneMob,
      maxCount: finalG3TroopsCount
    })
    setRider4({
      groupCount: finalG4TroopsCount / g4NeededToKillOneMob,
      leadership: finalG4TroopsCount * rider4.LEADERSHIP,
      minCount: g4NeededToKillOneMob,
      maxCount: finalG4TroopsCount
    })
    setRider5({
      groupCount: finalG5TroopsCount / g5NeededToKillOneMob,
      leadership: finalG5TroopsCount * rider5.LEADERSHIP,
      minCount: g5NeededToKillOneMob,
      maxCount: finalG5TroopsCount
    })

    // console.log('sacrifices', sacrificeGroupsCount)
    setSacrifice({
      groupCount: finalSacrificeTroopsCount / sacrificesNeededToKillOneMob,
      leadership: finalSacrificeTroopsCount * sacrifice.LEADERSHIP,
      minCount: sacrificesNeededToKillOneMob,
      maxCount: finalSacrificeTroopsCount
    })
  }

  const calcHP = () => {
    if (!useG1Rider && !useG2Rider && !useG3Rider && !useG4Rider && !useG5Rider) {
      // algo debe estar marcado
      alert('pick riders')
      return
    }

    const sacrificesNeededToKillOneMob = Math.ceil(mobHealth / sacrifice.str)
    const g1NeededToKillOneMob = Math.ceil(mobHealth / rider1.str)
    const g2NeededToKillOneMob = Math.ceil(mobHealth / rider2.str)
    const g3NeededToKillOneMob = Math.ceil(mobHealth / rider3.str)
    const g4NeededToKillOneMob = Math.ceil(mobHealth / rider4.str)
    const g5NeededToKillOneMob = Math.ceil(mobHealth / rider5.str)

    let finalSacrificeTroopsCount = 0
    let finalG1TroopsCount = 0
    let finalG2TroopsCount = 0
    let finalG3TroopsCount = 0
    let finalG4TroopsCount = 0
    let finalG5TroopsCount = 0

    /*
    el sacrificio debe tener mas "vida grupal" que todos, para que vaya primero
     el resto puede tener cualquier valor siempre y cuando sea menor
            */

    let maxLoop = 1000000 // should change it for a timer

    let sacrificeTroopsCount = 0
    let g1TroopsCount = 0
    let g2TroopsCount = 0
    let g3TroopsCount = 0
    let g4TroopsCount = 0
    let g5TroopsCount = 0
    /*
    let g1Leadership = g1TroopsCount * rider1.LEADERSHIP
    let g2Leadership = g2TroopsCount * rider2.LEADERSHIP
    let g3Leadership = g3TroopsCount * rider3.LEADERSHIP
    let g4Leadership = g4TroopsCount * rider4.LEADERSHIP
    let g5Leadership = g5TroopsCount * rider5.LEADERSHIP
    let sacrificeLeadership = sacrificeTroopsCount * sacrifice.LEADERSHIP

    let totalLeadership =
      g1Leadership + g2Leadership + g3Leadership + g4Leadership + g5Leadership + sacrificeLeadership
      */
    let totalLeadership = 0
    let lastLeadershipCalculated = 0 // to break the loop, if didnt changed (loop protection)
    /***********************************************
     *  basado en fuerza
     * ==========================
     * inicia con g5 troops,
     * las siguientes tropas incrementa el "doble" (o un numero mayor)
     * teniendo en cuenta el minimo de tropas para matar 1 mob
     * de esa forma tiene mas fuerza que el grupo anterior
     * el ultimo grupo que seria el sacrificio, tendra mas fuerza que todos
     */

    /**********************************************
     * basado en vitalidad
     * =======================
     * no interesa si tiene un grupo mas vida que otro
     * siempre y cuando no sobrepase el del sacrificio, todo OK
     * si prioritizo el G5, deberia tener mayor num de kills.. no?
     * ------------------------
     * inicio con el sacrificio, y luego de mayor a menor,,  g5,g4,g3,g2,g1
     * agregar 1 (o un grupo) sacrificio
     * calcular cuanto hp tiene grupalmente
     * calcular el num de g5 para matar 1 mob
     * si el leadership acumulado + el leadership de este grupo, sobrepasa al leadership disponible salir
     * si la vitalidad grupal del g5 no sobrepasa la vitalidad grupal del sacrificio
     * agregarlo a la cuenta del g5
     * -- repetir para g4,g3,g2,g1
     * si el total de leadership > al disponible salir
     */
    let sacrificeGroupHealth = 0
    while (totalLeadership < leadership) {
      if (useSacrifices) {
        sacrificeTroopsCount = sacrificeTroopsCount + 1
        if (useMaxSacrifices) sacrificeTroopsCount = maxSacrifices

        sacrificeGroupHealth = sacrificeTroopsCount * sacrifice.hp

        // console.log('sacrificegrouphealth: ', sacrificeGroupHealth)
      }

      if (useG1Rider) {
        if (useSacrifices) {
          const g1SmallGroupLeadership = g1NeededToKillOneMob * rider1.LEADERSHIP
          const g1SmallGroupHealth = g1NeededToKillOneMob * rider1.hp
          const g1GroupTotalHealth = g1TroopsCount * rider1.hp
          // console.log(
          //   'g1smallGroupHealth: ',
          //   g1SmallGroupHealth,
          //   'g1GroupTotalHealth: ',
          //   g1GroupTotalHealth
          // )
          // console.log('g1 total health', g1GroupTotalHealth + g1SmallGroupHealth)
          if (
            g1GroupTotalHealth + g1SmallGroupHealth < sacrificeGroupHealth &&
            totalLeadership + g1SmallGroupLeadership <= leadership
          ) {
            g1TroopsCount = g1TroopsCount + g1NeededToKillOneMob
            // console.log('added g1 --------------------', g1TroopsCount)
          }
        } else {
          // uses g1 as sacrifice, check health based on this
          g1TroopsCount = g1TroopsCount + 1
          sacrificeGroupHealth = g1TroopsCount * rider1.hp

          // console.log('sacrificegrouphealth: ', sacrificeGroupHealth)
        }
      }

      if (useG2Rider) {
        if (useSacrifices || useG1Rider) {
          const g2SmallGroupLeadership = g2NeededToKillOneMob * rider2.LEADERSHIP
          const g2SmallGroupHealth = g2NeededToKillOneMob * rider2.hp
          const g2GroupTotalHealth = g2TroopsCount * rider2.hp
          // console.log(
          //   'g2smallGroupHealth: ',
          //   g2SmallGroupHealth,
          //   'g2GroupTotalHealth: ',
          //   g2GroupTotalHealth
          // )
          // console.log('g2 total health', g2GroupTotalHealth + g2SmallGroupHealth)
          if (
            g2GroupTotalHealth + g2SmallGroupHealth < sacrificeGroupHealth &&
            totalLeadership + g2SmallGroupLeadership <= leadership
          ) {
            g2TroopsCount = g2TroopsCount + g2NeededToKillOneMob
            // console.log('added g2 --------------------', g2TroopsCount)
          }
        } else {
          // uses g1 as sacrifice, check health based on this
          g2TroopsCount = g2TroopsCount + 1
          sacrificeGroupHealth = g2TroopsCount * rider2.hp

          // console.log('sacrificegrouphealth: ', sacrificeGroupHealth)
        }
      }

      if (useG3Rider) {
        if (useSacrifices || useG1Rider || useG2Rider) {
          const g3SmallGroupLeadership = g3NeededToKillOneMob * rider3.LEADERSHIP
          const g3SmallGroupHealth = g3NeededToKillOneMob * rider3.hp
          const g3GroupTotalHealth = g3TroopsCount * rider3.hp
          // console.log(
          //   'g3smallGroupHealth: ',
          //   g3SmallGroupHealth,
          //   'g3GroupTotalHealth: ',
          //   g3GroupTotalHealth
          // )
          // console.log('g3 total health', g3GroupTotalHealth + g3SmallGroupHealth)
          if (
            g3GroupTotalHealth + g3SmallGroupHealth < sacrificeGroupHealth &&
            totalLeadership + g3SmallGroupLeadership <= leadership
          ) {
            g3TroopsCount = g3TroopsCount + g3NeededToKillOneMob
            // console.log('added g3 --------------------', g3TroopsCount)
          }
        } else {
          // uses g1 as sacrifice, check health based on this
          g3TroopsCount = g3TroopsCount + 1
          sacrificeGroupHealth = g3TroopsCount * rider3.hp

          // console.log('sacrificegrouphealth: ', sacrificeGroupHealth)
        }
      }

      if (useG4Rider) {
        if (useSacrifices || useG1Rider || useG2Rider || useG3Rider) {
          const g4SmallGroupLeadership = g4NeededToKillOneMob * rider4.LEADERSHIP
          const g4SmallGroupHealth = g4NeededToKillOneMob * rider4.hp
          const g4GroupTotalHealth = g4TroopsCount * rider4.hp
          // console.log(
          //   'g4smallGroupHealth: ',
          //   g4SmallGroupHealth,
          //   'g4GroupTotalHealth: ',
          //   g4GroupTotalHealth
          // )
          // console.log('g4 total health', g4GroupTotalHealth + g4SmallGroupHealth)
          if (
            g4GroupTotalHealth + g4SmallGroupHealth < sacrificeGroupHealth &&
            totalLeadership + g4SmallGroupLeadership <= leadership
          ) {
            g4TroopsCount = g4TroopsCount + g4NeededToKillOneMob
            // console.log('added g4 --------------------', g4TroopsCount)
          }
        } else {
          // uses g1 as sacrifice, check health based on this
          g4TroopsCount = g4TroopsCount + 1
          sacrificeGroupHealth = g4TroopsCount * rider4.hp

          // console.log('sacrificegrouphealth: ', sacrificeGroupHealth)
        }
      }

      if (useG5Rider) {
        if (useSacrifices || useG1Rider || useG2Rider || useG3Rider || useG4Rider) {
          const g5SmallGroupLeadership = g5NeededToKillOneMob * rider5.LEADERSHIP
          const g5SmallGroupHealth = g5NeededToKillOneMob * rider5.hp
          const g5GroupTotalHealth = g5TroopsCount * rider5.hp
          // console.log(
          //   'g5smallGroupHealth: ',
          //   g5SmallGroupHealth,
          //   'g5GroupTotalHealth: ',
          //   g5GroupTotalHealth
          // )
          // console.log('g5 total health', g5GroupTotalHealth + g5SmallGroupHealth)
          if (
            g5GroupTotalHealth + g5SmallGroupHealth < sacrificeGroupHealth &&
            totalLeadership + g5SmallGroupLeadership <= leadership
          ) {
            g5TroopsCount = g5TroopsCount + g5NeededToKillOneMob
            // console.log('added g5 --------------------', g5TroopsCount)
          }
        } else {
          // uses g1 as sacrifice, check health based on this
          g5TroopsCount = g5TroopsCount + 1
          sacrificeGroupHealth = g5TroopsCount * rider5.hp

          // console.log('sacrificegrouphealth: ', sacrificeGroupHealth)
        }
      }

      totalLeadership = getTotalLeadershipConsumed(
        g1TroopsCount,
        g2TroopsCount,
        g3TroopsCount,
        g4TroopsCount,
        g5TroopsCount,
        sacrificeTroopsCount
      )

      if (totalLeadership > leadership) break
      if (lastLeadershipCalculated === totalLeadership) {
        console.log('no changes to leadership, ending')
        break
      }

      // hold the previous value before overflow
      finalSacrificeTroopsCount = sacrificeTroopsCount
      finalG1TroopsCount = g1TroopsCount
      finalG2TroopsCount = g2TroopsCount
      finalG3TroopsCount = g3TroopsCount
      finalG4TroopsCount = g4TroopsCount
      finalG5TroopsCount = g5TroopsCount

      lastLeadershipCalculated = totalLeadership

      if (totalLeadership > leadership) break
      console.log('loop protection', maxLoop)
      if (maxLoop-- < 1) break
    }

    // console.log(
    //   'g1',
    //   finalG1TroopsCount,
    //   g1NeededToKillOneMob,
    //   finalG1TroopsCount / g1NeededToKillOneMob
    // )
    // console.log(
    //   'g2',
    //   finalG2TroopsCount,
    //   g2NeededToKillOneMob,
    //   finalG2TroopsCount / g2NeededToKillOneMob
    // )
    // console.log(
    //   'g3',
    //   finalG3TroopsCount,
    //   g3NeededToKillOneMob,
    //   finalG3TroopsCount / g3NeededToKillOneMob
    // )
    // console.log(
    //   'g4',
    //   finalG4TroopsCount,
    //   g4NeededToKillOneMob,
    //   finalG4TroopsCount / g4NeededToKillOneMob
    // )
    // console.log(
    //   'g5',
    //   finalG5TroopsCount,
    //   g5NeededToKillOneMob,
    //   finalG5TroopsCount / g5NeededToKillOneMob
    // )

    setRider1({
      groupCount: finalG1TroopsCount / g1NeededToKillOneMob,
      leadership: finalG1TroopsCount * rider1.LEADERSHIP,
      minCount: g1NeededToKillOneMob,
      maxCount: finalG1TroopsCount
    })
    setRider2({
      groupCount: finalG2TroopsCount / g2NeededToKillOneMob,
      leadership: finalG2TroopsCount * rider2.LEADERSHIP,
      minCount: g2NeededToKillOneMob,
      maxCount: finalG2TroopsCount
    })
    setRider3({
      groupCount: finalG3TroopsCount / g3NeededToKillOneMob,
      leadership: finalG3TroopsCount * rider3.LEADERSHIP,
      minCount: g3NeededToKillOneMob,
      maxCount: finalG3TroopsCount
    })
    setRider4({
      groupCount: finalG4TroopsCount / g4NeededToKillOneMob,
      leadership: finalG4TroopsCount * rider4.LEADERSHIP,
      minCount: g4NeededToKillOneMob,
      maxCount: finalG4TroopsCount
    })
    setRider5({
      groupCount: finalG5TroopsCount / g5NeededToKillOneMob,
      leadership: finalG5TroopsCount * rider5.LEADERSHIP,
      minCount: g5NeededToKillOneMob,
      maxCount: finalG5TroopsCount
    })

    // console.log('sacrifices', sacrificeGroupsCount)
    setSacrifice({
      groupCount: finalSacrificeTroopsCount, // total of units, not groups
      leadership: finalSacrificeTroopsCount * sacrifice.LEADERSHIP,
      minCount: sacrificesNeededToKillOneMob,
      maxCount: finalSacrificeTroopsCount
    })
    if (!useMaxSacrifices) {
      setMaxSacrifices(finalSacrificeTroopsCount)
    }
  }

  const handleDecGroupCount = (group: string) => {
    if (group === 'xx') {
      // sacrifices, count 1 by 1
      // const groupCount = sacrifice.groupCount - 1
      // const leadership = sacrifice.LEADERSHIP * groupCount
      // const troopsCount = sacrifice.maxCount - 1
      // setSacrifice({ groupCount, leadership, maxCount: troopsCount })
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
      // const groupCount = sacrifice.groupCount + 1
      // const leadership = sacrifice.LEADERSHIP * groupCount
      // const troopsCount = sacrifice.maxCount + 1
      // setSacrifice({ groupCount, leadership, maxCount: troopsCount })
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

  const totalSacrificeHP = sacrifice.hp * sacrifice.maxCount
  const totalG1HP = rider1.hp * rider1.maxCount
  const totalG2HP = rider2.hp * rider2.maxCount
  const totalG3HP = rider3.hp * rider3.maxCount
  const totalG4HP = rider4.hp * rider4.maxCount
  const totalG5HP = rider5.hp * rider5.maxCount

  let maxHealthAllowed = totalSacrificeHP
  let isG1HealthValueWrong = totalG1HP >= maxHealthAllowed
  let isG2HealthValueWrong = totalG2HP >= maxHealthAllowed
  let isG3HealthValueWrong = totalG3HP >= maxHealthAllowed
  let isG4HealthValueWrong = totalG4HP >= maxHealthAllowed
  let isG5HealthValueWrong = totalG5HP >= maxHealthAllowed

  if (!useSacrifices) {
    if (useG1Rider) {
      maxHealthAllowed = totalG1HP
      isG1HealthValueWrong = false
      isG2HealthValueWrong = totalG2HP >= maxHealthAllowed
      isG3HealthValueWrong = totalG3HP >= maxHealthAllowed
      isG4HealthValueWrong = totalG4HP >= maxHealthAllowed
      isG5HealthValueWrong = totalG5HP >= maxHealthAllowed
    } else {
      if (useG2Rider) {
        maxHealthAllowed = totalG2HP
        isG1HealthValueWrong = false
        isG2HealthValueWrong = false
        isG3HealthValueWrong = totalG3HP >= maxHealthAllowed
        isG4HealthValueWrong = totalG4HP >= maxHealthAllowed
        isG5HealthValueWrong = totalG5HP >= maxHealthAllowed
      } else {
        if (useG3Rider) {
          maxHealthAllowed = totalG3HP
          isG1HealthValueWrong = false
          isG2HealthValueWrong = false
          isG3HealthValueWrong = false
          isG4HealthValueWrong = totalG4HP >= maxHealthAllowed
          isG5HealthValueWrong = totalG5HP >= maxHealthAllowed
        } else {
          if (useG4Rider) {
            maxHealthAllowed = totalG4HP
            isG1HealthValueWrong = false
            isG2HealthValueWrong = false
            isG3HealthValueWrong = false
            isG4HealthValueWrong = false
            isG5HealthValueWrong = totalG5HP >= maxHealthAllowed
          } else {
            if (useG5Rider) {
              maxHealthAllowed = totalG5HP

              isG1HealthValueWrong = false
              isG2HealthValueWrong = false
              isG3HealthValueWrong = false
              isG4HealthValueWrong = false
              isG5HealthValueWrong = false
            }
          }
        }
      }
    }
  }

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
            <option value='2'>Doomsday/Necromancer</option>
            <option value='4'>JacksReturn/Scarecrow</option>
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
                <div className='card'>
                  <label>use limit</label>
                  <input
                    type='checkbox'
                    checked={useMaxSacrifices}
                    onChange={() => {
                      setUseMaxSacrifices(!useMaxSacrifices)
                    }}
                  />
                </div>
                <div className='card'>
                  <span>Count</span> {maxSacrifices}
                </div>
                {/* {sacrifice.groupCount} */}
                <button
                  className='btnGroupCount'
                  onClick={() => {
                    if (useMaxSacrifices) {
                      if (maxSacrifices > 1) {
                        setMaxSacrifices(n => n - 10)
                      }
                    }
                  }}
                >
                  -10
                </button>
                <button
                  className='btnGroupCount'
                  onClick={() => {
                    if (useMaxSacrifices) {
                      if (maxSacrifices > 1) {
                        setMaxSacrifices(n => n - 1)
                      }
                    }
                  }}
                >
                  -1
                </button>
                <button
                  className='btnGroupCount'
                  onClick={() => {
                    if (useMaxSacrifices) {
                      setMaxSacrifices(n => n + 1)
                    }
                  }}
                >
                  +1
                </button>
                <button
                  className='btnGroupCount'
                  onClick={() => {
                    if (useMaxSacrifices) {
                      setMaxSacrifices(n => n + 10)
                    }
                  }}
                >
                  +10
                </button>
              </td>
              {showHealthData && <td>{totalSacrificeHP.toFixed(0)}</td>}
              {showStrengthData && <td>{(sacrifice.str * sacrifice.maxCount).toFixed(0)}</td>}
            </tr>

            <tr style={{ backgroundColor: '#115511', color: 'white', fontWeight: 'bold' }}>
              <td>Use</td>

              {showStrengthData && <td>Str + bonus</td>}
              {showHealthData && <td>Health + bonus</td>}
              <td>Min setup</td>
              <td>Max setup</td>
              <td>Groups count</td>
              {showHealthData && <td>Stack Health</td>}
              {showStrengthData && <td>Stack Strength</td>}
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
                {useG1Rider && (
                  <>
                    {rider1.groupCount.toFixed(0)}
                    <button className='btnGroupCount' onClick={() => handleDecGroupCount('g1')}>
                      -
                    </button>
                    <button className='btnGroupCount' onClick={() => handleIncGroupCount('g1')}>
                      +
                    </button>
                  </>
                )}
              </td>
              {showHealthData && (
                <td className={classNames({ 'red-text': isG1HealthValueWrong })}>
                  {totalG1HP.toFixed(0)}
                </td>
              )}
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
                {' '}
                {useG2Rider && (
                  <>
                    {rider2.groupCount.toFixed(0)}{' '}
                    <button className='btnGroupCount' onClick={() => handleDecGroupCount('g2')}>
                      -
                    </button>
                    <button className='btnGroupCount' onClick={() => handleIncGroupCount('g2')}>
                      +
                    </button>
                  </>
                )}
              </td>
              {showHealthData && (
                <td className={classNames({ 'red-text': isG2HealthValueWrong })}>
                  {totalG2HP.toFixed(0)}
                </td>
              )}
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
                {useG3Rider && (
                  <>
                    {rider3.groupCount.toFixed(0)}{' '}
                    <button className='btnGroupCount' onClick={() => handleDecGroupCount('g3')}>
                      -
                    </button>
                    <button className='btnGroupCount' onClick={() => handleIncGroupCount('g3')}>
                      +
                    </button>
                  </>
                )}
              </td>
              {showHealthData && (
                <td className={classNames({ 'red-text': isG3HealthValueWrong })}>
                  {totalG3HP.toFixed(0)}
                </td>
              )}
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
                {useG4Rider && (
                  <>
                    {rider4.groupCount.toFixed(0)}{' '}
                    <button className='btnGroupCount' onClick={() => handleDecGroupCount('g4')}>
                      -
                    </button>
                    <button className='btnGroupCount' onClick={() => handleIncGroupCount('g4')}>
                      +
                    </button>
                  </>
                )}
              </td>
              {showHealthData && (
                <td className={classNames({ 'red-text': isG4HealthValueWrong })}>
                  {totalG4HP.toFixed(0)}
                </td>
              )}
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
                {useG5Rider && (
                  <>
                    {rider5.groupCount.toFixed(0)}{' '}
                    <button className='btnGroupCount' onClick={() => handleDecGroupCount('g5')}>
                      -
                    </button>
                    <button className='btnGroupCount' onClick={() => handleIncGroupCount('g5')}>
                      +
                    </button>
                  </>
                )}
              </td>
              {showHealthData && (
                <td className={classNames({ 'red-text': isG5HealthValueWrong })}>
                  {totalG5HP.toFixed(0)}
                </td>
              )}
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

        {isG1HealthValueWrong ||
          isG2HealthValueWrong ||
          isG3HealthValueWrong ||
          isG4HealthValueWrong ||
          (isG5HealthValueWrong && (
            <p style={{ color: 'red' }}>too much troops, it surpases the sacrifices stack Health</p>
          ))}
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
          <div className='card'>
            <label>Sacrifice HP Bonus </label>
            <input
              type='number'
              value={sacrificeBonusHP}
              step={0.1}
              onChange={setAndSaveSacrificeBonusHp}
              required
            />
          </div>
        </div>
      </div>

      <button className='gobtn' onClick={calcHP}>
        CALCULATE (hp)
      </button>
      <button onClick={calcSTR}>CALCULATE (str)</button>

      <div className='info'>
        <div>
          <ul style={{ color: 'pink' }}>
            <li>
              The cheapest group should go above, they might hit, or get killed at first round
            </li>
            <li>Higher health attack first</li>
            <li>
              Send sacrifices first (the stack with highest hp) ie: 500k health for the whole stack
            </li>
            <li>after sacrifices, set all rest of eachs stack with lower health, ie: 490k</li>
            <li>There are 4 big groups, guards(3),specialist(2),engineer(1),monster(4)</li>
            <li>Each group have subgroups</li>
            <li>Each subgroups have its own bonus value, im handling only riders guards bonus</li>
            <li>
              Put more points on strength, or max strength first, leave health after you maxed
              strength,
            </li>
            <li>
              you will lose your troops anyway (on events like doomsday), so better to kill the max
              you can, and strength determines how hard you hit
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
