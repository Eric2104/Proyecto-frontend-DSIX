import React from 'react'
import { searchCartUser } from '../API/cartFetch'
import Producto from '../components/Producto'
import Loading from '../components/Loading'

export default function Carts() {

    const { data, isLoading, error, productDetails } = searchCartUser('https://fakestoreapi.com/carts/user/2')
    if (isLoading) {
        return     <Loading/>
    }
    console.log(data[0])
    
      if (error) {
        return <div className="container mx-auto p-4">Error al cargar los productos.</div>;
      }

  return (
    <div className='container mx-auto p-4 min-h-screen '>
        <h1 className='text-3xl  text-center  font-semibold'>Seguir comprando</h1>
        <div className=' my-4 py-2 gap-4 grid grid-cols-3 xl:grid-cols-4'>
            {data.length > 0 ?
                productDetails.map((product, index)=>(
                    <Producto key={index} product={product}/>
                ))
            : 
                <p>No hay nada</p>
            }

        </div>

    </div>
  )
}
