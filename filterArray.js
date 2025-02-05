"use strict";
function filterArray(array, condition) {
    return array.filter((item) => condition(item));
}
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evennumbers = filterArray(numberArray, (num) => num % 2 === 0);
console.log(evennumbers);
const strArray = ["apple", "banana", "cherry", "date"];
const shortStr = filterArray(strArray, (word) => word.length < 6);
console.log(shortStr);
const fruitArray = [
    { name: "apple", color: "red" },
    { name: "banana", color: "yellow" },
    { name: "cherry", color: "red" },
];
const redFruits = filterArray(fruitArray, (fruit) => fruit.color === "red");
console.log(redFruits);
