import React from "react";
import MainRoutes from "./routes/MainRoutes";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_SIGN_IN } from "./constants/config";

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_SIGN_IN}>
      <MainRoutes />
    </GoogleOAuthProvider>
  );
}

export default App;
