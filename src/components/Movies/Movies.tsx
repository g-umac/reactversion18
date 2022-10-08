import * as React from 'react';
import GetAllMovies from '../../interface/GetAllMovies.interface';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type MoviesProps = {
  movies: GetAllMovies;
};
const Movies = ({movies}:MoviesProps) => {
  const {
    id,
    homepage,
    title,
    language,
    movie_id,
    backdrop_path,
    imdb_id,
    original_language,
    original_title,
    popularity,
    poster_path,
    release_date
   } = movies;
  return (<>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={`https://image.tmdb.org/t/p/w200${movies.poster_path}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {movies.title}      <span>  {movies.release_date}        
</span> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>)
}

export default Movies