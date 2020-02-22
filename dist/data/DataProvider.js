"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nests_1 = require("../../configs/nests");
var Game;
(function (Game) {
    Game[Game["SHIELD"] = 0] = "SHIELD";
    Game[Game["SWORD"] = 1] = "SWORD";
})(Game = exports.Game || (exports.Game = {}));
exports.Nests = nests_1.default.forEach(([normal, rare, name]) => ({ normal, rare, name }));
//# sourceMappingURL=DataProvider.js.map