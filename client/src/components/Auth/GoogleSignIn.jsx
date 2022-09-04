import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import "./css/GoogleSignIn.css";

function GoogleSignIn(props) {
  const { btnText } = props;

  const getProfile = async (token) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`
      );
      // console.log(res.data);
    } catch (e) {
      //   console.log(e);
      alert("Could not login");
    }
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      getProfile(tokenResponse.access_token);
    },
  });

  return (
    <button
      className="btn d-flex flex-row justify-content-center align-items-center google-btn"
      onClick={() => login()}
    >
      <FcGoogle className="google-icon" />
      {btnText}
    </button>
  );
}

export default GoogleSignIn;
