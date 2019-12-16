import React from "react";
import "./style.css";
import icone from "./assets/icone_play.png"

const Hero = () => <section className="container_hero">
    <h1>Bonita é ser valente</h1>
    <p>Lorem ipsum dolor sit amet, consectetur  elit, sed do eiut 
        <br/>labore et dolore magna aliqua.Ut enim ad minim veniam.
    </p>
    <a href="a">
        <div className='scroll'> Scroll Down </div>
        <img src= {icone} alt="Icone_rolagem_para_baixo" />
    </a>
</section>;
    
export default Hero;
