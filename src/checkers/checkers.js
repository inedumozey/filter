export const isString = (str)=> typeof str ==="string" ? true : false;

export const isNumber = (num)=> typeof num === "number" ? true : false;

export const isArray = (arr)=> Array.isArray(arr) ? true : false;

export const isFunction = (fn)=> typeof fn ==='function' ? true : false;

export const isObject = (obj)=> !Array.isArray(obj) && obj instanceof Object && typeof obj !=='function' ? true : false;