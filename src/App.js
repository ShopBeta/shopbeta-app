import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./maple/assets/fonts/Poppins/Poppins-Black.ttf"
import "./maple/assets/fonts/Poppins/Poppins-BlackItalic.ttf"
import "./maple/assets/fonts/Poppins/Poppins-Bold.ttf"
import "./maple/assets/fonts/Poppins/Poppins-BoldItalic.ttf"
import "./maple/assets/fonts/Poppins/Poppins-ExtraBold.ttf"
import "./maple/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf"
import "./maple/assets/fonts/Poppins/Poppins-ExtraLight.ttf"
import "./maple/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf"
import "./maple/assets/fonts/Poppins/Poppins-Italic.ttf"
import "./maple/assets/fonts/Poppins/Poppins-Light.ttf"
import "./maple/assets/fonts/Poppins/Poppins-LightItalic.ttf"
import "./maple/assets/fonts/Poppins/Poppins-Medium.ttf"
import "./maple/assets/fonts/Poppins/Poppins-MediumItalic.ttf"
import "./maple/assets/fonts/Poppins/Poppins-Regular.ttf"
import "./maple/assets/fonts/Poppins/Poppins-SemiBold.ttf"
import "./maple/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf"
import "./maple/assets/fonts/Poppins/Poppins-Thin.ttf"
import "./maple/assets/fonts/Poppins/Poppins-ThinItalic.ttf"
import AdbillBoard from "./assets/Adbillboard";
import SearchPage from "./assets/vendor/SearchPage";
import Profile from "./assets/vendor/Profile";
import User from "./assets/vendor/User";
import Products from "./assets/vendor/Products";
import Cart from "./assets/vendor/Cart";
import Settings from "./assets/vendor/Settings";
import Welcome from "./assets/Welcome";
import Messages from "./assets/Messages";
import Chats from "./assets/Chats";
import FeedPost from "./assets/vendor/FeedPost"
import VideoPost from "./assets/vendor/VideoPost"
import Details from "./components/Details";
import Purchase from "./components/Purchase";
import VideoSpace from "./assets/VideoSpace";
import Avatar from "./assets/indexes/Avatar";
import Login from "./assets/indexes/Login"
import Signup from "./assets/indexes/Signup"
import NewAccount from "./assets/indexes/NewAccount"
import ForgotPassword from "./assets/indexes/ForgotPassword"
import NewPassword from "./assets/indexes/NewPassword"
import ResetPassword from "./assets/indexes/ResetPassword"
import NotFound from "./assets/indexes/404"
import ServerError from "./assets/indexes/500";
import PostAd from "./containers/PostAd";
import PostVideo from "./containers/PostVideo";
import PostProduct from "./components/PostProduct";
import MarketPlace from "./assets/MarketPlace";

import Home from "./maple/pages/Home";
import Feeds from "./maple/pages/Feeds";
import GetStarted from "./maple/pages/GetStarted";
import OnboardingScreen1 from "./maple/pages/OnboardingScreen1";
import OnboardingScreen2 from "./maple/pages/OnboardingScreen2";
import OnboardingScreen3 from "./maple/pages/OnboardingScreen3";
import SignUp from "./maple/pages/SignUp";
import SignIn from "./maple/pages/SignIn";
import VerifyCode from "./maple/pages/VerifyCode";
import NewPassword1 from "./maple/pages/NewPassword1";
import CompleteProfile from "./maple/pages/CompleteProfile";
import Location from "./maple/pages/Location";
import EnableNotification from "./maple/pages/EnableNotification";
import SelectLocation from "./maple/pages/SelectLocation";
import ForgotPassword1 from "./maple/pages/ForgotPassword1";
import ViewProduct from "./maple/pages/ViewProduct";
import Reviews from "./maple/pages/Reviews";
import WriteReview from "./maple/pages/WriteReview";
import Category from "./maple/pages/Category";
import VisualSearch from "./maple/pages/VisualSearch";
import SpecialOffers from "./maple/pages/SpecialOffers";
import Recommendation from "./maple/pages/Recommendation";
import Wishlist from "./maple/pages/Wishlist";
import ViewFeed from "./maple/pages/ViewFeed";
import Videos from "./maple/pages/Videos";
import ViewVideo from "./maple/pages/ViewVideos";

const App = () => {
    return (
        <div>
            <Router>
             <Routes>
                <Route index element={<Welcome/>} />
                <Route exact path="/assets/Adbillboard" element={<AdbillBoard />} />
                <Route exact path="/assets/VideoSpace" element={<VideoSpace />} />
                <Route exact path="/assets/Messages" element={<Messages />} />
                <Route exact path="/assets/Chats" element={<Chats />} />
                <Route exact path="/assets/vendor/SearchPage" element={<SearchPage />} />
                <Route exact path="/assets/vendor/Products" element={<Products />} />
                <Route exact path="/assets/MarketPlace" element={<MarketPlace />} />
                <Route exact path="/assets/vendor/Profile" element={<Profile />} />
                <Route exact path="/assets/vendor/User" element={<User />} />
                <Route exact path="/assets/vendor/Cart" element={<Cart />} />
                <Route exact path="/assets/vendor/FeedPost" element={<FeedPost />} />
                <Route exact path="/assets/vendor/VideoPost" element={<VideoPost />} />
                <Route exact path="/components/Details" element={<Details />} />
                <Route exact path="/components/Purchase" element={<Purchase />} />
                <Route exact path="/assets/vendor/Settings" element={<Settings />} />
                <Route exact path="/assets/indexes/ForgotPassword" element={<ForgotPassword />} />
                <Route exact path="/assets/indexes/NewPassword" element={<NewPassword />} />
                <Route exact path="/assets/indexes/ResetPassword" element={<ResetPassword />} />
                <Route exact path="/assets/indexes/NewAccount" element={<NewAccount />} />
                <Route exact path="/assets/indexes/Signup" element={<Signup />} />
                <Route exact path="/assets/indexes/Login" element={<Login />} />
                <Route exact path="/assets/indexes/Avatar" element={<Avatar />} />
                <Route exact path="/assets/indexes/404" element={<NotFound />} />
                <Route exact path="/assets/indexes/500" element={<ServerError />} />
                <Route exact path="/container/PostAd" element={<PostAd />} />
                <Route exact path="/container/PostVideo" element={<PostVideo />} />
                <Route exact path="/components/PostProduct" element={<PostProduct />} />

                <Route exact path="/maple/pages/home" element={<Home />} />
                <Route exact path="/maple/pages/feeds" element={<Feeds />} />
                <Route exact path="/maple/pages/viewfeed" element={<ViewFeed />} />
                <Route exact path="/maple/pages/videos" element={<Videos />} />
                <Route exact path="/maple/pages/viewvideo" element={<ViewVideo />} />
                <Route exact path="/maple/pages/getstarted" element={<GetStarted />} />
                <Route exact path="/maple/pages/onboardingscreen1" element={<OnboardingScreen1 />} />
                <Route exact path="/maple/pages/onboardingscreen2" element={<OnboardingScreen2 />} />
                <Route exact path="/maple/pages/onboardingscreen3" element={<OnboardingScreen3 />} />
                <Route exact path="/maple/pages/signup" element={<SignUp />} />
                <Route exact path="/maple/pages/signin" element={<SignIn />} />
                <Route exact path="/maple/pages/verifycode" element={<VerifyCode />} />
                <Route exact path="/maple/pages/newpassword" element={<NewPassword1 />} />
                <Route exact path="/maple/pages/forgotpassword" element={<ForgotPassword1 />} />
                <Route exact path="/maple/pages/completeprofile" element={<CompleteProfile />} />
                <Route exact path="/maple/pages/location" element={<Location />} />
                <Route exact path="/maple/pages/enablenotification" element={<EnableNotification />} />
                <Route exact path="/maple/pages/selectlocation" element={<SelectLocation />} />
                <Route exact path="/maple/pages/viewproduct" element={<ViewProduct />} />
                <Route exact path="/maple/pages/reviews" element={<Reviews />} />
                <Route exact path="/maple/pages/writereview" element={<WriteReview />} />
                <Route exact path="/maple/pages/category" element={<Category />} />
                <Route exact path="/maple/pages/visualsearch" element={<VisualSearch />} />
                <Route exact path="/maple/pages/specialoffers" element={<SpecialOffers />} />
                <Route exact path="/maple/pages/recommendation" element={<Recommendation />} />
                <Route exact path="/maple/pages/wishlist" element={<Wishlist />} />
             </Routes>
            </Router>
        </div>
    )
}

export default App;