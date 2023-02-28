import React, { useEffect } from "react";
import MovieListing from "../movieListing/MovieListing";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, []);
  return (
    <div className="homeContainer">
      <MovieListing />
    </div>
  );
};

export default Home;
