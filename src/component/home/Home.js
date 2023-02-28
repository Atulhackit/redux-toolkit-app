import React, { useEffect } from "react";
import MovieListing from "../movieListing/MovieListing";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, []);
  return (
    <div className="homeContainer">
      <MovieListing />
    </div>
  );
};

export default Home;
