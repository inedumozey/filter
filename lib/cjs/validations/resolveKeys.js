"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("../utils/check");
function resolveKeys(keys, cb) {
    if (check_1.check.isFunction(keys)) {
        if (check_1.check.isArray(keys())) {
            return keys();
        }
        else {
            cb(null);
            throw new Error("function must returns array(s)");
        }
    }
    else if (check_1.check.isArray(keys)) {
        return keys;
    }
    else {
        cb(null);
        throw new Error("key format is invalid, must be either array or function that returns array");
    }
}
exports.default = resolveKeys;
