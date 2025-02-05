"use strict";
// understanding oop in typescript
class Animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getSpecies() {
        return this.species;
    }
    getAge() {
        return this.age;
    }
}
class dog extends Animal {
    /**
     *
     */
    constructor(name, species, age) {
        super(name, species, age);
    }
    getInfo() {
        return `${this.getName()} is a ${this.getSpecies} and is ${this.getAge} years old`;
    }
}
// using get and set in a class
class myClass {
    constructor() {
        this._myProperty = 0;
    }
    get myProperty() {
        return this._myProperty;
    }
    set myProperty(value) {
        this._myProperty = value;
    }
}
const myInstance = new myClass();
console.log(`current value: ${myInstance.myProperty}`);
