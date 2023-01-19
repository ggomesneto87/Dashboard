import React from "react";

import "./css/Landing.css";

import Menu from "../Menu/Menu";
import LandRight from "./LandRight/LandRight";
import LandLeft from "./LandLeft/LandLeft";

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <Menu />
      <div className="text-wrapper">
        <LandRight />
        <LandLeft />
        </div>      
    </div>
  );
};

export default Landing;
