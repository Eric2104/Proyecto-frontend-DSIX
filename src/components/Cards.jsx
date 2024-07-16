import {} from "react";
import PropTypes from "prop-types";

export default function Cards({ product }) {
  return (
    <div className="bg-slate-600 text-white p-4 rounded-lg shadow-md mx-2">
      <div className="w-full text-center">
        <img
          src={product.image}
          alt="Imagen de Producto"
          className="h-32 overflow-hidden mx-auto"
        />
      </div>
      <h3 className="text-center font-semibold text-xl mt-4">
        {product.title}
      </h3>
      <p className="text-justify text-gray-300 line-clamp-3 mt-2">
        {product.description}.
      </p>
      <p className="my-2 text-center">
        Precio: <span className="font-bold">${product.price}</span>
      </p>
      <button className="bg-slate-200 text-zinc-800 py-2 px-4 rounded-md font-semibold mt-2 w-full">
        Comprar
      </button>
    </div>
  );
}

Cards.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
