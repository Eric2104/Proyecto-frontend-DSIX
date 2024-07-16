import {} from 'react';
import PropTypes from 'prop-types'

const Producto = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img alt='producto' src={product.image} className="h-48 w-auto object-cover mb-4 rounded"/>
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="text-gray-500">{product.description}</p>
      <div className='flex justify-between items-center'>
        <p className=" text-indigo-600 font-semibold">${product.price}</p>
        <button className='px-2 py-1.5 bg-indigo-600 text-white rounded-md'>Comprar</button>
      </div>
    </div>
  );
}

Producto.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}

export default Producto;