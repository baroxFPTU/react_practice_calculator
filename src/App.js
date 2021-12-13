import { useEffect, useState, useRef } from "react";
import "./App.scss";
import CalcDisplay from "./components/CalcDisplay";
import CalcKeyboard from "./components/CalcKeyboard";

function App() {
  const [result, setResult] = useState("0");
  const [current, setCurrent] = useState(null);
  const prevValue = useRef(null);
  const operation = useRef(null);
  const operations = useRef(["+", "-", "*", "/"]);

  useEffect(() => {
    setResult(current ?? prevValue.current ?? "0");
  }, [current]);

  function compute() {
    if (!prevValue.current || !current || !operation.current) return;
    const computes = {
      "+": (a = 0, b = 0) => parseFloat(a) + parseFloat(b),
      "-": (a, b) => parseFloat(a) - parseFloat(b),
      "*": (a, b) => parseFloat(a) * parseFloat(b),
      "/": (a, b) => parseFloat(a) / parseFloat(b),
    };

    return computes[operation.current](prevValue.current, current) ?? current;
  }

  function handleEnterValue(value) {
    const isNumber = !isNaN(parseFloat(value));
    const actions = {
      reset: () => {
        prevValue.current = null;
        operation.current = null;
        setCurrent(null);
        setResult("0");
      },
      reverse: () => {
        setCurrent(-current);
      },
      percent: () => {
        setCurrent(+current / 100);
      },
      equal: () => {
        prevValue.current = compute();
        setCurrent(null);
        operation.current = null;
      },
      ".": () => {
        if (`${current}`.includes(value)) return;
        setCurrent(`${current}.`);
      },
    };

    if (isNumber) {
      current ? setCurrent(`${current}${value}`) : setCurrent(value);
      return;
    }

    // TODO: check operation
    if (operations.current.includes(value)) {
      let total;
      operation.current = value;
      if (!current) return;
      if (prevValue.current) {
        total = compute();
      }
      prevValue.current = total ?? current;
      setCurrent(null);
      return;
    }

    // else...
    actions[value]();
  }

  return (
    <div className="App">
      <CalcDisplay result={result} />
      <CalcKeyboard onClickButton={handleEnterValue} />
    </div>
  );
}

export default App;
