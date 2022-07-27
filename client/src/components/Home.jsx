import React from "react";
import { Link } from "react-router-dom";
import HomeBooks from "./HomeBooks";
import SearchBar from "./SearchBar";

function Home() {
  return (
    <div className="d-flex flex-column justify-content-center py-3 px-5">
      <div className="text-center mb-3 mainheading">
        ONLINE <br /> LIBRARY
      </div>
      <SearchBar />

      <HomeBooks />
      <Link to="/contribute">Contribute</Link>
    </div>
  );
}

export default Home;
