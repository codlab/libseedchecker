import { PokemonEntry } from './PokemonEntry';
import https from "https";

import { DataProvider, GameEvent, GameNest, GameNests, Game } from './DataProvider';

const events_endpoint = "https://raw.githubusercontent.com/Leanny/SeedSearcher/master/Events/files.json";
const event_endpoint = "https://raw.githubusercontent.com/Leanny/SeedSearcher/master/Events/";

export class OnlineDataProvider implements DataProvider {

  async load_events(): Promise<string[]> {
    const list = await https.get(events_endpoint);

    return list;
  }

  async load_event(name: string): Promise<GameEvent[]> {
    const { Tables } = await https.get(event_endpoint + name);

    return Tables.map((item, index) => {
      const { Entries } = item;

      return {
        game: index,
        pokemons: Entries.map(item => new PokemonEntry(item))
      };
    })
  }

  async load_nests_in_game(game: Game): Promise<GameNest[]> {
    const nests = await https.get(`https://leanny.github.io/seedchecker/nest${game}.json`);

    return nests.map((nest, nestId) => ({
      nestId,
      pokemons: nest.Entries.map(pokemon => new PokemonEntry(pokemon))
    }) );
  }

  load_nests(): Promise<GameNests[]> {
    return Promise.all(
      [Game.SHIELD, Game.SWORD].map(game => this.load_nests_in_game(game))
    ).then(result => result.map((nests, game) => ({nests, game}) ));
  }

}