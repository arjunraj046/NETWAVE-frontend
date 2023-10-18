import { useEffect, useState } from "react";
import Loading from "../loading-component/Loading";
import {useUserSuggestionListMutation,useUseraddfriendMutation} from "../../../../redux/features/api/apiSlice";
import List from "./s-list";
import EmptyComponent from "../../404/empty";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/app/store";
import { toast } from "react-toastify";
const Suggestions = () => {
  const { user }: any = useSelector((state: RootState) => state.userAuth);
  const [pageC, setPageC] = useState<number>(0); 
  const [total, setTotal] = useState<number>(0); 
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchingMore, setFetchingMore] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const [fetchSuggestions] = useUserSuggestionListMutation();
  const [AddFriendFunction] = useUseraddfriendMutation();

  const fetchData = async () => {
    try {
      setFetchingMore(true);
      let requestData: any = { listCount: pageC, userdata: user.userdata };
      const response: any = await fetchSuggestions(requestData);
      let { status, suggestionList, listCount } = response.data;
      setTotal(listCount);
      setData((prevData) => [...prevData, ...suggestionList]);
      setLoading(false);
      setFetchingMore(false);
    } catch (error) {
      setLoading(false);
      setFetchingMore(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageC]);

  const handleClick = () => {
    setPageC(pageC + 1);
  };

  const removeAddedFriend = (objectIdToRemove: any) => {
    const removeObjectFromList = (objectIdToRemove: {
      toString: () => any;
    }) => {
      return data.filter(
        (obj: { _id: { toString: () => any } }) =>
          obj._id.toString() !== objectIdToRemove.toString()
      );
    };
    const updatedList = removeObjectFromList(objectIdToRemove);
    setData(updatedList);
    setTotal(total - 1);
  };
  const replaceAddFriend = (newUserData: object) => {
    setData((prevData) => [...prevData, newUserData]);
  };
  let displayListCount = data.length;

  const handleAddFriend = async (friendId: string) => {
    let userId: string = user?.userdata?._id;
    let data: object = {
      userId: userId,
      friendId: friendId,
      pageNumber: pageC,
    };

    try {
      const res: any = await AddFriendFunction(data);

      if (res.data.status == "success") {
        removeAddedFriend(friendId);

        if (total > displayListCount) {
          replaceAddFriend(res?.data?.response);
        }

        toast("🫂 Friend Request Sent!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Something Went Wrong!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error("Something Went Wrong , Error!", {
        position: "bottom-right",
        autoClose: 2000,
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
          removeAddedFriend={removeAddedFriend}
          handleAddFriend={handleAddFriend}
        />
        
        <div className="flex justify-center items-center">
          {total > data.length ? (
            <button
              className="btn-sm bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleClick}
              disabled={fetchingMore}
            >
              {fetchingMore ? "Loading..." : "Show More"}
            </button>
          ) : null}
        </div>
      </>
    );
  } else {
    return <EmptyComponent />;
  }
};
export default Suggestions;








