//import "./App.css";
import Header from "./components/Header.jsx";
import TimerComponent from "./components/Circle-timer.jsx";
import ContactForm from "./components/Contact-form.jsx";

function App() {
  return (
    <div>
      <Header />

      {/* Circular-timer component */}
      <TimerComponent />
      <br />
      <hr />
      <br />
      <ContactForm />
      <br />
    </div>
  );
}

export default App;
