import React from "react";
import HomeBooks from "./HomeBooks";
import NavbarComp from "./NavbarComp";
import SearchBar from "./SearchBar";

function Home() {
  return (
    <>
      <NavbarComp />
      <div className="d-flex flex-column justify-content-center py-3 px-5">
        <div className="text-center mb-3 mainheading">
          ONLINE <br /> LIBRARY
        </div>

        <SearchBar />

        <HomeBooks />
      </div>
    </>
  );
}

export default Home;
