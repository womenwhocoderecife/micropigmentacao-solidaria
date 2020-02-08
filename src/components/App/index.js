import React from "react";
import "./style.css";
import Header from "../Header";
import Hero from "../Hero";
import About from "../About";
import Footer from "../Footer";
import WhoDoes from "../WhoDoes";

const App = () => (
  <div className="App">
    <Header />
    <Hero />
    <About />
    <WhoDoes />
    <Footer />
  </div>
);

export default App;
