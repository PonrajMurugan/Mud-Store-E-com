import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './banner.css';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className="image" src="https://mitticool.com/wp-content/uploads/2022/08/Mitticool-bottle-image-copy-9-min-1-scaled.jpg" alt="phtot" />
        </div>
        <div>
        <img className="image"  src="https://mudkart.com/cdn/shop/files/1920X800_BANNER-05_1_7cf92773-da17-48be-8a66-f5fea894f5df.jpg?v=1721114175&width=2000" alt="phtot" />
        </div>
        <div>
        <img className="image" src="https://mitticool.com/wp-content/uploads/2022/08/Mitticool-bottle-image-copy-7-1-min-1-1-2-scaled.jpg" alt="phtot" />
        </div>
        <div>
        <img className="image" src="https://mudkart.com/cdn/shop/files/1920X800_BANNER-03_1_cf02156e-c3e6-4891-8c8e-d1cee09db8db.png?v=1721114130&width=2000" alt="phtot" />
        </div>
        <div>
        <img className="image" src="https://mitticool.com/wp-content/uploads/2022/08/Mitticool-bottle-image-copy-8-1-min-1-2-scaled.jpg" alt="phtot" />
        </div>
        {/* <div>
        <img src="https://mudkart.com/cdn/shop/files/1920X800_BANNER-02_1.jpg?v=1721199771&width=2000" alt="phtot" />
        </div>
        <div>
        <img src="https://mudkart.com/cdn/shop/files/Combo_Offer_Banner.webp?v=1721882390&width=2000" alt="phtot" />
        </div> */}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
