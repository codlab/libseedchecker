import { PokemonEntry } from './PokemonEntry';
import fetch from "node-fetch";
import { DataProvider, GameEvent, GameNest, GameNests, Game } from './DataProvider';

const events_endpoint = "https://raw.githubusercontent.com/Leanny/SeedSearcher/master/Events/files.json";
const event_endpoint = "https://raw.githubusercontent.com/Leanny/SeedSearcher/master/Events/";

export class OnlineDataProvider implements DataProvider {

  async load_events(): Promise<string[]> {
    const list = await fetch(events_endpoint).then(r=>r.json());

    return list;
  }

  async load_event(name: string): Promise<GameEvent[]> {
    const { Tables } = await fetch(event_endpoint + name).then(r=>r.json());

    return (Tables as any[]).map((item, index) => {
      const { Entries } = item;

      return {
        game: index,
        pokemons: (Entries as any[]).map(item => new PokemonEntry(item))
      };
    })
  }

  async load_nests_in_game(game: Game): Promise<GameNest[]> {
    const nests = await fetch(`https://leanny.github.io/seedchecker/nest${game}.json`).then(r=>r.json());;

    return (nests as any[]).map((nest, nestId) => ({
      nestId,
      pokemons: (nest.Entries as any[]).map(pokemon => new PokemonEntry(pokemon))
    }) );
  }

  load_nests(): Promise<GameNests[]> {
    const games = [Game.SHIELD, Game.SWORD];
    return Promise.all( games.map(game => this.load_nests_in_game(game)) )
    .then(result => result.map((nests, game) => ({nests, game: games[game]}) ));
  }

}