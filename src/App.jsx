import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Game from "./components/game";
import About from "./views/about";

import "./Game.css";
import "./Main.css";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}
