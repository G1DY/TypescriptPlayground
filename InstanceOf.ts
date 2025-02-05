class Dog {
  bark(): void {
    console.log("woff woff");
  }
}
class Cat {
  Meow(): void {
    console.log("meow");
  }
}
function animalSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.Meow();
  }
}
const myDog = new Dog();
const myCat = new Cat();
animalSound(myDog);
animalSound(myCat);
