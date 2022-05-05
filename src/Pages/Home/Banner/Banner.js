import { Carousel } from "react-bootstrap";
import React from "react";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="banner2.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="banner1.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="banner3.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
