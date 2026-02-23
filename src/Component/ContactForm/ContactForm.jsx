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
                aria-required="true"
                aria-invalid={errors.firstName ? 'true' : undefined}
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="given-name"
              />
              <p
                className={`error-message ${errors.firstName ? "visible" : ""}`}
                aria-live="polite"
              >
                {errors.firstName || " "}
              </p>
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
                aria-required="true"
                aria-invalid={errors.lastName ? 'true' : undefined}
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="family-name"
              />
              <p aria-live="polite" className={`error-message ${errors.lastName ? "visible" : ""}`}>
                  {errors.lastName || " "}
              </p>
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
                aria-required="true"
                aria-invalid={errors.email ? 'true' : undefined}
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="email"
              />
              

              <p aria-live="polite" className={`error-message ${errors.email ? "visible" : ""}`}>
                  {errors.email || " "}
              </p>
            </div>

            {/* query type */}
            <fieldset
              className="span-2"
              aria-invalid={errors.queryType ? 'true' : undefined}
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
                    aria-required="true"
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
                    aria-required="true"
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


              <p aria-live="polite" className={`error-message ${errors.queryType ? "visible" : ""}`}>
                  {errors.queryType || " "}
              </p>
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
                aria-required="true"
                aria-invalid={errors.message ? 'true' : undefined}
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.message}
                id="message"
                rows="4"
              ></textarea>

              <p aria-live="polite" className={`error-message ${errors.message ? "visible" : ""}`}>
                  {errors.message || " "}
              </p>
            </div>
          </section>
        </section>

        {/* consent */}

        <section className="checkbox">
          <input
            aria-required="true"
            aria-invalid={errors.consent ? 'true' : undefined}
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

          <p aria-live="polite" className={`error-message ${errors.consent ? "visible" : ""}`}>
                {errors.consent || " "}
          </p>
        </section>

        <button type="submit">Submit</button>
      </form>
    </article>
  );
}
