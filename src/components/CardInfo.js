import React from 'react'
import { useParams } from 'react-router-dom'
import useMovieInfo from '../hooks/useMovieInfo';
import Header from "./Header"
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/constants';
import CardTopInfo from './CardTopInfo';

const CardInfo = () => {
    const {id}=useParams();
    useMovieInfo(id);
    const info=useSelector((store)=>store.movies.movieInfo);
    //dry and run use this

  return (
    <div className="relative w-full">
        <Header/>
        <div className="h-[100vh] w-[100%] top-0 absolute -z-10 overflow-hidden bg-black">
            <img alt="moviedInside-Img" src={IMG_CDN_URL +(info?.backdrop_path)}/>
        </div>
        <CardTopInfo info={info}/>   
    </div>
  )
}

export default CardInfo