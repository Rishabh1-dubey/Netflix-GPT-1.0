
//fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)

import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";


const useNowPlayingMovies =()=>{
    //Fetch Data from  TMDB API and update storee

  //addmovie slice in json.result for we have to perform dispatch and action
    const dispatch = useDispatch()


    const getNowPlayingMovies= async  ()=>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS
        );

        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(()=>{
        //this is const file create for api call 
        getNowPlayingMovies()
    },[])

};
export default useNowPlayingMovies;