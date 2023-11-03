import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
