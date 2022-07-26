import React from "react";
import { Link } from "react-router-dom";
import HomeBooks from "./HomeBooks";
import SearchBar from "./SearchBar";

function Home() {
  return (
    <div className="d-flex flex-column justify-content-center py-3 px-5">
      <h1 className="text-center mb-3">This is home</h1>
      <SearchBar />

      <HomeBooks />
      <Link to="/contribute">Contribute</Link>
    </div>
  );
}

export default Home;
