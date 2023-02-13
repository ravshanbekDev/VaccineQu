import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Information from "./components/Information/Information";
import Leave from "./components/Leave/Leave";
import Emergency from "./components/Emergency/Emergency";
import Footer from "./components/Footer/Footer";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Information />
      <Leave />
      <Emergency />
      <Footer />
    </div>
  );
}

export default App;
