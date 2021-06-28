import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class VegSlider3 extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      dots: true,
      infinite: true,
      centerPadding: "50px",
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="mt-5">
        <h3 className="text-center"> Choose Your Third Vegetable</h3>
        <Slider {...settings}>
          <div>
            <img src="babyspinach.png" alt="Baby Spinach" />
            <h2 className="text-center">Baby Spinach</h2>
          </div>
          <div>
            <img src="eggplant.png" alt="Eggplant" />
            <h2 className="text-center">Eggplant</h2>
          </div>
          <div>
            <img src="wildrocket.png" alt="Wild Rocket" />
            <h2 className="text-center">Wild Rocket</h2>
          </div>
          <div>
            <img src="hokkaidocorn.png" alt="Hokkaido Corn" />
            <h2 className="text-center">Hokkaido Corn</h2>
          </div>
          <div>
            <img src="watercress.png" alt="Watercress" />
            <h2 className="text-center">Watercress</h2>
          </div>
          <div>
            <img src="italianbasil.png" alt="Italian Basil" />
            <h2 className="text-center">Italian Basil</h2>
          </div>
        </Slider>
      </div>
    );
  }
}
