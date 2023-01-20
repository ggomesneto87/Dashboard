import React from "react";
import "./css/TablePricing.css";

const TablePricing = () => {
  const productInfo = [
    {name:"starter", features:["a", "b", "c"]},
    {name:"pro", features:["d", "f", "e"]},
    {name:"enterprise", features:["a", "b", "c"]}
  ]

  let tables = [];
  let features = [];
  let temp = [];

  for (let i = 0; i < productInfo.length; i++) {
    let featureList = productInfo[i].features
    for (let j = 0; j < featureList.length; j++) {
      
      temp.push(<p><i class="fa-solid fa-check"></i>{featureList[j]}</p>)
    }
    features.push(temp)
    temp = []
  }

  for (let i = 0; i < productInfo.length; i++) {
    tables.push(<ul className="table-link">
      <li>
      <h2>{productInfo[i].name}</h2>
      {features[i]}
      <div className="gs-btn">Get Started</div>
      </li>
      </ul>)
  }
return (
    <div className="table-wrapper">
      <div className="table-products-wrapper">{tables}
        
      </div>
      

    </div>

  );
};

export default TablePricing;