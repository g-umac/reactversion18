import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import ErrorPage from "./components/Error/ErrorPage";
import Movies from "./components/Movies/Movies";
import MyMoviesList from "./components/MyMoviesList/MyMoviesList";

function App() {

  return (
    <div className="App"> 
      <Router>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<Home />} />
{/*           <Route path="/movies" element={<Movies />} />
 */}          <Route path="/mymovieslist" element={<MyMoviesList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;