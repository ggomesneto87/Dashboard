import React from "react";

import "./css/Landing.css";

import Menu from "../Menu/Menu";
import LandRight from "./LandRight/LandRight";

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <Menu />
      <LandRight />
    </div>
  );
};

export default Landing;
