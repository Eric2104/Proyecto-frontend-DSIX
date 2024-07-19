import { useEffect, useState } from 'react'
import axios from 'axios'

const useTestimonialFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
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

    fetchTestimonials();
  }, [url]);

  return { data, isLoading, error };
};

export default useTestimonialFetch;
