import React from "react";

const MovieCard = ({ data }) => {
  return (
    <div className="cardContainer">
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
    </div>
  );
};

export default MovieCard;
