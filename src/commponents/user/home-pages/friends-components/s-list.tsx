// import React from "react";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blankProfilePicture from "../../../../assets/blank-profile-picture.webp";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/app/store";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const List = ({
  list,
  handleAddFriend,
}: {
  list: any[] | null;
  removeAddedFriend: (friendId: string) => void;
  handleAddFriend: (friendId: string) => void;
}) => {
  const { user }: any = useSelector((state: RootState) => state.userAuth);

  console.log(user);

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
            <span className="ml-5  text-sm">{` ${friend.userName}`}</span>
            <button
              className="ml-auto bg-gray-500 text-white px-2 py-1 rounded-md flex items-center w-30 text-sm"
              onClick={() => handleAddFriend(friend._id)}
              style={{ whiteSpace: "nowrap" }}
            >
              <FontAwesomeIcon icon={faUserPlus as IconProp} className="mr-1" />
              Add Friend
            </button>
          </li>
        ))}
      </ul>
    );
  } else {
    return <h1> There are no suggestions</h1>;
  }
};

export default List;
