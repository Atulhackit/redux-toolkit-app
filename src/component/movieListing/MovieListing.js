import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../movieCard/MovieCard";
import "./MovieListing.scss";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  // console.log(movies);

  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        // console.log(movie);
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movieError">
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <div className="movieListWrapper">
      <div className="movieList">
        <h3>Movies</h3>
        <div className="movieCardContainer">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
