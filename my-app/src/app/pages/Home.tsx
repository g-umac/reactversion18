import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchrepos } from "../reducer/allrepoSlice"
import { RootState } from '../store';
import { GithubRepo } from '../../interface/GithubRepo.interface';
import GitHubPepoCard from '../components/GitHubPepoCard';
import {  Grid } from '@mui/material';


const Home = () => {
  const dispatch: any = useDispatch()

  useEffect(() => {
    dispatch(fetchrepos())

  }, []);

  const { loading, allRepoList } = useSelector((state: RootState) => state.repos);
  console.log(allRepoList)
  return (
    <>
      {loading === "pending" ? <div>loading..</div> : <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        {allRepoList.map((item: GithubRepo) => <GitHubPepoCard repoData={item} />)}</Grid>}
    </>

  )
}

export default Home