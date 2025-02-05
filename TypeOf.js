"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// example of type guard function
function exampleFunction(value) {
    if (typeof value === "string") {
        // within this block the typescript knows that the value is a string
        console.log(value.toUpperCase());
    }
    else {
        // within this block the typescript knows that the value is a number
        console.log(value.toFixed(2));
    }
}
exampleFunction("hello");
exampleFunction(40);
