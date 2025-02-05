"use strict";
// the class implementing the methods
class car {
    start() {
        console.log("Car is starting");
    }
    stop() {
        console.log("car is stoping");
    }
}
// creating an object instance
const myCar = new car();
myCar.start();
myCar.stop();
const movie1 = {
    name: "star wars",
    rating: 10,
    genre: "comedy",
};
console.log(movie1);
console.log(movie1.name);
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiplication = (a, b) => a * b;
let a = 14, b = 7;
console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiplication(a, b));
