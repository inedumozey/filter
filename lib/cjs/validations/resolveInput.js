"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("../utils/check");
function resolveInput(input, cb) {
    if (!input) {
        return true;
    }
    if (check_1.check.isFunction(input)) {
        if (check_1.check.isString(input()) || check_1.check.isNumber(input())) {
            return input();
        }
        else {
            cb(null);
            throw new Error("must return a string");
        }
    }
    else if (check_1.check.isString(input) || check_1.check.isNumber(input)) {
        return input;
    }
    else {
        cb(null);
        throw new Error("input format is invalid, must be either a string or function that returns a string");
    }
}
exports.default = resolveInput;
