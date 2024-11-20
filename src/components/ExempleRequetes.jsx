import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const ExempleRequetes = () => {
  const url = "http://localhost:3001/products";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
        })
        .catch((error) => {
          console.error(error.message);
        })
        .finally(() => {
          console.log("Requete terminé");
        });
    };

    fetchData();
  }, []);

  return (
    <section>
      <h2>Exemples avc notre Json server:</h2>

      <div>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>prix</th>
              <th>Quantité</th>
              <th>Catégorie</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.number}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
