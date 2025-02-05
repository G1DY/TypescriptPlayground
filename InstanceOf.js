"use strict";
class Dog {
    bark() {
        console.log("woff woff");
    }
}
class Cat {
    Meow() {
        console.log("meow");
    }
}
function animalSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.Meow();
    }
}
const myDog = new Dog();
const myCat = new Cat();
animalSound(myDog);
animalSound(myCat);
