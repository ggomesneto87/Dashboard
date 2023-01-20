import React, { useState } from "react";

import "./css/Menu.css";
import logo from "../Images/logo-no-bd.png";

import { NavLink } from "react-router-dom";

import Burger from "./Burger";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const items = [
    ["Product", "/product"],
    ["Pricing", "/pricing"],
    ["Documentation", "/documentation"],
  ];
  let links = [];

  for (let i = 0; i < items.length; i++) {
    links.push(
      <NavLink to={items[i][1]} style={{ textDecoration: "none" }}>
        {" "}
        <div className="menu-link">{items[i][0]}</div>
      </NavLink>
    );
  }

  return (
    <div className="menu-wrapper">
      <div className="logo-wrapper">
        <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
          <img src={logo} className="logo-img"></img>
        </NavLink>
      </div>
      <div className="sign-in">Sign Up</div>
      <div className="link-wrapper">{links}</div>
      <i
        className="fa-solid fa-bars hamburger-icon fa-2xl"
        open={open}
        onClick={() => setOpen(!open)}
      ></i>
      <Burger open={open} />
    </div>
  );
};

export default Menu;
