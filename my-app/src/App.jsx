import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchrepos, reposLoading, reposReceived } from "./app/reducer/allrepoSlice"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchrepos())
    /*     console.log( getRepoData())  
     */
  }, []);

  const { loading, allRepoList } = useSelector(state => state.repos);
  console.log(allRepoList)
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello</h1>
        {loading === "pending" ? <div>loading..</div> : <div>
          {allRepoList.map((item) => <div>{item.id} </div>)} </div>}
      </header>
    </div>
  );
}

export default App;
