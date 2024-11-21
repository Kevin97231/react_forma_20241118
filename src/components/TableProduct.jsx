/* eslint-disable react/prop-types */
export const TableProduct = ({ products, removeFunction }) => {
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
