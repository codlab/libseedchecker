const Git = require("nodegit");
import {promisify} from "es6-promisify";
import { rejects } from "assert";
const fs = require("fs");
const _ncp = require("ncp").ncp;
var rmdirRecursive = require('rmdir-recursive');

const rmdir = fs.rmdir;


function ncp(origin: string, dest: string) {
    return new Promise((resolve, reject) => {
        _ncp(origin, dest, (err?: Error) => {
            if(err) reject(err);
            resolve();
        });
    });
}
function remove(path: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        rmdirRecursive("./seed", (err) => {
            if(err) {
                console.log(err);
                resolve(false);
            } else {
                resolve(true);
            }
        }, {recursive: true})
    });
}

remove("./seed")
.then(() => Git.Clone.clone("https://github.com/Leanny/SeedSearcher", "./seed"))
.then(() => ncp("./seed/Events", "../statics"))
.then(() => remove("./seed"))
.then(() => {
    console.log("done");
})
.catch(err => console.log(err))

