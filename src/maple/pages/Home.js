import { render } from "@testing-library/react";
import React from "react";
import '../assets/css/global.css'
import Navbar from '../components/NavBar';
import { HomeHeader } from '../components/Header';
import { Link } from "react-router-dom";
import img from '../assets/images/nike.jpg'
// import { NetworkError }from "./indexes/ErrorPages"


const Home = () => {

    render()
        return(
                <div className="">
                    <div>
                        <HomeHeader />
                        
                        <main>
                            <div className="pv5 navbar navbar-expand-lg tc ph2">
                                <div className="pointer pv2 br4 container" style={{fontSize: '30px', fontWeight: '500', backgroundColor: '#f6f6f6'}}>
                                    <Link 
                                        to={"../pages/search"} className="link black" title="search">
                                        <span className="navbar-brand">
                                            <i className="fi fi-rs-search f3 ph2"></i> 
                                            <small className="f4 gray ph3">Search</small>
                                        </span>
                                    </Link>
                                    <Link 
                                        to={"../pages/camera"} className="link black" title="camera">
                                        <span className="">
                                            <i className="fi fi-rs-camera f3 ph2"></i>  
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className="navbar navbar-expand-lg tc">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="container">
                                    <span className="navbar-brand">
                                        <small className="f4">Categories</small>
                                    </span>
                                    <span className="hover-blue pointer">
                                        <small className="f5 red">See all</small>
                                    </span>
                                </div>
                            </div>
                            <div className="navbar navbar-expand-lg tc">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="pointer pa3 container">
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="clothes">
                                            <i className="f2 navbar-brand red br-pill field-color pa3 bw2 fi fi-rs-shirt-long-sleeve"></i>
                                            <p className="f5 pv2 pr3">Clothes</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="shoes">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-shoe-prints"></i>
                                            <p className="f5 pv2 pr3">Shoes</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-headphones"></i>
                                            <p className="f5 pv2 pr3">Electronics</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-watch"></i>
                                            <p className="f5 pv2 pr3">Watch</p>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            
                            <div className="navbar navbar-expand-lg tc">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="br3 container">
                                    <span className="navbar-brand">
                                        <small className="f4">#SpecialForYou</small>
                                    </span>
                                    <span className="navbar-brand hover-blue pointer">
                                        <small className="f5 red">See all</small>
                                    </span>
                                </div>
                            </div>

                            {/* <div className="tc">
                                <div id="error" style={{display: 'none'}} className="tc">
                                    <NetworkError />
                                </div>
                                <div id="load" className="tc">
                                    <div className="spinner">
                                        <span className="spinner-rotate">
                                        </span>
                                    </div>
                                </div>
                            </div> */}

                            <div className="navbar navbar-expand-lg tc pb6">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="ph3 container">
                                    <span className="pv3">
                                        <Link 
                                            to={"../maple/pages/viewproduct"} className="link black" title="view product">
                                            <div className="br3" style={{backgroundImage: `url(${img})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", height: '170px', width: '170px'}}>
                                                <div className="navbar navbar-expand-lg white">
                                                    <span className="navbar-brand">
                                                    </span>
                                                    <span className="f3 pa2">
                                                        <i className="ph2 icon-heart"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="navbar navbar-expand-lg tc">
                                                <span className="f4 navbar-brand">
                                                    <small className="">Jordan Shoe</small>
                                                </span>
                                                <span className="f6">
                                                    <small className="f6 red pr2 icon-star"></small>
                                                    4.5
                                                </span>
                                            </div>
                                            <p className="f4 tl">
                                                <small className="">$23,809.09</small>
                                                {/* <small className="f6 ph2 line-through">USD 23,809.09</small> */}
                                            </p>
                                        </Link>
                                    </span>

                                    <span className="pv3">
                                        <Link 
                                            to={"../maple/pages/viewproduct"} className="link black" title="view product">
                                            <div className="br3" style={{backgroundImage: `url(${img})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", height: '170px', width: '170px'}}>
                                                <div className="navbar navbar-expand-lg white tc">
                                                    <span className="navbar-brand">
                                                    </span>
                                                    <span className="f3 pa2">
                                                        <i className="ph2 icon-heart"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="navbar navbar-expand-lg tc">
                                                <span className="f4 navbar-brand">
                                                    <small className="">Jordan Shoe</small>
                                                </span>
                                                <span className="f6">
                                                    <small className="f6 red pr2 icon-star"></small>
                                                    4.5
                                                </span>
                                            </div>
                                            <p className="f4 tl">
                                                <small className="">$23,809.09</small>
                                                {/* <small className="f6 ph2 line-through">USD 23,809.09</small> */}
                                            </p>
                                        </Link>
                                    </span>

                                    <span className="pv3">
                                        <Link 
                                            to={"../maple/pages/viewproduct"} className="link black" title="view product">
                                            <div className="br3" style={{backgroundImage: `url(${img})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", height: '170px', width: '170px'}}>
                                                <div className="navbar navbar-expand-lg white tc">
                                                    <span className="navbar-brand">
                                                    </span>
                                                    <span className="f3 pa2">
                                                        <i className="ph2 icon-heart"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="navbar navbar-expand-lg tc">
                                                <span className="f4 navbar-brand">
                                                    <small className="">Jordan Shoe</small>
                                                </span>
                                                <span className="f6">
                                                    <small className="f6 red pr2 icon-star"></small>
                                                    4.5
                                                </span>
                                            </div>
                                            <p className="f4 tl">
                                                <small className="">$23,809.09</small>
                                                {/* <small className="f6 ph2 line-through">USD 23,809.09</small> */}
                                            </p>
                                        </Link>
                                    </span>

                                    <span className="pv3">
                                        <Link 
                                            to={"../maple/pages/viewproduct"} className="link black" title="view product">
                                            <div className="br3" style={{backgroundImage: `url(${img})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", height: '170px', width: '170px'}}>
                                                <div className="navbar navbar-expand-lg white tc">
                                                    <span className="navbar-brand">
                                                    </span>
                                                    <span className="f3 pa2">
                                                        <i className="ph2 icon-heart"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="navbar navbar-expand-lg tc">
                                                <span className="f4 navbar-brand">
                                                    <small className="">Jordan Shoe</small>
                                                </span>
                                                <span className="f6">
                                                    <small className="f6 red pr2 icon-star"></small>
                                                    4.5
                                                </span>
                                            </div>
                                            <p className="f4 tl">
                                                <small className="">$23,809.09</small>
                                                {/* <small className="f6 ph2 line-through">USD 23,809.09</small> */}
                                            </p>
                                        </Link>
                                    </span>

                                    <span className="pv3">
                                        <Link 
                                            to={"../maple/pages/viewproduct"} className="link black" title="view product">
                                            <div className="br3" style={{backgroundImage: `url(${img})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", height: '170px', width: '170px'}}>
                                                <div className="navbar navbar-expand-lg white tc">
                                                    <span className="navbar-brand">
                                                    </span>
                                                    <span className="f3 pa2">
                                                        <i className="ph2 icon-heart"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="navbar navbar-expand-lg tc">
                                                <span className="f4 navbar-brand">
                                                    <small className="">Jordan Shoe</small>
                                                </span>
                                                <span className="f6">
                                                    <small className="f6 red pr2 icon-star"></small>
                                                    4.5
                                                </span>
                                            </div>
                                            <p className="f4 tl">
                                                <small className="">$23,809.09</small>
                                                {/* <small className="f6 ph2 line-through">USD 23,809.09</small> */}
                                            </p>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </main>

                        <footer>
                            <Navbar />
                        </footer>
                    </div>
                </div>
            );
        }

export default Home;