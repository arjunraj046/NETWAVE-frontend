import React from "react";
// import Feeds from "../../commponents/user/home-pages/feed-container";
import TopNavBar from "../../commponents/user/home-pages/home-components/nav-bar/topnavbar";
import Sidebar from "../../commponents/user/home-pages/home-components/nav-side-bar/sidebar";
import RightSidebar from "./Test";
import { useSelector } from "react-redux";
import { selectUserAuth } from "../../redux/features/reducers/userAuthSlice";
import { Outlet } from "react-router-dom";
const HomePage: React.FC = () => {
  const userAuth = useSelector(selectUserAuth);

  // You can now access the userAuth object
  console.log(userAuth, "redux stored data");

  return (
    <>
      <TopNavBar />
      <Sidebar />
      <main className="p-4 md:ml-64 lg:mr-80 h-auto pt-20">
        <div className="">
          < Outlet />
        </div>
      </main>
      <div className="hidden lg:block">
        <RightSidebar />
      </div>
    </>
  );
};

export default HomePage;
