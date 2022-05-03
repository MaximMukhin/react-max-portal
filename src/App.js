import React from "react";
import { Route, Routes } from "react-router-dom";
import MiniProgramms from "./pages/MiniProgramms";
import Catalog from "./pages/Catalog";
import Main from "./pages/Main";
import Cart from "./pages/Cart";

function App() {

   return (
      <div className="App">
      <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="main" element={<Main />} />
            <Route path="cart" element={<Cart />} />
            <Route path="miniProgramms" element={<MiniProgramms />} />
      </Routes>
      </div>

   )
}

export default App;
