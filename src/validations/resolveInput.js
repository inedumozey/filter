import { isString, isFunction, isNumber } from "../checkers/checkers.js";

function resolveInput(input, cb){
    
    if(!input){
        return true
    }
    if(isFunction(input)){
        if(isString(input()) || isNumber(input())){
            return input()

        }else{
            cb(null);
            throw new Error("must return a string")
        }
    }
    else if(isString(input) || isNumber(input)){
        return input

    }else{
        cb(null)
        throw new Error("input format is invalid, must be either a string or function that returns a string")
    }
    
}

export default resolveInput