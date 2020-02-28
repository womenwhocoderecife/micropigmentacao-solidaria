import React from 'react'

import './style.css'

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import imag from '../../assets/video1.png'

const Results = () => (
  <Carousel>
                <div>
                    <img src="imag" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="../../assets/video1.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="imag" />
                    <p className="legend">Legend 3</p>
                </div>
   </Carousel>
)
export default Results
