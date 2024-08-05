"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("../utils/check");
function resolveData(data, cb) {
    if (data) {
        if (check_1.check.isArray(data)) {
            return data;
        }
        else if (check_1.check.isFunction(data)) {
            return data();
        }
        else {
            cb(null);
            throw new Error("data must be an array or function that returns an array");
        }
    }
    else {
        cb(null);
        throw new Error("data is missing!");
    }
}
exports.default = resolveData;
