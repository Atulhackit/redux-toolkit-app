import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerLeft">Nested Coding </div>
      <div className="headerRight">
        <div className="userDetails">
          <p className="profilePic">A</p>
          <span>Atul kumar</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
