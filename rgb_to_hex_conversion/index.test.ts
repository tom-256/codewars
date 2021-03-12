import { rgb } from "./index";

test("", () => {
  expect(rgb(255, 255, 255)).toEqual("FFFFFF");
  expect(rgb(255, 255, 300)).toEqual("FFFFFF");
  expect(rgb(0, 0, -20)).toEqual("000000");
  expect(rgb(94, 11, 255)).toEqual("5E0BFF");
});
