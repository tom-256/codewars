import { generateRange } from "./index";

test("test", () => {
  expect(generateRange(2, 10, 2)).toEqual([2, 4, 6, 8, 10]);
});
