import { useFormik } from "formik";
import * as Yup from "yup";
import { useUserEditProfileDetailsMutation } from "../../../../redux/features/api/apiSlice";
import { RootState } from "../../../../redux/app/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

interface User {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  status: boolean;
  updatedAt: string;
  userName: string;
  _id: string;
}

interface InitialValues {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

const EditProfile: React.FC = () => {
  const [loading, setloading] = useState(true);
  // const [data, setData] = useState<User | null>(null);
  const [initialValues, setInitialValues] = useState<InitialValues>({
    _id: "",
    username: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const { user }: any = useSelector((state: RootState) => state.userAuth);
  useEffect(() => {
    if (user && user.userdata) {
      setInitialValues(user.userdata);
    }
  }, [user]);

  // useEffect(() => {
  //   setInitialValues({
  //     username: data?.userName || "",
  //     firstName: data?.firstName || "",
  //     lastName: data?.lastName || "",
  //     phoneNumber: data?.phoneNumber || "",
  //     email: data?.email || "",
  //   });
  // }, [data]);
  console.log(user?.userdata?.userName);

  const [editprofile] = useUserEditProfileDetailsMutation();

  console.log("oooooooooo", initialValues);

  // console.log("xxxxxxxxxx", data);

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(4, "User Name must be at least 4 characters")
      .max(14, "User Name must be less than 14 characters"),
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
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const editedValues: Partial<typeof initialValues> = {};

      Object.keys(values).forEach((key) => {
        if (
          values[key as keyof typeof initialValues] !==
          initialValues[key as keyof typeof initialValues]
        ) {
          editedValues[key as keyof typeof initialValues] =
            values[key as keyof typeof initialValues];
        }
      });

      console.log("Form data submitted:", editedValues);

      try {
        const res = await editprofile(editedValues).unwrap();

        console.log(res);
      } catch (error) {}
    },
  });

  if (loading) {
    return (
      <>
      </>
    );
  }
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Edit Profile</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="text-center">
          <div className="mb-4">
            <label className="block text-gray-600 text-left">User Name</label>
            <input
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border rounded-lg px-4 py-2 w-full"
            />
            {formik.touched.username && formik.errors.username ? (
              <div className=" text-rose-500 text-sm text-left">
                {formik.errors.username}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-left">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border rounded-lg px-4 py-2 w-full"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className=" text-rose-500 text-sm text-left">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-left">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border rounded-lg px-4 py-2 w-full"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className=" text-rose-500 text-sm text-left">
                {formik.errors.lastName}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-left">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border rounded-lg px-4 py-2 w-full"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className=" text-rose-500 text-sm text-left">
                {formik.errors.phoneNumber}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-left">Email</label>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border rounded-lg px-4 py-2 w-full"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className=" text-rose-500 text-sm text-left">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mr-4"
          >
            Save
          </button>
          <button
            type="button"
            onClick={formik.handleReset}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
