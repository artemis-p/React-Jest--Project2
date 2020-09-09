const { TestScheduler } = require("jest")

const greet = require("./greet.js");

test('Can greet anyone', () => {
  expect(greet('Ed')).toBe("Hi, Ed!");
});