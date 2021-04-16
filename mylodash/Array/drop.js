function drop(arr, n) {
    const protoToString = Object.prototype.toString
    if (protoToString.call(arr) !== '[object Array]') {
        if (protoToString.call(arr) === '[object String]') {
            arr = arr.split('');
        } else {
            arr = [];
        }
    }
    n = n === undefined ? 1 : n;
    return arr.slice(n);
}

module.exports = drop;