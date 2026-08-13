import React from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/Firebase.init";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const userInfo = {
    signInWithGoogle,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
