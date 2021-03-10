export const logicalCalc = (array: boolean[], op: string): boolean => {
  switch (op) {
    case "AND":
      if (array.includes(false)) return false;
      return true;
    case "OR":
      if (array.includes(true)) return true;
      return false;
    case "XOR":
      return array.reduce((x, y) => x != y);
    default:
      break;
  }
  return false;
};
