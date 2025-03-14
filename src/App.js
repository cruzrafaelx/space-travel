import './App.css';
import DesignSystem from './components/DesignSystem';
import Layout from './Layouts/Layout';
import Homepage from './pages/Homepage';
import DestinationsLayout from './Layouts/DestinationsLayout';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Planet from './pages/Planet';
import CrewsLayout from './Layouts/CrewsLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}></Route>
          <Route path='destinations' element={<DestinationsLayout/>}>
            <Route path=':id' element={<Planet/>}></Route>
          </Route>
          <Route path='crew' element={<Crew/>}>
            <Route path=':id' element={<CrewsLayout/>}></Route>
          </Route>
          <Route path='technology' element={<Technology/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
