function isNumber(x: number | undefined): x is number {
  return x !== undefined && typeof x === "number";
}

const nullableNums = [1, 2, 3, undefined];
const nums = nullableNums.filter(isNumber);
