import React from "react";
import "./Footer.scss";
const Footer = () => {
  let year = new Date();
  year = year.getFullYear();
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <p>All Rights are reserved &copy; {year}</p>
      </div>
    </div>
  );
};

export default Footer;
