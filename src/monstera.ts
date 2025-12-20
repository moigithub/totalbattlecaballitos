//barbarian
// inferno

import { Citadel, objBuilder, objectDB, stackBuilder } from './citadelData'
import { vp_B, vp_K, vp_M } from './monsters'

objectDB.fiend = objBuilder({
  name: 'fiend',
  category: 'melee',
  BASESTR: 28,
  BASEHP: 84,
  vsMountedPercent: 15
})
objectDB.magogI = objBuilder({
  name: 'magogI',
  category: 'ranged',
  BASESTR: 50,
  BASEHP: 150,
  vsMountedPercent: 30
})
objectDB.hornedDemonII = objBuilder({
  name: 'hornedDemonII',
  category: 'melee',
  BASESTR: 720,
  BASEHP: 2160,
  vsMountedPercent: 40
})
objectDB.fireHorseRiderIII = objBuilder({
  name: 'fireHorseRiderIII',
  category: 'mounted',
  BASESTR: 4100,
  BASEHP: 12300,
  vsRangedPercent: 50
})
objectDB.overseerIII = objBuilder({
  name: 'overseerIII',
  category: 'ranged',
  BASESTR: 6500,
  BASEHP: 19500,
  vsMeleePercent: 70
})
objectDB.fireWitchI = objBuilder({
  name: 'fireWitchI',
  category: 'flying',
  BASESTR: 90_000,
  BASEHP: 280_000,
  vsMeleePercent: 70
})
objectDB.fireLordVII = objBuilder({
  name: 'fireLordVII',
  category: 'ranged',
  BASESTR: 560_000,
  BASEHP: 1_680_000,
  vsMeleePercent: 80,
  vsDragonPercent: 45
})
objectDB.volcanicGolemI = objBuilder({
  name: 'volcanicGolemI',
  category: 'ranged',
  BASESTR: 170_000,
  BASEHP: 510_000,
  vsFlyingPercent: 60
})
objectDB.ifritV = objBuilder({
  name: 'ifritV',
  category: 'flying',
  BASESTR: 44_000,
  BASEHP: 132_000,
  vsMeleePercent: 70,
  vsDragonPercent: 40
})

export const mobCommonInfernoSquad5: Citadel = {
  id: 'mobCommonInfernoSquad5',
  vp: 720,
  svp: '720',
  stacks: [stackBuilder('0', objectDB.fiend, 500)]
}

export const mobCommonInfernoSquad10: Citadel = {
  id: 'mobCommonInfernoSquad10',
  vp: 8.1 * vp_K,
  svp: '8.1K',
  stacks: [stackBuilder('0', objectDB.magogI, 2300)]
}

export const mobCommonInfernoSquad13: Citadel = {
  id: 'mobCommonInfernoSquad13',
  vp: 26.7 * vp_K,
  svp: '26.7K',
  stacks: [stackBuilder('0', objectDB.magogI, 4500), stackBuilder('1', objectDB.fiend, 3400)]
}
export const mobCommonInfernoSquad15: Citadel = {
  id: 'mobCommonInfernoSquad15',
  vp: 88 * vp_K,
  svp: '88K',
  stacks: [stackBuilder('0', objectDB.hornedDemonII, 850), stackBuilder('1', objectDB.fiend, 9400)]
}
export const mobCommonInfernoSquad17: Citadel = {
  id: 'mobCommonInfernoSquad17',
  vp: 167 * vp_K,
  svp: '167K',
  stacks: [
    stackBuilder('0', objectDB.fireHorseRiderIII, 260),
    stackBuilder('1', objectDB.hornedDemonII, 640)
  ]
}
export const mobCommonInfernoSquad19: Citadel = {
  id: 'mobCommonInfernoSquad19',
  vp: 318 * vp_K,
  svp: '318K',
  stacks: [
    stackBuilder('0', objectDB.hornedDemonII, 2600),
    stackBuilder('1', objectDB.fiend, 29000)
  ]
}
export const mobCommonInfernoSquad20: Citadel = {
  id: 'mobCommonInfernoSquad20',
  vp: 605 * vp_K,
  svp: '605K',
  stacks: [
    stackBuilder('0', objectDB.hornedDemonII, 4500),
    stackBuilder('1', objectDB.magogI, 28000)
  ]
}
export const mobCommonInfernoSquad21: Citadel = {
  id: 'mobCommonInfernoSquad21',
  vp: 1 * vp_M,
  svp: '1M',
  stacks: [
    stackBuilder('0', objectDB.hornedDemonII, 7200),
    stackBuilder('1', objectDB.magogI, 44000)
  ]
}
export const mobCommonInfernoSquad22: Citadel = {
  id: 'mobCommonInfernoSquad22',
  vp: 1.68 * vp_M,
  svp: '1.68M',
  stacks: [
    stackBuilder('0', objectDB.hornedDemonII, 11000),
    stackBuilder('1', objectDB.fiend, 120000)
  ]
}
export const mobCommonInfernoSquad23: Citadel = {
  id: 'mobCommonInfernoSquad23',
  vp: 2.81 * vp_M,
  svp: '2.81M',
  stacks: [
    stackBuilder('0', objectDB.fireHorseRiderIII, 3100),
    stackBuilder('1', objectDB.magogI, 110_000)
  ]
}
export const mobCommonInfernoSquad24: Citadel = {
  id: 'mobCommonInfernoSquad24',
  vp: 4.68 * vp_M,
  svp: '4.68M',
  stacks: [
    stackBuilder('0', objectDB.fireHorseRiderIII, 5000),
    stackBuilder('1', objectDB.fiend, 310_000)
  ]
}
export const mobCommonInfernoSquad25: Citadel = {
  id: 'mobCommonInfernoSquad25',
  vp: 7.8 * vp_M,
  svp: '7.8M',
  stacks: [
    stackBuilder('0', objectDB.overseerIII, 5000),
    stackBuilder('1', objectDB.magogI, 280_000)
  ]
}
export const mobCommonInfernoSquad26: Citadel = {
  id: 'mobCommonInfernoSquad26',
  vp: 12.2 * vp_M,
  svp: '12.2M',
  stacks: [
    stackBuilder('0', objectDB.fireHorseRiderIII, 8300),
    stackBuilder('1', objectDB.overseerIII, 5300)
  ]
}
export const mobCommonInfernoSquad27: Citadel = {
  id: 'mobCommonInfernoSquad27',
  vp: 19 * vp_M,
  svp: '19M',
  stacks: [
    stackBuilder('0', objectDB.overseerIII, 11_000),
    stackBuilder('1', objectDB.fireHorseRiderIII, 7400)
  ]
}
export const mobCommonInfernoSquad28: Citadel = {
  id: 'mobCommonInfernoSquad28',
  vp: 29.6 * vp_M,
  svp: '29.6M',
  stacks: [
    stackBuilder('0', objectDB.fireHorseRiderIII, 26_000),
    stackBuilder('1', objectDB.magogI, 900_000)
  ]
}
export const mobCommonInfernoSquad29: Citadel = {
  id: 'mobCommonInfernoSquad29',
  vp: 46.1 * vp_M,
  svp: '46.1M',
  stacks: [
    stackBuilder('0', objectDB.overseerIII, 24_000),
    stackBuilder('1', objectDB.hornedDemonII, 92_000)
  ]
}
export const mobCommonInfernoSquad30: Citadel = {
  id: 'mobCommonInfernoSquad30',
  vp: 72 * vp_M,
  svp: '72M',
  stacks: [
    stackBuilder('0', objectDB.fireHorseRiderIII, 56_000),
    stackBuilder('1', objectDB.fiend, 3_500_000)
  ]
}

export const mobCommonInfernoSquad31: Citadel = {
  id: 'mobCommonInfernoSquad31',
  vp: 100 * vp_M,
  svp: '100M',
  stacks: [
    stackBuilder('0', objectDB.fireHorseRiderIII, 53_000),
    stackBuilder('1', objectDB.overseerIII, 33_000)
  ]
}
export const mobCommonInfernoSquad32: Citadel = {
  id: 'mobCommonInfernoSquad32',
  vp: 139 * vp_M,
  svp: '139M',
  stacks: [
    stackBuilder('0', objectDB.fireHorseRiderIII, 97_000),
    stackBuilder('1', objectDB.hornedDemonII, 240_000)
  ]
}
export const mobCommonInfernoSquad33: Citadel = {
  id: 'mobCommonInfernoSquad33',
  vp: 193 * vp_M,
  svp: '193M',
  stacks: [
    stackBuilder('0', objectDB.fireHorseRiderIII, 92_000),
    stackBuilder('1', objectDB.overseerIII, 58_000)
  ]
}
export const mobCommonInfernoSquad34: Citadel = {
  id: 'mobCommonInfernoSquad34',
  vp: 268 * vp_M,
  svp: '268M',
  stacks: [
    stackBuilder('0', objectDB.fireHorseRiderIII, 120_000),
    stackBuilder('1', objectDB.overseerIII, 76_000)
  ]
}
export const mobCommonInfernoSquad35: Citadel = {
  id: 'mobCommonInfernoSquad35',
  vp: 373 * vp_M,
  svp: '373M',
  stacks: [
    stackBuilder('0', objectDB.overseerIII, 140_000),
    stackBuilder('1', objectDB.fireHorseRiderIII, 96_000)
  ]
}
export const mobCommonInfernoSquad37: Citadel = {
  id: 'mobCommonInfernoSquad37',
  vp: 585 * vp_M,
  svp: '585M',
  stacks: [
    stackBuilder('0', objectDB.fireWitchI, 15_000),
    stackBuilder('1', objectDB.fireLordVII, 1_000)
  ]
}
export const mobCommonInfernoSquad38: Citadel = {
  id: 'mobCommonInfernoSquad38',
  vp: 915 * vp_M,
  svp: '915M',
  stacks: [
    stackBuilder('0', objectDB.volcanicGolemI, 12_000),
    stackBuilder('1', objectDB.ifritV, 20_000)
  ]
}
export const mobCommonInfernoSquad39: Citadel = {
  id: 'mobCommonInfernoSquad39',
  vp: 1.43 * vp_B,
  svp: '1.43M',
  stacks: [
    stackBuilder('0', objectDB.fireWitchI, 33_000),
    stackBuilder('1', objectDB.fireLordVII, 2_300)
  ]
}
export const mobCommonInfernoSquad40: Citadel = {
  id: 'mobCommonInfernoSquad40',
  vp: 2.24 * vp_B,
  svp: '2.24M',
  stacks: [
    stackBuilder('0', objectDB.volcanicGolemI, 26_000),
    stackBuilder('1', objectDB.ifritV, 44_000)
  ]
}
export const mobCommonInfernoSquad42: Citadel = {
  id: 'mobCommonInfernoSquad42',
  vp: 3.52 * vp_B,
  svp: '3.52M',
  stacks: [
    stackBuilder('0', objectDB.fireWitchI, 72_000),
    stackBuilder('1', objectDB.fireLordVII, 5_100)
  ]
}
export const mobCommonInfernoSquad43: Citadel = {
  id: 'mobCommonInfernoSquad43',
  vp: 5.02 * vp_B,
  svp: '5.02M',
  stacks: [
    stackBuilder('0', objectDB.volcanicGolemI, 53_000),
    stackBuilder('1', objectDB.ifritV, 88_000)
  ]
}
export const mobCommonInfernoSquad44: Citadel = {
  id: 'mobCommonInfernoSquad44',
  vp: 7.18 * vp_B,
  svp: '7.18M',
  stacks: [
    stackBuilder('0', objectDB.fireWitchI, 130_000),
    stackBuilder('1', objectDB.fireLordVII, 6_400)
  ]
}
export const mobCommonInfernoSquad45: Citadel = {
  id: 'mobCommonInfernoSquad45',
  vp: 10.3 * vp_B,
  svp: '10.3M',
  stacks: [
    stackBuilder('0', objectDB.volcanicGolemI, 98_000),
    stackBuilder('1', objectDB.ifritV, 160_000)
  ]
}

// undead ------------------------------------------

// cursed ------------------------------------------
// elves ------------------------------------------
