# Calculator

## Components

```
Component Tree:
App (Container)
|_ CalcDisplay
|_ CalcKeyboard
```

1. Props (N/A)
2. States

- result, setResult
- next, setNext
- operation, setOperation

### 1. CalcDisplay

1. Props: **result**
2. States N/A
3. Render

```
  .calc-ouput
    input (read-only)
```

### 2. CalcKeyboard

1. Props

- callback onClickButton (call when user click button)

2. States (N/A)
3. Render div>button

button data-value


```

  useEffect(() => {
    setResult(current ? current : prevNumber || "0");
  }, [current]);

  function handleEnterValue(value) {
    const isNumber = !isNaN(+value);
    if (isNumber) {
      return current ? setCurrent(`${result}${value}`) : setCurrent(value);
    }

    if (isOperation(value)) {
      setOperation(value);

      if (!current) {
        return;
      }
      if (value === "=" && current && prevNumber) return compute();
      if (prevNumber) {
        return compute();
      }
      setPrevNumber(current);
      setCurrent(null);
      return;
    }

    const actions = {
      reset: () => {
        setResult("0");
        setOperation(null);
        setPrevNumber(null);
        setCurrent(null);
      },
      reverse: () => {
        const reverseNumber = -result;
        setCurrent(reverseNumber);
      },
      percent: () => {
        const percent = result / 100;
        setCurrent(percent);
      },
    };

    actions[value]();
  }

  function compute() {
    const operationHandler = {
      "+": (a, b) => parseFloat(a) + parseFloat(b),
      "-": (a, b) => parseFloat(a) - parseFloat(b),
      "*": (a, b) => parseFloat(a) * parseFloat(b),
      "/": (a, b) => parseFloat(a) / parseFloat(b),
      "=": (a, b) => parseFloat(a) + 0,
    };
    const cal = operationHandler[operation](prevNumber, current);
    setPrevNumber(cal);
    setCurrent(null);
  }
```