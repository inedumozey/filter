import { check } from "./check";
function setAllVals(data, key) {
    let allValues = "";
    recurse(data);
    function recurse(data) {
        for (let i = 0; i < key.length; i++) {
            for (let vals in data) {
                if (typeof data[vals] === 'object' && !check.isArray(data[vals])) {
                    recurse(data[vals]);
                }
                if (check.isArray(data[vals])) {
                    for (let k of data[vals]) {
                        if (check.isString(k)) {
                            if (key[i] === vals) {
                                allValues += k + " ";
                            }
                        }
                        ;
                        if (check.isObject(k)) {
                            recurse(k);
                        }
                        ;
                    }
                }
                else {
                    if (key[i] === vals) {
                        allValues += data[vals] + " ";
                    }
                }
            }
        }
    }
    return allValues;
}
;
export default setAllVals;
