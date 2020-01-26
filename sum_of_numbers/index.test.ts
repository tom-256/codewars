import getSum from ".";

test("Basic Tests:", function() {
  expect(getSum(0, 3)).toBe(6);
  expect(getSum(0, -1)).toBe(-1);
  expect(getSum(1, 1)).toBe(1);
  expect(getSum(-1, 2)).toBe(2);
});
