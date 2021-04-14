const get = (object, path, defaultValue) => {
    if (object === null) {
        return undefined;
    }
    if (typeof path === 'string') {
        path = path.replace('[', '.');
        path = path.replace('].', '.');
        path = path.split('.');
    } else if (Object.prototype.toString.call(path) !== '[object Array]') {
        return defaultValue;
    }

    let curVal = object;
    for(let index = 0;index < path.length;index++) {
        const propName = path[index];
        curVal = curVal[propName];
        if (curVal === void 0) {
            return defaultValue;
        }
    }

    return curVal;
}

module.exports = get;
