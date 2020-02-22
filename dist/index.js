"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bigInt = require("big-integer");
const toxtricity_1 = require("./toxtricity");
const genders_json_1 = require("../configs/genders.json");
const data_1 = require("./data");
var PokemonEntry_1 = require("./data/PokemonEntry");
exports.PokemonEntry = PokemonEntry_1.PokemonEntry;
var OnlineDataProvider_1 = require("./data/OnlineDataProvider");
exports.OnlineDataProvider = OnlineDataProvider_1.OnlineDataProvider;
var SHINY;
(function (SHINY) {
    SHINY[SHINY["NONE"] = 0] = "NONE";
    SHINY[SHINY["STAR"] = 1] = "STAR";
    SHINY[SHINY["SQUARE"] = 2] = "SQUARE";
})(SHINY = exports.SHINY || (exports.SHINY = {}));
var GENDERS;
(function (GENDERS) {
    GENDERS[GENDERS["MALE"] = 0] = "MALE";
    GENDERS[GENDERS["FEMALE"] = 1] = "FEMALE";
    GENDERS[GENDERS["GENDERLESS"] = 2] = "GENDERLESS";
})(GENDERS = exports.GENDERS || (exports.GENDERS = {}));
function asGender(idx) {
    switch (idx) {
        case 2: return GENDERS.GENDERLESS;
        case 1: return GENDERS.FEMALE;
        default: return GENDERS.MALE;
    }
}
function rotl(x, k) {
    var a = x.shiftLeft(k);
    a = a.and(MASK);
    var b = x.shiftRight(bigInt[64].minus(k));
    return a.or(b);
}
const MASK = bigInt("FFFFFFFFFFFFFFFF", 16);
const SMASK = bigInt("FFFFFFFF", 16);
const XC = bigInt("82A2B175229D6A5B", 16);
class PokemonFrame {
    constructor(seed, frame) {
        this.EventHash = bigInt("1721953670860364124");
        this.s0 = bigInt[0];
        this.s1 = bigInt[0];
        this.current = () => ({ seed: this.seed, frame: this.frame });
        this.original = () => ({ seed: this.original_seed, frame: this.original_frame });
        if (this.isBigInteger(seed)) {
            this.original_seed = seed;
        }
        else {
            this.original_seed = bigInt(seed, 16);
        }
        this.seed = this.original_seed;
        this.original_frame = frame || 0;
        this.frame = frame || 0;
        this.setSeed(this.original_seed);
    }
    isBigInteger(seed) {
        return seed.divide !== undefined;
    }
    setSeed(seed) {
        this.s0 = seed;
        this.s1 = XC;
    }
    next() {
        var res = this.s0.plus(this.s1);
        res = res.and(MASK);
        this.s1 = this.s0.xor(this.s1);
        this.s0 = rotl(this.s0, bigInt[24]).xor(this.s1).xor((this.s1.shiftLeft(bigInt[16])).and(MASK));
        this.s1 = rotl(this.s1, bigInt[37]);
        return res;
    }
    nextInt(num, mask) {
        var s = this.next().and(mask);
        while (s.compare(num) >= 0) {
            s = this.next().and(mask);
        }
        return Number(s);
    }
    GetShinyValue(n) {
        return this.GetShinyXor(n) >>> 4;
    }
    GetShinyXor(n) {
        return (n >>> 16) ^ (n & 0xFFFF);
    }
    GetShinyType(pid, tidsid) {
        var p = this.GetShinyXor(pid);
        var t = this.GetShinyXor(tidsid);
        if (p == t)
            return SHINY.SQUARE; // square;
        if ((p ^ t) < 0x10)
            return SHINY.STAR; // star
        return SHINY.NONE;
    }
    advanceFrame(frame) {
        var seed = this.seed;
        for (var i = 0; i < frame; i++) {
            seed = seed.plus(XC);
            seed = seed.and(MASK);
        }
        this.seed = seed;
        this.frame += frame;
    }
    getShinyState() {
        this.setSeed(this.seed);
        var ec = this.nextInt(SMASK, SMASK);
        var sidtid = this.nextInt(SMASK, SMASK);
        var pid = this.nextInt(SMASK, SMASK);
        var shiny = this.GetShinyType(pid, sidtid);
        return {
            ec,
            sidtid,
            pid,
            shiny: shiny,
            current: this.current(),
            original: this.original()
        };
    }
    getData(pkmn) {
        var ec = this.nextInt(SMASK, SMASK);
        var sidtid = this.nextInt(SMASK, SMASK);
        var pid = this.nextInt(SMASK, SMASK);
        var shiny = this.GetShinyType(pid, sidtid);
        if (pkmn.isShinyForced()) {
            shiny = 2;
        }
        var iv = [-1, -1, -1, -1, -1, -1];
        var i = 0;
        while (i < pkmn.flawLessIvsCount()) {
            var s = this.nextInt(bigInt[6], bigInt[7]);
            if (iv[s] == -1) {
                i += 1;
                iv[s] = 31;
            }
        }
        for (i = 0; i < 6; i++) {
            if (iv[i] == -1) {
                iv[i] = this.nextInt(bigInt[32], bigInt[31]);
            }
        }
        var ability = "1";
        var abilityNames = ["1", "2", "H"];
        var value_ability = pkmn.ability();
        if (value_ability < 3) {
            ability = "" + value_ability;
        }
        else {
            if (value_ability == 3) {
                ability = abilityNames[this.nextInt(bigInt[2], bigInt[1])];
            }
            else {
                ability = abilityNames[this.nextInt(bigInt[3], bigInt[3])];
            }
        }
        var gt = genders_json_1.default[pkmn.species()];
        var gender = GENDERS.MALE;
        if (gt == 255) {
            gender = asGender(2);
        }
        else if (gt == 254) {
            gender = asGender(1);
        }
        else if (gt == 0) {
            gender = asGender(0);
        }
        else {
            gender = asGender(this.nextInt(bigInt[253], bigInt[255]) + 1 < gt ? 1 : 0);
        }
        var nature;
        if (pkmn.species() == 849) {
            var natures = [];
            if (pkmn.altForm() == 0) {
                natures = toxtricity_1.default.natures.amplified;
            }
            else {
                nature = toxtricity_1.default.natures.lowkey;
            }
            nature = natures[this.nextInt(bigInt[natures.length], bigInt[31])];
        }
        else {
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
            nature: data_1.default.natures[nature],
            gender: data_1.default.genders[gender],
            ability: ability,
            current: this.current(),
            original: this.original()
        };
    }
}
exports.default = PokemonFrame;
//# sourceMappingURL=index.js.map