import { isString, isFunction, isNumber } from "../checkers/checkers.js";

function resolveInput(input, cb){
    
    if(!input){
        return true
    }
    if(isFunction(input)){
        if(isString(input()) || isNumber(input())){
            return input()

        }else{
            cb(null, "must return a string");
            return false
        }
    }
    else if(isString(input) || isNumber(input)){
        return input

    }else{
        cb(null, "input format is invalid, must be either a string or function that returns a string")
        return false
    }
    
}

export default resolveInput