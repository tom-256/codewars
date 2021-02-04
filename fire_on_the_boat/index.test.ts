import { fireFight } from ".";

test("a simple example", () => {
  const expected = "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain";
  const result = fireFight(
    "Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"
  );
  expect(result).toBe(expected);
});
