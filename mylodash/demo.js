const get = require('./Object/get');
const drop = require('./Array/drop');

/**
 * 测试Object.get方法
 */
// const object = { 'a': [{ 'b': { 'c': 3 } }] };
// console.log(get(object, 'a[0].b.c'));
// console.log(get(object, ['a', '0', 'b', 'c']));
// console.log(get(object, 'a.b.c', 'default'));

/**
 * 测试Array.drop方法
 */
const arr = [1,2,3,4];
const obj = {name: 'drop'};
const str = '123 4';
const nullObj = null;
const undefObj = undefined;
console.log(drop(arr));
console.log(drop(arr, 2));
console.log(drop(arr, 5));
console.log(drop(obj, 5));
console.log(drop(str));
console.log(drop(str, 1));
console.log(drop(str, 6));
console.log(drop(nullObj));
console.log(drop(nullObj, 2));
console.log(drop(undefObj));
console.log(drop(undefObj,2 ));
