"use strict";
let tshard = false;
// console.log(tshard);
let tsstring = "Gideon";
// console.log(tsstring);
const multiply = (x, y) => x * y;
const result = multiply(8, 7);
// console.log(result);
// factory pattern
const Person = {
    firstName: "Gideon",
    lastName: "Sitienei",
    age: 35,
};
const user = {
    name: "Gideon",
    age: 40,
    location: "uganda",
};
const groupA = {
    name: "Dan Rueben",
    age: 35,
    id: 27243082,
    title: "Manager",
};
let gideon = {
    email: "gideon@gmail.com",
    password: 12345678,
};
// console.log(`Email: ${gideon.email} Password: ${gideon.password}`);
// literal types
let isTrue;
isTrue = false;
// console.log(isTrue);
let password;
password = "test123";
// console.log(password);
// tuples
let MyTuple = ["hello", 34];
// console.log(MyTuple[0]);
// console.log(MyTuple[1]);
// enum
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions["sunny"] = "sunny";
    WeatherConditions["windy"] = "windy";
    WeatherConditions["cloudy"] = "cloudy";
    WeatherConditions["rainy"] = "rainy";
    WeatherConditions["calm"] = "calm";
})(WeatherConditions || (WeatherConditions = {}));
const CurrentWeather = WeatherConditions.sunny;
// console.log(`The Current weather condition is: ${CurrentWeather}`);
// class annotation
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const student = new Student("gideon", 35);
console.log(`We admitted ${student.name} who is ${student.age}`);
