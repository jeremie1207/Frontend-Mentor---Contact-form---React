import "./ContactForm.css";
import validators from "../../Utils/validators";
import validateForm from "../../Utils/validateForm";
import { useState } from "react";

export default function ContactForm({onSuccess}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: false,
    })
    setErrors({});
    onSuccess();
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleBlur(event) {
    const { name, value } = event.target;

    const validator = validators[name];

    if (!validator) return;

    const error = validator(value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  }

  return (
    <article className="form-container">
      <form action="" className="form" onSubmit={handleSubmit}>
        <section className="form-content">
          <h1 className="form-title">Contact Us</h1>
          <section className="fields">
            {/* first name */}
            <div className="text-field">
              <label htmlFor="firstName">
                First Name{" "}
                <span aria-hidden="true" className="required">
                  {" "}
                  *
                </span>
              </label>
              <input
                //required
                aria-describedby="required-description"
                aria-invalid={Boolean(errors.firstName)}
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="given-name"
              />
              {errors.firstName && (
                <p role="alert" className="error-message">
                  {errors.firstName}
                </p>
              )}
            </div>

            {/* last name */}
            <div className="text-field">
              <label htmlFor="lastName">
                Last Name{" "}
                <span aria-hidden="true" className="required">
                  {" "}
                  *
                </span>
              </label>
              <input
                //required
                aria-describedby="required-description"
                aria-invalid={Boolean(errors.lastName)}
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="family-name"
              />
              {errors.lastName && (
                <p role="alert" className="error-message">
                  {errors.lastName}
                </p>
              )}
            </div>

            {/* email */}
            <div className="text-field span-2">
              <label htmlFor="email">
                Email Address{" "}
                <span aria-hidden="true" className="required">
                  {" "}
                  *
                </span>
              </label>
              <input
                //required
                aria-describedby="required-description"
                aria-invalid={Boolean(errors.email)}
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="email"
              />
              {errors.email && (
                <p role="alert" className="error-message">
                  {errors.email}
                </p>
              )}
            </div>

            {/* query type */}
            <fieldset
              className="span-2"
              aria-invalid={Boolean(errors.queryType)}
            >
              <legend>
                Query Type{" "}
                <span aria-hidden="true" className="required">
                  {" "}
                  *
                </span>
              </legend>
              <section className="radio-group">
                <div
                  className={`radio-item ${formData.queryType === "General Enquiry" && "select-item"}`}
                >
                  <input
                    //required
                    aria-describedby="required-description"
                    type="radio"
                    name="queryType"
                    value="General Enquiry"
                    checked={formData.queryType === "General Enquiry"}
                    onChange={handleChange}
                    id="generalEnquiry"
                  />
                  <label htmlFor="generalEnquiry">General Enquiry</label>
                </div>

                <div
                  className={`radio-item ${formData.queryType === "Support Request" && "select-item"}`}
                >
                  <input
                    //required
                    aria-describedby="required-description"
                    type="radio"
                    name="queryType"
                    value="Support Request"
                    checked={formData.queryType === "Support Request"}
                    onChange={handleChange}
                    id="supportRequest"
                  />
                  <label htmlFor="supportRequest">Support Request</label>
                </div>
              </section>

              {errors.queryType && (
                <p role="alert" className="error-message">
                  {errors.queryType}
                </p>
              )}
            </fieldset>

            {/* message */}
            <div className="text-field span-2">
              <label htmlFor="message">
                Message{" "}
                <span aria-hidden="true" className="required">
                  {" "}
                  *
                </span>
              </label>
              <textarea
                //required
                aria-describedby="required-description"
                aria-invalid={Boolean(errors.message)}
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.message}
                id="message"
                rows="4"
              ></textarea>
              {errors.message && (
                <p role="alert" className="error-message">
                  {errors.message}
                </p>
              )}
            </div>
          </section>
        </section>

        {/* consent */}

        <section className="checkbox">
          <input
            //required
            aria-describedby="required-description"
            aria-invalid={Boolean(errors.consent)}
            type="checkbox"
            name="consent"
            id="consent"
            onChange={handleChange}
            checked={formData.consent}
          />
          <label htmlFor="consent">
            I consent to being contacted by the team{" "}
            <span aria-hidden="true" className="required">
              {" "}
              *
            </span>
          </label>
          {errors.consent && (
            <p role="alert" className="error-message">
              {errors.consent}
            </p>
          )}
        </section>

        {/* Require field description */}
        <p
          className="visually-hidden"
          aria-hidden="true"
          id="required-description"
        >
          <span aria-hidden="true" className="required">
            *
          </span>
          Required field
        </p>

        <button type="submit">Submit</button>
      </form>
    </article>
  );
}
