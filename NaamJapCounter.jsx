import { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);

  function increace() {
    setcount(count + 1);
  }

  function reset() {
    setcount(0);
  }

  if (count === 108) {
    setcount("mala completed");
    return;
  }
  return (
    <div>
      <div className="head">
        <h1>Shree Radhe 🙇‍♂️</h1>
      </div>
      <br />
      <br />
      <div className="container">
        <h1 className="count">{count}</h1>
        <br />
        <div className="malabtn">
          <button className="mala" onClick={increace}></button>
        </div>
        <br />
        <br />
        <div className="resetbtn">
          <button className="reset" onClick={reset}>
            reset
          </button>
        </div>
        <footer>radhe radhe</footer>
      </div>
    </div>
  );
}

export default App;
