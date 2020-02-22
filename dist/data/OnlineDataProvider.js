"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PokemonEntry_1 = require("./PokemonEntry");
const https_1 = require("https");
const DataProvider_1 = require("./DataProvider");
const events_endpoint = "https://raw.githubusercontent.com/Leanny/SeedSearcher/master/Events/files.json";
const event_endpoint = "https://raw.githubusercontent.com/Leanny/SeedSearcher/master/Events/";
class OnlineDataProvider {
    load_events() {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield https_1.default.get(events_endpoint);
            return list;
        });
    }
    load_event(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Tables } = yield https_1.default.get(event_endpoint + name);
            return Tables.map((item, index) => {
                const { Entries } = item;
                return {
                    game: index,
                    pokemons: Entries.map(item => new PokemonEntry_1.PokemonEntry(item))
                };
            });
        });
    }
    load_nests_in_game(game) {
        return __awaiter(this, void 0, void 0, function* () {
            const nests = yield https_1.default.get(`https://leanny.github.io/seedchecker/nest${game}.json`);
            return nests.map((nest, nestId) => ({
                nestId,
                pokemons: nest.Entries.map(pokemon => new PokemonEntry_1.PokemonEntry(pokemon))
            }));
        });
    }
    load_nests() {
        return Promise.all([DataProvider_1.Game.SHIELD, DataProvider_1.Game.SWORD].map(game => this.load_nests_in_game(game))).then(result => result.map((nests, game) => ({ nests, game })));
    }
}
exports.OnlineDataProvider = OnlineDataProvider;
//# sourceMappingURL=OnlineDataProvider.js.map