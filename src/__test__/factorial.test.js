const factorial = require("../factorial");

describe("function factorial", () => {
  it("factorial", () => {
    expect(factorial(3)).toEqual(6);
  });

  it("factorial2", () => {
    expect(factorial(5)).toEqual(120);
  });

  it("factorial3", () => {
    expect(factorial(5)).toEqual(1);
  });
});
