import add from "./index";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(1, -1)).toEqual(0);
  });

  it("adds floating point numbers", () => {
    expect(add(1.111, 2.2)).toEqual(3.311);
  });
});
