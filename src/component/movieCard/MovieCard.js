import React from "react";
import { Link } from "react-router-dom";
const MovieCard = ({ data }) => {
  return (
    <div className="cardContainer">
      <Link to={`/movie/${data?.imdbID}`}>
        <div className="cardInner">
          <div className="cardTop">
            <img src={data?.Poster} alt="moviebanner" />
          </div>
          <div className="cardBottom">
            <h3 className="movieTitle">{data.Title}</h3>
            <h3>
              {data?.Year} <span>({data?.Type})</span>
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
