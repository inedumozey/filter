const check = require("@mozeyinedu/check")

function resolveData(data, cb){

    if(data){
        if(check.isArray(data)){
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

module.exports = resolveData