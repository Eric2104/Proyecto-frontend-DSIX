import {} from 'react';
import Producto from '../components/Producto';
import { useFetch } from '../hooks/useFetch';


export default function RopaMujer() {

  const {data} = useFetch("https://fakestoreapi.com/products/category/women's%20clothing")

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Ropa de Damas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {
          data?.map((product) => (
            <Producto key={product.id} product={product}/>
          ))
        }

      </div>
    </div>
  )
}
