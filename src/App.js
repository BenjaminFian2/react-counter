import "./App.css";
import { useState } from "react";
import calculator from "./assets/img/calculator.svg";
import imgP from "./assets/img/plus.svg";
import imgM from "./assets/img/minus.svg";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClickBtnP = () => {
    setCounter(counter + 1);
  };

  const handleClickBtnM = () => {
    setCounter(counter - 1);
  };

  const handleClickBtnR = () => {
    setCounter(0);
  };

  return (
    <>
      <header>
        <img src={calculator} alt="logo" /> React Counter
      </header>
      <hr />
      <div className="counter">
        <div className="M">
          <button className="btnM" onClick={handleClickBtnM}>
            {counter === 0 ? "" : <img src={imgM} alt="plus" />}
          </button>
        </div>
        <div className="count">
          <button className="btnCount">{counter}</button>
        </div>
        <div className="P">
          <button className="btnP" onClick={handleClickBtnP}>
            {counter === 10 ? "" : <img src={imgP} alt="plus" />}
          </button>
        </div>
      </div>
      <div className="reset">
        <button className="btnReset" onClick={handleClickBtnR}>
          Reset
        </button>
      </div>
      <footer>
        <p>
          Made with <a href="https://fr.reactjs.org/">React</a> at{" "}
          <a href="https://www.lereacteur.io/">Le Reacteur</a> by{" "}
          <a href="https://github.com/BenjaminFian2">Benjamin</a>
        </p>
      </footer>
    </>
  );
}

export default App;
