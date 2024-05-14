import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  // if (!Array.isArray(movieNames) || movieNames.length === 0) {
  //   return null;
  // }
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      <div>
        {movieNames?.map((movie, index) => (
          <MovieList 
          key={movie}
          title={movie}
           movies={movieResults?.[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;

