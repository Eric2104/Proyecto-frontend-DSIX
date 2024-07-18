import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Loading from '../components/Loading';

export default function VerProducto() {
  const { id } = useParams();

  const { data, isLoading, error } = useFetch(`https://fakestoreapi.com/products/${id}`)

  if (isLoading) {
    return     <Loading/>
  }

  if (error) {
    return <div className="container mx-auto p-4">Error al cargar los productos.</div>;
  }
  
  return (
    <div className="container  h-[80vh] flex flex-col md:flex-row justify-between items-center mx-auto p-4 space-y-4 md:space-y-0 md:space-x-4">
      <div className="border-2  w-full md:w-1/2 p-4">
        <div className="w-full flex justify-center">
          <img src={data.image} alt="producto" className="h-64 object-contain"/>
        </div>
        <p className="text-center mt-4">Categoría: <span className="font-semibold">{data.category}</span></p>
      </div>
      <div className="border-2  w-full md:w-1/2 p-4 flex flex-col justify-between">
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-lg mb-4">{data.description}</p>
        <p className="text-2xl font-bold mb-4">${data.price}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Agregar al carrito</button>
      </div>
    </div>
)
}
