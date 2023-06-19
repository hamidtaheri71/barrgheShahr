import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer/footer";
import CallUs from "./pages/CallUs";
import HoursWork from "./pages/HoursWork";

const App = () => {
  return (
    <div style={{ direction: "rtl" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Call" element={<CallUs />} />
          <Route path="/Work" element={<HoursWork />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
