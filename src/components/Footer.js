import React from "react";
import FooterBottom from "./FooterBottom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__section_a">
          <div className="footer__link_one">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Book Now</a>
              </li>
              <li>
                <a href="/">Offers</a>
              </li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="footer__link_two">
            <h3>Help</h3>
            <ul>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
              <li>
                <a href="/">Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__section_b">
          <h3>Follow Us On</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">LinkedIn</a>
            </li>
            <li>
              <a href="/">Youtube</a>
            </li>
          </ul>
        </div>
      </div>
      <FooterBottom />
    </>
  );
};

export default Footer;
