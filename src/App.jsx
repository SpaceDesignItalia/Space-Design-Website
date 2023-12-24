import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Topbar from "./Components/Global/Layout/Topbar";
import Footer from "./Components/Global/Layout/Footer";

export default function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
