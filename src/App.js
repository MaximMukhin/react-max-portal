import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Store from "./pages/Store";

function App() {

   return (

      <Routes>

         <Route path="/" element={<Store />} />
         <Route path="about" element={<About />} />

      </Routes>






   )
}

export default App;
