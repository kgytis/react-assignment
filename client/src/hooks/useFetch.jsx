// React module imports
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

// Additional axios configuration for CORS issues
let axiosConfig = {
  withCredentials: true,
};

const useFetch = (URL) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [cookie, setCookie] = useCookies(["accessToken"]);

  useEffect(() => {
    axios
      .get(URL, axiosConfig)
      .then((response) => {
        return response.data;
      })
      .then((fetchData) => {
        const cookies = document.cookie.split(";");
        setCookie(cookies, data, { path: "/" });
        setData(fetchData);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [URL]);
  return { data, isPending, error, cookie };
};

export default useFetch;
