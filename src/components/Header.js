import React from "react";
import "./Header.css";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h2>
          <a href="/">Logo</a>
        </h2>
      </div>
      <div className="header__right">
        <ul>
          <li>
            <a className="offer" href="/">
              <StarOutlinedIcon />
              Offers
            </a>
          </li>
          <li>
            <a className="profession" href="/">
              Become a Professional
            </a>
          </li>
          <li>
            <a href="/">Login</a>/<a href="/">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
