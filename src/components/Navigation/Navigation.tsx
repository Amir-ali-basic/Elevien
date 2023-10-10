import React from "react";
import "../../assets/navigation.css";
import logo from "../../assets/images/logo.png";

function Navigation() {
  return (
    <nav>
      <div className="navigation d-flex">
        <div className="navigation-info">
          <div className="navigation-info-logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="navigation-info-comppetition">
            <h3>Competition name</h3>
            <div className="dot"></div>
            <p className="navigation-info-date text-lg">Date</p>
          </div>
        </div>
        <div className="navigation-user">
          <div className="navigation-user-image"></div>
          <div className="text-sm">Amir Alibasic</div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
