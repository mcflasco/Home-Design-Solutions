import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import marbleCouter from '../../assets/images/marble-counter.jpg';
import redCabinet from '../../assets/images/redCabinet.jpeg';
import whiteKitchen from '../../assets/images/whiteKitchen.jpg';
import contemporary from '../../assets/images/contemporary.jpg';
import elegant from '../../assets/images/elegant.jpg';
import chrome from '../../assets/images/chrome.jpeg';


const slider = (props) => {
  return (

    <div className="slider-div">
      <Carousel>
        <Carousel.Item>
          <a href=""><img
            className="d-block w-100 slider-image"
            src={marbleCouter}
          /></a>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href=""><img
            className="d-block w-100 slider-image"
            src={whiteKitchen}
          /></a>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href=""> <img
            className="d-block w-100 slider-image"
            src={chrome}
          /></a>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href=""><img
            className="d-block w-100 slider-image"
            src={contemporary}
          /></a>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href=""><img
            className="d-block w-100 slider-image"
            src={elegant}
          /></a>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href=""> <img
            className="d-block w-100 slider-image"
            src={redCabinet}
          /></a>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      {/* <h1 className="design">Design</h1>
      <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
     */}
    </div>
  )
}

export default slider;