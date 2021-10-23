import React from "react";
import CarouselOption from "./CarouselOption";
import SpaIcon from "@material-ui/icons/Spa";
import StorefrontIcon from "@material-ui/icons/Storefront";
import "./Carousel.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        <CarouselOption Icon={SpaIcon} title="Massage & Spa" />
        <CarouselOption Icon={StorefrontIcon} title="Beauty & Salon" />
        <CarouselOption Icon={SpaIcon} title="Massage & Spa" />
        <CarouselOption Icon={StorefrontIcon} title="Beauty & Salon" />
        <CarouselOption Icon={SpaIcon} title="Massage & Spa" />
        <CarouselOption Icon={StorefrontIcon} title="Beauty & Salon" />
      </Slider>
    </div>
  );
};

export default Carousel;
