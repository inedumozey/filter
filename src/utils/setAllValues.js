import { isArray, isObject, isString } from "../checkers/checkers.js";


function setAllVals(data, key){

    let allValues = ""

    recurse(data, )
    function recurse(data){            

        for(let i=0; i < key.length; i++){
            for(let vals in data){
                
                if(typeof data[vals] === 'object' && !Array.isArray(data[vals])){
                    recurse(data[vals])                        
                }

                if(isArray(data[vals])){
                    for(let k of data[vals]){
                        if(isString(k)){
                            if(key[i] === vals){
                                allVals += k + " ";  
                            }
                        };
                        
                        if(isObject(k)){
                            recurse(k)
                        };
                    }
                }
                else{
                    if(key[i] === vals){
                        allValues += data[vals] + " ";  
                    }
                }
            }
        }
    }

    return allValues;
};

export default setAllVals;