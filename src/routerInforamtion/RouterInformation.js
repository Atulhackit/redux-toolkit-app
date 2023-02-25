import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "../component/movieDetails/MovieDetails";
import Home from "../component/home/Home";
import PageNotFound from "../component/pageNotFound/PageNotFound";

const RouterInformation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie:imdbID" element={<MovieDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterInformation;
