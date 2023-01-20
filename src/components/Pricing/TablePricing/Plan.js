const Plan = (productInfo) => {
  let tables = [];
  let features = [];
  let temp = [];

  for (let i = 0; i < productInfo.length; i++) {
    let featureList = productInfo[i].features;
    for (let j = 0; j < featureList.length; j++) {
      temp.push(
        <p>
          <i class="fa-solid fa-check"></i>
          {featureList[j]}
        </p>
      );
    }
    features.push(temp);
    temp = [];
  }

  for (let i = 0; i < productInfo.length; i++) {
    tables.push(
      <ul className="table-link">
        <li>
          <h2>{productInfo[i].name}</h2>
          <h1>$199,90</h1>
          {features[i]}
          <div className="gs-btn">Get Started</div>
        </li>
      </ul>
    );
  }
  return tables;
};

export default Plan;
