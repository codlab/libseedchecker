"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = require("../configs/data.json");
const genders = require("../configs/genders.json");
const _nests = require("../configs/nests.json");
const names = require("../configs/names.json");
const nests = _nests.map(([normal, rare, location]) => ({
    normal: normal - 1,
    rare: rare - 1,
    location
}));
const _configs = {
    data: data,
    genders: genders,
    names,
    nests
};
exports.Configs = _configs;
//# sourceMappingURL=configs.js.map