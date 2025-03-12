import './App.css';
import DesignSystem from './components/DesignSystem';
import Layout from './Layouts/Layout';
import Homepage from './pages/Homepage';
import Destinations from './Layouts/DestinationsLayout';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Planet from './pages/Planet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}></Route>
          <Route path='destinations' element={<Destinations/>}>
            <Route path=':id' element={<Planet/>}></Route>
            {/* <Route path='./:id' element={<Mars/>}></Route>
            <Route path='./:id' element={<Europa/>}></Route>
            <Route path='./:id' element={<Titan/>}></Route> */}
          </Route>
          <Route path='crew' element={<Crew/>}></Route>
          <Route path='technology' element={<Technology/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
