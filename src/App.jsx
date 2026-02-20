import { useState } from "react";
import "./App.css";
import ContactForm from "./Component/ContactForm/ContactForm";
import { Footer } from "./Component/Footer/Footer";
import SuccessMessageToast from "./Component/SuccessMessageToast/SuccessMessageToast";


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
        <SuccessMessageToast onSuccess={successStatus} />
        <ContactForm onSuccess={handleSuccess}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
