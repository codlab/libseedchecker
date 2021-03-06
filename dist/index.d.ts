import BigIntegerDefinition from "big-integer";
import { PokemonEntry } from "./data/PokemonEntry";
export { Configs } from "./configs";
export { CalcIVS, PokemonList, PokemonItem } from './iv';
export { PokemonEntry } from "./data/PokemonEntry";
export { PokemonEntryRepresentation } from "./data/PokemonEntry";
export { Game } from "./data/DataProvider";
export { OnlineDataProvider } from "./data/OnlineDataProvider";
export declare type SeedInteger = BigIntegerDefinition.BigInteger;
export declare enum SHINY {
    NONE = 0,
    STAR = 1,
    SQUARE = 2,
}
export declare enum GENDERS {
    MALE = 0,
    FEMALE = 1,
    GENDERLESS = 2,
}
export interface SeedInformation {
    seed: SeedInteger;
    frame: number;
}
declare class PokemonFrame {
    EventHash: any;
    s0: SeedInteger;
    s1: SeedInteger;
    seed: SeedInteger;
    original_seed: SeedInteger;
    frame: number;
    original_frame: number;
    constructor(seed: SeedInteger | string, frame?: number);
    private isBigInteger(seed);
    current: () => SeedInformation;
    original: () => SeedInformation;
    private setSeed(seed);
    next(): BigIntegerDefinition.BigInteger;
    nextInt(num: SeedInteger, mask: SeedInteger): number;
    GetShinyValue(n: number): number;
    GetShinyXor(n: number): number;
    GetShinyType(pid: number, tidsid: number): SHINY;
    advanceFrame(frame: number): void;
    getShinyState(pkmn?: PokemonEntry): {
        ec: number;
        sidtid: number;
        pid: number;
        shiny: SHINY;
        current: SeedInformation;
        original: SeedInformation;
        hp: number;
        atk: number;
        def: number;
        spa: number;
        spd: number;
        spe: number;
        nature: string;
        gender: string;
        ability: string;
    } | {
        ec: number;
        sidtid: number;
        pid: number;
        shiny: SHINY;
        current: SeedInformation;
        original: SeedInformation;
    };
    getData(pkmn: PokemonEntry): {
        ec: number;
        sidtid: number;
        pid: number;
        shiny: SHINY;
        current: SeedInformation;
        original: SeedInformation;
        hp: number;
        atk: number;
        def: number;
        spa: number;
        spd: number;
        spe: number;
        nature: string;
        gender: string;
        ability: string;
    };
}
export default PokemonFrame;
