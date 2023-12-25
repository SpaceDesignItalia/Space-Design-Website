import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Topbar from "./Components/Global/Layout/Topbar";
import Footer from "./Components/Global/Layout/Footer";
import Website from "./Pages/Services/Website/Website";

export default function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/servizi/siti_web" element={<Website />} />
      </Routes>
      <Footer />
    </>
  );
}
