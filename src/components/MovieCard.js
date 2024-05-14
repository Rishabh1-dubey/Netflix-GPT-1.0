import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="w-48 md:w-48 pr-4 cursor-pointer hover:opacity-90 hover:scale-95">
      <img className="rounded-lg" alt="Movie card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
