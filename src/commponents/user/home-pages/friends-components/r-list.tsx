// import React from "react";
import {
  faCheck,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blankProfilePicture from "../../../../assets/blank-profile-picture.webp";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/app/store";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useEffect } from "react";
import { useUserFriendRequestListMutation } from "../../../../redux/features/api/apiSlice";

const List = ({
  list,
  handleAcceptFriendRequest,
  handleRejectFriendRequest,
}: {
  list: any[] | null;
  handleAcceptFriendRequest: (friendId: number) => void;
  handleRejectFriendRequest: (friendId: number) => void;
}) => {
  // const { user }: any = useSelector((state: RootState) => state.userAuth);
  // console.log(user);

  if (list) {
    return (
      <ul>
        {list.map((friend, index) => (
          <li
            key={index}
            className="flex items-center mb-2 border border-gray-300 rounded-lg p-4"
          >
            <img
              src={blankProfilePicture}
              alt={`Friend ${index + 1}`}
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="ml-5  text-sm">{`
             ${friend.user.userName}`}</span>
            <button
              className="ml-auto bg-gradient-to-r from-gray-500 to-green-500 hover:from-green-500 hover:to-gray-500 text-white px-2 py-1 rounded-md flex items-center w-30 text-sm"
              onClick={() => handleAcceptFriendRequest(friend._id)}
              style={{ whiteSpace: "nowrap" }}
            >
              <FontAwesomeIcon icon={faCheck as IconProp} className="mr-1" />
              Accept
            </button>

            <button
              className="ml-2 bg-gradient-to-r from-gray-500 to-red-500 hover:from-red-500 hover:to-gray-500 text-white px-2 py-1 rounded-md flex items-center w-30 text-sm"
              onClick={() => handleRejectFriendRequest(friend._id)}
              style={{ whiteSpace: "nowrap" }}
            >
              <FontAwesomeIcon icon={faXmark as IconProp} className="mr-1" />
              Cancel
            </button>
          </li>
        ))}
      </ul>
    );
  } else {
    return <h1> There are no Request</h1>;
  }
};

export default List;
