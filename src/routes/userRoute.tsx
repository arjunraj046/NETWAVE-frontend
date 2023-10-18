import { Routes, Route } from "react-router-dom";

import SignupPage from "../pages/user/signupPage";
import LoginPage from "../pages/user/loginPage";
import UserHome from "../pages/user/userHomePage";
import Feed from "../commponents/user/home-pages/feeds-components/feed-container";
import Messages from "../commponents/user/home-pages/messages-components/messages-component";
import Notification from "../commponents/user/home-pages/notification-components/notification-container";
import Profile from "../commponents/user/home-pages/profile-components/profile-component";
import Friends from "../commponents/user/home-pages/friends-components/friends-container";
import Page404 from "../commponents/user/404/Page404";
// import UserOutlet from "../outlet/useroutlet";
import EditProfile from "../commponents/user/home-pages/profile-components/editProfile";

const UserRoute: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Page404 />} />

        <Route path="/" element={<UserHome />}>
          <Route index element={<Feed />} />
          <Route path="friends" element={<Friends />} />
          <Route path="notification" element={<Notification />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/edit" element={<EditProfile/>} />

        </Route>
      </Routes>
    </>
  );
};

export default UserRoute;
