import React from "react";
import "./carouselOption.css";

const CarouselOption = ({ Icon, title }) => {
  return (
    <div className="carouselOption">
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};

export default CarouselOption;
