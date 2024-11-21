/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const UpdateForm = ({ productToModify, updateProduct, closeModal }) => {
  const { id } = productToModify;

  //  Logique sans la bibliotheque react hook form
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [number, setNumber] = useState("");
  // const [category, setCategory] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm();

  useEffect(() => {
    clearErrors();
    setValue("name", productToModify.name || "");
    setValue("price", productToModify.price || "");
    setValue("number", productToModify.number || "");
    setValue("category", productToModify.category || "");
    // TODO: Pré remplissage avec le setValue
    // Sans la biblio React hook form
    // setName(productToModify.name || "");
    // setPrice(productToModify.price || "");
    // setNumber(productToModify.number || "");
    // setCategory(productToModify.category || "");
  }, [productToModify]);

  // //  Logique sans la bibliotheque react hook form
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case "name":
  //       setName(value);
  //       break;
  //     case "price":
  //       setPrice(value);
  //       break;
  //     case "number":
  //       setNumber(value);
  //       break;
  //     case "category":
  //       setCategory(value);
  //       break;
  //   }
  // };

  //  Logique sans la bibliotheque react hook form
  // const submit = (e) => {
  //   console.log("FORMULAIRE SOUMIS !");
  //   e.preventDefault();
  //   updateProduct({ name, price, number, category, id });
  //   closeModal();
  // };

  const submit = (product) => {
    console.log(product);
    updateProduct({ ...product, id });
    closeModal();
  };

  let numberVerif = {
    required: "valeur requise",
    min: { value: 0, message: "Valeur min: 0" },
    max: { value: 100, message: "Valeur max: 0" },
  };

  return (
    <section>
      <form onSubmit={handleSubmit(submit)}>
        <div className="grid grid-cols-4 mb-5 gap-5">
          <input
            type="text"
            className="grow"
            {...register("name", {
              required: "Nom requis",
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}

          <input
            type="number"
            className="grow"
            {...register("price", numberVerif)}
          />
          {errors.price && <span>{errors.price.message}</span>}

          <input
            type="number"
            className="grow"
            {...register("number", numberVerif)}
          />
          {errors.number && <span>{errors.number.message}</span>}
          <input
            type="text"
            className="grow"
            {...register("category", {
              required: "catégorie requise",
              maxLength: { value: 10, message: "10 caractères max !" },
            })}
          />
          {errors.category && <span>{errors.category.message}</span>}
        </div>
        <button type="submit" className="btn">
          Valider
        </button>
      </form>
    </section>
  );
};

// Sans biblio react hook form:
//  return (
//    <section>
//      <form onSubmit={submit}>
//        <div className="grid grid-cols-4 mb-5 gap-5">
//          <input
//            type="text"
//            value={name}
//            onChange={handleChange}
//            name="name"
//            className="grow"
//          />
//          <input
//            type="number"
//            value={price}
//            name="price"
//            className="grow"
//            onChange={handleChange}
//          />
//          <input
//            type="number"
//            value={number}
//            name="number"
//            className="grow"
//            onChange={handleChange}
//          />
//          <input
//            type="text"
//            value={category}
//            name="category"
//            className="grow"
//            onChange={handleChange}
//          />
//        </div>
//        <button type="submit" className="btn">
//          Valider
//        </button>
//      </form>
//    </section>
//  );
