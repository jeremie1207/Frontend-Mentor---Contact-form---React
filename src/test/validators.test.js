import { it, expect, describe } from "vitest";
import validators from "../Utils/validators";

describe("validators", () => {
  // ---------- firstName ----------
  describe("firstName", () => {
    it("returns error if empty", () => {
      const result = validators.firstName("");
      expect(result).toBe("Please enter a first name");
    });

    it("returns empty string if valid", () => {
      const result = validators.firstName("Joe");
      expect(result).toBe("");
    });
  });

  // ---------- lastName ----------
  describe("lastName", () => {
    it("returns error if empty", () => {
      const result = validators.lastName("");
      expect(result).toBe("Please enter a last name");
    });

    it("returns empty string if valid", () => {
      const result = validators.lastName("Doe");
      expect(result).toBe("");
    });
  });

  // ---------- email ----------
  describe("email", () => {
    it("returns error if empty", () => {
      const result = validators.email("");
      expect(result).toBe("Please enter an email address");
    });

    it("returns error if invalid", () => {
      const result = validators.email("test");
      expect(result).toBe("Please enter a valid email address");
    });

    it("returns empty string if valid", () => {
      const result = validators.email("test@test.com");
      expect(result).toBe("");
    });
  });

  // ---------- queryType ----------
  describe("queryType", () => {
    it("returns error if empty", () => {
      const result = validators.queryType("");
      expect(result).toBe("Please select a query type");
    });

    it("returns error if invalid value", () => {
      const result = validators.queryType("Random");
      expect(result).toBe("Invalid query type selection");
    });

    it("returns empty string if General Enquiry", () => {
      const result = validators.queryType("General Enquiry");
      expect(result).toBe("");
    });

    it("returns empty string if Support Request", () => {
      const result = validators.queryType("Support Request");
      expect(result).toBe("");
    });
  });

  // ---------- message ----------
  describe("message", () => {
    it("returns error if empty", () => {
      const result = validators.message("");
      expect(result).toBe("Please enter a message");
    });

    it("returns error if too short", () => {
      const result = validators.message("Hi");
      expect(result).toBe("Message must be at least 10 characters");
    });

    it("returns empty string if valid", () => {
      const result = validators.message("This is a valid message");
      expect(result).toBe("");
    });
  });

  // ---------- consent ----------
  describe("consent", () => {
    it("returns error if false", () => {
      const result = validators.consent(false);
      expect(result).toBe("You must consent to be contacted");
    });

    it("returns error if undefined", () => {
      const result = validators.consent(undefined);
      expect(result).toBe("You must consent to be contacted");
    });

    it("returns empty string if true", () => {
      const result = validators.consent(true);
      expect(result).toBe("");
    });
  });
});
