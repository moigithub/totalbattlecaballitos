interface ObjProps {
  name: string
  type: string // melee, beast,ranged, elemental, etc
  baseStr: number
  baseHp: number
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

export interface Stack {
  troop: ObjProps
  amount: number
}

interface Citadel {
  walls: {
    hp: number
  }
  stacks: Stack[]
}

const objBuilder = (props: Partial<ObjProps>): ObjProps => {
  return {
    name: 'name',
    type: '',
    baseStr: 0,
    baseHp: 0,
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
  type: 'beast, melee',
  baseStr: 22000,
  baseHp: 66000,
  vsMountedPercent: 70,
  vsElementalPercent: 50
})

objectDB.pegasoRiderIV = objBuilder({
  name: 'Pegaso Rider IV',
  type: 'flying',
  baseStr: 8200,
  baseHp: 24600,
  vsMeleePercent: 65,
  vsDragonPercent: 50
})
objectDB.unicornRiderV = objBuilder({
  name: 'Unicorn Rider V',
  type: 'mounted',
  baseStr: 27000,
  baseHp: 81000,
  vsRangedPercent: 65
})
objectDB.elfArcherI = objBuilder({
  name: 'Elf archer I',
  type: 'ranged',
  baseStr: 100,
  baseHp: 300,
  vsMeleePercent: 35
})

objectDB.druidII = objBuilder({
  name: 'Druid II',
  type: 'ranged',
  baseStr: 900,
  baseHp: 2700,
  vsMeleePercent: 25
})

objectDB.centaurIII = objBuilder({
  name: 'Centaur III',
  type: 'mounted',
  baseStr: 2600,
  baseHp: 7800,
  vsRangedPercent: 50,
  vsSiegePercent: 20
})

objectDB.dwarf = objBuilder({
  name: 'Dwarf',
  type: 'melee',
  baseStr: 28,
  baseHp: 84,
  vsMountedPercent: 10
})

objectDB.entVI = objBuilder({
  name: 'Ent VI',
  type: 'elemental, melee',
  baseStr: 73000,
  baseHp: 219000,
  vsRangedPercent: 55,
  vsDragonPercent: 45
})
objectDB.lifeDragonVII = objBuilder({
  name: 'Life dragon VII',
  type: 'dragon, flying',
  baseStr: 240000,
  baseHp: 720000,
  vsMountedPercent: 60,
  vsGiantPercent: 50
})
objectDB.cursedDragonVII = objBuilder({
  name: 'Cursed dragon VII',
  type: 'dragon, flying',
  baseStr: 320000,
  baseHp: 960000,
  vsMountedPercent: 50,
  vsGiantPercent: 50
})
objectDB.giantZombieV = objBuilder({
  name: 'Giant zombie V',
  type: 'giant, melee',
  baseStr: 33000,
  baseHp: 99000,
  vsMountedPercent: 70,
  vsBeastPercent: 45
})
objectDB.deathRiderIII = objBuilder({
  name: 'Death rider III',
  type: 'mounted',
  baseStr: 3200,
  baseHp: 9600,
  vsRangedPercent: 50
})
objectDB.bullRiderV = objBuilder({
  name: 'Bull rider V',
  type: 'mounted',
  baseStr: 29000,
  baseHp: 87000,
  vsRangedPercent: 65
})
objectDB.wereWolfII = objBuilder({
  name: 'WereWolf II',
  type: 'beast, melee',
  baseStr: 360,
  baseHp: 1080,
  vsMountedPercent: 65
})
objectDB.cursedDendroidVI = objBuilder({
  name: 'Cursed dendroid VI',
  type: 'elemental, melee',
  baseStr: 110000,
  baseHp: 330000,
  vsRangedPercent: 55,
  vsDragonPercent: 45
})

export const citadele10: Citadel = {
  walls: { hp: 90 * 30_000 },
  stacks: [
    {
      troop: objectDB.bearV,
      amount: 9
    },
    {
      troop: objectDB.pegasoRiderIV,
      amount: 19
    },
    {
      troop: objectDB.elfArcherI,
      amount: 1200
    },
    {
      troop: objectDB.druidII,
      amount: 100
    },
    {
      troop: objectDB.dwarf,
      amount: 2200
    }
  ]
}

export const citadele15 = {
  walls: { hp: 700 * 30_000 },
  stacks: [
    {
      troop: objectDB.entVI,
      amount: 21
    },
    {
      troop: objectDB.unicornRiderV,
      amount: 47
    },
    {
      troop: objectDB.druidII,
      amount: 1100
    },
    {
      troop: objectDB.centaurIII,
      amount: 290
    },
    {
      troop: objectDB.elfArcherI,
      amount: 5000
    }
  ]
}

export const citadele20 = {
  walls: { hp: 3650 * 30_000 },
  stacks: [
    {
      troop: objectDB.lifeDragonVII,
      amount: 41
    },
    {
      troop: objectDB.entVI,
      amount: 110
    },
    {
      troop: objectDB.centaurIII,
      amount: 2500
    },
    {
      troop: objectDB.bearV,
      amount: 230
    },
    {
      troop: objectDB.druidII,
      amount: 3600
    }
  ]
}
export const citadele25 = {
  walls: { hp: 31900 * 30_000 },
  stacks: [
    {
      troop: objectDB.lifeDragonVII,
      amount: 480
    },
    {
      troop: objectDB.entVI,
      amount: 880
    },
    {
      troop: objectDB.bearV,
      amount: 2400
    },
    {
      troop: objectDB.pegasoRiderIV,
      amount: 4300
    },
    {
      troop: objectDB.centaurIII,
      amount: 10000
    }
  ]
}

export const citadele30 = {
  walls: { hp: 135000 * 30_000 },
  stacks: [
    {
      troop: objectDB.lifeDragonVII,
      amount: 2300
    },
    {
      troop: objectDB.entVI,
      amount: 4300
    },
    {
      troop: objectDB.bearV,
      amount: 12000
    },
    {
      troop: objectDB.pegasoRiderIV,
      amount: 21000
    },
    {
      troop: objectDB.centaurIII,
      amount: 49000
    }
  ]
}

export const citadelc20 = {
  walls: { hp: 9200 * 30_000 },
  stacks: [
    {
      troop: objectDB.cursedDragonVII,
      amount: 10
    },
    {
      troop: objectDB.giantZombieV,
      amount: 80
    },
    {
      troop: objectDB.deathRiderIII,
      amount: 650
    },
    {
      troop: objectDB.bullRiderV,
      amount: 54
    },
    {
      troop: objectDB.wereWolfII,
      amount: 2900
    }
  ]
}
export const citadelc25 = {
  walls: { hp: 77500 * 30_000 },
  stacks: [
    {
      troop: objectDB.cursedDragonVII,
      amount: 120
    },
    {
      troop: objectDB.cursedDendroidVI,
      amount: 205
    },
    {
      troop: objectDB.giantZombieV,
      amount: 540
    },
    {
      troop: objectDB.bullRiderV,
      amount: 400
    },
    {
      troop: objectDB.deathRiderIII,
      amount: 2750
    }
  ]
}
