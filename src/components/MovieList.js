import { aggregateFieldEqual } from "firebase/firestore";
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path || movie.profile_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;