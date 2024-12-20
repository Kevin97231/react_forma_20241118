import { useState } from "react";
import { Modal } from "./Modal";
import { UpdateForm } from "./UpdateForm";

/* eslint-disable react/prop-types */
export const TableProduct = ({ products, removeFunction, updateProduct }) => {
  const handleUpdate = (product) => {
    setProductToModify(product);
    const modal = document.getElementById("my_modal");
    if (modal) modal.showModal();
  };

  const [productToModify, setProductToModify] = useState({});

  const closeModal = () => {
    const modal = document.getElementById("my_modal");
    if (modal) modal.close();
  };

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Catégorie</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.number}</td>
              <td>{product.category}</td>
              <td>
                <button
                  className="btn btn-error p-2 ml-5"
                  onClick={() => removeFunction(product)}
                >
                  Supprimer
                </button>
                <button
                  className="btn btn-warning p-2 ml-5"
                  onClick={() => handleUpdate(product)}
                >
                  Modifier
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        content={
          <UpdateForm
            productToModify={productToModify}
            updateProduct={updateProduct}
            closeModal={closeModal}
          />
        }
      />
    </section>
  );
};
