import { useState } from 'react'
import './App.css'


const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateField(name, value) {

  if(name === "firstName" && !value) return  "Please enter a first name";

  if(name === "lastName" && !value) return "Please enter a last name";

  if(name === "email") {
    if(!value) return "Please enter an email address";
    
    if(!EMAIL_REGEX.test(value)) return "Please enter a valid email address";

  }

  // if(name === "queryType") {

  //   if(!value) return "Please select a query type";

  //   if(!( value === "General Enquiry" || value === "Support Request")) return "Please select a query between General Enquiry and Support Request";
  // }

  if(name === "message" && !value) return "Please enter a message";

  // if(name === "consent" && !value) return "To submit this form, please consent to being contacted";

  return "";
}

function App() {

  const [formData, setFormData] = useState({
    firstName : "",
    lastName : "", 
    email : "", 
    queryType : "", 
    message: "", 
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  function handleSubmit(event) {
    event.preventDefault();


  }


  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData( (prevFormData) => ({...prevFormData, 
      [name]: type  === "checkbox" ? checked : value}));
  }


  function handleBlur(event) {
    const {name, value} = event.target;

    setTouched(prev=> ({...prev,
      [name]: true
    }));

    const error = validateField(name, value);

    setErrors(prev => ({
      ...prev,
      [name]: error
    }));

  }

  


  return (
    <>
      <main>
        <article className="form-container">
          <h1 className="form-title">Contact Us</h1>

          <form action="" className="form" onSubmit={handleSubmit}>

            {/* first name */}
            <div className="control">
              <label htmlFor="firstName">First Name <span aria-hidden="true" className="required"> *</span></label>
              <input 
                required 
                aria-describedby="required-description"
                aria-invalid={Boolean(errors.firstName)} 
                type="text" 
                name="firstName" 
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur} 
                autoComplete='given-name'/>
              {touched.firstName && errors.firstName && (
                <p role='alert' className="error-message">{errors.firstName}</p>
              )}
              
            </div>


            {/* last name */}
            <div className="control">
              <label htmlFor="lastName">Last Name <span aria-hidden="true" className="required"> *</span></label>
              <input 
                required 
                aria-describedby="required-description"
                aria-invalid={Boolean(errors.lastName)} 
                type="text" 
                name="lastName" 
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur} 
                autoComplete='family-name'/>
              {touched.lastName && errors.lastName && (
                <p role='alert' className="error-message">{errors.lastName}</p>
              )}
            </div>

            {/* email */}
            <div className="control">
              <label htmlFor="email">Email Address <span aria-hidden="true" className="required"> *</span></label>
              <input 
                required 
                aria-describedby="required-description"
                aria-invalid={Boolean(errors.email)}  
                type="email" 
                name="email" 
                id="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur} 
                autoComplete='email'/>
              {touched.email && errors.email && (
                <p  role='alert' className="error-message">{errors.email}</p>
              )}

            </div>

            {/* query type */}
            <fieldset>
              <legend>Query Type <span aria-hidden="true" className="required"> *</span></legend>
              <section className="radio-group">
                <div className="radio-item">
                  <input required 
                  aria-describedby="required-description"
                  aria-invalid={Boolean(errors.queryType)}  
                  type="radio" 
                  name="queryType"
                  value="General Enquiry"
                  checked={formData.queryType === "General Enquiry"}
                  onChange={handleChange}
                  onBlur={handleBlur} 
                  id="generalEnquiry" />
                  <label htmlFor="generalEnquiry">General Enquiry</label>
                </div>

                <div className="radio-item">
                  <input 
                  required 
                  aria-describedby="required-description"
                  aria-invalid={Boolean(errors.queryType)}  
                  type="radio" 
                  name="queryType"
                  value="Support Request"
                  checked={formData.queryType === "Support Request"}
                  onChange={handleChange}
                  onBlur={handleBlur} 
                  id="supportRequest" />
                  <label htmlFor="supportRequest">Support Request</label>
                </div>
              </section>
              

              {errors.queryType && (
                <p  role='alert' className="error-message">{errors.queryType}</p>
              )}
            </fieldset>

            {/* message */}
            <div className="control">
              <label htmlFor="message">Message <span aria-hidden="true" className="required"> *</span></label>
              <textarea 
                required 
                aria-describedby="required-description"
                aria-invalid={Boolean(errors.message)} 
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.message} 
                id="message"></textarea>
              {touched.message && errors.message && (
                <p role='alert' className="error-message">{errors.message}</p>
              )}  
            </div>

            {/* consent */}

            <div className="control">
              <input 
               required 
               aria-describedby="required-description"
               aria-invalid={Boolean(errors.consent)} 
               type="checkbox" 
               name="consent" 
               id="consent"
               onChange={handleChange}
               onBlur={handleBlur}
               value={formData.consent} />
              <label htmlFor="consent">I consent to being contacted by the team <span aria-hidden="true" className="required"> *</span></label>
              {errors.consent && (
                <p role='alert' className="error-message">{errors.consent}</p>
              )}
            </div>

            {/* Require field descripition */}
            <p className='visually-hidden' aria-hidden="true" id="required-description">
              <span aria-hidden="true" class="required">*</span>Required field
            </p>

            <button type="submit">Submit</button>
          </form>
        </article>
      </main>
    </>
  )
}

export default App
