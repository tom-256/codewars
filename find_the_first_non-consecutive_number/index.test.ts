import firstNonConsecutive from ".";
test("a simple example", () => {
  const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
  expect(first).toBe(6);
});

test("a simple example", () => {
  const first = firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(first).toBeNull;
});
