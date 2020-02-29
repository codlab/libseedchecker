"use strict";
exports.__esModule = true;
var Git = require("nodegit");
var fs = require("fs");
var _ncp = require("ncp").ncp;
var rmdirRecursive = require('rmdir-recursive');
var rmdir = fs.rmdir;
function ncp(origin, dest) {
    return new Promise(function (resolve, reject) {
        _ncp(origin, dest, function (err) {
            if (err)
                reject(err);
            resolve();
        });
    });
}
function remove(path) {
    return new Promise(function (resolve, reject) {
        rmdirRecursive("./seed", function (err) {
            if (err) {
                console.log(err);
                resolve(false);
            }
            else {
                resolve(true);
            }
        }, { recursive: true });
    });
}
remove("./seed")
    .then(function () { return Git.Clone.clone("https://github.com/Leanny/SeedSearcher", "./seed"); })
    .then(function () { return ncp("./seed/Events", "../statics"); })
    .then(function () { return remove("./seed"); })
    .then(function () {
    console.log("done");
})["catch"](function (err) { return console.log(err); });
