import React from "react";

import "./css/Menu.css";
import logo from "../Images/logo-no-bd.png";

const Menu = () => {
  const items = ["Product", "Pricing", "Documentation"];
  let links = [];

  for (let i = 0; i < items.length; i++) {
    links.push(<div className="menu-link">{items[i]}</div>);
  }

  return (
    <div className="menu-wrapper">
      <div className="logo-wrapper">
        <img src={logo} className="logo-img"></img>
        <span className="logo-name">Dashboard</span>
      </div>
      <div className="sign-in">Sign Up</div>
      <div className="link-wrapper">{links}</div>
    </div>
  );
};

export default Menu;
