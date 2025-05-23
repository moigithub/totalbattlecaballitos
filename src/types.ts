export interface BasicStats {
  str: number
  hp: number
}

interface UnitStats {
  ranged: BasicStats
  melee: BasicStats
  mounted: BasicStats
  flying: BasicStats
  // [category: string]: BasicStats
}

interface Engineer {
  siege: BasicStats
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Guardsman extends UnitStats {}
interface Specialist extends UnitStats {
  scout: BasicStats
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Mercs extends UnitStats {}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Monster extends UnitStats {}

export interface Bonus {
  guardsman: Mercs //Guardsman
  specialist: Specialist
  engineer: Engineer
  elemental: Monster
  dragon: Monster
  beast: Monster
  giant: Monster
  // [key: string]: Guardsman | Specialist | Engineer | Monster
}

export type Category =
  | 'mounted'
  | 'ranged'
  | 'melee'
  | 'scout'
  | 'flying'
  | 'fortification'
  | 'siege'
  | '' //mercenaries dont have

export type Group = 'enemy' | 'mercs' | 'guardsman' | 'specialist' | 'engineer' | 'monster'
export type SubGroup = '' | 'beast' | 'elemental' | 'dragon' | 'giant'
export type Clasification = 'merc' | 'army' | 'monster'

export interface BasicUnit {
  id: string
  clasification: Clasification // army,merc,monster (para saber si es leadership,authority,dominance)
  name: string // name in english
  nameEs: string // name in spanish
  BASEHP: number
  BASESTR: number
  LEADERSHIP: number
  AUTHORITY: number
  DOMINANCE: number
  INITIATIVE: number
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
  // troop: string // creo q lo voy a borrar
  category: Category // melee, ranged,mounted,flying,| scout|siege
  group: Group // 'guardsman' specialist engineer mercs
  subGroup: SubGroup //'elemental' | 'dragon' | 'beast' | 'giant'
  level: string
}

interface HumanUnit extends BasicUnit {
  LEADERSHIP: number
  DOMINANCE: 0
  AUTHORITY: 0
}

export interface GuardsmanUnit extends HumanUnit {
  group: 'guardsman'
  // race: 'human' | 'beast'
  clasification: 'army'
  category: keyof Guardsman
}

export interface MercUnit extends BasicUnit {
  AUTHORITY: number
  LEADERSHIP: 0
  DOMINANCE: 0
  group: 'mercs'
  // race: 'human'
  clasification: 'merc'
  category: keyof Mercs
}

export interface SpecialistUnit extends HumanUnit {
  group: 'specialist'
  // race: 'human' | 'beast'
  clasification: 'army'
  category: keyof Specialist
}

export interface EngineerUnit extends HumanUnit {
  group: 'engineer'
  // race: 'human'
  clasification: 'army'
  category: keyof Engineer
}

export interface MonsterUnit extends BasicUnit {
  DOMINANCE: number
  AUTHORITY: 0
  LEADERSHIP: 0
  group: 'monster'
  // subGroup: 'elemental' | 'dragon' | 'beast' | 'giant'
  // race: 'monster'
  clasification: 'monster'
  category: keyof Monster
}

export type Unit = GuardsmanUnit | SpecialistUnit | EngineerUnit | MonsterUnit | MercUnit

export interface Stack {
  // health: number // (base hp+bonus) *units // DEBE ser calculado y no guardado, por si cambia el bono no tener que recalcular de nuevo
  // strength: number // (base str+bonus) *units// calculado basado contra que esta atacando// recalculado, no guardado
  id: string // stack ID,,, i think this can be random, but since unit.id is unique, im using it
  unitKey: string // to reload store data on rehydratation
  leadership: number
  authority: number
  dominance: number
  gapPercent: number
  usePlusOne: boolean
  useMinusOne: boolean
  unit: BasicUnit
  hpBonus: number
  strBonus: number
  useUnitLimit: boolean
  unitLimit: number
  useStrLimit: boolean
  strLimit: number
  strLimitType: string // "vsMelee,vsMounted,vsRanged" // ...etc
  comment: string
  useHpLimit: boolean
  HpLimit: number
  unitsAmount: number
  limit: number // max unit value
}
