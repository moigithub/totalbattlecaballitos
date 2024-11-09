import { TIPO } from './monsters'

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
interface Mercs extends UnitStats {
  epic: BasicStats
}

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

export type TroopType =
  | 'monster'
  | 'archer'
  | 'spearman'
  | 'rider'
  | 'spy'
  | 'swordsman'
  | 'catapult'

export type Category =
  | 'mounted'
  | 'ranged'
  | 'melee'
  | 'scout'
  | 'flying'
  // | 'fortification'
  | 'siege'

export type Group = 'guardsman' | 'specialist' | 'engineer' | 'monster'

export type Race = 'human' | 'beast' | 'elemental' | 'dragon' | 'giant'

interface BasicUnit {
  tipo: TIPO
  name: string
  BASEHP: number
  BASESTR: number
  // LEADERSHIP: number
  // AUTHORITY: number
  // DOMINANCE: number
  INITIATIVE: number
  vsRangedPercent: number
  vsSiegePercent: number
  vsBeastPercent: number
  vsHumanPercent: number
  vsMountedPercent: number
  vsFlyingPercent: number
  vsMeleePercent: number
  vsFortificationsPercent: number
  vsGiantPercent: number
  vsEpicMonster: number
  vsElementalPercent: number
  vsDragonPercent: number
  troop: string //TroopType
  // category: string //Category
  // group: string // Group
  // race: string // Race
  level: string
}

interface HumanUnit extends BasicUnit {
  LEADERSHIP: number
  DOMINANCE: 0
  AUTHORITY: 0
}

export interface GuardsmanUnit extends HumanUnit {
  group: 'guardsman'
  race: 'human' | 'beast'
  tipo: 'army'
  category: keyof Guardsman
}

export interface MercUnit extends BasicUnit {
  AUTHORITY: number
  LEADERSHIP: 0
  DOMINANCE: 0
  group: 'guardsman'
  race: 'human'
  tipo: 'merc'
  category: keyof Mercs
}

export interface SpecialistUnit extends HumanUnit {
  group: 'specialist'
  race: 'human' | 'beast'
  tipo: 'army'
  category: keyof Specialist
}

export interface EngineerUnit extends HumanUnit {
  group: 'engineer'
  race: 'human'
  tipo: 'army'
  category: keyof Engineer
}

export interface MonsterUnit extends BasicUnit {
  DOMINANCE: number
  AUTHORITY: 0
  LEADERSHIP: 0
  race: 'elemental' | 'dragon' | 'beast' | 'giant'
  tipo: 'monster'
  group: 'monster'
  category: keyof Monster
}

export type Unit = GuardsmanUnit | SpecialistUnit | EngineerUnit | MonsterUnit | MercUnit

export interface Stack {
  id: string // whichever at first position will be used as sacrifice, increases 1 by 1, ignoring lockMinSetup
  // health: number // (base hp+bonus) *units // DEBE ser calculado y no guardado, por si cambia el bono no tener que recalcular de nuevo
  //healthLeft o damageTaken
  // strength: number // (base str+bonus) *units// calculado basado contra que esta atacando// recalculado, no guardado
  leadership: number
  authority: number
  dominance: number
  unit: Unit
  units: number
  minSetup: number // used to calculate how many units are needed to kill one monster
  lockMinSetup: boolean //to know if the unit number increments one by one or by "minSetup" amount
  limit: number // max unit value
}
