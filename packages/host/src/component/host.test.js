"use strict";

const host = require("./host");

describe("host", () => {
  it("should be a string", () => {
    const text = host();
    expect(typeof text).toBe("string");
  });
});
