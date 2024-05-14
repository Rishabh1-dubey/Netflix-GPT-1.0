
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addMovieInfo } from "../utils/movieSlice";

const useMovieInfo=(id)=>{
    const dispatch = useDispatch()


    const getMovieInfo = async ()=>{
       // console.log("Movie ID:", movieid); 
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/"+ id +"?language=en-US", API_OPTIONS
        );
// 'https://api.themoviedb.org/3/movie/movie_id?language=en-US',
        const json= await data.json();
        
        dispatch(addMovieInfo(json));
    };
    useEffect(()=>{
        getMovieInfo();
    },[]);
};
export default useMovieInfo;