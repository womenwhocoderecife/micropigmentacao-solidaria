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
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <img className="foto1" src={foto1}/>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default Results
