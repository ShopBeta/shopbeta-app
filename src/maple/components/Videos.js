import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import img from '../assets/images/nike.jpg'
import Comment from "../components/Comment";

const Video = () => {

    return(
            <div className="pv2">
                <div className="container pv3" style={{width: '360px'}}>
                    {/* <div className="pv2">
                        <nav className="navbar navbar-expand-lg">
                            <div style={{fontSize: '29px'}} className="container">
                                <span className="navbar-brand pointer">
                                    <i className="f4 fi fi-rs-heart"></i>
                                    <small className="f5 pl2">5</small> 
                                </span>
                                <span className="navbar-brand pointer">
                                    <i className="f4 fi fi-rs-comment-dots"></i>
                                    <small className="f5 pl2">8</small> 
                                </span>
                                <span className="navbar-brand pointer">
                                    <i className="f4 fi fi-rs-bookmark"></i> 
                                    <small className="f5 pl2">12</small> 
                                </span>
                                <span className="pointer">
                                    <i className="f4 fi fi-rs-share"></i> 
                                </span>
                            </div>
                        </nav>
                    </div> */}
                    <div className="navbar navbar-expand-lg bg-transparent tc pv1" style={{position: 'fixed', bottom: '7rem', right: '0rem', marginTop: '1rem', padding: '1rem'}}>
                        <div className="pv3">
                            <div className="navbar navbar-expand-lg">
                                <div style={{fontSize: '29px'}} className="container">
                                    <p className="navbar-brand pointer">
                                        <i className="f4 fi fi-rs-heart"></i>
                                        <small className="f5 pl2">5</small> 
                                    </p>
                                    <p className="navbar-brand pointer">
                                        <i className="f4 fi fi-rs-comment-dots"></i>
                                        <small className="f5 pl2">8</small> 
                                    </p>
                                    <p className="navbar-brand pointer">
                                        <i className="f4 fi fi-rs-bookmark"></i> 
                                        <small className="f5 pl2">12</small> 
                                    </p>
                                    <p className="pointer">
                                        <i className="f4 fi fi-rs-share"></i> 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pv2">
                        <div className="container pa3">
                            <p className="tj f5">
                                This HTML file is a template. If you open it directly in the browser, you will see an empty page. You can add webfonts, meta tags, or analytics to this file. The build step will place the bundled scripts into the tag.
                            </p>
                        </div>
                        <div className="container">
                            <img src={img} alt="media" className="tc br4" width="100%" height="auto" />
                        </div>
                        <div className="container pv3">
                            <p className="f5 gray">
                                2:23AM | 23, Feb 2024
                            </p>
                        </div>
                    </div>
                    <div className="navbar navbar-expand-lg tc bg-transparent">
                        <div style={{fontSize: '30px', fontWeight: '500'}} className="container">
                            <span className="navbar-brand f4 pointer">
                                <div className="">
                                    <Link className="link tj flex flex-wrap black" to={"/maple/pages/userprofile"}>
                                        <span>
                                            <img src={img} alt="avatar" className="br-100" width="50px" height="50px" />
                                        </span>
                                        <span className="pa2">
                                            <p className="f5">John Doe</p>
                                            <p className="pv2 gray f6">@John Doe</p>
                                        </span>
                                    </Link>
                                </div>
                            </span>
                            <span className="">
                                <button className="f5 hover-white button-bg br-pill b--transparent field-color pointer red ph4 pa2">
                                    <i className="f5 fi fi-rs-heart"></i>
                                    Follow
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="pv2">
                        <hr />
                    </div>
                </div>
            </div>
    );
}

const ViewVideo = () => {

    return(
            <div className="pv2">
                <div className="container pv3" style={{width: '360px'}}>
                    <div className="navbar navbar-expand-lg tc">
                        <div style={{fontSize: '30px', fontWeight: '500'}} className="container">
                            <span className="navbar-brand f4 pointer">
                                <div className="">
                                    <Link className="link tj flex flex-wrap black" to={"/maple/pages/userprofile"}>
                                        <span>
                                            <img src={img} alt="avatar" className="br-100" width="50px" height="50px" />
                                        </span>
                                        <span className="pa2">
                                            <p className="f5">John Doe</p>
                                            <p className="pv2 gray f6">@John Doe</p>
                                        </span>
                                    </Link>
                                </div>
                            </span>
                            <span className="">
                                <button className="f5 hover-white button-bg br-pill b--transparent field-color pointer red ph4 pa2">
                                    <i className="f5 fi fi-rs-heart"></i>
                                    Follow
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="pv2">
                        <nav className="navbar navbar-expand-lg">
                            <div style={{fontSize: '29px'}} className="container">
                                <span className="navbar-brand pointer">
                                    <i className="f4 fi fi-rs-heart"></i>
                                    <small className="f5 pl2">5</small> 
                                </span>
                                <span className="navbar-brand pointer">
                                    <i className="f4 fi fi-rs-comment-dots"></i>
                                    <small className="f5 pl2">8</small> 
                                </span>
                                <span className="navbar-brand pointer">
                                    <i className="f4 fi fi-rs-bookmark"></i> 
                                    <small className="f5 pl2">12</small> 
                                </span>
                                <span className="pointer">
                                    <i className="f4 fi fi-rs-share"></i> 
                                </span>
                            </div>
                        </nav>
                    </div>
                    <div className="pv2">
                        <hr />
                    </div>
                    <div className="pv2">
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                </div>
            </div>
    );
}

export {
    Video,
    ViewVideo
} 