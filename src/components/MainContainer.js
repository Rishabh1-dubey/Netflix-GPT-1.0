import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import BackgroundVideo from "./BackgroundVideo";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  //ye tera movie app store se aa rha hai
  // if (!movies ) return;

  if (movies ===null) return; //this is called early return
  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <BackgroundVideo movieId={id}/>
    </div>
  );
};

export default MainContainer;
