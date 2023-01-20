import React from "react";
import "./css/TablePricing.css";

import Plan from "./Plan";
import productInfo from "./ProductInfo";

const TablePricing = () => {
  let tables = Plan(productInfo);

  return (
    <div className="table-wrapper">
      <div className="table-products-wrapper">{tables}</div>
    </div>
  );
};

export default TablePricing;
