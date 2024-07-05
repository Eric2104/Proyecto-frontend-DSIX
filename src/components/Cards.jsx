import React from 'react'

export default function Cards() {
  return (
    <div className='bg-slate-600 text-white p-4 rounded-lg shadow-md mx-2'>
      <div className='w-full text-center'>
        <img src='/compu.png' alt='Imagen de Producto' className='h-32 overflow-hidden mx-auto'/>
      </div>
      <h3 className='text-center font-semibold text-xl mt-4'>Titulo</h3>
      <p className='text-justify text-gray-300 line-clamp-3 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iusto nemo eaque numquam dicta exercitationem velit molestiae.</p>
      <p className='my-2 text-center'>Precio: <span className='font-bold'>$9.99</span></p>
      <button className='bg-slate-200 text-zinc-800 py-2 px-4 rounded-md font-semibold mt-2 w-full'>Comprar</button>
    </div>
  )
}
