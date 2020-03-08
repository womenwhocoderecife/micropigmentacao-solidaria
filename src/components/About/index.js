import React from 'react'
import './style.css'
import about from '../../assets/imgs/about.png'

const About = () => (
  <section className="about">
    <div className="about__text">
      <h2 className="about__text__title">Sobre Nós</h2>

      <p className="about__text__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat incididunt ut laboret.
      </p>
      <p className="about__text__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat incididunt ut laboret.
      </p>
    </div>

    <figure className="about__image">
      <img
        className="about__image__src"
        src={about}
        alt="Três mulheres sorrindo"
      />
    </figure>
  </section>
)

export default About
