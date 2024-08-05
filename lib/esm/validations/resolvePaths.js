import { check } from "../utils/check";
function resolvePaths(paths, cb) {
    if (!paths) {
        return true;
    }
    if (check.isFunction(paths)) {
        if (check.isObject(paths())) {
            let obj = paths();
            for (let i = 0; i < Object.values(obj).length; i++) {
                if (check.isArray(Object.values(obj)[i])) {
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
    else if (check.isObject(paths)) {
        return paths;
    }
    else {
        cb(null);
        throw new Error("paths format is invalid, must be either object or function that an object");
    }
}
export default resolvePaths;
