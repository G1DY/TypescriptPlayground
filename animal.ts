// understanding oop in typescript
class Animal {
  public name: string;
  protected species: string;
  public age: number;

  constructor(name: string, species: string, age: number) {
    this.name = name;
    this.species = species;
    this.age = age;
  }
  public getName(): string {
    return this.name;
  }
  protected getSpecies(): string {
    return this.species;
  }
  public getAge(): number {
    return this.age;
  }
}
class dog extends Animal {
  /**
   *
   */
  constructor(name: string, species: string, age: number) {
    super(name, species, age);
  }
  public getInfo(): string {
    return `${this.getName()} is a ${this.getSpecies} and is ${
      this.getAge
    } years old`;
  }
}

// using get and set in a class
class myClass {
  private _myProperty: number = 0;

  get myProperty(): number {
    return this._myProperty;
  }
  set myProperty(value: number) {
    this._myProperty = value;
  }
}
const myInstance = new myClass();
console.log(`current value: ${myInstance.myProperty}`);
