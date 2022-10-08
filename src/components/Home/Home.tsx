import React, { useEffect } from "react";
import { setMoviesList, setLoading, myyallMovies } from "../../reducers/MovieListSlice"
import { useDispatch, useSelector } from "react-redux";
import { getMoviessFromApi } from "../../data/Api"
import Movies from "../Movies/Movies";

const Home = () => {
  const dispatch = useDispatch();

  const getMovieData = async () => {
    const data = await getMoviessFromApi()

    dispatch(setMoviesList(data));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    getMovieData();

  }, []);

  const { movies, loading } = useSelector(myyallMovies)
  return (
    <>
      <h1>Movies</h1>
      {loading ? <div>loading</div> : <Movies movies={movies} />}

    </>)
}


export default Home