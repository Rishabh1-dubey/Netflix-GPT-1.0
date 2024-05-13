import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[20%]  px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl  md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black py-1 px-2 md:py-3 md:px-12 text-xl rounded-lg  border border-black font-bold hover:bg-opacity-80 ">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-4 bg- bg-white text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg  font-bold  ">
          MoreInfo
        </button>
      </div>
    </div>
  )
}

export default VideoTitle