import React from "react";
import "./style.css";
<<<<<<< HEAD
import icone from "./assets/icone_play.png"

const Hero = () => (
    
    <section class="container-hero">
            <h1>Bonita é ser valente</h1>
            <p>Lorem ipsum dolor sit amet, consectetur  elit, 
                sed do eiut <br/>labore et dolore magna aliqua. 
                Ut enim ad minim veniam.</p>
        <a href="a">
                <div className='scroll'> Scroll Down </div>
                <img src= {icone} alt="Icone_rolagem_para_baixo" />
        </a>
     </section>   
                
);
=======
import "../assets"

const Hero = () => (
    
    <body>
    <header class="container-hero">
            <style>
                    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
            </style>
            <style>
                    @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
            </style>
            <h1>Bonita é ser <br/>valente</h1>
            <p>Lorem ipsum dolor sit amet, consectetur  elit, 
                sed do eiut <br/>labore et dolore magna aliqua. 
                Ut enim ad minim veniam.</p>
        <a>
                <div id='scroll'> Scroll Down</div>
                <img id='icone' src="assets/icone_play.png"/>
        </a>
            
    </header>
    
    </body>
)
>>>>>>> index e style Hero

export default Hero;
