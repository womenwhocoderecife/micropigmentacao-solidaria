import React, { useState } from 'react'
import './style.css'

import whoDoesData from './data'

const WhoDoes = () => {
  const [data, setData] = useState(0)

  const handleClickData = index => setData(index)

  return (
    <section className="whoDoes" id="whoDoes">
      <h1 className="whoDoes__title">Quem Faz</h1>
      <div className="whoDoes__person">
        <figure className="whoDoes__figure">
          <img
            className="whoDoes__picture"
            src={whoDoesData[data].src}
            alt={whoDoesData[data].alt}
          />
        </figure>
        <div className="whoDoes__info">
          <h1 className="whoDoes__info__title">{whoDoesData[data].name}</h1>

          <h2 className="whoDoes__info__subtitle">{whoDoesData[data].role}</h2>

          <p className="whoDoes__info__description">
            {whoDoesData[data].description}
          </p>

          <div className="whoDoes__icons">
            <img
              className="whoDoes__icon"
              src={whoDoesData[data].twitterMedia.src}
              alt={whoDoesData[data].twitterMedia.alt}
            />

            <img
              className="whoDoes__icon"
              src={whoDoesData[data].facebookMedia.src}
              alt={whoDoesData[data].facebookMedia.alt}
            />

            <img
              className="whoDoes__icon"
              src={whoDoesData[data].instagramMedia.src}
              alt={whoDoesData[data].instagramMedia.alt}
            />
          </div>
        </div>
      </div>

      <div className="whoDoes__team">
        {whoDoesData.map((item, index) => {
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
