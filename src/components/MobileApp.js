import { Button } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";
import iphone6 from "../img/iphone6-1.png";
import iphone6_2 from "../img/iphone6-2.png";
import React from "react";
import "./MobileApp.css";

const MobileApp = () => {
  return (
    <div className="mobileApp">
      <div className="mobileApp__img">
        <img className="first" src={iphone6} alt="" />
        <img className="second" src={iphone6_2} alt="" />
      </div>
      <div className="mobileApp__Text">
        <h1>Download The App</h1>
        <h4>
          Choose & book from available <br />
          service at our platform.
        </h4>
        <div className="mobileApp__btn">
          <Button variant="contained" color="primary">
            <AndroidIcon />
            Google Play
          </Button>
          <Button variant="contained" color="primary">
            <AppleIcon />
            App Store
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
