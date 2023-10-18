import React, { useState } from "react";
import logo from "../../../logo/netwave-blue.png";
import { Link, useNavigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import "./userLogin.css";
import { useDispatch } from "react-redux";
import { useUserLoginMutation } from "../../../redux/features/api/apiSlice";
import { setUserTokenAndUserData } from "../../../redux/features/reducers/userAuthSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

interface LoginFormValues {
  userName: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});
const Login: React.FC = () => {
  const [UserLogin] = useUserLoginMutation();
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleResetClick = () => {
    setLoginError("");
    formik.resetForm();
  };
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema,
    // validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (data) => {
      console.log(JSON.stringify(data, null, 2));
      console.log(data);
      setLoading(true);
      try {
        if (data) {
          const res: any = await UserLogin(data).unwrap();
          console.log("response", res.status);
          if (res.status == "success") {
            console.log("user account logged in :: success", res);
            dispatch(setUserTokenAndUserData(res));
            navigate("/");
          }
        }
      } catch (err: any) {
        setLoading(false);
        console.log(err);
        setLoginError(
          err?.data?.Error || "Please check your username and password"
        );
      }
    },
  });
  return (
    <div className=" flex items-center justify-center min-h-screen maindiv">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <div className="flex items-center justify-center mb-4">
          <img className="h-10 mr-2" src={logo} alt="Logo" />
          <h1 className="text-2xl font-bold text-gray-700">Sign In</h1>
        </div>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div>
            <label
              className="block mb-1 font-bold text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
              name="userName"
              id="userName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userName}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="invalid-feedback text-rose-500 text-xs">
            {formik.errors.userName && formik.touched.userName
              ? formik.errors.userName
              : null}
          </div>
          <div>
            <label
              className="block mb-1 font-bold text-gray-700"
              htmlFor="password"
            >
              {" "}
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
              name="password"
              id="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="invalid-feedback text-rose-500 text-xs">
            {formik.errors.password && formik.touched.password
              ? formik.errors.password
              : null}
          </div>
          <div className=" text-rose-500 text-xs">{loginError}</div>
          <div>
            <div>
              {loading ? <LinearProgress /> : null}

              <br />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:border-blue-500"
            >
              Login
            </button>
          </div>
          <div>
            <Link to={"/signup"}>
              <p className="pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <a style={{ color: "#393f81" }}>Register here</a>
              </p>
            </Link>
            <button
              type="button"
              className=" float-right  bg-blue-500 rounded-full py-2 px-4  text-white border-sky-900"
              onClick={handleResetClick}
            >
              {" "}
              Reset
            </button>
          </div>
          {/* <div className="flex items-center justify-center">
            <button className="mr-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:border-red-700">
              Sign in with Google
            </button>
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:border-blue-900">
              Sign in with Facebook
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
};
export default Login;
