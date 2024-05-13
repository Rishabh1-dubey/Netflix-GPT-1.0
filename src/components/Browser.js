import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovie from '../hooks/usePopularMovie';
import useTopRatedMovie from '../hooks/useTopRatedMovie';
import useUpComingMovie from '../hooks/useUpComingMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browser = () => {
  //alwayas remember custom hook alwyas call above the function component
   useNowPlayingMovies();
   usePopularMovie();
   useTopRatedMovie()
   useUpComingMovie();
  return (

    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browser