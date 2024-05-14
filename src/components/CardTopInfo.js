import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const CardTopInfo = ({info}) => {
  return (
    <div className="flex flex-row justify-between ">
          <div className="xl:w-3.5/12 w-4/12">
        <img
          className="xl:w-72 lg:w-64 md:w-60 sm:w-48 w-28  rounded-2xl"
          src={IMG_CDN_URL + info?.poster_path}
          alt="movieicon"
        ></img>
      </div>  

      
    </div>
  )
}

export default CardTopInfo