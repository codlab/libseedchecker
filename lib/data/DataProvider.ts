import { PokemonEntry } from './PokemonEntry';
import nest from "../../configs/nests";

export enum Game {
  SHIELD,
  SWORD
}

export interface GameEvent {
  game: Game,
  pokemons: PokemonEntry[]
}

export interface Nest {
  normal: number,
  rare: number,
  name: number
}

export interface GameNest {
  nestId: number,
  pokemons: PokemonEntry
}

export interface GameNests {
  game: Game,
  nests: GameNest[]
}

export interface DataProvider {
  load_events: () => Promise<string[]>

  load_event: (name: string) => Promise<GameEvent[]>

  load_nests_in_game: (game: Game) => Promise<GameNest[]>

  load_nests: () => Promise<GameNests[]>
}

export const Nests: Nest[] = nest.forEach(([normal, rare, name]) => ({normal, rare, name}));