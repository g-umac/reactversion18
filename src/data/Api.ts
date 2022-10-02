
const baseUrl:string = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`; 

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
