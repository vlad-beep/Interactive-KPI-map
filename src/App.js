import React from "react"
import './App.css'
import { Navbar } from "./components/navbar/Navbar"
import {InfoBlock} from "./components/infoblock/InfoBlock"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { MapComponent } from "./components/map/Map"
import Home from './pages/Home'
import News from './pages/News'


function App() {
 
  return (
  <Router>
    
    <Navbar/>
  <Routes>
<Route path="/" element = {<MapComponent/>}/>
<Route path="/About" element = {   <InfoBlock/>}/>
<Route path="/Contacts" element = {<MapComponent/>}/>
<Route path="/News" element = {<News/>}/>
   </Routes>
   </Router>

  );
}

export default App;

