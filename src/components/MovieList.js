import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  // console.log(movies);

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-2xl font-bold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-hidden ">
        <div className="flex">
          {movies?.map((movie) => (
            <Link key={movie.id} to={"/cardinfo/"+movie.id}>

            <MovieCard  posterPath={movie.poster_path || movie.profile_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
