import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is home</h1>
      <Link to="/contribute">Contribute</Link>
    </div>
  );
}

export default Home;
