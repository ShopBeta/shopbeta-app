import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import img from '../assets/images/nike.jpg';
import img2 from '../assets/images/hemesh-patil-Kv1GtuqBVIY-unsplash.jpg';


const ReviewCard = () => {

        return(
                <div className="">
                        <main className="">
                            <div className="container">
                                <div className="navbar navbar-expand-lg">
                                    <div style={{fontSize: '30px', fontWeight: '500'}} className="tc container">
                                        <span className="f4 pointer">
                                            <div className="">
                                                <Link className="link tj flex flex-wrap black" to={"../maple/pages/userprofile"}>
                                                    <span>
                                                        <img src={img} alt="avatar" className="br-100" width="45px" height="45px" />
                                                    </span>
                                                    <span className="">
                                                        <p className="f4 pa3">Dale Thiel</p>
                                                    </span>
                                                </Link>
                                            </div>
                                        </span>
                                        <span className="pointer">
                                            <small className="f5 gray ph2">11 months ago</small>
                                        </span>
                                    </div>
                                </div>
                                <div style={{fontSize: '29px'}} className="pv2 container">
                                    <p className="gray tj f5">
                                        This HTML file is a template. If you open it directly in the browser, you will see an empty page. You can add webfonts, meta tags, or analytics to this file. The build step will place the bundled scripts into the tag.
                                    </p>
                                    <div className="yellow">
                                        <small className="icon-star f5"></small>
                                        <small className="icon-star ph2 f5"></small>
                                        <small className="icon-star f5"></small>
                                        <small className="icon-star ph2 f5"></small>
                                        <small className="icon-star f5"></small>
                                        <small className="pl2 black f5">5.0</small>
                                    </div>
                                </div>
                            </div>
                            <div className="pv2">
                                <hr />
                            </div>
                            <div className="">
                                <div className="navbar navbar-expand-lg">
                                    <div style={{fontSize: '30px', fontWeight: '500'}} className="tc container">
                                        <span className="f4 pointer">
                                            <div className="">
                                                <Link className="link tj flex flex-wrap black" to={"../maple/pages/userprofile"}>
                                                    <span>
                                                        <img src={img} alt="avatar" className="br-100" width="45px" height="45px" />
                                                    </span>
                                                    <span className="">
                                                        <p className="f4 pa3">Dale Thiel</p>
                                                    </span>
                                                </Link>
                                            </div>
                                        </span>
                                        <span className="pointer">
                                            <small className="f5 gray ph2">11 months ago</small>
                                        </span>
                                    </div>
                                </div>
                                <div style={{fontSize: '29px'}} className="pv2 container">
                                    <p className="gray tj f5">
                                        This HTML file is a template. If you open it directly in the browser, you will see an empty page. You can add webfonts, meta tags, or analytics to this file. The build step will place the bundled scripts into the tag.
                                    </p>
                                    <div className="yellow">
                                        <small className="icon-star f5"></small>
                                        <small className="icon-star ph2 f5"></small>
                                        <small className="icon-star f5"></small>
                                        <small className="icon-star ph2 f5"></small>
                                        <small className="icon-star f5"></small>
                                        <small className="pl2 black f5">5.0</small>
                                    </div>
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="container">
                                        <span className="pr2">
                                            <Link 
                                                to={"../maple/pages/viewproduct"} className="link black">
                                                <img src={img} className="br4" alt="review" height= '160px' width= '150px'/>
                                            </Link>
                                        </span>
                                        <span className="">
                                            <Link 
                                                to={"../maple/pages/viewproduct"} className="link black">
                                                <img src={img2} className="br4" alt="review" height= '160px' width= '150px'/>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="pv2">
                                <hr />
                            </div>
                        </main>
                    </div>
        );
    }

export default ReviewCard;