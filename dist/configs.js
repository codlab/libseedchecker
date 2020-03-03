"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = require("../configs/data.json");
const genders = require("../configs/genders.json");
const _nests = require("../configs/data.json");
const nests = _nests.map(([normal, rare, location]) => ({
    normal: normal - 1,
    rare: rare - 1,
    location
}));
const _configs = {
    data: data,
    genders: genders,
    nests: nests
};
exports.Configs = _configs;
//# sourceMappingURL=configs.js.map