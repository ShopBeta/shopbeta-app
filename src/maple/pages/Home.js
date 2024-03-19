import { render } from "@testing-library/react";
import React from "react";
import '../assets/css/global.css'
import Navbar from '../components/NavBar';
import { HomeHeader } from '../components/Header';
import { Link } from "react-router-dom";
import { HomeCarousel } from "../components/HomeCarousel";
import Product from "../components/Product";
// import { NetworkError }from "./indexes/ErrorPages"


const Home = () => {

    render()
        return(
                <div className="">
                    <div>
                        <HomeHeader />
                        
                        <main>
                            <div className="pt5 navbar navbar-expand-lg tc ph2">
                                <div className="pointer pv2 br4 container" style={{fontSize: '30px', fontWeight: '500', backgroundColor: '#f6f6f6'}}>
                                    <Link 
                                        to={"../pages/search"} className="link black" title="search">
                                        <span className="navbar-brand">
                                            <i className="fi fi-rs-search f3 ph2"></i> 
                                            <small className="f5 gray ph3">Search</small>
                                        </span>
                                    </Link>
                                    <Link 
                                        to={"../pages/visualsearch"} className="link black" title="camera">
                                        <span className="">
                                            <i className="fi fi-rs-camera f3 ph2"></i>  
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className="pt3 pb2">
                                <div className="navbar navbar-expand-lg tc pb3">
                                    <div style={{fontSize: '30px', fontWeight: '500'}} className="br3 container">
                                        <span className="navbar-brand">
                                            <small className="f4">#SpecialForYou</small>
                                        </span>
                                        <span className="hover-blue pointer">
                                            <Link 
                                                to={"..maple/pages/specialoffers"} className="link black">
                                                <small className="f5 red">See all</small>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                                <HomeCarousel />
                            </div>

                            <div className="navbar navbar-expand-lg tc">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="container">
                                    <span className="navbar-brand">
                                        <small className="f4">Category</small>
                                    </span>
                                    <span className="hover-blue pointer">
                                        <Link 
                                            to={"..maple/pages/category"} className="link black">
                                            <small className="f5 red">See all</small>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            <div className="navbar navbar-expand-lg tc">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="pointer pa3 container">
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="clothes">
                                            <i className="f2 navbar-brand red br-pill field-color pa3 bw2 fi fi-rs-tshirt"></i>
                                            <p className="f5 pv2 pr3">Clothes</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="shoes">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-mobile-notch"></i>
                                            <p className="f5 pv2 pr3">Mobile</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi-rs-laptop"></i>
                                            <p className="f5 pv2 pr3">Laptop</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-ring-diamond"></i>
                                            <p className="f5 pv2 pr3">Jewelry</p>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            
                            <div className="navbar navbar-expand-lg tc">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="br3 container">
                                    <span className="navbar-brand">
                                        <small className="f4">Top Sale</small>
                                    </span>
                                    <span className="hover-blue pointer">
                                        <Link 
                                            to={"..maple/pages/topsale"} className="link black">
                                            <small className="f5 red">See all</small>
                                        </Link>
                                    </span>
                                </div>
                            </div>

                            <div className="navbar navbar-expand-lg flex flex-wrap tc pb6">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="pa2 container">
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
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