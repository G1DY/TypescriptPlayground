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
