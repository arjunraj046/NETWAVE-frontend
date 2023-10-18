import React, { useState } from "react";
import profile from "../../../../assets/blank-profile-picture.webp";
import UserGallery from "./gallery";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/app/store";
// import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Profile: React.FC = () => {
 
  const { user }: any = useSelector((state: RootState) => state.userAuth);
  // console.log("userrrrrrrr",user);
  
  return (
    <>
    <div className="flex items-center justify-center my-10">
      <div
        className="flex items-center justify-center w-6/12 cursor-pointer"
        // onClick={openModal}
      >
        <div className="w-44 h-44 rounded-full border-4 border-blue-500 overflow-hidden">
          {/* Profile Picture */}
          <img
            src={profile}
            alt="Profile"
            className="object-cover w-full h-full transition-transform transform hover:scale-105"
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-8/12">
        <div className="flex flex-col"> {/* Flex container */}
          <h2 className="text-2xl font-semibold">User Name: {user.userdata.userName}</h2>
          <p className="text-lg">Name: {user.userdata.firstName} {user.userdata.lastName}</p>
          <p className="text-lg">Phone Number: {user.userdata.phoneNumber}</p>
          <p className="text-lg">Email: {user.userdata.email}</p>
          <p className="text-lg">Friends Count: {user.userdata.friendsCount}</p>
          <Link className="bg-blue-500 text-center text-white px-4 py-2 rounded mt-4 hover:bg-blue-600" to={"/profile/edit"}>
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
    <UserGallery />
  </>
  );
};

export default Profile
