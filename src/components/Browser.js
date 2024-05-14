import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovie from '../hooks/usePopularMovie';
import useTopRatedMovie from '../hooks/useTopRatedMovie';
import useUpComingMovie from '../hooks/useUpComingMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';
const Browser = () => {

// go to srach gpt page we have to subscribe to our store
const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)


  //alwayas remember custom hook alwyas call above the function component
   useNowPlayingMovies();
   usePopularMovie();
   useTopRatedMovie()
   useUpComingMovie();
  return (

    <div>
      <Header/>
      {
        showGptSearch ? (
          <GptSearchPage/>
        ):(
<>
          <MainContainer/>
          <SecondaryContainer/>
</>
        )}
             
      
    </div>
  )
}

export default Browser