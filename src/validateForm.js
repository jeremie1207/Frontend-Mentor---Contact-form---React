import validators from "./validators";

export default function validateForm(formData) {
  const errors = {};

  Object.keys(formData).forEach((field) => {
    const validator = validators[field];

    if (!validator) return;

    const error = validator(formData[field]);

    if (error) {
      errors[field] = error;
    }
  });

  return errors;
}
