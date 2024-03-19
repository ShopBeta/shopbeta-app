import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { ReviewHeader } from "../components/Header";
import ReviewCard from "../components/Review";


const Reviews = () => {

        return(
                <div className="">
                    <div className="">
                        <ReviewHeader />

                        <main className="pv5">
                            {/* <div className="navbar navbar-expand-lg pb4 tc">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="container">
                                    <span className="navbar-brand">
                                    <small className="f4 icon-arrow-left pr3"></small>
                                        <small className="f2">Ratings & Reviews</small>
                                    </span>
                                    <span className="hover-blue pointer">
                                        <small className="f5 red"></small>
                                    </span>
                                </div>
                            </div> */}
                            <div className="container">
                                <div className="navbar navbar-expand-lg tc">
                                    <div className="container">
                                        <span className="navbar-brand tc">
                                            <div className="">
                                                <p className="f1">
                                                    4.5
                                                </p>
                                            </div>
                                            <div className="f2 yellow pv3">
                                                <small className="icon-star"></small>
                                                <small className="icon-star ph2"></small>
                                                <small className="icon-star"></small>
                                                <small className="icon-star ph2"></small>
                                                <small className="icon-star"></small>
                                            </div>
                                            <div className="f4">
                                                (107 Reviews)
                                            </div>
                                        </span>
                                        <span className="">
                                            <div className="lh-solid navbar navbar-expand-lg tc">
                                                <div className="container">
                                                    <span className="navbar-brand tc">
                                                        <p className="f4">
                                                            5
                                                        </p>
                                                    </span>
                                                    <span className="">
                                                        <div className="red">
                                                            <progress id="file" value={82} max={100}></progress>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="lh-solid navbar navbar-expand-lg tc">
                                                <div className="container">
                                                    <span className="navbar-brand tc">
                                                        <p className="f4">
                                                            4
                                                        </p>
                                                    </span>
                                                    <span className="">
                                                        <div className="red">
                                                            <progress id="file" value={62} max={100}></progress>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="lh-solid navbar navbar-expand-lg tc">
                                                <div className="container">
                                                    <span className="navbar-brand tc">
                                                        <p className="f4">
                                                            3
                                                        </p>
                                                    </span>
                                                    <span className="">
                                                        <div className="red">
                                                            <progress id="file" value={32} max={100}></progress>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="lh-solid navbar navbar-expand-lg tc">
                                                <div className="container">
                                                    <span className="navbar-brand tc">
                                                        <p className="f4">
                                                            2
                                                        </p>
                                                    </span>
                                                    <span className="">
                                                        <div className="red">
                                                            <progress id="file" value={12} max={100}></progress>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* <div className="lh-solid navbar navbar-expand-lg tc">
                                                <div className="container">
                                                    <span className="navbar-brand tc">
                                                        <p className="f4">
                                                            1
                                                        </p>
                                                    </span>
                                                    <span className="">
                                                        <div className="red">
                                                            <progress id="file" value={5} max={100}></progress>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div> */}
                                        </span>
                                    </div>
                                </div>
                                <div className="pv3">
                                    <hr />
                                </div>
                                <div className="pb4">
                                    <div style={{position: 'sticky', width: '100%', backgroundColor: '#ffffff'}}>
                                        <div className="container">
                                            <div className="br4 field-color w-100 bw2">
                                                <span style={{width: '15%'}} className="navbar-brand">
                                                    <i className="fi fi-rs-search f3 pa3"></i> 
                                                </span>
                                                <span className="">
                                                    <input style={{width: '80%'}} type="search" className="b--transparent ba field-color br3 pa3 f4" placeholder="Search in reviews"/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="navbar navbar-expand-lg pv3 tc">
                                            <div style={{fontSize: '30px', fontWeight: '500'}} className="container">
                                                <span className="navbar-brand hover-blue pointer">
                                                    <small className="f5 br-pill bg-red b--transparent white ph3 pa2">Verified</small>
                                                </span>
                                                <span className="navbar-brand hover-white pointer">
                                                    <small className="f5 button-bg br-pill b--transparent field-color ph3 pa2">Latest</small>
                                                </span>
                                                <span className="navbar-brand hover-white pointer">
                                                    <small className="f5 button-bg br-pill b--transparent field-color ph3 pa2">Detailed</small>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pv2">
                                        <hr />
                                    </div>
                                    <ReviewCard />
                                </div>
                            </div>
                        </main>

                        <footer style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black', borderTop: '1px thick black', bottom: '0', left: '0', marginTop: '1rem', padding: '1rem'}}>
                            <div className="pv1 tc">
                                <div className="container">
                                    <div className="">
                                        <Link 
                                            to={"../pages/bag"} className="link black">
                                            <button type="submit" className="button-bg bg-red b--transparent white pa2 tc br-pill ba f4 pointer w-100 pv3">
                                                <i className="f4 pr3 fi fi-rs-pencil"></i>
                                                Write Review
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
    );
}

export default Reviews;