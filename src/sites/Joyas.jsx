import {} from 'react';
import Producto from '../components/Producto';
import { useFetch } from '../hooks/useFetch';


const Jewelry = () => {

  const {data} = useFetch("https://fakestoreapi.com/products/category/jewelery")
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Joyas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* {joyas.map((product) => (
          <Producto key={product.id} product={product} />
        ))} */}

        {
          data?.map((product) => (
            <Producto key={product.id} product={product}/>
          ))
        }
        

      </div>
    </div>
  );
}

export default Jewelry;
