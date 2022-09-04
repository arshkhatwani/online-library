import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Contribute from "../components/Contribute";
import BookDetail from "../components/BookDetail";
import SearchResults from "../components/SearchResults";
import Register from "../components/Auth/Register";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/book/:bookId" element={<BookDetail />} />
      <Route path="/searchresults" element={<SearchResults />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default MainRoutes;
