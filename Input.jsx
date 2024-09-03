import { useState, useEffect } from "react";

export default function Input() {
  const [input, setInput] = useState("");

//   useEffect(() => {
//     const inputTimer = setTimeout(() => {  // this code runs on first useEffect trigger
//       console.log(input);                  // este código se ejecuta en el primer useEffect
//     }, 1000);

//     return () => clearTimeout(inputTimer); // this code runs at the next useEffect trigger
//   }, [input]);                              // este código se ejecuta en el siguiente useEffect


    useEffect(() => {
       return () => {console.log(input)}
    })

  return (
    <input
      type="text"
      placeholder="Escribe algo"
      onChange={(e) => setInput(e.target.value)}
    />
  );
}
