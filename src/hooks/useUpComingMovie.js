import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";

const useUpComingMovie = () => {
  //Fetch Data from  TMDB API and update storee

  //addmovie slice in json.result for we have to perform dispatch and action
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    getUpComingMovies();
  }, []);
};
export default useUpComingMovie;
