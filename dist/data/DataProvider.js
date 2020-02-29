"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nest = require("../../configs/nests.json");
var Game;
(function (Game) {
    Game[Game["NONE"] = 0] = "NONE";
    Game[Game["SWORD"] = 1] = "SWORD";
    Game[Game["SHIELD"] = 2] = "SHIELD";
})(Game = exports.Game || (exports.Game = {}));
exports.Nests = nest.forEach(([normal, rare, name]) => ({ normal, rare, name }));
//# sourceMappingURL=DataProvider.js.map