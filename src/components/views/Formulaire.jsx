import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
function Formulaire() {
  const [name, setName] = useState("");

  function handleNameChanged(e) {
    setName(e.target.value);
  }

  return (
    <>
      <h1 className="pt-20">Les formulaires</h1>
      <h2>Les champs contrôlés</h2>
      <p>
        En react, nous avons un concept que nous pouvons appeler les 'champs
        contrôlés'. En utilisant le <strong> 'onChange'</strong> d'une input et
        le hook useState() nous pouvons mettre à jour une variable à chaque
        changement de la valeur présente dans l'input
      </p>

      <div className="p-5 mt-5 border w-fit">
        <p>Bonjour, {name}</p>
        <input
          className="input-bordered"
          type="text"
          value={name}
          onChange={handleNameChanged}
        />
      </div>
    </>
  );
}

export default Formulaire;
