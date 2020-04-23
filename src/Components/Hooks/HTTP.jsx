import { useEffect, useState } from 'react';

const useHTTP = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data.hits);
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return [data, isLoading];
};

export default useHTTP;
