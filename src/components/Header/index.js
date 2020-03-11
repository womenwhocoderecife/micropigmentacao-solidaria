/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

import './style.css';
import logo from '../../assets/img/logo.svg';



class Header extends Component {
	constructor() {
		super();
		this.state = { open: false };

		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu(event) {
		const {open} = this.state;
		this.setState({ open: !open });
	}

	render() {
		let showMenu;
		let menuBtn;

		if (this.state.open) {
			showMenu = '';
			menuBtn = 'X';
		} else {
			showMenu = 'menu_show';
			menuBtn = '☰';
		}

		return (

			<div className="menu-container">
				<button className="menu_hamburger" onClick={this.toggleMenu}>
				{menuBtn}
				</button>			
					<nav className={`menu ${showMenu}`}>
					<a className="menu_logo" href="#inicio">
						<img className="menu_img" src={logo} alt="Logo Valentes e Bonitas" />
					</a>
						<ul className="menu_list">
							<li className="menu_list_item">
								<a className="menu_list_link" href="#home">home</a>
							</li>
							<li className="menu_list_item">
								<a className="menu_list_link" href="#about">sobre</a>
							</li>
							<li className="menu_list_item">
								<a className="menu_list_link" href="#whoDoes">quem faz</a>
							</li>
							<li className="menu_list_item">
								<a className="menu_list_link" href="#impactedWomen">mulheres impactadas</a>
							</li>
							<li className="menu_list_item">
								<a className="menu_list_link" href="#howToParticipate">como participar</a>
							</li>
							<li className="menu_list_item">
								<a className="menu_list_link" href="#faq">faq</a>
							</li>
							<li className="menu_list_item">
								<a className="menu_list_link_help" href="#howToHelp">como ajudar?</a>
							</li>
						</ul>
					</nav>
			</div>
		)
	}
}

export default Header;
