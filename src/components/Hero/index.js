import React from 'react'
import './style.css'
import icone from '../../assets/imgs/icone_play.png'

const Hero = () => (
  <section className="container_hero">
    <section className = "content_hero">
      <h1 className="title_hero">Bonita é ser valente</h1>
      <p className="text_hero">
        Mulher bonita é a que bem se quer!
        ame-se, toque-se, a prevenção é o melhor caminho.
      </p>
      <div className="link_hero" href="a">
        <p className="command_hero"> Scroll Down </p>
        <a className="anchor_hero" href="a">
          <img className="icon_hero" src={icone} alt="Icone_rolagem_para_baixo" />
        </a>
      </div>
    </section>

  </section>
)

export default Hero
