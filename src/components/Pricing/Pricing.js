import React from "react";

import "./css/Pricing.css";

import Menu from "../Menu/Menu";
import TextPricing from "./TextPricing/TextPricing";
import TablePricing from "./TablePricing/TablePricing";

const Pricing = () => {
  return (
    <div className="landing-wrapper">
      <Menu />
      <div className="pricing-top-wrapper">
        <TextPricing />
        </div>
        <div className="pricing-bot-wrapper">
          <TablePricing />
        </div>
    </div>
  );
};

export default Pricing;