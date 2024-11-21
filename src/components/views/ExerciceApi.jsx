import { useState, useEffect } from "react";
import { ConsigneApi } from "../ConsigneApi";
import axios from "axios";
import { TableProduct } from "../TableProduct";
import { Addform } from "../Addform";

export const ExerciceApi = () => {
  const [products, setProducts] = useState([]);

  const [displayProductForm, setDisplayProductForm] = useState(false);

  let url = "http://localhost:3001/products";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setProducts(response.data))
      .catch((e) => console.error(e));
  }, []);

  const addProduct = (newProduct) => {
    console.log("addProduct", newProduct);
    axios
      .post(url, newProduct)
      .then((response) => setProducts((prev) => [...prev, response.data]))
      .catch((e) => console.error(e));

    setDisplayProductForm(false);
  };

  const deleteProduct = (product) => {
    let deleteUrl = url + `/${product.id}`;

    axios
      .delete(deleteUrl)
      .then(() =>
        setProducts((prev) =>
          prev.filter((productFilter) => productFilter.id !== product.id)
        )
      )
      .catch((e) => console.error(e));
  };

  const updateProduct = (updateProduct) => {
    let updateProductUrl = url + `/${updateProduct.id}`;
    axios
      .put(updateProductUrl, updateProduct)
      .then((response) =>
        setProducts((prev) =>
          prev.map((product) =>
            product.id === response.data.id ? response.data : product
          )
        )
      );
  };

  return (
    <section>
      <h1 className="pt-20">Exercice API</h1>;
      <ConsigneApi />
      <TableProduct
        products={products}
        removeFunction={deleteProduct}
        updateProduct={updateProduct}
      />
      <button className="btn" onClick={() => setDisplayProductForm(true)}>
        Ajouter un produit
      </button>
      {displayProductForm && <Addform addProduct={addProduct} />}
    </section>
  );
};
