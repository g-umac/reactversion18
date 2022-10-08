import React from 'react'
import GetAllMovies from '../../interface/GetAllMovies.interface';


type MoviesProps = {
  movies: GetAllMovies;
};
const Movies = ({movies}:MoviesProps) => {
  const {
    id,
    homepage,
   } = movies;
  return (<>
    <div>Movies</div>
    <h1>   {movies.id}
    </h1>
    </>)
}

export default Movies