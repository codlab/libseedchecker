const data = require("../configs/data.json");
const genders = require("../configs/genders.json");
const _nests = require("../configs/data.json");

const nests = _nests.map(([normal, rare, location]) => ({
    normal: normal - 1,
    rare: rare - 1,
    location
}))

export interface Data {
    locations: string[],
    natures: string[],
    names: string[],
    genders: string[],
    nest: string[],
    judge: string[]
}

export interface Nest {
    normal: number,
    rare: number,
    location
}

export interface ConfigsContent {
    data: Data,
    genders: string[],
    nests: Nest
}

const _configs: ConfigsContent = {
    data: data,
    genders: genders,
    nests: nests
}

export const Configs = _configs;