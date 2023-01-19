import React from "react";

import "./css/Menu.css";

const Menu = () => {
  const items = ["Home", "About Us", "Login"];
  let links = [];

  for (let i = 0; i < items.length; i++) {
    links.push(<div className="menu-link">{items[i]}</div>);
  }

  return <div className="menu-wrapper">
    <div className="logo">Logo</div>
    {links}</div>;
};

export default Menu;
