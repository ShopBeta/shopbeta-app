import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import './Home.css';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import logo from '../images/shopbeta logo.png'
import { TextPostList } from '../containers/PostCardList';
import Preloader from "../components/Preloader";
import { NetworkError }from "./indexes/ErrorPages"


const AdbillBoard = () => {

    const me = localStorage.getItem("meId")
    console.log(me)

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
                    <div>
                        <nav className="bg-white fw5 navbar navbar-expand-lg tc pv1" style={{position: 'fixed', width: '100%', borderBottom: '1px thin black'}}>
                            <div style={{fontSize: '29px'}} className="ph2 container">
                                <span className='navbar-brand' style={{fontSize: '12px', fontWeight: '500'}}>
                                    <img src={logo} alt="logo" className="" width="50px" height="50px" />
                                </span>  
                                <span className="navbar-brand">
                                    <h3 className="code">AdbillBoard</h3>
                                </span>
                                {!me || <span className="navbar-brand">
                                    <Link to={"../assets/vendor/Profile"} title="profile">
                                        <img src={`https://shopbeta-api.onrender.com/users/${me}/avatar`} alt="user" className="br4 pointer" width="45px" height="45px" />
                                    </Link>
                                </span>}
                                {!me &&  <span className="navbar-brand">
                                    <Link to={"../assets/indexes/Login"} className="pointer">
                                        <small className="f3 orange hover-blue">Login</small>
                                    </Link>
                                </span>}
                            </div>
                        </nav>
                    </div>
                    <div className="pa1 pv5 tc">
                        <div className="dib tc">
                            <div id="error" style={{display: 'none'}} className="tc">
                                <NetworkError />
                            </div>
                            <div className="pv4">
                                <TextPostList feed={feed} />
                            </div>
                            <div id="load" className="tc pv7">
                                <div className="spinner">
                                    <span className="spinner-rotate">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                <Navbar />
            </div>
        );
    }

export default AdbillBoard;