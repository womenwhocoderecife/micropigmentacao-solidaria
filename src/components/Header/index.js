import React from 'react'
import './style.css'

import './style.css'
import logo from '../../assets/imgs/logo.png'
import hamburger from '../../assets/imgs/hamburger.svg'

const Header = () => (
  <header className="menu_nav">
    <a href="#inicio">
      <img className="menu_img" src={logo} alt="Logo Valentes e Bonitas" />
    </a>
    <button className="menu_hamburger">
      <img
        alt="menu hamburger"
        className="hambuerger_img"
        src={hamburger}
      ></img>
    </button>
    <nav className="menu">
      <ul className="menu_list">
        <li className="menu_list_item">
          <a className="menu_list_link" href="#home">
            home
          </a>
        </li>
        <li className="menu_list_item">
          <a className="menu_list_link" href="#about">
            sobre
          </a>
        </li>
        <li className="menu_list_item">
          <a className="menu_list_link" href="#whoDoes">
            quem faz
          </a>
        </li>
        <li className="menu_list_item">
          <a className="menu_list_link" href="#impactedWomen">
            mulheres impactadas
          </a>
        </li>
        <li className="menu_list_item">
          <a className="menu_list_link" href="#howToParticipate">
            como participar
          </a>
        </li>
        <li className="menu_list_item">
          <a className="menu_list_link" href="#faq">
            faq
          </a>
        </li>
        <li className="menu_list_item">
          <a className="menu_list_link" href="#howToHelp">
            como ajudar
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
