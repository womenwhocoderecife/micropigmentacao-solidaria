import React from 'react'
import Youtube from '@u-wave/react-youtube'

import './style.css'

const ImpactedWomen = () => (
  <section className="impacted-women">
    <h1 className="impacted-women__title">Mulheres Impactadas</h1>

    <div class="impacted-women__container">
      <Youtube video="Vtb03-wwY3c" height="350" width="525" />
      <div class="impacted-women__content">
        <h2 className="impacted-women__content__name">Rose</h2>
        <p className="impacted-women__content__description">
          Conheceu o projeto de Micropigmentação Soliária no Hospital do Câncer,
          recuperou sua autoestima após passar pelos procedimentos de
          micropgmentação da sobrancelha e disse que superou o tratamento contra
          o Câncer com mais facilidade, se sentindo linda!
        </p>
      </div>
    </div>

    <div class="impacted-women__container">
      <Youtube video="rDvWnNJM5tE" height="350" width="525" />
      <div class="impacted-women__content">
        <h2 className="impacted-women__content__name">Jane</h2>
        <p className="impacted-women__content__description">
          Não sabia que era possível fazer a reconstrução de auréola e ficou
          encantada com o projeto, disse que com essa iniciativa voltou a ter
          autoestima, a ser mulher, a viver!
        </p>
      </div>
    </div>
  </section>
)

export default ImpactedWomen
