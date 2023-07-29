import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import './Home.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header'
import { TextPostList } from '../containers/PostCardList';
import Preloader from "../components/Preloader";
import { FeedSideBar } from "../components/SideBars";
import BlankPage from "./indexes/BlankPage";
import { NetworkError }from "./indexes/ErrorPages"


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
            error.style['display'] = 'contents'

            const load = document.getElementById('load')
            load.style['display'] = 'none'

            const blank = document.getElementById('blank')
            blank.style['display'] = 'none'
        })
    }, [])

    render()
        return(
            <div className="">
                <Preloader />
                    <Header />
                    <div style={{overflowY: 'auto', height: '670px', width: '360px'}} className="">
                        <div className="pa1 pv5 tc">
                            <div className="dib tc">
                                <h3 className="pa4 tl code f3 ph3">
                                    AdbillBoard
                                </h3>
                                <div className="dtc">
                                    <FeedSideBar />
                                </div>
                                <div id="error" style={{display: 'none'}} className="tc">
                                    <NetworkError />
                                </div>
                                {feed.length === 0 &&  <div id="blank" className="tc">
                                    <BlankPage />
                                    <div className="tc">
                                        <p className="pv4 fw6 ph5">
                                            <small className="green f4">Post Ads about your services or products</small>
                                        </p>
                                    </div>
                                </div>}
                                <TextPostList feed={feed} />
                                <p id="load" className="tc code orange fw6 f4">Loading feeds...</p>
                            </div>
                        </div>
                    </div>
                    <footer><Navbar /></footer>
                </div>
    );
}

export default AdbillBoard;