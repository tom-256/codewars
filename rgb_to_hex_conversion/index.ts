export const rgb = (r: number, g: number, b: number): string => {
  return [r, g, b]
    .map((x) =>
      Math.min(Math.max(x, 0), 255).toString(16).padStart(2, "0").toUpperCase()
    )
    .join("");
};
