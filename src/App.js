import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/Home";
import AdbillBoard from "./assets/Adbillboard";
import Category from "./assets/Category";
import SearchPage from "./assets/vendor/SearchPage";
import Profile from "./assets/vendor/Profile";
import MarketPlace from "./assets/vendor/MarketPlace";
import Cart from "./assets/vendor/Cart";
import Settings from "./assets/vendor/Settings";
import Welcome from "./assets/vendor/Welcome";
import Messages from "./assets/Messages";

const App = () => {
    return (
        <div>
            <Router>
             <Routes>
                <Route index element={<Home />} />
                <Route exact path="/assets/Adbillboard" element={<AdbillBoard />} />
                <Route exact path="/assets/Messages" element={<Messages />} />
                <Route exact path="/assets/Category" element={<Category />} />
                <Route exact path="/assets/vendor/SearchPage" element={<SearchPage />} />
                <Route exact path="/assets/vendor/MarketPlace" element={<MarketPlace />} />
                <Route exact path="/assets/vendor/Profile" element={<Profile />} />
                <Route exact path="/assets/vendor/Welcome" element={<Welcome/>} />
                <Route exact path="/assets/vendor/Cart" element={<Cart />} />
                <Route exact path="/assets/vendor/Settings" element={<Settings />} />
             </Routes>
            </Router>
        </div>
    )
}

export default App;