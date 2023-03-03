import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import movieApi from "../../common/apis/movieApi";
import { ApiKey } from "../../common/apis/movieApiKey";
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "harry";
    const response = await movieApi
      .get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("Error", err);
      });
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const showText = "friends";
    const response = await movieApi
      .get(`?apiKey=${ApiKey}&s=${showText}&type=series`)
      .catch((err) => {
        console.log("Error", err);
      });
    return response.data;
  }
);
export const fetchAsyncMovieOrShowsDetails = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowsDetails",
  async (Id) => {
    console.log(Id);
    const response = await movieApi
      .get(`?apiKey=${ApiKey}&i=${Id}&plot=full`)
      .catch((err) => {
        console.log("Error", err);
      });
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  SelectedMovieOrShowsDetails: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMovieOrShow:(state)=>{
      state.SelectedMovieOrShowsDetails={}
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowsDetails.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, SelectedMovieOrShowsDetails: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
  },
});
export const { addMovies,removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.SelectedMovieOrShowsDetails;
export default movieSlice.reducer;
