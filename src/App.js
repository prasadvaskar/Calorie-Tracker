import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Homepage from './Pages/Homepage';
import LandingPage from './Pages/LandingPage'
import SearchPage from './Pages/SearchPage';
import LoginPage from './Pages/LoginPage';
import { useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoutes/PrivateRoute';


function App() {

  
  return (

    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Homepage />}></Route>
        <Route path='/landingpage' element={<PrivateRoute><LandingPage/></PrivateRoute>} />
        <Route path='/searchpage' element={<SearchPage />} />
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
