import { isFunction, isObject, isArray } from "../checkers/checkers.js";

function resolvePaths(paths, cb){
    if(!paths){
        return true
    }
    if(isFunction(paths)){

        if(isObject(paths())){
            let obj = paths()

            for(let i=0; i<Object.values(obj).length; i++){
                
                if(isArray(Object.values(obj)[i])){

                    return paths()
                }else{
                    cb(null, "paths must return an object whose value(s) are array(s)");
                    return false
                }  
            }            

        }else{
            cb(null, "paths must return an object");
            return false
        };
    }
    else if(isObject(paths)){
        return paths

    }else{
        cb(null, "paths format is invalid, must be either object or function that an object")
        return false
    }
}

export default resolvePaths