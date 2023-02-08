import React, { useState } from "react";
import "./Calculator.css";

const Calculators = () => {
  const [result, setResult] = useState("");
  const Calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  const Submit = (e) => {
    setResult(result.concat(e.target.name));
  };

  const Clear = () => {
    setResult("");
  };

  const Backspace = () => {
    setResult(result.slice(0, result.length - 1));
    // setResult(result.slice(0, -1));
  };
  return (
    <>
      <div className="container1">
        <h1>
          <span>Kiran's</span> React Calculator
        </h1>
      </div>
      <div className="container">
        <form>
          <input type="text" value={result} readOnly></input>
        </form>

        <div className="keypad">
          <button className="functions" onClick={Clear} id="clear">
            Clear
          </button>
          <button className="functions" onClick={Backspace} id="backspace">
            C
          </button>
          <button className="functions" name="/" onClick={Submit}>
            &divide;
          </button>
          <button name="7" onClick={Submit}>
            7
          </button>
          <button name="8" onClick={Submit}>
            8
          </button>
          <button name="9" onClick={Submit}>
            9
          </button>
          <button className="functions" name="*" onClick={Submit}>
            &times;
          </button>
          <button name="4" onClick={Submit}>
            4
          </button>
          <button name="5" onClick={Submit}>
            5
          </button>
          <button name="6" onClick={Submit}>
            6
          </button>
          <button className="functions" name="-" onClick={Submit}>
            &ndash;
          </button>
          <button name="1" onClick={Submit}>
            1
          </button>
          <button name="2" onClick={Submit}>
            2
          </button>
          <button name="3" onClick={Submit}>
            3
          </button>
          <button className="functions" name="+" onClick={Submit}>
            +
          </button>
          <button name="0" onClick={Submit}>
            0
          </button>
          <button name="" onClick={Submit}>
            .
          </button>
          <button className="functions" id="result" onClick={Calculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculators;
