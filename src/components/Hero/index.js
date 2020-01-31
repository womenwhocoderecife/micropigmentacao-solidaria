import React from "react";
import "./style.css";
import icone from "./assets/icone_play.png"

const Hero = () => (
    
    <section className="container_hero">
            <h1 className="title_hero">Bonita é ser valente</h1>
            <p className="text_hero">Lorem ipsum dolor sit amet, consectetur  elit, 
                sed do eiut labore et dolore magna aliqua. 
                Ut enim ad minim veniam.</p>
        <a className="anchor_hero" href="a">
                <div className='command_hero'> Scroll Down </div>
                <img className= "icon_hero" src= {icone} alt="Icone_rolagem_para_baixo" />
        </a>
     </section>   
                
);
export default Hero;
