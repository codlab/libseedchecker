import { OnlineDataProvider } from './data/OnlineDataProvider';
//
// original file : https://github.com/Leanny/leanny.github.io/blob/master/seedchecker/common.js
//

import BigIntegerDefinition from "big-integer";
const bigInt = require("big-integer");
import Toxtricity from "./toxtricity"; 
import GenderRatios from "../configs/genders.json";
import Data from "./data";

import { PokemonEntry } from "./data/PokemonEntry";

export { PokemonEntry } from "./data/PokemonEntry";
export { PokemonEntryRepresentation } from "./data/PokemonEntry";
export { OnlineDataProvider } from "./data/OnlineDataProvider";

export type SeedInteger = BigIntegerDefinition.BigInteger;
export enum SHINY {
    NONE,
    STAR,
    SQUARE
}

export enum GENDERS {
    MALE,
    FEMALE,
    GENDERLESS
}

export interface SeedInformation {
    seed: SeedInteger,
    frame: number
}

function asGender(idx: number): GENDERS {
    switch(idx) {
        case 2: return GENDERS.GENDERLESS;
        case 1: return GENDERS.FEMALE;
        default: return GENDERS.MALE;
    }
}

function rotl(x: SeedInteger, k: SeedInteger) {
    var a = x.shiftLeft(k) 
    a = a.and(MASK)
    var b = x.shiftRight(bigInt[64].minus(k))
    return a.or(b)
}

const MASK = bigInt("FFFFFFFFFFFFFFFF", 16);
const SMASK = bigInt("FFFFFFFF", 16);
const XC = bigInt("82A2B175229D6A5B", 16);

class PokemonFrame {
    public EventHash = bigInt("1721953670860364124");
    public s0: SeedInteger = bigInt[0]
    public s1: SeedInteger = bigInt[0]

    public seed: SeedInteger;
    public original_seed: SeedInteger;
    public frame: number;
    public original_frame: number;

    constructor(seed: SeedInteger|string, frame?: number) {
        if(this.isBigInteger(seed)) {
            this.original_seed = seed;
        } else {
            this.original_seed = bigInt(seed, 16);
        }

        this.seed = this.original_seed;

        this.original_frame = frame || 0;
        this.frame = frame || 0;

        this.setSeed(this.original_seed);
    }

    private isBigInteger(seed: SeedInteger | string): seed is SeedInteger {
        return (<SeedInteger>seed).divide !== undefined;
    }

    public current: () => SeedInformation = () => ({seed: this.seed, frame: this.frame});
    public original: () => SeedInformation = () => ({seed: this.original_seed, frame: this.original_frame});

    private setSeed(seed: SeedInteger) {
        this.s0 = seed;
        this.s1 = XC;
    }

    public next() {
        var res = this.s0.plus(this.s1) 
        res = res.and(MASK)
        this.s1 = this.s0.xor(this.s1)
        this.s0 = rotl(this.s0, bigInt[24]).xor(this.s1).xor((this.s1.shiftLeft(bigInt[16])).and(MASK))
        this.s1 = rotl(this.s1, bigInt[37])
        return res 
    }

    public nextInt(num: SeedInteger, mask: SeedInteger) {
        var s = this.next().and(mask)
        while(s.compare(num) >= 0) {
            s = this.next().and(mask)
        }
        return Number(s);
    }

    public GetShinyValue(n: number) {
        return this.GetShinyXor(n) >>> 4
    }

    public GetShinyXor(n: number) {
        return (n >>> 16) ^ (n&0xFFFF)
    }

    public GetShinyType(pid: number, tidsid: number): SHINY {
        var p = this.GetShinyXor(pid);
        var t = this.GetShinyXor(tidsid);
        if (p == t)
            return SHINY.SQUARE; // square;
        if ((p ^ t) < 0x10)
            return SHINY.STAR; // star
        return SHINY.NONE;
    }

    public advanceFrame(frame: number) {
        var seed = this.seed;
        for(var i = 0; i < frame; i++) {
            seed = seed.plus(XC)
            seed = seed.and(MASK)
        }
        this.seed = seed;
        this.frame += frame;
    }

    public getShinyState() {
        this.setSeed(this.seed);

        var ec = this.nextInt(SMASK, SMASK)
        var sidtid = this.nextInt(SMASK, SMASK)
        var pid = this.nextInt(SMASK, SMASK)
        var shiny = this.GetShinyType(pid, sidtid)

        return {
            ec,
            sidtid,
            pid,
            shiny: shiny,
            current: this.current(),
            original: this.original()
        }
    }

    public getData(pkmn: PokemonEntry) {
        var ec = this.nextInt(SMASK, SMASK)
        var sidtid = this.nextInt(SMASK, SMASK)
        var pid = this.nextInt(SMASK, SMASK)
        var shiny = this.GetShinyType(pid, sidtid)

        if(pkmn.isShinyForced()) {
            shiny = 2
        }

        var iv = [-1, -1, -1, -1, -1, -1]
        var i = 0
        while(i < pkmn.flawLessIvsCount()) {
            var s = this.nextInt(bigInt[6], bigInt[7]);
            if (iv[s] == -1) {
                i += 1
                iv[s] = 31
            }
        }
        for(i = 0; i < 6; i++) {
            if(iv[i] == -1) {
                iv[i] = this.nextInt(bigInt[32], bigInt[31])
            }
        }
        var ability: string = "1";
        var abilityNames = ["1", "2", "H"];
        var value_ability = pkmn.ability();
        if(value_ability < 3) {
            ability = "" + value_ability;
        } else {
            if(value_ability == 3) {
                ability = abilityNames[this.nextInt(bigInt[2], bigInt[1])];
            } else {
                ability = abilityNames[this.nextInt(bigInt[3], bigInt[3])];
            }
        }
        
        var gt = GenderRatios[pkmn.species()]
        var gender: GENDERS = GENDERS.MALE
        if(gt == 255) {
            gender = asGender(2)
        } else if (gt == 254) {
            gender = asGender(1)
        } else if (gt == 0) {
            gender = asGender(0)
        } else {
            gender = asGender(this.nextInt(bigInt[253], bigInt[255]) + 1 < gt? 1 : 0)
        }
        
        var nature;
        if(pkmn.species() == 849) {
            var natures: number[] = [];
            if (pkmn.altForm() == 0) {
                natures = Toxtricity.natures.amplified
            } else {
                nature = Toxtricity.natures.lowkey;
            }
            nature = natures[this.nextInt(bigInt[natures.length], bigInt[31])];
        } else {
            nature = this.nextInt(bigInt[25], bigInt[31]);
        }

        return {
            shiny: shiny,
            hp: iv[0],
            atk: iv[1],
            def: iv[2], 
            spa: iv[3], 
            spd: iv[4], 
            spe: iv[5], 
            nature: Data.natures[nature],
            gender: Data.genders[gender],
            ability: ability,
            current: this.current(),
            original: this.original()
        }
    }
}

export default PokemonFrame;