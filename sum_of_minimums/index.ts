// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699
const sumOfMinimums = (arr: number[][]): number => {
  return arr.reduce((a, c) => a + Math.min(...c), 0);
};
export default sumOfMinimums;
