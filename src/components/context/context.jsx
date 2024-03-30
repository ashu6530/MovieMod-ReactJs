import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BASE_URL = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_URL
}`;

const context = createContext();

const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [iserror, setIsError] = useState({ show: false, msg: "" });
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("superman");

  const getMovies = async (url) => {
    setLoading(true)
    try {
      const res = await axios.get(url);
      const data = res.data;
      console.log(data);
      if (data.Response === "True") {
        setLoading(false);
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      getMovies(`${BASE_URL}&s=${query}`);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <context.Provider
      value={{
        loading,
        setLoading,
        movie,
        setMovie,
        iserror,
        setIsError,
        query,
        setQuery,
      }}
    >
      {children}
    </context.Provider>
  );
};

export { AppContext, context };
