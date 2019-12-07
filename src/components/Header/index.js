import React, { Component } from 'react';

import './style.css';
import logo from '../../assets/img/logo.png';

const Header = () =>

    <header className="menu_nav">
        <div className="logo">
            <a href="#inicio">
                <img className="menu_img" src={logo} alt="Logo Valentes e Bonitas" />
            </a>
        </div>
        <nav className="menu">
            <ul className="menu_list">
                <li className="menu_list_item">
                    <a className="menu_list_link" href="#home"> HOME </a>
                </li>
                <li className="menu_list_item">
                    <a className="menu_list_link" href="#about"> SOBRE </a>
                </li>
                <li className="menu_list_item">
                    <a className="menu_list_link" href="#whoDoes"> QUEM FAZ </a>
                </li>
                <li className="menu_list_item">
                    <a className="menu_list_link" href="#impactedWomen"> MULHERES IMPACTADAS </a>
                </li>
                <li className="menu_list_item">
                    <a className="menu_list_link" href="#howToParticipate"> COMO PARTICIPAR </a>
                </li>
                <li className="menu_list_item">
                    <a className="menu_list_link" href="#faq"> FAQ </a>
                </li>
                <li className="menu_list_item">
                    <a className="menu_list_link" href="#howToHelp"> COMO AJUDAR </a>
                </li>
            </ul>
        </nav>
    </header>
    
export default Header;
