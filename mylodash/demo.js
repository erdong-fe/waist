const get = require('./Object/get');

/**
 * 测试get方法
 */
const object = { 'a': [{ 'b': { 'c': 3 } }] };
console.log(get(object, 'a[0].b.c'));
console.log(get(object, ['a', '0', 'b', 'c']));
console.log(get(object, 'a.b.c', 'default'));
