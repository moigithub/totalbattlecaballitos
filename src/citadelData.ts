import { Category, Group, SubGroup } from './types'

export interface ObjProps {
  name: string
  category: Category // melee, ranged,mounted,flying,| scout|siege
  group: Group // 'guardsman' specialist engineer mercs
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
  unit: ObjProps
  unitsAmount: number
  damage: number
  turn: number
}

export interface Citadel {
  // walls: {
  //   hp: number
  // }
  stacks: FightStack[]
}

const objBuilder = (props: Partial<ObjProps>): ObjProps => {
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

const objectDB: Record<string, ObjProps> = {}

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
  vsMeleePercent: 65,
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
  vsRangedPercent: 65
})
objectDB.wereWolfII = objBuilder({
  name: 'WereWolf II',
  category: 'melee',
  subGroup: 'beast',
  BASESTR: 360,
  BASEHP: 1080,
  vsMountedPercent: 65
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
    { unit: objectDB.walls, unitsAmount: 90, damage: 0, turn: 0 },
    {
      unit: objectDB.bearV,
      unitsAmount: 9,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.pegasoRiderIV,
      unitsAmount: 19,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.elfArcherI,
      unitsAmount: 1200,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.druidII,
      unitsAmount: 100,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.dwarf,
      unitsAmount: 2200,
      damage: 0,
      turn: 0
    }
  ]
}

export const citadele15: Citadel = {
  // walls: { hp: 700 * 30_000 },
  stacks: [
    { unit: objectDB.walls, unitsAmount: 700, damage: 0, turn: 0 },

    {
      unit: objectDB.entVI,
      unitsAmount: 21,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.unicornRiderV,
      unitsAmount: 47,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.druidII,
      unitsAmount: 1100,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.centaurIII,
      unitsAmount: 290,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.elfArcherI,
      unitsAmount: 5000,
      damage: 0,
      turn: 0
    }
  ]
}

export const citadele20: Citadel = {
  // walls: { hp: 3650 * 30_000 },
  stacks: [
    { unit: objectDB.walls, unitsAmount: 3650, damage: 0, turn: 0 },
    {
      unit: objectDB.lifeDragonVII,
      unitsAmount: 41,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.entVI,
      unitsAmount: 110,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.centaurIII,
      unitsAmount: 2500,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.bearV,
      unitsAmount: 230,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.druidII,
      unitsAmount: 3600,
      damage: 0,
      turn: 0
    }
  ]
}
export const citadele25: Citadel = {
  // walls: { hp: 31900 * 30_000 },
  stacks: [
    { unit: objectDB.walls, unitsAmount: 31900, damage: 0, turn: 0 },
    {
      unit: objectDB.lifeDragonVII,
      unitsAmount: 480,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.entVI,
      unitsAmount: 880,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.bearV,
      unitsAmount: 2400,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.pegasoRiderIV,
      unitsAmount: 4300,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.centaurIII,
      unitsAmount: 10000,
      damage: 0,
      turn: 0
    }
  ]
}

export const citadele30: Citadel = {
  // walls: { hp: 135000 * 30_000 },
  stacks: [
    { unit: objectDB.walls, unitsAmount: 135000, damage: 0, turn: 0 },
    {
      unit: objectDB.lifeDragonVII,
      unitsAmount: 2300,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.entVI,
      unitsAmount: 4300,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.bearV,
      unitsAmount: 12000,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.pegasoRiderIV,
      unitsAmount: 21000,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.centaurIII,
      unitsAmount: 49000,
      damage: 0,
      turn: 0
    }
  ]
}

export const citadelc20: Citadel = {
  // walls: { hp: 9200 * 30_000 },
  stacks: [
    { unit: objectDB.walls, unitsAmount: 9200, damage: 0, turn: 0 },
    {
      unit: objectDB.cursedDragonVII,
      unitsAmount: 10,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.giantZombieV,
      unitsAmount: 80,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.deathRiderIII,
      unitsAmount: 650,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.bullRiderV,
      unitsAmount: 54,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.wereWolfII,
      unitsAmount: 2900,
      damage: 0,
      turn: 0
    }
  ]
}
export const citadelc25: Citadel = {
  // walls: { hp: 77500 * 30_000 },
  stacks: [
    { unit: objectDB.walls, unitsAmount: 77500, damage: 0, turn: 0 },
    {
      unit: objectDB.cursedDragonVII,
      unitsAmount: 120,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.cursedDendroidVI,
      unitsAmount: 205,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.giantZombieV,
      unitsAmount: 540,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.bullRiderV,
      unitsAmount: 400,
      damage: 0,
      turn: 0
    },
    {
      unit: objectDB.deathRiderIII,
      unitsAmount: 2750,
      damage: 0,
      turn: 0
    }
  ]
}
