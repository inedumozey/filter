
export const check: any = {
    isString: (str: string) => typeof str === "string" ? true : false,
    isNumber: (num: string) => typeof num === "number" ? true : false,
    isArray: (arr: any) => Array.isArray(arr) ? true : false,
    isFunction: (fn: any) => typeof fn === 'function' ? true : false,
    isObject: (obj: any) => !Array.isArray(obj) && obj instanceof Object && typeof obj !== 'function' ? true : false
}

