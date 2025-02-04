function uniqueDataTypes<T>(item: T, defaultValue: T): [T, T] {
  return [item, defaultValue];
}
const num = uniqueDataTypes(1, 3);
const str = uniqueDataTypes("hello", "world");
const bool = uniqueDataTypes(true, false);
console.log(num, str, bool);
