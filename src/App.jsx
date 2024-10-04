import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navebar from "./components/Navebar";
import Footer from "./components/Footer";

import Log from "./pages/Log";
import Register from "./pages/Register";





function App() {
  return (
    <>
      <BrowserRouter>
        <Navebar />

        
        <Routes>
          <Route path="/" element={<Log/>}/>
          <Route path="/register" element={<Register/>}/>
         
         
      
      
      
          

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
