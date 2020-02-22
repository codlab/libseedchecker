const _Data = require("../configs/data.json");

export interface Data {
  locations: string[],
  natures: string[],
  names: string[],
  genders: string[],
  nest: string,
  judge: string[]
}

const content: Data = { ..._Data }

export default content;
