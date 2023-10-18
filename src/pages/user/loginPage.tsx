import React, { useState, useEffect } from "react";
import Login from "../../commponents/user/user-login/userLogin";
import { Navigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const localdata: any = localStorage.getItem("userToken");
    const storedData = JSON.parse(localdata);
    const token: string | null = storedData?.token; 
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return loggedIn ? <Navigate to="/" /> : <Login />;
};
export default LoginPage;
