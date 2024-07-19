import {} from 'react';
import Producto from '../components/Producto';
import { useFetch } from '../API/useFetch';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';


const Jewelry = () => {

  const { data, isLoading, error } =  useFetch("https://fakestoreapi.com/products/category/jewelery")
  
  if (isLoading) {
    return     <Loading/>
  }

  if (error) {
    return <div className="container mx-auto p-4">Error al cargar los productos.</div>;
  }

  return (
    <div className="container mx-auto p-4 min-h-screen">
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
      <Pagination/>

    </div>
  );
}

export default Jewelry;
