import React, { Component } from "react";
import Slider from "react-slick";
import './bannerTwo.css';

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
   
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <div  data-aos="fade-right" className="slider-container">
        <div>
            <h1 className="ban-two-h1">INTRODUCING OUR NEW PRODUCT</h1>
            <h5 className="ban-two-h5"> MUD INCENSE</h5>
        </div>

      <Slider {...settings}>
        <div>
          <img className="ban-two-img" src="https://mitticool.com/wp-content/uploads/2018/11/Incense-stick-sandal.jpg" alt="ban" />
        </div>
        <div>
        <img className="ban-two-img" src="https://mitticool.com/wp-content/uploads/2018/11/Incense-stick-guggul.jpg" alt="ban" />
        </div>
        <div>
        <img className="ban-two-img" src="https://mitticool.com/wp-content/uploads/2020/02/incense-stickcombo.jpg" alt="ban" />
        </div>
        <div>
        <img className="ban-two-img" src="https://mitticool.com/wp-content/uploads/2018/11/Incense-stick-camphor.jpg" alt="ban" />
        </div>
     
      </Slider>
    </div>
  );
}

export default CenterMode;
