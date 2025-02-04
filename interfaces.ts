interface vehicle {
  start(): void;
  stop(): void;
}
class car implements vehicle {
  start() {
    console.log("Car is starting");
  }
  stop() {
    console.log("car is stoping");
  }
}
const myCar = new car();
myCar.start();
myCar.stop();
