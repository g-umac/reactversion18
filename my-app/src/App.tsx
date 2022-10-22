import React from 'react'; 
import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './app/pages/Home';
import NavBar from './app/components/NavBar';

function App() {

  return (
    <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
