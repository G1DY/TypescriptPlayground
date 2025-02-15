let tshard: boolean = false;
// console.log(tshard);
let tsstring: string = "Gideon";
// console.log(tsstring);

const multiply = (x: number, y: number) => x * y;
const result = multiply(8, 7);

// console.log(result);

// factory pattern
const Person: { firstName: string; lastName: string; age: number } = {
  firstName: "Gideon",
  lastName: "Sitienei",
  age: 35,
};
// console.log(`Name: ${Person.firstName} ${Person.lastName}, Age: ${Person.age}`);

// alias
type Person = {
  name: string;
  age: number;
  location: string;
};
const user: Person = {
  name: "Gideon",
  age: 40,
  location: "uganda",
};
// console.log(
//   `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`
// );

// Intersection type combines more than one type at once
type Parent = {
  name: string;
  age: number;
};

type Child = {
  id: number;
  title: string;
};

type Employee = Parent & Child;

const groupA: Employee = {
  name: "Dan Rueben",
  age: 35,
  id: 27243082,
  title: "Manager",
};
// console.log(groupA);
// console.log(
//   `Name: ${groupA.name}, Age: ${groupA.age}, Id: ${groupA.id}, Title: ${groupA.title}`
// );

// Unions can be used with types, objects, single variable etc

type UserInfo = {
  name: string;
  age: number;
  location: string;
};

type AccoundDetails = {
  email: string;
  password: string | number; //single variable
};

let gideon: UserInfo | AccoundDetails = {
  email: "gideon@gmail.com",
  password: 12345678,
};
// console.log(`Email: ${gideon.email} Password: ${gideon.password}`);

// literal types
let isTrue: false | true;
isTrue = false;
// console.log(isTrue);

let password: "Admin123" | string | number;
password = "test123";
// console.log(password);

// tuples
let MyTuple: [string, number] = ["hello", 34];
// console.log(MyTuple[0]);
// console.log(MyTuple[1]);

// enum
enum WeatherConditions {
  sunny = "sunny",
  windy = "windy",
  cloudy = "cloudy",
  rainy = "rainy",
  calm = "calm",
}
const CurrentWeather = WeatherConditions.sunny;
// console.log(`The Current weather condition is: ${CurrentWeather}`);

// class annotation
class Student {
  name: string; //fields
  age: number; //field
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const student = new Student("gideon", 35);
console.log(`We admitted ${student.name} who is ${student.age}`);
