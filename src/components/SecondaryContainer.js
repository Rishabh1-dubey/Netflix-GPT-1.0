import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black ">
      <div className=" mt-0 md:-mt-44 pl-4 md:pl-12 relative z-20">

      <MovieList  title={"Now Playing "} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={movies.poplularMovies}/>
      <MovieList title={"Top Rated Movie"} movies={movies.topRatedMovie} />
      <MovieList title={"Upcoming Movie"} movies={movies.upComingMovies} />
    </div>
      </div>
  );
};

export default SecondaryContainer;
