import './App.css';
import Navbar from './Component/Navbar';
import Homepage from './Pages/Homepage';
import LandingPage from './Pages/LandingPage'
import  SearchPage from './Pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Homepage></Homepage>

{/* 
      <LandingPage></LandingPage>
      <SearchPage></SearchPage> */}
    </div>
  );
}

export default App;
