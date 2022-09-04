import React from "react";
import GoogleSignIn from "./GoogleSignIn";

function Register() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Create an account</h1>

      <div>
        <GoogleSignIn btnText={"Register with Google"} />
      </div>
    </div>
  );
}

export default Register;
