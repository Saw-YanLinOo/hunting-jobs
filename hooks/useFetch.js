import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": "d1cd1127eemshf2517cb0b568033p1e4549jsn17b0cd15b793",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);

      if (response.status == 200) {
        setIsLoading(true);
        setData(response.data.data);
      } else {
        setIsLoading(true);
        setError("Something wrong !");
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = () => {
    fetchData();
  };

  return { data, isLoading, error, refresh };
};

export default useFetch;
