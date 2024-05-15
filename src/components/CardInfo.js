import React from "react";
import {  useParams } from "react-router-dom";
import useMovieInfo from "../hooks/useMovieInfo";
import Header from "./Header";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import CardTopInfo from "./CardTopInfo";
import useMovieCast from "../hooks/useMovieCast";
import CastCard from "./CastCard";
import userSlice from "../utils/userSlice";

const CardInfo = () => {
  const { id } = useParams();
  useMovieInfo(id);
  const info = useSelector((store) => store.movies.movieInfo);
  useMovieCast(id);
  const movieCast=useSelector((store)=>store.movies.cast);
  // console.log(movieCast);
  //dry and run use this

  return (
   
    <div className="relative w-full ">
      <Header />
      <div className="h-[100vh] w-[100%] top-0 absolute -z-10 overflow-hidden bg-black">
        <img
          className="w-12/12 mx-auto brightness-[.4] scale-125  xl:scale-105"
          alt="moviedInside-Img-bg"
          src={
            IMG_CDN_URL +
            (info?.backdrop_path)
          }
        />
      </div>
      <CardTopInfo info={info} />
     
<div className="h-full bg-black">
      <h1 className="text-white pt-12 mx-12 my-12 text-2xl">Cast and Crew</h1>
      <div className="flex overflow-x-hidden my-6 mx-10 ">
        <div className="flex flex-wrap gap-2 ">
          {movieCast?.map((cast)=>(
            <CastCard key={cast.id} profile_path={cast.profile_path} name={cast.name}/>
          ))}
        </div>
          </div>
          
         
      
       
      </div>
    
      {/* <h1 className="text-black pt-44">Rishabh</h1> */}
    </div>
  );
};

export default CardInfo;
