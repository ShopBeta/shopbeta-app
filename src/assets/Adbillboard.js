import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import './Home.css';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import { TextPostList } from '../containers/PostCardList';
import Preloader from "../components/Preloader";
import SideBar from "../components/FeedSideBar";
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
            error.style['display'] = 'contents'

            const load = document.getElementById('load')
            load.style['display'] = 'none'
        })
    }, [])

    render()
        return(
            <div className="">
                <Preloader />
                        <Navbar />
                    <div className="">
                        <div className="pa1 pv5 tc">
                            <h3 className="tl pt5 pa4 code f3 ph3">
                                AdbillBoard
                                <Link to={"../assets/VideoSpace"} title="video space" className="black ph6 hover-orange f3 fw5 icon-social-youtube"></Link>
                            </h3>
                                <div className="dib tc">
                                    <div className="dtc">
                                            <SideBar />
                                        </div>
                                    <div id="error" style={{display: 'none'}} className="tc">
                                        <NetworkError />
                                    </div>
                                    <TextPostList feed={feed} />
                                    <p id="load" className="tc code orange fw6 f4">Loading...</p>
                                </div>
                        </div>
                    </div>
                </div>
    );
}

export default AdbillBoard;