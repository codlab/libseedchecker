export interface PokemonEntryRepresentation {
  Ability: number, //always
  AltForm: number, 
  BonusTableID: number, //always
  DropTableID: number, //always
  DynamaxBoost: number,
  DynamaxLevel: number,
  EntryIndex: number, //always
  AbilityPermitted: number,
  Field_05: number,
  Field_06: number,
  Field_07: number,
  Field_08: number,
  Field_09: number,
  Field_0A: number,
  Field_13: number,
  Field_14: number,
  Field_15: number,
  Field_16: number,
  Field_1C: number,
  Field_1D: number,
  Field_1E: number,
  Field_1F: number,
  Field_20: number,
  Field_21: number,
  Field_22: number,
  Field_23: number,
  Field_24: number,
  FlawlessIVs: number,
  Gender: number,
  IsGigantamax: number, //always
  Level: number,
  MaxRank: number,
  MinRank: number,
  Move0: number,
  Move1: number,
  Move2: number,
  Move3: number,
  Nature: number,
  Probabilities: [number, number, number, number, number],
  ShinyForced: number,
  Species: number //always,
  LevelTableID: number
}

export class PokemonEntry {

  constructor(public data: PokemonEntryRepresentation) {

  }

  flawLessIvsCount = () => (this.data.FlawlessIVs||0);
  isGigantamax = () => !!(this.data.IsGigantamax||0);
  isShinyForced = () => !!(this.data.ShinyForced||0);
  species = () => this.data.Species || 1;

  ability = () => this.data.Ability || 0;

  altForm = () => this.data.AltForm || 0;
}