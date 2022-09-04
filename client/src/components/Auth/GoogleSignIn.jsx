import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function GoogleSignIn(props) {
  const { btnText } = props;

  const getProfile = async (token) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`
      );
      //   console.log(res.data);
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
    <button className="btn" onClick={() => login()}>
      {btnText}
    </button>
  );
}

export default GoogleSignIn;
