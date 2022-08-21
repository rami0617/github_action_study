const factorial = require("../factorial");

describe("function factorial", () => {
  it("factorial", () => {
    expect(factorial(3)).toEqual(6);
  });

  it("error", () => {
    expect(factorial(5)).toEqual(120);
  });
});
