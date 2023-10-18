import FriendsRequest from "./friendsRequest-container";
import Suggestions from "./suggestions-container";

const Friends = () => {
  return (
    <>
      <div className="p-4 ">
        <h2 className="text-xl font-semibold mb-2">Friend Requests</h2>
        <br />
        <FriendsRequest />
        <h2 className="text-xl font-semibold mb-2">Friends Suggestions</h2>
        <br />
        <Suggestions />
      </div>
    </>
  );
};

export default Friends;
