import React, { useState } from "react";
import { signInWithGoogle, signInwithFaceBook } from "../../../firebase.ts";
// import { useDispatch, useSelector } from "react-redux";
import LinearProgress from "@mui/material/LinearProgress";
import { Link, useNavigate } from "react-router-dom";
import "./userSignup.css";
import logo from "../../../logo/netwave-blue.png";
import { useUserSignupMutation } from "../../../redux/features/api/apiSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

interface userSignupFormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
}
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters")
    .max(14, "First Name must be less than 14 characters")
    .matches(/^[A-Za-z]+$/, "First Name must contain only alphabets"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters")
    .max(14, "Last Name must be less than 14 characters")
    .matches(/^[A-Za-z]+$/, "Last Name must contain only alphabets"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^\d{10}$/, "Phone Number must be exactly 10 digits"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  userName: Yup.string()
    .required("Username is required")
    .min(4, "User Name must be at least 4 characters")
    .max(14, "User Name must be less than 14 characters"),
    password: Yup.string()
    .required("Password is required")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    ,
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
const Signup: React.FC = () => {
  const [UserSignup] = useUserSignupMutation();
  const [loading, setLoading] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleResetClick = () => {
    setSignUpError("");
    formik.resetForm();
  };

  const formik = useFormik<userSignupFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (data) => {
      setLoading(true);
      console.log(data);
      const { confirmPassword, ...newData } = data;
      console.log(newData);
      setLoading(true);
      try {
        if (newData) {
          const res = await UserSignup(newData).unwrap();
          // console.log("response", res.status);
          if (res.status == "success") {
            setLoading(false);
            navigate("/login");
          }
        }
      } catch (err: any) {
        setLoading(false);
        console.log(err);
        setSignUpError(err?.data?.Error || "Account not created !");
      }
    },
  });
  // const helperSignupwithGoogle = async () => {
  //   let data: any = await signInWithGoogle();
  //   return data;
  // };
  // console.log(helperSignupwithGoogle);
  // const helperSignupwithFaceBook = async () => {
  //   let data: any = await signInwithFaceBook();
  //   return data;
  // };
  // console.log(helperSignupwithFaceBook);
  return (
    <div className=" flex items-center justify-center min-h-screen maindiv">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <div className="flex items-center justify-center mb-4">
          <img className="h-10 mr-2" src={logo} alt="Logo" />
          <h1 className="text-2xl font-bold text-gray-700">Sign Up</h1>
        </div>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium "
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
              />
              <div className="invalid-feedback text-rose-500 text-xs">
                {formik.errors.firstName && formik.touched.firstName? formik.errors.firstName: null}
              </div>
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
              />
              <div className="invalid-feedback text-rose-500 text-xs">
                {formik.errors.lastName && formik.touched.lastName
                  ? formik.errors.lastName
                  : null}
              </div>
            </div>
            <div>
              <label
                htmlFor="UserName"
                className="block mb-2 text-sm font-medium"
              >
                User Name
              </label>
              <input
                type="text"
                id="userName"
                className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
                onChange={formik.handleChange}
                value={formik.values.userName}
                onBlur={formik.handleBlur}
              />
              <div className="invalid-feedback text-rose-500 text-xs">
                {formik.errors.userName && formik.touched.userName
                  ? formik.errors.userName
                  : null}
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                Phone number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                onBlur={formik.handleBlur}
              />
              <div className="invalid-feedback text-rose-500 text-xs">
                {formik.errors.phoneNumber && formik.touched.phoneNumber
                  ? formik.errors.phoneNumber
                  : null}
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            <div className="invalid-feedback text-rose-500 text-xs">
              {formik.errors.email && formik.touched.email? formik.errors.email: null}
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            <div className="invalid-feedback text-rose-500 text-xs">
              {formik.errors.password && formik.touched.password
                ? formik.errors.password
                : null}
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirm_password"
              className="block mb-2 text-sm font-medium"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
            />
            <div className="invalid-feedback text-rose-500 text-xs">
              {formik.errors.confirmPassword && formik.touched.confirmPassword
                ? formik.errors.confirmPassword
                : null}
            </div>
          </div>
          <div className=" text-rose-500 text-xs">{signUpError}</div>
          {loading ? <LinearProgress /> : null}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:border-blue-500"
          >
            Submit
          </button>
          <div>
            <Link to={"/login"}>
              <p className="pb-lg-2" style={{ color: "#393f81" }}>
                Login to your account <a style={{ color: "#393f81" }}></a>
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
        </form>
      </div>
    </div>
  );
};
export default Signup;