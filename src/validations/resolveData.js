import { isArray } from "../checkers/checkers.js";

function resolveData(data, cb){

    if(data){
        if(isArray(data)){
            return data

        }else{
            cb(null, "data must be an array");
            return false
        }
    }else{
        cb(null, "data is missing!");
        return false;
    }
}

export default resolveData