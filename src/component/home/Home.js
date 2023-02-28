import React, { useEffect } from "react";
import MovieListing from "../movieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { ApiKey } from "../../common/apis/movieApiKey";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = "harry";
    const fetchApiData = async () => {
      const response = await movieApi
        .get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Error", err);
        });
      dispatch(addMovies(response.data));
    };
    fetchApiData();
  }, []);
  return (
    <div className="homeContainer">
      <MovieListing />
    </div>
  );
};

export default Home;
