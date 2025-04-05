import './App.css';
import DesignSystem from './components/DesignSystem';
import Layout from './Layouts/Layout';
import PlanetsLayout from './Layouts/PlanetsLayout';
import CrewsLayout from './Layouts/CrewsLayout';
import Homepage from './pages/Homepage';
import Planet from './pages/Planet';
import Crew from './pages/Crew';
import Technology from './pages/Technology';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}></Route>
          <Route path='destinations' element={<PlanetsLayout/>}>
            <Route path=':id' element={<Planet/>}></Route>
          </Route>
          <Route path='crew' element={<CrewsLayout/>}>
            <Route path=':id' element={<Crew/>}></Route>
          </Route>
          <Route path='technology' element={<Technology/>}></Route>
        </Route>
        <Route path='/design-system' element={<DesignSystem/>}></Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
