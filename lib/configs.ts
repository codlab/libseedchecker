const data = require("../configs/data.json");
const genders = require("../configs/genders.json");
const _nests = require("../configs/nests.json");
const names = require("../configs/names.json");

const nests = _nests.map(([normal, rare, location]: number[]) => ({
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
    location: number
}

export interface ConfigsContent {
    data: Data,
    genders: string[],
    names: string[],
    nests: Nest
}

const _configs: ConfigsContent = {
    data: data,
    genders: genders,
    names,
    nests
}

export const Configs = _configs;