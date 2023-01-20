import React from "react";

import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Pricing from "./components/Pricing/Pricing";

const RouteMap = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
};

export default RouteMap;
