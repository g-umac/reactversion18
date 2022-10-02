import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store"
/* import IMoviesState from "../interface/IMoviesState.interface"   */
import GetAllMoviesState from "../interface/GetAllMovies.interface";

 

export   interface IMoviesState {
  allMovies: GetAllMoviesState[],
  movies: [] | any, 
  loading: Boolean,
}

const initialState: IMoviesState = {
    allMovies:  [],
    movies: [],  
    loading: true, 
};

export const MovieListSlice = createSlice({
    name: "movies", 
    initialState,
    reducers: {
      setMoviesList: (state, action) => {
        console.log( state.movies =action.payload)
        state.movies =action.payload
       
      }, 
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
    },
})

export const { setMoviesList,setLoading }=MovieListSlice.actions;

export const myyallMovies = (state: RootState) => state.myyallMovies;

export default MovieListSlice.reducer;