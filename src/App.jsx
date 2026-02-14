import "./App.css";
import ContactForm from "./Component/ContactForm";
import { Footer } from "./Component/Footer";

function App() {
  return (
    <>
      <main>
        <article className="form-container">
          <h1 className="form-title">Contact Us</h1>
          <ContactForm />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
