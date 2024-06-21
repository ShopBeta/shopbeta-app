import { render } from "@testing-library/react";
import React from "react";
import '../assets/css/global.css'
import Navbar from '../components/NavBar';
import { FeedHeader } from '../components/Header';
import { Post } from "../components/Posts";
// import { NetworkError }from "./indexes/ErrorPages"


const Feeds = () => {

    render()
        return(
                <div className="">
                    <div>
                        <header>
                            <FeedHeader />
                        </header>
                        
                        <main>
                            <div className="pv6 field-color">
                                <Post />
                                <Post />
                                <Post />
                                <Post />
                                <Post />
                                <Post />
                            </div>
                        </main>

                        <footer>
                            <div className="">
                                <nav className="navbar navbar-expand-lg bg-transparent tc pv1" style={{position: 'fixed', bottom: '7rem', right: '0rem', marginTop: '1rem', padding: '1rem'}}>
                                    <div className="pv1 bg-transparent">
                                        <div style={{fontSize: '29px'}} className="container">
                                            <span className="navbar-brand pointer">
                                            </span>
                                            <span className="pointer">
                                                <i className="fa fa-plus f3 white bg-red pa4  br-100"></i> 
                                            </span>
                                        </div>
                                    </div>
                                </nav>
                            </div>

                            <Navbar />
                        </footer>
                    </div>
                </div>
            );
        }

export default Feeds;