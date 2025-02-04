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
  age: 35,
};
console.log(`Name: ${Person.firstName} ${Person.lastName}, Age: ${Person.age}`);

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
console.log(
  `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`
);

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
console.log(groupA);
console.log(
  `Name: ${groupA.name}, Age: ${groupA.age}, Id: ${groupA.id}, Title: ${groupA.title}`
);

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
console.log(`Email: ${gideon.email} Password: ${gideon.password}`);
