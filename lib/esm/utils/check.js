export const check = {
    isString: (str) => typeof str === "string" ? true : false,
    isNumber: (num) => typeof num === "number" ? true : false,
    isArray: (arr) => Array.isArray(arr) ? true : false,
    isFunction: (fn) => typeof fn === 'function' ? true : false,
    isObject: (obj) => !Array.isArray(obj) && obj instanceof Object && typeof obj !== 'function' ? true : false
};
