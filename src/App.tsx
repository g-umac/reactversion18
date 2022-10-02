import axios from 'axios';
import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home';

 
function App() {

/*  const getData = async () => {
    const key = "8d5ebbde6faf0389f5535db79b3b891b"
    const data = await axios(`https://api.themoviedb.org/3/movie/550?api_key=8d5ebbde6faf0389f5535db79b3b891b`);
    console.log(data.data);
  }
  useEffect(() => {
    getData()

  }, [])  */  

  return (
    <div className="App">
      <header className="App-header">
        
        <Home/>
       </header>
    </div>
  );
}

export default App;
