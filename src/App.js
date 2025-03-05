import './App.css';
import DesignSystem from './components/DesignSystem';
import Layout from './Layouts/Layout';
import Homepage from './pages/Homepage';
import Destinations from './Layouts/DestinationsLayout';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  function Hello(){
    <h1>Hello test</h1>
  }
  console.log("test")

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}></Route>
          <Route path='/destinations' element={<Destinations/>}></Route>
          <Route path='/crew' element={<Crew/>}></Route>
          <Route path='/technology' element={<Technology/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
