import React from "react";

/* 1. LAYOUT: Up to date paths */
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

/* 2. SCREENS: Point to the new 'screens' folder */
import HeroCarousel from "./screens/HeroCarousel";
import About from "./screens/About";
import Teams from "./screens/Teams";
import ContactUs from "./screens/ContactUs";

// Toast Notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    /* We use 'overflow-x-hidden' to prevent any animation 'spill' */
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroCarousel />
        <About />
        <Teams />
        <ContactUs />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={5000} theme="dark" />
    </div>
  );
}

export default App;
