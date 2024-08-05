"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setSelectedPathValues(data, paths) {
    if (paths.length) {
        return paths.reduce((obj, key) => {
            if (obj && obj[key] !== 'undefined') {
                return obj[key];
            }
        }, data);
    }
    else {
        return null;
    }
}
exports.default = setSelectedPathValues;
