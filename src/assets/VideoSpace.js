import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import './Home.css';
import Navbar from '../components/Navbar';
import { VideoPostList } from '../containers/PostCardList';
import Preloader from "../components/Preloader";
import { VideoSideBar } from "../components/SideBars";
import BlankPage from "./indexes/BlankPage";
import { NetworkError }from "./indexes/ErrorPages"


const VideoSpace = () => {

    const [video, setVideo] = useState([])
    useEffect(() => {
        fetch("https://shopbeta-api.onrender.com/video", {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => {
            setVideo(data)
            
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
                    <Navbar />
                    <div className="">
                        <div className="pa1 pv5 tc">
                            <h3 className="tl pt5 pa4 code f3 ph4">VideoSpace</h3>
                                <div className="dib tc">
                                    <div className="dtc bg-blue">
                                        <VideoSideBar />
                                    </div>
                                    <div id="error" style={{display: 'none'}} className="tc">
                                        <NetworkError />
                                    </div>
                                    {video.length === 0 &&  <div id="blank" className="tc">
                                        <BlankPage />
                                        <div className="tc">
                                            <p className="pv4 fw6 ph5">
                                                <small className="green f4">Post Videos about your services or products</small>
                                            </p>
                                        </div>
                                    </div>}
                                    <VideoPostList video={video} />
                                    <p id="load" className="tc code orange fw6 f4">Loading videos...</p>
                                </div>
                        </div>
            </div>
        </div>
    );
}

export default VideoSpace;