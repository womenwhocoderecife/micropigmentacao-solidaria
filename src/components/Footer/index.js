import React from "react";
import "./style.css";
import facebook from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import logo from "../../assets/images/logo.svg";

const Footer = () => (
    <footer className="footer">
        <div className="footer__list">
            <figure className="footer__figure">
                <img scr={logo} alt="logo" title="Valentes e Bonitas" />
            </figure>
            <ul className="footer__list__social-network">
                <li className="footer__list__item__social-network">
                    <a href="">
                        <figure className="footer__figure">
                            <img src={facebook} alt="facebook" title="facebook"/>
                        </figure>
                    </a>
                </li>
                <li className="footer__list__item__social-network">
                    <a href="">
                        <figure className="footer__figure">
                            <img src={instagram} alt="instagram" title="instagram"/>
                        </figure>
                    </a>
                </li>
            </ul>
        </div>

        <div className="footer__list">
            <ul className="footer__list">
                <li className="footer__list__item">
                    <a className="footer_list_title" href="">Sobre Nós</a>
                </li>
                <li className="footer__list__item">
                    <a className="footer__list__item" href="">Nossa História</a>
                </li>                
                <li className="footer__list__item">
                    <a className="footer__list__item" href="">Quem faz</a>
                </li>  
            </ul>
            <ul>
            <li className="footer__list__item">
                    <a className="footer__list__title" href="">Mulheres Impactadas</a>
                </li>
                <li className="footer__list__item">
                    <a className="footer__list__item" href="">Depoimentos</a>
                </li>                
                <li className="footer__list__item">
                    <a className="footer__list__item" href="">Resultados</a>
                </li>  
            </ul>
            <ul>
                <h3 className="footer__list">CONTATO</h3>
                <h3 className="footer__list__item">
                    (81)99999-9999 Av General Polidoro, 662 -  sala 03.
Cidade Universitária  - Recife - PE
                </h3>
            </ul>
        </div>
    </footer>
);

export default Footer;