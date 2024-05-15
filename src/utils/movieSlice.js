import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    upComingMovies: null,
    poplularMovies: null,
    topRatedMovie: null,
    movieInfo: null,
    cast:null ,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.poplularMovies = action.payload;
    },
    addTopratedMovies: (state, action) => {
      state.topRatedMovie = action.payload;
    },
    addMovieInfo: (state, action) => {
      state.movieInfo = action.payload;
    },
    addMovieCast: (state, action) => {
      state.cast = action.payload;
    }
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addUpComingMovies,
  addPopularMovies,
  addTopratedMovies,
  addMovieInfo,
  addMovieCast
} = movieSlice.actions;

export default movieSlice.reducer;
