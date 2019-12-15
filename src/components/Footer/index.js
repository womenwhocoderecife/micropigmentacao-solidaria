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

      <div className="footer__list-links">
        <ul className="footer__list">
          <li className="footer__list__item">
            <a className="footer__list__title" href="">
              SOBRE NÓS
            </a>
          </li>
          <li className="footer__list__item">
            <a className="footer__list__item" href="">
              Nossa História
            </a>
          </li>
          <li className="footer__list__item">
            <a className="footer__list__item" href="">
              Quem faz
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__list-links">
        <ul className="footer__list">
          <li className="footer__list__item">
            <a className="footer__list__title" href="">
              MULHERES IMPACTADAS
            </a>
          </li>
          <li className="footer__list__item">
            <a className="footer__list__item" href="">
              Depoimentos
            </a>
          </li>
          <li className="footer__list__item">
            <a className="footer__list__item" href="">
              Resultados
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__list-contact">
        <ul className="footer__list">
          <li className="footer__list__title">CONTATO</li>
          <li className="footer__list__item">
            (81)99999-9999 <br />
            Av General Polidoro, 662 - sala 03. <br />
            Cidade Universitária - Recife - PE
          </li>
        </ul>
      </div>

    </div>

    <hr ClassName="line"></hr>

    <div className="footer__copyright">
      ©2019 - desenvolvido por Women Dev Projects
    </div>
    
</section>;

export default Footer;