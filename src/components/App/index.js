import React from "react";
import "./style.css";
import Header from "../Header";
import Hero from "../Hero";
import About from "../About";
import Footer from "../Footer";
import Faq  from "../Faq";

const App = () => (
  <div className="App">
    <Header />
    <Hero />
    <About />
    <Faq />
    <Footer />
  </div>
);

export default App;
