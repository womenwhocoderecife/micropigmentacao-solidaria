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
        item: "home",
        link: "#home",
      },
      {
        item: "sobre",
        link: "#about",
      },
      {
        item: "quem faz",
        link: "#whoDoes",
      },
      {
        item: "mulheres impactadas",
        link: "#impactedWomen",
      },
      {
        item: "como participar",
        link: "#howToParticipate",
      },
      {
        item: "faq",
        link: "#faq",
      },
      {
        item: "como ajudar?",
        link: "#howToHelp",
      },
    ];

    return (
      <div className="menu-container">
        <button className="menu_hamburger" onClick={this.toggleMenu}>
          {menuBtn}
        </button>
        <nav className={`menu ${showMenu}`}>
          <a className="menu_logo" href="#inicio">
            <img
              className="menu_img"
              src={logo}
              alt="Logo Valentes e Bonitas"
            />
          </a>
          <ul className="menu_list">
            {list.map((item) => (
              <li className="menu_list_item" key={Math.random()}>
                <a className="menu_list_link" href={item.link}>
                  {item.item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
