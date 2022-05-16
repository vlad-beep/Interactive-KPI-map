import React from "react"
import './App.css'
import { Navbar } from "./components/navbar/Navbar"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import News from './pages/News'


function App() {
  return (
  
  <Router>
    <Navbar/>
  <Routes>
<Route path="/" element = {<Home/>}/>
<Route path="/About" element = {<About/>}/>
<Route path="/Contacts" element = {<Contacts/>}/>
<Route path="/News" element = {<News/>}/>
   </Routes>
   </Router>
  );
}

export default App;
