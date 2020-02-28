import React, { Component } from 'react';
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