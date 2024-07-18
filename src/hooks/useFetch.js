import { useEffect, useState } from 'react'
import axios from 'axios'


export const useFetch = (url) => {
const [data, setData] = useState(null)
const [isLoading, setIsLoading] = useState(true);//codigo agregado eric
const [error, setError] = useState(null);//codigo agregado eric

useEffect(() => {
  const fetchProducts = async () => {
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

  fetchProducts();
}, [url]);

  return { data, isLoading, error };
} 
