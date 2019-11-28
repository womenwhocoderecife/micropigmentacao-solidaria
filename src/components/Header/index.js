import React, { Component } from 'react';

import './style.css';
import logo from '../assets/img/logo.png';

const Header = () => 

<div className="menu-container">
    <nav className="menu">
        <figure className="menu_figure">
            <img
            className="menu_img"
            src={logo}
            alt= "Logo Valentes e Bonitas"
            />
        </figure>
        <ul className="menu_list">
            <li className="menu__list__item">
                <a className="menu__list__link" href="#home">
                HOME
                </a>
            </li>
            <li className="menu__list__item">
                <a className="menu__list__link" href="#about">
                SOBRE
                </a>
            </li>
            <li className="menu__list__item">
                <a className="menu__list__link" href="#whoDoes">
                QUEM FAZ
                </a>
            </li>
            <li className="menu__list__item">
                <a className="menu__list__link" href="#impactedWomen">
                MULHERES IMPACTADAS
                </a>
            </li>
            <li className="menu__list__item">
                <a className="menu__list__link" href="#howToParticipate">
                COMO PARTICIPAR
                </a>
            </li>
            <li className="menu__list__item">
                <a className="menu__list__link" href="#faq">
                FAQ
                </a>
            </li>
            <li className="menu__list__item">
                <a className="menu__list__link" href="#howToHelp">
                COMO AJUDAR
                </a>
            </li>
        </ul>
    </nav>
</div>

export default Header;
