/* eslint-disable react/prop-types */
import { useState } from "react";
import Consigne from "../Consigne";

function Exercice() {
  const products = [
    { category: "Fruits", price: "$1", number: 0, name: "Banana" },
    { category: "Fruits", price: "$1", number: 2, name: "Mango" },
    { category: "Fruits", price: "$2", number: 0, name: "Pineapple" },
    { category: "Vegetables", price: "$2", number: 4, name: "Broccoli" },
    { category: "Vegetables", price: "$4", number: 0, name: "Carrot" },
    { category: "Vegetables", price: "$1", number: 6, name: "Zucchini" },
  ];

  const [checked, setChecked] = useState(false);

  const fruits = products.filter((product) => product.category === "Fruits");

  const vegetables = products.filter(
    (product) => product.category === "Vegetables"
  );

  return (
    <>
      <h1 className="pt-20">Exercice !!!</h1>
      <Consigne />
      <div className="p-5 w-fit border m-auto">
        <label>Afficher hors-stock:</label>
        <input
          type="checkbox"
          value={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <ListProduct
          products={fruits}
          title="Mon tableau de fruit :"
          afficherHorsStock={checked}
        />
        <ListProduct
          products={vegetables}
          title="Mon tableau de légumes :"
          afficherHorsStock={checked}
        />
      </div>
    </>
  );
}

function ListProduct({ products, title, afficherHorsStock = true }) {
  return (
    <>
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((product) =>
              afficherHorsStock ? true : product.number > 0
            )
            .map((product) => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.number}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Exercice;
