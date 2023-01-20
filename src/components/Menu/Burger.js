import React from "react";
import { NavLink } from "react-router-dom";
import { bool, func } from "prop-types";

import "./css/Burger.css";

const Burger = ({ open }) => {
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
        <div className="hamburger-menu-link">{items[i][0]}</div>
      </NavLink>
    );
  }

  return (
    <div
      className="hamburger"
      style={open ? { display: "flex" } : { display: "none" }}
    >
      {links}
    </div>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
