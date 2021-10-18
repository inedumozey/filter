import { isArray, isObject, isString } from './checkers/checkers.js';
import selectedPathVals from './utils/selectedPathVals.js';
import resolveKeys from './validations/resolveKeys.js';
import resolvePaths from './validations/resolvePaths.js';
import resolveData from './validations/resolveData.js';
import resolveInput from './validations/resolveInput.js';
import resolveCallback from './validations/validateCallback.js';


function fineFilter({data=null, paths={}, keys=[], input="", cb=(data, error)=>{}}){

    // resolving validations
    let path = resolvePaths(paths, cb);
    let key = resolveKeys(keys, cb);
    let dataArray = resolveData(data, cb);
    let inputStr = resolveInput(input, cb);

    // check if all validations are passed
    if(path && key && dataArray && inputStr){
        
        const filter = data.filter(data=>{

            let selectedPaths = []
            for(let keys in path){
                selectedPaths.push(path[keys])
            }
        
            let selectedVal ="";   
            for(let i=0; i<selectedPaths.length; i++){
                selectedVal += selectedPathVals(data, selectedPaths[i])
            }
        
            // get the values for the match keys
            let allVals = ""
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
                                allVals += data[vals] + " ";  
                            }
                        }
                    }
                }
            }
            
            if(selectedVal === undefined){
                return (String(allVals).toLowerCase().includes(String(input).toLowerCase()));
                
            }else{
                return ((String(allVals).toLowerCase().includes(String(input).toLowerCase()) || String(selectedVal).toLowerCase().includes(String(input).toLowerCase())));
            }            
        });
        
        cb(filter, null)
    }
    
    return resolveCallback()
    
}

export default fineFilter;

