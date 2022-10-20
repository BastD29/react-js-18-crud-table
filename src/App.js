import React from "react";
import { Routes, Route } from "react-router-dom";

import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Navbar from "./components/Navbar";

export default function App() {
  return (
    
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Read />} />
          <Route exact path='/create' element={<Create />} />
          <Route exact path='/update/:id' element={<Update />} />
        </Routes>
      </div>
    
  );
}