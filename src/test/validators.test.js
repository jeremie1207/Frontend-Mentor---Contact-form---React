import { it, expect, describe } from "vitest";
import validators from "../validators";

describe("validators", () => {
  describe("firstName", () => {
    it("Should return error if firstName is empty", () => {
      const firstName = "";
      const returnedValue = "Please enter a first name";

      const result = validators.firstName(firstName);

      expect(result).toBe(returnedValue);
    });

    it("Should return empty string if firstName is not empty", () => {
      const firstName = "Joe";
      const returnedValue = "";

      const result = validators.firstName(firstName);

      expect(result).toBe(returnedValue);
    });
  });

  describe("lastName", () => {
    it("Should return error if firstName is empty", () => {
      const lastName = "";
      const returnedValue = "Please enter a last name";

      const result = validators.lastName(lastName);

      expect(result).toBe(returnedValue);
    });

    it("Should return empty string if firstName is not empty", () => {
      const lastName = "Doe";
      const returnedValue = "";

      const result = validators.lastName(lastName);

      expect(result).toBe(returnedValue);
    });
  });
});
