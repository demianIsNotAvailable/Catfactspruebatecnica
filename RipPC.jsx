import { useState, useEffect } from "react";

export default function RipPC() {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if (totalCount < 9999) {
      setTotalCount(totalCount + 1);
    }
    console.log(totalCount);
  },);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      <button onClick={() => setSecondCount(secondCount + 1)}>
        second Count {secondCount}
      </button>
      <p>total count: {totalCount}</p>
    </>
  );
}
