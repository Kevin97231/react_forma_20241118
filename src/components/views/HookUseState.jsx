import { useState } from "react";

function HookUseState() {
  console.log("Render recalculé");

  const [count, setCount] = useState(0);

  const increment = () => {
    // setCount(count + 1);
    setCount((preValue) => preValue + 1);
  };

  return (
    <>
      <h1>Le hook useState</h1>
      <p>{count}</p>
      <button onClick={increment}> + </button>
      <button onClick={() => setCount((preValue) => preValue - 1)}> - </button>
    </>
  );
}

export default HookUseState;
