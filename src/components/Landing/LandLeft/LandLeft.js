import React from "react";

import "./css/LandLeft.css";
import leftImg from "../../Images/land-left-img.png";

const LandLeft = () => {
  return (
    <div className="land-left-wrapper">
      <div className="land-left-text">
        <div className="img-left-wrapper">
          <img src={leftImg} className="land-left-img" alt="land left"></img>
        </div>
        <div className="left-text">
          {" "}
          <p>
            Customize your Dasboard, gather real-time data and closely monitor
            the information that best serves your e-commerce!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandLeft;
