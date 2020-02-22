"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nest = require("../../configs/nests.json");
var Game;
(function (Game) {
    Game[Game["SHIELD"] = 0] = "SHIELD";
    Game[Game["SWORD"] = 1] = "SWORD";
})(Game = exports.Game || (exports.Game = {}));
exports.Nests = nest.forEach(([normal, rare, name]) => ({ normal, rare, name }));
//# sourceMappingURL=DataProvider.js.map