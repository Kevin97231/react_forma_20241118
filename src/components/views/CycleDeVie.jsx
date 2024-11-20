import { useEffect, useState } from "react";

export const CycleDeVie = () => {
  const [count, setCount] = useState(0);

  console.log("test");

  useEffect(() => {
    console.log("composant monté");

    return () => {
      console.log("return du useEffect");
    };
  }, []);

  return (
    <>
      <h1 className="pt-20">Le cycle de vie</h1>
      <p>{count}</p>
      <button className="btn" onClick={() => setCount((prev) => prev + 1)}>
        Incrémenter
      </button>
    </>
  );
};
