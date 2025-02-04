// interface for a class with methods
interface vehicle {
  start(): void;
  stop(): void;
}
// the class implementing the methods
class car implements vehicle {
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

// interface example 2
interface Movie {
  readonly name: string;
  rating: number;
  genre?: string;
}
const movie1: Movie = {
  name: "star wars",
  rating: 10,
  genre: "comedy",
};
console.log(movie1);
console.log(movie1.name);

// interface as a function
interface mathOperations {
  (x: number, y: number): number;
}
const add: mathOperations = (a, b) => a + b;
const subtract: mathOperations = (a, b) => a - b;
const multiplication: mathOperations = (a, b) => a * b;
let a = 14,
  b = 7;
console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiplication(a, b));
