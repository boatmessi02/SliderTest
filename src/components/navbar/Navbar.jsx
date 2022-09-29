import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="navContainer">
        <div className="wrapperLogo">
          <img src="../images/logo.png" alt="logo" width={30} height={30} />
          <p className="navLogoText">Dek-Teerapat Junc</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
