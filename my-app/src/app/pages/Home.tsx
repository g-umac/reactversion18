import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchrepos, reposLoading, reposReceived } from "../reducer/allrepoSlice"
import { RootState } from '../store';
import { GithubRepo } from '../../interface/GithubRepo.interface';
import GitHubPepoCard from '../components/GitHubPepoCard';
import { CssBaseline } from '@mui/material';


const Home = () => {
  const dispatch: any = useDispatch()

  useEffect(() => {
    dispatch(fetchrepos())

  }, []);

  const { loading, allRepoList } = useSelector((state: RootState) => state.repos);
  console.log(allRepoList)
  return (
    <> 
    <CssBaseline/>
      {loading === "pending" ? <div>loading..</div> : <div>
        {allRepoList.map((item: GithubRepo) => <GitHubPepoCard repoData={item} />)} </div>}
    </>
  )
}

export default Home