import React from "react";
import Spinner from "react-bootstrap/Spinner";

function LoadingSpinner() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Spinner
        animation="border"
        variant="primary"
        style={{ width: "3rem", height: "3rem" }}
      />
    </div>
  );
}

export default LoadingSpinner;
