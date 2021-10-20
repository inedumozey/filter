import { isArray } from "../checkers/checkers.js";

function resolveData(data, cb){

    if(data){
        if(isArray(data)){
            return data

        }else{
            cb(null);
            throw new Error("data must be an array")
        }
    }else{
        cb(null);
        throw new Error("data is missing!")
    }
}

export default resolveData