import { objectDB, objBuilder, stackBuilder, FightStack, Citadel } from './citadelData'

objectDB.ghoul = objBuilder({
  name: 'ghoul',
  category: 'melee',
  BASESTR: 28,
  BASEHP: 84,
  vsMountedPercent: 10
})
objectDB.bansheeI = objBuilder({
  name: 'bansheeI',
  category: 'ranged',
  BASESTR: 100,
  BASEHP: 300,
  vsMeleePercent: 45
})
objectDB.deathHoundRiderII = objBuilder({
  name: 'deathHoundRiderII',
  category: 'mounted',
  BASESTR: 1100,
  BASEHP: 3300,
  vsRangedPercent: 40
})
objectDB.necromancerIII = objBuilder({
  name: 'necromancerIII',
  category: 'ranged',
  BASESTR: 720,
  BASEHP: 2100,
  vsMeleePercent: 50
})
objectDB.headsmanIII = objBuilder({
  name: 'headsmanIII',
  category: 'melee',
  BASESTR: 2300,
  BASEHP: 6900,
  vsMountedPercent: 45
})
objectDB.vampireLordI = objBuilder({
  name: 'vampireLordI',
  category: 'flying',
  BASESTR: 120000,
  BASEHP: 360000,
  vsMeleePercent: 70
})
objectDB.deathChariotVI = objBuilder({
  name: 'deathChariotVI',
  category: 'mounted',
  BASESTR: 57000,
  BASEHP: 171000,
  vsRangedPercent: 60
})
objectDB.revenantSkirmisherI = objBuilder({
  name: 'revenantSkirmisherI',
  category: 'melee',
  BASESTR: 150000,
  BASEHP: 450000,
  vsMountedPercent: 70
})
objectDB.overlordVII = objBuilder({
  name: 'overlordVII',
  category: 'ranged',
  BASESTR: 200000,
  BASEHP: 600000,
  vsMeleePercent: 60,
  vsBeastPercent: 50
})
objectDB.gargoyleV = objBuilder({
  name: 'gargoyleV',
  category: 'flying',
  BASESTR: 19000,
  BASEHP: 57000,
  vsMountedPercent: 70,
  vsElementalPercent: 45
})
objectDB.boneGolemVI = objBuilder({
  name: 'boneGolemVI',
  category: 'melee',
  BASESTR: 70000,
  BASEHP: 210000,
  vsDragonPercent: 40
})

export const createCommonMob = (
  type: string = 'type',
  level: number = 1,
  svp: string = '0',
  stacks: FightStack[] = []
): Citadel => {
  // extract last character from svp variable,and the rest, and compare if last character is k , convert rest to number and multiply by 1000
  const temp = svp.slice(-1).toLocaleLowerCase()
  let multiplier = 1
  switch (temp) {
    case 'k':
      multiplier = 1_000
      break
    case 'm':
      multiplier = 1_000_000
      break
    case 'b':
      multiplier = 1_000_000_000
      break
  }

  const value = svp.slice(0, -1)
  const vp = Number(value) * multiplier

  return {
    id: `Common${type}Squad${level}`,
    vp,
    svp,
    stacks
  }
}

export const mobCommonUndeadSquad1 = createCommonMob('Undead', 1, '100', [
  stackBuilder('0', objectDB.ghoul, 93)
])
export const mobCommonUndeadSquad6 = createCommonMob('Undead', 6, ' 1.2k', [
  stackBuilder('0', objectDB.bansheeI, 210)
])
export const mobCommonUndeadSquad11 = createCommonMob('Undead', 11, '10.3K', [
  stackBuilder('0', objectDB.deathHoundRiderII, 91),
  stackBuilder('1', objectDB.ghoul, 1500)
])
export const mobCommonUndeadSquad13 = createCommonMob('Undead', 13, '33.9K', [
  stackBuilder('0', objectDB.necromancerIII, 380),
  stackBuilder('1', objectDB.deathHoundRiderII, 110)
])
export const mobCommonUndeadSquad16 = createCommonMob('Undead', 16, '100K', [
  stackBuilder('0', objectDB.deathHoundRiderII, 620),
  stackBuilder('1', objectDB.bansheeI, 2900)
])
export const mobCommonUndeadSquad17 = createCommonMob('Undead', 17, '190K', [
  stackBuilder('0', objectDB.deathHoundRiderII, 1100),
  stackBuilder('1', objectDB.necromancerIII, 710)
])
export const mobCommonUndeadSquad19 = createCommonMob('Undead', 19, '361K', [
  stackBuilder('0', objectDB.necromancerIII, 2500),
  stackBuilder('1', objectDB.deathHoundRiderII, 1100)
])
export const mobCommonUndeadSquad21 = createCommonMob('Undead', 21, '670K', [
  stackBuilder('0', objectDB.deathHoundRiderII, 3200),
  stackBuilder('1', objectDB.bansheeI, 15000)
])
export const mobCommonUndeadSquad22 = createCommonMob('Undead', 22, '1.12M', [
  stackBuilder('0', objectDB.deathHoundRiderII, 3700),
  stackBuilder('1', objectDB.ghoul, 140000)
])
export const mobCommonUndeadSquad23 = createCommonMob('Undead', 23, '1.86M', [
  stackBuilder('0', objectDB.deathHoundRiderII, 8100),
  stackBuilder('1', objectDB.ghoul, 140000)
])
export const mobCommonUndeadSquad24 = createCommonMob('Undead', 24, '3.11M', [
  stackBuilder('0', objectDB.necromancerIII, 14000),
  stackBuilder('1', objectDB.deathHoundRiderII, 9200)
])
export const mobCommonUndeadSquad25 = createCommonMob('Undead', 25, '5.2M', [
  stackBuilder('0', objectDB.headsmanIII, 9700),
  stackBuilder('1', objectDB.bansheeI, 96000)
])
export const mobCommonUndeadSquad26 = createCommonMob('Undead', 26, '8.5M', [
  stackBuilder('0', objectDB.headsmanIII, 15000),
  stackBuilder('1', objectDB.deathHoundRiderII, 14000)
])
export const mobCommonUndeadSquad27 = createCommonMob('Undead', 27, '13.3M', [
  stackBuilder('0', objectDB.necromancerIII, 51000),
  stackBuilder('1', objectDB.deathHoundRiderII, 34000)
])
export const mobCommonUndeadSquad28 = createCommonMob('Undead', 28, '20.7M', [
  stackBuilder('0', objectDB.headsmanIII, 33000),
  stackBuilder('1', objectDB.bansheeI, 330000)
])
export const mobCommonUndeadSquad29 = createCommonMob('Undead', 29, '32.3M', [
  stackBuilder('0', objectDB.headsmanIII, 49000),
  stackBuilder('1', objectDB.deathHoundRiderII, 44000)
])
export const mobCommonUndeadSquad30 = createCommonMob('Undead', 30, '50M', [
  stackBuilder('0', objectDB.headsmanIII, 73000),
  stackBuilder('1', objectDB.deathHoundRiderII, 65000)
])
export const mobCommonUndeadSquad31 = createCommonMob('Undead', 31, '77M', [
  stackBuilder('0', objectDB.headsmanIII, 110000),
  stackBuilder('1', objectDB.bansheeI, 1_000_000)
])
export const mobCommonUndeadSquad32 = createCommonMob('Undead', 32, '107M', [
  stackBuilder('0', objectDB.headsmanIII, 140000),
  stackBuilder('1', objectDB.necromancerIII, 190000)
])
export const mobCommonUndeadSquad33 = createCommonMob('Undead', 33, '148M', [
  stackBuilder('0', objectDB.headsmanIII, 180000),
  stackBuilder('1', objectDB.deathHoundRiderII, 160000)
])
export const mobCommonUndeadSquad34 = createCommonMob('Undead', 34, '206M', [
  stackBuilder('0', objectDB.headsmanIII, 240000),
  stackBuilder('1', objectDB.bansheeI, 2_400_000)
])
export const mobCommonUndeadSquad35 = createCommonMob('Undead', 35, '287M', [
  stackBuilder('0', objectDB.headsmanIII, 320000),
  stackBuilder('1', objectDB.deathHoundRiderII, 290000)
])
export const mobCommonUndeadSquad36 = createCommonMob('Undead', 36, '409M', [
  stackBuilder('0', objectDB.vampireLordI, 8100),
  stackBuilder('1', objectDB.deathChariotVI, 7500)
])
export const mobCommonUndeadSquad37 = createCommonMob('Undead', 37, '645M', [
  stackBuilder('0', objectDB.revenantSkirmisherI, 9700),
  stackBuilder('1', objectDB.deathChariotVI, 11000)
])
export const mobCommonUndeadSquad38 = createCommonMob('Undead', 38, '1.02B', [
  stackBuilder('0', objectDB.vampireLordI, 18000),
  stackBuilder('1', objectDB.overlordVII, 4700)
])
export const mobCommonUndeadSquad39 = createCommonMob('Undead', 39, '1.61B', [
  stackBuilder('0', objectDB.revenantSkirmisherI, 22000),
  stackBuilder('1', objectDB.gargoyleV, 73000)
])
export const mobCommonUndeadSquad41 = createCommonMob('Undead', 41, '2.53B', [
  stackBuilder('0', objectDB.vampireLordI, 41000),
  stackBuilder('1', objectDB.boneGolemVI, 31000)
])
export const mobCommonUndeadSquad42 = createCommonMob('Undead', 42, '3.92B', [
  stackBuilder('0', objectDB.revenantSkirmisherI, 48000),
  stackBuilder('1', objectDB.overlordVII, 15000)
])
export const mobCommonUndeadSquad43 = createCommonMob('Undead', 43, '5.58B', [
  stackBuilder('0', objectDB.vampireLordI, 81000),
  stackBuilder('1', objectDB.deathChariotVI, 75000)
])
export const mobCommonUndeadSquad44 = createCommonMob('Undead', 44, '7.95B', [
  stackBuilder('0', objectDB.revenantSkirmisherI, 87000),
  stackBuilder('1', objectDB.deathChariotVI, 100000)
])
