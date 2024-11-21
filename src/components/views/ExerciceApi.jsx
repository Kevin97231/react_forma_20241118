import { useState, useEffect } from "react";
import { ConsigneApi } from "../ConsigneApi";
import axios from "axios";
import { TableProduct } from "../TableProduct";
import { Addform } from "../Addform";
import { useAxios } from "../../hooks/useAxios";

export const ExerciceApi = () => {
  const [products, setProducts] = useState([]);

  const [displayProductForm, setDisplayProductForm] = useState(false);

  let url = "http://localhost:3001/products";

  const { get, post, put, remove } = useAxios();

  useEffect(() => {
    // solution avec un hook personnalisé
    get()
      .then((response) => setProducts(response))
      .catch((e) => console.error(e));

    // axios
    //   .get(url)
    //   .then((response) => setProducts(response.data))
    //   .catch((e) => console.error(e));
  }, []);

  const addProduct = (newProduct) => {
    // solution avec un hook personnalisé
    post("", newProduct)
      .then((response) => setProducts((prev) => [...prev, response]))
      .catch((e) => console.error(e));

    // axios
    //   .post(url, newProduct)
    //   .then((response) => setProducts((prev) => [...prev, response.data]))
    //   .catch((e) => console.error(e));

    setDisplayProductForm(false);
  };

  const deleteProduct = (product) => {
    console.log("product", product);
    // solution avec un hook personnalisé
    remove("", product.id)
      .then(() =>
        setProducts((prev) => {
          console.log(prev);
          return prev.filter(
            (productFilter) => product.id !== productFilter.id
          );
        })
      )
      .catch((e) => console.error(e));

    // let deleteUrl = url + `/${product.id}`;
    // axios
    //   .delete(deleteUrl)
    //   .then(() =>
    //     setProducts((prev) =>
    //       prev.filter((productFilter) => productFilter.id !== product.id)
    //     )
    //   )
    //   .catch((e) => console.error(e));
  };

  const updateProduct = (updateProduct) => {
    put("", updateProduct.id, updateProduct).then((response) =>
      setProducts((prev) =>
        prev.map((productMap) =>
          productMap.id === response.id ? { ...response } : productMap
        )
      )
    );

    // let updateProductUrl = url + `/${updateProduct.id}`;
    // axios.put(updateProductUrl, updateProduct).then((response) =>
    //   setProducts((prev) =>
    //     prev.map((product) => {
    //       product.id === response.data.id ? response.data : product;
    //     })
    //   )
    // );
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
