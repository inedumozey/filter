import { isArray, isFunction } from "../checkers/checkers.js";

function resolveKeys(keys, cb){

    if(isFunction(keys)){
        if(isArray(keys())){
            return keys()

        }else{
            cb(null, "must return array(s)");
            return false
        }
    }
    else if(isArray(keys)){
        return keys

    }else{
        cb(null, "key format is invalid, must be either array or function that returns array")
        return false
    }
}

export default resolveKeys