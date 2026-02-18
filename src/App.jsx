import { useState } from "react";
import "./App.css";
import ContactForm from "./Component/ContactForm/ContactForm";
import { Footer } from "./Component/Footer/Footer";
import successCheck from "/assets/images/icon-success-check.svg";

function App() {

  const [successStatus, setStatusSuccess] = useState(false);

  function handleSuccess() {
    setStatusSuccess(true);
    setTimeout(() => {
      setStatusSuccess(false);
    }, 3000);
  }


  return (
    <>
      <main>
        <section role="alert" className="success-message__container" data-show={successStatus}>
        <div className="success-message">
          <div className="success-message__title-container">
            <img src={successCheck} alt="" />
            <h2 className="success_message-title">Message Sent!</h2>
          </div>
         <p>Thanks for completing the form. We’ll be in touch soon!</p>
        </div>
      </section>
        <ContactForm onSuccess={handleSuccess}/>
      </main>
      <Footer />
    </>
  );
}

export default App;

