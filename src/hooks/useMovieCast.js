import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants"
import { addMovieCast } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieCast=(id)=>{
    const dispatch= useDispatch()
    const getMovieCast = async()=>{
        const data= await fetch(
            "https://api.themoviedb.org/3/movie/" +
            id +
            "/credits?language=en-US",API_OPTIONS
        );
        const json= await data.json()
        dispatch(addMovieCast(json.cast))
    }
    useEffect(()=>{
        getMovieCast();
    },[])
}
export default useMovieCast;