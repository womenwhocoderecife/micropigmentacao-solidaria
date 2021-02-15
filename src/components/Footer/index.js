import React from "react";

import { about, impacted, contact } from "./data";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import logo from "../../assets/imgs/logo.svg";
import "./style.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <ul className="footer__list">
        <li>
          <a href="#home">
            <figure className="footer__figure__logo">
              <img
                className="footer__logo"
                src={logo}
                alt="logo do site com a mensagem Valentes e Bonitas"
              />
            </figure>
          </a>
        </li>
        <div className="footer__social-media">
          <li>
            <a href="#">
              <figure className="footer__figure__logo">
                <img src={facebook} alt="logo do facebook" />
              </figure>
            </a>
          </li>
          <li>
            <a href="#">
              <figure className="footer__figure__logo">
                <img src={instagram} alt="logo do instagram" />
              </figure>
            </a>
          </li>
        </div>
      </ul>

      <div className="footer__list-group">
        <ul className="footer__list">
          {about.map((item) => (
            <li key={item.text}>
              <a className={item.class} href={item.href}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        <ul className="footer__list">
          {impacted.map((item) => (
            <li key={item.text}>
              <a className={item.class} href={item.href}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        <ul className="footer__list">
          {contact.map((item) => (
            <li key={item.text} className={item.class}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <p className="footer__copyright">
      ©2019 - desenvolvido por Women Dev Projects
    </p>
  </footer>
);

export default Footer;
