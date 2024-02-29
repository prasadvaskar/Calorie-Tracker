import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Homepage from './Pages/Homepage';
import LandingPage from './Pages/LandingPage'
import  SearchPage from './Pages/SearchPage';


function App() {

  
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Homepage></Homepage> */}

{/* 
      <LandingPage></LandingPage> */}

      <Routes>
        <Route path='/home' element={<Homepage/>} />
        <Route path='/landingpage' element={<LandingPage/>} />
        <Route path='/searchpage' element={<SearchPage/>} />
        
      </Routes>
    </div>
  );
}

export default App;
