import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GithubRepo } from '../../interface/GithubRepo.interface';
import { Grid } from '@mui/material';

type SingleRepoCardProps = {
  repoData: GithubRepo;
};


const GitHubPepoCard = ({ repoData }: SingleRepoCardProps) => {
  const {
    id,
    owner,
    name,
    created_at,
    description,
    html_url,
    homepage,
    stargazers_count,
  } = repoData;
  return (
    <Grid item lg={3} md={4} xs={12} sm={6} key={id} >
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={`${owner.avatar_url}`}
          alt="github"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default GitHubPepoCard