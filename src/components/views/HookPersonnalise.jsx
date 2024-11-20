import { useIncrement } from "../../hooks/useIncrement";
import { useToggle } from "../../hooks/useToggle";

export const HookPersonnalise = () => {
  const [checked, toggleChecked] = useToggle();

  const {
    count,
    increment,
    decrement: decrementer,
  } = useIncrement({
    min: 0,
    initialValue: 5,
  });

  return (
    <section>
      <h1 className="pt-20">Les hooks personnalisés</h1>
      <p className="pb-2">
        <strong>
          <a href="https://usehooks.com/"></a>
        </strong>
      </p>
      <div className="py-5">
        <h2>Cas de figure n°1</h2>
        <p>
          Dans une appli react, on peut souvent avoir besoin de faire varier une
          valeur entre vrai et faux ( par exemple pour afficher / masquer une
          valeur ). Pour cela, on peut mettre en place un hook personnalisé (et
          ainsi factoriser du code)
        </p>

        <input type="checkbox" value={checked} onChange={toggleChecked} />
        <p> {checked && "Je suis coché"} </p>
      </div>
      <div>
        <h2>Cas de figure n°2</h2>
        <p>Je veux créer un hook pour gérer un compteur</p>

        <p>{count}</p>
        <button onClick={increment} className="btn">
          +
        </button>
        <button onClick={decrementer} className="btn">
          -
        </button>
      </div>
    </section>
  );
};
