import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./assets/Components/Header/Header";
import BlogPage from "./assets/Pages/BlogPage";
import Contact from "./assets/Pages/Contact";
import CardDetail from "./assets/Pages/CardDetail";
import FeaturePage from "./assets/Pages/FeaturePage";
import ComparePage from "./assets/Pages/ComparePage";
import NextHeader from "./assets/Components/Nextheader/NextHeader";

function App() {
  return (
    <>
      <Router>
        <div>
          {/* <Header logo="Pokimon Card Collections" /> */}
          <NextHeader />
          <Routes>
            <Route path="/" element={<BlogPage />} />
            <Route path="/CardDetail/:id" element={<CardDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Feature" element={<FeaturePage />} />
            <Route path="/Compare" element={<ComparePage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
