import { isArray, isFunction } from "../checkers/checkers.js";

function resolveKeys(keys, cb){

    if(isFunction(keys)){
        if(isArray(keys())){
            return keys()

        }else{
            cb(null);
            throw new Error("must return array(s)")
        }
    }
    else if(isArray(keys)){
        return keys

    }else{
        cb(null)
        throw new Error("key format is invalid, must be either array or function that returns array")
    }
}

export default resolveKeys