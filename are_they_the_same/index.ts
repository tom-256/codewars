// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
const comp = (array1: number[], array2: number[]): boolean => {
  if (!array1 || !array2) return false;
  return (
    array1
      .map(x => x * x)
      .sort()
      .join() === array2.sort().join()
  );
};
export default comp;
