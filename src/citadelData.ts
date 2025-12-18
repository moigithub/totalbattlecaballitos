import { Category, Group, SubGroup } from './types'

export interface ObjProps {
  name: string
  category: Category // melee, ranged,mounted,flying,| scout|siege
  group: Group // 'guardsman' specialist engineer mercs enemy
  subGroup: SubGroup //'elemental' | 'dragon' | 'beast' | 'giant'
  BASESTR: number
  BASEHP: number
  strBonus?: number
  hpBonus?: number
  multiplier: number // para las catapultas que tienen x 20
  vsRangedPercent: number
  vsSiegePercent: number
  vsBeastPercent: number
  vsHumanPercent: number
  vsMountedPercent: number
  vsFlyingPercent: number
  vsMeleePercent: number
  vsFortificationsPercent: number
  vsGiantPercent: number
  vsEpicPercent: number
  vsElementalPercent: number
  vsDragonPercent: number
}

export interface FightStack {
  id: string
  unit: ObjProps
  unitsAmount: number
  originalUnitsAmount: number
  accumulatedDamageAliveUnits: number
  totalAccumulatedDamage: number
}

export interface Citadel {
  // walls: {
  //   hp: number
  // }
  id?: string
  vp?: number
  svp?: string
  stacks: FightStack[]
}

export const objBuilder = (props: Partial<ObjProps>): ObjProps => {
  return {
    name: 'name',
    category: '',
    group: 'enemy',
    subGroup: '',
    BASESTR: 0,
    BASEHP: 0,
    multiplier: 1,
    vsRangedPercent: 0,
    vsSiegePercent: 0,
    vsBeastPercent: 0,
    vsHumanPercent: 0,
    vsMountedPercent: 0,
    vsFlyingPercent: 0,
    vsMeleePercent: 0,
    vsFortificationsPercent: 0,
    vsGiantPercent: 0,
    vsEpicPercent: 0,
    vsElementalPercent: 0,
    vsDragonPercent: 0,
    ...props
  }
}
export const stackBuilder = (id: string, unit: ObjProps, unitsAmount: number) => {
  return {
    id,
    unit,
    unitsAmount,
    originalUnitsAmount: unitsAmount,
    accumulatedDamageAliveUnits: 0,
    totalAccumulatedDamage: 0
  }
}

type MonsterData = {
  [key: string]: ObjProps
}
export const objectDB: MonsterData = {}

objectDB.bearV = objBuilder({
  name: 'Bear V',
  category: 'melee',
  subGroup: 'beast',
  BASESTR: 22000,
  BASEHP: 66000,
  vsMountedPercent: 70,
  vsElementalPercent: 50
})

objectDB.pegasoRiderIV = objBuilder({
  name: 'Pegaso Rider IV',
  category: 'flying',
  BASESTR: 8200,
  BASEHP: 24600,
  vsMeleePercent: 60,
  vsDragonPercent: 50
})
objectDB.unicornRiderV = objBuilder({
  name: 'Unicorn Rider V',
  category: 'mounted',
  BASESTR: 27000,
  BASEHP: 81000,
  vsRangedPercent: 65
})
objectDB.elfArcherI = objBuilder({
  name: 'Elf archer I',
  category: 'ranged',
  BASESTR: 100,
  BASEHP: 300,
  vsMeleePercent: 35
})

objectDB.druidII = objBuilder({
  name: 'Druid II',
  category: 'ranged',
  BASESTR: 900,
  BASEHP: 2700,
  vsMeleePercent: 25
})

objectDB.centaurIII = objBuilder({
  name: 'Centaur III',
  category: 'mounted',
  BASESTR: 2600,
  BASEHP: 7800,
  vsRangedPercent: 50,
  vsSiegePercent: 20
})

objectDB.dwarf = objBuilder({
  name: 'Dwarf',
  category: 'melee',
  BASESTR: 28,
  BASEHP: 84,
  vsMountedPercent: 10
})

objectDB.entVI = objBuilder({
  name: 'Ent VI',
  category: 'melee',
  subGroup: 'elemental',
  BASESTR: 73000,
  BASEHP: 219000,
  vsRangedPercent: 55,
  vsDragonPercent: 45
})
objectDB.lifeDragonVII = objBuilder({
  name: 'Life dragon VII',
  category: 'flying',
  subGroup: 'dragon',
  BASESTR: 240000,
  BASEHP: 720000,
  vsMountedPercent: 60,
  vsGiantPercent: 50
})
objectDB.cursedDragonVII = objBuilder({
  name: 'Cursed dragon VII',
  category: 'flying',
  subGroup: 'dragon',
  BASESTR: 320000,
  BASEHP: 960000,
  vsMountedPercent: 50,
  vsGiantPercent: 50
})
objectDB.giantZombieV = objBuilder({
  name: 'Giant zombie V',
  category: 'melee',
  subGroup: 'giant',
  BASESTR: 33000,
  BASEHP: 99000,
  vsMountedPercent: 70,
  vsBeastPercent: 45
})
objectDB.deathRiderIII = objBuilder({
  name: 'Death rider III',
  category: 'mounted',
  BASESTR: 3200,
  BASEHP: 9600,
  vsRangedPercent: 50
})
objectDB.bullRiderV = objBuilder({
  name: 'Bull rider V',
  category: 'mounted',
  BASESTR: 29000,
  BASEHP: 87000,
  vsRangedPercent: 55
})
objectDB.wereWolfII = objBuilder({
  name: 'WereWolf II',
  category: 'melee',
  subGroup: 'beast',
  BASESTR: 360,
  BASEHP: 1080,
  vsMountedPercent: 45
})
objectDB.cursedDendroidVI = objBuilder({
  name: 'Cursed dendroid VI',
  category: 'melee',
  subGroup: 'elemental',
  BASESTR: 110000,
  BASEHP: 330000,
  vsRangedPercent: 55,
  vsDragonPercent: 45
})
objectDB.walls = objBuilder({
  name: 'Walls',
  category: 'fortification',
  BASESTR: 10_000,
  BASEHP: 30_000,
  vsMeleePercent: 100,
  vsRangedPercent: 100,
  vsMountedPercent: 100
})
export const citadele10: Citadel = {
  stacks: [
    {
      id: '0',
      unit: objectDB.walls,
      unitsAmount: 90,
      originalUnitsAmount: 90,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '1',
      unit: objectDB.bearV,
      unitsAmount: 9,
      originalUnitsAmount: 9,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '2',
      unit: objectDB.pegasoRiderIV,
      unitsAmount: 19,
      originalUnitsAmount: 19,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '3',
      unit: objectDB.elfArcherI,
      unitsAmount: 1200,
      originalUnitsAmount: 1200,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '4',
      unit: objectDB.druidII,
      unitsAmount: 100,
      originalUnitsAmount: 100,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '5',
      unit: objectDB.dwarf,
      unitsAmount: 2200,
      originalUnitsAmount: 2200,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    }
  ]
}

export const citadele15: Citadel = {
  // walls: { hp: 700 * 30_000 },
  stacks: [
    {
      id: '0',
      unit: objectDB.walls,
      unitsAmount: 700,
      originalUnitsAmount: 700,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },

    {
      id: '1',
      unit: objectDB.entVI,
      unitsAmount: 21,
      originalUnitsAmount: 21,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '2',
      unit: objectDB.unicornRiderV,
      unitsAmount: 47,
      originalUnitsAmount: 47,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '3',
      unit: objectDB.druidII,
      unitsAmount: 1100,
      originalUnitsAmount: 1100,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '4',
      unit: objectDB.centaurIII,
      unitsAmount: 290,
      originalUnitsAmount: 290,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '5',
      unit: objectDB.elfArcherI,
      unitsAmount: 5000,
      originalUnitsAmount: 5000,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    }
  ]
}

export const citadele20: Citadel = {
  // walls: { hp: 3650 * 30_000 },
  stacks: [
    {
      id: '0',
      unit: objectDB.walls,
      unitsAmount: 3650,
      originalUnitsAmount: 3650,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '1',

      unit: objectDB.lifeDragonVII,
      unitsAmount: 41,
      originalUnitsAmount: 41,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '2',

      unit: objectDB.entVI,
      unitsAmount: 110,
      originalUnitsAmount: 110,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '3',

      unit: objectDB.centaurIII,
      unitsAmount: 2500,
      originalUnitsAmount: 2500,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '4',

      unit: objectDB.bearV,
      unitsAmount: 230,
      originalUnitsAmount: 230,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '5',

      unit: objectDB.druidII,
      unitsAmount: 3600,
      originalUnitsAmount: 3600,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    }
  ]
}
export const citadele25: Citadel = {
  // walls: { hp: 31900 * 30_000 },
  stacks: [
    {
      id: '0',
      unit: objectDB.walls,
      unitsAmount: 31900,
      originalUnitsAmount: 31900,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '1',
      unit: objectDB.lifeDragonVII,
      unitsAmount: 480,
      originalUnitsAmount: 480,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '2',
      unit: objectDB.entVI,
      unitsAmount: 880,
      originalUnitsAmount: 880,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '3',
      unit: objectDB.bearV,
      unitsAmount: 2400,
      originalUnitsAmount: 2400,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '4',
      unit: objectDB.pegasoRiderIV,
      unitsAmount: 4300,
      originalUnitsAmount: 4300,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '5',
      unit: objectDB.centaurIII,
      unitsAmount: 10000,
      originalUnitsAmount: 10000,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    }
  ]
}

export const citadele30: Citadel = {
  // walls: { hp: 135000 * 30_000 },
  stacks: [
    {
      id: '0',
      unit: objectDB.walls,
      unitsAmount: 135000,
      originalUnitsAmount: 135000,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '1',
      unit: objectDB.lifeDragonVII,
      unitsAmount: 2300,
      originalUnitsAmount: 2300,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '2',
      unit: objectDB.entVI,
      unitsAmount: 4300,
      originalUnitsAmount: 4300,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '3',
      unit: objectDB.bearV,
      unitsAmount: 12000,
      originalUnitsAmount: 12000,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '4',
      unit: objectDB.pegasoRiderIV,
      unitsAmount: 21000,
      originalUnitsAmount: 21000,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '5',
      unit: objectDB.centaurIII,
      unitsAmount: 49000,
      originalUnitsAmount: 49000,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    }
  ]
}

export const citadelc20: Citadel = {
  // walls: { hp: 9200 * 30_000 },
  stacks: [
    {
      id: '0',
      unit: objectDB.walls,
      unitsAmount: 9200,
      originalUnitsAmount: 9200,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '1',
      unit: objectDB.cursedDragonVII,
      unitsAmount: 10,
      originalUnitsAmount: 10,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '2',
      unit: objectDB.giantZombieV,
      unitsAmount: 80,
      originalUnitsAmount: 80,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '3',
      unit: objectDB.deathRiderIII,
      unitsAmount: 650,
      originalUnitsAmount: 650,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '4',
      unit: objectDB.bullRiderV,
      unitsAmount: 54,
      originalUnitsAmount: 54,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '5',
      unit: objectDB.wereWolfII,
      unitsAmount: 2900,
      originalUnitsAmount: 2900,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    }
  ]
}
export const citadelc25: Citadel = {
  // walls: { hp: 77500 * 30_000 },
  stacks: [
    {
      id: '0',
      unit: objectDB.walls,
      unitsAmount: 77500,
      originalUnitsAmount: 77500,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '1',
      unit: objectDB.cursedDragonVII,
      unitsAmount: 120,
      originalUnitsAmount: 120,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '2',
      unit: objectDB.cursedDendroidVI,
      unitsAmount: 205,
      originalUnitsAmount: 205,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '3',
      unit: objectDB.giantZombieV,
      unitsAmount: 540,
      originalUnitsAmount: 540,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '4',
      unit: objectDB.bullRiderV,
      unitsAmount: 400,
      originalUnitsAmount: 400,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    },
    {
      id: '5',
      unit: objectDB.deathRiderIII,
      unitsAmount: 2750,
      originalUnitsAmount: 2750,
      accumulatedDamageAliveUnits: 0,
      totalAccumulatedDamage: 0
    }
  ]
}
