function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randkey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randkey, value: obj[randkey] };
}
const strobj = { a: "apple", b: "banana", c: "cherry" };
const res = getRandomKeyValuePair<string>(strobj);
console.log(res);
