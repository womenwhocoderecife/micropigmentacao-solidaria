import React from 'react'
import './style.css'
import icone from '../../assets/imgs/icone_play.png'

const Hero = () => (
  <section className="container_hero">
    <section className = "teste">
      <h1 className="title_hero">Bonita é ser valente</h1>
      <p className="text_hero">
        Lorem ipsum dolor sit amet, consectetur elit, sed do eiut labore et dolore
        magna aliqua. Ut enim ad minim veniam.
      </p>
    </section>
    <div className="link_hero" href="a">
      <p className="command_hero"> Scroll Down </p>
      <a className="anchor_hero" href="a">
        <img className="icon_hero" src={icone} alt="Icone_rolagem_para_baixo" />
      </a>
    </div>
  </section>
)

export default Hero
