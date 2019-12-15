import React from "react";
import "./style.css";
import facebook from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import logo from "../../assets/images/logo.svg";

const Footer = () => <section className="about">
    <div className="footer__container">
      
      <div className="footer__list__logo">
        <figure className="footer__figure__logo">
          <img className="footer__logo" scr={logo} alt="logo" title="Valentes e Bonitas" />
        </figure>
        <ul className="footer__list__social-network">
          <li className="footer__list__item__social-network">
            <a href="">
              <figure className="footer__figure__social-network">
                <img className="footer__img__social-network" src={facebook} alt="facebook" title="facebook" />
              </figure>
            </a>
          </li>
          <li className="footer__list__item__social-network">
            <a href="">
              <figure className="footer__figure__social-network">
                <img className="footer__img__social-network" src={instagram} alt="instagram" title="instagram" />
              </figure>
            </a>
          </li>
        </ul>
      </div>

      
    </div>
</section>;

export default Footer;