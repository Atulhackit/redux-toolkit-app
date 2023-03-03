import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import {
  fetchAsyncMovieOrShowsDetails,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
function MovieDetails() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const navigate=useNavigate()
  console.log(imdbID);
  const data = useSelector(getSelectedMovieOrShow);
  console.log("data:", data);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowsDetails(imdbID));
    dispatch(removeSelectedMovieOrShow())
  }, [dispatch, imdbID]);

  return (
    <div className="movieDetailsContainer">
     { Object.keys(data).length===0?<div>Loading....</div>:(<>
        <h3 onClick={()=>navigate(-1)}>Home</h3>
      <div className="movieDetailsLeft">
        <div className="movieTitle">{data?.Title}</div>
        <div className="movieRatings">
          <span>IMDB Rating : {data?.imdbRating}</span>
          <span>IMDB Votes : {data?.imdbVotes}</span>
          <span>Runtime : {data?.Runtime}</span>
          <span>Year : {data?.Year}</span>
        </div>
        <div className="moviePlot">{data?.Plot}</div>
        <div className="movieInfo">
          <div>
            <span>Director</span>
            <span>{data?.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data?.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data?.Generes}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data?.Language}</span>
          </div>
        </div>
      </div>
      <div className="movieDetailsRight">
        <img src={data?.Poster} alt="poster" />
      </div></>)} 
      
      
        
      
    </div>
  );
}

export default MovieDetails;
