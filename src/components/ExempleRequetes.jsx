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

  const addProduct = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData);

    const newProduct = {
      category: formData.get("category"),
      name: formData.get("name"),
      price: formData.get("price"),
      number: formData.get("number "),
    };

    axios
      .post(url, newProduct)
      // Sur notre json server (et c'est généralement le cas sur les serveurs Backend)
      // axios retournera en réponse le nouveau produit que l'on vient de créer
      .then((response) => setProducts((prev) => [...prev, response.data]))
      .catch((err) => console.error(err));
  };

  return (
    <>
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
      {/* Section formulaire */}
      <section className="m-5 border p-5">
        <form onSubmit={addProduct}>
          <div className="grid grid-cols-4 mb-5 gap-5">
            <input
              type="text"
              placeholder="Nom du produit"
              name="name"
              className="flex"
            />
            <input
              type="number"
              placeholder="Prix"
              name="price"
              className="flex"
            />
            <input
              type="number"
              placeholder="Quantité"
              name="number"
              className="flex"
            />
            <input
              type="text"
              placeholder="Catégorie"
              name="category"
              className="flex"
            />
          </div>
          <button type="submit" className="btn">
            Ajouter
          </button>
        </form>
      </section>
    </>
  );
};
