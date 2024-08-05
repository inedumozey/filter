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
export default setSelectedPathValues;
