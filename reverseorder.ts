// generics that reverses objects
function reverseObjects<T, U>(value1: T, value2: U): [U, T] {
  return [value2, value1];
}
const reversePair = reverseObjects(20, "hello");
console.log(reversePair);
