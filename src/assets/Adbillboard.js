import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import './Home.css';
import Navbar from '../components/Navbar';
import { TextPostList } from '../containers/PostCardList';
// import { AdBlankPage, ErrorPage } from "./Vendor/Pages";
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
            <div className="">
                <Preloader />
                        <Navbar />
                    <div className="">
                        <div className="">
                            {/* <SideBar /> */}
                        </div>
                        <div className="pa1 pv5 tc">
                            <h3 className="tl fw5 pt5 pa4 f3 ph4">AdbillBoard</h3>
                                <div className="dib tc">
                                    <PostAd/>
                                    <TextPostList feed={feed} />
                                </div>
                                {/* <PostCardList feed={feed} /> */}
                                {/* <SharedPostList users={users} />
                                <ProfilePostList feed={feed} /> */}
                                {/* <AdBlankPage />
                                <ErrorPage /> */}
                        </div>
            </div>
        </div>
    );
}

export default AdbillBoard;