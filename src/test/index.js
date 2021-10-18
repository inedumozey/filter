import fineFilter from "../fine-filter"
import data from "./data"

//test

let input =""

fineFilter({

    data,
    keys: ()=>{
        return []
    },
    paths: ()=>{
        return {
            items: [],
            types: []
        }
    },
    input,
    cb:(data, error)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log(data);
        }
    }

})