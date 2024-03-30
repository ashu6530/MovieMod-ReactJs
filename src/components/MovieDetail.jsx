import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { BASE_URL } from "./context/context";


const MovieDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [iserror, setIsError] = useState({ show: false, msg: "" });
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      const data = res.data;
      console.log(data);
      if (data.Response === "True") {
        setLoading(false);
        setMovie(data);
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
      getMovies(`${BASE_URL}&i=${id}`);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen bg-blue-300 flex justify-center items-center">
        <div className="text-3xl text-white ">Loading......</div>
      </div>
    );
  }
  return <>
 <div className="w-full h-screen bg-slate-700 flex items-center justify-center">
  <div className="flex items-center shadow-lg h-[40%] w-[40%] rounded-lg bg-slate-100 bg-opacity-10 overflow-hidden">
    <img className="object-cover object-center rounded-md h-full w-1/2" src={movie.Poster} alt="" />
    <div className="text-white w-1/2 p-4 flex flex-col justify-center">
      <p className="mb-2">{movie.Title}</p>
      <p className="mb-2">{movie.Released}</p>
      <p className="mb-2">{movie.Genre}</p>
      <p className="mb-2">{movie.imdbRating}</p>
      <p className="mb-2">{movie.Country}</p>
      <NavLink to="/"> <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Go Back</button></NavLink>
     
    </div>
  </div>
</div>
  </>
};

export default MovieDetail;
