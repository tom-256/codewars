//https://www.codewars.com/kata/55f2b110f61eb01779000053/javascript
const getSum = (a: number, b: number): number => {
  if (a === b) return a;
  if (b < a) [a, b] = [b, a];
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
};
export default getSum;
