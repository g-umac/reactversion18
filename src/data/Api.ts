
const baseUrl:string = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`; 
const BASE_URL: string = 'https://api.themoviedb.org/3';
const API_URL :string =` ${BASE_URL}/discover/movie?sort_by=popularity.desc&'+${process.env.REACT_APP_API_KEY}`;
const IMG_URL :string = 'https://image.tmdb.org/t/p/w500';
const searchURL :string =   `${BASE_URL}/search/movie?/${process.env.REACT_APP_API_KEY}`;


export const getMoviessFromApi = async() => { 
const response= await fetch(`${baseUrl}`)
  .then((response) => response.json())
  .then((data) => data);
 return response;
}

export const searchMoviessFromApi = async (movie_id: String) => {
  const response = await fetch(`${baseUrl}/movie/${movie_id}`);
  return response
}
