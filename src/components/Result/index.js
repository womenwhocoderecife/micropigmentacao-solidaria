
import React from 'react';
import { Fade } from 'react-slideshow-image';

import foto1 from '../../assets/results/1.png'
import foto2 from '../../assets/results/2.png'
import foto3 from '../../assets/results/3.png'
import foto4 from '../../assets/results/4.png'
import foto5 from '../../assets/results/5.png'
import foto6 from '../../assets/results/6.png'
import foto7 from '../../assets/results/7.png'
import foto8 from '../../assets/results/8.png'
import foto9 from '../../assets/results/9.png'
import foto10 from '../../assets/results/10.png'
import foto11 from '../../assets/results/11.png'
import foto12 from '../../assets/results/12.png'
import foto13 from '../../assets/results/13.png'
import foto14 from '../../assets/results/14.png'

import './style.css'

const images = [
  {before: foto1, after: foto2},
  {before: foto3, after: foto4},
  {before: foto5, after: foto6},
  {before: foto7, after: foto8},
  {before: foto9, after: foto10},
  {before: foto11, after: foto12},
  {before: foto13, after: foto14},
]

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay: false,
  
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}


const Results = () => {
    return (
      <div className="results_container">
        <h1 className="title_results">Resultados</h1>

        <div className="slide-container">
        <Fade {...properties}>
          {images.map(({before, after, index}) => 
          <div key={`${before}-${after}`} className="each-slide">
             <div className="antes_depois">
              <img className="foto" src={before} alt="resultado da mama antes do procedimento"/>
              <h3 className= "before_after_results">Antes</h3>
             </div>
             <div className="antes_depois">
              <img className="foto" src={after} alt="resultado da mama depois do procedimento"/>  
              <h3 className= "before_after_results">Depois</h3>
              </div>
          </div>)}
        </Fade>
      </div>

        <p className="text_results">O conteúdo das imagens é de propriedade exclusiva do Projeto 
        Micropigmentação Solidária e seu uso foi autorizado pelas 
        usuárias. As fotografias são protegidas por leis de direito 
        patrimonial e não podem ser copiadas ou transmitidas
         por qualquer meio sem a prévia autorização</p>
        </div>
    )
}
export default Results
