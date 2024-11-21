/* eslint-disable react/prop-types */
import { useState } from "react";

export const Addform = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [number, setNumber] = useState("");
  const [category, setCategory] = useState("");

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
    console.log("submit");
    e.preventDefault();
    addProduct({ category, name, price, number });
  };

  return (
    <section>
      <form onSubmit={submit}>
        <div className="grid grid-cols-4 mb-5 gap-5">
          <label className="input input-bordered flex item-center gap-2">
            Nom
            <input
              type="text"
              value={name}
              onChange={handleChange}
              name="name"
              className="grow"
            />
          </label>
          <label className="input input-bordered flex item-center gap-2">
            Prix
            <input
              type="number"
              value={price}
              name="price"
              className="grow"
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex item-center gap-2">
            Quantité
            <input
              type="number"
              value={number}
              name="number"
              className="grow"
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex item-center gap-2">
            Catégorie
            <input
              type="text"
              value={category}
              name="category"
              className="grow"
              onChange={handleChange}
            />
          </label>
        </div>
        <button className="btn" type="submit">
          Valider
        </button>
      </form>
    </section>
  );
};
