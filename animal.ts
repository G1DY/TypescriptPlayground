// understanding oop in typescript
class Animal {
  public name: string;
  protected species: string;
  private age: number;

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
  private getAge(): number {
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
