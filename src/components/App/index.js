import React from "react";
import "./style.css";
import Header from "../Header";
import Hero from "../Hero";
import About from "../About";
import Footer from "../Footer";
import whoDoes from "../whoDoes";

const App = () => (
  <div className="App">
    <Header />
    <Hero />
    <About />
    <whoDoes />
    <Footer />
  </div>
);

export default App;
