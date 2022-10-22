import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import './Home.css';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import { TextPostList } from '../containers/PostCardList';
// import { AdBlankPage, ErrorPage } from "./Vendor/Pages";
import Scroll from '../containers/Scroll'; 
import PostAd from "../containers/PostAd";
import Preloader from "../components/Preloader";


const AdbillBoard = () => {

    const [feed, setFeed] = useState([])
    useEffect(() => {
        fetch("https://shopbeta-app.herokuapp.com/feed", {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => setFeed(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [])

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
                                <TextPostList feed={feed} />
                                {/* <PostCardList feed={feed} /> */}
                                {/* <SharedPostList users={users} />
                                <ProfilePostList feed={feed} /> */}
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