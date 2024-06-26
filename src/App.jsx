import { useState } from 'react'
import Navbar from "../src/Components/Navbar/Navbar";
import './App.css'
import Page from './Components/Page/Page';
import About from './Components/About/About';
import Merch from "./Components/Merch/Merch";

const App= () => {
  
  return (
      <div>
        <Navbar />
        <Page />
        <About />
        <Merch />

      </div>
  )
}

export default App
