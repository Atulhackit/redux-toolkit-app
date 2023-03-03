import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import {
  getAllMovies,
  getAllShows,
  getSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import MovieCard from "../movieCard/MovieCard";
import "./MovieListing.scss";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const data = useSelector(getSelectedMovieOrShow);
  // console.log(movies);
  // console.log("movies", movies);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3
  };
  console.log("shows", data);
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
        <div className="movieCardContainer"><Slider {...settings} >{renderMovies}</Slider></div>
      </div>
      <div className="showList">
        <h3>Shows</h3>
        <div className="showCardContainer">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
