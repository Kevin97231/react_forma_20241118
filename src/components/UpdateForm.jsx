/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export const UpdateForm = ({ productToModify, updateProduct, closeModal }) => {
  const { id } = productToModify;

  const [name, setName] = useState(productToModify.name);
  const [price, setPrice] = useState(productToModify.price);
  const [number, setNumber] = useState(productToModify.number);
  const [category, setCategory] = useState(productToModify.category);

  useEffect(() => {
    if (productToModify !== undefined) {
      setName(productToModify.name);
      setPrice(productToModify.price);
      setNumber(productToModify.number);
      setCategory(productToModify.category);
    }
  }, [productToModify]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "number":
        setNumber(value);
        break;
      case "category":
        setCategory(value);
        break;
    }
  };

  const submit = (e) => {
    e.preventDefault();
    updateProduct({ name, price, number, category, id });
    closeModal();
  };

  return (
    <section>
      <form onSubmit={submit}>
        <div className="grid grid-cols-4 mb-5 gap-5">
          <input
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            className="grow"
          />
          <input
            type="number"
            value={price}
            name="price"
            className="grow"
            onChange={handleChange}
          />
          <input
            type="number"
            value={number}
            name="number"
            className="grow"
            onChange={handleChange}
          />
          <input
            type="text"
            value={category}
            name="category"
            className="grow"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn">
          Valider
        </button>
      </form>
    </section>
  );
};
