import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselImageOne from "../../assets/3.jpg";
import carouselImageTwo from "../../assets/4.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        interval={1000}
      >
        <div>
          <img src={carouselImageOne} alt="itemOne" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={carouselImageTwo} alt="itemTwo" />
          <p className="legend">Peer to Peer Full Stack</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
