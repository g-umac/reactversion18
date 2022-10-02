import React, { useEffect } from "react";
import { setMoviesList, setLoading, myyallMovies } from "../../reducers/MovieListSlice"
import { useDispatch, useSelector } from "react-redux";
import { getMoviessFromApi } from "../../data/Api"

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
      <div>Home</div>
      {loading ? <div>loading</div> : <div>
        {movies.homepage}
      </div>}

    </>)
}


export default Home