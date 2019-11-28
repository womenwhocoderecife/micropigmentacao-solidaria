import React from "react";
import "./style.css";
import about from "../assets/img/about.png";

const About = () => <section className="about">

    <div className="about__text">

        <div className="about__text__title">
            <h2>
                Sobre Nós
            </h2>
        </div>

        <div className="about__text__paragraph">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat  incididunt ut laboret.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat  incididunt ut laboret.
            </p>
        </div> 

    </div>

    <figure className="about__image">

            <img className="about__image__src" src={about} alt="Três mulheres sorrindo" />

    </figure>
</section>;

export default About;
