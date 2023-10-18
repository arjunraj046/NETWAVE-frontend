import { Navigate, Outlet } from "react-router-dom";

const UserOutlet = () => {
  const localdata: any = localStorage.getItem("userToken");
  const storedData = JSON.parse(localdata);
  const token = storedData?.token;

  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }
};
export default UserOutlet;
