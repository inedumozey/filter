import { check } from "../utils/check";
function resolveData(data, cb) {
    if (data) {
        if (check.isArray(data)) {
            return data;
        }
        else if (check.isFunction(data)) {
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
export default resolveData;
