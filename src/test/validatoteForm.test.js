import { describe, it, expect } from "vitest";
import validateForm from "../Utils/validateForm";

describe("validateForm", () => {
  it("returns errors for all invalid fields", () => {
    const formData = {
      firstName: "",
      lastName: "",
      email: "bad-email",
      queryType: "",
      message: "Hi",
      consent: false,
    };

    const result = validateForm(formData);

    expect(result).toEqual({
      firstName: "Please enter a first name",
      lastName: "Please enter a last name",
      email: "Please enter a valid email address",
      queryType: "Please select a query type",
      message: "Message must be at least 10 characters",
      consent: "You must consent to be contacted",
    });
  });

  it("returns empty object when form is valid", () => {
    const formData = {
      firstName: "Joe",
      lastName: "Doe",
      email: "joe@test.com",
      queryType: "General Enquiry",
      message: "This is a valid message",
      consent: true,
    };

    const result = validateForm(formData);

    expect(result).toEqual({});
  });

  it("returns only errors for invalid fields", () => {
    const formData = {
      firstName: "Joe",
      lastName: "",
      email: "joe@test.com",
      queryType: "",
      message: "This is a valid message",
      consent: true,
    };

    const result = validateForm(formData);

    expect(result).toEqual({
      lastName: "Please enter a last name",
      queryType: "Please select a query type",
    });
  });

  it("ignores fields that have no validators", () => {
    const formData = {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: false,
      extraField: "should be ignored",
      random: 12345,
    };

    const result = validateForm(formData);

    expect(result.extraField).toBeUndefined();
    expect(result.random).toBeUndefined();
  });
});
