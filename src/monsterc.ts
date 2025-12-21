import { objBuilder, objectDB, stackBuilder } from './citadelData'
import { createCommonMob } from './monsterb'

// deathRiderIII, werewolfII, cursedDendroidVI,bullRiderV
objectDB.witchDoctorI = objBuilder({
  name: 'witchDoctorI',
  category: 'ranged',
  BASESTR: 150,
  BASEHP: 450,
  vsMeleePercent: 25
})
objectDB.skeleton = objBuilder({
  name: 'skeleton',
  category: 'melee',
  BASESTR: 56,
  BASEHP: 168,
  vsMountedPercent: 15
})
objectDB.hubiI = objBuilder({
  name: 'hubiI',
  category: 'ranged',
  BASESTR: 110000,
  BASEHP: 320000,
  vsFlyingPercent: 70
})
objectDB.huracanI = objBuilder({
  name: 'huracanI',
  category: 'mounted',
  BASESTR: 180_000,
  BASEHP: 550_000,
  vsRangedPercent: 75
})
objectDB.jaguarRiderII = objBuilder({
  name: 'jaguarRiderII',
  category: 'mounted',
  BASESTR: 270,
  BASEHP: 810,
  vsRangedPercent: 30
})

//1
//2

export const mobCommonCursedSquad3 = createCommonMob('Cursed', 3, '270', [
  stackBuilder('0', objectDB.skeleton, 110)
])
//4
//5
//6
//7
export const mobCommonCursedSquad8 = createCommonMob('Cursed', 8, '3.1k', [
  stackBuilder('0', objectDB.witchDoctorI, 330)
])
//9
//10
//11
export const mobCommonCursedSquad12 = createCommonMob('Cursed', 12, '16.6k', [
  stackBuilder('0', objectDB.jaguarRiderII, 550),
  stackBuilder('1', objectDB.skeleton, 1100)
])
//13
export const mobCommonCursedSquad14 = createCommonMob('Cursed', 14, '54k', [
  stackBuilder('0', objectDB.jaguarRiderII, 1500),
  stackBuilder('1', objectDB.skeleton, 1200)
])
//15
export const mobCommonCursedSquad16 = createCommonMob('Cursed', 16, '129k', [
  stackBuilder('0', objectDB.wereWolfII, 2400),
  stackBuilder('1', objectDB.witchDoctorI, 2400)
])
//17
export const mobCommonCursedSquad18 = createCommonMob('Cursed', 18, '246k', [
  stackBuilder('0', objectDB.wereWolfII, 4200),
  stackBuilder('1', objectDB.jaguarRiderII, 2400)
])
//19
export const mobCommonCursedSquad20 = createCommonMob('Cursed', 20, '468k', [
  stackBuilder('0', objectDB.jaguarRiderII, 4100),
  stackBuilder('1', objectDB.witchDoctorI, 9700)
])
export const mobCommonCursedSquad21 = createCommonMob('Cursed', 21, '820k', [
  stackBuilder('0', objectDB.jaguarRiderII, 16_000),
  stackBuilder('1', objectDB.witchDoctorI, 12_000)
])
export const mobCommonCursedSquad22 = createCommonMob('Cursed', 22, '1.37m', [
  stackBuilder('0', objectDB.jaguarRiderII, 25_000),
  stackBuilder('1', objectDB.wereWolfII, 8100)
])

export const mobCommonCursedSquad23 = createCommonMob('Cursed', 23, '2.29m', [
  stackBuilder('0', objectDB.wereWolfII, 30_000),
  stackBuilder('1', objectDB.jaguarRiderII, 17000)
])

export const mobCommonCursedSquad24 = createCommonMob('Cursed', 24, '3.81m', [
  stackBuilder('0', objectDB.deathRiderIII, 5300),
  stackBuilder('1', objectDB.skeleton, 130_000)
])

export const mobCommonCursedSquad25 = createCommonMob('Cursed', 25, '6.36M', [
  stackBuilder('0', objectDB.deathRiderIII, 8400),
  stackBuilder('1', objectDB.witchDoctorI, 77_000)
])

export const mobCommonCursedSquad26 = createCommonMob('Cursed', 26, '10.2M', [
  stackBuilder('0', objectDB.deathRiderIII, 13000),
  stackBuilder('1', objectDB.wereWolfII, 49_000)
])

export const mobCommonCursedSquad27 = createCommonMob('Cursed', 27, '15.9M', [
  stackBuilder('0', objectDB.deathRiderIII, 19_000),
  stackBuilder('1', objectDB.skeleton, 460_000)
])
export const mobCommonCursedSquad28 = createCommonMob('Cursed', 28, '24.8M', [
  stackBuilder('0', objectDB.deathRiderIII, 28_000),
  stackBuilder('1', objectDB.witchDoctorI, 260_000)
])
export const mobCommonCursedSquad29 = createCommonMob('Cursed', 29, '38.6M', [
  stackBuilder('0', objectDB.deathRiderIII, 41_000),
  stackBuilder('1', objectDB.wereWolfII, 160_000)
])
export const mobCommonCursedSquad30 = createCommonMob('Cursed', 30, '60M', [
  stackBuilder('0', objectDB.deathRiderIII, 61_000),
  stackBuilder('1', objectDB.witchDoctorI, 560_000)
])

export const mobCommonCursedSquad31 = createCommonMob('Cursed', 31, '87.5M', [
  stackBuilder('0', objectDB.deathRiderIII, 84_000),
  stackBuilder('1', objectDB.witchDoctorI, 770_000)
])
export const mobCommonCursedSquad32 = createCommonMob('Cursed', 32, '122M', [
  stackBuilder('0', objectDB.deathRiderIII, 110_000),
  stackBuilder('1', objectDB.wereWolfII, 420_000)
])
export const mobCommonCursedSquad33 = createCommonMob('Cursed', 33, '169M', [
  stackBuilder('0', objectDB.deathRiderIII, 150_000),
  stackBuilder('1', objectDB.skeleton, 3_000_000)
])
export const mobCommonCursedSquad34 = createCommonMob('Cursed', 34, '235M', [
  stackBuilder('0', objectDB.deathRiderIII, 190_000),
  stackBuilder('1', objectDB.witchDoctorI, 1_800_000)
])
export const mobCommonCursedSquad35 = createCommonMob('Cursed', 35, '327M', [
  stackBuilder('0', objectDB.deathRiderIII, 260_000),
  stackBuilder('1', objectDB.wereWolfII, 970_000)
])
export const mobCommonCursedSquad36 = createCommonMob('Cursed', 36, '491M', [
  stackBuilder('0', objectDB.hubiI, 11_000),
  stackBuilder('1', objectDB.cursedDendroidVI, 4700)
])
export const mobCommonCursedSquad37 = createCommonMob('Cursed', 37, '774M', [
  stackBuilder('0', objectDB.huracanI, 9500),
  stackBuilder('1', objectDB.hubiI, 7000)
])

// 38 no hay
export const mobCommonCursedSquad39 = createCommonMob('Cursed', 39, '1.22b', [
  stackBuilder('0', objectDB.huracanI, 24_000),
  stackBuilder('1', objectDB.cursedDragonVII, 3500)
])

export const mobCommonCursedSquad40 = createCommonMob('Cursed', 40, '1.93b', [
  stackBuilder('0', objectDB.huracanI, 21_000),
  stackBuilder('1', objectDB.cursedDragonVII, 5300)
])

export const mobCommonCursedSquad41 = createCommonMob('Cursed', 41, '3.04b', [
  stackBuilder('0', objectDB.hubiI, 55_000),
  stackBuilder('1', objectDB.bullRiderV, 85_000)
])
export const mobCommonCursedSquad42 = createCommonMob('Cursed', 42, '4.51b', [
  stackBuilder('0', objectDB.huracanI, 45_000),
  stackBuilder('1', objectDB.cursedDendroidVI, 33_000)
])
// 43 no hay
export const mobCommonCursedSquad44 = createCommonMob('Cursed', 44, '6.43b', [
  stackBuilder('0', objectDB.hubiI, 100_000),
  stackBuilder('1', objectDB.cursedDendroidVI, 45_000)
])
export const mobCommonCursedSquad45 = createCommonMob('Cursed', 45, '9.16b', [
  stackBuilder('0', objectDB.huracanI, 82_000),
  stackBuilder('1', objectDB.hubiI, 60_000)
])
