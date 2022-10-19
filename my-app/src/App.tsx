import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchrepos, reposLoading, reposReceived } from "./app/reducer/allrepoSlice"
import { RootState } from './app/store';
import { GithubRepo } from './interface/GithubRepo.interface';

function App() {
  const dispatch:any = useDispatch()

  useEffect(() => {
    dispatch(fetchrepos())
     
  }, []);

  const { loading, allRepoList } = useSelector((state: RootState) => state.repos);
  console.log(allRepoList)
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello</h1>
        {loading === "pending" ? <div>loading..</div> : <div>
          {allRepoList.map((item:GithubRepo) => <div>{item.name} </div>)} </div>}
      </header>
    </div>
  );
}

export default App;
