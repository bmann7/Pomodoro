import "./App.css";
import Header from "./components/Header.jsx";
import TimerComponent from "./components/Circle-timer.jsx";

function App() {
  return (
    <div>
      <Header className="center" />

      {/* Circular-timer component */}
      <TimerComponent className="center" />
    </div>
  );
}

export default App;
