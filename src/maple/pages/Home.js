import { render } from "@testing-library/react";
import React from "react";
import '../assets/css/global.css'
import Navbar from '../components/NavBar';
import { HomeHeader } from '../components/Header';
import { Link } from "react-router-dom";
import Product from "../components/Product";
// import { NetworkError }from "./indexes/ErrorPages"


const Home = () => {

    render()
        return(
                <div className="">
                    <div>
                        <header>
                            <HomeHeader />
                        </header>
                        
                        <main className="pv7">
                            <div className="navbar navbar-expand-lg tc">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="container">
                                    <span className="navbar-brand">
                                        <h3 className="">Categories</h3>
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
                                        <h3 className="">For You</h3>
                                    </span>
                                    <span className="hover-blue pointer">
                                        <Link 
                                            to={"..maple/pages/topsale"} className="link black">
                                            <small className="f5 red">See all</small>
                                        </Link>
                                    </span>
                                </div>
                            </div>

                            <div className="navbar navbar-expand-lg flex flex-wrap tc">
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