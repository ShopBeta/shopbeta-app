import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import img from '../assets/images/nike.jpg';
import img2 from '../assets/images/hemesh-patil-Kv1GtuqBVIY-unsplash.jpg';
import { WriteReviewHeader } from "../components/Header";


const WriteReview = () => {

        return(
                <div className="">
                    <div className="">
                        <WriteReviewHeader />

                        <main className="pv5 container">
                            <div className="tc">
                                <div className="container">
                                    <div className="pb2">
                                        <div className="link tj flex flex-wrap black" to={"../maple/pages/userprofile"}>
                                            <span>
                                                <img src={img2} className="br4" alt="review" height= '120px' width= '120px'/>
                                            </span>
                                            <span className="pa2">
                                                <p className="fw6">Light Brown Coat</p>
                                                <p className="pv3">Clothes | <small className="gray f5">Qty: 02 pcs</small></p>
                                                <p className="pb2">$12,500</p>
                                                <span className="f3 pointer">
                                                    <Link 
                                                        to={"../pages/bag"} className="link black">
                                                        <button type="submit" className="button-bg bg-red b--transparent white pa1 ph3 tc br-pill ba f6 pointer pv2">
                                                            Re-order
                                                        </button>
                                                    </Link>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pv3">
                                    <hr />
                                </div>
                                <div className="pv3">
                                    <p className="f3">
                                        Please share your opinion<br /> about the product
                                    </p>
                                </div>
                                <div className="container">
                                    <div className="">
                                        <div className="">
                                            <p className="f5 gray">
                                                What is your rating?
                                            </p>
                                        </div>
                                        <div className="f1 yellow pv3">
                                            <small className="icon-star"></small>
                                            <small className="icon-star ph4"></small>
                                            <small className="icon-star"></small>
                                            <small className="icon-star ph4"></small>
                                            <small className="icon-star"></small>
                                        </div>
                                    </div>
                                </div>
                                <div className="pv3">
                                    <hr />
                                </div>
                                <div className="pb4">
                                    <div className="navbar navbar-expand-lg">
                                        <div style={{fontSize: '40px', fontWeight: '500'}} className="container">
                                            <span className="navbar-brand">
                                                <small className="f5">Add detailed review</small>
                                            </span>
                                            <span className="f3 pointer">
                                                <Link 
                                                    to={"../maple/pages/review"} className="link black">
                                                    <small className="f4 fw6 hover-blue icon-camera"></small>
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pv2">
                                        <textarea id="myInput" name="text" className="field-color b--transparent pa3 br3 ba w-100 h4" placeholder="Enter here" aria-label="With textarea" required></textarea>
                                    </div>
                                    <div className="flex flex-wrap tl">
                                        <div className="pv2">
                                            <span className="pr2">
                                                <img src={img} className="br4" alt="review" height= '160px' width= '150px'/>
                                            </span>
                                            <span className="">
                                                <img src={img2} className="br4" alt="review" height= '160px' width= '150px'/>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>

                        <footer style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black', borderTop: '1px thick black', bottom: '0', left: '0', marginTop: '1rem', padding: '1rem'}}>
                            <div className="pv1 tc">
                                <div className="container">
                                    <div className="">
                                        <Link 
                                            to={"../pages/bag"} className="link black">
                                            <button style={{width: '45%'}} type="submit" className="button-bg field-color hover-white b--transparent red pa2 tc br-pill ba f4 pointer w-50 pv3">
                                                Cancel
                                            </button>
                                        </Link>
                                        <span style={{width: '10%'}}  className="">
                                            <small className="f4 ph2"></small>
                                        </span>
                                        <Link 
                                            to={"../pages/bag"} className="link black">
                                            <button style={{width: '45%'}} type="submit" className="button-bg bg-red b--transparent white pa2 tc br-pill ba f4 pointer w-50 pv3">
                                                Submit
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

export default WriteReview;