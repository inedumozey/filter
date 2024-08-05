"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("../utils/check");
function resolvePaths(paths, cb) {
    if (!paths) {
        return true;
    }
    if (check_1.check.isFunction(paths)) {
        if (check_1.check.isObject(paths())) {
            let obj = paths();
            for (let i = 0; i < Object.values(obj).length; i++) {
                if (check_1.check.isArray(Object.values(obj)[i])) {
                    return paths();
                }
                else {
                    cb(null);
                    throw new Error("paths must return an object whose value(s) are array(s)");
                }
            }
        }
        else {
            cb(null);
            throw new Error("paths must return an object");
        }
        ;
    }
    else if (check_1.check.isObject(paths)) {
        return paths;
    }
    else {
        cb(null);
        throw new Error("paths format is invalid, must be either object or function that an object");
    }
}
exports.default = resolvePaths;
