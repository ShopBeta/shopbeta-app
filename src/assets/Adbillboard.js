import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import './Home.css';
import Navbar from '../components/Navbar';
import { TextPostList } from '../containers/PostCardList';
import Preloader from "../components/Preloader";
import SideBar from "../components/FeedSideBar";
import BlankPage from "./indexes/BlankPage";
import NetworkError from "./indexes/NetworkError"


const AdbillBoard = () => {

    const [feed, setFeed] = useState([])
    useEffect(() => {
        fetch("https://shopbeta-api.onrender.com/feed", {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => {
            setFeed(data)
            
            const load = document.getElementById('load')
            load.style['display'] = 'none'

            const error = document.getElementById('error')
            error.style['display'] = 'none'
        })
        .catch((err) => {
            console.log(err.message)

            const error = document.getElementById('error')
            error.style['display'] = 'none'

            const load = document.getElementById('load')
            load.style['display'] = 'none'
        })
    }, [])

    if(feed.length === 0 ) {
        const blank = document.getElementById('blank')
        blank.style['display'] = 'contents'

    } else {
        const blank = document.getElementById('blank')
        blank.style['display'] = 'none'
    }

    render()
        return(
            <div className="">
                <Preloader />
                        <Navbar />
                    <div className="">
                        <div className="pa1 pv5 tc">
                            <h3 className="tl pt5 pa4 code f3 ph3">
                                AdbillBoard
                            </h3>
                            <div className="dib w-100 tc">
                                <div className="dtc">
                                    <SideBar />
                                </div>
                                <div id="blank" style={{display: 'none'}} className="tc">
                                    <BlankPage />
                                    <div className="tc">
                                        <p className="pv4 fw6 ph5">
                                            <small className="green f4">Post Ads about your services or products</small>
                                        </p>
                                    </div>
                                </div>
                                <div id="error" style={{display: 'none'}} className="tc">
                                    <NetworkError />
                                </div>
                                <TextPostList feed={feed} />
                                <p id="load" className="tc code orange fw6 f4">Loading feeds...</p>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default AdbillBoard;