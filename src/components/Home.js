import React from "react";
import "./Home.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MyLocationIcon from "@material-ui/icons/MyLocation";
const Home = () => {
  return (
    <div className="home">
      <h1>Treat Yourself To A Reviatalising Treatment</h1>
      <div className="home__search">
        <LocationOnOutlinedIcon />
        <input placeholder="Trivendram" type="text" />
        <ArrowDropDownIcon />
        <MyLocationIcon />
      </div>
    </div>
  );
};

export default Home;
