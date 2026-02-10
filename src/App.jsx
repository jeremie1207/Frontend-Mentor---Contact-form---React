import "./App.css";
import ContactForm from "./Component/ContactForm";

function App() {
  return (
    <>
      <main>
        <article className="form-container">
          <h1 className="form-title">Contact Us</h1>
          <ContactForm />
        </article>
      </main>
    </>
  );
}

export default App;
