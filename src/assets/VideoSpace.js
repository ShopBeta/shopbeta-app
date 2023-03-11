import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import './Home.css';
import Navbar from '../components/Navbar';
import { VideoPostList } from '../containers/PostCardList';
import Preloader from "../components/Preloader";
import SideBar from "../components/SideBar2";


const VideoSpace = () => {

    const [feed, setFeed] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/feed", {
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
                        <div className="pa1 pv5 tc">
                            <h3 className="tl pt4 pa4 code f3 ph4">VideoSpace</h3>
                                <div className="dib tc">
                                    <div className="dtc bg-blue">
                                        <SideBar />
                                    </div>
                                    <VideoPostList feed={feed} />
                                </div>
                        </div>
            </div>
        </div>
    );
}

export default VideoSpace;