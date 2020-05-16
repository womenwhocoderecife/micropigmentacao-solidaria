/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

import "./style.css";
import logo from "../../assets/imgs/logo.svg";

class Header extends Component {
  constructor() {
    super();
    this.state = { open: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    let showMenu;
    let menuBtn;

    if (this.state.open) {
      showMenu = "";
      menuBtn = "X";
    } else {
      showMenu = "menu_show";
      menuBtn = "☰";
    }

    const list = [
      {
        item: "Home",
        link: "#home",
      },
      {
        item: "Sobre",
        link: "#about",
      },
      {
        item: "Quem Faz",
        link: "#whoDoes",
      },
      {
        item: "Mulheres Impactadas",
        link: "#impactedWomen",
      },
      {
        item: "Como Participar",
        link: "#howToParticipate",
      },
      {
        item: "FAQ",
        link: "#faq",
      },
    ];

    return (
      <div className="menu-container">
        <a className="menu_logo" href="#inicio">
          <img className="menu_img" src={logo} alt="Logo Valentes e Bonitas" />
        </a>
        <div className="menu-mobile">
          <button className="menu_hamburger" onClick={this.toggleMenu}>
            {menuBtn}
          </button>
        </div>
        <nav className={`menu ${showMenu}`}>
          <ul className="menu_list">
            {list.map((item) => (
              <li className="menu_list_item" key={Math.random()}>
                <a className="menu_list_link" href={item.link}>
                  {item.item}
                </a>
              </li>
            ))}
            <li className="menu_list_item">
								<a className="menu_list_link_help" href="#howToHelp">Como Ajudar?</a>
							</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
