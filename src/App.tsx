import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import ErrorPage from "./components/Error/ErrorPage";
 
function App() {

  return (
    <div className="App">
         <NavBar/>
 <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
         
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div> Foooter </div>
    </Router>
     
      </div>
  );
}

export default App;