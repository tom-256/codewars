// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
// Find the first non-consecutive number

const firstNonConsecutive = (arr: number[]): null | number => {
  let tmp: number;
  const isConsecutive = arr.every((element, index, array) => {
    const isConsecutiveElement = Math.abs(array[index + 1] - element) === 1;
    if (!isConsecutiveElement) tmp = array[index + 1];
    return isConsecutiveElement;
  });
  return isConsecutive ? null : tmp;
};

export default firstNonConsecutive;
