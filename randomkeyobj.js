"use strict";
function getRandomKeyValuePair(obj) {
    const keys = Object.keys(obj);
    const randkey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randkey, value: obj[randkey] };
}
const strobj = { a: "apple", b: "banana", c: "cherry" };
const res = getRandomKeyValuePair(strobj);
console.log(res);
