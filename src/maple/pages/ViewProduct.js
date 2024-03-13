import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import img from '../assets/images/nike.jpg'
import img2 from '../assets/images/homes-gardens.jpg'
import img3 from '../assets/images/tst-image3.jpg'
import { ViewProductHeader } from "../components/Header";


const ViewProduct = () => {

        return(
                <div className="">
                    <div className="">
                        <ViewProductHeader />

                        <main className="navbar navbar-expand-lg pv4">
                            <div className="container pv3">
                                <span className="br3" style={{backgroundImage: `url(${img})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", height: '450px', width: '100%'}}>
                                    <div style={{bottom: '0', left: '0', marginTop: '25rem', padding: '1rem'}} className="pointer">
                                        <div className="navbar navbar-expand-lg tc">
                                            <div className="field-color br3 pa2 container">
                                                <span className="navbar-brand">
                                                    <img src={img} alt="product img" className="tc br3" width="50px" height="50px" />
                                                </span>
                                                <span className="navbar-brand">
                                                    <img src={img2} alt="product img" className="tc br3" width="50px" height="50px" />
                                                </span>
                                                <span className="navbar-brand">
                                                    <img src={img} alt="product img" className="tc br3" width="50px" height="50px" />
                                                </span>
                                                <span className="navbar-brand">
                                                    <img src={img3} alt="product img" className="tc br3" width="50px" height="50px" />
                                                </span>
                                                <span className="">
                                                    <small className="f4 white br3 pa3 bg-red">+10</small>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <span className="pb4">
                                    <div className="navbar navbar-expand-lg tc">
                                        <div style={{fontSize: '30px', fontWeight: '500'}} className="container">
                                            <span className="navbar-brand">
                                                <small className="f5 gray">Furniture</small>
                                            </span>
                                            <span className="hover-blue gray f5">
                                                <small className="f5 red pr2 icon-star"></small>
                                                4.5
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pv2 container">
                                        <p className="f3">
                                            Modern Jordan Shoe
                                        </p>
                                    </div>
                                    <div className="navbar navbar-expand-lg tc">
                                        <div style={{fontSize: '30px', fontWeight: '500'}} className="container">
                                            <span className="navbar-brand">
                                                <small className="f3 pr2">$450</small>
                                                <small className="f4 line-through">$500</small>
                                            </span>
                                            <span className="hover-blue gray f5">
                                                <small className="f5 pr2 icon-heart"></small>
                                                240 Liked
                                            </span>
                                        </div>
                                    </div>
                                    <div className="navbar navbar-expand-lg tc">
                                        <div style={{fontSize: '30px', fontWeight: '500'}} className="container">
                                            <span className="f4 pointer">
                                                <p className="pv2 tl">Seller</p>
                                                <div className="">
                                                    <Link className="link tj flex flex-wrap black" to={"../maple/pages/userprofile"}>
                                                        <span>
                                                            <img src={img} alt="avatar" className="br-100" width="50px" height="50px" />
                                                        </span>
                                                        <span className="pa2">
                                                            <p className="f5">John Doe</p>
                                                            <p className="pv2 gray f6">Manager</p>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </span>
                                            <span className="pointer">
                                                <i className="f4 br-pill field-color pa3 red fi fi-rs-shop"></i>
                                                <small className="f4 ph2"></small>
                                                <i className="f4 br-pill field-color pa3 red fi fi-rs-comment"></i>
                                                {/* <small className="f4 br-pill field-color pa3 red icon-bubbles"></small> */}
                                                {/* <small className="f4 ph2"></small> */}
                                                {/* <small className="f4 br-pill field-color pa3 red icon-phone"></small> */}
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="navbar navbar-expand-lg tc">
                                        <div style={{fontSize: '40px', fontWeight: '500'}} className="pv2 container">
                                            <span className="navbar-brand pointer">
                                                <small className="f4 red">Description</small>
                                            </span>
                                            <span className="f4 pointer">
                                                <Link 
                                                    to={"../maple/pages/review"} className="link black">
                                                    <small className="f4 hover-blue">Review</small>
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{fontSize: '29px'}} className="container">
                                        <p className="gray f5">
                                            This HTML file is a template. If you open it directly in the browser, you will see an empty page. 
                                            You can add webfonts, meta tags, or analytics to this file. The build step will place the bundled scripts into the tag.
                                            <small className="red f5 pointer pl2">Read more</small>
                                        </p>
                                    </div>
                                    <div className="pv2 container">
                                        <p className="pv3 f4">Select size and color</p>
                                        <div className="">
                                            <span className="">
                                                <select style={{width: '45%'}} name="size" className="size b--transparent ba field-color br3 pa3" required >
                                                    <option>Size</option>
                                                    <option>XS</option>
                                                    <option>S</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                    <option>XL</option>
                                                </select>
                                            </span>
                                            <span className="ph2">
                                            </span>
                                            <span className="">
                                                <select style={{width: '45%'}} name="color" className="color b--transparent ba field-color br3 pa3 w-70" placeholder="Enter Phone Number" required >
                                                    <option>Color</option>
                                                    <option>Black</option>
                                                    <option>White</option>
                                                    <option>Red</option>
                                                    <option>Blue</option>
                                                    <option>Yellow</option>
                                                </select>
                                            </span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </main>

                        <footer style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black', borderTop: '1px thick black', bottom: '0', left: '0', marginTop: '1rem', padding: '1rem'}}>
                            <div className="pv1 tc">
                                <div>
                                    <span className="">
                                        <Link 
                                            to={"../pages/bag"} className="link black">
                                            <button type="submit" className="button-bg bg-red white pa2 tc br-pill ba f5 pointer w-80 pv3">
                                                <i className="f5 pr3 fi fi-rs-shopping-bag"></i>
                                                Add to Cart
                                            </button>
                                        </Link>
                                    </span>
                                    <span className="pl3">
                                        <small className="f4 br-pill field-color pa3 fw6 icon-heart"></small>
                                    </span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
    );
}

export default ViewProduct;