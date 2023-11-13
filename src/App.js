import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import { useState } from 'react';
import Frames from './components/Frames';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LetsBook from './components/LetsBook';
import BookState from './context/booking/BookState';
import PreventiveMaintenance from './components/PreventiveMaintenance';
import BodyRepair from './components/BodyRepair';
import CarCare from './components/CarCare';
import Contact from './components/Contact';

function App() {
  const [color , setColor] = useState("blue");

  setInterval(() => {
    if(color === "blue") {
      setColor("black");
    }
    else {
      setColor("blue");
    }
  },1000)

  const [alert , setAlert] = useState("")
  const showAlert = ((message) => {
    setAlert(message)

    setTimeout(() => {
      setAlert("");
    }, 50000)
  })

  return (
    <div>
      <BookState>
      <Router>
      <Navbar showAlert={showAlert} alert={alert}/>
      <Routes>
        <Route exact path="/" element={<Home color={color}/>}/>
        <Route exact path="/booking" element={<LetsBook color={color} showAlert={showAlert}/>}/>
        <Route exact path="/services" element={<><Services/> <Frames color={color}/></>}/>
        <Route exact path="/signup" element={<SignUp color={color} showAlert={showAlert}/>}/>
        <Route exact path="/login" element={<Login color={color} showAlert={showAlert}/>}/>
        <Route exact path="/pmaintenance" element={<PreventiveMaintenance color={color}/>}/>
        <Route exact path="/bodyrepair" element={<BodyRepair color={color}/>}/>
        <Route exact path="/carcare" element={<CarCare color={color}/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>    
      </Router>
      </BookState>
    </div>
  );
}

export default App;
