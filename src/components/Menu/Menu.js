import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./css/Menu.css";

const Menu = () => {
  const items = ["Home", "About Us", "Login"];
  let links = [];

  for (let i = 0; i < items.length; i++) {
    links.push(<div className="menu-link">{items[i]}</div>);
  }

  return (
    <div className="menu-wrapper">
      <div className="logo">
        Empresa do Ze
        <i class="fa-solid fa-right-to-bracket icon"></i>
      </div>
      <div className="signIn">Sign In</div>
      {links}
    </div>
  );
};

export default Menu;
