
import React from 'react';
import { Slide } from 'react-slideshow-image';

import foto1 from './assets/1.png'
import foto2 from './assets/2.png'
import foto3 from './assets/3.png'
import foto4 from './assets/4.png'
import foto5 from './assets/5.png'
import foto6 from './assets/6.png'
import foto7 from './assets/7.png'
import foto8 from './assets/8.png'
import foto9 from './assets/9.png'
import foto10 from './assets/10.png'
import foto11 from './assets/11.png'
import foto12 from './assets/12.png'
import foto13 from './assets/13.png'
import foto14 from './assets/14.png'

import './style.css'



const slideImages = [
    
    'assets/1.png',
    'assets/2.png',
    'assets/3.png',
    'assets/4.png',
    'assets/5.png',
    'assets/6.png',
    'assets/7.png',
    'assets/8.png',
    'assets/9.png',
    'assets/10.png',
    'assets/11.png',
    'assets/12.png',
    'assets/13.png',
    'assets/14.png'

];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  useKeyboardArrows: true,
  emulateTouch: true,
  autoplay: false,
  
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
              <img className="foto" src={foto1}/>
              <h3 className= "before_after_results">Antes</h3>
             </div>
             <div className="antes_depois">
              <img className="foto" src={foto2}/>  
              <h3 className= "before_after_results">Depois</h3>
              </div>
          </div>
          <div className="each-slide">
            <div className="antes_depois">
             <img className="foto" src={foto3}/>
             <h3 className= "before_after_results">Antes</h3>
            </div>
            <div className="antes_depois">
             <img className="foto" src={foto4}/>
             <h3 className= "before_after_results">Depois</h3>
            </div>
          </div>
          <div className="each-slide">
            <div className="antes_depois">
             <img className="foto" src={foto5}/>
             <h3 className= "before_after_results">Antes</h3>
            </div> 
            <div className="antes_depois">
             <img className="foto" src={foto6}/>
             <h3 className= "before_after_results">Depois</h3>
            </div>
          </div>
          <div className="each-slide">
            <div className="antes_depois">
             <img className="foto" src={foto7}/>
             <h3 className= "before_after_results">Antes</h3>
            </div> 
            <div className="antes_depois">
              <img className="foto" src={foto8}/>
              <h3 className= "before_after_results">Depois</h3>
            </div>
          </div>
          <div className="each-slide">
           <div className="antes_depois">
             <img className="foto" src={foto9}/>
              <h3 className= "before_after_results">Antes</h3>
            </div> 
           <div className="antes_depois">
            <img className="foto" src={foto10}/>
            <h3 className= "before_after_results">Depois</h3>
           </div>
          </div>
          <div className="each-slide">
           <div className="antes_depois">
             <img className="foto" src={foto11}/>
              <h3 className= "before_after_results">Antes</h3>
            </div> 
            <div className="antes_depois"> 
             <img className="foto" src={foto12}/>
             <h3 className= "before_after_results">Depois</h3>
            </div> 
          </div>
          <div className="each-slide">
           <div className="antes_depois">
             <img className="foto" src={foto13}/>
              <h3 className= "before_after_results">Antes</h3>
            </div> 
            <div className="antes_depois"> 
             <img className="foto" src={foto14}/>
             <h3 className= "before_after_results">Depois</h3>
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

