import { useEffect, useState } from 'react'
import axios from 'axios'

const addCartFecth = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchAddProducts = async () => {
          setIsLoading(true);
          try {
            const res = await axios.get(url);
            setData(res.data);
          } catch (error) {
            setError(error);
          } finally {
            setIsLoading(false);
          }
        };

        fetchAddProducts()
    },[url])
    return { data, isLoading, error };

}

const searchProductsUser = async (dataCartFind) => {
  const productPromises = dataCartFind.products.map(product =>
    axios.get(`https://fakestoreapi.com/products/${product.productId}`)
  );
  const products = await Promise.all(productPromises);
  return products.map(res => res.data);
}

const searchCartUser = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchAddProducts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
        const products = await searchProductsUser(res.data[0]);
        setProductDetails(products);
        
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAddProducts();
  }, [url]);

  return { data, isLoading, error, productDetails };
}

export { addCartFecth, searchCartUser }