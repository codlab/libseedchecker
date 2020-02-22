"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PokemonEntry {
    constructor(data) {
        this.data = data;
        this.flawLessIvsCount = () => (this.data.FlawlessIVs || 0);
        this.isGigantamax = () => !!(this.data.IsGigantamax || 0);
        this.isShinyForced = () => !!(this.data.ShinyForced || 0);
        this.species = () => this.data.Species || 1;
        this.ability = () => this.data.Ability || 0;
        this.altForm = () => this.data.AltForm || 0;
    }
}
exports.PokemonEntry = PokemonEntry;
//# sourceMappingURL=PokemonEntry.js.map