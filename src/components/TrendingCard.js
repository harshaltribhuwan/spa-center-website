import React from "react";
import "./TrendingCard.css";
import StarIcon from "@material-ui/icons/Star";

const TrendingCard = ({ imgSrc, title, subTitle, place, star, min, off }) => {
  return (
    <div className="trendingCard">
      <img src={imgSrc} alt="" />
      <div className="trendingCard__info">
        <h3>{title}</h3>
        <h4>{subTitle}</h4>
        <p>{place}</p>
      </div>
      <div className="trendingCard__rating">
        <p>
          <StarIcon /> {star}
        </p>
        <p>{min}</p>
        <p className="disconunt">{off}</p>
      </div>
    </div>
  );
};

export default TrendingCard;
