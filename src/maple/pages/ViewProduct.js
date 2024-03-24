import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import img from '../assets/images/nike.jpg'
import img2 from '../assets/images/homes-gardens.jpg'


const ViewProduct = () => {

        return(
                <div className="">
                    <div className="">

                        <main className="navbar navbar-expand-lg">
                            <div className="container pb5">
                                <span className="br3" style={{backgroundImage: `url(${img})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", height: '450px', width: '100%'}}>
                                    <div className="navbar navbar-expand-lg tc">
                                        <div className="pv2 container">
                                            <span className="navbar-brand pointer">
                                                <small className="f3 hover-red white icon-arrow-left"></small>
                                            </span>
                                            <span className="f2 pointer">
                                                <small className="hover-red pr2 white icon-heart"></small>                
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{bottom: '0', left: '0', marginTop: '18rem', padding: '1rem'}} className="pointer">
                                        <div className="navbar navbar-expand-lg tc">
                                            <div className="field-color br3 pa2 container">
                                                <span className="navbar-brand">
                                                    <img src={img} alt="Modern Jordan Shoe" className="tc br3" width="50px" height="50px" />
                                                </span>
                                                <span className="navbar-brand">
                                                    <img src={img2} alt="Modern Jordan Shoe" className="tc br3" width="50px" height="50px" />
                                                </span>
                                                <span className="navbar-brand">
                                                    <img src={img} alt="Modern Jordan Shoe" className="tc br3" width="50px" height="50px" />
                                                </span>
                                                <span className="">
                                                    <small className="f4 white br3 pa3 bg-red">+5</small>
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
                                                <small className="f3 ">$10,500</small>
                                                <small className="f5 ph2 line-through">$40,500</small>
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
                                                            <p className="pv2 gray f6">Joined Maple in 2014</p>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </span>
                                            <span className="pointer">
                                                <i className="f3 br-pill field-color pa3 red fi fi-rs-shop"></i>
                                                <small className="f4 ph2"></small>
                                                <i className="f3 br-pill field-color pa3 red fi fi-rs-comment"></i>
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="pv2">
                                        <hr />
                                    </div>

                                    <div className="">
                                        <div className="navbar navbar-expand-lg">
                                            <div style={{fontSize: '40px', fontWeight: '500'}} className="container">
                                                <span className="navbar-brand pointer">
                                                    <small className="f4 red">Description</small>
                                                </span>
                                                <span className="f4 pointer">
                                                    <Link 
                                                        to={"../maple/pages/reviews"} className="link black">
                                                        <small className="f4 hover-blue">Reviews</small>
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{fontSize: '29px'}} className="pv2 container">
                                            <p className="gray tj f5">
                                                This HTML file is a template. If you open it directly in the browser, you will see an empty page. 
                                                You can add webfonts, meta tags, or analytics to this file. The build step will place the bundled scripts into the tag.
                                                <small className="red f5 pointer pl2">Read more</small>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pv3">
                                        <hr />
                                    </div>

                                    <div className="">
                                        <p className="f4 pt2 container">Product Details</p>
                                        <div className="">
                                            <div className="navbar navbar-expand-lg tc">
                                                <div style={{fontSize: '30px', fontWeight: '500'}} className="container">
                                                    <span className="navbar-brand">
                                                        <small className="f5 gray">Condition</small>
                                                    </span>
                                                    <span className="hover-blue f5">
                                                        Used - good
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="navbar navbar-expand-lg tc">
                                                <div style={{fontSize: '30px', fontWeight: '500'}} className="container">
                                                    <span className="navbar-brand">
                                                        <small className="f5 gray">Brand</small>
                                                    </span>
                                                    <span className="hover-blue f5">
                                                        Nike
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </main>

                        <footer style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black', borderTop: '1px thick black', bottom: '0', left: '0', marginTop: '1rem', padding: '1rem'}}>
                            <div className="pv1 tc">
                                <div className="">
                                    <span className="">
                                        <Link 
                                            to={"../pages/bag"} className="link black">
                                            <button type="submit" className="button-bg bg-red b--transparent white pa2 tc br-pill ba f4 pointer w-80 pv3">
                                                <i className="f4 pr3 fi fi-rs-shopping-bag"></i>
                                                Add to Cart
                                            </button>
                                        </Link>
                                    </span>
                                    <span className="pl3">
                                        <small className="f3 pointer br-pill field-color pa3 fw6 icon-share"></small>
                                    </span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
    );
}

export default ViewProduct;