import React from "react";
import "./SingleReview.css";

const SingleReview = ({ profileSrc, name, description }) => {
  return (
    <div className="singleReview">
      <div className="singleReview__user">
        <img src={profileSrc} alt="" />
        <h3>{name}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default SingleReview;
