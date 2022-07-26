import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Contribute from "../components/Contribute";
import BookDetail from "../components/BookDetail";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/book/:bookId" element={<BookDetail />} />
    </Routes>
  );
}

export default MainRoutes;
