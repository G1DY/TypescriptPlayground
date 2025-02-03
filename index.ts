let tshard: boolean = false;
console.log(tshard);
let tsstring: string = "Gideon";
console.log(tsstring);

const multiply = (x: number, y: number) => x * y;
const result = multiply(8, 7);

console.log(result);

// factory pattern
const Person: { firstName: string; lastName: string; age: number } = {
  firstName: "Gideon",
  lastName: "Sitienei",
  age: 30,
};
console.log(`Name: ${Person.firstName} ${Person.lastName}, Age: ${Person.age}`);
