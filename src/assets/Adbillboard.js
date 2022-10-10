import { render } from "@testing-library/react";
import React from "react";
import { useEffect } from "react";
import './Home.css';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import { PostCardList, SharedPostList, TextPostList, ProfilePostList } from '../containers/PostCardList';
import { users } from '../containers/Users';
// import { AdBlankPage, ErrorPage } from "./Vendor/Pages";
import Scroll from '../containers/Scroll'; 
import PostAd from "../containers/PostAd";
import Preloader from "../components/Preloader";


const AdbillBoard = () => {
    render()
        return(
            <div className="home">
                <Preloader />
                        <Navbar />
                    <div className="dt dt--fixed">
                        <SideBar />
                        <div className="flex flex-wrap">
                            <h3 className="shop code fw5 f4 ph3 pb2">AdbillBoard</h3>
                        <Scroll>
                            <PostCardList users={users} />
                            <SharedPostList users={users} />
                            <TextPostList users={users} />
                            <ProfilePostList users={users} />
                            {/* <AdBlankPage />
                            <ErrorPage /> */}
                        </Scroll>
                        </div>
                        <PostAd/>
                    </div>
            </div>
        );
}

export default AdbillBoard;