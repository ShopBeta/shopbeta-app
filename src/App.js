import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/Home";
import AdbillBoard from "./assets/Adbillboard";
import SearchPage from "./assets/vendor/SearchPage";
import Profile from "./assets/vendor/Profile";
import User from "./assets/vendor/User";
import MarketPlace from "./assets/vendor/MarketPlace";
import Cart from "./assets/vendor/Cart";
import Settings from "./assets/vendor/Settings";
import Welcome from "./assets/Welcome";
import Messages from "./assets/Messages";
import Chats from "./assets/Chats";
import FeedPost from "./assets/vendor/FeedPost"
import VideoPost from "./assets/vendor/VideoPost"
import VideoSpace from "./assets/VideoSpace";
import Avatar from "./assets/indexes/Avatar";
import Login from "./assets/indexes/Login"
import Signup from "./assets/indexes/Signup"
import NewAccount from "./assets/indexes/NewAccount"
import ForgotPassword from "./assets/indexes/ForgotPassword"
import NotFound from "./assets/indexes/404"
import ServerError from "./assets/indexes/500";

const App = () => {
    return (
        <div>
            <Router>
             <Routes>
                <Route index element={<Welcome/>} />
                <Route exact path="/assets/Home" element={<Home />} />
                <Route exact path="/assets/Adbillboard" element={<AdbillBoard />} />
                <Route exact path="/assets/VideoSpace" element={<VideoSpace />} />
                <Route exact path="/assets/Messages" element={<Messages />} />
                <Route exact path="/assets/Chats" element={<Chats />} />
                <Route exact path="/assets/vendor/SearchPage" element={<SearchPage />} />
                <Route exact path="/assets/vendor/MarketPlace" element={<MarketPlace />} />
                <Route exact path="/assets/vendor/Profile" element={<Profile />} />
                <Route exact path="/assets/vendor/User" element={<User />} />
                <Route exact path="/assets/vendor/Cart" element={<Cart />} />
                <Route exact path="/assets/vendor/FeedPost" element={<FeedPost />} />
                <Route exact path="/assets/vendor/VideoPost" element={<VideoPost />} />
                <Route exact path="/assets/vendor/Settings" element={<Settings />} />
                <Route exact path="/assets/indexes/ForgotPassword" element={<ForgotPassword />} />
                <Route exact path="/assets/indexes/NewAccount" element={<NewAccount />} />
                <Route exact path="/assets/indexes/Signup" element={<Signup />} />
                <Route exact path="/assets/indexes/Login" element={<Login />} />
                <Route exact path="/assets/indexes/Avatar" element={<Avatar />} />
                <Route exact path="/assets/indexes/404" element={<NotFound />} />
                <Route exact path="/assets/indexes/500" element={<ServerError />} />
             </Routes>
            </Router>
        </div>
    )
}

export default App;