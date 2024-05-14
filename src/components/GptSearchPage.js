import React from 'react'
import { BG_URL } from '../utils/constants'
import GptSearchBar from './GptSearchBar'

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10 w-full h-full">
        {/*----------------- Background Image -----------------*/}
        <img className="md:h-[600px] sm:h-[600px] h-screen lg:h-[800px] w-full object-cover" src={BG_URL} alt="background-Img"></img>
      </div>
      <GptSearchBar/>
    </div>
  )
}

export default GptSearchPage