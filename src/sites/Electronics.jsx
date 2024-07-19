import Producto from '../components/Producto'
import { useFetch } from '../API/useFetch'
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';

const Electronics = () => {
  const { data, isLoading, error } = useFetch("https://fakestoreapi.com/products/category/electronics");

  if (isLoading) {
    return     <Loading/>
  }

  if (error) {
    return <div className="container mx-auto p-4">Error al cargar los productos.</div>;
  }

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold mb-6">Electrónicos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data?.map((product) => (
            <Producto key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div>
        <Pagination/>
      </div>
    </div>
  );
};

export default Electronics;