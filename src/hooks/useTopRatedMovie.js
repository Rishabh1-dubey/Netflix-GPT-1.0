import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react";
import { addTopratedMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useTopRatedMovie=()=>{
    const dispath = useDispatch();
   const getUpComingMovies = async()=>{
    const data= await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
    );
    const json= await data.json()
    dispath(addTopratedMovies(json.results));
   };
   useEffect(()=>{
    getUpComingMovies();
   },[])
}
export default useTopRatedMovie;