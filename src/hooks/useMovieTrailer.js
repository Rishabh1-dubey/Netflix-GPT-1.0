import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    )

    const json = await data.json();
    // console.log(json);
     //for only trailer we have to render our trailer
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
    //dispatch an action

    //if you want to render your video in component then just simpel fo tailer.key instead of writing or store in redux store
  };

  useEffect(() => {
    !trailerVideo && getMovieVideo();
  }, []);
};
export default useMovieTrailer;
