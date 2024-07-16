import {} from "react";
import PropTypes from "prop-types";

export default function Cards({ product }) {
  return (
    <div className="bg-slate-600 text-white p-4 rounded-lg shadow-md mx-2 shadow-md">
      <div className="w-full text-center">
        <img
          src={product.image}
          alt="Imagen de Producto"
          className="h-32 overflow-hidden mx-auto"
        />
      </div>
      <h3 className="font-normal text-xl mt-4 lowercase line-clamp-2">
        {product.title}
      </h3>
      <p className=" text-gray-300 line-clamp-3 mt-2">
        {product.description}.
      </p>
      <p className="my-2 ">
        Precio: <span className="font-semibold">${product.price}</span>
      </p>
      <button className="bg-slate-200 transition-colors duration-200 text-zinc-800 hover:bg-slate-400 hover:text-white py-2 px-4 rounded-md font-semibold mt-2 w-full">
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
