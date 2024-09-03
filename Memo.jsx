import { useEffect } from "react";
import { useState, useMemo } from "react";

export default function Memo() {
  const [count, setCount] = useState(0);
  const [trigger, setTrigger] = useState(false);

  const calculateBigNumber = (num) => {
    let number = num;
    for (let i = 0; i < 500000000; i++) {
      number += i;
    }
    return number;
  };

  useEffect(() => {
    return displayCount;
  }, [count]);

  const displayCount = () => {
    console.log(count);
  }

  const triggerHandler = () => {
    setTrigger(!trigger);
  };

  return (
    <>
      <h1>useMemo example</h1>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      <button onClick={triggerHandler}>Trigger re-render</button>
    </>
  );
}
