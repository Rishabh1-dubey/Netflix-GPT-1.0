import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const DataCss =
  "text-white font-bold xl:pr-2 lg:pr-2 md:pr-1.5 sm:pr-1 pr-0.5 text-[8px] lg:text-base md:text-sm sm:text-sm xl:text-base";
const ValueCss =
  "text-white border border-red xl:px-4 md:px-4 sm:px-4  m-1 rounded-2xl bg-gray-500 ";
const CardTopInfo = ({ info }) => {

  // const playTrailer=()=>{

  // }
  return (
    <div className="flex flex-row justify-between xl:pt-36 xl:px-28  px-3">
      <div className="xl:w-3.5/12 w-4/12">
        <img
          className="xl:w-72 lg:w-64 md:w-60 sm:w-48 w-28  rounded-2xl"
          src={IMG_CDN_URL + info?.poster_path}
          alt="movieicon-card"
        ></img>
      </div>

      <div className="xl:w-8/12 w-9/12 flex flex-col justify-start items-start">
        {/* title  */}
        <div className="">
          <span className="xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl text-lg font-extrabold text-white">
            {info?.title}
          </span>{" "}
          <span className="xl:text-xl text-sm xl:pl-4 pl-2 font-normal text-yellow-500 ">
            ({info?.release_date.slice(0, 4)})
          </span>
        </div>
        {/* title  */}

        <div className="xl:pt-7 lg-pt-6 md:pt-5 sm:pt-3 pt-0 ">
          <div>
            <span className={DataCss}>Date:</span>
            <span className={ValueCss}>{info?.release_date}</span>
          </div>
          <div className=" xl:py-4 md:py-4">
            <span className={DataCss}>Genure:</span>
            {info?.genres?.map((gen) => (
              <span key={gen?.name} className={ValueCss}>
                {gen?.name}
              </span>
            ))}
          </div>
          <div className="flex -pl-1">
            <span className={DataCss}>Runtime:</span>
            <span className={ValueCss}>
              {Math.floor(info?.runtime / 60)} hrs
            </span>
            <span className="text-white font-bold ml-2 my-1">Popularity:</span>
            <span className={ValueCss}>🌟{info?.popularity}</span>
          </div>
            <button className="border border-red-800 px-1 m-2  rounded-lg bg-gray-500 text-white font-semibold text-2xl h-12 hover:bg-green-400 hover:cursor-pointer">play trailer ▶️</button>
        </div>
        {/* tagline */}
        <div className="flex flex-row justify-center items-center py-0.5 lg:py-4 md:py-3 sm:py-2 xl:py-5">
          <span className="xl:text-3xl lg:text-xl md:text-lg sm:text-base text-[9px] font-semibold  text-white xl:pr-2 lg:pr-2 md:pr-1 sm:pr-1 pr-0.5">
            Tagline:{" "}
          </span>
          <span className="text-cyan-400 xl:text-2xl lg:text-2xl md:text-xl sm:text-base text-[9px] ">
            "{info?.tagline}"
          </span>
        </div>


        {/* tagline */}

        <div className="flex flex-col justify-start items-start w-12/12 xl:w-11/12">
          <span className="text-white font-semibold  text-[9px] lg:text-xl md:text-lg sm:text-base  xl:text-xl">
            Overview:{" "}
          </span>
          <span className="text-white text-[7px] hidden sm:block lg:text-lg md:text-base text-sm  xl:text-lg tracking-wider xl:tracking-wide">
            {info?.overview}
          </span>
          <span className="text-white text-[7px] sm:hidden xl:text-lg tracking-wider xl:tracking-wide">
            {info?.overview?.length > 180
              ? `${info?.overview?.slice(0, 180)}...`
              : info?.overview}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardTopInfo;
