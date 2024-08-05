"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setSelectedPathValues = require('./utils/setSelectedPathValues.js');
const resolveKeys = require('./validations/resolveKeys.js');
const resolvePaths = require('./validations/resolvePaths.js');
const resolveData = require('./validations/resolveData.js');
const resolveInput = require('./validations/resolveInput.js');
const setAllValues = require('./utils/setAllValues.js');
function filter({ data = null, paths = {}, keys = [], input = "", cb = (data) => { } }) {
    // resolving validations
    let path = resolvePaths(paths, cb);
    let key = resolveKeys(keys, cb);
    let dataArray = resolveData(data, cb);
    let inputStr = resolveInput(input, cb);
    // check if all validations are passed
    if (path && key && dataArray && inputStr) {
        const filterArray = dataArray.filter((data) => {
            //loop through all the paths and push them to a single array
            let selectedPaths = [];
            for (let keys in path) {
                selectedPaths.push(path[keys]);
            }
            //send selected paths in each loop to setSelectedPathValues function to generate and return their values
            let selectedValues = "";
            for (let i = 0; i < selectedPaths.length; i++) {
                selectedValues += setSelectedPathValues(data, selectedPaths[i]);
            }
            // send the data and key in each filter loop to "setAllValues" function to generate and return their values for the match keys
            const allValues = setAllValues(data, key);
            // check if input values are found in the generated values, if true filter the objcet
            return ((String(allValues).toLowerCase().includes(String(input).toLowerCase()) || String(selectedValues).toLowerCase().includes(String(input).toLowerCase())));
        });
        cb(filterArray);
        return filterArray;
    }
}
exports.default = filter;
