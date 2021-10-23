import { Button } from "@material-ui/core";
import React from "react";
import "./Trending.css";
import TrendingCard from "./TrendingCard";

const Trending = () => {
  return (
    <div className="trending">
      <h2>Trending</h2>
      <div className="trending__container">
        <TrendingCard
          imgSrc="https://image.freepik.com/free-photo/tender-african-woman-smiling-enjoying-massage-with-closed-eyes-spa-resort_176420-13956.jpg"
          title="Total Relief Massage Center"
          subTitle="Unisex Massage Center"
          place="Kothrud, Pune"
          star="3.4"
          min="21 min"
          off="30% off"
        />
        <TrendingCard
          imgSrc="https://image.freepik.com/free-photo/beautiful-cheerful-guy-getting-massage-relaxation-low-key-light_186202-4239.jpg"
          title="Total Relief Massage Center"
          subTitle="Unisex Massage Center"
          place="Kothrud, Pune"
          star="3.4"
          min="21 min"
          off="30% off"
        />
        <TrendingCard
          imgSrc="https://image.freepik.com/free-photo/attractive-african-woman-enjoying-face-massage-spa-salon_176420-13955.jpg"
          title="Total Relief Massage Center"
          subTitle="Unisex Massage Center"
          place="Kothrud, Pune"
          star="3.4"
          min="21 min"
          off="30% off"
        />
        <TrendingCard
          imgSrc="https://image.freepik.com/free-photo/beautiful-young-woman-lying-waiting-her-massage-spa-concept_144627-42874.jpg"
          title="Total Relief Massage Center"
          subTitle="Unisex Massage Center"
          place="Kothrud, Pune"
          star="3.4"
          min="21 min"
          off="30% off"
        />
      </div>
      <div className="trending__grow">
        <div className="trending__growText">
          <h2>
            Grow your buisness with us. <br />
            Become a proffesional.
          </h2>
        </div>
        <div className="trending__growBtn">
          <Button variant="contained" color="primary">
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Trending;
