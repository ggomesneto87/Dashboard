import React from "react";

import "./css/Menu.css";
import logo from "../Images/logo-no-bd.png";

import { NavLink } from "react-router-dom";

const Menu = () => {
  const items = [
    ["Product", "/product"],
    ["Pricing", "/pricing"],
    ["Documentation", "/documentation"],
  ];
  let links = [];

  for (let i = 0; i < items.length; i++) {
    links.push(
      <NavLink
        to={items[i][1]}
        style={{ textDecoration: "none", color: "black" }}
      >
        {" "}
        <div className="menu-link">{items[i][0]}</div>
      </NavLink>
    );
  }

  return (
    <div className="menu-wrapper">
      <div className="logo-wrapper">
        <img src={logo} className="logo-img"></img>
        <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
          <span className="logo-name">Dashboard</span>
        </NavLink>
      </div>
      <div className="sign-in">Sign Up</div>
      <div className="link-wrapper">{links}</div>
    </div>
  );
};

export default Menu;
