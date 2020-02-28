/*import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import foto1 from './assets/1.png'
import foto2 from './assets/2.png'
import foto3 from './assets/3.png'
import './style.css'


 
class Results extends Component {
    render() {
        return (
            <Carousel className="container_carousel" >
            <div>
                <img className="img_carousel" src={foto1} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={foto2} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={foto3} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
        );
    }
}
export default Results
*/
import React from 'react';
import { Slide } from 'react-slideshow-image';
import foto1 from './assets/1.png'
import foto2 from './assets/2.png'
import foto3 from './assets/3.png'
import './style.css'



const slideImages = [
    'assets/1.png',
    'assets/2.png',
    'assets/3.png'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
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
            <img className="foto1" src={foto1}/>
          </div>
          <div className="each-slide">
            <img className="foto2" src={foto2}/>
          </div>
          <div className="each-slide">
             <img className="foto3" src={foto3}/>
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
/*<div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <img className="foto1" src={foto1}/>
          </div>
          <div className="each-slide">
            <img className="foto2" src={foto2}/>
          </div>
          <div className="each-slide">
             <img className="foto3" src={foto3}/>
          </div>
        </Slide>
      </div>*/ 
