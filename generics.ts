function uniqueDataTypes<T>(item: T, defaultValue: T): [T, T] {
  return [item, defaultValue];
}
const num = uniqueDataTypes<number>(1, 3);
const str = uniqueDataTypes<string>("hello", "world");
const bool = uniqueDataTypes<boolean>(true, false);
console.log(num, str, bool);
