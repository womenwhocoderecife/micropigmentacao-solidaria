import React from 'react'
import './style.css'
import about from '../../assets/imgs/about.png'

const About = () => (
  <section className="about">
    <div className="about__text">
      <h2 className="about__text__title">Sobre Nós</h2>

      <p className="about__text__paragraph">
      A Micropigmentação Solidária uma iniciativa do instituto Yone Mendes
      Tem o objetivo de fazer a micropigmentação nas mulheres com câncer de mama,que não tem condições financeiras para investir em um tratamento de estética, no caso das mulheres, nessa situação há um abalo na autoestima, com esse projeto a ideia é devolver essa autoestima a essas guerreiras. 
      </p>
      <p className="about__text__paragraph">
      Ajudamos mulheres que lamentavelmente passaram por essa terrível cirurgia, e assim devolver a elas sua auto-estima, sua feminilidade sua sexualidade, aliviando assim, um pouco de seu sofrimento. A técnica consiste em pigmentar a pele onde foi retirada a aréola devolvendo a mama um aspecto mais natural.
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
