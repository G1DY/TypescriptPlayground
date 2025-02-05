function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evennumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evennumbers);

const strArray = ["apple", "banana", "cherry", "date"];
const shortStr = filterArray<string>(strArray, (word) => word.length < 6);
console.log(shortStr);

// using with an interface
interface Fruits {
  name: string;
  color: string;
}
const fruitArray: Fruits[] = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "cherry", color: "red" },
];
const redFruits = filterArray<Fruits>(
  fruitArray,
  (fruit) => fruit.color === "red"
);
console.log(redFruits);
