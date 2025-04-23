import { Category, Group, SubGroup } from '../types'
// import { selectTargetToAttack } from '@/selecttarget'
import { FightStack, ObjProps } from '../citadelData'
import { selectTargetToAttack } from '../selecttarget2'
import { beforeEach, describe, expect, test } from 'vitest'

// Helper function to create mock FightStack
const createFightStack = (
  id: string,
  name: string,
  category: string,
  subGroup: string,
  baseStr: number,
  baseHp: number,
  strBonus: number,
  hpBonus: number,
  unitsAmount: number,
  vsXPercent: Record<string, number>
): FightStack => {
  return {
    id,
    unit: {
      name,
      category: category as Category,
      group: '' as Group,
      subGroup: subGroup as SubGroup,
      BASESTR: baseStr,
      BASEHP: baseHp,
      strBonus,
      hpBonus,
      multiplier: 1,
      ...vsXPercent
    } as ObjProps,
    unitsAmount,
    originalUnitsAmount: unitsAmount,
    accumulatedDamage: 0
  }
}

describe('selectTargetToAttack, citadel30', () => {
  //using somebear must survive preset example, elf30
  let playerStacks: FightStack[] = []
  let enemyStacks: FightStack[] = []
  beforeEach(() => {
    playerStacks = [
      createFightStack('coraxI', 'coraxI', 'flying', '', 61200, 183600, 2096, 2102, 2960, {
        vsMountedPercent: 1333,
        vsFortificationsPercent: 701
      }),
      createFightStack(
        'firePhoenixI',
        'firePhoenixI',
        'flying',
        'elemental',
        660000,
        1980000,
        2196.5,
        1991,
        40,
        { vsMeleePercent: 701, vsDragonPercent: 1247 }
      ),
      createFightStack('vulturesVI', 'vulturesVI', 'flying', '', 940, 2820, 2096.5, 1961, 18000, {
        vsHumanPercent: 105,
        vsMountedPercent: 296,
        vsFortificationsPercent: 156
      }),
      createFightStack(
        'battleGriffinVII',
        'battleGriffinVII',
        'flying',
        '',
        34000,
        102000,
        2196.5,
        2152,
        450,
        { vsMountedPercent: 888, vsFortificationsPercent: 467 }
      ),
      createFightStack('vulturesVII', 'vulturesVII', 'flying', '', 1700, 5100, 2096.5, 1961, 9000, {
        vsHumanPercent: 105,
        vsMountedPercent: 444,
        vsFortificationsPercent: 234
      }),
      createFightStack(
        'fearsomeManticoraV',
        'fearsomeManticoraV',
        'flying',
        'beast',
        46000,
        138000,
        2196.5,
        1991,
        250,
        { vsFlyingPercent: 253, vsGiantPercent: 324 }
      ),
      createFightStack(
        'CatapultE6',
        'E6 Ballistae I',
        'siege',
        '',
        4730,
        28400,
        838.5,
        469.5,
        3024,
        {
          vsFortificationsPercent: 494
        }
      ),
      createFightStack(
        'battleGriffinVI',
        'battleGriffinVI',
        'flying',
        '',
        19000,
        57000,
        2196.5,
        2152,
        200,
        { vsMountedPercent: 592, vsFortificationsPercent: 311 }
      )
    ]

    enemyStacks = [
      createFightStack('1', 'LifeDragonVII', 'flying', 'dragon', 240000, 720000, 0, 0, 2300, {
        vsMountedPercent: 60,
        vsGiantPercent: 50
      }),
      createFightStack('2', 'EntVI', 'melee', 'elemental', 73000, 219000, 0, 0, 4300, {
        vsRangedPercent: 55,
        vsDragonPercent: 45
      }),
      createFightStack('3', 'BearV', 'melee', 'beast', 22000, 66000, 0, 0, 12000, {
        vsMountedPercent: 70,
        vsElementalPercent: 50
      }),
      createFightStack('4', 'PegasoRiderIV', 'flying', '', 8200, 24600, 0, 0, 21000, {
        vsMeleePercent: 60,
        vsDragonPercent: 50
      }),
      createFightStack('5', 'CentaurIII', 'mounted', '', 2600, 7800, 0, 0, 49000, {
        vsRangedPercent: 50,
        vsSiegePercent: 20
      })
    ]
  })

  describe('biggest threat', () => {
    test('2. coraxI should hit LifeDragonVII, biggest threat', () => {
      const attacker = playerStacks[0] // coraxI
      const target = selectTargetToAttack(attacker, enemyStacks)
      expect(target?.unit.name).toBe('LifeDragonVII')
    })

    test('3. EntVI should hit coraxI , biggest threat', () => {
      enemyStacks[0].unitsAmount = 0 // lifeDragons dead
      const attacker = enemyStacks[1] // Ent VI
      const target = selectTargetToAttack(attacker, playerStacks)
      expect(target?.unit.name).toBe('coraxI')
    })

    test('5. PegasoRiderIV should hit coraxI, biggest threat', () => {
      // LifeDragonVII, EntVI, BearV, PegasoRiderIV, CentaurIII
      // coraxI, firePhoenixI, vulturesVI, battleGriffinVII, vulturesVII, fearsomeManticoraV, CatapultE6, battleGriffinVI

      enemyStacks[0].unitsAmount = 0 // lifeDragons dead
      playerStacks[0].unitsAmount -= 77 // coraxI lost units
      enemyStacks[2].unitsAmount -= 11990 // bears lost units
      const attacker = enemyStacks[3] // Pegaso Rider IV
      const target = selectTargetToAttack(attacker, playerStacks)
      expect(target?.unit.name).toBe('coraxI')
    })

    test('8. battleGriffinVII should hit EntVI, biggest threat', () => {
      // LifeDragonVII, EntVI, BearV, PegasoRiderIV, CentaurIII
      // coraxI, firePhoenixI, vulturesVI, battleGriffinVII, vulturesVII, fearsomeManticoraV, CatapultE6, battleGriffinVI

      enemyStacks[0].unitsAmount = 0 // lifeDragons dead
      enemyStacks[2].unitsAmount = 12000 - 11990 // bears lost units
      enemyStacks[4].unitsAmount = 0 // CentaurIII dead
      playerStacks[0].unitsAmount = 2960 - 77 - 43 // coraxI lost units
      const attacker = playerStacks[3] // battleGriffinVII
      const target = selectTargetToAttack(attacker, enemyStacks)
      expect(target?.unit.name).toBe('EntVI')
    })

    test('9. vulturesVII should hit EntVI, biggest threat', () => {
      // LifeDragonVII, EntVI, BearV, PegasoRiderIV, CentaurIII
      // coraxI, firePhoenixI, vulturesVI, battleGriffinVII, vulturesVII, fearsomeManticoraV, CatapultE6, battleGriffinVI

      enemyStacks[0].unitsAmount = 0 // lifeDragons dead
      enemyStacks[1].unitsAmount = 4300 - 1604 // EntVI
      enemyStacks[2].unitsAmount = 12000 - 11990 // bears lost units
      enemyStacks[4].unitsAmount = 0 // CentaurIII dead
      playerStacks[0].unitsAmount = 2960 - 77 - 43 // coraxI lost units
      const attacker = playerStacks[4] // vulturesVII
      const target = selectTargetToAttack(attacker, enemyStacks)
      expect(target?.unit.name).toBe('EntVI')
    })

    test('11. CatapultE6 should hit EntVI, biggest threat ', () => {
      // LifeDragonVII, EntVI, BearV, PegasoRiderIV, CentaurIII
      // coraxI, firePhoenixI, vulturesVI, battleGriffinVII, vulturesVII, fearsomeManticoraV, CatapultE6, battleGriffinVI

      enemyStacks[0].unitsAmount = 0 // lifeDragons dead
      enemyStacks[1].unitsAmount = 4300 - 1604 - 1534 // EntVI
      enemyStacks[2].unitsAmount = 12000 - 11990 // bears lost units
      enemyStacks[3].unitsAmount = 21000 - 11918 // PegasoRiderIV
      enemyStacks[4].unitsAmount = 0 // CentaurIII dead
      playerStacks[0].unitsAmount = 2960 - 77 - 43 // coraxI lost units
      const attacker = playerStacks[6] // CatapultE6
      const target = selectTargetToAttack(attacker, enemyStacks)
      expect(target?.unit.name).toBe('EntVI')
    })

    test('12. battleGriffinVI should hit PegasoRiderIV, biggest threat ', () => {
      // LifeDragonVII, EntVI, BearV, PegasoRiderIV, CentaurIII
      // coraxI, firePhoenixI, vulturesVI, battleGriffinVII, vulturesVII, fearsomeManticoraV, CatapultE6, battleGriffinVI

      enemyStacks[0].unitsAmount = 0 // lifeDragons dead
      enemyStacks[1].unitsAmount = 4300 - 1604 - 1534 - 613 // EntVI
      enemyStacks[2].unitsAmount = 12000 - 11990 // bears lost units
      enemyStacks[3].unitsAmount = 21000 - 11918 // PegasoRiderIV
      enemyStacks[4].unitsAmount = 0 // CentaurIII dead
      playerStacks[0].unitsAmount = 2960 - 77 - 43 // coraxI lost units
      const attacker = playerStacks[7] // battleGriffinVI
      const target = selectTargetToAttack(attacker, enemyStacks)
      expect(target?.unit.name).toBe('PegasoRiderIV')
    })

    //13. doble damage, ignore

    test('14. PegasoRiderIV should hit coraxI, biggest threat ', () => {
      // LifeDragonVII, EntVI, BearV, PegasoRiderIV, CentaurIII
      // coraxI, firePhoenixI, vulturesVI, battleGriffinVII, vulturesVII, fearsomeManticoraV, CatapultE6, battleGriffinVI

      enemyStacks[0].unitsAmount = 0 // lifeDragons dead
      enemyStacks[1].unitsAmount = 4300 - 1604 - 1534 - 613 - 399 // EntVI
      enemyStacks[2].unitsAmount = 12000 - 11990 // bears lost units
      enemyStacks[3].unitsAmount = 21000 - 11918 // PegasoRiderIV
      enemyStacks[4].unitsAmount = 0 // CentaurIII dead
      playerStacks[0].unitsAmount = 2960 - 77 - 43 // coraxI lost units
      const attacker = enemyStacks[3] // PegasoRiderIV
      const target = selectTargetToAttack(attacker, playerStacks)
      expect(target?.unit.name).toBe('coraxI')
    })

    test('15. coraxI should hit PegasoRiderIV, biggest threat ', () => {
      // LifeDragonVII, EntVI, BearV, PegasoRiderIV, CentaurIII
      // coraxI, firePhoenixI, vulturesVI, battleGriffinVII, vulturesVII, fearsomeManticoraV, CatapultE6, battleGriffinVI

      enemyStacks[0].unitsAmount = 0 // lifeDragons dead
      enemyStacks[1].unitsAmount = 4300 - 1604 - 1534 - 613 - 399 // EntVI
      enemyStacks[2].unitsAmount = 12000 - 11990 // bears lost units
      enemyStacks[3].unitsAmount = 21000 - 11918 // PegasoRiderIV
      enemyStacks[4].unitsAmount = 0 // CentaurIII dead
      playerStacks[0].unitsAmount = 2960 - 77 - 43 - 11 // coraxI lost units
      const attacker = playerStacks[3] // PegasoRiderIV
      const target = selectTargetToAttack(attacker, enemyStacks)
      expect(target?.unit.name).toBe('PegasoRiderIV')
    })

    test('16. EntVI should hit coraxI, biggest threat ', () => {
      // LifeDragonVII, EntVI, BearV, PegasoRiderIV, CentaurIII
      // coraxI, firePhoenixI, vulturesVI, battleGriffinVII, vulturesVII, fearsomeManticoraV, CatapultE6, battleGriffinVI

      enemyStacks[0].unitsAmount = 0 // lifeDragons dead
      enemyStacks[1].unitsAmount = 4300 - 1604 - 1534 - 613 - 399 // EntVI
      enemyStacks[2].unitsAmount = 12000 - 11990 // bears lost units
      enemyStacks[3].unitsAmount = 0 // PegasoRiderIV
      enemyStacks[4].unitsAmount = 0 // CentaurIII dead
      playerStacks[0].unitsAmount = 2960 - 77 - 43 - 11 // coraxI lost units
      const attacker = enemyStacks[1] // EntVI
      const target = selectTargetToAttack(attacker, playerStacks)
      expect(target?.unit.name).toBe('coraxI')
    })

    test('17. firePhoenixI should hit EntVI, biggest threat ', () => {
      // LifeDragonVII, EntVI, BearV, PegasoRiderIV, CentaurIII
      // coraxI, firePhoenixI, vulturesVI, battleGriffinVII, vulturesVII, fearsomeManticoraV, CatapultE6, battleGriffinVI

      enemyStacks[0].unitsAmount = 0 // lifeDragons dead
      enemyStacks[1].unitsAmount = 4300 - 1604 - 1534 - 613 - 399 // EntVI
      enemyStacks[2].unitsAmount = 12000 - 11990 // bears lost units
      enemyStacks[3].unitsAmount = 0 // PegasoRiderIV
      enemyStacks[4].unitsAmount = 0 // CentaurIII dead
      playerStacks[0].unitsAmount = 2960 - 77 - 43 - 11 - 3 // coraxI lost units
      const attacker = playerStacks[1] // firePhoenixI
      const target = selectTargetToAttack(attacker, enemyStacks)
      expect(target?.unit.name).toBe('EntVI')
    })

    test('19. vulturesVI should hit BearV, biggest threat', () => {
      // LifeDragonVII, EntVI, BearV, PegasoRiderIV, CentaurIII
      // coraxI, firePhoenixI, vulturesVI, battleGriffinVII, vulturesVII, fearsomeManticoraV, CatapultE6, battleGriffinVI

      enemyStacks[0].unitsAmount = 0 // lifeDragons dead
      enemyStacks[1].unitsAmount = 0 // EntVI
      enemyStacks[2].unitsAmount = 12000 - 11990 // bears lost units
      enemyStacks[3].unitsAmount = 0 // PegasoRiderIV
      enemyStacks[4].unitsAmount = 0 // CentaurIII dead
      playerStacks[0].unitsAmount = 2960 - 77 - 43 - 11 - 3 // coraxI lost units
      const attacker = playerStacks[2] // vulturesVI
      const target = selectTargetToAttack(attacker, enemyStacks)
      expect(target?.unit.name).toBe('BearV')
    })
  })

  describe('vsBonus preference, have vsBonus, target belong to that categ. and dmg+strBonus <= target health', () => {
    test('4. firePhoenixI should hit BearV, ent and bear are melees but dmg + all Bonuses is ok high for bear and ent, bear is lower', () => {
      enemyStacks[0].unitsAmount = 0 // lifeDragons dead
      playerStacks[0].unitsAmount -= 77 // coraxI lost units
      const attacker = playerStacks[1] // firePhoenixI
      const target = selectTargetToAttack(attacker, enemyStacks)
      expect(target?.unit.name).toBe('BearV')
    })

    test('6. vulturesVI should hit CentaurIII, vulture have vsMounted, centaur is mounted, and dmg+bonus <= centaur health', () => {
      // LifeDragonVII, EntVI, BearV, PegasoRiderIV, CentaurIII
      // coraxI, firePhoenixI, vulturesVI, battleGriffinVII, vulturesVII, fearsomeManticoraV, CatapultE6, battleGriffinVI

      enemyStacks[0].unitsAmount = 0 // lifeDragons dead
      enemyStacks[2].unitsAmount = 12000 - 11990 // bears lost units
      playerStacks[0].unitsAmount -= 77 + 43 // coraxI lost units
      const attacker = playerStacks[2] // vulturesVI
      const target = selectTargetToAttack(attacker, enemyStacks)
      expect(target?.unit.name).toBe('CentaurIII')
    })

    test('7. BearV should hit firePhoenixI, bear have vsElemental bonus, firephoenix is elemental', () => {
      // LifeDragonVII, EntVI, BearV, PegasoRiderIV, CentaurIII
      // coraxI, firePhoenixI, vulturesVI, battleGriffinVII, vulturesVII, fearsomeManticoraV, CatapultE6, battleGriffinVI

      enemyStacks[0].unitsAmount = 0 // lifeDragons dead
      enemyStacks[2].unitsAmount = 12000 - 11990 // bears lost units
      enemyStacks[4].unitsAmount = 0 // CentaurIII dead
      playerStacks[0].unitsAmount = 2960 - 77 - 43 // coraxI lost units
      const attacker = enemyStacks[2] // BearV
      const target = selectTargetToAttack(attacker, playerStacks)
      expect(target?.unit.name).toBe('firePhoenixI')
    })

    test('10. fearsomeManticoraV should hit PegasoRiderIV, manti have vsFlying bonus, pegaso is flying ', () => {
      // LifeDragonVII, EntVI, BearV, PegasoRiderIV, CentaurIII
      // coraxI, firePhoenixI, vulturesVI, battleGriffinVII, vulturesVII, fearsomeManticoraV, CatapultE6, battleGriffinVI

      enemyStacks[0].unitsAmount = 0 // lifeDragons dead
      enemyStacks[1].unitsAmount = 4300 - 1604 - 1534 // EntVI
      enemyStacks[2].unitsAmount = 12000 - 11990 // bears lost units
      enemyStacks[4].unitsAmount = 0 // CentaurIII dead
      playerStacks[0].unitsAmount = 2960 - 77 - 43 // coraxI lost units
      const attacker = playerStacks[5] // fearsomeManticoraV
      const target = selectTargetToAttack(attacker, enemyStacks)
      expect(target?.unit.name).toBe('PegasoRiderIV')
    })

    test('18. BearV should hit firePhoenixI, bear have vsElemental bonus, firephoenix is elemental', () => {
      // LifeDragonVII, EntVI, BearV, PegasoRiderIV, CentaurIII
      // coraxI, firePhoenixI, vulturesVI, battleGriffinVII, vulturesVII, fearsomeManticoraV, CatapultE6, battleGriffinVI

      enemyStacks[0].unitsAmount = 0 // lifeDragons dead
      enemyStacks[1].unitsAmount = 0 // EntVI
      enemyStacks[2].unitsAmount = 12000 - 11990 // bears lost units
      enemyStacks[3].unitsAmount = 0 // PegasoRiderIV
      enemyStacks[4].unitsAmount = 0 // CentaurIII dead
      playerStacks[0].unitsAmount = 2960 - 77 - 43 - 11 - 3 // coraxI lost units
      const attacker = enemyStacks[2] // BearV
      const target = selectTargetToAttack(attacker, playerStacks)
      expect(target?.unit.name).toBe('firePhoenixI')
    })
  })
})

describe('selectTargetToAttack, vsBonus', () => {
  // someBearMustsurvive2
  const playerStacks: FightStack[] = [
    createFightStack('coraxI', 'coraxI', 'flying', '', 61200, 183600, 2133.3, 2183.8, 2273, {
      vsMountedPercent: 1333,
      vsFortificationsPercent: 701
    }),
    createFightStack(
      'firePhoenixI',
      'firePhoenixI',
      'flying',
      'elemental',
      660000,
      1980000,
      2163.8,
      1975.3,
      41,
      { vsMeleePercent: 701, vsDragonPercent: 1247 }
    ),
    createFightStack(
      'battleGriffinVII',
      'battleGriffinVII',
      'flying',
      '',
      34000,
      102000,
      2233.3,
      2234.8,
      450,
      { vsMountedPercent: 888, vsFortificationsPercent: 467 }
    ),
    createFightStack('vulturesVI', 'vulturesVI', 'flying', '', 940, 2820, 2063.8, 1945.3, 17500, {
      vsHumanPercent: 105,
      vsMountedPercent: 296,
      vsFortificationsPercent: 156
    }),
    createFightStack('vulturesVII', 'vulturesVII', 'flying', '', 1700, 5100, 2063.8, 1945.3, 8500, {
      vsHumanPercent: 105,
      vsMountedPercent: 444,
      vsFortificationsPercent: 234
    }),
    createFightStack(
      'battleGriffinVI',
      'battleGriffinVI',
      'flying',
      '',
      19000,
      57000,
      2233.3,
      2234.8,
      700,
      { vsMountedPercent: 592, vsFortificationsPercent: 311 }
    ),
    createFightStack(
      'fearsomeManticoraV',
      'fearsomeManticoraV',
      'flying',
      'beast',
      46000,
      138000,
      2163.8,
      1976.3,
      268,
      { vsFlyingPercent: 253, vsGiantPercent: 324 }
    ),
    createFightStack(
      'warregalII',
      'warregalII',
      'flying',
      'beast',
      220000,
      660000,
      2233.3,
      2234.8,
      30,
      { vsMountedPercent: 1999, vsFortificationsPercent: 1051 }
    ),
    createFightStack('jagoII', 'jagoII', 'flying', '', 220000, 660000, 2163.8, 1996.3, 30, {
      vsMountedPercent: 1000,
      vsFortificationsPercent: 525
    }),
    createFightStack('arielII', 'arielII', 'siege', '', 55000, 330000, 791.7, 414.8, 146, {
      vsFortificationsPercent: 1667
    })
  ]

  const enemyStacks: FightStack[] = [
    createFightStack('1', 'LifeDragonVII', 'flying', 'dragon', 240000, 720000, 0, 0, 2300, {
      vsMountedPercent: 60,
      vsGiantPercent: 50
    }),
    createFightStack('2', 'EntVI', 'melee', 'elemental', 73000, 219000, 0, 0, 4300, {
      vsRangedPercent: 55,
      vsDragonPercent: 45
    }),
    createFightStack('3', 'BearV', 'melee', 'beast', 22000, 66000, 0, 0, 12000, {
      vsMountedPercent: 70,
      vsElementalPercent: 50
    }),
    createFightStack('4', 'PegasoRiderIV', 'flying', '', 8200, 24600, 0, 0, 21000, {
      vsMeleePercent: 60,
      vsDragonPercent: 50
    }),
    createFightStack('5', 'CentaurIII', 'mounted', '', 2600, 7800, 0, 0, 49000, {
      vsRangedPercent: 50,
      vsSiegePercent: 20
    })
  ]

  describe('have 2 or more same type, it should pick lowest health > dmg + all bonuses', () => {
    test('firePhoenixI should hit EntVI, because firePhoenixI have vsMelee bonus, ent and bear are melees but dmg + all Bonuses is too high for bear, not for ent', () => {
      // LifeDragonVII, EntVI, BearV, PegasoRiderIV, CentaurIII
      // coraxI, firePhoenixI, vulturesVI, battleGriffinVII, vulturesVII, fearsomeManticoraV, CatapultE6, battleGriffinVI

      enemyStacks[0].unitsAmount = 0 // lifeDragons dead
      playerStacks[0].unitsAmount = 2273 - 74 // coraxI lost units
      const attacker = playerStacks[1] // firePhoenixI
      const target = selectTargetToAttack(attacker, enemyStacks)
      expect(target?.unit.name).toBe('EntVI')
    })
  })
})

// describe('selectTargetToAttack', () => {
//   // Initialize player and enemy stacks based on the battle report
//   const playerStacks: FightStack[] = [
//     createFightStack('1', 'battleGriffinV', 'flying', 'beast', 46000, 138000, 566.5, 410.8, 10, {
//       vsMountedPercent: 253,
//       vsFortificationPercent: 324
//     })
//   ]

//   const enemyStacks: FightStack[] = [
//     createFightStack('8', 'Ent VI', 'melee', 'dragon', 73000, 219000, 0, 0, 21, {
//       vsRangedPercent: 55,
//       vsDragonPercent: 45
//     }),
//     createFightStack('9', 'Unicorn Rider V', 'mounted', '', 27000, 81000, 0, 0, 47, {
//       vsRangedPercent: 65
//     }),
//     createFightStack('10', 'Druid II', 'ranged', '', 900, 2700, 0, 0, 1100, {
//       vsMeleePercent: 25
//     }),
//     createFightStack('11', 'Centaur III', 'mounted', '', 2600, 7800, 0, 0, 290, {
//       vsRangedPercent: 50,
//       vsSiegePercent: 20
//     }),
//     createFightStack('12', 'Elf archer I', 'ranged', '', 100, 300, 0, 0, 5000, {
//       vsMeleePercent: 35
//     })
//   ]

//   test('should select Ent VI as first target for fearsomeManticoraV (strongest available)', () => {
//     const attacker = playerStacks[0] // fearsomeManticoraV
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Ent VI')
//   })
// })

// describe('selectTargetToAttack', () => {
//   // Initialize player and enemy stacks based on the battle report
//   const playerStacks: FightStack[] = [
//     createFightStack(
//       '1',
//       'fearsomeManticoraV',
//       'flying',
//       'beast',
//       46000,
//       138000,
//       566.5,
//       410.8,
//       10,
//       {
//         vsFlyingPercent: 253,
//         vsGiantPercent: 324
//       }
//     ),
//     createFightStack('2', 'battleGriffinV', 'flying', '', 10000, 30000, 569.5, 284.8, 41, {
//       vsMountedPercent: 395
//     }),
//     createFightStack('3', 'stoneGargoyleIII', 'flying', 'giant', 5200, 15600, 566.5, 375.8, 50, {
//       vsMeleePercent: 185,
//       vsBeastPercent: 72
//     }),
//     createFightStack('4', 'icePhoenixIV', 'flying', 'elemental', 17000, 51000, 566.5, 377.8, 12, {
//       vsFlyingPercent: 223,
//       vsDragonPercent: 162
//     }),
//     createFightStack('5', 'vulturesV', 'flying', '', 520, 1560, 516.5, 204.8, 400, {
//       vsMountedPercent: 197
//     }),
//     createFightStack('6', 'CatapultE4', 'siege', '', 1460, 8750, 237, 126.8, 150, {})
//   ]

//   const enemyStacks: FightStack[] = [
//     createFightStack('8', 'Ent VI', 'melee', 'dragon', 73000, 219000, 0, 0, 21, {
//       vsRangedPercent: 55,
//       vsDragonPercent: 45
//     }),
//     createFightStack('9', 'Unicorn Rider V', 'mounted', '', 27000, 81000, 0, 0, 47, {
//       vsRangedPercent: 65
//     }),
//     createFightStack('10', 'Druid II', 'ranged', '', 900, 2700, 0, 0, 1100, {
//       vsMeleePercent: 25
//     }),
//     createFightStack('11', 'Centaur III', 'mounted', '', 2600, 7800, 0, 0, 290, {
//       vsRangedPercent: 50,
//       vsSiegePercent: 20
//     }),
//     createFightStack('12', 'Elf archer I', 'ranged', '', 100, 300, 0, 0, 5000, {
//       vsMeleePercent: 35
//     })
//   ]

//   test('should select Ent VI as first target for fearsomeManticoraV (strongest available)', () => {
//     const attacker = playerStacks[0] // fearsomeManticoraV
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Ent VI')
//   })

//   test('should select battleGriffinV as target for Unicorn Rider V (biggest threat)', () => {
//     const attacker = enemyStacks[2] // Unicorn Rider V
//     const target = selectTargetToAttack(attacker, playerStacks)
//     expect(target?.unit.name).toBe('battleGriffinV')
//   })

//   test('should select Unicorn Rider V as target for battleGriffinV (vsMounted bonus)', () => {
//     const attacker = playerStacks[1] // battleGriffinV
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Unicorn Rider V')
//   })

//   test('should select fearsomeManticoraV as target for Druid II (strongest available)', () => {
//     const attacker = enemyStacks[3] // Druid II
//     const target = selectTargetToAttack(attacker, playerStacks)
//     expect(target?.unit.name).toBe('fearsomeManticoraV')
//   })

//   test('should select Druid II as target for stoneGargoyleIII (vsMelee bonus)', () => {
//     const attacker = playerStacks[2] // stoneGargoyleIII
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Druid II')
//   })

//   test('should select CatapultE4 as target for Centaur III (vsSiege bonus)', () => {
//     const attacker = enemyStacks[4] // Centaur III
//     const target = selectTargetToAttack(attacker, playerStacks)
//     expect(target?.unit.name).toBe('CatapultE4')
//   })

//   test('should select Centaur III as target for icePhoenixIV (strongest available)', () => {
//     const attacker = playerStacks[3] // icePhoenixIV
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Centaur III')
//   })

//   test('should select fearsomeManticoraV as target for Ent VI (strongest available)', () => {
//     const attacker = enemyStacks[1] // Ent VI (reduced units)
//     const modifiedAttacker = { ...attacker, unitsAmount: 8 }
//     const target = selectTargetToAttack(modifiedAttacker, playerStacks)
//     expect(target?.unit.name).toBe('fearsomeManticoraV')
//   })

//   test('should select Elf archer I as target for CatapultE4 (strongest available)', () => {
//     const attacker = playerStacks[5] // CatapultE4
//     const modifiedEnemyStacks = [...enemyStacks]
//     modifiedEnemyStacks[5].unitsAmount = 3289 // Reduced Elf archer I
//     const target = selectTargetToAttack(attacker, modifiedEnemyStacks)
//     expect(target?.unit.name).toBe('Elf archer I')
//   })

//   test('should return null when no valid targets exist', () => {
//     const attacker = playerStacks[0]
//     const emptyEnemies: FightStack[] = []
//     const target = selectTargetToAttack(attacker, emptyEnemies)
//     expect(target).toBeNull()
//   })
// })

// describe('Additional selectTargetToAttack tests', () => {
//   // Initialize player and enemy stacks from the new data
//   const playerStacks: FightStack[] = [
//     createFightStack('p1', 'coraxI', 'flying', '', 61200, 183600, 2096, 2102, 2960, {
//       vsMountedPercent: 1333
//     }),
//     createFightStack(
//       'p2',
//       'firePhoenixI',
//       'flying',
//       'elemental',
//       660000,
//       1980000,
//       2196.5,
//       1991,
//       40,
//       {
//         vsMeleePercent: 701,
//         vsDragonPercent: 1247
//       }
//     ),
//     createFightStack('p3', 'vulturesVI', 'flying', '', 940, 2820, 2096.5, 1961, 18000, {
//       vsMountedPercent: 296
//     }),
//     createFightStack('p4', 'battleGriffinVII', 'flying', '', 34000, 102000, 2196.5, 2152, 450, {
//       vsMountedPercent: 888
//     }),
//     createFightStack('p5', 'vulturesVII', 'flying', '', 1700, 5100, 2096.5, 1961, 9000, {
//       vsMountedPercent: 444
//     }),
//     createFightStack(
//       'p6',
//       'fearsomeManticoraV',
//       'flying',
//       'beast',
//       46000,
//       138000,
//       2196.5,
//       1991,
//       250,
//       {
//         vsFlyingPercent: 253,
//         vsGiantPercent: 324
//       }
//     ),
//     createFightStack('p7', 'CatapultE6', 'siege', '', 4730, 28400, 838.5, 469.5, 3024, {}),
//     createFightStack('p8', 'battleGriffinVI', 'flying', '', 19000, 57000, 2196.5, 2152, 200, {
//       vsMountedPercent: 592
//     })
//   ]

//   const enemyStacks: FightStack[] = [
//     createFightStack('e2', 'Life dragon VII', 'flying', '', 240000, 720000, 0, 0, 2300, {
//       vsMountedPercent: 60,
//       vsGiantPercent: 50
//     }),
//     createFightStack('e3', 'Ent VI', 'melee', 'dragon', 73000, 219000, 0, 0, 4300, {
//       vsRangedPercent: 55,
//       vsDragonPercent: 45
//     }),
//     createFightStack('e4', 'Bear V', 'melee', '', 22000, 66000, 0, 0, 12000, {
//       vsMountedPercent: 70,
//       vsElementalPercent: 50
//     }),
//     createFightStack('e5', 'Pegaso Rider IV', 'flying', '', 8200, 24600, 0, 0, 21000, {
//       vsMeleePercent: 60,
//       vsDragonPercent: 50
//     }),
//     createFightStack('e6', 'Centaur III', 'mounted', '', 2600, 7800, 0, 0, 49000, {
//       vsRangedPercent: 50,
//       vsSiegePercent: 20
//     })
//   ]

//   test('should select Life dragon VII as first target for coraxI (strongest available)', () => {
//     const attacker = playerStacks[0] // coraxI
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Life dragon VII')
//   })

//   test('should select coraxI as target for Ent VI (strongest available)', () => {
//     const attacker = enemyStacks[2] // Ent VI
//     const target = selectTargetToAttack(attacker, playerStacks)
//     expect(target?.unit.name).toBe('coraxI')
//   })

//   test('should select Bear V as target for firePhoenixI (vsMelee bonus)', () => {
//     const attacker = playerStacks[1] // firePhoenixI
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Bear V')
//   })

//   test('should select coraxI as target for Pegaso Rider IV (vsDragon bonus)', () => {
//     const attacker = enemyStacks[4] // Pegaso Rider IV
//     const target = selectTargetToAttack(attacker, playerStacks)
//     expect(target?.unit.name).toBe('coraxI')
//   })

//   test('should select Centaur III as target for vulturesVI (vsMounted bonus)', () => {
//     const attacker = playerStacks[2] // vulturesVI
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Centaur III')
//   })

//   test('should select firePhoenixI as target for Bear V (vsElemental bonus)', () => {
//     const attacker = enemyStacks[3] // Bear V
//     const target = selectTargetToAttack(attacker, playerStacks)
//     expect(target?.unit.name).toBe('firePhoenixI')
//   })

//   test('should select Ent VI as target for battleGriffinVII (strongest available)', () => {
//     const attacker = playerStacks[3] // battleGriffinVII
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Ent VI')
//   })

//   test('should select Pegaso Rider IV as target for fearsomeManticoraV (vsFlying bonus)', () => {
//     const attacker = playerStacks[5] // fearsomeManticoraV
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Pegaso Rider IV')
//   })

//   test('should select Ent VI as target for CatapultE6 (strongest available)', () => {
//     const attacker = playerStacks[6] // CatapultE6
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Ent VI')
//   })

//   test('should select Pegaso Rider IV as target for battleGriffinVI (vsMounted bonus)', () => {
//     const attacker = playerStacks[7] // battleGriffinVI
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Pegaso Rider IV')
//   })
// })

// describe('Extended selectTargetToAttack tests', () => {
//   // Initialize player stacks with updated data
//   const playerStacks: FightStack[] = [
//     createFightStack('p1', 'coraxI', 'flying', '', 61200, 183600, 2133.3, 2183.8, 2273, {
//       vsMountedPercent: 1333
//     }),
//     createFightStack(
//       'p2',
//       'firePhoenixI',
//       'flying',
//       'elemental',
//       660000,
//       1980000,
//       2163.8,
//       1975.3,
//       41,
//       {
//         vsMeleePercent: 701,
//         vsDragonPercent: 1247
//       }
//     ),
//     createFightStack('p3', 'battleGriffinVII', 'flying', '', 34000, 102000, 2233.3, 2234.8, 450, {
//       vsMountedPercent: 888
//     }),
//     createFightStack('p4', 'vulturesVI', 'flying', '', 940, 2820, 2063.8, 1945.3, 17500, {
//       vsMountedPercent: 296
//     }),
//     createFightStack('p5', 'vulturesVII', 'flying', '', 1700, 5100, 2063.8, 1945.3, 8500, {
//       vsMountedPercent: 444
//     }),
//     createFightStack('p6', 'battleGriffinVI', 'flying', '', 19000, 57000, 2233.3, 2234.8, 700, {
//       vsMountedPercent: 592
//     }),
//     createFightStack(
//       'p7',
//       'fearsomeManticoraV',
//       'flying',
//       'beast',
//       46000,
//       138000,
//       2163.8,
//       1976.3,
//       268,
//       {
//         vsFlyingPercent: 253,
//         vsGiantPercent: 324
//       }
//     ),
//     createFightStack('p8', 'warregalII', 'flying', 'beast', 220000, 660000, 2233.3, 2234.8, 30, {
//       vsMountedPercent: 1999
//     }),
//     createFightStack('p9', 'jagoII', 'flying', '', 220000, 660000, 2163.8, 1996.3, 30, {
//       vsMountedPercent: 1000
//     }),
//     createFightStack('p10', 'arielII', 'siege', '', 55000, 330000, 791.7, 414.8, 146, {})
//   ]

//   // Enemy stacks remain the same as previous
//   const enemyStacks: FightStack[] = [
//     createFightStack('e2', 'Life dragon VII', 'flying', '', 240000, 720000, 0, 0, 2300, {
//       vsMountedPercent: 60,
//       vsGiantPercent: 50
//     }),
//     createFightStack('e3', 'Ent VI', 'melee', 'dragon', 73000, 219000, 0, 0, 4300, {
//       vsRangedPercent: 55,
//       vsDragonPercent: 45
//     }),
//     createFightStack('e4', 'Bear V', 'melee', '', 22000, 66000, 0, 0, 12000, {
//       vsMountedPercent: 70,
//       vsElementalPercent: 50
//     }),
//     createFightStack('e5', 'Pegaso Rider IV', 'flying', '', 8200, 24600, 0, 0, 21000, {
//       vsMeleePercent: 60,
//       vsDragonPercent: 50
//     }),
//     createFightStack('e6', 'Centaur III', 'mounted', '', 2600, 7800, 0, 0, 49000, {
//       vsRangedPercent: 50,
//       vsSiegePercent: 20
//     })
//   ]

//   // New test cases based on battle report sequence
//   test('should select Life dragon VII as target for coraxI (strongest available)', () => {
//     const attacker = playerStacks[0] // coraxI
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Life dragon VII')
//   })

//   test('should select coraxI as target for Ent VI (strongest available)', () => {
//     const attacker = enemyStacks[2] // Ent VI
//     const target = selectTargetToAttack(attacker, playerStacks)
//     expect(target?.unit.name).toBe('coraxI')
//   })

//   test('should select Ent VI as target for firePhoenixI (vsDragon bonus)', () => {
//     const attacker = playerStacks[1] // firePhoenixI
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Ent VI')
//   })

//   test('should select firePhoenixI as target for Bear V (vsElemental bonus)', () => {
//     const attacker = enemyStacks[3] // Bear V
//     const target = selectTargetToAttack(attacker, playerStacks)
//     expect(target?.unit.name).toBe('firePhoenixI')
//   })

//   test('should select Centaur III as target for battleGriffinVII (vsMounted bonus)', () => {
//     const attacker = playerStacks[2] // battleGriffinVII
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Centaur III')
//   })

//   test('should select coraxI as target for Pegaso Rider IV (vsDragon bonus)', () => {
//     const attacker = enemyStacks[4] // Pegaso Rider IV
//     const target = selectTargetToAttack(attacker, playerStacks)
//     expect(target?.unit.name).toBe('coraxI')
//   })

//   test('should select Bear V as target for vulturesVI (strongest available)', () => {
//     const attacker = playerStacks[3] // vulturesVI
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Bear V')
//   })

//   test('should select Pegaso Rider IV as target for vulturesVII (vsMounted bonus)', () => {
//     const attacker = playerStacks[4] // vulturesVII
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Pegaso Rider IV')
//   })

//   test('should select Bear V as target for battleGriffinVI (vsMounted bonus)', () => {
//     const attacker = playerStacks[5] // battleGriffinVI
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Bear V')
//   })

//   test('should select Pegaso Rider IV as target for fearsomeManticoraV (vsFlying bonus)', () => {
//     const attacker = playerStacks[6] // fearsomeManticoraV
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Pegaso Rider IV')
//   })

//   test('should select Ent VI as target for warregalII (strongest available)', () => {
//     const attacker = playerStacks[7] // warregalII
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Ent VI')
//   })

//   test('should select Bear V as target for jagoII (vsMounted bonus)', () => {
//     const attacker = playerStacks[8] // jagoII
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Bear V')
//   })

//   test('should select Ent VI as target for arielII (strongest available)', () => {
//     const attacker = playerStacks[9] // arielII
//     const target = selectTargetToAttack(attacker, enemyStacks)
//     expect(target?.unit.name).toBe('Ent VI')
//   })
// })

// describe('FirePhoenix vsMelee bonus target selection', () => {
//   test('should select Ent VI over Bear V for firePhoenixI when total damage with bonuses is higher against Ent', () => {
//     // Setup firePhoenix with vsMelee bonus
//     const firePhoenix = createFightStack(
//       'p1',
//       'firePhoenixI',
//       'flying',
//       'elemental',
//       660000,
//       1980000,
//       2163.8,
//       1975.3,
//       41,
//       {
//         vsMeleePercent: 701,
//         vsDragonPercent: 1247
//       }
//     )

//     // Setup melee targets
//     const bear = createFightStack('e1', 'Bear V', 'melee', '', 22000, 66000, 0, 0, 12000, {
//       vsMountedPercent: 70,
//       vsElementalPercent: 50
//     })
//     const ent = createFightStack('e2', 'Ent VI', 'melee', 'dragon', 73000, 219000, 0, 0, 4300, {
//       vsRangedPercent: 55,
//       vsDragonPercent: 45
//     })

//     // Verify selection
//     const target = selectTargetToAttack(firePhoenix, [bear, ent])

//     // Should select Ent VI because:
//     // 1. Both are melee (701% bonus applies to both)
//     // 2. bear dont have enough health to cover all damage with bonuses
//     // 3. so its better utilized on ent who have enough health
//     // conclusion/reason: better utilization of damage dealt
//     expect(target?.unit.name).toBe('Ent VI')
//     expect(bear.unit.category).toBe('melee')
//     expect(ent.unit.category).toBe('melee')

//     // Additional verification of damage calculation
//     const strBonus = firePhoenix.unit.strBonus || 0
//     const stackStrength = firePhoenix.unit.BASESTR * firePhoenix.unitsAmount
//     const allBonuses = 1 + (strBonus + firePhoenix.unit.vsMeleePercent) / 100
//     const firePhoenixDamage = stackStrength * strBonus
//     const firePhoenixMaxDamage = stackStrength * allBonuses

//     const entHealth = ent.unit.BASEHP * ent.unitsAmount * (ent.unit.hpBonus || 0)
//     const bearHealth = bear.unit.BASEHP * bear.unitsAmount * (bear.unit.hpBonus || 0)

//     expect(firePhoenixDamage).toBeLessThan(bearHealth)
//     expect(firePhoenixDamage).toBeLessThan(entHealth)

//     expect(firePhoenixMaxDamage).toBeGreaterThan(bearHealth)
//     expect(firePhoenixMaxDamage).toBeLessThan(entHealth)
//   })
// })
