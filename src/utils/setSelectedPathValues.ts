
function setSelectedPathValues(data: any, paths: any) {

    if (paths.length) {
        return paths.reduce((obj: any, key: any) => {

            if (obj && obj[key] !== 'undefined') {
                return obj[key]
            }

        }, data)

    } else {
        return null
    }
}

export default setSelectedPathValues