import { useState } from "react";
import "./App.css";

export default function App() {
  const [currNum, setCurrNum] = useState<number | null>(null);
  const [op, setOp] = useState('');
  const [secondNum, setSecondNum] = useState<number | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);
  function handleNumInput(num: number) {
    if (hasCalculated) {
      setCurrNum(num);
    }
    if (currNum === null) {
      setCurrNum(num);
    }
    else if (currNum && !op) {
      setCurrNum(prevNum => Number(String(prevNum) + String(num)));
    }
    else if (currNum && op && secondNum) {
      setSecondNum(prevNum => Number(String(prevNum) + String(num)));
    }
    else if (currNum && op) {
      setSecondNum(num);
    }
  }
  function handleOpInput(op: string) {
    if (currNum) {
      setOp(op);
    }
  }
  function handleEquals() {
    if (currNum && op && secondNum) {
      setCurrNum(calculateFirst());
      setSecondNum(null);
      setOp('');
      setHasCalculated(true);
    }
  }
  function calculateFirst(): number {
    return Number(eval(String(currNum) + op + String(secondNum)));
  }
  function showDisplay(): string {
    let display: string[] = [];
    if (currNum !== null) {
      display.push(String(currNum));
    }
    if (op !== '') {
      display.push(op);
    }
    if (secondNum !== null) {
      display = [String(secondNum)];
    }
    return display.join('');
  }
  return (
    <>
      <h1>Calculator</h1>
      <div className="calc-container">
        <div className="calc-display">{showDisplay()}</div>
        <div className="calc-btns">
          <button>MC</button>
          <button>M+</button>
          <button>/</button>
          <button>X</button>
          <button onClick={() => handleNumInput(7)}>7</button>
          <button onClick={() => handleNumInput(8)}>8</button>
          <button onClick={() => handleNumInput(9)}>9</button>
          <button onClick={() => handleOpInput("-")}>-</button>
          <button onClick={() => handleNumInput(4)}>4</button>
          <button onClick={() => handleNumInput(5)}>5</button>
          <button onClick={() => handleNumInput(6)}>6</button>
          <button onClick={() => handleOpInput("+")}>+</button>
          <button onClick={() => handleNumInput(1)}>1</button>
          <button onClick={() => handleNumInput(2)}>2</button>
          <button onClick={() => handleNumInput(3)}>3</button>
          <button onClick={handleEquals} id="equals">
            =
          </button>
          <button onClick={() => handleNumInput(0)} id="zero">
            0
          </button>
          <button>.</button>
        </div>
      </div>
    </>
  );
}
