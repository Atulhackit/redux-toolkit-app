import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../movieCard/MovieCard";
import "./MovieListing.scss";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  // console.log(movies);
  // console.log("movies", movies);
  console.log("shows", shows);
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
  let renderShows = "";
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => {
        // console.log(movie);
        return <MovieCard key={index} data={show} />;
      })
    ) : (
      <div className="movieError">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movieListWrapper">
      <div className="movieList">
        <h3>Movies</h3>
        <div className="movieCardContainer">{renderMovies}</div>
      </div>
      <div className="movieList">
        <h3>Shows</h3>
        <div className="movieCardContainer">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
