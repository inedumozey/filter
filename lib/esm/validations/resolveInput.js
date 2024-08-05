import { check } from "../utils/check";
function resolveInput(input, cb) {
    if (!input) {
        return true;
    }
    if (check.isFunction(input)) {
        if (check.isString(input()) || check.isNumber(input())) {
            return input();
        }
        else {
            cb(null);
            throw new Error("must return a string");
        }
    }
    else if (check.isString(input) || check.isNumber(input)) {
        return input;
    }
    else {
        cb(null);
        throw new Error("input format is invalid, must be either a string or function that returns a string");
    }
}
export default resolveInput;
