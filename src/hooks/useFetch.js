import { useEffect, useState } from 'react'
import axios from 'axios'


export const useFetch = (url) => {

const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(url)
      .then((res) => setData(res.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return {data};
} 
