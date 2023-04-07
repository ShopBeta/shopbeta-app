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
import TextPost from "./assets/vendor/ViewPost1"
import VideoPost from "./assets/vendor/ViewPost2"
import VideoSpace from "./assets/VideoSpace";

const App = () => {
    return (
        <div>
            <Router>
             <Routes>
                <Route index element={<Home />} />
                <Route exact path="/assets/Adbillboard" element={<AdbillBoard />} />
                <Route exact path="/assets/VideoSpace" element={<VideoSpace />} />
                <Route exact path="/assets/Messages" element={<Messages />} />
                <Route exact path="/assets/Chats" element={<Chats />} />
                <Route exact path="/assets/vendor/SearchPage" element={<SearchPage />} />
                <Route exact path="/assets/vendor/MarketPlace" element={<MarketPlace />} />
                <Route exact path="/assets/vendor/Profile" element={<Profile />} />
                <Route exact path="/assets/vendor/User" element={<User />} />
                <Route exact path="/assets/Welcome" element={<Welcome/>} />
                <Route exact path="/assets/vendor/Cart" element={<Cart />} />
                <Route exact path="/assets/vendor/ViewPost1" element={<TextPost />} />
                <Route exact path="/assets/vendor/ViewPost2" element={<VideoPost />} />
                <Route exact path="/assets/vendor/Settings" element={<Settings />} />
             </Routes>
            </Router>
        </div>
    )
}

export default App;