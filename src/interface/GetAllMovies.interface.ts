export default interface GetAllMovies {
    movie_id: string,
    language: string,
    adult: boolean,
    backdrop_path: string | any,
    belongs_to_collection: null | Object,
    homepage: string | null,
    imdb_id: string | null,
    id: number ,
    original_language: string,
    original_title: string,
    title: string,
    popularity: number,
    poster_path: string | null,
    release_date:string
}
 