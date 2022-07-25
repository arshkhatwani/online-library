import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Contribute from "../components/Contribute";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contribute" element={<Contribute />} />
    </Routes>
  );
}

export default MainRoutes;
