/* eslint-env jest */

const { add } = require("../index");

test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("adds negative numbers", () => {
  expect(add(-2, -3)).toBe(-5);
});
