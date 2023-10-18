import React, {useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";
import Signup from "../../commponents/user/user-signup/userSignup";
import { Navigate,useNavigate } from "react-router-dom";

const SignupPage: React.FC = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   let user = localStorage.getItem("userToken");
  //   if (user) {
  //     navigate("/");
  //   } else {
  //     navigate("/signup");
  //   }
  // }, []);
  
  // const reduxdata: any = useSelector((state: RootState) => state.userAuth);
  // // local
  // const localdata: any = localStorage.getItem("userToken");
  // const storedData = JSON.parse(localdata);
  // const token = storedData.token;
  // if (reduxdata.data.token != token) {
  //   return <Signup />;
  // } else {
  //   return <Navigate to={"/"} />;
  // }
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const localdata: any = localStorage.getItem("userToken");
    const storedData = JSON.parse(localdata);
    const token: string | null = storedData?.token; 
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return loggedIn ? <Navigate to="/" /> : <Signup />;
};
export default SignupPage;
