export const rgb = (r: number, g: number, b: number): string => {
  return `${padding(round(r).toString(16).toUpperCase())}${padding(
    round(g).toString(16).toUpperCase()
  )}${padding(round(b).toString(16).toUpperCase())}`;
};
const round = (x: number): number => {
  if (x > 255) return 255;
  if (x < 0) return 0;
  return x;
};

const padding = (x: string): string => {
  if (x.length === 1) return x.padStart(2, "0");
  return x;
};
