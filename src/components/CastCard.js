import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const CastCard = ({profile_path, name}) => {
    if(profile_path)
  return (
    <div>
        <div className="w-48 pr-8 bg-black">
            <img  className="rounded-lg" src={IMG_CDN_URL+profile_path} alt="cast-Profile"/>
            <spna className="text-white">{name}</spna>
        </div>
    </div>
  )
}

export default CastCard