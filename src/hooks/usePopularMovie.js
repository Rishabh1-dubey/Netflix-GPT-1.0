import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovie =()=>{
    const dispatch = useDispatch();
    const getpopularMovies = async ()=>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json.results))

    };
    useEffect(()=>{
        getpopularMovies();
    },[])
}
export default usePopularMovie;