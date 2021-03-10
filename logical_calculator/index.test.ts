import { logicalCalc } from "./index";

test("test", () => {
  expect(logicalCalc([true, true, true, false], "AND")).toEqual(false);
  expect(logicalCalc([true, true, false, false], "XOR")).toEqual(false);
  expect(logicalCalc([true, true, true, false], "XOR")).toEqual(true);
  expect(logicalCalc([true, true, false, false], "OR")).toEqual(true);
  expect(logicalCalc([false, false], "XOR")).toEqual(false);
});
