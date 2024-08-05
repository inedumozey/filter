"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const setSelectedPathValues_js_1 = __importDefault(require("./utils/setSelectedPathValues.js"));
const resolveKeys_js_1 = __importDefault(require("./validations/resolveKeys.js"));
const resolvePaths_js_1 = __importDefault(require("./validations/resolvePaths.js"));
const resolveData_js_1 = __importDefault(require("./validations/resolveData.js"));
const resolveInput_js_1 = __importDefault(require("./validations/resolveInput.js"));
const setAllValues_js_1 = __importDefault(require("./utils/setAllValues.js"));
function filter({ data = null, paths = {}, keys = [], input = "", cb = (data) => { } }) {
    // resolving validations
    let path = (0, resolvePaths_js_1.default)(paths, cb);
    let key = (0, resolveKeys_js_1.default)(keys, cb);
    let dataArray = (0, resolveData_js_1.default)(data, cb);
    let inputStr = (0, resolveInput_js_1.default)(input, cb);
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
                selectedValues += (0, setSelectedPathValues_js_1.default)(data, selectedPaths[i]);
            }
            // send the data and key in each filter loop to "setAllValues" function to generate and return their values for the match keys
            const allValues = (0, setAllValues_js_1.default)(data, key);
            // check if input values are found in the generated values, if true filter the objcet
            return ((String(allValues).toLowerCase().includes(String(input).toLowerCase()) || String(selectedValues).toLowerCase().includes(String(input).toLowerCase())));
        });
        cb(filterArray);
        return filterArray;
    }
}
exports.default = filter;
