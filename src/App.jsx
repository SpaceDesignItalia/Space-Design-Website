import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Topbar from "./Components/Global/Layout/Topbar";
import Footer from "./Components/Global/Layout/Footer";
import Website from "./Pages/Services/Website/Website";
import CustomSoftware from "./Pages/Services/CustomSoftware/CustomSoftware";
import AppMobile from "./Pages/Services/AppMobile/AppMobile";
import ContactUs from "./Pages/Contact/ContactUs";

export default function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/servizi/siti_web" element={<Website />} />
        <Route
          exact
          path="/servizi/software_personalizzato"
          element={<CustomSoftware />}
        />
        <Route exact path="/servizi/app_mobile" element={<AppMobile />} />
        <Route exact path="/contattaci" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}
