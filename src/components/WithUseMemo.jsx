import { useMemo, useState } from "react";

export const WithUseMemo = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState("");

  const sum = useMemo(() => {
    console.log("Calcul avec useMemo");
    return numbers.reduce((total, currentValue) => total + currentValue);
  }, [numbers]);

  const addNumbers = () => {
    setNumbers((prev) => [...prev, Math.random() * 10]);
  };

  return (
    <section className="m-5">
      <h2>Composant avec useMemo</h2>
      <p>Somme: {sum}</p>
      <button className="btn" onClick={addNumbers}>
        Ajouter un chiffre
      </button>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="mt-2 input input-bordered"
        />
        {inputValue}
      </div>
    </section>
  );
};
