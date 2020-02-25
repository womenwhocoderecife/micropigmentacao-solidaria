import React from "react";
import "./style.css";
import Header from "../Header";
import Hero from "../Hero";
import About from "../About";
import Footer from "../Footer";
import ImpactedWomen from "../ImpactedWomen";
import HowToParticipate from "../HowToParticipate"

const App = () => (
  <div className="App">
    <Header />
    <Hero />
    <About />
    <ImpactedWomen/>
    <HowToParticipate/>
    <Footer />
  </div>
);

export default App;
