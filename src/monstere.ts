import { objBuilder, objectDB, stackBuilder } from './citadelData'
import { createCommonMob } from './monsterb'

objectDB.owlBearI = objBuilder({
  name: 'owlBearI',
  category: 'melee',
  BASESTR: 140_000,
  BASEHP: 410_000,
  vsMountedPercent: 65
})

objectDB.dryadI = objBuilder({
  name: 'dryadI',
  category: 'ranged',
  BASESTR: 200_000,
  BASEHP: 600_000,
  vsFlyingPercent: 75
})

//1
export const mobCommonElfSquad2 = createCommonMob('Elf', 2, '170', [
  stackBuilder('0', objectDB.dwarf, 140)
])
//3 - 6

export const mobCommonElfSquad7 = createCommonMob('Elf', 7, '1.9k', [
  stackBuilder('0', objectDB.elvenArcherI, 330)
])

//8-10

export const mobCommonElfSquad11 = createCommonMob('Elf', 11, '13.1k', [
  stackBuilder('0', objectDB.elvenArcherI, 1200),
  stackBuilder('1', objectDB.dwarf, 1900)
])
//12-13

export const mobCommonElfSquad14 = createCommonMob('Elf', 14, '42.9k', [
  stackBuilder('0', objectDB.druidII, 370),
  stackBuilder('1', objectDB.dwarf, 5100)
])
//15
export const mobCommonElfSquad16 = createCommonMob('Elf', 16, '113k', [
  stackBuilder('0', objectDB.druidII, 850),
  stackBuilder('1', objectDB.elvenArcherI, 3300)
])
// 17
export const mobCommonElfSquad18 = createCommonMob('Elf', 18, '216k', [
  stackBuilder('0', objectDB.druidII, 1500),
  stackBuilder('1', objectDB.dwarf, 20_000)
])
export const mobCommonElfSquad19 = createCommonMob('Elf', 19, '411k', [
  stackBuilder('0', objectDB.centaurIII, 640),
  stackBuilder('1', objectDB.elvenArcherI, 17_000)
])
// 20
export const mobCommonElfSquad21 = createCommonMob('Elf', 21, '740k', [
  stackBuilder('0', objectDB.druidII, 4400),
  stackBuilder('1', objectDB.elvenArcherI, 17_000)
])
export const mobCommonElfSquad22 = createCommonMob('Elf', 22, '1.24m', [
  stackBuilder('0', objectDB.centaurIII, 1900),
  stackBuilder('1', objectDB.druidII, 4400)
])
export const mobCommonElfSquad23 = createCommonMob('Elf', 23, '2.07m', [
  stackBuilder('0', objectDB.centaurIII, 3800),
  stackBuilder('1', objectDB.elvenArcherI, 42_000)
])
export const mobCommonElfSquad24 = createCommonMob('Elf', 24, '3.44m', [
  stackBuilder('0', objectDB.centaurIII, 6000),
  stackBuilder('1', objectDB.dwarf, 240_000)
])
export const mobCommonElfSquad25 = createCommonMob('Elf', 25, '5.7m', [
  stackBuilder('0', objectDB.centaurIII, 9400),
  stackBuilder('1', objectDB.elvenArcherI, 110_000)
])
export const mobCommonElfSquad26 = createCommonMob('Elf', 26, '9.3m', [
  stackBuilder('0', objectDB.centaurIII, 15000),
  stackBuilder('1', objectDB.druidII, 18000)
])

export const mobCommonElfSquad27 = createCommonMob('Elf', 27, '14.5m', [
  stackBuilder('0', objectDB.centaurIII, 22000),
  stackBuilder('1', objectDB.dwarf, 860_000)
])
export const mobCommonElfSquad28 = createCommonMob('Elf', 28, '22.6m', [
  stackBuilder('0', objectDB.centaurIII, 32000),
  stackBuilder('1', objectDB.elvenArcherI, 350_000)
])
export const mobCommonElfSquad29 = createCommonMob('Elf', 29, '35.3m', [
  stackBuilder('0', objectDB.centaurIII, 47000),
  stackBuilder('1', objectDB.druidII, 58_000)
])

export const mobCommonElfSquad30 = createCommonMob('Elf', 30, '55m', [
  stackBuilder('0', objectDB.centaurIII, 70_000),
  stackBuilder('1', objectDB.elvenArcherI, 780_000)
])
export const mobCommonElfSquad31 = createCommonMob('Elf', 31, '82m', [
  stackBuilder('0', objectDB.centaurIII, 98_000),
  stackBuilder('1', objectDB.elvenArcherI, 1_100_000)
])
export const mobCommonElfSquad32 = createCommonMob('Elf', 32, '114m', [
  stackBuilder('0', objectDB.centaurIII, 130_000),
  stackBuilder('1', objectDB.druidII, 160_000)
])
export const mobCommonElfSquad33 = createCommonMob('Elf', 33, '158m', [
  stackBuilder('0', objectDB.centaurIII, 170_000),
  stackBuilder('1', objectDB.dwarf, 6_800_000)
])
export const mobCommonElfSquad34 = createCommonMob('Elf', 34, '220m', [
  stackBuilder('0', objectDB.centaurIII, 230_000),
  stackBuilder('1', objectDB.elvenArcherI, 2_500_000)
])
export const mobCommonElfSquad35 = createCommonMob('Elf', 35, '306m', [
  stackBuilder('0', objectDB.centaurIII, 300_000),
  stackBuilder('1', objectDB.druidII, 370_000)
])
export const mobCommonElfSquad36 = createCommonMob('Elf', 36, '448m', [
  stackBuilder('0', objectDB.owlBearI, 7800),
  stackBuilder('1', objectDB.lifeDragonVII, 1900)
])
export const mobCommonElfSquad37 = createCommonMob('Elf', 37, '707m', [
  stackBuilder('0', objectDB.dryadI, 8100),
  stackBuilder('1', objectDB.lifeDragonVII, 2900)
])
export const mobCommonElfSquad38 = createCommonMob('Elf', 38, '1.12b', [
  stackBuilder('0', objectDB.owlBearI, 17_000),
  stackBuilder('1', objectDB.unicornRiderV, 39_000)
])
// 39
export const mobCommonElfSquad40 = createCommonMob('Elf', 40, '1.76b', [
  stackBuilder('0', objectDB.dryadI, 18_000),
  stackBuilder('1', objectDB.entVI, 21_000)
])
export const mobCommonElfSquad41 = createCommonMob('Elf', 41, '2.78b', [
  stackBuilder('0', objectDB.owlBearI, 39_000),
  stackBuilder('1', objectDB.dryadI, 12_000)
])

export const mobCommonElfSquad42 = createCommonMob('Elf', 42, '4.2b', [
  stackBuilder('0', objectDB.dryadI, 39_000),
  stackBuilder('1', objectDB.unicornRiderV, 120_000)
])
export const mobCommonElfSquad43 = createCommonMob('Elf', 43, '5.99b', [
  stackBuilder('0', objectDB.owlBearI, 76_000),
  stackBuilder('1', objectDB.lifeDragonVII, 19_000)
])
// 44
export const mobCommonElfSquad45 = createCommonMob('Elf', 45, '8.53b', [
  stackBuilder('0', objectDB.dryadI, 71_000),
  stackBuilder('1', objectDB.lifeDragonVII, 26_000)
])
