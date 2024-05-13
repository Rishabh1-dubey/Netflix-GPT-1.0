import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { mockComponent } from "react-dom/test-utils";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <MovieList title={"Now Playing "} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={movies.poplularMovies}/>
      <MovieList title={"Top Rated Movie"} movies={movies.topRatedMovie} />
      <MovieList title={"Upcoming Movie"} movies={movies.upComingMovies} />
    </div>
  );
};

export default SecondaryContainer;
