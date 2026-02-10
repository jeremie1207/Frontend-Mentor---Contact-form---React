const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validators = {
  firstName: (value) => {
    if (!value.trim()) return "Please enter a first name";
    return "";
  },

  lastName: (value) => {
    if (!value.trim()) return "Please enter a last name";
    return "";
  },

  email: (value) => {
    if (!value) return "Please enter an email address";
    if (!EMAIL_REGEX.test(value)) return "Please enter a valid email address";
    return "";
  },

  queryType: (value) => {
    if (!value) return "Please select a query type";
    if (!["General Enquiry", "Support Request"].includes(value)) {
      return "Invalid query type selection";
    }
    return "";
  },

  message: (value) => {
    if (!value.trim()) return "Please enter a message";
    if (value.length < 10) return "Message must be at least 10 characters";
    return "";
  },

  consent: (value) => {
    if (value !== true) return "You must consent to be contacted";
    return "";
  },
};

export default validators;
