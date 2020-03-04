
import React from 'react';
import { Slide } from 'react-slideshow-image';

import antes1 from './assets/antes1.png'
import depois1 from './assets/depois1.png'
import antes2 from './assets/antes2.png'
import depois2 from './assets/depois2.png'
import antes3 from './assets/antes3.png'
import depois3 from './assets/depois3.png'
import antes4 from './assets/antes4.png'
import depois4 from './assets/depois4.png'
import antes5 from './assets/antes5.png'
import depois5 from './assets/depois5.png'
import antes6 from './assets/antes6.png'
import depois6 from './assets/depois6.png'
import './style.css'



const slideImages = [
    
    'assets/antes1.png',
    'assets/depois1.png',
    'assets/antes2.png',
    'assets/depois2.png',
    'assets/antes3.png',
    'assets/depois3.png',
    'assets/antes4.png',
    'assets/depois4.png',
    'assets/antes5.png',
    'assets/depois5.png',
    'assets/antes6.png',
    'assets/depois6.png'

];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  useKeyboardArrows: true,
  emulateTouch: true,
  autoPlay: false,
  
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}


const Results = () => {
    return (
      <div className="results_container">
        <h1 class="title_results">Resultados</h1>

        <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
             <div className="antes_depois">
              <img className="foto" src={antes1}/>
              <h3>Antes</h3>
             </div>
             <div className="antes_depois">
              <img className="foto" src={depois1}/>  
              <h3>Depois</h3>
              </div>
          </div>
          <div className="each-slide">
            <div className="antes_depois">
             <img className="foto" src={antes2}/>
             <h3>Antes</h3>
            </div>
            <div className="antes_depois">
             <img className="foto" src={depois2}/>
             <h3>Depois</h3>
            </div>
          </div>
          <div className="each-slide">
            <div className="antes_depois">
             <img className="foto" src={antes3}/>
             <h3>Antes</h3>
            </div> 
            <div className="antes_depois">
             <img className="foto" src={depois3}/>
             <h3>Depois</h3>
            </div>
          </div>
          <div className="each-slide">
            <div className="antes_depois">
             <img className="foto" src={antes4}/>
             <h3>Antes</h3>
            </div> 
            <div className="antes_depois">
              <img className="foto" src={depois4}/>
              <h3>Depois</h3>
            </div>
          </div>
          <div className="each-slide">
           <div className="antes_depois">
             <img className="foto" src={antes5}/>
              <h3>Antes</h3>
            </div> 
           <div className="antes_depois">
            <img className="foto" src={depois5}/>
            <h3>Depois</h3>
           </div>
          </div>
          <div className="each-slide">
           <div className="antes_depois">
             <img className="foto" src={antes6}/>
              <h3>Antes</h3>
            </div> 
            <div className="antes_depois"> 
             <img className="foto" src={depois6}/>
             <h3>Depois</h3>
            </div> 
          </div>
        </Slide>
      </div>

        <p class="text_results">O conteúdo das imagens é de propriedade exclusiva do Projeto 
        Micropigmentação Solidária e seu uso foi autorizado pelas 
        usuárias. As fotografias são protegidas por leis de direito 
        patrimonial e não podem ser copiadas ou transmitidas
         por qualquer meio sem a prévia autorização</p>
        </div>
    )
}
export default Results

