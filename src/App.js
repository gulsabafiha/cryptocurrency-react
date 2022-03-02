import './App.css';
import Home from './components/pages/Home/Home';
import {BrowserRouter, Navigate, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}></Route>
        <Route path='/home' element={<Home/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
