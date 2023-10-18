import React, { useEffect, useState } from "react";
import Loading from "../loading-component/Loading";
import EmptyComponent from "../../404/empty";
import { useUserFriendRequestListMutation } from "../../../../redux/features/api/apiSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/app/store";
import { toast } from "react-toastify";
import List from "./r-list";
import {
  useUserAcceptRequestMutation,
  useUserRejectRequestMutation,
} from "../../../../redux/features/api/apiSlice";

interface FriendRequest {
  _id: string;
  user: {
    _id: string;
    [key: string]: any; // Allow any other properties inside 'user'
  };
}

const FriendsRequest: React.FC = () => {
  const { user }: any = useSelector((state: RootState) => state.userAuth);
  const [friendRequestList] = useUserFriendRequestListMutation();

  const [acceptFriendRequest] = useUserAcceptRequestMutation();
  const [rejectFriendRequest] = useUserRejectRequestMutation();
  // const [pageC, setPageC] = useState<number>(0); //
  // const [total, setTotal] = useState<number>(0); //
  const [loading, setLoading] = useState<boolean>(true);
  // const [fetchingMore, setFetchingMore] = useState<boolean>(false);
  const [data, setData] = useState<FriendRequest[]>([]);

  const fetchData = async () => {
    try {
      let requestData: any = { userdata: user.userdata };
      const response: any = await friendRequestList(requestData);
      // console.log(response);
      let {
        status,
        requestList,
      }: { status: string; requestList: FriendRequest[] } = response.data;
      // console.log("data", status, requestList);
      setData(requestList);
      setLoading(false);
      console.log("set data", data);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("hai data", data);

  const handleAcceptRequest = async (friendId: number) => {
    console.log("accept", friendId);
    const request = { id: friendId };
    const response = await acceptFriendRequest(request);
    console.log(response, data);
    if (response) {
      console.log("dataaaa", data);
      const removedData = data.filter((item) => item._id === friendId.toString());
      console.log(removedData);
      let name :any = removedData[0].user.userName
      const newData = data.filter((item) => item._id !== friendId.toString());
      console.log("newData", newData);
      setData(newData);
      toast.success(`You and ${name} are now friends`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const handleRejectRequest = async (friendId: number) => {
    console.log("reject", friendId);
    const request = { id: friendId };

    const response = await rejectFriendRequest(request);
    console.log(response);
    if (response) {
      const removedData = data.filter((item) => item._id === friendId.toString());
      console.log("removedData",removedData);
      let name :any = removedData[0].user.userName
      
      const newData = data.filter((item) => item._id !== friendId.toString());
      console.log("newData", newData);
      setData(newData);
      toast.error(`Request from ${name} Rejected!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  if (loading) {
    return <Loading />;
  } else if (data.length > 0) {
    return (
      <>
        <List
          list={data}
          handleAcceptFriendRequest={handleAcceptRequest}
          handleRejectFriendRequest={handleRejectRequest}
        />
        <div className="flex justify-center items-center"></div>
      </>
    );
  } else {
    return <EmptyComponent />;
  }
};

export default FriendsRequest;
