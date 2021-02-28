export const generateRange = function (
  min: number,
  max: number,
  step: number
): number[] {
  return [...Array(Math.floor(((max - min) / step)+1))].map((_, i) => min + i * step);
};
