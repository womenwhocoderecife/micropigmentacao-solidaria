import React, { useState } from 'react'
import './style.css'

import whoDoes from './data'

const WhoDoes = () => {
  const [data, SeData] = useState(0)

  const handleClickData = index => SeData(index)

  return (
    <section className="whoDoes">
      <h1 className="whoDoes__title">Quem Faz</h1>
      <div className="whoDoes__person">
        <figure className="whoDoes__figure">
          <img
            className="whoDoes__picture"
            src={whoDoes[data].src}
            alt={whoDoes[data].alt}
          />
        </figure>
        <div className="whoDoes__info">
          <h1 className="whoDoes__info__title">{whoDoes[data].name}</h1>

          <h2 className="whoDoes__info__subtitle">{whoDoes[data].role}</h2>

          <p className="whoDoes__info__description">
            {whoDoes[data].description}
          </p>

          <div className="whoDoes__body__text__icons">
            <img
              className="whoDoes__icon"
              src={whoDoes[data].twitterMedia.src}
              alt={whoDoes[data].twitterMedia.alt}
            />
            <img
              className="whoDoes__icon"
              src={whoDoes[data].facebookMedia.src}
              alt={whoDoes[data].facebookMedia.alt}
            />
            <img
              className="whoDoes__icon"
              src={whoDoes[data].instagramMedia.src}
              alt={whoDoes[data].instagramMedia.alt}
            />
          </div>
        </div>
      </div>

      <div className="whoDoes__team">
        {whoDoes.map((item, index) => {
          return (
            <figure
              className="whoDoes__team-figure"
              onClick={() => handleClickData(index)}
              key={index}
            >
              <img className="whoDoes__picture" src={item.src} alt={item.alt} />
            </figure>
          )
        })}
      </div>
    </section>
  )
}

export default WhoDoes
