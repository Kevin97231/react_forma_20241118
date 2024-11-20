import { useEffect } from "react";
import { useState } from "react";

export const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effet secondaire déclenché");
    document.title = `count : ${count}`;
  }, [count]);

  return (
    <section>
      <h1 className="pt-20">Le hook useEffect</h1>
      <ul>
        Le hook useEffect est utilisé:
        <li>Pour gérer des effets secondaires</li>
        <li>
          Pour effectuer des opérations après le rendu du composant (comme des
          appels des API, gestioon d&apos;abonnments etc ... )
        </li>
        <p>
          Très souvent, on utilise le hook useEffect() en conjonction avec le
          hook useState().
        </p>
      </ul>

      <button className="btn" onClick={() => setCount((prev) => prev + 1)}>
        +
      </button>
    </section>
  );
};
