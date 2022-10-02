import GetAllMoviesState from './GetAllMovies.interface';

export default interface IMoviesState {
    allMovies: GetAllMoviesState[],
    movies: [] | any, 
    loading: Boolean,
}