import React from 'react'
import { Link } from 'react-router-dom';

const Producto = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg flex flex-col h-full transition-transform transform hover:scale-105">
      <img
        alt='producto'
        src={product.image}
        className="p-2 h-40 bg-cover mx-auto mb-4 rounded transition-transform transform hover:scale-110"
      />
      <h2 className="text-xl line-clamp-2 font-semibold lowercase text-slate-800">{product.title}</h2>
      <p className="text-gray-500 line-clamp-3 lowercase my-2">{product.description}</p>
      <div className='flex justify-between items-center mt-auto'>
        <p className="text-indigo-600 font-semibold">${product.price}</p>
        <Link to={`/ver/${product.id}`} className='px-2 py-1.5 bg-indigo-600 text-white rounded-md transition-colors hover:bg-indigo-800'>Ver más</Link>
      </div>
    </div>
  );
}

export default Producto;