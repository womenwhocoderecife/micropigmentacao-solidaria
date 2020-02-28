import React from "react";
import "./style.css";
import Header from "../Header";
import Hero from "../Hero";
import About from "../About";
import Footer from "../Footer";
import ImpactedWomen from "../ImpactedWomen";
import Results from "../Results";

const App = () => (
  <div className="App">
    <Header />
    <Hero />
    <About />
    <ImpactedWomen/>
    <Footer />
    <Results />
  </div>
);

export default App;
