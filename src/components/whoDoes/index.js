import React from "react";
import "./style.css";
import daniela from "../assets/img/daniela.png";
import yone from "../assets/img/yone.jpg";
import woman1 from "../assets/img/woman1.JPG";
import woman2 from "../assets/img/woman2.JPG";
import facebook from "../assets/img/Facebook.svg";
import Instagram from "../assets/img/Instagram.svg";
import Twitter from "../assets/img/Twitter.svg";


const WhoDoes = () => <section className="whoDoes">
    <h1 className="title">Quem Faz</h1>
    <div className="whoDoes__body">
        <figure className="whoDoes__body__figure">

            <img className="whoDoes__image__src" src={yone} alt="yone" />

        </figure>
        <div className="whoDoes__body__text">
            <h1 className="whoDoes__body__title">
            Yone Mendes
            </h1>
            <h2 className="whoDoes__body__subtitle">
            Esteticista
            </h2>
            <p className="whoDoes__body__paragraph">
            Lottie is graduated from Hardvard dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="whoDoes__body__text__icons">
            <img className="about__icon__src" src={Twitter} alt="twitter" />
            <img className="about__icon__src" src={facebook} alt="facebook" />
            <img className="about__icon__src" src={Instagram} alt="instagram" />
            </div>
        </div>

    </div>

    <div className="whoDoes__team">
        <img className="about__image-team__src" src={yone} alt="yone" />
        <img className="about__image-team__src" src={daniela} alt="daniela" />
        <img className="about__image-team__src" src={woman1} alt="woman1" />
        <img className="about__image-team__src" src={woman2} alt="woman2" />
    </div>

</section>;

export default WhoDoes;