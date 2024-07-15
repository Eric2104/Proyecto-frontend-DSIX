import React from 'react';

const Producto = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.imagen} className="h-48 w-full object-cover mb-4 rounded"/>
      <h2 className="text-xl font-bold">{product.nombre}</h2>
      <p className="text-gray-500">{product.descripcion}</p>
      <div className='flex justify-between items-center'>
      <p className=" text-indigo-600 font-semibold">${product.precio}</p>
      <button className='px-2 py-1.5 bg-indigo-600 text-white rounded-md'>Comprar</button>
      </div>
    </div>
  );
}

export default Producto;