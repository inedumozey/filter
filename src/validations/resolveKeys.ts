import { check } from "../utils/check";

function resolveKeys(keys: any, cb: any) {

    if (check.isFunction(keys)) {
        if (check.isArray(keys())) {
            return keys()

        } else {
            cb(null);
            throw new Error("function must returns array(s)")
        }
    }
    else if (check.isArray(keys)) {
        return keys

    } else {
        cb(null)
        throw new Error("key format is invalid, must be either array or function that returns array")
    }
}

export default resolveKeys