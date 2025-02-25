import './App.css';
import DesignSystem from './components/DesignSystem';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  function Hello(){
    <h1>Hello test</h1>
  }
  console.log("test")

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
