"use strict";
// generics that reverses objects
function reverseObjects(value1, value2) {
    return [value2, value1];
}
const reversePair = reverseObjects(20, "hello");
console.log(reversePair);
