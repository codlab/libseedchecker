import { DataProvider, GameEvent, GameNest, GameNests, Game } from './DataProvider';
export declare class OnlineDataProvider implements DataProvider {
    load_events(): Promise<string[]>;
    load_event(name: string): Promise<GameEvent[]>;
    load_nests_in_game(game: Game): Promise<GameNest[]>;
    load_nests(): Promise<GameNests[]>;
}
